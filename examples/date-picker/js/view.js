// filepath: d:\Projects\Odyssey\components\date-picker\examples\date-picker\js\view.js
// Date Picker View - Handles DOM manipulation and event binding
import calendars from './controller.js';
import accessibility from './accessibility.js';

/**
 * Initializes the calendar view
 */
export function initCalendarView() {
  // Primary calendar for main view
  const calendar = calendars.primary;
  const secondaryCalendar = calendars.secondary;
  
  // Get DOM elements - Single Month View
  const calendarEl = document.getElementById('calendar');
  const weekdaysEl = document.getElementById('weekdays');
  const currentMonthYearEl = document.getElementById('currentMonthYear');
  const selectedDateEl = document.getElementById('selectedDate');
  const selectedRangeEl = document.getElementById('selectedRange');
  const dateInputEl = document.getElementById('dateInput');
  const calendarPopupEl = document.getElementById('calendarPopup');
  const monthsListEl = document.getElementById('monthsList');
  const yearsListEl = document.getElementById('yearsList');
  
  // View mode elements
  const singleMonthViewEl = document.getElementById('singleMonthView');
  const doubleMonthViewEl = document.getElementById('doubleMonthView');
  const monthsViewEl = document.getElementById('monthsView');
  const yearsViewEl = document.getElementById('yearsView');
  
  // Double month view elements
  const firstMonthCalendarEl = document.getElementById('firstMonthCalendar');
  const firstMonthWeekdaysEl = document.getElementById('firstMonthWeekdays');
  const firstMonthTitleEl = document.getElementById('firstMonthTitle');
  const secondMonthCalendarEl = document.getElementById('secondMonthCalendar');
  const secondMonthWeekdaysEl = document.getElementById('secondMonthWeekdays');
  const secondMonthTitleEl = document.getElementById('secondMonthTitle');
  
  // Month and year view elements
  const monthsGridEl = document.getElementById('monthsGrid');
  const yearsGridEl = document.getElementById('yearsGrid');
  
  // Set up bindings from the controllers
  const bindings = calendar.bindings;
  const secondaryBindings = secondaryCalendar.bindings;
  
  // Initialize UI based on controller state
  renderWeekdays(weekdaysEl, bindings.weekdays.current);
  renderCurrentMonthYear(currentMonthYearEl, bindings.monthName.current, bindings.currentYear.current);
  renderCalendarDays(calendarEl, bindings.calendarDays.current, calendar);
  updateSelectedDateDisplay(selectedDateEl, bindings.selectedDate.current);
  updateSelectedRangeDisplay(selectedRangeEl, bindings.selectedDateRange.current);
  updateInputFieldValue(dateInputEl, bindings.selectedDate.current);
  
  // Initialize double month view
  if (firstMonthWeekdaysEl) renderWeekdays(firstMonthWeekdaysEl, bindings.weekdays.current);
  if (secondMonthWeekdaysEl) renderWeekdays(secondMonthWeekdaysEl, secondaryBindings.weekdays.current);
  if (firstMonthCalendarEl && firstMonthTitleEl) {
    renderCurrentMonthYear(firstMonthTitleEl, bindings.monthName.current, bindings.currentYear.current);
    renderCalendarDays(firstMonthCalendarEl, bindings.calendarDays.current, calendar);
  }
  if (secondMonthCalendarEl && secondMonthTitleEl) {
    renderCurrentMonthYear(secondMonthTitleEl, secondaryBindings.monthName.current, secondaryBindings.currentYear.current);
    renderCalendarDays(secondMonthCalendarEl, secondaryBindings.calendarDays.current, secondaryCalendar);
  }
  
  // Generate months and years view
  renderMonthsView(monthsGridEl);
  renderYearsView(yearsGridEl);
  
  // Generate months for the month selector dropdown
  renderMonthsList(monthsListEl);
  
  // Generate years for the year selector dropdown
  renderYearsList(yearsListEl);
  
  // Set up binding subscriptions for single month view
  bindings.calendarDays.subscribe(days => {
    renderCalendarDays(calendarEl, days, calendar);
    if (firstMonthCalendarEl && calendars.state.getViewMode() === 'doubleMonth') {
      renderCalendarDays(firstMonthCalendarEl, days, calendar);
    }
  });
  
  bindings.monthName.subscribe(monthName => {
    renderCurrentMonthYear(currentMonthYearEl, monthName, bindings.currentYear.current);
    if (firstMonthTitleEl && calendars.state.getViewMode() === 'doubleMonth') {
      renderCurrentMonthYear(firstMonthTitleEl, monthName, bindings.currentYear.current);
    }
  });
  
  bindings.currentYear.subscribe(year => {
    renderCurrentMonthYear(currentMonthYearEl, bindings.monthName.current, year);
    if (firstMonthTitleEl && calendars.state.getViewMode() === 'doubleMonth') {
      renderCurrentMonthYear(firstMonthTitleEl, bindings.monthName.current, year);
    }
    // Update years list and years view when current year changes
    if (!isYearInVisibleRange(year, yearsListEl)) {
      renderYearsList(yearsListEl, year);
    }
    if (yearsGridEl) {
      renderYearsView(yearsGridEl, year);
    }
  });
  
  // Set up binding subscriptions for secondary calendar (double month view)
  secondaryBindings.calendarDays.subscribe(days => {
    if (secondMonthCalendarEl && calendars.state.getViewMode() === 'doubleMonth') {
      renderCalendarDays(secondMonthCalendarEl, days, secondaryCalendar);
    }
  });
  
  secondaryBindings.monthName.subscribe(monthName => {
    if (secondMonthTitleEl && calendars.state.getViewMode() === 'doubleMonth') {
      renderCurrentMonthYear(secondMonthTitleEl, monthName, secondaryBindings.currentYear.current);
    }
  });
  
  secondaryBindings.currentYear.subscribe(year => {
    if (secondMonthTitleEl && calendars.state.getViewMode() === 'doubleMonth') {
      renderCurrentMonthYear(secondMonthTitleEl, secondaryBindings.monthName.current, year);
    }
  });
  
  bindings.selectedDate.subscribe(date => {
    updateSelectedDateDisplay(selectedDateEl, date);
    updateInputFieldValue(dateInputEl, date);
    
    // Update months view to highlight the selected month if applicable
    if (monthsGridEl && date) {
      renderMonthsView(monthsGridEl);
    }
    
    // Update sidebar selection highlighting
    updateSidebarSelection();
  });
  
  bindings.selectedDateRange.subscribe(range => {
    updateSelectedRangeDisplay(selectedRangeEl, range);
    updateInputFieldRangeValue(dateInputEl, range);
    
    // Update sidebar selection highlighting for ranges
    updateSidebarSelection();
  });
  
  bindings.isRangeSelection.subscribe(isRange => {
    if (isRange) {
      selectedDateEl.classList.add('hidden');
      selectedDateEl.classList.remove('block');
      selectedRangeEl.classList.add('block');
      selectedRangeEl.classList.remove('hidden');
      // Update input placeholder
      dateInputEl.placeholder = 'Select date range...';
    } else {
      selectedDateEl.classList.add('block');
      selectedDateEl.classList.remove('hidden');
      selectedRangeEl.classList.add('hidden');
      selectedRangeEl.classList.remove('block');
      // Update input placeholder
      dateInputEl.placeholder = 'Select a date...';
    }
    
    // Reset sidebar selection highlighting when changing modes
    updateSidebarSelection();
  });
  
  // Initial display mode
  if (bindings.isRangeSelection.current) {
    selectedDateEl.classList.add('hidden');
    selectedRangeEl.classList.add('block');
    dateInputEl.placeholder = 'Select date range...';
  } else {
    selectedRangeEl.classList.add('hidden');
    selectedDateEl.classList.add('block');
    dateInputEl.placeholder = 'Select a date...';
  }
  
  // Initialize view mode to single month by default
  setCalendarViewMode('singleMonth');
  
  // Initialize accessibility features
  accessibility.initAccessibility();
}

