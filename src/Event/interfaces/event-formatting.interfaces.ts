/**
 * Event Formatting Interfaces
 * 
 * Defines interfaces for event formatting, display, and internationalization
 */

import { CalendarEvent, EventDateTime } from './event.interfaces';

/**
 * Date format options
 */
export interface DateFormatOptions {
  /** Date style */
  dateStyle?: 'full' | 'long' | 'medium' | 'short';
  /** Time style */
  timeStyle?: 'full' | 'long' | 'medium' | 'short';
  /** Custom format pattern */
  pattern?: string;
  /** Show time zone */
  showTimeZone?: boolean;
  /** Show relative dates (e.g., "Today", "Tomorrow") */
  showRelative?: boolean;
  /** Use 12-hour format */
  use12Hour?: boolean;
}

/**
 * Event display options
 */
export interface EventDisplayOptions {
  /** Show description */
  showDescription?: boolean;
  /** Show location */
  showLocation?: boolean;
  /** Show attendees */
  showAttendees?: boolean;
  /** Maximum description length */
  maxDescriptionLength?: number;
  /** Show event status */
  showStatus?: boolean;
  /** Show priority indicator */
  showPriority?: boolean;
  /** Show recurrence indicator */
  showRecurrence?: boolean;
  /** Custom CSS classes */
  cssClasses?: Record<string, string>;
}

/**
 * Duration format options
 */
export interface DurationFormatOptions {
  /** Format style */
  style: 'compact' | 'long' | 'narrow';
  /** Units to display */
  units?: ('days' | 'hours' | 'minutes')[];
  /** Maximum unit precision */
  maxUnits?: number;
}

/**
 * Formatted event output
 */
export interface FormattedEvent {
  /** Event ID */
  id: string;
  /** Formatted title */
  title: string;
  /** Formatted description */
  description?: string;
  /** Formatted date and time */
  dateTime: {
    /** Formatted start date */
    startDate: string;
    /** Formatted start time */
    startTime: string;
    /** Formatted end date */
    endDate: string;
    /** Formatted end time */
    endTime: string;
    /** Formatted duration */
    duration: string;
    /** Whether event spans multiple days */
    isMultiDay: boolean;
    /** Relative time description */
    relative?: string;
  };
  /** Formatted location */
  location?: string;
  /** Formatted attendees */
  attendees?: string[];
  /** Status display */
  status: {
    text: string;
    color: string;
    icon?: string;
  };
  /** Priority display */
  priority: {
    text: string;
    level: number;
    color: string;
    icon?: string;
  };
  /** Recurrence display */
  recurrence?: {
    text: string;
    nextOccurrence?: string;
  };
  /** CSS classes for styling */
  cssClasses: string[];
  /** Accessibility labels */
  accessibility: {
    label: string;
    description: string;
  };
}

/**
 * Calendar view formatting options
 */
export interface CalendarViewFormatOptions {
  /** View type */
  viewType: 'month' | 'week' | 'day' | 'agenda';
  /** Compact mode */
  compact?: boolean;
  /** Show week numbers */
  showWeekNumbers?: boolean;
  /** First day of week (0-6) */
  firstDayOfWeek?: number;
  /** Time slot duration in minutes */
  timeSlotDuration?: number;
  /** Business hours display */
  businessHours?: {
    start: string;
    end: string;
    highlight: boolean;
  };
}

/**
 * Export format options
 */
export interface ExportFormatOptions {
  /** Export format */
  format: 'ics' | 'csv' | 'json' | 'xml' | 'pdf';
  /** Include attachments */
  includeAttachments?: boolean;
  /** Include private events */
  includePrivate?: boolean;
  /** Custom field mapping */
  fieldMapping?: Record<string, string>;
  /** File name template */
  filenameTemplate?: string;
}

/**
 * Localization settings
 */
export interface LocalizationSettings {
  /** Locale identifier */
  locale: string;
  /** Time zone */
  timeZone: string;
  /** Custom translations */
  translations?: Record<string, string>;
  /** Date format preferences */
  dateFormats?: {
    short: string;
    medium: string;
    long: string;
    full: string;
  };
  /** Number format preferences */
  numberFormats?: {
    decimal: string;
    grouping: string;
  };
}

/**
 * Event formatting service interface
 */
export interface IEventFormattingService {
  /**
   * Initialize formatting service
   */
  initialize(localization: LocalizationSettings): void;

  /**
   * Format single event
   */
  formatEvent(
    event: CalendarEvent,
    displayOptions?: EventDisplayOptions,
    dateOptions?: DateFormatOptions
  ): FormattedEvent;

  /**
   * Format multiple events
   */
  formatEvents(
    events: CalendarEvent[],
    displayOptions?: EventDisplayOptions,
    dateOptions?: DateFormatOptions
  ): FormattedEvent[];

  /**
   * Format date and time
   */
  formatDateTime(
    dateTime: EventDateTime,
    options?: DateFormatOptions
  ): {
    startDate: string;
    startTime: string;
    endDate: string;
    endTime: string;
    duration: string;
    relative?: string;
  };

  /**
   * Format duration
   */
  formatDuration(
    startDate: Date,
    endDate: Date,
    options?: DurationFormatOptions
  ): string;

  /**
   * Format for calendar view
   */
  formatForCalendarView(
    events: CalendarEvent[],
    viewOptions: CalendarViewFormatOptions
  ): Array<FormattedEvent & { position: { x: number; y: number; width: number; height: number } }>;

  /**
   * Export events in specified format
   */
  exportEvents(
    events: CalendarEvent[],
    options: ExportFormatOptions
  ): Promise<{ data: string | Blob; filename: string; mimeType: string }>;

  /**
   * Get accessibility label for event
   */
  getAccessibilityLabel(event: CalendarEvent): string;

  /**
   * Get event summary for notifications
   */
  getEventSummary(event: CalendarEvent, maxLength?: number): string;

  /**
   * Update localization settings
   */
  updateLocalization(settings: Partial<LocalizationSettings>): void;

  /**
   * Get available locales
   */
  getAvailableLocales(): string[];

  /**
   * Get supported export formats
   */
  getSupportedExportFormats(): string[];

  /**
   * Format recurring event pattern
   */
  formatRecurrencePattern(recurrence: any): string;

  /**
   * Get next occurrence text
   */
  getNextOccurrenceText(event: CalendarEvent): string | null;
}
