import { 
  ICalendarService, 
  IDateFormattingService,
  ILocalizationService,
  CalendarOptions,
  CalendarMonth, 
  CalendarYear, 
  CalendarDate,
  IInitializationService,
  IConfigurationService
} from '../interfaces';
import { ViewStateService } from './view-state.service';
import { LocalizationService } from './localization.service';
import { ConfigurationService } from './configuration.service';
import { ConstraintsService } from './constraints.service';
import { Binding } from '@uplink-protocol/core';
import { DateFormattingService } from './date-formatting.service';

/**
 * Implementation of InitializationService
 * Responsible for setting up and initializing calendar components
 */
export class InitializationService implements IInitializationService {
  /**
   * Initialize view state bindings and initial values
   */
  public initializeBindings(
    currentDate: Date,
    selectedDate: Date | null,
    selectedDateRange: { startDate: Date | null; endDate: Date | null },
    firstDayOfWeek: number,
    isRangeSelection: boolean,
    calendarDaysGenerator: () => CalendarDate[],
    getMonthNameFn: (month: number) => string,
    getWeekdayNamesFn: (firstDayOfWeek: number) => string[],
    generateCalendarMonthsFn: () => CalendarMonth[],
    generateCalendarYearsFn: () => CalendarYear[]
  ): Record<string, Binding<any>> {
    // Initialize bindings using ViewStateService method (we're just enhancing the initialization)
    const viewStateService = new ViewStateService();
    const bindings = viewStateService.initializeBindings(
      currentDate,
      selectedDate,
      selectedDateRange,
      firstDayOfWeek,
      isRangeSelection,
      calendarDaysGenerator
    );
    
    // Set additional initial values
    bindings.monthName.set(getMonthNameFn(currentDate.getMonth()));
    bindings.weekdays.set(getWeekdayNamesFn(firstDayOfWeek));
    bindings.calendarMonths.set(generateCalendarMonthsFn());
    bindings.calendarYears.set(generateCalendarYearsFn());
    
    return bindings;
  }
  
  /**
   * Apply calendar configuration options
   */
  public applyConfiguration(
    options: CalendarOptions | undefined, 
    locale: string,
    calendarService: ICalendarService,
    dateFormattingService: IDateFormattingService,
    localizationService: ILocalizationService
  ): {
    locale: string;
    minDate: Date | null;
    maxDate: Date | null;
    disabledDates: Date[];
    selectedDate: Date | null;
    firstDayOfWeek: number;
    dateFormat: string | null;
    hideOtherMonthDays: boolean;
    isRangeSelection: boolean;
    localizationService: ILocalizationService;
    configurationService: IConfigurationService;
  } {
    let updatedLocale = locale;
    let updatedLocalizationService = localizationService;
    
    if (options) {
      // Initialize locale if provided
      if (options.locale) {
        updatedLocale = options.locale;
      }
      
      // Initialize localization service with the locale
      updatedLocalizationService = new LocalizationService(updatedLocale);
      
      // Link the localization service to other services
      calendarService.setLocalizationService(updatedLocalizationService);
      dateFormattingService.setLocalizationService(updatedLocalizationService);
      
      // Set date format options if provided
      if (options.dateFormatOptions) {
        dateFormattingService.setDateFormatOptions(options.dateFormatOptions);
      }
        // Use ConfigurationService to apply configuration
      const constraintsService = new ConstraintsService();
      const configurationService = new ConfigurationService(constraintsService, dateFormattingService);
      const config = configurationService.applyConfiguration(options);
      
      return {
        locale: updatedLocale,
        minDate: config.minDate,
        maxDate: config.maxDate,
        disabledDates: config.disabledDates,
        selectedDate: config.selectedDate,
        firstDayOfWeek: config.firstDayOfWeek,
        dateFormat: config.dateFormat,
        isRangeSelection: config.isRangeSelection,
        hideOtherMonthDays: config.hideOtherMonthDays,
        localizationService: updatedLocalizationService,
        configurationService: configurationService
      };
    }
    
    // Default configuration
    return {
      locale: updatedLocale,
      minDate: null,
      maxDate: null,
      disabledDates: [],
      selectedDate: null,
      firstDayOfWeek: 0,
      dateFormat: null,
      hideOtherMonthDays: false,
      isRangeSelection: false,
      localizationService: new LocalizationService(updatedLocale),
      configurationService: new ConfigurationService(new ConstraintsService(), new DateFormattingService())
    };
  }
}