/**
 * Updates the input field with the selected date
 */
function updateInputFieldValue(inputEl, date) {
  if (!inputEl) return;
  
  if (date) {
    inputEl.value = accessibility.formatDate(date, 'MM/DD/YYYY');
    accessibility.announce(`Date selected: ${date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })}`);
  } else {
    inputEl.value = '';
  }
}

/**
 * Updates the input field with the selected date range
 */
function updateInputFieldRangeValue(inputEl, range) {
  if (!inputEl) return;
  
  if (range.startDate && range.endDate) {
    const startFormatted = accessibility.formatDate(range.startDate, 'MM/DD/YYYY');
    const endFormatted = accessibility.formatDate(range.endDate, 'MM/DD/YYYY');
    inputEl.value = `${startFormatted} - ${endFormatted}`;
    
    // Announce to screen readers
    const startReadable = range.startDate.toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric'
    });
    const endReadable = range.endDate.toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric'
    });
    accessibility.announce(`Date range selected: ${startReadable} to ${endReadable}`);
  } else if (range.startDate) {
    inputEl.value = `${accessibility.formatDate(range.startDate, 'MM/DD/YYYY')} - ...`;
    
    // Announce to screen readers
    const startReadable = range.startDate.toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric'
    });
    accessibility.announce(`Range start date selected: ${startReadable}`);
  } else {
    inputEl.value = '';
  }
}

