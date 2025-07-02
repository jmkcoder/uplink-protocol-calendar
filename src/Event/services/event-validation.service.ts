import { 
  IEventValidationService,
  ValidationRule,
  ValidationRuleResult,
  BusinessRuleConfig,
  ConflictDetectionConfig,
  ValidationContext
} from '../interfaces/event-validation.interfaces';
import { CalendarEvent, CreateEventInput, UpdateEventInput, EventValidationResult, EventConflict } from '../interfaces/event.interfaces';

/**
 * Implementation of event validation service
 * Provides comprehensive validation for events including business rules
 */
export class EventValidationService implements IEventValidationService {
  private rules: ValidationRule[] = [];
  private businessRules: BusinessRuleConfig = {};
  private conflictConfig: ConflictDetectionConfig = {
    detectOverlaps: true,
    detectDoubleBooking: true,
    detectResourceConflicts: false,
    bufferTimeMinutes: 0
  };
  private stats = {
    totalValidations: 0,
    passedValidations: 0,
    failedValidations: 0,
    conflictsDetected: 0
  };

  initialize(businessRules?: BusinessRuleConfig, conflictConfig?: ConflictDetectionConfig): void {
    if (businessRules) {
      this.businessRules = { ...this.businessRules, ...businessRules };
    }
    if (conflictConfig) {
      this.conflictConfig = { ...this.conflictConfig, ...conflictConfig };
    }
    this.initializeDefaultRules();
  }

  async validateForCreate(input: CreateEventInput, context?: ValidationContext): Promise<EventValidationResult> {
    this.stats.totalValidations++;
    
    const errors: string[] = [];
    const warnings: string[] = [];
    const conflicts: EventConflict[] = [];

    // Basic validation
    this.validateBasicFields(input, errors);
    const dateTimeResult = this.validateDateTime(input.dateTime);
    if (!dateTimeResult.passed) {
      errors.push(dateTimeResult.message || 'Invalid date/time');
    }
    
    const attendeesResult = this.validateAttendees(input.attendees || []);
    if (!attendeesResult.passed) {
      errors.push(attendeesResult.message || 'Invalid attendees');
    }
    
    const recurrenceResult = this.validateRecurrence(input.recurrence);
    if (!recurrenceResult.passed) {
      errors.push(recurrenceResult.message || 'Invalid recurrence');
    }

    // Run custom validation rules
    for (const rule of this.rules.filter(r => r.enabled)) {
      const result = rule.validate(input, context);
      if (!result.passed) {
        if (rule.type === 'error') {
          errors.push(result.message || 'Validation failed');
        } else {
          warnings.push(result.message || 'Validation warning');
        }
      }
    }

    // Check conflicts if context provides existing events
    if (context?.existingEvents) {
      const eventConflicts = this.checkConflicts(input, context.existingEvents);
      conflicts.push(...eventConflicts);
      if (eventConflicts.length > 0) {
        this.stats.conflictsDetected++;
      }
    }

    const isValid = errors.length === 0;
    if (isValid) {
      this.stats.passedValidations++;
    } else {
      this.stats.failedValidations++;
    }

    return {
      isValid,
      errors,
      warnings,
      conflicts
    };
  }

  async validateForUpdate(input: UpdateEventInput, context?: ValidationContext): Promise<EventValidationResult> {
    this.stats.totalValidations++;
    
    const errors: string[] = [];
    const warnings: string[] = [];
    const conflicts: EventConflict[] = [];

    // Validate version for optimistic locking
    if (input.version !== undefined && input.version < 0) {
      errors.push('Invalid version number');
    }

    // Basic validation for updated fields
    if (input.title !== undefined && !input.title.trim()) {
      errors.push('Title is required');
    }

    if (input.dateTime) {
      const dateTimeResult = this.validateDateTime(input.dateTime);
      if (!dateTimeResult.passed) {
        errors.push(dateTimeResult.message || 'Invalid date/time');
      }
    }

    if (input.attendees) {
      const attendeesResult = this.validateAttendees(input.attendees);
      if (!attendeesResult.passed) {
        errors.push(attendeesResult.message || 'Invalid attendees');
      }
    }

    if (input.recurrence) {
      const recurrenceResult = this.validateRecurrence(input.recurrence);
      if (!recurrenceResult.passed) {
        errors.push(recurrenceResult.message || 'Invalid recurrence');
      }
    }

    // Check conflicts if context provides existing events
    if (context?.existingEvents && input.dateTime) {
      const eventForConflictCheck = {
        ...input,
        dateTime: input.dateTime
      } as CalendarEvent;
      const eventConflicts = this.checkConflicts(eventForConflictCheck, context.existingEvents);
      conflicts.push(...eventConflicts);
      if (eventConflicts.length > 0) {
        this.stats.conflictsDetected++;
      }
    }

    const isValid = errors.length === 0;
    if (isValid) {
      this.stats.passedValidations++;
    } else {
      this.stats.failedValidations++;
    }

    return {
      isValid,
      errors,
      warnings,
      conflicts
    };
  }

