# Changelog

All notable changes to the `@uplink-protocol/calendar-controller` package will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.3.0] - 2025-06-26

### Added
- **TimeController - Complete Time Picker Solution**
  - Introduced `TimeControllerClass` with comprehensive time selection functionality
  - Service-oriented architecture with 10 specialized time services:
    - `TimeService` - Core time operations and utilities
    - `TimeFormattingService` - Time formatting and localization
    - `TimeSelectionService` - Time selection logic and range handling
    - `TimeViewStateService` - Reactive bindings and UI state management
    - `TimeEventManagerService` - Event handling and emission
    - `TimeNavigationService` - Time navigation and focus management
    - `TimeConstraintsService` - Time validation and constraints
    - `TimeGeneratorService` - Time view generation
    - `TimeConfigurationService` - Configuration processing
    - `TimeValidationService` - Time validation logic

- **Comprehensive Time Features**
  - Single time selection and time range selection modes
  - 12-hour and 24-hour format support with automatic AM/PM handling
  - Configurable time segments (hours, minutes, seconds, milliseconds)
  - Step-based time navigation (1, 5, 10, 15, 30 minute/second steps)
  - Advanced time constraints (min/max times, disabled times/hours/minutes/seconds)
  - Accessibility-focused segment navigation and keyboard support

- **Rich Time Configuration Options**
  - Initial time selection and range selection
  - Customizable time format options and locale-specific formatting
  - Flexible time display options (show/hide seconds, milliseconds)
  - Comprehensive constraint system for business rules
  - Event-driven architecture with 6 time-specific events

- **Internationalization & Accessibility**
  - Full internationalization support with `Intl.DateTimeFormat` integration
  - Locale-aware time formatting and cultural time preferences
  - Complete accessibility support with ARIA-compliant focus management
  - Keyboard navigation between time segments

- **Developer Experience**
  - Factory function `TimeController(options)` for easy instantiation
  - TypeScript-first with comprehensive type definitions
  - Reactive bindings for modern UI frameworks (React, Vue, Angular)
  - Extensive method library (40+ time manipulation methods)
  - Comprehensive test coverage with 23 test suites

### Enhanced
- **Package Exports**
  - Added time controller exports to main index.ts
  - Updated TypeScript type definitions to include time types
  - Enhanced package keywords to include time-picker related terms

- **Documentation**
  - Time controller capabilities documented in Examples/Time/
  - Advanced time examples and demos included
  - Comprehensive time controller guide available

## [0.2.3] - 2025-06-26

### Fixed
- **Intl-Based Locale Formatting**
  - Fixed `getLocaleDefaultFormatOptions()` to use native `Intl.DateTimeFormat` for better locale detection
  - Enhanced cultural pattern recognition for date formatting preferences
  - Better support for unknown locales with automatic format option resolution
  - Maintains existing behavior while leveraging browser's native internationalization capabilities
  - Fixed all locale formatting default tests to pass with new Intl-based implementation
  - Ensured consistent behavior across different locale configurations

## [0.2.2] - 2025-06-25

### Added
- **Intelligent Locale-Based Date Formatting**
  - Enhanced `setLocale()` method to automatically apply appropriate format defaults for different locales
  - Added `getLocaleDefaultFormatOptions()` private method with comprehensive locale-specific formatting rules
  - Supports 15+ locales with culturally appropriate formatting (e.g., long month names for European locales, numeric formatting for English/Asian locales)
  - Language-only locale fallbacks (e.g., "de" falls back to "de-DE" defaults)
  - Unknown locale fallback to "en-US" formatting

- **Enhanced Date Format Management**
  - `setDateFormatOptions()` now accepts `null` to reset to locale-appropriate defaults
  - Improved persistence of custom format options across locale changes
  - Better integration between `getFormattedDate()` and locale-specific formatting

- **Comprehensive Test Coverage**
  - Added 33 new tests in `locale-formatting-defaults.test.ts`
  - Validates correct format options for all supported locales
  - Tests real-world formatting output against browser `Intl.DateTimeFormat`
  - Verifies format option persistence and reset behavior
  - Edge case testing for unknown locales and case-insensitive handling

### Enhanced
- **Localization Service Integration**
  - Improved fallback logic in `DateFormattingService` when no format options are specified
  - Enhanced `getFormattedDate()` to use locale-default formatting when no explicit options are set
  - Better coordination between localization and date formatting services

