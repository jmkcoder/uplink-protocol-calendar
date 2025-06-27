/**
 * Date Controller Demo
 * 
 * This file demonstrates basic and intermediate features of the Date Controller
 * Run with: node date-controller-demo.js
 */

const { CalendarController } = require('../../dist/index.js');

console.log('📅 Date Controller Demo\n');
console.log('======================\n');

// ========================================
// 1. Basic Calendar Setup
// ========================================
console.log('1. 📋 Basic Calendar Setup');
console.log('--------------------------');

const basicCalendar = CalendarController({
  firstDayOfWeek: 1, // Monday start
  locale: 'en-US'
});

console.log('✅ Basic calendar created');
console.log(`  Current month: ${basicCalendar.bindings.monthName.current}`);
console.log(`  Current year: ${basicCalendar.bindings.currentYear.current}`);
console.log(`  First day of week: ${basicCalendar.methods.getWeekdayNames(true)[0]}`);
console.log('');

// ========================================
// 2. Date Selection
// ========================================
console.log('2. 📅 Date Selection');
console.log('--------------------');

// Select today's date
const today = new Date();
basicCalendar.methods.selectDate(today);

console.log(`✅ Selected date: ${basicCalendar.bindings.selectedDate.current?.toDateString()}`);
console.log(`  Formatted: ${basicCalendar.methods.getFormattedDate()}`);

// Select a specific date
basicCalendar.methods.selectDate(2025, 11, 25); // Christmas 2025
console.log(`  Christmas 2025: ${basicCalendar.bindings.selectedDate.current?.toDateString()}`);
console.log('');

// ========================================
// 3. Calendar Navigation
// ========================================
console.log('3. 🧭 Calendar Navigation');
console.log('-------------------------');

console.log('✅ Navigation demo:');
console.log(`  Current: ${basicCalendar.bindings.monthName.current} ${basicCalendar.bindings.currentYear.current}`);

basicCalendar.methods.goToNextMonth();
console.log(`  Next month: ${basicCalendar.bindings.monthName.current} ${basicCalendar.bindings.currentYear.current}`);

basicCalendar.methods.goToPreviousMonth();
basicCalendar.methods.goToNextYear();
console.log(`  Next year: ${basicCalendar.bindings.monthName.current} ${basicCalendar.bindings.currentYear.current}`);

basicCalendar.methods.goToToday();
console.log(`  Back to today: ${basicCalendar.bindings.monthName.current} ${basicCalendar.bindings.currentYear.current}`);
console.log('');

// ========================================
// 4. Date Constraints
// ========================================
console.log('4. 🚫 Date Constraints');
console.log('----------------------');

const constrainedCalendar = CalendarController({
  firstDayOfWeek: 1
});

// Set date range (next 30 days)
const minDate = new Date();
const maxDate = new Date();
maxDate.setDate(maxDate.getDate() + 30);

constrainedCalendar.methods.setMinDate(minDate);
constrainedCalendar.methods.setMaxDate(maxDate);

console.log('✅ Date constraints applied:');
console.log(`  Min date: ${minDate.toDateString()}`);
console.log(`  Max date: ${maxDate.toDateString()}`);

// Disable weekends
constrainedCalendar.methods.setDisabledDaysOfWeek([0, 6]); // Sunday and Saturday
console.log('  Weekends disabled');

// Test some dates
const testDates = [
  new Date(2024, 5, 26), // Past date
  new Date(2025, 5, 28), // Saturday
  new Date(2025, 6, 1),  // Tuesday (valid)
  new Date(2025, 7, 15)  // Future date beyond range
];

testDates.forEach(date => {
  const isDisabled = constrainedCalendar.methods.isDateDisabled(date);
  console.log(`    ${date.toDateString()}: ${isDisabled ? '❌ Disabled' : '✅ Available'}`);
});
console.log('');

// ========================================
// 5. Date Range Selection
// ========================================
console.log('5. 📊 Date Range Selection');
console.log('--------------------------');

