import {
  Binding,
  ControllerAdapter,
  EventEmitter,
  TypedController,
} from "@uplink-protocol/core";
import { ControllerMetadata } from "@uplink-protocol/core/dist/uplink/interfaces/metadata/controller-metadata.interface";
import {
  CalendarDate,
  CalendarMonth,
  CalendarYear,
  CalendarOptions,
  DateRange,
  YearRange,
  CalendarGenerationOptions,
  MonthViewGenerationOptions,
  YearViewGenerationOptions,
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
} from "./interfaces";
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
} from "./services";

/**
 * CalendarControllerClass - A full featured date picker controller class.
 * Provides functionality for date picking and calendar display.
 *
 * This controller uses a service-oriented architecture where all the core
 * functionality is delegated to specialized services.
 */
export interface CalendarControllerInterface extends TypedController {
  _currentDate: Date;
  _selectedDate: Date | null;
  _selectedDateRange: DateRange;
  _focusedDate: Date | null;
  _minDate: Date | null;
  _maxDate: Date | null;
  _disabledDates: Date[];
  _firstDayOfWeek: number;
  _dateFormat: string | null;
  _isRangeSelection: boolean;
  _hideOtherMonthDays: boolean;
  _locale: string;
  _dateFormatOptions: Intl.DateTimeFormatOptions | null;
  _yearRangeSize: number;
  _currentYearRangeBase: number;
}

export class CalendarControllerClass implements CalendarControllerInterface {
  bindings!: Record<string, Binding<any>>;
  methods?: Record<string, (...args: any[]) => any>;
  events?: Record<string, EventEmitter<any>>;
  meta?: ControllerMetadata;
  __adapter?: ControllerAdapter;

  // State variables
  _currentDate: Date = new Date();
  _selectedDate: Date | null = null;
  _selectedDateRange: DateRange = { startDate: null, endDate: null };
  _focusedDate: Date | null = null;
  _minDate: Date | null = null;
  _maxDate: Date | null = null;
  _disabledDates: Date[] = [];
  _firstDayOfWeek: number = 0; // Sunday
  _dateFormat: string | null = null;
  _isRangeSelection: boolean = false;
  _hideOtherMonthDays: boolean = false; // Show other month days by default  _locale: string = 'en-US'; // Default locale
  _dateFormatOptions: Intl.DateTimeFormatOptions | null = null;
  _yearRangeSize: number = 12; // Default number of years in year view
  _currentYearRangeBase: number = 0; // Base year for current year range
  _locale: string = "en-US";

  // Default locale  // Services
  private _calendarService: ICalendarService;
  private _localizationService: ILocalizationService;
  private _dateFormattingService: IDateFormattingService;
  private _dateSelectionService: IDateSelectionService;
  private _viewStateService: IViewStateService;
  private _eventManagerService: IEventManagerService;
  private _navigationService: INavigationService;
  private _constraintsService: IConstraintsService;
  private _calendarGeneratorService: ICalendarGeneratorService;
  private _configurationService: IConfigurationService;
  private _accessibilityService: IAccessibilityService;
  private _accessibilityManagerService: IAccessibilityManagerService;
  private _calendarStateService: ICalendarStateService;

