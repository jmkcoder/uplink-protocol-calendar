/**
 * CalendarDate - Interface for calendar date objects
 */
export interface CalendarDate {
  date?: Date;  // Made optional for backward compatibility
  day: number;
  month?: number; // Added for backward compatibility
  year?: number; // Added for backward compatibility
  isCurrentMonth: boolean;
  isToday: boolean;
  isSelected: boolean;
  isDisabled: boolean;
  isInRange?: boolean;
  isRangeStart?: boolean;
  isRangeEnd?: boolean;
  isFocused?: boolean; // Indicates if this date has focus
}

/**
 * CalendarOptions - Interface for calendar configuration options
 */
export interface CalendarOptions {
  /** Minimum selectable date */
  minDate?: Date;
  /** Maximum selectable date */
  maxDate?: Date;
  /** List of disabled dates */
  disabledDates?: Date[];
  /** List of disabled days of the week (0 = Sunday, 1 = Monday, etc.) */
  disabledDaysOfWeek?: number[];
  /** Start with a specific date selected */
  initialSelectedDate?: Date;
  /** First day of week (0 = Sunday, 1 = Monday, etc.) */
  firstDayOfWeek?: number;
  /** Date format for output (defaults to ISO string) */
  dateFormat?: string;
  /** Hide days from previous and next months */
  hideOtherMonthDays?: boolean;
  /** Locale for internationalization (defaults to 'en-US') */
  locale?: string;
  /** Date format options for Intl.DateTimeFormat */
  dateFormatOptions?: Intl.DateTimeFormatOptions;
  /** Enable date range selection mode */
  isRangeSelection?: boolean;
  /** Show week numbers in calendar */
  showWeekNumbers?: boolean;
}

/**
 * DateRange - Interface for date range selection
 */
export interface DateRange {
  startDate: Date | null;
  endDate: Date | null;
}

/**
 * CalendarMonth - Interface for calendar month objects in month view
 */
export interface CalendarMonth {
  month: number;
  year: number;
  name: string;
  isCurrentMonth: boolean;
  isSelected: boolean;
  isDisabled: boolean;
}

/**
 * CalendarYear - Interface for calendar year objects in year view
 */
export interface CalendarYear {
  year: number;
  isCurrentYear: boolean;
  isSelected: boolean;
  isDisabled: boolean;
  isInRange?: boolean;
}

/**
 * YearRange - Interface for year range
 */
export interface YearRange {
  startYear: number;
  endYear: number;
}

/**
 * CalendarWeek - Interface for a week in the calendar view
 */
export interface CalendarWeek {
  days: CalendarDate[];
  weekNumber?: number;
}

/**
 * CalendarView - Interface for a month view with weeks
 */
export interface CalendarView {
  month: number;
  year: number;
  weeks: CalendarWeek[];
  weekdays: string[];
}

/**
 * YearView - Interface for a year view with months or years
 */
export interface YearView {
  year?: number;
  startYear?: number;
  endYear?: number;
  months?: CalendarMonth[];
  years?: CalendarYear[];
}
