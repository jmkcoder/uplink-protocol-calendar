/**
 * TypeScript type definitions for Time Controller
 * Provides comprehensive typing for bindings, methods, and events
 */

import { Binding, EventEmitter } from "@uplink-protocol/core";
import { 
  TimeSegment, 
  TimePeriod, 
  TimeRange, 
  TimeOptions,
  TimeView 
} from "../interfaces";

/**
 * Time Controller Bindings - Reactive state properties
 * These bindings automatically update the UI when time state changes
 */
export interface TimeControllerBindings {
  /** Currently selected time (null if no time selected) */
  selectedTime: Binding<Date | null>;
  
  /** Selected time range (for range selection mode) */
  selectedTimeRange: Binding<TimeRange>;
  
  /** Currently focused time segment (for accessibility) */
  focusedSegment: Binding<'hours' | 'minutes' | 'seconds' | 'milliseconds' | 'period' | null>;
  
  /** Current time being displayed */
  currentTime: Binding<Date>;
  
  /** Formatted time string for display */
  formattedTime: Binding<string>;
  
  /** Time segments for UI rendering */
  timeSegments: Binding<{
    hours: TimeSegment[];
    minutes: TimeSegment[];
    seconds: TimeSegment[];
    milliseconds?: TimeSegment[];
    period?: TimePeriod;
  }>;
  
  /** Whether using 12-hour format */
  use12HourFormat: Binding<boolean>;
  
  /** Whether to show seconds in time picker */
  showSeconds: Binding<boolean>;
  
  /** Whether to show milliseconds in time picker */
  showMilliseconds: Binding<boolean>;
  
  /** Current locale for internationalization */
  locale: Binding<string>;
  
  /** Whether range selection mode is enabled */
  isRangeSelection: Binding<boolean>;
  
  /** Minute step interval */
  minuteStep: Binding<number>;
  
  /** Second step interval */
  secondStep: Binding<number>;
}

/**
 * Time Controller Methods - All available public methods
 * These methods provide the API for interacting with the time picker
 */
export interface TimeControllerMethods {
  // === Basic Time Selection and Navigation ===
  /** Select a specific time */
  selectTime(time: Date): void;
  
  /** Set specific hour */
  setHour(hour: number, period?: 'AM' | 'PM'): void;
  
  /** Set specific minute */
  setMinute(minute: number): void;
  
  /** Set specific second */
  setSecond(second: number): void;
  
  /** Set specific millisecond */
  setMillisecond(millisecond: number): void;
  
  /** Navigate to next hour */
  goToNextHour(): void;
  
  /** Navigate to previous hour */
  goToPreviousHour(): void;
  
  /** Navigate to next minute */
  goToNextMinute(): void;
  
  /** Navigate to previous minute */
  goToPreviousMinute(): void;
  
  /** Navigate to next second */
  goToNextSecond(): void;
  
  /** Navigate to previous second */
  goToPreviousSecond(): void;
  
  /** Navigate to current time */
  goToCurrentTime(): void;
  
  /** Toggle AM/PM period */
  togglePeriod(): void;
  
  // === Range Selection ===
  /** Enable or disable range selection mode */
  setRangeSelectionMode(isRange: boolean): void;
  
  /** Clear current time selection */
  clearSelection(): void;
  
  // === Focus Management ===
  /** Set focused time segment */
  setFocusedSegment(segment: 'hours' | 'minutes' | 'seconds' | 'milliseconds' | 'period' | null): void;
  
  /** Clear focused segment */
  clearFocusedSegment(): void;
  
  /** Focus a specific time segment */
  focusSegment(segment: 'hours' | 'minutes' | 'seconds' | 'milliseconds' | 'period'): void;
  
  // === Time Constraints ===
  /** Set minimum selectable time */
  setMinTime(time: Date | null): void;
  
  /** Set maximum selectable time */
  setMaxTime(time: Date | null): void;
  
  /** Set array of disabled times */
  setDisabledTimes(times: Date[]): void;
  
  /** Add a time to the disabled times */
  addDisabledTime(time: Date): Date[];
  
  /** Remove a time from the disabled times */
  removeDisabledTime(time: Date): Date[];
  
  /** Get the current disabled times */
  getDisabledTimes(): Date[];
  
  /** Set array of disabled hours (0-23) */
  setDisabledHours(hours: number[]): number[];
  
  /** Add an hour to the disabled hours */
  addDisabledHour(hour: number): number[];
  
  /** Remove an hour from the disabled hours */
  removeDisabledHour(hour: number): number[];
  
  /** Get the current disabled hours */
  getDisabledHours(): number[];
  
  /** Set array of disabled minutes (0-59) */
  setDisabledMinutes(minutes: number[]): number[];
  
  /** Set array of disabled seconds (0-59) */
  setDisabledSeconds(seconds: number[]): number[];
  
  // === Format and Localization ===
  /** Set the locale for internationalization */
  setLocale(locale: string): void;
  
  /** Get the current locale */
  getLocale(): string;
  
  /** Set time format options */
  setTimeFormatOptions(options: Intl.DateTimeFormatOptions | null): void;
  
  /** Get current time format options */
  getTimeFormatOptions(): Intl.DateTimeFormatOptions | null;
  
  /** Get formatted time string for selected time */
  getFormattedTime(): string | null;
  
  /** Format a specific time with given options */
  formatTime(time: Date, options?: Intl.DateTimeFormatOptions | string): string;
  
  /** Set 12-hour format mode */
  setUse12HourFormat(use12Hour: boolean): void;
  
