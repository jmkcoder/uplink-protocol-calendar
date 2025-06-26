import { TimeRange } from "./time.interfaces";

/**
 * Time selection service interface
 * Handles time selection logic including single time and time range selection
 */
export interface ITimeSelectionService {
  /**
   * Select a specific time
   * @param time Time to select
   * @param currentSelectedTime Currently selected time
   * @param isRangeSelection Whether range selection is enabled
   * @param currentRange Current time range selection
   * @returns New selection state
   */
  selectTime(
    time: Date,
    currentSelectedTime: Date | null,
    isRangeSelection: boolean,
    currentRange: TimeRange
  ): {
    selectedTime: Date | null;
    selectedTimeRange: TimeRange;
  };

  /**
   * Clear current time selection
   * @returns Cleared selection state
   */
  clearSelection(): {
    selectedTime: Date | null;
    selectedTimeRange: TimeRange;
  };

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
  ): boolean;

  /**
   * Check if a time is in the selected range
   * @param time Time to check
   * @param range Selected time range
   * @returns Whether the time is in range
   */
  isTimeInRange(time: Date, range: TimeRange): boolean;

  /**
   * Check if a time is the start of a range
   * @param time Time to check
   * @param range Selected time range
   * @returns Whether the time is range start
   */
  isRangeStart(time: Date, range: TimeRange): boolean;

  /**
   * Check if a time is the end of a range
   * @param time Time to check
   * @param range Selected time range
   * @returns Whether the time is range end
   */
  isRangeEnd(time: Date, range: TimeRange): boolean;
}
