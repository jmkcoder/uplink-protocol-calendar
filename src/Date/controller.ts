import {
  ControllerAdapter,
} from "@uplink-protocol/core";
import { ControllerMetadata } from "@uplink-protocol/core/dist/uplink/interfaces/metadata/controller-metadata.interface";
import {
  CalendarDate,
  CalendarMonth,
  CalendarYear,
  CalendarOptions,
  DateRange,
  YearRange,
  ICalendarService,
  IDateFormattingService,
  IDateSelectionService,
  IViewStateService,
  IEventManagerService,
  INavigationService,
  IConstraintsService,
  ICalendarGeneratorService,
  ILocalizationService,
  IAccessibilityService,
  IAccessibilityManagerService,
  ICalendarStateService,
} from "./interfaces";
import {
  TypedCalendarController,
  CalendarControllerBindings,
  CalendarControllerMethods,
  CalendarControllerEvents
} from "./types";
import {
  CalendarService,
  DateFormattingService,
  DateSelectionService,
  ViewStateService,
  EventManagerService,
  NavigationService,
  ConstraintsService,
  CalendarGeneratorService,
  LocalizationService,
  AccessibilityService,
  AccessibilityManagerService,
  CalendarStateService,
} from "./services";
import {
  CalendarStateManager,
  BindingsCoordinator,
  NavigationCoordinator,
  SelectionCoordinator,
  ConstraintsCoordinator,
  FocusCoordinator,
  FormattingCoordinator,
  UtilityCoordinator,
  ControllerInitializer,
  ViewGenerationCoordinator,
  LocalizationCoordinator,
  ConfigurationCoordinator,
} from "./coordinators";

/**
 * CalendarControllerClass - Pure Orchestrator
 * 
 * This controller is a thin orchestration layer that delegates ALL logic
 * to specialized coordinators. It contains NO business logic itself.
 * 
 * Architecture:
 * - Services: Low-level operations (date manipulation, formatting, etc.)
 * - Coordinators: Business logic and state management
 * - Controller: Public API facade and delegation
 */
export interface CalendarControllerInterface extends TypedCalendarController {
  _currentDate: Date;
  _selectedDate: Date | null;
  _selectedDateRange: DateRange;
  _focusedDate: Date | null;
  _minDate: Date | null;
  _maxDate: Date | null;
  _disabledDates: Date[];
  _disabledDaysOfWeek: number[];
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
  bindings!: CalendarControllerBindings;
  methods!: CalendarControllerMethods;
  events!: CalendarControllerEvents;
  meta?: ControllerMetadata;
  __adapter?: ControllerAdapter;
  options?: CalendarOptions;

  // State property accessors (delegated to StateManager)
  get _currentDate(): Date { return this.stateManager.currentDate; }
  set _currentDate(value: Date) { this.stateManager.currentDate = value; }
  
  get _selectedDate(): Date | null { return this.stateManager.selectedDate; }
  set _selectedDate(value: Date | null) { this.stateManager.selectedDate = value; }
  
  get _selectedDateRange(): DateRange { return this.stateManager.selectedDateRange; }
  set _selectedDateRange(value: DateRange) { this.stateManager.selectedDateRange = value; }
  
  get _focusedDate(): Date | null { return this.stateManager.focusedDate; }
  set _focusedDate(value: Date | null) { this.stateManager.focusedDate = value; }
  
  get _minDate(): Date | null { return this.stateManager.minDate; }
  set _minDate(value: Date | null) { this.stateManager.minDate = value; }
  
  get _maxDate(): Date | null { return this.stateManager.maxDate; }
  set _maxDate(value: Date | null) { this.stateManager.maxDate = value; }
  
  get _disabledDates(): Date[] { return this.stateManager.disabledDates; }
  set _disabledDates(value: Date[]) { this.stateManager.disabledDates = value; }
  
  get _disabledDaysOfWeek(): number[] { return this.stateManager.disabledDaysOfWeek; }
  set _disabledDaysOfWeek(value: number[]) { this.stateManager.disabledDaysOfWeek = value; }
  
  get _firstDayOfWeek(): number { return this.stateManager.firstDayOfWeek; }
  set _firstDayOfWeek(value: number) { this.stateManager.firstDayOfWeek = value; }
  
  get _dateFormat(): string | null { return this.stateManager.dateFormat; }
  set _dateFormat(value: string | null) { this.stateManager.dateFormat = value; }
  
