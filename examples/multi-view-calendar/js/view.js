/**
 * Calendar View Module
 * Handles the rendering of calendar UI components
 */
export class CalendarView {
  /**
   * Initialize the Calendar View
   * @param {Object} elements - DOM elements
   * @param {Object} controller - Calendar controller instance
   * @param {Function} onViewChange - Callback when view changes
   */
  constructor(elements, controller, onViewChange) {
    this.elements = elements;
    this.controller = controller;
    this.onViewChange = onViewChange;
    
    // Initialize view elements
    this.initViewElements();
  }
  
  /**
   * Initialize view DOM elements
   */
  initViewElements() {
    // Set up view toggle buttons
    this.elements.dayViewBtn.addEventListener('click', () => this.setView('day'));
    this.elements.monthViewBtn.addEventListener('click', () => this.setView('month'));
    this.elements.yearViewBtn.addEventListener('click', () => this.setView('year'));
    
    // Set up navigation buttons
    this.elements.prevBtn.addEventListener('click', () => {
      this.controller.navigatePrevious();
      this.render();
    });
    
    this.elements.nextBtn.addEventListener('click', () => {
      this.controller.navigateNext();
      this.render();
    });
    
    this.elements.todayBtn.addEventListener('click', () => {
      this.controller.goToToday();
      this.render();
    });
  }
  
  /**
   * Set the active view
   * @param {string} view - The view to set ('day', 'month', or 'year')
   */
  setView(view) {
    this.controller.setView(view);
    
    // Update button styles
    [this.elements.dayViewBtn, this.elements.monthViewBtn, this.elements.yearViewBtn].forEach(btn => {
      btn.classList.remove('bg-primary', 'text-white');
      btn.classList.add('bg-gray-200', 'text-gray-800');
    });
    
    if (view === 'day') {
      this.elements.dayViewBtn.classList.remove('bg-gray-200', 'text-gray-800');
      this.elements.dayViewBtn.classList.add('bg-primary', 'text-white');
    } else if (view === 'month') {
      this.elements.monthViewBtn.classList.remove('bg-gray-200', 'text-gray-800');
      this.elements.monthViewBtn.classList.add('bg-primary', 'text-white');
    } else if (view === 'year') {
      this.elements.yearViewBtn.classList.remove('bg-gray-200', 'text-gray-800');
      this.elements.yearViewBtn.classList.add('bg-primary', 'text-white');
    }
    
    // Show/hide appropriate view
    this.elements.dayView.classList.toggle('hidden', view !== 'day');
    this.elements.monthView.classList.toggle('hidden', view !== 'month');
    this.elements.yearView.classList.toggle('hidden', view !== 'year');
    
    // Call the view change callback
    if (this.onViewChange) {
      this.onViewChange(view);
    }
    
    // Update the title and render calendar
    this.updateTitle();
    this.render();
  }
  
  /**
   * Update the calendar title based on current view
   */
  updateTitle() {
    this.elements.calendarTitle.textContent = this.controller.getTitle();
  }
  
  /**
   * Render the calendar based on current view
   */
  render() {
    this.updateTitle();
    
    const currentView = this.controller.getCurrentView();
    
    if (currentView === 'day') {
      this.renderDayView();
    } else if (currentView === 'month') {
      this.renderMonthView();
    } else if (currentView === 'year') {
      this.renderYearView();
    }
  }
  
