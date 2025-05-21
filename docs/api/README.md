**@uplink-protocol/form-controller v0.1.0**

***

# Calendar Controller

A flexible calendar API supporting both calendar and date-picker integrations for any JavaScript framework or library.

## Features

- Date selection (single date and date range)
- Flexible configuration options
- Service-oriented architecture
- Framework agnostic

## Usage

```javascript
import { CalendarController } from '@uplink-protocol/calendar-controller';

// Create a new calendar controller
const calendar = CalendarController({
  firstDayOfWeek: 1, // Monday
  dateFormat: 'MM/DD/YYYY',
  initialSelectedDate: new Date()
});

// Use the calendar API
calendar.methods.selectDate(2025, 4, 15);
```

## Architecture

This controller uses a service-oriented architecture where all the core functionality is delegated to specialized services:

- CalendarService - Handles basic calendar operations like getting month names
- DateSelectionService - Manages date selection logic
- DateValidationService - Validates dates against constraints
- DateFormattingService - Handles date formatting operations
- ViewStateService - Manages UI state and bindings
- EventManagerService - Manages event emission
- NavigationService - Handles calendar navigation operations
- ConstraintsService - Manages date constraints
- CalendarGeneratorService - Generates calendar days
- ConfigurationService - Manages calendar configuration options
