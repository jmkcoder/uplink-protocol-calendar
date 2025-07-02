/**
 * Event Sync Interfaces
 * 
 * Defines interfaces for synchronizing events with external systems and services
 */

import { CalendarEvent } from './event.interfaces';

/**
 * Sync provider types
 */
export type SyncProviderType = 
  | 'google_calendar'
  | 'outlook'
  | 'apple_calendar'
  | 'caldav'
  | 'exchange'
  | 'ical'
  | 'webhook'
  | 'rest_api'
  | 'custom';

/**
 * Sync direction
 */
export type SyncDirection = 'import' | 'export' | 'bidirectional';

/**
 * Sync status
 */
export type SyncStatus = 
  | 'idle'
  | 'syncing'
  | 'success'
  | 'error'
  | 'paused'
  | 'disabled';

/**
 * Sync provider configuration
 */
export interface SyncProviderConfig {
  /** Provider ID */
  id: string;
  /** Provider type */
  type: SyncProviderType;
  /** Provider name */
  name: string;
  /** Sync direction */
  direction: SyncDirection;
  /** Authentication credentials */
  credentials: {
    /** Authentication type */
    type: 'oauth2' | 'basic' | 'apikey' | 'certificate';
    /** Credential data */
    data: Record<string, any>;
  };
  /** Sync settings */
  settings: {
    /** Sync interval in minutes */
    syncInterval: number;
    /** Enable real-time sync */
    realTimeSync: boolean;
    /** Date range to sync */
    dateRange?: {
      pastDays: number;
      futureDays: number;
    };
    /** Event filters */
    filters?: {
      categories?: string[];
      statuses?: string[];
      attendeeFilter?: string;
    };
  };
  /** Field mapping */
  fieldMapping: Record<string, string>;
  /** Provider-specific options */
  providerOptions?: Record<string, any>;
  /** Enabled status */
  enabled: boolean;
}

/**
 * Sync operation
 */
export interface SyncOperation {
  /** Operation ID */
  id: string;
  /** Provider ID */
  providerId: string;
  /** Operation type */
  type: 'full_sync' | 'incremental_sync' | 'push' | 'pull';
  /** Sync direction */
  direction: SyncDirection;
  /** Start timestamp */
  startedAt: Date;
  /** End timestamp */
  completedAt?: Date;
  /** Operation status */
  status: SyncStatus;
  /** Progress information */
  progress: {
    /** Total items to sync */
    total: number;
    /** Items completed */
    completed: number;
    /** Current operation */
    current?: string;
  };
  /** Sync results */
  results?: SyncResults;
  /** Error information */
  error?: {
    code: string;
    message: string;
    details?: any;
  };
}

/**
 * Sync results
 */
export interface SyncResults {
  /** Events created */
  created: number;
  /** Events updated */
  updated: number;
  /** Events deleted */
  deleted: number;
  /** Events skipped */
  skipped: number;
  /** Events with errors */
  errors: number;
  /** Detailed results */
  details: {
    /** Created events */
    createdEvents: string[];
    /** Updated events */
    updatedEvents: string[];
    /** Deleted events */
    deletedEvents: string[];
    /** Skipped events with reasons */
    skippedEvents: Array<{ id: string; reason: string }>;
    /** Events with errors */
    errorEvents: Array<{ id: string; error: string }>;
  };
  /** Sync metadata */
  metadata: {
    /** Last sync token */
    lastSyncToken?: string;
    /** Next sync time */
    nextSyncTime?: Date;
    /** Sync duration */
    duration: number;
  };
}

/**
 * Sync conflict
 */
export interface SyncConflict {
  /** Conflict ID */
  id: string;
  /** Event ID */
  eventId: string;
  /** Local event version */
  localEvent: CalendarEvent;
  /** Remote event version */
  remoteEvent: any;
  /** Conflict type */
  type: 'update_conflict' | 'delete_conflict' | 'create_conflict';
  /** Detection timestamp */
  detectedAt: Date;
  /** Resolution strategy */
  resolutionStrategy?: 'local_wins' | 'remote_wins' | 'manual' | 'merge';
  /** Resolution timestamp */
  resolvedAt?: Date;
  /** Resolved by */
  resolvedBy?: string;
}

/**
 * Sync mapping
 */
export interface SyncMapping {
  /** Local event ID */
  localId: string;
  /** Remote event ID */
  remoteId: string;
  /** Provider ID */
  providerId: string;
  /** Last sync timestamp */
  lastSynced: Date;
  /** Remote version/etag */
  remoteVersion?: string;
  /** Sync direction used */
  syncDirection: SyncDirection;
  /** Mapping metadata */
  metadata?: Record<string, any>;
}

/**
 * Webhook configuration
 */
export interface WebhookConfig {
  /** Webhook ID */
  id: string;
  /** Webhook URL */
  url: string;
  /** HTTP method */
  method: 'POST' | 'PUT' | 'PATCH';
  /** Headers */
  headers?: Record<string, string>;
  /** Authentication */
  auth?: {
    type: 'bearer' | 'basic' | 'apikey';
    credentials: Record<string, string>;
  };
  /** Event types to notify */
  eventTypes: ('created' | 'updated' | 'deleted')[];
  /** Retry configuration */
  retryConfig: {
    maxRetries: number;
    retryDelay: number;
    backoffMultiplier: number;
  };
  /** Enabled status */
  enabled: boolean;
}

