/**
 * Event Controller Types
 * 
 * Defines TypeScript types for the Event Management Controller
 */

import { EventEmitter } from "@uplink-protocol/core";
import { ControllerMetadata } from "@uplink-protocol/core/dist/uplink/interfaces/metadata/controller-metadata.interface";
import { 
  CalendarEvent, 
  CreateEventInput, 
  UpdateEventInput, 
  EventFilter, 
  EventSort,
  EventResults,
  EventValidationResult
} from '../interfaces/event.interfaces';

/**
 * Event Controller Bindings - Reactive state management
 */
export interface EventControllerBindings {
  /** Currently selected event */
  selectedEvent: { get: () => CalendarEvent | null; set: (event: CalendarEvent | null) => void };
  
  /** All events list */
  allEvents: { get: () => CalendarEvent[]; set: (events: CalendarEvent[]) => void };
  
  /** Filtered events */
  filteredEvents: { get: () => CalendarEvent[]; set: (events: CalendarEvent[]) => void };
  
  /** Current filter */
  currentFilter: { get: () => EventFilter | null; set: (filter: EventFilter | null) => void };
  
  /** Current sort */
  currentSort: { get: () => EventSort | null; set: (sort: EventSort | null) => void };
  
  /** Search query */
  searchQuery: { get: () => string; set: (query: string) => void };
  
  /** Search results */
  searchResults: { get: () => CalendarEvent[]; set: (results: CalendarEvent[]) => void };
  
  /** Loading state */
  isLoading: { get: () => boolean; set: (loading: boolean) => void };
  
  /** Error state */
  error: { get: () => string | null; set: (error: string | null) => void };
  
  /** Total event count */
  totalCount: { get: () => number; set: (count: number) => void };
  
  /** Current page */
  currentPage: { get: () => number; set: (page: number) => void };
  
  /** Page size */
  pageSize: { get: () => number; set: (size: number) => void };
  
  /** Events for current date range */
  dateRangeEvents: { get: () => CalendarEvent[]; set: (events: CalendarEvent[]) => void };
  
  /** Current date range */
  currentDateRange: { get: () => { start: Date; end: Date } | null; set: (range: { start: Date; end: Date } | null) => void };
  
  /** Upcoming events */
  upcomingEvents: { get: () => CalendarEvent[]; set: (events: CalendarEvent[]) => void };
  
  /** Overdue events */
  overdueEvents: { get: () => CalendarEvent[]; set: (events: CalendarEvent[]) => void };
  
  /** Event conflicts */
  conflicts: { get: () => any[]; set: (conflicts: any[]) => void };
  
  /** Validation errors */
  validationErrors: { get: () => string[]; set: (errors: string[]) => void };
  
  /** Sync status */
  syncStatus: { get: () => 'idle' | 'syncing' | 'success' | 'error'; set: (status: 'idle' | 'syncing' | 'success' | 'error') => void };
  
  /** Last sync time */
  lastSyncTime: { get: () => Date | null; set: (time: Date | null) => void };
  
  /** Available categories */
  categories: { get: () => string[]; set: (categories: string[]) => void };
  
  /** Available tags */
  tags: { get: () => string[]; set: (tags: string[]) => void };
  
  /** Statistics */
  statistics: { get: () => any; set: (stats: any) => void };
}

/**
 * Event Controller Methods - Available operations
 */
export interface EventControllerMethods {
  // Core CRUD operations
  createEvent: (input: CreateEventInput) => Promise<CalendarEvent>;
  updateEvent: (input: UpdateEventInput) => Promise<CalendarEvent>;
  deleteEvent: (id: string) => Promise<void>;
  getEventById: (id: string) => Promise<CalendarEvent | null>;
  getAllEvents: () => Promise<CalendarEvent[]>;
  
  // Query and filtering
  queryEvents: (filter?: EventFilter, sort?: EventSort, page?: number, pageSize?: number) => Promise<EventResults>;
  filterEvents: (filter: EventFilter) => Promise<CalendarEvent[]>;
  sortEvents: (sort: EventSort) => Promise<CalendarEvent[]>;
  searchEvents: (query: string, filters?: EventFilter) => Promise<CalendarEvent[]>;
  
