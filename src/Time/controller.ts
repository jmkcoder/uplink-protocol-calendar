import {
  ControllerAdapter,
} from "@uplink-protocol/core";
import { ControllerMetadata } from "@uplink-protocol/core/dist/uplink/interfaces/metadata/controller-metadata.interface";
import {
  TimeOptions,
  TimeRange,
  TimeGenerationOptions,
  TimeView,
  ITimeService,
  ITimeFormattingService,
  ITimeSelectionService,
  ITimeViewStateService,
  ITimeEventManagerService,
  ITimeNavigationService,
  ITimeConstraintsService,
  ITimeGeneratorService,
  ITimeConfigurationService,
  ITimeValidationService
} from "./interfaces";
import {
  TypedTimeController,
  TimeControllerBindings,
  TimeControllerMethods,
  TimeControllerEvents
} from "./types";
import {
  TimeService,
  TimeFormattingService,
  TimeSelectionService,
  TimeViewStateService,
  TimeEventManagerService,
  TimeNavigationService,
  TimeConstraintsService,
  TimeGeneratorService,
  TimeConfigurationService,
  TimeValidationService
} from "./services";

/**
 * TimeControllerClass - A full featured time picker controller class.
 * Provides functionality for time picking and time display.
 *
 * This controller uses a service-oriented architecture where all the core
 * functionality is delegated to specialized services.
 */
export interface TimeControllerInterface extends TypedTimeController {
  _selectedTime: Date | null;
  _selectedTimeRange: TimeRange;
  _focusedSegment: 'hours' | 'minutes' | 'seconds' | 'milliseconds' | 'period' | null;
  _minTime: Date | null;
  _maxTime: Date | null;
  _disabledTimes: Date[];
  _disabledHours: number[];
  _disabledMinutes: number[];
  _disabledSeconds: number[];
  _use12HourFormat: boolean;
  _showSeconds: boolean;
  _showMilliseconds: boolean;
  _minuteStep: number;
  _secondStep: number;
  _locale: string;
  _timeFormat: string | null;
  _timeFormatOptions: Intl.DateTimeFormatOptions | null;
  _isRangeSelection: boolean;
}

export class TimeControllerClass implements TimeControllerInterface {
  bindings!: TimeControllerBindings;
  methods!: TimeControllerMethods;
  events!: TimeControllerEvents;
  meta?: ControllerMetadata;
  __adapter?: ControllerAdapter;
  options?: TimeOptions;

  // State variables
  _selectedTime: Date | null = null;
  _selectedTimeRange: TimeRange = { startTime: null, endTime: null };
  _focusedSegment: 'hours' | 'minutes' | 'seconds' | 'milliseconds' | 'period' | null = null;
  _minTime: Date | null = null;
  _maxTime: Date | null = null;
  _disabledTimes: Date[] = [];
  _disabledHours: number[] = [];
  _disabledMinutes: number[] = [];
  _disabledSeconds: number[] = [];
  _use12HourFormat: boolean = false;
  _showSeconds: boolean = false;
  _showMilliseconds: boolean = false;
  _minuteStep: number = 1;
  _secondStep: number = 1;
  _locale: string = "en-US";
  _timeFormat: string | null = null;
  _timeFormatOptions: Intl.DateTimeFormatOptions | null = null;
  _isRangeSelection: boolean = false;

  // Services
  private _timeService: ITimeService;
  private _timeFormattingService: ITimeFormattingService;
  private _timeSelectionService: ITimeSelectionService;
  private _timeViewStateService: ITimeViewStateService;
  private _timeEventManagerService: ITimeEventManagerService;
  private _timeNavigationService: ITimeNavigationService;
  private _timeConstraintsService: ITimeConstraintsService;
  private _timeGeneratorService: ITimeGeneratorService;
  private _timeConfigurationService: ITimeConfigurationService;
  private _timeValidationService: ITimeValidationService;

