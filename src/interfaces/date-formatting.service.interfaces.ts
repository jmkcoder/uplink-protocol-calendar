/**
 * Date formatting service interface
 * Responsible for formatting dates
 */
export interface IDateFormattingService {
  /**
   * Format a date according to the specified format string
   */
  formatDate(date: Date, format?: string): string;
  
  /**
   * Parse a date string according to the specified format
   */
  parseDate(dateString: string, format?: string): Date | null;
  
  /**
   * Set the default date format
   */
  setDefaultFormat(format: string): void;
  
  /**
   * Get the default date format
   */
  getDefaultFormat(): string | null;
  
  /**
   * Set the localization service
   */
  setLocalizationService(service: any): void;
  
  /**
   * Get the localization service
   */
  getLocalizationService(): any | null;
    /**
   * Set the date format options
   */
  setDateFormatOptions(options: Intl.DateTimeFormatOptions | null): void;
  
  /**
   * Get the date format options
   */
  getDateFormatOptions(): Intl.DateTimeFormatOptions | null;
}
