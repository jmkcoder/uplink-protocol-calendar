import { ControllerMetadata } from "@uplink-protocol/core/dist/uplink/interfaces/metadata/controller-metadata.interface";
import {
  CalendarOptions,
  ICalendarService,
  IDateFormattingService,
  IDateSelectionService,
  IViewStateService,
  IEventManagerService,
  INavigationService,
  IConstraintsService,
  ICalendarGeneratorService,
  IConfigurationService,
  ILocalizationService,
  IAccessibilityService,
  IAccessibilityManagerService,
  ICalendarStateService,
} from "../interfaces";
import {
  CalendarService,
  DateFormattingService,
  DateSelectionService,
  ViewStateService,
  EventManagerService,
  NavigationService,
  ConstraintsService,
  CalendarGeneratorService,
  ConfigurationService,
  LocalizationService,
  AccessibilityService,
  AccessibilityManagerService,
  CalendarStateService,
  InitializationService,
} from "../services";
import { CalendarStateManager } from "./state-manager";
import { CalendarControllerBindings, CalendarControllerEvents } from "../types";

/**
 * ControllerInitializer - Handles all controller initialization logic
 * Responsible for service instantiation, configuration, metadata setup, and initial state
 */
export class ControllerInitializer {
  /**
   * Initialize all services required by the controller
   */
  initializeServices(): {
    calendarService: ICalendarService;
    dateFormattingService: IDateFormattingService;
    dateSelectionService: IDateSelectionService;
    viewStateService: IViewStateService;
    eventManagerService: IEventManagerService;
    navigationService: INavigationService;
    constraintsService: IConstraintsService;
    calendarGeneratorService: ICalendarGeneratorService;
    localizationService: ILocalizationService;
    configurationService: IConfigurationService;
    accessibilityService: IAccessibilityService;
    accessibilityManagerService: IAccessibilityManagerService;
    calendarStateService: ICalendarStateService;
  } {
    // Initialize core services
    const calendarService = new CalendarService();
    const dateFormattingService = new DateFormattingService();
    const dateSelectionService = new DateSelectionService();
    const viewStateService = new ViewStateService();
    const eventManagerService = new EventManagerService();
    const navigationService = new NavigationService();
    const constraintsService = new ConstraintsService();
    const calendarGeneratorService = new CalendarGeneratorService();
    const localizationService = new LocalizationService();

    // Initialize composite services
    const configurationService = new ConfigurationService(
      constraintsService,
      dateFormattingService
    );

    const accessibilityService = new AccessibilityService();
    const accessibilityManagerService = new AccessibilityManagerService(
      accessibilityService,
      viewStateService
    );

    const calendarStateService = new CalendarStateService(
      viewStateService,
      dateSelectionService,
      constraintsService,
      eventManagerService
    );

    // Connect services - set localization service in dependent services
    calendarService.setLocalizationService(localizationService);
    dateFormattingService.setLocalizationService(localizationService);

    return {
      calendarService,
      dateFormattingService,
      dateSelectionService,
      viewStateService,
      eventManagerService,
      navigationService,
      constraintsService,
      calendarGeneratorService,
      localizationService,
      configurationService,
      accessibilityService,
      accessibilityManagerService,
      calendarStateService,
    };
  }

  /**
   * Apply configuration options to state manager and services
   */
  applyConfiguration(
    options: CalendarOptions,
    stateManager: CalendarStateManager,
    services: {
      calendarService: ICalendarService;
      dateFormattingService: IDateFormattingService;
      localizationService: ILocalizationService;
      configurationService: IConfigurationService;
      constraintsService: IConstraintsService;
    }
  ): {
    localizationService: ILocalizationService;
    configurationService: IConfigurationService;
    locale: string;
  } {
    const initializationService = new InitializationService();
    
    // Apply configuration using the initialization service
    const configResult = initializationService.applyConfiguration(
      options,
      stateManager.locale,
      services.calendarService,
      services.dateFormattingService,
      services.localizationService
    );

    // Update state manager with configuration values
    if (options.initialSelectedDate) stateManager.selectedDate = options.initialSelectedDate;
    if (options.minDate) stateManager.minDate = options.minDate;
    if (options.maxDate) stateManager.maxDate = options.maxDate;
    if (options.firstDayOfWeek !== undefined) stateManager.firstDayOfWeek = options.firstDayOfWeek;
    if (options.dateFormat) stateManager.dateFormat = options.dateFormat;
    if (options.isRangeSelection !== undefined) stateManager.isRangeSelection = options.isRangeSelection;
    if (options.hideOtherMonthDays !== undefined) stateManager.hideOtherMonthDays = options.hideOtherMonthDays;
    if (options.dateFormatOptions) stateManager.dateFormatOptions = options.dateFormatOptions;
    if (options.disabledDates) stateManager.disabledDates = [...options.disabledDates];
    if (options.disabledDaysOfWeek) {
      stateManager.disabledDaysOfWeek = services.constraintsService.setDisabledDaysOfWeek(options.disabledDaysOfWeek);
    }
    
    // Update state manager with the configured locale
    stateManager.locale = configResult.locale;

    return {
      localizationService: configResult.localizationService,
      configurationService: configResult.configurationService,
      locale: configResult.locale,
    };
  }

