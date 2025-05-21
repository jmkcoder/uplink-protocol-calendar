import { EventEmitter } from "@uplink-protocol/core";
import { DateRange } from "../interfaces/calendar.interfaces";
import { IEventManagerService } from "../interfaces/event-manager.service.interfaces";

/**
 * Implementation of EventManagerService
 * Responsible for managing and emitting calendar events
 */
export class EventManagerService implements IEventManagerService {
  /**
   * Initialize event emitters
   */
  public initializeEvents(): {
    dateSelected: EventEmitter<Date>;
    dateRangeSelected: EventEmitter<DateRange>;
    monthChanged: EventEmitter<number>;
    yearChanged: EventEmitter<number>;
    viewChanged: EventEmitter<{month: number, year: number}>;
  } {
    return {
      dateSelected: new EventEmitter<Date>(),
      dateRangeSelected: new EventEmitter<DateRange>(),
      monthChanged: new EventEmitter<number>(),
      yearChanged: new EventEmitter<number>(),
      viewChanged: new EventEmitter<{month: number, year: number}>(),
    };
  }

  /**
   * Emit date selected event
   */
  public emitDateSelected(
    emitter: EventEmitter<Date>,
    date: Date
  ): void {
    emitter.emit(date);
  }

  /**
   * Emit date range selected event
   */
  public emitDateRangeSelected(
    emitter: EventEmitter<DateRange>,
    range: DateRange
  ): void {
    if (range.startDate && range.endDate) {
      emitter.emit(range);
    }
  }

  /**
   * Emit month changed event
   */
  public emitMonthChanged(
    emitter: EventEmitter<number>,
    month: number
  ): void {
    emitter.emit(month);
  }

  /**
   * Emit year changed event
   */
  public emitYearChanged(
    emitter: EventEmitter<number>,
    year: number
  ): void {
    emitter.emit(year);
  }

  /**
   * Emit view changed event
   */
  public emitViewChanged(
    emitter: EventEmitter<{month: number, year: number}>,
    view: {month: number, year: number}
  ): void {
    emitter.emit(view);
  }
}
