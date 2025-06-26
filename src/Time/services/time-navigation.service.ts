import { ITimeNavigationService } from "../interfaces";

/**
 * TimeNavigationService - Implementation of ITimeNavigationService
 * Handles time navigation and focus management
 */
export class TimeNavigationService implements ITimeNavigationService {
  /**
   * Navigate to next hour
   * @param currentTime Current time
   * @param use12Hour Whether using 12-hour format
   * @returns Next hour time
   */
  goToNextHour(currentTime: Date, use12Hour: boolean): Date {
    const newTime = new Date(currentTime);
    const currentHour = newTime.getHours();
    
    if (use12Hour) {      // In 12-hour format, cycle through 1-12
      const hour12 = currentHour % 12;
      const period = currentHour < 12 ? 'AM' : 'PM';
      
      if (hour12 === 11) {
        // Toggle period when going from 11 to 12
        const nextHour24 = period === 'AM' ? 12 : 0;
        newTime.setHours(nextHour24);
      } else {
        newTime.setHours(currentHour + 1);
      }
    } else {
      // In 24-hour format, cycle through 0-23
      newTime.setHours((currentHour + 1) % 24);
    }
    
    return newTime;
  }

  /**
   * Navigate to previous hour
   * @param currentTime Current time
   * @param use12Hour Whether using 12-hour format
   * @returns Previous hour time
   */
  goToPreviousHour(currentTime: Date, use12Hour: boolean): Date {
    const newTime = new Date(currentTime);
    const currentHour = newTime.getHours();
    
    if (use12Hour) {
      // In 12-hour format, cycle through 1-12
      const hour12 = currentHour % 12;
      const period = currentHour < 12 ? 'AM' : 'PM';
      
      if (hour12 === 0) {
        // Going from 12 to 11, toggle period
        const prevHour24 = period === 'AM' ? 23 : 11;
        newTime.setHours(prevHour24);
      } else {
        newTime.setHours(currentHour - 1);
      }
    } else {
      // In 24-hour format, cycle through 0-23
      newTime.setHours(currentHour === 0 ? 23 : currentHour - 1);
    }
    
    return newTime;
  }

  /**
   * Navigate to next minute
   * @param currentTime Current time
   * @param step Minute step interval
   * @returns Next minute time
   */
  goToNextMinute(currentTime: Date, step: number): Date {
    const newTime = new Date(currentTime);
    const currentMinute = newTime.getMinutes();
    const nextMinute = Math.floor(currentMinute / step) * step + step;
    
    if (nextMinute >= 60) {
      newTime.setMinutes(0);
      return this.goToNextHour(newTime, false); // Always use 24-hour logic for internal navigation
    } else {
      newTime.setMinutes(nextMinute);
    }
    
    return newTime;
  }

  /**
   * Navigate to previous minute
   * @param currentTime Current time
   * @param step Minute step interval
   * @returns Previous minute time
   */
  goToPreviousMinute(currentTime: Date, step: number): Date {
    const newTime = new Date(currentTime);
    const currentMinute = newTime.getMinutes();
    const prevMinute = Math.ceil(currentMinute / step) * step - step;
    
    if (prevMinute < 0) {
      newTime.setMinutes(60 - step);
      return this.goToPreviousHour(newTime, false); // Always use 24-hour logic for internal navigation
    } else {
      newTime.setMinutes(prevMinute);
    }
    
    return newTime;
  }

  /**
   * Navigate to next second
   * @param currentTime Current time
   * @param step Second step interval
   * @returns Next second time
   */
  goToNextSecond(currentTime: Date, step: number): Date {
    const newTime = new Date(currentTime);
    const currentSecond = newTime.getSeconds();
    const nextSecond = Math.floor(currentSecond / step) * step + step;
    
    if (nextSecond >= 60) {
      newTime.setSeconds(0);
      return this.goToNextMinute(newTime, 1);
    } else {
      newTime.setSeconds(nextSecond);
    }
    
    return newTime;
  }

  /**
   * Navigate to previous second
   * @param currentTime Current time
   * @param step Second step interval
   * @returns Previous second time
   */
  goToPreviousSecond(currentTime: Date, step: number): Date {
    const newTime = new Date(currentTime);
    const currentSecond = newTime.getSeconds();
    const prevSecond = Math.ceil(currentSecond / step) * step - step;
    
    if (prevSecond < 0) {
      newTime.setSeconds(60 - step);
      return this.goToPreviousMinute(newTime, 1);
    } else {
      newTime.setSeconds(prevSecond);
    }
    
    return newTime;
  }

