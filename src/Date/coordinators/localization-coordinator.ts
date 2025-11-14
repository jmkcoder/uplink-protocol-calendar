import {
  ILocalizationService,
  IDateFormattingService,
} from "../interfaces";
import { CalendarStateManager } from "./state-manager";
import { BindingsCoordinator } from "./bindings-coordinator";
import { CalendarControllerBindings } from "../types";
import { CalendarGetters } from "../types/getters.type";

/**
 * Get default date format options for a locale
 */
function getDefaultFormatOptionsForLocale(locale: string): Intl.DateTimeFormatOptions {
  // Normalize locale to handle language-only codes
  const normalizedLocale = locale.toLowerCase();
  const languageCode = normalizedLocale.split('-')[0];
  
  // Locale-specific defaults based on common conventions
  const localeDefaults: Record<string, Intl.DateTimeFormatOptions> = {
    // English variants - mostly numeric
    'en-us': { year: 'numeric', month: 'numeric', day: 'numeric' },
    'en-gb': { year: 'numeric', month: 'numeric', day: 'numeric' },
    'en-ca': { year: 'numeric', month: 'numeric', day: 'numeric' },
    'en-au': { year: 'numeric', month: 'numeric', day: 'numeric' },
    
    // European languages - typically long month format
    'de-de': { year: 'numeric', month: 'long', day: 'numeric' },
    'de': { year: 'numeric', month: 'long', day: 'numeric' },
    'fr-fr': { year: 'numeric', month: 'long', day: 'numeric' },
    'fr': { year: 'numeric', month: 'long', day: 'numeric' },
    'es-es': { year: 'numeric', month: 'long', day: 'numeric' },
    'es': { year: 'numeric', month: 'long', day: 'numeric' },
    'it-it': { year: 'numeric', month: 'long', day: 'numeric' },
    'it': { year: 'numeric', month: 'long', day: 'numeric' },
    'pt-pt': { year: 'numeric', month: 'long', day: 'numeric' },
    'pt-br': { year: 'numeric', month: 'long', day: 'numeric' },
    'pt': { year: 'numeric', month: 'long', day: 'numeric' },
    'nl-nl': { year: 'numeric', month: 'long', day: 'numeric' },
    'nl': { year: 'numeric', month: 'long', day: 'numeric' },
    
    // Asian languages - typically numeric
    'ja-jp': { year: 'numeric', month: 'numeric', day: 'numeric' },
    'ja': { year: 'numeric', month: 'numeric', day: 'numeric' },
    'zh-cn': { year: 'numeric', month: 'long', day: 'numeric' },
    'zh-tw': { year: 'numeric', month: 'long', day: 'numeric' },
    'zh': { year: 'numeric', month: 'long', day: 'numeric' },
    'ko-kr': { year: 'numeric', month: 'numeric', day: 'numeric' },
    'ko': { year: 'numeric', month: 'numeric', day: 'numeric' },
    
    // Nordic languages
    'sv-se': { year: 'numeric', month: 'long', day: 'numeric' },
    'sv': { year: 'numeric', month: 'long', day: 'numeric' },
    'no-no': { year: 'numeric', month: 'long', day: 'numeric' },
    'no': { year: 'numeric', month: 'long', day: 'numeric' },
    'da-dk': { year: 'numeric', month: 'long', day: 'numeric' },
    'da': { year: 'numeric', month: 'long', day: 'numeric' },
    'fi-fi': { year: 'numeric', month: 'long', day: 'numeric' },
    'fi': { year: 'numeric', month: 'long', day: 'numeric' },
    
    // Slavic languages
    'ru-ru': { year: 'numeric', month: 'long', day: 'numeric' },
    'ru': { year: 'numeric', month: 'long', day: 'numeric' },
    'pl-pl': { year: 'numeric', month: 'long', day: 'numeric' },
    'pl': { year: 'numeric', month: 'long', day: 'numeric' },
    'cs-cz': { year: 'numeric', month: 'long', day: 'numeric' },
    'cs': { year: 'numeric', month: 'long', day: 'numeric' },
    
    // Other languages
    'ar-sa': { year: 'numeric', month: 'long', day: 'numeric' },
    'ar': { year: 'numeric', month: 'long', day: 'numeric' },
    'tr-tr': { year: 'numeric', month: 'long', day: 'numeric' },
    'tr': { year: 'numeric', month: 'long', day: 'numeric' },
    'he-il': { year: 'numeric', month: 'long', day: 'numeric' },
    'he': { year: 'numeric', month: 'long', day: 'numeric' },
  };
  
  // Try exact match first
  if (localeDefaults[normalizedLocale]) {
    return localeDefaults[normalizedLocale];
  }
  
  // Try language code only
  if (localeDefaults[languageCode]) {
    return localeDefaults[languageCode];
  }
  
  // Default fallback (en-US style)
  return { year: 'numeric', month: 'numeric', day: 'numeric' };
}