  /** Set whether to show seconds */
  setShowSeconds(show: boolean): void;
  
  /** Set whether to show milliseconds */
  setShowMilliseconds(show: boolean): void;
  
  /** Set minute step interval */
  setMinuteStep(step: number): void;
  
  /** Set second step interval */
  setSecondStep(step: number): void;
  
  // === Utility Methods ===
  /** Check if a time is the current time */
  isCurrentTime(time: Date): boolean;
  
  /** Generate time view data */
  generateTimeView(): TimeView;
  
  /** Check if a time is valid according to constraints */
  isTimeValid(time: Date): boolean;
  
  /** Round time to nearest step interval */
  roundToStep(time: Date): Date;
  
  // === Focus Movement (Accessibility) ===
  /** Move focus to next segment (keyboard navigation) */
  moveFocusToNextSegment(): void;
  
  /** Move focus to previous segment (keyboard navigation) */
  moveFocusToPreviousSegment(): void;
  
  /** Move focus to hours segment */
  moveFocusToHours(): void;
  
  /** Move focus to minutes segment */
  moveFocusToMinutes(): void;
  
  /** Move focus to seconds segment */
  moveFocusToSeconds(): void;
  
  /** Move focus to milliseconds segment */
  moveFocusToMilliseconds(): void;
  
  /** Move focus to period (AM/PM) segment */
  moveFocusToPeriod(): void;
  
  /** Select focused segment time */
  selectFocusedSegment(): void;
}

/**
 * Time Controller Events - Event system for reacting to time changes
 * Subscribe to these events to respond to user interactions and state changes
 */
export interface TimeControllerEvents {
  /** Fired when a time is selected */
  timeSelected: EventEmitter<Date>;
  
  /** Fired when a time range is selected */
  timeRangeSelected: EventEmitter<{ startTime: Date | null; endTime: Date | null }>;
  
  /** Fired when the time changes */
  timeChanged: EventEmitter<Date>;
  
  /** Fired when a time segment receives focus */
  segmentFocused: EventEmitter<'hours' | 'minutes' | 'seconds' | 'milliseconds' | 'period'>;
  
  /** Fired when the time format changes */
  formatChanged: EventEmitter<{ use12Hour: boolean; showSeconds: boolean; showMilliseconds: boolean }>;
  
  /** Fired when the locale changes */
  localeChanged: EventEmitter<string>;
}

/**
 * Complete Time Controller Interface
 * Combines all the above interfaces into a single comprehensive type
 */
export interface TypedTimeController {
  /** Reactive state bindings */
  bindings: TimeControllerBindings;
  
  /** Available methods */
  methods: TimeControllerMethods;
  
  /** Event emitters */
  events: TimeControllerEvents;
  
  /** Time configuration options */
  options?: TimeOptions;
  
  // === Direct Method Access (for convenience) ===
  // Core methods are also available directly on the controller instance
  selectTime(time: Date): void;
  goToNextHour(): void;
  goToPreviousHour(): void;
  goToNextMinute(): void;
  goToPreviousMinute(): void;
  clearSelection(): void;
  setRangeSelectionMode(isRange: boolean): void;
  
  // === Getter/Setter Properties ===
  /** Selected time range with flexible property access */
  selectedTimeRange: {
    start: Date | null;
    end: Date | null;
    startTime: Date | null;
    endTime: Date | null;
  };
}

/**
 * Time Controller Factory - Function signature for creating time controllers
 */
export type TimeControllerFactory = (options?: TimeOptions) => TypedTimeController;

/**
 * Time Controller Instance - Represents a concrete instance of a time controller
 * This combines the controller class with its reactive state
 */
export interface TimeControllerInstance extends TypedTimeController {
  /** Whether the controller is initialized */
  readonly isInitialized: boolean;
  /** Controller metadata */
  readonly meta?: any;
  /** Internal adapter reference */
  readonly __adapter?: any;
}

// === Utility Types ===

/**
 * Binding Value Types - Helper types for accessing binding values
 */
export type BindingValue<T extends keyof TimeControllerBindings> = 
  TimeControllerBindings[T] extends Binding<infer U> ? U : never;

/**
 * Method Parameter Types - Helper types for method parameters
 */
export type SelectTimeParams = Parameters<TimeControllerMethods['selectTime']>;
export type SetHourParams = Parameters<TimeControllerMethods['setHour']>;
export type FormatTimeParams = Parameters<TimeControllerMethods['formatTime']>;

/**
 * Event Data Types - Helper types for event payloads
 */
export type TimeSelectedEventData = Date;
export type TimeRangeSelectedEventData = { startTime: Date | null; endTime: Date | null };
export type SegmentFocusedEventData = 'hours' | 'minutes' | 'seconds' | 'milliseconds' | 'period';
export type FormatChangedEventData = { use12Hour: boolean; showSeconds: boolean; showMilliseconds: boolean };
export type LocaleChangedEventData = string;

/**
 * Time State - Complete state interface
 */
export interface TimeState {
  selectedTime: Date | null;
  selectedTimeRange: TimeRange;
  focusedSegment: 'hours' | 'minutes' | 'seconds' | 'milliseconds' | 'period' | null;
  isRangeSelection: boolean;
  currentTime: Date;
  formattedTime: string;
  use12HourFormat: boolean;
  showSeconds: boolean;
  showMilliseconds: boolean;
  minuteStep: number;
  secondStep: number;
  locale: string;
  minTime: Date | null;
  maxTime: Date | null;
  disabledTimes: Date[];
  disabledHours: number[];
  disabledMinutes: number[];
  disabledSeconds: number[];
}
