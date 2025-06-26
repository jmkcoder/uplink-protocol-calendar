import { ITimeFormattingService } from "../interfaces";

/**
 * TimeFormattingService - Implementation of ITimeFormattingService
 * Handles formatting of times for display
 */
export class TimeFormattingService implements ITimeFormattingService {
  private _timeFormatOptions: Intl.DateTimeFormatOptions | null = null;
  private _localizationService: any;

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
  ): string {
    const useLocale = locale || this._localizationService?.getLocale() || 'en-US';

    if (typeof format === 'string') {
      return this.formatWithString(time, format);
    }

    const options = format || this._timeFormatOptions || {
      hour: '2-digit',
      minute: '2-digit'
    };

    try {
      return new Intl.DateTimeFormat(useLocale, options).format(time);
    } catch (error) {
      // Fallback to basic format
      return this.formatWithString(time, 'HH:mm');
    }
  }

  /**
   * Set default time format options
   * @param options Time format options
   */
  setTimeFormatOptions(options: Intl.DateTimeFormatOptions | null): void {
    this._timeFormatOptions = options;
  }

  /**
   * Get current time format options
   * @returns Current time format options
   */
  getTimeFormatOptions(): Intl.DateTimeFormatOptions | null {
    return this._timeFormatOptions;
  }

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
  ): string {
    const options: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: use12Hour
    };

    if (showSeconds) {
      options.second = '2-digit';
    }

    let formatted = this.formatTime(time, options);

    if (showMilliseconds && showSeconds) {
      const ms = time.getMilliseconds().toString().padStart(3, '0');
      // Insert milliseconds after seconds
      formatted = formatted.replace(/(\d{2})(\s*[AP]M)?$/i, `$1.${ms}$2`);
    }

    return formatted;
  }

  /**
   * Parse time string to Date object
   * @param timeString Time string to parse
   * @param format Expected format
   * @returns Parsed Date object or null if invalid
   */
  parseTimeString(timeString: string, _format?: string): Date | null {
    try {
      // Simple parsing for common formats
      const timeRegex = /^(\d{1,2}):(\d{2})(?::(\d{2}))?(?:\.(\d{3}))?(?:\s*(AM|PM))?$/i;
      const match = timeString.match(timeRegex);

      if (!match) {
        return null;
      }

      let hours = parseInt(match[1], 10);
      const minutes = parseInt(match[2], 10);
      const seconds = match[3] ? parseInt(match[3], 10) : 0;
      const milliseconds = match[4] ? parseInt(match[4], 10) : 0;
      const period = match[5]?.toUpperCase();

      // Handle 12-hour format
      if (period) {
        if (period === 'PM' && hours !== 12) {
          hours += 12;
        } else if (period === 'AM' && hours === 12) {
          hours = 0;
        }
      }

      // Validate ranges
      if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59 || 
          seconds < 0 || seconds > 59 || milliseconds < 0 || milliseconds > 999) {
        return null;
      }

      const date = new Date();
      date.setHours(hours, minutes, seconds, milliseconds);
      return date;
    } catch (error) {
      return null;
    }
  }

  /**
   * Get default format options for locale
   * @param locale Locale string
   * @returns Default format options
   */
  getLocaleDefaultFormatOptions(locale: string): Intl.DateTimeFormatOptions {
    // Common locale-specific defaults
    const localeDefaults: { [key: string]: Intl.DateTimeFormatOptions } = {
      'en-US': { hour: '2-digit', minute: '2-digit', hour12: true },
      'en-GB': { hour: '2-digit', minute: '2-digit', hour12: false },
      'de-DE': { hour: '2-digit', minute: '2-digit', hour12: false },
      'fr-FR': { hour: '2-digit', minute: '2-digit', hour12: false },
      'es-ES': { hour: '2-digit', minute: '2-digit', hour12: false },
      'it-IT': { hour: '2-digit', minute: '2-digit', hour12: false },
      'ja-JP': { hour: '2-digit', minute: '2-digit', hour12: false },
      'ko-KR': { hour: '2-digit', minute: '2-digit', hour12: false },
      'zh-CN': { hour: '2-digit', minute: '2-digit', hour12: false }
    };

    return localeDefaults[locale] || { hour: '2-digit', minute: '2-digit', hour12: false };
  }

  /**
   * Set localization service
   * @param localizationService Localization service instance
   */
  setLocalizationService(localizationService: any): void {
    this._localizationService = localizationService;
  }

  /**
   * Format time with string pattern
   * @param time Time to format
   * @param format Format string (HH:mm:ss, etc.)
   * @returns Formatted string
   */
  private formatWithString(time: Date, format: string): string {
    const hours24 = time.getHours();
    const hours12 = hours24 === 0 ? 12 : hours24 > 12 ? hours24 - 12 : hours24;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const milliseconds = time.getMilliseconds();
    const period = hours24 < 12 ? 'AM' : 'PM';

    return format
      .replace(/HH/g, hours24.toString().padStart(2, '0'))
      .replace(/H/g, hours24.toString())
      .replace(/hh/g, hours12.toString().padStart(2, '0'))
      .replace(/h/g, hours12.toString())
      .replace(/mm/g, minutes.toString().padStart(2, '0'))
      .replace(/m/g, minutes.toString())
      .replace(/ss/g, seconds.toString().padStart(2, '0'))
      .replace(/s/g, seconds.toString())
      .replace(/SSS/g, milliseconds.toString().padStart(3, '0'))
      .replace(/tt/g, period)
      .replace(/t/g, period.charAt(0));
  }
}
