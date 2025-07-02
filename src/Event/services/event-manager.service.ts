/**
 * Event Manager Service
 * 
 * Main service that orchestrates all event management functionality
 */

import { EventEmitter } from "@uplink-protocol/core";
import {
  CalendarEvent,
  CreateEventInput,
  UpdateEventInput,
  EventFilter,
  EventSort,
  EventResults,
  EventValidationResult
} from '../interfaces/event.interfaces';
import {
  IEventManagerService,
  EventManagerConfig
} from '../interfaces/event-manager.service.interfaces';
import { EventStorageService } from './event-storage.service';
import { EventValidationService } from './event-validation.service';
import { EventFormattingService } from './event-formatting.service';
import { EventSearchService } from './event-search.service';
import { EventRecurrenceService } from './event-recurrence.service';

/**
 * Event Manager Service Implementation
 */
export class EventManagerService implements IEventManagerService {
  private initialized = false;
  private config: EventManagerConfig = {};
  
  // Core services
  private storageService: EventStorageService;
  private validationService: EventValidationService;
  private formattingService: EventFormattingService;
  private searchService: EventSearchService;
  private recurrenceService: EventRecurrenceService;
  
  // Event emitters - matches EventControllerEvents interface
  private events = {
    eventCreated: new EventEmitter<CalendarEvent>(),
    eventUpdated: new EventEmitter<{ event: CalendarEvent; oldEvent: CalendarEvent }>(),
    eventDeleted: new EventEmitter<{ eventId: string; event: CalendarEvent }>(),
    eventsLoaded: new EventEmitter<CalendarEvent[]>(),
    filterChanged: new EventEmitter<EventFilter>(),
    sortChanged: new EventEmitter<EventSort>(),
    searchPerformed: new EventEmitter<{ query: string; results: CalendarEvent[] }>(),
    eventSelected: new EventEmitter<CalendarEvent>(),
    eventDeselected: new EventEmitter<void>(),
    validationFailed: new EventEmitter<EventValidationResult>(),
    conflictDetected: new EventEmitter<any>(),
    conflictResolved: new EventEmitter<any>(),
    syncStarted: new EventEmitter<{ providerId: string }>(),
    syncCompleted: new EventEmitter<{ providerId: string; results: any }>(),
    syncFailed: new EventEmitter<{ providerId: string; error: string }>(),
    bulkOperationCompleted: new EventEmitter<{ operation: string; count: number }>(),
    loadingChanged: new EventEmitter<boolean>(),
    errorOccurred: new EventEmitter<Error>(),
    statisticsUpdated: new EventEmitter<any>(),
    recurrenceCreated: new EventEmitter<CalendarEvent>(),
    reminderScheduled: new EventEmitter<{ eventId: string; reminder: any }>(),
    categoryAdded: new EventEmitter<string>(),
    tagAdded: new EventEmitter<string>()
  };

  constructor() {
    // Initialize available services
    this.storageService = new EventStorageService();
    this.validationService = new EventValidationService();
    this.formattingService = new EventFormattingService();
    this.searchService = new EventSearchService();
    this.recurrenceService = new EventRecurrenceService();
  }

