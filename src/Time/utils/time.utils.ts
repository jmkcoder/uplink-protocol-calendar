/**
 * Time utility functions
 * Provides common time manipulation and formatting utilities
 */

/**
 * Check if two times are the same (ignoring date part)
 * @param time1 First time
 * @param time2 Second time
 * @returns Whether times are the same
 */
export function isSameTime(time1: Date, time2: Date): boolean {
  return (
    time1.getHours() === time2.getHours() &&
    time1.getMinutes() === time2.getMinutes() &&
    time1.getSeconds() === time2.getSeconds() &&
    time1.getMilliseconds() === time2.getMilliseconds()
  );
}

/**
 * Check if a time is within a range
 * @param time Time to check
 * @param startTime Range start time
 * @param endTime Range end time
 * @returns Whether time is in range
 */
export function isTimeInRange(time: Date, startTime: Date, endTime: Date): boolean {
  const timeMs = getTimeOnlyMs(time);
  const startMs = getTimeOnlyMs(startTime);
  const endMs = getTimeOnlyMs(endTime);
  
  return timeMs >= startMs && timeMs <= endMs;
}

/**
 * Get time-only milliseconds (ignoring date part)
 * @param time Date object
 * @returns Milliseconds since midnight
 */
export function getTimeOnlyMs(time: Date): number {
  return time.getHours() * 3600000 + 
         time.getMinutes() * 60000 + 
         time.getSeconds() * 1000 + 
         time.getMilliseconds();
}

/**
 * Format time to string
 * @param time Time to format
 * @param format Format string
 * @returns Formatted time string
 */
export function formatTime(time: Date, format: string = 'HH:mm'): string {
  const hours24 = time.getHours();
  const hours12 = hours24 === 0 ? 12 : hours24 > 12 ? hours24 - 12 : hours24;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const milliseconds = time.getMilliseconds();
  const period = hours24 < 12 ? 'AM' : 'PM';

  return format
    .replace(/HH/g, hours24.toString().padStart(2, '0'))
    .replace(/H/g, hours24.toString())
    .replace(/hh/g, hours12.toString().padStart(2, '0'))
    .replace(/h/g, hours12.toString())
    .replace(/mm/g, minutes.toString().padStart(2, '0'))
    .replace(/m/g, minutes.toString())
    .replace(/ss/g, seconds.toString().padStart(2, '0'))
    .replace(/s/g, seconds.toString())
    .replace(/SSS/g, milliseconds.toString().padStart(3, '0'))
    .replace(/tt/g, period)
    .replace(/t/g, period.charAt(0));
}

/**
 * Parse time string to Date object
 * @param timeString Time string to parse
 * @returns Parsed Date object or null if invalid
 */
export function parseTime(timeString: string): Date | null {
  try {
    const timeRegex = /^(\d{1,2}):(\d{2})(?::(\d{2}))?(?:\.(\d{3}))?(?:\s*(AM|PM))?$/i;
    const match = timeString.match(timeRegex);

    if (!match) {
      return null;
    }

    let hours = parseInt(match[1], 10);
    const minutes = parseInt(match[2], 10);
    const seconds = match[3] ? parseInt(match[3], 10) : 0;
    const milliseconds = match[4] ? parseInt(match[4], 10) : 0;
    const period = match[5]?.toUpperCase();

    // Handle 12-hour format
    if (period) {
      if (period === 'PM' && hours !== 12) {
        hours += 12;
      } else if (period === 'AM' && hours === 12) {
        hours = 0;
      }
    }

    // Validate ranges
    if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59 || 
        seconds < 0 || seconds > 59 || milliseconds < 0 || milliseconds > 999) {
      return null;
    }

    const date = new Date();
    date.setHours(hours, minutes, seconds, milliseconds);
    return date;
  } catch (error) {
    return null;
  }
}

/**
 * Convert 24-hour to 12-hour format
 * @param hour24 Hour in 24-hour format (0-23)
 * @returns Object with hour12 (1-12) and period ('AM'|'PM')
 */
export function convertTo12Hour(hour24: number): { hour12: number; period: 'AM' | 'PM' } {
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
export function convertTo24Hour(hour12: number, period: 'AM' | 'PM'): number {
  if (period === 'AM') {
    return hour12 === 12 ? 0 : hour12;
  } else {
    return hour12 === 12 ? 12 : hour12 + 12;
  }
}

/**
 * Get current time with only time components (no date)
 * @returns Date object with today's date but current time
 */
export function getCurrentTimeOnly(): Date {
  const now = new Date();
  const timeOnly = new Date();
  timeOnly.setHours(now.getHours(), now.getMinutes(), now.getSeconds(), now.getMilliseconds());
  return timeOnly;
}

/**
 * Round time to nearest step interval
 * @param time Input time
 * @param minuteStep Step interval for minutes
 * @param secondStep Step interval for seconds
 * @returns Rounded time
 */
export function roundTimeToStep(time: Date, minuteStep: number = 1, secondStep: number = 1): Date {
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

/**
 * Create time from components
 * @param hours Hours (0-23)
 * @param minutes Minutes (0-59)
 * @param seconds Seconds (0-59)
 * @param milliseconds Milliseconds (0-999)
 * @returns Date object with specified time
 */
export function createTime(hours: number, minutes: number, seconds: number = 0, milliseconds: number = 0): Date {
  const time = new Date();
  time.setHours(hours, minutes, seconds, milliseconds);
  return time;
}

/**
 * Add time duration to a time
 * @param time Base time
 * @param hours Hours to add
 * @param minutes Minutes to add
 * @param seconds Seconds to add
 * @returns New time with added duration
 */
export function addTime(time: Date, hours: number = 0, minutes: number = 0, seconds: number = 0): Date {
  const newTime = new Date(time);
  newTime.setHours(newTime.getHours() + hours);
  newTime.setMinutes(newTime.getMinutes() + minutes);
  newTime.setSeconds(newTime.getSeconds() + seconds);
  return newTime;
}

/**
 * Get time difference in milliseconds
 * @param time1 First time
 * @param time2 Second time
 * @returns Difference in milliseconds (time1 - time2)
 */
export function getTimeDifference(time1: Date, time2: Date): number {
  return getTimeOnlyMs(time1) - getTimeOnlyMs(time2);
}