  get _isRangeSelection(): boolean { return this.stateManager.isRangeSelection; }
  set _isRangeSelection(value: boolean) { this.stateManager.isRangeSelection = value; }
  
  get _hideOtherMonthDays(): boolean { return this.stateManager.hideOtherMonthDays; }
  set _hideOtherMonthDays(value: boolean) { this.stateManager.hideOtherMonthDays = value; }
  
  get _locale(): string { return this.stateManager.locale; }
  set _locale(value: string) { this.stateManager.locale = value; }
  
  get _dateFormatOptions(): Intl.DateTimeFormatOptions | null { return this.stateManager.dateFormatOptions; }
  set _dateFormatOptions(value: Intl.DateTimeFormatOptions | null) { this.stateManager.dateFormatOptions = value; }
  
  get _yearRangeSize(): number { return this.stateManager.yearRangeSize; }
  set _yearRangeSize(value: number) { this.stateManager.yearRangeSize = value; }

  get _currentYearRangeBase(): number { return this.stateManager.currentYearRangeBase; }
  set _currentYearRangeBase(value: number) { this.stateManager.currentYearRangeBase = value; }

  // TypedCalendarController requires selectedDateRange with specific structure
  get selectedDateRange(): { start: Date | null; end: Date | null; startDate: Date | null; endDate: Date | null } {
    const range = this.stateManager.selectedDateRange;
    return {
      start: range.startDate,
      end: range.endDate,
      startDate: range.startDate,
      endDate: range.endDate
    };
  }
  set selectedDateRange(value: { start?: Date | null; end?: Date | null; startDate?: Date | null; endDate?: Date | null }) {
    this.stateManager.selectedDateRange = {
      startDate: value.startDate || value.start || null,
      endDate: value.endDate || value.end || null
    };
  }

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
  private _accessibilityService: IAccessibilityService;
  private _accessibilityManagerService: IAccessibilityManagerService;
  private _calendarStateService: ICalendarStateService;

  // Coordinators
  private stateManager: CalendarStateManager;
  private bindingsCoordinator: BindingsCoordinator;
  private navigationCoordinator: NavigationCoordinator;
  private selectionCoordinator: SelectionCoordinator;
  private constraintsCoordinator: ConstraintsCoordinator;
  private focusCoordinator: FocusCoordinator;
  private formattingCoordinator: FormattingCoordinator;
  private utilityCoordinator: UtilityCoordinator;
  private controllerInitializer: ControllerInitializer;
  private viewGenerationCoordinator: ViewGenerationCoordinator;
  private localizationCoordinator: LocalizationCoordinator;
  private configurationCoordinator: ConfigurationCoordinator;

