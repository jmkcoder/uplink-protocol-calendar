/**
 * Unit tests for EventRecurrenceService
 */

import { EventRecurrenceService } from '../../services/event-recurrence.service';
import { 
  RecurrencePattern,
  RecurrenceBounds,
  RecurrenceException,
  RecurrenceExpansionOptions,
  CalendarSystemSettings,
  RecurrenceModificationOptions
} from '../../interfaces/event-recurrence.interfaces';
import { CalendarEvent, EventRecurrence, TimeZone } from '../../interfaces/event.interfaces';

describe('EventRecurrenceService', () => {
  let service: EventRecurrenceService;

  const defaultTimeZone: TimeZone = {
    id: 'UTC',
    displayName: 'Coordinated Universal Time',
    offset: 0
  };

  beforeEach(() => {
    service = new EventRecurrenceService();
  });

  describe('initialization', () => {
    it('should initialize with default settings', () => {
      service.initialize();
      expect(service).toBeDefined();
    });

    it('should initialize with custom calendar settings', () => {
      const calendarSettings: CalendarSystemSettings = {
        type: 'gregorian',
        holidayCalendar: 'US',
        skipWeekends: true,
        skipHolidays: false,
        workingDaysOnly: false
      };

      service.initialize(calendarSettings);
      expect(service).toBeDefined();
    });
  });

  describe('pattern creation', () => {
    let baseEvent: CalendarEvent;

    beforeEach(() => {
      baseEvent = {
        id: 'base-event-1',
        title: 'Recurring Meeting',
        dateTime: {
          start: new Date('2025-07-01T09:00:00Z'),
          end: new Date('2025-07-01T10:00:00Z'),
          isAllDay: false,
          timeZone: defaultTimeZone
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
    });

    it('should create daily recurrence pattern', () => {
      const pattern: RecurrencePattern = {
        type: 'daily',
        interval: 1
      };

      const bounds: RecurrenceBounds = {
        startDate: new Date('2025-07-01T00:00:00Z'),
        endType: 'count',
        count: 10
      };

      const result = service.createPattern(baseEvent, pattern, bounds);

      expect(result.frequency).toBe('daily');
      expect(result.interval).toBe(1);
      expect(result.count).toBe(10);
    });

    it('should create weekly recurrence pattern', () => {
      const pattern: RecurrencePattern = {
        type: 'weekly',
        interval: 2,
        daysOfWeek: [1, 3, 5] // Monday, Wednesday, Friday
      };

      const bounds: RecurrenceBounds = {
        startDate: new Date('2025-07-01T00:00:00Z'),
        endType: 'date',
        endDate: new Date('2025-12-31T23:59:59Z')
      };

      const result = service.createPattern(baseEvent, pattern, bounds);

      expect(result.frequency).toBe('weekly');
      expect(result.interval).toBe(2);
      expect(result.daysOfWeek).toEqual([1, 3, 5]);
      expect(result.endDate).toEqual(bounds.endDate);
    });

    it('should create monthly recurrence pattern', () => {
      const pattern: RecurrencePattern = {
        type: 'monthly_date',
        interval: 1,
        dayOfMonth: 15
      };

      const bounds: RecurrenceBounds = {
        startDate: new Date('2025-07-01T00:00:00Z'),
        endType: 'count',
        count: 12
      };

      const result = service.createPattern(baseEvent, pattern, bounds);

      expect(result.frequency).toBe('monthly');
      expect(result.dayOfMonth).toBe(15);
      expect(result.count).toBe(12);
    });

    it('should create yearly recurrence pattern', () => {
      const pattern: RecurrencePattern = {
        type: 'yearly_date',
        interval: 1,
        month: 7,
        dayOfMonth: 4
      };

      const bounds: RecurrenceBounds = {
        startDate: new Date('2025-07-01T00:00:00Z'),
        endType: 'count',
        count: 5
      };

      const result = service.createPattern(baseEvent, pattern, bounds);

      expect(result.frequency).toBe('yearly');
      expect(result.month).toBe(7);
      expect(result.dayOfMonth).toBe(4);
    });

    it('should create custom recurrence pattern', () => {
      const pattern: RecurrencePattern = {
        type: 'custom',
        interval: 1,
        rrule: 'FREQ=WEEKLY;BYDAY=MO,WE,FR;COUNT=20'
      };

      const bounds: RecurrenceBounds = {
        startDate: new Date('2025-07-01T00:00:00Z'),
        endType: 'count',
        count: 20
      };

      const result = service.createPattern(baseEvent, pattern, bounds);

      expect(result.frequency).toBe('custom');
      expect(result.customPattern).toBe('FREQ=WEEKLY;BYDAY=MO,WE,FR;COUNT=20');
    });
  });

  describe('occurrence expansion', () => {
    let recurringEvent: CalendarEvent;

    beforeEach(() => {
      recurringEvent = {
        id: 'recurring-event-1',
        title: 'Daily Standup',
        dateTime: {
          start: new Date('2025-07-01T09:00:00Z'),
          end: new Date('2025-07-01T09:30:00Z'),
          isAllDay: false,
          timeZone: defaultTimeZone
        },
        recurrence: {
          frequency: 'daily',
          interval: 1,
          count: 10
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
    });

    it('should expand daily occurrences', () => {
      const options: RecurrenceExpansionOptions = {
        startDate: new Date('2025-07-01T00:00:00Z'),
        endDate: new Date('2025-07-15T23:59:59Z'),
        maxOccurrences: 10
      };

      const occurrences = service.expandOccurrences(recurringEvent, options);

      expect(occurrences).toHaveLength(10);
      expect(occurrences[0].originalStart).toEqual(recurringEvent.dateTime.start);
      expect(occurrences[1].originalStart).toEqual(new Date('2025-07-02T09:00:00Z'));
    });

    it('should expand weekly occurrences', () => {
      const weeklyEvent: CalendarEvent = {
        ...recurringEvent,
        recurrence: {
          frequency: 'weekly',
          interval: 1,
          daysOfWeek: [1, 3, 5], // Monday, Wednesday, Friday
          count: 6
        }
      };

      const options: RecurrenceExpansionOptions = {
        startDate: new Date('2025-07-01T00:00:00Z'),
        endDate: new Date('2025-07-31T23:59:59Z'),
        maxOccurrences: 6
      };

      const occurrences = service.expandOccurrences(weeklyEvent, options);

      expect(occurrences).toHaveLength(6);
      // Check that occurrences fall on correct days
      occurrences.forEach(occurrence => {
        const dayOfWeek = occurrence.originalStart.getUTCDay();
        expect([1, 3, 5]).toContain(dayOfWeek);
      });
    });

    it('should respect maximum occurrences limit', () => {
      const options: RecurrenceExpansionOptions = {
        startDate: new Date('2025-07-01T00:00:00Z'),
        endDate: new Date('2025-12-31T23:59:59Z'),
        maxOccurrences: 5
      };

      const occurrences = service.expandOccurrences(recurringEvent, options);

      expect(occurrences).toHaveLength(5);
    });

    it('should handle date range limits', () => {
      const options: RecurrenceExpansionOptions = {
        startDate: new Date('2025-07-01T00:00:00Z'),
        endDate: new Date('2025-07-05T23:59:59Z')
      };

      const occurrences = service.expandOccurrences(recurringEvent, options);

      expect(occurrences.length).toBeLessThanOrEqual(5);
      occurrences.forEach(occurrence => {
        expect(occurrence.originalStart.getTime()).toBeGreaterThanOrEqual(options.startDate.getTime());
        expect(occurrence.originalStart.getTime()).toBeLessThanOrEqual(options.endDate.getTime());
      });
    });
  });

  describe('exception handling', () => {
    let recurringEvent: CalendarEvent;

    beforeEach(() => {
      recurringEvent = {
        id: 'recurring-event-with-exceptions',
        title: 'Weekly Team Meeting',
        dateTime: {
          start: new Date('2025-07-01T14:00:00Z'),
          end: new Date('2025-07-01T15:00:00Z'),
          isAllDay: false,
          timeZone: defaultTimeZone
        },
        recurrence: {
          frequency: 'weekly',
          interval: 1,
          daysOfWeek: [2], // Tuesday
          count: 10
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
    });

    it('should add exception to recurrence', () => {
      const exceptionDate = new Date('2025-07-08T14:00:00Z');
      const exception: RecurrenceException = {
        originalStart: exceptionDate,
        action: 'delete'
      };

      service.addException(recurringEvent.id, exception);

      const options: RecurrenceExpansionOptions = {
        startDate: new Date('2025-07-01T00:00:00Z'),
        endDate: new Date('2025-08-31T23:59:59Z'),
        maxOccurrences: 10
      };

      const occurrences = service.expandOccurrences(recurringEvent, options);

      // Should not include the exception date
      const hasExceptionDate = occurrences.some(
        occ => occ.originalStart.getTime() === exceptionDate.getTime()
      );
      expect(hasExceptionDate).toBe(false);
    });

    it('should modify occurrence with exception', () => {
      const exceptionDate = new Date('2025-07-08T14:00:00Z');
      const exception: RecurrenceException = {
        originalStart: exceptionDate,
        action: 'modify',
        modifiedEvent: {
          dateTime: {
            start: new Date('2025-07-08T15:00:00Z'),
            end: new Date('2025-07-08T16:00:00Z'),
            isAllDay: false,
            timeZone: defaultTimeZone
          },
          title: 'Rescheduled Team Meeting'
        }
      };

      service.addException(recurringEvent.id, exception);

      const options: RecurrenceExpansionOptions = {
        startDate: new Date('2025-07-01T00:00:00Z'),
        endDate: new Date('2025-08-31T23:59:59Z'),
        maxOccurrences: 10
      };

      const occurrences = service.expandOccurrences(recurringEvent, options);

      const modifiedOccurrence = occurrences.find(
        occ => occ.originalStart.getTime() === exceptionDate.getTime()
      );

      expect(modifiedOccurrence).toBeDefined();
      expect(modifiedOccurrence?.actualStart?.getTime()).toBe(exception.modifiedEvent?.dateTime?.start?.getTime());
    });

    it('should remove exception from recurrence', () => {
      const exceptionDate = new Date('2025-07-08T14:00:00Z');
      const exception: RecurrenceException = {
        originalStart: exceptionDate,
        action: 'delete'
      };

      service.addException(recurringEvent.id, exception);
      service.removeException(recurringEvent.id, exceptionDate);

      const options: RecurrenceExpansionOptions = {
        startDate: new Date('2025-07-01T00:00:00Z'),
        endDate: new Date('2025-08-31T23:59:59Z'),
        maxOccurrences: 10
      };

      const occurrences = service.expandOccurrences(recurringEvent, options);

      // Should include the date again after removing exception
      const hasDate = occurrences.some(
        occ => occ.originalStart.getTime() === exceptionDate.getTime()
      );
      expect(hasDate).toBe(true);
    });
  });

  describe('recurrence modification', () => {
    let recurringEvent: CalendarEvent;

    beforeEach(() => {
      recurringEvent = {
        id: 'recurring-event-modify',
        title: 'Recurring Workshop',
        dateTime: {
          start: new Date('2025-07-01T10:00:00Z'),
          end: new Date('2025-07-01T12:00:00Z'),
          isAllDay: false,
          timeZone: defaultTimeZone
        },
        recurrence: {
          frequency: 'weekly',
          interval: 1,
          daysOfWeek: [1], // Monday
          count: 10
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
    });

    it('should modify this occurrence only', () => {
      const occurrenceDate = new Date('2025-07-08T10:00:00Z');
      const modifications = {
        title: 'Special Workshop Session',
        dateTime: {
          start: new Date('2025-07-08T11:00:00Z'),
          end: new Date('2025-07-08T13:00:00Z'),
          isAllDay: false,
          timeZone: defaultTimeZone
        }
      };

      const options: RecurrenceModificationOptions = {
        scope: 'this'
      };

      const result = service.modifyOccurrence(
        recurringEvent.id,
        occurrenceDate,
        modifications,
        options
      );

      expect(result.success).toBe(true);
      expect(result.modifiedEvents).toHaveLength(1);
      expect(result.modifiedEvents[0].title).toBe('Special Workshop Session');
    });

    it('should modify this and future occurrences', () => {
      const occurrenceDate = new Date('2025-07-08T10:00:00Z');
      const modifications = {
        title: 'Updated Workshop Series'
      };

      const options: RecurrenceModificationOptions = {
        scope: 'future'
      };

      const result = service.modifyOccurrence(
        recurringEvent.id,
        occurrenceDate,
        modifications,
        options
      );

      expect(result.success).toBe(true);
      expect(result.splitEvent).toBeDefined();
      expect(result.modifiedEvents.length).toBeGreaterThan(0);
    });

    it('should modify all occurrences', () => {
      const occurrenceDate = new Date('2025-07-08T10:00:00Z');
      const modifications = {
        title: 'Completely Updated Workshop',
        description: 'New description for all workshops'
      };

      const options: RecurrenceModificationOptions = {
        scope: 'all'
      };

      const result = service.modifyOccurrence(
        recurringEvent.id,
        occurrenceDate,
        modifications,
        options
      );

      expect(result.success).toBe(true);
      expect(result.modifiedEvents).toHaveLength(1);
      expect(result.modifiedEvents[0].title).toBe('Completely Updated Workshop');
    });
  });

  describe('recurrence analysis', () => {
    let recurringEvent: CalendarEvent;

    beforeEach(() => {
      recurringEvent = {
        id: 'recurring-event-analysis',
        title: 'Analysis Event',
        dateTime: {
          start: new Date('2025-07-01T09:00:00Z'),
          end: new Date('2025-07-01T10:00:00Z'),
          isAllDay: false,
          timeZone: defaultTimeZone
        },
        recurrence: {
          frequency: 'daily',
          interval: 1,
          count: 30
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
    });

    it('should analyze recurrence pattern', () => {
      const analysis = service.analyzeRecurrence(recurringEvent);

      expect(analysis.totalOccurrences).toBe(30);
      expect(analysis.patternDescription).toBeDefined();
      expect(analysis.nextOccurrence).toBeDefined();
      expect(analysis.isValid).toBe(true);
    });

    it('should detect conflicts in recurrence', () => {
      const existingEvents: CalendarEvent[] = [
        {
          id: 'conflict-event',
          title: 'Conflicting Event',
          dateTime: {
            start: new Date('2025-07-03T09:15:00Z'),
            end: new Date('2025-07-03T09:45:00Z'),
            isAllDay: false,
            timeZone: defaultTimeZone
          },
          priority: 'normal',
          status: 'confirmed',
          visibility: 'default',
          createdAt: new Date(),
          updatedAt: new Date(),
          createdBy: 'test-user',
          updatedBy: 'test-user',
          version: 1
        }
      ];

      const conflicts = service.detectRecurrenceConflicts(recurringEvent, existingEvents);

      expect(conflicts.length).toBeGreaterThan(0);
      expect(conflicts[0].conflictingEvent).toBeDefined();
      expect(conflicts[0].occurrence).toBeDefined();
    });

    it('should calculate recurrence statistics', () => {
      const stats = service.getRecurrenceStatistics(recurringEvent);

      expect(stats.totalDuration).toBeGreaterThan(0);
      expect(stats.averageGapDays).toBeGreaterThan(0);
      expect(stats.patternComplexity).toBeDefined();
      expect(stats.estimatedEndDate).toBeDefined();
    });
  });

  describe('utility methods', () => {
    it('should validate recurrence pattern', () => {
      const validPattern: RecurrencePattern = {
        type: 'weekly',
        interval: 1,
        daysOfWeek: [1, 3, 5]
      };

      const invalidPattern: RecurrencePattern = {
        type: 'weekly',
        interval: 0, // Invalid interval
        daysOfWeek: [8] // Invalid day
      };

      expect(service.validatePattern(validPattern).isValid).toBe(true);
      expect(service.validatePattern(invalidPattern).isValid).toBe(false);
    });

    it('should get next occurrence date', () => {
      const event: CalendarEvent = {
        id: 'next-occurrence-event',
        title: 'Next Occurrence Test',
        dateTime: {
          start: new Date('2025-07-01T09:00:00Z'),
          end: new Date('2025-07-01T10:00:00Z'),
          isAllDay: false,
          timeZone: defaultTimeZone
        },
        recurrence: {
          frequency: 'daily',
          interval: 1,
          count: 10
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

      const nextDate = service.getNextOccurrence(event, new Date('2025-07-05T00:00:00Z'));
      expect(nextDate?.date).toEqual(new Date('2025-07-06T00:00:00Z'));
    });

    it('should check if date is occurrence', () => {
      const event: CalendarEvent = {
        id: 'occurrence-check-event',
        title: 'Occurrence Check Test',
        dateTime: {
          start: new Date('2025-07-01T09:00:00Z'),
          end: new Date('2025-07-01T10:00:00Z'),
          isAllDay: false,
          timeZone: defaultTimeZone
        },
        recurrence: {
          frequency: 'weekly',
          interval: 1,
          daysOfWeek: [2], // Tuesday
          count: 10
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

      const tuesdayDate = new Date('2025-07-08T09:00:00Z'); // Tuesday
      const wednesdayDate = new Date('2025-07-09T09:00:00Z'); // Wednesday

      expect(service.isOccurrence(event, tuesdayDate)).toBe(true);
      expect(service.isOccurrence(event, wednesdayDate)).toBe(false);
    });
  });

  describe('error handling', () => {
    it('should handle invalid recurrence rules', () => {
      const invalidEvent: CalendarEvent = {
        id: 'invalid-event',
        title: 'Invalid Recurrence Event',
        dateTime: {
          start: new Date('2025-07-01T09:00:00Z'),
          end: new Date('2025-07-01T10:00:00Z'),
          isAllDay: false,
          timeZone: defaultTimeZone
        },
        recurrence: {
          frequency: 'invalid' as any,
          interval: -1
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

      const options: RecurrenceExpansionOptions = {
        startDate: new Date('2025-07-01T00:00:00Z'),
        endDate: new Date('2025-08-01T00:00:00Z')
      };

      expect(() => {
        service.expandOccurrences(invalidEvent, options);
      }).not.toThrow();
    });

    it('should handle events without recurrence', () => {
      const nonRecurringEvent: CalendarEvent = {
        id: 'non-recurring-event',
        title: 'Single Event',
        dateTime: {
          start: new Date('2025-07-01T09:00:00Z'),
          end: new Date('2025-07-01T10:00:00Z'),
          isAllDay: false,
          timeZone: defaultTimeZone
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

      const options: RecurrenceExpansionOptions = {
        startDate: new Date('2025-07-01T00:00:00Z'),
        endDate: new Date('2025-08-01T00:00:00Z')
      };

      const occurrences = service.expandOccurrences(nonRecurringEvent, options);
      expect(occurrences).toHaveLength(0);
    });

    it('should handle empty date ranges', () => {
      const event: CalendarEvent = {
        id: 'empty-range-event',
        title: 'Empty Range Test',
        dateTime: {
          start: new Date('2025-07-01T09:00:00Z'),
          end: new Date('2025-07-01T10:00:00Z'),
          isAllDay: false,
          timeZone: defaultTimeZone
        },
        recurrence: {
          frequency: 'daily',
          interval: 1,
          count: 10
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

      const options: RecurrenceExpansionOptions = {
        startDate: new Date('2025-08-01T00:00:00Z'),
        endDate: new Date('2025-07-01T00:00:00Z') // End before start
      };

      const occurrences = service.expandOccurrences(event, options);
      expect(occurrences).toHaveLength(0);
    });
  });
});
