**@uplink-protocol/form-controller v0.3.0**

***

# Calendar & Time Controller

A flexible calendar and time picker API supporting both calendar and time selection integrations for any JavaScript framework or library.

> **Latest Release (v0.2.3)**: Added comprehensive Time Controller with full time picker functionality alongside the existing Calendar Controller.

## Features

### Calendar Controller
- Multiple view modes (day, month, and year views)
- Date selection (single date and date range)
- Year range navigation for efficient date picking
- **Disabled weekdays** - Disable specific days of the week across all calendar views
- Date constraints (min/max dates, disabled specific dates)
- Internationalization support with locale-specific date formats
- Flexible configuration options
- Service-oriented architecture
- Framework agnostic

### Time Controller ✨ **NEW**
- Time selection (single time and time range)
- 12/24 hour format support
- Precision control (hours, minutes, seconds, milliseconds)
- Time navigation with keyboard support
- Time constraints and validation
- Accessibility features with focus management
- Locale-aware time formatting
- Reactive state bindings
- Complete service-oriented architecture

## Usage

### Calendar Controller

```javascript
import { CalendarController } from '@uplink-protocol/calendar-controller';

// Create a new calendar controller
const calendar = CalendarController({
  firstDayOfWeek: 1, // Monday
  dateFormat: 'MM/DD/YYYY',
  initialSelectedDate: new Date(),
  disabledDaysOfWeek: [0, 6] // Disable weekends
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

// Manage disabled weekdays dynamically
calendar.methods.setDisabledDaysOfWeek([0, 6]); // Disable weekends
calendar.methods.addDisabledDayOfWeek(1); // Also disable Monday
calendar.methods.removeDisabledDayOfWeek(0); // Re-enable Sunday
```

### Time Controller ✨ **NEW**

```javascript
import { TimeController } from '@uplink-protocol/calendar-controller';

// Create a new time controller
const timeController = TimeController({
  use12HourFormat: true,
  showSeconds: true,
  locale: 'en-US',
  minuteStep: 15
});

// Select a time
timeController.selectTime(9, 30, 0); // 9:30:00 AM

// Get reactive bindings
const selectedTime = timeController.bindings.selectedTime.get();
const formattedTime = timeController.methods.getFormattedTime();

// Navigate time
timeController.goToNextHour();
timeController.goToPreviousMinute();

// Time range selection
timeController.setRangeSelectionMode(true);
timeController.selectTime(9, 0);  // Start time
timeController.selectTime(17, 30); // End time

// Time constraints
timeController.setMinTime(new Date(2024, 0, 1, 9, 0));  // 9:00 AM
timeController.setMaxTime(new Date(2024, 0, 1, 17, 0)); // 5:00 PM
timeController.setDisabledHours([12, 13]); // Lunch break
const disabledDays = calendar.methods.getDisabledDaysOfWeek(); // Get current disabled days
```

### Disabled Weekdays

Disable specific days of the week across all calendar views:

```javascript
// Disable weekends for business applications
const businessCalendar = CalendarController({
  disabledDaysOfWeek: [0, 6] // 0 = Sunday, 6 = Saturday
});

// Disable specific business days
const customSchedule = CalendarController({
  disabledDaysOfWeek: [1, 3] // Monday and Wednesday
});

// Dynamic management
businessCalendar.methods.setDisabledDaysOfWeek([0, 5, 6]); // Weekends + Friday
businessCalendar.methods.addDisabledDayOfWeek(1); // Add Monday
businessCalendar.methods.removeDisabledDayOfWeek(5); // Remove Friday
```

[See full documentation →](_media/disabled-weekdays.md)

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

## Examples

The package includes comprehensive examples demonstrating various features and use cases:

- **[Basic Calendar](examples/calendar/)** - Simple calendar implementation
- **[Date Picker](examples/date-picker/)** - Full-featured date picker with modern styling
- **[Disabled Weekdays](examples/disabled-weekdays/)** - Business rules and weekday restrictions 
- **[Internationalization](examples/i18n/)** - Multi-language support
- **[Multi-view Calendar](examples/multi-view-calendar/)** - Day, month, and year views
- **[Comprehensive Demo](examples/comprehensive-date-picker/)** - Advanced features showcase

### Running Examples

All examples work directly in the browser without build tools:

```bash
# Clone the repository
git clone https://github.com/jmkcoder/uplink-protocol-calendar.git
cd uplink-protocol-calendar

# Open any example in your browser
# e.g., open examples/date-picker/index.html
```

## Documentation

### Comprehensive Guides
- **[Calendar Controller Usage Guide](_media/usage-guide.md)** - Complete calendar implementation guide
- **[Time Controller Guide](_media/time-controller-guide.md)** - Complete time picker implementation guide ✨ **NEW**
- **[Technical Architecture](_media/technical-guide.md)** - Service-oriented architecture details
- **[TypeScript Usage](_media/typescript-usage.md)** - TypeScript integration guide
- **[Internationalization Guide](_media/internationalization-guide.md)** - Multi-language support
- **[Features Guide](_media/features-guide.md)** - Advanced features and examples

### API Reference
- **[API Documentation](docs/api/)** - Complete API reference with examples
- **[Calendar Controller API](_media/CalendarControllerClass.md)** - Calendar controller methods
- **[Time Controller API](_media/TimeControllerClass.md)** - Time controller methods ✨ **NEW**

### v0.2.3 Improvements

- Added comprehensive Time Controller with full time picker functionality
- Complete service-oriented architecture for time operations
- Full TypeScript support with comprehensive type definitions
- 24 comprehensive tests ensuring reliability
- Reactive bindings for real-time UI updates
- Accessibility features with focus management
