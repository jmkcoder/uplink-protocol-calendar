# Changelog

All notable changes to the `@uplink-protocol/calendar-controller` package will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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