  constructor(options?: CalendarOptions) {
    // Initialize services
    this._calendarService = new CalendarService();
    this._dateFormattingService = new DateFormattingService();
    this._dateSelectionService = new DateSelectionService();
    this._viewStateService = new ViewStateService();
    this._eventManagerService = new EventManagerService();
    this._navigationService = new NavigationService();
    this._constraintsService = new ConstraintsService();
    this._calendarGeneratorService = new CalendarGeneratorService();
    this._localizationService = new LocalizationService();
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
    
    // Connect services
    this._calendarService.setLocalizationService(this._localizationService);
    this._dateFormattingService.setLocalizationService(this._localizationService);
    
    // Initialize coordinators
    this.stateManager = new CalendarStateManager();
    this.bindingsCoordinator = new BindingsCoordinator();
    this.navigationCoordinator = new NavigationCoordinator(
      this._navigationService,
      this.stateManager,
      this.bindingsCoordinator
    );
    this.selectionCoordinator = new SelectionCoordinator(
      this.stateManager,
      this.bindingsCoordinator,
      this._calendarStateService
    );
    // Set navigation coordinator reference to avoid circular dependency
    this.selectionCoordinator.setNavigationCoordinator(this.navigationCoordinator);
    this.constraintsCoordinator = new ConstraintsCoordinator(
      this.stateManager,
      this.bindingsCoordinator,
      this._constraintsService,
      this._calendarStateService
    );
    this.focusCoordinator = new FocusCoordinator(
      this.stateManager,
      this._accessibilityManagerService
    );
    this.formattingCoordinator = new FormattingCoordinator(
      this.stateManager,
      this._dateFormattingService,
      this._localizationService
    );
    this.utilityCoordinator = new UtilityCoordinator(
      this.stateManager,
      this._constraintsService,
      this._accessibilityService,
      this._calendarService
    );
    this.viewGenerationCoordinator = new ViewGenerationCoordinator(
      this._calendarGeneratorService,
      () => ({
        currentDate: this._currentDate,
        selectedDate: this._selectedDate,
        selectedDateRange: this._selectedDateRange,
        focusedDate: this._focusedDate,
        firstDayOfWeek: this._firstDayOfWeek,
        minDate: this._minDate,
        maxDate: this._maxDate,
        disabledDates: this._disabledDates,
        disabledDaysOfWeek: this._disabledDaysOfWeek,
        isRangeSelection: this._isRangeSelection,
        hideOtherMonthDays: this._hideOtherMonthDays,
        currentYearRangeBase: this._currentYearRangeBase,
        yearRangeSize: this._yearRangeSize,
      }),
      (date: Date) => this.isDateDisabled(date)
    );
    this.localizationCoordinator = new LocalizationCoordinator(
      this.stateManager,
      this.bindingsCoordinator,
      this._localizationService,
      this._dateFormattingService
    );
    this.configurationCoordinator = new ConfigurationCoordinator(
      this.stateManager,
      this.constraintsCoordinator,
      this.localizationCoordinator,
      this._calendarService
    );
    this.controllerInitializer = new ControllerInitializer();

    // Initialize controller metadata
    this.controllerInitializer.initializeMetadata(this);

    // Initialize bindings and events through services
    this.bindings = this.controllerInitializer.initializeBindings(
      this.stateManager,
      this._viewStateService,
      () => this.generateCalendarDays(),
      () => this.generateCalendarMonths(),
      () => this.generateCalendarYears()
    );
    this.events = this.controllerInitializer.initializeEvents(this._eventManagerService);

    // Initialize methods interface for backward compatibility
    this.methods = {
      // Selection methods
      selectDate: this.selectDate.bind(this),
      selectMonth: this.selectMonth.bind(this),
      selectYear: this.selectYear.bind(this),
      clearSelection: this.clearSelection.bind(this),
      setRangeSelectionMode: this.setRangeSelectionMode.bind(this),
      
      // Navigation methods
      goToNextMonth: this.goToNextMonth.bind(this),
      goToPreviousMonth: this.goToPreviousMonth.bind(this),
      goToNextYear: this.goToNextYear.bind(this),
      goToPreviousYear: this.goToPreviousYear.bind(this),
      goToMonth: this.goToMonth.bind(this),
      goToYear: this.goToYear.bind(this),
      goToDate: this.goToDate.bind(this),
      goToToday: this.goToToday.bind(this),
      goToNextYearRange: this.goToNextYearRange.bind(this),
      goToPreviousYearRange: this.goToPreviousYearRange.bind(this),
      
      // Focus methods
      focusDate: this.focusDate.bind(this),
      setFocusedDate: this.setFocusedDate.bind(this),
      clearFocusedDate: this.clearFocusedDate.bind(this),
      selectFocusedDate: this.selectFocusedDate.bind(this),
      moveFocusRight: this.moveFocusRight.bind(this),
      moveFocusLeft: this.moveFocusLeft.bind(this),
      moveFocusUp: this.moveFocusUp.bind(this),
      moveFocusDown: this.moveFocusDown.bind(this),
      moveFocusToStartOfMonth: this.moveFocusToStartOfMonth.bind(this),
      moveFocusToEndOfMonth: this.moveFocusToEndOfMonth.bind(this),
      moveFocusToPreviousMonth: this.moveFocusToPreviousMonth.bind(this),
      moveFocusToNextMonth: this.moveFocusToNextMonth.bind(this),
      moveFocusToPreviousYear: this.moveFocusToPreviousYear.bind(this),
      moveFocusToNextYear: this.moveFocusToNextYear.bind(this),
      
      // Constraints methods
      setMinDate: this.setMinDate.bind(this),
      setMaxDate: this.setMaxDate.bind(this),
      setDisabledDates: this.setDisabledDates.bind(this),
      addDisabledDate: this.addDisabledDate.bind(this),
      removeDisabledDate: this.removeDisabledDate.bind(this),
      getDisabledDates: this.getDisabledDates.bind(this),
      setDisabledDaysOfWeek: this.setDisabledDaysOfWeek.bind(this),
      addDisabledDayOfWeek: this.addDisabledDayOfWeek.bind(this),
      removeDisabledDayOfWeek: this.removeDisabledDayOfWeek.bind(this),
      getDisabledDaysOfWeek: this.getDisabledDaysOfWeek.bind(this),
      
      // Localization methods
      setLocale: this.setLocale.bind(this),
      getLocale: this.getLocale.bind(this),
      setDateFormat: this.setDateFormat.bind(this),
      setDateFormatOptions: this.setDateFormatOptions.bind(this),
      getDateFormatOptions: this.getDateFormatOptions.bind(this),
      getFormattedDate: this.getFormattedDate.bind(this),
      setFirstDayOfWeek: this.setFirstDayOfWeek.bind(this),
      setHideOtherMonthDays: this.setHideOtherMonthDays.bind(this),
      formatDate: this.formatDate.bind(this),
      getMonthNames: this.getMonthNames.bind(this),
      getWeekdayNames: this.getWeekdayNames.bind(this) as any,
      
      // Year range methods
      getCurrentYearRange: this.getCurrentYearRange.bind(this),
      setCurrentYearRange: this.setCurrentYearRange.bind(this),
      setYearRangeSize: this.setYearRangeSize.bind(this),
      
      // View generation methods
      generateMonthView: this.generateMonthView.bind(this),
      generateCalendarDays: this.generateCalendarDays.bind(this),
      generateCalendarMonths: this.generateCalendarMonths.bind(this),
      generateCalendarYears: this.generateCalendarYears.bind(this),
      getWeekNumber: this.getWeekNumber.bind(this),
      
      // Accessibility
      getAccessibleDateLabel: this.getAccessibleDateLabel.bind(this),
      getDateStateDescription: this.getDateStateDescription.bind(this),
      
      // Helper methods
      isDateDisabled: this.isDateDisabled.bind(this),
      isDateSelected: this.isDateSelected.bind(this),
      isDateInRange: this.isDateInRange.bind(this),
      isToday: this.isToday.bind(this),
      hasEvents: this.hasEvents.bind(this)
    };

    // Apply options if provided
    if (options) {
      this.options = options;
      this.configurationCoordinator.applyOptions(options, this.bindings, this.getGetters());
    }

    // Initial binding updates
    this.bindingsCoordinator.updateAllBindings(this.bindings, this.getGetters());
  }