/**
 * Renders the months list for the month selector dropdown
 */
function renderMonthsList(monthsListEl) {
  if (!monthsListEl) return;
  
  monthsListEl.innerHTML = '';
  
  // Get primary calendar
  const calendar = calendars.primary;
  
  // Get all month names
  const months = [];
  for (let i = 0; i < 12; i++) {
    const date = new Date(2000, i, 1);
    months.push({
      index: i,
      name: date.toLocaleString('default', { month: 'short' })
    });
  }
  
  // Create month buttons
  months.forEach(month => {
    const monthButton = document.createElement('button');
    monthButton.className = 'py-2 px-3 text-sm rounded hover:bg-gray-100 w-full text-center transition-colors';
    monthButton.textContent = month.name;
    monthButton.setAttribute('data-month', month.index);
    monthButton.setAttribute('aria-label', `Select ${month.name}`);
    
    // Set current month as active
    if (month.index === calendar.bindings.currentMonth.current) {
      monthButton.classList.add('bg-primary', 'text-white', 'font-medium');
    } else if (month.index === new Date().getMonth() && 
               calendar.bindings.currentYear.current === new Date().getFullYear()) {
      // Highlight current calendar month if we're in the current year
      monthButton.classList.add('font-medium');
    }
    
    monthButton.addEventListener('click', () => {
      calendar.methods.goToMonth(month.index);
      
      // Also update secondary calendar for double month view
      if (month.index === 11) {
        calendars.secondary.methods.goToMonth(0);
        calendars.secondary.methods.goToYear(calendar.bindings.currentYear.current + 1);
      } else {
        calendars.secondary.methods.goToMonth(month.index + 1);
        calendars.secondary.methods.goToYear(calendar.bindings.currentYear.current);
      }
      
      hideMonthYearDropdown();
    });
    
    monthsListEl.appendChild(monthButton);
  });
}

/**
 * Renders the months view (grid of all 12 months)
 */
