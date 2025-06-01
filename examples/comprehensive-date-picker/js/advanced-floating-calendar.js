/**
 * Advanced Floating Calendar Widget
 * Complete overhaul with modern features and enhanced UX
 */

class AdvancedFloatingCalendar {
    constructor(options = {}) {
        this.options = {
            container: '#floating-calendar-widget',
            initialDate: new Date(),
            features: {
                draggable: true,
                minimizable: true,
                quickActions: true,
                animations: true,
                themes: ['default', 'dark', 'gradient'],
                rangeSelection: true
            },
            position: { top: 20, right: 20 },
            responsive: true,
            ...options
        };

        this.state = {
            currentDate: new Date(this.options.initialDate),
            selectedDate: null,
            selectedRange: { start: null, end: null },
            isMinimized: false,
            currentTheme: 'default',
            isDragging: false,
            position: this.options.position,
            rangeMode: false,
            animations: true
        };

        this.eventListeners = new Map();
        this.widget = null;
        this.dragState = { isDragging: false, offset: { x: 0, y: 0 } };
        
        // Calendar controller for integration
        this.calendarController = null;
        this.calendarSubscriptions = [];
        
        this.init();
    }    init() {
        this.widget = document.querySelector(this.options.container);
        if (!this.widget) {
            console.error('Calendar widget container not found');
            return;
        }

        // Initialize CalendarController integration
        this.initCalendarController();

        // Start performance monitoring
        this.startPerformanceMonitor();

        this.setupEventListeners();
        this.render();
        this.updatePosition();
        this.loadSavedState();
        
        // Initialize with animation
        setTimeout(() => {
            this.widget.classList.add('initialized');
        }, 100);

        // Smart positioning on load
        this.smartPosition();

        console.log('Advanced Floating Calendar initialized');
        this.showNotification('Advanced Floating Calendar Ready!', 'success');
    }

    setupEventListeners() {
        // Minimize/Maximize toggle
        const minimizeBtn = this.widget.querySelector('.floating-control-btn');
        if (minimizeBtn) {
            minimizeBtn.addEventListener('click', () => this.toggleMinimize());
        }

        // Date cell clicks
        this.widget.addEventListener('click', (e) => {
            if (e.target.classList.contains('floating-date-cell')) {
                this.handleDateClick(e.target);
            }
        });

        // Navigation buttons
        const prevBtn = this.widget.querySelector('.floating-nav-btn');
        const nextBtn = this.widget.querySelector('.floating-nav-btn:last-child');
        
        if (prevBtn) prevBtn.addEventListener('click', () => this.goToPreviousMonth());
        if (nextBtn) nextBtn.addEventListener('click', () => this.goToNextMonth());

        // Quick action buttons
        this.setupQuickActions();

        // Drag functionality
        this.setupDragFunctionality();

        // Keyboard navigation
        this.setupKeyboardNavigation();

        // Window resize handler
        window.addEventListener('resize', () => this.handleResize());
    }