### Technical
- **Developer Experience**
  - Comprehensive locale formatting validation tests
  - Improved TypeScript type definitions for date formatting
  - Enhanced documentation for internationalization features

## [0.2.1] - 2025-06-02

### Fixed
- **Example Fixes**
  - Fixed function scope issue in disabled-weekdays example where button handlers were not accessible from global scope
  - Functions `presetWeekends`, `presetWeekdays`, `applyDisabledDays`, and `clearDisabledDays` are now properly exposed to window object
  - Resolved "ReferenceError: function is not defined" errors in example HTML onclick handlers

## [0.2.0] - 2025-06-01

### Added
- **Accessibility Improvements**
  - Complete arrow key navigation support (up/down/left/right)
  - Advanced focus handling with `moveFocus*()` methods including:
    - `moveFocusRight()`, `moveFocusLeft()`, `moveFocusUp()`, `moveFocusDown()`
    - `moveFocusToStartOfMonth()`, `moveFocusToEndOfMonth()`
    - `moveFocusToPreviousMonth()`, `moveFocusToNextMonth()`
    - `moveFocusToPreviousYear()`, `moveFocusToNextYear()`
  - Screen reader support with accessible date labels and state descriptions
  - `getAccessibleDateLabel()` and `getDateStateDescription()` methods
  - `selectFocusedDate()` for keyboard-driven date selection

- **Service-Oriented Architecture**
  - Modular service design for better maintainability
  - Calendar Generator Service for optimized calendar generation
  - Navigation Service with constraint validation
  - Accessibility Manager for comprehensive accessibility support
  - Calendar State Service for centralized state management
  - Configuration Service for streamlined configuration
  - Constraint Service for advanced date validation

- **Multi-View Support**
  - Enhanced `generateMonthView()` with week number support
  - `generateCalendarMonths()` for year-level navigation
  - `generateCalendarYears()` for decade-level navigation
  - `getWeekNumber()` method for week number calculation

- **Developer Experience**
  - Rich event system with comprehensive state change notifications
  - Batched binding updates for improved performance
  - `updateAllBindings()` with selective update options

### Changed
- **Performance Optimizations**
  - Batched binding updates using `executeBatchedBindingUpdates()`
  - On-demand calendar data generation
  - Improved memory management and state handling

- **Enhanced Method Signatures**
  - `selectDate()` now supports multiple parameter formats
  - Improved constraint validation across navigation methods
  - Better error handling and edge case management

### Fixed
- Focus management during month/year navigation
- Date constraint validation edge cases
- Range selection state consistency
- Disabled date handling in range selection
- Binding updates in test environments
- Memory leaks in event handling

### Technical Improvements
- Enhanced TypeScript type definitions
- Better integration with @uplink-protocol/core ^0.0.11
- Improved test environment compatibility
- More robust service initialization and dependency injection

## [0.1.6] - 2025-05-22

### Fixed
- General bug fixes and improvements

## [0.1.5] - 2025-05-22

### Fixed
- General bug fixes and improvements

## [0.1.4] - 2025-05-22

### Fixed
- General bug fixes and improvements

## [0.1.3] - 2025-05-22

### Fixed
- General bug fixes and improvements

## [0.1.2] - 2025-05-22

### Fixed
- General bug fixes and improvements

## [0.1.1] - 2025-05-21

### Fixed
- Fixed issue in `selectDate` method where the date object was incorrectly created using mixed values from current date and parameters

## [0.1.0] - 2025-05-20

### Added
- Initial release of the calendar controller
- Core calendar API functionality
- Calendar generation service
- Date selection and validation services
- Configuration service
- Constraints service
- Date formatting utilities
- Navigation service
- View state management
- Event management system
- TypeScript type definitions
- Documentation with TypeDoc
- Example implementations:
  - Calendar view
  - Date picker component
- Internationalization
- Month view functionality for easier month selection
- Year view with configurable year ranges
- Year range navigation methods (nextYearRange, prevYearRange, goToYearRange)
- New interfaces: CalendarMonth, CalendarYear, YearRange
- Methods to select specific months and years (selectMonth, selectYear)
- Ability to customize year range size
- Updated documentation for new view modes

### Features
- Framework-agnostic implementation
- Configurable date constraints
- Multiple date selection modes
- Localization support
- Customizable calendar grid generation
- Date range selections
- Event system for state changes
- Internationalization