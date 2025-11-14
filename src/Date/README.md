# Calendar Controller Architecture - Developer Guide

## Overview

The Calendar Controller is built on a **Service-Coordinator-Controller** architecture that separates concerns into three distinct layers:

1. **Services**: Low-level operations (date manipulation, validation, formatting)
2. **Coordinators**: Business logic and state orchestration
3. **Controller**: Public API facade that delegates to coordinators

This architecture ensures maintainability, testability, and clear separation of concerns.

---

## Directory Structure

```
src/Date/
├── controller.ts              # Main orchestrator (public API)
├── coordinators/              # Business logic layer
│   ├── state-manager.ts
│   ├── bindings-coordinator.ts
│   ├── navigation-coordinator.ts
│   ├── selection-coordinator.ts
│   ├── constraints-coordinator.ts
│   ├── focus-coordinator.ts
│   ├── formatting-coordinator.ts
│   ├── localization-coordinator.ts
│   ├── configuration-coordinator.ts
│   ├── view-generation-coordinator.ts
│   ├── calendar-generator-coordinator.ts
│   ├── utility-coordinator.ts
│   └── controller-initializer.ts
├── services/                  # Low-level operations
├── interfaces/                # TypeScript interfaces
├── types/                     # Type definitions
└── utils/                     # Utility functions
```

---

## Architecture Layers

### 1. Controller Layer (controller.ts)

**Purpose**: Pure orchestration - no business logic

The controller is a thin facade that:
- Exposes the public API
- Delegates all operations to coordinators
- Maintains backward compatibility
- Acts as the single entry point

**Usage Example**:
```typescript
// Controller delegates to coordinators
public goToMonth(month: number, year: number): void {
  this.navigationCoordinator.goToMonth(month, year);
}

public selectDate(date: Date): void {
  this.selectionCoordinator.selectDate(date);
}
```

**Key Principle**: The controller contains ZERO business logic. It only delegates.

---

### 2. Coordinators Layer

Coordinators handle business logic and orchestrate services. Each coordinator has a single, well-defined responsibility.

#### **StateManager** (`state-manager.ts`)

**Responsibility**: Centralized state management

**Manages**:
- Current date (`_currentDate`)
- Selected date/range (`_selectedDate`, `_selectedDateRange`)
- Focused date (`_focusedDate`)
- Constraints (`_minDate`, `_maxDate`, `_disabledDates`)
- Configuration (`_locale`, `_dateFormat`, `_firstDayOfWeek`)
- Year ranges (`_yearRangeSize`, `_currentYearRangeBase`)

**Usage**:
```typescript
// Get state
const currentDate = stateManager.currentDate;
const selectedDate = stateManager.selectedDate;

// Set state
stateManager.currentDate = new Date(2024, 5, 15);
stateManager.selectedDate = new Date(2024, 5, 20);

// Check state
if (stateManager.isRangeSelection) {
  const range = stateManager.selectedDateRange;
}
```

**Key Methods**:
- Getters/setters for all state properties
- Type-safe state access
- State validation built-in

---

#### **NavigationCoordinator** (`navigation-coordinator.ts`)

**Responsibility**: Calendar navigation operations

**Handles**:
- Month navigation (previous/next)
- Year navigation
- Direct date navigation
- Year range navigation
- Navigation constraint checking

**Usage**:
```typescript
// Navigate months
navigationCoordinator.goToMonth(5, 2024); // Go to June 2024
navigationCoordinator.goToNextMonth();
navigationCoordinator.goToPreviousMonth();

// Navigate years
navigationCoordinator.goToYear(2025);
navigationCoordinator.goToNextYear();
navigationCoordinator.goToPreviousYear();

// Navigate to specific date
navigationCoordinator.goToDate(new Date(2024, 11, 25));

// Navigate today
navigationCoordinator.goToToday();

// Year range navigation
navigationCoordinator.goToNextYearRange();
navigationCoordinator.goToPreviousYearRange();
navigationCoordinator.goToYearRange(2020, 2029);
```

**Key Features**:
- Validates navigation against constraints (min/max dates)
- Updates state through StateManager
- Triggers binding updates via BindingsCoordinator
- Emits navigation events