  /**
   * Constructor - initializes the controller with optional configuration
   * @param options Time configuration options
   */
  constructor(options?: TimeOptions) {
    // Initialize core services
    this._timeService = new TimeService();
    this._timeFormattingService = new TimeFormattingService();
    this._timeSelectionService = new TimeSelectionService();
    this._timeViewStateService = new TimeViewStateService();
    this._timeEventManagerService = new TimeEventManagerService();
    this._timeNavigationService = new TimeNavigationService();
    this._timeConstraintsService = new TimeConstraintsService();
    this._timeGeneratorService = new TimeGeneratorService();
    this._timeConfigurationService = new TimeConfigurationService();
    this._timeValidationService = new TimeValidationService();

    // Apply configuration options to this controller instance
    if (options) {
      const processedOptions = this._timeConfigurationService.processTimeOptions(options);
      this.options = processedOptions;
      
      if (processedOptions.initialSelectedTime) this._selectedTime = processedOptions.initialSelectedTime;
      if (processedOptions.minTime) this._minTime = processedOptions.minTime;
      if (processedOptions.maxTime) this._maxTime = processedOptions.maxTime;
      if (processedOptions.use12HourFormat !== undefined) this._use12HourFormat = processedOptions.use12HourFormat;
      if (processedOptions.showSeconds !== undefined) this._showSeconds = processedOptions.showSeconds;
      if (processedOptions.showMilliseconds !== undefined) this._showMilliseconds = processedOptions.showMilliseconds;
      if (processedOptions.minuteStep) this._minuteStep = processedOptions.minuteStep;
      if (processedOptions.secondStep) this._secondStep = processedOptions.secondStep;
      if (processedOptions.locale) this._locale = processedOptions.locale;
      if (processedOptions.timeFormat) this._timeFormat = processedOptions.timeFormat;
      if (processedOptions.timeFormatOptions) this._timeFormatOptions = processedOptions.timeFormatOptions;
      if (processedOptions.isRangeSelection !== undefined) this._isRangeSelection = processedOptions.isRangeSelection;
      if (processedOptions.disabledTimes) this._disabledTimes = [...processedOptions.disabledTimes];
      if (processedOptions.disabledHours) this._disabledHours = this._timeConstraintsService.setDisabledHours(processedOptions.disabledHours);
      if (processedOptions.disabledMinutes) this._disabledMinutes = this._timeConstraintsService.setDisabledMinutes(processedOptions.disabledMinutes);
      if (processedOptions.disabledSeconds) this._disabledSeconds = this._timeConstraintsService.setDisabledSeconds(processedOptions.disabledSeconds);
    }    // Initialize bindings using TimeViewStateService
    this.bindings = this._timeViewStateService.initializeBindings(
      this._selectedTime,
      this._selectedTimeRange,
      this._use12HourFormat,
      this._showSeconds,
      this._showMilliseconds,
      () => this.generateTimeSegments(),
      this._locale,
      this._isRangeSelection,
      this._minuteStep,
      this._secondStep
    );

    // Initialize events using TimeEventManagerService  
    this.events = this._timeEventManagerService.initializeEvents();

    // Set up method bindings
    this.methods = {
      // Basic time selection and navigation
      selectTime: this.selectTime.bind(this),
      setHour: this.setHour.bind(this),
      setMinute: this.setMinute.bind(this),
      setSecond: this.setSecond.bind(this),
      setMillisecond: this.setMillisecond.bind(this),
      goToNextHour: this.goToNextHour.bind(this),
      goToPreviousHour: this.goToPreviousHour.bind(this),
      goToNextMinute: this.goToNextMinute.bind(this),
      goToPreviousMinute: this.goToPreviousMinute.bind(this),
      goToNextSecond: this.goToNextSecond.bind(this),
      goToPreviousSecond: this.goToPreviousSecond.bind(this),
      goToCurrentTime: this.goToCurrentTime.bind(this),
      togglePeriod: this.togglePeriod.bind(this),
      
      // Range selection
      setRangeSelectionMode: this.setRangeSelectionMode.bind(this),
      clearSelection: this.clearSelection.bind(this),
      
      // Focus management
      setFocusedSegment: this.setFocusedSegment.bind(this),
      clearFocusedSegment: this.clearFocusedSegment.bind(this),
      focusSegment: this.focusSegment.bind(this),
      
      // Time constraints
      setMinTime: this.setMinTime.bind(this),
      setMaxTime: this.setMaxTime.bind(this),
      setDisabledTimes: this.setDisabledTimes.bind(this),
      addDisabledTime: this.addDisabledTime.bind(this),
      removeDisabledTime: this.removeDisabledTime.bind(this),
      getDisabledTimes: this.getDisabledTimes.bind(this),
      setDisabledHours: this.setDisabledHours.bind(this),
      addDisabledHour: this.addDisabledHour.bind(this),
      removeDisabledHour: this.removeDisabledHour.bind(this),
      getDisabledHours: this.getDisabledHours.bind(this),
      setDisabledMinutes: this.setDisabledMinutes.bind(this),
      setDisabledSeconds: this.setDisabledSeconds.bind(this),
      
      // Format and localization
      setLocale: this.setLocale.bind(this),
      getLocale: this.getLocale.bind(this),
      setTimeFormatOptions: this.setTimeFormatOptions.bind(this),
      getTimeFormatOptions: this.getTimeFormatOptions.bind(this),
      getFormattedTime: this.getFormattedTime.bind(this),
      formatTime: this.formatTime.bind(this),
      setUse12HourFormat: this.setUse12HourFormat.bind(this),
      setShowSeconds: this.setShowSeconds.bind(this),
      setShowMilliseconds: this.setShowMilliseconds.bind(this),
      setMinuteStep: this.setMinuteStep.bind(this),
      setSecondStep: this.setSecondStep.bind(this),
      
      // Utility methods
      isCurrentTime: this.isCurrentTime.bind(this),
      generateTimeView: this.generateTimeView.bind(this),
      isTimeValid: this.isTimeValid.bind(this),
      roundToStep: this.roundToStep.bind(this),
      
      // Focus movement (accessibility)
      moveFocusToNextSegment: this.moveFocusToNextSegment.bind(this),
      moveFocusToPreviousSegment: this.moveFocusToPreviousSegment.bind(this),
      moveFocusToHours: this.moveFocusToHours.bind(this),
      moveFocusToMinutes: this.moveFocusToMinutes.bind(this),
      moveFocusToSeconds: this.moveFocusToSeconds.bind(this),
      moveFocusToMilliseconds: this.moveFocusToMilliseconds.bind(this),
      moveFocusToPeriod: this.moveFocusToPeriod.bind(this),
      selectFocusedSegment: this.selectFocusedSegment.bind(this)
    };

    // Initialize metadata for agent assistance
    this.meta = {
      name: "TimeController",
      description: "A powerful time picker controller for building time selection UI components with reactive state management, accessibility features, and comprehensive internationalization support.",
      bindings: {
        selectedTime: {
          type: "Date | null",
          description: "Currently selected time (null if no time selected)",
          required: false,
          label: "Selected Time"
        },
        selectedTimeRange: {
          type: "TimeRange",
          description: "Selected time range (for range selection mode)",
          required: false,
          label: "Selected Time Range"
        },
        focusedSegment: {
          type: "'hours' | 'minutes' | 'seconds' | 'milliseconds' | 'period' | null",
          description: "Currently focused time segment (for accessibility)",
          required: false,
          label: "Focused Segment"
        },
        formattedTime: {
          type: "string",
          description: "Formatted time string for display",
          required: true,
          label: "Formatted Time"
        },
        use12HourFormat: {
          type: "boolean",
          description: "Whether using 12-hour format",
          required: true,
          label: "12-Hour Format"
        },
        showSeconds: {
          type: "boolean",
          description: "Whether to show seconds in time picker",
          required: true,
          label: "Show Seconds"
        },
        showMilliseconds: {
          type: "boolean",
          description: "Whether to show milliseconds in time picker",
          required: true,
          label: "Show Milliseconds"
        }
      },
      methods: {
        selectTime: {
          description: "Select a specific time",
          parameters: {
            time: { type: "Date", description: "Time to select", required: true }
          },
          returns: "void"
        },
        setHour: {
          description: "Set specific hour",
          parameters: {
            hour: { type: "number", description: "Hour to set", required: true },
            period: { type: "'AM' | 'PM'", description: "AM/PM for 12-hour format", required: false }
          },
          returns: "void"
        },
        goToNextHour: {
          description: "Navigate to next hour",
          parameters: {},
          returns: "void"
        },
        goToPreviousHour: {
          description: "Navigate to previous hour",
          parameters: {},
          returns: "void"
        },
        clearSelection: {
          description: "Clear current time selection",
          parameters: {},
          returns: "void"
        }
      },
      events: {
        timeSelected: {
          description: "Fired when a time is selected",
          payload: "Date"
        },
        timeRangeSelected: {
          description: "Fired when a time range is selected",
          payload: "{ startTime: Date | null; endTime: Date | null }"
        },
        timeChanged: {
          description: "Fired when the time changes",
          payload: "Date"
        },
        segmentFocused: {
          description: "Fired when a time segment receives focus",
          payload: "'hours' | 'minutes' | 'seconds' | 'milliseconds' | 'period'"
        },
        formatChanged: {
          description: "Fired when the time format changes",
          payload: "{ use12Hour: boolean; showSeconds: boolean; showMilliseconds: boolean }"
        },
        localeChanged: {
          description: "Fired when the locale changes",
          payload: "string"
        }
      }
    };

    // Update bindings with initial values
    this.updateAllBindings();
  }

