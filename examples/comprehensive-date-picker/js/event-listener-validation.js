/**
 * Event Listener Validation Script
 * Programmatic test to validate event listener duplication fix
 */

// Event listener tracking utility
class EventListenerTracker {
    constructor() {
        this.counts = {
            document: new Map(),
            window: new Map(),
            total: 0
        };
        this.originalAddEventListener = EventTarget.prototype.addEventListener;
        this.originalRemoveEventListener = EventTarget.prototype.removeEventListener;
        this.setupTracking();
    }

    setupTracking() {
        const self = this;
        
        EventTarget.prototype.addEventListener = function(type, listener, options) {
            if (this === document) {
                const count = self.counts.document.get(type) || 0;
                self.counts.document.set(type, count + 1);
                self.counts.total++;
            } else if (this === window) {
                const count = self.counts.window.get(type) || 0;
                self.counts.window.set(type, count + 1);
                self.counts.total++;
            }
            return self.originalAddEventListener.call(this, type, listener, options);
        };

        EventTarget.prototype.removeEventListener = function(type, listener, options) {
            if (this === document) {
                const count = self.counts.document.get(type) || 0;
                if (count > 0) {
                    self.counts.document.set(type, count - 1);
                    self.counts.total--;
                }
            } else if (this === window) {
                const count = self.counts.window.get(type) || 0;
                if (count > 0) {
                    self.counts.window.set(type, count - 1);
                    self.counts.total--;
                }
            }
            return self.originalRemoveEventListener.call(this, type, listener, options);
        };
    }

    getReport() {
        return {
            document: Object.fromEntries(this.counts.document),
            window: Object.fromEntries(this.counts.window),
            total: this.counts.total
        };
    }

    reset() {
        this.counts.document.clear();
        this.counts.window.clear();
        this.counts.total = 0;
    }

    restore() {
        EventTarget.prototype.addEventListener = this.originalAddEventListener;
        EventTarget.prototype.removeEventListener = this.originalRemoveEventListener;
    }
}

// Test suite
class EventListenerTests {
    constructor() {
        this.tracker = new EventListenerTracker();
        this.results = [];
    }

    log(message, status = 'info') {
        const result = { message, status, timestamp: new Date().toISOString() };
        this.results.push(result);
        console.log(`[${status.toUpperCase()}] ${message}`);
        return result;
    }

    async testDuplicationPrevention() {
        this.log('Testing event listener duplication prevention...', 'info');
        
        if (!window.advancedCalendar) {
            return this.log('❌ Advanced calendar not found', 'error');
        }

        this.tracker.reset();
        const initialReport = this.tracker.getReport();

        // Call setupEventListeners multiple times
        for (let i = 0; i < 5; i++) {
            window.advancedCalendar.setupEventListeners();
        }

        const finalReport = this.tracker.getReport();
        
        // Check for duplicates
        const duplicates = [];
        Object.entries(finalReport.document).forEach(([type, count]) => {
            if (count > 1) duplicates.push(`document.${type}: ${count}`);
        });
        
        Object.entries(finalReport.window).forEach(([type, count]) => {
            if (count > 1) duplicates.push(`window.${type}: ${count}`);
        });

        if (duplicates.length > 0) {
            return this.log(`❌ Found duplicate listeners: ${duplicates.join(', ')}`, 'error');
        } else {
            return this.log('✅ No duplicate event listeners detected!', 'success');
        }
    }

    async testResizeHandling() {
        this.log('Testing resize event handling...', 'info');
        
        if (!window.advancedCalendar || !window.advancedCalendar.handleResize) {
            return this.log('❌ Resize handler not found', 'error');
        }

        let callCount = 0;
        const originalMethod = window.advancedCalendar.handleResize;
        
        window.advancedCalendar.handleResize = function() {
            callCount++;
            return originalMethod.call(this);
        };

        // Trigger resize event
        window.dispatchEvent(new Event('resize'));

        // Wait for debounced handler
        await new Promise(resolve => setTimeout(resolve, 200));

        window.advancedCalendar.handleResize = originalMethod;

        if (callCount === 1) {
            return this.log('✅ Resize handler called exactly once', 'success');
        } else {
            return this.log(`❌ Resize handler called ${callCount} times`, 'error');
        }
    }

