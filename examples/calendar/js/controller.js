// Controller for the year calendar example
import { CalendarController } from '../../../dist/index.js';

// Create a new calendar controller with custom options
const calendar = CalendarController({
  firstDayOfWeek: 1, // Monday
  dateFormat: 'MM/DD/YYYY',
  initialSelectedDate: new Date(), // Start with today's date selected
  hideOtherMonthDays: true // Hide days from previous/next months
});

// Create an array to hold 12 month calendar controllers (one for each month)
const monthCalendars = [];

// Initialize each month's calendar controller
for (let i = 0; i < 12; i++) {
  // Clone the main calendar controller configuration but set to a specific month
  // Use the same calendar controller instance for all months
  const monthCalendar = calendar;
  
  // Make sure methods are properly exposed
  if (!monthCalendar.methods) {
    monthCalendar.methods = {};
    // Add necessary methods from the controller to the methods object
    ['goToDate', 'goToMonth', 'goToYear', 'selectDate', 'clearSelection'].forEach(methodName => {
      if (typeof monthCalendar[methodName] === 'function') {
        monthCalendar.methods[methodName] = monthCalendar[methodName].bind(monthCalendar);
      }
    });
  }
  
  // Store in array
  monthCalendars.push(monthCalendar);
}

export { calendar, monthCalendars };