function renderMonthsView(monthsGridEl) {
  if (!monthsGridEl) return;
  
  monthsGridEl.innerHTML = '';
  
  // Get months data from calendar state
  const months = calendars.state.generateMonthsView();
  
  // Create month buttons
  months.forEach(month => {
    const monthButton = document.createElement('button');
    monthButton.className = 'py-4 px-2 rounded-lg hover:bg-gray-100 w-full text-center flex flex-col items-center justify-center transition-colors';
    monthButton.setAttribute('data-month', month.index);
    monthButton.setAttribute('aria-label', `Go to ${month.fullName}`);
    
    // Month name
    const nameSpan = document.createElement('span');
    nameSpan.className = 'text-lg font-medium';
    nameSpan.textContent = month.fullName;
    monthButton.appendChild(nameSpan);
    
    // Year 
    const yearSpan = document.createElement('span');
    yearSpan.className = 'text-xs text-gray-500';
    yearSpan.textContent = month.year;
    monthButton.appendChild(yearSpan);
    
    // Set current month as active
    if (month.isSelected) {
      monthButton.classList.add('bg-primary', 'text-white');
      nameSpan.classList.add('text-white');
      yearSpan.classList.add('text-white');
      yearSpan.classList.remove('text-gray-500');
    }
    
    if (month.isCurrent && !month.isSelected) {
      nameSpan.classList.add('font-semibold');
      monthButton.classList.add('ring-1', 'ring-primary');
    }
    
    monthButton.addEventListener('click', () => {
      const calendar = calendars.primary;
      
      // Go to this month and switch view mode back to calendar
      calendar.methods.goToMonth(month.index);
      calendar.methods.goToYear(month.year);
      
      // Update secondary calendar for double month view
      if (month.index === 11) {
        calendars.secondary.methods.goToMonth(0);
        calendars.secondary.methods.goToYear(month.year + 1);
      } else {
        calendars.secondary.methods.goToMonth(month.index + 1);
        calendars.secondary.methods.goToYear(month.year);
      }
      
      // Switch back to the appropriate view mode
      const currentViewMode = calendars.state.getViewMode();
      if (currentViewMode === 'months' || currentViewMode === 'years') {
        setCalendarViewMode('singleMonth');
      }
    });
    
    monthsGridEl.appendChild(monthButton);
  });
}

/**
 * Renders the years list for the year selector dropdown
 */
function renderYearsList(yearsListEl, centerYear = null) {
  if (!yearsListEl) return;
  
  yearsListEl.innerHTML = '';
  
  // Get primary calendar
  const calendar = calendars.primary;
  
  // Default to current year if no center year provided
  const currentYear = centerYear || calendar.bindings.currentYear.current;
  const startYear = currentYear - 5; // Show a range of 12 years (5 before, current, 6 after)
  const endYear = currentYear + 6;
  
  // Set a data attribute to track the visible range
  yearsListEl.setAttribute('data-start-year', startYear);
  yearsListEl.setAttribute('data-end-year', endYear);
  
  // Create year buttons
  for (let year = startYear; year <= endYear; year++) {
    const yearButton = document.createElement('button');
    yearButton.className = 'py-2 px-3 text-sm rounded hover:bg-gray-100 w-full text-center transition-colors';
    yearButton.textContent = year;
    yearButton.setAttribute('data-year', year);
    yearButton.setAttribute('aria-label', `Select year ${year}`);
    
    // Set current year as active
    if (year === currentYear) {
      yearButton.classList.add('bg-primary', 'text-white', 'font-medium');
    } else if (year === new Date().getFullYear()) {
      // Highlight current calendar year
      yearButton.classList.add('font-medium');
    }
    
    yearButton.addEventListener('click', () => {
      calendar.methods.goToYear(year);
      
      // Also update secondary calendar for double month view
      calendars.secondary.methods.goToYear(year);
      
      hideMonthYearDropdown();
    });
    
    yearsListEl.appendChild(yearButton);
  }
}

/**
 * Renders the years view (grid of years)
 */
function renderYearsView(yearsGridEl, centerYear = null) {
  if (!yearsGridEl) return;
  
  yearsGridEl.innerHTML = '';
  
  // Get years data from calendar state
  const years = calendars.state.generateYearsView(centerYear);
  
  // Create year buttons
  years.forEach(yearData => {
    const yearButton = document.createElement('button');
    yearButton.className = 'py-4 px-4 rounded-lg hover:bg-gray-100 w-full text-center flex items-center justify-center transition-colors';
    yearButton.setAttribute('data-year', yearData.year);
    yearButton.setAttribute('aria-label', `Go to ${yearData.year}`);
    
    // Year text
    const yearSpan = document.createElement('span');
    yearSpan.className = 'text-xl';
    yearSpan.textContent = yearData.year;
    yearButton.appendChild(yearSpan);
    
    // Set selected year as active
    if (yearData.isSelected) {
      yearButton.classList.add('bg-primary', 'text-white');
    }
    
    if (yearData.isCurrent && !yearData.isSelected) {
      yearButton.classList.add('font-semibold', 'ring-1', 'ring-primary');
    }
    
    yearButton.addEventListener('click', () => {
      const calendar = calendars.primary;
      
      // Go to this year and switch view mode back to months
      calendar.methods.goToYear(yearData.year);
      
      // Update secondary calendar for double month view
      calendars.secondary.methods.goToYear(yearData.year);
      
      // Switch to months view
      setCalendarViewMode('months');
    });
    
    yearsGridEl.appendChild(yearButton);
  });
}

