// Main entry point for the calendar example
import { calendar } from './controller.js';
import view from './view.js';

// Initialize the calendar view
document.addEventListener('DOMContentLoaded', () => {
  // Initialize the view
  view.initCalendarView();
  
  // Set up navigation controls
  document.getElementById('prevYear').addEventListener('click', () => {
    const currentYear = parseInt(document.getElementById('currentYear').textContent);
    view.updateYearCalendar(currentYear - 1);
  });
  
  document.getElementById('nextYear').addEventListener('click', () => {
    const currentYear = parseInt(document.getElementById('currentYear').textContent);
    view.updateYearCalendar(currentYear + 1);
  });
  document.getElementById('goToToday').addEventListener('click', () => {
    const today = new Date();
    view.updateYearCalendar(today.getFullYear());
    
    // Select today's date in the main calendar - this will trigger the subscription
    // that updates the UI automatically
    calendar.methods.selectDate(today.getFullYear(), today.getMonth(), today.getDate());
  });
  
  // Log controller for debugging
  console.log('Calendar Controller:', calendar);
});