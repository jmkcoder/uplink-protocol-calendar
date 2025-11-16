import { CalendarStateManager } from "./state-manager";
import { IConstraintsService, IAccessibilityService, ICalendarService } from "../interfaces";

/**
 * UtilityCoordinator - Handles utility methods and queries
 */
export class UtilityCoordinator {
  constructor(
    private stateManager: CalendarStateManager,
    private constraintsService: IConstraintsService,
    private accessibilityService: IAccessibilityService,
    private calendarService: ICalendarService
  ) {}

  /**
   * Check if a date is disabled
   */
  isDateDisabled(date: Date): boolean {
    return this.constraintsService.isDateDisabled(
      date,
      this.stateManager.minDate,
      this.stateManager.maxDate,
      this.stateManager.disabledDates,
      this.stateManager.disabledDaysOfWeek
    );
  }

  /**
   * Check if a date is today
   */
  isToday(date: Date): boolean {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  }

  /**
   * Get week number for a date
   */
  getWeekNumber(date: Date): number {
    return this.calendarService.getWeekNumber(date);
  }

  /**
   * Get disabled dates
   */
  getDisabledDates(): Date[] {
    return [...this.stateManager.disabledDates];
  }

  /**
   * Get disabled days of week
   */
  getDisabledDaysOfWeek(): number[] {
    return [...this.stateManager.disabledDaysOfWeek];
  }

  /**
   * Get accessible date label
   */
  getAccessibleDateLabel(date: Date, getMonthName: (month: number) => string): string {
    return this.accessibilityService.getAccessibleDateLabel(date, getMonthName);
  }

  /**
   * Get date state description
   */
  getDateStateDescription(
    date: Date,
    isDateDisabledFn: (date: Date) => boolean,
    isTodayFn: (date: Date) => boolean
  ): string {
    return this.accessibilityService.getDateStateDescription(date, {
      selectedDate: this.stateManager.selectedDate,
      selectedDateRange: this.stateManager.selectedDateRange,
      isRangeSelection: this.stateManager.isRangeSelection,
      isDateDisabledFn,
      isTodayFn,
    });
  }

  /**
   * Check if a date is within a date range
   */
  isDateInRange(date: Date, startDate: Date | null, endDate: Date | null): boolean {
    if (!startDate || !endDate) return false;
    const time = date.getTime();
    return time >= startDate.getTime() && time <= endDate.getTime();
  }

  /**
   * Check if two dates are the same day
   */
  isSameDay(date1: Date, date2: Date): boolean {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  }

  /**
   * Check if two dates are in the same month
   */
  isSameMonth(date1: Date, date2: Date): boolean {
    return (
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  }

  /**
   * Check if two dates are in the same year
   */
  isSameYear(date1: Date, date2: Date): boolean {
    return date1.getFullYear() === date2.getFullYear();
  }

  /**
   * Get day of week for a date (0 = Sunday, 1 = Monday, etc.)
   */
  getDayOfWeek(date: Date): number {
    return date.getDay();
  }

  /**
   * Get number of days in a specific month and year
   */
  getDaysInMonth(year: number, month: number): number {
    return new Date(year, month + 1, 0).getDate();
  }
}

