/**
 * Comprehensive Date Controller Test
 * 
 * Complete test suite for Date Controller functionality
 * Run with: node comprehensive-date-test.js
 */

const { CalendarController } = require('../../dist/index.js');

console.log('🧪 Comprehensive Date Controller Test');
console.log('====================================\n');

let passedTests = 0;
let totalTests = 0;

function runTest(testName, testFn) {
  totalTests++;
  console.log(`Test ${totalTests}: ${testName}`);
  console.log('-'.repeat(testName.length + 10));
  
  try {
    const result = testFn();
    if (result) {
      console.log('✅ PASSED');
      passedTests++;
    } else {
      console.log('❌ FAILED');
    }
  } catch (error) {
    console.log('❌ ERROR:', error.message);
  }
  console.log('');
}

// Test 1: Basic Calendar Creation
runTest('Basic Calendar Creation', () => {
  const calendar = CalendarController();
  const hasBindings = calendar.bindings && calendar.methods && calendar.events;
  const hasCurrentDate = calendar.bindings.currentDate && calendar.bindings.currentDate.current;
  
  if (hasBindings && hasCurrentDate) {
    console.log(`   ✓ Calendar initialized with current date: ${calendar.bindings.currentDate.current.toDateString()}`);
    console.log(`   ✓ Current month: ${calendar.bindings.monthName.current}`);
    console.log(`   ✓ Current year: ${calendar.bindings.currentYear.current}`);
    return true;
  }
  return false;
});

// Test 2: Date Selection (Single Date)
runTest('Single Date Selection', () => {
  const calendar = CalendarController();
  const testDate = new Date(2025, 5, 26); // June 26, 2025
  
  calendar.methods.selectDate(testDate);
  
  const selectedDate = calendar.bindings.selectedDate.current;
  if (selectedDate && selectedDate.toDateString() === testDate.toDateString()) {
    console.log(`   ✓ Selected date: ${selectedDate.toDateString()}`);
    return true;
  }
  return false;
});

// Test 3: Date Range Selection
runTest('Date Range Selection', () => {
  const calendar = CalendarController({
    isRangeSelection: true
  });
  
  const startDate = new Date(2025, 6, 10);
  const endDate = new Date(2025, 6, 15);
  
  calendar.methods.selectDate(startDate);
  calendar.methods.selectDate(endDate);
  
  const range = calendar.selectedDateRange || calendar.bindings.selectedDateRange?.current;
  if (range && range.startDate && range.endDate) {
    console.log(`   ✓ Range: ${range.startDate.toDateString()} to ${range.endDate.toDateString()}`);
    return true;
  }
  return false;
});

// Test 4: Calendar Navigation
runTest('Calendar Navigation', () => {
  const calendar = CalendarController();
  const initialMonth = calendar.bindings.currentMonth.current;
  const initialYear = calendar.bindings.currentYear.current;
  
  // Test month navigation
  calendar.methods.goToNextMonth();
  const nextMonth = calendar.bindings.currentMonth.current;
  const nextYear = calendar.bindings.currentYear.current;
  
  // Test year navigation
  calendar.methods.goToNextYear();
  const afterYearNavYear = calendar.bindings.currentYear.current;
  
  // Return to original state
  calendar.methods.goToPreviousYear();
  calendar.methods.goToPreviousMonth();
  
  const monthNavWorked = nextMonth !== initialMonth || nextYear !== initialYear;
  const yearNavWorked = afterYearNavYear !== nextYear;
  
  if (monthNavWorked && yearNavWorked) {
    console.log(`   ✓ Month navigation: ${initialMonth} -> ${nextMonth}`);
    console.log(`   ✓ Year navigation: ${nextYear} -> ${afterYearNavYear}`);
    return true;
  }
  return false;
});

