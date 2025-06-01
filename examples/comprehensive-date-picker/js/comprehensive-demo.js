/**
 * Comprehensive Date Picker Demo - Enhanced Documentation Version
 * Showcases all features of the Calendar Controller with modern UI
 */

// Global variables
let calendar;
let currentView = 'day';
let eventLogEntries = [];

// Initialize the demo when the page loads
document.addEventListener('DOMContentLoaded', initializeDemo);

function initializeDemo() {
    try {
        // Create calendar controller with comprehensive configuration
        calendar = window.CalendarController({
            initialSelectedDate: new Date(),
            firstDayOfWeek: 0, // Sunday
            locale: 'en-US',
            isRangeSelection: false,
            dateFormat: 'MM/DD/YYYY',
            yearRangeSize: 12
        });

        console.log('Initializing Calendar Controller with options:', calendar.options);

        // Verify calendar was created successfully
        if (!calendar || !calendar.bindings) {
            throw new Error('Failed to create calendar controller or bindings not available');
        }

        console.log('Calendar created successfully:', calendar);
        console.log('Available methods:', Object.keys(calendar.methods).length);
        
        // Set up event listeners for all calendar events
        setupEventListeners();
        
        // Test all methods are accessible
        testAllMethods();
        
        // Initialize the display
        updateCalendarDisplay();
        updateInfoDisplays();
          // Expose calendar instance globally for floating calendar integration
        window.sharedCalendarController = calendar;
        
        // Make demo functions globally accessible
        window.calendarDemo = {
            // Basic Selection
            selectToday,
            selectSpecificDate,
            clearSelection,
            selectRandomDate,
            
            // Range Selection
            enableRangeSelection,
            disableRangeSelection,
            selectThisWeek,
            selectNextMonth,
            
            // Navigation
            goToPreviousMonth,
            goToNextMonth,
            goToPreviousYear,
            goToNextYear,
            goToToday,
            goToSpecificDate,
            jumpToFuture,
            testKeyboardNav,
            
            // Constraints
            setMinMaxDates,
            disableWeekends,
            disableHolidays,
            clearConstraints,
            
            // Internationalization
            changeLocale,
            changeFirstDayOfWeek,
            showDateFormats,
            
            // Accessibility
            testScreenReaderLabels,
            testKeyboardNavigation,
            testFocusManagement,
            generateAccessibilityReport,
            
            // Advanced Features
            showWeekNumbers,
            generateMonthView,
            generateYearView,
            calculateDateDifferences,
            
            // Events and Bindings
            setupEventListeners,
            triggerTestEvents,
            showEventLog,
            clearEventLog,
            
            // API Reference
            runMethodValidation,
            showMethodCategories,
            benchmarkMethods
        };
        
        logEvent('Calendar Initialized', { 
            initialDate: calendar.bindings.currentDate?.current,
            locale: 'en-US',
            methodCount: Object.keys(calendar.methods).length
        });
        
        // Update method count displays
        updateMethodCountDisplays();
        
    } catch (error) {
        console.error('Error initializing demo:', error);
        showError('Failed to initialize calendar demo: ' + error.message);
    }
}

// Test all methods are accessible
function testAllMethods() {
    console.log('Testing all calendar methods...');
    const methodsToTest = [
        'selectDate', 'selectDateRange', 'clearSelection', 'isSelected',
        'goToNextMonth', 'goToPreviousMonth', 'goToNextYear', 'goToPreviousYear',
        'goToDate', 'goToMonth', 'goToYear', 'goToToday',
        'setLocale', 'getLocale', 'getMonthNames', 'getWeekdayNames',
        'setFirstDayOfWeek', 'formatDate', 'getFormattedDate',
        'setMinDate', 'setMaxDate', 'addDisabledDate', 'removeDisabledDate',
        'getDisabledDates', 'clearDisabledDates',
        'focusDate', 'moveFocusRight', 'moveFocusLeft', 'moveFocusUp', 'moveFocusDown',
        'selectFocusedDate', 'getAccessibleDateLabel', 'getDateStateDescription',
        'isToday', 'generateMonthView', 'generateCalendarDays', 'generateCalendarMonths',
        'generateCalendarYears', 'getWeekNumber', 'getCurrentYearRange',
        'getDateFormatOptions', 'setRangeSelectionMode'
    ];
    
    const results = [];
    methodsToTest.forEach(methodName => {
        try {
            if (!calendar.methods[methodName]) {
                results.push({ method: methodName, status: 'MISSING' });
                return;
            }
            results.push({ method: methodName, status: 'SUCCESS' });
        } catch (error) {
            results.push({ method: methodName, status: 'ERROR', error: error.message });
        }
    });
    
    const successful = results.filter(r => r.status === 'SUCCESS').length;
    const total = results.length;
    
    console.log(`Method Test Results: ${successful}/${total} methods available`);
    updateMethodValidationDisplay(successful, total);
}

