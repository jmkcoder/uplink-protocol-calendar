/**
 * TimeSegment - Interface for time segment objects (hours, minutes, seconds)
 */
export interface TimeSegment {
  value: number;
  display: string;
  isSelected: boolean;
  isDisabled: boolean;
  isFocused?: boolean;
}

/**
 * TimeOptions - Interface for time picker configuration options
 */
export interface TimeOptions {
  /** Minimum selectable time */
  minTime?: Date;
  /** Maximum selectable time */
  maxTime?: Date;
  /** List of disabled times */
  disabledTimes?: Date[];
  /** List of disabled hours (0-23) */
  disabledHours?: number[];
  /** List of disabled minutes (0-59) */
  disabledMinutes?: number[];
  /** List of disabled seconds (0-59) */
  disabledSeconds?: number[];
  /** Start with a specific time selected */
  initialSelectedTime?: Date;
  /** Time format for output (defaults to HH:mm:ss) */
  timeFormat?: string;
  /** Locale for internationalization (defaults to 'en-US') */
  locale?: string;
  /** Time format options for Intl.DateTimeFormat */
  timeFormatOptions?: Intl.DateTimeFormatOptions;
  /** Use 12-hour format instead of 24-hour */
  use12HourFormat?: boolean;
  /** Show seconds in time picker */
  showSeconds?: boolean;
  /** Show milliseconds in time picker */
  showMilliseconds?: boolean;
  /** Step interval for minutes (1, 5, 10, 15, 30) */
  minuteStep?: number;
  /** Step interval for seconds (1, 5, 10, 15, 30) */
  secondStep?: number;
  /** Enable time range selection mode */
  isRangeSelection?: boolean;
}

/**
 * TimeRange - Interface for time range selection
 */
export interface TimeRange {
  startTime: Date | null;
  endTime: Date | null;
}

/**
 * TimePeriod - Interface for AM/PM periods
 */
export interface TimePeriod {
  value: 'AM' | 'PM';
  display: string;
  isSelected: boolean;
  isDisabled: boolean;
}

/**
 * TimeView - Interface for complete time view
 */
export interface TimeView {
  hours: TimeSegment[];
  minutes: TimeSegment[];
  seconds: TimeSegment[];
  milliseconds?: TimeSegment[];
  period: TimePeriod | null;
  use12Hour: boolean;
}

/**
 * TimeState - Interface for time picker state
 */
export interface TimeState {
  selectedTime: Date | null;
  selectedTimeRange: TimeRange;
  focusedSegment: 'hours' | 'minutes' | 'seconds' | 'milliseconds' | 'period' | null;
  use12HourFormat: boolean;
  showSeconds: boolean;
  showMilliseconds: boolean;
  minuteStep: number;
  secondStep: number;
  locale: string;
}

/**
 * TimeGenerationOptions - Options for generating time segments
 */
export interface TimeGenerationOptions {
  selectedTime: Date | null;
  selectedTimeRange: TimeRange;
  focusedSegment: 'hours' | 'minutes' | 'seconds' | 'milliseconds' | 'period' | null;
  minTime: Date | null;
  maxTime: Date | null;
  disabledTimes: Date[];
  disabledHours: number[];
  disabledMinutes: number[];
  disabledSeconds: number[];
  use12HourFormat: boolean;
  showSeconds: boolean;
  showMilliseconds: boolean;
  minuteStep: number;
  secondStep: number;
  locale: string;
  isTimeDisabledFn?: (time: Date) => boolean;
}
