import { CalendarOptions } from "./calendar.interfaces";

/**
 * Configuration service interface
 * Responsible for managing calendar configuration
 */
export interface IConfigurationService {
  /**
   * Apply configuration options
   */  applyConfiguration(options: CalendarOptions): {
    minDate: Date | null;
    maxDate: Date | null;
    disabledDates: Date[];
    selectedDate: Date | null;
    firstDayOfWeek: number;
    dateFormat: string | null;
    hideOtherMonthDays: boolean;
  };

  /**
   * Get first day of week
   */
  getFirstDayOfWeek(): number;

  /**
   * Set first day of week
   */
  setFirstDayOfWeek(day: number): number;

  /**
   * Get date format
   */
  getDateFormat(): string | null;

  /**
   * Set date format
   */
  setDateFormat(format: string | null): string | null;
}