const rangeCalendar = CalendarController({
  isRangeSelection: true,
  firstDayOfWeek: 1
});

console.log('✅ Range selection enabled');

// Select a date range
const startDate = new Date(2025, 6, 10);
const endDate = new Date(2025, 6, 17);

rangeCalendar.methods.selectDate(startDate);
rangeCalendar.methods.selectDate(endDate);

const dateRange = rangeCalendar.selectedDateRange;
console.log(`  Range start: ${dateRange.startDate?.toDateString()}`);
console.log(`  Range end: ${dateRange.endDate?.toDateString()}`);

if (dateRange.startDate && dateRange.endDate) {
  const days = Math.ceil((dateRange.endDate - dateRange.startDate) / (1000 * 60 * 60 * 24)) + 1;
  console.log(`  Duration: ${days} days`);
}
console.log('');

// ========================================
// 6. Calendar Generation
// ========================================
console.log('6. 🗓️ Calendar Generation');
console.log('-------------------------');

const generator = CalendarController({
  firstDayOfWeek: 1,
  hideOtherMonthDays: false
});

generator.methods.goToMonth(6, 2025); // July 2025

console.log('✅ Calendar data generation:');

// Generate month view
const monthView = generator.methods.generateMonthView();
console.log(`  Month view for ${monthView.month + 1}/${monthView.year}:`);
console.log(`    Weeks: ${monthView.weeks.length}`);
console.log(`    Weekdays: ${monthView.weekdays.join(', ')}`);

// Show first week as example
if (monthView.weeks.length > 0) {
  console.log('    First week:');
  monthView.weeks[0].days.forEach(day => {
    const marker = day.isCurrentMonth ? '' : '(other month)';
    console.log(`      ${day.day} ${marker}`);
  });
}

// Generate year view
const yearMonths = generator.methods.generateCalendarMonths();
console.log(`\n  Year view: ${yearMonths.length} months`);
yearMonths.slice(0, 3).forEach(month => {
  const monthName = generator.methods.getMonthNames()[month.month];
  console.log(`    ${monthName}: ${month.isDisabled ? 'Disabled' : 'Available'}`);
});

// Generate decade view
const yearData = generator.methods.generateCalendarYears();
console.log(`\n  Decade view: ${yearData.length} years (${yearData[0].year}-${yearData[yearData.length-1].year})`);
console.log('');

// ========================================
// 7. Internationalization
// ========================================
console.log('7. 🌐 Internationalization');
console.log('--------------------------');

const i18nCalendars = [
  { locale: 'en-US', name: 'English (US)' },
  { locale: 'fr-FR', name: 'French' },
  { locale: 'de-DE', name: 'German' },
  { locale: 'ja-JP', name: 'Japanese' }
];

const testDate = new Date(2025, 5, 26);

console.log('✅ Same date in different locales:');
i18nCalendars.forEach(({ locale, name }) => {
  const calendar = CalendarController({ locale });
  calendar.methods.selectDate(testDate);
  
  const formatted = calendar.methods.formatDate(testDate);
  const monthNames = calendar.methods.getMonthNames();
  
  console.log(`  ${name}: ${formatted}`);
  console.log(`    June: ${monthNames[5]}`);
});
console.log('');

// ========================================
// 8. Event Handling
// ========================================
console.log('8. 🎭 Event Handling');
console.log('--------------------');

const eventCalendar = CalendarController({
  firstDayOfWeek: 1
});

console.log('✅ Setting up event listeners:');

let eventCount = 0;

// Subscribe to date selection events
if (eventCalendar.events.dateSelected) {
  eventCalendar.events.dateSelected.subscribe((date) => {
    eventCount++;
    console.log(`  📅 Date selected: ${date.toDateString()}`);
  });
}

