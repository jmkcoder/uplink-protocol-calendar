# Changelog

All notable changes to the `@uplink-protocol/calendar-controller` package will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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