// Main entry point for the date picker example
import calendar from './controller.js';
import view from './view.js';

// Initialize the calendar view
document.addEventListener('DOMContentLoaded', () => {
  // Initialize the view
  view.initCalendarView();
  
  // Set up navigation controls
  document.getElementById('prevMonth').addEventListener('click', () => {
    calendar.methods.prevMonth();
  });
  
  document.getElementById('nextMonth').addEventListener('click', () => {
    calendar.methods.nextMonth();
  });
  
  document.getElementById('prevYear').addEventListener('click', () => {
    calendar.methods.prevYear();
  });
  
  document.getElementById('nextYear').addEventListener('click', () => {
    calendar.methods.nextYear();
  });
  // Set up mode toggle button
  document.getElementById('toggleMode').addEventListener('click', () => {
    const isCurrentlyRangeMode = calendar.bindings.isRangeSelection.current;
    calendar.methods.setRangeSelectionMode(!isCurrentlyRangeMode);
    
    // Update icon and text for mode toggle
    updateToggleModeButton(!isCurrentlyRangeMode);
  });
  
  // Set up clear button
  document.getElementById('clearSelection').addEventListener('click', () => {
    calendar.methods.clearSelection();
  });
  
  // Set initial toggle button state
  updateToggleModeButton(calendar.bindings.isRangeSelection.current);
  
  // Update the tooltips for all buttons
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.setAttribute('title', button.textContent.trim());
  });
  
  // Helper function to update toggle button text and icon
  function updateToggleModeButton(isRangeMode) {
    const toggleButton = document.getElementById('toggleMode');
    const iconElement = toggleButton.querySelector('i');
    
    // Update the icon class
    if (isRangeMode) {
      iconElement.className = 'fa-solid fa-calendar mr-2';
    } else {
      iconElement.className = 'fa-solid fa-calendar-days mr-2';
    }
    
    // Update text content (without affecting the icon)
    const textNode = document.getElementById('toggleModeText');
    
    if (textNode) {
      textNode.textContent = isRangeMode ? 'Toggle Single Selection' : 'Toggle Range Selection';
    } else {
      toggleButton.appendChild(document.createTextNode(
        isRangeMode ? 'Toggle Single Selection' : 'Toggle Range Selection'
      ));
    }
  }

  // Log controller for debugging
  console.log('Calendar Controller:', calendar);
});