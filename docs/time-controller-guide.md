# Time Controller Documentation

## Overview

The Time Controller is a comprehensive time picker component that provides functionality for time selection, navigation, and display. It follows the same service-oriented architecture as the Calendar Controller and provides a consistent API for time-related operations.

## Features

- ✅ **Time Selection**: Single time or time range selection
- ✅ **12/24 Hour Format**: Support for both time formats
- ✅ **Precision Control**: Hours, minutes, seconds, and milliseconds
- ✅ **Navigation**: Intuitive time navigation with keyboard support
- ✅ **Validation**: Time constraints and validation
- ✅ **Accessibility**: Full accessibility support with focus management
- ✅ **Internationalization**: Locale-aware formatting
- ✅ **Reactive Bindings**: Real-time UI updates
- ✅ **Service Architecture**: Modular, testable service-based design

## Quick Start

```typescript
import { TimeController } from '@uplink-protocol/calendar-controller';

// Create a basic time controller
const timeController = TimeController({
  use12HourFormat: true,
  showSeconds: true,
  locale: 'en-US'
});

// Select a time
timeController.selectTime(9, 30, 0); // 9:30:00 AM

// Get the formatted time
const formattedTime = timeController.methods.getFormattedTime();
console.log(formattedTime); // "9:30:00 AM"
```

## Configuration Options

```typescript
interface TimeOptions {
  use12HourFormat?: boolean;          // Use 12-hour format (default: false)
  showSeconds?: boolean;              // Show seconds (default: false)
  showMilliseconds?: boolean;         // Show milliseconds (default: false)
  minuteStep?: number;                // Minute increment step (default: 1)
  locale?: string;                    // Locale for formatting (default: 'en-US')
  isRangeSelection?: boolean;         // Enable range selection (default: false)
  minTime?: Date;                     // Minimum selectable time
  maxTime?: Date;                     // Maximum selectable time
  disabledHours?: number[];           // Disabled hours array
  initialTime?: Date;                 // Initial selected time
}
```

## Reactive Bindings

The Time Controller provides reactive bindings that automatically update when the state changes:

```typescript
// Current time state
timeController.bindings.selectedTime.get();     // Selected time as Date
timeController.bindings.selectedTimeRange.get(); // Selected time range

// Time segments
timeController.bindings.currentHour.get();      // Current hour (0-23)
timeController.bindings.currentMinute.get();    // Current minute (0-59)
timeController.bindings.currentSecond.get();    // Current second (0-59)
timeController.bindings.currentMillisecond.get(); // Current millisecond (0-999)

// 12-hour format specific
timeController.bindings.currentHour12.get();    // Hour in 12-hour format (1-12)
timeController.bindings.currentPeriod.get();    // 'AM' or 'PM'

// Time segments arrays for UI
timeController.bindings.timeSegments.get();     // Array of time segments
timeController.bindings.hourSegments.get();     // Available hour options
timeController.bindings.minuteSegments.get();   // Available minute options

// Focus and accessibility
timeController.bindings.focusedSegment.get();   // Currently focused segment
```

## Methods

### Time Selection
```typescript
// Select a specific time
timeController.selectTime(hours, minutes, seconds?, milliseconds?);

// Select time from Date object
timeController.selectTimeFromDate(date);

// Clear selection
timeController.clearSelection();

// Set individual segments
timeController.setHour(hour);
timeController.setMinute(minute);
timeController.setSecond(second);
timeController.setMillisecond(millisecond);
timeController.setPeriod('AM' | 'PM'); // 12-hour format only
```

### Time Navigation
```typescript
// Navigate time segments
timeController.goToNextHour();
timeController.goToPreviousHour();
timeController.goToNextMinute();
timeController.goToPreviousMinute();
timeController.goToNextSecond();
timeController.goToPreviousSecond();

// Navigate to current time
timeController.goToCurrentTime();
```

### Time Formatting
```typescript
// Get formatted time string
timeController.getFormattedTime();

// Parse time string
timeController.parseTime(timeString);

// Validate time
timeController.isTimeValid(date);
timeController.isTimeInRange(date);
```

### Configuration
```typescript
// Update configuration
timeController.setTimeFormat('12' | '24');
timeController.setShowSeconds(true);
timeController.setShowMilliseconds(true);
timeController.setMinuteStep(15);
timeController.setLocale('en-US');

// Time constraints
timeController.setMinTime(date);
timeController.setMaxTime(date);
timeController.setDisabledHours([0, 1, 2, 22, 23]);
```