  async validateForDelete(eventId: string, _context?: ValidationContext): Promise<EventValidationResult> {
    this.stats.totalValidations++;
    
    const errors: string[] = [];
    const warnings: string[] = [];
    
    if (!eventId || !eventId.trim()) {
      errors.push('Event ID is required for deletion');
    }

    // Add any business logic for deletion validation here
    // For example, check if user has permission to delete

    const isValid = errors.length === 0;
    if (isValid) {
      this.stats.passedValidations++;
    } else {
      this.stats.failedValidations++;
    }

    return {
      isValid,
      errors,
      warnings,
      conflicts: []
    };
  }

  checkConflicts(event: CalendarEvent | CreateEventInput, existingEvents: CalendarEvent[]): EventConflict[] {
    const conflicts: EventConflict[] = [];
    
    if (!this.conflictConfig.detectOverlaps && !this.conflictConfig.detectDoubleBooking) {
      return conflicts;
    }

    const eventStart = new Date(event.dateTime.start);
    const eventEnd = new Date(event.dateTime.end);
    
    for (const existing of existingEvents) {
      // Skip self when updating
      if ('id' in event && existing.id === event.id) {
        continue;
      }

      const existingStart = new Date(existing.dateTime.start);
      const existingEnd = new Date(existing.dateTime.end);

      // Apply buffer time if configured
      const bufferMs = this.conflictConfig.bufferTimeMinutes * 60 * 1000;
      const bufferedEventStart = new Date(eventStart.getTime() - bufferMs);
      const bufferedEventEnd = new Date(eventEnd.getTime() + bufferMs);

      // Check for time overlap (including buffer time)
      if (this.timesOverlap(bufferedEventStart, bufferedEventEnd, existingStart, existingEnd)) {
        // Determine conflict type
        let conflictType: 'overlap' | 'double_booking' = 'overlap';
        
        // Check for double booking (complete time overlap for same attendees)
        if (this.conflictConfig.detectDoubleBooking) {
          const eventAttendees = 'attendees' in event ? event.attendees || [] : [];
          const existingAttendees = existing.attendees || [];
          
          // Check if there are common attendees
          const hasCommonAttendees = eventAttendees.some(ea => 
            existingAttendees.some(exa => 
              ea.email === exa.email
            )
          );
          
          if (hasCommonAttendees) {
            conflictType = 'double_booking';
          }
        }
        
        conflicts.push({
          event: existing,
          type: conflictType,
          details: `Event ${conflictType === 'double_booking' ? 'double books' : 'overlaps'} with "${existing.title}"`,
          suggestion: conflictType === 'double_booking' 
            ? 'Remove conflicting attendees or reschedule'
            : 'Reschedule this event or the conflicting event'
        });
      }
    }

    return conflicts;
  }

  validateDateTime(dateTime: any): ValidationRuleResult {
    if (!dateTime) {
      return { passed: false, message: 'Date and time are required', field: 'dateTime' };
    }

    if (!dateTime.start || !dateTime.end) {
      return { passed: false, message: 'Start and end times are required', field: 'dateTime' };
    }

    const start = new Date(dateTime.start);
    const end = new Date(dateTime.end);

    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      return { passed: false, message: 'Invalid date format', field: 'dateTime' };
    }

    if (end <= start) {
      return { passed: false, message: 'End time must be after start time', field: 'dateTime' };
    }