---

#### **SelectionCoordinator** (`selection-coordinator.ts`)

**Responsibility**: Date selection logic

**Handles**:
- Single date selection
- Date range selection
- Month selection
- Year selection
- Selection validation

**Usage**:
```typescript
// Single date selection
selectionCoordinator.selectDate(new Date(2024, 5, 15));

// Range selection (when isRangeSelection is true)
selectionCoordinator.selectDate(new Date(2024, 5, 1));  // Start
selectionCoordinator.selectDate(new Date(2024, 5, 10)); // End

// Month selection
selectionCoordinator.selectMonth(5, 2024);

// Year selection
selectionCoordinator.selectYear(2024);

// Clear selection
selectionCoordinator.clearSelection();
```

**Key Features**:
- Validates selection against constraints
- Handles single and range selection modes
- Updates state automatically
- Emits selection events
- Integrates with FocusCoordinator

---

#### **ConstraintsCoordinator** (`constraints-coordinator.ts`)

**Responsibility**: Date constraint management

**Handles**:
- Min/max date constraints
- Disabled dates
- Disabled days of week
- Constraint validation

**Usage**:
```typescript
// Set date range constraints
constraintsCoordinator.setMinDate(new Date(2024, 0, 1));
constraintsCoordinator.setMaxDate(new Date(2024, 11, 31));

// Clear constraints
constraintsCoordinator.clearMinDate();
constraintsCoordinator.clearMaxDate();

// Disable specific dates
const disabledDates = [
  new Date(2024, 5, 15),
  new Date(2024, 5, 20)
];
constraintsCoordinator.setDisabledDates(disabledDates);
constraintsCoordinator.clearDisabledDates();

// Disable days of week (0 = Sunday, 6 = Saturday)
constraintsCoordinator.setDisabledDaysOfWeek([0, 6]); // Disable weekends
constraintsCoordinator.clearDisabledDaysOfWeek();

// Check if date is disabled
const isDisabled = constraintsCoordinator.isDateDisabled(someDate);
```

**Key Features**:
- Validates dates against all constraints
- Updates dependent coordinators automatically
- Re-generates calendar views when constraints change
- Prevents invalid selections

---

#### **FocusCoordinator** (`focus-coordinator.ts`)

**Responsibility**: Focus management and keyboard navigation

**Handles**:
- Focus state management
- Keyboard navigation (arrow keys)
- Focus movement in all directions
- Accessibility support

**Usage**:
```typescript
// Set focus
focusCoordinator.focusDate(new Date(2024, 5, 15));

// Keyboard navigation
focusCoordinator.moveFocusLeft();   // Previous day
focusCoordinator.moveFocusRight();  // Next day
focusCoordinator.moveFocusUp();     // Previous week
focusCoordinator.moveFocusDown();   // Next week

// Advanced movement
focusCoordinator.moveFocusToStartOfWeek();
focusCoordinator.moveFocusToEndOfWeek();
focusCoordinator.moveFocusToStartOfMonth();
focusCoordinator.moveFocusToEndOfMonth();

// Page navigation
focusCoordinator.moveFocusPageUp();   // Previous month
focusCoordinator.moveFocusPageDown(); // Next month

// Select focused date
focusCoordinator.selectFocusedDate();
```

**Key Features**:
- Respects constraints during navigation
- Wraps to next/previous month when needed
- Updates focused date in StateManager
- Integrates with SelectionCoordinator

---

#### **FormattingCoordinator** (`formatting-coordinator.ts`)

**Responsibility**: Date formatting operations

**Handles**:
- Date formatting
- Locale-aware formatting
- Custom format patterns
- Accessibility labels

**Usage**:
```typescript
// Format dates
const formatted = formattingCoordinator.formatDate(new Date(2024, 5, 15));
// Output: "6/15/2024" or "15/6/2024" depending on locale

// Format with custom pattern
formattingCoordinator.setDateFormat("MMMM d, yyyy");
// Output: "June 15, 2024"

// Get accessibility label
const label = formattingCoordinator.getAccessibilityLabel(date);
// Output: "Saturday, June 15, 2024"

// Parse date strings
const parsed = formattingCoordinator.parseDate("2024-06-15");
```

