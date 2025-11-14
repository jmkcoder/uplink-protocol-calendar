import type { CalendarOptions } from "../interfaces";
import type { CalendarControllerBindings } from "./calendar-controller-bindings.type";
import type { CalendarControllerMethods } from "./calendar-controller-methods.type";
import type { CalendarControllerEvents } from "./calendar-controller-events.type";

/**
 * Complete Calendar Controller Interface
 * Combines all the above interfaces into a single comprehensive type
 */
export interface TypedCalendarController {
  /** Reactive state bindings */
  bindings: CalendarControllerBindings;
  
  /** Available methods */
  methods: CalendarControllerMethods;
  
  /** Event emitters */
  events: CalendarControllerEvents;
  
  /** Calendar configuration options */
  options?: CalendarOptions;
  
  // === Direct Method Access (for convenience) ===
  // Core methods are also available directly on the controller instance
  selectDate(yearOrDate: number | Date, month?: number, day?: number): void;
  goToNextMonth(): void;
  goToPreviousMonth(): void;
  goToNextYear(): void;
  goToPreviousYear(): void;
  clearSelection(): void;
  setRangeSelectionMode(isRange: boolean): void;
  
  // === Getter/Setter Properties ===
  /** Selected date range with flexible property access */
  selectedDateRange: {
    start: Date | null;
    end: Date | null;
    startDate: Date | null;
    endDate: Date | null;
  };
}

/**
 * Factory Function Type
 * Type for the CalendarController factory function
 */
export type CalendarControllerFactory = (options?: CalendarOptions) => TypedCalendarController;

/**
 * Calendar Controller Instance Type
 * Type for the CalendarControllerClass instance
 */
export interface CalendarControllerInstance extends TypedCalendarController {
  // Additional class-specific properties and methods can be added here
}
