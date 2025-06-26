import { EventEmitter } from "@uplink-protocol/core";

/**
 * Time event manager service interface
 * Manages event emission for time picker
 */
export interface ITimeEventManagerService {
  /**
   * Initialize event emitters for time picker
   * @returns Initialized event emitters
   */
  initializeEvents(): {
    timeSelected: EventEmitter<Date>;
    timeRangeSelected: EventEmitter<{ startTime: Date | null; endTime: Date | null }>;
    timeChanged: EventEmitter<Date>;
    segmentFocused: EventEmitter<'hours' | 'minutes' | 'seconds' | 'milliseconds' | 'period'>;
    formatChanged: EventEmitter<{ use12Hour: boolean; showSeconds: boolean; showMilliseconds: boolean }>;
    localeChanged: EventEmitter<string>;
  };

  /**
   * Emit time selected event
   * @param timeSelectedEmitter Time selected event emitter
   * @param time Selected time
   */
  emitTimeSelected(timeSelectedEmitter: EventEmitter<Date>, time: Date): void;

  /**
   * Emit time range selected event
   * @param rangeSelectedEmitter Range selected event emitter
   * @param startTime Range start time
   * @param endTime Range end time
   */
  emitTimeRangeSelected(
    rangeSelectedEmitter: EventEmitter<{ startTime: Date | null; endTime: Date | null }>,
    startTime: Date | null,
    endTime: Date | null
  ): void;

  /**
   * Emit time changed event
   * @param timeChangedEmitter Time changed event emitter
   * @param time New time
   */
  emitTimeChanged(timeChangedEmitter: EventEmitter<Date>, time: Date): void;

  /**
   * Emit segment focused event
   * @param segmentFocusedEmitter Segment focused event emitter
   * @param segment Focused segment
   */
  emitSegmentFocused(
    segmentFocusedEmitter: EventEmitter<'hours' | 'minutes' | 'seconds' | 'milliseconds' | 'period'>,
    segment: 'hours' | 'minutes' | 'seconds' | 'milliseconds' | 'period'
  ): void;

  /**
   * Emit format changed event
   * @param formatChangedEmitter Format changed event emitter
   * @param use12Hour Whether using 12-hour format
   * @param showSeconds Whether showing seconds
   * @param showMilliseconds Whether showing milliseconds
   */
  emitFormatChanged(
    formatChangedEmitter: EventEmitter<{ use12Hour: boolean; showSeconds: boolean; showMilliseconds: boolean }>,
    use12Hour: boolean,
    showSeconds: boolean,
    showMilliseconds: boolean
  ): void;

  /**
   * Emit locale changed event
   * @param localeChangedEmitter Locale changed event emitter
   * @param locale New locale
   */
  emitLocaleChanged(localeChangedEmitter: EventEmitter<string>, locale: string): void;
}
