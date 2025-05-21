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

## UI Integration

The examples provided showcase integration with:

- **Tailwind CSS** - For responsive, utility-first styling
- **Font Awesome** - For beautiful, scalable icons

### Tailwind CSS Setup

```html
<!-- Include Tailwind CSS -->
<script src="https://cdn.tailwindcss.com"></script>
<script>
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          primary: '#007bff',
          'primary-light': '#e6f2ff'
        }
      }
    }
  }
</script>
```

### Font Awesome Setup

```html
<!-- Include Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
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

## Configuration Options

The following configuration options can be provided when creating a new calendar controller:

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `minDate` | Date | null | Minimum selectable date |
| `maxDate` | Date | null | Maximum selectable date |
| `disabledDates` | Date[] | [] | Array of specific dates to disable |
| `initialSelectedDate` | Date | null | Pre-selected date when calendar loads |
| `firstDayOfWeek` | number | 0 | First day of week (0 = Sunday, 1 = Monday, etc.) |
| `dateFormat` | string | null | Date format string (e.g., 'MM/DD/YYYY') |
| `hideOtherMonthDays` | boolean | false | When true, hides days from previous and next months in the current month view |

### Example with hideOtherMonthDays

```javascript
// Create a calendar that hides days from other months
const calendar = CalendarController({
  firstDayOfWeek: 1,
  dateFormat: 'MM/DD/YYYY',
  hideOtherMonthDays: true // Only show days from the current month
});
```