**Key Features**:
- Uses DateFormattingService internally
- Respects locale settings
- Supports custom format options
- Generates accessibility-friendly labels

---

#### **LocalizationCoordinator** (`localization-coordinator.ts`)

**Responsibility**: Localization and internationalization

**Handles**:
- Locale management
- Translated labels (month names, day names)
- First day of week configuration
- Number formatting

**Usage**:
```typescript
// Set locale
localizationCoordinator.setLocale("fr-FR");

// Get localized content
const monthNames = localizationCoordinator.getMonthNames();
// ["janvier", "février", "mars", ...]

const dayNames = localizationCoordinator.getDayNames();
// ["dimanche", "lundi", "mardi", ...]

const shortDayNames = localizationCoordinator.getShortDayNames();
// ["dim.", "lun.", "mar.", ...]

// First day of week
localizationCoordinator.setFirstDayOfWeek(1); // Monday
```

**Supported Locales**:
- en-US (English - United States)
- en-GB (English - United Kingdom)
- es-ES (Spanish - Spain)
- fr-FR (French - France)
- de-DE (German - Germany)
- it-IT (Italian - Italy)
- pt-BR (Portuguese - Brazil)
- ja-JP (Japanese - Japan)
- zh-CN (Chinese - China)
- ...and more

---

#### **BindingsCoordinator** (`bindings-coordinator.ts`)

**Responsibility**: Reactive binding management

**Handles**:
- Binding initialization
- Binding updates
- Batch update optimization
- Binding synchronization

**Usage**:
```typescript
// Initialize bindings (done automatically)
bindingsCoordinator.initializeBindings();

// Update bindings
bindingsCoordinator.updateBinding("currentMonth");
bindingsCoordinator.updateBinding("selectedDate");

// Update all bindings
bindingsCoordinator.updateAllBindings();

// Batch updates (more efficient)
bindingsCoordinator.executeBatchedBindingUpdates();
```

**Available Bindings**:
- `currentMonth`: Current calendar month data
- `currentYear`: Current year
- `selectedDate`: Selected date
- `selectedMonth`: Selected month
- `selectedYear`: Selected year
- `calendarYearsList`: List of years for year picker
- `formattedDate`: Formatted selected date
- ...and more

**Key Features**:
- Automatic batching for performance
- Dependency tracking
- Selective updates
- Integration with Uplink binding system

---

#### **ViewGenerationCoordinator** (`view-generation-coordinator.ts`)

**Responsibility**: Calendar view generation

**Handles**:
- Month view generation
- Year view generation
- Date list generation
- View state management

**Usage**:
```typescript
// Generate month view
const monthView = viewGenerationCoordinator.generateCurrentMonthView();
// Returns: CalendarMonth with weeks and days

// Generate year view
const yearView = viewGenerationCoordinator.generateCurrentYearView();
// Returns: CalendarYear with months

// Generate date list for current month
const dates = viewGenerationCoordinator.generateCurrentMonthDates();
// Returns: CalendarDate[]

// Get specific month
const juneData = viewGenerationCoordinator.getMonth(5, 2024);
```

**CalendarMonth Structure**:
```typescript
{
  month: 5,          // 0-based
  year: 2024,
  weeks: [           // Array of weeks
    {
      weekNumber: 23,
      days: [        // Array of 7 days
        {
          date: Date,
          day: 9,
          month: 5,
          year: 2024,
          isToday: false,
          isSelected: false,
          isDisabled: false,
          isOtherMonth: false,
          isFocused: false,
          isInRange: false,
          isRangeStart: false,
          isRangeEnd: false
        },
        // ... 6 more days
      ]
    },
    // ... more weeks
  ]
}
```

---

#### **CalendarGeneratorCoordinator** (`calendar-generator-coordinator.ts`)

**Responsibility**: Calendar data structure generation

**Handles**:
- Calendar grid generation
- Week structure
- Day metadata (today, selected, disabled)
- Range highlighting