  // === Direct Method Access (for convenience) ===
  selectTime(time: Date): void {
    const result = this._timeSelectionService.selectTime(
      time,
      this._selectedTime,
      this._isRangeSelection,
      this._selectedTimeRange
    );

    this._selectedTime = result.selectedTime;
    this._selectedTimeRange = result.selectedTimeRange;

    this.updateAllBindings();
    
    if (result.selectedTime) {
      this._timeEventManagerService.emitTimeSelected(this.events.timeSelected, result.selectedTime);
    }
    
    if (this._isRangeSelection && result.selectedTimeRange.startTime && result.selectedTimeRange.endTime) {
      this._timeEventManagerService.emitTimeRangeSelected(
        this.events.timeRangeSelected,
        result.selectedTimeRange.startTime,
        result.selectedTimeRange.endTime
      );
    }
  }

  goToNextHour(): void {
    const currentTime = this._selectedTime || new Date();
    const newTime = this._timeNavigationService.goToNextHour(currentTime, this._use12HourFormat);
    this.selectTime(newTime);
  }

  goToPreviousHour(): void {
    const currentTime = this._selectedTime || new Date();
    const newTime = this._timeNavigationService.goToPreviousHour(currentTime, this._use12HourFormat);
    this.selectTime(newTime);
  }

