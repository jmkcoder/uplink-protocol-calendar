import { 
  IEventFormattingService,
  DateFormatOptions,
  EventDisplayOptions,
  FormattedEvent,
  DurationFormatOptions,
  CalendarViewFormatOptions,
  ExportFormatOptions,
  LocalizationSettings
} from '../interfaces/event-formatting.interfaces';
import { CalendarEvent, EventDateTime } from '../interfaces/event.interfaces';

/**
 * Implementation of event formatting service
 * Provides formatting capabilities for displaying events in various formats
 */
export class EventFormattingService implements IEventFormattingService {
  private localization: LocalizationSettings = {
    locale: 'en-US',
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    translations: {},
    dateFormats: {
      short: 'M/d/y',
      medium: 'MMM d, y',
      long: 'MMMM d, y',
      full: 'EEEE, MMMM d, y'
    },
    numberFormats: {
      decimal: '.',
      grouping: ','
    }
  };

  initialize(localization: LocalizationSettings): void {
    this.localization = { ...this.localization, ...localization };
  }

  formatEvent(
    event: CalendarEvent | null,
    displayOptions?: EventDisplayOptions,
    dateOptions?: DateFormatOptions
  ): FormattedEvent {
    // Handle null/undefined events gracefully
    if (!event) {
      return {
        id: '',
        title: 'Invalid Event',
        dateTime: {
          startDate: '',
          startTime: '',
          endDate: '',
          endTime: '',
          duration: '',
          isMultiDay: false
        },
        status: { text: 'Invalid', color: '#999999' },
        priority: { text: 'Normal', level: 0, color: '#666666' },
        cssClasses: ['invalid-event'],
        accessibility: {
          label: 'Invalid Event',
          description: 'This event could not be loaded properly'
        }
      };
    }

    let dateTimeFormatted;
    try {
      dateTimeFormatted = this.formatDateTime(event.dateTime, dateOptions);
    } catch (error) {
      // Handle invalid date/time gracefully
      dateTimeFormatted = {
        startDate: 'Invalid Date',
        startTime: 'Invalid Time',
        endDate: 'Invalid Date',
        endTime: 'Invalid Time',
        duration: 'Unknown',
        isMultiDay: false
      };
    }
    
    return {
      id: event.id,
      title: event.title,
      description: displayOptions?.showDescription ? event.description : undefined,
      dateTime: dateTimeFormatted,
      location: displayOptions?.showLocation && event.location 
        ? `${event.location.name}${event.location.address ? `, ${event.location.address}` : ''}` 
        : undefined,
      attendees: displayOptions?.showAttendees && event.attendees
        ? event.attendees.map(a => a.name || a.email)
        : undefined,
      status: {
        text: this.getStatusText(event.status),
        color: this.getStatusColor(event.status)
      },
      priority: {
        text: this.getPriorityText(event.priority),
        level: this.getPriorityLevel(event.priority),
        color: this.getPriorityColor(event.priority)
      },
      recurrence: event.recurrence ? {
        text: this.formatRecurrencePattern(event.recurrence),
        nextOccurrence: this.getNextOccurrenceText(event) || undefined
      } : undefined,
      cssClasses: this.generateCssClasses(event, displayOptions),
      accessibility: {
        label: this.getAccessibilityLabel(event),
        description: this.getEventSummary(event)
      }
    };
  }

  formatEvents(
    events: CalendarEvent[],
    displayOptions?: EventDisplayOptions,
    dateOptions?: DateFormatOptions
  ): FormattedEvent[] {
    return events.map(event => this.formatEvent(event, displayOptions, dateOptions));
  }

  formatDateTime(
    dateTime: EventDateTime,
    options?: DateFormatOptions
  ): {
    startDate: string;
    startTime: string;
    endDate: string;
    endTime: string;
    duration: string;
    isMultiDay: boolean;
    relative?: string;
  } {
    const dateFormatOptions: Intl.DateTimeFormatOptions = {
      timeZone: this.localization.timeZone
    };

    const timeFormatOptions: Intl.DateTimeFormatOptions = {
      timeZone: this.localization.timeZone,
      hour: 'numeric',
      minute: '2-digit',
      hour12: options?.use12Hour ?? true
    };

    // Apply date style
    if (options?.dateStyle) {
      dateFormatOptions.dateStyle = options.dateStyle;
    } else {
      dateFormatOptions.year = 'numeric';
      dateFormatOptions.month = 'short';
      dateFormatOptions.day = 'numeric';
    }

    const startDate = new Date(dateTime.start);
    const endDate = new Date(dateTime.end);
    
    // Check for invalid dates
    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
      return {
        startDate: 'Invalid Date',
        startTime: 'Invalid Time',
        endDate: 'Invalid Date',
        endTime: 'Invalid Time',
        duration: '0 minutes',
        isMultiDay: false
      };
    }
    
    const isMultiDay = startDate.toDateString() !== endDate.toDateString();

