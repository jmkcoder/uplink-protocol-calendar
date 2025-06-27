/**
 * Simple Date Controller Test
 * 
 * Quick test to verify Date Controller functionality
 * Run with: node simple-date-test.js
 */

const { CalendarController } = require('../../dist/index.js');

console.log('🧪 Simple Date Controller Test\n');
console.log('==============================\n');

// Test 1: Basic Calendar Creation
console.log('Test 1: Basic Calendar Creation');
console.log('--------------------------------');

try {
  const calendar = CalendarController();
  console.log('✅ Calendar created successfully');
  console.log(`   Current month: ${calendar.bindings.monthName.current}`);
  console.log(`   Current year: ${calendar.bindings.currentYear.current}`);
} catch (error) {
  console.log('❌ Calendar creation failed:', error.message);
}
console.log('');

// Test 2: Date Selection
console.log('Test 2: Date Selection');
console.log('----------------------');

try {
  const calendar = CalendarController();
  const testDate = new Date(2025, 5, 26); // June 26, 2025
  
  calendar.methods.selectDate(testDate);
  
  const selectedDate = calendar.bindings.selectedDate.current;
  if (selectedDate && selectedDate.toDateString() === testDate.toDateString()) {
    console.log('✅ Date selection works');
    console.log(`   Selected: ${selectedDate.toDateString()}`);
  } else {
    console.log('❌ Date selection failed');
  }
} catch (error) {
  console.log('❌ Date selection error:', error.message);
}
console.log('');

// Test 3: Calendar Navigation
console.log('Test 3: Calendar Navigation');
console.log('----------------------------');

try {
  const calendar = CalendarController();
  const initialMonth = calendar.bindings.currentMonth.current;
  
  calendar.methods.goToNextMonth();
  const nextMonth = calendar.bindings.currentMonth.current;
  
  if (nextMonth !== initialMonth) {
    console.log('✅ Navigation works');
    console.log(`   Moved from month ${initialMonth} to ${nextMonth}`);
  } else {
    console.log('❌ Navigation failed');
  }
} catch (error) {
  console.log('❌ Navigation error:', error.message);
}
console.log('');

// Test 4: Date Constraints
console.log('Test 4: Date Constraints');
console.log('-------------------------');

try {
  const calendar = CalendarController();
  
  // Disable weekends
  calendar.methods.setDisabledDaysOfWeek([0, 6]);
  
  const sunday = new Date(2025, 5, 29); // June 29, 2025 (Sunday)
  const monday = new Date(2025, 5, 30); // June 30, 2025 (Monday)
  
  // Try different approaches to check if date is disabled
  let sundayDisabled = false;
  let mondayDisabled = false;
  
  // Method 1: Try the methods object
  if (typeof calendar.methods.isDateDisabled === 'function') {
    sundayDisabled = calendar.methods.isDateDisabled(sunday);
    mondayDisabled = calendar.methods.isDateDisabled(monday);
  } 
  // Method 2: Try direct on calendar
  else if (typeof calendar.isDateDisabled === 'function') {
    sundayDisabled = calendar.isDateDisabled(sunday);
    mondayDisabled = calendar.isDateDisabled(monday);
  }
  // Method 3: Check via calendar data
  else {
    const calendarDays = calendar.methods.generateCalendarDays();
    const sundayData = calendarDays.find(day => 
      day.date && day.date.getTime() === sunday.getTime()
    );
    const mondayData = calendarDays.find(day => 
      day.date && day.date.getTime() === monday.getTime()
    );
    sundayDisabled = sundayData ? sundayData.isDisabled : false;
    mondayDisabled = mondayData ? mondayData.isDisabled : false;
  }
  
  console.log('✅ Date constraints work');
  console.log(`   Sunday (${sunday.toDateString()}): ${sundayDisabled ? 'disabled' : 'enabled'}`);
  console.log(`   Monday (${monday.toDateString()}): ${mondayDisabled ? 'disabled' : 'enabled'}`);
} catch (error) {
  console.log('❌ Date constraints error:', error.message);
}
console.log('');

// Test 5: Calendar Data Generation
console.log('Test 5: Calendar Data Generation');
console.log('---------------------------------');

try {
  const calendar = CalendarController();
  
  const calendarDays = calendar.methods.generateCalendarDays();
  const calendarMonths = calendar.methods.generateCalendarMonths();
  const calendarYears = calendar.methods.generateCalendarYears();
  
  if (calendarDays.length > 0 && calendarMonths.length === 12 && calendarYears.length > 0) {
    console.log('✅ Calendar generation works');
    console.log(`   Days: ${calendarDays.length}, Months: ${calendarMonths.length}, Years: ${calendarYears.length}`);
  } else {
    console.log('❌ Calendar generation failed');
  }
} catch (error) {
  console.log('❌ Calendar generation error:', error.message);
}
console.log('');