  goToNextMinute(): void {
    const currentTime = this._selectedTime || new Date();
    const newTime = this._timeNavigationService.goToNextMinute(currentTime, this._minuteStep);
    this.selectTime(newTime);
  }

  goToPreviousMinute(): void {
    const currentTime = this._selectedTime || new Date();
    const newTime = this._timeNavigationService.goToPreviousMinute(currentTime, this._minuteStep);
    this.selectTime(newTime);
  }

  goToNextSecond(): void {
    const currentTime = this._selectedTime || new Date();
    const newTime = this._timeNavigationService.goToNextSecond(currentTime, this._secondStep);
    this.selectTime(newTime);
  }

  goToPreviousSecond(): void {
    const currentTime = this._selectedTime || new Date();
    const newTime = this._timeNavigationService.goToPreviousSecond(currentTime, this._secondStep);
    this.selectTime(newTime);
  }

  clearSelection(): void {
    const result = this._timeSelectionService.clearSelection();
    this._selectedTime = result.selectedTime;
    this._selectedTimeRange = result.selectedTimeRange;
    this.updateAllBindings();
  }

  setRangeSelectionMode(isRange: boolean): void {
    this._isRangeSelection = isRange;
    this.bindings.isRangeSelection.set(isRange);
  }

  // === Getter/Setter Properties ===
  get selectedTimeRange(): {
    start: Date | null;
    end: Date | null;
    startTime: Date | null;
    endTime: Date | null;
  } {
    return {
      start: this._selectedTimeRange.startTime,
      end: this._selectedTimeRange.endTime,
      startTime: this._selectedTimeRange.startTime,
      endTime: this._selectedTimeRange.endTime
    };
  }