  /**
   * Constructor - initializes the controller with optional configuration
   * @param options Calendar configuration options
   */
  constructor(options?: CalendarOptions) {
    // Initialize core services
    this._calendarService = new CalendarService();
    this._dateFormattingService = new DateFormattingService();
    this._dateSelectionService = new DateSelectionService();
    this._viewStateService = new ViewStateService();
    this._eventManagerService = new EventManagerService();
    this._navigationService = new NavigationService();
    this._constraintsService = new ConstraintsService();
    this._calendarGeneratorService = new CalendarGeneratorService();
    this._localizationService = new LocalizationService();

    // Initialize composite services
    this._configurationService = new ConfigurationService(
      this._constraintsService,
      this._dateFormattingService
    );
    this._accessibilityService = new AccessibilityService();
    this._accessibilityManagerService = new AccessibilityManagerService(
      this._accessibilityService,
      this._viewStateService
    );
    this._calendarStateService = new CalendarStateService(
      this._viewStateService,
      this._dateSelectionService,
      this._constraintsService,
      this._eventManagerService
    );

    // Initialize the service responsible for component initialization
    const initializationService = new InitializationService();

    // Apply configuration using the initialization service
    const config = initializationService.applyConfiguration(
      options,
      this._locale,
      this._calendarService,
      this._dateFormattingService,
      this._localizationService
    );

    // Update state based on configuration
    this._locale = config.locale;
    this._minDate = config.minDate;
    this._maxDate = config.maxDate;
    this._disabledDates = config.disabledDates;
    this._selectedDate = config.selectedDate;
    this._firstDayOfWeek = config.firstDayOfWeek;
    this._dateFormat = config.dateFormat;
    this._hideOtherMonthDays = config.hideOtherMonthDays;
    this._localizationService = config.localizationService;
    this._configurationService = config.configurationService;
    this._dateFormatOptions =
      this._dateFormattingService.getDateFormatOptions();
    this._isRangeSelection = config.isRangeSelection || false;

    // Initialize bindings using the initialization service
    this.bindings = initializationService.initializeBindings(
      this._currentDate,
      this._selectedDate,
      this._selectedDateRange,
      this._firstDayOfWeek,
      this._isRangeSelection,
      () => this.generateCalendarDays(),
      (month: number) => this._calendarService.getMonthName(month),
      (firstDay: number) => this._calendarService.getWeekdayNames(firstDay, true),
      () => this.generateCalendarMonths(),
      () => this.generateCalendarYears()
    );

    // Set up events using EventManagerService
    this.events = this._eventManagerService.initializeEvents();

    // Set up methods
    this.methods = {
      selectDate: this.selectDate.bind(this),
      nextMonth: this.nextMonth.bind(this),
      prevMonth: this.prevMonth.bind(this),
      nextYear: this.nextYear.bind(this),
      prevYear: this.prevYear.bind(this),
      goToMonth: this.goToMonth.bind(this),
      goToYear: this.goToYear.bind(this),
      goToDate: this.goToDate.bind(this),
      goToToday: this.goToToday.bind(this),
      nextYearRange: this.nextYearRange.bind(this),
      prevYearRange: this.prevYearRange.bind(this),
      goToYearRange: this.goToYearRange.bind(this),
      setRangeSelectionMode: this.setRangeSelectionMode.bind(this),
      clearSelection: this.clearSelection.bind(this),
      isDateDisabled: this.isDateDisabled.bind(this),
      setFocusedDate: this.setFocusedDate.bind(this),
      clearFocusedDate: this.clearFocusedDate.bind(this),
      setLocale: this.setLocale.bind(this),
      getLocale: this.getLocale.bind(this),
      setDateFormatOptions: this.setDateFormatOptions.bind(this),
      getDateFormatOptions: this.getDateFormatOptions.bind(this),
      selectMonth: this.selectMonth.bind(this),
      selectYear: this.selectYear.bind(this),
      getFormattedDate: this.getFormattedDate.bind(this),
      formatDate: this.formatDate.bind(this),
      setMinDate: this.setMinDate.bind(this),
      setMaxDate: this.setMaxDate.bind(this),
      setDisabledDates: this.setDisabledDates.bind(this),
      getCurrentYearRange: this.getCurrentYearRange.bind(this),
      setYearRangeSize: this.setYearRangeSize.bind(this),
      addDisabledDate: this.addDisabledDate.bind(this),
      removeDisabledDate: this.removeDisabledDate.bind(this),
      getDisabledDates: this.getDisabledDates.bind(this),
    };
  }

  /**
   * Generate calendar days for current month view using CalendarGeneratorService
   * @returns Array of CalendarDate objects
   */
  private generateCalendarDays(): CalendarDate[] {
    const year = this._currentDate.getFullYear();
    const month = this._currentDate.getMonth();
    const options: CalendarGenerationOptions = {
      selectedDate: this._selectedDate,
      selectedDateRange: this._selectedDateRange,
      focusedDate: this._focusedDate,
      firstDayOfWeek: this._firstDayOfWeek,
      minDate: this._minDate,
      maxDate: this._maxDate,
      disabledDates: this._disabledDates,
      isRangeSelection: this._isRangeSelection,
      isDateDisabledFn: (date: Date) => this.isDateDisabled(date),
      hideOtherMonthDays: this._hideOtherMonthDays,
    };

    return this._calendarGeneratorService.generateCalendarDays(
      year,
      month,
      options
    );
  }
  // goToDate implementation moved to avoid duplication
  /**
   * Generate calendar months for year view
   * @returns Array of CalendarMonth objects
   */
  private generateCalendarMonths(): CalendarMonth[] {
    const year = this._currentDate.getFullYear();

    const options: MonthViewGenerationOptions = {
      selectedDate: this._selectedDate,
      selectedDateRange: this._selectedDateRange,
      isRangeSelection: this._isRangeSelection,
      currentDate: this._currentDate,
      minDate: this._minDate,
      maxDate: this._maxDate,
      isMonthDisabledFn: (year, month) => {
        // Check if all days in month are disabled
        const firstDayOfMonth = new Date(year, month, 1);
        const lastDayOfMonth = new Date(year, month + 1, 0);

        // If entire month is before min date
        if (this._minDate && lastDayOfMonth < this._minDate) {
          return true;
        }

        // If entire month is after max date
        if (this._maxDate && firstDayOfMonth > this._maxDate) {
          return true;
        }

        // Not disabled
        return false;
      },
    };

    return this._calendarGeneratorService.generateCalendarMonths(year, options);
  }

