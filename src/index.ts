/**
 * @uplink-protocol/calendar-controller
 * 
 * A powerful calendar and date picker controller for building date selection UI components.
 * This module is part of the Odyssey Uplink Protocol.
 * 
 * @packageDocumentation
 */

import { CalendarControllerClass } from './Date/controller';
import { CalendarOptions } from './Date/interfaces';
import { TimeControllerClass } from './Time/controller';
import { TimeOptions } from './Time/interfaces';

/**
 * Factory function to create a calendar controller
 * @param options Calendar configuration options
 * @returns A new CalendarControllerClass instance
 */
export function CalendarController(options?: CalendarOptions): CalendarControllerClass {
  const controller = new CalendarControllerClass(options);
  // Ensure bindings are accessible on the returned object (for test compatibility)
  (controller as any).bindings = controller.bindings;
  (controller as any).methods = controller.methods;
  (controller as any).events = controller.events;
  return controller;
}

/**
 * Factory function to create a time controller
 * @param options Time configuration options
 * @returns A new TimeControllerClass instance
 */
export function TimeController(options?: TimeOptions): TimeControllerClass {
  const controller = new TimeControllerClass(options);
  // Ensure bindings are accessible on the returned object (for test compatibility)
  (controller as any).bindings = controller.bindings;
  (controller as any).methods = controller.methods;
  (controller as any).events = controller.events;
  return controller;
}

// Export the main controllers
export * from "./Date/controller";
export * from "./Time/controller";

// Export public interfaces for form configuration
export * from "./Date/interfaces";
export * from "./Time/interfaces";

// Export TypeScript type definitions - explicit re-exports to avoid conflicts
export type {
  TypedCalendarController,
  CalendarControllerBindings,
  CalendarControllerMethods,
  CalendarControllerEvents,
  CalendarControllerFactory,
  CalendarControllerInstance,
  BindingValue as CalendarBindingValue,
  CalendarState
} from "./Date/types";

export type {
  TypedTimeController,
  TimeControllerBindings,
  TimeControllerMethods,
  TimeControllerEvents,
  TimeControllerFactory,
  TimeControllerInstance,
  BindingValue as TimeBindingValue,
  TimeState
} from "./Time/types";

// Export core services for advanced usage
export * from "./Date/services";
export * from "./Time/services";

// Export utility functions and validator helpers
export * from "./Date/utils";
export * from "./Time/utils";