  // Implementation of all methods from TimeControllerMethods interface
  setHour(hour: number, period?: 'AM' | 'PM'): void {
    const currentTime = this._selectedTime || new Date();
    const newTime = this._timeNavigationService.setHour(currentTime, hour, this._use12HourFormat, period);
    this.selectTime(newTime);
  }

  setMinute(minute: number): void {
    const currentTime = this._selectedTime || new Date();
    const newTime = this._timeNavigationService.setMinute(currentTime, minute);
    this.selectTime(newTime);
  }

  setSecond(second: number): void {
    const currentTime = this._selectedTime || new Date();
    const newTime = this._timeNavigationService.setSecond(currentTime, second);
    this.selectTime(newTime);
  }

  setMillisecond(millisecond: number): void {
    const currentTime = this._selectedTime || new Date();
    const newTime = this._timeNavigationService.setMillisecond(currentTime, millisecond);
    this.selectTime(newTime);
  }

  goToCurrentTime(): void {
    this.selectTime(new Date());
  }

  togglePeriod(): void {
    if (this._use12HourFormat && this._selectedTime) {
      const newTime = this._timeNavigationService.togglePeriod(this._selectedTime);
      this.selectTime(newTime);
    }
  }

  setFocusedSegment(segment: 'hours' | 'minutes' | 'seconds' | 'milliseconds' | 'period' | null): void {
    this._focusedSegment = segment;
    this.bindings.focusedSegment.set(segment);
    if (segment) {
      this._timeEventManagerService.emitSegmentFocused(this.events.segmentFocused, segment);
    }
  }

  clearFocusedSegment(): void {
    this.setFocusedSegment(null);
  }

  focusSegment(segment: 'hours' | 'minutes' | 'seconds' | 'milliseconds' | 'period'): void {
    this.setFocusedSegment(segment);
  }

  setMinTime(time: Date | null): void {
    this._minTime = time;
    this.updateAllBindings();
  }

  setMaxTime(time: Date | null): void {
    this._maxTime = time;
    this.updateAllBindings();
  }

  setDisabledTimes(times: Date[]): void {
    this._disabledTimes = [...times];
    this.updateAllBindings();
  }

  addDisabledTime(time: Date): Date[] {
    this._disabledTimes = this._timeConstraintsService.addDisabledTime(time, this._disabledTimes);
    this.updateAllBindings();
    return this._disabledTimes;
  }

  removeDisabledTime(time: Date): Date[] {
    this._disabledTimes = this._timeConstraintsService.removeDisabledTime(time, this._disabledTimes);
    this.updateAllBindings();
    return this._disabledTimes;
  }

  getDisabledTimes(): Date[] {
    return [...this._disabledTimes];
  }

  setDisabledHours(hours: number[]): number[] {
    this._disabledHours = this._timeConstraintsService.setDisabledHours(hours);
    this.updateAllBindings();
    return this._disabledHours;
  }