  // Date-based queries
  getEventsForDate: (date: Date) => Promise<CalendarEvent[]>;
  getEventsForDateRange: (start: Date, end: Date) => Promise<CalendarEvent[]>;
  getEventsForWeek: (date: Date) => Promise<CalendarEvent[]>;
  getEventsForMonth: (date: Date) => Promise<CalendarEvent[]>;
  getUpcomingEvents: (limit?: number) => Promise<CalendarEvent[]>;
  getOverdueEvents: () => Promise<CalendarEvent[]>;
  
  // Bulk operations
  bulkCreateEvents: (inputs: CreateEventInput[]) => Promise<CalendarEvent[]>;
  bulkUpdateEvents: (inputs: UpdateEventInput[]) => Promise<CalendarEvent[]>;
  bulkDeleteEvents: (ids: string[]) => Promise<void>;
  
  // Validation
  validateEvent: (input: CreateEventInput | UpdateEventInput) => Promise<EventValidationResult>;
  validateEventConstraints: (event: CalendarEvent) => Promise<boolean>;
  
  // Event management
  duplicateEvent: (id: string, newDate?: Date) => Promise<CalendarEvent>;
  moveEvent: (id: string, newStart: Date, newEnd?: Date) => Promise<CalendarEvent>;
  rescheduleEvent: (id: string, newDateTime: { start: Date; end: Date }) => Promise<CalendarEvent>;
  cancelEvent: (id: string, reason?: string) => Promise<CalendarEvent>;
  completeEvent: (id: string) => Promise<CalendarEvent>;
  
  // Recurrence
  createRecurringEvent: (input: CreateEventInput, recurrence: any) => Promise<CalendarEvent>;
  updateRecurringEvent: (id: string, updates: Partial<CalendarEvent>, scope: 'this' | 'future' | 'all') => Promise<CalendarEvent[]>;
  deleteRecurringEvent: (id: string, scope: 'this' | 'future' | 'all') => Promise<void>;
  getRecurrenceOccurrences: (id: string, dateRange: { start: Date; end: Date }) => Promise<CalendarEvent[]>;
  
  // Conflicts
  checkConflicts: (event: CalendarEvent) => Promise<any[]>;
  resolveConflict: (conflictId: string, resolution: any) => Promise<void>;
  findAlternativeTimeSlots: (event: CalendarEvent, options: any) => Promise<any[]>;
  
  // Categories and tags
  getCategories: () => Promise<string[]>;
  addCategory: (category: string) => Promise<void>;
  removeCategory: (category: string) => Promise<void>;
  getTags: () => Promise<string[]>;
  addTag: (tag: string) => Promise<void>;
  removeTag: (tag: string) => Promise<void>;
  
  // Import/Export
  importEvents: (events: CalendarEvent[], options?: any) => Promise<{ imported: number; skipped: number; errors: string[] }>;
  exportEvents: (filter?: EventFilter, format?: 'json' | 'ics' | 'csv') => Promise<{ data: string; filename: string; mimeType: string }>;
  
  // Statistics and analytics
  getStatistics: (dateRange?: { start: Date; end: Date }) => Promise<any>;
  getEventAnalytics: (dateRange: { start: Date; end: Date }) => Promise<any>;
  
  // Sync operations
  syncWithProvider: (providerId: string) => Promise<void>;
  getSyncStatus: () => Promise<any>;
  configureSyncProvider: (config: any) => Promise<void>;
  
  // Notifications
  scheduleReminder: (eventId: string, reminder: any) => Promise<void>;
  cancelReminder: (eventId: string, reminderId: string) => Promise<void>;
  
  // Search and saved searches
  saveSearch: (name: string, query: any) => Promise<void>;
  getSavedSearches: () => Promise<any[]>;
  executeSavedSearch: (searchId: string) => Promise<CalendarEvent[]>;
  
  // Utility methods
  clearAllEvents: () => Promise<void>;
  backup: () => Promise<string>;
  restore: (backupData: string) => Promise<void>;
  getHealth: () => Promise<{ status: string; details: any }>;
}

/**
 * Event Controller Events - Event system for reactivity
 */
export interface EventControllerEvents {
  /** Event created */
  eventCreated: EventEmitter<CalendarEvent>;
  