/**
 * LocalizationCoordinator
 * Handles all localization and locale-related operations
 */
export class LocalizationCoordinator {
  private hasCustomFormatOptions: boolean = false;

  constructor(
    private stateManager: CalendarStateManager,
    private bindingsCoordinator: BindingsCoordinator,
    private localizationService: ILocalizationService,
    private dateFormattingService: IDateFormattingService
  ) {}

  /**
   * Set the locale for the calendar
   */
  public setLocale(
    locale: string,
    bindings: CalendarControllerBindings,
    getters: CalendarGetters,
    applyDefaults: boolean = true
  ): void {
    this.stateManager.locale = locale;
    this.localizationService.setLocale(locale);
    
    // Apply default format options unless user has set custom ones
    // or we're told not to (e.g., during initialization with options)
    if (applyDefaults && !this.hasCustomFormatOptions) {
      const defaultFormatOptions = getDefaultFormatOptionsForLocale(locale);
      this.stateManager.dateFormatOptions = defaultFormatOptions;
      this.dateFormattingService.setDateFormatOptions(defaultFormatOptions);
    }

    
    this.bindingsCoordinator.updateAllBindings(bindings, getters, {
      currentDate: true,
      calendarDays: true,
      calendarMonths: true,
      calendarYears: true,
    });
  }

  /**
   * Get current locale
   */
  public getLocale(): string {
    return this.stateManager.locale;
  }

  /**
   * Set date format
   */
  public setDateFormat(
    format: string | null,
    bindings: CalendarControllerBindings,
    getters: CalendarGetters
  ): void {
    this.stateManager.dateFormat = format;
    if (format) {
      this.dateFormattingService.setDefaultFormat(format);
    }

    
    this.bindingsCoordinator.updateAllBindings(bindings, getters, {
      calendarDays: true,
    });
  }

  /**
   * Get date format
   */
  public getDateFormat(): string | null {
    return this.stateManager.dateFormat;
  }

  /**
   * Set date format options
   */
  public setDateFormatOptions(
    options: Intl.DateTimeFormatOptions | null,
    bindings: CalendarControllerBindings,
    getters: CalendarGetters
  ): void {
    this.stateManager.dateFormatOptions = options;
    this.dateFormattingService.setDateFormatOptions(options);
    
    // Mark whether user has explicitly set custom options
    this.hasCustomFormatOptions = options !== null;

    
    this.bindingsCoordinator.updateAllBindings(bindings, getters, {
      calendarDays: true,
    });
  }

  /**
   * Get date format options
   */
  public getDateFormatOptions(): Intl.DateTimeFormatOptions | null {
    return this.stateManager.dateFormatOptions;
  }

  /**
   * Set first day of week
   */
  public setFirstDayOfWeek(
    day: number,
    bindings: CalendarControllerBindings,
    getters: CalendarGetters
  ): void {
    if (day < 0 || day > 6) {
      throw new Error("First day of week must be between 0 (Sunday) and 6 (Saturday)");
    }

    this.stateManager.firstDayOfWeek = day;

    
    this.bindingsCoordinator.updateAllBindings(bindings, getters, {
      calendarDays: true,
    });
  }

  /**
   * Get first day of week
   */
  public getFirstDayOfWeek(): number {
    return this.stateManager.firstDayOfWeek;
  }

  /**
   * Set hide other month days option
   */
  public setHideOtherMonthDays(
    hide: boolean,
    bindings: CalendarControllerBindings,
    getters: CalendarGetters
  ): void {
    this.stateManager.hideOtherMonthDays = hide;

    
    this.bindingsCoordinator.updateAllBindings(bindings, getters, {
      calendarDays: true,
    });
  }

  /**
   * Get hide other month days option
   */
  public getHideOtherMonthDays(): boolean {
    return this.stateManager.hideOtherMonthDays;
  }
}