  /**
   * Initialize the event manager
   */
  async initialize(config: EventManagerConfig = {}): Promise<void> {
    this.config = { ...this.config, ...config };

    try {
      // Initialize storage
      if (config.storage) {
        await this.storageService.initialize({
          type: config.storage.type || 'memory',
          ...config.storage.options
        });
      }

      // Initialize validation
      if (config.validation?.enableValidation) {
        this.validationService.initialize(
          config.validation.customRules ? { requiredFields: [] } : undefined,
          { detectOverlaps: true, detectDoubleBooking: true, detectResourceConflicts: true, bufferTimeMinutes: 0 }
        );
      }

      // Initialize search
      if (config.search?.enableSearch) {
        await this.searchService.initialize({
          indexedFields: config.search.indexFields || ['title', 'description', 'location'],
          enableFullTextSearch: true,
          enableFuzzySearch: config.search.fuzzySearch || false,
          fuzzyThreshold: 0.6,
          enableStemming: true,
          stopWords: ['the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by'],
          fieldWeights: {
            title: 1.0,
            description: 0.7,
            location: 0.8,
            category: 0.6
          }
        });
      }

      // Initialize recurrence
      if (config.recurrence?.enableRecurrence) {
        this.recurrenceService.initialize();
      }

      // Initialize formatting
      this.formattingService.initialize({
        locale: 'en-US',
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
      });

      this.initialized = true;
    } catch (error) {
      this.events.errorOccurred.emit(error as Error);
      throw error;
    }
  }

  /**
   * Get all events
   */
  async getAllEvents(): Promise<CalendarEvent[]> {
    const result = await this.storageService.getAllEvents();
    if (!result.success) {
      throw new Error(result.error || 'Failed to get events');
    }
    return result.data || [];
  }

  /**
   * Get event by ID
   */
  async getEventById(id: string): Promise<CalendarEvent | null> {
    const result = await this.storageService.getEventById(id);
    if (!result.success) {
      throw new Error(result.error || 'Failed to get event');
    }
    return result.data || null;
  }

  /**
   * Query events with filters and pagination
   */
  async queryEvents(
    filter?: EventFilter,
    sort?: EventSort,
    page: number = 1,
    pageSize: number = 50
  ): Promise<EventResults> {
    const result = await this.storageService.queryEvents(filter, sort, page, pageSize);
    if (!result.success) {
      throw new Error(result.error || 'Failed to query events');
    }
    
    // Emit filter and sort events
    if (filter) this.events.filterChanged.emit(filter);
    if (sort) this.events.sortChanged.emit(sort);
    
    return result.data || { events: [], total: 0, page, pageSize, hasMore: false };
  }

  /**
   * Create a new event
   */
  async createEvent(input: CreateEventInput): Promise<CalendarEvent> {
    // Note: Validation can be added when EventValidationService.validateEvent is implemented
    
    const result = await this.storageService.createEvent(input);
    if (!result.success) {
      throw new Error(result.error || 'Failed to create event');
    }

    const event = result.data!;
    this.events.eventCreated.emit(event);
    return event;
  }

  /**
   * Update an event
   */
  async updateEvent(input: UpdateEventInput): Promise<CalendarEvent> {
    // Get the old event for the update event
    const oldEvent = await this.getEventById(input.id);
    if (!oldEvent) {
      throw new Error('Event not found');
    }

    // Note: Validation can be added when EventValidationService.validateEvent is implemented

    const result = await this.storageService.updateEvent(input);
    if (!result.success) {
      throw new Error(result.error || 'Failed to update event');
    }

    const event = result.data!;
    this.events.eventUpdated.emit({ event, oldEvent });
    return event;
  }

  /**
   * Delete an event
   */
  async deleteEvent(id: string): Promise<void> {
    const event = await this.getEventById(id);
    if (!event) {
      throw new Error('Event not found');
    }

    const result = await this.storageService.deleteEvent(id);
    if (!result.success) {
      throw new Error(result.error || 'Failed to delete event');
    }

    this.events.eventDeleted.emit({ eventId: id, event });
  }

  /**
   * Search events
   */
  async searchEvents(query: string, filters?: EventFilter): Promise<CalendarEvent[]> {
    try {
      // Get all events for search index
      const allEventsResult = await this.storageService.getAllEvents();
      if (!allEventsResult.success) {
        return [];
      }

      // Build search index with current events
      await this.searchService.buildIndex(allEventsResult.data || []);

      // Perform search
      const searchQuery = {
        text: query,
        fields: filters as Record<string, any>
      };
      
      const searchResults = await this.searchService.search(searchQuery);
      const events = searchResults.items.map(item => item.event);
      
      this.events.searchPerformed.emit({ query, results: events });
      return events;
    } catch (error) {
      console.error('Search failed:', error);
      this.events.errorOccurred.emit(error as Error);
      return [];
    }
  }