/**
 * Sets the calendar view mode
 * @param {string} mode - The view mode ('singleMonth', 'doubleMonth', 'months', 'years')
 */
function setCalendarViewMode(mode) {
  // Update state
  calendars.state.setViewMode(mode);
  
  // Get view elements
  const singleMonthViewEl = document.getElementById('singleMonthView');
  const doubleMonthViewEl = document.getElementById('doubleMonthView');
  const monthsViewEl = document.getElementById('monthsView');
  const yearsViewEl = document.getElementById('yearsView');
  
  const singleMonthModeBtn = document.getElementById('singleMonthMode');
  const doubleMonthModeBtn = document.getElementById('doubleMonthMode');
  
  // Hide all views first
  [singleMonthViewEl, doubleMonthViewEl, monthsViewEl, yearsViewEl].forEach(el => {
    if (el) {
      el.classList.add('hidden');
      el.classList.remove('active');
    }
  });
  
  // Reset mode button styles
  [singleMonthModeBtn, doubleMonthModeBtn].forEach(btn => {
    if (btn) {
      btn.classList.remove('bg-primary', 'text-white');
      btn.classList.add('hover:bg-gray-100');
    }
  });
  
  // Activate the appropriate view
  switch(mode) {
    case 'singleMonth':
      singleMonthViewEl?.classList.remove('hidden');
      singleMonthViewEl?.classList.add('active');
      singleMonthModeBtn?.classList.add('bg-primary', 'text-white');
      singleMonthModeBtn?.classList.remove('hover:bg-gray-100');
      break;
    case 'doubleMonth':
      doubleMonthViewEl?.classList.remove('hidden');
      doubleMonthViewEl?.classList.add('active');
      doubleMonthModeBtn?.classList.add('bg-primary', 'text-white');
      doubleMonthModeBtn?.classList.remove('hover:bg-gray-100');
      break;
    case 'months':
      monthsViewEl?.classList.remove('hidden');
      monthsViewEl?.classList.add('active');
      break;
    case 'years':
      yearsViewEl?.classList.remove('hidden');
      yearsViewEl?.classList.add('active');
      break;
  }
  
  // Announce view change to screen readers
  accessibility.announce(`Calendar view changed to ${mode}`);
}

/**
 * Check if a year is in the visible range of years list
 */
function isYearInVisibleRange(year, yearsListEl) {
  if (!yearsListEl) return false;
  
  const startYear = parseInt(yearsListEl.getAttribute('data-start-year') || 0);
  const endYear = parseInt(yearsListEl.getAttribute('data-end-year') || 0);
  
  return year >= startYear && year <= endYear;
}

/**
 * Shows the month/year dropdown
 */
function showMonthYearDropdown() {
  const dropdown = document.getElementById('monthYearDropdown');
  if (dropdown) {
    dropdown.classList.remove('hidden');
  }
  
  document.getElementById('monthYearSelector').setAttribute('aria-expanded', 'true');
}

/**
 * Hides the month/year dropdown
 */
function hideMonthYearDropdown() {
  const dropdown = document.getElementById('monthYearDropdown');
  if (dropdown) {
    dropdown.classList.add('hidden');
  }
  
  document.getElementById('monthYearSelector').setAttribute('aria-expanded', 'false');
}

/**
 * Shows the calendar popup
 */
