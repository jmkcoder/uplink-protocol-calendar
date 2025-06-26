/**
 * Time service interface
 * Responsible for time generation and navigation functions
 */
export interface ITimeService {
  /**
   * Get hour display values (12-hour or 24-hour format)
   * @param use12Hour Whether to use 12-hour format
   * @returns Array of hour display strings
   */
  getHourDisplayValues(use12Hour: boolean): string[];

  /**
   * Get minute display values with step interval
   * @param step Step interval for minutes
   * @returns Array of minute display strings
   */
  getMinuteDisplayValues(step: number): string[];

  /**
   * Get second display values with step interval
   * @param step Step interval for seconds
   * @returns Array of second display strings
   */
  getSecondDisplayValues(step: number): string[];

  /**
   * Get period names (AM/PM) for 12-hour format
   * @param locale Current locale
   * @returns Array of period names
   */
  getPeriodNames(locale: string): string[];

  /**
   * Convert 24-hour to 12-hour format
   * @param hour24 Hour in 24-hour format (0-23)
   * @returns Object with hour12 (1-12) and period ('AM'|'PM')
   */
  convertTo12Hour(hour24: number): { hour12: number; period: 'AM' | 'PM' };

  /**
   * Convert 12-hour to 24-hour format
   * @param hour12 Hour in 12-hour format (1-12)
   * @param period AM or PM
   * @returns Hour in 24-hour format (0-23)
   */
  convertTo24Hour(hour12: number, period: 'AM' | 'PM'): number;

  /**
   * Check if a time is today
   * @param time Time to check
   * @returns Whether the time is today
   */
  isToday(time: Date): boolean;

  /**
   * Get current time
   * @returns Current time as Date object
   */
  getCurrentTime(): Date;

  /**
   * Round time to nearest step interval
   * @param time Input time
   * @param minuteStep Step interval for minutes
   * @param secondStep Step interval for seconds
   * @returns Rounded time
   */
  roundToStep(time: Date, minuteStep: number, secondStep: number): Date;
}
