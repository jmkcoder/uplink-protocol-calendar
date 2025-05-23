// view.js - Manages the view/UI for the calendar
import controller from './controller.js';

// Track subscriptions for cleanup
const subscriptions = {};

// Initialize the calendar view
const initCalendarView = () => {
  // Set up subscriptions to calendar bindings
  setupSubscriptions(controller.calendar);
    // Initialize UI elements
  updateCalendarDisplay(controller.calendar.bindings.calendarDays.current);
  updateMonthYearDisplay();
  updateWeekdaysDisplay();
  
  // Initialize date display based on current selection mode
  const calendar = controller.calendar;
  if (calendar.bindings.isRangeSelection && calendar.bindings.isRangeSelection.current) {
    // Initialize range display if in range mode
    if (calendar.bindings.selectedDateRange && calendar.bindings.selectedDateRange.current) {
      updateSelectedDateRangeDisplay(calendar.bindings.selectedDateRange.current);
    }
  } else {
    // Initialize single date display
    if (calendar.bindings.selectedDate && calendar.bindings.selectedDate.current) {
      updateSelectedDateDisplay(calendar.bindings.selectedDate.current);
    }
  }
};

// Set up subscriptions to calendar bindings
const setupSubscriptions = (calendar) => {
  // Early exit if calendar or bindings are not available
  if (!calendar || !calendar.bindings) {
    console.error('Cannot setup subscriptions: calendar or bindings not available');
    return;
  }
  
  // Clear any existing subscriptions to prevent memory leaks
  Object.values(subscriptions).forEach(sub => {
    if (sub && typeof sub.unsubscribe === 'function') {
      sub.unsubscribe();
    }
  });
  
  // Set up new subscriptions with error handling
  try {
    if (calendar.bindings.calendarDays) {
      subscriptions.calendarDays = calendar.bindings.calendarDays.subscribe(updateCalendarDisplay);
    }
    
    if (calendar.bindings.monthName) {
      subscriptions.monthName = calendar.bindings.monthName.subscribe(updateMonthYearDisplay);
    }
    
    if (calendar.bindings.currentYear) {
      subscriptions.currentYear = calendar.bindings.currentYear.subscribe(updateMonthYearDisplay);
    }
    
    if (calendar.bindings.selectedDate) {
      subscriptions.selectedDate = calendar.bindings.selectedDate.subscribe(updateSelectedDateDisplay);
    }
    
    if (calendar.bindings.weekdays) {
      subscriptions.weekdays = calendar.bindings.weekdays.subscribe(updateWeekdaysDisplay);
    }    if (calendar.bindings.formattedDate) {
      subscriptions.formattedDate = calendar.bindings.formattedDate.subscribe(updateSelectedDateDisplay);
    }
    
    // Add subscription for date range selection
    if (calendar.bindings.selectedDateRange) {
      subscriptions.selectedDateRange = calendar.bindings.selectedDateRange.subscribe(updateSelectedDateRangeDisplay);
    }
    
    // Add subscription for range selection mode
    if (calendar.bindings.isRangeSelection) {
      subscriptions.isRangeSelection = calendar.bindings.isRangeSelection.subscribe(handleRangeSelectionModeChange);
    }
  } catch (error) {
    console.error('Error setting up calendar subscriptions:', error);
  }
};

// Update calendar days display
const updateCalendarDisplay = (days) => {
  const calendarElement = document.getElementById('calendar');
  if (!calendarElement) return;
  
  const calendar = controller.calendar;
  days = days || calendar.bindings.calendarDays.current;
  calendarElement.innerHTML = '';
  
  days.forEach(day => {
    const dayElement = document.createElement('div');
    dayElement.className = `calendar-day flex items-center justify-center rounded-full
        ${day.isCurrentMonth ? '' : 'other-month'} 
        ${day.isToday ? 'today' : ''} 
        ${day.isSelected ? 'selected' : ''} 
        ${day.isDisabled ? 'disabled' : 'cursor-pointer hover:bg-gray-100'}`;
    
    dayElement.textContent = day.day;
    
    if (!day.isDisabled) {
      dayElement.addEventListener('click', () => {
        calendar.methods.selectDate(day.year, day.month, day.day);
      });
    }
    
    calendarElement.appendChild(dayElement);
  });
};

