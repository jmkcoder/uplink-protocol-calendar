import { CalendarController } from '../../../dist/index.js';

/**
 * Calendar Controller Module
 * Handles the calendar operations and state management
 */
export class CalendarControllerWrapper {
  constructor() {
    // Create calendar controller instance
    this.calendar = CalendarController();
    this.currentView = 'day'; // 'day', 'month', or 'year'
  }

  /**
   * Change the calendar view
   * @param {string} view - The view to switch to ('day', 'month', or 'year')
   */
  setView(view) {
    this.currentView = view;
    return this.currentView;
  }

  /**
   * Get the current view
   * @returns {string} Current view ('day', 'month', or 'year')
   */
  getCurrentView() {
    return this.currentView;
  }  /**
   * Navigate to the previous period based on current view
   */
  navigatePrevious() {
    if (this.currentView === 'day') {
      this.calendar.methods.prevMonth();
    } else if (this.currentView === 'month') {
      this.calendar.methods.prevYear();
    } else if (this.currentView === 'year') {
      this.calendar.methods.prevYearRange();
    }
  }

  /**
   * Navigate to the next period based on current view
   */
  navigateNext() {
    if (this.currentView === 'day') {
      this.calendar.methods.nextMonth();
    } else if (this.currentView === 'month') {
      this.calendar.methods.nextYear();
    } else if (this.currentView === 'year') {
      this.calendar.methods.nextYearRange();
    }
  }

  /**
   * Go to today's date
   */
  goToToday() {
    this.calendar.methods.goToToday();
  }

  /**
   * Select a specific date
   * @param {number} year - Year
   * @param {number} month - Month (0-11)
   * @param {number} day - Day
   */
  selectDate(year, month, day) {
    this.calendar.methods.selectDate(year, month, day);
  }

  /**
   * Select a specific month
   * @param {number} month - Month (0-11)
   * @param {number} year - Year
   */
  selectMonth(month, year) {
    this.calendar.methods.selectMonth(month, year);
  }

  /**
   * Select a specific year
   * @param {number} year - Year
   */
  selectYear(year) {
    this.calendar.methods.selectYear(year);
  }  /**
   * Get the calendar days for the current month
   * @returns {Array} Calendar days
   */
  getCalendarDays() {
    return this.calendar.bindings.calendarDays.current;
  }

  /**
   * Get the calendar months for the current year
   * @returns {Array} Calendar months
   */
  getCalendarMonths() {
    return this.calendar.bindings.calendarMonths.current;
  }

  /**
   * Get the calendar years for the current range
   * @returns {Array} Calendar years
   */
  getCalendarYears() {
    return this.calendar.bindings.calendarYears.current;
  }  /**
   * Get the current title based on view
   * @returns {string} Formatted title
   */
  getTitle() {
    if (this.currentView === 'day') {
      return `${this.calendar.bindings.monthName.current} ${this.calendar.bindings.currentYear.current}`;
    } else if (this.currentView === 'month') {
      return `${this.calendar.bindings.currentYear.current}`;
    } else if (this.currentView === 'year') {
      const yearRange = this.calendar.methods.getCurrentYearRange();
      return `${yearRange.startYear} - ${yearRange.endYear}`;
    }
    return '';
  }

  /**
   * Get the current calendar API instance
   * @returns {Object} Calendar API
   */
  getCalendarAPI() {
    return this.calendar;
  }
}