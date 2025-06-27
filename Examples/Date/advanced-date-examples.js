/**
 * Advanced Date Controller Examples
 * 
 * This file demonstrates advanced features, edge cases, and complex scenarios
 * Run with: node advanced-date-examples.js
 */

const { CalendarController } = require('../../dist/index.js');

console.log('📅 Advanced Date Controller Examples\n');
console.log('====================================\n');

// ========================================
// 1. Complex Date Constraints & Business Rules
// ========================================
console.log('1. 🏢 Complex Date Constraints & Business Rules');
console.log('-----------------------------------------------');

const businessCalendar = CalendarController({
  firstDayOfWeek: 1, // Monday start
  isRangeSelection: false,
  hideOtherMonthDays: false
});

// Business rules: No weekends, no holidays, no first week of each quarter
const holidays2025 = [
  new Date(2025, 0, 1),   // New Year's Day
  new Date(2025, 0, 20),  // MLK Day
  new Date(2025, 1, 17),  // Presidents Day
  new Date(2025, 4, 26),  // Memorial Day
  new Date(2025, 6, 4),   // Independence Day
  new Date(2025, 8, 1),   // Labor Day
  new Date(2025, 9, 13),  // Columbus Day
  new Date(2025, 10, 11), // Veterans Day
  new Date(2025, 10, 27), // Thanksgiving
  new Date(2025, 11, 25)  // Christmas
];

// Disable weekends (Saturday=6, Sunday=0)
businessCalendar.methods.setDisabledDaysOfWeek([0, 6]);

// Disable holidays
businessCalendar.methods.setDisabledDates(holidays2025);

// Set business constraints: Only allow dates 30 days in future, up to 6 months ahead
const today = new Date();
const minBusinessDate = new Date(today);
minBusinessDate.setDate(today.getDate() + 30);

const maxBusinessDate = new Date(today);
maxBusinessDate.setMonth(today.getMonth() + 6);

businessCalendar.methods.setMinDate(minBusinessDate);
businessCalendar.methods.setMaxDate(maxBusinessDate);

console.log('✅ Business Calendar System:');
console.log(`  - Min date: ${minBusinessDate.toDateString()}`);
console.log(`  - Max date: ${maxBusinessDate.toDateString()}`);
console.log(`  - Disabled holidays: ${holidays2025.length} dates`);
console.log('  - Weekends disabled');

// Test various business dates
const testBusinessDates = [
  { date: new Date(2025, 6, 4), label: 'Independence Day (Holiday)' },
  { date: new Date(2025, 6, 5), label: 'Saturday (Weekend)' },
  { date: new Date(2025, 6, 7), label: 'Monday (Business day)' },
  { date: new Date(2025, 11, 15), label: 'Future Monday' },
  { date: new Date(2025, 5, 28), label: 'Next week Saturday' }
];

testBusinessDates.forEach(test => {
  const isDisabled = businessCalendar.methods.isDateDisabled(test.date);
  console.log(`  ${test.label}: ${isDisabled ? '❌ Blocked' : '✅ Available'}`);
});
console.log('');

// ========================================
// 2. Multi-locale & International Support
// ========================================
console.log('2. 🌍 Multi-locale & International Support');
console.log('------------------------------------------');

const locales = [
  { code: 'en-US', name: 'English (US)', firstDay: 0 },
  { code: 'en-GB', name: 'English (UK)', firstDay: 1 },
  { code: 'fr-FR', name: 'French (France)', firstDay: 1 },
  { code: 'de-DE', name: 'German (Germany)', firstDay: 1 },
  { code: 'ja-JP', name: 'Japanese (Japan)', firstDay: 0 },
  { code: 'ar-SA', name: 'Arabic (Saudi Arabia)', firstDay: 0 },
  { code: 'zh-CN', name: 'Chinese (China)', firstDay: 1 },
  { code: 'es-ES', name: 'Spanish (Spain)', firstDay: 1 }
];

