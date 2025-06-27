/**
 * Date Controller Clean Demo
 * 
 * Clean, focused examples of Date Controller features
 * Run with: node date-controller-clean-demo.js
 */

const { CalendarController } = require('../../dist/index.js');

console.log('📅 Date Controller Clean Demo\n');

// ==========================================
// BASIC USAGE
// ==========================================

console.log('BASIC USAGE');
console.log('===========\n');

// Create a basic calendar
const calendar = CalendarController({
  firstDayOfWeek: 1, // Monday start
  locale: 'en-US'
});

// Select a date
calendar.methods.selectDate(new Date(2025, 5, 26));
console.log(`Selected: ${calendar.bindings.selectedDate.current?.toDateString()}`);

// Navigate to next month
calendar.methods.goToNextMonth();
console.log(`Current month: ${calendar.bindings.monthName.current} ${calendar.bindings.currentYear.current}`);

console.log('');

// ==========================================
// DATE CONSTRAINTS
// ==========================================

console.log('DATE CONSTRAINTS');
console.log('================\n');

const constrainedCalendar = CalendarController();

// Set date range (next 30 days only)
const today = new Date();
const futureDate = new Date();
futureDate.setDate(today.getDate() + 30);

constrainedCalendar.methods.setMinDate(today);
constrainedCalendar.methods.setMaxDate(futureDate);

// Disable weekends
constrainedCalendar.methods.setDisabledDaysOfWeek([0, 6]);

// Test constraints
const testDate = new Date(2025, 5, 28); // Saturday
console.log(`Saturday disabled: ${constrainedCalendar.methods.isDateDisabled(testDate)}`);

console.log('');

// ==========================================
// DATE RANGE SELECTION
// ==========================================

console.log('DATE RANGE SELECTION');
console.log('====================\n');

const rangeCalendar = CalendarController({
  isRangeSelection: true
});

// Select a date range
rangeCalendar.methods.selectDate(new Date(2025, 6, 10)); // Start
rangeCalendar.methods.selectDate(new Date(2025, 6, 17)); // End

const range = rangeCalendar.selectedDateRange;
console.log(`Range: ${range.startDate?.toDateString()} to ${range.endDate?.toDateString()}`);

console.log('');

// ==========================================
// CALENDAR GENERATION
// ==========================================

console.log('CALENDAR GENERATION');
console.log('===================\n');

const generator = CalendarController({
  firstDayOfWeek: 1
});

// Generate month view
const monthView = generator.methods.generateMonthView();
console.log(`Month view: ${monthView.weeks.length} weeks`);

// Generate year view
const yearData = generator.methods.generateCalendarMonths();
console.log(`Year view: ${yearData.length} months`);

// Generate decade view
const decadeData = generator.methods.generateCalendarYears();
console.log(`Decade view: ${decadeData.length} years`);

console.log('');

// ==========================================
// INTERNATIONALIZATION
// ==========================================

console.log('INTERNATIONALIZATION');
console.log('====================\n');

const frenchCalendar = CalendarController({
  locale: 'fr-FR'
});

const testDate = new Date(2025, 5, 26);
frenchCalendar.methods.selectDate(testDate);

const monthNames = frenchCalendar.methods.getMonthNames();
console.log(`June in French: ${monthNames[5]}`);

const formatted = frenchCalendar.methods.formatDate(testDate);
console.log(`French format: ${formatted}`);

console.log('');

// ==========================================
// ACCESSIBILITY
// ==========================================

console.log('ACCESSIBILITY');
console.log('=============\n');

const a11yCalendar = CalendarController();

// Set focus
a11yCalendar.methods.setFocusedDate(new Date(2025, 5, 26));
console.log(`Focused: ${a11yCalendar.bindings.focusedDate.current?.toDateString()}`);

// Get accessible label
const accessibleLabel = a11yCalendar.methods.getAccessibleDateLabel(new Date());
console.log(`Today's label: ${accessibleLabel}`);

// Keyboard navigation
a11yCalendar.methods.moveFocusRight();
console.log(`After right arrow: ${a11yCalendar.bindings.focusedDate.current?.toDateString()}`);

console.log('');

// ==========================================
// EVENTS
// ==========================================

console.log('EVENTS');
console.log('======\n');

const eventCalendar = CalendarController();

// Subscribe to date selection
if (eventCalendar.events.dateSelected) {
  eventCalendar.events.dateSelected.subscribe((date) => {
    console.log(`Event fired: ${date.toDateString()} selected`);
  });
}

// Trigger event
eventCalendar.methods.selectDate(new Date(2025, 7, 15));

console.log('');

// ==========================================
// UTILITIES
// ==========================================

console.log('UTILITIES');
console.log('=========\n');

const utilityCalendar = CalendarController();

// Week number
const weekNum = utilityCalendar.methods.getWeekNumber(new Date(2025, 5, 26));
console.log(`Week number: ${weekNum}`);

// Today check
const isToday = utilityCalendar.methods.isToday(new Date());
console.log(`Is today: ${isToday}`);

// Month names
const months = utilityCalendar.methods.getMonthNames();
console.log(`First 3 months: ${months.slice(0, 3).join(', ')}`);

console.log('\n✅ Clean demo complete!');
