/**
 * TypeScript type definitions for Calendar Controller
 * Provides comprehensive typing for bindings, methods, and events
 */

import { Binding, EventEmitter } from "@uplink-protocol/core";
import { 
  CalendarDate, 
  CalendarMonth, 
  CalendarYear, 
  DateRange, 
  YearRange,
  CalendarOptions 
} from "../interfaces";

/**
 * Calendar Controller Bindings - Reactive state properties
 * These bindings automatically update the UI when calendar state changes
 */
export interface CalendarControllerBindings {
  /** Currently selected date (null if no date selected) */
  selectedDate: Binding<Date | null>;
  
  /** Selected date range (for range selection mode) */
  selectedDateRange: Binding<DateRange>;
  
  /** Currently focused date (for accessibility) */
  focusedDate: Binding<Date | null>;
  
  /** Current date being displayed (navigation state) */
  currentDate: Binding<Date>;
  
  /** Current month number (0-based) */
  currentMonth: Binding<number>;
  
  /** Current year number */
  currentYear: Binding<number>;
  
  /** Current month name in the selected locale */
  monthName: Binding<string>;
  
  /** Array of calendar days for the current month view */
  calendarDays: Binding<CalendarDate[]>;
  
  /** Array of calendar months for the year view */
  calendarMonths: Binding<CalendarMonth[]>;
  
  /** Array of calendar years for the decade view */
  calendarYears: Binding<CalendarYear[]>;
  
  /** Array of weekday names in the selected locale */
  weekdays: Binding<string[]>;
  
  /** Whether range selection mode is enabled */
  isRangeSelection: Binding<boolean>;
  
  /** Current year range base for decade view */
  currentYearRangeBase: Binding<YearRange | number>;
}

/**
 * Calendar Controller Methods - All available public methods
 * These methods provide the API for interacting with the calendar
 */
export interface CalendarControllerMethods {
  // === Basic Date Selection and Navigation ===
  /** Select a specific date */
  selectDate(yearOrDate: number | Date, month?: number, day?: number): void;
  
  /** Navigate to a specific month */
  goToMonth(month: number, year: number): void;
  
  /** Navigate to a specific year */
  goToYear(year: number): void;
  
  /** Navigate to a specific date */
  goToDate(date: Date): void;
  
  /** Navigate to the next month */
  goToNextMonth(): void;
  
  /** Navigate to the previous month */
  goToPreviousMonth(): void;
  
  /** Navigate to the next year */
  goToNextYear(): void;
  
  /** Navigate to the previous year */
  goToPreviousYear(): void;
  
  /** Navigate to today's date */
  goToToday(): void;
  
  /** Navigate to the next year range (decade) */
  goToNextYearRange(): void;
  
  /** Navigate to the previous year range (decade) */
  goToPreviousYearRange(): void;
  
  // === Range Selection ===
  /** Enable or disable range selection mode */
  setRangeSelectionMode(isRange: boolean): void;
  
  /** Clear the current selection */
  clearSelection(): void;
  
  // === Focus Management (Accessibility) ===
  /** Set the focused date */
  setFocusedDate(date: Date | null): void;
  
  /** Clear the focused date */
  clearFocusedDate(): void;
  
  /** Focus a specific date */
  focusDate(date: Date): void;
  
  // === Focus Movement (Keyboard Navigation) ===
  /** Move focus to the next day */
  moveFocusRight(): void;
  
  /** Move focus to the previous day */
  moveFocusLeft(): void;
  
  /** Move focus up one week */
  moveFocusUp(): void;
  
  /** Move focus down one week */
  moveFocusDown(): void;
  
  /** Move focus to the start of the month */
  moveFocusToStartOfMonth(): void;
  
  /** Move focus to the end of the month */
  moveFocusToEndOfMonth(): void;
  
  /** Move focus to the previous month */
  moveFocusToPreviousMonth(): void;
  
  /** Move focus to the next month */
  moveFocusToNextMonth(): void;
  
  /** Move focus to the previous year */
  moveFocusToPreviousYear(): void;
  
  /** Move focus to the next year */
  moveFocusToNextYear(): void;
  
  /** Select the currently focused date */
  selectFocusedDate(): void;
  
  // === Localization and Formatting ===
  /** Set the locale */
  setLocale(locale: string): void;
  
  /** Get the current locale */
  getLocale(): string;
  
  /** Get month names in the current locale */
  getMonthNames(): string[];
  
  /** Get weekday names in the current locale */
  getWeekdayNames(short?: boolean): string[];
  
  /** Set date format options */
  setDateFormatOptions(options: Intl.DateTimeFormatOptions): void;
  
  /** Get current date format options */
  getDateFormatOptions(): Intl.DateTimeFormatOptions | null;
  
  /** Get formatted date string for selected date */
  getFormattedDate(): string | null;
  
  /** Format a specific date with given options */
  formatDate(date: Date, options?: Intl.DateTimeFormatOptions | string): string;
  
  // === Month and Year Selection ===
  /** Select a month (navigate to month view) */
  selectMonth(month: number, year: number): void;
  
  /** Select a year (navigate to year view) */
  selectYear(year: number): void;
  
  // === Date Constraints ===
  /** Set minimum selectable date */
  setMinDate(date: Date | null): void;
  
  /** Set maximum selectable date */
  setMaxDate(date: Date | null): void;
  
  /** Set array of disabled dates */
  setDisabledDates(dates: Date[]): void;
  
  /** Add a date to the disabled dates */
  addDisabledDate(date: Date): Date[];
  
