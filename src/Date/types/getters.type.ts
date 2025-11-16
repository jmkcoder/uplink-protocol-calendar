import { CalendarDate, CalendarMonth, CalendarYear, DateRange } from "../interfaces";

/**
 * Getters type for calendar controller state access
 * Provides read-only access to controller state via functions
 */
export interface CalendarGetters {
  selectedDate: () => Date | null;
  selectedDateRange: () => DateRange;
  focusedDate: () => Date | null;
  currentDate: () => Date;
  currentMonth: () => number;
  currentYear: () => number;
  monthName: () => string;
  calendarDays: () => CalendarDate[];
  calendarMonths: () => CalendarMonth[];
  calendarYears: () => CalendarYear[];
  weekdays: () => string[];
  isRangeSelection: () => boolean;
  currentYearRangeBase: () => number | { startYear: number; endYear: number };
  formattedDate: () => string | null;
  currentYearRange: () => any;
  minDate: () => Date | null;
  maxDate: () => Date | null;
  disabledDates: () => Date[];
  disabledDaysOfWeek: () => number[];
  firstDayOfWeek: () => number;
  locale: () => string;
  hideOtherMonthDays: () => boolean;
  yearRangeSize: () => number;
}
