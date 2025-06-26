# Calendar Controller: Features Guide

This guide provides a comprehensive overview of all features available in the Calendar Controller component.

> **Latest Update (v0.2.1)**: Enhanced example stability with function scope fixes. All interactive examples now work reliably in browser environments.

## Core Features

### Date Selection

The Calendar Controller supports multiple ways to select and manage dates:

- **Single Date Selection**: Select individual dates with full validation against constraints
- **Date Range Selection**: Select a start and end date to define a date range
- **Date Clearing**: Remove all selected dates with a single method call

### Navigation

Navigate through the calendar with intuitive methods:

- **Month Navigation**: Easily move to next or previous months
- **Year Navigation**: Jump forward or backward by years
- **Year Range Navigation**: Navigate through ranges of years (e.g., decades)
- **Direct Navigation**: Go directly to a specific month, year, or date
- **Today Shortcut**: Quick navigation to the current date

### Multiple View Modes

The calendar offers different view modes to streamline date selection:

- **Day View**: Traditional calendar grid showing days of a month
- **Month View**: Grid of months for quick month selection
- **Year View**: Range of years for quick year selection and decade navigation
- **Seamless Transitions**: Switch between views with intuitive navigation

### Date Validation and Constraints

Enforce rules for date selection:

- **Min/Max Date Range**: Set minimum and maximum selectable dates
- **Disabled Dates**: Specify individual dates that should be disabled
- **Custom Validation**: Easily extend validation with your own rules

### Visual Customization

Adapt the calendar to your UI needs:

- **First Day of Week**: Configure which day starts the week (Sunday, Monday, etc.)
- **Hide Other Month Days**: Option to show only days from the current month
- **Custom Date Formatting**: Format dates according to your requirements

### Internationalization

Support for multiple languages and regions:

- **Localized Month Names**: Display month names in the user's language
- **Localized Weekday Names**: Show weekday names in the user's language
- **Locale-based Date Formatting**: Format dates according to regional conventions
- **RTL Support**: Support for right-to-left languages
- **Dynamic Locale Switching**: Change language settings at runtime

### Event System

React to user interactions:

- **Date Selected Event**: Triggered when a user selects a date
- **Date Range Selected Event**: Fired when a complete date range is selected
- **Month Changed Event**: Notifies when the displayed month changes

## UI Integration Features

The Calendar Controller is designed to work with any UI framework or vanilla JavaScript:

### Framework Agnostic

- Works with React, Angular, Vue, Svelte, or vanilla JavaScript
- No framework dependencies
- Clean separation of concerns between logic and UI

### UI Components

Ready-to-use examples with:

- **Tailwind CSS**: Modern, responsive styling
- **Font Awesome**: Beautiful calendar icons and navigation elements

### Accessibility

- Keyboard navigation support
- Screen reader friendly structure
- ARIA attributes in the example implementations

## Advanced Features

### Service-Oriented Architecture

The controller uses specialized services for different concerns:

- **CalendarService**: Core calendar operations
- **DateSelectionService**: Selection logic
- **DateValidationService**: Date constraints and validation
- **DateFormattingService**: Consistent date formatting
- **NavigationService**: Calendar navigation operations
- **ViewStateService**: UI state management
- **EventManagerService**: Event handling
- **ConstraintsService**: Date constraints management
- **CalendarGeneratorService**: Calendar day generation
- **ConfigurationService**: Configuration management

### Calendar Generation

- Automatic generation of calendar days for the current view
- Proper handling of days from previous and next months
- Special styling for today, selected dates, and date ranges

### Multiple View Modes

The controller provides multiple ways to navigate and select dates through different view modes:

#### Day View

The traditional calendar view showing days of a month:
- View days in a month grid
- Select individual days
- Navigate between months
- See previous and next month days

#### Month View

A grid of months for quick month selection:
- View all 12 months of the current year
- Select any month to navigate to that month's day view
- Visual indicators for the current month
- Disabled indicators for months outside valid date range

#### Year View

A range of years for selecting a specific year:
- View years in configurable ranges (default is 12 years)
- Navigate between year ranges (decades)
- Select any year to navigate to that year's month view
- Visual indicators for the current year
- Disabled indicators for years outside valid date range

#### Year Range Navigation

Methods to efficiently navigate through years:
- `nextYearRange()`: Move to the next set of years
- `prevYearRange()`: Move to the previous set of years
- `goToYearRange(year)`: Jump to a specific year range
- `getCurrentYearRange()`: Get information about the current year range
- `setYearRangeSize(size)`: Customize how many years are displayed in the year view

## Integration with Uplink Protocol

As part of the Uplink Protocol ecosystem, this component:

- Uses the core Uplink binding system for reactive updates
- Follows Uplink controller patterns for consistent API design
- Integrates with other Uplink Protocol components

## Examples and Demonstrations

The Calendar Controller includes comprehensive examples that showcase all features:

### Working Examples

1. **Basic Calendar** - Minimal implementation demonstrating core functionality
2. **Date Picker** - Full-featured date picker with modern styling and accessibility
3. **Disabled Weekdays** - Business rules and weekday restrictions (enhanced in v0.2.1)
4. **Internationalization** - Multi-language support and locale handling
5. **Multi-view Calendar** - Seamless transitions between day, month, and year views
6. **Comprehensive Demo** - Advanced features including floating calendars and complex interactions

### Example Quality Improvements

Version 0.2.1 enhanced example reliability:
- Fixed function scope issues in interactive examples
- Ensured all button handlers work without build tools
- Improved browser compatibility for standalone HTML files
- Enhanced error handling in example code

### Running Examples

All examples can be run directly in any modern browser without additional setup:

```bash
# Clone the repository and open examples
cd examples/
# Open any HTML file directly in your browser
```

The examples demonstrate real-world usage patterns and serve as comprehensive documentation for implementing the Calendar Controller in your own projects.
