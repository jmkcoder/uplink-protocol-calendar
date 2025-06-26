import { CalendarOptions } from "./calendar.interfaces";

/**
 * Configuration service interface
 * Responsible for managing calendar configuration
 */
export interface IConfigurationService {  /**
   * Apply configuration options
   */  applyConfiguration(options: CalendarOptions): {
    minDate: Date | null;
    maxDate: Date | null;
    disabledDates: Date[];
    selectedDate: Date | null;
    firstDayOfWeek: number;
    dateFormat: string | null;
    hideOtherMonthDays: boolean;
    showWeekNumbers: boolean;
    isRangeSelection: boolean;
    locale?: string;
    dateFormatOptions?: Intl.DateTimeFormatOptions;
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

  /**
   * Get hide other month days setting
   */
  getHideOtherMonthDays(): boolean;

  /**
   * Set hide other month days setting
   */
  setHideOtherMonthDays(hide: boolean): boolean;

  /**
   * Get show week numbers setting
   */
  getShowWeekNumbers(): boolean;

  /**
   * Set show week numbers setting
   */
  setShowWeekNumbers(show: boolean): boolean;

  /**
   * Get range selection mode setting
   */
  getIsRangeSelection(): boolean;

  /**
   * Set range selection mode setting
   */
  setIsRangeSelection(isRange: boolean): boolean;
}