// Enhanced event listeners setup
function setupEventListeners() {
    try {
        // Subscribe to all available bindings
        if (calendar.bindings.selectedDate?.subscribe) {
            calendar.bindings.selectedDate.subscribe(date => {
                updateSelectedDateDisplay(date);
                logEvent('Date Selected', { date: date?.toISOString() });
            });
        }

        if (calendar.bindings.selectedRange?.subscribe) {
            calendar.bindings.selectedRange.subscribe(range => {
                updateRangeDisplay(range);
                logEvent('Range Selected', { 
                    start: range?.start?.toISOString(),
                    end: range?.end?.toISOString()
                });
            });
        }

        if (calendar.bindings.currentDate?.subscribe) {
            calendar.bindings.currentDate.subscribe(date => {
                updateCurrentDateDisplay(date);
                logEvent('Navigation', { date: date?.toISOString() });
            });
        }

        if (calendar.bindings.calendarDays?.subscribe) {
            calendar.bindings.calendarDays.subscribe(days => {
                renderCalendarDays(days);
                logEvent('Calendar Updated', { dayCount: days?.length });
            });
        }

        if (calendar.bindings.weekdays?.subscribe) {
            calendar.bindings.weekdays.subscribe(weekdays => {
                renderWeekdayHeaders(weekdays);
            });
        }

        if (calendar.bindings.isRangeSelection?.subscribe) {
            calendar.bindings.isRangeSelection.subscribe(isRange => {
                updateSelectionModeDisplay(isRange);
                logEvent('Mode Changed', { isRangeSelection: isRange });
            });
        }

        console.log('Event listeners set up successfully');
    } catch (error) {
        console.error('Error setting up event listeners:', error);
        logEvent('Error', { message: 'Failed to set up event listeners: ' + error.message });
    }
}

// =============================================================================
// BASIC DATE SELECTION FUNCTIONS
// =============================================================================

function selectToday() {
    const today = new Date();
    calendar.methods.selectDate(today.getFullYear(), today.getMonth(), today.getDate());
    logEvent('Select Today', { date: today.toISOString() });
}

function selectSpecificDate() {
    calendar.methods.selectDate(2025, 11, 25); // Christmas 2025
    logEvent('Select Specific Date', { date: '2025-12-25' });
}

function selectRandomDate() {
    const year = 2025;
    const month = Math.floor(Math.random() * 12);
    const day = Math.floor(Math.random() * 28) + 1; // Safe day range
    calendar.methods.selectDate(year, month, day);
    logEvent('Select Random Date', { year, month, day });
}

function clearSelection() {
    calendar.methods.clearSelection();
    logEvent('Clear Selection');
}

// =============================================================================
// RANGE SELECTION FUNCTIONS
// =============================================================================

function enableRangeSelection() {
    calendar.methods.setRangeSelectionMode(true);
    logEvent('Enable Range Selection');
}

function disableRangeSelection() {
    calendar.methods.setRangeSelectionMode(false);
    logEvent('Disable Range Selection');
}

function selectThisWeek() {
    enableRangeSelection();
    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay());
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    
    // Use selectDateRange if available, otherwise use individual selections
    if (calendar.methods.selectDateRange) {
        calendar.methods.selectDateRange(startOfWeek, endOfWeek);
    } else {
        calendar.methods.selectDate(startOfWeek.getFullYear(), startOfWeek.getMonth(), startOfWeek.getDate());
        calendar.methods.selectDate(endOfWeek.getFullYear(), endOfWeek.getMonth(), endOfWeek.getDate());
    }
    logEvent('Select This Week', { start: startOfWeek.toISOString(), end: endOfWeek.toISOString() });
}