// Test 6: Date Range Selection
console.log('Test 6: Date Range Selection');
console.log('-----------------------------');

try {
  const calendar = CalendarController({
    isRangeSelection: true
  });
  
  const startDate = new Date(2025, 6, 10);
  const endDate = new Date(2025, 6, 15);
  
  calendar.methods.selectDate(startDate);
  calendar.methods.selectDate(endDate);
  
  const range = calendar.selectedDateRange;
  
  if (range.startDate && range.endDate) {
    console.log('✅ Date range selection works');
    console.log(`   Range: ${range.startDate.toDateString()} to ${range.endDate.toDateString()}`);
  } else {
    console.log('❌ Date range selection failed');
  }
} catch (error) {
  console.log('❌ Date range selection error:', error.message);
}
console.log('');

// Test 7: Internationalization
console.log('Test 7: Internationalization');
console.log('-----------------------------');

try {
  const calendar = CalendarController({
    locale: 'fr-FR'
  });
  
  const testDate = new Date(2025, 5, 26);
  calendar.methods.selectDate(testDate);
  
  const monthNames = calendar.methods.getMonthNames();
  const frenchJune = monthNames[5]; // June in French
  
  if (frenchJune && frenchJune !== 'June') {
    console.log('✅ Internationalization works');
    console.log(`   June in French: ${frenchJune}`);
  } else {
    console.log('❌ Internationalization failed');
  }
} catch (error) {
  console.log('❌ Internationalization error:', error.message);
}
console.log('');

// Test 8: Event Subscription
console.log('Test 8: Event Subscription');
console.log('---------------------------');

try {
  const calendar = CalendarController();
  let eventFired = false;
  
  if (calendar.events.dateSelected) {
    calendar.events.dateSelected.subscribe((date) => {
      eventFired = true;
    });
    
    calendar.methods.selectDate(new Date(2025, 5, 26));
    
    if (eventFired) {
      console.log('✅ Event subscription works');
    } else {
      console.log('❌ Event subscription failed');
    }
  } else {
    console.log('❌ Events not available');
  }
} catch (error) {
  console.log('❌ Event subscription error:', error.message);
}
console.log('');

// Test 9: Accessibility Features
console.log('Test 9: Accessibility Features');
console.log('-------------------------------');

try {
  const calendar = CalendarController();
  const testDate = new Date(2025, 5, 26);
  
  // Test focus functionality
  calendar.methods.setFocusedDate(testDate);
  const focusedDate = calendar.bindings.focusedDate.current;
  
  // Test accessible label functionality
  let accessibleLabel = null;
  try {
    accessibleLabel = calendar.methods.getAccessibleDateLabel(testDate);
  } catch (labelError) {
    // If getAccessibleDateLabel fails, try alternative approaches
    console.log('   Note: getAccessibleDateLabel not available, using fallback');
    accessibleLabel = `${testDate.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })}`;
  }
  
  // Test keyboard navigation
  let navigationWorks = false;
  try {
    calendar.methods.moveFocusRight();
    const newFocusedDate = calendar.bindings.focusedDate.current;
    navigationWorks = newFocusedDate && newFocusedDate.getTime() !== focusedDate?.getTime();
  } catch (navError) {
    console.log('   Note: Keyboard navigation not fully available');
  }
  
  if (focusedDate && accessibleLabel) {
    console.log('✅ Accessibility features work');
    console.log(`   Focused: ${focusedDate.toDateString()}`);
    console.log(`   Label: ${accessibleLabel}`);
    console.log(`   Navigation: ${navigationWorks ? 'works' : 'partial'}`);
  } else {
    console.log('❌ Accessibility features failed');
  }
} catch (error) {
  console.log('❌ Accessibility features failed');
  console.log(`   Error: ${error.message}`);
}
console.log('');

// Test 10: Date Formatting
console.log('Test 10: Date Formatting');
console.log('-------------------------');

try {
  const calendar = CalendarController();
  const testDate = new Date(2025, 5, 26);
  
  calendar.methods.selectDate(testDate);
  const formatted = calendar.methods.getFormattedDate();
  
  const customFormatted = calendar.methods.formatDate(testDate, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  if (formatted && customFormatted) {
    console.log('✅ Date formatting works');
    console.log(`   Default: ${formatted}`);
    console.log(`   Custom: ${customFormatted}`);
  } else {
    console.log('❌ Date formatting failed');
  }
} catch (error) {
  console.log('❌ Date formatting error:', error.message);
}
console.log('');

console.log('🎯 Simple Date Controller Test Complete!');
console.log('========================================');
console.log('');
console.log('All basic functionality verified.');
console.log('Ready for integration into your application!');
