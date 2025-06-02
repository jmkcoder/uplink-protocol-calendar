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
        };        this.eventListeners = new Map();
        this.widget = null;
        this.dragState = { isDragging: false, offset: { x: 0, y: 0 } };
        this.resizeTimeout = null; // For debouncing resize events
        
        // Bound methods for event listeners (for proper cleanup)
        this.boundHandleResize = this.handleResize.bind(this);
        this.boundHandleKeydown = this.handleKeydown.bind(this);
        this.boundHandleMouseMove = this.handleMouseMove.bind(this);
        this.boundHandleMouseUp = this.handleMouseUp.bind(this);
        
        // Event listener tracking for cleanup
        this.documentListeners = new Set();
        this.windowListeners = new Set();
        
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
    }    setupEventListeners() {
        // Clean up any existing listeners first
        this.removeEventListeners();
        
        // Minimize/Maximize toggle - use onclick attribute selector instead of CSS class
        const minimizeBtn = this.widget.querySelector('button[onclick*="toggleMinimize"]');
        if (minimizeBtn) {
            minimizeBtn.addEventListener('click', () => this.toggleMinimize());
        }

        // Date cell clicks - using event delegation for better performance
        this.widget.addEventListener('click', (e) => {
            if (e.target.hasAttribute('data-date')) {
                this.handleDateClick(e.target);
            }
        });

        // Navigation buttons - check if they exist in the floating calendar structure
        const prevBtn = this.widget.querySelector('button[onclick*="goToPrevious"]');
        const nextBtn = this.widget.querySelector('button[onclick*="goToNext"]');
        
        if (prevBtn) prevBtn.addEventListener('click', () => this.goToPreviousMonth());
        if (nextBtn) nextBtn.addEventListener('click', () => this.goToNextMonth());

        // Quick action buttons
        this.setupQuickActions();

        // Drag functionality
        this.setupDragFunctionality();

        // Keyboard navigation - only add once
        if (!this.documentListeners.has('keydown')) {
            document.addEventListener('keydown', this.boundHandleKeydown);
            this.documentListeners.add('keydown');
        }

        // Window resize handler - only add once
        if (!this.windowListeners.has('resize')) {
            window.addEventListener('resize', this.boundHandleResize);
            this.windowListeners.add('resize');
        }
    }setupQuickActions() {
        // Quick action buttons are already set up via onclick attributes in HTML
        // They call methods like window.advancedCalendar.selectToday() directly
        // No additional event listeners needed since they use onclick attributes
        console.log('Quick actions are handled via onclick attributes in HTML');
    }    setupDragFunctionality() {
        // Use the actual header class that exists in the HTML
        const header = this.widget.querySelector('.bg-gradient-to-r');
        
        if (!header) {
            console.warn('Calendar header not found for drag functionality');
            return;
        }
        
        header.addEventListener('mousedown', (e) => {
            // Don't start drag if clicking on buttons
            if (e.target.closest('button')) return;
            
            this.dragState.isDragging = true;
            this.dragState.offset = {
                x: e.clientX - this.widget.offsetLeft,
                y: e.clientY - this.widget.offsetTop
            };
            
            this.widget.classList.add('dragging');
            document.body.style.userSelect = 'none';
        });

        // Add mouse move and up listeners only once
        if (!this.documentListeners.has('mousemove')) {
            document.addEventListener('mousemove', this.boundHandleMouseMove);
            this.documentListeners.add('mousemove');
        }

        if (!this.documentListeners.has('mouseup')) {
            document.addEventListener('mouseup', this.boundHandleMouseUp);
            this.documentListeners.add('mouseup');
        }
    }

    handleMouseMove(e) {
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
    }

    handleMouseUp() {
        if (this.dragState.isDragging) {
            this.dragState.isDragging = false;
            this.widget.classList.remove('dragging');
            document.body.style.userSelect = '';
            this.savePosition();
            this.emit('dragEnd', this.state.position);
        }
    }

    handleKeydown(e) {
        // Only handle keyboard events when the calendar is focused or has focus within
        if (!this.widget.contains(document.activeElement) && document.activeElement !== this.widget) {
            return;
        }

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
    }    setupKeyboardNavigation() {
        // This method is now handled in setupEventListeners() to prevent duplicate listeners
        // Keyboard navigation is set up once using bound methods for proper cleanup
        console.log('Keyboard navigation handled via setupEventListeners()');
    }render() {
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
    }    createDateCell(date, isOtherMonth) {
        const today = new Date();
        const isToday = this.isSameDate(date, today);
        const isSelected = this.isDateSelected(date);
        const isInRange = this.isDateInRange(date);
        
        // Base Tailwind classes for floating calendar date cells
        const baseClasses = [
            'w-8', 'h-8', 
            'flex', 'items-center', 'justify-center',
            'text-sm', 'font-medium',
            'rounded-lg',
            'cursor-pointer',
            'transition-all', 'duration-200',
            'hover:bg-blue-100', 'dark:hover:bg-blue-900/50',
            'hover:scale-105',
            'select-none'
        ];
        
        // Conditional classes based on date state
        if (isOtherMonth) {
            baseClasses.push('text-gray-400', 'dark:text-gray-500');
        } else {
            baseClasses.push('text-gray-900', 'dark:text-gray-100');
        }
        
        if (isToday) {
            baseClasses.push('ring-2', 'ring-blue-500', 'ring-inset', 'font-bold', 'text-blue-600', 'dark:text-blue-300');
        }
        
        if (isSelected) {
            baseClasses.push('bg-blue-600', 'text-white', 'shadow-lg', 'hover:bg-blue-700', 'dark:hover:bg-blue-500');
        }
        
        if (isInRange) {
            baseClasses.push('bg-blue-100', 'dark:bg-blue-900/30', 'text-blue-700', 'dark:text-blue-200');
        }

        return `
            <div class="${baseClasses.join(' ')}" 
                 data-date="${date.toISOString()}"
                 title="${this.formatDateForTitle(date)}"
                 tabindex="0"
                 role="button"
                 aria-label="${this.formatDateForTitle(date)}">
                ${date.getDate()}
            </div>
        `;
    }    attachDateCellListeners() {
        // Use event delegation instead of individual listeners
        // Event delegation is already handled in setupEventListeners()
        // This method now just ensures proper tabindex and aria attributes
        const dateCells = this.widget.querySelectorAll('[data-date]');
        dateCells.forEach(cell => {
            // Set up accessibility attributes but no individual event listeners
            cell.setAttribute('tabindex', '0');
            cell.setAttribute('role', 'button');
            
            // Add hover and focus handlers directly as these don't accumulate
            cell.addEventListener('mouseenter', () => this.handleDateHover(cell));
            cell.addEventListener('mouseleave', () => this.handleDateLeave(cell));
            cell.addEventListener('focus', () => this.handleDateFocus(cell));
            cell.addEventListener('keydown', (e) => this.handleDateKeydown(e, cell));
        });
    }

    handleDateLeave(cell) {
        // Remove hover effects when mouse leaves
        cell.classList.remove('bg-gray-100', 'dark:bg-gray-700');
    }handleDateClick(cell) {
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
    }    handleDateHover(cell) {
        const dateStr = cell.getAttribute('data-date');
        const date = new Date(dateStr);
        
        // Show preview for range selection
        if (this.state.rangeMode && this.state.selectedRange.start && !this.state.selectedRange.end) {
            this.previewRange(this.state.selectedRange.start, date);
        }
        
        // Add hover effect
        if (!cell.classList.contains('bg-blue-600')) {
            cell.classList.add('bg-gray-100', 'dark:bg-gray-700');
        }
    }

    handleDateFocus(cell) {
        // Remove focus from other cells
        const focusedCells = this.widget.querySelectorAll('[data-date].ring-2.ring-yellow-400');
        focusedCells.forEach(c => {
            c.classList.remove('ring-2', 'ring-yellow-400');
        });
        
        // Add focus ring to current cell
        cell.classList.add('ring-2', 'ring-yellow-400');
    }

    handleDateKeydown(e, cell) {
        const dateStr = cell.getAttribute('data-date');
        const date = new Date(dateStr);
        
        switch (e.key) {
            case 'Enter':
            case ' ':
                e.preventDefault();
                this.handleDateClick(cell);
                break;
            case 'ArrowLeft':
                e.preventDefault();
                this.focusAdjacentDate(date, -1);
                break;
            case 'ArrowRight':
                e.preventDefault();
                this.focusAdjacentDate(date, 1);
                break;
            case 'ArrowUp':
                e.preventDefault();
                this.focusAdjacentDate(date, -7);
                break;
            case 'ArrowDown':
                e.preventDefault();
                this.focusAdjacentDate(date, 7);
                break;
        }
    }

    focusAdjacentDate(currentDate, dayOffset) {
        const targetDate = new Date(currentDate);
        targetDate.setDate(currentDate.getDate() + dayOffset);
        
        const targetCell = this.widget.querySelector(`[data-date="${targetDate.toISOString()}"]`);
        if (targetCell) {
            targetCell.focus();
        }
    }handleRangeSelection(date) {
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
    }    previewRange(start, end) {
        const cells = this.widget.querySelectorAll('[data-date]');
        cells.forEach(cell => {
            // Remove existing preview classes
            cell.classList.remove('bg-blue-200', 'dark:bg-blue-800/50');
            
            const cellDate = new Date(cell.getAttribute('data-date'));
            if (cellDate >= start && cellDate <= end) {
                // Add preview styling for range
                if (!cell.classList.contains('bg-blue-600')) {
                    cell.classList.add('bg-blue-200', 'dark:bg-blue-800/50');
                }
            }
        });
    }// Quick Action Methods
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
    }    // Animation and Effects
    showAnimationDemo() {
        const cells = this.widget.querySelectorAll('[data-date]');
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
    }

    stressTest() {
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
    }    // Smart positioning system
    smartPosition() {
        const rect = this.widget.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        
        let newPosition = { ...this.state.position };
        let needsUpdate = false;
        
        // Check if widget is outside viewport bounds
        if (rect.left < 0) {
            newPosition.left = 20;
            newPosition.right = 'auto';
            needsUpdate = true;
        } else if (rect.right > viewportWidth) {
            // If widget is beyond right edge, move it to the right side with margin
            newPosition.right = 20;
            newPosition.left = 'auto';
            needsUpdate = true;
        }
        
        // Check vertical positioning
        if (rect.top < 0) {
            newPosition.top = 20;
            needsUpdate = true;
        } else if (rect.bottom > viewportHeight) {
            // If widget is below viewport, move it up with margin
            newPosition.top = Math.max(20, viewportHeight - rect.height - 20);
            needsUpdate = true;
        }
        
        // For cases where the widget might be too close to edges after resize
        if (rect.right > viewportWidth - 20 && rect.left > viewportWidth / 2) {
            newPosition.right = 20;
            newPosition.left = 'auto';
            needsUpdate = true;
        }
        
        if (rect.bottom > viewportHeight - 20 && rect.top > viewportHeight / 2) {
            newPosition.top = viewportHeight - rect.height - 20;
            needsUpdate = true;
        }
        
        if (needsUpdate) {
            this.updatePosition(newPosition);
        }
    }

    // Handle window resize events
    handleResize() {
        // Debounce resize events for better performance
        clearTimeout(this.resizeTimeout);
        this.resizeTimeout = setTimeout(() => {
            // Re-run smart positioning to ensure widget stays within viewport
            this.smartPosition();
            
            // Emit resize event for any listeners
            this.emit('resize', {
                viewport: {
                    width: window.innerWidth,
                    height: window.innerHeight
                },
                widget: this.widget.getBoundingClientRect()
            });
        }, 150); // 150ms debounce delay
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
            
            // Use Tailwind classes for consistent styling
            const baseClasses = [
                'w-8', 'h-8', 
                'flex', 'items-center', 'justify-center',
                'text-sm', 'font-medium',
                'rounded-lg',
                'cursor-pointer',
                'transition-all', 'duration-200',
                'hover:bg-blue-100', 'dark:hover:bg-blue-900/50',
                'hover:scale-105',
                'select-none'
            ];
            
            // Apply conditional styling based on controller data
            if (!dayData.isCurrentMonth) {
                baseClasses.push('text-gray-400', 'dark:text-gray-500');
            } else {
                baseClasses.push('text-gray-900', 'dark:text-gray-100');
            }
            
            if (dayData.isToday) {
                baseClasses.push('ring-2', 'ring-blue-500', 'ring-inset', 'font-bold', 'text-blue-600', 'dark:text-blue-300');
            }
            
            if (dayData.isSelected) {
                baseClasses.push('bg-blue-600', 'text-white', 'shadow-lg', 'hover:bg-blue-700', 'dark:hover:bg-blue-500');
            }
            
            if (dayData.isInRange) {
                baseClasses.push('bg-blue-100', 'dark:bg-blue-900/30', 'text-blue-700', 'dark:text-blue-200');
            }
            
            if (dayData.isRangeStart || dayData.isRangeEnd) {
                baseClasses.push('bg-blue-600', 'text-white', 'shadow-lg');
            }
            
            cell.className = baseClasses.join(' ');
            cell.textContent = dayData.day || '';
            
            // Store date data for click handling
            if (dayData.date) {
                cell.dataset.date = dayData.date.toISOString();
                cell.setAttribute('tabindex', '0');
                cell.setAttribute('role', 'button');
                cell.setAttribute('aria-label', this.formatDateForTitle(dayData.date));
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
        this.showTemporaryMessage('Drag from header to move widget');    }

    // Additional methods for floating calendar functionality
    enableDragMode() {
        this.showTemporaryMessage('Drag mode enabled - Click and drag the header to move');
        // Highlight the header to show it's draggable
        const header = this.widget.querySelector('.bg-gradient-to-r');
        if (header) {
            header.style.boxShadow = '0 0 20px rgba(59, 130, 246, 0.5)';
            setTimeout(() => {
                header.style.boxShadow = '';
            }, 2000);
        }
    }

    showSettings() {
        // Create a simple settings modal
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 z-[60] flex items-center justify-center bg-black/50';
        modal.innerHTML = `
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 m-4 max-w-md w-full shadow-2xl">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">Calendar Settings</h3>
                    <button class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" onclick="this.closest('.fixed').remove()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="space-y-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Theme</label>
                        <select class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" onchange="window.advancedCalendar.changeTheme(this.value)">
                            <option value="default">Default</option>
                            <option value="dark">Dark</option>
                            <option value="blue">Blue</option>
                        </select>
                    </div>
                    <div>
                        <label class="flex items-center">
                            <input type="checkbox" class="rounded mr-2" ${this.state.rangeMode ? 'checked' : ''} onchange="window.advancedCalendar.toggleRangeMode(this.checked)">
                            <span class="text-sm text-gray-700 dark:text-gray-300">Range Selection Mode</span>
                        </label>
                    </div>
                    <div>
                        <label class="flex items-center">
                            <input type="checkbox" class="rounded mr-2" ${this.state.animations ? 'checked' : ''} onchange="window.advancedCalendar.toggleAnimations(this.checked)">
                            <span class="text-sm text-gray-700 dark:text-gray-300">Enable Animations</span>
                        </label>
                    </div>
                </div>
                <div class="mt-6 flex justify-end">
                    <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors" onclick="this.closest('.fixed').remove()">
                        Close
                    </button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }

    changeTheme(theme) {
        this.state.currentTheme = theme;
        this.showTemporaryMessage(`Theme changed to ${theme}`);
        // Apply theme changes to the widget
        const widget = this.widget;
        widget.classList.remove('theme-default', 'theme-dark', 'theme-blue');
        widget.classList.add(`theme-${theme}`);
    }

    toggleRangeMode(enabled) {
        if (enabled) {
            this.enableRangeMode();
        } else {
            this.disableRangeMode();
        }
    }

    toggleAnimations(enabled) {
        this.state.animations = enabled;
        this.showTemporaryMessage(`Animations ${enabled ? 'enabled' : 'disabled'}`);
    }    // Event listener cleanup method
    removeEventListeners() {
        // Remove document listeners
        if (this.documentListeners.has('keydown')) {
            document.removeEventListener('keydown', this.boundHandleKeydown);
            this.documentListeners.delete('keydown');
        }
        
        if (this.documentListeners.has('mousemove')) {
            document.removeEventListener('mousemove', this.boundHandleMouseMove);
            this.documentListeners.delete('mousemove');
        }
        
        if (this.documentListeners.has('mouseup')) {
            document.removeEventListener('mouseup', this.boundHandleMouseUp);
            this.documentListeners.delete('mouseup');
        }
        
        // Remove window listeners
        if (this.windowListeners.has('resize')) {
            window.removeEventListener('resize', this.boundHandleResize);
            this.windowListeners.delete('resize');
        }
    }

    destroy() {
        // Cleanup event listeners and save state
        this.saveState();
        
        // Remove all event listeners
        this.removeEventListeners();
        
        // Clear any pending resize timeout
        if (this.resizeTimeout) {
            clearTimeout(this.resizeTimeout);
            this.resizeTimeout = null;
        }
        
        // Clear event listener tracking sets
        this.documentListeners.clear();
        this.windowListeners.clear();
        
        console.log('Advanced Floating Calendar destroyed and cleaned up');
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
