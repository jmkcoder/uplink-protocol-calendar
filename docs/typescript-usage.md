# Calendar Controller: TypeScript Usage Guide

This guide provides detailed examples of using the Calendar Controller in TypeScript projects, focusing on type definitions, interfaces, and TypeScript-specific features.

> **Latest Version (v0.2.1)**: Enhanced example compatibility and improved TypeScript definitions for better development experience.

## Installation

Install the package from npm:

```bash
npm install @uplink-protocol/calendar-controller
```

## Basic TypeScript Usage

### Importing Types and Controller

```typescript
import { 
  CalendarController, 
  CalendarOptions, 
  CalendarDate,
  DateRange 
} from '@uplink-protocol/calendar-controller';
```

### Creating a Calendar Controller with TypeScript

```typescript
// Define options with proper typing
const options: CalendarOptions = {
  firstDayOfWeek: 1, // Monday
  dateFormat: 'MM/DD/YYYY',
  initialSelectedDate: new Date(),
  minDate: new Date(2025, 0, 1),
  maxDate: new Date(2025, 11, 31)
};

// Create the controller
const calendar = CalendarController(options);
```

### Working with Multiple View Modes

```typescript
import { 
  CalendarController, 
  CalendarDate,
  CalendarMonth,
  CalendarYear,
  YearRange
} from '@uplink-protocol/calendar-controller';

// Create the controller
const calendar = CalendarController();

// Working with the day view (default)
const days: CalendarDate[] = calendar.bindings.calendarDays.get();

// Working with the month view
const months: CalendarMonth[] = calendar.bindings.calendarMonths.get();
const handleMonthClick = (month: CalendarMonth): void => {
  if (!month.isDisabled) {
    calendar.methods.selectMonth(month.month, month.year);
  }
};

// Working with the year view
const years: CalendarYear[] = calendar.bindings.calendarYears.get();
const handleYearClick = (year: CalendarYear): void => {
  if (!year.isDisabled) {
    calendar.methods.selectYear(year.year);
  }
};

// Working with year ranges
const yearRange: YearRange = calendar.methods.getCurrentYearRange();
console.log(`Displaying years ${yearRange.startYear} to ${yearRange.endYear}`);

// Navigate between year ranges
calendar.methods.nextYearRange(); // Move to next range (e.g., 2020-2031 to 2032-2043)
calendar.methods.prevYearRange(); // Move to previous range
calendar.methods.goToYearRange(2050); // Go to specific range starting with 2050
```

### Working with Calendar Dates

```typescript
// The CalendarDate interface provides type safety
const handleDateClick = (calendarDate: CalendarDate): void => {
  if (!calendarDate.isDisabled) {
    calendar.methods.selectDate(
      calendarDate.year!, 
      calendarDate.month!, 
      calendarDate.day
    );
  }
};
```

### Handling Date Ranges

```typescript
// Set range selection mode
calendar.methods.setRangeSelectionMode(true);

// Access the selected date range with proper typing
const updateDateRangeDisplay = (): void => {
  const dateRange: DateRange = calendar.bindings.selectedDateRange.get();
  
  if (dateRange.startDate && dateRange.endDate) {
    console.log(`Selected range: ${dateRange.startDate} to ${dateRange.endDate}`);
  } else if (dateRange.startDate) {
    console.log(`Start date selected: ${dateRange.startDate}`);
  }
};
```

## Advanced TypeScript Features

### Using Event Typing

```typescript
// Add strong typing to event handlers
calendar.events.dateSelected.subscribe((date: Date) => {
  console.log(`Selected date: ${date.toLocaleDateString()}`);
});

calendar.events.dateRangeSelected.subscribe((range: DateRange) => {
  if (range.startDate && range.endDate) {
    const start = range.startDate.toLocaleDateString();
    const end = range.endDate.toLocaleDateString();
    console.log(`Range: ${start} to ${end}`);
  }
});
```

### Creating Custom Calendar Configuration

```typescript
// Extend the base options with custom properties
interface EnhancedCalendarOptions extends CalendarOptions {
  theme?: 'light' | 'dark' | 'custom';
  customClasses?: {
    selected?: string;
    today?: string;
    disabled?: string;
  };
}

// Create a function that uses your extended options
function createThemedCalendar(options: EnhancedCalendarOptions) {
  const calendar = CalendarController({
    firstDayOfWeek: options.firstDayOfWeek,
    dateFormat: options.dateFormat,
    initialSelectedDate: options.initialSelectedDate,
    // Other standard options
  });
  
  // Apply custom theming (implementation depends on your UI framework)
  
  return calendar;
}
```