  /**
   * Generate calendar years for year range view
   * @returns Array of CalendarYear objects
   */
  private generateCalendarYears(): CalendarYear[] {
    const baseYear =
      this._currentYearRangeBase ||
      this._currentDate.getFullYear() -
        (this._currentDate.getFullYear() % this._yearRangeSize);

    // If base year was not explicitly set, update the current range base
    if (!this._currentYearRangeBase) {
      this._currentYearRangeBase = baseYear;
    }

    const options: YearViewGenerationOptions = {
      selectedDate: this._selectedDate,
      selectedDateRange: this._selectedDateRange,
      isRangeSelection: this._isRangeSelection,
      currentDate: this._currentDate,
      minDate: this._minDate,
      maxDate: this._maxDate,
      isYearDisabledFn: (year) => {
        // Check if the entire year is disabled

        // If entire year is before min date
        if (this._minDate && year < this._minDate.getFullYear()) {
          return true;
        }

        // If entire year is after max date
        if (this._maxDate && year > this._maxDate.getFullYear()) {
          return true;
        }

        // Not disabled
        return false;
      },
    };

    return this._calendarGeneratorService.generateCalendarYears(
      baseYear,
      this._yearRangeSize,
      options
    );
  }
  /**
   * Check if a date should be disabled using ConstraintsService
   * @param date Date to check
   * @returns Boolean indicating if the date is disabled
   */
  public isDateDisabled(date: Date): boolean {
    if (!date || isNaN(date.getTime())) {
      return true;
    }
    if (this._minDate && date < this._minDate) {
      return true;
    }
    if (this._maxDate && date > this._maxDate) {
      return true;
    }
    if (
      this._disabledDates &&
      this._disabledDates.some(
        (d) =>
          d &&
          d.getFullYear() === date.getFullYear() &&
          d.getMonth() === date.getMonth() &&
          d.getDate() === date.getDate()
      )
    ) {
      return true;
    }
    return false;
  }

  /**
   * Select a date
   * @param year Year
   * @param month Month (0-11)
   * @param day Day of month
   */
  public selectDate(
    yearOrDate: number | Date,
    month?: number,
    day?: number
  ): void {
    let date: Date;

    if (yearOrDate instanceof Date) {
      date = new Date(yearOrDate);
    } else if (
      typeof yearOrDate === "number" &&
      typeof month === "number" &&
      typeof day === "number"
    ) {
      date = new Date(yearOrDate, month, day);
    } else {
      return;
    }

    if (this.isDateDisabled(date)) {
      console.log("Selected date is disabled:", date);
      return;
    }

    const result = this._calendarStateService.selectDate(
      date,
      this._isRangeSelection,
      this._selectedDate,
      this._selectedDateRange,
      (date) => this.isDateDisabled(date),
      {
        selectedDate: this.bindings.selectedDate,
        selectedDateRange: this.bindings.selectedDateRange,
        focusedDate: this.bindings.focusedDate,
        calendarDays: this.bindings.calendarDays,
      },
      this.events,
      () => this.generateCalendarDays()
    );

    if (!this._isRangeSelection) {
      this._selectedDate = result.selectedDate;
      this._selectedDateRange = { startDate: null, endDate: null };
      this._focusedDate = this._selectedDate
        ? new Date(this._selectedDate)
        : null;
    } else {
      this._selectedDate = null;
      this._selectedDateRange = result.selectedDateRange || {
        startDate: null,
        endDate: null,
      };
      this._focusedDate = this._selectedDateRange.endDate
        ? new Date(this._selectedDateRange.endDate)
        : this._selectedDateRange.startDate
        ? new Date(this._selectedDateRange.startDate)
        : null;
    }

    this.updateBindings();
  }

  /**
   * Navigate to next month using NavigationService
   */
  public nextMonth(): void {
    this._currentDate = this._navigationService.navigateToNextMonth(
      this._currentDate
    );
    this.updateCurrentDate(this._currentDate);
  }

  /**
   * Navigate to previous month using NavigationService
   */
  public prevMonth(): void {
    this._currentDate = this._navigationService.navigateToPreviousMonth(
      this._currentDate
    );
    this.updateCurrentDate(this._currentDate);
  }

  /**
   * Navigate to previous month - alias for prevMonth()
   * Added to maintain backward compatibility with tests
   */
  public previousMonth(): void {
    this.prevMonth();
  }

  /**
   * Navigate to next year using NavigationService
   */
  public nextYear(): void {
    this._currentDate = this._navigationService.navigateToNextYear(
      this._currentDate
    );
    this.updateCurrentDate(this._currentDate);
  }

  /**
   * Navigate to previous year using NavigationService
   */
  public prevYear(): void {
    this._currentDate = this._navigationService.navigateToPreviousYear(
      this._currentDate
    );
    this.updateCurrentDate(this._currentDate);
  }
  /**
   * Go to a specific month using NavigationService
   * @param month Month (0-11)
   */
  public goToMonth(month: number): void {
    this._currentDate = this._navigationService.navigateToMonth(
      this._currentDate,
      month
    );
    this.updateCurrentDate(this._currentDate);
  }

  /**
   * Go to a specific year using NavigationService
   * @param year Year
   */
  public goToYear(year: number): void {
    this._currentDate = this._navigationService.navigateToYear(
      this._currentDate,
      year
    );
    this.updateCurrentDate(this._currentDate);

    // Update month view since the year changed
    if (this.bindings.calendarMonths) {
      this.bindings.calendarMonths.set(this.generateCalendarMonths());
    }
  }

  /**
   * Go to a specific date using NavigationService
   * @param date Date to navigate to
   */
  public goToDate(date: Date): void {
    this._currentDate = this._navigationService.navigateToDate(date);
    this.updateCurrentDate(this._currentDate);
  }