    const result = {
      startDate: new Intl.DateTimeFormat(this.localization.locale, dateFormatOptions).format(startDate),
      startTime: dateTime.isAllDay ? 'All Day' : new Intl.DateTimeFormat(this.localization.locale, timeFormatOptions).format(startDate),
      endDate: new Intl.DateTimeFormat(this.localization.locale, dateFormatOptions).format(endDate),
      endTime: dateTime.isAllDay ? 'All Day' : new Intl.DateTimeFormat(this.localization.locale, timeFormatOptions).format(endDate),
      duration: this.formatDuration(startDate, endDate),
      isMultiDay
    };

    // Add relative time if requested
    if (options?.showRelative) {
      (result as any).relative = this.getRelativeTimeText(startDate);
    }

    return result;
  }

  formatDuration(
    startDate: Date,
    endDate: Date,
    options?: DurationFormatOptions
  ): string {
    const durationMs = endDate.getTime() - startDate.getTime();
    const days = Math.floor(durationMs / (1000 * 60 * 60 * 24));
    const hours = Math.floor((durationMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((durationMs % (1000 * 60 * 60)) / (1000 * 60));

    const style = options?.style || 'compact';
    const units = options?.units || ['days', 'hours', 'minutes'];
    const maxUnits = options?.maxUnits || 2;

    const parts: string[] = [];

    if (days > 0 && units.includes('days')) {
      if (style === 'compact') {
        parts.push(`${days}d`);
      } else {
        parts.push(`${days} ${days === 1 ? 'day' : 'days'}`);
      }
    }

    if (hours > 0 && units.includes('hours')) {
      if (style === 'compact') {
        parts.push(`${hours}h`);
      } else {
        parts.push(`${hours} ${hours === 1 ? 'hour' : 'hours'}`);
      }
    }

    if (minutes > 0 && units.includes('minutes')) {
      if (style === 'compact') {
        parts.push(`${minutes}m`);
      } else {
        parts.push(`${minutes} ${minutes === 1 ? 'minute' : 'minutes'}`);
      }
    }

    return parts.slice(0, maxUnits).join(' ') || '0m';
  }

  formatForCalendarView(
    events: CalendarEvent[],
    viewOptions: CalendarViewFormatOptions
  ): Array<FormattedEvent & { position: { x: number; y: number; width: number; height: number } }> {
    // This is a simplified implementation - real calendar positioning would be more complex
    return events.map((event, index) => ({
      ...this.formatEvent(event, { showDescription: !viewOptions.compact }),
      position: {
        x: 0,
        y: index * 30, // Simple vertical stacking
        width: 100,
        height: 25
      }
    }));
  }

  async exportEvents(
    events: CalendarEvent[],
    options: ExportFormatOptions
  ): Promise<{ data: string | Blob; filename: string; mimeType: string }> {
    const timestamp = new Date().toISOString().split('T')[0];
    
    switch (options.format) {
      case 'json':
        return {
          data: JSON.stringify(events, null, 2),
          filename: `events-${timestamp}.json`,
          mimeType: 'application/json'
        };
      
      case 'csv':
        const csvData = this.exportToCsv(events);
        return {
          data: csvData,
          filename: `events-${timestamp}.csv`,
          mimeType: 'text/csv'
        };
      
      case 'ics':
        const icsData = this.exportToIcs(events);
        return {
          data: icsData,
          filename: `events-${timestamp}.ics`,
          mimeType: 'text/calendar'
        };
      
      default:
        throw new Error(`Unsupported export format: ${options.format}`);
    }
  }

  getAccessibilityLabel(event: CalendarEvent): string {
    const start = this.formatDateTime(event.dateTime).startTime;
    const date = this.formatDateTime(event.dateTime).startDate;
    
    let label = `${event.title}, ${date}`;
    
    if (!event.dateTime.isAllDay) {
      label += ` at ${start}`;
    }
    
    if (event.location?.name) {
      label += `, at ${event.location.name}`;
    }
    
    return label;
  }

  getEventSummary(event: CalendarEvent, maxLength = 100): string {
    let summary = event.title;
    
    if (event.description && summary.length < maxLength) {
      const remainingLength = maxLength - summary.length - 3; // Account for " - "
      if (remainingLength > 10) {
        const description = event.description.length > remainingLength 
          ? event.description.substring(0, remainingLength) + '...'
          : event.description;
        summary += ` - ${description}`;
      }
    }
    
    return summary;
  }

  updateLocalization(settings: Partial<LocalizationSettings>): void {
    this.localization = { ...this.localization, ...settings };
  }

  getAvailableLocales(): string[] {
    return ['en-US', 'en-GB', 'es-ES', 'fr-FR', 'de-DE', 'it-IT', 'pt-BR', 'ja-JP', 'ko-KR', 'zh-CN'];
  }

  getSupportedExportFormats(): string[] {
    return ['json', 'csv', 'ics'];
  }

  formatRecurrencePattern(recurrence: any): string {
    if (!recurrence || !recurrence.frequency) {
      return '';
    }
    
    switch (recurrence.frequency) {
      case 'daily':
        return recurrence.interval > 1 ? `Every ${recurrence.interval} days` : 'Daily';
      case 'weekly':
        return recurrence.interval > 1 ? `Every ${recurrence.interval} weeks` : 'Weekly';
      case 'monthly':
        return recurrence.interval > 1 ? `Every ${recurrence.interval} months` : 'Monthly';
      case 'yearly':
        return recurrence.interval > 1 ? `Every ${recurrence.interval} years` : 'Yearly';
      default:
        return 'Custom recurrence';
    }
  }

  getNextOccurrenceText(_event: CalendarEvent): string | null {
    // This would require recurrence calculation logic
    // For now, return null as it's complex to implement without a recurrence engine
    return null;
  }

  private getStatusText(status: string = 'confirmed'): string {
    const statusMap: Record<string, string> = {
      'tentative': 'Tentative',
      'confirmed': 'Confirmed',
      'cancelled': 'Cancelled',
      'completed': 'Completed'
    };
    return statusMap[status] || 'Unknown';
  }

  private getStatusColor(status: string = 'confirmed'): string {
    const colorMap: Record<string, string> = {
      'tentative': '#fbbf24',
      'confirmed': '#10b981',
      'cancelled': '#ef4444',
      'completed': '#6b7280'
    };
    return colorMap[status] || '#6b7280';
  }

  private getPriorityText(priority: string = 'normal'): string {
    const priorityMap: Record<string, string> = {
      'low': 'Low',
      'normal': 'Normal',
      'high': 'High',
      'urgent': 'Urgent'
    };
    return priorityMap[priority] || 'Normal';
  }

  private getPriorityLevel(priority: string = 'normal'): number {
    const levelMap: Record<string, number> = {
      'low': 1,
      'normal': 2,
      'high': 3,
      'urgent': 4
    };
    return levelMap[priority] || 2;
  }

  private getPriorityColor(priority: string = 'normal'): string {
    const colorMap: Record<string, string> = {
      'low': '#10b981',
      'normal': '#6b7280',
      'high': '#f59e0b',
      'urgent': '#ef4444'
    };
    return colorMap[priority] || '#6b7280';
  }

  private generateCssClasses(event: CalendarEvent, options?: EventDisplayOptions): string[] {
    const classes = ['event'];
    
    classes.push(`event-status-${event.status || 'confirmed'}`);
    classes.push(`event-priority-${event.priority || 'normal'}`);
    
    if (event.category) {
      classes.push(`event-category-${event.category.toLowerCase().replace(/\s+/g, '-')}`);
    }
    
    if (event.dateTime.isAllDay) {
      classes.push('event-all-day');
    }
    
    if (event.recurrence) {
      classes.push('event-recurring');
    }
    
    // Add custom classes from options
    if (options?.cssClasses) {
      Object.values(options.cssClasses).forEach(cls => {
        if (cls) classes.push(cls);
      });
    }
    
    return classes;
  }

  private getRelativeTimeText(date: Date): string {
    const now = new Date();
    const diffMs = date.getTime() - now.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Tomorrow';
    if (diffDays === -1) return 'Yesterday';
    if (diffDays > 1 && diffDays <= 7) return `In ${diffDays} days`;
    if (diffDays < -1 && diffDays >= -7) return `${Math.abs(diffDays)} days ago`;
    
    return '';
  }

  private exportToCsv(events: CalendarEvent[]): string {
    const headers = ['Title', 'Description', 'Start Date', 'End Date', 'Location', 'Status', 'Priority'];
    const rows = [headers.join(',')];
    
    events.forEach(event => {
      const row = [
        this.escapeCsvValue(event.title),
        this.escapeCsvValue(event.description || ''),
        this.escapeCsvValue(new Date(event.dateTime.start).toISOString()),
        this.escapeCsvValue(new Date(event.dateTime.end).toISOString()),
        this.escapeCsvValue(event.location?.name || ''),
        this.escapeCsvValue(event.status || 'confirmed'),
        this.escapeCsvValue(event.priority || 'normal')
      ];
      rows.push(row.join(','));
    });
    
    return rows.join('\n');
  }

  private exportToIcs(events: CalendarEvent[]): string {
    const lines = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Event Management System//Calendar//EN'
    ];
    
    events.forEach(event => {
      lines.push('BEGIN:VEVENT');
      lines.push(`UID:${event.id}@eventmanager`);
      lines.push(`SUMMARY:${event.title}`);
      lines.push(`DTSTART:${this.formatDateForIcs(new Date(event.dateTime.start))}`);
      lines.push(`DTEND:${this.formatDateForIcs(new Date(event.dateTime.end))}`);
      
      if (event.description) {
        lines.push(`DESCRIPTION:${event.description}`);
      }
      
      if (event.location?.name) {
        lines.push(`LOCATION:${event.location.name}`);
      }
      
      lines.push('END:VEVENT');
    });
    
    lines.push('END:VCALENDAR');
    return lines.join('\r\n');
  }

  private escapeCsvValue(value: string): string {
    if (value.includes(',') || value.includes('"') || value.includes('\n')) {
      return `"${value.replace(/"/g, '""')}"`;
    }
    return value;
  }

  private formatDateForIcs(date: Date): string {
    return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  }
}
