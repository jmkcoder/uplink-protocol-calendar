import { TimeOptions } from "./time.interfaces";

/**
 * Time constraints service interface
 * Manages time constraints and validation
 */
export interface ITimeConstraintsService {
  /**
   * Check if a time is disabled based on all constraints
   * @param time Time to check
   * @param minTime Minimum allowed time
   * @param maxTime Maximum allowed time
   * @param disabledTimes Array of disabled times
   * @param disabledHours Array of disabled hours
   * @param disabledMinutes Array of disabled minutes
   * @param disabledSeconds Array of disabled seconds
   * @returns Whether the time is disabled
   */
  isTimeDisabled(
    time: Date,
    minTime: Date | null,
    maxTime: Date | null,
    disabledTimes: Date[],
    disabledHours: number[],
    disabledMinutes: number[],
    disabledSeconds: number[]
  ): boolean;

  /**
   * Validate and set disabled hours
   * @param hours Array of hours to disable (0-23)
   * @returns Validated array of disabled hours
   */
  setDisabledHours(hours: number[]): number[];

  /**
   * Validate and set disabled minutes
   * @param minutes Array of minutes to disable (0-59)
   * @returns Validated array of disabled minutes
   */
  setDisabledMinutes(minutes: number[]): number[];

  /**
   * Validate and set disabled seconds
   * @param seconds Array of seconds to disable (0-59)
   * @returns Validated array of disabled seconds
   */
  setDisabledSeconds(seconds: number[]): number[];

  /**
   * Add a disabled time
   * @param time Time to disable
   * @param currentDisabledTimes Current array of disabled times
   * @returns Updated array of disabled times
   */
  addDisabledTime(time: Date, currentDisabledTimes: Date[]): Date[];

  /**
   * Remove a disabled time
   * @param time Time to enable
   * @param currentDisabledTimes Current array of disabled times
   * @returns Updated array of disabled times
   */
  removeDisabledTime(time: Date, currentDisabledTimes: Date[]): Date[];

  /**
   * Add a disabled hour
   * @param hour Hour to disable (0-23)
   * @param currentDisabledHours Current array of disabled hours
   * @returns Updated array of disabled hours
   */
  addDisabledHour(hour: number, currentDisabledHours: number[]): number[];

  /**
   * Remove a disabled hour
   * @param hour Hour to enable (0-23)
   * @param currentDisabledHours Current array of disabled hours
   * @returns Updated array of disabled hours
   */
  removeDisabledHour(hour: number, currentDisabledHours: number[]): number[];

  /**
   * Validate time options
   * @param options Time options to validate
   * @returns Validated time options
   */
  validateTimeOptions(options: TimeOptions): TimeOptions;

  /**
   * Check if time step is valid
   * @param step Step value to validate
   * @param type Type of step ('minute' or 'second')
   * @returns Whether the step is valid
   */
  isValidStep(step: number, type: 'minute' | 'second'): boolean;
}
