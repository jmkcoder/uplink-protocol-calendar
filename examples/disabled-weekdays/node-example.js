import { CalendarController } from '../../dist/index.js';

// Example 1: Business Hours Calendar (Weekdays Only)
console.log('=== Example 1: Business Hours Calendar ===');

const businessCalendar = CalendarController({
    disabledDaysOfWeek: [0, 6], // Disable weekends
    onDateSelect: (date) => {
        console.log(`Business appointment scheduled for: ${date.toLocaleDateString()}`);
    }
});

// Test some dates
const testDates = [
    new Date(2025, 0, 6),  // Monday
    new Date(2025, 0, 7),  // Tuesday
    new Date(2025, 0, 11), // Saturday (should be disabled)
    new Date(2025, 0, 12)  // Sunday (should be disabled)
];

testDates.forEach(date => {
    const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
    const isDisabled = businessCalendar.isDateDisabled(date);
    console.log(`${dayName} ${date.toLocaleDateString()}: ${isDisabled ? 'DISABLED' : 'Available'}`);
});

console.log('\n=== Example 2: Custom Service Schedule ===');

// Example 2: Service available Tuesday, Thursday, Saturday only
const serviceCalendar = CalendarController({
    disabledDaysOfWeek: [0, 1, 3, 5], // Disable Sun, Mon, Wed, Fri
    onDateSelect: (date) => {
        console.log(`Service scheduled for: ${date.toLocaleDateString()}`);
    }
});

const serviceDates = [
    new Date(2025, 0, 5),  // Sunday (disabled)
    new Date(2025, 0, 6),  // Monday (disabled)
    new Date(2025, 0, 7),  // Tuesday (available)
    new Date(2025, 0, 8),  // Wednesday (disabled)
    new Date(2025, 0, 9),  // Thursday (available)
    new Date(2025, 0, 10), // Friday (disabled)
    new Date(2025, 0, 11)  // Saturday (available)
];

serviceDates.forEach(date => {
    const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
    const isDisabled = serviceCalendar.isDateDisabled(date);
    console.log(`${dayName}: ${isDisabled ? 'CLOSED' : 'OPEN'}`);
});

console.log('\n=== Example 3: Dynamic Management ===');

// Example 3: Dynamic day management
const dynamicCalendar = CalendarController({
    disabledDaysOfWeek: [], // Start with all days enabled
});

console.log('Initial disabled days:', dynamicCalendar.getDisabledDaysOfWeek());

// Add weekends
dynamicCalendar.setDisabledDaysOfWeek([0, 6]);
console.log('After setting weekends disabled:', dynamicCalendar.getDisabledDaysOfWeek());

// Add Monday (bad Monday syndrome)
dynamicCalendar.addDisabledDayOfWeek(1);
console.log('After adding Monday:', dynamicCalendar.getDisabledDaysOfWeek());

// Remove Sunday (Sunday shopping allowed)
dynamicCalendar.removeDisabledDayOfWeek(0);
console.log('After removing Sunday:', dynamicCalendar.getDisabledDaysOfWeek());

// Test a Monday and Sunday
const monday = new Date(2025, 0, 6);
const sunday = new Date(2025, 0, 12);
console.log(`Monday ${monday.toLocaleDateString()}: ${dynamicCalendar.isDateDisabled(monday) ? 'DISABLED' : 'Available'}`);
console.log(`Sunday ${sunday.toLocaleDateString()}: ${dynamicCalendar.isDateDisabled(sunday) ? 'DISABLED' : 'Available'}`);

console.log('\n=== Example 4: Combined Constraints ===');

// Example 4: Combined with other constraints
const today = new Date();
const maxDate = new Date();
maxDate.setDate(today.getDate() + 30);

const appointmentCalendar = CalendarController({
    minDate: today,
    maxDate: maxDate,
    disabledDaysOfWeek: [0, 6], // No weekends
    disabledDates: [
        new Date(2025, 11, 25), // Christmas
        new Date(2025, 0, 1)    // New Year
    ]
});

// Test various dates
const testAppointmentDates = [
    new Date(2024, 11, 20), // Too early (before minDate)
    new Date(2025, 0, 1),   // New Year (specifically disabled)
    new Date(2025, 0, 6),   // Monday (should be available)
    new Date(2025, 0, 11),  // Saturday (weekend - disabled)
    new Date(2025, 11, 25), // Christmas (specifically disabled)
    new Date(2026, 1, 1)    // Too late (after maxDate)
];

testAppointmentDates.forEach(date => {
    const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
    const isDisabled = appointmentCalendar.isDateDisabled(date);
    const reason = getDisabledReason(date, appointmentCalendar, today, maxDate);
    console.log(`${dayName} ${date.toLocaleDateString()}: ${isDisabled ? 'DISABLED' : 'Available'} ${reason}`);
});

function getDisabledReason(date, calendar, minDate, maxDate) {
    if (date < minDate) return '(too early)';
    if (date > maxDate) return '(too late)';
    
    const dayOfWeek = date.getDay();
    if (calendar.getDisabledDaysOfWeek().includes(dayOfWeek)) {
        const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return `(${dayNames[dayOfWeek]} disabled)`;
    }
    
    // Check if it's a specifically disabled date
    const disabledDates = [
        new Date(2025, 11, 25).toDateString(),
        new Date(2025, 0, 1).toDateString()
    ];
    if (disabledDates.includes(date.toDateString())) {
        return '(holiday)';
    }
    
    return '';
}

console.log('\n=== Example 5: Validation Testing ===');

// Example 5: Test validation
const validationCalendar = CalendarController({
    disabledDaysOfWeek: [0, 7, -1, 6, 15] // Invalid days should be filtered
});

console.log('Input: [0, 7, -1, 6, 15]');
console.log('Filtered result:', validationCalendar.getDisabledDaysOfWeek());

// Test duplicate removal
validationCalendar.setDisabledDaysOfWeek([1, 1, 2, 2, 3]);
console.log('Input with duplicates: [1, 1, 2, 2, 3]');
console.log('Deduplicated result:', validationCalendar.getDisabledDaysOfWeek());

console.log('\n=== All Examples Complete ===');