**Usage**:
```typescript
// Generate calendar for specific month
const calendar = calendarGeneratorCoordinator.generateCalendar(5, 2024);

// Generate with custom options
const calendar = calendarGeneratorCoordinator.generateCalendarWithOptions({
  month: 5,
  year: 2024,
  firstDayOfWeek: 1,
  minDate: new Date(2024, 0, 1),
  maxDate: new Date(2024, 11, 31),
  hideOtherMonthDays: true
});
```

**Key Features**:
- Generates complete calendar structure
- Applies constraints and disabled dates
- Highlights selected dates and ranges
- Handles month transitions
- Configurable first day of week

---

#### **ConfigurationCoordinator** (`configuration-coordinator.ts`)

**Responsibility**: Configuration management

**Handles**:
- Configuration loading
- Configuration validation
- Default values
- Configuration updates

**Usage**:
```typescript
// Apply configuration
configurationCoordinator.applyConfiguration({
  locale: "fr-FR",
  dateFormat: "DD/MM/YYYY",
  firstDayOfWeek: 1,
  hideOtherMonthDays: true,
  isRangeSelection: false,
  yearRangeSize: 12
});

// Update specific setting
configurationCoordinator.updateSetting("locale", "de-DE");

// Get current configuration
const config = configurationCoordinator.getConfiguration();
```

---

#### **UtilityCoordinator** (`utility-coordinator.ts`)

**Responsibility**: Utility operations and helper methods

**Handles**:
- Date comparisons
- Date calculations
- Helper functions
- Common operations

**Usage**:
```typescript
// Date operations
const isEqual = utilityCoordinator.areDatesEqual(date1, date2);
const isInRange = utilityCoordinator.isDateInRange(date, startDate, endDate);

// Get date info
const daysInMonth = utilityCoordinator.getDaysInMonth(5, 2024);
const dayOfWeek = utilityCoordinator.getDayOfWeek(new Date());

// Date manipulation
const nextDay = utilityCoordinator.addDays(date, 1);
const prevMonth = utilityCoordinator.addMonths(date, -1);
```

---

#### **ControllerInitializer** (`controller-initializer.ts`)

**Responsibility**: Controller initialization

**Handles**:
- Service instantiation
- Coordinator instantiation
- Wiring dependencies
- Initial state setup

**Usage**:
```typescript
// Initialization happens automatically in controller constructor
// You typically don't interact with this directly

// But internally it does:
const initializer = new ControllerInitializer(controller);
initializer.initialize();
```

---

### 3. Services Layer

Services provide low-level, reusable operations with no state.

#### Key Services:

- **CalendarService**: Date utilities and calendar operations
- **DateFormattingService**: Date formatting and parsing
- **DateSelectionService**: Selection logic and validation
- **ConstraintsService**: Constraint checking
- **NavigationService**: Navigation utilities
- **LocalizationService**: Localization data and formatting
- **AccessibilityService**: Accessibility features
- **EventManagerService**: Event emission

**Services vs Coordinators**:
- Services are stateless, pure functions
- Coordinators have state and orchestrate services
- Services can be used independently
- Coordinators use services to implement business logic

---

## Usage Patterns

### Basic Usage

```typescript
import { CalendarControllerClass } from "./controller";

// Create controller instance
const calendar = new CalendarControllerClass();

// Navigate
calendar.goToMonth(5, 2024);
calendar.goToNextMonth();
calendar.goToToday();

// Select dates
calendar.selectDate(new Date(2024, 5, 15));

// Set constraints
calendar.setMinDate(new Date(2024, 0, 1));
calendar.setMaxDate(new Date(2024, 11, 31));

// Set locale
calendar.setLocale("fr-FR");

// Get calendar data
const month = calendar.generateCurrentMonthView();
const formatted = calendar.formatDate(new Date());
```

---

### Range Selection

```typescript
// Enable range selection
calendar.setRangeSelection(true);

// Select start date
calendar.selectDate(new Date(2024, 5, 1));

// Select end date
calendar.selectDate(new Date(2024, 5, 15));

// Get selected range
const range = calendar.getSelectedDateRange();
// { start: Date(2024-06-01), end: Date(2024-06-15) }

// Clear selection
calendar.clearSelection();
```