// Update month and year display
const updateMonthYearDisplay = () => {
  const element = document.getElementById('currentMonthYear');
  if (element) {
    const calendar = controller.calendar;
    const monthName = calendar.bindings.monthName.current;
    const year = calendar.bindings.currentYear.current;
    element.textContent = `${monthName} ${year}`;
  }
};

// Update weekdays display
const updateWeekdaysDisplay = () => {
  const element = document.getElementById('weekdays');
  if (element) {
    const calendar = controller.calendar;
    element.innerHTML = '';
    
    // Ensure we have valid weekdays from the calendar
    const weekdays = calendar.bindings.weekdays.current || [];
    
    weekdays.forEach(day => {
      const dayElement = document.createElement('div');
      dayElement.className = 'text-center font-medium text-gray-500';
      
      // Handle different locale character sets properly
      // Some languages might have different first letter behavior
      const firstChar = day.charAt(0);
      
      // Display full weekday name for larger screens, first letter for smaller
      // This keeps the design responsive while showing localized weekday names
      dayElement.innerHTML = `
        <span class="hidden sm:inline">${day}</span>
        <span class="sm:hidden">${firstChar}</span>
      `;
      
      element.appendChild(dayElement);
    });
  }
};

// Update selected date display
const updateSelectedDateDisplay = (date) => {
  const element = document.getElementById('selectedDate');
  if (!element) return;
  
  const calendar = controller.calendar;
  
  // If we're in range mode, delegate to the range display handler
  if (calendar.bindings.isRangeSelection && calendar.bindings.isRangeSelection.current) {
    if (calendar.bindings.selectedDateRange && calendar.bindings.selectedDateRange.current) {
      updateSelectedDateRangeDisplay(calendar.bindings.selectedDateRange.current);
      return;
    }
  }
  
  // Handle single date mode
  if (!date) {
    element.textContent = 'No date selected';
    return;
  }
  
  try {    // First choice: Use the controller's built-in getFormattedDate method
    if (calendar.methods && typeof calendar.methods.getFormattedDate === 'function') {
      // Explicitly pass the date to format
      const formattedDate = calendar.methods.getFormattedDate();
      
      if (formattedDate) {
        element.textContent = formattedDate;
        // Add null check before accessing locale.current
        const currentLocale = calendar.methods.getLocale() || 'en-US';
        console.log(`Date formatted using controller method with locale ${currentLocale}: ${formattedDate}`);
        return;
      }
    }
      // Second choice: Use direct Intl.DateTimeFormat (more reliable than toLocaleDateString)
    // Use optional chaining to safely access the locale
    const locale = calendar.methods.getLocale() || 'en-US';
    
    const options = { 
      weekday: 'long',
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    
    // Make sure we have a valid Date object
    if (!(date instanceof Date) || isNaN(date.getTime())) {
      throw new Error("Invalid date object");
    }
    
    // Use Intl.DateTimeFormat directly instead of toLocaleDateString
    const formatter = new Intl.DateTimeFormat(locale, options);
    const formatted = formatter.format(date);
    
    element.textContent = formatted;
  } catch (error) {
    // Last resort fallback - just convert to string
    element.textContent = date.toString();
  }
};

// Function to change locale and update UI
const changeLocale = (locale) => {
  
  // Update the existing calendar instance with the new locale
  const calendar = controller.calendar;
  calendar.methods.setLocale(locale);
  
  // Force a complete UI refresh with the new localized content
  updateCalendarDisplay(calendar.bindings.calendarDays.current);
  updateMonthYearDisplay();
  updateWeekdaysDisplay();
  
  // CRITICAL: Update selected date display with the new locale
  if (calendar.bindings.selectedDate && calendar.bindings.selectedDate.current) {
    const selectedDate = calendar.bindings.selectedDate.current;
    
    // Delay the update to ensure locale changes have propagated
    setTimeout(() => {
      // Finally update the UI
      updateSelectedDateDisplay(selectedDate);
    }, 50);
  } else {
    // If no selected date, just update the display to show "No date selected"
    updateSelectedDateDisplay(null);
  }
    // Handle date range mode display
  if (calendar.bindings.isRangeSelection && calendar.bindings.isRangeSelection.current) {
    if (calendar.bindings.selectedDateRange && calendar.bindings.selectedDateRange.current) {
      const dateRange = calendar.bindings.selectedDateRange.current;
      
      // Delay the update to ensure locale changes have propagated
      setTimeout(() => {
        // Use the proper date range display function
        updateSelectedDateRangeDisplay(dateRange);
      }, 50);
    }
  }
};

// Update the toggle mode button text
const updateToggleModeButton = (isRangeMode) => {
  const toggleButton = document.getElementById('toggleMode');
  toggleButton.innerHTML = isRangeMode 
    ? '<i class="fa-solid fa-calendar mr-1"></i><span>Switch to Single Mode</span>' 
    : '<i class="fa-solid fa-calendar-range mr-1"></i><span>Switch to Range Mode</span>';
};

// Handle changes in range selection mode
const handleRangeSelectionModeChange = (isRangeMode) => {
  const selectedDateElement = document.getElementById('selectedDate');
  
  // Update the toggle mode button UI
  updateToggleModeButton(isRangeMode);
  
  // Update the selected date display
  if (isRangeMode) {
    // If switching to range mode, update the text to reflect this
    const calendar = controller.calendar;
    if (calendar.bindings.selectedDateRange && calendar.bindings.selectedDateRange.current) {
      // Show the currently selected range if any
      updateSelectedDateRangeDisplay(calendar.bindings.selectedDateRange.current);
    } else {
      // Otherwise indicate that a range can be selected
      selectedDateElement.textContent = 'Select a date range';
    }
  } else {
    // If switching to single date mode, update with current selection if any
    const calendar = controller.calendar;
    if (calendar.bindings.selectedDate && calendar.bindings.selectedDate.current) {
      updateSelectedDateDisplay(calendar.bindings.selectedDate.current);
    } else {
      selectedDateElement.textContent = 'No date selected';
    }
  }
};

// Update the display for date ranges
const updateSelectedDateRangeDisplay = (range) => {
  const element = document.getElementById('selectedDate');
  if (!element) return;

  const calendar = controller.calendar;
  const locale = calendar.methods.getLocale() || 'en-US';
  
  if (!range) {
    element.textContent = 'No range selected';
    
    return;
  }
  
  try {
    const options = { 
      weekday: 'long',
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    
    // Format start date
    if (range.startDate) {
      const formatter = new Intl.DateTimeFormat(locale, options);
      const startFormatted = formatter.format(range.startDate);
      
      // If we only have a start date
      if (!range.endDate) {
        element.textContent = `From: ${startFormatted}`;
      } else {
        // We have both start and end dates
        const endFormatted = formatter.format(range.endDate);
        element.textContent = `${startFormatted} — ${endFormatted}`;
      }
    } else if (range.endDate) {
      // Unusual case: only end date is set
      const formatter = new Intl.DateTimeFormat(locale, options);
      element.textContent = `Until: ${formatter.format(range.endDate)}`;
    } else {
      element.textContent = 'No range selected';
    }
  } catch (error) {
    // Fallback for any errors
    element.textContent = 'Error displaying date range';
    console.error('Error formatting date range:', error);
  }
};

export default {
  initCalendarView,
  updateCalendarDisplay,
  updateMonthYearDisplay,
  updateWeekdaysDisplay,
  updateSelectedDateDisplay,
  updateSelectedDateRangeDisplay,
  changeLocale,
  updateToggleModeButton,
  handleRangeSelectionModeChange
};
