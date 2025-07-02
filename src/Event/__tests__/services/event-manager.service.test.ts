import { EventManagerService } from '../../services/event-manager.service';
import { 
  CalendarEvent, 
  CreateEventInput, 
  UpdateEventInput, 
  EventFilter, 
  EventSort 
} from '../../interfaces/event.interfaces';
import { EventManagerConfig } from '../../interfaces/event-manager.service.interfaces';

describe('EventManagerService', () => {
  let service: EventManagerService;

  beforeEach(async () => {
    service = new EventManagerService();
    await service.initialize();
  });

  describe('initialization', () => {
    it('should initialize successfully', async () => {
      expect(service.isInitialized()).toBe(true);
    });

    it('should initialize with custom config', async () => {
      const config: EventManagerConfig = {
        storage: {
          type: 'memory',
          options: {}
        },
        validation: {
          enableValidation: true,
          strictMode: false
        },
        search: {
          enableSearch: true,
          fuzzySearch: true
        }
      };

      const newService = new EventManagerService();
      await newService.initialize(config);

      expect(newService.isInitialized()).toBe(true);
      expect(newService.getConfig()).toEqual(expect.objectContaining(config));
    });
  });

  describe('event CRUD operations', () => {
    it('should create an event', async () => {
      const input: CreateEventInput = {
        title: 'Test Event',
        description: 'Test Description',
        dateTime: {
          start: new Date('2025-07-01T10:00:00Z'),
          end: new Date('2025-07-01T11:00:00Z'),
          isAllDay: false
        },
        priority: 'normal',
        status: 'confirmed',
        visibility: 'default'
      };

      const event = await service.createEvent(input);

      expect(event.id).toBeDefined();
      expect(event.title).toBe('Test Event');
      expect(event.description).toBe('Test Description');
      expect(event.dateTime.start).toEqual(input.dateTime.start);
      expect(event.dateTime.end).toEqual(input.dateTime.end);
    });

    it('should get event by ID', async () => {
      const input = createMockEventInput();
      const createdEvent = await service.createEvent(input);

      const retrievedEvent = await service.getEventById(createdEvent.id);

      expect(retrievedEvent).not.toBeNull();
      expect(retrievedEvent?.id).toBe(createdEvent.id);
      expect(retrievedEvent?.title).toBe(input.title);
    });

    it('should return null for non-existent event', async () => {
      const event = await service.getEventById('non-existent-id');
      expect(event).toBeNull();
    });

    it('should update an event', async () => {
      const input = createMockEventInput();
      const createdEvent = await service.createEvent(input);

      const updateInput: UpdateEventInput = {
        id: createdEvent.id,
        title: 'Updated Title',
        description: 'Updated Description',
        version: createdEvent.version
      };

      const updatedEvent = await service.updateEvent(updateInput);

      expect(updatedEvent.id).toBe(createdEvent.id);
      expect(updatedEvent.title).toBe('Updated Title');
      expect(updatedEvent.description).toBe('Updated Description');
    });

    it('should delete an event', async () => {
      const input = createMockEventInput();
      const createdEvent = await service.createEvent(input);

      await service.deleteEvent(createdEvent.id);

      const deletedEvent = await service.getEventById(createdEvent.id);
      expect(deletedEvent).toBeNull();
    });

    it('should throw error when deleting non-existent event', async () => {
      await expect(service.deleteEvent('non-existent-id')).rejects.toThrow('Event not found');
    });
  });

  describe('event querying', () => {
    beforeEach(async () => {
      // Create test events
      const events = [
        {
          title: 'Morning Meeting',
          dateTime: {
            start: new Date('2025-07-01T09:00:00Z'),
            end: new Date('2025-07-01T10:00:00Z'),
            isAllDay: false
          },
          priority: 'high' as const,
          status: 'confirmed' as const,
          category: 'work'
        },
        {
          title: 'Lunch Break',
          dateTime: {
            start: new Date('2025-07-01T12:00:00Z'),
            end: new Date('2025-07-01T13:00:00Z'),
            isAllDay: false
          },
          priority: 'normal' as const,
          status: 'confirmed' as const,
          category: 'personal'
        },
        {
          title: 'Team Review',
          dateTime: {
            start: new Date('2025-07-01T15:00:00Z'),
            end: new Date('2025-07-01T16:00:00Z'),
            isAllDay: false
          },
          priority: 'high' as const,
          status: 'tentative' as const,
          category: 'work'
        }
      ];

      for (const eventData of events) {
        await service.createEvent({
          ...eventData,
          visibility: 'default'
        });
      }
    });

    it('should get all events', async () => {
      const events = await service.getAllEvents();
      expect(events.length).toBeGreaterThanOrEqual(3);
    });

    it('should query events with pagination', async () => {
      const result = await service.queryEvents(undefined, undefined, 1, 2);

      expect(result.events.length).toBeLessThanOrEqual(2);
      expect(result.page).toBe(1);
      expect(result.pageSize).toBe(2);
      expect(result.total).toBeGreaterThanOrEqual(3);
      expect(result.hasMore).toBeDefined();
    });

    it('should filter events by category', async () => {
      const filter: EventFilter = {
        categories: ['work']
      };

      const events = await service.filterEvents(filter);
      expect(events.every(e => e.category === 'work')).toBe(true);
      expect(events.length).toBeGreaterThanOrEqual(2);
    });

    it('should filter events by priority', async () => {
      const filter: EventFilter = {
        priorities: ['high']
      };

      const events = await service.filterEvents(filter);
      expect(events.every(e => e.priority === 'high')).toBe(true);
    });

    it('should filter events by status', async () => {
      const filter: EventFilter = {
        statuses: ['confirmed']
      };

      const events = await service.filterEvents(filter);
      expect(events.every(e => e.status === 'confirmed')).toBe(true);
    });

    it('should filter events by date range', async () => {
      const filter: EventFilter = {
        dateRange: {
          start: new Date('2025-07-01T08:00:00Z'),
          end: new Date('2025-07-01T11:00:00Z')
        }
      };

      const events = await service.filterEvents(filter);
      expect(events.length).toBeGreaterThan(0);
      expect(events.every(e => 
        e.dateTime.start >= filter.dateRange!.start && 
        e.dateTime.start <= filter.dateRange!.end
      )).toBe(true);
    });

    it('should sort events by start time', async () => {
      const sort: EventSort = {
        field: 'start',
        direction: 'asc'
      };

      const events = await service.sortEvents(sort);
      
      for (let i = 1; i < events.length; i++) {
        expect(events[i].dateTime.start.getTime()).toBeGreaterThanOrEqual(
          events[i - 1].dateTime.start.getTime()
        );
      }
    });

    it('should sort events by title', async () => {
      const sort: EventSort = {
        field: 'title',
        direction: 'asc'
      };

      const events = await service.sortEvents(sort);
      
      for (let i = 1; i < events.length; i++) {
        expect(events[i].title.localeCompare(events[i - 1].title)).toBeGreaterThanOrEqual(0);
      }
    });
  });

  describe('event search', () => {
    beforeEach(async () => {
      const events = [
        {
          title: 'JavaScript Workshop',
          description: 'Learn modern JavaScript techniques',
          category: 'education'
        },
        {
          title: 'Team Meeting',
          description: 'Weekly team sync',
          category: 'work'
        },
        {
          title: 'Coffee Chat',
          description: 'Informal discussion about JavaScript frameworks',
          category: 'social'
        }
      ];

      for (const eventData of events) {
        await service.createEvent({
          ...eventData,
          dateTime: {
            start: new Date(),
            end: new Date(Date.now() + 3600000),
            isAllDay: false
          },
          priority: 'normal',
          status: 'confirmed',
          visibility: 'default'
        });
      }
    });

    it('should search events by title', async () => {
      const results = await service.searchEvents('JavaScript');
      expect(results.length).toBeGreaterThan(0);
      expect(results.some(e => e.title.includes('JavaScript'))).toBe(true);
    });

    it('should search events by description', async () => {
      const results = await service.searchEvents('team sync');
      expect(results.length).toBeGreaterThan(0);
      expect(results.some(e => e.description?.includes('sync'))).toBe(true);
    });

    it('should handle search with no results', async () => {
      const results = await service.searchEvents('nonexistent');
      expect(results).toEqual([]);
    });
  });

  describe('upcoming and overdue events', () => {
    beforeEach(async () => {
      const now = new Date();
      const events = [
        {
          title: 'Past Event',
          dateTime: {
            start: new Date(now.getTime() - 86400000), // 1 day ago
            end: new Date(now.getTime() - 82800000),   // 23 hours ago
            isAllDay: false
          }
        },
        {
          title: 'Future Event',
          dateTime: {
            start: new Date(now.getTime() + 86400000), // 1 day from now
            end: new Date(now.getTime() + 90000000),   // 25 hours from now
            isAllDay: false
          }
        },
        {
          title: 'Near Future Event',
          dateTime: {
            start: new Date(now.getTime() + 3600000), // 1 hour from now
            end: new Date(now.getTime() + 7200000),   // 2 hours from now
            isAllDay: false
          }
        }
      ];

      for (const eventData of events) {
        await service.createEvent({
          ...eventData,
          priority: 'normal',
          status: 'confirmed',
          visibility: 'default'
        });
      }
    });

    it('should get upcoming events', async () => {
      const upcomingEvents = await service.getUpcomingEvents(10);
      
      const now = new Date();
      expect(upcomingEvents.every(e => e.dateTime.start > now)).toBe(true);
      expect(upcomingEvents.length).toBeGreaterThan(0);
    });

    it('should limit upcoming events', async () => {
      const upcomingEvents = await service.getUpcomingEvents(1);
      expect(upcomingEvents.length).toBeLessThanOrEqual(1);
    });

    it('should get overdue events', async () => {
      const overdueEvents = await service.getOverdueEvents();
      
      const now = new Date();
      expect(overdueEvents.every(e => e.dateTime.end < now)).toBe(true);
    });
  });

  describe('bulk operations', () => {
    it('should bulk create events', async () => {
      const inputs: CreateEventInput[] = [
        {
          title: 'Bulk Event 1',
          dateTime: {
            start: new Date(),
            end: new Date(Date.now() + 3600000),
            isAllDay: false
          },
          priority: 'normal',
          status: 'confirmed',
          visibility: 'default'
        },
        {
          title: 'Bulk Event 2',
          dateTime: {
            start: new Date(),
            end: new Date(Date.now() + 3600000),
            isAllDay: false
          },
          priority: 'high',
          status: 'tentative',
          visibility: 'default'
        }
      ];

      const events = await service.bulkCreateEvents(inputs);
      
      expect(events.length).toBe(2);
      expect(events[0].title).toBe('Bulk Event 1');
      expect(events[1].title).toBe('Bulk Event 2');
    });

    it('should bulk update events', async () => {
      // Create events first
      const input1 = createMockEventInput('Update Event 1');
      const input2 = createMockEventInput('Update Event 2');
      
      const event1 = await service.createEvent(input1);
      const event2 = await service.createEvent(input2);

      const updates: UpdateEventInput[] = [
        {
          id: event1.id,
          title: 'Updated Event 1',
          version: event1.version
        },
        {
          id: event2.id,
          title: 'Updated Event 2',
          version: event2.version
        }
      ];

      const updatedEvents = await service.bulkUpdateEvents(updates);

      expect(updatedEvents.length).toBe(2);
      expect(updatedEvents[0].title).toBe('Updated Event 1');
      expect(updatedEvents[1].title).toBe('Updated Event 2');
    });

    it('should bulk delete events', async () => {
      // Create events first
      const event1 = await service.createEvent(createMockEventInput('Delete Event 1'));
      const event2 = await service.createEvent(createMockEventInput('Delete Event 2'));

      await service.bulkDeleteEvents([event1.id, event2.id]);

      const deletedEvent1 = await service.getEventById(event1.id);
      const deletedEvent2 = await service.getEventById(event2.id);

      expect(deletedEvent1).toBeNull();
      expect(deletedEvent2).toBeNull();
    });
  });

  describe('date range operations', () => {
    beforeEach(async () => {
      const baseDate = new Date('2025-07-01T00:00:00Z');
      const events = [
        {
          title: 'Event on July 1st',
          dateTime: {
            start: new Date('2025-07-01T10:00:00Z'),
            end: new Date('2025-07-01T11:00:00Z'),
            isAllDay: false
          }
        },
        {
          title: 'Event on July 2nd',
          dateTime: {
            start: new Date('2025-07-02T10:00:00Z'),
            end: new Date('2025-07-02T11:00:00Z'),
            isAllDay: false
          }
        },
        {
          title: 'Event on July 3rd',
          dateTime: {
            start: new Date('2025-07-03T10:00:00Z'),
            end: new Date('2025-07-03T11:00:00Z'),
            isAllDay: false
          }
        }
      ];

      for (const eventData of events) {
        await service.createEvent({
          ...eventData,
          priority: 'normal',
          status: 'confirmed',
          visibility: 'default'
        });
      }
    });

    it('should get events for date range', async () => {
      const start = new Date('2025-07-01T00:00:00Z');
      const end = new Date('2025-07-02T23:59:59Z');

      const events = await service.getEventsForDateRange(start, end);

      expect(events.length).toBeGreaterThanOrEqual(2);
      expect(events.every(e => e.dateTime.start >= start && e.dateTime.start <= end)).toBe(true);
    });

    it('should get events for specific date', async () => {
      const date = new Date('2025-07-01T00:00:00Z'); // Use UTC to match event times

      const events = await service.getEventsForDate(date);

      expect(events.length).toBeGreaterThan(0);
      expect(events.some(e => e.title.includes('July 1st'))).toBe(true);
    });
  });

  describe('statistics', () => {
    beforeEach(async () => {
      const events = [
        {
          priority: 'high' as const,
          status: 'confirmed' as const
        },
        {
          priority: 'normal' as const,
          status: 'confirmed' as const
        },
        {
          priority: 'low' as const,
          status: 'tentative' as const
        }
      ];

      for (const eventData of events) {
        await service.createEvent({
          title: 'Stats Event',
          dateTime: {
            start: new Date(),
            end: new Date(Date.now() + 3600000),
            isAllDay: false
          },
          visibility: 'default',
          ...eventData
        });
      }
    });

    it('should get statistics', async () => {
      const stats = await service.getStatistics();

      expect(stats.totalEvents).toBeGreaterThanOrEqual(3);
      expect(stats.eventsByStatus).toBeDefined();
      expect(stats.eventsByPriority).toBeDefined();
      expect(stats.upcomingEvents).toBeDefined();
      expect(stats.overdueEvents).toBeDefined();
    });

    it('should get statistics for date range', async () => {
      const start = new Date();
      const end = new Date(Date.now() + 86400000); // 1 day from now

      const stats = await service.getStatistics({ start, end });

      expect(stats.totalEvents).toBeGreaterThan(0);
      expect(typeof stats.eventsByStatus).toBe('object');
      expect(typeof stats.eventsByPriority).toBe('object');
    });
  });

  describe('import/export', () => {
    it('should import events', async () => {
      const events: CalendarEvent[] = [
        createMockEvent('Import Event 1'),
        createMockEvent('Import Event 2')
      ];

      const result = await service.importEvents(events);

      expect(result.imported).toBe(2);
      expect(result.skipped).toBe(0);
      expect(result.errors.length).toBe(0);
    });

    it('should skip duplicate events during import', async () => {
      const event = createMockEvent('Duplicate Event');
      
      // Create event first
      await service.createEvent({
        title: event.title,
        dateTime: event.dateTime,
        priority: event.priority,
        status: event.status,
        visibility: event.visibility
      });

      // Try to import the same event
      const result = await service.importEvents([event], { skipDuplicates: true });

      expect(result.skipped).toBe(1);
      expect(result.imported).toBe(0);
    });

    it('should export events', async () => {
      // Create some events first
      await service.createEvent(createMockEventInput('Export Event 1'));
      await service.createEvent(createMockEventInput('Export Event 2'));

      const result = await service.exportEvents();

      expect(result.data).toBeDefined();
      expect(result.filename).toBeDefined();
      expect(result.mimeType).toBeDefined();
      expect(typeof result.data).toBe('string');
    });

    it('should export events with filter', async () => {
      await service.createEvent({
        ...createMockEventInput('Work Event'),
        category: 'work'
      });
      
      await service.createEvent({
        ...createMockEventInput('Personal Event'),
        category: 'personal'
      });

      const filter: EventFilter = {
        categories: ['work']
      };

      const result = await service.exportEvents(filter);

      expect(result.data).toBeDefined();
      expect(result.data.length).toBeGreaterThan(0);
    });
  });

  describe('validation', () => {
    it('should validate event input', async () => {
      const input: CreateEventInput = {
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

      const result = await service.validateEvent(input);

      expect(result.isValid).toBe(true);
      expect(result.errors.length).toBe(0);
    });
  });

  describe('event listeners', () => {
    it('should provide event emitters', () => {
      const events = service.getEvents();

      expect(events.eventCreated).toBeDefined();
      expect(events.eventUpdated).toBeDefined();
      expect(events.eventDeleted).toBeDefined();
      expect(events.validationFailed).toBeDefined();
      expect(events.errorOccurred).toBeDefined();
    });

    it('should initialize events object', () => {
      const eventsObj = service.initializeEvents();

      expect(eventsObj.eventCreated).toBeDefined();
      expect(eventsObj.eventUpdated).toBeDefined();
      expect(eventsObj.eventDeleted).toBeDefined();
      expect(eventsObj.validationFailed).toBeDefined();
      expect(eventsObj.errorOccurred).toBeDefined();
      expect(eventsObj.bulkOperationCompleted).toBeDefined();
    });
  });

  describe('backup and restore', () => {
    it('should create backup', async () => {
      await service.createEvent(createMockEventInput('Backup Event'));

      const backup = await service.backup();

      expect(typeof backup).toBe('string');
      expect(backup.length).toBeGreaterThan(0);

      const parsed = JSON.parse(backup);
      expect(parsed.timestamp).toBeDefined();
      expect(parsed.version).toBeDefined();
      expect(parsed.events).toBeDefined();
      expect(Array.isArray(parsed.events)).toBe(true);
    });

    it('should restore from backup', async () => {
      const originalEvent = createMockEvent('Original Event');
      const backup = JSON.stringify({
        timestamp: new Date().toISOString(),
        version: '1.0',
        events: [originalEvent],
        config: {}
      });

      await service.restore(backup);

      const events = await service.getAllEvents();
      expect(events.some(e => e.title === 'Original Event')).toBe(true);
    });
  });

  describe('status', () => {
    it('should get service status', () => {
      const status = service.getStatus();

      expect(status.initialized).toBe(true);
      expect(typeof status.totalEvents).toBe('number');
      expect(Array.isArray(status.errors)).toBe(true);
      expect(['good', 'warning', 'error']).toContain(status.health);
    });
  });

  // Helper functions
  function createMockEventInput(title: string = 'Test Event'): CreateEventInput {
    return {
      title,
      description: 'Test Description',
      dateTime: {
        start: new Date('2025-07-01T10:00:00Z'),
        end: new Date('2025-07-01T11:00:00Z'),
        isAllDay: false
      },
      priority: 'normal',
      status: 'confirmed',
      visibility: 'default'
    };
  }

  function createMockEvent(title: string = 'Test Event'): CalendarEvent {
    return {
      id: `event-${Date.now()}-${Math.random()}`,
      title,
      description: 'Test Description',
      dateTime: {
        start: new Date('2025-07-01T10:00:00Z'),
        end: new Date('2025-07-01T11:00:00Z'),
        isAllDay: false,
        timeZone: {
          id: 'UTC',
          displayName: 'UTC',
          offset: 0
        }
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