const testDate = new Date(2025, 5, 26); // June 26, 2025

console.log('✅ Same date across different locales:');
locales.forEach(locale => {
  const calendar = CalendarController({
    locale: locale.code,
    firstDayOfWeek: locale.firstDay
  });
  
  calendar.methods.selectDate(testDate);
  
  // Get month names and weekdays
  const monthNames = calendar.methods.getMonthNames();
  const weekdays = calendar.methods.getWeekdayNames(true);
  const formatted = calendar.methods.formatDate(testDate);
  
  console.log(`  ${locale.name}:`);
  console.log(`    Date: ${formatted}`);
  console.log(`    Month: ${monthNames[testDate.getMonth()]}`);
  console.log(`    First weekday: ${weekdays[0]}`);
});
console.log('');

// ========================================
// 3. Date Range Selection & Booking Systems
// ========================================
console.log('3. 📋 Date Range Selection & Booking Systems');
console.log('--------------------------------------------');

const hotelBooking = CalendarController({
  isRangeSelection: true,
  firstDayOfWeek: 1,
  minDate: new Date(2025, 5, 26), // Today onwards
  maxDate: new Date(2025, 11, 31) // End of year
});

// Simulate existing bookings (blocked date ranges)
const existingBookings = [
  { start: new Date(2025, 6, 10), end: new Date(2025, 6, 15), guest: 'Smith Family' },
  { start: new Date(2025, 6, 20), end: new Date(2025, 6, 25), guest: 'Jones Group' },
  { start: new Date(2025, 7, 5), end: new Date(2025, 7, 12), guest: 'Wilson Wedding' }
];

// Create blocked dates array from existing bookings
const blockedDates = [];
existingBookings.forEach(booking => {
  const current = new Date(booking.start);
  while (current <= booking.end) {
    blockedDates.push(new Date(current));
    current.setDate(current.getDate() + 1);
  }
});

hotelBooking.methods.setDisabledDates(blockedDates);

console.log('✅ Hotel Booking System:');
console.log('  Existing reservations:');
existingBookings.forEach((booking, i) => {
  console.log(`    ${i + 1}. ${booking.guest}: ${booking.start.toDateString()} - ${booking.end.toDateString()}`);
});

// Test new booking requests
const newBookingRequests = [
  { start: new Date(2025, 6, 5), end: new Date(2025, 6, 9), label: 'July 5-9' },
  { start: new Date(2025, 6, 12), end: new Date(2025, 6, 18), label: 'July 12-18 (Overlaps)' },
  { start: new Date(2025, 7, 15), end: new Date(2025, 7, 20), label: 'August 15-20' }
];

console.log('\n  Testing new booking requests:');
newBookingRequests.forEach(request => {
  const hasConflict = blockedDates.some(blocked => 
    blocked >= request.start && blocked <= request.end
  );
  console.log(`    ${request.label}: ${hasConflict ? '❌ Conflict' : '✅ Available'}`);
});
console.log('');

// ========================================
// 4. Dynamic Calendar View Navigation
// ========================================
console.log('4. 🗓️ Dynamic Calendar View Navigation');
console.log('--------------------------------------');

const viewNavigator = CalendarController({
  firstDayOfWeek: 1,
  yearRangeSize: 12
});

// Navigate through different views and time periods
console.log('✅ Calendar view navigation:');

// Start with current month
console.log(`  Current month: ${viewNavigator.bindings.monthName.current} ${viewNavigator.bindings.currentYear.current}`);

// Navigate to specific month/year
viewNavigator.methods.selectMonth(11, 2025); // December 2025
console.log(`  Navigate to: ${viewNavigator.bindings.monthName.current} ${viewNavigator.bindings.currentYear.current}`);

// Generate different view types
const monthView = viewNavigator.methods.generateMonthView();
console.log(`  Month view: ${monthView.weeks.length} weeks, ${monthView.weekdays.length} weekdays`);

