import { Binding } from "@uplink-protocol/core";
import { CalendarDate, DateRange } from "./calendar.interfaces";

/**
 * Interface for the AccessibilityManagerService
 * Coordinates accessibility features across multiple services
 */
export interface IAccessibilityManagerService {
  /**
   * Handles focus management including view updates and navigation
   */
  manageFocus(
    direction: 'right' | 'left' | 'up' | 'down' | 'start' | 'end' | 'prevMonth' | 'nextMonth' | 'prevYear' | 'nextYear',
    focusedDate: Date | null,
    selectedDate: Date | null,
    currentDate: Date,
    calendarDaysBinding: Binding<CalendarDate[]>,
    generateCalendarDaysFn: () => CalendarDate[],
    updateDateFn?: (date: Date) => void
  ): Date;
  
  /**
   * Select the currently focused date
   */
  selectFocusedDate(
    focusedDate: Date | null,
    selectDateFn: (date: Date) => void
  ): boolean;
  
  /**
   * Get accessible date label for screen readers
   */
  getAccessibleDateLabel(
    date: Date, 
    localeMonthNameFn?: (month: number) => string
  ): string;
  
  /**
   * Get date state description for screen readers
   */
  getDateStateDescription(
    date: Date,
    selectedDate: Date | null,
    selectedDateRange: DateRange,
    isRangeSelection: boolean,
    isDateDisabledFn: (date: Date) => boolean,
    isTodayFn: (date: Date) => boolean
  ): string;

  /**
   * Get ARIA label for a date
   */
  getAriaLabel(date: Date): string;

  /**
   * Get ARIA label for month
   */
  getAriaLabelForMonth(month: number, year: number): string;

  /**
   * Get ARIA label for year
   */
  getAriaLabelForYear(year: number): string;
}
