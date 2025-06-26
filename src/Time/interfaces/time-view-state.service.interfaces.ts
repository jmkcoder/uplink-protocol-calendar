import { Binding } from "@uplink-protocol/core";
import { TimeSegment, TimePeriod, TimeRange } from "./time.interfaces";

/**
 * Time view state service interface
 * Manages UI state and bindings for time picker
 */
export interface ITimeViewStateService {
  /**
   * Initialize reactive bindings for time picker
   * @param selectedTime Currently selected time
   * @param selectedTimeRange Currently selected time range
   * @param use12HourFormat Whether to use 12-hour format
   * @param showSeconds Whether to show seconds
   * @param showMilliseconds Whether to show milliseconds
   * @param generateTimeSegments Function to generate time segments
   * @returns Initialized bindings
   */  initializeBindings(
    selectedTime: Date | null,
    selectedTimeRange: TimeRange,
    use12HourFormat: boolean,
    showSeconds: boolean,
    showMilliseconds: boolean,
    generateTimeSegments: () => any,
    locale?: string,
    isRangeSelection?: boolean,
    minuteStep?: number,
    secondStep?: number
  ): {
    selectedTime: Binding<Date | null>;
    selectedTimeRange: Binding<TimeRange>;
    focusedSegment: Binding<'hours' | 'minutes' | 'seconds' | 'milliseconds' | 'period' | null>;
    currentTime: Binding<Date>;
    formattedTime: Binding<string>;
    timeSegments: Binding<{
      hours: TimeSegment[];
      minutes: TimeSegment[];
      seconds: TimeSegment[];
      milliseconds?: TimeSegment[];
      period?: TimePeriod;
    }>;
    use12HourFormat: Binding<boolean>;
    showSeconds: Binding<boolean>;
    showMilliseconds: Binding<boolean>;
    locale: Binding<string>;
    isRangeSelection: Binding<boolean>;
    minuteStep: Binding<number>;
    secondStep: Binding<number>;
  };

  /**
   * Update all bindings with new values
   * @param bindings Current bindings
   * @param newValues New values to set
   */
  updateBindings(bindings: any, newValues: any): void;

  /**
   * Update selected time binding
   * @param binding Selected time binding
   * @param time New time value
   */
  updateSelectedTime(binding: Binding<Date | null>, time: Date | null): void;

  /**
   * Update focused segment binding
   * @param binding Focused segment binding
   * @param segment New focused segment
   */
  updateFocusedSegment(
    binding: Binding<'hours' | 'minutes' | 'seconds' | 'milliseconds' | 'period' | null>,
    segment: 'hours' | 'minutes' | 'seconds' | 'milliseconds' | 'period' | null
  ): void;
}
