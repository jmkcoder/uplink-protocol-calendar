import { EventEmitter } from "@uplink-protocol/core";
import { DateRange, YearRange } from "../interfaces";

/**
 * Calendar Controller Events - Event system for reacting to calendar changes
 * Subscribe to these events to respond to user interactions and state changes
 */
export interface CalendarControllerEvents {
  /** Fired when a date is selected */
  dateSelected: EventEmitter<Date>;
  
  /** Fired when a date range is selected (in range mode) */
  dateRangeSelected: EventEmitter<DateRange>;
  
  /** Fired when the month changes */
  monthChanged: EventEmitter<number>;
  
  /** Fired when the year changes */
  yearChanged: EventEmitter<number>;
  
  /** Fired when the view changes (month/year navigation) */
  viewChanged: EventEmitter<{ month: number; year: number }>;
  
  /** Fired when the year range changes (decade navigation) */
  yearRangeChanged: EventEmitter<YearRange>;
}