---

### Keyboard Navigation

```typescript
// Focus a date
calendar.focusDate(new Date(2024, 5, 15));

// Use arrow keys (typically bound to keyboard events)
calendar.moveFocusLeft();   // ←
calendar.moveFocusRight();  // →
calendar.moveFocusUp();     // ↑
calendar.moveFocusDown();   // ↓

// Jump to start/end
calendar.moveFocusToStartOfWeek();  // Home
calendar.moveFocusToEndOfWeek();    // End

// Page through months
calendar.moveFocusPageUp();    // Page Up
calendar.moveFocusPageDown();  // Page Down

// Select focused date
calendar.selectFocusedDate();  // Enter/Space
```

---

### Event Handling

```typescript
// Events are emitted automatically by coordinators
// Subscribe via the Uplink event system

// Available events:
// - monthChanged: { month: number, year: number }
// - yearChanged: { year: number }
// - dateSelected: { date: Date }
// - rangeSelected: { start: Date, end: Date }
// - dateHovered: { date: Date }
// - focusChanged: { date: Date }
```

---

### Constraints

```typescript
// Disable weekends
calendar.setDisabledDaysOfWeek([0, 6]);

// Disable specific dates
calendar.setDisabledDates([
  new Date(2024, 5, 15),
  new Date(2024, 5, 20)
]);

// Set date range
calendar.setMinDate(new Date(2024, 0, 1));
calendar.setMaxDate(new Date(2024, 11, 31));

// Check if date is selectable
const canSelect = !calendar.isDateDisabled(someDate);
```

---

### Localization

```typescript
// Set locale
calendar.setLocale("es-ES");

// Configure first day of week
calendar.setFirstDayOfWeek(1); // Monday

// Get localized names
const monthNames = calendar.getMonthNames();
const dayNames = calendar.getDayNames();

// Format with locale
const formatted = calendar.formatDate(new Date());
// Automatically uses current locale
```

---

## Testing

### Unit Testing Coordinators

Each coordinator can be tested independently:

```typescript
import { NavigationCoordinator } from "./coordinators/navigation-coordinator";
import { CalendarStateManager } from "./coordinators/state-manager";

describe("NavigationCoordinator", () => {
  let coordinator: NavigationCoordinator;
  let stateManager: CalendarStateManager;

  beforeEach(() => {
    stateManager = new CalendarStateManager();
    coordinator = new NavigationCoordinator(
      stateManager,
      mockServices,
      mockController
    );
  });

  it("should navigate to next month", () => {
    stateManager.currentDate = new Date(2024, 5, 15);
    coordinator.goToNextMonth();
    expect(stateManager.currentDate.getMonth()).toBe(6);
  });
});
```

---

## Best Practices

### 1. **Always Use Coordinators, Not Services Directly**

❌ Don't:
```typescript
// Directly using service
this.calendarService.someOperation();
```

✅ Do:
```typescript
// Use coordinator
this.navigationCoordinator.goToMonth(5, 2024);
```

### 2. **Access State Through StateManager**

❌ Don't:
```typescript
// Direct property access
this._currentDate = new Date();
```

✅ Do:
```typescript
// Through StateManager
this.stateManager.currentDate = new Date();
```

### 3. **Let Coordinators Handle Updates**

❌ Don't:
```typescript
// Manual state update + binding update
this.stateManager.currentDate = new Date();
this.bindingsCoordinator.updateBinding("currentMonth");
```

✅ Do:
```typescript
// Coordinator handles both
this.navigationCoordinator.goToDate(new Date());
```

### 4. **Use Batch Updates for Performance**

✅ Do:
```typescript
// Multiple updates in one go
this.navigationCoordinator.goToMonth(5, 2024);
this.selectionCoordinator.selectDate(new Date(2024, 5, 15));
// BindingsCoordinator automatically batches updates
```

---

## Performance Considerations

1. **Binding Updates Are Batched**: Multiple state changes trigger only one binding update cycle
2. **Calendar Generation Is Cached**: Month views are cached until state changes
3. **Constraint Checks Are Optimized**: Disabled dates use Set for O(1) lookup
4. **Lazy Evaluation**: Views are generated only when requested

