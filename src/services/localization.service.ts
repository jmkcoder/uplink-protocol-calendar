import { ILocalizationService } from '../interfaces/localization.service.interfaces';

/**
 * Implementation of LocalizationService
 * Responsible for providing internationalization and localization functions
 */
export class LocalizationService implements ILocalizationService {
  private _locale: string = 'en-US'; // Default locale
  
  /**
   * Constructor with optional locale
   * @param locale Initial locale
   */
  constructor(locale?: string) {
    if (locale) {
      this._locale = locale;
    }
  }
  
  /**
   * Get localized month names
   * @returns Array of month names
   */
  public getMonthNames(): string[] {
    const months = [];
    const formatter = new Intl.DateTimeFormat(this._locale, { month: 'long' });
    
    for (let i = 0; i < 12; i++) {
      // Create a date for each month (using day 1)
      const date = new Date(2000, i, 1);
      months.push(formatter.format(date));
    }
    
    return months;
  }
  
  /**
   * Get localized weekday names
   * @returns Array of weekday names
   */
  public getWeekdayNames(): string[] {
    const weekdays = [];
    const formatter = new Intl.DateTimeFormat(this._locale, { weekday: 'long' });
    
    // Get names for all days of the week (starting with Sunday = 0)
    for (let i = 0; i < 7; i++) {
      // 2023-01-01 was a Sunday, so add days to get other weekdays
      const date = new Date(2023, 0, i + 1);
      weekdays.push(formatter.format(date));
    }
    
    return weekdays;
  }
  
  /**
   * Get short localized weekday names
   * @returns Array of short weekday names
   */
  public getShortWeekdayNames(): string[] {
    const weekdays = [];
    const formatter = new Intl.DateTimeFormat(this._locale, { weekday: 'short' });
    
    // Get names for all days of the week (starting with Sunday = 0)
    for (let i = 0; i < 7; i++) {
      // 2023-01-01 was a Sunday, so add days to get other weekdays
      const date = new Date(2023, 0, i + 1);
      weekdays.push(formatter.format(date));
    }
    
    return weekdays;
  }
  
  /**
   * Get current locale
   * @returns Current locale string
   */
  public getLocale(): string {
    return this._locale;
  }
  
  /**
   * Set locale
   * @param locale Locale string (e.g., 'en-US', 'fr-FR')
   */
  public setLocale(locale: string): void {
    this._locale = locale;
  }
  
  /**
   * Format a date according to the locale
   * @param date Date to format
   * @param options Intl.DateTimeFormatOptions
   * @returns Formatted date string
   */
  public formatDate(date: Date, options?: Intl.DateTimeFormatOptions): string {
    const formatter = new Intl.DateTimeFormat(this._locale, options);
    return formatter.format(date);
  }
}
