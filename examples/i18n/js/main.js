// main.js - Main entry point for the i18n date picker example
import controller from './controller.js';
import view from './view.js';

// Initialize the calendar view on page load
document.addEventListener('DOMContentLoaded', () => {
  // Initialize the view
  view.initCalendarView();
  
  // Set up navigation controls
  document.getElementById('prevMonth').addEventListener('click', () => {
    controller.calendar.methods.prevMonth();
  });
  
  document.getElementById('nextMonth').addEventListener('click', () => {
    controller.calendar.methods.nextMonth();
  });
  
  document.getElementById('prevYear').addEventListener('click', () => {
    controller.calendar.methods.prevYear();
  });
  
  document.getElementById('nextYear').addEventListener('click', () => {
    controller.calendar.methods.nextYear();
  });
  
  document.getElementById('goToToday').addEventListener('click', () => {
    controller.calendar.methods.goToToday();
  });
  
  // Set up mode toggle button
  document.getElementById('toggleMode').addEventListener('click', () => {
    const isCurrentlyRangeMode = controller.calendar.bindings.isRangeSelection.current;
    controller.calendar.methods.setRangeSelectionMode(!isCurrentlyRangeMode);
    
    // Update icon and text for mode toggle
    view.updateToggleModeButton(!isCurrentlyRangeMode);
  });
  
  // Set up locale selector
  document.getElementById('localeSelector').addEventListener('change', (e) => {
    const newLocale = e.target.value;
    view.changeLocale(newLocale);
  });
});