  /**
   * Initialize bindings
   */
  initializeBindings(
    stateManager: CalendarStateManager,
    viewStateService: IViewStateService,
    generateCalendarDaysFn: () => any[],
    generateCalendarMonthsFn: () => any[],
    generateCalendarYearsFn: () => any[]
  ): CalendarControllerBindings {
    return viewStateService.initializeBindings(
      stateManager.currentDate,
      stateManager.selectedDate,
      stateManager.selectedDateRange,
      stateManager.firstDayOfWeek,
      stateManager.isRangeSelection,
      generateCalendarDaysFn,
      generateCalendarMonthsFn,
      generateCalendarYearsFn
    );
  }

  /**
   * Initialize events
   */
  initializeEvents(eventManagerService: IEventManagerService): CalendarControllerEvents {
    return eventManagerService.initializeEvents();
  }

  /**
   * Initialize metadata for the controller
   */
  initializeMetadata(controller: any): void {
    controller.meta = this.createMetadata();
  }

  /**
   * Setup bindings for the controller (placeholder - actual binding initialization handled by bindingsCoordinator)
   */
  setupBindings(_controller: any): void {
    // Bindings are handled by BindingsCoordinator
    // This is just a compatibility method
  }

  /**
   * Setup methods for the controller (placeholder - methods are already defined in controller class)
   */
  setupMethods(_controller: any): void {
    // Methods are already defined in the controller class
    // This is just a compatibility method
  }

