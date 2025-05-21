import { CalendarDate } from "./calendar.interfaces";
import { CalendarGenerationOptions } from "./calendar.service.interfaces";

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
   * Get calendar days generation function
   * Returns a function that can be called to generate calendar days
   */
  getCalendarDaysGenerator(
    getCurrentDate: () => Date,
    getCalendarOptions: () => CalendarGenerationOptions
  ): () => CalendarDate[];
}
