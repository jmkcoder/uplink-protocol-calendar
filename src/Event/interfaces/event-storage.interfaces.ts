/**
 * Event Storage Interfaces
 * 
 * Defines interfaces for event storage and persistence operations
 */

import { CalendarEvent, CreateEventInput, UpdateEventInput, EventFilter, EventSort, EventResults } from './event.interfaces';

/**
 * Storage operation result
 */
export interface StorageResult<T = any> {
  /** Whether operation succeeded */
  success: boolean;
  /** Result data */
  data?: T;
  /** Error message if failed */
  error?: string;
  /** Additional metadata */
  metadata?: Record<string, any>;
}

/**
 * Storage configuration
 */
export interface StorageConfig {
  /** Storage type */
  type: 'memory' | 'localStorage' | 'indexedDB' | 'external';
  /** Storage key prefix */
  keyPrefix?: string;
  /** Maximum storage size */
  maxSize?: number;
  /** Auto-save interval in milliseconds */
  autoSaveInterval?: number;
  /** Encryption settings */
  encryption?: {
    enabled: boolean;
    key?: string;
  };
}

/**
 * Storage statistics
 */
export interface StorageStats {
  /** Total number of events */
  totalEvents: number;
  /** Storage size used */
  sizeUsed: number;
  /** Last sync timestamp */
  lastSync?: Date;
  /** Storage health status */
  health: 'good' | 'warning' | 'error';
}

/**
 * Storage sync status
 */
export interface SyncStatus {
  /** Whether sync is in progress */
  syncing: boolean;
  /** Last sync timestamp */
  lastSync?: Date;
  /** Next scheduled sync */
  nextSync?: Date;
  /** Sync errors */
  errors: string[];
  /** Pending changes count */
  pendingChanges: number;
}

/**
 * Event storage service interface
 */
export interface IEventStorageService {
  /**
   * Initialize storage
   */
  initialize(config: StorageConfig): Promise<StorageResult<void>>;

  /**
   * Get all events
   */
  getAllEvents(): Promise<StorageResult<CalendarEvent[]>>;

  /**
   * Get event by ID
   */
  getEventById(id: string): Promise<StorageResult<CalendarEvent | null>>;

  /**
   * Query events with filters
   */
  queryEvents(
    filter?: EventFilter,
    sort?: EventSort,
    page?: number,
    pageSize?: number
  ): Promise<StorageResult<EventResults>>;

  /**
   * Create new event
   */
  createEvent(input: CreateEventInput): Promise<StorageResult<CalendarEvent>>;

  /**
   * Update existing event
   */
  updateEvent(input: UpdateEventInput): Promise<StorageResult<CalendarEvent>>;

  /**
   * Delete event
   */
  deleteEvent(id: string): Promise<StorageResult<void>>;

  /**
   * Bulk operations
   */
  bulkCreate(inputs: CreateEventInput[]): Promise<StorageResult<CalendarEvent[]>>;
  bulkUpdate(inputs: UpdateEventInput[]): Promise<StorageResult<CalendarEvent[]>>;
  bulkDelete(ids: string[]): Promise<StorageResult<void>>;

  /**
   * Import events
   */
  importEvents(events: CalendarEvent[]): Promise<StorageResult<CalendarEvent[]>>;

  /**
   * Export events
   */
  exportEvents(filter?: EventFilter): Promise<StorageResult<CalendarEvent[]>>;

  /**
   * Clear all events
   */
  clearAll(): Promise<StorageResult<void>>;

  /**
   * Get storage statistics
   */
  getStats(): Promise<StorageResult<StorageStats>>;

  /**
   * Get sync status
   */
  getSyncStatus(): Promise<StorageResult<SyncStatus>>;

  /**
   * Trigger manual sync
   */
  sync(): Promise<StorageResult<void>>;

  /**
   * Backup events
   */
  backup(): Promise<StorageResult<string>>;

  /**
   * Restore from backup
   */
  restore(backupData: string): Promise<StorageResult<void>>;

  /**
   * Event change subscription
   */
  onEventChanged(callback: (event: CalendarEvent, action: 'created' | 'updated' | 'deleted') => void): () => void;

  /**
   * Storage error subscription
   */
  onError(callback: (error: string) => void): () => void;
}