/**
 * Event sync service interface
 */
export interface IEventSyncService {
  /**
   * Initialize sync service
   */
  initialize(): Promise<void>;

  /**
   * Add sync provider
   */
  addProvider(config: SyncProviderConfig): Promise<void>;

  /**
   * Update sync provider
   */
  updateProvider(providerId: string, config: Partial<SyncProviderConfig>): Promise<void>;

  /**
   * Remove sync provider
   */
  removeProvider(providerId: string): Promise<void>;

  /**
   * Get all sync providers
   */
  getProviders(): Promise<SyncProviderConfig[]>;

  /**
   * Get sync provider by ID
   */
  getProvider(providerId: string): Promise<SyncProviderConfig | null>;

  /**
   * Test provider connection
   */
  testProvider(providerId: string): Promise<{
    success: boolean;
    error?: string;
    metadata?: Record<string, any>;
  }>;

  /**
   * Start manual sync
   */
  startSync(
    providerId: string,
    type?: 'full_sync' | 'incremental_sync',
    direction?: SyncDirection
  ): Promise<SyncOperation>;

  /**
   * Stop active sync
   */
  stopSync(operationId: string): Promise<void>;

  /**
   * Get sync status
   */
  getSyncStatus(providerId?: string): Promise<SyncOperation[]>;

  /**
   * Get sync history
   */
  getSyncHistory(
    providerId?: string,
    limit?: number,
    offset?: number
  ): Promise<SyncOperation[]>;

  /**
   * Get sync conflicts
   */
  getSyncConflicts(
    providerId?: string,
    resolved?: boolean
  ): Promise<SyncConflict[]>;

  /**
   * Resolve sync conflict
   */
  resolveSyncConflict(
    conflictId: string,
    strategy: SyncConflict['resolutionStrategy'],
    resolvedBy: string
  ): Promise<void>;

  /**
   * Push event to external system
   */
  pushEvent(
    providerId: string,
    event: CalendarEvent
  ): Promise<{ success: boolean; remoteId?: string; error?: string }>;

  /**
   * Pull events from external system
   */
  pullEvents(
    providerId: string,
    dateRange?: { start: Date; end: Date }
  ): Promise<{ events: any[]; error?: string }>;

  /**
   * Sync single event
   */
  syncEvent(
    providerId: string,
    eventId: string,
    direction: SyncDirection
  ): Promise<{ success: boolean; error?: string }>;

  /**
   * Get sync mapping
   */
  getSyncMapping(localId: string, providerId: string): Promise<SyncMapping | null>;

  /**
   * Create sync mapping
   */
  createSyncMapping(mapping: Omit<SyncMapping, 'lastSynced'>): Promise<void>;

  /**
   * Update sync mapping
   */
  updateSyncMapping(
    localId: string,
    providerId: string,
    updates: Partial<SyncMapping>
  ): Promise<void>;

  /**
   * Delete sync mapping
   */
  deleteSyncMapping(localId: string, providerId: string): Promise<void>;

  /**
   * Configure webhook
   */
  configureWebhook(config: WebhookConfig): Promise<void>;

  /**
   * Remove webhook
   */
  removeWebhook(webhookId: string): Promise<void>;

  /**
   * Get webhook configurations
   */
  getWebhooks(): Promise<WebhookConfig[]>;

  /**
   * Enable/disable provider
   */
  setProviderEnabled(providerId: string, enabled: boolean): Promise<void>;

  /**
   * Pause/resume sync
   */
  pauseSync(providerId: string): Promise<void>;
  resumeSync(providerId: string): Promise<void>;

  /**
   * Get sync statistics
   */
  getSyncStatistics(
    providerId?: string,
    dateRange?: { start: Date; end: Date }
  ): Promise<{
    totalOperations: number;
    successfulOperations: number;
    failedOperations: number;
    eventsCreated: number;
    eventsUpdated: number;
    eventsDeleted: number;
    averageSyncTime: number;
    conflictsGenerated: number;
    lastSyncTime?: Date;
  }>;

  /**
   * Export sync configuration
   */
  exportSyncConfig(): Promise<{
    providers: SyncProviderConfig[];
    webhooks: WebhookConfig[];
    mappings: SyncMapping[];
  }>;

  /**
   * Import sync configuration
   */
  importSyncConfig(config: {
    providers?: SyncProviderConfig[];
    webhooks?: WebhookConfig[];
    mappings?: SyncMapping[];
  }): Promise<void>;

  /**
   * Subscribe to sync events
   */
  onSyncStarted(callback: (operation: SyncOperation) => void): () => void;
  onSyncCompleted(callback: (operation: SyncOperation) => void): () => void;
  onSyncError(callback: (operation: SyncOperation, error: any) => void): () => void;
  onConflictDetected(callback: (conflict: SyncConflict) => void): () => void;
}