const monthsData = viewNavigator.methods.generateCalendarMonths();
console.log(`  Year view: ${monthsData.length} months for ${viewNavigator.bindings.currentYear.current}`);

const yearsData = viewNavigator.methods.generateCalendarYears();
console.log(`  Decade view: ${yearsData.length} years (${yearsData[0].year}-${yearsData[yearsData.length-1].year})`);

// Year range navigation
console.log('\n  Year range navigation:');
const currentRange = viewNavigator.methods.getCurrentYearRange();
console.log(`    Current decade: ${currentRange.startYear}-${currentRange.endYear}`);

viewNavigator.methods.goToNextYearRange();
const nextRange = viewNavigator.methods.getCurrentYearRange();
console.log(`    Next decade: ${nextRange.startYear}-${nextRange.endYear}`);

viewNavigator.methods.goToPreviousYearRange();
console.log('    Returned to previous decade');
console.log('');

// ========================================
// 5. Accessibility & Keyboard Navigation
// ========================================
console.log('5. ♿ Accessibility & Keyboard Navigation');
console.log('----------------------------------------');

const accessibleCalendar = CalendarController({
  firstDayOfWeek: 1
});

// Set focus to a specific date
const focusDate = new Date(2025, 5, 26);
accessibleCalendar.methods.setFocusedDate(focusDate);

console.log('✅ Accessibility features:');
console.log(`  Focused date: ${accessibleCalendar.bindings.focusedDate.current?.toDateString()}`);

// Test accessible labels
const testDates = [
  new Date(2025, 5, 26), // Today
  new Date(2025, 5, 25), // Yesterday
  new Date(2025, 5, 27), // Tomorrow
  new Date(2025, 6, 4),  // Independence Day
];

console.log('\n  Accessible date labels:');
testDates.forEach(date => {
  const label = accessibleCalendar.methods.getAccessibleDateLabel(date);
  const stateDesc = accessibleCalendar.methods.getDateStateDescription(date);
  console.log(`    ${date.toDateString()}`);
  console.log(`      Label: ${label}`);
  console.log(`      State: ${stateDesc}`);
});

// Simulate keyboard navigation
console.log('\n  Keyboard navigation simulation:');
const keyboardActions = [
  'Focus right (next day)',
  'Focus down (next week)',
  'Focus to month start',
  'Focus to month end',
  'Focus to next month',
  'Select focused date'
];

keyboardActions.forEach((action, i) => {
  switch (i) {
    case 0:
      accessibleCalendar.methods.moveFocusRight();
      break;
    case 1:
      accessibleCalendar.methods.moveFocusDown();
      break;
    case 2:
      accessibleCalendar.methods.moveFocusToStartOfMonth();
      break;
    case 3:
      accessibleCalendar.methods.moveFocusToEndOfMonth();
      break;
    case 4:
      accessibleCalendar.methods.moveFocusToNextMonth();
      break;
    case 5:
      accessibleCalendar.methods.selectFocusedDate();
      break;
  }
  
  console.log(`    ${i + 1}. ${action}`);
  if (accessibleCalendar.bindings.focusedDate.current) {
    console.log(`       Focus: ${accessibleCalendar.bindings.focusedDate.current.toDateString()}`);
  }
  if (accessibleCalendar.bindings.selectedDate.current) {
    console.log(`       Selected: ${accessibleCalendar.bindings.selectedDate.current.toDateString()}`);
  }
});
console.log('');

// ========================================
// 6. Event-Driven Calendar Updates
// ========================================
console.log('6. 🎭 Event-Driven Calendar Updates');
console.log('-----------------------------------');

const eventCalendar = CalendarController({
  firstDayOfWeek: 1
});

let eventLog = [];

// Subscribe to all calendar events
console.log('✅ Setting up event subscriptions:');

if (eventCalendar.events.dateSelected) {
  eventCalendar.events.dateSelected.subscribe((date) => {
    eventLog.push(`Date selected: ${date.toDateString()}`);
    console.log(`  📅 ${eventLog[eventLog.length - 1]}`);
  });
}