  /**
   * Filter events
   */
  async filterEvents(filter: EventFilter): Promise<CalendarEvent[]> {
    const result = await this.storageService.queryEvents(filter);
    if (!result.success) {
      throw new Error(result.error || 'Failed to filter events');
    }

    this.events.filterChanged.emit(filter);
    return result.data?.events || [];
  }

  /**
   * Sort events
   */
  async sortEvents(sort: EventSort): Promise<CalendarEvent[]> {
    const result = await this.storageService.queryEvents(undefined, sort);
    if (!result.success) {
      throw new Error(result.error || 'Failed to sort events');
    }

    this.events.sortChanged.emit(sort);
    return result.data?.events || [];
  }

  /**
   * Get upcoming events
   */
  async getUpcomingEvents(limit: number = 10): Promise<CalendarEvent[]> {
    const now = new Date();
    const nextMonth = new Date(now);
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    
    const filter: EventFilter = {
      dateRange: { start: now, end: nextMonth }
    };
    
    const sort: EventSort = {
      field: 'start',
      direction: 'asc'
    };

    const result = await this.storageService.queryEvents(filter, sort, 1, limit);
    if (!result.success) {
      throw new Error(result.error || 'Failed to get upcoming events');
    }

    return result.data?.events || [];
  }

  /**
   * Validate event
   */
  async validateEvent(input: CreateEventInput | UpdateEventInput): Promise<EventValidationResult> {
    // Use the validation service to validate the event
    try {
      // Check if it's an update or create input
      if ('id' in input) {
        // For update events, we need to get existing events for context
        const allEvents = await this.getAllEvents();
        return await this.validationService.validateForUpdate(input as UpdateEventInput, {
          existingEvents: allEvents,
          mode: 'update'
        });
      } else {
        // For create events
        const allEvents = await this.getAllEvents();
        return await this.validationService.validateForCreate(input as CreateEventInput, {
          existingEvents: allEvents,
          mode: 'create'
        });
      }
    } catch (error) {
      // Return a basic validation result if service is not available
      return {
        isValid: false,
        errors: [`Validation failed: ${error instanceof Error ? error.message : 'Unknown error'}`],
        warnings: [],
        conflicts: []
      };
    }
  }

  /**
   * Get the events object for external access
   */
  getEvents() {
    return this.events;
  }

  /**
   * Check if the service is initialized
   */
  isInitialized(): boolean {
    return this.initialized;
  }

  /**
   * Get current configuration
   */
  getConfig(): EventManagerConfig {
    return { ...this.config };
  }

  /**
   * Clear all events
   */
  async clearAllEvents(): Promise<void> {
    // Note: Implementation can be added when EventStorageService.clearAllEvents is implemented
    // For now, just emit the bulk operation event
    this.events.bulkOperationCompleted.emit({ 
      operation: 'clear', 
      count: 0 
    });
  }

  // Bulk operations
  async bulkCreateEvents(inputs: CreateEventInput[]): Promise<CalendarEvent[]> {
    const results: CalendarEvent[] = [];
    for (const input of inputs) {
      try {
        const event = await this.createEvent(input);
        results.push(event);
      } catch (error) {
        console.error('Failed to create event in bulk operation:', error);
      }
    }
    this.events.bulkOperationCompleted.emit({ operation: 'create', count: results.length });
    return results;
  }

  async bulkUpdateEvents(inputs: UpdateEventInput[]): Promise<CalendarEvent[]> {
    const results: CalendarEvent[] = [];
    for (const input of inputs) {
      try {
        const event = await this.updateEvent(input);
        results.push(event);
      } catch (error) {
        console.error('Failed to update event in bulk operation:', error);
      }
    }
    this.events.bulkOperationCompleted.emit({ operation: 'update', count: results.length });
    return results;
  }

