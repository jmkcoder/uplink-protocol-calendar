/**
 * Time validation service interface
 * Validates times against constraints
 */
export interface ITimeValidationService {
  /**
   * Check if a time is valid according to constraints
   * @param time Time to validate
   * @param minTime Minimum allowed time
   * @param maxTime Maximum allowed time
   * @param disabledTimes Array of disabled times
   * @param disabledHours Array of disabled hours
   * @param disabledMinutes Array of disabled minutes
   * @param disabledSeconds Array of disabled seconds
   * @returns Whether the time is valid
   */
  isTimeValid(
    time: Date,
    minTime: Date | null,
    maxTime: Date | null,
    disabledTimes: Date[],
    disabledHours: number[],
    disabledMinutes: number[],
    disabledSeconds: number[]
  ): boolean;

  /**
   * Check if a time is within allowed range
   * @param time Time to check
   * @param minTime Minimum allowed time
   * @param maxTime Maximum allowed time
   * @returns Whether time is in range
   */
  isTimeInRange(time: Date, minTime: Date | null, maxTime: Date | null): boolean;

  /**
   * Check if a time is specifically disabled
   * @param time Time to check
   * @param disabledTimes Array of disabled times
   * @returns Whether time is disabled
   */
  isTimeDisabled(time: Date, disabledTimes: Date[]): boolean;

  /**
   * Check if an hour is disabled
   * @param hour Hour to check (0-23)
   * @param disabledHours Array of disabled hours
   * @returns Whether hour is disabled
   */
  isHourDisabled(hour: number, disabledHours: number[]): boolean;

  /**
   * Check if a minute is disabled
   * @param minute Minute to check (0-59)
   * @param disabledMinutes Array of disabled minutes
   * @returns Whether minute is disabled
   */
  isMinuteDisabled(minute: number, disabledMinutes: number[]): boolean;

  /**
   * Check if a second is disabled
   * @param second Second to check (0-59)
   * @param disabledSeconds Array of disabled seconds
   * @returns Whether second is disabled
   */
  isSecondDisabled(second: number, disabledSeconds: number[]): boolean;

  /**
   * Validate time format string
   * @param timeString Time string to validate
   * @param format Expected format
   * @returns Whether format is valid
   */
  validateTimeFormat(timeString: string, format: string): boolean;
}
