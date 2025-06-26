import { Binding } from "@uplink-protocol/core";
import { CalendarDate, DateRange } from "./calendar.interfaces";
import { EventEmitter } from "@uplink-protocol/core";

/**
 * Interface for the CalendarStateService
 * Responsible for managing calendar state and coordinating with other services
 */
export interface ICalendarStateService {
  /**
   * Set the minimum selectable date
   */
  setMinDate(
    date: Date | null,
    currentMinDate: Date | null,
    currentDate: Date,
    bindings: {
      currentMonth: Binding<number>;
      currentYear: Binding<number>;
      monthName: Binding<string>;
      calendarDays: Binding<CalendarDate[]>;
    },
    getMonthNameFn: (month: number) => string,
    generateCalendarDaysFn: () => CalendarDate[]
  ): Date | null;
  
  /**
   * Set the maximum selectable date
   */
  setMaxDate(
    date: Date | null,
    currentMaxDate: Date | null,
    currentDate: Date,
    bindings: {
      currentMonth: Binding<number>;
      currentYear: Binding<number>;
      monthName: Binding<string>;
      calendarDays: Binding<CalendarDate[]>;
    },
    getMonthNameFn: (month: number) => string,
    generateCalendarDaysFn: () => CalendarDate[]
  ): Date | null;
  
  /**
   * Set disabled dates
   */
  setDisabledDates(
    dates: Date[],
    currentDate: Date,
    bindings: {
      currentMonth: Binding<number>;
      currentYear: Binding<number>;
      monthName: Binding<string>;
      calendarDays: Binding<CalendarDate[]>;
    },
    getMonthNameFn: (month: number) => string,
    generateCalendarDaysFn: () => CalendarDate[]
  ): Date[];
  
  /**
   * Add a specific date to the disabled dates list
   */
  addDisabledDate(
    date: Date,
    disabledDates: Date[],
    calendarDaysBinding: Binding<CalendarDate[]>,
    generateCalendarDaysFn: () => CalendarDate[]
  ): Date[];
  
  /**
   * Remove a specific date from the disabled dates list
   */
  removeDisabledDate(
    date: Date,
    disabledDates: Date[],
    calendarDaysBinding: Binding<CalendarDate[]>,
    generateCalendarDaysFn: () => CalendarDate[]
  ): Date[];
  
  /**
   * Set the date selection mode
   */
  setRangeSelectionMode(
    isRange: boolean,
    isRangeSelectionBinding: Binding<boolean>,
    calendarDaysBinding: Binding<CalendarDate[]>,
    generateCalendarDaysFn: () => CalendarDate[]
  ): boolean;
  
  /**
   * Clear the current selection
   */
  clearSelection(
    isRangeSelection: boolean,
    selectedDateBinding: Binding<Date | null>,
    selectedDateRangeBinding: Binding<DateRange>,
    calendarDaysBinding: Binding<CalendarDate[]>,
    generateCalendarDaysFn: () => CalendarDate[]
  ): { selectedDate: Date | null; selectedDateRange: DateRange };
  
  /**
   * Select a date based on the current selection mode
   */
  selectDate(
    date: Date,
    isRangeSelection: boolean,
    currentSelectedDate: Date | null,
    currentDateRange: DateRange,
    isDateDisabledFn: (date: Date) => boolean,
    bindings: {
      selectedDate: Binding<Date | null>;
      selectedDateRange: Binding<DateRange>;
      focusedDate: Binding<Date | null>;
      calendarDays: Binding<CalendarDate[]>;
    },
    events: {
      dateSelected?: EventEmitter<Date>;
      dateRangeSelected?: EventEmitter<DateRange>;
    } | undefined,
    generateCalendarDaysFn: () => CalendarDate[]
  ): { selectedDate: Date | null; selectedDateRange: DateRange };
  
  /**
   * Focus a specific date for accessibility
   */
  focusDate(
    date: Date | null,
    focusedDateBinding: Binding<Date | null>
  ): Date | null;
}
