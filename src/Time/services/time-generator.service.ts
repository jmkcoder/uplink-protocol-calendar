import { ITimeGeneratorService, TimeGenerationOptions, TimeSegment, TimePeriod, TimeView } from "../interfaces";

/**
 * TimeGeneratorService - Implementation of ITimeGeneratorService
 * Generates time segments and views
 */
export class TimeGeneratorService implements ITimeGeneratorService {
  generateTimeView(options: TimeGenerationOptions): TimeView {
    return {
      hours: this.generateHourSegments(options),
      minutes: this.generateMinuteSegments(options),
      seconds: this.generateSecondSegments(options),
      milliseconds: options.showMilliseconds ? this.generateMillisecondSegments(options) : undefined,
      period: this.generatePeriod(options),
      use12Hour: options.use12HourFormat
    };
  }

  generateHourSegments(options: TimeGenerationOptions): TimeSegment[] {
    const segments: TimeSegment[] = [];
    const selectedHour = options.selectedTime?.getHours();
    
    if (options.use12HourFormat) {
      for (let i = 1; i <= 12; i++) {
        const hour24 = this.convertTo24Hour(i, options.selectedTime && options.selectedTime.getHours() >= 12 ? 'PM' : 'AM');
        segments.push({
          value: i,
          display: i.toString().padStart(2, '0'),
          isSelected: selectedHour !== undefined && selectedHour % 12 === i % 12,
          isDisabled: options.isTimeDisabledFn ? this.isHourDisabled(hour24, options) : false,
          isFocused: options.focusedSegment === 'hours'
        });
      }
    } else {
      for (let i = 0; i < 24; i++) {
        segments.push({
          value: i,
          display: i.toString().padStart(2, '0'),
          isSelected: selectedHour === i,
          isDisabled: options.isTimeDisabledFn ? this.isHourDisabled(i, options) : false,
          isFocused: options.focusedSegment === 'hours'
        });
      }
    }
    
    return segments;
  }

  generateMinuteSegments(options: TimeGenerationOptions): TimeSegment[] {
    const segments: TimeSegment[] = [];
    const selectedMinute = options.selectedTime?.getMinutes();
    
    for (let i = 0; i < 60; i += options.minuteStep) {
      segments.push({
        value: i,
        display: i.toString().padStart(2, '0'),
        isSelected: selectedMinute === i,
        isDisabled: false, // Implement minute-specific logic if needed
        isFocused: options.focusedSegment === 'minutes'
      });
    }
    
    return segments;
  }

  generateSecondSegments(options: TimeGenerationOptions): TimeSegment[] {
    const segments: TimeSegment[] = [];
    const selectedSecond = options.selectedTime?.getSeconds();
    
    for (let i = 0; i < 60; i += options.secondStep) {
      segments.push({
        value: i,
        display: i.toString().padStart(2, '0'),
        isSelected: selectedSecond === i,
        isDisabled: false, // Implement second-specific logic if needed
        isFocused: options.focusedSegment === 'seconds'
      });
    }
    
    return segments;
  }

  generateMillisecondSegments(options: TimeGenerationOptions): TimeSegment[] {
    const segments: TimeSegment[] = [];
    const selectedMs = options.selectedTime?.getMilliseconds();
    
    for (let i = 0; i < 1000; i += 100) {
      segments.push({
        value: i,
        display: i.toString().padStart(3, '0'),
        isSelected: selectedMs !== undefined && Math.floor(selectedMs / 100) * 100 === i,
        isDisabled: false,
        isFocused: options.focusedSegment === 'milliseconds'
      });
    }
    
    return segments;
  }  generatePeriod(options: TimeGenerationOptions): TimePeriod | null {
    if (!options.use12HourFormat) return null;
    
    const selectedHour = options.selectedTime?.getHours();
    const currentPeriod = selectedHour !== undefined && selectedHour >= 12 ? 'PM' : 'AM';
    
    return {
      value: currentPeriod,
      display: currentPeriod,
      isSelected: true,
      isDisabled: false
    };
  }

  applyStep(segments: TimeSegment[], step: number): TimeSegment[] {
    return segments.filter(segment => segment.value % step === 0);
  }

  private isHourDisabled(hour: number, options: TimeGenerationOptions): boolean {
    if (options.disabledHours.includes(hour)) return true;
    
    if (options.isTimeDisabledFn) {
      const testTime = new Date();
      testTime.setHours(hour, 0, 0, 0);
      return options.isTimeDisabledFn(testTime);
    }
    
    return false;
  }

  private convertTo24Hour(hour12: number, period: 'AM' | 'PM'): number {
    if (period === 'AM') {
      return hour12 === 12 ? 0 : hour12;
    } else {
      return hour12 === 12 ? 12 : hour12 + 12;
    }
  }
}
