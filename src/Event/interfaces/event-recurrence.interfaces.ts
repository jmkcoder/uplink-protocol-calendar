/**
 * Event Recurrence Interfaces
 * 
 * Defines interfaces for complex recurring event patterns and management
 */

import { CalendarEvent, EventRecurrence } from './event.interfaces';

/**
 * Recurrence pattern types
 */
export type RecurrencePatternType = 
  | 'daily'
  | 'weekly' 
  | 'monthly_date'     // Same date each month (e.g., 15th)
  | 'monthly_weekday'  // Same weekday position (e.g., 2nd Tuesday)
  | 'yearly_date'      // Same date each year
  | 'yearly_weekday'   // Same weekday position each year
  | 'custom';

/**
 * Advanced recurrence pattern
 */
export interface RecurrencePattern {
  /** Pattern type */
  type: RecurrencePatternType;
  /** Interval between occurrences */
  interval: number;
  /** Days of week (for weekly/monthly patterns) */
  daysOfWeek?: number[];
  /** Week of month (for monthly weekday patterns) */
  weekOfMonth?: number;
  /** Day of month (for monthly date patterns) */
  dayOfMonth?: number;
  /** Month (for yearly patterns) */
  month?: number;
  /** Custom RRULE string */
  rrule?: string;
  /** Time zone for recurrence calculation */
  timeZone?: string;
}

/**
 * Recurrence bounds
 */
export interface RecurrenceBounds {
  /** Start date for recurrence */
  startDate: Date;
  /** End type */
  endType: 'never' | 'date' | 'count';
  /** End date (if endType is 'date') */
  endDate?: Date;
  /** Number of occurrences (if endType is 'count') */
  count?: number;
  /** Maximum date to generate (safety limit) */
  maxDate?: Date;
}

/**
 * Recurrence exception
 */
export interface RecurrenceException {
  /** Original occurrence date */
  originalStart: Date;
  /** Exception action */
  action: 'delete' | 'move' | 'modify';
  /** New date (if moved) */
  newDate?: Date;
  /** Modified event data (if modified) */
  modifiedEvent?: Partial<CalendarEvent>;
  /** Reason for exception */
  reason?: string;
}

/**
 * Generated occurrence
 */
export interface RecurrenceOccurrence {
  /** Occurrence date */
  date: Date;
  /** Original start date of this occurrence */
  originalStart: Date;
  /** Actual start date (if modified by exception) */
  actualStart?: Date;
  /** Whether this is an exception */
  isException: boolean;
  /** Exception details */
  exception?: RecurrenceException;
  /** Generated event data */
  event: CalendarEvent;
  /** Occurrence sequence number */
  sequence: number;
  /** Whether this is the master event */
  isMaster: boolean;
}

/**
 * Recurrence expansion options
 */
export interface RecurrenceExpansionOptions {
  /** Start date for expansion */
  startDate: Date;
  /** End date for expansion */
  endDate: Date;
  /** Maximum number of occurrences to generate */
  maxOccurrences?: number;
  /** Include exceptions */
  includeExceptions?: boolean;
  /** Time zone for expansion */
  timeZone?: string;
}

/**
 * Recurrence modification options
 */
export interface RecurrenceModificationOptions {
  /** Modification scope */
  scope: 'this' | 'future' | 'all';
  /** Update recurrence pattern */
  updatePattern?: boolean;
  /** Create exception for original */
  createException?: boolean;
}

/**
 * Recurrence analysis result
 */
export interface RecurrenceAnalysis {
  /** Pattern description */
  description: string;
  /** Pattern description (alternative name for compatibility) */
  patternDescription?: string;
  /** Next occurrence */
  nextOccurrence?: Date;
  /** Previous occurrence */
  previousOccurrence?: Date;
  /** Total occurrences (if bounded) */
  totalOccurrences?: number;
  /** Remaining occurrences */
  remainingOccurrences?: number;
  /** Frequency per year */
  frequencyPerYear: number;
  /** Pattern complexity score */
  complexityScore: number;
  /** Potential conflicts */
  potentialConflicts: string[];
  /** Whether the pattern is valid */
  isValid?: boolean;
}

