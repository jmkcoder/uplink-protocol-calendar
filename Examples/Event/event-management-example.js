/**
 * Event Management System Example
 * 
 * This example demonstrates how to use the comprehensive event management system
 * that works independently from DateController and TimeController but can integrate with them.
 */

import { 
  EventController,
  CalendarEventStorageService,
  CalendarEventValidationService,
  CalendarEventFormattingService,
  CalendarEventSearchService
} from '@uplink-protocol/calendar-controller';

// Initialize the event management system
async function initializeEventSystem() {
  console.log('Initializing Event Management System...');
  
  // Create individual services (optional for advanced usage)
  const storageService = new CalendarEventStorageService();
  const validationService = new CalendarEventValidationService();
  const formattingService = new CalendarEventFormattingService();
  const searchService = new CalendarEventSearchService();
  
  // Initialize services
  await storageService.initialize({ storageType: 'localStorage', keyPrefix: 'events' });
  validationService.initialize();
  formattingService.initialize({
    locale: 'en-US',
    timeZone: 'America/New_York',
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
  });
  await searchService.initialize({
    indexedFields: ['title', 'description', 'location.name'],
    enableFullTextSearch: true,
    enableFuzzySearch: false,
    fuzzyThreshold: 0.7,
    enableStemming: false,
    stopWords: ['the', 'a', 'an', 'and', 'or', 'but'],
    fieldWeights: {
      title: 2,
      description: 1,
      'location.name': 1.5
    }
  });
  
  // Create the main controller
  const eventController = new EventController({
    enableAutoSave: true,
    autoSaveInterval: 30000,
    enableValidation: true,
    enableSearch: true,
    enableConflictDetection: true,
    enableNotifications: false,
    enableRecurrence: false,
    enableSync: false,
    defaultView: 'month',
    timezone: 'America/New_York',
    locale: 'en-US'
  });
  
  return { eventController, storageService, validationService, formattingService, searchService };
}

// Example usage
async function example() {
  const { eventController, formattingService, searchService } = await initializeEventSystem();
  
  // Create a new event
  const newEvent = await eventController.createEvent({
    title: 'Team Meeting',
    description: 'Weekly team sync meeting',
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
      name: 'Conference Room A',
      address: '123 Office Building'
    },
    attendees: [
      { name: 'John Doe', email: 'john@example.com' },
      { name: 'Jane Smith', email: 'jane@example.com' }
    ],
    priority: 'normal',
    status: 'confirmed',
    category: 'work'
  });
  
  console.log('Created event:', newEvent);
  
  // Search for events
  const searchResults = await eventController.searchEvents({
    text: 'meeting',
    fields: {
      category: 'work'
    }
  });
  
  console.log('Search results:', searchResults);
  
  // Format event for display
  const formattedEvent = formattingService.formatEvent(newEvent, {
    showDescription: true,
    showLocation: true,
    showAttendees: true
  });
  
  console.log('Formatted event:', formattedEvent);
  
  // Get events for a date range
  const eventsInRange = await eventController.getEvents({
    dateRange: {
      start: new Date('2025-07-01'),
      end: new Date('2025-07-07')
    }
  });
  
  console.log('Events in week:', eventsInRange);
  
  // Update an event
  const updatedEvent = await eventController.updateEvent(newEvent.id, {
    description: 'Updated: Weekly team sync meeting with project updates'
  });
  
  console.log('Updated event:', updatedEvent);
  
  // Export events
  const exportData = await formattingService.exportEvents([newEvent, updatedEvent], {
    format: 'json',
    includeAttachments: false,
    includePrivate: true
  });
  
  console.log('Exported data:', exportData);
}

// Integration with DateController and TimeController
async function integrationExample() {
  console.log('Integration Example with Date/Time Controllers...');
  
  // This would typically be imported from the main package
  // import { CalendarController, TimeController } from '@uplink-protocol/calendar-controller';
  
  // Create controllers
  // const dateController = CalendarController({ /* date options */ });
  // const timeController = TimeController({ /* time options */ });
  const { eventController } = await initializeEventSystem();
  
  // Example: Create event from date/time controller selections
  // This would be triggered by user interactions with date/time pickers
  const selectedDate = new Date('2025-07-15');
  const selectedTime = { hours: 10, minutes: 30 };
  
  // Combine date and time selections to create event
  const eventStart = new Date(selectedDate);
  eventStart.setHours(selectedTime.hours, selectedTime.minutes, 0, 0);
  
  const eventEnd = new Date(eventStart);
  eventEnd.setHours(eventStart.getHours() + 1); // 1 hour duration
  
  const eventFromDateTimePickers = await eventController.createEvent({
    title: 'Appointment from Date/Time Pickers',
    dateTime: {
      start: eventStart,
      end: eventEnd,
      isAllDay: false,
      timeZone: {
        id: 'America/New_York',
        displayName: 'Eastern Time',
        offset: -240
      }
    },
    category: 'appointment'
  });
  
  console.log('Event created from date/time selections:', eventFromDateTimePickers);
  
  // Example: Update date/time controllers when event is selected
  eventController.on('eventSelected', (event) => {
    console.log('Event selected - could update date/time controllers:', event);
    // dateController.setSelectedDate(new Date(event.dateTime.start));
    // timeController.setSelectedTime({ 
    //   hours: new Date(event.dateTime.start).getHours(),
    //   minutes: new Date(event.dateTime.start).getMinutes()
    // });
  });
}

// Run examples
if (typeof window !== 'undefined') {
  // Browser environment
  window.addEventListener('DOMContentLoaded', () => {
    example().catch(console.error);
    integrationExample().catch(console.error);
  });
} else {
  // Node.js environment
  example().catch(console.error);
  integrationExample().catch(console.error);
}

export { example, integrationExample, initializeEventSystem };