if (eventCalendar.events.monthChanged) {
  eventCalendar.events.monthChanged.subscribe((month) => {
    eventLog.push(`Month changed: ${month}`);
    console.log(`  📆 ${eventLog[eventLog.length - 1]}`);
  });
}

if (eventCalendar.events.yearChanged) {
  eventCalendar.events.yearChanged.subscribe((year) => {
    eventLog.push(`Year changed: ${year}`);
    console.log(`  🗓️ ${eventLog[eventLog.length - 1]}`);
  });
}

if (eventCalendar.events.viewChanged) {
  eventCalendar.events.viewChanged.subscribe((view) => {
    eventLog.push(`View changed: ${view.month + 1}/${view.year}`);
    console.log(`  👁️ ${eventLog[eventLog.length - 1]}`);
  });
}

// Trigger various events
console.log('\n  Triggering calendar events:');
eventCalendar.methods.selectDate(new Date(2025, 7, 15));
eventCalendar.methods.goToNextMonth();
eventCalendar.methods.goToNextYear();
eventCalendar.methods.selectMonth(2, 2026); // March 2026

console.log(`\n  Total events fired: ${eventLog.length}`);
console.log('');

// ========================================
// 7. Calendar Data Generation & Analysis
// ========================================
console.log('7. 📊 Calendar Data Generation & Analysis');
console.log('-----------------------------------------');

const dataCalendar = CalendarController({
  firstDayOfWeek: 1,
  hideOtherMonthDays: false
});

// Navigate to specific month for analysis
dataCalendar.methods.goToMonth(6, 2025); // July 2025

console.log('✅ Calendar data analysis for July 2025:');

// Generate calendar days with detailed analysis
const calendarDays = dataCalendar.methods.generateCalendarDays();
const currentMonthDays = calendarDays.filter(day => day.isCurrentMonth);
const otherMonthDays = calendarDays.filter(day => !day.isCurrentMonth);
const weekends = calendarDays.filter(day => day.dayOfWeek === 0 || day.dayOfWeek === 6);

console.log(`  Total calendar cells: ${calendarDays.length}`);
console.log(`  Current month days: ${currentMonthDays.length}`);
console.log(`  Other month days: ${otherMonthDays.length}`);
console.log(`  Weekend days: ${weekends.length}`);

// Week analysis
const monthView = dataCalendar.methods.generateMonthView();
console.log(`\n  Weekly breakdown:`);
monthView.weeks.forEach((week, i) => {
  const weekDays = week.days.filter(day => day.isCurrentMonth);
  const weekNumber = dataCalendar.methods.getWeekNumber(weekDays[0]?.date || new Date());
  console.log(`    Week ${i + 1} (ISO week ${weekNumber}): ${weekDays.length} days in month`);
});

// Month analysis across the year
console.log('\n  Year overview:');
const yearMonths = dataCalendar.methods.generateCalendarMonths();
yearMonths.forEach(month => {
  const monthName = dataCalendar.methods.getMonthNames()[month.month];
  console.log(`    ${monthName}: ${month.isCurrentMonth ? 'Current' : 'Available'}, ${month.isDisabled ? 'Disabled' : 'Enabled'}`);
});
console.log('');

// ========================================
// 8. Performance Testing & Optimization
// ========================================
console.log('8. 📈 Performance Testing & Optimization');
console.log('----------------------------------------');

const perfCalendar = CalendarController({
  firstDayOfWeek: 1
});