  /**
   * Go to today using NavigationService
   */
  public goToToday(): void {
    this._currentDate = this._navigationService.navigateToToday();
    this.updateCurrentDate(this._currentDate);
  }
  /**
   * Navigate to next year range
   */
  public nextYearRange(): void {
    this._currentYearRangeBase = this._navigationService.navigateToYearRange(
      this._currentYearRangeBase || this._currentDate.getFullYear(),
      this._yearRangeSize,
      1
    );

    // Update view bindings
    if (this.bindings.calendarYears) {
      this.bindings.calendarYears.set(this.generateCalendarYears());
    }

    // Emit events
    if (this.events && this.events.yearRangeChanged) {
      this._eventManagerService.emitYearRangeChanged(
        this.events.yearRangeChanged,
        {
          startYear: this._currentYearRangeBase,
          endYear: this._currentYearRangeBase + this._yearRangeSize - 1,
        }
      );
    }
  }

  /**
   * Navigate to previous year range
   */
  public prevYearRange(): void {
    this._currentYearRangeBase = this._navigationService.navigateToYearRange(
      this._currentYearRangeBase || this._currentDate.getFullYear(),
      this._yearRangeSize,
      -1
    );

    // Update view bindings
    if (this.bindings.calendarYears) {
      this.bindings.calendarYears.set(this.generateCalendarYears());
    }

    // Emit events
    if (this.events && this.events.yearRangeChanged) {
      this._eventManagerService.emitYearRangeChanged(
        this.events.yearRangeChanged,
        {
          startYear: this._currentYearRangeBase,
          endYear: this._currentYearRangeBase + this._yearRangeSize - 1,
        }
      );
    }
  }

  /**
   * Go to specific year range
   * @param baseYear The base year for the range
   */
  public goToYearRange(baseYear: number): void {
    this._currentYearRangeBase = baseYear;

    // Update view bindings
    if (this.bindings.calendarYears) {
      this.bindings.calendarYears.set(this.generateCalendarYears());
    }

    // Emit events
    if (this.events && this.events.yearRangeChanged) {
      this._eventManagerService.emitYearRangeChanged(
        this.events.yearRangeChanged,
        {
          startYear: this._currentYearRangeBase,
          endYear: this._currentYearRangeBase + this._yearRangeSize - 1,
        }
      );
    }
  }
    /**
   * Update the current date and related bindings
   * @param date New current date
   */
  private updateCurrentDate(date: Date): void {
    this._currentDate = date;

    const { month, year } = this._viewStateService.updateCurrentDate(
      date,
      {
        currentMonth: this.bindings.currentMonth,
        currentYear: this.bindings.currentYear,
        monthName: this.bindings.monthName,
        calendarDays: this.bindings.calendarDays,
      },
      (month: number) => this._calendarService.getMonthName(month),
      () => this.generateCalendarDays()
    );

    // Update month and year views
    this.updateViewBindings();

    // Update currentRangeBase if needed
    if (this.bindings.currentYearRangeBase) {
      this.bindings.currentYearRangeBase.set(year - (year % this._yearRangeSize) || this._currentYearRangeBase);
    }

    // Emit events
    if (this.events) {
      this._eventManagerService.emitMonthChanged(
        this.events.monthChanged,
        month
      );
      this._eventManagerService.emitYearChanged(this.events.yearChanged, year);
      this._eventManagerService.emitViewChanged(this.events.viewChanged, {
        month,
        year,
      });
    }
  }