// Subscribe to month change events
if (eventCalendar.events.monthChanged) {
  eventCalendar.events.monthChanged.subscribe((month) => {
    eventCount++;
    const monthName = eventCalendar.methods.getMonthNames()[month];
    console.log(`  📆 Month changed: ${monthName}`);
  });
}

// Trigger some events
console.log('\n  Triggering events:');
eventCalendar.methods.selectDate(new Date(2025, 7, 15));
eventCalendar.methods.goToNextMonth();
eventCalendar.methods.selectDate(new Date(2025, 8, 10));

console.log(`\n  Total events fired: ${eventCount}`);
console.log('');

// ========================================
// 9. Accessibility Features
// ========================================
console.log('9. ♿ Accessibility Features');
console.log('---------------------------');

const a11yCalendar = CalendarController({
  firstDayOfWeek: 1
});

const focusTestDate = new Date(2025, 5, 26);
a11yCalendar.methods.setFocusedDate(focusTestDate);

console.log('✅ Accessibility features:');
console.log(`  Focused date: ${a11yCalendar.bindings.focusedDate.current?.toDateString()}`);

// Test accessible labels
const accessibilityTestDates = [
  new Date(), // Today
  new Date(2025, 5, 27), // Tomorrow
  new Date(2025, 5, 29) // Sunday
];

accessibilityTestDates.forEach(date => {
  const label = a11yCalendar.methods.getAccessibleDateLabel(date);
  const isToday = a11yCalendar.methods.isToday(date);
  console.log(`  ${date.toDateString()}: "${label}" ${isToday ? '(Today)' : ''}`);
});

// Keyboard navigation demo
console.log('\n  Keyboard navigation:');
a11yCalendar.methods.moveFocusRight();
console.log(`    Move right: ${a11yCalendar.bindings.focusedDate.current?.toDateString()}`);

a11yCalendar.methods.moveFocusDown();
console.log(`    Move down (next week): ${a11yCalendar.bindings.focusedDate.current?.toDateString()}`);
console.log('');

// ========================================
// 10. Calendar Utilities
// ========================================
console.log('10. 🛠️ Calendar Utilities');
console.log('-------------------------');

const utilityCalendar = CalendarController({
  firstDayOfWeek: 1
});

console.log('✅ Calendar utilities:');

// Week number calculation
const weekTestDate = new Date(2025, 5, 26);
const weekNumber = utilityCalendar.methods.getWeekNumber(weekTestDate);
console.log(`  Week number for ${weekTestDate.toDateString()}: ${weekNumber}`);

// Month and weekday names
const monthNames = utilityCalendar.methods.getMonthNames();
const weekdayNames = utilityCalendar.methods.getWeekdayNames(true);

console.log(`  All months: ${monthNames.slice(0, 3).join(', ')}...`);
console.log(`  Weekdays (short): ${weekdayNames.join(', ')}`);

// Date formatting options
utilityCalendar.methods.setDateFormatOptions({
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long'
});

utilityCalendar.methods.selectDate(weekTestDate);
console.log(`  Custom format: ${utilityCalendar.methods.getFormattedDate()}`);

// Current locale info
console.log(`  Current locale: ${utilityCalendar.methods.getLocale()}`);
console.log('');

console.log('🎯 Date Controller Demo Complete!');
console.log('=================================');
console.log('');
console.log('Features demonstrated:');
console.log('• 📋 Basic calendar setup & configuration');
console.log('• 📅 Date selection (single & range)');
console.log('• 🧭 Calendar navigation');
console.log('• 🚫 Date constraints & validation');
console.log('• 🗓️ Calendar data generation');
console.log('• 🌐 Internationalization support');
console.log('• 🎭 Event handling & subscriptions');
console.log('• ♿ Accessibility features');
console.log('• 🛠️ Utility functions');
console.log('');
console.log('This controller is ready for:');
console.log('• Building date picker components');
console.log('• Creating calendar widgets');
console.log('• Implementing booking systems');
console.log('• Multi-language applications');
console.log('• Accessible date selection interfaces');
