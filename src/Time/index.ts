/**
 * Time Controller - Complete time picker functionality
 * 
 * This module provides a comprehensive time picker controller with:
 * - Time selection and navigation
 * - 12/24 hour format support
 * - Time range selection
 * - Accessibility features
 * - Internationalization support
 * - Reactive state management
 * - Service-oriented architecture
 */

// === Main Controller Export ===
export { TimeController, TimeControllerClass } from "./controller";
export type { TimeControllerInterface } from "./controller";

// === Core Interfaces ===
export type {
  TimeSegment,
  TimePeriod,
  TimeOptions,
  TimeRange,
  TimeView,
  TimeState,
  TimeGenerationOptions
} from "./interfaces";

// === Service Interfaces ===
export type {
  ITimeService,
  ITimeSelectionService,
  ITimeFormattingService,
  ITimeValidationService,
  ITimeViewStateService,
  ITimeEventManagerService,
  ITimeNavigationService,
  ITimeConstraintsService,
  ITimeConfigurationService,
  ITimeGeneratorService
} from "./interfaces";

// === TypeScript Types ===
export type {
  TimeControllerBindings,
  TimeControllerMethods,
  TimeControllerEvents,
  TypedTimeController
} from "./types";

// === Utility Functions ===
export {
  isSameTime,
  isTimeInRange,
  getTimeOnlyMs,
  formatTime,
  parseTime,
  convertTo12Hour,
  convertTo24Hour,
  getCurrentTimeOnly,
  roundTimeToStep,
  createTime,
  addTime,
  getTimeDifference
} from "./utils";

// === Service Implementations (for advanced usage) ===
export {
  TimeService,
  TimeSelectionService,
  TimeFormattingService,
  TimeValidationService,
  TimeViewStateService,
  TimeEventManagerService,
  TimeNavigationService,
  TimeConstraintsService,
  TimeConfigurationService,
  TimeGeneratorService
} from "./services";
