import { CalendarDate } from './calendar.interfaces';

/**
 * Calendar service interface
 * Responsible for calendar generation and navigation functions
 */
export interface ICalendarService {
  /**
   * Generate calendar data for a specific month/year
   */
  generateCalendarDays(
    year: number, 
    month: number, 
    options: CalendarGenerationOptions
  ): CalendarDate[];
  
  /**
   * Get month name from month index
   */
  getMonthName(month: number): string;
  
  /**
   * Get weekday names starting from the specified first day
   */
  getWeekdayNames(firstDayOfWeek: number): string[];
  
  /**
   * Navigate to next month from current date
   */
  getNextMonth(currentDate: Date): Date;
  
  /**
   * Navigate to previous month from current date
   */
  getPreviousMonth(currentDate: Date): Date;
  
  /**
   * Navigate to next year from current date
   */
  getNextYear(currentDate: Date): Date;
  
  /**
   * Navigate to previous year from current date
   */
  getPreviousYear(currentDate: Date): Date;
}

/**
 * Options for calendar generation
 */
export interface CalendarGenerationOptions {
  selectedDate: Date | null;
  selectedDateRange: {startDate: Date | null, endDate: Date | null};
  firstDayOfWeek: number;
  minDate: Date | null;
  maxDate: Date | null;
  disabledDates: Date[];
  isRangeSelection: boolean;
  isDateDisabledFn: (date: Date) => boolean;
  hideOtherMonthDays: boolean;
}

// Using CalendarDate from calendar.interfaces.ts
