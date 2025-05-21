# Calendar Controller: Usage Guide

This guide provides comprehensive instructions for implementing and using the Calendar Controller in your applications.

## Getting Started

### Installation

Install the package from npm:

```bash
npm install @uplink-protocol/calendar-controller
```

### Basic Setup

```javascript
import { CalendarController } from '@uplink-protocol/calendar-controller';

// Create a new calendar controller with default settings
const calendar = CalendarController();

// Or with configuration options
const calendar = CalendarController({
  firstDayOfWeek: 1, // Monday
  dateFormat: 'MM/DD/YYYY',
  initialSelectedDate: new Date()
});
```

## Core Calendar Operations

### Date Selection

```javascript
// Select a specific date (year, month, day)
// Note: month is 0-indexed (0 = January, 11 = December)
calendar.methods.selectDate(2025, 4, 15); // Selects May 15, 2025

// Clear the current selection
calendar.methods.clearSelection();
```

### Date Range Selection

```javascript
// Enable date range selection mode
calendar.methods.setRangeSelectionMode(true);

// When in range selection mode, calling selectDate twice will select a range
// First call selects the start date, second call selects the end date
calendar.methods.selectDate(2025, 4, 10); // Start date: May 10, 2025
calendar.methods.selectDate(2025, 4, 15); // End date: May 15, 2025

// Disable range selection mode (back to single date selection)
calendar.methods.setRangeSelectionMode(false);
```

### Calendar Navigation

```javascript
// Navigate to the next month
calendar.methods.nextMonth();

// Navigate to the previous month
calendar.methods.prevMonth();

// Navigate to the next year
calendar.methods.nextYear();

// Navigate to the previous year
calendar.methods.prevYear();

// Navigate to the next year range (e.g., move from 2020-2029 to 2030-2039)
calendar.methods.nextYearRange();

// Navigate to the previous year range (e.g., move from 2020-2029 to 2010-2019)
calendar.methods.prevYearRange();

// Navigate to a specific month (0-indexed)
calendar.methods.goToMonth(6); // July

// Navigate to a specific year
calendar.methods.goToYear(2026);

// Navigate to a specific year range by specifying the base year
calendar.methods.goToYearRange(2030); // Goes to range starting with 2030

// Navigate to a specific date
calendar.methods.goToDate(new Date(2025, 11, 25)); // December 25, 2025

// Navigate to today
calendar.methods.goToToday();
```

### View Mode Selection

```javascript
// Select a specific month from the month view
// This updates the current date to that month and can be used to switch from month view to day view
calendar.methods.selectMonth(3, 2025); // Select April 2025

// Select a specific year from the year view
// This updates the current date to that year and can be used to switch from year view to month view
calendar.methods.selectYear(2026); // Select 2026
```

### Date Validation

```javascript
// Check if a date is disabled
const isDisabled = calendar.methods.isDateDisabled(new Date(2025, 4, 15));
if (!isDisabled) {
  // Date is valid, proceed with selection
}
```

## UI Integration

### Accessing Calendar State

The calendar state is accessible through reactive bindings:

```javascript
// Get the currently selected date
const selectedDate = calendar.bindings.selectedDate.get();

// Get the selected date range (when in range selection mode)
const dateRange = calendar.bindings.selectedDateRange.get();

// Get the current month and year being displayed
const currentMonth = calendar.bindings.currentMonth.get();
const currentYear = calendar.bindings.currentYear.get();
const monthName = calendar.bindings.monthName.get();
```

### Rendering the Calendar