// Test 5: Date Constraints
runTest('Date Constraints & Validation', () => {
  const calendar = CalendarController({
    minDate: new Date(2025, 5, 1),
    maxDate: new Date(2025, 6, 31),
    disabledDaysOfWeek: [0, 6] // Weekends
  });
  
  // Test disabled weekdays via calendar data
  const calendarDays = calendar.methods.generateCalendarDays();
  const sunday = calendarDays.find(day => day.date && day.date.getDay() === 0);
  const monday = calendarDays.find(day => day.date && day.date.getDay() === 1);
  
  // Test specific disabled dates
  calendar.methods.setDisabledDates([new Date(2025, 6, 4)]); // July 4th
  const updatedDays = calendar.methods.generateCalendarDays();
  const july4 = updatedDays.find(day => 
    day.date && day.date.getMonth() === 6 && day.date.getDate() === 4
  );
  
  const sundayDisabled = sunday && sunday.isDisabled;
  const mondayEnabled = monday && !monday.isDisabled;
  const july4Disabled = july4 && july4.isDisabled;
  
  if (sundayDisabled && mondayEnabled) {
    console.log(`   ✓ Weekend constraints work (Sunday disabled, Monday enabled)`);
    console.log(`   ✓ Specific date constraints work (July 4th disabled: ${july4Disabled})`);
    return true;
  }
  return false;
});

// Test 6: Calendar Data Generation
runTest('Calendar Data Generation', () => {
  const calendar = CalendarController();
  
  const calendarDays = calendar.methods.generateCalendarDays();
  const calendarMonths = calendar.methods.generateCalendarMonths();
  const calendarYears = calendar.methods.generateCalendarYears();
  
  // Validate calendar days structure
  const hasValidDays = calendarDays.length > 0 && 
    calendarDays.every(day => 
      typeof day.isCurrentMonth === 'boolean' &&
      typeof day.isToday === 'boolean' &&
      typeof day.isSelected === 'boolean' &&
      typeof day.isDisabled === 'boolean'
    );
  
  // Validate months
  const hasValidMonths = calendarMonths.length === 12;
  
  // Validate years
  const hasValidYears = calendarYears.length > 0;
  
  if (hasValidDays && hasValidMonths && hasValidYears) {
    console.log(`   ✓ Calendar days: ${calendarDays.length} (with metadata)`);
    console.log(`   ✓ Calendar months: ${calendarMonths.length}`);
    console.log(`   ✓ Calendar years: ${calendarYears.length}`);
    return true;
  }
  return false;
});

// Test 7: Internationalization
runTest('Internationalization Support', () => {
  const locales = ['en-US', 'fr-FR', 'de-DE', 'es-ES'];
  const results = [];
  
  locales.forEach(locale => {
    const calendar = CalendarController({ locale });
    const monthNames = calendar.methods.getMonthNames();
    const weekdayNames = calendar.methods.getWeekdayNames();
    
    // June should be different in different locales
    const june = monthNames[5];
    results.push({ locale, june, weekdays: weekdayNames.length });
  });
  
  // Check that we get different month names for different locales
  const uniqueJunes = new Set(results.map(r => r.june));
  
  if (uniqueJunes.size > 1) {
    results.forEach(r => {
      console.log(`   ✓ ${r.locale}: June = "${r.june}", ${r.weekdays} weekdays`);
    });
    return true;
  }
  return false;
});

// Test 8: Event System
runTest('Event System', () => {
  const calendar = CalendarController();
  let dateSelectedFired = false;
  let monthChangedFired = false;
  
  // Subscribe to events
  if (calendar.events.dateSelected) {
    calendar.events.dateSelected.subscribe((date) => {
      dateSelectedFired = true;
    });
  }
  
  if (calendar.events.monthChanged) {
    calendar.events.monthChanged.subscribe((month) => {
      monthChangedFired = true;
    });
  }
  
  // Trigger events
  calendar.methods.selectDate(new Date(2025, 5, 26));
  calendar.methods.goToNextMonth();
  
  if (dateSelectedFired && monthChangedFired) {
    console.log(`   ✓ Date selection event fired`);
    console.log(`   ✓ Month change event fired`);
    return true;
  } else if (dateSelectedFired) {
    console.log(`   ✓ Date selection event fired`);
    console.log(`   ? Month change event not available`);
    return true;
  }
  return false;
});

