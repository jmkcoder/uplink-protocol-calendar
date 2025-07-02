/**
 * Event Management System Test
 * 
 * Tests the core functionality of the event management system
 */

import { EventController } from '../controller';
import { 
  EventStorageService,
  EventValidationService,
  EventFormattingService,
  EventSearchService 
} from '../services';
import { CalendarEvent } from '../interfaces/event.interfaces';

// Helper function to create complete CalendarEvent objects for testing
function createTestEvent(overrides: Partial<CalendarEvent> = {}): CalendarEvent {
  const now = new Date();
  return {
    id: 'test-id',
    title: 'Test Event',
    description: 'Test description',
    dateTime: {
      start: new Date('2025-07-01T14:00:00Z'),
      end: new Date('2025-07-01T15:00:00Z'),
      isAllDay: false,
      timeZone: { id: 'UTC', displayName: 'UTC', offset: 0 }
    },
    priority: 'normal' as const,
    status: 'confirmed' as const,
    visibility: 'public' as const,
    createdAt: now,
    updatedAt: now,
    createdBy: 'test-user',
    updatedBy: 'test-user',
    version: 1,
    ...overrides
  };
}

describe('Event Management System', () => {
  let eventController: ReturnType<typeof EventController>;
  
  beforeEach(async () => {
    eventController = EventController({
      timeZone: 'UTC',
      locale: 'en-US'
    });
    
    // Initialize the controller
    await eventController.initialize();
  });

  describe('EventController', () => {
    it('should create a new event', async () => {
      const eventInput = {
        title: 'Test Meeting',
        description: 'A test meeting for the event system',
        dateTime: {
          start: new Date('2025-07-01T14:00:00Z'),
          end: new Date('2025-07-01T15:00:00Z'),
          isAllDay: false,
          timeZone: {
            id: 'UTC',
            displayName: 'UTC',
            offset: 0
          }
        },
        location: {
          name: 'Conference Room A',
          address: '123 Test Street'
        },
        priority: 'normal' as const,
        status: 'confirmed' as const,
        category: 'work'
      };

      const event = await eventController.methods.createEvent(eventInput);
      
      expect(event).toBeDefined();
      expect(event.id).toBeDefined();
      expect(event.title).toBe(eventInput.title);
      expect(event.description).toBe(eventInput.description);
      expect(event.category).toBe(eventInput.category);
    });

    it('should update an existing event', async () => {
      // First create an event
      const eventInput = {
        title: 'Original Title',
        dateTime: {
          start: new Date('2025-07-01T14:00:00Z'),
          end: new Date('2025-07-01T15:00:00Z'),
          isAllDay: false,
          timeZone: { id: 'UTC', displayName: 'UTC', offset: 0 }
        }
      };

      const event = await eventController.methods.createEvent(eventInput);
      
      // Then update it
      const updates = {
        id: event.id,
        title: 'Updated Title',
        description: 'Updated description',
        version: event.version
      };

      const updatedEvent = await eventController.methods.updateEvent(updates);
      
      expect(updatedEvent.title).toBe(updates.title);
      expect(updatedEvent.description).toBe(updates.description);
      expect(updatedEvent.id).toBe(event.id);
    });

    it('should delete an event', async () => {
      const eventInput = {
        title: 'Event to Delete',
        dateTime: {
          start: new Date('2025-07-01T14:00:00Z'),
          end: new Date('2025-07-01T15:00:00Z'),
          isAllDay: false,
          timeZone: { id: 'UTC', displayName: 'UTC', offset: 0 }
        }
      };

      const event = await eventController.methods.createEvent(eventInput);
      await eventController.methods.deleteEvent(event.id);
      
      // Verify event is deleted by checking all events
      const allEvents = await eventController.methods.getAllEvents();
      const deletedEvent = allEvents.find(e => e.id === event.id);
      expect(deletedEvent).toBeUndefined();
    });

    it('should search events', async () => {
      // Create test events
      const event1 = await eventController.methods.createEvent({
        title: 'Team Meeting',
        description: 'Weekly team sync',
        dateTime: {
          start: new Date('2025-07-01T14:00:00Z'),
          end: new Date('2025-07-01T15:00:00Z'),
          isAllDay: false,
          timeZone: { id: 'UTC', displayName: 'UTC', offset: 0 }
        },
        category: 'work'
      });

      const event2 = await eventController.methods.createEvent({
        title: 'Project Review',
        description: 'Monthly project review meeting',
        dateTime: {
          start: new Date('2025-07-02T14:00:00Z'),
          end: new Date('2025-07-02T15:00:00Z'),
          isAllDay: false,
          timeZone: { id: 'UTC', displayName: 'UTC', offset: 0 }
        },
        category: 'work'
      });

      // Search for events
      const searchResults = await eventController.methods.searchEvents('meeting');

      expect(searchResults.length).toBeGreaterThan(0);
      expect(searchResults.some(item => item.id === event1.id)).toBe(true);
      expect(searchResults.some(item => item.id === event2.id)).toBe(true);
    });
  });

  describe('Individual Services', () => {
    let storageService: EventStorageService;
    let validationService: EventValidationService;
    let formattingService: EventFormattingService;
    let searchService: EventSearchService;

    beforeEach(async () => {
      storageService = new EventStorageService();
      validationService = new EventValidationService();
      formattingService = new EventFormattingService();
      searchService = new EventSearchService();

      await storageService.initialize({ type: 'memory' });
      validationService.initialize();
      formattingService.initialize({
        locale: 'en-US',
        timeZone: 'UTC',
        translations: {},
        dateFormats: { short: 'M/d/y', medium: 'MMM d, y', long: 'MMMM d, y', full: 'EEEE, MMMM d, y' },
        numberFormats: { decimal: '.', grouping: ',' }
      });
      await searchService.initialize({
        indexedFields: ['title', 'description'],
        enableFullTextSearch: true,
        enableFuzzySearch: false,
        fuzzyThreshold: 0.7,
        enableStemming: false,
        stopWords: [],
        fieldWeights: { title: 2, description: 1 }
      });
    });

    it('should validate events correctly', async () => {
      const validEvent = {
        title: 'Valid Event',
        dateTime: {
          start: new Date('2025-12-01T14:00:00Z'), // Use future date
          end: new Date('2025-12-01T15:00:00Z'),
          isAllDay: false,
          timeZone: { id: 'UTC', displayName: 'UTC', offset: 0 }
        }
      };

      const result = await validationService.validateForCreate(validEvent);
      if (!result.isValid) {
        console.log('Validation errors:', result.errors);
        console.log('Validation warnings:', result.warnings);
      }
      expect(result.isValid).toBe(true);
      expect(result.errors.length).toBe(0);
    });

    it('should format events correctly', () => {
      const event = createTestEvent({
        title: 'Test Event',
        description: 'Test description'
      });

      const formatted = formattingService.formatEvent(event, {
        showDescription: true,
        showLocation: false
      });

      expect(formatted.id).toBe(event.id);
      expect(formatted.title).toBe(event.title);
      expect(formatted.description).toBe(event.description);
      expect(formatted.dateTime.startDate).toBeDefined();
      expect(formatted.dateTime.startTime).toBeDefined();
    });

    it('should export events to different formats', async () => {
      const events = [createTestEvent({
        title: 'Test Event',
        description: 'Test description'
      })];

      const jsonExport = await formattingService.exportEvents(events, {
        format: 'json',
        includeAttachments: false
      });

      expect(jsonExport.mimeType).toBe('application/json');
      expect(jsonExport.filename).toContain('.json');
      expect(typeof jsonExport.data).toBe('string');

      const csvExport = await formattingService.exportEvents(events, {
        format: 'csv',
        includeAttachments: false
      });

      expect(csvExport.mimeType).toBe('text/csv');
      expect(csvExport.filename).toContain('.csv');
    });
  });
});

export {};