  /**
   * Update the bindings for calendar months and years
   */
  private updateViewBindings(): void {
    // Update day view
    if (this.bindings.calendarDays) {
      this.bindings.calendarDays.set(this.generateCalendarDays());
    }

    // Update month view
    if (this.bindings.calendarMonths) {
      this.bindings.calendarMonths.set(this.generateCalendarMonths());
    }

    // Update year view
    if (this.bindings.calendarYears) {
      this.bindings.calendarYears.set(this.generateCalendarYears());
    }
  }
  /**
   * Set the date selection mode
   * @param isRange Whether to use range selection mode
   */
  public setRangeSelectionMode(isRange: boolean): void {
    // Use CalendarStateService to update selection mode
    this._isRangeSelection = this._calendarStateService.setRangeSelectionMode(
      isRange,
      this.bindings.isRangeSelection,
      this.bindings.calendarDays,
      () => this.generateCalendarDays()
    );

    // Clear any existing selection when switching modes
    this.clearSelection();
  }
  /**
   * Clear the current selection using CalendarStateService
   */
  public clearSelection(): void {
    // Use CalendarStateService to handle clearing selection and updating bindings
    const result = this._calendarStateService.clearSelection(
      this._isRangeSelection,
      this.bindings.selectedDate,
      this.bindings.selectedDateRange,
      this.bindings.calendarDays,
      () => this.generateCalendarDays()
    );

    // Update controller state
    this._selectedDate = result.selectedDate;
    this._selectedDateRange = result.selectedDateRange;

    this.updateBindings();
  }
  /**
   * Get formatted selected date using DateFormattingService
   * @returns Formatted date string or null
   */
  public getFormattedDate(): string | null {
    if (!this._selectedDate) return null;

    // If we have localization service and format options, use internationalized formatting
    if (this._localizationService && this._dateFormatOptions) {
      return this._localizationService.formatDate(
        this._selectedDate,
        this._dateFormatOptions
      );
    }

    // Otherwise use the traditional formatting
    return this._dateFormattingService.formatDate(
      this._selectedDate,
      this._dateFormat || undefined
    );
  }
  /**
   * Set minimum selectable date
   * @param date Minimum date
   */
  public setMinDate(date: Date | null): void {
    // Use CalendarStateService to set min date and update view
    this._minDate = this._calendarStateService.setMinDate(
      date,
      this._minDate,
      this._currentDate,
      {
        currentMonth: this.bindings.currentMonth,
        currentYear: this.bindings.currentYear,
        monthName: this.bindings.monthName,
        calendarDays: this.bindings.calendarDays,
      },
      (month: number) => this._calendarService.getMonthName(month),
      () => this.generateCalendarDays()
    );
  }
  /**
   * Set maximum selectable date
   * @param date Maximum date
   */
  public setMaxDate(date: Date | null): void {
    // Use CalendarStateService to set max date and update view
    this._maxDate = this._calendarStateService.setMaxDate(
      date,
      this._maxDate,
      this._currentDate,
      {
        currentMonth: this.bindings.currentMonth,
        currentYear: this.bindings.currentYear,
        monthName: this.bindings.monthName,
        calendarDays: this.bindings.calendarDays,
      },
      (month: number) => this._calendarService.getMonthName(month),
      () => this.generateCalendarDays()
    );
  }
  /**
   * Set disabled dates
   * @param dates Array of disabled dates
   */
  public setDisabledDates(dates: Date[]): void {
    // Use CalendarStateService to set disabled dates and update view
    this._disabledDates = this._calendarStateService.setDisabledDates(
      dates,
      this._currentDate,
      {
        currentMonth: this.bindings.currentMonth,
        currentYear: this.bindings.currentYear,
        monthName: this.bindings.monthName,
        calendarDays: this.bindings.calendarDays,
      },
      (month: number) => this._calendarService.getMonthName(month),
      () => this.generateCalendarDays()
    );
  }
  /**
   * Add a specific date to the disabled dates list
   * @param date Date to disable
   * @returns Updated list of disabled dates
   */
  public addDisabledDate(date: Date): Date[] {
    if (!date) return this._disabledDates;

    // Use CalendarStateService to add disabled date and update view
    this._disabledDates = this._calendarStateService.addDisabledDate(
      date,
      this._disabledDates,
      this.bindings.calendarDays,
      () => this.generateCalendarDays()
    );

    return this._disabledDates;
  }
  /**
   * Remove a specific date from the disabled dates list
   * @param date Date to enable
   * @returns Updated list of disabled dates
   */
  public removeDisabledDate(date: Date): Date[] {
    if (!date) return this._disabledDates;

    // Use CalendarStateService to remove disabled date and update view
    this._disabledDates = this._calendarStateService.removeDisabledDate(
      date,
      this._disabledDates,
      this.bindings.calendarDays,
      () => this.generateCalendarDays()
    );

    return this._disabledDates;
  }

  /**
   * Get the current list of disabled dates
   * @returns Array of disabled dates
   */
  public getDisabledDates(): Date[] {
    return [...this._disabledDates];
  }

  /**
   * Set the locale for the calendar
   * @param locale Locale string (e.g., 'en-US', 'fr-FR', 'ja-JP')
   */
  public setLocale(locale: string): void {
    this._locale = locale;

    // Update the localization service
    this._localizationService.setLocale(locale);

    // Update calendar bindings that depend on localization
    this.bindings.monthName.set(
      this._calendarService.getMonthName(this._currentDate.getMonth())
    );
    this.bindings.weekdays.set(
      this._calendarService.getWeekdayNames(this._firstDayOfWeek, true)
    );
    this.bindings.calendarDays.set(this.generateCalendarDays());
  }

  /**
   * Get the current locale
   * @returns Current locale string
   */
  public getLocale(): string {
    return this._locale;
  }

  /**
   * Set date format options for internationalized formatting
   * @param options Intl.DateTimeFormatOptions
   */
  public setDateFormatOptions(options: Intl.DateTimeFormatOptions): void {
    this._dateFormatOptions = options;
    this._dateFormattingService.setDateFormatOptions(options);
  }

  /**
   * Get the current date format options
   * @returns Current date format options or null
   */
  public getDateFormatOptions(): Intl.DateTimeFormatOptions | null {
    return this._dateFormatOptions;
  }
  /**
   * Set the focused date
   * @param date Focused date or null to clear focus
   */
  public setFocusedDate(date: Date | null): void {
    this._focusedDate = date ? new Date(date) : null;

    // Update the focused date binding
    this.bindings.focusedDate.set(this._focusedDate);

    // Use ViewStateService to update calendar days
    this._viewStateService.updateFocusedDate(
      this._focusedDate,
      this.bindings.calendarDays,
      () => this.generateCalendarDays()
    );
  }

  /**
   * Clear the focused date
   */
  public clearFocusedDate(): void {
    this.setFocusedDate(null);
  }