    async testCleanup() {
        this.log('Testing event listener cleanup...', 'info');
        
        if (!window.advancedCalendar) {
            return this.log('❌ Advanced calendar not found', 'error');
        }

        const calendar = window.advancedCalendar;
        
        if (!calendar.documentListeners || !calendar.windowListeners) {
            return this.log('❌ Listener tracking not available', 'error');
        }

        const initialDocCount = calendar.documentListeners.size;
        const initialWinCount = calendar.windowListeners.size;

        if (initialDocCount === 0 && initialWinCount === 0) {
            return this.log('⚠️ No listeners to clean up', 'warning');
        }

        // Test cleanup
        calendar.removeEventListeners();

        const finalDocCount = calendar.documentListeners.size;
        const finalWinCount = calendar.windowListeners.size;

        if (finalDocCount === 0 && finalWinCount === 0) {
            // Re-setup for continued functionality
            calendar.setupEventListeners();
            return this.log(`✅ Cleanup successful! Removed ${initialDocCount} document and ${initialWinCount} window listeners`, 'success');
        } else {
            return this.log(`❌ Cleanup failed! Document: ${finalDocCount}, Window: ${finalWinCount}`, 'error');
        }
    }

    async testEventDelegation() {
        this.log('Testing event delegation for date cells...', 'info');
        
        if (!window.advancedCalendar) {
            return this.log('❌ Advanced calendar not found', 'error');
        }

        const dateCells = document.querySelectorAll('[data-date]');
        if (dateCells.length === 0) {
            return this.log('⚠️ No date cells found', 'warning');
        }

        // Count individual listeners on date cells (should be minimal due to event delegation)
        let individualListeners = 0;
        dateCells.forEach(cell => {
            // Check if cell has onclick attribute (would indicate individual listeners)
            if (cell.onclick) individualListeners++;
        });

        if (individualListeners === 0) {
            return this.log(`✅ Event delegation working! ${dateCells.length} date cells with no individual click listeners`, 'success');
        } else {
            return this.log(`⚠️ Found ${individualListeners} individual click listeners on date cells`, 'warning');
        }
    }

    async runAllTests() {
        this.log('Starting comprehensive event listener validation...', 'info');
        this.log('=====================================', 'info');

        await this.testDuplicationPrevention();
        await this.testResizeHandling();
        await this.testEventDelegation();
        await this.testCleanup();

        this.log('=====================================', 'info');
        
        const summary = this.generateSummary();
        this.log(summary.message, summary.status);
        
        return this.results;
    }

    generateSummary() {
        const successCount = this.results.filter(r => r.status === 'success').length;
        const errorCount = this.results.filter(r => r.status === 'error').length;
        const warningCount = this.results.filter(r => r.status === 'warning').length;

        if (errorCount === 0) {
            return {
                message: `🎉 All tests passed! ${successCount} success, ${warningCount} warnings`,
                status: 'success'
            };
        } else {
            return {
                message: `❌ Tests failed! ${errorCount} errors, ${successCount} success, ${warningCount} warnings`,
                status: 'error'
            };
        }
    }

    cleanup() {
        this.tracker.restore();
    }
}

// Export for use in browser console or Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { EventListenerTracker, EventListenerTests };
}

// Auto-run if in browser
if (typeof window !== 'undefined') {
    window.EventListenerTests = EventListenerTests;
    window.EventListenerTracker = EventListenerTracker;
    
    // Run tests when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(() => {
                console.log('🔍 Event Listener Validation Script Loaded');
                console.log('Run: new EventListenerTests().runAllTests() to start validation');
            }, 1000);
        });
    } else {
        setTimeout(() => {
            console.log('🔍 Event Listener Validation Script Loaded');
            console.log('Run: new EventListenerTests().runAllTests() to start validation');
        }, 1000);
    }
}
