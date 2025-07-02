/**
 * Event Storage Service - Memory Implementation
 * 
 * Simple in-memory storage for events
 */

import {
  CalendarEvent,
  CreateEventInput,
  UpdateEventInput,
  EventFilter,
  EventSort,
  EventResults
} from '../interfaces/event.interfaces';
import {
  IEventStorageService,
  StorageResult,
  StorageConfig,
  StorageStats,
  SyncStatus
} from '../interfaces/event-storage.interfaces';

/**
 * In-memory storage implementation
 */
export class EventStorageService implements IEventStorageService {
  private events: Map<string, CalendarEvent> = new Map();
  private config: StorageConfig | null = null;
  private changeCallbacks: Array<(event: CalendarEvent, action: 'created' | 'updated' | 'deleted') => void> = [];
  private errorCallbacks: Array<(error: string) => void> = [];

  /**
   * Initialize storage
   */
  async initialize(config: StorageConfig): Promise<StorageResult<void>> {
    try {
      this.config = config;
      
      // Load from localStorage if configured
      if (config.type === 'localStorage') {
        await this.loadFromLocalStorage();
      }
      
      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        error: (error as Error).message 
      };
    }
  }

  /**
   * Get all events
   */
  async getAllEvents(): Promise<StorageResult<CalendarEvent[]>> {
    try {
      const events = Array.from(this.events.values());
      return { success: true, data: events };
    } catch (error) {
      return { 
        success: false, 
        error: (error as Error).message 
      };
    }
  }

  /**
   * Get event by ID
   */
  async getEventById(id: string): Promise<StorageResult<CalendarEvent | null>> {
    try {
      const event = this.events.get(id) || null;
      return { success: true, data: event };
    } catch (error) {
      return { 
        success: false, 
        error: (error as Error).message 
      };
    }
  }

  /**
   * Query events with filters
   */
  async queryEvents(
    filter?: EventFilter,
    sort?: EventSort,
    page: number = 1,
    pageSize: number = 50
  ): Promise<StorageResult<EventResults>> {
    try {
      let events = Array.from(this.events.values());

      // Apply filters
      if (filter) {
        events = this.applyFilters(events, filter);
      }

      // Apply sorting
      if (sort) {
        events = this.applySorting(events, sort);
      }

      // Apply pagination
      const total = events.length;
      const startIndex = (page - 1) * pageSize;
      const paginatedEvents = events.slice(startIndex, startIndex + pageSize);

      const result: EventResults = {
        events: paginatedEvents,
        total,
        page,
        pageSize,
        hasMore: startIndex + pageSize < total
      };

      return { success: true, data: result };
    } catch (error) {
      return { 
        success: false, 
        error: (error as Error).message 
      };
    }
  }

  /**
   * Create new event
   */
  async createEvent(input: CreateEventInput): Promise<StorageResult<CalendarEvent>> {
    try {
      const now = new Date();
      const event: CalendarEvent = {
        id: this.generateId(),
        title: input.title,
        description: input.description,
        dateTime: {
          ...input.dateTime,
          timeZone: input.dateTime.timeZone || { 
            id: 'UTC', 
            displayName: 'UTC', 
            offset: 0 
          }
        },
        location: input.location,
        organizer: undefined,
        attendees: input.attendees ? input.attendees.map(att => ({
          ...att,
          id: this.generateId(),
          status: 'pending' as const
        })) : undefined,
        priority: input.priority || 'normal',
        status: input.status || 'confirmed',
        visibility: input.visibility || 'default',
        category: input.category,
        recurrence: input.recurrence,
        reminders: input.reminders ? input.reminders.map(rem => ({
          ...rem,
          id: this.generateId()
        })) : undefined,
        attachments: input.attachments ? input.attachments.map(att => ({
          ...att,
          id: this.generateId()
        })) : undefined,
        metadata: input.metadata,
        createdAt: now,
        updatedAt: now,
        createdBy: 'system',
        updatedBy: 'system',
        version: 1
      };

      this.events.set(event.id, event);
      await this.saveToStorage();
      
      // Notify callbacks
      this.changeCallbacks.forEach(callback => callback(event, 'created'));

      return { success: true, data: event };
    } catch (error) {
      return { 
        success: false, 
        error: (error as Error).message 
      };
    }
  }

  /**
   * Update existing event
   */
  async updateEvent(input: UpdateEventInput): Promise<StorageResult<CalendarEvent>> {
    try {
      const existingEvent = this.events.get(input.id);
      if (!existingEvent) {
        return { 
          success: false, 
          error: 'Event not found' 
        };
      }

      // Check version for optimistic locking
      if (input.version !== existingEvent.version) {
        return { 
          success: false, 
          error: 'Event was modified by another process' 
        };
      }

      const updatedEvent: CalendarEvent = {
        ...existingEvent,
        title: input.title ?? existingEvent.title,
        description: input.description ?? existingEvent.description,
        dateTime: input.dateTime ? { ...existingEvent.dateTime, ...input.dateTime } : existingEvent.dateTime,
        location: input.location ?? existingEvent.location,
        attendees: input.attendees ?? existingEvent.attendees,
        priority: input.priority ?? existingEvent.priority,
        status: input.status ?? existingEvent.status,
        visibility: input.visibility ?? existingEvent.visibility,
        category: input.category ?? existingEvent.category,
        recurrence: input.recurrence ?? existingEvent.recurrence,
        reminders: input.reminders ?? existingEvent.reminders,
        attachments: input.attachments ?? existingEvent.attachments,
        metadata: input.metadata ?? existingEvent.metadata,
        id: existingEvent.id, // Ensure ID doesn't change
        updatedAt: new Date(),
        updatedBy: 'system',
        version: existingEvent.version + 1
      };

      this.events.set(updatedEvent.id, updatedEvent);
      await this.saveToStorage();
      
      // Notify callbacks
      this.changeCallbacks.forEach(callback => callback(updatedEvent, 'updated'));

      return { success: true, data: updatedEvent };
    } catch (error) {
      return { 
        success: false, 
        error: (error as Error).message 
      };
    }
  }

  /**
   * Delete event
   */
  async deleteEvent(id: string): Promise<StorageResult<void>> {
    try {
      const event = this.events.get(id);
      if (!event) {
        return { 
          success: false, 
          error: 'Event not found' 
        };
      }

      this.events.delete(id);
      await this.saveToStorage();
      
      // Notify callbacks
      this.changeCallbacks.forEach(callback => callback(event, 'deleted'));

      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        error: (error as Error).message 
      };
    }
  }

  /**
   * Bulk operations
   */
  async bulkCreate(inputs: CreateEventInput[]): Promise<StorageResult<CalendarEvent[]>> {
    try {
      const events: CalendarEvent[] = [];
      for (const input of inputs) {
        const result = await this.createEvent(input);
        if (result.success && result.data) {
          events.push(result.data);
        }
      }
      return { success: true, data: events };
    } catch (error) {
      return { 
        success: false, 
        error: (error as Error).message 
      };
    }
  }

  async bulkUpdate(inputs: UpdateEventInput[]): Promise<StorageResult<CalendarEvent[]>> {
    try {
      const events: CalendarEvent[] = [];
      for (const input of inputs) {
        const result = await this.updateEvent(input);
        if (result.success && result.data) {
          events.push(result.data);
        }
      }
      return { success: true, data: events };
    } catch (error) {
      return { 
        success: false, 
        error: (error as Error).message 
      };
    }
  }

  async bulkDelete(ids: string[]): Promise<StorageResult<void>> {
    try {
      for (const id of ids) {
        await this.deleteEvent(id);
      }
      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        error: (error as Error).message 
      };
    }
  }

  /**
   * Import events
   */
  async importEvents(events: CalendarEvent[]): Promise<StorageResult<CalendarEvent[]>> {
    try {
      for (const event of events) {
        this.events.set(event.id, event);
      }
      await this.saveToStorage();
      return { success: true, data: events };
    } catch (error) {
      return { 
        success: false, 
        error: (error as Error).message 
      };
    }
  }

  /**
   * Export events
   */
  async exportEvents(filter?: EventFilter): Promise<StorageResult<CalendarEvent[]>> {
    try {
      let events = Array.from(this.events.values());
      if (filter) {
        events = this.applyFilters(events, filter);
      }
      return { success: true, data: events };
    } catch (error) {
      return { 
        success: false, 
        error: (error as Error).message 
      };
    }
  }

  /**
   * Clear all events
   */
  async clearAll(): Promise<StorageResult<void>> {
    try {
      this.events.clear();
      await this.saveToStorage();
      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        error: (error as Error).message 
      };
    }
  }

  /**
   * Get storage statistics
   */
  async getStats(): Promise<StorageResult<StorageStats>> {
    try {
      const stats: StorageStats = {
        totalEvents: this.events.size,
        sizeUsed: JSON.stringify(Array.from(this.events.values())).length,
        health: 'good'
      };
      return { success: true, data: stats };
    } catch (error) {
      return { 
        success: false, 
        error: (error as Error).message 
      };
    }
  }

  /**
   * Get sync status
   */
  async getSyncStatus(): Promise<StorageResult<SyncStatus>> {
    try {
      const status: SyncStatus = {
        syncing: false,
        errors: [],
        pendingChanges: 0
      };
      return { success: true, data: status };
    } catch (error) {
      return { 
        success: false, 
        error: (error as Error).message 
      };
    }
  }

  /**
   * Trigger manual sync
   */
  async sync(): Promise<StorageResult<void>> {
    // No-op for memory storage
    return { success: true };
  }

  /**
   * Backup events
   */
  async backup(): Promise<StorageResult<string>> {
    try {
      const data = JSON.stringify(Array.from(this.events.values()));
      return { success: true, data };
    } catch (error) {
      return { 
        success: false, 
        error: (error as Error).message 
      };
    }
  }

  /**
   * Restore from backup
   */
  async restore(backupData: string): Promise<StorageResult<void>> {
    try {
      const events = JSON.parse(backupData) as CalendarEvent[];
      this.events.clear();
      for (const event of events) {
        this.events.set(event.id, event);
      }
      await this.saveToStorage();
      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        error: (error as Error).message 
      };
    }
  }

  /**
   * Event change subscription
   */
  onEventChanged(callback: (event: CalendarEvent, action: 'created' | 'updated' | 'deleted') => void): () => void {
    this.changeCallbacks.push(callback);
    return () => {
      const index = this.changeCallbacks.indexOf(callback);
      if (index > -1) {
        this.changeCallbacks.splice(index, 1);
      }
    };
  }

  /**
   * Storage error subscription
   */
  onError(callback: (error: string) => void): () => void {
    this.errorCallbacks.push(callback);
    return () => {
      const index = this.errorCallbacks.indexOf(callback);
      if (index > -1) {
        this.errorCallbacks.splice(index, 1);
      }
    };
  }

  // Private helper methods
  private generateId(): string {
    return `event_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private applyFilters(events: CalendarEvent[], filter: EventFilter): CalendarEvent[] {
    return events.filter(event => {
      // Date range filter
      if (filter.dateRange) {
        const eventStart = event.dateTime.start;
        const eventEnd = event.dateTime.end;
        if (filter.dateRange.start && eventEnd < filter.dateRange.start) return false;
        if (filter.dateRange.end && eventStart > filter.dateRange.end) return false;
      }

      // Category filter
      if (filter.categories && filter.categories.length > 0) {
        if (!event.category || !filter.categories.includes(event.category)) return false;
      }

      // Status filter
      if (filter.statuses && filter.statuses.length > 0) {
        if (!filter.statuses.includes(event.status)) return false;
      }

      // Priority filter
      if (filter.priorities && filter.priorities.length > 0) {
        if (!filter.priorities.includes(event.priority)) return false;
      }

      // Search text filter
      if (filter.searchText) {
        const searchLower = filter.searchText.toLowerCase();
        const titleMatch = event.title.toLowerCase().includes(searchLower);
        const descMatch = event.description?.toLowerCase().includes(searchLower);
        if (!titleMatch && !descMatch) return false;
      }

      return true;
    });
  }

  private applySorting(events: CalendarEvent[], sort: EventSort): CalendarEvent[] {
    return events.sort((a, b) => {
      let valueA: any;
      let valueB: any;

      switch (sort.field) {
        case 'title':
          valueA = a.title;
          valueB = b.title;
          break;
        case 'start':
          valueA = a.dateTime.start;
          valueB = b.dateTime.start;
          break;
        case 'end':
          valueA = a.dateTime.end;
          valueB = b.dateTime.end;
          break;
        case 'priority':
          const priorityOrder = { low: 1, normal: 2, high: 3, urgent: 4 };
          valueA = priorityOrder[a.priority];
          valueB = priorityOrder[b.priority];
          break;
        case 'status':
          valueA = a.status;
          valueB = b.status;
          break;
        case 'createdAt':
          valueA = a.createdAt;
          valueB = b.createdAt;
          break;
        case 'updatedAt':
          valueA = a.updatedAt;
          valueB = b.updatedAt;
          break;
        default:
          return 0;
      }

      if (valueA < valueB) return sort.direction === 'asc' ? -1 : 1;
      if (valueA > valueB) return sort.direction === 'asc' ? 1 : -1;
      return 0;
    });
  }

  private async loadFromLocalStorage(): Promise<void> {
    if (typeof window !== 'undefined' && window.localStorage) {
      const key = `${this.config?.keyPrefix || 'events'}_data`;
      const data = localStorage.getItem(key);
      if (data) {
        try {
          const events = JSON.parse(data) as CalendarEvent[];
          for (const event of events) {
            this.events.set(event.id, event);
          }
        } catch (error) {
          console.warn('Failed to load events from localStorage:', error);
        }
      }
    }
  }

  private async saveToStorage(): Promise<void> {
    if (this.config?.type === 'localStorage' && typeof window !== 'undefined' && window.localStorage) {
      const key = `${this.config?.keyPrefix || 'events'}_data`;
      const data = JSON.stringify(Array.from(this.events.values()));
      try {
        localStorage.setItem(key, data);
      } catch (error) {
        console.warn('Failed to save events to localStorage:', error);
      }
    }
  }
}
