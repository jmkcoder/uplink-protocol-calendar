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
  /** Start with a specific date selected */
  initialSelectedDate?: Date;
  /** First day of week (0 = Sunday, 1 = Monday, etc.) */
  firstDayOfWeek?: number;
  /** Date format for output (defaults to ISO string) */
  dateFormat?: string;
  /** Hide days from previous and next months */
  hideOtherMonthDays?: boolean;
}

/**
 * DateRange - Interface for date range selection
 */
export interface DateRange {
  startDate: Date | null;
  endDate: Date | null;
}
