import { Binding } from "@uplink-protocol/core";
import { CalendarDate, CalendarMonth, CalendarYear, DateRange } from "./calendar.interfaces";

/**
 * View state service interface
 * Responsible for managing calendar view state and binding updates
 */
export interface IViewStateService {
  /**
   * Initialize view state bindings
   */  initializeBindings(
    currentDate: Date,
    selectedDate: Date | null,
    selectedDateRange: DateRange,
    firstDayOfWeek: number,
    isRangeSelection: boolean,
    calendarDaysGenerator: () => CalendarDate[],
    calendarMonthsGenerator: () => CalendarMonth[],
    calendarYearsGenerator: () => CalendarYear[]
  ): {
    currentMonth: Binding<number>;
    currentYear: Binding<number>;
    currentDate: Binding<Date>;
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
   * @param date The date to update to
   * @param param1 Either individual bindings or an object containing the bindings
   * @param param2 Function to get month name or the generate calendar days function
   * @param param3 Optional function to generate calendar days
   */
  updateCurrentDate(
    date: Date, 
    currentMonthBinding: Binding<number> | {
      currentMonth: Binding<number>;
      currentYear: Binding<number>;
      monthName: Binding<string>;
      calendarDays: Binding<CalendarDate[]>;
    },
    currentYearOrGetMonthName: Binding<number> | ((month: number) => string),
    monthNameBindingOrGenerateCalendarDays: Binding<string> | (() => CalendarDate[]),
    getMonthNameFn?: (month: number) => string,
    calendarDaysBinding?: Binding<CalendarDate[]>,
    generateCalendarDaysFn?: () => CalendarDate[]
  ): { month: number, year: number };
  /**
   * Update selected date bindings
   */
  updateSelectedDate(
    date: Date | null,
    binding: Binding<Date | null>,
    calendarDaysBinding?: Binding<CalendarDate[]>,
    generateCalendarDays?: () => CalendarDate[]
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
   * Update selectedDateRange binding with new range
   */
  updateSelectedDateRange(
    range: DateRange,
    binding: Binding<DateRange>
  ): void;

  /**
   * Update calendarDays binding with new calendar days
   */
  updateCalendarDays(
    calendarDays: CalendarDate[],
    binding: Binding<CalendarDate[]>
  ): void;
  /**
   * Update focused date
   * @param date The date to focus
   * @param bindingArg Either the focusedDate binding or the calendarDays binding
   * @param generateCalendarDays Optional function to generate calendar days
   */
  updateFocusedDate(
    date: Date | null,
    bindingArg?: Binding<Date | null> | Binding<CalendarDate[]>,
    generateCalendarDays?: () => CalendarDate[]
  ): void;
}
