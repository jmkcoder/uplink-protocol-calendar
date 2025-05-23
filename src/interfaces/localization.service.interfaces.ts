/**
 * Localization service interface
 * Responsible for providing internationalization and localization functions
 */
export interface ILocalizationService {  /**
   * Get localized month names
   * @param short Whether to get short month names
   */
  getMonthNames(short?: boolean): string[];
  /**
   * Get localized weekday names
   * @param short Whether to use short day names
   * @param firstDayOfWeek Optional first day of week (0=Sunday, 1=Monday, etc.)
   */
  getWeekdayNames(short?: boolean, firstDayOfWeek?: number): string[];
  
  /**
   * Get short localized weekday names
   * @param firstDayOfWeek Optional first day of week (0=Sunday, 1=Monday, etc.)
   */
  getShortWeekdayNames(firstDayOfWeek?: number): string[];
  
  /**
   * Get current locale
   */
  getLocale(): string;
  
  /**
   * Set locale
   */
  setLocale(locale: string): void;
  
  /**
   * Format a date according to the locale
   */
  formatDate(date: Date, options?: Intl.DateTimeFormatOptions): string;

  /**
   * Get the week number of a date
   * This is based on ISO 8601 where the first week of the year is the week with the first Thursday
   * @param date 
   */
  getWeekNumber(date: Date): number;
}