---

## Extending the System

### Adding a New Coordinator

1. Create new coordinator file in `coordinators/`
2. Extend base coordinator functionality
3. Inject required services and StateManager
4. Add to controller and wire dependencies
5. Update `coordinators/index.ts`

Example:
```typescript
// coordinators/custom-coordinator.ts
export class CustomCoordinator {
  constructor(
    private stateManager: CalendarStateManager,
    private someService: ISomeService,
    private controller: CalendarControllerInterface
  ) {}

  public doSomething(): void {
    // Your logic here
  }
}

// controller.ts
import { CustomCoordinator } from "./coordinators/custom-coordinator";

class CalendarControllerClass {
  private customCoordinator!: CustomCoordinator;

  constructor() {
    this.customCoordinator = new CustomCoordinator(
      this.stateManager,
      this.someService,
      this
    );
  }

  public doSomething(): void {
    this.customCoordinator.doSomething();
  }
}
```

---

## Debugging

### Enable Logging

Coordinators emit events that can be logged:

```typescript
// Subscribe to events for debugging
controller.on("monthChanged", (data) => {
  console.log("Month changed:", data);
});

controller.on("dateSelected", (data) => {
  console.log("Date selected:", data);
});
```

### Inspect State

```typescript
// Access state manager for debugging
const state = {
  currentDate: controller.stateManager.currentDate,
  selectedDate: controller.stateManager.selectedDate,
  focusedDate: controller.stateManager.focusedDate,
  isRangeSelection: controller.stateManager.isRangeSelection
};
console.log("Current state:", state);
```

---

## Common Issues

### Issue: Bindings Not Updating

**Solution**: Ensure coordinators call `updateAllBindings()` or specific binding updates

### Issue: Date Selection Not Working

**Solution**: Check constraints (min/max dates, disabled dates)

### Issue: Navigation Stuck

**Solution**: Verify min/max date constraints aren't preventing navigation

### Issue: Locale Not Applied

**Solution**: Ensure locale is set before generating views

---

## Migration Guide

If you're upgrading from the old monolithic controller:

### Old Way:
```typescript
controller._currentDate = new Date();
controller._selectedDate = new Date();
controller.updateAllBindings();
```

### New Way:
```typescript
controller.goToDate(new Date());
controller.selectDate(new Date());
// Bindings update automatically
```

The public API remains mostly unchanged, but internal architecture is completely refactored.

---

## Summary

The Calendar Controller uses a three-layer architecture:

1. **Controller** (Thin orchestrator): Public API, delegates everything
2. **Coordinators** (Business logic): State management, operations, validation
3. **Services** (Utilities): Low-level, stateless operations

This separation provides:
- ✅ Clear responsibilities
- ✅ Easy testing
- ✅ Better maintainability
- ✅ Improved performance
- ✅ Extensibility

---

## Quick Reference

### Navigation Operations
| Task | Coordinator | Method |
|------|-------------|--------|
| Navigate to specific month | Navigation | `goToMonth(month, year)` |
| Navigate to specific year | Navigation | `goToYear(year)` |
| Navigate to specific date | Navigation | `goToDate(date)` |
| Go to next month | Navigation | `goToNextMonth()` |
| Go to previous month | Navigation | `goToPreviousMonth()` |
| Go to next year | Navigation | `goToNextYear()` |
| Go to previous year | Navigation | `goToPreviousYear()` |
| Go to today | Navigation | `goToToday()` |
| Go to next year range | Navigation | `goToNextYearRange()` |
| Go to previous year range | Navigation | `goToPreviousYearRange()` |

### Selection Operations
| Task | Coordinator | Method |
|------|-------------|--------|
| Select a date | Selection | `selectDate(date)` |
| Select month | Selection | `selectMonth(month, year)` |
| Select year | Selection | `selectYear(year)` |
| Clear selection | Selection | `clearSelection()` |
| Set range selection mode | Selection | `setRangeSelectionMode(isRange)` |
| Get selected date | StateManager | `selectedDate` |
| Get selected range | StateManager | `selectedDateRange` |

