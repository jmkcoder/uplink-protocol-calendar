# Event Management System

A comprehensive, modular event management system for calendar applications. This system is designed to work independently or integrate seamlessly with DateController and TimeController.

## Features

- **Complete Event Lifecycle**: Create, read, update, and delete events
- **Advanced Search & Filtering**: Full-text search with faceted filtering
- **Event Validation**: Comprehensive business rule validation
- **Multiple Export Formats**: JSON, CSV, ICS support
- **Flexible Formatting**: Customizable event display formatting
- **Modular Architecture**: Use individual services or the complete controller
- **TypeScript Support**: Full type safety and IntelliSense support
- **Storage Abstraction**: Local storage, memory, or custom storage backends

## Architecture

The Event Management System follows a modular service-oriented architecture:

```
EventController (Main Interface)
├── EventManagerService (Orchestration)
├── EventStorageService (Data Persistence)
├── EventValidationService (Business Rules)
├── EventFormattingService (Display Logic)
└── EventSearchService (Search & Filtering)
```

## Quick Start

### Basic Usage

```typescript
import { EventController } from '@uplink-protocol/calendar-controller';

// Initialize the controller
const eventController = new EventController({
  enableAutoSave: true,
  enableValidation: true,
  enableSearch: true
});

// Create an event
const event = await eventController.createEvent({
  title: 'Team Meeting',
  description: 'Weekly team sync',
  dateTime: {
    start: new Date('2025-07-01T14:00:00'),
    end: new Date('2025-07-01T15:00:00'),
    isAllDay: false,
    timeZone: {
      id: 'America/New_York',
      displayName: 'Eastern Time',
      offset: -240
    }
  },
  location: {
    name: 'Conference Room A'
  },
  attendees: [
    { name: 'John Doe', email: 'john@example.com' }
  ]
});

// Search events
const results = await eventController.searchEvents({
  text: 'meeting',
  dateRange: {
    start: new Date('2025-07-01'),
    end: new Date('2025-07-07')
  }
});
```

### Advanced Service Usage

```typescript
import { 
  CalendarEventStorageService,
  CalendarEventValidationService,
  CalendarEventFormattingService,
  CalendarEventSearchService
} from '@uplink-protocol/calendar-controller';

// Use individual services for advanced control
const storageService = new CalendarEventStorageService();
const validationService = new CalendarEventValidationService();
const formattingService = new CalendarEventFormattingService();
const searchService = new CalendarEventSearchService();

// Initialize services with custom configuration
await storageService.initialize({ storageType: 'localStorage' });
validationService.initialize();
formattingService.initialize({ locale: 'en-US', timeZone: 'UTC' });
await searchService.initialize({ enableFuzzySearch: true });
```

## Integration with Date/Time Controllers

The Event Management System is designed to work seamlessly with existing DateController and TimeController:

```typescript
import { CalendarController, TimeController, EventController } from '@uplink-protocol/calendar-controller';

const dateController = CalendarController();
const timeController = TimeController();
const eventController = new EventController();

// Create event from date/time selections
const selectedDate = dateController.getSelectedDate();
const selectedTime = timeController.getSelectedTime();

const event = await eventController.createEvent({
  title: 'New Appointment',
  dateTime: {
    start: combineDateTime(selectedDate, selectedTime),
    end: addDuration(combineDateTime(selectedDate, selectedTime), { hours: 1 }),
    isAllDay: false,
    timeZone: { id: 'UTC', displayName: 'UTC', offset: 0 }
  }
});

// Update controllers when event is selected
eventController.on('eventSelected', (event) => {
  dateController.setSelectedDate(new Date(event.dateTime.start));
  timeController.setSelectedTime({
    hours: new Date(event.dateTime.start).getHours(),
    minutes: new Date(event.dateTime.start).getMinutes()
  });
});
```

## Configuration Options

### EventController Options

```typescript
interface EventControllerOptions {
  enableAutoSave?: boolean;         // Auto-save changes
  autoSaveInterval?: number;        // Auto-save interval in ms
  enableValidation?: boolean;       // Enable event validation
  enableSearch?: boolean;           // Enable search functionality
  enableConflictDetection?: boolean; // Check for conflicts
  enableNotifications?: boolean;    // Enable notifications (future)
  enableRecurrence?: boolean;       // Enable recurring events (future)
  enableSync?: boolean;             // Enable external sync (future)
  defaultView?: string;             // Default calendar view
  timezone?: string;                // Default timezone
  locale?: string;                  // Default locale
}
```

