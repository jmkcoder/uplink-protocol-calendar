import { ITimeConfigurationService, TimeOptions } from "../interfaces";

/**
 * TimeConfigurationService - Implementation of ITimeConfigurationService
 * Manages time picker configuration and validation
 */
export class TimeConfigurationService implements ITimeConfigurationService {
  private _showSeconds: boolean = false;
  private _showMilliseconds: boolean = false;
  private _use12HourFormat: boolean = false;
  private _minuteStep: number = 1;
  private _secondStep: number = 1;

  processTimeOptions(options: TimeOptions): TimeOptions {
    const processed = { ...this.getDefaultTimeOptions(), ...options };
    return this.normalizeTimeOptions(processed);
  }

  getDefaultTimeOptions(): TimeOptions {
    return {
      use12HourFormat: false,
      showSeconds: false,
      showMilliseconds: false,
      minuteStep: 1,
      secondStep: 1,
      locale: 'en-US',
      timeFormat: 'HH:mm',
      disabledTimes: [],
      disabledHours: [],
      disabledMinutes: [],
      disabledSeconds: []
    };
  }

  validateTimeFormat(format: string): boolean {
    const validFormats = this.getSupportedTimeFormats();
    return validFormats.includes(format);
  }

  getSupportedTimeFormats(): string[] {
    return [
      'HH:mm',
      'HH:mm:ss',
      'HH:mm:ss.SSS',
      'h:mm tt',
      'h:mm:ss tt',
      'h:mm:ss.SSS tt'
    ];
  }

  normalizeTimeOptions(options: TimeOptions): TimeOptions {
    const normalized = { ...options };
    
    // Validate step values
    if (normalized.minuteStep && ![1, 5, 10, 15, 30].includes(normalized.minuteStep)) {
      normalized.minuteStep = 1;
    }
    if (normalized.secondStep && ![1, 5, 10, 15, 30].includes(normalized.secondStep)) {
      normalized.secondStep = 1;
    }
    
    // Ensure arrays are initialized
    normalized.disabledTimes = normalized.disabledTimes || [];
    normalized.disabledHours = normalized.disabledHours || [];
    normalized.disabledMinutes = normalized.disabledMinutes || [];
    normalized.disabledSeconds = normalized.disabledSeconds || [];
    
    return normalized;
  }

  getShowSeconds(): boolean {
    return this._showSeconds;
  }

  setShowSeconds(show: boolean): void {
    this._showSeconds = show;
  }

  getShowMilliseconds(): boolean {
    return this._showMilliseconds;
  }

  setShowMilliseconds(show: boolean): void {
    this._showMilliseconds = show;
  }

  getUse12HourFormat(): boolean {
    return this._use12HourFormat;
  }

  setUse12HourFormat(use12Hour: boolean): void {
    this._use12HourFormat = use12Hour;
  }

  getMinuteStep(): number {
    return this._minuteStep;
  }

  setMinuteStep(step: number): void {
    if ([1, 5, 10, 15, 30].includes(step)) {
      this._minuteStep = step;
    }
  }

  getSecondStep(): number {
    return this._secondStep;
  }

  setSecondStep(step: number): void {
    if ([1, 5, 10, 15, 30].includes(step)) {
      this._secondStep = step;
    }
  }
}