  /**
   * Format a date according to the specified format
   * @param date Date to format
   * @param options Optional format options that override the default options
   * @returns Formatted date string
   */
  public formatDate(
    date: Date,
    options?: Intl.DateTimeFormatOptions | string
  ): string {
    // If _dateFormat is set, always use it (overrides all other options)
    if (this._dateFormat) {
      return this._dateFormattingService.formatDate(date, this._dateFormat);
    }

    let formatOptions: Intl.DateTimeFormatOptions;

    if (typeof options === "string") {
      // Try to convert format string to Intl.DateTimeFormatOptions
      switch (options) {
        case "short":
          formatOptions = { dateStyle: "short" };
          break;
        case "medium":
          formatOptions = { dateStyle: "medium" };
          break;
        case "long":
          formatOptions = { dateStyle: "long" };
          break;
        case "full":
          formatOptions = { dateStyle: "full" };
          break;
        default:
          // Fallback to medium if unknown string
          formatOptions = { dateStyle: "medium" };
      }
    } else if (options && typeof options === "object") {
      formatOptions = options;
    } else if (this._dateFormatOptions) {
      formatOptions = this._dateFormatOptions;
    } else {
      formatOptions = { dateStyle: "medium" };
    }

    if (this._localizationService) {
      return this._localizationService.formatDate(date, formatOptions);
    }

    // Fallback to traditional formatting if no localization service
    return this._dateFormattingService.formatDate(
      date,
      typeof options === "string" ? options : undefined
    );
  }

  /**
   * Get localized month names
   * @returns Array of month names
   */
  public getMonthNames(): string[] {
    // Delegate to the CalendarService
    return Array.from({ length: 12 }, (_, i) =>
      this._calendarService.getMonthName(i)
    );
  }
  /**
   * Get localized weekday names
   * @returns Array of weekday names
   */
  public getWeekdayNames(short: boolean = false): string[] {
    // Delegate to the CalendarService
    return this._calendarService.getWeekdayNames(this._firstDayOfWeek, short);
  }

  /**
   * Get information about the current year range
   * @returns Year range object with start and end years
   */
  public getCurrentYearRange(): YearRange {
    if (this._currentYearRangeBase)
      return {
        startYear: this._currentYearRangeBase,
        endYear: this._currentYearRangeBase + this._yearRangeSize - 1,
      };

    const yearRange = this.getYearRangeBase(this._currentDate);

    return {
      startYear: yearRange.startYear,
      endYear: yearRange.startYear + this._yearRangeSize - 1,
    };
  }

  /**
   * Set the current date
   * @param date Date to set as current
   */
  private getYearRangeBase(date: Date): YearRange {
    const baseYear = date.getFullYear() - (date.getFullYear() % this._yearRangeSize)
    
    return {
      startYear: baseYear,
      endYear: baseYear + this._yearRangeSize - 1,
    };
  }

  /**
   * Set the size of the year range (number of years to display in year view)
   * @param size Number of years to display
   */
  public setYearRangeSize(size: number): void {
    if (size < 1) return; // Invalid size

    this._yearRangeSize = size;

    // Reset the current range base to align with the new size
    this._currentYearRangeBase =
      this._currentDate.getFullYear() -
      (this._currentDate.getFullYear() % this._yearRangeSize);

    // Update the years view
    if (this.bindings.calendarYears) {
      this.bindings.calendarYears.set(this.generateCalendarYears());
    }
  }

  /**
   * Select a specific month from the month view
   * @param month Month to select (0-11)
   * @param year Year of the month
   */
  public selectMonth(month: number, year: number): void {
    // Navigate to the selected month
    this._currentDate = this._navigationService.navigateToMonth(
      new Date(year, month, 1),
      month
    );

    this.updateCurrentDate(this._currentDate);

    // Emit a view change event for month selection
    if (this.events && this.events.viewChanged) {
      this._eventManagerService.emitViewChanged(this.events.viewChanged, {
        month,
        year,
      });
    }
  }

