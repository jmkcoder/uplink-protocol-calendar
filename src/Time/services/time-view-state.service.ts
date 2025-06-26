import { Binding, createBinding } from "@uplink-protocol/core";
import { ITimeViewStateService, TimeSegment, TimePeriod, TimeRange } from "../interfaces";

/**
 * TimeViewStateService - Implementation of ITimeViewStateService
 * Manages UI state and bindings for time picker
 */
export class TimeViewStateService implements ITimeViewStateService {
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
    locale: string = 'en-US',
    isRangeSelection: boolean = false,
    minuteStep: number = 1,
    secondStep: number = 1
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
  } {
    const currentTime = new Date();
      return {
      selectedTime: createBinding<Date | null>(selectedTime),
      selectedTimeRange: createBinding<TimeRange>(selectedTimeRange),
      focusedSegment: createBinding<'hours' | 'minutes' | 'seconds' | 'milliseconds' | 'period' | null>(null),
      currentTime: createBinding<Date>(currentTime),
      formattedTime: createBinding<string>(selectedTime ? this.formatTimeForBinding(selectedTime, use12HourFormat, showSeconds) : ''),
      timeSegments: createBinding<{
        hours: TimeSegment[];
        minutes: TimeSegment[];
        seconds: TimeSegment[];
        milliseconds?: TimeSegment[];
        period?: TimePeriod;
      }>(generateTimeSegments()),      use12HourFormat: createBinding<boolean>(use12HourFormat),
      showSeconds: createBinding<boolean>(showSeconds),
      showMilliseconds: createBinding<boolean>(showMilliseconds),
      locale: createBinding<string>(locale),
      isRangeSelection: createBinding<boolean>(isRangeSelection),
      minuteStep: createBinding<number>(minuteStep),
      secondStep: createBinding<number>(secondStep)
    };
  }

  /**
   * Update all bindings with new values
   * @param bindings Current bindings
   * @param newValues New values to set
   */
  updateBindings(bindings: any, newValues: any): void {
    if (newValues.selectedTime !== undefined) {
      bindings.selectedTime.set(newValues.selectedTime);
    }
    if (newValues.selectedTimeRange !== undefined) {
      bindings.selectedTimeRange.set(newValues.selectedTimeRange);
    }
    if (newValues.focusedSegment !== undefined) {
      bindings.focusedSegment.set(newValues.focusedSegment);
    }
    if (newValues.currentTime !== undefined) {
      bindings.currentTime.set(newValues.currentTime);
    }
    if (newValues.formattedTime !== undefined) {
      bindings.formattedTime.set(newValues.formattedTime);
    }
    if (newValues.timeSegments !== undefined) {
      bindings.timeSegments.set(newValues.timeSegments);
    }
    if (newValues.use12HourFormat !== undefined) {
      bindings.use12HourFormat.set(newValues.use12HourFormat);
    }
    if (newValues.showSeconds !== undefined) {
      bindings.showSeconds.set(newValues.showSeconds);
    }
    if (newValues.showMilliseconds !== undefined) {
      bindings.showMilliseconds.set(newValues.showMilliseconds);
    }    if (newValues.locale !== undefined) {
      bindings.locale.set(newValues.locale);
    }
    if (newValues.isRangeSelection !== undefined) {
      bindings.isRangeSelection.set(newValues.isRangeSelection);
    }
    if (newValues.minuteStep !== undefined) {
      bindings.minuteStep.set(newValues.minuteStep);
    }
    if (newValues.secondStep !== undefined) {
      bindings.secondStep.set(newValues.secondStep);
    }
  }

  /**
   * Update selected time binding
   * @param binding Selected time binding
   * @param time New time value
   */
  updateSelectedTime(binding: Binding<Date | null>, time: Date | null): void {
    binding.set(time);
  }

  /**
   * Update focused segment binding
   * @param binding Focused segment binding
   * @param segment New focused segment
   */
  updateFocusedSegment(
    binding: Binding<'hours' | 'minutes' | 'seconds' | 'milliseconds' | 'period' | null>,
    segment: 'hours' | 'minutes' | 'seconds' | 'milliseconds' | 'period' | null
  ): void {
    binding.set(segment);
  }

  /**
   * Format time for binding display
   * @param time Time to format
   * @param use12Hour Whether to use 12-hour format
   * @param showSeconds Whether to show seconds
   * @returns Formatted time string
   */
  private formatTimeForBinding(time: Date, use12Hour: boolean, showSeconds: boolean): string {
    const options: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: use12Hour
    };

    if (showSeconds) {
      options.second = '2-digit';
    }

    try {
      return new Intl.DateTimeFormat('en-US', options).format(time);
    } catch (error) {
      // Fallback format
      const hours = use12Hour ? 
        (time.getHours() % 12 || 12).toString().padStart(2, '0') :
        time.getHours().toString().padStart(2, '0');
      const minutes = time.getMinutes().toString().padStart(2, '0');
      const seconds = showSeconds ? `:${time.getSeconds().toString().padStart(2, '0')}` : '';
      const period = use12Hour ? (time.getHours() < 12 ? ' AM' : ' PM') : '';
      
      return `${hours}:${minutes}${seconds}${period}`;
    }
  }
}
