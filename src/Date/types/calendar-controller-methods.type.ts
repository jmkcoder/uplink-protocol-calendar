import { CalendarDate, CalendarMonth, CalendarYear, YearRange } from "../interfaces";

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
  
  /** Set the first day of the week (0 = Sunday, 1 = Monday, etc.) */
  setFirstDayOfWeek(day: number): void;
  
  /** Set whether to hide days from other months */
  setHideOtherMonthDays(hide: boolean): void;
  
  /** Get month names in the current locale */
  getMonthNames(): string[];
  
  /** Get weekday names in the current locale */
  getWeekdayNames(short?: boolean): string[];
  
  /** Set the date format */
  setDateFormat(format: string | null): void;
  
  /** Set date format options */
  setDateFormatOptions(options: Intl.DateTimeFormatOptions | null): void;
  
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
  
  /** Set array of disabled days of the week (0 = Sunday, 1 = Monday, etc.) */
  setDisabledDaysOfWeek(days: number[]): number[];
  
  /** Add a day of the week to the disabled days */
  addDisabledDayOfWeek(day: number): number[];
  
  /** Remove a day of the week from the disabled days */
  removeDisabledDayOfWeek(day: number): number[];
  
  /** Get the current disabled days of the week */
  getDisabledDaysOfWeek(): number[];
  
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
  
  /** Check if a date is disabled */
  isDateDisabled(date: Date): boolean;
  
  /** Check if a date is selected */
  isDateSelected(date: Date): boolean;
  
  /** Check if a date is in the selected range */
  isDateInRange(date: Date): boolean;
  
  /** Check if a date has events */
  hasEvents(date: Date): boolean;
  
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