```javascript
// Get calendar days for the current month view
const days = calendar.bindings.calendarDays.get();

// Get months for the month view
const months = calendar.bindings.calendarMonths.get();

// Get years for the year view
const years = calendar.bindings.calendarYears.get();

// Get information about the current year range
const yearRange = calendar.methods.getCurrentYearRange();
console.log(`Current year range: ${yearRange.startYear}-${yearRange.endYear}`);

// Set the year range size (number of years to display in year view)
calendar.methods.setYearRangeSize(16); // Display 16 years instead of default 12

// Render the calendar days
days.forEach(day => {
  const dayElement = document.createElement('div');
  dayElement.textContent = day.day;
  dayElement.classList.add('calendar-day');
  
  if (day.isCurrentMonth) dayElement.classList.add('current-month');
  if (day.isToday) dayElement.classList.add('today');
  if (day.isSelected) dayElement.classList.add('selected');
  if (day.isDisabled) dayElement.classList.add('disabled');
  if (day.isInRange) dayElement.classList.add('in-range');
  if (day.isRangeStart) dayElement.classList.add('range-start');
  if (day.isRangeEnd) dayElement.classList.add('range-end');
  
  // Add click handler
  dayElement.addEventListener('click', () => {
    if (!day.isDisabled && day.date) {
      calendar.methods.selectDate(
        day.date.getFullYear(),
        day.date.getMonth(),
        day.date.getDate()
      );
    }
  });
  
  // Add to calendar container
  calendarContainer.appendChild(dayElement);
});
```

### Subscribing to Calendar Changes

```javascript
// Subscribe to calendar day changes
calendar.bindings.calendarDays.subscribe(days => {
  // Re-render the calendar when the days change
  renderCalendar(days);
});

// Subscribe to selected date changes
calendar.bindings.selectedDate.subscribe(date => {
  if (date) {
    updateSelectedDateDisplay(date);
  }
});

// Subscribe to month name changes
calendar.bindings.monthName.subscribe(monthName => {
  document.getElementById('current-month').textContent = monthName;
});

// Subscribe to year changes
calendar.bindings.currentYear.subscribe(year => {
  document.getElementById('current-year').textContent = year;
});
```

### Handling Calendar Events

```javascript
// Listen for date selection events
calendar.events.dateSelected.subscribe(date => {
  console.log('Date selected:', date);
  // Update your UI here
});

// Listen for date range selection events
calendar.events.dateRangeSelected.subscribe(range => {
  console.log('Date range selected:', range);
  // Update your UI here
});

// Listen for month change events
calendar.events.monthChanged.subscribe(({ month, year }) => {
  console.log(`Month changed to ${month} ${year}`);
  // Update your UI here
});
```

## Complete HTML Example

Here's a minimal standalone HTML example to get started:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Date Picker</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
</head>
<body class="p-6 bg-gray-50">
  <div class="max-w-md mx-auto bg-white rounded-lg shadow">
    <!-- Calendar header -->
    <div class="p-4 flex justify-between items-center border-b">
      <button id="prevMonth" class="p-2 hover:bg-gray-100 rounded">
        <i class="fa-solid fa-chevron-left"></i>
      </button>
      <div>
        <span id="monthName" class="text-lg font-medium"></span>
        <span id="yearNumber" class="text-lg font-medium ml-1"></span>
      </div>
      <button id="nextMonth" class="p-2 hover:bg-gray-100 rounded">
        <i class="fa-solid fa-chevron-right"></i>
      </button>
    </div>
    
    <!-- Weekday header -->
    <div id="weekdays" class="grid grid-cols-7 text-center text-gray-500 p-2"></div>
    
    <!-- Calendar days -->
    <div id="calendarDays" class="grid grid-cols-7 text-center p-2"></div>
    
    <!-- Selected date display -->
    <div class="p-4 border-t">
      <div class="text-sm text-gray-500">Selected Date:</div>
      <div id="selectedDate" class="font-medium">None</div>
    </div>
  </div>

  <script type="module">
    // Import the Calendar Controller (using CDN for this example)
    import { CalendarController } from 'https://cdn.jsdelivr.net/npm/@uplink-protocol/calendar-controller/dist/index.js';
    
    // Initialize the calendar
    const calendar = CalendarController({
      firstDayOfWeek: 1, // Monday
      dateFormat: 'MM/DD/YYYY'
    });
    
    // DOM elements
    const monthNameElement = document.getElementById('monthName');
    const yearNumberElement = document.getElementById('yearNumber');
    const weekdaysElement = document.getElementById('weekdays');
    const calendarDaysElement = document.getElementById('calendarDays');
    const selectedDateElement = document.getElementById('selectedDate');
    const prevMonthButton = document.getElementById('prevMonth');
    const nextMonthButton = document.getElementById('nextMonth');
    
    // Initialize weekdays
    const weekdays = calendar.bindings.weekdays.get();
    weekdays.forEach(weekday => {
      const day = document.createElement('div');
      day.textContent = weekday.substring(0, 2); // Short weekday name
      weekdaysElement.appendChild(day);
    });
    
    // Render calendar days
    function renderCalendarDays(days) {
      calendarDaysElement.innerHTML = '';
      
      days.forEach(day => {
        const dayElement = document.createElement('button');
        dayElement.textContent = day.day;
        dayElement.className = 'w-full h-10 flex items-center justify-center';
        
        if (!day.isCurrentMonth) {
          dayElement.classList.add('text-gray-300');
        }
        if (day.isToday) {
          dayElement.classList.add('bg-gray-100');
        }
        if (day.isSelected) {
          dayElement.classList.add('bg-blue-500', 'text-white', 'font-bold', 'rounded-full');
        }
        if (day.isDisabled) {
          dayElement.classList.add('text-gray-300', 'cursor-not-allowed');
          dayElement.disabled = true;
        }
        
        dayElement.addEventListener('click', () => {
          if (day.date) {
            calendar.methods.selectDate(
              day.date.getFullYear(),
              day.date.getMonth(),
              day.date.getDate()
            );
          }
        });
        
        calendarDaysElement.appendChild(dayElement);
      });
    }
    
    // Subscribe to calendar changes
    calendar.bindings.monthName.subscribe(value => {
      monthNameElement.textContent = value;
    });
    
    calendar.bindings.currentYear.subscribe(value => {
      yearNumberElement.textContent = value;
    });
    
    calendar.bindings.calendarDays.subscribe(days => {
      renderCalendarDays(days);
    });
    
    calendar.bindings.selectedDate.subscribe(date => {
      selectedDateElement.textContent = date 
        ? date.toLocaleDateString() 
        : 'None';
    });
    
    // Set up button handlers
    prevMonthButton.addEventListener('click', () => {
      calendar.methods.prevMonth();
    });
    
    nextMonthButton.addEventListener('click', () => {
      calendar.methods.nextMonth();
    });
  </script>
