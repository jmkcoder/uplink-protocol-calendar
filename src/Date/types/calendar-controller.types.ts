/**
 * TypeScript type definitions for Calendar Controller
 * Provides comprehensive typing for bindings, methods, and events
 */

import type { Binding } from "@uplink-protocol/core";
import type { DateRange, YearRange } from "../interfaces";
import type { CalendarControllerBindings } from "./calendar-controller-bindings.type";
import type { CalendarControllerMethods } from "./calendar-controller-methods.type";

// Re-export all interfaces
export type { CalendarControllerBindings } from "./calendar-controller-bindings.type";
export type { CalendarControllerMethods } from "./calendar-controller-methods.type";
export type { CalendarControllerEvents } from "./calendar-controller-events.type";
export type { CalendarState } from "./calendar-state.type";
export type { 
  TypedCalendarController, 
  CalendarControllerFactory, 
  CalendarControllerInstance 
} from "./typed-calendar-controller.type";

// === Utility Types ===

/**
 * Binding Value Types - Helper types for accessing binding values
 */
export type BindingValue<T extends keyof CalendarControllerBindings> = 
  CalendarControllerBindings[T] extends Binding<infer U> ? U : never;

/**
 * Method Parameter Types - Helper types for method parameters
 */
export type SelectDateParams = Parameters<CalendarControllerMethods['selectDate']>;
export type GoToMonthParams = Parameters<CalendarControllerMethods['goToMonth']>;
export type FormatDateParams = Parameters<CalendarControllerMethods['formatDate']>;

/**
 * Event Data Types - Helper types for event payloads
 */
export type DateSelectedEventData = Date;
export type DateRangeSelectedEventData = DateRange;
export type MonthChangedEventData = number;
export type YearChangedEventData = number;
export type ViewChangedEventData = { month: number; year: number };
export type YearRangeChangedEventData = YearRange;