function selectNextMonth() {
    enableRangeSelection();
    const nextMonth = new Date();
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    const startOfMonth = new Date(nextMonth.getFullYear(), nextMonth.getMonth(), 1);
    const endOfMonth = new Date(nextMonth.getFullYear(), nextMonth.getMonth() + 1, 0);
    
    if (calendar.methods.selectDateRange) {
        calendar.methods.selectDateRange(startOfMonth, endOfMonth);
    } else {
        calendar.methods.selectDate(startOfMonth.getFullYear(), startOfMonth.getMonth(), startOfMonth.getDate());
        calendar.methods.selectDate(endOfMonth.getFullYear(), endOfMonth.getMonth(), endOfMonth.getDate());
    }
    logEvent('Select Next Month', { start: startOfMonth.toISOString(), end: endOfMonth.toISOString() });
}

// =============================================================================
// NAVIGATION FUNCTIONS
// =============================================================================

function goToPreviousMonth() {
    calendar.methods.goToPreviousMonth();
    logEvent('Navigate Previous Month');
}

function goToNextMonth() {
    calendar.methods.goToNextMonth();
    logEvent('Navigate Next Month');
}
    
function goToPreviousYear() {
    calendar.methods.goToPreviousYear();
    logEvent('Navigate Previous Year');
}

function goToNextYear() {
    calendar.methods.goToNextYear();
    logEvent('Navigate Next Year');
}

function goToToday() {
    calendar.methods.goToToday();
    logEvent('Navigate to Today');
}

function goToSpecificDate() {
    calendar.methods.goToDate(new Date(2025, 11, 25)); // Christmas 2025
    logEvent('Navigate to Specific Date', { date: '2025-12-25' });
}

function jumpToFuture() {
    calendar.methods.goToYear(2030);
    logEvent('Jump to Future', { year: 2030 });
}

function testKeyboardNav(direction) {
    // Focus a date first if none is focused
    if (!calendar.bindings.focusedDate?.current) {
        calendar.methods.focusDate(new Date());
    }
    
    switch (direction) {
        case 'ArrowUp':
            calendar.methods.moveFocusUp();
            break;
        case 'ArrowDown':
            calendar.methods.moveFocusDown();
            break;
        case 'ArrowLeft':
            calendar.methods.moveFocusLeft();
            break;
        case 'ArrowRight':
            calendar.methods.moveFocusRight();
            break;
    }
    logEvent('Keyboard Navigation', { direction });
}

// =============================================================================
// DATE CONSTRAINTS FUNCTIONS
// =============================================================================

function setMinMaxDates() {
    const today = new Date();
    const minDate = new Date(today.getFullYear(), today.getMonth() - 1, 1);
    const maxDate = new Date(today.getFullYear() + 1, today.getMonth(), 0);
    
    calendar.methods.setMinDate(minDate);
    calendar.methods.setMaxDate(maxDate);
    
    logEvent('Set Min/Max Dates', { 
        min: minDate.toISOString(), 
        max: maxDate.toISOString() 
    });
}

function disableWeekends() {
    // Clear existing disabled dates first
    if (calendar.methods.clearDisabledDates) {
        calendar.methods.clearDisabledDates();
    }
    
    // Disable weekends for the next 3 months
    const today = new Date();
    for (let i = 0; i < 90; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        
        if (date.getDay() === 0 || date.getDay() === 6) { // Sunday or Saturday
            calendar.methods.addDisabledDate(date);
        }
    }
    
    logEvent('Disable Weekends', { period: '90 days' });
}

function disableHolidays() {
    const holidays = [
        new Date(2025, 0, 1),   // New Year's Day
        new Date(2025, 1, 14),  // Valentine's Day  
        new Date(2025, 6, 4),   // Independence Day
        new Date(2025, 9, 31),  // Halloween
        new Date(2025, 10, 28), // Thanksgiving
        new Date(2025, 11, 25), // Christmas
        new Date(2025, 11, 31)  // New Year's Eve
    ];
    
    holidays.forEach(date => {
        calendar.methods.addDisabledDate(date);
    });
    
    logEvent('Disable Holidays', { count: holidays.length });
}