function showCalendarPopup() {
  const popup = document.getElementById('calendarPopup');
  const input = document.getElementById('dateInput');
  
  if (popup && input) {
    // Position below the input
    const inputRect = input.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    
    // Determine screen size categories
    const isMobile = window.innerWidth <= 640;
    const isSmallMobile = window.innerWidth <= 380;
    const isTablet = window.innerWidth > 640 && window.innerWidth <= 1024;
    const isLandscape = window.innerWidth > window.innerHeight;
    
    popup.classList.remove('hidden');
    
    if (isMobile) {
      // For mobile, position it at the bottom of the screen with full width
      popup.style.position = 'fixed';
      popup.style.left = '0';
      popup.style.right = '0';
      popup.style.bottom = '0';
      popup.style.top = 'auto';
      popup.style.width = '100%';
      popup.style.maxHeight = isLandscape ? '85vh' : '90vh'; // Slightly less height in landscape
      popup.style.transform = 'translateY(0)';
      popup.style.borderRadius = '1.5rem 1.5rem 0 0';
      
      // Add safe area inset padding for iOS devices
      popup.style.paddingBottom = 'calc(env(safe-area-inset-bottom, 1rem) + 1rem)';
      
      // Add mobile-specific class
      popup.classList.add('mobile-popup');
      
      // Add specific size classes for more targeted styling
      popup.classList.toggle('small-mobile', isSmallMobile);
      popup.classList.toggle('landscape', isLandscape);
      
      // Ensure the body doesn't scroll under the popup
      document.body.style.overflow = 'hidden';
    } else {
      // Reset mobile-specific classes
      popup.classList.remove('mobile-popup', 'small-mobile', 'landscape');
      
      // Calculate available space below and above
      const spaceBelow = windowHeight - inputRect.bottom;
      const spaceAbove = inputRect.top;
      
      // Position popup below or above based on available space
      if (spaceBelow >= 350 || spaceBelow > spaceAbove) {
        popup.style.top = `${inputRect.bottom + window.scrollY + 5}px`;
        popup.style.bottom = 'auto';
      } else {
        popup.style.bottom = `${window.innerHeight - inputRect.top + window.scrollY - 5}px`;
        popup.style.top = 'auto';
      }
      
      // Reset any mobile-specific styles
      popup.style.position = 'absolute';
      popup.style.maxHeight = '';
      popup.style.transform = '';
      popup.style.borderRadius = '';
      popup.style.paddingBottom = '';
      document.body.style.overflow = '';
      
      // Add tablet-specific class if needed
      popup.classList.toggle('tablet', isTablet);
      
      // Handle horizontal positioning to ensure visibility
      // Adjust popup width based on device category
      let popupWidth;
      if (isTablet) {
        popupWidth = Math.min(90, Math.max(70, inputRect.width));
        popupWidth = `${popupWidth}vw`; // Use viewport units for tablets
      } else {
        popupWidth = Math.max(620, inputRect.width); // Desktop width
      }
      
      // For desktop, position it relative to the input
      let leftPos = inputRect.left + window.scrollX;
      
      // Check if popup would overflow to the right
      if (typeof popupWidth === 'number' && leftPos + popupWidth > windowWidth) {
        // Adjust to center the popup or align with right edge
        leftPos = Math.max(10, windowWidth - popupWidth - 10);
      }
      
      popup.style.left = `${leftPos}px`;
      popup.style.width = popupWidth;
    }
    
    // Set ARIA attributes
    document.getElementById('calendarTrigger').setAttribute('aria-expanded', 'true');
    
    // Focus the first interactive element (for keyboard navigation)
    setTimeout(() => {
      // First try to focus on the current day
      const todayCell = popup.querySelector('.calendar-cell[aria-current="date"]');
      if (todayCell) {
        todayCell.focus();
      } else {
        // Otherwise focus on the first interactive element
        const firstFocusable = popup.querySelector('button:not([disabled]), [tabindex]:not([tabindex="-1"])');
        if (firstFocusable) {
          firstFocusable.focus();
        }
      }
    }, 100);
    
    // Announce to screen readers
    accessibility.announce('Calendar dialog opened');
  }
}

/**
 * Hides the calendar popup
 */
function hideCalendarPopup() {
  const popup = document.getElementById('calendarPopup');
  if (popup) {
    popup.classList.add('hidden');
    
    // Remove mobile-specific styles and restore page scrolling
    if (popup.classList.contains('mobile-popup')) {
      document.body.style.overflow = '';
      popup.classList.remove('mobile-popup');
    }
  }
  
  document.getElementById('calendarTrigger').setAttribute('aria-expanded', 'false');
  
  // Return focus to the input field
  document.getElementById('dateInput').focus();
  
  // Announce to screen readers
  accessibility.announce('Calendar dialog closed');
}

