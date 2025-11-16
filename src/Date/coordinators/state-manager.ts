import { DateRange } from "../interfaces";

/**
 * CalendarStateManager - Centralized state management for the calendar controller
 * Manages all state variables with type-safe getters and setters
 */
export class CalendarStateManager {
  private _currentDate: Date = new Date();
  private _selectedDate: Date | null = null;
  private _selectedDateRange: DateRange = { startDate: null, endDate: null };
  private _focusedDate: Date | null = null;
  private _minDate: Date | null = null;
  private _maxDate: Date | null = null;
  private _disabledDates: Date[] = [];
  private _disabledDaysOfWeek: number[] = [];
  private _firstDayOfWeek: number = 0; // Sunday
  private _dateFormat: string | null = null;
  private _isRangeSelection: boolean = false;
  private _hideOtherMonthDays: boolean = false;
  private _locale: string = "en-US";
  private _dateFormatOptions: Intl.DateTimeFormatOptions | null = null;
  private _yearRangeSize: number = 12;
  private _currentYearRangeBase: number = 0;

  // Current Date
  get currentDate(): Date {
    return this._currentDate;
  }

  set currentDate(value: Date) {
    this._currentDate = value;
  }

  // Selected Date
  get selectedDate(): Date | null {
    return this._selectedDate;
  }

  set selectedDate(value: Date | null) {
    this._selectedDate = value;
  }

  // Selected Date Range
  get selectedDateRange(): DateRange {
    return this._selectedDateRange;
  }

  set selectedDateRange(value: DateRange) {
    this._selectedDateRange = value;
  }

  // Focused Date
  get focusedDate(): Date | null {
    return this._focusedDate;
  }

  set focusedDate(value: Date | null) {
    this._focusedDate = value;
  }

  // Min Date
  get minDate(): Date | null {
    return this._minDate;
  }

  set minDate(value: Date | null) {
    this._minDate = value;
  }

  // Max Date
  get maxDate(): Date | null {
    return this._maxDate;
  }

  set maxDate(value: Date | null) {
    this._maxDate = value;
  }

  // Disabled Dates
  get disabledDates(): Date[] {
    return this._disabledDates;
  }

  set disabledDates(value: Date[]) {
    this._disabledDates = value;
  }

  // Disabled Days of Week
  get disabledDaysOfWeek(): number[] {
    return this._disabledDaysOfWeek;
  }

  set disabledDaysOfWeek(value: number[]) {
    this._disabledDaysOfWeek = value;
  }

  // First Day of Week
  get firstDayOfWeek(): number {
    return this._firstDayOfWeek;
  }

  set firstDayOfWeek(value: number) {
    this._firstDayOfWeek = value;
  }

  // Date Format
  get dateFormat(): string | null {
    return this._dateFormat;
  }

  set dateFormat(value: string | null) {
    this._dateFormat = value;
  }

  // Is Range Selection
  get isRangeSelection(): boolean {
    return this._isRangeSelection;
  }

  set isRangeSelection(value: boolean) {
    this._isRangeSelection = value;
  }

  // Hide Other Month Days
  get hideOtherMonthDays(): boolean {
    return this._hideOtherMonthDays;
  }

  set hideOtherMonthDays(value: boolean) {
    this._hideOtherMonthDays = value;
  }

  // Locale
  get locale(): string {
    return this._locale;
  }

  set locale(value: string) {
    this._locale = value;
  }

  // Date Format Options
  get dateFormatOptions(): Intl.DateTimeFormatOptions | null {
    return this._dateFormatOptions;
  }

  set dateFormatOptions(value: Intl.DateTimeFormatOptions | null) {
    this._dateFormatOptions = value;
  }

  // Year Range Size
  get yearRangeSize(): number {
    return this._yearRangeSize;
  }

  set yearRangeSize(value: number) {
    this._yearRangeSize = value;
  }

  // Current Year Range Base
  get currentYearRangeBase(): number {
    return this._currentYearRangeBase;
  }

  set currentYearRangeBase(value: number) {
    this._currentYearRangeBase = value;
  }

  /**
   * Get all state as a snapshot
   */
  getStateSnapshot() {
    return {
      currentDate: this._currentDate,
      selectedDate: this._selectedDate,
      selectedDateRange: { ...this._selectedDateRange },
      focusedDate: this._focusedDate,
      minDate: this._minDate,
      maxDate: this._maxDate,
      disabledDates: [...this._disabledDates],
      disabledDaysOfWeek: [...this._disabledDaysOfWeek],
      firstDayOfWeek: this._firstDayOfWeek,
      dateFormat: this._dateFormat,
      isRangeSelection: this._isRangeSelection,
      hideOtherMonthDays: this._hideOtherMonthDays,
      locale: this._locale,
      dateFormatOptions: this._dateFormatOptions,
      yearRangeSize: this._yearRangeSize,
      currentYearRangeBase: this._currentYearRangeBase,
    };
  }
}

