import { CalendarControllerWrapper } from './controller.js';
import { CalendarView } from './view.js';

/**
 * Initialize the Multi-View Calendar application
 */
document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const elements = {
    // Calendar containers
    calendarTitle: document.getElementById('calendarTitle'),
    dayView: document.getElementById('dayView'),
    monthView: document.getElementById('monthView'),
    yearView: document.getElementById('yearView'),
    calendarDays: document.getElementById('calendarDays'),
    calendarMonths: document.getElementById('calendarMonths'),
    calendarYears: document.getElementById('calendarYears'),
    
    // View toggle buttons
    dayViewBtn: document.getElementById('dayViewBtn'),
    monthViewBtn: document.getElementById('monthViewBtn'),
    yearViewBtn: document.getElementById('yearViewBtn'),
    
    // Navigation buttons
    prevBtn: document.getElementById('prevBtn'),
    nextBtn: document.getElementById('nextBtn'),
    todayBtn: document.getElementById('todayBtn')
  };
  
  // Initialize controller
  const calendarController = new CalendarControllerWrapper();
  
  // Initialize view with controller and elements
  const calendarView = new CalendarView(
    elements, 
    calendarController,
    (view) => {
      console.log(`View changed to: ${view}`);
      // You can add any additional view change handling here
    }
  );
  
  // Render the initial calendar
  calendarView.render();
  
  // Expose calendar instances to window for debugging
  window.calendarController = calendarController;
  window.calendarView = calendarView;
});