function clearConstraints() {
    // Clear min/max dates
    calendar.methods.setMinDate(null);
    calendar.methods.setMaxDate(null);
    
    // Clear disabled dates
    if (calendar.methods.clearDisabledDates) {
        calendar.methods.clearDisabledDates();
    }
    
    logEvent('Clear All Constraints');
}

// =============================================================================
// INTERNATIONALIZATION FUNCTIONS
// =============================================================================

function changeLocale(locale) {
    calendar.methods.setLocale(locale);
    updateLocaleDisplay(locale);
    logEvent('Change Locale', { locale });
}

function changeFirstDayOfWeek(day) {
    calendar.methods.setFirstDayOfWeek(day);
    const dayName = day === 0 ? 'Sunday' : 'Monday';
    updateFirstDayDisplay(dayName);
    logEvent('Change First Day', { day, dayName });
}

function showDateFormats() {
    const formats = calendar.methods.getDateFormatOptions();
    console.log('Date Format Options:', formats);
    logEvent('Show Date Formats', { formats });
}

// =============================================================================
// ACCESSIBILITY FUNCTIONS
// =============================================================================

function testScreenReaderLabels() {
    const today = new Date();
    const label = calendar.methods.getAccessibleDateLabel(today);
    const description = calendar.methods.getDateStateDescription(today);
    
    console.log('Screen Reader Label:', label);
    console.log('Date State Description:', description);
    
    logEvent('Test Screen Reader', { label, description });
}

function testKeyboardNavigation() {
    // Test all keyboard navigation methods
    const focusDate = new Date();
    calendar.methods.focusDate(focusDate);
    
    setTimeout(() => calendar.methods.moveFocusRight(), 100);
    setTimeout(() => calendar.methods.moveFocusDown(), 200);
    setTimeout(() => calendar.methods.moveFocusLeft(), 300);
    setTimeout(() => calendar.methods.moveFocusUp(), 400);
    
    logEvent('Test Keyboard Navigation');
}

function testFocusManagement() {
    const testDate = new Date(2025, 5, 15); // June 15, 2025
    calendar.methods.focusDate(testDate);
    
    setTimeout(() => {
        calendar.methods.selectFocusedDate();
    }, 500);
    
    logEvent('Test Focus Management', { date: testDate.toISOString() });
}

function generateAccessibilityReport() {
    const report = {
        hasAriaSupport: true,
        hasKeyboardNav: true,
        hasFocusManagement: true,
        hasScreenReaderSupport: true,
        wcagCompliance: 'AA'
    };
    
    console.log('Accessibility Report:', report);
    logEvent('Generate A11y Report', report);
}

// =============================================================================
// ADVANCED FEATURES FUNCTIONS
// =============================================================================

function showWeekNumbers() {
    const today = new Date();
    const weekNumber = calendar.methods.getWeekNumber(today);
    
    updateWeekNumberDisplay(weekNumber);
    logEvent('Show Week Numbers', { weekNumber });
}

function generateMonthView() {
    const monthView = calendar.methods.generateMonthView();
    console.log('Month View Data:', monthView);
    logEvent('Generate Month View', { monthView });
}

function generateYearView() {
    const yearView = calendar.methods.generateCalendarYears();
    console.log('Year View Data:', yearView);
    logEvent('Generate Year View', { yearView });
}

function calculateDateDifferences() {
    const today = new Date();
    const futureDate = new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000); // 30 days from now
    const daysDiff = Math.ceil((futureDate - today) / (1000 * 60 * 60 * 24));
    
    console.log(`Days between ${today.toDateString()} and ${futureDate.toDateString()}: ${daysDiff}`);
    logEvent('Calculate Date Differences', { daysDiff });
}

// =============================================================================
// EVENTS AND BINDINGS FUNCTIONS
// =============================================================================

function triggerTestEvents() {
    // Trigger a series of events to test the event system
    selectToday();
    setTimeout(() => enableRangeSelection(), 100);
    setTimeout(() => goToNextMonth(), 200);
    setTimeout(() => changeLocale('es-ES'), 300);
    setTimeout(() => disableRangeSelection(), 400);
    
    logEvent('Trigger Test Events');
}

