import { CalendarStateManager } from "./state-manager";
import { IDateFormattingService, ILocalizationService } from "../interfaces";

/**
 * FormattingCoordinator - Handles all date formatting and localization
 */
export class FormattingCoordinator {
  constructor(
    private stateManager: CalendarStateManager,
    private dateFormattingService: IDateFormattingService,
    private localizationService: ILocalizationService
  ) {}

  /**
   * Format a date
   */
  formatDate(date: Date, options?: Intl.DateTimeFormatOptions | string, _locale?: string | undefined): string {
    if (this.stateManager.dateFormat) {
      return this.dateFormattingService.formatDate(date, this.stateManager.dateFormat);
    }

    let formatOptions: Intl.DateTimeFormatOptions;

    if (typeof options === "string") {
      return this.dateFormattingService.formatDate(date, options);
    } else if (options) {
      formatOptions = options;
    } else if (this.stateManager.dateFormatOptions) {
      formatOptions = this.stateManager.dateFormatOptions;
    } else {
      formatOptions = this.getLocaleDefaultFormatOptions(this.stateManager.locale);
    }

    if (this.localizationService) {
      return this.localizationService.formatDate(date, formatOptions);
    }

    return this.dateFormattingService.formatDate(date);
  }

  /**
   * Get formatted selected date
   */
  getFormattedDate(): string | null {
    if (!this.stateManager.selectedDate) return null;

    if (this.localizationService) {
      if (this.stateManager.dateFormatOptions) {
        return this.localizationService.formatDate(
          this.stateManager.selectedDate,
          this.stateManager.dateFormatOptions
        );
      }
      return this.localizationService.formatDate(this.stateManager.selectedDate);
    }

    return this.dateFormattingService.formatDate(this.stateManager.selectedDate);
  }

  /**
   * Set locale
   */
  setLocale(locale: string, localizationService: ILocalizationService): void {
    this.stateManager.locale = locale;
    localizationService.setLocale(locale);
  }

  /**
   * Get locale
   */
  getLocale(): string {
    return this.stateManager.locale;
  }

  /**
   * Set date format options
   */
  setDateFormatOptions(options: Intl.DateTimeFormatOptions | null): void {
    this.stateManager.dateFormatOptions = options;
    if (this.stateManager.dateFormatOptions) {
      this.dateFormattingService.setDateFormatOptions(this.stateManager.dateFormatOptions);
    } else {
      this.dateFormattingService.setDateFormatOptions(
        this.getLocaleDefaultFormatOptions(this.stateManager.locale)
      );
    }
  }

  /**
   * Get date format options
   */
  getDateFormatOptions(): Intl.DateTimeFormatOptions | null {
    return this.stateManager.dateFormatOptions;
  }

  /**
   * Format date with options
   */
  formatDateWithOptions(date: Date, options?: Intl.DateTimeFormatOptions, _locale?: string): string {
    if (this.localizationService && options) {
      return this.localizationService.formatDate(date, options);
    }
    return this.dateFormattingService.formatDate(date);
  }

  /**
   * Get month name
   */
  getMonthName(month: number, format?: 'long' | 'short', _locale?: string): string {
    const monthNames = this.localizationService.getMonthNames(format === 'short');
    return monthNames[month];
  }

  /**
   * Get day name
   */
  getDayName(dayOfWeek: number, format?: 'long' | 'short' | 'narrow', _locale?: string): string {
    const dayNames = this.localizationService.getWeekdayNames(format === 'short' || format === 'narrow');
    return dayNames[dayOfWeek];
  }

  /**
   * Get day names
   */
  getDayNames(format?: 'long' | 'short' | 'narrow', _locale?: string): string[] {
    return this.localizationService.getWeekdayNames(format === 'short' || format === 'narrow', this.stateManager.firstDayOfWeek);
  }

  /**
   * Get month names
   */
  getMonthNames(format?: 'long' | 'short', _locale?: string): string[] {
    return this.localizationService.getMonthNames(format === 'short');
  }

  /**
   * Get weekday names
   */
  getWeekdayNames(firstDayOfWeek?: number): string[] {
    const startDay = firstDayOfWeek ?? this.stateManager.firstDayOfWeek;
    return this.localizationService.getWeekdayNames(false, startDay);
  }

  /**
   * Get locale-specific default format options
   */
  private getLocaleDefaultFormatOptions(locale: string): Intl.DateTimeFormatOptions {
    const localePrefix = locale.split("-")[0];

    const formatsByLocale: Record<string, Intl.DateTimeFormatOptions> = {
      en: { year: "numeric", month: "numeric", day: "numeric" },
      de: { year: "numeric", month: "2-digit", day: "2-digit" },
      fr: { year: "numeric", month: "2-digit", day: "2-digit" },
      es: { year: "numeric", month: "2-digit", day: "2-digit" },
      it: { year: "numeric", month: "2-digit", day: "2-digit" },
      pt: { year: "numeric", month: "2-digit", day: "2-digit" },
      ja: { year: "numeric", month: "2-digit", day: "2-digit" },
      zh: { year: "numeric", month: "2-digit", day: "2-digit" },
      ko: { year: "numeric", month: "2-digit", day: "2-digit" },
      ar: { year: "numeric", month: "2-digit", day: "2-digit" },
    };

    return (
      formatsByLocale[localePrefix] || {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      }
    );
  }
}

