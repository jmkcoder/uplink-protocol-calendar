/**
 * Event Conflict Interfaces
 * 
 * Defines interfaces for detecting, managing, and resolving event conflicts
 */

import { CalendarEvent } from './event.interfaces';

/**
 * Conflict types
 */
export type ConflictType = 
  | 'time_overlap'       // Events overlap in time
  | 'resource_conflict'  // Same resource double-booked
  | 'attendee_conflict'  // Attendee has conflicting events
  | 'location_conflict'  // Location double-booked
  | 'travel_time'        // Insufficient travel time between locations
  | 'working_hours'      // Outside working hours
  | 'policy_violation'   // Violates business policy
  | 'dependency'         // Dependency conflicts
  | 'capacity';          // Capacity exceeded

/**
 * Conflict severity
 */
export type ConflictSeverity = 'info' | 'warning' | 'error' | 'critical';

/**
 * Conflict resolution strategy
 */
export type ConflictResolutionStrategy = 
  | 'ignore'             // Ignore the conflict
  | 'auto_reschedule'    // Automatically reschedule
  | 'suggest_times'      // Suggest alternative times
  | 'split_event'        // Split into multiple events
  | 'shorten_event'      // Reduce event duration
  | 'change_resource'    // Use different resource
  | 'notify_stakeholders' // Notify affected parties
  | 'manual_resolve';    // Require manual resolution

/**
 * Detected conflict
 */
export interface EventConflict {
  /** Conflict ID */
  id: string;
  /** Conflict type */
  type: ConflictType;
  /** Severity level */
  severity: ConflictSeverity;
  /** Primary event (the one being created/modified) */
  primaryEvent: CalendarEvent;
  /** Conflicting events */
  conflictingEvents: CalendarEvent[];
  /** Conflict description */
  description: string;
  /** Detailed explanation */
  details: string;
  /** Affected resources */
  affectedResources?: string[];
  /** Affected attendees */
  affectedAttendees?: string[];
  /** Time overlap details */
  timeOverlap?: {
    start: Date;
    end: Date;
    duration: number;
  };
  /** Detection timestamp */
  detectedAt: Date;
  /** Possible resolutions */
  possibleResolutions: ConflictResolution[];
  /** Impact assessment */
  impact: ConflictImpact;
}

/**
 * Conflict resolution option
 */
export interface ConflictResolution {
  /** Resolution ID */
  id: string;
  /** Resolution strategy */
  strategy: ConflictResolutionStrategy;
  /** Description */
  description: string;
  /** Proposed changes */
  proposedChanges: {
    /** Events to modify */
    eventChanges?: Array<{
      eventId: string;
      changes: Partial<CalendarEvent>;
    }>;
    /** Events to create */
    newEvents?: Partial<CalendarEvent>[];
    /** Events to delete */
    deleteEvents?: string[];
    /** Resource changes */
    resourceChanges?: Array<{
      resourceId: string;
      newAssignment?: string;
    }>;
  };
  /** Estimated impact */
  impact: {
    /** Number of people affected */
    peopleAffected: number;
    /** Cost of resolution */
    cost: 'low' | 'medium' | 'high';
    /** Time to implement */
    timeToImplement: number;
    /** Success probability */
    successProbability: number;
  };
  /** Required approvals */
  requiresApproval?: string[];
  /** Automatic application */
  canAutoApply: boolean;
}

/**
 * Conflict impact assessment
 */
export interface ConflictImpact {
  /** Number of affected people */
  affectedPeople: number;
  /** Critical attendees affected */
  criticalAttendeesAffected: boolean;
  /** Business impact level */
  businessImpact: 'low' | 'medium' | 'high' | 'critical';
  /** Financial impact */
  financialImpact?: number;
  /** Reputation impact */
  reputationImpact: 'none' | 'low' | 'medium' | 'high';
  /** Cascading conflicts */
  cascadingConflicts: number;
}

/**
 * Conflict detection settings
 */
export interface ConflictDetectionSettings {
  /** Enable specific conflict types */
  enabledConflictTypes: ConflictType[];
  /** Detection sensitivity */
  sensitivity: 'low' | 'medium' | 'high' | 'strict';
  /** Travel time settings */
  travelTimeSettings?: {
    /** Default travel time between locations (minutes) */
    defaultTravelTime: number;
    /** Travel time by distance */
    travelTimeByDistance?: Array<{
      distance: number; // in kilometers
      time: number;     // in minutes
    }>;
    /** Custom location travel times */
    customTravelTimes?: Record<string, Record<string, number>>;
  };
  /** Working hours definition */
  workingHours?: {
    /** Working hours by day of week */
    schedule: Record<number, { start: string; end: string }[]>;
    /** Time zone */
    timeZone: string;
    /** Exceptions (holidays, etc.) */
    exceptions?: Date[];
  };
  /** Resource capacity limits */
  resourceCapacity?: Record<string, number>;
  /** Attendee conflict settings */
  attendeeConflictSettings?: {
    /** Check for conflicts across all calendars */
    checkAllCalendars: boolean;
    /** VIP attendees who cannot have conflicts */
    vipAttendees?: string[];
    /** Grace period for back-to-back meetings */
    gracePeriodMinutes: number;
  };
}