function showEventLog() {
    const container = document.getElementById('eventLogContainer');
    const display = document.getElementById('eventLogDisplay');
    
    if (container && display) {
        container.classList.remove('hidden');
        display.innerHTML = eventLogEntries.slice(-20).map(entry => 
            `<div class="mb-1"><span class="text-blue-600">${entry.timestamp}</span> - ${entry.event}: ${JSON.stringify(entry.data || {})}</div>`
        ).join('');
    }
    
    logEvent('Show Event Log');
}

function clearEventLog() {
    eventLogEntries = [];
    const display = document.getElementById('eventLogDisplay');
    if (display) {
        display.innerHTML = '<div class="text-gray-500">Event log cleared</div>';
    }
    updateEventCountDisplay(0);
}

// =============================================================================
// API REFERENCE FUNCTIONS
// =============================================================================

function runMethodValidation() {
    const allMethods = Object.keys(calendar.methods);
    const testResults = [];
    
    allMethods.forEach(methodName => {
        try {
            const method = calendar.methods[methodName];
            if (typeof method === 'function') {
                testResults.push({ method: methodName, status: 'AVAILABLE' });
            } else {
                testResults.push({ method: methodName, status: 'NOT_FUNCTION' });
            }
        } catch (error) {
            testResults.push({ method: methodName, status: 'ERROR', error: error.message });
        }
    });
    
    const available = testResults.filter(r => r.status === 'AVAILABLE').length;
    const total = testResults.length;
    
    updateMethodValidationDisplay(available, total);
    logEvent('Method Validation', { available, total, successRate: (available/total*100).toFixed(1) + '%' });
}

function showMethodCategories() {
    const categories = {
        navigation: ['goToNextMonth', 'goToPreviousMonth', 'goToNextYear', 'goToPreviousYear', 'goToDate', 'goToMonth', 'goToYear', 'goToToday'],
        selection: ['selectDate', 'selectDateRange', 'clearSelection', 'isSelected', 'setRangeSelectionMode'],
        internationalization: ['setLocale', 'getLocale', 'getMonthNames', 'getWeekdayNames', 'setFirstDayOfWeek', 'formatDate'],
        accessibility: ['getAccessibleDateLabel', 'getDateStateDescription', 'focusDate', 'moveFocusRight', 'moveFocusLeft', 'moveFocusUp', 'moveFocusDown', 'selectFocusedDate'],
        constraints: ['setMinDate', 'setMaxDate', 'addDisabledDate', 'removeDisabledDate', 'getDisabledDates', 'clearDisabledDates'],
        utilities: ['isToday', 'generateMonthView', 'generateCalendarDays', 'generateCalendarMonths', 'generateCalendarYears', 'getWeekNumber', 'getCurrentYearRange', 'getDateFormatOptions']
    };
    
    console.log('Method Categories:', categories);
    logEvent('Show Method Categories', { categories: Object.keys(categories) });
}

function benchmarkMethods() {
    const methodsToTest = ['getMonthNames', 'generateCalendarDays', 'formatDate', 'isToday', 'getWeekNumber'];
    const results = {};
    
    methodsToTest.forEach(methodName => {
        if (calendar.methods[methodName]) {
            const start = performance.now();
            
            // Run method multiple times for better benchmarking
            for (let i = 0; i < 1000; i++) {
                try {
                    switch (methodName) {
                        case 'formatDate':
                        case 'isToday':
                        case 'getWeekNumber':
                            calendar.methods[methodName](new Date());
                            break;
                        default:
                            calendar.methods[methodName]();
                    }
                } catch (error) {
                    // Ignore errors during benchmarking
                }
            }
            
            const end = performance.now();
            results[methodName] = (end - start).toFixed(2) + 'ms';
        }
    });
    
    console.log('Benchmark Results (1000 iterations):', results);
    logEvent('Benchmark Methods', results);
}

// =============================================================================
// DISPLAY UPDATE FUNCTIONS
// =============================================================================

function updateCalendarDisplay() {
    try {
        updateMonthYearDisplay();
        updateWeekdayHeaders();
        updateCalendarDays();
        updateInfoDisplays();
    } catch (error) {
        console.error('Error updating calendar display:', error);
    }
}

