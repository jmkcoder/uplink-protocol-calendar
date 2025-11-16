import { Binding } from "@uplink-protocol/core";
import { CalendarDate, CalendarMonth, CalendarYear, DateRange, YearRange } from "../interfaces";

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