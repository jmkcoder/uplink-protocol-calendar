import { Binding, ControllerAdapter, EventEmitter, TypedController } from "@uplink-protocol/core";
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
  ILocalizationService
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
  LocalizationService
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
  _currentYearRangeBase: number = 0; // Base year for current year range view
  _locale: string = 'en-US'; // Default locale
  
  // Services
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

  /**
   * Constructor - initializes the controller with optional configuration
   * @param options Calendar configuration options
   */  constructor(options?: CalendarOptions) {    // Initialize services
    this._calendarService = new CalendarService();
    this._dateFormattingService = new DateFormattingService();
    this._dateSelectionService = new DateSelectionService();
    this._viewStateService = new ViewStateService();
    this._eventManagerService = new EventManagerService();
    this._navigationService = new NavigationService();
    this._constraintsService = new ConstraintsService();
    this._calendarGeneratorService = new CalendarGeneratorService();
    this._configurationService = new ConfigurationService(this._constraintsService, this._dateFormattingService);
    
    // Initialize with options using ConfigurationService
    if (options) {
      // Initialize locale before applying other configurations
      if (options.locale) {
        this._locale = options.locale;
      }
      
      // Initialize localization service with the locale
      this._localizationService = new LocalizationService(this._locale);
      
      // Link the localization service to other services
      this._calendarService.setLocalizationService(this._localizationService);
      this._dateFormattingService.setLocalizationService(this._localizationService);
      
      // Set date format options if provided
      if (options.dateFormatOptions) {
        this._dateFormatOptions = options.dateFormatOptions;
        this._dateFormattingService.setDateFormatOptions(options.dateFormatOptions);
      }
      
      const config = this._configurationService.applyConfiguration(options);
      
      this._minDate = config.minDate;
      this._maxDate = config.maxDate;
      this._disabledDates = config.disabledDates;
      this._selectedDate = config.selectedDate;
      this._firstDayOfWeek = config.firstDayOfWeek;
      this._dateFormat = config.dateFormat;
      this._hideOtherMonthDays = config.hideOtherMonthDays;
    } else {
      // Initialize localization service with default locale
      this._localizationService = new LocalizationService(this._locale);
      
      // Link the localization service to other services
      this._calendarService.setLocalizationService(this._localizationService);
      this._dateFormattingService.setLocalizationService(this._localizationService);
    }// Set up bindings using ViewStateService
    this.bindings = this._viewStateService.initializeBindings(
      this._currentDate, 
      this._selectedDate, 
      this._selectedDateRange, 
      this._firstDayOfWeek, 
      this._isRangeSelection,      () => this.generateCalendarDays()
    );
    
    // Set month name and weekdays after initialization
    this.bindings.monthName.set(this._calendarService.getMonthName(this._currentDate.getMonth()));
    this.bindings.weekdays.set(this._calendarService.getWeekdayNames(this._firstDayOfWeek));
    
    // Initialize month and year views
    this.bindings.calendarMonths.set(this.generateCalendarMonths());
    this.bindings.calendarYears.set(this.generateCalendarYears());

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
      hideOtherMonthDays: this._hideOtherMonthDays
    };
    
    return this._calendarGeneratorService.generateCalendarDays(year, month, options);
  }
  /**
   * Generate calendar months for year view
   * @returns Array of CalendarMonth objects
   */
  private generateCalendarMonths(): CalendarMonth[] {
    const year = this._currentDate.getFullYear();
    
    const options: MonthViewGenerationOptions = {
      selectedDate: this._selectedDate,
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
      }
    };
    
    return this._calendarGeneratorService.generateCalendarMonths(year, options);
  }

  /**
   * Generate calendar years for year range view
   * @returns Array of CalendarYear objects
   */
  private generateCalendarYears(): CalendarYear[] {
    const baseYear = this._currentYearRangeBase || 
                    (this._currentDate.getFullYear() - (this._currentDate.getFullYear() % this._yearRangeSize));
    
    // If base year was not explicitly set, update the current range base
    if (!this._currentYearRangeBase) {
      this._currentYearRangeBase = baseYear;
    }
    
    const options: YearViewGenerationOptions = {
      selectedDate: this._selectedDate,
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
      }
    };
    
    return this._calendarGeneratorService.generateCalendarYears(baseYear, this._yearRangeSize, options);
  }
  /**
   * Check if a date should be disabled using ConstraintsService
   * @param date Date to check
   * @returns Boolean indicating if the date is disabled
   */
  public isDateDisabled(date: Date): boolean {
    return this._constraintsService.isDateDisabled(
      date,
      this._minDate,
      this._maxDate,
      this._disabledDates
    );
  }
  /**
   * Select a date
   * @param year Year
   * @param month Month (0-11)
   * @param day Day of month
   */
  public selectDate(year: number, month: number, day: number): void {
    const date = new Date(year, month, day);
    
    // Check if date is disabled
    if (this.isDateDisabled(date)) {
      return;
    }

    if (this._isRangeSelection) {
      // Use DateSelectionService to handle date range selection
      this._selectedDateRange = this._dateSelectionService.selectDateRange(date, this._selectedDateRange);
      
      // Use ViewStateService to update bindings
      this._viewStateService.updateDateRange(
        this._selectedDateRange,
        this.bindings.selectedDateRange,
        this.bindings.calendarDays,
        () => this.generateCalendarDays()
      );
      
      // Use EventManagerService to emit events
      if (this._selectedDateRange.endDate && this.events) {
        this._eventManagerService.emitDateRangeSelected(
          this.events.dateRangeSelected, 
          this._selectedDateRange
        );
      }
    } else {
      // Use DateSelectionService to handle single date selection
      this._selectedDate = this._dateSelectionService.selectDate(date);
      
      // Use ViewStateService to update bindings
      this._viewStateService.updateSelectedDate(
        this._selectedDate,
        this.bindings.selectedDate,
        this.bindings.calendarDays,
        () => this.generateCalendarDays()
      );
      
      // Use EventManagerService to emit events
      if (this._selectedDate && this.events) {
        this._eventManagerService.emitDateSelected(
          this.events.dateSelected, 
          this._selectedDate
        );
      }
    }
  }  /**
   * Navigate to next month using NavigationService
   */
  public nextMonth(): void {
    this._currentDate = this._navigationService.navigateToNextMonth(this._currentDate);
    this.updateCurrentDate(this._currentDate);
  }

  /**
   * Navigate to previous month using NavigationService
   */
  public prevMonth(): void {
    this._currentDate = this._navigationService.navigateToPreviousMonth(this._currentDate);
    this.updateCurrentDate(this._currentDate);
  }

  /**
   * Navigate to next year using NavigationService
   */
  public nextYear(): void {
    this._currentDate = this._navigationService.navigateToNextYear(this._currentDate);
    this.updateCurrentDate(this._currentDate);
  }

  /**
   * Navigate to previous year using NavigationService
   */
  public prevYear(): void {
    this._currentDate = this._navigationService.navigateToPreviousYear(this._currentDate);
    this.updateCurrentDate(this._currentDate);
  }
  /**
   * Go to a specific month using NavigationService
   * @param month Month (0-11)
   */
  public goToMonth(month: number): void {
    this._currentDate = this._navigationService.navigateToMonth(this._currentDate, month);
    this.updateCurrentDate(this._currentDate);
  }

  /**
   * Go to a specific year using NavigationService
   * @param year Year
   */  
  public goToYear(year: number): void {
    this._currentDate = this._navigationService.navigateToYear(this._currentDate, year);
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
          endYear: this._currentYearRangeBase + this._yearRangeSize - 1 
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
          endYear: this._currentYearRangeBase + this._yearRangeSize - 1 
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
          endYear: this._currentYearRangeBase + this._yearRangeSize - 1 
        }
      );
    }
  }  /**
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
        calendarDays: this.bindings.calendarDays
      },
      (month: number) => this._calendarService.getMonthName(month),
      () => this.generateCalendarDays()
    );
    
    // Update month and year views
    this.updateViewBindings();
    
    // Emit events
    if (this.events) {
      this._eventManagerService.emitMonthChanged(this.events.monthChanged, month);
      this._eventManagerService.emitYearChanged(this.events.yearChanged, year);
      this._eventManagerService.emitViewChanged(this.events.viewChanged, { month, year });
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
    this._isRangeSelection = isRange;
    
    // Use ViewStateService to update selection mode
    this._viewStateService.updateSelectionMode(
      isRange,
      this.bindings.isRangeSelection,
      this.bindings.calendarDays,
      () => this.generateCalendarDays()
    );
    
    // Clear any existing selection when switching modes
    this.clearSelection();
  }
  /**
   * Clear the current selection using DateSelectionService
   */
  public clearSelection(): void {
    // Use DateSelectionService to handle clearing selection
    const result = this._dateSelectionService.clearSelection(this._isRangeSelection);
    this._selectedDate = result.selectedDate;
    this._selectedDateRange = result.selectedDateRange;
    
    // Use ViewStateService to update bindings for single date selection
    this._viewStateService.updateSelectedDate(
      this._selectedDate,
      this.bindings.selectedDate,
      this.bindings.calendarDays,
      () => this.generateCalendarDays()
    );
    
    // Use ViewStateService to update bindings for range selection
    this._viewStateService.updateDateRange(
      this._selectedDateRange,
      this.bindings.selectedDateRange,
      this.bindings.calendarDays,
      () => this.generateCalendarDays()
    );
  }
  /**
   * Get formatted selected date using DateFormattingService
   * @returns Formatted date string or null
   */
  public getFormattedDate(): string | null {
    if (!this._selectedDate) return null;
    
    // If we have localization service and format options, use internationalized formatting
    if (this._localizationService && this._dateFormatOptions) {
      return this._localizationService.formatDate(this._selectedDate, this._dateFormatOptions);
    }
    
    // Otherwise use the traditional formatting
    return this._dateFormattingService.formatDate(this._selectedDate, this._dateFormat || undefined);
  }/**
   * Set minimum selectable date
   * @param date Minimum date
   */
  public setMinDate(date: Date | null): void {
    this._minDate = this._constraintsService.setMinDate(date);
    
    // Update calendar days to reflect new constraints
    this._viewStateService.updateCurrentDate(
      this._currentDate,
      {
        currentMonth: this.bindings.currentMonth,
        currentYear: this.bindings.currentYear,
        monthName: this.bindings.monthName,
        calendarDays: this.bindings.calendarDays
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
    this._maxDate = this._constraintsService.setMaxDate(date);
    
    // Update calendar days to reflect new constraints
    this._viewStateService.updateCurrentDate(
      this._currentDate,
      {
        currentMonth: this.bindings.currentMonth,
        currentYear: this.bindings.currentYear,
        monthName: this.bindings.monthName,
        calendarDays: this.bindings.calendarDays
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
    this._disabledDates = this._constraintsService.setDisabledDates(dates);
    
    // Update calendar days to reflect new constraints
    this._viewStateService.updateCurrentDate(
      this._currentDate,
      {
        currentMonth: this.bindings.currentMonth,
        currentYear: this.bindings.currentYear,
        monthName: this.bindings.monthName,
        calendarDays: this.bindings.calendarDays
      },
      (month: number) => this._calendarService.getMonthName(month),
      () => this.generateCalendarDays()
    );
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
    this.bindings.monthName.set(this._calendarService.getMonthName(this._currentDate.getMonth()));
    this.bindings.weekdays.set(this._calendarService.getWeekdayNames(this._firstDayOfWeek));
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
   * Get formatted date for display
   * @param date Date to format
   * @returns Formatted date string
   */
  public formatDate(date: Date): string {
    // If we have localization service and format options, use internationalized formatting
    if (this._localizationService && this._dateFormatOptions) {
      return this._localizationService.formatDate(date, this._dateFormatOptions);
    }
    
    // Otherwise use the traditional formatting
    return this._dateFormattingService.formatDate(date, this._dateFormat || undefined);
  }

  /**
   * Get information about the current year range
   * @returns Year range object with start and end years
   */
  public getCurrentYearRange(): YearRange {
    const baseYear = this._currentYearRangeBase || 
                    (this._currentDate.getFullYear() - (this._currentDate.getFullYear() % this._yearRangeSize));
    
    return {
      startYear: baseYear,
      endYear: baseYear + this._yearRangeSize - 1
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
    this._currentYearRangeBase = this._currentDate.getFullYear() - (this._currentDate.getFullYear() % this._yearRangeSize);
    
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
      this._eventManagerService.emitViewChanged(
        this.events.viewChanged, 
        { month, year }
      );
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
      this._eventManagerService.emitYearChanged(
        this.events.yearChanged, 
        year
      );
    }
    
    // Update month view since year changed
    if (this.bindings.calendarMonths) {
      this.bindings.calendarMonths.set(this.generateCalendarMonths());
    }
  }
}

/**
 * CalendarController - Factory function that creates and returns a new CalendarControllerClass instance.
 * 
 * @param options Optional calendar configuration options
 * @returns A CalendarControllerClass instance
 */
export const CalendarController = (options?: CalendarOptions): CalendarControllerClass => {
  return new CalendarControllerClass(options);
}
