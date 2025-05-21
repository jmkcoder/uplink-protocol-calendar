// Calendar View - Handles DOM manipulation and event binding
import { calendar, monthCalendars } from './controller.js';

/**
 * Initializes the calendar view
 */
export function initCalendarView() {
  // Get DOM elements
  const monthGridEl = document.getElementById('monthGrid');
  const currentYearEl = document.getElementById('currentYear');
  
  // Initialize the current year display
  currentYearEl.textContent = new Date().getFullYear();
  
  // Render all 12 months for the current year
  renderYearCalendar(monthGridEl);
}

/**
 * Renders the complete year calendar
 */
function renderYearCalendar(container) {
  // Clear the container
  container.innerHTML = '';
  
  // Get the current year from the main calendar
  const currentYear = parseInt(document.getElementById('currentYear').textContent);
  
  // Render each month
  for (let month = 0; month < 12; month++) {
    // Create the month container
    const monthEl = document.createElement('div');
    monthEl.className = 'bg-white rounded-lg shadow p-3 hover:shadow-md transition';
    
    // Create the month header with icon
    const monthHeaderEl = document.createElement('div');
    monthHeaderEl.className = 'text-center font-semibold text-gray-800 mb-2 flex items-center justify-center';
    
    const monthIcon = document.createElement('i');
    monthIcon.className = 'fa-regular fa-calendar-days mr-1 text-primary';
    monthHeaderEl.appendChild(monthIcon);
    
    const monthText = document.createElement('span');
    monthText.textContent = new Date(currentYear, month, 1).toLocaleString('default', { month: 'long' });
    monthHeaderEl.appendChild(monthText);
    
    monthEl.appendChild(monthHeaderEl);
    
    // Create weekday headers
    const weekdaysEl = document.createElement('div');
    weekdaysEl.className = 'grid grid-cols-7 gap-1 mb-1';
    
    const weekdays = monthCalendars[month].bindings.weekdays.current;
    weekdays.forEach(dayName => {
      const dayEl = document.createElement('div');
      dayEl.className = 'text-center text-xs font-medium text-gray-500 uppercase';
      dayEl.textContent = dayName.substring(0, 1); // Just use the first letter
      weekdaysEl.appendChild(dayEl);
    });
    monthEl.appendChild(weekdaysEl);
      // Generate the calendar dates for this month
    const date = new Date(currentYear, month, 1);
    // Update the month calendar controller
    monthCalendars[month].methods.goToDate(date);
    
    // Create the days grid
    const daysEl = document.createElement('div');
    daysEl.className = 'grid grid-cols-7 gap-1';
    
    // Get calendar days from the controller
    const days = monthCalendars[month].bindings.calendarDays.current;
      // Render each day
    days.forEach(day => {
      const dayEl = document.createElement('div');
      
      // Base classes with Tailwind
      let className = 'w-7 h-7 flex items-center justify-center text-xs rounded transition';
        // Check if this is an empty cell (day value is 0)
      if (day.day === 0) {
        className += ' invisible'; // Make it invisible but keep the space
        dayEl.className = className;
        dayEl.textContent = '';
      } else {
        // Apply conditional classes for non-empty cells
        if (!day.isCurrentMonth) {
          className += ' text-gray-300';
        }
        
        if (day.isToday) {
          // Use a primary color ring for today's date
          className += ' ring-1 ring-primary font-bold';
        }
        
        if (day.isSelected) {
          // Use a prominent background for selected days
          className += ' bg-primary text-white font-bold selected';
        } else if (!day.isDisabled) {
          // Only add hover effect for enabled days
          className += ' hover:bg-primary-light';
        }
        
        if (day.isDisabled) {
          className += ' text-gray-300 cursor-not-allowed';
        } else {
          className += ' cursor-pointer';
        }
        
        dayEl.className = className;
        dayEl.textContent = day.day;
      }
        // Add click event only for non-empty cells
      if (day.day !== 0) {
        dayEl.addEventListener('click', () => {
          if (!day.isDisabled) {
            monthCalendars[month].methods.selectDate(day.year, day.month, day.day);
            calendar.methods.selectDate(day.year, day.month, day.day);
            updateSelectedDayIndicators();
          }
        });
      }
      
      daysEl.appendChild(dayEl);
    });
    
    monthEl.appendChild(daysEl);
    container.appendChild(monthEl);
  }
}

/**
 * Updates the year display and regenerates the calendar
 */
function updateYearCalendar(year) {
  document.getElementById('currentYear').textContent = year;
  renderYearCalendar(document.getElementById('monthGrid'));
}

/**
 * Updates the indicators for all selected days
 */
function updateSelectedDayIndicators() {
  // Re-render the year calendar to update the selected day indicators
  renderYearCalendar(document.getElementById('monthGrid'));
}

// Export initialization function and utility functions
export default { 
  initCalendarView,
  updateYearCalendar,
  updateSelectedDayIndicators
};