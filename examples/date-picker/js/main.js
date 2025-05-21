// filepath: d:\Projects\Odyssey\components\date-picker\examples\date-picker\js\main.js
// Main entry point for the date picker example
import calendars from './controller.js';
import view from './view.js';
import accessibility from './accessibility.js';

// Initialize the calendar view
document.addEventListener('DOMContentLoaded', () => {
  // Get controllers
  const primaryCalendar = calendars.primary;
  const secondaryCalendar = calendars.secondary;
    // Handle screen orientation changes and resize events
  function handleViewportChange() {
    const popup = document.getElementById('calendarPopup');
    if (popup && !popup.classList.contains('hidden')) {
      // Re-position the popup
      view.hideCalendarPopup();
      view.showCalendarPopup();
    }
    
    // Adjust calendar cell sizes for current viewport
    const isMobile = window.innerWidth <= 640;
    const isSmallScreen = window.innerWidth <= 380;
    const isLandscape = window.innerWidth > window.innerHeight;
    
    // Apply landscape-specific styles if needed
    if (isMobile && isLandscape) {
      document.body.classList.add('landscape-mode');
      
      // On small devices in landscape, we might want to switch to single month view
      // to ensure better visibility of calendar cells
      if (calendars.state.getViewMode() === 'doubleMonth') {
        view.setCalendarViewMode('singleMonth');
      }
    } else {
      document.body.classList.remove('landscape-mode');
    }
  }
  
  window.addEventListener('orientationchange', () => {
    // Wait for orientation change to complete
    setTimeout(handleViewportChange, 300);
  });
  
  // Also handle regular resize events with debounce
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(handleViewportChange, 250);
  });
  
  // Initialize the view
  view.initCalendarView();
  
  // Set up navigation controls
  document.getElementById('prevMonth').addEventListener('click', () => {
    primaryCalendar.methods.prevMonth();
    
    // If in double month view, also update secondary calendar
    if (calendars.state.getViewMode() === 'doubleMonth') {
      secondaryCalendar.methods.prevMonth();
    }
  });
  
  document.getElementById('nextMonth').addEventListener('click', () => {
    primaryCalendar.methods.nextMonth();
    
    // If in double month view, also update secondary calendar
    if (calendars.state.getViewMode() === 'doubleMonth') {
      secondaryCalendar.methods.nextMonth();
    }
  });
  
  document.getElementById('prevYear').addEventListener('click', () => {
    primaryCalendar.methods.prevYear();
    
    // If in double month view, also update secondary calendar
    if (calendars.state.getViewMode() === 'doubleMonth') {
      secondaryCalendar.methods.prevYear();
    }
  });
  
  document.getElementById('nextYear').addEventListener('click', () => {
    primaryCalendar.methods.nextYear();
    
    // If in double month view, also update secondary calendar
    if (calendars.state.getViewMode() === 'doubleMonth') {
      secondaryCalendar.methods.nextYear();
    }
  });
  
  // Set up mode toggle button
  document.getElementById('toggleMode').addEventListener('click', () => {
    const isCurrentlyRangeMode = primaryCalendar.bindings.isRangeSelection.current;
    primaryCalendar.methods.setRangeSelectionMode(!isCurrentlyRangeMode);
    
    // Update icon and text for mode toggle
    updateToggleModeButton(!isCurrentlyRangeMode);
  });
  
  // Set up clear button (both in the main controls and in the calendar footer)
  document.getElementById('clearSelection').addEventListener('click', () => {
    primaryCalendar.methods.clearSelection();
  });
  
  document.getElementById('clearSelectionBtn')?.addEventListener('click', () => {
    primaryCalendar.methods.clearSelection();
  });
  
  // Set up today button
  document.getElementById('todayButton').addEventListener('click', () => {
    primaryCalendar.methods.goToToday();
    
    // If in double month view, set secondary calendar to next month
    if (calendars.state.getViewMode() === 'doubleMonth') {
      const today = new Date();
      const nextMonth = new Date(today);
      nextMonth.setMonth(today.getMonth() + 1);
      secondaryCalendar.methods.goToDate(nextMonth);
    }
    
    // If in single date mode, also select today's date
    if (!primaryCalendar.bindings.isRangeSelection.current) {
      const today = new Date();
      primaryCalendar.methods.selectDate(
        today.getFullYear(), 
        today.getMonth(), 
        today.getDate()
      );
    }
  });
  
  // Set up view mode toggle buttons
  document.getElementById('singleMonthMode')?.addEventListener('click', () => {
    view.setCalendarViewMode('singleMonth');
  });
  
  document.getElementById('doubleMonthMode')?.addEventListener('click', () => {
    view.setCalendarViewMode('doubleMonth');
  });
  
  // Month/Year view switching
  document.getElementById('currentMonthYear')?.addEventListener('click', () => {
    const currentViewMode = calendars.state.getViewMode();
    if (currentViewMode === 'singleMonth' || currentViewMode === 'doubleMonth') {
      view.setCalendarViewMode('months');
    }
  });
  
  // Set up sidebar quick select options
  setupQuickSelectOptions();
  
  // Set up close button
  document.getElementById('closeButton').addEventListener('click', () => {
    view.hideCalendarPopup();
  });
  
  // Set up calendar trigger button
  document.getElementById('calendarTrigger').addEventListener('click', () => {
    view.showCalendarPopup();
  });
  
  // Set up input field calendar trigger
  document.getElementById('dateInput').addEventListener('click', () => {
    view.showCalendarPopup();
  });
  
  // Set up month/year selector
  document.getElementById('monthYearSelector').addEventListener('click', () => {
    // Toggle the dropdown
    const dropdown = document.getElementById('monthYearDropdown');
    if (dropdown.classList.contains('hidden')) {
      view.showMonthYearDropdown();
    } else {
      view.hideMonthYearDropdown();
    }
  });
  
  // Set up view mode toggles
  document.getElementById('viewModeMonths').addEventListener('click', () => {
    switchMonthYearView('months');
  });
  
  document.getElementById('viewModeYears').addEventListener('click', () => {
    switchMonthYearView('years');
  });
  
  // Handle clicking outside to close dropdowns
  document.addEventListener('click', (event) => {
    const monthYearDropdown = document.getElementById('monthYearDropdown');
    const monthYearSelector = document.getElementById('monthYearSelector');
    const calendarPopup = document.getElementById('calendarPopup');
    const dateInput = document.getElementById('dateInput');
    const calendarTrigger = document.getElementById('calendarTrigger');
    
    // Close month/year dropdown if clicking outside of it
    if (monthYearDropdown && !monthYearDropdown.classList.contains('hidden')) {
      if (!monthYearDropdown.contains(event.target) && event.target !== monthYearSelector) {
        view.hideMonthYearDropdown();
      }
    }
    
    // Close calendar popup if clicking outside of it and input
    if (calendarPopup && !calendarPopup.classList.contains('hidden')) {
      if (!calendarPopup.contains(event.target) && 
          event.target !== dateInput && 
          event.target !== calendarTrigger) {
        view.hideCalendarPopup();
      }
    }
  });
  
  // Add touch swipe gesture for calendar navigation on mobile
  setupTouchGestures();
  
  // Add passive touch handlers to sidebar for better scrolling
  const datepickerSidebar = document.getElementById('datepickerSidebar');
  if (datepickerSidebar) {
    datepickerSidebar.addEventListener('touchstart', () => {}, { passive: true });
    datepickerSidebar.addEventListener('touchmove', () => {}, { passive: true });
    
    // Also add to the quick option groups
    const quickOptionGroups = datepickerSidebar.querySelectorAll('.space-y-2');
    quickOptionGroups.forEach(group => {
      group.addEventListener('touchstart', () => {}, { passive: true });
      group.addEventListener('touchmove', () => {}, { passive: true });
    });
  }
  
  // Add touch handlers to popup for better scrolling
  const calendarPopup = document.getElementById('calendarPopup');
  if (calendarPopup) {
    calendarPopup.addEventListener('touchstart', () => {}, { passive: true });
    calendarPopup.addEventListener('touchmove', (e) => {
      // Let popup scroll normally
      e.stopPropagation();
    }, { passive: true });
  }

  // Add keyboard navigation to the calendar popup
  document.addEventListener('keydown', (event) => {
    const calendarPopup = document.getElementById('calendarPopup');
    
    // Handle escape key to close popups
    if (event.key === 'Escape') {
      view.hideMonthYearDropdown();
      view.hideCalendarPopup();
    }
    
    // Only process other keys if calendar is visible
    if (calendarPopup && !calendarPopup.classList.contains('hidden')) {
      // Handle arrow keys for navigation
      if (event.key === 'ArrowLeft' && event.altKey) {
        primaryCalendar.methods.prevMonth();
        if (calendars.state.getViewMode() === 'doubleMonth') {
          secondaryCalendar.methods.prevMonth();
        }
      } else if (event.key === 'ArrowRight' && event.altKey) {
        primaryCalendar.methods.nextMonth();
        if (calendars.state.getViewMode() === 'doubleMonth') {
          secondaryCalendar.methods.nextMonth();
        }
      } else if (event.key === 'ArrowUp' && event.altKey) {
        primaryCalendar.methods.prevYear();
        if (calendars.state.getViewMode() === 'doubleMonth') {
          secondaryCalendar.methods.prevYear();
        }
      } else if (event.key === 'ArrowDown' && event.altKey) {
        primaryCalendar.methods.nextYear();
        if (calendars.state.getViewMode() === 'doubleMonth') {
          secondaryCalendar.methods.nextYear();
        }
      }
    }
  });
  
  // Handle input field blur
  document.getElementById('dateInput').addEventListener('blur', (event) => {
    // If not clicking within the calendar popup, try to parse the date
    setTimeout(() => {
      const activeElement = document.activeElement;
      const calendarPopup = document.getElementById('calendarPopup');
      
      if (!calendarPopup.contains(activeElement)) {
        parseInputDate(event.target.value);
      }
    }, 100);
  });
  
  // Handle input field keydown
  document.getElementById('dateInput').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      // Parse date on Enter
      parseInputDate(event.target.value);
      view.hideCalendarPopup();
    } else if (event.key === 'ArrowDown' || event.key === 'Space') {
      // Open calendar on ArrowDown or Space
      event.preventDefault();
      view.showCalendarPopup();
    } else if (event.key === 'Escape') {
      // Close calendar on Escape
      view.hideCalendarPopup();
    }
  });
  
  // Add keyboard navigation in the calendar grid
  document.getElementById('calendar').addEventListener('keydown', (event) => {
    accessibility.handleCalendarKeyboardNavigation(event);
  });
  
  if (document.getElementById('firstMonthCalendar')) {
    document.getElementById('firstMonthCalendar').addEventListener('keydown', (event) => {
      accessibility.handleCalendarKeyboardNavigation(event);
    });
  }
  
  if (document.getElementById('secondMonthCalendar')) {
    document.getElementById('secondMonthCalendar').addEventListener('keydown', (event) => {
      accessibility.handleCalendarKeyboardNavigation(event);
    });
  }
  
  // Parse a date string from the input field
  function parseInputDate(dateStr) {
    if (!dateStr.trim()) {
      primaryCalendar.methods.clearSelection();
      return;
    }
    
    try {
      if (primaryCalendar.bindings.isRangeSelection.current) {
        // Try to parse a date range (format: "MM/DD/YYYY - MM/DD/YYYY")
        const rangeParts = dateStr.split('-').map(part => part.trim());
        
        if (rangeParts.length === 2) {
          const startDate = accessibility.parseDate(rangeParts[0]);
          let endDate = null;
          
          // Only try to parse end date if it's not empty
          if (rangeParts[1] !== '...' && rangeParts[1].trim() !== '') {
            endDate = accessibility.parseDate(rangeParts[1]);
          }
          
          if (startDate) {
            // Select start date
            primaryCalendar.methods.selectDate(
              startDate.getFullYear(),
              startDate.getMonth(),
              startDate.getDate()
            );
            
            // Navigate to start date month/year
            primaryCalendar.methods.goToDate(startDate);
            
            // If end date is valid, select it too
            if (endDate) {
              primaryCalendar.methods.selectDate(
                endDate.getFullYear(),
                endDate.getMonth(),
                endDate.getDate()
              );
              
              // Update secondary calendar for double month view if needed
              if (calendars.state.getViewMode() === 'doubleMonth') {
                secondaryCalendar.methods.goToDate(endDate);
              }
            }
          } else {
            accessibility.announce('Invalid date format. Please enter dates in MM/DD/YYYY format.');
          }
        }
      } else {
        // Try to parse a single date using our enhanced parser
        const date = accessibility.parseDate(dateStr);
        
        if (date) {
          // Navigate to the parsed date's month/year
          primaryCalendar.methods.goToDate(date);
          
          // Select the parsed date
          primaryCalendar.methods.selectDate(
            date.getFullYear(),
            date.getMonth(),
            date.getDate()
          );
        } else {
          accessibility.announce('Invalid date format. Please enter dates in MM/DD/YYYY format.');
        }
      }
    } catch (error) {
      console.error('Error parsing date:', error);
      accessibility.announce('Error parsing date. Please enter a valid date.');
    }
  }
  
  // Set up sidebar quick select options
  function setupQuickSelectOptions() {
    // Single date options
    document.getElementById('selectToday')?.addEventListener('click', () => {
      const today = new Date();
      selectSingleDate(today);
    });
    
    document.getElementById('selectTomorrow')?.addEventListener('click', () => {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      selectSingleDate(tomorrow);
    });
    
    document.getElementById('selectNextWeek')?.addEventListener('click', () => {
      const nextWeek = new Date();
      nextWeek.setDate(nextWeek.getDate() + 7);
      selectSingleDate(nextWeek);
    });
    
    document.getElementById('selectNextMonth')?.addEventListener('click', () => {
      const nextMonth = new Date();
      nextMonth.setMonth(nextMonth.getMonth() + 1);
      selectSingleDate(nextMonth);
    });
    
    // Date range options
    document.getElementById('selectThisWeek')?.addEventListener('click', () => {
      const today = new Date();
      const startOfWeek = new Date(today);
      const dayOfWeek = today.getDay(); // 0 = Sunday, 1 = Monday, etc.
      startOfWeek.setDate(today.getDate() - dayOfWeek);
      
      const endOfWeek = new Date(startOfWeek);
      endOfWeek.setDate(startOfWeek.getDate() + 6);
      
      selectDateRange(startOfWeek, endOfWeek);
    });
    
    document.getElementById('selectThisMonth')?.addEventListener('click', () => {
      const today = new Date();
      const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
      const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
      
      selectDateRange(startOfMonth, endOfMonth);
    });
    
    document.getElementById('selectNextWeekRange')?.addEventListener('click', () => {
      const today = new Date();
      const endDate = new Date(today);
      endDate.setDate(today.getDate() + 6);
      
      selectDateRange(today, endDate);
    });
    
    document.getElementById('selectNext30Days')?.addEventListener('click', () => {
      const today = new Date();
      const endDate = new Date(today);
      endDate.setDate(today.getDate() + 29); // +29 to make it inclusive of 30 days
      
      selectDateRange(today, endDate);
    });
  }
  
  // Helper functions for date selection
  function selectSingleDate(date) {
    // Make sure we're in single date mode
    if (primaryCalendar.bindings.isRangeSelection.current) {
      primaryCalendar.methods.setRangeSelectionMode(false);
      updateToggleModeButton(false);
    }
    
    // Navigate to the date and select it
    primaryCalendar.methods.goToDate(date);
    primaryCalendar.methods.selectDate(
      date.getFullYear(),
      date.getMonth(),
      date.getDate()
    );
  }
  
  function selectDateRange(startDate, endDate) {
    // Make sure we're in range mode
    if (!primaryCalendar.bindings.isRangeSelection.current) {
      primaryCalendar.methods.setRangeSelectionMode(true);
      updateToggleModeButton(true);
    }
    
    // Switch to double month view
    view.setCalendarViewMode('doubleMonth');
    
    // Navigate primary calendar to start date month
    primaryCalendar.methods.goToDate(startDate);
    
    // Navigate secondary calendar to end date month 
    secondaryCalendar.methods.goToDate(endDate);
    
    // Select start date first, then end date
    primaryCalendar.methods.selectDate(
      startDate.getFullYear(),
      startDate.getMonth(),
      startDate.getDate()
    );
    
    primaryCalendar.methods.selectDate(
      endDate.getFullYear(),
      endDate.getMonth(),
      endDate.getDate()
    );
  }
  
  // Switch between month and year views in the dropdown
  function switchMonthYearView(viewType) {
    const monthsList = document.getElementById('monthsList');
    const yearsList = document.getElementById('yearsList');
    const monthsButton = document.getElementById('viewModeMonths');
    const yearsButton = document.getElementById('viewModeYears');
    
    if (viewType === 'months') {
      monthsList.classList.remove('hidden');
      yearsList.classList.add('hidden');
      monthsButton.classList.add('bg-primary', 'text-white');
      monthsButton.classList.remove('bg-gray-100', 'text-gray-700');
      yearsButton.classList.remove('bg-primary', 'text-white');
      yearsButton.classList.add('bg-gray-100', 'hover:bg-gray-200');
      monthsButton.setAttribute('aria-pressed', 'true');
      yearsButton.setAttribute('aria-pressed', 'false');
    } else {
      monthsList.classList.add('hidden');
      yearsList.classList.remove('hidden');
      monthsButton.classList.remove('bg-primary', 'text-white');
      monthsButton.classList.add('bg-gray-100', 'hover:bg-gray-200');
      yearsButton.classList.add('bg-primary', 'text-white');
      yearsButton.classList.remove('bg-gray-100', 'text-gray-700');
      monthsButton.setAttribute('aria-pressed', 'false');
      yearsButton.setAttribute('aria-pressed', 'true');
    }
  }
    // Set up touch gestures for mobile
  function setupTouchGestures() {
    const calendarViewContainer = document.getElementById('calendarViewContainer');
    if (!calendarViewContainer) return;
    
    let touchStartX = 0;
    let touchEndX = 0;
    let touchStartY = 0;
    let touchEndY = 0;
    let isSwiping = false;
    
    calendarViewContainer.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
      isSwiping = true;
    }, { passive: true });
    
    calendarViewContainer.addEventListener('touchmove', (e) => {
      if (!isSwiping) return;
      
      // Add visual feedback during swipe
      const deltaX = e.changedTouches[0].screenX - touchStartX;
      if (Math.abs(deltaX) > 30) {
        calendarViewContainer.style.transform = `translateX(${deltaX * 0.3}px)`;
        calendarViewContainer.style.opacity = `${1 - Math.abs(deltaX) * 0.002}`;
      }
    }, { passive: true });
    
    calendarViewContainer.addEventListener('touchend', (e) => {
      if (!isSwiping) return;
      
      touchEndX = e.changedTouches[0].screenX;
      touchEndY = e.changedTouches[0].screenY;
      
      // Reset the visual transformation
      calendarViewContainer.style.transform = '';
      calendarViewContainer.style.opacity = '';
      
      handleSwipe();
      isSwiping = false;
    }, { passive: true });
    
    calendarViewContainer.addEventListener('touchcancel', () => {
      // Reset the visual transformation if touch is canceled
      calendarViewContainer.style.transform = '';
      calendarViewContainer.style.opacity = '';
      isSwiping = false;
    }, { passive: true });
    
    function handleSwipe() {
      const minSwipeDistance = 50;
      const verticalMovement = Math.abs(touchEndY - touchStartY);
      const horizontalMovement = Math.abs(touchEndX - touchStartX);
      
      // Only process as horizontal swipe if horizontal movement is greater than vertical
      if (horizontalMovement > verticalMovement && horizontalMovement > minSwipeDistance) {
        // Add swipe animation class
        calendarViewContainer.classList.add('swiping');
        
        if (touchStartX - touchEndX > minSwipeDistance) {
          // Swipe left - next month
          primaryCalendar.methods.nextMonth();
          if (calendars.state.getViewMode() === 'doubleMonth') {
            secondaryCalendar.methods.nextMonth();
          }
        }
        
        if (touchEndX - touchStartX > minSwipeDistance) {
          // Swipe right - previous month
          primaryCalendar.methods.prevMonth();
          if (calendars.state.getViewMode() === 'doubleMonth') {
            secondaryCalendar.methods.prevMonth();
          }
        }
        
        // Remove animation class after transition completes
        setTimeout(() => {
          calendarViewContainer.classList.remove('swiping');
        }, 300);
      }
    }
  }
  
  // Update the tooltips for all buttons
  const buttons = document.querySelectorAll('button:not([id="monthYearSelector"])');
  buttons.forEach(button => {
    if (!button.hasAttribute('title') && button.textContent.trim()) {
      button.setAttribute('title', button.textContent.trim());
    }
  });
  
  // Helper function to update toggle button text and icon
  function updateToggleModeButton(isRangeMode) {
    const toggleButton = document.getElementById('toggleMode');
    const iconElement = toggleButton.querySelector('i');
    
    // Update the icon class
    if (isRangeMode) {
      iconElement.className = 'fa-solid fa-calendar mr-2';
      
      // If in single month view, switch to double month view for range selection
      if (calendars.state.getViewMode() === 'singleMonth') {
        view.setCalendarViewMode('doubleMonth');
      }
    } else {
      iconElement.className = 'fa-solid fa-calendar-days mr-2';
      
      // If in double month view, switch to single month view for single selection
      if (calendars.state.getViewMode() === 'doubleMonth') {
        view.setCalendarViewMode('singleMonth');
      }
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
});
