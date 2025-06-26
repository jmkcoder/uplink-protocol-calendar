import { ITimeValidationService } from "../interfaces";

/**
 * TimeValidationService - Implementation of ITimeValidationService
 * Validates times against constraints
 */
export class TimeValidationService implements ITimeValidationService {
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
  ): boolean {
    // Check time range
    if (!this.isTimeInRange(time, minTime, maxTime)) {
      return false;
    }

    // Check disabled times
    if (this.isTimeDisabled(time, disabledTimes)) {
      return false;
    }

    // Check disabled hours
    if (this.isHourDisabled(time.getHours(), disabledHours)) {
      return false;
    }

    // Check disabled minutes
    if (this.isMinuteDisabled(time.getMinutes(), disabledMinutes)) {
      return false;
    }

    // Check disabled seconds
    if (this.isSecondDisabled(time.getSeconds(), disabledSeconds)) {
      return false;
    }

    return true;
  }

  /**
   * Check if a time is within allowed range
   * @param time Time to check
   * @param minTime Minimum allowed time
   * @param maxTime Maximum allowed time
   * @returns Whether time is in range
   */
  isTimeInRange(time: Date, minTime: Date | null, maxTime: Date | null): boolean {
    const timeMs = this.getTimeOnlyMs(time);

    if (minTime) {
      const minMs = this.getTimeOnlyMs(minTime);
      if (timeMs < minMs) {
        return false;
      }
    }

    if (maxTime) {
      const maxMs = this.getTimeOnlyMs(maxTime);
      if (timeMs > maxMs) {
        return false;
      }
    }

    return true;
  }

  /**
   * Check if a time is specifically disabled
   * @param time Time to check
   * @param disabledTimes Array of disabled times
   * @returns Whether time is disabled
   */
  isTimeDisabled(time: Date, disabledTimes: Date[]): boolean {
    const timeMs = this.getTimeOnlyMs(time);
    
    return disabledTimes.some(disabledTime => {
      const disabledMs = this.getTimeOnlyMs(disabledTime);
      return timeMs === disabledMs;
    });
  }

  /**
   * Check if an hour is disabled
   * @param hour Hour to check (0-23)
   * @param disabledHours Array of disabled hours
   * @returns Whether hour is disabled
   */
  isHourDisabled(hour: number, disabledHours: number[]): boolean {
    return disabledHours.includes(hour);
  }

  /**
   * Check if a minute is disabled
   * @param minute Minute to check (0-59)
   * @param disabledMinutes Array of disabled minutes
   * @returns Whether minute is disabled
   */
  isMinuteDisabled(minute: number, disabledMinutes: number[]): boolean {
    return disabledMinutes.includes(minute);
  }

  /**
   * Check if a second is disabled
   * @param second Second to check (0-59)
   * @param disabledSeconds Array of disabled seconds
   * @returns Whether second is disabled
   */
  isSecondDisabled(second: number, disabledSeconds: number[]): boolean {
    return disabledSeconds.includes(second);
  }

  /**
   * Validate time format string
   * @param timeString Time string to validate
   * @param format Expected format
   * @returns Whether format is valid
   */
  validateTimeFormat(timeString: string, format: string): boolean {
    try {
      // Basic validation patterns
      const patterns: { [key: string]: RegExp } = {
        'HH:mm': /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/,
        'HH:mm:ss': /^([01]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/,
        'h:mm tt': /^(1[0-2]|[1-9]):[0-5][0-9]\s*(AM|PM)$/i,
        'h:mm:ss tt': /^(1[0-2]|[1-9]):[0-5][0-9]:[0-5][0-9]\s*(AM|PM)$/i
      };

      const pattern = patterns[format];
      if (!pattern) {
        // Fallback: try to parse the string
        const parsed = this.parseBasicTimeString(timeString);
        return parsed !== null;
      }

      return pattern.test(timeString);
    } catch (error) {
      return false;
    }
  }

  /**
   * Get time-only milliseconds (ignoring date part)
   * @param time Date object
   * @returns Milliseconds since midnight
   */
  private getTimeOnlyMs(time: Date): number {
    return time.getHours() * 3600000 + 
           time.getMinutes() * 60000 + 
           time.getSeconds() * 1000 + 
           time.getMilliseconds();
  }

  /**
   * Basic time string parsing for validation
   * @param timeString Time string to parse
   * @returns Parsed time or null if invalid
   */
  private parseBasicTimeString(timeString: string): Date | null {
    try {
      const timeRegex = /^(\d{1,2}):(\d{2})(?::(\d{2}))?(?:\s*(AM|PM))?$/i;
      const match = timeString.match(timeRegex);

      if (!match) {
        return null;
      }

      let hours = parseInt(match[1], 10);
      const minutes = parseInt(match[2], 10);
      const seconds = match[3] ? parseInt(match[3], 10) : 0;
      const period = match[4]?.toUpperCase();

      // Handle 12-hour format
      if (period) {
        if (period === 'PM' && hours !== 12) {
          hours += 12;
        } else if (period === 'AM' && hours === 12) {
          hours = 0;
        }
      }

      // Validate ranges
      if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59 || seconds < 0 || seconds > 59) {
        return null;
      }

      const date = new Date();
      date.setHours(hours, minutes, seconds, 0);
      return date;
    } catch (error) {
      return null;
    }
  }
}