  /**
   * Select a specific year from the year view
   * @param year Year to select
   */
  public selectYear(year: number): void {
    // Navigate to the selected year
    this._currentDate = this._navigationService.navigateToYear(
      this._currentDate,
      year
    );

    this.updateCurrentDate(this._currentDate);

    // Emit a view change event for year selection
    if (this.events && this.events.yearChanged) {
      this._eventManagerService.emitYearChanged(this.events.yearChanged, year);
    }

    // Update month view since year changed
    if (this.bindings.calendarMonths) {
      this.bindings.calendarMonths.set(this.generateCalendarMonths());
    }
  }
  /**
   * Focus on a specific date
   * @param date Date to focus on
   */
  public focusDate(date: Date): void {
    if (date) {
      // Delegate to CalendarStateService to handle focus changes
      this._focusedDate = this._calendarStateService.focusDate(
        date,
        this.bindings.focusedDate
      );

      // Update calendar view
      this._viewStateService.updateFocusedDate(
        this._focusedDate,
        this.bindings.calendarDays,
        () => this.generateCalendarDays()
      );
    }
  }
  /**
   * Move focus to the date on the right (next day)
   */
  public moveFocusRight(): void {
    // Delegate to AccessibilityManagerService which coordinates all services
    this._focusedDate = this._accessibilityManagerService.manageFocus(
      "right",
      this._focusedDate,
      this._selectedDate,
      this._currentDate,
      this.bindings.calendarDays,
      () => this.generateCalendarDays(),
      (date: Date) => {
        this._currentDate = this._navigationService.navigateToDate(date);
        this.updateCurrentDate(this._currentDate);
      }
    );
  }
  /**
   * Move focus to the date on the left (previous day)
   */
  public moveFocusLeft(): void {
    // Delegate to AccessibilityManagerService which coordinates all services
    this._focusedDate = this._accessibilityManagerService.manageFocus(
      "left",
      this._focusedDate,
      this._selectedDate,
      this._currentDate,
      this.bindings.calendarDays,
      () => this.generateCalendarDays(),
      (date: Date) => {
        this._currentDate = this._navigationService.navigateToDate(date);
        this.updateCurrentDate(this._currentDate);
      }
    );
  }
  /**
   * Move focus to the date above (previous week)
   */
  public moveFocusUp(): void {
    // Delegate to AccessibilityManagerService which coordinates all services
    this._focusedDate = this._accessibilityManagerService.manageFocus(
      "up",
      this._focusedDate,
      this._selectedDate,
      this._currentDate,
      this.bindings.calendarDays,
      () => this.generateCalendarDays(),
      (date: Date) => {
        this._currentDate = this._navigationService.navigateToDate(date);
        this.updateCurrentDate(this._currentDate);
      }
    );
  }
  /**
   * Move focus to the date below (next week)
   */
  public moveFocusDown(): void {
    // Delegate to AccessibilityManagerService which coordinates all services
    this._focusedDate = this._accessibilityManagerService.manageFocus(
      "down",
      this._focusedDate,
      this._selectedDate,
      this._currentDate,
      this.bindings.calendarDays,
      () => this.generateCalendarDays(),
      (date: Date) => {
        this._currentDate = this._navigationService.navigateToDate(date);
        this.updateCurrentDate(this._currentDate);
      }
    );
  }
  /**
   * Move focus to the first day of the month (Home key)
   */
  public moveFocusToStartOfMonth(): void {
    // Delegate to AccessibilityManagerService which coordinates all services
    this._focusedDate = this._accessibilityManagerService.manageFocus(
      "start",
      this._focusedDate,
      this._selectedDate,
      this._currentDate,
      this.bindings.calendarDays,
      () => this.generateCalendarDays()
    );
  }
  /**
   * Move focus to the last day of the month (End key)
   */
  public moveFocusToEndOfMonth(): void {
    // Delegate to AccessibilityManagerService which coordinates all services
    this._focusedDate = this._accessibilityManagerService.manageFocus(
      "end",
      this._focusedDate,
      this._selectedDate,
      this._currentDate,
      this.bindings.calendarDays,
      () => this.generateCalendarDays()
    );
  }
  /**
   * Move focus to the same day in the previous month (Page Up key)
   */
  public moveFocusToPreviousMonth(): void {
    // Delegate to AccessibilityManagerService which coordinates all services
    this._focusedDate = this._accessibilityManagerService.manageFocus(
      "prevMonth",
      this._focusedDate,
      this._selectedDate,
      this._currentDate,
      this.bindings.calendarDays,
      () => this.generateCalendarDays(),
      (date: Date) => {
        this._currentDate = this._navigationService.navigateToDate(date);
        this.updateCurrentDate(this._currentDate);
      }
    );
  }
  /**
   * Move focus to the same day in the next month (Page Down key)
   */
  public moveFocusToNextMonth(): void {
    // Delegate to AccessibilityManagerService which coordinates all services
    this._focusedDate = this._accessibilityManagerService.manageFocus(
      "nextMonth",
      this._focusedDate,
      this._selectedDate,
      this._currentDate,
      this.bindings.calendarDays,
      () => this.generateCalendarDays(),
      (date: Date) => {
        this._currentDate = this._navigationService.navigateToDate(date);
        this.updateCurrentDate(this._currentDate);
      }
    );
  }
  /**
   * Move focus to the same day in the previous year (Ctrl + Page Up)
   */
  public moveFocusToPreviousYear(): void {
    // Delegate to AccessibilityManagerService which coordinates all services
    this._focusedDate = this._accessibilityManagerService.manageFocus(
      "prevYear",
      this._focusedDate,
      this._selectedDate,
      this._currentDate,
      this.bindings.calendarDays,
      () => this.generateCalendarDays(),
      (date: Date) => {
        this._currentDate = this._navigationService.navigateToDate(date);
        this.updateCurrentDate(this._currentDate);
      }
    );
  }
  /**
   * Move focus to the same day in the next year (Ctrl + Page Down)
   */
  public moveFocusToNextYear(): void {
    // Delegate to AccessibilityManagerService which coordinates all services
    this._focusedDate = this._accessibilityManagerService.manageFocus(
      "nextYear",
      this._focusedDate,
      this._selectedDate,
      this._currentDate,
      this.bindings.calendarDays,
      () => this.generateCalendarDays(),
      (date: Date) => {
        this._currentDate = this._navigationService.navigateToDate(date);
        this.updateCurrentDate(this._currentDate);
      }
    );
  }
  /**
   * Select the currently focused date (Enter key)
   */
  public selectFocusedDate(): void {
    // Delegate to AccessibilityManagerService
    this._accessibilityManagerService.selectFocusedDate(
      this._focusedDate,
      (date: Date) => {
        this.selectDate(date.getFullYear(), date.getMonth(), date.getDate());
      }
    );
  }
  /**
   * Get accessible date label for screen readers
   * @param date The date to get a label for
   * @returns Accessible date label string
   */
  public getAccessibleDateLabel(date: Date): string {
    // Create a function for localized month names if localization service is available
    const getLocalizedMonthName = this._localizationService
      ? (month: number) => this._calendarService.getMonthName(month)
      : undefined;

    // Delegate to AccessibilityManagerService
    return this._accessibilityManagerService.getAccessibleDateLabel(
      date,
      getLocalizedMonthName
    );
  }
  /**
   * Check if a date is today
   * @param date Date to check
   * @returns Boolean indicating if date is today
   */
  public isToday(date: Date): boolean {
    // Directly delegate to the CalendarService
    return this._calendarService.isToday(date);
  }
  /**
   * Get date state description for screen readers
   * @param date Date to get state for
   * @returns State description string
   */
  public getDateStateDescription(date: Date): string {
    // Delegate to AccessibilityManagerService with current state information
    return this._accessibilityManagerService.getDateStateDescription(
      date,
      this._selectedDate,
      this._selectedDateRange,
      this._isRangeSelection,
      this._constraintsService.isDateDisabled.bind(
        this._constraintsService,
        date,
        this._minDate,
        this._maxDate,
        this._disabledDates
      ),
      this._calendarService.isToday.bind(this._calendarService)
    );
  }
  /**
   * Generate a complete month view with proper structure for rendering
   * @returns Full month view structure
   */
  public generateMonthView(): {
    month: number;
    year: number;
    weeks: { days: CalendarDate[]; weekNumber?: number }[];
    weekdays: string[];
  } {
    const year = this._currentDate.getFullYear();
    const month = this._currentDate.getMonth();
    const showWeekNumbers = this._configurationService.getShowWeekNumbers();

    // Get options from configuration
    const options: CalendarGenerationOptions = {
      selectedDate: this._selectedDate,
      selectedDateRange: this._selectedDateRange,
      focusedDate: this._focusedDate,
      firstDayOfWeek: this._firstDayOfWeek,
      minDate: this._minDate,
      maxDate: this._maxDate,
      disabledDates: this._disabledDates,
      isRangeSelection: this._isRangeSelection,
      isDateDisabledFn: (date: Date) =>
        this._constraintsService.isDateDisabled(
          date,
          this._minDate,
          this._maxDate,
          this._disabledDates
        ),
      hideOtherMonthDays: this._hideOtherMonthDays,
      weekNumbers: showWeekNumbers,
      fullWeekdays: true,
      locale: this._localizationService?.getLocale(),
    };

    // Delegate to CalendarGeneratorService
    return this._calendarGeneratorService.generateMonthView(
      year,
      month,
      options
    );
  }
  /**
   * Get the ISO week number for a given date
   * @param date The date to get week number for
   * @returns Week number (1-53)
   */
  public getWeekNumber(date: Date): number {
    if (!date) return 1;

    // Delegate to the CalendarService
    return this._calendarService.getWeekNumber(date);
  }

