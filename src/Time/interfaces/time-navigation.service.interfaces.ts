/**
 * Time navigation service interface
 * Handles time navigation and focus management
 */
export interface ITimeNavigationService {
  /**
   * Navigate to next hour
   * @param currentTime Current time
   * @param use12Hour Whether using 12-hour format
   * @returns Next hour time
   */
  goToNextHour(currentTime: Date, use12Hour: boolean): Date;

  /**
   * Navigate to previous hour
   * @param currentTime Current time
   * @param use12Hour Whether using 12-hour format
   * @returns Previous hour time
   */
  goToPreviousHour(currentTime: Date, use12Hour: boolean): Date;

  /**
   * Navigate to next minute
   * @param currentTime Current time
   * @param step Minute step interval
   * @returns Next minute time
   */
  goToNextMinute(currentTime: Date, step: number): Date;

  /**
   * Navigate to previous minute
   * @param currentTime Current time
   * @param step Minute step interval
   * @returns Previous minute time
   */
  goToPreviousMinute(currentTime: Date, step: number): Date;

  /**
   * Navigate to next second
   * @param currentTime Current time
   * @param step Second step interval
   * @returns Next second time
   */
  goToNextSecond(currentTime: Date, step: number): Date;

  /**
   * Navigate to previous second
   * @param currentTime Current time
   * @param step Second step interval
   * @returns Previous second time
   */
  goToPreviousSecond(currentTime: Date, step: number): Date;

  /**
   * Set specific hour
   * @param currentTime Current time
   * @param hour Hour to set (0-23 or 1-12 depending on format)
   * @param use12Hour Whether using 12-hour format
   * @param period AM/PM period for 12-hour format
   * @returns Time with new hour
   */
  setHour(currentTime: Date, hour: number, use12Hour: boolean, period?: 'AM' | 'PM'): Date;

  /**
   * Set specific minute
   * @param currentTime Current time
   * @param minute Minute to set (0-59)
   * @returns Time with new minute
   */
  setMinute(currentTime: Date, minute: number): Date;

  /**
   * Set specific second
   * @param currentTime Current time
   * @param second Second to set (0-59)
   * @returns Time with new second
   */
  setSecond(currentTime: Date, second: number): Date;

  /**
   * Set specific millisecond
   * @param currentTime Current time
   * @param millisecond Millisecond to set (0-999)
   * @returns Time with new millisecond
   */
  setMillisecond(currentTime: Date, millisecond: number): Date;

  /**
   * Toggle AM/PM period
   * @param currentTime Current time
   * @returns Time with toggled period
   */
  togglePeriod(currentTime: Date): Date;

  /**
   * Move focus to next segment
   * @param currentSegment Current focused segment
   * @param showSeconds Whether seconds are shown
   * @param showMilliseconds Whether milliseconds are shown
   * @param use12Hour Whether using 12-hour format
   * @returns Next segment to focus
   */
  moveFocusToNextSegment(
    currentSegment: 'hours' | 'minutes' | 'seconds' | 'milliseconds' | 'period' | null,
    showSeconds: boolean,
    showMilliseconds: boolean,
    use12Hour: boolean
  ): 'hours' | 'minutes' | 'seconds' | 'milliseconds' | 'period' | null;

  /**
   * Move focus to previous segment
   * @param currentSegment Current focused segment
   * @param showSeconds Whether seconds are shown
   * @param showMilliseconds Whether milliseconds are shown
   * @param use12Hour Whether using 12-hour format
   * @returns Previous segment to focus
   */
  moveFocusToPreviousSegment(
    currentSegment: 'hours' | 'minutes' | 'seconds' | 'milliseconds' | 'period' | null,
    showSeconds: boolean,
    showMilliseconds: boolean,
    use12Hour: boolean
  ): 'hours' | 'minutes' | 'seconds' | 'milliseconds' | 'period' | null;
}
