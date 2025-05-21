import { Binding } from "@uplink-protocol/core";
import { CalendarDate, CalendarMonth, CalendarYear, DateRange } from "./calendar.interfaces";

/**
 * View state service interface
 * Responsible for managing calendar view state and binding updates
 */
export interface IViewStateService {
  /**
   * Initialize view state bindings
   */
  initializeBindings(
    currentDate: Date,
    selectedDate: Date | null,
    selectedDateRange: DateRange,
    firstDayOfWeek: number,
    isRangeSelection: boolean,
    calendarDaysGenerator: () => CalendarDate[]
  ): {
    currentMonth: Binding<number>;
    currentYear: Binding<number>;
    monthName: Binding<string>;
    calendarDays: Binding<CalendarDate[]>;    
    calendarMonths: Binding<CalendarMonth[]>;
    calendarYears: Binding<CalendarYear[]>;
    selectedDate: Binding<Date | null>;
    selectedDateRange: Binding<DateRange>;
    focusedDate: Binding<Date | null>;
    weekdays: Binding<string[]>;
    isRangeSelection: Binding<boolean>;
  };

  /**
   * Update current date in view state
   */
  updateCurrentDate(
    date: Date, 
    bindings: {
      currentMonth: Binding<number>;
      currentYear: Binding<number>;
      monthName: Binding<string>;
      calendarDays: Binding<CalendarDate[]>;
    },
    getMonthName: (month: number) => string,
    generateCalendarDays: () => CalendarDate[]
  ): { month: number, year: number };

  /**
   * Update selected date bindings
   */
  updateSelectedDate(
    date: Date | null,
    binding: Binding<Date | null>,
    calendarDaysBinding: Binding<CalendarDate[]>,
    generateCalendarDays: () => CalendarDate[]
  ): void;

  /**
   * Update date range bindings
   */
  updateDateRange(
    range: DateRange,
    binding: Binding<DateRange>,
    calendarDaysBinding: Binding<CalendarDate[]>,
    generateCalendarDays: () => CalendarDate[]
  ): void;
  
  /**
   * Update selection mode
   */
  updateSelectionMode(
    isRange: boolean,
    binding: Binding<boolean>,
    calendarDaysBinding: Binding<CalendarDate[]>,
    generateCalendarDays: () => CalendarDate[]
  ): void;
  
  /**
   * Update focused date
   */
  updateFocusedDate(
    date: Date | null,
    calendarDaysBinding: Binding<CalendarDate[]>,
    generateCalendarDays: () => CalendarDate[]
  ): void;
}
