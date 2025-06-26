# Disabled Weekdays Feature

The disabled weekdays feature allows you to disable specific days of the week across all calendar views (days, months, years). This is useful for business applications, appointment scheduling, and any scenario where certain days should not be selectable.

> **Note**: Version 0.2.1 fixed function scope issues in the disabled-weekdays example. All button handlers now properly work in browser environments without "function is not defined" errors.

## Overview

- **Days of Week**: Represented as numbers 0-6 (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
- **Scope**: Applied globally across all calendar views
- **Validation**: Automatically filters invalid day numbers and duplicates
- **Combination**: Works seamlessly with other date constraints (min/max dates, disabled specific dates)

## Basic Usage

### Initial Configuration

```typescript
import { CalendarController } from '@odyssey/date-picker';

// Disable weekends (Saturday and Sunday)
const calendar = new CalendarController('#date-input', {
    disabledDaysOfWeek: [0, 6] // 0 = Sunday, 6 = Saturday
});

// Disable specific business days
const businessCalendar = new CalendarController('#business-date', {
    disabledDaysOfWeek: [1, 3] // Monday and Wednesday
});

// Disable all weekdays (only weekends selectable)
const weekendOnlyCalendar = new CalendarController('#weekend-date', {
    disabledDaysOfWeek: [1, 2, 3, 4, 5] // Monday through Friday
});
```

### Dynamic Management

```typescript
// Set disabled days (replaces existing)
calendar.setDisabledDaysOfWeek([0, 6]); // Weekends only

// Add individual days
calendar.addDisabledDayOfWeek(1); // Add Monday
calendar.addDisabledDayOfWeek(5); // Add Friday

// Remove individual days
calendar.removeDisabledDayOfWeek(0); // Remove Sunday

// Get current disabled days
const disabledDays = calendar.getDisabledDaysOfWeek();
console.log('Disabled days:', disabledDays); // [1, 5, 6]
```

## API Reference

### CalendarOptions

```typescript
interface CalendarOptions {
    disabledDaysOfWeek?: number[]; // Array of day numbers (0-6)
    // ... other options
}
```

### CalendarController Methods

```typescript
class CalendarController {
    // Set disabled days of week (replaces existing array)
    setDisabledDaysOfWeek(days: number[]): number[];
    
    // Add a single day to disabled days
    addDisabledDayOfWeek(day: number): number[];
    
    // Remove a single day from disabled days
    removeDisabledDayOfWeek(day: number): number[];
    
    // Get current disabled days of week
    getDisabledDaysOfWeek(): number[];
}
```

### Day Number Reference

| Day | Number | 
|-----|--------|
| Sunday | 0 |
| Monday | 1 |
| Tuesday | 2 |
| Wednesday | 3 |
| Thursday | 4 |
| Friday | 5 |
| Saturday | 6 |

## Common Use Cases

### 1. Business Hours (Weekdays Only)

```typescript
const businessCalendar = new CalendarController('#appointment-date', {
    disabledDaysOfWeek: [0, 6], // Disable weekends
    minDate: new Date(), // Only future dates
    onDateSelect: (date) => {
        console.log('Business day selected:', date);
    }
});
```

### 2. Service Availability

```typescript
// Service available Tuesday, Thursday, Saturday only
const serviceCalendar = new CalendarController('#service-date', {
    disabledDaysOfWeek: [0, 1, 3, 5], // Disable Sun, Mon, Wed, Fri
    onDateSelect: (date) => {
        scheduleService(date);
    }
});
```

### 3. Maintenance Windows

```typescript
// No deployments on Fridays and weekends
const deploymentCalendar = new CalendarController('#deployment-date', {
    disabledDaysOfWeek: [0, 5, 6], // Disable Fri, Sat, Sun
    disabledDates: getHolidayDates(), // Also disable holidays
});
```

### 4. Educational Calendar

```typescript
// School days only (no weekends)
const schoolCalendar = new CalendarController('#class-date', {
    disabledDaysOfWeek: [0, 6], // No weekends
    minDate: new Date(2024, 8, 1), // School year start
    maxDate: new Date(2025, 5, 30), // School year end
    disabledDates: getSchoolHolidays()
});
```

### 5. Dynamic Business Rules

```typescript
class BusinessRuleManager {
    constructor(calendarSelector) {
        this.calendar = new CalendarController(calendarSelector, {
            disabledDaysOfWeek: []
        });
    }
    
    // Apply different rules based on business type
    applyBusinessHours(businessType) {
        switch (businessType) {
            case 'retail':
                this.calendar.setDisabledDaysOfWeek([]); // Open all days
                break;
            case 'office':
                this.calendar.setDisabledDaysOfWeek([0, 6]); // Weekdays only
                break;
            case 'restaurant':
                this.calendar.setDisabledDaysOfWeek([1]); // Closed Mondays
                break;
            case 'medical':
                this.calendar.setDisabledDaysOfWeek([0]); // Closed Sundays
                break;
        }
    }
    
    // Seasonal adjustments
    applySummerSchedule() {
        this.calendar.addDisabledDayOfWeek(5); // Close Fridays in summer
    }
    
    applyWinterSchedule() {
        this.calendar.removeDisabledDayOfWeek(5); // Reopen Fridays
    }
}
```

## Advanced Examples

### Combining with Other Constraints

```typescript
const appointmentCalendar = new CalendarController('#appointment', {
    // Date range constraints
    minDate: new Date(),
    maxDate: new Date(2025, 11, 31),
    
    // Weekday constraints
    disabledDaysOfWeek: [0, 6], // No weekends
    
    // Specific date constraints
    disabledDates: [
        new Date(2024, 11, 25), // Christmas
        new Date(2024, 11, 26), // Boxing Day
        new Date(2025, 0, 1),   // New Year
        ...getCompanyHolidays()
    ],
    
    // Callback when valid date selected
    onDateSelect: (date) => {
        if (isBusinessDay(date)) {
            bookAppointment(date);
        }
    }
});
```

### Interactive Configuration UI

```typescript
class CalendarConfigUI {
    constructor() {
        this.calendar = new CalendarController('#configurable-calendar');
        this.setupUI();
    }
    
    setupUI() {
        // Create checkboxes for each day
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const container = document.getElementById('day-checkboxes');
        
        days.forEach((dayName, index) => {
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `day-${index}`;
            checkbox.value = index;
            checkbox.addEventListener('change', () => this.updateDisabledDays());
            
            const label = document.createElement('label');
            label.htmlFor = `day-${index}`;
            label.textContent = dayName;
            
            container.appendChild(checkbox);
            container.appendChild(label);
        });
    }
    
    updateDisabledDays() {
        const checkboxes = document.querySelectorAll('#day-checkboxes input:checked');
        const disabledDays = Array.from(checkboxes).map(cb => parseInt(cb.value));
        this.calendar.setDisabledDaysOfWeek(disabledDays);
        
        this.updateStatusDisplay(disabledDays);
    }
    
    updateStatusDisplay(disabledDays) {
        const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const disabledNames = disabledDays.map(day => dayNames[day]);
        
        document.getElementById('status').textContent = 
            disabledNames.length ? 
            `Disabled: ${disabledNames.join(', ')}` : 
            'All days enabled';
    }
    
    // Preset configurations
    presetWeekends() {
        this.setCheckboxes([0, 6]);
        this.updateDisabledDays();
    }
    
    presetWeekdays() {
        this.setCheckboxes([1, 2, 3, 4, 5]);
        this.updateDisabledDays();
    }
    
    clearAll() {
        this.setCheckboxes([]);
        this.updateDisabledDays();
    }
    
    setCheckboxes(days) {
        document.querySelectorAll('#day-checkboxes input').forEach(cb => {
            cb.checked = days.includes(parseInt(cb.value));
        });
    }
}
```

## Validation and Error Handling

The disabled weekdays feature includes automatic validation:

```typescript
// Invalid day numbers are filtered out
calendar.setDisabledDaysOfWeek([0, 7, -1, 6, 15]); 
// Result: [0, 6] (only valid days 0-6 are kept)

// Duplicates are automatically removed
calendar.setDisabledDaysOfWeek([1, 1, 2, 2, 3]);
// Result: [1, 2, 3]

// Adding existing day has no effect
calendar.setDisabledDaysOfWeek([1, 2]);
calendar.addDisabledDayOfWeek(1); // No change
// Result: [1, 2]

// Removing non-existent day has no effect  
calendar.removeDisabledDayOfWeek(5); // No change if 5 wasn't disabled
```

## Testing

The feature includes comprehensive test coverage:

- **Validation Tests**: Ensure only valid day numbers (0-6) are accepted
- **Management Tests**: Verify add/remove operations work correctly
- **Integration Tests**: Test interaction with other date constraints
- **Calendar Generation Tests**: Verify disabled days appear correctly in calendar views
- **Edge Case Tests**: Handle empty arrays, invalid inputs, and boundary conditions

Run the tests:
```bash
npm test
```

## Browser Support

The disabled weekdays feature works in all modern browsers that support:
- ES6 Arrays and Array methods
- Date object and `getDay()` method
- Standard DOM events

## Performance Considerations

- **Efficient Filtering**: Day validation uses Set operations for O(1) lookups
- **Minimal Recalculation**: Calendar only regenerates when disabled days change
- **Memory Efficient**: Stores only the day numbers, not full date objects
- **Batch Operations**: Use `setDisabledDaysOfWeek()` for multiple changes instead of multiple `addDisabledDayOfWeek()` calls

## Migration Guide

If upgrading from a version without disabled weekdays support:

### From Custom Implementation

```typescript
// Before (custom implementation)
const isWeekend = (date) => {
    const day = date.getDay();
    return day === 0 || day === 6;
};

const calendar = new CalendarController('#date-input', {
    customValidation: (date) => !isWeekend(date)
});

// After (built-in feature)
const calendar = new CalendarController('#date-input', {
    disabledDaysOfWeek: [0, 6]
});
```

### Adding to Existing Calendar

```typescript
// Existing calendar instance
const existingCalendar = new CalendarController('#date-input', {
    minDate: new Date(),
    maxDate: new Date(2025, 11, 31)
});

// Add disabled weekdays
existingCalendar.setDisabledDaysOfWeek([0, 6]);
```

## Best Practices

1. **Use Meaningful Constants**:
   ```typescript
   const WEEKENDS = [0, 6];
   const WEEKDAYS = [1, 2, 3, 4, 5];
   const BUSINESS_DAYS = [1, 2, 3, 4, 5];
   
   calendar.setDisabledDaysOfWeek(WEEKENDS);
   ```

2. **Provide User Feedback**:
   ```typescript
   calendar.setDisabledDaysOfWeek([0, 6]);
   showNotification('Weekends are now disabled');
   ```

3. **Document Business Rules**:
   ```typescript
   // Business rule: No appointments on weekends or Fridays
   // Fridays are reserved for internal meetings
   calendar.setDisabledDaysOfWeek([0, 5, 6]);
   ```

4. **Combine with Validation**:
   ```typescript
   calendar.setDisabledDaysOfWeek([0, 6]);
   calendar.onDateSelect = (date) => {
       if (isHoliday(date)) {
           showError('Selected date is a holiday');
           return;
       }
       processSelection(date);
   };
   ```

5. **Save User Preferences**:
   ```typescript
   const savedDisabledDays = localStorage.getItem('disabledDays');
   if (savedDisabledDays) {
       calendar.setDisabledDaysOfWeek(JSON.parse(savedDisabledDays));
   }
   
   // Save when changed
   calendar.onDisabledDaysChange = (days) => {
       localStorage.setItem('disabledDays', JSON.stringify(days));
   };
   ```
