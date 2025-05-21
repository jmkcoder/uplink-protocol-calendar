// Date Picker View - Handles DOM manipulation and event binding
import calendar from './controller.js';

/**
 * Initializes the calendar view
 */
export function initCalendarView() {
  // Get DOM elements
  const calendarEl = document.getElementById('calendar');
  const weekdaysEl = document.getElementById('weekdays');
  const currentMonthYearEl = document.getElementById('currentMonthYear');
  const selectedDateEl = document.getElementById('selectedDate');
  const selectedRangeEl = document.getElementById('selectedRange');
  
  // Set up bindings from the controller
  const bindings = calendar.bindings;
    // Initialize UI based on controller state
  renderWeekdays(weekdaysEl, bindings.weekdays.current);
  renderCurrentMonthYear(currentMonthYearEl, bindings.monthName.current, bindings.currentYear.current);
  renderCalendarDays(calendarEl, bindings.calendarDays.current);
  updateSelectedDateDisplay(selectedDateEl, bindings.selectedDate.current);
  updateSelectedRangeDisplay(selectedRangeEl, bindings.selectedDateRange.current);
  
  // Set up binding subscriptions
  bindings.calendarDays.subscribe(days => {
    renderCalendarDays(calendarEl, days);
  });
  
  bindings.monthName.subscribe(monthName => {
    renderCurrentMonthYear(currentMonthYearEl, monthName, bindings.currentYear.current);
  });
  
  bindings.currentYear.subscribe(year => {
    renderCurrentMonthYear(currentMonthYearEl, bindings.monthName.current, year);
  });
  
  bindings.selectedDate.subscribe(date => {
    updateSelectedDateDisplay(selectedDateEl, date);
  });
  
  bindings.selectedDateRange.subscribe(range => {
    updateSelectedRangeDisplay(selectedRangeEl, range);
  });
    bindings.isRangeSelection.subscribe(isRange => {
    if (isRange) {
      selectedDateEl.classList.add('hidden');
      selectedDateEl.classList.remove('block');
      selectedRangeEl.classList.add('block');
      selectedRangeEl.classList.remove('hidden');
    } else {
      selectedDateEl.classList.add('block');
      selectedDateEl.classList.remove('hidden');
      selectedRangeEl.classList.add('hidden');
      selectedRangeEl.classList.remove('block');
    }
  });
  
  // Initial display mode
  if (bindings.isRangeSelection.current) {
    selectedDateEl.classList.add('hidden');
    selectedRangeEl.classList.add('block');
  } else {
    selectedRangeEl.classList.add('hidden');
    selectedDateEl.classList.add('block');
  }
}

/**
 * Renders the weekdays
 */
function renderWeekdays(weekdaysEl, weekdays) {
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
  element.textContent = `${month} ${year}`;
}

/**
 * Renders the calendar days
 */
function renderCalendarDays(calendarEl, days) {
  // Create a temporary container to build the new calendar
  const tempContainer = document.createElement('div');
  tempContainer.className = calendarEl.className;
  
  // Add a slide-in animation effect for container
  calendarEl.classList.add('opacity-0');
  setTimeout(() => calendarEl.classList.remove('opacity-0'), 50);
  
  days.forEach(day => {
    const dayEl = document.createElement('div');
    
    // Base classes with Tailwind
    let className = 'w-10 h-10 flex items-center justify-center rounded-full transition transform hover:scale-105';
    
    // Apply conditional classes
    if (!day.isCurrentMonth) {
      className += ' text-gray-400';
    }
    
    if (day.isToday) {
      className += ' ring-1 ring-gray-300';
    }
    
    if (day.isSelected) {
      className += ' bg-primary text-white';
    }
    
    if (day.isDisabled) {
      className += ' text-gray-300 cursor-not-allowed';
    } else {
      className += ' cursor-pointer hover:bg-gray-100';
      dayEl.addEventListener('click', () => {
        calendar.methods.selectDate(day.year, day.month, day.day);
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
 * Updates the selected date display
 */
function updateSelectedDateDisplay(element, date) {
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

// Export initialization function
export default { initCalendarView };