  /** Remove a date from the disabled dates */
  removeDisabledDate(date: Date): Date[];
  
  /** Get the current disabled dates */
  getDisabledDates(): Date[];
  
  // === Year Range Management ===
  /** Get the current year range */
  getCurrentYearRange(): YearRange;
  
  /** Set the current year range based on a date */
  setCurrentYearRange(date: Date): void;
  
  /** Set the year range size (how many years to display) */
  setYearRangeSize(size: number): void;
  
  // === Accessibility ===
  /** Get accessible label for a date */
  getAccessibleDateLabel(date: Date): string;
  
  /** Get date state description for accessibility */
  getDateStateDescription(date: Date): string;
  
  // === Utility Methods ===
  /** Check if a date is today */
  isToday(date: Date): boolean;
  
  /** Generate month view data */
  generateMonthView(): {
    month: number;
    year: number;
    weeks: { days: CalendarDate[]; weekNumber?: number }[];
    weekdays: string[];
  };
  
  /** Get week number for a date */
  getWeekNumber(date: Date): number;
  
  /** Generate calendar days for current month */
  generateCalendarDays(): CalendarDate[];
  
  /** Generate calendar months for current year */
  generateCalendarMonths(): CalendarMonth[];
  
  /** Generate calendar years for current decade */
  generateCalendarYears(): CalendarYear[];
  
  // === Backward Compatibility Aliases ===
  /** Alias for goToNextMonth() */
  nextMonth?(): void;
  
  /** Alias for goToPreviousMonth() */
  prevMonth?(): void;
  
  /** Alias for goToPreviousMonth() */
  previousMonth?(): void;
  
  /** Alias for goToNextYear() */
  nextYear?(): void;
  
  /** Alias for goToPreviousYear() */
  prevYear?(): void;
}

/**
 * Calendar Controller Events - Event system for reacting to calendar changes
 * Subscribe to these events to respond to user interactions and state changes
 */
export interface CalendarControllerEvents {
  /** Fired when a date is selected */
  dateSelected: EventEmitter<Date>;
  
  /** Fired when a date range is selected (in range mode) */
  dateRangeSelected: EventEmitter<DateRange>;
  
  /** Fired when the month changes */
  monthChanged: EventEmitter<number>;
  
  /** Fired when the year changes */
  yearChanged: EventEmitter<number>;
  
  /** Fired when the view changes (month/year navigation) */
  viewChanged: EventEmitter<{ month: number; year: number }>;
  
  /** Fired when the year range changes (decade navigation) */
  yearRangeChanged: EventEmitter<YearRange>;
}

/**
 * Complete Calendar Controller Interface
 * Combines all the above interfaces into a single comprehensive type
 */
export interface TypedCalendarController {
  /** Reactive state bindings */
  bindings: CalendarControllerBindings;
  
  /** Available methods */
  methods: CalendarControllerMethods;
  
  /** Event emitters */
  events: CalendarControllerEvents;
  
  /** Calendar configuration options */
  options?: CalendarOptions;
  
  // === Direct Method Access (for convenience) ===
  // Core methods are also available directly on the controller instance
  selectDate(yearOrDate: number | Date, month?: number, day?: number): void;
  goToNextMonth(): void;
  goToPreviousMonth(): void;
  goToNextYear(): void;
  goToPreviousYear(): void;
  clearSelection(): void;
  setRangeSelectionMode(isRange: boolean): void;
  
  // === Getter/Setter Properties ===
  /** Selected date range with flexible property access */
  selectedDateRange: {
    start: Date | null;
    end: Date | null;
    startDate: Date | null;
    endDate: Date | null;
  };
}

/**
 * Factory Function Type
 * Type for the CalendarController factory function
 */
export type CalendarControllerFactory = (options?: CalendarOptions) => TypedCalendarController;

/**
 * Calendar Controller Instance Type
 * Type for the CalendarControllerClass instance
 */
export interface CalendarControllerInstance extends TypedCalendarController {
  // Additional class-specific properties and methods can be added here
}

// === Utility Types ===

/**
 * Binding Value Types - Helper types for accessing binding values
 */
export type BindingValue<T extends keyof CalendarControllerBindings> = 
  CalendarControllerBindings[T] extends Binding<infer U> ? U : never;

/**
 * Method Parameter Types - Helper types for method parameters
 */
export type SelectDateParams = Parameters<CalendarControllerMethods['selectDate']>;
export type GoToMonthParams = Parameters<CalendarControllerMethods['goToMonth']>;
export type FormatDateParams = Parameters<CalendarControllerMethods['formatDate']>;

/**
 * Event Data Types - Helper types for event payloads
 */
export type DateSelectedEventData = Date;
export type DateRangeSelectedEventData = DateRange;
export type MonthChangedEventData = number;
export type YearChangedEventData = number;
export type ViewChangedEventData = { month: number; year: number };
export type YearRangeChangedEventData = YearRange;

/**
 * Calendar State - Complete state interface
 */
export interface CalendarState {
  currentDate: Date;
  selectedDate: Date | null;
  selectedDateRange: DateRange;
  focusedDate: Date | null;
  isRangeSelection: boolean;
  currentMonth: number;
  currentYear: number;
  monthName: string;
  calendarDays: CalendarDate[];
  calendarMonths: CalendarMonth[];
  calendarYears: CalendarYear[];
  weekdays: string[];
  minDate: Date | null;
  maxDate: Date | null;
  disabledDates: Date[];
  locale: string;
  firstDayOfWeek: number;
}
