/**
 * Core Event Interfaces
 * 
 * Defines the fundamental structure and types for calendar events
 */

/**
 * Event priority levels
 */
export type EventPriority = 'low' | 'normal' | 'high' | 'urgent';

/**
 * Event status types
 */
export type EventStatus = 'tentative' | 'confirmed' | 'cancelled' | 'completed';

/**
 * Event visibility levels
 */
export type EventVisibility = 'default' | 'public' | 'private' | 'confidential';

/**
 * Event frequency for recurring events
 */
export type EventFrequency = 'none' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'custom';

/**
 * Time zone representation
 */
export interface TimeZone {
  /** IANA time zone identifier (e.g., 'America/New_York') */
  id: string;
  /** Display name (e.g., 'Eastern Standard Time') */
  displayName: string;
  /** Offset from UTC in minutes */
  offset: number;
}

/**
 * Event date/time information
 */
export interface EventDateTime {
  /** Start date and time */
  start: Date;
  /** End date and time */
  end: Date;
  /** Whether the event is all-day */
  isAllDay: boolean;
  /** Time zone for the event */
  timeZone: TimeZone;
  /** Original time zone (for moved events) */
  originalTimeZone?: TimeZone;
}

/**
 * Event location information
 */
export interface EventLocation {
  /** Location name or address */
  name: string;
  /** Additional address details */
  address?: string;
  /** Geographic coordinates */
  coordinates?: {
    latitude: number;
    longitude: number;
  };
  /** Room or venue details */
  room?: string;
  /** Virtual meeting link */
  virtualLink?: string;
}

/**
 * Event attendee information
 */
export interface EventAttendee {
  /** Unique identifier */
  id: string;
  /** Display name */
  name: string;
  /** Email address */
  email: string;
  /** Response status */
  status: 'pending' | 'accepted' | 'declined' | 'tentative';
  /** Whether attendance is required */
  required: boolean;
  /** Role in the event */
  role?: 'organizer' | 'attendee' | 'optional' | 'resource';
}

/**
 * Event recurrence rule
 */
export interface EventRecurrence {
  /** Frequency of recurrence */
  frequency: EventFrequency;
  /** Interval (e.g., every 2 weeks) */
  interval: number;
  /** Days of week for weekly recurrence */
  daysOfWeek?: number[];
  /** Day of month for monthly recurrence */
  dayOfMonth?: number;
  /** Month for yearly recurrence */
  month?: number;
  /** End date for recurrence */
  endDate?: Date;
  /** Number of occurrences */
  count?: number;
  /** Custom recurrence pattern */
  customPattern?: string;
  /** Exceptions (dates to exclude) */
  exceptions?: Date[];
}

/**
 * Event attachment
 */
export interface EventAttachment {
  /** Unique identifier */
  id: string;
  /** File name */
  name: string;
  /** File URL or path */
  url: string;
  /** MIME type */
  mimeType: string;
  /** File size in bytes */
  size: number;
  /** Description */
  description?: string;
}

/**
 * Event reminder/notification
 */
export interface EventReminder {
  /** Unique identifier */
  id: string;
  /** Minutes before event to trigger */
  minutesBefore: number;
  /** Reminder method */
  method: 'popup' | 'email' | 'sms' | 'push';
  /** Whether reminder is enabled */
  enabled: boolean;
  /** Custom message */
  message?: string;
}

/**
 * Event metadata and custom fields
 */
export interface EventMetadata {
  /** Custom fields */
  [key: string]: any;
  /** Tags for categorization */
  tags?: string[];
  /** Color coding */
  color?: string;
  /** Icon identifier */
  icon?: string;
  /** External system IDs */
  externalIds?: Record<string, string>;
}

/**
 * Core Event interface
 */
export interface CalendarEvent {
  /** Unique identifier */
  id: string;
  /** Event title */
  title: string;
  /** Event description */
  description?: string;
  /** Date and time information */
  dateTime: EventDateTime;
  /** Event location */
  location?: EventLocation;
  /** Event organizer */
  organizer?: EventAttendee;
  /** Event attendees */
  attendees?: EventAttendee[];
  /** Event priority */
  priority: EventPriority;
  /** Event status */
  status: EventStatus;
  /** Event visibility */
  visibility: EventVisibility;
  /** Event category */
  category?: string;
  /** Recurrence rule */
  recurrence?: EventRecurrence;
  /** Event reminders */
  reminders?: EventReminder[];
  /** Event attachments */
  attachments?: EventAttachment[];
  /** Event metadata */
  metadata?: EventMetadata;
  /** Creation timestamp */
  createdAt: Date;
  /** Last modified timestamp */
  updatedAt: Date;
  /** Creator information */
  createdBy: string;
  /** Last modifier information */
  updatedBy: string;
  /** Version for conflict resolution */
  version: number;
}

/**
 * Event creation input
 */
export interface CreateEventInput {
  title: string;
  description?: string;
  dateTime: Omit<EventDateTime, 'timeZone'> & { timeZone?: TimeZone };
  location?: EventLocation;
  attendees?: Omit<EventAttendee, 'id' | 'status'>[];
  priority?: EventPriority;
  status?: EventStatus;
  visibility?: EventVisibility;
  category?: string;
  recurrence?: EventRecurrence;
  reminders?: Omit<EventReminder, 'id'>[];
  attachments?: Omit<EventAttachment, 'id'>[];
  metadata?: EventMetadata;
}

/**
 * Event update input
 */
export interface UpdateEventInput {
  id: string;
  title?: string;
  description?: string;
  dateTime?: Partial<EventDateTime>;
  location?: EventLocation;
  attendees?: EventAttendee[];
  priority?: EventPriority;
  status?: EventStatus;
  visibility?: EventVisibility;
  category?: string;
  recurrence?: EventRecurrence;
  reminders?: EventReminder[];
  attachments?: EventAttachment[];
  metadata?: EventMetadata;
  version: number; // For optimistic locking
}

/**
 * Event query filters
 */
export interface EventFilter {
  /** Date range filter */
  dateRange?: {
    start: Date;
    end: Date;
  };
  /** Category filter */
  categories?: string[];
  /** Status filter */
  statuses?: EventStatus[];
  /** Priority filter */
  priorities?: EventPriority[];
  /** Attendee filter */
  attendeeId?: string;
  /** Search text */
  searchText?: string;
  /** Tags filter */
  tags?: string[];
  /** Custom metadata filters */
  metadata?: Record<string, any>;
}

/**
 * Event sort options
 */
export interface EventSort {
  /** Field to sort by */
  field: 'title' | 'start' | 'end' | 'priority' | 'status' | 'createdAt' | 'updatedAt';
  /** Sort direction */
  direction: 'asc' | 'desc';
}

/**
 * Paginated event results
 */
export interface EventResults {
  /** Event items */
  events: CalendarEvent[];
  /** Total count */
  total: number;
  /** Current page */
  page: number;
  /** Page size */
  pageSize: number;
  /** Whether there are more results */
  hasMore: boolean;
}

/**
 * Event conflict information
 */
export interface EventConflict {
  /** Conflicting event */
  event: CalendarEvent;
  /** Type of conflict */
  type: 'overlap' | 'double_booking' | 'resource_conflict';
  /** Conflict details */
  details: string;
  /** Suggested resolution */
  suggestion?: string;
}

/**
 * Event validation result
 */
export interface EventValidationResult {
  /** Whether the event is valid */
  isValid: boolean;
  /** Validation errors */
  errors: string[];
  /** Validation warnings */
  warnings: string[];
  /** Conflicts found */
  conflicts: EventConflict[];
}