  addDisabledHour(hour: number): number[] {
    this._disabledHours = this._timeConstraintsService.addDisabledHour(hour, this._disabledHours);
    this.updateAllBindings();
    return this._disabledHours;
  }

  removeDisabledHour(hour: number): number[] {
    this._disabledHours = this._timeConstraintsService.removeDisabledHour(hour, this._disabledHours);
    this.updateAllBindings();
    return this._disabledHours;
  }

  getDisabledHours(): number[] {
    return [...this._disabledHours];
  }

  setDisabledMinutes(minutes: number[]): number[] {
    this._disabledMinutes = this._timeConstraintsService.setDisabledMinutes(minutes);
    this.updateAllBindings();
    return this._disabledMinutes;
  }

  setDisabledSeconds(seconds: number[]): number[] {
    this._disabledSeconds = this._timeConstraintsService.setDisabledSeconds(seconds);
    this.updateAllBindings();
    return this._disabledSeconds;
  }

  setLocale(locale: string): void {
    this._locale = locale;
    this.bindings.locale.set(locale);
    this._timeEventManagerService.emitLocaleChanged(this.events.localeChanged, locale);
  }

  getLocale(): string {
    return this._locale;
  }

  setTimeFormatOptions(options: Intl.DateTimeFormatOptions | null): void {
    this._timeFormatOptions = options;
    this._timeFormattingService.setTimeFormatOptions(options);
    this.updateAllBindings();
  }

  getTimeFormatOptions(): Intl.DateTimeFormatOptions | null {
    return this._timeFormatOptions;
  }

  getFormattedTime(): string | null {
    if (!this._selectedTime) return null;
    return this._timeFormattingService.formatTimeForDisplay(
      this._selectedTime,
      this._use12HourFormat,
      this._showSeconds,
      this._showMilliseconds
    );
  }

  formatTime(time: Date, options?: Intl.DateTimeFormatOptions | string): string {
    return this._timeFormattingService.formatTime(time, options, this._locale);
  }

  setUse12HourFormat(use12Hour: boolean): void {
    this._use12HourFormat = use12Hour;
    this.bindings.use12HourFormat.set(use12Hour);
    this.updateAllBindings();
    this._timeEventManagerService.emitFormatChanged(
      this.events.formatChanged,
      use12Hour,
      this._showSeconds,
      this._showMilliseconds
    );
  }

  setShowSeconds(show: boolean): void {
    this._showSeconds = show;
    this.bindings.showSeconds.set(show);
    this.updateAllBindings();
    this._timeEventManagerService.emitFormatChanged(
      this.events.formatChanged,
      this._use12HourFormat,
      show,
      this._showMilliseconds
    );
  }

  setShowMilliseconds(show: boolean): void {
    this._showMilliseconds = show;
    this.bindings.showMilliseconds.set(show);
    this.updateAllBindings();
    this._timeEventManagerService.emitFormatChanged(
      this.events.formatChanged,
      this._use12HourFormat,
      this._showSeconds,
      show
    );
  }

  setMinuteStep(step: number): void {
    if ([1, 5, 10, 15, 30].includes(step)) {
      this._minuteStep = step;
      this.bindings.minuteStep.set(step);
      this.updateAllBindings();
    }
  }

  setSecondStep(step: number): void {
    if ([1, 5, 10, 15, 30].includes(step)) {
      this._secondStep = step;
      this.bindings.secondStep.set(step);
      this.updateAllBindings();
    }
  }

  isCurrentTime(time: Date): boolean {
    return this._timeService.isToday(time);
  }

  generateTimeView(): TimeView {
    const options = this.createGenerationOptions();
    return this._timeGeneratorService.generateTimeView(options);
  }

  isTimeValid(time: Date): boolean {
    return this._timeValidationService.isTimeValid(
      time,
      this._minTime,
      this._maxTime,
      this._disabledTimes,
      this._disabledHours,
      this._disabledMinutes,
      this._disabledSeconds
    );
  }