  // =============================================================================
  // VIEW GENERATION (Delegated to ViewGenerationCoordinator)
  // =============================================================================

  public generateCalendarDays(): CalendarDate[] {
    return this.viewGenerationCoordinator.generateCalendarDays(
      this._currentDate,
      this._selectedDate,
      this._selectedDateRange,
      this._focusedDate,
      this._firstDayOfWeek,
      this._minDate,
      this._maxDate,
      this._disabledDates,
      this._disabledDaysOfWeek,
      this._isRangeSelection,
      this._hideOtherMonthDays,
      (date: Date) => this.isDateDisabled(date)
    );
  }

  public generateCalendarMonths(): CalendarMonth[] {
    return this.viewGenerationCoordinator.generateCalendarMonths(
      this._currentDate,
      this._selectedDate,
      this._selectedDateRange,
      this._isRangeSelection,
      this._minDate,
      this._maxDate
    );
  }

  public generateCalendarYears(): CalendarYear[] {
    return this.viewGenerationCoordinator.generateCalendarYears(
      this._currentDate,
      this._currentYearRangeBase,
      this._yearRangeSize,
      this._selectedDate,
      this._selectedDateRange,
      this._isRangeSelection,
      this._minDate,
      this._maxDate
    );
  }

  public getWeekNumber(date: Date): number {
    return this.viewGenerationCoordinator.getWeekNumber(date);
  }

  // =============================================================================
  // UTILITY (Delegated to UtilityCoordinator)
  // =============================================================================

  public isDateDisabled(date: Date): boolean {
    return this.utilityCoordinator.isDateDisabled(date);
  }

  public isDateSelected(date: Date): boolean {
    if (this._isRangeSelection) {
      return this.utilityCoordinator.isDateInRange(
        date,
        this._selectedDateRange.startDate,
        this._selectedDateRange.endDate
      );
    }
    return this._selectedDate ? this.utilityCoordinator.isSameDay(date, this._selectedDate) : false;
  }