/**
 * Conflict resolution request
 */
export interface ConflictResolutionRequest {
  /** Request ID */
  id: string;
  /** Conflict to resolve */
  conflict: EventConflict;
  /** Selected resolution */
  selectedResolution: ConflictResolution;
  /** Requestor */
  requestedBy: string;
  /** Request timestamp */
  requestedAt: Date;
  /** Approval status */
  approvalStatus: 'pending' | 'approved' | 'rejected';
  /** Approver comments */
  approverComments?: string;
  /** Applied timestamp */
  appliedAt?: Date;
}

/**
 * Conflict statistics
 */
export interface ConflictStatistics {
  /** Date range */
  dateRange: { start: Date; end: Date };
  /** Total conflicts detected */
  totalConflicts: number;
  /** Conflicts by type */
  conflictsByType: Record<ConflictType, number>;
  /** Conflicts by severity */
  conflictsBySeverity: Record<ConflictSeverity, number>;
  /** Resolution success rate */
  resolutionSuccessRate: number;
  /** Average resolution time */
  averageResolutionTime: number;
  /** Most common conflict patterns */
  commonPatterns: Array<{
    pattern: string;
    frequency: number;
  }>;
  /** Trend analysis */
  trends: {
    increasing: ConflictType[];
    decreasing: ConflictType[];
    stable: ConflictType[];
  };
}

/**
 * Event conflict service interface
 */
export interface IEventConflictService {
  /**
   * Initialize conflict detection service
   */
  initialize(settings: ConflictDetectionSettings): void;

  /**
   * Detect conflicts for a new event
   */
  detectConflicts(
    event: CalendarEvent,
    existingEvents: CalendarEvent[]
  ): Promise<EventConflict[]>;

  /**
   * Detect conflicts for event modification
   */
  detectModificationConflicts(
    originalEvent: CalendarEvent,
    modifiedEvent: CalendarEvent,
    existingEvents: CalendarEvent[]
  ): Promise<EventConflict[]>;

  /**
   * Get all active conflicts
   */
  getActiveConflicts(
    dateRange?: { start: Date; end: Date }
  ): Promise<EventConflict[]>;

  /**
   * Resolve conflict
   */
  resolveConflict(
    conflictId: string,
    resolution: ConflictResolution,
    requestedBy: string
  ): Promise<ConflictResolutionRequest>;

  /**
   * Get conflict resolution suggestions
   */
  getResolutionSuggestions(
    conflict: EventConflict,
    preferences?: {
      preferredStrategies?: ConflictResolutionStrategy[];
      maxImpact?: 'low' | 'medium' | 'high';
      requireAutoApply?: boolean;
    }
  ): Promise<ConflictResolution[]>;

  /**
   * Auto-resolve conflicts
   */
  autoResolveConflicts(
    conflicts: EventConflict[],
    strategy: ConflictResolutionStrategy
  ): Promise<ConflictResolutionRequest[]>;

  /**
   * Check for potential conflicts before creation
   */
  preCheckConflicts(
    proposedEvent: Partial<CalendarEvent>,
    existingEvents: CalendarEvent[]
  ): Promise<{
    hasConflicts: boolean;
    conflicts: EventConflict[];
    suggestions: string[];
  }>;

  /**
   * Find alternative time slots
   */
  findAlternativeTimeSlots(
    event: CalendarEvent,
    existingEvents: CalendarEvent[],
    options: {
      duration: number;
      preferredTimeRanges?: Array<{ start: string; end: string }>;
      requiredAttendees?: string[];
      maxSuggestions?: number;
      searchDays?: number;
    }
  ): Promise<Array<{
    start: Date;
    end: Date;
    conflicts: EventConflict[];
    score: number;
  }>>;

  /**
   * Get conflict impact analysis
   */
  analyzeConflictImpact(conflict: EventConflict): Promise<ConflictImpact>;

  /**
   * Get conflict statistics
   */
  getConflictStatistics(
    dateRange: { start: Date; end: Date }
  ): Promise<ConflictStatistics>;

  /**
   * Update conflict detection settings
   */
  updateDetectionSettings(settings: Partial<ConflictDetectionSettings>): void;

  /**
   * Get resolution history
   */
  getResolutionHistory(
    conflictId?: string,
    dateRange?: { start: Date; end: Date }
  ): Promise<ConflictResolutionRequest[]>;

  /**
   * Subscribe to conflict detection events
   */
  onConflictDetected(callback: (conflict: EventConflict) => void): () => void;

  /**
   * Subscribe to conflict resolution events
   */
  onConflictResolved(callback: (resolution: ConflictResolutionRequest) => void): () => void;

  /**
   * Validate resolution before applying
   */
  validateResolution(resolution: ConflictResolution): Promise<{
    isValid: boolean;
    errors: string[];
    warnings: string[];
  }>;

  /**
   * Simulate conflict resolution
   */
  simulateResolution(
    conflict: EventConflict,
    resolution: ConflictResolution
  ): Promise<{
    success: boolean;
    newConflicts: EventConflict[];
    affectedEvents: CalendarEvent[];
  }>;
}