  /**
   * Render day view
   */
  renderDayView() {
    this.elements.calendarDays.innerHTML = '';
    const days = this.controller.getCalendarDays();
    
    days.forEach(day => {
      const dayElement = document.createElement('div');
      dayElement.classList.add(
        'text-center', 'py-2', 'cursor-pointer', 'rounded'
      );
      
      if (day.isCurrentMonth) {
        dayElement.classList.add('text-gray-800');
      } else {
        dayElement.classList.add('text-gray-400');
      }
      
      if (day.isToday) {
        dayElement.classList.add('bg-primary-light');
      }
      
      if (day.isSelected) {
        dayElement.classList.add('bg-primary', 'text-white');
      } else {
        dayElement.classList.add('hover:bg-gray-100');
      }
      
      if (day.isDisabled) {
        dayElement.classList.add('text-gray-300', 'cursor-not-allowed');
        dayElement.classList.remove('hover:bg-gray-100');
      }
      
      dayElement.textContent = day.day;
      
      // Add click handler
      if (!day.isDisabled) {
        dayElement.addEventListener('click', () => {
          this.controller.selectDate(day.year, day.month, day.day);
          this.render();
        });
      }
      
      this.elements.calendarDays.appendChild(dayElement);
    });
  }
  /**
   * Render month view
   */
  renderMonthView() {
    this.elements.calendarMonths.innerHTML = '';
    const months = this.controller.getCalendarMonths();
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const viewYear = this.controller.calendar.bindings.currentYear.current;
    
    // Get the selected date from the calendar
    const selectedDate = this.controller.calendar.bindings.selectedDate.current;
    
    months.forEach(month => {
      const monthElement = document.createElement('div');
      monthElement.classList.add(
        'text-center', 'py-3', 'cursor-pointer', 'rounded'
      );
      
      // Check if this is the current month in the current year
      const isCurrentMonth = month.month === currentMonth && viewYear === currentYear;
      
      if (isCurrentMonth) {
        monthElement.classList.add('bg-primary-light');
      }
      
      // Check if this month is selected (matches the selected date)
      const isSelectedMonth = selectedDate && 
                            month.month === selectedDate.getMonth() && 
                            month.year === selectedDate.getFullYear();
      
      if (isSelectedMonth) {
        monthElement.classList.add('bg-primary', 'text-white');
      } else {
        monthElement.classList.add('hover:bg-gray-100', 'text-gray-800');
      }
      
      if (month.isDisabled) {
        monthElement.classList.add('text-gray-300', 'cursor-not-allowed');
        monthElement.classList.remove('hover:bg-gray-100');
      }
      
      monthElement.textContent = month.name;
      
      // Add click handler
      if (!month.isDisabled) {
        monthElement.addEventListener('click', () => {
          this.controller.selectMonth(month.month, month.year);
          this.setView('day'); // Switch to day view after selecting a month
        });
      }
      
      this.elements.calendarMonths.appendChild(monthElement);
    });
  }
    /**
   * Render year view
   */
  renderYearView() {
    this.elements.calendarYears.innerHTML = '';
    const years = this.controller.getCalendarYears();
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    
    // Get the selected date from the calendar
    const selectedDate = this.controller.calendar.bindings.selectedDate.current;
    
    years.forEach(year => {
      const yearElement = document.createElement('div');
      yearElement.classList.add(
        'text-center', 'py-3', 'cursor-pointer', 'rounded'
      );
      
      // Check if this is the current year
      const isCurrentYear = year.year === currentYear;
      
      if (isCurrentYear) {
        yearElement.classList.add('bg-primary-light');
      }
      
      // Check if this year is selected (matches the selected date)
      const isSelectedYear = selectedDate && year.year === selectedDate.getFullYear();
      
      if (isSelectedYear) {
        yearElement.classList.add('bg-primary', 'text-white');
      } else {
        yearElement.classList.add('hover:bg-gray-100', 'text-gray-800');
      }
      
      if (year.isDisabled) {
        yearElement.classList.add('text-gray-300', 'cursor-not-allowed');
        yearElement.classList.remove('hover:bg-gray-100');
      }
      
      yearElement.textContent = year.year;
      
      // Add click handler
      if (!year.isDisabled) {
        yearElement.addEventListener('click', () => {
          this.controller.selectYear(year.year);
          this.setView('month'); // Switch to month view after selecting a year
        });
      }
      
      this.elements.calendarYears.appendChild(yearElement);
    });
  }
}