  public isDateInRange(date: Date): boolean {
    if (!this._isRangeSelection || !this._selectedDateRange.startDate || !this._selectedDateRange.endDate) {
      return false;
    }
    return this.utilityCoordinator.isDateInRange(
      date,
      this._selectedDateRange.startDate,
      this._selectedDateRange.endDate
    );
  }

  public isToday(date: Date): boolean {
    return this.utilityCoordinator.isSameDay(date, new Date());
  }

  public hasEvents(_date: Date): boolean {
    // This would check if the date has any events
    // For now, return false as we don't have event integration in the controller
    return false;
  }

  public isSameDay(date1: Date, date2: Date): boolean {
    return this.utilityCoordinator.isSameDay(date1, date2);
  }

  public isSameMonth(date1: Date, date2: Date): boolean {
    return this.utilityCoordinator.isSameMonth(date1, date2);
  }

  public isSameYear(date1: Date, date2: Date): boolean {
    return this.utilityCoordinator.isSameYear(date1, date2);
  }

  public getDayOfWeek(date: Date): number {
    return this.utilityCoordinator.getDayOfWeek(date);
  }

  public getDaysInMonth(year: number, month: number): number {
    return this.utilityCoordinator.getDaysInMonth(year, month);
  }

  // =============================================================================
  // SELECTION (Delegated to SelectionCoordinator)
  // =============================================================================

  public selectDate(yearOrDate: number | Date, month?: number, day?: number): void {
    this.selectionCoordinator.selectDate(
      yearOrDate,
      month,
      day,
      this.bindings,
      this.events,
      this.getGetters(),
      (date: Date) => this.isDateDisabled(date),
      this._eventManagerService
    );
  }

  public selectMonth(month: number, year: number): void {
    this.selectionCoordinator.selectMonth(
      month,
      year,
      this.bindings,
      this.events,
      this.getGetters(),
      this._calendarService,
      this._eventManagerService
    );
  }

  public selectYear(year: number): void {
    this.selectionCoordinator.selectYear(
      year,
      this.bindings,
      this.events,
      this.getGetters(),
      this._navigationService,
      this._eventManagerService
    );
  }

  public clearSelection(): void {
    this.selectionCoordinator.clearSelection(
      this.bindings,
      this.getGetters()
    );
  }

  public setRangeSelectionMode(isRange: boolean): void {
    this.configurationCoordinator.setRangeSelectionMode(isRange);
  }

  // =============================================================================
  // NAVIGATION (Delegated to NavigationCoordinator)
  // =============================================================================

  public goToMonth(month: number, year: number): void {
    this.navigationCoordinator.goToMonth(
      month,
      year,
      this.bindings,
      this.events,
      this.getGetters(),
      this._calendarService,
      this._eventManagerService
    );
  }

  public goToYear(year: number): void {
    this.navigationCoordinator.goToYear(
      year,
      this.bindings,
      this.events,
      this.getGetters(),
      this._calendarService,
      this._eventManagerService
    );
  }

  public goToDate(date: Date): void {
    this.navigationCoordinator.goToDate(
      date,
      this._minDate,
      this._maxDate,
      this.bindings,
      this.events,
      this.getGetters(),
      this._calendarService,
      this._eventManagerService
    );
  }

  private updateCurrentDate(date: Date): void {
    this._currentDate = new Date(date);
    this.navigationCoordinator.goToDate(
      date,
      this._minDate,
      this._maxDate,
      this.bindings,
      this.events,
      this.getGetters(),
      this._calendarService,
      this._eventManagerService
    );
  }

  public goToNextMonth(): void {
    this.navigationCoordinator.goToNextMonth(
      this.bindings,
      this.events,
      this.getGetters(),
      this._calendarService,
      this._eventManagerService
    );
  }

  // Alias for backward compatibility
  public nextMonth(): void {
    this.goToNextMonth();
  }

  public goToPreviousMonth(): void {
    this.navigationCoordinator.goToPreviousMonth(
      this.bindings,
      this.events,
      this.getGetters(),
      this._calendarService,
      this._eventManagerService
    );
  }

  // Alias for backward compatibility
  public previousMonth(): void {
    this.goToPreviousMonth();
  }