/**
 * Renders the weekdays
 */
function renderWeekdays(weekdaysEl, weekdays) {
  if (!weekdaysEl) return;
  
  weekdaysEl.innerHTML = '';
  weekdays.forEach(dayName => {
    const dayEl = document.createElement('div');
    dayEl.className = 'text-center font-semibold text-gray-600 text-sm';
    dayEl.textContent = dayName;
    weekdaysEl.appendChild(dayEl);
  });
}

/**
 * Renders the current month and year
 */
function renderCurrentMonthYear(element, month, year) {
  if (!element) return;
  element.textContent = `${month} ${year}`;
}

/**
 * Renders the calendar days
 */
function renderCalendarDays(calendarEl, days, calendarInstance) {
  if (!calendarEl) return;
  
  // Create a temporary container to build the new calendar
  const tempContainer = document.createElement('div');
  tempContainer.className = calendarEl.className;
  
  // Add a slide-in animation effect for container
  calendarEl.classList.add('opacity-0');
  
  // Check if we're on mobile for enhanced transitions
  const isMobile = window.innerWidth <= 640;
  if (isMobile) {
    calendarEl.classList.add('horizontal-swipe-animation');
  }
  
  setTimeout(() => calendarEl.classList.remove('opacity-0'), 50);
    days.forEach(day => {
    const dayEl = document.createElement('div');
    
    // Base classes with Tailwind
    let className = 'w-10 h-10 flex items-center justify-center rounded-full transition transform hover:scale-105 calendar-cell';
    
    // Apply conditional classes
    if (!day.isCurrentMonth) {
      className += ' text-gray-400';
    }
    
    // Add touch feedback for mobile
    if ('ontouchstart' in window) {
      dayEl.addEventListener('touchstart', () => {
        dayEl.classList.add('touching');
      }, { passive: true });
      
      dayEl.addEventListener('touchend', () => {
        dayEl.classList.remove('touching');
      }, { passive: true });
      
      dayEl.addEventListener('touchcancel', () => {
        dayEl.classList.remove('touching');
      }, { passive: true });
    }
    
    if (day.isToday) {
      className += ' ring-2 ring-primary';
    }
    
    if (day.isSelected) {
      className += ' bg-primary text-white';
    }
    
    if (day.isDisabled) {
      className += ' text-gray-300 cursor-not-allowed';
    } else {
      className += ' cursor-pointer hover:bg-gray-100';
      dayEl.addEventListener('click', () => {
        calendarInstance.methods.selectDate(day.year, day.month, day.day);
      });
    }
    
    if (day.isInRange) {
      className += ' bg-primary-light';
    }
    
    if (day.isRangeStart || day.isRangeEnd) {
      className += ' bg-primary text-white';
    }
      
    dayEl.className = className;
    dayEl.textContent = day.day;
    
    // Add accessibility attributes
    dayEl.setAttribute('role', 'button');
    dayEl.setAttribute('tabindex', day.isDisabled ? '-1' : '0');
    dayEl.setAttribute('aria-label', getDateAriaLabel(day));
    if (day.isSelected) {
      dayEl.setAttribute('aria-selected', 'true');
    }
    if (day.isToday) {
      dayEl.setAttribute('aria-current', 'date');
    }
    if (day.isDisabled) {
      dayEl.setAttribute('aria-disabled', 'true');
    }
    
    // Add keyboard interaction
    dayEl.addEventListener('keydown', (e) => {
      // Handle Enter/Space
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (!day.isDisabled) {
          calendarInstance.methods.selectDate(day.year, day.month, day.day);
        }
      }
    });
    
    tempContainer.appendChild(dayEl);
  });
  
  // Replace the calendar content with our new elements
  calendarEl.innerHTML = '';
  Array.from(tempContainer.children).forEach(child => {
    calendarEl.appendChild(child);
  });
  
  // Add a subtle fade-in effect
  requestAnimationFrame(() => {
    calendarEl.classList.add('transition-opacity', 'duration-200');
    calendarEl.classList.remove('opacity-0');
  });
}

/**
 * Create an accessible label for a calendar date
 */
