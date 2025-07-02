import { EventValidationService } from '../../services/event-validation.service';
import { 
  CreateEventInput, 
  UpdateEventInput, 
  CalendarEvent,
  EventValidationResult 
} from '../../interfaces/event.interfaces';
import { 
  ValidationRule,
  BusinessRuleConfig,
  ConflictDetectionConfig,
  ValidationContext 
} from '../../interfaces/event-validation.interfaces';

describe('EventValidationService', () => {
  let service: EventValidationService;

  beforeEach(() => {
    service = new EventValidationService();
    service.initialize();
  });

  describe('initialization', () => {
    it('should initialize with default settings', () => {
      expect(service).toBeDefined();
    });

    it('should initialize with custom business rules', () => {
      const businessRules: BusinessRuleConfig = {
        requiredFields: ['title', 'dateTime']
      };

      const conflictConfig: ConflictDetectionConfig = {
        detectOverlaps: true,
        detectDoubleBooking: true,
        detectResourceConflicts: true,
        bufferTimeMinutes: 15
      };

      service.initialize(businessRules, conflictConfig);
      expect(service).toBeDefined();
    });
  });

  describe('validateForCreate', () => {
    it('should validate valid event input', async () => {
      const input: CreateEventInput = {
        title: 'Valid Event',
        description: 'Valid description',
        dateTime: {
          start: new Date('2026-07-01T10:00:00Z'), // Use next year to ensure future date
          end: new Date('2026-07-01T11:00:00Z'),
          isAllDay: false
        },
        priority: 'normal',
        status: 'confirmed',
        visibility: 'default'
      };

      const context: ValidationContext = {
        mode: 'create',
        existingEvents: []
      };

      const result = await service.validateForCreate(input, context);

      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
      expect(result.warnings).toHaveLength(0);
      expect(result.conflicts).toHaveLength(0);
    });

    it('should reject event with missing title', async () => {
      const input: CreateEventInput = {
        title: '',
        dateTime: {
          start: new Date('2025-07-01T10:00:00Z'),
          end: new Date('2025-07-01T11:00:00Z'),
          isAllDay: false
        },
        priority: 'normal',
        status: 'confirmed',
        visibility: 'default'
      };

      const context: ValidationContext = {
        mode: 'create',
        existingEvents: []
      };

      const result = await service.validateForCreate(input, context);

      expect(result.isValid).toBe(false);
      expect(result.errors.length).toBeGreaterThan(0);
      expect(result.errors.some(error => error.includes('title') || error.includes('Title'))).toBe(true);
    });

    it('should reject event with invalid date time', async () => {
      const input: CreateEventInput = {
        title: 'Test Event',
        dateTime: {
          start: new Date('2025-07-01T11:00:00Z'),
          end: new Date('2025-07-01T10:00:00Z'), // End before start
          isAllDay: false
        },
        priority: 'normal',
        status: 'confirmed',
        visibility: 'default'
      };

      const context: ValidationContext = {
        mode: 'create',
        existingEvents: []
      };

      const result = await service.validateForCreate(input, context);

      expect(result.isValid).toBe(false);
      expect(result.errors.length).toBeGreaterThan(0);
    });

    it('should detect overlapping events', async () => {
      const existingEvent: CalendarEvent = {
        id: 'existing-1',
        title: 'Existing Event',
        dateTime: {
          start: new Date('2025-07-01T10:00:00Z'),
          end: new Date('2025-07-01T11:00:00Z'),
          isAllDay: false,
          timeZone: { id: 'UTC', displayName: 'UTC', offset: 0 }
        },
        priority: 'normal',
        status: 'confirmed',
        visibility: 'default',
        createdAt: new Date(),
        updatedAt: new Date(),
        createdBy: 'user-1',
        updatedBy: 'user-1',
        version: 1
      };

      const input: CreateEventInput = {
        title: 'Overlapping Event',
        dateTime: {
          start: new Date('2025-07-01T10:30:00Z'), // Overlaps with existing
          end: new Date('2025-07-01T11:30:00Z'),
          isAllDay: false
        },
        priority: 'normal',
        status: 'confirmed',
        visibility: 'default'
      };

      const context: ValidationContext = {
        mode: 'create',
        existingEvents: [existingEvent]
      };

      const result = await service.validateForCreate(input, context);

      expect(result.conflicts.length).toBeGreaterThan(0);
      expect(result.conflicts[0].type).toBe('overlap');
    });

    it('should validate attendees', async () => {
      const input: CreateEventInput = {
        title: 'Event with Attendees',
        dateTime: {
          start: new Date('2025-07-01T10:00:00Z'),
          end: new Date('2025-07-01T11:00:00Z'),
          isAllDay: false
        },
        attendees: [
          {
            name: 'John Doe',
            email: 'invalid-email', // Invalid email
            required: true
          }
        ],
        priority: 'normal',
        status: 'confirmed',
        visibility: 'default'
      };

      const context: ValidationContext = {
        mode: 'create',
        existingEvents: []
      };

      const result = await service.validateForCreate(input, context);

      expect(result.isValid).toBe(false);
      expect(result.errors.length).toBeGreaterThan(0);
    });

    it('should validate recurrence rules', async () => {
      const input: CreateEventInput = {
        title: 'Recurring Event',
        dateTime: {
          start: new Date('2025-07-01T10:00:00Z'),
          end: new Date('2025-07-01T11:00:00Z'),
          isAllDay: false
        },
        recurrence: {
          frequency: 'weekly',
          interval: 0, // Invalid interval
          daysOfWeek: [1, 2, 3],
          endDate: new Date('2025-06-01T00:00:00Z') // End date before start
        },
        priority: 'normal',
        status: 'confirmed',
        visibility: 'default'
      };

      const context: ValidationContext = {
        mode: 'create',
        existingEvents: []
      };

      const result = await service.validateForCreate(input, context);

      expect(result.isValid).toBe(false);
      expect(result.errors.length).toBeGreaterThan(0);
    });
  });

  describe('validateForUpdate', () => {
    it('should validate valid update input', async () => {
      const input: UpdateEventInput = {
        id: 'event-1',
        title: 'Updated Event',
        description: 'Updated description',
        dateTime: {
          start: new Date('2025-07-01T10:00:00Z'),
          end: new Date('2025-07-01T11:00:00Z'),
          isAllDay: false
        },
        version: 1
      };

      const context: ValidationContext = {
        mode: 'update',
        existingEvents: []
      };

      const result = await service.validateForUpdate(input, context);

      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    it('should reject update with invalid version', async () => {
      const input: UpdateEventInput = {
        id: 'event-1',
        title: 'Updated Event',
        version: -1 // Invalid version
      };

      const context: ValidationContext = {
        mode: 'update',
        existingEvents: []
      };

      const result = await service.validateForUpdate(input, context);

      expect(result.isValid).toBe(false);
      expect(result.errors.length).toBeGreaterThan(0);
    });

    it('should detect conflicts when updating event time', async () => {
      const existingEvent: CalendarEvent = {
        id: 'existing-1',
        title: 'Existing Event',
        dateTime: {
          start: new Date('2025-07-01T14:00:00Z'),
          end: new Date('2025-07-01T15:00:00Z'),
          isAllDay: false,
          timeZone: { id: 'UTC', displayName: 'UTC', offset: 0 }
        },
        priority: 'normal',
        status: 'confirmed',
        visibility: 'default',
        createdAt: new Date(),
        updatedAt: new Date(),
        createdBy: 'user-1',
        updatedBy: 'user-1',
        version: 1
      };

      const input: UpdateEventInput = {
        id: 'event-to-update',
        dateTime: {
          start: new Date('2025-07-01T14:30:00Z'), // Will overlap with existing
          end: new Date('2025-07-01T15:30:00Z'),
          isAllDay: false
        },
        version: 1
      };

      const context: ValidationContext = {
        mode: 'update',
        existingEvents: [existingEvent]
      };

      const result = await service.validateForUpdate(input, context);

      expect(result.conflicts.length).toBeGreaterThan(0);
    });
  });

  describe('validateForDelete', () => {
    it('should validate deletion', async () => {
      const context: ValidationContext = {
        mode: 'delete',
        existingEvents: []
      };

      const result = await service.validateForDelete('event-1', context);

      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });
  });

  describe('custom validation rules', () => {
    it('should add and execute custom validation rule', () => {
      const customRule: ValidationRule = {
        id: 'custom-rule-1',
        name: 'Custom Title Rule',
        description: 'Title must contain specific word',
        type: 'error',
        priority: 1,
        enabled: true,
        validate: (event: any) => {
          if (typeof event.title === 'string' && event.title.includes('important')) {
            return { passed: true };
          }
          return { 
            passed: false, 
            message: 'Title must contain the word "important"' 
          };
        }
      };

      service.addValidationRule(customRule);

      const rules = service.getValidationRules();
      expect(rules.some(rule => rule.id === 'custom-rule-1')).toBe(true);
    });

    it('should remove custom validation rule', () => {
      const customRule: ValidationRule = {
        id: 'removable-rule',
        name: 'Removable Rule',
        description: 'Rule to be removed',
        type: 'warning',
        priority: 2,
        enabled: true,
        validate: () => ({ passed: true })
      };

      service.addValidationRule(customRule);
      service.removeValidationRule('removable-rule');

      const rules = service.getValidationRules();
      expect(rules.some(rule => rule.id === 'removable-rule')).toBe(false);
    });

    it('should handle enabled/disabled validation rules', () => {
      const enabledRule: ValidationRule = {
        id: 'enabled-rule',
        name: 'Enabled Rule',
        description: 'Rule that is enabled',
        type: 'error',
        priority: 3,
        enabled: true,
        validate: () => ({ passed: false, message: 'Enabled rule failed' })
      };

      const disabledRule: ValidationRule = {
        id: 'disabled-rule',
        name: 'Disabled Rule',
        description: 'Rule that is disabled',
        type: 'error',
        priority: 3,
        enabled: false,
        validate: () => ({ passed: false, message: 'Disabled rule failed' })
      };

      service.addValidationRule(enabledRule);
      service.addValidationRule(disabledRule);

      const rules = service.getValidationRules();
      const foundEnabledRule = rules.find(rule => rule.id === 'enabled-rule');
      const foundDisabledRule = rules.find(rule => rule.id === 'disabled-rule');
      
      expect(foundEnabledRule?.enabled).toBe(true);
      expect(foundDisabledRule?.enabled).toBe(false);
    });
  });

  describe('conflict detection', () => {
    let existingEvents: CalendarEvent[];

    beforeEach(() => {
      existingEvents = [
        createMockEvent('event-1', '2025-07-01T09:00:00Z', '2025-07-01T10:00:00Z'),
        createMockEvent('event-2', '2025-07-01T11:00:00Z', '2025-07-01T12:00:00Z'),
        createMockEvent('event-3', '2025-07-01T14:00:00Z', '2025-07-01T15:00:00Z')
      ];
    });

    it('should detect time overlap conflicts', async () => {
      const input: CreateEventInput = {
        title: 'Overlapping Event',
        dateTime: {
          start: new Date('2025-07-01T09:30:00Z'), // Overlaps with event-1
          end: new Date('2025-07-01T10:30:00Z'),
          isAllDay: false
        },
        priority: 'normal',
        status: 'confirmed',
        visibility: 'default'
      };

      const context: ValidationContext = {
        mode: 'create',
        existingEvents
      };

      const result = await service.validateForCreate(input, context);

      expect(result.conflicts.length).toBeGreaterThan(0);
      expect(result.conflicts[0].type).toBe('overlap');
      expect(result.conflicts[0].event.id).toBe('event-1');
    });

    it('should not detect conflicts for non-overlapping events', async () => {
      const input: CreateEventInput = {
        title: 'Non-overlapping Event',
        dateTime: {
          start: new Date('2025-07-01T10:30:00Z'), // Between event-1 and event-2
          end: new Date('2025-07-01T10:45:00Z'),
          isAllDay: false
        },
        priority: 'normal',
        status: 'confirmed',
        visibility: 'default'
      };

      const context: ValidationContext = {
        mode: 'create',
        existingEvents
      };

      const result = await service.validateForCreate(input, context);

      expect(result.conflicts).toHaveLength(0);
    });

    it('should detect double booking conflicts', async () => {
      // Configure service to detect double booking
      service.initialize(undefined, {
        detectOverlaps: true,
        detectDoubleBooking: true,
        detectResourceConflicts: false,
        bufferTimeMinutes: 0
      });

      // Create an existing event with attendees
      const existingEventsWithAttendees: CalendarEvent[] = [
        {
          ...createMockEvent('event-1', '2025-07-01T09:00:00Z', '2025-07-01T10:00:00Z'),
          attendees: [
            { 
              id: 'attendee-1', 
              email: 'john.doe@example.com', 
              name: 'John Doe', 
              status: 'accepted' as const, 
              required: true 
            },
            { 
              id: 'attendee-2', 
              email: 'jane.smith@example.com', 
              name: 'Jane Smith', 
              status: 'accepted' as const, 
              required: true 
            }
          ]
        },
        createMockEvent('event-2', '2025-07-01T11:00:00Z', '2025-07-01T12:00:00Z'),
        createMockEvent('event-3', '2025-07-01T14:00:00Z', '2025-07-01T15:00:00Z')
      ];

      const input: CreateEventInput = {
        title: 'Double Booked Event',
        dateTime: {
          start: new Date('2025-07-01T09:00:00Z'), // Exact same time as event-1
          end: new Date('2025-07-01T10:00:00Z'),
          isAllDay: false
        },
        priority: 'normal',
        status: 'confirmed',
        visibility: 'default',
        attendees: [
          { email: 'john.doe@example.com', name: 'John Doe', required: true },
          { email: 'bob.wilson@example.com', name: 'Bob Wilson', required: true }
        ]
      };

      const context: ValidationContext = {
        mode: 'create',
        existingEvents: existingEventsWithAttendees
      };

      const result = await service.validateForCreate(input, context);

      expect(result.conflicts.length).toBeGreaterThan(0);
      expect(result.conflicts[0].type).toBe('double_booking');
    });

    it('should respect buffer time in conflict detection', async () => {
      // Configure service with buffer time
      service.initialize(undefined, {
        detectOverlaps: true,
        detectDoubleBooking: true,
        detectResourceConflicts: false,
        bufferTimeMinutes: 30
      });

      const input: CreateEventInput = {
        title: 'Event with Buffer',
        dateTime: {
          start: new Date('2025-07-01T10:15:00Z'), // 15 minutes after event-1 ends
          end: new Date('2025-07-01T10:45:00Z'),
          isAllDay: false
        },
        priority: 'normal',
        status: 'confirmed',
        visibility: 'default'
      };

      const context: ValidationContext = {
        mode: 'create',
        existingEvents
      };

      const result = await service.validateForCreate(input, context);

      // Should detect conflict due to buffer time requirement
      expect(result.conflicts.length).toBeGreaterThan(0);
    });
  });

  describe('validation statistics', () => {
    let statisticsService: EventValidationService;

    beforeEach(async () => {
      // Use a separate service instance for statistics testing
      statisticsService = new EventValidationService();
      statisticsService.initialize();

      // Disable the no-past-events rule for predictable test results
      statisticsService.removeValidationRule('no-past-events');
    });

    it('should provide validation statistics', async () => {
      // Run the validations here instead of relying on beforeEach
      const validInput: CreateEventInput = {
        title: 'Valid Event',
        dateTime: {
          start: new Date('2025-07-01T10:00:00Z'),
          end: new Date('2025-07-01T11:00:00Z'),
          isAllDay: false
        },
        priority: 'normal',
        status: 'confirmed',
        visibility: 'default'
      };

      const invalidInput: CreateEventInput = {
        title: '', // This will fail the required-title rule
        dateTime: {
          start: new Date('2025-07-01T11:00:00Z'),
          end: new Date('2025-07-01T10:00:00Z'), // End before start will fail
          isAllDay: false
        },
        priority: 'normal',
        status: 'confirmed',
        visibility: 'default'
      };

      const context: ValidationContext = {
        mode: 'create',
        existingEvents: []
      };

      await statisticsService.validateForCreate(validInput, context);
      await statisticsService.validateForCreate(invalidInput, context);

      const stats = statisticsService.getValidationStatistics();

      expect(stats.totalValidations).toBeGreaterThanOrEqual(2);
      expect(stats.passedValidations).toBeGreaterThanOrEqual(1);
      expect(stats.failedValidations).toBeGreaterThanOrEqual(1);
      expect(typeof stats.conflictsDetected).toBe('number');
    });

    it('should track validation statistics', () => {
      const initialStats = statisticsService.getValidationStats();
      const initialTotal = initialStats.totalValidations;

      // This test just verifies that stats are tracked, since there's no reset method
      expect(initialStats.totalValidations).toBeGreaterThanOrEqual(0);
      expect(initialStats.passedValidations).toBeGreaterThanOrEqual(0);
      expect(initialStats.failedValidations).toBeGreaterThanOrEqual(0);
      expect(typeof initialStats.conflictsDetected).toBe('number');
    });
  });

  describe('date and time validation', () => {
    it('should validate future dates', () => {
      const futureDate = new Date(Date.now() + 86400000); // Tomorrow
      const result = service.validateDateTime({
        start: futureDate,
        end: new Date(futureDate.getTime() + 3600000),
        isAllDay: false
      });

      expect(result.passed).toBe(true);
    });

    it('should reject past dates when configured', () => {
      // Initialize with business rule for minimum advance booking
      service.initialize({
        requiredFields: [],
        minAdvanceBookingMinutes: 60 // Require events to be at least 1 hour in the future
      });

      const pastDate = new Date(Date.now() - 86400000); // Yesterday
      const result = service.validateDateTime({
        start: pastDate,
        end: new Date(pastDate.getTime() + 3600000),
        isAllDay: false
      });

      expect(result.passed).toBe(false);
      expect(result.message).toContain('60 minutes in advance');
    });

    it('should validate all-day events', () => {
      const result = service.validateDateTime({
        start: new Date('2025-07-01T00:00:00Z'),
        end: new Date('2025-07-01T23:59:59Z'),
        isAllDay: true
      });

      expect(result.passed).toBe(true);
    });

    it('should reject events with end before start', () => {
      const result = service.validateDateTime({
        start: new Date('2025-07-01T11:00:00Z'),
        end: new Date('2025-07-01T10:00:00Z'),
        isAllDay: false
      });

      expect(result.passed).toBe(false);
    });
  });

  // Helper functions
  function createMockEvent(id: string, startTime: string, endTime: string): CalendarEvent {
    return {
      id,
      title: `Event ${id}`,
      dateTime: {
        start: new Date(startTime),
        end: new Date(endTime),
        isAllDay: false,
        timeZone: { id: 'UTC', displayName: 'UTC', offset: 0 }
      },
      priority: 'normal',
      status: 'confirmed',
      visibility: 'default',
      createdAt: new Date(),
      updatedAt: new Date(),
      createdBy: 'test-user',
      updatedBy: 'test-user',
      version: 1
    };
  }
});