  async bulkDeleteEvents(ids: string[]): Promise<void> {
    let deletedCount = 0;
    for (const id of ids) {
      try {
        await this.deleteEvent(id);
        deletedCount++;
      } catch (error) {
        console.error('Failed to delete event in bulk operation:', error);
      }
    }
    this.events.bulkOperationCompleted.emit({ operation: 'delete', count: deletedCount });
  }

  // Date range operations
  async getEventsForDateRange(start: Date, end: Date): Promise<CalendarEvent[]> {
    const filter: EventFilter = {
      dateRange: { start, end }
    };
    return this.filterEvents(filter);
  }

  async getEventsForDate(date: Date): Promise<CalendarEvent[]> {
    const startOfDay = new Date(date);
    startOfDay.setUTCHours(0, 0, 0, 0);
    const endOfDay = new Date(date);
    endOfDay.setUTCHours(23, 59, 59, 999);
    
    return this.getEventsForDateRange(startOfDay, endOfDay);
  }

  async getOverdueEvents(): Promise<CalendarEvent[]> {
    const now = new Date();
    const filter: EventFilter = {
      dateRange: { start: new Date(0), end: now },
      statuses: ['confirmed', 'tentative']
    };
    return this.filterEvents(filter);
  }

  // Statistics
  async getStatistics(dateRange?: { start: Date; end: Date }): Promise<any> {
    const allEvents = await this.getAllEvents();
    let events = allEvents;
    
    if (dateRange) {
      events = events.filter(event => 
        event.dateTime.start >= dateRange.start && 
        event.dateTime.end <= dateRange.end
      );
    }

    return {
      totalEvents: events.length,
      eventsByStatus: events.reduce((acc, event) => {
        acc[event.status] = (acc[event.status] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      eventsByPriority: events.reduce((acc, event) => {
        acc[event.priority] = (acc[event.priority] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      upcomingEvents: events.filter(event => event.dateTime.start > new Date()).length,
      overdueEvents: events.filter(event => event.dateTime.end < new Date()).length
    };
  }

  // Import/Export
  async importEvents(events: CalendarEvent[], options?: { 
    merge?: boolean; 
    skipDuplicates?: boolean; 
  }): Promise<{ 
    imported: number; 
    skipped: number; 
    errors: string[]; 
  }> {
    let imported = 0;
    let skipped = 0;
    const errors: string[] = [];

    for (const event of events) {
      try {
        if (options?.skipDuplicates) {
          // Check for duplicates by ID, title and date
          const existingById = await this.getEventById(event.id);
          if (existingById) {
            skipped++;
            continue;
          }
          
          // Also check for duplicates by title and date
          const allEvents = await this.getAllEvents();
          const isDuplicate = allEvents.some(e => 
            e.title === event.title && 
            e.dateTime.start.getTime() === event.dateTime.start.getTime()
          );
          
          if (isDuplicate) {
            skipped++;
            continue;
          }
        }

        // Convert to create input
        const createInput: CreateEventInput = {
          title: event.title,
          description: event.description,
          dateTime: event.dateTime,
          location: event.location,
          attendees: event.attendees?.map(a => ({
            name: a.name,
            email: a.email,
            required: a.required,
            role: a.role
          })),
          priority: event.priority,
          status: event.status,
          visibility: event.visibility,
          category: event.category,
          recurrence: event.recurrence,
          reminders: event.reminders?.map(r => ({
            minutesBefore: r.minutesBefore,
            method: r.method,
            enabled: r.enabled,
            message: r.message
          })),
          attachments: event.attachments?.map(a => ({
            name: a.name,
            url: a.url,
            mimeType: a.mimeType,
            size: a.size,
            description: a.description
          })),
          metadata: event.metadata
        };

        await this.createEvent(createInput);
        imported++;
      } catch (error) {
        errors.push(`Failed to import event ${event.id}: ${error instanceof Error ? error.message : 'Unknown error'}`);
      }
    }

    return { imported, skipped, errors };
  }

  async exportEvents(
    filter?: EventFilter,
    format: 'json' | 'ics' | 'csv' = 'json'
  ): Promise<{ data: string; filename: string; mimeType: string }> {
    const events = filter ? await this.filterEvents(filter) : await this.getAllEvents();
    
    try {
      const result = await this.formattingService.exportEvents(events, { format });
      
      // Handle Blob conversion to string if needed
      let data: string;
      if (typeof result.data === 'string') {
        data = result.data;
      } else {
        // Convert Blob to string (assuming it's text-based)
        data = await result.data.text();
      }
      
      return {
        data,
        filename: result.filename,
        mimeType: result.mimeType
      };
    } catch (error) {
      // Fallback to simple JSON export
      const data = JSON.stringify(events, null, 2);
      const timestamp = new Date().toISOString().split('T')[0];
      return {
        data,
        filename: `events-${timestamp}.json`,
        mimeType: 'application/json'
      };
    }
  }

  // Conflict management
  async getEventConflicts(_eventId: string): Promise<any[]> {
    // TODO: Implement conflict detection logic
    return [];
  }

  async resolveEventConflict(_conflictId: string, resolution: any): Promise<void> {
    // TODO: Implement conflict resolution logic
    this.events.conflictResolved.emit(resolution);
  }

  // Event listeners
  onEventCreated(callback: (event: CalendarEvent) => void): () => void {
    return this.events.eventCreated.subscribe(callback);
  }

  onEventUpdated(callback: (event: CalendarEvent, oldEvent: CalendarEvent) => void): () => void {
    const handler = (data: { event: CalendarEvent; oldEvent: CalendarEvent }) => {
      callback(data.event, data.oldEvent);
    };
    return this.events.eventUpdated.subscribe(handler);
  }

  onEventDeleted(callback: (eventId: string) => void): () => void {
    const handler = (data: { eventId: string; event: CalendarEvent }) => {
      callback(data.eventId);
    };
    return this.events.eventDeleted.subscribe(handler);
  }

  onValidationFailed(callback: (result: EventValidationResult) => void): () => void {
    return this.events.validationFailed.subscribe(callback);
  }

  onError(callback: (error: Error) => void): () => void {
    return this.events.errorOccurred.subscribe(callback);
  }

  // Status and management
  getStatus(): {
    initialized: boolean;
    totalEvents: number;
    lastSyncTime?: Date;
    errors: string[];
    health: 'good' | 'warning' | 'error';
  } {
    return {
      initialized: this.initialized,
      totalEvents: 0, // TODO: Get actual count
      errors: [],
      health: 'good'
    };
  }

  async backup(): Promise<string> {
    const allEvents = await this.getAllEvents();
    const backupData = {
      timestamp: new Date().toISOString(),
      version: '1.0',
      events: allEvents,
      config: this.config
    };
    return JSON.stringify(backupData, null, 2);
  }

  async restore(backupData: string): Promise<void> {
    try {
      const data = JSON.parse(backupData);
      if (data.events && Array.isArray(data.events)) {
        await this.clearAllEvents();
        await this.importEvents(data.events);
      }
      if (data.config) {
        await this.initialize(data.config);
      }
    } catch (error) {
      throw new Error(`Failed to restore backup: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  initializeEvents() {
    return {
      eventCreated: this.events.eventCreated,
      eventUpdated: this.events.eventUpdated,
      eventDeleted: this.events.eventDeleted,
      validationFailed: this.events.validationFailed,
      errorOccurred: this.events.errorOccurred,
      bulkOperationCompleted: this.events.bulkOperationCompleted
    };
  }
}
