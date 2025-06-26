import { ITimeService } from "../interfaces";

/**
 * TimeService - Implementation of ITimeService
 * Responsible for time generation and navigation functions
 */
export class TimeService implements ITimeService {
  /**
   * Get hour display values (12-hour or 24-hour format)
   * @param use12Hour Whether to use 12-hour format
   * @returns Array of hour display strings
   */
  getHourDisplayValues(use12Hour: boolean): string[] {
    const hours: string[] = [];
    
    if (use12Hour) {
      // 12-hour format: 12, 1, 2, ..., 11
      for (let i = 12; i <= 12; i++) {
        hours.push(i.toString().padStart(2, '0'));
      }
      for (let i = 1; i <= 11; i++) {
        hours.push(i.toString().padStart(2, '0'));
      }
    } else {
      // 24-hour format: 00, 01, 02, ..., 23
      for (let i = 0; i <= 23; i++) {
        hours.push(i.toString().padStart(2, '0'));
      }
    }
    
    return hours;
  }

  /**
   * Get minute display values with step interval
   * @param step Step interval for minutes
   * @returns Array of minute display strings
   */
  getMinuteDisplayValues(step: number): string[] {
    const minutes: string[] = [];
    
    for (let i = 0; i < 60; i += step) {
      minutes.push(i.toString().padStart(2, '0'));
    }
    
    return minutes;
  }

  /**
   * Get second display values with step interval
   * @param step Step interval for seconds
   * @returns Array of second display strings
   */
  getSecondDisplayValues(step: number): string[] {
    const seconds: string[] = [];
    
    for (let i = 0; i < 60; i += step) {
      seconds.push(i.toString().padStart(2, '0'));
    }
    
    return seconds;
  }

  /**
   * Get period names (AM/PM) for 12-hour format
   * @param locale Current locale
   * @returns Array of period names
   */
  getPeriodNames(locale: string): string[] {
    // Create formatter for AM/PM
    const formatter = new Intl.DateTimeFormat(locale, {
      hour: 'numeric',
      hour12: true
    });

    // Get AM period
    const amDate = new Date();
    amDate.setHours(9, 0, 0, 0); // 9 AM
    const amFormatted = formatter.format(amDate);
    const amPeriod = amFormatted.replace(/\d+/g, '').trim();

    // Get PM period
    const pmDate = new Date();
    pmDate.setHours(21, 0, 0, 0); // 9 PM
    const pmFormatted = formatter.format(pmDate);
    const pmPeriod = pmFormatted.replace(/\d+/g, '').trim();

    return [amPeriod, pmPeriod];
  }

  /**
   * Convert 24-hour to 12-hour format
   * @param hour24 Hour in 24-hour format (0-23)
   * @returns Object with hour12 (1-12) and period ('AM'|'PM')
   */
  convertTo12Hour(hour24: number): { hour12: number; period: 'AM' | 'PM' } {
    const period = hour24 < 12 ? 'AM' : 'PM';
    let hour12 = hour24 % 12;
    if (hour12 === 0) hour12 = 12;
    
    return { hour12, period };
  }

  /**
   * Convert 12-hour to 24-hour format
   * @param hour12 Hour in 12-hour format (1-12)
   * @param period AM or PM
   * @returns Hour in 24-hour format (0-23)
   */
  convertTo24Hour(hour12: number, period: 'AM' | 'PM'): number {
    if (period === 'AM') {
      return hour12 === 12 ? 0 : hour12;
    } else {
      return hour12 === 12 ? 12 : hour12 + 12;
    }
  }

  /**
   * Check if a time is today
   * @param time Time to check
   * @returns Whether the time is today
   */
  isToday(time: Date): boolean {
    const today = new Date();
    return (
      time.getFullYear() === today.getFullYear() &&
      time.getMonth() === today.getMonth() &&
      time.getDate() === today.getDate()
    );
  }

  /**
   * Get current time
   * @returns Current time as Date object
   */
  getCurrentTime(): Date {
    return new Date();
  }

  /**
   * Round time to nearest step interval
   * @param time Input time
   * @param minuteStep Step interval for minutes
   * @param secondStep Step interval for seconds
   * @returns Rounded time
   */
  roundToStep(time: Date, minuteStep: number, secondStep: number): Date {
    const rounded = new Date(time);
    
    // Round minutes to step
    const minutes = rounded.getMinutes();
    const roundedMinutes = Math.round(minutes / minuteStep) * minuteStep;
    rounded.setMinutes(roundedMinutes);
    
    // Round seconds to step
    const seconds = rounded.getSeconds();
    const roundedSeconds = Math.round(seconds / secondStep) * secondStep;
    rounded.setSeconds(roundedSeconds);
    
    // Reset milliseconds
    rounded.setMilliseconds(0);
    
    return rounded;
  }
}
