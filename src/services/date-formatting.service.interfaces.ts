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
}
