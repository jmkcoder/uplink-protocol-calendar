import { ITimeConstraintsService, TimeOptions } from "../interfaces";

/**
 * TimeConstraintsService - Implementation of ITimeConstraintsService
 * Manages time constraints and validation
 */
export class TimeConstraintsService implements ITimeConstraintsService {
  /**
   * Check if a time is disabled based on all constraints
   */
  isTimeDisabled(
    time: Date,
    minTime: Date | null,
    maxTime: Date | null,
    disabledTimes: Date[],
    disabledHours: number[],
    disabledMinutes: number[],
    disabledSeconds: number[]
  ): boolean {
    // Check time range
    if (minTime && this.getTimeOnlyMs(time) < this.getTimeOnlyMs(minTime)) return true;
    if (maxTime && this.getTimeOnlyMs(time) > this.getTimeOnlyMs(maxTime)) return true;
    
    // Check disabled times
    if (disabledTimes.some(dt => this.getTimeOnlyMs(time) === this.getTimeOnlyMs(dt))) return true;
    
    // Check disabled components
    if (disabledHours.includes(time.getHours())) return true;
    if (disabledMinutes.includes(time.getMinutes())) return true;
    if (disabledSeconds.includes(time.getSeconds())) return true;
    
    return false;
  }

  setDisabledHours(hours: number[]): number[] {
    return hours.filter(h => h >= 0 && h <= 23);
  }

  setDisabledMinutes(minutes: number[]): number[] {
    return minutes.filter(m => m >= 0 && m <= 59);
  }

  setDisabledSeconds(seconds: number[]): number[] {
    return seconds.filter(s => s >= 0 && s <= 59);
  }

  addDisabledTime(time: Date, currentDisabledTimes: Date[]): Date[] {
    return [...currentDisabledTimes, new Date(time)];
  }

  removeDisabledTime(time: Date, currentDisabledTimes: Date[]): Date[] {
    const timeMs = this.getTimeOnlyMs(time);
    return currentDisabledTimes.filter(dt => this.getTimeOnlyMs(dt) !== timeMs);
  }

  addDisabledHour(hour: number, currentDisabledHours: number[]): number[] {
    if (hour >= 0 && hour <= 23 && !currentDisabledHours.includes(hour)) {
      return [...currentDisabledHours, hour];
    }
    return currentDisabledHours;
  }

  removeDisabledHour(hour: number, currentDisabledHours: number[]): number[] {
    return currentDisabledHours.filter(h => h !== hour);
  }

  validateTimeOptions(options: TimeOptions): TimeOptions {
    const validated = { ...options };
    
    if (validated.minuteStep && !this.isValidStep(validated.minuteStep, 'minute')) {
      validated.minuteStep = 1;
    }
    if (validated.secondStep && !this.isValidStep(validated.secondStep, 'second')) {
      validated.secondStep = 1;
    }
    
    return validated;
  }
  isValidStep(step: number, type: 'minute' | 'second'): boolean {
    // Step validation applies to both minutes and seconds
    const validSteps = [1, 5, 10, 15, 30];
    const isValidForType = type === 'minute' || type === 'second';
    return isValidForType && validSteps.includes(step);
  }

  private getTimeOnlyMs(time: Date): number {
    return time.getHours() * 3600000 + time.getMinutes() * 60000 + time.getSeconds() * 1000;
  }
}