### Constraint Management
| Task | Coordinator | Method |
|------|-------------|--------|
| Set minimum date | Constraints | `setMinDate(date)` |
| Set maximum date | Constraints | `setMaxDate(date)` |
| Clear minimum date | Constraints | `clearMinDate()` |
| Clear maximum date | Constraints | `clearMaxDate()` |
| Set disabled dates | Constraints | `setDisabledDates(dates[])` |
| Add disabled date | Constraints | `addDisabledDate(date)` |
| Remove disabled date | Constraints | `removeDisabledDate(date)` |
| Clear disabled dates | Constraints | `clearDisabledDates()` |
| Set disabled days of week | Constraints | `setDisabledDaysOfWeek(days[])` |
| Clear disabled days | Constraints | `clearDisabledDaysOfWeek()` |
| Check if date disabled | Utility | `isDateDisabled(date)` |

### Focus & Keyboard Navigation
| Task | Coordinator | Method |
|------|-------------|--------|
| Focus a date | Focus | `focusDate(date)` |
| Set focused date | Focus | `setFocusedDate(date)` |
| Clear focused date | Focus | `clearFocusedDate()` |
| Move focus left (←) | Focus | `moveFocusLeft()` |
| Move focus right (→) | Focus | `moveFocusRight()` |
| Move focus up (↑) | Focus | `moveFocusUp()` |
| Move focus down (↓) | Focus | `moveFocusDown()` |
| Move to start of week (Home) | Focus | `moveFocusToStartOfWeek()` |
| Move to end of week (End) | Focus | `moveFocusToEndOfWeek()` |
| Move to start of month | Focus | `moveFocusToStartOfMonth()` |
| Move to end of month | Focus | `moveFocusToEndOfMonth()` |
| Move focus page up (PgUp) | Focus | `moveFocusPageUp()` |
| Move focus page down (PgDn) | Focus | `moveFocusPageDown()` |
| Select focused date | Focus | `selectFocusedDate()` |
| Get accessible date label | Focus | `getAccessibleDateLabel(date)` |
| Get date state description | Focus | `getDateStateDescription(date)` |

### Formatting Operations
| Task | Coordinator | Method |
|------|-------------|--------|
| Format date | Formatting | `formatDate(date)` |
| Format with options | Formatting | `formatDateWithOptions(date, options)` |
| Get formatted date | Formatting | `getFormattedDate()` |
| Set date format | Formatting | `setDateFormat(format)` |
| Get date format | Formatting | `getDateFormat()` |
| Set date format options | Formatting | `setDateFormatOptions(options)` |
| Get date format options | Formatting | `getDateFormatOptions()` |
| Parse date string | Formatting | `parseDate(dateString)` |

### Localization Operations
| Task | Coordinator | Method |
|------|-------------|--------|
| Set locale | Localization | `setLocale(locale)` |
| Get locale | Localization | `getLocale()` |
| Get month names | Localization | `getMonthNames()` |
| Get short month names | Localization | `getShortMonthNames()` |
| Get day names | Localization | `getDayNames()` |
| Get short day names | Localization | `getShortDayNames()` |
| Get narrow day names | Localization | `getNarrowDayNames()` |
| Set first day of week | Localization | `setFirstDayOfWeek(day)` |
| Get first day of week | Localization | `getFirstDayOfWeek()` |
| Set hide other month days | Localization | `setHideOtherMonthDays(hide)` |
| Get hide other month days | Localization | `getHideOtherMonthDays()` |

### View Generation
| Task | Coordinator | Method |
|------|-------------|--------|
| Generate month view | ViewGeneration | `generateCurrentMonthView()` |
| Generate year view | ViewGeneration | `generateCurrentYearView()` |
| Generate calendar days | ViewGeneration | `generateCalendarDays()` |
| Generate calendar months | ViewGeneration | `generateCalendarMonths()` |
| Generate calendar years | ViewGeneration | `generateCalendarYears()` |
| Get current month data | CalendarGenerator | `generateCalendarDays()` |
| Get year months data | CalendarGenerator | `generateCalendarMonths()` |
| Get year range data | CalendarGenerator | `generateCalendarYears()` |