</body>
</html>
```

## Framework Integration Examples

### React Integration

```jsx
import React, { useEffect, useState, useRef } from 'react';
import { CalendarController } from '@uplink-protocol/calendar-controller';

function DatePicker() {
  const calendarRef = useRef(null);
  const [days, setDays] = useState([]);
  const [monthName, setMonthName] = useState('');
  const [year, setYear] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  
  useEffect(() => {
    // Initialize calendar controller
    calendarRef.current = CalendarController({
      firstDayOfWeek: 1,
      dateFormat: 'MM/DD/YYYY'
    });
    
    // Set up subscriptions
    const subscriptions = [
      calendarRef.current.bindings.calendarDays.subscribe(setDays),
      calendarRef.current.bindings.monthName.subscribe(setMonthName),
      calendarRef.current.bindings.currentYear.subscribe(setYear),
      calendarRef.current.bindings.selectedDate.subscribe(setSelectedDate)
    ];
    
    // Clean up subscriptions
    return () => {
      subscriptions.forEach(sub => sub.unsubscribe());
    };
  }, []);
  
  const handleDateClick = (day) => {
    if (day.date && !day.isDisabled) {
      calendarRef.current.methods.selectDate(
        day.date.getFullYear(),
        day.date.getMonth(),
        day.date.getDate()
      );
    }
  };
  
  return (
    <div className="calendar-wrapper">
      <div className="calendar-header">
        <button onClick={() => calendarRef.current.methods.prevMonth()}>
          Previous
        </button>
        <div>
          {monthName} {year}
        </div>
        <button onClick={() => calendarRef.current.methods.nextMonth()}>
          Next
        </button>
      </div>
      
      <div className="calendar-grid">
        {days.map((day, index) => (
          <div
            key={index}
            className={`calendar-day ${day.isToday ? 'today' : ''} ${
              day.isSelected ? 'selected' : ''
            } ${day.isCurrentMonth ? '' : 'other-month'} ${
              day.isDisabled ? 'disabled' : ''
            }`}
            onClick={() => handleDateClick(day)}
          >
            {day.day}
          </div>
        ))}
      </div>
      
      {selectedDate && (
        <div className="selected-date">
          Selected: {selectedDate.toLocaleDateString()}
        </div>
      )}
    </div>
  );
}

