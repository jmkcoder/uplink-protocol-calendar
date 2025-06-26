import { EventEmitter } from "@uplink-protocol/core";
import { ITimeEventManagerService } from "../interfaces";

/**
 * TimeEventManagerService - Implementation of ITimeEventManagerService
 * Manages event emission for time picker
 */
export class TimeEventManagerService implements ITimeEventManagerService {
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
  } {
    return {
      timeSelected: new EventEmitter<Date>(),
      timeRangeSelected: new EventEmitter<{ startTime: Date | null; endTime: Date | null }>(),
      timeChanged: new EventEmitter<Date>(),
      segmentFocused: new EventEmitter<'hours' | 'minutes' | 'seconds' | 'milliseconds' | 'period'>(),
      formatChanged: new EventEmitter<{ use12Hour: boolean; showSeconds: boolean; showMilliseconds: boolean }>(),
      localeChanged: new EventEmitter<string>()
    };
  }

  /**
   * Emit time selected event
   * @param timeSelectedEmitter Time selected event emitter
   * @param time Selected time
   */
  emitTimeSelected(timeSelectedEmitter: EventEmitter<Date>, time: Date): void {
    timeSelectedEmitter.emit(time);
  }

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
  ): void {
    rangeSelectedEmitter.emit({ startTime, endTime });
  }

  /**
   * Emit time changed event
   * @param timeChangedEmitter Time changed event emitter
   * @param time New time
   */
  emitTimeChanged(timeChangedEmitter: EventEmitter<Date>, time: Date): void {
    timeChangedEmitter.emit(time);
  }

  /**
   * Emit segment focused event
   * @param segmentFocusedEmitter Segment focused event emitter
   * @param segment Focused segment
   */
  emitSegmentFocused(
    segmentFocusedEmitter: EventEmitter<'hours' | 'minutes' | 'seconds' | 'milliseconds' | 'period'>,
    segment: 'hours' | 'minutes' | 'seconds' | 'milliseconds' | 'period'
  ): void {
    segmentFocusedEmitter.emit(segment);
  }

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
  ): void {
    formatChangedEmitter.emit({ use12Hour, showSeconds, showMilliseconds });
  }

  /**
   * Emit locale changed event
   * @param localeChangedEmitter Locale changed event emitter
   * @param locale New locale
   */
  emitLocaleChanged(localeChangedEmitter: EventEmitter<string>, locale: string): void {
    localeChangedEmitter.emit(locale);
  }
}
