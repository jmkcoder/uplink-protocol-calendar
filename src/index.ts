/**
 * @uplink-protocol/calendar-controller
 * 
 * A powerful calendar and date picker controller for building date selection UI components.
 * This module is part of the Odyssey Uplink Protocol.
 * 
 * @packageDocumentation
 */

import { CalendarControllerClass } from './controller';
import { CalendarOptions } from './interfaces';

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

// Export the main controller
export * from "./controller";

// Export public interfaces for form configuration
export * from "./interfaces";

// Export TypeScript type definitions
export * from "./types";

// Export core services for advanced usage
export * from "./services";

// Export utility functions and validator helpers
export * from "./utils";
