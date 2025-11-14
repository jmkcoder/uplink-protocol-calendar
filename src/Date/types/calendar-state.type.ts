import { CalendarDate, CalendarMonth, CalendarYear, DateRange } from "../interfaces";

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
  disabledDaysOfWeek: number[];
  locale: string;
  firstDayOfWeek: number;
}
