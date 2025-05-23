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
   * @param short Whether to get short month names
   * @returns Array of month names
   */
  public getMonthNames(short: boolean = false): string[] {
    const months = [];
    const formatter = new Intl.DateTimeFormat(this._locale, { 
      month: short ? 'short' : 'long' 
    });
    
    for (let i = 0; i < 12; i++) {
      // Create a date for each month (using day 1)
      const date = new Date(2000, i, 1);
      months.push(formatter.format(date));
    }
    
    return months;
  }  /**
   * Get localized weekday names
   * @param short Whether to get short weekday names
   * @param firstDayOfWeek First day of week (0 = Sunday, 1 = Monday, etc.)
   * @returns Array of weekday names
   */
  public getWeekdayNames(short: boolean = false, firstDayOfWeek: number = 0): string[] {
    const weekdays = [];
    const formatter = new Intl.DateTimeFormat(this._locale, { 
      weekday: short ? 'short' : 'long' 
    });
    
    // Get names for all days of the week (starting with Sunday = 0)
    for (let i = 0; i < 7; i++) {
      // 2023-01-01 was a Sunday, so add days to get other weekdays
      const date = new Date(2023, 0, i + 1);
      weekdays.push(formatter.format(date));
    }
    
    // Reorder weekdays to start with firstDayOfWeek if necessary
    if (firstDayOfWeek !== 0) {
      return [...weekdays.slice(firstDayOfWeek), ...weekdays.slice(0, firstDayOfWeek)];
    }
    
    return weekdays;
  }
    /**
   * Get short localized weekday names
   * @param firstDayOfWeek First day of week (0 = Sunday, 1 = Monday, etc.)
   * @returns Array of short weekday names
   */
  public getShortWeekdayNames(firstDayOfWeek: number = 0): string[] {
    // Reuse the main method with short parameter set to true
    return this.getWeekdayNames(true, firstDayOfWeek);
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

  /**
   * Get the week number of the given date according to the locale.
   * @param date Date to get the week number for
   * @returns Week number (1-based)
   */
  public getWeekNumber(date: Date): number {
    // Use Intl.Locale if available to get weekInfo, otherwise fallback to ISO
    let firstDay = 1; // Monday
    let minDays = 4;  // ISO 8601: week 1 is the first week with at least 4 days

    // Try to get weekInfo from Intl.Locale if supported
    try {
      // @ts-ignore
      if (typeof Intl.Locale === 'function') {
        // @ts-ignore
        const localeObj = new Intl.Locale(this._locale);
        // @ts-ignore
        if (localeObj.weekInfo) {
          // @ts-ignore
          firstDay = localeObj.weekInfo.firstDay;
          // @ts-ignore
          minDays = localeObj.weekInfo.minDays;
        }
      }
    } catch {
      // Fallback to ISO
    }

    // Copy date and set time to midnight
    const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    // Day of week (0 = Sunday, 1 = Monday, ...)
    let dayOfWeek = d.getUTCDay();

    // Adjust dayOfWeek to match locale's first day
    dayOfWeek = (dayOfWeek - firstDay + 7) % 7;

    // Find the Thursday (or locale's minDays day) of this week
    d.setUTCDate(d.getUTCDate() - dayOfWeek + (minDays - 1));
    // First week of the year
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    let yearStartDay = yearStart.getUTCDay();
    yearStartDay = (yearStartDay - firstDay + 7) % 7;

    let week1Start = new Date(yearStart);
    week1Start.setUTCDate(yearStart.getUTCDate() + ((minDays - 1) - yearStartDay));

    if (d < week1Start) {
      // Belongs to last week of previous year
      return this.getWeekNumber(new Date(date.getFullYear() - 1, 11, 31));
    }

    // Calculate week number
    const diff = d.getTime() - week1Start.getTime();
    return Math.floor(diff / (7 * 24 * 60 * 60 * 1000)) + 1;
  }
}