### Focus Management
```typescript
// Focus management
timeController.setFocusedSegment('hours' | 'minutes' | 'seconds' | 'period');
timeController.clearFocusedSegment();
timeController.moveFocusToNextSegment();
timeController.moveFocusToPreviousSegment();
```

## Events

Subscribe to time controller events:

```typescript
// Time selection events
timeController.events.timeSelected.subscribe((time: Date) => {
  console.log('Time selected:', time);
});

timeController.events.timeRangeSelected.subscribe((range: TimeRange) => {
  console.log('Time range selected:', range);
});

// Navigation events
timeController.events.timeChanged.subscribe((time: Date) => {
  console.log('Time changed:', time);
});

// Focus events
timeController.events.segmentFocused.subscribe((segment: string) => {
  console.log('Segment focused:', segment);
});

// Format events
timeController.events.formatChanged.subscribe((format: '12' | '24') => {
  console.log('Format changed:', format);
});
```

## Advanced Usage

### Range Selection
```typescript
const timeController = TimeController({
  isRangeSelection: true
});

// Select start time
timeController.selectTime(9, 0); // 9:00 AM

// Select end time
timeController.selectTime(17, 30); // 5:30 PM

// Get range
const range = timeController.bindings.selectedTimeRange.get();
console.log(range); // { startTime: Date, endTime: Date }
```

### Custom Validation
```typescript
const timeController = TimeController({
  minTime: new Date(2024, 0, 1, 9, 0),  // 9:00 AM
  maxTime: new Date(2024, 0, 1, 17, 0), // 5:00 PM
  disabledHours: [12, 13] // Lunch hours
});

// Check if time is valid
const isValid = timeController.isTimeValid(new Date(2024, 0, 1, 12, 30));
console.log(isValid); // false (lunch hour disabled)
```

### Integration with UI Frameworks

#### React Example
```tsx
import React, { useEffect, useState } from 'react';
import { TimeController } from '@uplink-protocol/calendar-controller';

function TimePicker() {
  const [timeController] = useState(() => TimeController({
    use12HourFormat: true,
    showSeconds: true
  }));
  
  const [selectedTime, setSelectedTime] = useState(null);
  
  useEffect(() => {
    const unsubscribe = timeController.events.timeSelected.subscribe(setSelectedTime);
    return unsubscribe;
  }, [timeController]);
  
  return (
    <div>
      <p>Selected: {selectedTime?.toLocaleTimeString()}</p>
      <button onClick={() => timeController.selectTime(9, 30)}>
        Select 9:30 AM
      </button>
    </div>
  );
}
```

## Architecture

The Time Controller follows a service-oriented architecture with specialized services:

- **TimeService**: Core time operations and utilities
- **TimeSelectionService**: Handles time selection logic
- **TimeFormattingService**: Locale-aware time formatting
- **TimeValidationService**: Time constraint validation
- **TimeViewStateService**: Reactive state management
- **TimeEventManagerService**: Event emission and handling
- **TimeNavigationService**: Time navigation and focus
- **TimeConstraintsService**: Time constraint management
- **TimeConfigurationService**: Configuration management
- **TimeGeneratorService**: Time segment generation

## Testing

The Time Controller includes comprehensive tests:

```bash
npm test -- src/Time/__tests__/time-controller.test.ts
```

All 24 tests pass, covering:
- Basic functionality
- Time selection
- Navigation
- Formatting
- Configuration
- Focus management
- Validation
- Range selection

## TypeScript Support

Full TypeScript support with comprehensive type definitions:

```typescript
import type {
  TimeController,
  TimeControllerInterface,
  TimeOptions,
  TimeRange,
  TimeSegment,
  TimeControllerBindings,
  TimeControllerMethods,
  TimeControllerEvents
} from '@uplink-protocol/calendar-controller';
```

## Browser Support

- Modern browsers with ES2015+ support
- IE11+ (with polyfills)
- Node.js 14+

## Related Documentation

- [Calendar Controller Documentation](./usage-guide.md)
- [Technical Guide](./technical-guide.md)
- [TypeScript Usage](./typescript-usage.md)
- [API Reference](./api/)