// Test performance of various operations
const performanceTests = [
  {
    name: 'Date Selection',
    test: () => {
      const start = performance.now();
      for (let i = 0; i < 1000; i++) {
        const randomDate = new Date(2025, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1);
        perfCalendar.methods.selectDate(randomDate);
      }
      return performance.now() - start;
    }
  },
  {
    name: 'Calendar Generation',
    test: () => {
      const start = performance.now();
      for (let i = 0; i < 100; i++) {
        perfCalendar.methods.generateCalendarDays();
        perfCalendar.methods.generateCalendarMonths();
        perfCalendar.methods.generateCalendarYears();
      }
      return performance.now() - start;
    }
  },
  {
    name: 'Navigation Operations',
    test: () => {
      const start = performance.now();
      for (let i = 0; i < 500; i++) {
        perfCalendar.methods.goToNextMonth();
        perfCalendar.methods.goToPreviousMonth();
        perfCalendar.methods.goToNextYear();
        perfCalendar.methods.goToPreviousYear();
      }
      return performance.now() - start;
    }
  },
  {
    name: 'Date Validation',
    test: () => {
      const testDates = [];
      for (let i = 0; i < 365; i++) {
        const date = new Date(2025, 0, 1);
        date.setDate(date.getDate() + i);
        testDates.push(date);
      }
      
      const start = performance.now();
      testDates.forEach(date => {
        perfCalendar.methods.isDateDisabled(date);
        perfCalendar.methods.isToday(date);
      });
      return performance.now() - start;
    }
  }
];

console.log('✅ Performance test results:');
performanceTests.forEach(test => {
  const duration = test.test();
  console.log(`  ${test.name}: ${duration.toFixed(2)}ms`);
});
console.log('');

// ========================================
// 9. Edge Cases & Error Handling
// ========================================
console.log('9. 🚨 Edge Cases & Error Handling');
console.log('----------------------------------');

const robustCalendar = CalendarController({
  firstDayOfWeek: 1
});

const edgeCases = [
  {
    name: 'Leap year handling',
    test: () => {
      // Test February 29th in leap years and non-leap years
      const leapYear = new Date(2024, 1, 29); // Feb 29, 2024 (leap year)
      const nonLeapYear = new Date(2025, 1, 29); // Feb 29, 2025 (not leap year - invalid)
      
      robustCalendar.methods.selectDate(leapYear);
      const leapResult = robustCalendar.bindings.selectedDate.current?.toDateString() || 'Failed';
      
      try {
        robustCalendar.methods.selectDate(nonLeapYear);
        const nonLeapResult = robustCalendar.bindings.selectedDate.current?.toDateString() || 'Failed';
        return `Leap: ${leapResult}, Non-leap: ${nonLeapResult}`;
      } catch (error) {
        return `Leap: ${leapResult}, Non-leap: Properly rejected`;
      }
    }
  },
  {
    name: 'Year boundary navigation',
    test: () => {
      robustCalendar.methods.goToMonth(11, 2025); // December 2025
      const dec2025 = `${robustCalendar.bindings.monthName.current} ${robustCalendar.bindings.currentYear.current}`;
      
      robustCalendar.methods.goToNextMonth(); // Should go to January 2026
      const jan2026 = `${robustCalendar.bindings.monthName.current} ${robustCalendar.bindings.currentYear.current}`;
      
      return `${dec2025} → ${jan2026}`;
    }
  },
  {
    name: 'Invalid date constraints',
    test: () => {
      try {
        // Try to set min date after max date
        robustCalendar.methods.setMinDate(new Date(2025, 11, 31));
        robustCalendar.methods.setMaxDate(new Date(2025, 0, 1));
        return 'Invalid constraints accepted (potential issue)';
      } catch (error) {
        return 'Invalid constraints properly rejected';
      }
    }
  },
  {
    name: 'Extreme date values',
    test: () => {
      try {
        const extremeDate = new Date(2100, 0, 1);
        robustCalendar.methods.selectDate(extremeDate);
        return `Extreme future date: ${robustCalendar.bindings.selectedDate.current?.getFullYear() || 'Failed'}`;
      } catch (error) {
        return 'Extreme date properly handled';
      }
    }
  }
];

console.log('✅ Edge case testing:');
edgeCases.forEach(testCase => {
  try {
    const result = testCase.test();
    console.log(`  ${testCase.name}: ✅ ${result}`);
  } catch (error) {
    console.log(`  ${testCase.name}: ❌ ${error.message}`);
  }
});
console.log('');