  /**
   * Create controller metadata for agent assistance
   */
  createMetadata(): ControllerMetadata {
    return {
      name: "CalendarController",
      description: "A powerful calendar and date picker controller for building date selection UI components with reactive state management, accessibility features, and comprehensive internationalization support.",
      bindings: {
        selectedDate: {
          type: "Date | null",
          description: "Currently selected date (null if no date selected)",
          required: false,
          label: "Selected Date"
        },
        selectedDateRange: {
          type: "DateRange",
          description: "Selected date range (for range selection mode)",
          required: false,
          label: "Selected Date Range"
        },
        focusedDate: {
          type: "Date | null",
          description: "Currently focused date (for accessibility)",
          required: false,
          label: "Focused Date"
        },
        currentDate: {
          type: "Date",
          description: "Current date being displayed (navigation state)",
          required: true,
          label: "Current Date"
        },
        currentMonth: {
          type: "number",
          description: "Current month number (0-based)",
          required: true,
          validation: "min=0,max=11",
          label: "Current Month"
        },
        currentYear: {
          type: "number",
          description: "Current year number",
          required: true,
          label: "Current Year"
        },
        monthName: {
          type: "string",
          description: "Current month name in the selected locale",
          required: true,
          label: "Month Name"
        },
        calendarDays: {
          type: "CalendarDate[]",
          description: "Array of calendar days for the current month view",
          required: true,
          label: "Calendar Days"
        },
        calendarMonths: {
          type: "CalendarMonth[]",
          description: "Array of calendar months for the year view",
          required: true,
          label: "Calendar Months"
        },
        calendarYears: {
          type: "CalendarYear[]",
          description: "Array of calendar years for the decade view",
          required: true,
          label: "Calendar Years"
        },
        weekdays: {
          type: "string[]",
          description: "Array of weekday names in the selected locale",
          required: true,
          label: "Weekdays"
        },
        isRangeSelection: {
          type: "boolean",
          description: "Whether range selection mode is enabled",
          required: true,
          label: "Range Selection Mode"
        },
        currentYearRangeBase: {
          type: "YearRange | number",
          description: "Current year range base for decade view",
          required: true,
          label: "Year Range Base"
        }
      },
      methods: {
        selectDate: {
          description: "Select a specific date",
          parameters: {
            yearOrDate: { type: "number | Date", description: "Year value or Date object", required: true },
            month: { type: "number", description: "Month value (0-based) - optional when yearOrDate is a Date", required: false },
            day: { type: "number", description: "Day value - optional when yearOrDate is a Date", required: false }
          },
          returns: "void"
        },
        goToMonth: {
          description: "Navigate to a specific month",
          parameters: {
            month: { type: "number", description: "Month (0-based)", required: true },
            year: { type: "number", description: "Year", required: true }
          },
          returns: "void"
        },
        goToYear: {
          description: "Navigate to a specific year",
          parameters: {
            year: { type: "number", description: "Year", required: true }
          },
          returns: "void"
        },
        goToDate: {
          description: "Navigate to a specific date",
          parameters: {
            date: { type: "Date", description: "Target date", required: true }
          },
          returns: "void"
        },
        goToNextMonth: {
          description: "Navigate to the next month",
          parameters: {},
          returns: "void"
        },
        goToPreviousMonth: {
          description: "Navigate to the previous month",
          parameters: {},
          returns: "void"
        },
        goToNextYear: {
          description: "Navigate to the next year",
          parameters: {},
          returns: "void"
        },
        goToPreviousYear: {
          description: "Navigate to the previous year",
          parameters: {},
          returns: "void"
        },
        goToToday: {
          description: "Navigate to today's date",
          parameters: {},
          returns: "void"
        },
        goToNextYearRange: {
          description: "Navigate to the next year range (decade)",
          parameters: {},
          returns: "void"
        },
        goToPreviousYearRange: {
          description: "Navigate to the previous year range (decade)",
          parameters: {},
          returns: "void"
        },
        setRangeSelectionMode: {
          description: "Enable or disable range selection mode",
          parameters: {
            isRange: { type: "boolean", description: "Whether range selection is enabled", required: true }
          },
          returns: "void"
        },
        clearSelection: {
          description: "Clear the current selection",
          parameters: {},
          returns: "void"
        },
        setFocusedDate: {
          description: "Set the focused date for accessibility",
          parameters: {
            date: { type: "Date | null", description: "Date to focus or null to clear", required: true }
          },
          returns: "void"
        },
        clearFocusedDate: {
          description: "Clear the focused date",
          parameters: {},
          returns: "void"
        },
        focusDate: {
          description: "Focus a specific date",
          parameters: {
            date: { type: "Date", description: "Date to focus", required: true }
          },
          returns: "void"
        },
        setLocale: {
          description: "Set the locale for internationalization",
          parameters: {
            locale: { type: "string", description: "BCP 47 language tag (e.g., 'en-US', 'fr-FR')", required: true }
          },
          returns: "void"
        },
        getLocale: {
          description: "Get the current locale",
          parameters: {},
          returns: "string"
        },
        getMonthNames: {
          description: "Get month names in the current locale",
          parameters: {},
          returns: "string[]"
        },
        getWeekdayNames: {
          description: "Get weekday names in the current locale",
          parameters: {
            short: { type: "boolean", description: "Whether to return short names", required: false }
          },
          returns: "string[]"
        },
        setDateFormatOptions: {
          description: "Set date format options",
          parameters: {
            options: { type: "Intl.DateTimeFormatOptions | null", description: "Date formatting options or null to use locale defaults", required: true }
          },
          returns: "void"
        },
        getDateFormatOptions: {
          description: "Get current date format options",
          parameters: {},
          returns: "Intl.DateTimeFormatOptions | null"
        },
        getFormattedDate: {
          description: "Get formatted date string for selected date",
          parameters: {},
          returns: "string | null"
        },
        formatDate: {
          description: "Format a specific date with given options",
          parameters: {
            date: { type: "Date", description: "Date to format", required: true },
            options: { type: "Intl.DateTimeFormatOptions | string", description: "Formatting options or format string", required: false }
          },
          returns: "string"
        },
        selectMonth: {
          description: "Select a month (navigate to month view)",
          parameters: {
            month: { type: "number", description: "Month (0-based)", required: true },
            year: { type: "number", description: "Year", required: true }
          },
          returns: "void"
        },
        selectYear: {
          description: "Select a year (navigate to year view)",
          parameters: {
            year: { type: "number", description: "Year", required: true }
          },
          returns: "void"
        },
        setMinDate: {
          description: "Set minimum selectable date",
          parameters: {
            date: { type: "Date | null", description: "Minimum date or null", required: true }
          },
          returns: "void"
        },
        setMaxDate: {
          description: "Set maximum selectable date",
          parameters: {
            date: { type: "Date | null", description: "Maximum date or null", required: true }
          },
          returns: "void"
        },
        setDisabledDates: {
          description: "Set array of disabled dates",
          parameters: {
            dates: { type: "Date[]", description: "Array of dates to disable", required: true }
          },
          returns: "void"
        },
        addDisabledDate: {
          description: "Add a date to the disabled dates",
          parameters: {
            date: { type: "Date", description: "Date to disable", required: true }
          },
          returns: "Date[]"
        },
        removeDisabledDate: {
          description: "Remove a date from the disabled dates",
          parameters: {
            date: { type: "Date", description: "Date to enable", required: true }
          },
          returns: "Date[]"
        },
        getDisabledDates: {
          description: "Get the current disabled dates",
          parameters: {},
          returns: "Date[]"
        },
        setDisabledDaysOfWeek: {
          description: "Set array of disabled days of the week",
          parameters: {
            days: { type: "number[]", description: "Array of disabled days (0 = Sunday, 1 = Monday, etc.)", required: true }
          },
          returns: "number[]"
        },
        addDisabledDayOfWeek: {
          description: "Add a day of the week to the disabled days",
          parameters: {
            day: { type: "number", description: "Day of week to disable (0 = Sunday, 1 = Monday, etc.)", required: true }
          },
          returns: "number[]"
        },
        removeDisabledDayOfWeek: {
          description: "Remove a day of the week from the disabled days",
          parameters: {
            day: { type: "number", description: "Day of week to enable (0 = Sunday, 1 = Monday, etc.)", required: true }
          },
          returns: "number[]"
        },
        getDisabledDaysOfWeek: {
          description: "Get the current disabled days of the week",
          parameters: {},
          returns: "number[]"
        },
        getCurrentYearRange: {
          description: "Get the current year range",
          parameters: {},
          returns: "YearRange"
        },
        setCurrentYearRange: {
          description: "Set the current year range based on a date",
          parameters: {
            date: { type: "Date", description: "Date to determine year range from", required: true }
          },
          returns: "void"
        },
        setYearRangeSize: {
          description: "Set the year range size (how many years to display)",
          parameters: {
            size: { type: "number", description: "Number of years in range", required: true }
          },
          returns: "void"
        },
        getAccessibleDateLabel: {
          description: "Get accessible label for a date",
          parameters: {
            date: { type: "Date", description: "Date to get label for", required: true }
          },
          returns: "string"
        },
        getDateStateDescription: {
          description: "Get date state description for accessibility",
          parameters: {
            date: { type: "Date", description: "Date to get state description for", required: true }
          },
          returns: "string"
        },
        isToday: {
          description: "Check if a date is today",
          parameters: {
            date: { type: "Date", description: "Date to check", required: true }
          },
          returns: "boolean"
        },
        generateMonthView: {
          description: "Generate month view data",
          parameters: {},
          returns: "{ month: number; year: number; weeks: { days: CalendarDate[]; weekNumber?: number }[]; weekdays: string[]; }"
        },
        getWeekNumber: {
          description: "Get week number for a date",
          parameters: {
            date: { type: "Date", description: "Date to get week number for", required: true }
          },
          returns: "number"
        },
        generateCalendarDays: {
          description: "Generate calendar days for current month",
          parameters: {},
          returns: "CalendarDate[]"
        },
        generateCalendarMonths: {
          description: "Generate calendar months for current year",
          parameters: {},
          returns: "CalendarMonth[]"
        },
        generateCalendarYears: {
          description: "Generate calendar years for current decade",
          parameters: {},
          returns: "CalendarYear[]"
        },
        moveFocusRight: {
          description: "Move focus to the next day (keyboard navigation)",
          parameters: {},
          returns: "void"
        },
        moveFocusLeft: {
          description: "Move focus to the previous day (keyboard navigation)",
          parameters: {},
          returns: "void"
        },
        moveFocusUp: {
          description: "Move focus up one week (keyboard navigation)",
          parameters: {},
          returns: "void"
        },
        moveFocusDown: {
          description: "Move focus down one week (keyboard navigation)",
          parameters: {},
          returns: "void"
        },
        moveFocusToStartOfMonth: {
          description: "Move focus to the start of the month",
          parameters: {},
          returns: "void"
        },
        moveFocusToEndOfMonth: {
          description: "Move focus to the end of the month",
          parameters: {},
          returns: "void"
        },
        moveFocusToPreviousMonth: {
          description: "Move focus to the previous month",
          parameters: {},
          returns: "void"
        },
        moveFocusToNextMonth: {
          description: "Move focus to the next month",
          parameters: {},
          returns: "void"
        },
        moveFocusToPreviousYear: {
          description: "Move focus to the previous year",
          parameters: {},
          returns: "void"
        },
        moveFocusToNextYear: {
          description: "Move focus to the next year",
          parameters: {},
          returns: "void"
        },
        selectFocusedDate: {
          description: "Select the currently focused date",
          parameters: {},
          returns: "void"
        }
      },
      events: {
        dateSelected: {
          description: "Fired when a date is selected",
          payload: "Date"
        },
        dateRangeSelected: {
          description: "Fired when a date range is selected (in range mode)",
          payload: "DateRange"
        },
        monthChanged: {
          description: "Fired when the month changes",
          payload: "number"
        },
        yearChanged: {
          description: "Fired when the year changes",
          payload: "number"
        },
        viewChanged: {
          description: "Fired when the view changes (month/year navigation)",
          payload: "{ month: number; year: number }"
        },
        yearRangeChanged: {
          description: "Fired when the year range changes (decade navigation)",
          payload: "YearRange"
        }
      }
    };
  }
}

