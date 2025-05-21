import { IDateFormattingService } from '../interfaces/date-formatting.service.interfaces';
import { ILocalizationService } from '../interfaces/localization.service.interfaces';

/**
 * Implementation of DateFormattingService
 * Responsible for formatting dates
 */
export class DateFormattingService implements IDateFormattingService {
  private _defaultFormat: string | null = null;
  private _localizationService: ILocalizationService | null = null;
  private _dateFormatOptions: Intl.DateTimeFormatOptions | null = null;

  /**
   * Set the localization service
   * @param service Localization service to use
   */
  public setLocalizationService(service: ILocalizationService): void {
    this._localizationService = service;
  }
  
  /**
   * Get the localization service
   * @returns Current localization service or null
   */
  public getLocalizationService(): ILocalizationService | null {
    return this._localizationService;
  }
  
  /**
   * Set the date format options for Intl.DateTimeFormat
   * @param options Format options
   */
  public setDateFormatOptions(options: Intl.DateTimeFormatOptions): void {
    this._dateFormatOptions = options;
  }
  
  /**
   * Get the date format options
   * @returns Current date format options or null
   */
  public getDateFormatOptions(): Intl.DateTimeFormatOptions | null {
    return this._dateFormatOptions;
  }
  /**
   * Format a date according to the specified format string
   * @param date Date to format
   * @param format Optional format string
   * @returns Formatted date string
   */
  public formatDate(date: Date, format?: string): string {
    // Case 1: If localization service is available and no specific format string is requested
    if (this._localizationService) {
      // If a specific format is requested, use the traditional formatting
      if (format || this._defaultFormat) {
        // Continue to use string-based formatting
      } else {
        // Use internationalized formatting with the localization service
        return this._localizationService.formatDate(date, this._dateFormatOptions || undefined);
      }
    }
    
    const formatToUse = format || this._defaultFormat;
    
    if (!formatToUse) {
      return date.toISOString().split('T')[0]; // Default ISO format
    }
    
    // Basic formatting support
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    
    return formatToUse
      .replace('YYYY', year.toString())
      .replace('YY', year.toString().slice(-2))
      .replace('MM', month)
      .replace('M', (date.getMonth() + 1).toString())
      .replace('DD', day)
      .replace('D', date.getDate().toString())
      .replace('HH', hours)
      .replace('H', date.getHours().toString())
      .replace('mm', minutes)
      .replace('m', date.getMinutes().toString())
      .replace('ss', seconds)
      .replace('s', date.getSeconds().toString());
  }
    /**
   * Parse a date string according to the specified format
   * @param dateString Date string to parse
   * @param format Optional format string
   * @returns Parsed Date or null if invalid
   */
  public parseDate(dateString: string, format?: string): Date | null {
    // If using localization and we have a date format
    if (this._localizationService && this._dateFormatOptions && !format) {
      try {
        // This is a simple parse for common formats when using localization
        // For more complex cases, additional parsing logic would be needed
        const date = new Date(dateString);
        return isNaN(date.getTime()) ? null : date;
      } catch (error) {
        // Fall back to default parsing
      }
    }
    
    // If no format is specified, try standard formats
    if (!format && this._defaultFormat) {
      format = this._defaultFormat;
    }
    
    if (!format) {
      // Try to parse as ISO
      const date = new Date(dateString);
      return isNaN(date.getTime()) ? null : date;
    }
    
    // For simple formats like YYYY-MM-DD, MM/DD/YYYY, etc.
    try {
      let year = 0;
      let month = 0;
      let day = 1;
      
      // Extract year
      if (format.includes('YYYY')) {
        const yearPos = format.indexOf('YYYY');
        year = parseInt(dateString.substring(yearPos, yearPos + 4), 10);
      } else if (format.includes('YY')) {
        const yearPos = format.indexOf('YY');
        const twoDigitYear = parseInt(dateString.substring(yearPos, yearPos + 2), 10);
        // Convert 2-digit year to 4-digit (assumes 21st century for 00-99)
        year = twoDigitYear + (twoDigitYear >= 0 && twoDigitYear < 100 ? 2000 : 0);
      }
      
      // Extract month
      if (format.includes('MM')) {
        const monthPos = format.indexOf('MM');
        month = parseInt(dateString.substring(monthPos, monthPos + 2), 10) - 1;
      } else if (format.includes('M')) {
        const monthPos = format.indexOf('M');
        const monthStr = dateString.charAt(monthPos);
        const nextChar = dateString.charAt(monthPos + 1);
        
        if (nextChar && /\d/.test(nextChar)) {
          // Two-digit month without leading zero
          month = parseInt(monthStr + nextChar, 10) - 1;
        } else {
          month = parseInt(monthStr, 10) - 1;
        }
      }
      
      // Extract day
      if (format.includes('DD')) {
        const dayPos = format.indexOf('DD');
        day = parseInt(dateString.substring(dayPos, dayPos + 2), 10);
      } else if (format.includes('D')) {
        const dayPos = format.indexOf('D');
        const dayStr = dateString.charAt(dayPos);
        const nextChar = dateString.charAt(dayPos + 1);
        
        if (nextChar && /\d/.test(nextChar)) {
          // Two-digit day without leading zero
          day = parseInt(dayStr + nextChar, 10);
        } else {
          day = parseInt(dayStr, 10);
        }
      }
      
      const date = new Date(year, month, day);
      return isNaN(date.getTime()) ? null : date;
      
    } catch (error) {
      return null;
    }
  }
  
  /**
   * Set the default date format
   * @param format Format string
   */
  public setDefaultFormat(format: string): void {
    this._defaultFormat = format;
  }
  
  /**
   * Get the default date format
   * @returns Default format or null
   */
  public getDefaultFormat(): string | null {
    return this._defaultFormat;
  }
}