export default DatePicker;
```

### Vue.js Integration

```vue
<template>
  <div class="calendar-wrapper">
    <div class="calendar-header">
      <button @click="prevMonth">Previous</button>
      <div>{{ monthName }} {{ year }}</div>
      <button @click="nextMonth">Next</button>
    </div>
    
    <div class="calendar-grid">
      <div 
        v-for="(day, index) in days" 
        :key="index"
        :class="{
          'calendar-day': true,
          'today': day.isToday,
          'selected': day.isSelected,
          'other-month': !day.isCurrentMonth,
          'disabled': day.isDisabled
        }"
        @click="handleDateClick(day)"
      >
        {{ day.day }}
      </div>
    </div>
    
    <div v-if="selectedDate" class="selected-date">
      Selected: {{ formatDate(selectedDate) }}
    </div>
  </div>
</template>

<script>
import { CalendarController } from '@uplink-protocol/calendar-controller';

export default {
  data() {
    return {
      calendar: null,
      days: [],
      monthName: '',
      year: '',
      selectedDate: null,
      subscriptions: []
    };
  },
  
  mounted() {
    this.initCalendar();
  },
  
  beforeUnmount() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  },
  
  methods: {
    initCalendar() {
      this.calendar = CalendarController({
        firstDayOfWeek: 1,
        dateFormat: 'MM/DD/YYYY'
      });
      
      // Set up subscriptions
      this.subscriptions = [
        this.calendar.bindings.calendarDays.subscribe(days => this.days = days),
        this.calendar.bindings.monthName.subscribe(name => this.monthName = name),
        this.calendar.bindings.currentYear.subscribe(year => this.year = year),
        this.calendar.bindings.selectedDate.subscribe(date => this.selectedDate = date)
      ];
    },
    
    handleDateClick(day) {
      if (day.date && !day.isDisabled) {
        this.calendar.methods.selectDate(
          day.date.getFullYear(),
          day.date.getMonth(),
          day.date.getDate()
        );
      }
    },
    
    prevMonth() {
      this.calendar.methods.prevMonth();
    },
    
    nextMonth() {
      this.calendar.methods.nextMonth();
    },
    
    formatDate(date) {
      return date.toLocaleDateString();
    }
  }
};
</script>
```

## Advanced Configuration

### Date Constraints

```javascript
// Create a calendar with constrained dates
const calendar = CalendarController({
  // Min date: January 1, 2025
  minDate: new Date(2025, 0, 1),
  
  // Max date: December 31, 2025
  maxDate: new Date(2025, 11, 31),
  
  // Disabled dates (e.g., holidays)
  disabledDates: [
    new Date(2025, 11, 25), // Christmas
    new Date(2025, 0, 1),   // New Year's Day
  ]
});
```

### Custom Date Formatting

```javascript
// Create a calendar with custom date formatting
const calendar = CalendarController({
  // Format string follows common patterns
  // YYYY = 4-digit year, MM = 2-digit month, DD = 2-digit day
  dateFormat: 'YYYY-MM-DD' // e.g., 2025-05-15
});

// Or use a different format
const calendar = CalendarController({
  dateFormat: 'DD/MM/YYYY' // e.g., 15/05/2025
});
```

### Calendar View Options

```javascript
// Create a calendar that starts the week on Monday
const calendar = CalendarController({
  firstDayOfWeek: 1 // 0 = Sunday, 1 = Monday, 6 = Saturday
});

// Create a calendar that hides days from adjacent months
const calendar = CalendarController({
  hideOtherMonthDays: true
});
```

## Troubleshooting

### Calendar Not Updating

If the calendar view isn't updating when you make changes:

1. Make sure you've set up subscriptions to the appropriate bindings
2. Check that your event handlers are calling the correct calendar methods
3. Verify that your rendering logic correctly processes the calendar day properties

### Date Selection Issues

If dates aren't being selected correctly:

1. Check that you're passing the correct year, month, and day parameters
2. Verify that the date isn't disabled due to constraints
3. Ensure you're using the correct month index (remember: January = 0, December = 11)

### Date Format Problems

If dates aren't formatting as expected:

1. Check your dateFormat configuration
2. Remember that MM = month, DD = day, YYYY = 4-digit year
3. Consider using the native Date.toLocaleDateString() method for locale-aware formatting
