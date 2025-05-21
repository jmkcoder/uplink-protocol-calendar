/**
 * Localization service interface
 * Responsible for providing internationalization and localization functions
 */
export interface ILocalizationService {
  /**
   * Get localized month names
   */
  getMonthNames(): string[];
  
  /**
   * Get localized weekday names
   */
  getWeekdayNames(): string[];
  
  /**
   * Get short localized weekday names
   */
  getShortWeekdayNames(): string[];
  
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
}
