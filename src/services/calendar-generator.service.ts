import { ICalendarGeneratorService } from "../interfaces/calendar-generator.service.interfaces";
import { CalendarDate, CalendarMonth, CalendarYear } from "../interfaces/calendar.interfaces";
import { CalendarGenerationOptions, MonthViewGenerationOptions, YearViewGenerationOptions } from "../interfaces/calendar.service.interfaces";

/**
 * Implementation of CalendarGeneratorService
 * Responsible for generating calendar days based on given options
 */
export class CalendarGeneratorService implements ICalendarGeneratorService {
  /**
   * Generate calendar days for a specified month/year
   */
  public generateCalendarDays(
    year: number,
    month: number,
    options: CalendarGenerationOptions
  ): CalendarDate[] {
    const result: CalendarDate[] = [];
    
    // Get first day of the month
    const firstDayOfMonth = new Date(year, month, 1);
    
    // Get the day of the week for the first day (0 = Sunday, 1 = Monday, etc.)
    let firstDayOfWeek = firstDayOfMonth.getDay();
    
    // Adjust for first day of week preference (options.firstDayOfWeek)
    // If firstDayOfWeek is 1 (Monday), then Sunday should be 6 instead of 0
    if (options.firstDayOfWeek > 0) {
      firstDayOfWeek = firstDayOfWeek === 0 
        ? 7 - options.firstDayOfWeek 
        : firstDayOfWeek - options.firstDayOfWeek;
    }
    
    // Get last day of previous month
    const lastDayOfPrevMonth = new Date(year, month, 0).getDate();
      // Add days from previous month to fill the first row
    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
      const prevMonthDay = lastDayOfPrevMonth - i;
      const prevMonthDate = new Date(year, month - 1, prevMonthDay);
      
      // Skip if hideOtherMonthDays is true
      if (!options.hideOtherMonthDays) {        result.push({
          date: prevMonthDate,
          day: prevMonthDay,
          month: prevMonthDate.getMonth(),
          year: prevMonthDate.getFullYear(),
          isCurrentMonth: false,
          isToday: this.isToday(prevMonthDate),
          isSelected: this.isSelectedDate(prevMonthDate, options.selectedDate, options.selectedDateRange, options.isRangeSelection),
          isDisabled: options.isDateDisabledFn ? options.isDateDisabledFn(prevMonthDate) : false,
          isInRange: this.isInRange(prevMonthDate, options.selectedDateRange),
          isRangeStart: this.isRangeStart(prevMonthDate, options.selectedDateRange),
          isRangeEnd: this.isRangeEnd(prevMonthDate, options.selectedDateRange),
          isFocused: this.isFocusedDate(prevMonthDate, options.focusedDate)
        });
      } else {
        // Add empty placeholder to maintain grid structure
        result.push({
          day: 0, // Use 0 to indicate empty cell
          isCurrentMonth: false,
          isToday: false,
          isSelected: false,
          isDisabled: true
        });
      }
    }
    