  public prevMonth(): void {
    this.goToPreviousMonth();
  }

  public goToNextYear(): void {
    this.navigationCoordinator.goToNextYear(
      this.bindings,
      this.events,
      this.getGetters(),
      this._calendarService,
      this._eventManagerService
    );
  }

  public nextYear(): void {
    this.goToNextYear();
  }

  public goToPreviousYear(): void {
    this.navigationCoordinator.goToPreviousYear(
      this.bindings,
      this.events,
      this.getGetters(),
      this._calendarService,
      this._eventManagerService
    );
  }

  public prevYear(): void {
    this.goToPreviousYear();
  }

  public goToToday(): void {
    this.navigationCoordinator.goToToday(
      this.bindings,
      this.events,
      this.getGetters(),
      this._calendarService,
      this._eventManagerService
    );
  }

  public goToNextYearRange(): void {
    this.navigationCoordinator.goToNextYearRange(
      this.bindings,
      this.events,
      this.getGetters(),
      this._eventManagerService
    );
  }
  public goToPreviousYearRange(): void {
    this.navigationCoordinator.goToPreviousYearRange(
      this.bindings,
      this.events,
      this.getGetters(),
      this._eventManagerService
    );
  }

  // =============================================================================
  // CONSTRAINTS (Delegated to ConstraintsCoordinator)
  // =============================================================================

  public setMinDate(date: Date | null): void {
    this.constraintsCoordinator.setMinDate(date, this.bindings, this.getGetters(), this._calendarService);
  }

  public setMaxDate(date: Date | null): void {
    this.constraintsCoordinator.setMaxDate(date, this.bindings, this.getGetters(), this._calendarService);
  }

  public setDisabledDates(dates: Date[]): void {
    this.constraintsCoordinator.setDisabledDates(dates, this.bindings, this.getGetters(), this._calendarService);
  }

  public addDisabledDate(date: Date): Date[] {
    return this.constraintsCoordinator.addDisabledDate(date, this.bindings, this.getGetters());
  }

  public removeDisabledDate(date: Date): Date[] {
    return this.constraintsCoordinator.removeDisabledDate(date, this.bindings, this.getGetters());
  }

  public getDisabledDates(): Date[] {
    return this.constraintsCoordinator.getDisabledDates();
  }

  public setDisabledDaysOfWeek(days: number[]): number[] {
    return this.constraintsCoordinator.setDisabledDaysOfWeek(days, this.bindings, this.getGetters());
  }

  public addDisabledDayOfWeek(day: number): number[] {
    return this.constraintsCoordinator.addDisabledDayOfWeek(day, this.bindings, this.getGetters());
  }

  public removeDisabledDayOfWeek(day: number): number[] {
    return this.constraintsCoordinator.removeDisabledDayOfWeek(day, this.bindings, this.getGetters());
  }

  public getDisabledDaysOfWeek(): number[] {
    return this.constraintsCoordinator.getDisabledDaysOfWeek();
  }

  // =============================================================================
  // LOCALIZATION (Delegated to LocalizationCoordinator)
  // =============================================================================

  public setLocale(locale: string): void {
    this.localizationCoordinator.setLocale(locale, this.bindings, this.getGetters());
  }

  public getLocale(): string {
    return this.localizationCoordinator.getLocale();
  }

  public setDateFormat(format: string | null): void {
    this.localizationCoordinator.setDateFormat(format, this.bindings, this.getGetters());
  }

  public getDateFormat(): string | null {
    return this.localizationCoordinator.getDateFormat();
  }

  public setDateFormatOptions(options: Intl.DateTimeFormatOptions | null): void {
    this.localizationCoordinator.setDateFormatOptions(options, this.bindings, this.getGetters());
  }

  public getDateFormatOptions(): Intl.DateTimeFormatOptions | null {
    return this.localizationCoordinator.getDateFormatOptions();
  }

  public setFirstDayOfWeek(day: number): void {
    this.localizationCoordinator.setFirstDayOfWeek(day, this.bindings, this.getGetters());
  }

  public getFirstDayOfWeek(): number {
    return this.localizationCoordinator.getFirstDayOfWeek();
  }

  public setHideOtherMonthDays(hide: boolean): void {
    this.localizationCoordinator.setHideOtherMonthDays(hide, this.bindings, this.getGetters());
  }

