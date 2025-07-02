/**
 * Event Manager Service Interface
 * 
 * Main service interface for comprehensive event management
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
} from './event.interfaces';

/**
 * Event manager configuration
 */
export interface EventManagerConfig {
  /** Storage configuration */
  storage?: {
    type: 'memory' | 'localStorage' | 'indexedDB' | 'external';
    options?: Record<string, any>;
  };
  /** Validation settings */
  validation?: {
    enableValidation: boolean;
    strictMode: boolean;
    customRules?: any[];
  };
  /** Search configuration */
  search?: {
    enableSearch: boolean;
    indexFields?: string[];
    fuzzySearch?: boolean;
  };
  /** Notification settings */
  notifications?: {
    enableNotifications: boolean;
    defaultChannels?: string[];
  };
  /** Sync configuration */
  sync?: {
    enableSync: boolean;
    providers?: any[];
  };
  /** Conflict detection */
  conflicts?: {
    enableDetection: boolean;
    autoResolve?: boolean;
  };
  /** Recurrence settings */
  recurrence?: {
    enableRecurrence: boolean;
    maxOccurrences?: number;
  };
}

/**
 * Event statistics
 */
export interface EventStatistics {
  /** Total events */
  totalEvents: number;
  /** Events by status */
  eventsByStatus: Record<string, number>;
  /** Events by priority */
  eventsByPriority: Record<string, number>;
  /** Events by category */
  eventsByCategory: Record<string, number>;
  /** Upcoming events */
  upcomingEvents: number;
  /** Overdue events */
  overdueEvents: number;
  /** Events this week */
  eventsThisWeek: number;
  /** Events this month */
  eventsThisMonth: number;
  /** Average event duration */
  averageDuration: number;
  /** Most busy day */
  busiestDay?: Date;
  /** Most active attendee */
  mostActiveAttendee?: string;
}

/**
 * Event manager service interface
 */
export interface IEventManagerService {
  /**
   * Initialize the event manager
   */
  initialize(config?: EventManagerConfig): Promise<void>;

  /**
   * Get all events
   */
  getAllEvents(): Promise<CalendarEvent[]>;

  /**
   * Get event by ID
   */
  getEventById(id: string): Promise<CalendarEvent | null>;

  /**
   * Query events with filters and pagination
   */
  queryEvents(
    filter?: EventFilter,
    sort?: EventSort,
    page?: number,
    pageSize?: number
  ): Promise<EventResults>;

  /**
   * Create new event
   */
  createEvent(input: CreateEventInput): Promise<CalendarEvent>;

  /**
   * Update existing event
   */
  updateEvent(input: UpdateEventInput): Promise<CalendarEvent>;

  /**
   * Delete event
   */
  deleteEvent(id: string): Promise<void>;

  /**
   * Bulk operations
   */
  bulkCreateEvents(inputs: CreateEventInput[]): Promise<CalendarEvent[]>;
  bulkUpdateEvents(inputs: UpdateEventInput[]): Promise<CalendarEvent[]>;
  bulkDeleteEvents(ids: string[]): Promise<void>;

  /**
   * Validate event
   */
  validateEvent(input: CreateEventInput | UpdateEventInput): Promise<EventValidationResult>;

  /**
   * Search events
   */
  searchEvents(query: string, filters?: EventFilter): Promise<CalendarEvent[]>;

  /**
   * Get events for date range
   */
  getEventsForDateRange(start: Date, end: Date): Promise<CalendarEvent[]>;

  /**
   * Get events for specific date
   */
  getEventsForDate(date: Date): Promise<CalendarEvent[]>;

  /**
   * Get upcoming events
   */
  getUpcomingEvents(limit?: number): Promise<CalendarEvent[]>;

  /**
   * Get overdue events
   */
  getOverdueEvents(): Promise<CalendarEvent[]>;

  /**
   * Get event statistics
   */
  getStatistics(dateRange?: { start: Date; end: Date }): Promise<EventStatistics>;

  /**
   * Import events
   */
  importEvents(events: CalendarEvent[], options?: { 
    merge?: boolean; 
    skipDuplicates?: boolean; 
  }): Promise<{ 
    imported: number; 
    skipped: number; 
    errors: string[]; 
  }>;

  /**
   * Export events
   */
  exportEvents(
    filter?: EventFilter,
    format?: 'json' | 'ics' | 'csv'
  ): Promise<{ data: string; filename: string; mimeType: string }>;

  /**
   * Clear all events
   */
  clearAllEvents(): Promise<void>;

  /**
   * Get event conflicts
   */
  getEventConflicts(eventId: string): Promise<any[]>;

  /**
   * Resolve event conflict
   */
  resolveEventConflict(conflictId: string, resolution: any): Promise<void>;

  /**
   * Subscribe to event changes
   */
  onEventCreated(callback: (event: CalendarEvent) => void): () => void;
  onEventUpdated(callback: (event: CalendarEvent, oldEvent: CalendarEvent) => void): () => void;
  onEventDeleted(callback: (eventId: string) => void): () => void;

  /**
   * Subscribe to validation events
   */
  onValidationFailed(callback: (result: EventValidationResult) => void): () => void;

  /**
   * Subscribe to error events
   */
  onError(callback: (error: Error) => void): () => void;

  /**
   * Get manager status
   */
  getStatus(): {
    initialized: boolean;
    totalEvents: number;
    lastSyncTime?: Date;
    errors: string[];
    health: 'good' | 'warning' | 'error';
  };

  /**
   * Backup all data
   */
  backup(): Promise<string>;

  /**
   * Restore from backup
   */
  restore(backupData: string): Promise<void>;

  /**
   * Initialize event emitters
   */
  initializeEvents(): {
    eventCreated: EventEmitter<CalendarEvent>;
    eventUpdated: EventEmitter<{ event: CalendarEvent; oldEvent: CalendarEvent }>;
    eventDeleted: EventEmitter<{ eventId: string; event: CalendarEvent }>;
    validationFailed: EventEmitter<EventValidationResult>;
    errorOccurred: EventEmitter<Error>;
    bulkOperationCompleted: EventEmitter<{ operation: string; count: number }>;
  };
}