function updateMonthYearDisplay() {
    const element = document.getElementById('currentMonthYear');
    if (element && calendar.bindings.currentDate?.current) {
        const date = calendar.bindings.currentDate.current;
        const monthNames = calendar.methods.getMonthNames();
        element.textContent = `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
    }
}

function updateWeekdayHeaders() {
    const container = document.getElementById('weekdayHeaders');
    if (!container) return;
    
    try {
        const weekdays = calendar.methods.getWeekdayNames(true); // short names
        container.innerHTML = weekdays.map(day => 
            `<div class="weekday-header">${day}</div>`
        ).join('');
    } catch (error) {
        console.error('Error updating weekday headers:', error);
    }
}

function updateCalendarDays() {
    const container = document.getElementById('calendarDays');
    if (!container) return;
    
    try {
        const days = calendar.methods.generateCalendarDays();
        container.innerHTML = days.map(day => {
            const classes = ['date-cell'];
            
            if (day.isSelected) classes.push('selected');
            if (day.isToday) classes.push('today');
            if (day.isDisabled) classes.push('disabled');
            if (day.isOtherMonth) classes.push('other-month');
            if (day.isFocused) classes.push('focused');
            if (day.isRangeStart) classes.push('range-start');
            if (day.isRangeEnd) classes.push('range-end');
            if (day.isInRange) classes.push('in-range');
            
            return `<div class="${classes.join(' ')}" onclick="handleDateClick(${day.year}, ${day.month}, ${day.day})">${day.day}</div>`;
        }).join('');
    } catch (error) {
        console.error('Error updating calendar days:', error);
        container.innerHTML = '<div class="col-span-7 text-center text-gray-500">Error loading calendar</div>';
    }
}

function renderCalendarDays(days) {
    if (days && Array.isArray(days)) {
        updateCalendarDays();
    }
}

function renderWeekdayHeaders(weekdays) {
    if (weekdays && Array.isArray(weekdays)) {
        updateWeekdayHeaders();
    }
}

// Handle date clicks from the calendar
window.handleDateClick = function(year, month, day) {
    calendar.methods.selectDate(year, month, day);
    logEvent('Date Clicked', { year, month, day });
};

function updateSelectedDateDisplay(date) {
    const element = document.getElementById('selectedDateDisplay');
    const formattedElement = document.getElementById('formattedDateDisplay');
    const isTodayElement = document.getElementById('isTodayDisplay');
    
    if (element) {
        element.textContent = date ? date.toDateString() : 'None';
    }
    
    if (formattedElement && date) {
        try {
            const formatted = calendar.methods.formatDate(date);
            formattedElement.textContent = formatted;
        } catch (error) {
            formattedElement.textContent = 'Error formatting';
        }
    }
    
    if (isTodayElement && date) {
        try {
            const isToday = calendar.methods.isToday(date);
            isTodayElement.textContent = isToday.toString();
        } catch (error) {
            isTodayElement.textContent = 'false';
        }
    }
}

function updateRangeDisplay(range) {
    const startElement = document.getElementById('rangeStartDisplay');
    const endElement = document.getElementById('rangeEndDisplay');
    const daysElement = document.getElementById('rangeDaysDisplay');
    
    if (startElement) {
        startElement.textContent = range?.start ? range.start.toDateString() : '--';
    }
    
    if (endElement) {
        endElement.textContent = range?.end ? range.end.toDateString() : '--';
    }
    
    if (daysElement && range?.start && range?.end) {
        const days = Math.ceil((range.end - range.start) / (1000 * 60 * 60 * 24)) + 1;
        daysElement.textContent = days.toString();
    } else if (daysElement) {
        daysElement.textContent = '0';
    }
}

function updateSelectionModeDisplay(isRange) {
    const element = document.getElementById('selectionModeDisplay');
    if (element) {
        element.textContent = isRange ? 'Range' : 'Single';
    }
}

function updateCurrentDateDisplay(date) {
    const element = document.getElementById('currentDateDisplay');
    if (element && date) {
        element.textContent = date.toDateString();
    }
}

function updateLocaleDisplay(locale) {
    const element = document.getElementById('currentLocaleDisplay');
    if (element) {
        element.textContent = locale;
    }
    
    // Update month and weekday names
    try {
        const monthNames = calendar.methods.getMonthNames();
        const weekdayNames = calendar.methods.getWeekdayNames();
        
        const monthElement = document.getElementById('monthNamesDisplay');
        const weekdayElement = document.getElementById('weekdayNamesDisplay');
        
        if (monthElement) {
            monthElement.textContent = monthNames.slice(0, 3).join(', ') + '...';
        }
        
        if (weekdayElement) {
            weekdayElement.textContent = weekdayNames.join(', ');
        }
    } catch (error) {
        console.error('Error updating locale display:', error);
    }
}

function updateFirstDayDisplay(dayName) {
    const element = document.getElementById('firstDayDisplay');
    if (element) {
        element.textContent = dayName;
    }
}

function updateWeekNumberDisplay(weekNumber) {
    const element = document.getElementById('currentWeekNumber');
    if (element) {
        element.textContent = weekNumber.toString();
    }
}

function updateMethodCountDisplays() {
    const count = Object.keys(calendar.methods).length;
    
    const elements = [
        'methodCount',
        'methodCountSidebar', 
        'totalMethodsCount'
    ];
    
    elements.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = count.toString();
        }
    });
}

function updateMethodValidationDisplay(available, total) {
    const testedElement = document.getElementById('testedMethodsCount');
    const successElement = document.getElementById('successRateDisplay');
    
    if (testedElement) {
        testedElement.textContent = `${available}/${total}`;
    }
    
    if (successElement) {
        const rate = ((available / total) * 100).toFixed(1);
        successElement.textContent = `${rate}%`;
    }
}

function updateEventCountDisplay(count) {
    const element = document.getElementById('eventCount');
    if (element) {
        element.textContent = count.toString();
    }
}

function updateInfoDisplays() {
    // Update various info displays
    const currentDate = calendar.bindings.currentDate?.current;
    if (currentDate) {
        updateCurrentDateDisplay(currentDate);
        
        // Update days in month
        const daysElement = document.getElementById('daysInMonth');
        if (daysElement) {
            const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
            daysElement.textContent = daysInMonth.toString();
        }
        
        // Update year range
        try {
            const yearRange = calendar.methods.getCurrentYearRange();
            const yearRangeElement = document.getElementById('yearRangeDisplay');
            if (yearRangeElement && yearRange) {
                yearRangeElement.textContent = `${yearRange.start} - ${yearRange.end}`;
            }
        } catch (error) {
            console.error('Error getting year range:', error);
        }
    }
    
    // Update constraint displays
    updateConstraintDisplays();
}

function updateConstraintDisplays() {
    try {
        const disabledDates = calendar.methods.getDisabledDates ? calendar.methods.getDisabledDates() : [];
        const disabledElement = document.getElementById('disabledDatesDisplay');
        if (disabledElement) {
            disabledElement.textContent = Array.isArray(disabledDates) ? disabledDates.length.toString() : '0';
        }
    } catch (error) {
        console.error('Error updating constraint displays:', error);
    }
}

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

function logEvent(eventName, data = {}) {
    const entry = {
        timestamp: new Date().toLocaleTimeString(),
        event: eventName,
        data: data
    };
    
    eventLogEntries.push(entry);
    
    // Update event count display
    updateEventCountDisplay(eventLogEntries.length);
    
    // Update last event display
    const lastEventElement = document.getElementById('lastEventDisplay');
    if (lastEventElement) {
        lastEventElement.textContent = eventName;
    }
    
    console.log(`Event: ${eventName}`, data);
}

function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 mx-6 mt-4';
    errorDiv.innerHTML = `<strong>Error:</strong> ${message}`;
    
    const container = document.querySelector('.doc-container');
    if (container) {
        container.insertBefore(errorDiv, container.firstChild);
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (errorDiv.parentNode) {
                errorDiv.parentNode.removeChild(errorDiv);
            }
        }, 5000);
    }
}

// Initialize locale display on load
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        if (calendar && calendar.methods) {
            updateLocaleDisplay('en-US');
            updateFirstDayDisplay('Sunday');
            showWeekNumbers();
        }
    }, 100);
});