    // Check for past dates if minAdvanceBookingMinutes is configured
    if (this.businessRules.minAdvanceBookingMinutes) {
      const now = new Date();
      const minBookingTime = new Date(now.getTime() + this.businessRules.minAdvanceBookingMinutes * 60 * 1000);
      if (start < minBookingTime) {
        return { 
          passed: false, 
          message: `Events must be scheduled at least ${this.businessRules.minAdvanceBookingMinutes} minutes in advance`,
          field: 'dateTime'
        };
      }
    }

    // Check business rules
    const duration = end.getTime() - start.getTime();
    if (this.businessRules.maxDurationMinutes && duration > this.businessRules.maxDurationMinutes * 60 * 1000) {
      return { 
        passed: false, 
        message: `Event duration exceeds maximum of ${this.businessRules.maxDurationMinutes} minutes`,
        field: 'dateTime'
      };
    }

    if (this.businessRules.minDurationMinutes && duration < this.businessRules.minDurationMinutes * 60 * 1000) {
      return { 
        passed: false, 
        message: `Event duration must be at least ${this.businessRules.minDurationMinutes} minutes`,
        field: 'dateTime'
      };
    }

    return { passed: true };
  }

  validateAttendees(attendees: any[]): ValidationRuleResult {
    if (!Array.isArray(attendees)) {
      return { passed: false, message: 'Attendees must be an array', field: 'attendees' };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    for (const attendee of attendees) {
      if (attendee.email && !emailRegex.test(attendee.email)) {
        return { 
          passed: false, 
          message: `Invalid email format: ${attendee.email}`,
          field: 'attendees'
        };
      }
    }

    return { passed: true };
  }

  validateRecurrence(recurrence: any): ValidationRuleResult {
    if (!recurrence) {
      return { passed: true };
    }

    if (recurrence.frequency && !['daily', 'weekly', 'monthly', 'yearly'].includes(recurrence.frequency)) {
      return {
        passed: false,
        message: 'Invalid recurrence frequency',
        field: 'recurrence'
      };
    }

    return { passed: true };
  }

  addValidationRule(rule: ValidationRule): void {
    this.rules.push(rule);
  }

  removeValidationRule(ruleId: string): void {
    this.rules = this.rules.filter(rule => rule.id !== ruleId);
  }

  getValidationRules(): ValidationRule[] {
    return [...this.rules];
  }

  updateBusinessRules(rules: BusinessRuleConfig): void {
    this.businessRules = { ...this.businessRules, ...rules };
  }

  updateConflictDetection(config: ConflictDetectionConfig): void {
    this.conflictConfig = { ...this.conflictConfig, ...config };
  }

  getValidationStats() {
    return { ...this.stats };
  }

  getValidationStatistics() {
    return {
      totalValidations: this.stats.totalValidations,
      passedValidations: this.stats.passedValidations,
      failedValidations: this.stats.failedValidations,
      conflictsDetected: this.stats.conflictsDetected
    };
  }

  private initializeDefaultRules(): void {
    // Past events rule
    this.addValidationRule({
      id: 'no-past-events',
      name: 'No Past Events',
      description: 'Events cannot be created in the past',
      priority: 1,
      enabled: true,
      type: 'error',
      validate: (event) => {
        const start = event.dateTime?.start ? new Date(event.dateTime.start) : null;
        if (!start || start < new Date()) {
          return {
            passed: false,
            message: 'Events cannot be created in the past',
            field: 'dateTime'
          };
        }
        return { passed: true };
      }
    });

    // Required title rule
    this.addValidationRule({
      id: 'required-title',
      name: 'Required Title',
      description: 'Events must have a title',
      priority: 1,
      enabled: true,
      type: 'error',
      validate: (event) => {
        if (!event.title || !event.title.trim()) {
          return {
            passed: false,
            message: 'Event title is required',
            field: 'title'
          };
        }
        return { passed: true };
      }
    });
  }

  private validateBasicFields(input: CreateEventInput, errors: string[]): void {
    if (!input.title || !input.title.trim()) {
      errors.push('Title is required');
    }

    if (!input.dateTime) {
      errors.push('Date and time are required');
    }
  }

  private timesOverlap(start1: Date, end1: Date, start2: Date, end2: Date): boolean {
    return start1 < end2 && end1 > start2;
  }
}