/**
 * Holiday and calendar system integration
 */
export interface CalendarSystemSettings {
  /** Calendar system type */
  type: 'gregorian' | 'lunar' | 'solar' | 'fiscal';
  /** Holiday calendar to consider */
  holidayCalendar?: string;
  /** Skip weekends */
  skipWeekends?: boolean;
  /** Skip holidays */
  skipHolidays?: boolean;
  /** Working days only */
  workingDaysOnly?: boolean;
  /** Custom skip dates */
  customSkipDates?: Date[];
}

/**
 * Event recurrence service interface
 */
export interface IEventRecurrenceService {
  /**
   * Initialize recurrence service
   */
  initialize(calendarSettings?: CalendarSystemSettings): void;

  /**
   * Create recurrence pattern
   */
  createPattern(
    baseEvent: CalendarEvent,
    pattern: RecurrencePattern,
    bounds: RecurrenceBounds
  ): EventRecurrence;

  /**
   * Expand recurrence into occurrences
   */
  expandRecurrence(
    event: CalendarEvent,
    options: RecurrenceExpansionOptions
  ): RecurrenceOccurrence[];

  /**
   * Get next occurrence
   */
  getNextOccurrence(
    event: CalendarEvent,
    fromDate?: Date
  ): RecurrenceOccurrence | null;

  /**
   * Get previous occurrence
   */
  getPreviousOccurrence(
    event: CalendarEvent,
    fromDate?: Date
  ): RecurrenceOccurrence | null;

  /**
   * Add exception to recurring event
   */
  addException(
    masterEventId: string,
    exception: RecurrenceException
  ): Promise<void>;

  /**
   * Remove exception
   */
  removeException(
    masterEventId: string,
    exceptionDate: Date
  ): Promise<void>;

  /**
   * Modify recurring event
   */
  modifyRecurringEvent(
    eventId: string,
    changes: Partial<CalendarEvent>,
    options: RecurrenceModificationOptions
  ): Promise<CalendarEvent[]>;

  /**
   * Delete recurring event
   */
  deleteRecurringEvent(
    eventId: string,
    options: RecurrenceModificationOptions
  ): Promise<void>;

  /**
   * Analyze recurrence pattern
   */
  analyzeRecurrence(event: CalendarEvent): RecurrenceAnalysis;

  /**
   * Validate recurrence pattern
   */
  validatePattern(pattern: RecurrencePattern, bounds: RecurrenceBounds): {
    isValid: boolean;
    errors: string[];
    warnings: string[];
  };

  /**
   * Parse RRULE string
   */
  parseRRule(rrule: string): RecurrencePattern;

  /**
   * Generate RRULE string
   */
  generateRRule(pattern: RecurrencePattern, bounds: RecurrenceBounds): string;

  /**
   * Get human-readable description
   */
  getRecurrenceDescription(
    pattern: RecurrencePattern,
    bounds: RecurrenceBounds,
    locale?: string
  ): string;

  /**
   * Find conflicting occurrences
   */
  findConflictingOccurrences(
    event: CalendarEvent,
    existingEvents: CalendarEvent[],
    startDate: Date,
    endDate: Date
  ): Array<{
    occurrence: RecurrenceOccurrence;
    conflicts: CalendarEvent[];
  }>;

  /**
   * Optimize recurrence pattern
   */
  optimizePattern(pattern: RecurrencePattern): RecurrencePattern;

  /**
   * Get recurrence statistics
   */
  getRecurrenceStats(events: CalendarEvent[]): {
    totalRecurring: number;
    averageOccurrences: number;
    mostCommonPattern: string;
    complexityDistribution: Record<string, number>;
  };
}
