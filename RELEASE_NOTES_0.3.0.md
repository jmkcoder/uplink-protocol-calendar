# Release Notes - Version 0.3.0

## 🎉 Major Release: Time Controller Introduction

Version 0.3.0 marks a significant milestone with the introduction of the comprehensive **TimeController** alongside the existing CalendarController, making this package a complete date and time solution.

## 🚀 What's New

### Time Controller Features
- **Complete Time Picker Solution**: Full-featured time selection with range support
- **Service-Oriented Architecture**: 10 specialized services for modular time handling
- **12/24 Hour Format Support**: Automatic AM/PM handling and format conversion
- **Advanced Time Constraints**: Min/max times, disabled times/hours/minutes/seconds
- **Accessibility-First Design**: Complete keyboard navigation and ARIA support
- **Internationalization**: Locale-aware formatting with Intl.DateTimeFormat integration

### Key Capabilities
- Single time and time range selection modes
- Configurable time segments (hours, minutes, seconds, milliseconds)
- Step-based navigation (1, 5, 10, 15, 30 minute/second increments)
- Reactive bindings for modern UI frameworks
- Event-driven architecture with 6 time-specific events
- Comprehensive TypeScript support

## 📦 Package Updates
- **Version**: 0.2.3 → 0.3.0
- **Description**: Enhanced to include time picker functionality
- **Keywords**: Added time-picker, time, datetime related terms
- **Build**: Successfully built with both Date and Time components
- **Tests**: All 23 test suites passing (370 tests total)

## 🧪 Testing Coverage
- Complete test coverage for TimeController
- Integration tests with existing CalendarController
- Comprehensive service testing
- Accessibility and internationalization validation

## 📚 Documentation
- Updated API documentation with TimeController methods
- Time controller guide and examples included
- Enhanced TypeDoc generation with time-related types

## 🔧 Developer Experience
- Factory function `TimeController(options)` for easy instantiation
- Full TypeScript type definitions and intellisense support
- 40+ time manipulation methods available
- Seamless integration with existing CalendarController workflows

## 🌐 Live Package
The package is now available on npm:
```bash
npm install @uplink-protocol/calendar-controller@0.3.0
```

## Usage Example
```typescript
import { TimeController } from '@uplink-protocol/calendar-controller';

const timeController = TimeController({
  use12HourFormat: true,
  showSeconds: true,
  minuteStep: 15,
  locale: 'en-US'
});

// Select a time
timeController.methods.selectTime(new Date());

// Access reactive bindings
console.log(timeController.bindings.formattedTime.get());
```

## Breaking Changes
- None - This is a feature addition that maintains full backward compatibility

## Migration Guide
- No migration required - existing CalendarController code continues to work unchanged
- New TimeController can be used independently or alongside CalendarController

---

**Published**: June 26, 2025  
**Package**: @uplink-protocol/calendar-controller@0.3.0  
**Registry**: https://www.npmjs.com/package/@uplink-protocol/calendar-controller
