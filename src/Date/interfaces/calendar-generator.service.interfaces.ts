import { CalendarDate, CalendarMonth, CalendarYear } from "./calendar.interfaces";
import { CalendarGenerationOptions, MonthViewGenerationOptions, YearViewGenerationOptions } from "./calendar.service.interfaces";

/**
 * Calendar generator service interface
 * Responsible for generating calendar days based on given options
 */
export interface ICalendarGeneratorService {
  /**
   * Generate calendar days for a specified month/year
   */
  generateCalendarDays(
    year: number,
    month: number,
    options: CalendarGenerationOptions
  ): CalendarDate[];

  /**
   * Generate calendar months for a specified year
   */
  generateCalendarMonths(
    year: number,
    options: MonthViewGenerationOptions
  ): CalendarMonth[];

  /**
   * Generate calendar years for a specified year range
   */
  generateCalendarYears(
    baseYear: number,
    rangeSize: number,
    options: YearViewGenerationOptions
  ): CalendarYear[];

  /**
   * Get calendar days generation function
   * Returns a function that can be called to generate calendar days
   */
  getCalendarDaysGenerator(
    getCurrentDate: () => Date,
    getCalendarOptions: () => CalendarGenerationOptions
  ): () => CalendarDate[];
  
  /**
   * Generate a complete month view with proper structure for rendering
   * Includes weeks and weekdays data
   */
  generateMonthView(
    year: number,
    month: number,
    options: CalendarGenerationOptions // Removed showWeekNumbers and weekdayNames
  ): {
    month: number;
    year: number;
    weeks: { days: CalendarDate[]; weekNumber?: number }[];
    weekdays: string[];
  };

  /**
   * Generate a complete year view with all months
   */
  generateYearView(
    year: number,
    options: YearViewGenerationOptions
  ): {
    months: CalendarMonth[];
    year: number;
  };

  /**
   * Get the ISO week number for a date
   */
  getWeekNumber(date: Date): number;
}