### Type-Safe Access to Calendar Bindings

```typescript
// Get calendar days with proper typing
const renderCalendar = (): void => {
  const days: CalendarDate[] = calendar.bindings.calendarDays.get();
  
  days.forEach(day => {
    // TypeScript provides intellisense for all properties
    const classNames = [
      day.isCurrentMonth ? 'current-month' : 'other-month',
      day.isToday ? 'today' : '',
      day.isSelected ? 'selected' : '',
      day.isDisabled ? 'disabled' : ''
    ].filter(Boolean).join(' ');
    
    // Render your UI with the day data
  });
};
```

### Using Type Guards for Date Ranges

```typescript
// Type guard to check if a date range is fully selected
function isCompleteRange(range: DateRange): range is Required<DateRange> {
  return range.startDate !== null && range.endDate !== null;
}

// Usage
calendar.events.dateRangeSelected.subscribe((range: DateRange) => {
  if (isCompleteRange(range)) {
    // TypeScript now knows both startDate and endDate are not null
    const days = (range.endDate.getTime() - range.startDate.getTime()) 
      / (1000 * 60 * 60 * 24);
    console.log(`Selected range spans ${days} days`);
  }
});
```

## Integration with React and TypeScript

```tsx
import React, { useEffect, useState } from 'react';
import { 
  CalendarController, 
  CalendarOptions, 
  CalendarDate 
} from '@uplink-protocol/calendar-controller';

const DatePickerComponent: React.FC = () => {
  const [calendar, setCalendar] = useState<ReturnType<typeof CalendarController> | null>(null);
  const [calendarDays, setCalendarDays] = useState<CalendarDate[]>([]);
  
  useEffect(() => {
    // Initialize calendar controller
    const options: CalendarOptions = {
      firstDayOfWeek: 1,
      dateFormat: 'MM/DD/YYYY'
    };
    
    const calendarInstance = CalendarController(options);
    
    // Set up binding subscription
    const subscription = calendarInstance.bindings.calendarDays.subscribe(days => {
      setCalendarDays(days);
    });
    
    setCalendar(calendarInstance);
    
    // Clean up subscription
    return () => subscription.unsubscribe();
  }, []);
  
  // Render calendar UI with TypeScript type safety
  return (
    <div className="calendar">
      {calendar && (
        <>
          <div className="calendar-header">
            <button onClick={() => calendar.methods.prevMonth()}>Previous</button>
            <span>
              {calendar.bindings.monthName.get()} {calendar.bindings.currentYear.get()}
            </span>
            <button onClick={() => calendar.methods.nextMonth()}>Next</button>
          </div>
          
          <div className="calendar-grid">
            {calendarDays.map((day, index) => (
              <div 
                key={index}
                className={`calendar-day ${day.isToday ? 'today' : ''} ${day.isSelected ? 'selected' : ''}`}
                onClick={() => day.date && calendar.methods.selectDate(
                  day.date.getFullYear(),
                  day.date.getMonth(),
                  day.date.getDate()
                )}
              >
                {day.day}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default DatePickerComponent;
```

## Using TypeScript Decorators with Calendar Controller

If you're using TypeScript decorators in your project (with appropriate configuration):

```typescript
// Example decorator to log calendar method calls
function LogMethod() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    
    descriptor.value = function(...args: any[]) {
      console.log(`Called ${propertyKey} with arguments:`, args);
      return originalMethod.apply(this, args);
    };
    
    return descriptor;
  };
}

// Extended calendar controller with logging
class LoggingCalendarController {
  private controller;
  
  constructor(options?: CalendarOptions) {
    this.controller = CalendarController(options);
  }
  
  @LogMethod()
  selectDate(year: number, month: number, day: number): void {
    this.controller.methods.selectDate(year, month, day);
  }
  
  // Other methods...
}
```

## TypeScript Declaration Files

The package includes comprehensive TypeScript declarations, providing full IntelliSense support in compatible editors like Visual Studio Code.
