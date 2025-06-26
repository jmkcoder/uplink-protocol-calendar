import { ITimeSelectionService, TimeRange } from "../interfaces";

/**
 * TimeSelectionService - Implementation of ITimeSelectionService
 * Handles time selection logic including single time and time range selection
 */
export class TimeSelectionService implements ITimeSelectionService {
  /**
   * Select a specific time
   * @param time Time to select
   * @param currentSelectedTime Currently selected time
   * @param isRangeSelection Whether range selection is enabled
   * @param currentRange Current time range selection
   * @returns New selection state
   */  selectTime(
    time: Date,
    _currentSelectedTime: Date | null,
    isRangeSelection: boolean,
    currentRange: TimeRange
  ): {
    selectedTime: Date | null;
    selectedTimeRange: TimeRange;
  } {
    if (!isRangeSelection) {
      // Single time selection
      return {
        selectedTime: time,
        selectedTimeRange: { startTime: null, endTime: null }
      };
    }

    // Range selection logic
    if (!currentRange.startTime || (currentRange.startTime && currentRange.endTime)) {
      // Start new range
      return {
        selectedTime: time,
        selectedTimeRange: { startTime: time, endTime: null }
      };
    } else if (currentRange.startTime && !currentRange.endTime) {
      // Complete the range
      const startTime = currentRange.startTime;
      const endTime = time;
      
      // Ensure start is before end
      if (startTime.getTime() > endTime.getTime()) {
        return {
          selectedTime: endTime,
          selectedTimeRange: { startTime: endTime, endTime: startTime }
        };
      } else {
        return {
          selectedTime: endTime,
          selectedTimeRange: { startTime, endTime }
        };
      }
    }

    // Fallback
    return {
      selectedTime: time,
      selectedTimeRange: { startTime: time, endTime: null }
    };
  }

  /**
   * Clear current time selection
   * @returns Cleared selection state
   */
  clearSelection(): {
    selectedTime: Date | null;
    selectedTimeRange: TimeRange;
  } {
    return {
      selectedTime: null,
      selectedTimeRange: { startTime: null, endTime: null }
    };
  }

  /**
   * Check if a time is selected
   * @param time Time to check
   * @param selectedTime Currently selected time
   * @param selectedRange Currently selected range
   * @returns Whether the time is selected
   */
  isTimeSelected(
    time: Date,
    selectedTime: Date | null,
    selectedRange: TimeRange
  ): boolean {
    // Check single selection
    if (selectedTime && this.isSameTime(time, selectedTime)) {
      return true;
    }

    // Check range selection
    if (selectedRange.startTime && this.isSameTime(time, selectedRange.startTime)) {
      return true;
    }
    if (selectedRange.endTime && this.isSameTime(time, selectedRange.endTime)) {
      return true;
    }

    return false;
  }

  /**
   * Check if a time is in the selected range
   * @param time Time to check
   * @param range Selected time range
   * @returns Whether the time is in range
   */
  isTimeInRange(time: Date, range: TimeRange): boolean {
    if (!range.startTime || !range.endTime) {
      return false;
    }

    const timeMs = time.getTime();
    const startMs = range.startTime.getTime();
    const endMs = range.endTime.getTime();

    return timeMs >= startMs && timeMs <= endMs;
  }

  /**
   * Check if a time is the start of a range
   * @param time Time to check
   * @param range Selected time range
   * @returns Whether the time is range start
   */
  isRangeStart(time: Date, range: TimeRange): boolean {
    return range.startTime ? this.isSameTime(time, range.startTime) : false;
  }

  /**
   * Check if a time is the end of a range
   * @param time Time to check
   * @param range Selected time range
   * @returns Whether the time is range end
   */
  isRangeEnd(time: Date, range: TimeRange): boolean {
    return range.endTime ? this.isSameTime(time, range.endTime) : false;
  }

  /**
   * Helper method to check if two times are the same (to the second)
   * @param time1 First time
   * @param time2 Second time
   * @returns Whether times are the same
   */
  private isSameTime(time1: Date, time2: Date): boolean {
    return (
      time1.getHours() === time2.getHours() &&
      time1.getMinutes() === time2.getMinutes() &&
      time1.getSeconds() === time2.getSeconds()
    );
  }
}