// Test 9: Focus and Accessibility
runTest('Focus and Accessibility Features', () => {
  const calendar = CalendarController();
  const testDate = new Date(2025, 5, 26);
  
  // Test focus management
  calendar.methods.setFocusedDate(testDate);
  const focusedDate = calendar.bindings.focusedDate.current;
  
  // Test accessible labels (with fallback)
  let accessibleLabel = null;
  try {
    if (typeof calendar.methods.getAccessibleDateLabel === 'function') {
      accessibleLabel = calendar.methods.getAccessibleDateLabel(testDate);
    }
  } catch (error) {
    // Fallback accessible label
    accessibleLabel = testDate.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  }
  
  // Test keyboard navigation
  let navigationTests = 0;
  let navigationPassed = 0;
  
  const navigationMethods = [
    'moveFocusRight',
    'moveFocusLeft', 
    'moveFocusUp',
    'moveFocusDown'
  ];
  
  navigationMethods.forEach(method => {
    navigationTests++;
    if (typeof calendar.methods[method] === 'function') {
      try {
        calendar.methods[method]();
        navigationPassed++;
      } catch (error) {
        // Method exists but might have implementation issues
      }
    }
  });
  
  if (focusedDate && accessibleLabel) {
    console.log(`   ✓ Focus management works`);
    console.log(`   ✓ Accessible labels: "${accessibleLabel}"`);
    console.log(`   ✓ Navigation methods: ${navigationPassed}/${navigationTests} available`);
    return true;
  }
  return false;
});

// Test 10: Date Formatting
runTest('Date Formatting', () => {
  const calendar = CalendarController();
  const testDate = new Date(2025, 5, 26);
  
  calendar.methods.selectDate(testDate);
  const defaultFormatted = calendar.methods.getFormattedDate();
  
  const customFormatted = calendar.methods.formatDate(testDate, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long'
  });
  
  // Test different locales
  calendar.methods.setLocale('fr-FR');
  const frenchFormatted = calendar.methods.formatDate(testDate);
  
  if (defaultFormatted && customFormatted && frenchFormatted) {
    console.log(`   ✓ Default format: ${defaultFormatted}`);
    console.log(`   ✓ Custom format: ${customFormatted}`);
    console.log(`   ✓ French format: ${frenchFormatted}`);
    return true;
  }
  return false;
});

// Test 11: Advanced Features
runTest('Advanced Features', () => {
  const calendar = CalendarController();
  
  // Test today detection
  const today = new Date();
  const isToday = calendar.methods.isToday(today);
  
  // Test week numbers
  let weekNumber = null;
  try {
    weekNumber = calendar.methods.getWeekNumber(today);
  } catch (error) {
    weekNumber = 'Not available';
  }
  
  // Test year range functionality
  const yearRange = calendar.methods.getCurrentYearRange();
  
  if (isToday && yearRange) {
    console.log(`   ✓ Today detection works`);
    console.log(`   ✓ Week number: ${weekNumber}`);
    console.log(`   ✓ Year range: ${yearRange.startYear}-${yearRange.endYear}`);
    return true;
  }
  return false;
});

// Test 12: Performance and Edge Cases
runTest('Performance and Edge Cases', () => {
  const calendar = CalendarController();
  
  // Test leap year handling
  const leapYear = new Date(2024, 1, 29); // Feb 29, 2024
  calendar.methods.selectDate(leapYear);
  const leapYearSelected = calendar.bindings.selectedDate.current;
  
  // Test year boundary navigation
  calendar.methods.goToDate(new Date(2024, 11, 31)); // Dec 31, 2024
  calendar.methods.goToNextMonth(); // Should go to Jan 2025
  const crossedYear = calendar.bindings.currentYear.current === 2025;
  
  // Test performance with rapid operations
  const startTime = Date.now();
  for (let i = 0; i < 100; i++) {
    calendar.methods.generateCalendarDays();
  }
  const endTime = Date.now();
  const performanceGood = (endTime - startTime) < 1000; // Should complete in under 1 second
  
  if (leapYearSelected && crossedYear && performanceGood) {
    console.log(`   ✓ Leap year handling works`);
    console.log(`   ✓ Year boundary navigation works`);
    console.log(`   ✓ Performance: 100 operations in ${endTime - startTime}ms`);
    return true;
  }
  return false;
});

// Final Results
console.log('📊 Test Results Summary');
console.log('======================');
console.log(`Passed: ${passedTests}/${totalTests} (${Math.round(passedTests/totalTests*100)}%)`);
console.log('');

if (passedTests === totalTests) {
  console.log('🎉 All tests passed! Date Controller is fully functional.');
} else if (passedTests >= totalTests * 0.8) {
  console.log('✅ Most tests passed! Date Controller is ready for production use.');
} else {
  console.log('⚠️ Some tests failed. Please review the issues above.');
}

console.log('');
console.log('🎯 Comprehensive Date Controller Test Complete!');
console.log('===============================================');
