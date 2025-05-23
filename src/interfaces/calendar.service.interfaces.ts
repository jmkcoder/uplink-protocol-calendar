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
  getWeekdayNames(firstDayOfWeek: number, short?: boolean): string[];
  
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
  
  /**
   * Set the localization service
   */
  setLocalizationService(service: any): void;
  
  /**
   * Get the localization service
   */
  getLocalizationService(): any | null;
  
  /**
   * Check if a date is today
   */
  isToday(date: Date): boolean;
  
  /**
   * Get the ISO week number for a date
   */
  getWeekNumber(date: Date): number;
}

/**
 * Options for calendar generation
 */
export interface CalendarGenerationOptions {
  selectedDate: Date | null;
  selectedDateRange: { startDate?: Date | null; endDate?: Date | null; start?: Date | null; end?: Date | null };
  focusedDate: Date | null;
  firstDayOfWeek: number;
  minDate: Date | null;
  maxDate: Date | null;
  disabledDates: Date[];
  isRangeSelection: boolean;
  isDateDisabledFn: (date: Date) => boolean;
  hideOtherMonthDays: boolean;
  locale?: string; // Optional locale for internationalization
  weekNumbers?: boolean; // Whether to display week numbers
  fullWeekdays?: boolean; // Whether to use full weekday names
}

/**
 * Options for month view generation
 */
export interface MonthViewGenerationOptions {
  selectedDateRange: any;
  isRangeSelection: any;
  selectedDate: Date | null;
  currentDate: Date;
  minDate: Date | null;
  maxDate: Date | null;
  isMonthDisabledFn?: (year: number, month: number) => boolean;
}

/**
 * Options for year view generation
 */
export interface YearViewGenerationOptions {
  selectedDateRange: any;
  isRangeSelection: any;
  selectedDate: Date | null;
  currentDate: Date;
  minDate: Date | null;
  maxDate: Date | null;
  isYearDisabledFn?: (year: number) => boolean;
  yearRangeSize?: number; // Optional range size for multi-year views
  selectedYearRange?: { startYear: number; endYear: number }; // For marking years in range
}

// Using CalendarDate from calendar.interfaces.ts