function getDateAriaLabel(day) {
  const date = new Date(day.year, day.month, day.day);
  const formattedDate = date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  let label = formattedDate;
  
  if (day.isToday) {
    label += ', Today';
  }
  if (day.isSelected) {
    label += ', Selected';
  }
  if (day.isDisabled) {
    label += ', Unavailable';
  }
  if (day.isInRange) {
    label += ', In selected range';
  }
  
  return label;
}

/**
 * Updates the selected date display
 */
function updateSelectedDateDisplay(element, date) {
  if (!element) return;
  
  element.innerHTML = ''; // Clear previous content
  
  if (date) {
    const formattedDate = date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    
    const labelSpan = document.createElement('span');
    labelSpan.className = 'font-medium text-gray-700';
    labelSpan.textContent = 'Selected Date: ';
    
    const dateSpan = document.createElement('span');
    dateSpan.className = 'text-primary font-semibold';
    dateSpan.textContent = formattedDate;
    
    element.appendChild(labelSpan);
    element.appendChild(dateSpan);
  } else {
    const noDateSpan = document.createElement('span');
    noDateSpan.className = 'text-gray-500 italic';
    noDateSpan.textContent = 'No date selected';
    
    element.appendChild(noDateSpan);
  }
}

/**
 * Updates the selected date range display
 */
function updateSelectedRangeDisplay(element, range) {
  if (!element) return;
  
  element.innerHTML = ''; // Clear previous content
  
  if (range.startDate && range.endDate) {
    const start = range.startDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    
    const end = range.endDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    
    const labelSpan = document.createElement('span');
    labelSpan.className = 'font-medium text-gray-700';
    labelSpan.textContent = 'Selected Range: ';
    
    const startSpan = document.createElement('span');
    startSpan.className = 'text-primary font-semibold';
    startSpan.textContent = start;
    
    const toSpan = document.createElement('span');
    toSpan.className = 'mx-1';
    toSpan.textContent = 'to';
    
    const endSpan = document.createElement('span');
    endSpan.className = 'text-primary font-semibold';
    endSpan.textContent = end;
    
    element.appendChild(labelSpan);
    element.appendChild(startSpan);
    element.appendChild(toSpan);
    element.appendChild(endSpan);
  } else if (range.startDate) {
    const start = range.startDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    
    const labelSpan = document.createElement('span');
    labelSpan.className = 'font-medium text-gray-700';
    labelSpan.textContent = 'Start Date: ';
    
    const startSpan = document.createElement('span');
    startSpan.className = 'text-primary font-semibold';
    startSpan.textContent = start;
    
    element.appendChild(labelSpan);
    element.appendChild(startSpan);
  } else {
    const noRangeSpan = document.createElement('span');
    noRangeSpan.className = 'text-gray-500 italic';
    noRangeSpan.textContent = 'No range selected';
    
    element.appendChild(noRangeSpan);
  }
}

/**
 * Handles updating the sidebar based on selected date or range
 */
function updateSidebarSelection() {
  // Get all sidebar quick selection buttons
  const quickSelectButtons = document.querySelectorAll('#datepickerSidebar button');
  
  // Reset all button states
  quickSelectButtons.forEach(btn => {
    btn.classList.remove('bg-primary', 'text-white');
  });
  
  // Determine which button to highlight based on selection
  const primaryCalendar = calendars.primary;
  
  // We'd check which date or range matches our presets and highlight the appropriate button
  // For example:
  const today = new Date();
  const selectedDate = primaryCalendar.bindings.selectedDate.current;
  
  if (selectedDate) {
    // Check if selected date is today
    if (isSameDay(selectedDate, today)) {
      document.getElementById('selectToday')?.classList.add('bg-primary', 'text-white');
    }
    // Check other preset dates...
  }
}

/**
 * Helper function to check if two dates are the same day
 */
function isSameDay(date1, date2) {
  return date1.getDate() === date2.getDate() &&
         date1.getMonth() === date2.getMonth() &&
         date1.getFullYear() === date2.getFullYear();
}

// Export initialization function and helper functions
export default { 
  initCalendarView,
  showCalendarPopup,
  hideCalendarPopup,
  showMonthYearDropdown,
  hideMonthYearDropdown,
  setCalendarViewMode
};