  public getHideOtherMonthDays(): boolean {
    return this.localizationCoordinator.getHideOtherMonthDays();
  }

  // =============================================================================
  // FORMATTING (Delegated to FormattingCoordinator)
  // =============================================================================

  public getFormattedDate(): string | null {
    return this.formattingCoordinator.getFormattedDate();
  }

  public formatDate(date: Date, format?: string | object, locale?: string): string {
    return this.formattingCoordinator.formatDate(date, format, locale);
  }

  public formatDateWithOptions(date: Date, options?: Intl.DateTimeFormatOptions, locale?: string): string {
    return this.formattingCoordinator.formatDateWithOptions(date, options, locale);
  }

  public getMonthName(month: number, format?: 'long' | 'short', locale?: string): string {
    return this.formattingCoordinator.getMonthName(month, format, locale);
  }

  public getDayName(dayOfWeek: number, format?: 'long' | 'short' | 'narrow', locale?: string): string {
    return this.formattingCoordinator.getDayName(dayOfWeek, format, locale);
  }

  public getDayNames(format?: 'long' | 'short' | 'narrow', locale?: string): string[] {
    return this.formattingCoordinator.getDayNames(format, locale);
  }

  public getWeekdayNames(format?: 'long' | 'short' | 'narrow', locale?: string): string[] {
    return this.formattingCoordinator.getDayNames(format, locale);
  }

  public getMonthNames(format?: 'long' | 'short', locale?: string): string[] {
    return this.formattingCoordinator.getMonthNames(format, locale);
  }

  // =============================================================================
  // FOCUS & ACCESSIBILITY (Delegated to FocusCoordinator)
  // =============================================================================

  public focusDate(date: Date): void {
    this.focusCoordinator.focusDate(date, this.bindings, (d) => this.updateCurrentDate(d));
  }

  public setFocusedDate(date: Date): void {
    this.focusCoordinator.setFocusedDate(date, this.bindings, (d) => this.updateCurrentDate(d));
  }

  public clearFocusedDate(): void {
    this.focusCoordinator.clearFocusedDate(this.bindings);
  }

  public selectFocusedDate(): void {
    this.focusCoordinator.selectFocusedDate(this.bindings, (date) => this.selectDate(date));
  }

  public getAccessibleDateLabel(date: Date): string {
    return this.focusCoordinator.getAccessibleDateLabel(date);
  }

  public getDateStateDescription(date: Date): string {
    return this.focusCoordinator.getDateStateDescription(
      date,
      this._selectedDate,
      this._selectedDateRange,
      this._isRangeSelection,
      (d) => this.isDateDisabled(d),
      (d) => this._calendarService.isToday(d)
    );
  }

  public moveFocusLeft(): void {
    this.focusCoordinator.moveFocusLeft(
      this.bindings,
      this.getGetters(),
      (date: Date) => this.updateCurrentDate(date)
    );
  }

  public moveFocusRight(): void {
    this.focusCoordinator.moveFocusRight(
      this.bindings,
      this.getGetters(),
      (date: Date) => this.updateCurrentDate(date)
    );
  }

  public moveFocusUp(): void {
    this.focusCoordinator.moveFocusUp(
      this.bindings,
      this.getGetters(),
      (date: Date) => this.updateCurrentDate(date)
    );
  }

  public moveFocusDown(): void {
    this.focusCoordinator.moveFocusDown(
      this.bindings,
      this.getGetters(),
      (date: Date) => this.updateCurrentDate(date)
    );
  }

  public moveFocusToStartOfWeek(): void {
    this.focusCoordinator.moveFocusToStartOfWeek(
      this.bindings,
      this.getGetters()
    );
  }

  public moveFocusToEndOfWeek(): void {
    this.focusCoordinator.moveFocusToEndOfWeek(
      this.bindings,
      this.getGetters()
    );
  }

  public moveFocusToStartOfMonth(): void {
    this.focusCoordinator.moveFocusToStartOfMonth(
      this.bindings,
      this.getGetters()
    );
  }

  public moveFocusToEndOfMonth(): void {
    this.focusCoordinator.moveFocusToEndOfMonth(
      this.bindings,
      this.getGetters()
    );
  }

  public moveFocusToNextMonth(): void {
    this.focusCoordinator.moveFocusToNextMonth(
      this.bindings,
      this.getGetters(),
      (date: Date) => this.updateCurrentDate(date)
    );
  }