    setupQuickActions() {
        const quickButtons = this.widget.querySelectorAll('.floating-quick-btn');
        quickButtons.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                switch (index) {
                    case 0: this.selectToday(); break;
                    case 1: this.selectTomorrow(); break;
                    case 2: this.selectWeekend(); break;
                    case 3: this.selectNextWeek(); break;
                    case 4: this.clearAll(); break;
                    case 5: this.showTooltips(); break;
                }
            });
        });
    }

    setupDragFunctionality() {
        const header = this.widget.querySelector('.floating-calendar-header');
        
        header.addEventListener('mousedown', (e) => {
            if (e.target.closest('.floating-control-btn')) return;
            
            this.dragState.isDragging = true;
            this.dragState.offset = {
                x: e.clientX - this.widget.offsetLeft,
                y: e.clientY - this.widget.offsetTop
            };
            
            this.widget.classList.add('dragging');
            document.body.style.userSelect = 'none';
        });

        document.addEventListener('mousemove', (e) => {
            if (!this.dragState.isDragging) return;
            
            const newX = e.clientX - this.dragState.offset.x;
            const newY = e.clientY - this.dragState.offset.y;
            
            // Constrain to viewport
            const rect = this.widget.getBoundingClientRect();
            const maxX = window.innerWidth - rect.width;
            const maxY = window.innerHeight - rect.height;
            
            const constrainedX = Math.max(0, Math.min(newX, maxX));
            const constrainedY = Math.max(0, Math.min(newY, maxY));
            
            this.updatePosition({ 
                top: constrainedY, 
                left: constrainedX,
                right: 'auto'
            });
        });

        document.addEventListener('mouseup', () => {
            if (this.dragState.isDragging) {
                this.dragState.isDragging = false;
                this.widget.classList.remove('dragging');
                document.body.style.userSelect = '';
                this.savePosition();
                this.emit('dragEnd', this.state.position);
            }
        });
    }

    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            switch (e.key) {
                case 'ArrowLeft':
                    e.preventDefault();
                    this.navigateDate(-1);
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    this.navigateDate(1);
                    break;
                case 'ArrowUp':
                    e.preventDefault();
                    this.navigateDate(-7);
                    break;
                case 'ArrowDown':
                    e.preventDefault();
                    this.navigateDate(7);
                    break;
                case 'Enter':
                case ' ':
                    e.preventDefault();
                    this.selectFocusedDate();
                    break;
                case 'Escape':
                    e.preventDefault();
                    this.clearSelection();
                    break;
            }
        });
    }    render() {
        const startTime = performance.now();
        
        this.renderCalendar();
        this.renderWeekdayHeaders();
        this.updateMiniView();
        this.updateStatusDisplay();
        
        // Record performance data
        this.recordRenderTime(startTime);
    }

    renderWeekdayHeaders() {
        const container = this.widget.querySelector('#floatingWeekdayHeaders');
        if (!container) return;

        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        container.innerHTML = weekdays.map(day => 
            `<div class="floating-weekday-header">${day}</div>`
        ).join('');
    }

    renderCalendar() {
        const container = this.widget.querySelector('#floatingCalendarDays');
        if (!container) return;

        const year = this.state.currentDate.getFullYear();
        const month = this.state.currentDate.getMonth();
        
        // Update month/year display
        const monthYearDisplay = this.widget.querySelector('#floatingMonthYear');
        if (monthYearDisplay) {
            monthYearDisplay.textContent = new Intl.DateTimeFormat('en-US', { 
                month: 'long', 
                year: 'numeric' 
            }).format(this.state.currentDate);
        }

        // Generate calendar days
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const firstDayOfWeek = firstDay.getDay();
        const daysInMonth = lastDay.getDate();

        const days = [];
        
        // Previous month's days
        const prevMonth = new Date(year, month - 1, 0);
        for (let i = firstDayOfWeek - 1; i >= 0; i--) {
            const date = new Date(year, month - 1, prevMonth.getDate() - i);
            days.push(this.createDateCell(date, true));
        }

        // Current month's days
        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(year, month, day);
            days.push(this.createDateCell(date, false));
        }

        // Next month's days
        const totalCells = Math.ceil(days.length / 7) * 7;
        let nextMonthDay = 1;
        for (let i = days.length; i < totalCells; i++) {
            const date = new Date(year, month + 1, nextMonthDay);
            days.push(this.createDateCell(date, true));
            nextMonthDay++;
        }

        container.innerHTML = days.join('');
        this.attachDateCellListeners();
    }

    createDateCell(date, isOtherMonth) {
        const today = new Date();
        const isToday = this.isSameDate(date, today);
        const isSelected = this.isDateSelected(date);
        const isInRange = this.isDateInRange(date);
        
        const classes = ['floating-date-cell'];
        if (isOtherMonth) classes.push('other-month');
        if (isToday) classes.push('today');
        if (isSelected) classes.push('selected');
        if (isInRange) classes.push('in-range');

        return `
            <div class="${classes.join(' ')}" 
                 data-date="${date.toISOString()}"
                 title="${this.formatDateForTitle(date)}">
                ${date.getDate()}
            </div>
        `;
    }

    attachDateCellListeners() {
        const dateCells = this.widget.querySelectorAll('.floating-date-cell');
        dateCells.forEach(cell => {
            cell.addEventListener('click', () => this.handleDateClick(cell));
            cell.addEventListener('mouseenter', () => this.handleDateHover(cell));
        });
    }    handleDateClick(cell) {
        const dateStr = cell.getAttribute('data-date');
        const date = new Date(dateStr);
        
        if (this.state.rangeMode) {
            this.handleRangeSelection(date);
        } else {
            // Use CalendarController for date selection if available
            this.syncToController('selectDate', date);
            
            // Fallback to internal logic if controller not available
            if (!this.calendarController) {
                this.selectDate(date);
            }
        }
        
        this.render();
        this.updateStatusDisplay();
        this.emit('dateSelect', date);
    }

    handleDateHover(cell) {
        const dateStr = cell.getAttribute('data-date');
        const date = new Date(dateStr);
        
        // Show preview for range selection
        if (this.state.rangeMode && this.state.selectedRange.start && !this.state.selectedRange.end) {
            this.previewRange(this.state.selectedRange.start, date);
        }
    }    handleRangeSelection(date) {
        if (!this.state.selectedRange.start || this.state.selectedRange.end) {
            // Start new range
            this.state.selectedRange = { start: date, end: null };
            
            // Sync with controller for range start
            this.syncToController('selectDate', date);
        } else {
            // Complete range
            const start = this.state.selectedRange.start;
            this.state.selectedRange.end = date < start ? start : date;
            this.state.selectedRange.start = date < start ? date : start;
            
            // Sync with controller for range end
            this.syncToController('selectDate', this.state.selectedRange.end);
            
            this.emit('rangeSelect', this.state.selectedRange);
        }
    }

    previewRange(start, end) {
        const cells = this.widget.querySelectorAll('.floating-date-cell');
        cells.forEach(cell => {
            cell.classList.remove('range-preview');
            const cellDate = new Date(cell.getAttribute('data-date'));
            if (cellDate >= start && cellDate <= end) {
                cell.classList.add('range-preview');
            }
        });
    }    // Quick Action Methods
    selectToday() {
        const today = new Date();
        
        // Use CalendarController for date selection if available
        this.syncToController('selectDate', today);
        
        // Fallback to internal logic if controller not available
        if (!this.calendarController) {
            this.selectDate(today);
        }
        
        this.updateStatusDisplay('Today selected');
        this.animateAction('today');
    }

    selectTomorrow() {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        
        // Use CalendarController for date selection if available
        this.syncToController('selectDate', tomorrow);
        
        // Fallback to internal logic if controller not available
        if (!this.calendarController) {
            this.selectDate(tomorrow);
        }
        
        this.updateStatusDisplay('Tomorrow selected');
        this.animateAction('tomorrow');
    }    selectWeekend() {
        const today = new Date();
        const saturday = new Date(today);
        const sunday = new Date(today);
        
        const daysUntilSaturday = (6 - today.getDay()) % 7;
        const daysUntilSunday = (7 - today.getDay()) % 7;
        
        saturday.setDate(today.getDate() + daysUntilSaturday);
        sunday.setDate(today.getDate() + daysUntilSunday);
        
        // Enable range mode and sync with controller
        this.enableRangeMode();
        this.syncToController('setRangeMode', true);
        
        this.state.selectedRange = { start: saturday, end: sunday };
        
        // Sync range selection with controller
        this.syncToController('selectDate', saturday);
        this.syncToController('selectDate', sunday);
        
        this.render();
        this.updateStatusDisplay('Weekend selected');
        this.animateAction('weekend');
    }

    selectNextWeek() {
        const today = new Date();
        const nextWeekStart = new Date(today);
        const nextWeekEnd = new Date(today);
        
        nextWeekStart.setDate(today.getDate() + 7);
        nextWeekEnd.setDate(today.getDate() + 13);
        
        // Enable range mode and sync with controller
        this.enableRangeMode();
        this.syncToController('setRangeMode', true);
        
        this.state.selectedRange = { start: nextWeekStart, end: nextWeekEnd };
        
        // Sync range selection with controller
        this.syncToController('selectDate', nextWeekStart);
        this.syncToController('selectDate', nextWeekEnd);
        
        this.render();
        this.updateStatusDisplay('Next week selected');
        this.animateAction('next-week');
    }    clearAll() {
        // Clear selection using controller if available
        this.syncToController('clearSelection');
        
        // Fallback to internal logic if controller not available
        if (!this.calendarController) {
            this.state.selectedDate = null;
            this.state.selectedRange = { start: null, end: null };
        }
        
        this.render();
        this.updateStatusDisplay('Selection cleared');
        this.animateAction('clear');
    }

    showTooltips() {
        this.showTemporaryMessage('Keyboard: ←→↑↓ navigate, Enter/Space select, Esc clear');
    }

    // Theme and Appearance Methods
    toggleTheme() {
        const themes = this.options.features.themes;
        const currentIndex = themes.indexOf(this.state.currentTheme);
        const nextIndex = (currentIndex + 1) % themes.length;
        this.state.currentTheme = themes[nextIndex];
        
        // Remove all theme classes
        themes.forEach(theme => {
            this.widget.classList.remove(`${theme}-theme`);
        });
        
        // Add new theme class
        if (this.state.currentTheme !== 'default') {
            this.widget.classList.add(`${this.state.currentTheme}-theme`);
        }
        
        this.updateThemeDisplay();
        this.saveState();
        this.emit('themeChange', this.state.currentTheme);
    }

    toggleMinimize() {
        this.state.isMinimized = !this.state.isMinimized;
        this.widget.classList.toggle('minimized', this.state.isMinimized);
        
        const icon = this.widget.querySelector('#minimizeIcon');
        if (icon) {
            icon.className = this.state.isMinimized ? 
                'fas fa-window-maximize' : 
                'fas fa-window-minimize';
        }
        
        this.updateMiniView();
        this.saveState();
        this.emit(this.state.isMinimized ? 'minimize' : 'maximize');
    }    enableRangeMode() {
        // Sync with controller first
        this.syncToController('setRangeMode', true);
        
        // Fallback to internal logic if controller not available
        if (!this.calendarController) {
            this.state.rangeMode = true;
        }
        
        this.updateModeDisplay();
        this.showTemporaryMessage('Range selection enabled');
    }

    disableRangeMode() {
        // Sync with controller first
        this.syncToController('setRangeMode', false);
        
        // Fallback to internal logic if controller not available
        if (!this.calendarController) {
            this.state.rangeMode = false;
            this.state.selectedRange = { start: null, end: null };
        }
        
        this.updateModeDisplay();
        this.showTemporaryMessage('Single selection enabled');
    }

    // Animation and Effects
    showAnimationDemo() {
        const cells = this.widget.querySelectorAll('.floating-date-cell');
        cells.forEach((cell, index) => {
            setTimeout(() => {
                cell.style.transform = 'scale(1.2) rotate(360deg)';
                cell.style.transition = 'transform 0.6s ease';
                
                setTimeout(() => {
                    cell.style.transform = '';
                }, 600);
            }, index * 50);
        });
        
        this.showTemporaryMessage('Animation demo complete!');
    }

    animateAction(action) {
        this.widget.classList.add(`action-${action}`);
        setTimeout(() => {
            this.widget.classList.remove(`action-${action}`);
        }, 600);
    }    stressTest() {
        this.startPerformanceMonitor();
        const startTime = performance.now();
        let iterations = 0;
        
        const test = () => {
            this.render();
            iterations++;
            
            if (iterations < 100) {
                requestAnimationFrame(test);
            } else {
                const endTime = performance.now();
                const duration = endTime - startTime;
                const report = this.getPerformanceReport();
                
                this.showNotification(
                    `Stress test complete: ${iterations} renders in ${duration.toFixed(2)}ms | Performance Score: ${report.performanceScore}`,
                    'info'
                );
                
                console.log('Performance Report:', report);
            }
        };
        
        test();
    }

    // Utility Methods
    selectDate(date) {
        this.state.selectedDate = new Date(date);
        this.goToDate(date);
    }

    // Navigation Methods - Integrated with CalendarController
    goToPreviousMonth() {
        // Sync with controller first
        this.syncToController('goToPreviousMonth');
        
        // Fallback to internal logic if controller not available
        if (!this.calendarController) {
            const newDate = new Date(this.state.currentDate);
            newDate.setMonth(newDate.getMonth() - 1);
            this.state.currentDate = newDate;
            this.render();
        }
        
        this.emit('monthChange', { 
            month: this.state.currentDate.getMonth(), 
            year: this.state.currentDate.getFullYear() 
        });
    }
    
    goToNextMonth() {
        // Sync with controller first
        this.syncToController('goToNextMonth');
        
        // Fallback to internal logic if controller not available
        if (!this.calendarController) {
            const newDate = new Date(this.state.currentDate);
            newDate.setMonth(newDate.getMonth() + 1);
            this.state.currentDate = newDate;
            this.render();
        }
        
        this.emit('monthChange', { 
            month: this.state.currentDate.getMonth(), 
            year: this.state.currentDate.getFullYear() 
        });
    }
    
    goToDate(date) {
        // Sync with controller first
        this.syncToController('goToMonth', date.getMonth(), date.getFullYear());
        
        // Fallback to internal logic if controller not available
        if (!this.calendarController) {
            this.state.currentDate = new Date(date);
            this.render();
        }
        
        this.emit('dateNavigation', date);
    }

    isDateSelected(date) {
        return this.state.selectedDate && this.isSameDate(date, this.state.selectedDate);
    }

    isDateInRange(date) {
        const { start, end } = this.state.selectedRange;
        return start && end && date >= start && date <= end;
    }

    isSameDate(date1, date2) {
        return date1.toDateString() === date2.toDateString();
    }

    formatDateForTitle(date) {
        return new Intl.DateTimeFormat('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).format(date);
    }

    // UI Update Methods
    updateMiniView() {
        const miniDate = this.widget.querySelector('#miniDate');
        const miniMonth = this.widget.querySelector('#miniMonth');
        
        if (miniDate && miniMonth) {
            const today = new Date();
            miniDate.textContent = today.getDate();
            miniMonth.textContent = today.toLocaleDateString('en-US', { month: 'short' }).toUpperCase();
        }
    }

    updateStatusDisplay(message = null) {
        const statusEl = this.widget.querySelector('#floatingStatus');
        if (!statusEl) return;
        
        if (message) {
            statusEl.textContent = message;
            return;
        }
        
        let status = 'Ready for interaction...';
        
        if (this.state.selectedDate) {
            status = `Selected: ${this.state.selectedDate.toLocaleDateString()}`;
        } else if (this.state.selectedRange.start && this.state.selectedRange.end) {
            const days = Math.ceil((this.state.selectedRange.end - this.state.selectedRange.start) / (1000 * 60 * 60 * 24)) + 1;
            status = `Range: ${days} days selected`;
        }
        
        statusEl.textContent = status;
    }

    updateThemeDisplay() {
        const themeEl = document.querySelector('#widgetTheme');
        if (themeEl) {
            themeEl.textContent = this.state.currentTheme.charAt(0).toUpperCase() + this.state.currentTheme.slice(1);
        }
    }

    updateModeDisplay() {
        const modeEl = document.querySelector('#widgetMode');
        if (modeEl) {
            modeEl.textContent = this.state.rangeMode ? 'Range Selection' : 'Single Selection';
        }
    }

    updatePosition(position = null) {
        if (position) {
            Object.assign(this.state.position, position);
        }
        
        const { top, left, right } = this.state.position;
        this.widget.style.top = typeof top === 'number' ? `${top}px` : top;
        this.widget.style.right = typeof right === 'number' ? `${right}px` : right;
        if (left !== undefined) {
            this.widget.style.left = typeof left === 'number' ? `${left}px` : left;
        }
    }

    showTemporaryMessage(message, duration = 3000) {
        const originalStatus = this.widget.querySelector('#floatingStatus').textContent;
        this.updateStatusDisplay(message);
        
        setTimeout(() => {
            this.updateStatusDisplay(originalStatus);
        }, duration);
    }

    // Enhanced floating calendar notification system
    showNotification(message, type = 'success') {
        // Remove existing notification
        const existingNotification = this.widget.querySelector('.floating-notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        // Create new notification
        const notification = document.createElement('div');
        notification.className = `floating-notification ${type}`;
        notification.textContent = message;
        
        this.widget.appendChild(notification);
        
        // Show notification
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);
        
        // Hide notification after delay
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }, 3000);
    }

    // Enhanced theme management
    applyTheme(themeName) {
        const themes = {
            default: {
                headerGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                backgroundColor: 'rgba(255, 255, 255, 0.98)',
                textColor: '#1f2937'
            },
            dark: {
                headerGradient: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
                backgroundColor: 'rgba(30, 41, 59, 0.95)',
                textColor: '#f8fafc'
            },
            gradient: {
                headerGradient: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 50%, #10b981 100%)',
                backgroundColor: 'linear-gradient(135deg, rgba(168, 85, 247, 0.95) 0%, rgba(59, 130, 246, 0.95) 50%, rgba(16, 185, 129, 0.95) 100%)',
                textColor: '#ffffff'
            }
        };

        const theme = themes[themeName] || themes.default;
        
        // Apply theme styles dynamically
        const header = this.widget.querySelector('.floating-calendar-header');
        if (header) {
            header.style.background = theme.headerGradient;
        }
        
        this.widget.style.background = theme.backgroundColor;
        this.widget.style.color = theme.textColor;
        
        this.showNotification(`${themeName.charAt(0).toUpperCase() + themeName.slice(1)} theme applied`);
    }

    // Smart positioning system
    smartPosition() {
        const rect = this.widget.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        
        let newPosition = { ...this.state.position };
        
        // Adjust horizontal position if too close to edge
        if (rect.right > viewportWidth - 20) {
            newPosition.right = 20;
            newPosition.left = 'auto';
        }
        
        // Adjust vertical position if too close to bottom
        if (rect.bottom > viewportHeight - 20) {
            newPosition.top = viewportHeight - rect.height - 20;
        }
        
        this.updatePosition(newPosition);
    }

    // Performance monitoring
    startPerformanceMonitor() {
        this.performanceData = {
            renderCount: 0,
            renderTimes: [],
            interactionCount: 0,
            startTime: performance.now()
        };
        
        return this.performanceData;
    }

    recordRenderTime(startTime) {
        const renderTime = performance.now() - startTime;
        if (this.performanceData) {
            this.performanceData.renderCount++;
            this.performanceData.renderTimes.push(renderTime);
        }
        return renderTime;
    }

    getPerformanceReport() {
        if (!this.performanceData) return null;
        
        const { renderCount, renderTimes, interactionCount, startTime } = this.performanceData;
        const totalTime = performance.now() - startTime;
        const avgRenderTime = renderTimes.reduce((a, b) => a + b, 0) / renderTimes.length;
        
        return {
            totalRenderCount: renderCount,
            averageRenderTime: avgRenderTime.toFixed(2),
            totalInteractions: interactionCount,
            uptime: (totalTime / 1000).toFixed(2),
            performanceScore: this.calculatePerformanceScore(avgRenderTime, renderCount, totalTime)
        };
    }

    calculatePerformanceScore(avgRenderTime, renderCount, totalTime) {
        // Simple performance scoring algorithm
        let score = 100;
        
        if (avgRenderTime > 16) score -= 20; // 60fps threshold
        if (avgRenderTime > 33) score -= 30; // 30fps threshold
        if (renderCount < 10) score -= 10; // Not enough data
        if (totalTime > 60000) score += 10; // Stability bonus
        
        return Math.max(0, Math.min(100, score));
    }

    // State Management
    saveState() {
        const state = {
            isMinimized: this.state.isMinimized,
            currentTheme: this.state.currentTheme,
            position: this.state.position,
            rangeMode: this.state.rangeMode
        };
        
        localStorage.setItem('advancedCalendarState', JSON.stringify(state));
    }

    savePosition() {
        const position = {
            top: parseInt(this.widget.style.top),
            left: parseInt(this.widget.style.left),
            right: this.widget.style.right === 'auto' ? 'auto' : parseInt(this.widget.style.right)
        };
        
        localStorage.setItem('advancedCalendarPosition', JSON.stringify(position));
    }

    loadSavedState() {
        const savedState = localStorage.getItem('advancedCalendarState');
        const savedPosition = localStorage.getItem('advancedCalendarPosition');
        
        if (savedState) {
            const state = JSON.parse(savedState);
            Object.assign(this.state, state);
            
            if (this.state.isMinimized) {
                this.toggleMinimize();
            }
            
            if (this.state.currentTheme !== 'default') {
                this.widget.classList.add(`${this.state.currentTheme}-theme`);
            }
        }
        
        if (savedPosition) {
            this.state.position = JSON.parse(savedPosition);
            this.updatePosition();
        }
    }

    // Event System
    on(event, callback) {
        if (!this.eventListeners.has(event)) {
            this.eventListeners.set(event, []);
        }
        this.eventListeners.get(event).push(callback);
    }

    emit(event, data) {
        if (this.eventListeners.has(event)) {
            this.eventListeners.get(event).forEach(callback => callback(data));
        }
    }

        // CalendarController Integration
    initCalendarController() {
        try {
            // Use the shared calendar controller instance from the comprehensive demo
            this.calendarController = window.sharedCalendarController;
            
            if (!this.calendarController) {
                console.warn('Shared calendar controller not found, creating new instance...');
                // Fallback: create new instance if shared not available
                this.calendarController = window.CalendarController({
                    initialSelectedDate: this.state.currentDate,
                    firstDayOfWeek: 0, // Sunday first
                    locale: 'en-US',
                    isRangeSelection: this.state.rangeMode
                });
            }
            
            // Subscribe to calendar controller events
            this.setupCalendarBindings();
            
            // Sync initial state
            this.syncFromController();
            
            console.log('Calendar controller integrated with floating calendar');
        } catch (error) {
            console.warn('Calendar controller not available, using internal calendar logic:', error);
        }
    }
    
    setupCalendarBindings() {
        if (!this.calendarController) return;
        
        // Subscribe to selected date changes
        this.calendarController.bindings.selectedDate.subscribe((date) => {
            if (date && !this.isSameDate(date, this.state.selectedDate)) {
                this.state.selectedDate = date;
                this.updateStatusDisplay();
                this.render();
                this.emit('dateSelect', date);
            }
        });
        
        // Subscribe to current date (navigation) changes
        this.calendarController.bindings.currentDate.subscribe((date) => {
            if (date && !this.isSameDate(date, this.state.currentDate)) {
                this.state.currentDate = new Date(date);
                this.render();
                this.emit('monthChange', { month: date.getMonth(), year: date.getFullYear() });
            }
        });
        
        // Subscribe to calendar days updates
        this.calendarController.bindings.calendarDays.subscribe((days) => {
            // Update our internal calendar rendering with controller data
            this.updateCalendarWithControllerData(days);
        });
        
        // Subscribe to range selection changes if available
        if (this.calendarController.bindings.selectedRange) {
            this.calendarController.bindings.selectedRange.subscribe((range) => {
                if (range) {
                    this.state.selectedRange = {
                        start: range.start,
                        end: range.end
                    };
                    this.updateStatusDisplay();
                    this.render();
                    this.emit('rangeSelect', range);
                }
            });
        }
    }
    
    syncFromController() {
        if (!this.calendarController) return;
        
        // Sync current state from controller
        const controllerDate = this.calendarController.bindings.currentDate.current;
        if (controllerDate) {
            this.state.currentDate = new Date(controllerDate);
        }
        
        const selectedDate = this.calendarController.bindings.selectedDate.current;
        if (selectedDate) {
            this.state.selectedDate = new Date(selectedDate);
        }
        
        // Generate calendar days using controller
        if (this.calendarController.methods && this.calendarController.methods.generateCalendarDays) {
            this.updateCalendarWithControllerData(this.calendarController.methods.generateCalendarDays());
        }
    }
    
    syncToController(action, ...args) {
        if (!this.calendarController || !this.calendarController.methods) return;
        
        try {
            switch (action) {
                case 'selectDate':
                    if (this.calendarController.methods.selectDate) {
                        const [date] = args;
                        this.calendarController.methods.selectDate(
                            date.getFullYear(),
                            date.getMonth(),
                            date.getDate()
                        );
                    }
                    break;
                    
                case 'goToMonth':
                    if (this.calendarController.methods.goToMonth) {
                        const [month, year] = args;
                        this.calendarController.methods.goToMonth(month, year);
                    }
                    break;
                    
                case 'goToNextMonth':
                    if (this.calendarController.methods.goToNextMonth) {
                        this.calendarController.methods.goToNextMonth();
                    }
                    break;
                    
                case 'goToPreviousMonth':
                    if (this.calendarController.methods.goToPreviousMonth) {
                        this.calendarController.methods.goToPreviousMonth();
                    }
                    break;
                    
                case 'clearSelection':
                    if (this.calendarController.methods.clearSelection) {
                        this.calendarController.methods.clearSelection();
                    }
                    break;
                    
                case 'setRangeMode':
                    if (this.calendarController.methods.setRangeSelection) {
                        const [enabled] = args;
                        this.calendarController.methods.setRangeSelection(enabled);
                    }
                    break;
            }
        } catch (error) {
            console.warn('Error syncing to controller:', error);
        }
    }
    
    updateCalendarWithControllerData(days) {
        if (!days || !Array.isArray(days)) return;
        
        const container = this.widget.querySelector('#floatingCalendarDays');
        if (!container) return;
        
        // Clear existing content
        container.innerHTML = '';
        
        // Create date cells from controller data
        days.forEach(dayData => {
            const cell = document.createElement('div');
            cell.className = 'floating-date-cell';
            cell.textContent = dayData.day || '';
            
            // Apply styling based on controller data
            if (dayData.isSelected) cell.classList.add('selected');
            if (dayData.isToday) cell.classList.add('today');
            if (dayData.isDisabled) cell.classList.add('disabled');
            if (!dayData.isCurrentMonth) cell.classList.add('other-month');
            if (dayData.isInRange) cell.classList.add('in-range');
            if (dayData.isRangeStart) cell.classList.add('range-start');
            if (dayData.isRangeEnd) cell.classList.add('range-end');
            
            // Store date data for click handling
            if (dayData.date) {
                cell.dataset.date = dayData.date.toISOString();
            }
            
            container.appendChild(cell);
        });
        
        // Re-attach event listeners
        this.attachDateCellListeners();
    }

    // Public API Methods for external calls
    showSettings() {
        this.showTemporaryMessage('Settings panel coming soon...');
    }

    enableDragMode() {
        this.showTemporaryMessage('Drag from header to move widget');
    }

    destroy() {
        // Cleanup event listeners and save state
        this.saveState();
        window.removeEventListener('resize', this.handleResize.bind(this));
        document.removeEventListener('keydown', this.setupKeyboardNavigation.bind(this));
    }
}

// Initialize the advanced calendar when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('#floating-calendar-widget')) {
        window.advancedCalendar = new AdvancedFloatingCalendar({
            container: '#floating-calendar-widget',
            features: {
                draggable: true,
                minimizable: true,
                quickActions: true,
                animations: true,
                themes: ['default', 'dark', 'gradient'],
                rangeSelection: true
            }
        });

        // Setup event listeners for the widget status display
        window.advancedCalendar.on('dateSelect', (date) => {
            const widgetSelectedDate = document.querySelector('#widgetSelectedDate');
            if (widgetSelectedDate) {
                widgetSelectedDate.textContent = date.toLocaleDateString();
            }
        });

        window.advancedCalendar.on('themeChange', (theme) => {
            const widgetTheme = document.querySelector('#widgetTheme');
            if (widgetTheme) {
                widgetTheme.textContent = theme.charAt(0).toUpperCase() + theme.slice(1);
            }
        });

        console.log('Advanced Floating Calendar ready!');
    }
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AdvancedFloatingCalendar;
}