### Binding Management
| Task | Coordinator | Method |
|------|-------------|--------|
| Update all bindings | Bindings | `updateAllBindings()` |
| Update specific binding | Bindings | `updateBinding(name)` |
| Batch binding updates | Bindings | `executeBatchedBindingUpdates()` |
| Initialize bindings | Bindings | `initializeBindings()` |

### Configuration
| Task | Coordinator | Method |
|------|-------------|--------|
| Apply options | Configuration | `applyOptions(options)` |
| Set year range size | Configuration | `setYearRangeSize(size)` |
| Get year range size | Configuration | `getYearRangeSize()` |
| Set range selection mode | Configuration | `setRangeSelectionMode(isRange)` |

### Utility Operations
| Task | Coordinator | Method |
|------|-------------|--------|
| Check if date disabled | Utility | `isDateDisabled(date)` |
| Check if date is today | Utility | `isToday(date)` |
| Get week number | Utility | `getWeekNumber(date)` |
| Get disabled dates | Utility | `getDisabledDates()` |
| Get disabled days of week | Utility | `getDisabledDaysOfWeek()` |
| Check if date in range | Utility | `isDateInRange(date, start, end)` |
| Check if same day | Utility | `isSameDay(date1, date2)` |
| Check if same month | Utility | `isSameMonth(date1, date2)` |
| Check if same year | Utility | `isSameYear(date1, date2)` |
| Add days to date | Utility | `addDays(date, days)` |
| Add months to date | Utility | `addMonths(date, months)` |
| Add years to date | Utility | `addYears(date, years)` |
| Get days in month | Utility | `getDaysInMonth(month, year)` |
| Get start of month | Utility | `getStartOfMonth(date)` |
| Get end of month | Utility | `getEndOfMonth(date)` |
| Get start of week | Utility | `getStartOfWeek(date)` |
| Get end of week | Utility | `getEndOfWeek(date)` |

### State Access
| Task | Coordinator | Property |
|------|-------------|----------|
| Get current date | StateManager | `currentDate` |
| Set current date | StateManager | `currentDate = date` |
| Get selected date | StateManager | `selectedDate` |
| Set selected date | StateManager | `selectedDate = date` |
| Get selected range | StateManager | `selectedDateRange` |
| Set selected range | StateManager | `selectedDateRange = range` |
| Get focused date | StateManager | `focusedDate` |
| Set focused date | StateManager | `focusedDate = date` |
| Get min date | StateManager | `minDate` |
| Set min date | StateManager | `minDate = date` |
| Get max date | StateManager | `maxDate` |
| Set max date | StateManager | `maxDate = date` |
| Get disabled dates | StateManager | `disabledDates` |
| Set disabled dates | StateManager | `disabledDates = dates[]` |
| Get disabled days of week | StateManager | `disabledDaysOfWeek` |
| Set disabled days of week | StateManager | `disabledDaysOfWeek = days[]` |
| Get first day of week | StateManager | `firstDayOfWeek` |
| Set first day of week | StateManager | `firstDayOfWeek = day` |
| Get date format | StateManager | `dateFormat` |
| Set date format | StateManager | `dateFormat = format` |
| Get is range selection | StateManager | `isRangeSelection` |
| Set is range selection | StateManager | `isRangeSelection = boolean` |
| Get hide other month days | StateManager | `hideOtherMonthDays` |
| Set hide other month days | StateManager | `hideOtherMonthDays = boolean` |
| Get locale | StateManager | `locale` |
| Set locale | StateManager | `locale = string` |
| Get date format options | StateManager | `dateFormatOptions` |
| Set date format options | StateManager | `dateFormatOptions = options` |
| Get year range size | StateManager | `yearRangeSize` |
| Set year range size | StateManager | `yearRangeSize = number` |
| Get year range base | StateManager | `currentYearRangeBase` |
| Set year range base | StateManager | `currentYearRangeBase = number` |

---

## Resources

- **Type Definitions**: See `types/` directory
- **Interfaces**: See `interfaces/` directory
- **Tests**: See `__tests__/` directory
- **Examples**: See `Examples/` directory in project root

---

**For questions or contributions, refer to the main project README.**
