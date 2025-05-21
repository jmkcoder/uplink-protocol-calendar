// Example controller usage for the date picker
import { CalendarController } from '../../../dist/index.js';

// Create a new calendar controller with custom options
const calendar = CalendarController({
  initialSelectedDate: new Date(),
  firstDayOfWeek: 1, // Monday
  dateFormat: 'MM/DD/YYYY',
  minDate: new Date(2025, 0, 1), // Jan 1, 2025
  maxDate: new Date(2025, 11, 31), // Dec 31, 2025
  disabledDates: [
    new Date(2025, 4, 15), // May 15, 2025
    new Date(2025, 4, 16), // May 16, 2025
  ]
});

// Export the calendar controller for use in main.js
export default calendar;