  roundToStep(time: Date): Date {
    return this._timeService.roundToStep(time, this._minuteStep, this._secondStep);
  }

  moveFocusToNextSegment(): void {
    const nextSegment = this._timeNavigationService.moveFocusToNextSegment(
      this._focusedSegment,
      this._showSeconds,
      this._showMilliseconds,
      this._use12HourFormat
    );
    this.setFocusedSegment(nextSegment);
  }

  moveFocusToPreviousSegment(): void {
    const prevSegment = this._timeNavigationService.moveFocusToPreviousSegment(
      this._focusedSegment,
      this._showSeconds,
      this._showMilliseconds,
      this._use12HourFormat
    );
    this.setFocusedSegment(prevSegment);
  }

  moveFocusToHours(): void {
    this.setFocusedSegment('hours');
  }

  moveFocusToMinutes(): void {
    this.setFocusedSegment('minutes');
  }

  moveFocusToSeconds(): void {
    if (this._showSeconds) {
      this.setFocusedSegment('seconds');
    }
  }

  moveFocusToMilliseconds(): void {
    if (this._showMilliseconds) {
      this.setFocusedSegment('milliseconds');
    }
  }

  moveFocusToPeriod(): void {
    if (this._use12HourFormat) {
      this.setFocusedSegment('period');
    }
  }

  selectFocusedSegment(): void {
    // Implementation depends on UI requirements
    // Could select the current value of the focused segment
  }

  /**
   * Generate time segments for binding
   * @returns Time segments object
   */
  private generateTimeSegments(): any {
    const options = this.createGenerationOptions();
    return this._timeGeneratorService.generateTimeView(options);
  }

  /**
   * Create generation options from current state
   * @returns Time generation options
   */
  private createGenerationOptions(): TimeGenerationOptions {
    return {
      selectedTime: this._selectedTime,
      selectedTimeRange: this._selectedTimeRange,
      focusedSegment: this._focusedSegment,
      minTime: this._minTime,
      maxTime: this._maxTime,
      disabledTimes: this._disabledTimes,
      disabledHours: this._disabledHours,
      disabledMinutes: this._disabledMinutes,
      disabledSeconds: this._disabledSeconds,
      use12HourFormat: this._use12HourFormat,
      showSeconds: this._showSeconds,
      showMilliseconds: this._showMilliseconds,
      minuteStep: this._minuteStep,
      secondStep: this._secondStep,
      locale: this._locale,
      isTimeDisabledFn: (time: Date) =>
        this._timeConstraintsService.isTimeDisabled(
          time,
          this._minTime,
          this._maxTime,
          this._disabledTimes,
          this._disabledHours,
          this._disabledMinutes,
          this._disabledSeconds
        )
    };
  }
  /**
   * Update all reactive bindings
   */
  private updateAllBindings(): void {
    const formattedTime = this.getFormattedTime() || '';
    const timeSegments = this.generateTimeSegments();

    this._timeViewStateService.updateBindings(this.bindings, {
      selectedTime: this._selectedTime,
      selectedTimeRange: this._selectedTimeRange,
      focusedSegment: this._focusedSegment,
      currentTime: new Date(),
      formattedTime,
      timeSegments,
      use12HourFormat: this._use12HourFormat,
      showSeconds: this._showSeconds,
      showMilliseconds: this._showMilliseconds,
      locale: this._locale,
      isRangeSelection: this._isRangeSelection,
      minuteStep: this._minuteStep,
      secondStep: this._secondStep
    });
  }
}

/**
 * TimeController - Factory function that creates and returns a new TimeControllerClass instance.
 *
 * @param options Optional time configuration options
 * @returns A TimeControllerClass instance
 */
export const TimeController = (
  options?: TimeOptions
): TimeControllerClass => {
  return new TimeControllerClass(options);
};