### Storage Configuration

```typescript
interface StorageConfig {
  storageType: 'memory' | 'localStorage' | 'custom';
  keyPrefix?: string;               // Key prefix for localStorage
  customAdapter?: StorageAdapter;   // Custom storage implementation
}
```

### Validation Configuration

```typescript
interface BusinessRuleConfig {
  maxDurationMinutes?: number;      // Maximum event duration
  minDurationMinutes?: number;      // Minimum event duration
  maxAdvanceBookingDays?: number;   // Maximum advance booking
  workingHours?: {                  // Working hours restrictions
    start: string;
    end: string;
    days: number[];
  };
  maxConcurrentEvents?: number;     // Maximum overlapping events
  requiredFields?: string[];        // Required event fields
}
```

## Event Types

### CalendarEvent

```typescript
interface CalendarEvent {
  id: string;
  title: string;
  description?: string;
  dateTime: EventDateTime;
  location?: EventLocation;
  attendees?: EventAttendee[];
  priority?: 'low' | 'normal' | 'high' | 'urgent';
  status?: 'tentative' | 'confirmed' | 'cancelled' | 'completed';
  visibility?: 'default' | 'public' | 'private' | 'confidential';
  category?: string;
  recurrence?: EventRecurrence;
  reminders?: EventReminder[];
  attachments?: EventAttachment[];
  metadata?: EventMetadata;
}
```

### Search and Filtering

```typescript
interface SearchQuery {
  text?: string;                    // Full-text search
  fields?: {                        // Field-specific search
    title?: string;
    description?: string;
    location?: string;
    category?: string;
    attendees?: string;
  };
  dateRange?: {                     // Date range filter
    start?: Date;
    end?: Date;
    type?: 'absolute' | 'relative';
    relative?: {
      value: number;
      unit: 'days' | 'weeks' | 'months';
      direction: 'past' | 'future';
    };
  };
  filters?: EventFilter;            // Additional filters
  sort?: EventSort;                 // Sort options
}
```

## Examples

See the `Examples/Event/` directory for comprehensive usage examples:

- `event-management-example.js` - Complete system demonstration
- Basic CRUD operations
- Search and filtering
- Event formatting and export
- Integration with Date/Time controllers

## API Reference

### EventController Methods

- `createEvent(input: CreateEventInput): Promise<CalendarEvent>`
- `updateEvent(id: string, updates: UpdateEventInput): Promise<CalendarEvent>`
- `deleteEvent(id: string): Promise<void>`
- `getEvent(id: string): Promise<CalendarEvent | null>`
- `getEvents(filter?: EventFilter): Promise<EventResults>`
- `searchEvents(query: SearchQuery): Promise<SearchResults>`
- `validateEvent(input: CreateEventInput): Promise<EventValidationResult>`

### Events

The EventController emits the following events:

- `eventCreated` - When an event is created
- `eventUpdated` - When an event is updated
- `eventDeleted` - When an event is deleted
- `eventSelected` - When an event is selected
- `validationFailed` - When validation fails
- `errorOccurred` - When an error occurs

## Future Enhancements

The following features are planned for future releases:

- **Recurrence Engine**: Advanced recurring event support
- **Notification System**: Email, push, and in-app notifications
- **Conflict Resolution**: Automatic conflict detection and resolution
- **External Sync**: Google Calendar, Outlook, CalDAV integration
- **Real-time Collaboration**: Multi-user event editing
- **Advanced Analytics**: Usage statistics and insights
- **Custom Field Support**: Extensible event properties
- **Workflow Integration**: Event approval and workflow management

## Contributing

The Event Management System is designed to be extensible. You can:

1. Implement custom storage adapters
2. Add custom validation rules
3. Create custom formatters
4. Extend search capabilities
5. Add new export formats

See the interface definitions in `src/Event/interfaces/` for extension points.

## License

This package is part of the Odyssey Uplink Protocol and follows the same licensing terms.
