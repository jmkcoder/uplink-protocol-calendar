/**
 * Time formatting service interface
 * Handles formatting of times for display
 */
export interface ITimeFormattingService {
  /**
   * Format time according to specified format and locale
   * @param time Time to format
   * @param format Format string or options
   * @param locale Locale for formatting
   * @returns Formatted time string
   */
  formatTime(
    time: Date,
    format?: string | Intl.DateTimeFormatOptions,
    locale?: string
  ): string;

  /**
   * Set default time format options
   * @param options Time format options
   */
  setTimeFormatOptions(options: Intl.DateTimeFormatOptions | null): void;

  /**
   * Get current time format options
   * @returns Current time format options
   */
  getTimeFormatOptions(): Intl.DateTimeFormatOptions | null;

  /**
   * Format time for display in time picker
   * @param time Time to format
   * @param use12Hour Whether to use 12-hour format
   * @param showSeconds Whether to show seconds
   * @param showMilliseconds Whether to show milliseconds
   * @returns Formatted time string
   */
  formatTimeForDisplay(
    time: Date,
    use12Hour: boolean,
    showSeconds: boolean,
    showMilliseconds: boolean
  ): string;

  /**
   * Parse time string to Date object
   * @param timeString Time string to parse
   * @param format Expected format
   * @returns Parsed Date object or null if invalid
   */
  parseTimeString(timeString: string, format?: string): Date | null;

  /**
   * Get default format options for locale
   * @param locale Locale string
   * @returns Default format options
   */
  getLocaleDefaultFormatOptions(locale: string): Intl.DateTimeFormatOptions;

  /**
   * Set localization service
   * @param localizationService Localization service instance
   */
  setLocalizationService(localizationService: any): void;
}
