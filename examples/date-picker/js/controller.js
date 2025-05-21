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

// Create a second calendar controller for double month view
const secondMonthCalendar = CalendarController({
  initialSelectedDate: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1), // Next month
  firstDayOfWeek: 1, // Monday
  dateFormat: 'MM/DD/YYYY',
  minDate: new Date(2025, 0, 1),
  maxDate: new Date(2025, 11, 31),
  disabledDates: [
    new Date(2025, 4, 15),
    new Date(2025, 4, 16),
  ]
});

// Sync the two calendars' selections
calendar.bindings.selectedDate.subscribe(date => {
  if (date && !secondMonthCalendar.bindings.selectedDate.current) {
    secondMonthCalendar.methods.selectDate(date.getFullYear(), date.getMonth(), date.getDate());
  }
});

secondMonthCalendar.bindings.selectedDate.subscribe(date => {
  if (date && !calendar.bindings.selectedDate.current) {
    calendar.methods.selectDate(date.getFullYear(), date.getMonth(), date.getDate());
  }
});

// Calendar view state
const calendarState = {
  viewMode: 'singleMonth', // 'singleMonth', 'doubleMonth', 'months', 'years'
  
  // Methods to update and get view state
  setViewMode(mode) {
    this.viewMode = mode;
    return this.viewMode;
  },
  
  getViewMode() {
    return this.viewMode;
  },
  
  // Generate month view (array of all 12 months)
  generateMonthsView() {
    const months = [];
    for (let i = 0; i < 12; i++) {
      const date = new Date(calendar.bindings.currentYear.current, i, 1);
      months.push({
        index: i,
        name: date.toLocaleString('default', { month: 'short' }),
        fullName: date.toLocaleString('default', { month: 'long' }),
        year: calendar.bindings.currentYear.current,
        isCurrent: i === new Date().getMonth() && 
                  calendar.bindings.currentYear.current === new Date().getFullYear(),
        isSelected: i === calendar.bindings.currentMonth.current
      });
    }
    return months;
  },
  
  // Generate year view (range of years)
  generateYearsView(centerYear = null) {
    const currentYear = centerYear || calendar.bindings.currentYear.current;
    const startYear = currentYear - 6; // Show 15 years (6 before, current, 8 after)
    const endYear = currentYear + 8;
    
    const years = [];
    for (let year = startYear; year <= endYear; year++) {
      years.push({
        year: year,
        isCurrent: year === new Date().getFullYear(),
        isSelected: year === calendar.bindings.currentYear.current
      });
    }
    return years;
  }
};

// Export the calendar controllers and state for use in main.js
export default {
  primary: calendar,
  secondary: secondMonthCalendar,
  state: calendarState
};