    // Get total days in current month
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    // Add days of current month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);        result.push({
        date,
        day,
        month: date.getMonth(),
        year: date.getFullYear(),
        isCurrentMonth: true,
        isToday: this.isToday(date),
        isSelected: this.isSelectedDate(date, options.selectedDate, options.selectedDateRange, options.isRangeSelection),
        isDisabled: options.isDateDisabledFn ? options.isDateDisabledFn(date) : false,
        isInRange: this.isInRange(date, options.selectedDateRange),
        isRangeStart: this.isRangeStart(date, options.selectedDateRange),
        isRangeEnd: this.isRangeEnd(date, options.selectedDateRange),
        isFocused: this.isFocusedDate(date, options.focusedDate)
      });
    }
      // Add days from next month to complete 6 rows (42 days)
    const remainingDays = 42 - result.length;
    
    for (let day = 1; day <= remainingDays; day++) {
      const date = new Date(year, month + 1, day);
      
      // Skip if hideOtherMonthDays is true
      if (!options.hideOtherMonthDays) {        result.push({
          date,
          day,
          month: date.getMonth(),
          year: date.getFullYear(),
          isCurrentMonth: false,
          isToday: this.isToday(date),
          isSelected: this.isSelectedDate(date, options.selectedDate, options.selectedDateRange, options.isRangeSelection),
          isDisabled: options.isDateDisabledFn ? options.isDateDisabledFn(date) : false,
          isInRange: this.isInRange(date, options.selectedDateRange),
          isRangeStart: this.isRangeStart(date, options.selectedDateRange),
          isRangeEnd: this.isRangeEnd(date, options.selectedDateRange),
          isFocused: this.isFocusedDate(date, options.focusedDate)
        });
      } else {
        // Add empty placeholder to maintain grid structure
        result.push({
          day: 0, // Use 0 to indicate empty cell
          isCurrentMonth: false,
          isToday: false,
          isSelected: false,
          isDisabled: true
        });
      }
    }
    
    return result;
  }

  /**
   * Get calendar days generation function
   * Returns a function that can be called to generate calendar days
   */
  public getCalendarDaysGenerator(
    getCurrentDate: () => Date,
    getCalendarOptions: () => CalendarGenerationOptions
  ): () => CalendarDate[] {
    return () => {
      const date = getCurrentDate();
      const options = getCalendarOptions();
      return this.generateCalendarDays(date.getFullYear(), date.getMonth(), options);
    };
  }

  /**
   * Check if a date is today
   */
  private isToday(date: Date): boolean {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  }

  /**
   * Check if a date is selected
   */
  private isSelectedDate(
    date: Date,
    selectedDate: Date | null,
    selectedDateRange: { startDate: Date | null; endDate: Date | null },
    isRangeSelection: boolean
  ): boolean {
    if (isRangeSelection) {
      return (
        this.isRangeStart(date, selectedDateRange) ||
        this.isRangeEnd(date, selectedDateRange)
      );
    } else {
      return selectedDate !== null &&
        date.getDate() === selectedDate.getDate() &&
        date.getMonth() === selectedDate.getMonth() &&
        date.getFullYear() === selectedDate.getFullYear();
    }
  }

  /**
   * Check if a date is within a selected range
   */
  private isInRange(
    date: Date,
    selectedDateRange: { startDate: Date | null; endDate: Date | null }
  ): boolean {
    if (!selectedDateRange.startDate || !selectedDateRange.endDate) {
      return false;
    }

    return date >= selectedDateRange.startDate && date <= selectedDateRange.endDate;
  }

  /**
   * Check if a date is the start of a range
   */
  private isRangeStart(
    date: Date,
    selectedDateRange: { startDate: Date | null; endDate: Date | null }
  ): boolean {
    if (!selectedDateRange.startDate) return false;
    
    return (
      date.getDate() === selectedDateRange.startDate.getDate() &&
      date.getMonth() === selectedDateRange.startDate.getMonth() &&
      date.getFullYear() === selectedDateRange.startDate.getFullYear()
    );
  }

  /**
   * Check if a date is the end of a range
   */
  private isRangeEnd(
    date: Date,
    selectedDateRange: { startDate: Date | null; endDate: Date | null }
  ): boolean {
    if (!selectedDateRange.endDate) return false;
    
    return (
      date.getDate() === selectedDateRange.endDate.getDate() &&
      date.getMonth() === selectedDateRange.endDate.getMonth() &&
      date.getFullYear() === selectedDateRange.endDate.getFullYear()
    );
  }

  /**
   * Check if a date is focused
   */
  private isFocusedDate(
    date: Date,
    focusedDate: Date | null
  ): boolean {
    if (!focusedDate) return false;
    
    return (
      date.getDate() === focusedDate.getDate() &&
      date.getMonth() === focusedDate.getMonth() &&
      date.getFullYear() === focusedDate.getFullYear()
    );
  }

  /**
   * Generate calendar months for a specified year
   */
  public generateCalendarMonths(
    year: number,
    options: MonthViewGenerationOptions
  ): CalendarMonth[] {
    const months: CalendarMonth[] = [];
    const currentMonth = options.currentDate.getMonth();
    const currentYear = options.currentDate.getFullYear();
    
    // Generate all 12 months
    for (let month = 0; month < 12; month++) {
      const date = new Date(year, month, 1);
      
      // Check if the month is disabled
      let isDisabled = false;
      if (options.minDate && date < options.minDate) {
        // Entire month is before min date
        isDisabled = true;
      }
      
      if (options.maxDate) {
        const lastDayOfMonth = new Date(year, month + 1, 0);
        if (lastDayOfMonth > options.maxDate) {
          // Entire month is after max date
          isDisabled = true;
        }
      }
      
      // Use custom disabled function if provided
      if (options.isMonthDisabledFn && options.isMonthDisabledFn(year, month)) {
        isDisabled = true;
      }
      
      // Check if this month is selected
      const isSelected = options.selectedDate
        ? options.selectedDate.getMonth() === month && 
          options.selectedDate.getFullYear() === year
        : false;
      
      // Get month name
      const monthName = date.toLocaleString('default', { month: 'long' });
      
      months.push({
        month,
        year,
        name: monthName,
        isCurrentMonth: month === currentMonth && year === currentYear,
        isSelected,
        isDisabled
      });
    }
    
    return months;
  }

  /**
   * Generate calendar years for a specified year range
   */
  public generateCalendarYears(
    baseYear: number,
    rangeSize: number,
    options: YearViewGenerationOptions
  ): CalendarYear[] {
    const years: CalendarYear[] = [];
    const currentYear = options.currentDate.getFullYear();
    
    // Generate years for the range
    for (let i = 0; i < rangeSize; i++) {
      const year = baseYear + i;
      
      // Check if the year is disabled
      let isDisabled = false;
      if (options.minDate && year < options.minDate.getFullYear()) {
        // Year is before min date
        isDisabled = true;
      }
      
      if (options.maxDate && year > options.maxDate.getFullYear()) {
        // Year is after max date
        isDisabled = true;
      }
      
      // Use custom disabled function if provided
      if (options.isYearDisabledFn && options.isYearDisabledFn(year)) {
        isDisabled = true;
      }
      
      // Check if this year is selected
      const isSelected = options.selectedDate
        ? options.selectedDate.getFullYear() === year
        : false;
      
      years.push({
        year,
        isCurrentYear: year === currentYear,
        isSelected,
        isDisabled,
        isInRange: true // Since it's in the current range
      });
    }
    
    return years;
  }
}