  /**
   * Set specific hour
   * @param currentTime Current time
   * @param hour Hour to set (0-23 or 1-12 depending on format)
   * @param use12Hour Whether using 12-hour format
   * @param period AM/PM period for 12-hour format
   * @returns Time with new hour
   */
  setHour(currentTime: Date, hour: number, use12Hour: boolean, period?: 'AM' | 'PM'): Date {
    const newTime = new Date(currentTime);
    
    if (use12Hour && period) {
      let hour24 = hour;
      if (period === 'PM' && hour !== 12) {
        hour24 = hour + 12;
      } else if (period === 'AM' && hour === 12) {
        hour24 = 0;
      }
      newTime.setHours(hour24);
    } else {
      newTime.setHours(hour);
    }
    
    return newTime;
  }

  /**
   * Set specific minute
   * @param currentTime Current time
   * @param minute Minute to set (0-59)
   * @returns Time with new minute
   */
  setMinute(currentTime: Date, minute: number): Date {
    const newTime = new Date(currentTime);
    newTime.setMinutes(minute);
    return newTime;
  }

  /**
   * Set specific second
   * @param currentTime Current time
   * @param second Second to set (0-59)
   * @returns Time with new second
   */
  setSecond(currentTime: Date, second: number): Date {
    const newTime = new Date(currentTime);
    newTime.setSeconds(second);
    return newTime;
  }

  /**
   * Set specific millisecond
   * @param currentTime Current time
   * @param millisecond Millisecond to set (0-999)
   * @returns Time with new millisecond
   */
  setMillisecond(currentTime: Date, millisecond: number): Date {
    const newTime = new Date(currentTime);
    newTime.setMilliseconds(millisecond);
    return newTime;
  }

  /**
   * Toggle AM/PM period
   * @param currentTime Current time
   * @returns Time with toggled period
   */
  togglePeriod(currentTime: Date): Date {
    const newTime = new Date(currentTime);
    const currentHour = newTime.getHours();
    
    if (currentHour < 12) {
      // AM to PM
      newTime.setHours(currentHour + 12);
    } else {
      // PM to AM
      newTime.setHours(currentHour - 12);
    }
    
    return newTime;
  }

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
  ): 'hours' | 'minutes' | 'seconds' | 'milliseconds' | 'period' | null {
    const segments = this.getSegmentOrder(showSeconds, showMilliseconds, use12Hour);
    
    if (currentSegment === null) {
      return segments[0] || null;
    }
    
    const currentIndex = segments.indexOf(currentSegment);
    if (currentIndex === -1 || currentIndex === segments.length - 1) {
      return segments[0] || null; // Wrap to first
    }
    
    return segments[currentIndex + 1];
  }

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
  ): 'hours' | 'minutes' | 'seconds' | 'milliseconds' | 'period' | null {
    const segments = this.getSegmentOrder(showSeconds, showMilliseconds, use12Hour);
    
    if (currentSegment === null) {
      return segments[segments.length - 1] || null;
    }
    
    const currentIndex = segments.indexOf(currentSegment);
    if (currentIndex === -1 || currentIndex === 0) {
      return segments[segments.length - 1] || null; // Wrap to last
    }
    
    return segments[currentIndex - 1];
  }

  /**
   * Get the order of segments based on display options
   * @param showSeconds Whether seconds are shown
   * @param showMilliseconds Whether milliseconds are shown
   * @param use12Hour Whether using 12-hour format
   * @returns Ordered array of segments
   */
  private getSegmentOrder(
    showSeconds: boolean,
    showMilliseconds: boolean,
    use12Hour: boolean
  ): ('hours' | 'minutes' | 'seconds' | 'milliseconds' | 'period')[] {
    const segments: ('hours' | 'minutes' | 'seconds' | 'milliseconds' | 'period')[] = ['hours', 'minutes'];
    
    if (showSeconds) {
      segments.push('seconds');
    }
    
    if (showMilliseconds && showSeconds) {
      segments.push('milliseconds');
    }
    
    if (use12Hour) {
      segments.push('period');
    }
    
    return segments;
  }
}
