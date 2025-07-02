/**
 * Event Validation Interfaces
 * 
 * Defines interfaces for event validation and business rule enforcement
 */

import { CalendarEvent, CreateEventInput, UpdateEventInput, EventValidationResult, EventConflict } from './event.interfaces';

/**
 * Validation rule definition
 */
export interface ValidationRule {
  /** Rule identifier */
  id: string;
  /** Rule name */
  name: string;
  /** Rule description */
  description: string;
  /** Rule priority */
  priority: number;
  /** Whether rule is enabled */
  enabled: boolean;
  /** Rule type */
  type: 'error' | 'warning' | 'info';
  /** Validation function */
  validate: (event: CalendarEvent | CreateEventInput | UpdateEventInput, context?: ValidationContext) => ValidationRuleResult;
}

/**
 * Validation rule result
 */
export interface ValidationRuleResult {
  /** Whether rule passed */
  passed: boolean;
  /** Error or warning message */
  message?: string;
  /** Field that failed validation */
  field?: string;
  /** Suggested fix */
  suggestion?: string;
}

/**
 * Validation context
 */
export interface ValidationContext {
  /** Existing events for conflict checking */
  existingEvents?: CalendarEvent[];
  /** User performing the action */
  currentUser?: string;
  /** Validation mode */
  mode: 'create' | 'update' | 'delete';
  /** Additional context data */
  metadata?: Record<string, any>;
}

/**
 * Business rule configuration
 */
export interface BusinessRuleConfig {
  /** Maximum event duration in minutes */
  maxDurationMinutes?: number;
  /** Minimum event duration in minutes */
  minDurationMinutes?: number;
  /** Maximum advance booking days */
  maxAdvanceBookingDays?: number;
  /** Minimum advance booking minutes */
  minAdvanceBookingMinutes?: number;
  /** Working hours */
  workingHours?: {
    start: string; // HH:mm format
    end: string;   // HH:mm format
    days: number[]; // 0-6, Sunday-Saturday
  };
  /** Maximum concurrent events */
  maxConcurrentEvents?: number;
  /** Required fields */
  requiredFields?: string[];
  /** Forbidden time ranges */
  forbiddenTimeRanges?: Array<{
    start: string; // HH:mm format
    end: string;   // HH:mm format
    days?: number[];
    reason?: string;
  }>;
}

/**
 * Conflict detection settings
 */
export interface ConflictDetectionConfig {
  /** Enable overlap detection */
  detectOverlaps: boolean;
  /** Enable double booking detection */
  detectDoubleBooking: boolean;
  /** Enable resource conflict detection */
  detectResourceConflicts: boolean;
  /** Buffer time between events in minutes */
  bufferTimeMinutes: number;
  /** Resource types to check */
  resourceTypes?: string[];
}

/**
 * Validation statistics
 */
export interface ValidationStatistics {
  /** Total number of validations performed */
  totalValidations: number;
  /** Number of passed validations */
  passedValidations: number;
  /** Number of failed validations */
  failedValidations: number;
  /** Number of conflicts detected */
  conflictsDetected: number;
}

/**
 * Event validation service interface
 */
export interface IEventValidationService {
  /**
   * Initialize validation service
   */
  initialize(
    businessRules?: BusinessRuleConfig,
    conflictConfig?: ConflictDetectionConfig
  ): void;

  /**
   * Validate event for creation
   */
  validateForCreate(
    input: CreateEventInput,
    context?: ValidationContext
  ): Promise<EventValidationResult>;

  /**
   * Validate event for update
   */
  validateForUpdate(
    input: UpdateEventInput,
    context?: ValidationContext
  ): Promise<EventValidationResult>;

  /**
   * Validate event for deletion
   */
  validateForDelete(
    eventId: string,
    context?: ValidationContext
  ): Promise<EventValidationResult>;

  /**
   * Check for conflicts
   */
  checkConflicts(
    event: CalendarEvent | CreateEventInput,
    existingEvents: CalendarEvent[]
  ): EventConflict[];

  /**
   * Validate date and time
   */
  validateDateTime(dateTime: any): ValidationRuleResult;

  /**
   * Validate attendees
   */
  validateAttendees(attendees: any[]): ValidationRuleResult;

  /**
   * Validate recurrence
   */
  validateRecurrence(recurrence: any): ValidationRuleResult;

  /**
   * Add custom validation rule
   */
  addValidationRule(rule: ValidationRule): void;

  /**
   * Remove validation rule
   */
  removeValidationRule(ruleId: string): void;

  /**
   * Get all validation rules
   */
  getValidationRules(): ValidationRule[];

  /**
   * Update business rules
   */
  updateBusinessRules(rules: BusinessRuleConfig): void;

  /**
   * Update conflict detection settings
   */
  updateConflictDetection(config: ConflictDetectionConfig): void;

  /**
   * Get validation statistics
   */
  getValidationStats(): {
    totalValidations: number;
    passedValidations: number;
    failedValidations: number;
    conflictsDetected: number;
  };
}