  /**
   * Gets the selected date range - provides compatibility with both naming conventions (start/end and startDate/endDate)
   */
  public get selectedDateRange(): {
    start: Date | null;
    end: Date | null;
    startDate: Date | null;
    endDate: Date | null;
  } {
    return {
      start: this._selectedDateRange.startDate,
      end: this._selectedDateRange.endDate,
      startDate: this._selectedDateRange.startDate,
      endDate: this._selectedDateRange.endDate,
    };
  }

  /**
   * Sets the selected date range - provides compatibility with both naming conventions
   */
  public set selectedDateRange(value: {
    start?: Date | null;
    end?: Date | null;
    startDate?: Date | null;
    endDate?: Date | null;
  }) {
    this._selectedDateRange = {
      startDate: value.startDate || value.start || null,
      endDate: value.endDate || value.end || null,
    };
  }

  private updateBindings(): void {
    if (this.bindings.selectedDate) {
      this.bindings.selectedDate.set(this._selectedDate);
    }
    if (this.bindings.selectedDateRange) {
      this.bindings.selectedDateRange.set(this._selectedDateRange);
    }
    if (this.bindings.focusedDate) {
      this.bindings.focusedDate.set(this._focusedDate);
    }
    if (this.bindings.calendarDays) {
      this.bindings.calendarDays.set(this.generateCalendarDays());
    }
  }
}

/**
 * CalendarController - Factory function that creates and returns a new CalendarControllerClass instance.
 *
 * @param options Optional calendar configuration options
 * @returns A CalendarControllerClass instance
 */
export const CalendarController = (
  options?: CalendarOptions
): CalendarControllerClass => {
  return new CalendarControllerClass(options);
};
