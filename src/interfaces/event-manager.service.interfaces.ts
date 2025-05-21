import { EventEmitter } from "@uplink-protocol/core";
import { DateRange } from "./calendar.interfaces";

/**
 * Event manager service interface
 * Responsible for managing and emitting calendar events
 */
export interface IEventManagerService {
  /**
   * Initialize event emitters
   */
  initializeEvents(): {
    dateSelected: EventEmitter<Date>;
    dateRangeSelected: EventEmitter<DateRange>;
    monthChanged: EventEmitter<number>;
    yearChanged: EventEmitter<number>;
    viewChanged: EventEmitter<{month: number, year: number}>;
  };

  /**
   * Emit date selected event
   */
  emitDateSelected(
    emitter: EventEmitter<Date>,
    date: Date
  ): void;

  /**
   * Emit date range selected event
   */
  emitDateRangeSelected(
    emitter: EventEmitter<DateRange>,
    range: DateRange
  ): void;

  /**
   * Emit month changed event
   */
  emitMonthChanged(
    emitter: EventEmitter<number>,
    month: number
  ): void;

  /**
   * Emit year changed event
   */
  emitYearChanged(
    emitter: EventEmitter<number>,
    year: number
  ): void;

  /**
   * Emit view changed event
   */
  emitViewChanged(
    emitter: EventEmitter<{month: number, year: number}>,
    view: {month: number, year: number}
  ): void;
}
