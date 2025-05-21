# Calendar Controller

A flexible calendar API supporting both calendar and date-picker integrations for any JavaScript framework or library.

## Features

- Multiple view modes (day, month, and year views)
- Date selection (single date and date range)
- Year range navigation for efficient date picking
- Internationalization support with locale-specific date formats
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

// Use the calendar API for date selection
calendar.methods.selectDate(2025, 4, 15);

// Work with different view modes
const days = calendar.bindings.calendarDays.get(); // Day view
const months = calendar.bindings.calendarMonths.get(); // Month view
const years = calendar.bindings.calendarYears.get(); // Year view

// Navigate between view modes
calendar.methods.selectMonth(3, 2025); // Select April 2025 in month view
calendar.methods.selectYear(2026); // Select 2026 in year view

// Navigate year ranges
calendar.methods.nextYearRange(); // Move to next decade
calendar.methods.prevYearRange(); // Move to previous decade
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

## Internationalization

The calendar supports internationalization with the following features:

- **Localized Month Names**: Month names are displayed according to the selected locale
- **Localized Weekday Names**: Weekday names are displayed according to the selected locale
- **Locale-based Date Formatting**: Dates can be formatted according to the locale conventions
- **RTL Support**: Right-to-left languages are supported via the browser's localization

### Configuration

```javascript
// Internationalization options
const calendar = CalendarController({
  // Set locale (any valid BCP 47 language tag)
  locale: 'ja-JP', // Japanese
  
  // Optional date format options (Intl.DateTimeFormat options)
  dateFormatOptions: {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'short'
  }
});
```

### Changing Locale Dynamically

```javascript
// Change locale at runtime
calendar.methods.setLocale('ar-EG'); // Arabic (Egypt)

// Update date format options
calendar.methods.setDateFormatOptions({ 
  year: 'numeric',
  month: 'short',
  day: '2-digit'
});
```

### Example

See the full example of internationalization usage in the [i18n example](examples/i18n/index.html).