  /** Event updated */
  eventUpdated: EventEmitter<{ event: CalendarEvent; oldEvent: CalendarEvent }>;
  
  /** Event deleted */
  eventDeleted: EventEmitter<{ eventId: string; event: CalendarEvent }>;
  
  /** Events loaded */
  eventsLoaded: EventEmitter<CalendarEvent[]>;
  
  /** Filter changed */
  filterChanged: EventEmitter<EventFilter>;
  
  /** Sort changed */
  sortChanged: EventEmitter<EventSort>;
  
  /** Search performed */
  searchPerformed: EventEmitter<{ query: string; results: CalendarEvent[] }>;
  
  /** Event selected */
  eventSelected: EventEmitter<CalendarEvent>;
  
  /** Event deselected */
  eventDeselected: EventEmitter<void>;
  
  /** Validation failed */
  validationFailed: EventEmitter<EventValidationResult>;
  
  /** Conflict detected */
  conflictDetected: EventEmitter<any>;
  
  /** Conflict resolved */
  conflictResolved: EventEmitter<any>;
  
  /** Sync started */
  syncStarted: EventEmitter<{ providerId: string }>;
  
  /** Sync completed */
  syncCompleted: EventEmitter<{ providerId: string; results: any }>;
  
  /** Sync failed */
  syncFailed: EventEmitter<{ providerId: string; error: string }>;
  
  /** Bulk operation completed */
  bulkOperationCompleted: EventEmitter<{ operation: string; count: number }>;
  
  /** Loading state changed */
  loadingChanged: EventEmitter<boolean>;
  
  /** Error occurred */
  errorOccurred: EventEmitter<Error>;
  
  /** Statistics updated */
  statisticsUpdated: EventEmitter<any>;
  
  /** Recurrence created */
  recurrenceCreated: EventEmitter<CalendarEvent>;
  
  /** Reminder scheduled */
  reminderScheduled: EventEmitter<{ eventId: string; reminder: any }>;
  
  /** Category added */
  categoryAdded: EventEmitter<string>;
  
  /** Tag added */
  tagAdded: EventEmitter<string>;
}

/**
 * Event Controller Options - Configuration
 */
export interface EventControllerOptions {
  /** Default page size for queries */
  defaultPageSize?: number;
  
  /** Enable automatic conflict detection */
  autoConflictDetection?: boolean;
  
  /** Enable automatic validation */
  autoValidation?: boolean;
  
  /** Storage configuration */
  storage?: {
    type: 'memory' | 'localStorage' | 'indexedDB' | 'external';
    options?: Record<string, any>;
  };
  
  /** Default date range for queries */
  defaultDateRange?: {
    pastDays: number;
    futureDays: number;
  };
  
  /** Enable search indexing */
  enableSearch?: boolean;
  
  /** Enable notifications */
  enableNotifications?: boolean;
  
  /** Enable sync */
  enableSync?: boolean;
  
  /** Locale for formatting */
  locale?: string;
  
  /** Time zone */
  timeZone?: string;
  
  /** Working hours */
  workingHours?: {
    start: string;
    end: string;
    days: number[];
  };
  
  /** Custom validation rules */
  customValidationRules?: any[];
  
  /** Event defaults */
  eventDefaults?: Partial<CreateEventInput>;
}

/**
 * Typed Event Controller Interface
 */
export interface TypedEventController {
  /** Reactive bindings */
  bindings: EventControllerBindings;
  
  /** Available methods */
  methods: EventControllerMethods;
  
  /** Event emitters */
  events: EventControllerEvents;
  
  /** Controller metadata */
  meta?: ControllerMetadata;
  
  /** Controller options */
  options?: EventControllerOptions;
}

/**
 * Event Controller Instance - Runtime interface
 */
export interface EventControllerInstance extends TypedEventController {
  /** Initialize the controller */
  initialize(options?: EventControllerOptions): Promise<void>;
  
  /** Get controller status */
  getStatus(): {
    initialized: boolean;
    totalEvents: number;
    health: 'good' | 'warning' | 'error';
    lastError?: string;
  };
  
  /** Destroy the controller */
  destroy(): Promise<void>;
}
