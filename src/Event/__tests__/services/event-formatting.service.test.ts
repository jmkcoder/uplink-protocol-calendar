/**
 * Unit tests for EventFormattingService
 */

import { EventFormattingService } from '../../services/event-formatting.service';
import { 
  LocalizationSettings,
  DateFormatOptions,
  EventDisplayOptions,
  DurationFormatOptions,
  CalendarViewFormatOptions,
  ExportFormatOptions
} from '../../interfaces/event-formatting.interfaces';
import { CalendarEvent, EventDateTime, TimeZone } from '../../interfaces/event.interfaces';

describe('EventFormattingService', () => {
  let service: EventFormattingService;

  const defaultTimeZone: TimeZone = {
    id: 'UTC',
    displayName: 'Coordinated Universal Time',
    offset: 0
  };

  beforeEach(() => {
    service = new EventFormattingService();
  });

  describe('initialization', () => {
    it('should initialize with default localization settings', () => {
      const customLocalization: LocalizationSettings = {
        locale: 'fr-FR',
        timeZone: 'Europe/Paris',
        translations: { 'event.title': 'Titre de l\'événement' },
        dateFormats: {
          short: 'd/M/y',
          medium: 'd MMM y',
          long: 'd MMMM y',
          full: 'EEEE d MMMM y'
        },
        numberFormats: {
          decimal: ',',
          grouping: ' '
        }
      };

      service.initialize(customLocalization);
      expect(service).toBeDefined();
    });
  });

  describe('event formatting', () => {
    let mockEvent: CalendarEvent;

    beforeEach(() => {
      mockEvent = {
        id: 'test-event-1',
        title: 'Test Meeting',
        description: 'A test meeting for unit testing',
        dateTime: {
          start: new Date('2025-07-15T09:00:00Z'),
          end: new Date('2025-07-15T10:30:00Z'),
          isAllDay: false,
          timeZone: defaultTimeZone
        },
        location: {
          name: 'Conference Room A',
          address: '123 Main St',
          room: 'A'
        },
        attendees: [
          { 
            id: 'user1', 
            name: 'John Doe', 
            email: 'john@example.com',
            status: 'accepted',
            required: true
          }
        ],
        organizer: { 
          id: 'organizer1', 
          name: 'Jane Smith', 
          email: 'jane@example.com',
          status: 'accepted',
          required: true,
          role: 'organizer'
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

    it('should format basic event', () => {
      const result = service.formatEvent(mockEvent);

      expect(result.id).toBe(mockEvent.id);
      expect(result.title).toBe(mockEvent.title);
      expect(result.dateTime).toBeDefined();
      expect(result.dateTime.startDate).toBeDefined();
      expect(result.dateTime.startTime).toBeDefined();
      expect(result.status).toBeDefined();
      expect(result.priority).toBeDefined();
    });

    it('should format event with display options', () => {
      const displayOptions: EventDisplayOptions = {
        showDescription: true,
        showLocation: true,
        showAttendees: true,
        maxDescriptionLength: 100,
        showStatus: true
      };

      const result = service.formatEvent(mockEvent, displayOptions);

      expect(result.description).toBe(mockEvent.description);
      expect(result.location).toBeDefined();
      expect(result.attendees).toBeDefined();
      expect(result.status).toBeDefined();
    });

    it('should format event without optional display options', () => {
      const displayOptions: EventDisplayOptions = {
        showDescription: false,
        showLocation: false,
        showAttendees: false
      };

      const result = service.formatEvent(mockEvent, displayOptions);

      expect(result.description).toBeUndefined();
      expect(result.location).toBeUndefined();
      expect(result.attendees).toBeUndefined();
    });

    it('should format all-day event', () => {
      const allDayEvent: CalendarEvent = {
        ...mockEvent,
        dateTime: {
          start: new Date('2025-07-15T00:00:00Z'),
          end: new Date('2025-07-15T23:59:59Z'),
          isAllDay: true,
          timeZone: defaultTimeZone
        }
      };

      const result = service.formatEvent(allDayEvent);
      expect(result.dateTime.isMultiDay).toBeDefined();
    });
  });

  describe('date and time formatting', () => {
    let mockDateTime: EventDateTime;

    beforeEach(() => {
      mockDateTime = {
        start: new Date('2025-07-15T09:00:00Z'),
        end: new Date('2025-07-15T10:30:00Z'),
        isAllDay: false,
        timeZone: defaultTimeZone
      };
    });

    it('should format date time with default options', () => {
      const result = service.formatDateTime(mockDateTime);

      expect(result.startDate).toBeDefined();
      expect(result.startTime).toBeDefined();
      expect(result.endDate).toBeDefined();
      expect(result.endTime).toBeDefined();
      expect(result.duration).toBeDefined();
    });

    it('should format date time with custom options', () => {
      const options: DateFormatOptions = {
        dateStyle: 'long',
        timeStyle: 'short',
        showTimeZone: true
      };

      const result = service.formatDateTime(mockDateTime, options);
      expect(result.startDate).toBeDefined();
      expect(result.startTime).toBeDefined();
    });

    it('should format all-day events', () => {
      const allDayDateTime: EventDateTime = {
        start: new Date('2025-07-15T00:00:00Z'),
        end: new Date('2025-07-15T23:59:59Z'),
        isAllDay: true,
        timeZone: defaultTimeZone
      };

      const result = service.formatDateTime(allDayDateTime);
      expect(result.duration).toBeDefined();
    });
  });

  describe('duration formatting', () => {
    it('should format duration between dates', () => {
      const startDate = new Date('2025-07-15T09:00:00Z');
      const endDate = new Date('2025-07-15T10:30:00Z');
      const options: DurationFormatOptions = {
        style: 'long'
      };

      const result = service.formatDuration(startDate, endDate, options);
      expect(result).toBeDefined();
      expect(typeof result).toBe('string');
    });

    it('should format short duration', () => {
      const startDate = new Date('2025-07-15T09:00:00Z');
      const endDate = new Date('2025-07-15T09:30:00Z');
      const options: DurationFormatOptions = {
        style: 'compact'
      };

      const result = service.formatDuration(startDate, endDate, options);
      expect(result).toBeDefined();
    });

    it('should format duration with specific units', () => {
      const startDate = new Date('2025-07-15T09:00:00Z');
      const endDate = new Date('2025-07-15T10:05:00Z');
      const options: DurationFormatOptions = {
        style: 'long',
        units: ['hours', 'minutes']
      };

      const result = service.formatDuration(startDate, endDate, options);
      expect(result).toBeDefined();
    });
  });

  describe('calendar view formatting', () => {
    let mockEvents: CalendarEvent[];

    beforeEach(() => {
      mockEvents = [
        {
          id: 'event-1',
          title: 'Morning Meeting',
          dateTime: {
            start: new Date('2025-07-15T09:00:00Z'),
            end: new Date('2025-07-15T10:00:00Z'),
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
        },
        {
          id: 'event-2',
          title: 'All Day Event',
          dateTime: {
            start: new Date('2025-07-15T00:00:00Z'),
            end: new Date('2025-07-15T23:59:59Z'),
            isAllDay: true,
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
    });

    it('should format for month view', () => {
      const options: CalendarViewFormatOptions = {
        viewType: 'month',
        compact: false
      };

      const result = service.formatForCalendarView(mockEvents, options);
      expect(result).toHaveLength(2);
      expect(result[0].title).toBe('Morning Meeting');
      expect(result[1].title).toBe('All Day Event');
      expect(result[0].position).toBeDefined();
    });

    it('should format for week view', () => {
      const options: CalendarViewFormatOptions = {
        viewType: 'week',
        compact: false
      };

      const result = service.formatForCalendarView(mockEvents, options);
      expect(result).toHaveLength(2);
    });

    it('should format for day view', () => {
      const options: CalendarViewFormatOptions = {
        viewType: 'day',
        compact: false
      };

      const result = service.formatForCalendarView(mockEvents, options);
      expect(result).toHaveLength(2);
    });

    it('should format in compact mode', () => {
      const options: CalendarViewFormatOptions = {
        viewType: 'month',
        compact: true
      };

      const result = service.formatForCalendarView(mockEvents, options);
      expect(result).toHaveLength(2);
    });
  });

  describe('export functionality', () => {
    let mockEvent: CalendarEvent;

    beforeEach(() => {
      mockEvent = {
        id: 'export-event-1',
        title: 'Export Test Event',
        description: 'Event for testing export functionality',
        dateTime: {
          start: new Date('2025-07-15T09:00:00Z'),
          end: new Date('2025-07-15T10:30:00Z'),
          isAllDay: false,
          timeZone: defaultTimeZone
        },
        location: {
          name: 'Office'
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

    it('should export events in ICS format', async () => {
      const options: ExportFormatOptions = {
        format: 'ics',
        includeAttachments: true,
        includePrivate: false
      };

      const result = await service.exportEvents([mockEvent], options);
      expect(result).toBeDefined();
      expect(result.data).toBeDefined();
      expect(result.filename).toBeDefined();
      expect(result.mimeType).toBeDefined();
    });

    it('should export events in CSV format', async () => {
      const options: ExportFormatOptions = {
        format: 'csv',
        includeAttachments: false,
        includePrivate: false
      };

      const result = await service.exportEvents([mockEvent], options);
      expect(result).toBeDefined();
      expect(result.data).toBeDefined();
      expect(typeof result.data).toBe('string');
    });

    it('should export events in JSON format', async () => {
      const options: ExportFormatOptions = {
        format: 'json',
        includeAttachments: true,
        includePrivate: false
      };

      const result = await service.exportEvents([mockEvent], options);
      expect(result).toBeDefined();
      expect(result.data).toBeDefined();
      
      // Parse to ensure valid JSON
      const parsed = JSON.parse(result.data as string);
      expect(Array.isArray(parsed)).toBe(true);
    });
  });

  describe('utility methods', () => {
    let mockEvent: CalendarEvent;

    beforeEach(() => {
      mockEvent = {
        id: 'utility-event',
        title: 'Utility Test Event',
        description: 'Testing utility methods',
        dateTime: {
          start: new Date('2025-07-15T09:00:00Z'),
          end: new Date('2025-07-15T10:30:00Z'),
          isAllDay: false,
          timeZone: defaultTimeZone
        },
        priority: 'high',
        status: 'confirmed',
        visibility: 'default',
        createdAt: new Date(),
        updatedAt: new Date(),
        createdBy: 'test-user',
        updatedBy: 'test-user',
        version: 1
      };
    });

    it('should get accessibility label', () => {
      const label = service.getAccessibilityLabel(mockEvent);
      expect(label).toBeDefined();
      expect(typeof label).toBe('string');
      expect(label.length).toBeGreaterThan(0);
    });

    it('should get event summary', () => {
      const summary = service.getEventSummary(mockEvent);
      expect(summary).toBeDefined();
      expect(typeof summary).toBe('string');
    });

    it('should get event summary with max length', () => {
      const summary = service.getEventSummary(mockEvent, 50);
      expect(summary).toBeDefined();
      expect(summary.length).toBeLessThanOrEqual(50);
    });

    it('should get available locales', () => {
      const locales = service.getAvailableLocales();
      expect(Array.isArray(locales)).toBe(true);
      expect(locales.length).toBeGreaterThan(0);
    });

    it('should get supported export formats', () => {
      const formats = service.getSupportedExportFormats();
      expect(Array.isArray(formats)).toBe(true);
      expect(formats.length).toBeGreaterThan(0);
    });
  });

  describe('error handling', () => {
    it('should handle null event gracefully', () => {
      expect(() => {
        service.formatEvent(null as any);
      }).not.toThrow();
    });

    it('should handle invalid date times', () => {
      const invalidEvent: CalendarEvent = {
        id: 'invalid-event',
        title: 'Invalid Event',
        dateTime: {
          start: new Date('invalid-date'),
          end: new Date('invalid-date'),
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

      expect(() => {
        service.formatEvent(invalidEvent);
      }).not.toThrow();
    });

    it('should handle empty events array for calendar view', () => {
      const options: CalendarViewFormatOptions = {
        viewType: 'month',
        compact: false
      };

      const result = service.formatForCalendarView([], options);
      expect(result).toEqual([]);
    });

    it('should handle empty events array for export', async () => {
      const options: ExportFormatOptions = {
        format: 'json',
        includeAttachments: false,
        includePrivate: false
      };

      const result = await service.exportEvents([], options);
      expect(result).toBeDefined();
    });
  });
});