  public moveFocusToPreviousMonth(): void {
    this.focusCoordinator.moveFocusToPreviousMonth(
      this.bindings,
      this.getGetters(),
      (date: Date) => this.updateCurrentDate(date)
    );
  }

  public moveFocusToNextYear(): void {
    this.focusCoordinator.moveFocusToNextYear(
      this.bindings,
      this.getGetters(),
      (date: Date) => this.updateCurrentDate(date)
    );
  }

  public moveFocusToPreviousYear(): void {
    this.focusCoordinator.moveFocusToPreviousYear(
      this.bindings,
      this.getGetters(),
      (date: Date) => this.updateCurrentDate(date)
    );
  }

  public getAriaLabel(date: Date): string {
    return this.focusCoordinator.getAriaLabel(date);
  }

  public getAriaLabelForMonth(month: number, year: number): string {
    return this.focusCoordinator.getAriaLabelForMonth(month, year);
  }

  public getAriaLabelForYear(year: number): string {
    return this.focusCoordinator.getAriaLabelForYear(year);
  }

  // =============================================================================
  // YEAR RANGE (Delegated to NavigationCoordinator)
  // =============================================================================

  public getCurrentYearRange(): YearRange {
    return this.navigationCoordinator.getCurrentYearRange();
  }

  public setCurrentYearRange(date: Date): void {
    this.navigationCoordinator.setCurrentYearRange(date, this.bindings, this.getGetters());
  }

  public setYearRangeSize(size: number): void {
    this.configurationCoordinator.setYearRangeSize(size);
  }

  public getYearRangeSize(): number {
    return this.configurationCoordinator.getYearRangeSize();
  }

  // =============================================================================
  // STATE GETTERS (Pure delegation - no logic)
  // =============================================================================

  public getCurrentDate(): Date {
    return this._currentDate;
  }

  public getSelectedDate(): Date | null {
    return this._selectedDate;
  }

  public getSelectedDateRange(): DateRange {
    return this._selectedDateRange;
  }

  public getFocusedDate(): Date | null {
    return this._focusedDate;
  }

  public getMinDate(): Date | null {
    return this._minDate;
  }

  public getMaxDate(): Date | null {
    return this._maxDate;
  }

  public getRangeSelectionMode(): boolean {
    return this._isRangeSelection;
  }

  // =============================================================================
  // VIEW GENERATION (Delegated to ViewGenerationCoordinator)
  // =============================================================================

  public generateMonthView(): {
    month: number;
    year: number;
    weeks: { days: CalendarDate[]; weekNumber?: number }[];
    weekdays: string[];
  } {
    return this.viewGenerationCoordinator.generateMonthView();
  }

  public generateYearView(): {
    months: CalendarMonth[];
    year: number;
  } {
    return this.viewGenerationCoordinator.generateYearView();
  }

  // =============================================================================
  // INTERNAL HELPERS (Pure orchestration)
  // =============================================================================

  private getGetters() {
    return {
      selectedDate: () => this._selectedDate,
      selectedDateRange: () => this._selectedDateRange,
      focusedDate: () => this._focusedDate,
      currentDate: () => this._currentDate,
      currentMonth: () => this._currentDate.getMonth(),
      currentYear: () => this._currentDate.getFullYear(),
      monthName: () => this.formattingCoordinator.getMonthName(
        this._currentDate.getMonth(),
        'long'
      ),
      calendarDays: () => this.generateCalendarDays(),
      calendarMonths: () => this.generateCalendarMonths(),
      calendarYears: () => this.generateCalendarYears(),
      weekdays: () => this.getDayNames('narrow', this._locale),
      isRangeSelection: () => this._isRangeSelection,
      currentYearRangeBase: () => this._currentYearRangeBase,
      formattedDate: () => this.getFormattedDate(),
      currentYearRange: () => this.getCurrentYearRange(),
      minDate: () => this._minDate,
      maxDate: () => this._maxDate,
      disabledDates: () => this._disabledDates,
      disabledDaysOfWeek: () => this._disabledDaysOfWeek,
      firstDayOfWeek: () => this._firstDayOfWeek,
      locale: () => this._locale,
      hideOtherMonthDays: () => this._hideOtherMonthDays,
      yearRangeSize: () => this._yearRangeSize,
    };
  }
}