// ========================================
// 10. Integration with External Data Sources
// ========================================
console.log('10. 🔗 Integration with External Data Sources');
console.log('----------------------------------------------');

const integrationCalendar = CalendarController({
  firstDayOfWeek: 1,
  isRangeSelection: true
});

// Simulate external calendar events/appointments
const externalEvents = [
  {
    id: 'evt1',
    title: 'Team Standup',
    date: new Date(2025, 5, 27),
    type: 'recurring',
    priority: 'normal'
  },
  {
    id: 'evt2',
    title: 'Client Presentation',
    date: new Date(2025, 5, 30),
    type: 'meeting',
    priority: 'high'
  },
  {
    id: 'evt3',
    title: 'Project Deadline',
    date: new Date(2025, 6, 15),
    type: 'deadline',
    priority: 'critical'
  },
  {
    id: 'evt4',
    title: 'Team Building',
    date: new Date(2025, 6, 20),
    type: 'event',
    priority: 'low'
  }
];

// Integrate external events with calendar
const eventDates = externalEvents.map(event => event.date);

console.log('✅ External calendar integration:');
console.log('  External events:');
externalEvents.forEach((event, i) => {
  console.log(`    ${i + 1}. ${event.title} (${event.date.toDateString()}) - ${event.priority} priority`);
});

// Find available dates for new meetings (avoiding existing events)
const findAvailableDates = (startDate, daysToCheck, excludeDates) => {
  const available = [];
  const current = new Date(startDate);
  
  for (let i = 0; i < daysToCheck; i++) {
    const isWeekend = current.getDay() === 0 || current.getDay() === 6;
    const hasEvent = excludeDates.some(excludeDate => 
      excludeDate.toDateString() === current.toDateString()
    );
    
    if (!isWeekend && !hasEvent) {
      available.push(new Date(current));
    }
    
    current.setDate(current.getDate() + 1);
  }
  
  return available.slice(0, 5); // Return first 5 available dates
};

const availableDates = findAvailableDates(new Date(2025, 5, 26), 30, eventDates);

console.log('\n  Available dates for new meetings (next 30 days):');
availableDates.forEach((date, i) => {
  console.log(`    ${i + 1}. ${date.toDateString()}`);
});

// Event density analysis
const eventsByMonth = {};
externalEvents.forEach(event => {
  const monthKey = `${event.date.getFullYear()}-${event.date.getMonth()}`;
  eventsByMonth[monthKey] = (eventsByMonth[monthKey] || 0) + 1;
});

console.log('\n  Event density by month:');
Object.entries(eventsByMonth).forEach(([monthKey, count]) => {
  const [year, month] = monthKey.split('-');
  const monthName = integrationCalendar.methods.getMonthNames()[parseInt(month)];
  console.log(`    ${monthName} ${year}: ${count} events`);
});
console.log('');

console.log('🎯 Advanced Date Examples Complete!');
console.log('===================================');
console.log('');
console.log('Advanced capabilities demonstrated:');
console.log('• 🏢 Complex business rules & constraints');
console.log('• 🌍 Multi-locale & internationalization');
console.log('• 📋 Date range selection & booking systems');
console.log('• 🗓️ Dynamic view navigation & generation');
console.log('• ♿ Accessibility & keyboard navigation');
console.log('• 🎭 Event-driven reactive updates');
console.log('• 📊 Calendar data analysis');
console.log('• 📈 Performance optimization');
console.log('• 🚨 Robust error handling');
console.log('• 🔗 External system integration');
console.log('');
console.log('These examples show how the Calendar Controller can handle:');
console.log('• Enterprise scheduling applications');
console.log('• Hotel/booking reservation systems');
console.log('• Multi-language calendar interfaces');
console.log('• Accessibility-compliant date pickers');
console.log('• High-performance calendar widgets');
console.log('• Complex business rule enforcement');
console.log('• Integration with external calendar systems');
