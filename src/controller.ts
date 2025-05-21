
import { Binding, ControllerAdapter, EventEmitter, TypedController } from "@uplink-protocol/core";
import { ControllerMetadata } from "@uplink-protocol/core/dist/uplink/interfaces/metadata/controller-metadata.interface";
import { 
  CalendarDate, 
  CalendarOptions, 
  DateRange,
  CalendarGenerationOptions, 
  ICalendarService,
  IDateFormattingService,
  IDateSelectionService,
  IViewStateService,
  IEventManagerService,
  INavigationService,
  IConstraintsService,
  ICalendarGeneratorService,
  IConfigurationService
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
  ConfigurationService
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
  _minDate: Date | null;
  _maxDate: Date | null;
  _disabledDates: Date[];
  _firstDayOfWeek: number;
  _dateFormat: string | null;
  _isRangeSelection: boolean;
  _hideOtherMonthDays: boolean;
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
  _minDate: Date | null = null;
  _maxDate: Date | null = null;
  _disabledDates: Date[] = [];
  _firstDayOfWeek: number = 0; // Sunday
  _dateFormat: string | null = null;
  _isRangeSelection: boolean = false;
  _hideOtherMonthDays: boolean = false; // Show other month days by default
  
  // Services
  private _calendarService: ICalendarService;
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
   */
  constructor(options?: CalendarOptions) {    // Initialize services
    this._calendarService = new CalendarService();
    this._dateFormattingService = new DateFormattingService();
    this._dateSelectionService = new DateSelectionService();
    this._viewStateService = new ViewStateService();
    this._eventManagerService = new EventManagerService();
    this._navigationService = new NavigationService();
    this._constraintsService = new ConstraintsService();
    this._calendarGeneratorService = new CalendarGeneratorService();
    this._configurationService = new ConfigurationService(this._constraintsService, this._dateFormattingService);      // Initialize with options using ConfigurationService
    if (options) {
      const config = this._configurationService.applyConfiguration(options);      this._minDate = config.minDate;
      this._maxDate = config.maxDate;
      this._disabledDates = config.disabledDates;
      this._selectedDate = config.selectedDate;
      this._firstDayOfWeek = config.firstDayOfWeek;
      this._dateFormat = config.dateFormat;
      this._hideOtherMonthDays = config.hideOtherMonthDays;
    }// Set up bindings using ViewStateService
    this.bindings = this._viewStateService.initializeBindings(
      this._currentDate, 
      this._selectedDate, 
      this._selectedDateRange, 
      this._firstDayOfWeek, 
      this._isRangeSelection,
      () => this.generateCalendarDays()
    );
    
    // Set month name and weekdays after initialization
    this.bindings.monthName.set(this._calendarService.getMonthName(this._currentDate.getMonth()));
    this.bindings.weekdays.set(this._calendarService.getWeekdayNames(this._firstDayOfWeek));

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
      setRangeSelectionMode: this.setRangeSelectionMode.bind(this),
      clearSelection: this.clearSelection.bind(this),
      isDateDisabled: this.isDateDisabled.bind(this),
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
    
    // Emit events
    if (this.events) {
      this._eventManagerService.emitMonthChanged(this.events.monthChanged, month);
      this._eventManagerService.emitYearChanged(this.events.yearChanged, year);
      this._eventManagerService.emitViewChanged(this.events.viewChanged, { month, year });
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
    return this._dateFormattingService.formatDate(this._selectedDate, this._dateFormat || undefined);
  }  /**
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