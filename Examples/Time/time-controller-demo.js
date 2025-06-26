/**
 * Time Controller Demo - Node.js Examples
 * 
 * This file demonstrates various capabilities of the Time Controller
 * Run with: node time-controller-demo.js
 */

// Import the TimeController from the built library
let TimeController;
try {
  const library = require('../../dist/index.js');
  console.log('Library exports:', Object.keys(library));
  TimeController = library.TimeController;
  if (!TimeController) {
    console.error('TimeController not found in exports');
    process.exit(1);
  }
  console.log('TimeController imported successfully');
} catch (error) {
  console.error('Import error:', error);
  process.exit(1);
}

console.log('🕐 Time Controller Capabilities Demo\n');
console.log('=====================================\n');

// ========================================
// 1. Basic Time Controller Creation
// ========================================
console.log('1. 📋 Basic Time Controller Creation');
console.log('------------------------------------');

// Create basic time controller with 24-hour format
const basicTimeController = TimeController({
  use12HourFormat: false,
  showSeconds: true,
  locale: 'en-US'
});

console.log('✅ Basic time controller created');
console.log('Current time bindings:');
console.log('  - selectedTime:', basicTimeController.bindings.selectedTime.current);
console.log('  - use12HourFormat:', basicTimeController.bindings.use12HourFormat.current);
console.log('  - showSeconds:', basicTimeController.bindings.showSeconds.current);
console.log('');

// ========================================
// 2. Time Selection Examples
// ========================================
console.log('2. ⏰ Time Selection Examples');
console.log('-----------------------------');

// Select specific time
const currentTime = new Date();
currentTime.setHours(14, 30, 45); // 2:30:45 PM
basicTimeController.selectTime(currentTime);

console.log('✅ Selected time: 14:30:45');
console.log('Selected time binding:', basicTimeController.bindings.selectedTime.current?.toTimeString());
console.log('Formatted time:', basicTimeController.methods.getFormattedTime());
console.log('');

// Set individual time components
basicTimeController.methods.setHour(9);
basicTimeController.methods.setMinute(15);
basicTimeController.methods.setSecond(30);

console.log('✅ Set time components individually: 9:15:30');
console.log('Updated time:', basicTimeController.methods.getFormattedTime());
console.log('');

// ========================================
// 3. 12-Hour Format with AM/PM
// ========================================
console.log('3. 🕛 12-Hour Format Examples');
console.log('-----------------------------');

const timeController12h = TimeController({
  use12HourFormat: true,
  showSeconds: true,
  locale: 'en-US'
});

// Select morning time
const morningTime = new Date();
morningTime.setHours(9, 30, 0);
timeController12h.selectTime(morningTime);

console.log('✅ Morning time (9:30 AM):');
console.log('Formatted time:', timeController12h.methods.getFormattedTime());

// Select afternoon time
const afternoonTime = new Date();
afternoonTime.setHours(15, 45, 30);
timeController12h.selectTime(afternoonTime);

console.log('✅ Afternoon time (3:45:30 PM):');
console.log('Formatted time:', timeController12h.methods.getFormattedTime());

// Toggle AM/PM
timeController12h.methods.togglePeriod();
console.log('✅ After toggling period:');
console.log('Formatted time:', timeController12h.methods.getFormattedTime());
console.log('');

// ========================================
// 4. Time Navigation
// ========================================
console.log('4. 🧭 Time Navigation Examples');
console.log('------------------------------');

const navController = TimeController({
  use12HourFormat: true,
  showSeconds: true,
  minuteStep: 15 // 15-minute increments
});

// Set initial time
const startTime = new Date();
startTime.setHours(10, 0, 0);
navController.selectTime(startTime);

console.log('✅ Initial time:', navController.methods.getFormattedTime());

// Navigate through time
navController.methods.goToNextHour();
console.log('✅ After next hour:', navController.methods.getFormattedTime());

navController.methods.goToNextMinute(); // Should jump by 15 minutes due to step
console.log('✅ After next minute (15-min step):', navController.methods.getFormattedTime());

navController.methods.goToPreviousHour();
console.log('✅ After previous hour:', navController.methods.getFormattedTime());

navController.methods.goToCurrentTime();
console.log('✅ After going to current time:', navController.methods.getFormattedTime());
console.log('');

// ========================================
// 5. Time Range Selection
// ========================================
console.log('5. 📅 Time Range Selection');
console.log('--------------------------');

const rangeController = TimeController({
  isRangeSelection: true,
  use12HourFormat: true,
  showSeconds: false
});

// Select start time
const startWorkTime = new Date();
startWorkTime.setHours(9, 0, 0);
rangeController.selectTime(startWorkTime);

console.log('✅ Selected start time:', rangeController.methods.getFormattedTime());

// Select end time
const endWorkTime = new Date();
endWorkTime.setHours(17, 30, 0);
rangeController.selectTime(endWorkTime);

console.log('✅ Selected end time:', rangeController.methods.getFormattedTime());

const timeRange = rangeController.selectedTimeRange;
console.log('✅ Complete time range:');
console.log('  Start:', timeRange.startTime?.toTimeString());
console.log('  End:', timeRange.endTime?.toTimeString());
console.log('');

// ========================================
// 6. Time Constraints and Validation
// ========================================
console.log('6. 🚫 Time Constraints and Validation');
console.log('-------------------------------------');

const constrainedController = TimeController({
  use12HourFormat: true,
  showSeconds: false
});

// Set business hours (9 AM to 5 PM)
const minBusinessTime = new Date();
minBusinessTime.setHours(9, 0, 0);
const maxBusinessTime = new Date();
maxBusinessTime.setHours(17, 0, 0);

constrainedController.methods.setMinTime(minBusinessTime);
constrainedController.methods.setMaxTime(maxBusinessTime);

// Disable lunch hours (12 PM - 1 PM)
constrainedController.methods.setDisabledHours([12]);

console.log('✅ Set business hours: 9 AM - 5 PM');
console.log('✅ Disabled lunch hour: 12 PM');

// Test valid time
const validTime = new Date();
validTime.setHours(14, 30, 0); // 2:30 PM
console.log('Is 2:30 PM valid?', constrainedController.methods.isTimeValid(validTime));

// Test invalid time (lunch hour)
const invalidTime = new Date();
invalidTime.setHours(12, 30, 0); // 12:30 PM
console.log('Is 12:30 PM valid?', constrainedController.methods.isTimeValid(invalidTime));

// Test out of range time
const earlyTime = new Date();
earlyTime.setHours(7, 0, 0); // 7:00 AM
console.log('Is 7:00 AM valid?', constrainedController.methods.isTimeValid(earlyTime));

console.log('Disabled hours:', constrainedController.methods.getDisabledHours());
console.log('');

// ========================================
// 7. Internationalization Examples
// ========================================
console.log('7. 🌍 Internationalization Examples');
console.log('-----------------------------------');

// German locale
const germanController = TimeController({
  use12HourFormat: false,
  showSeconds: true,
  locale: 'de-DE'
});

const testTime = new Date();
testTime.setHours(15, 30, 45);
germanController.selectTime(testTime);

console.log('✅ German locale (de-DE):');
console.log('Time:', germanController.methods.formatTime(testTime));

// French locale
const frenchController = TimeController({
  use12HourFormat: false,
  showSeconds: true,
  locale: 'fr-FR'
});

frenchController.selectTime(testTime);
console.log('✅ French locale (fr-FR):');
console.log('Time:', frenchController.methods.formatTime(testTime));

// Japanese locale
const japaneseController = TimeController({
  use12HourFormat: false,
  showSeconds: true,
  locale: 'ja-JP'
});

japaneseController.selectTime(testTime);
console.log('✅ Japanese locale (ja-JP):');
console.log('Time:', japaneseController.methods.formatTime(testTime));
console.log('');

// ========================================
// 8. Event Handling Examples
// ========================================
console.log('8. 📡 Event Handling Examples');
console.log('-----------------------------');

const eventController = TimeController({
  use12HourFormat: true,
  showSeconds: true
});

// Subscribe to time selection events
const timeSelectedUnsubscribe = eventController.events.timeSelected.subscribe((selectedTime) => {
  console.log('🔔 Time selected event:', selectedTime.toTimeString());
});

// Subscribe to format change events
const formatChangedUnsubscribe = eventController.events.formatChanged.subscribe((formatInfo) => {
  console.log('🔔 Format changed event:', formatInfo);
});

// Trigger events
console.log('✅ Subscribing to events...');
eventController.selectTime(new Date());

// Change format to trigger format event
eventController.methods.setUse12HourFormat(false);
console.log('');

// ========================================
// 9. Focus Management and Accessibility
// ========================================
console.log('9. ♿ Focus Management and Accessibility');
console.log('---------------------------------------');

const focusController = TimeController({
  use12HourFormat: true,
  showSeconds: true,
  showMilliseconds: true
});

console.log('✅ Focus management capabilities:');
console.log('Current focused segment:', focusController.bindings.focusedSegment.current);

// Move focus through segments
focusController.methods.setFocusedSegment('hours');
console.log('Set focus to hours:', focusController.bindings.focusedSegment.current);

focusController.methods.moveFocusToNextSegment();
console.log('Move to next segment:', focusController.bindings.focusedSegment.current);

focusController.methods.moveFocusToNextSegment();
console.log('Move to next segment:', focusController.bindings.focusedSegment.current);

focusController.methods.moveFocusToPeriod();
console.log('Move to period (AM/PM):', focusController.bindings.focusedSegment.current);

focusController.methods.clearFocusedSegment();
console.log('Clear focus:', focusController.bindings.focusedSegment.current);
console.log('');

// ========================================
// 10. Advanced Configuration
// ========================================
console.log('10. ⚙️ Advanced Configuration');
console.log('-----------------------------');

const advancedController = TimeController({
  use12HourFormat: true,
  showSeconds: true,
  showMilliseconds: true,
  minuteStep: 5,
  locale: 'en-US',
  isRangeSelection: false
});

// Dynamic configuration changes
console.log('✅ Initial configuration:');
console.log('  12-hour format:', advancedController.bindings.use12HourFormat.current);
console.log('  Show seconds:', advancedController.bindings.showSeconds.current);
console.log('  Show milliseconds:', advancedController.bindings.showMilliseconds.current);
console.log('  Minute step:', advancedController.bindings.minuteStep.current);

// Change configurations dynamically
advancedController.methods.setShowMilliseconds(false);
advancedController.methods.setMinuteStep(15);
advancedController.methods.setLocale('en-GB');

console.log('✅ After configuration changes:');
console.log('  Show milliseconds:', advancedController.bindings.showMilliseconds.current);
console.log('  Minute step:', advancedController.bindings.minuteStep.current);
console.log('  Locale:', advancedController.methods.getLocale());
console.log('');

// ========================================
// 11. Time Utilities and Helpers
// ========================================
console.log('11. 🔧 Time Utilities and Helpers');
console.log('----------------------------------');

const utilityController = TimeController({
  use12HourFormat: true,
  minuteStep: 15
});

// Select a time
const utilTime = new Date();
utilTime.setHours(14, 27, 33); // 2:27:33 PM
utilityController.selectTime(utilTime);

console.log('✅ Original time:', utilityController.methods.getFormattedTime());

// Round to step (should round to nearest 15-minute mark)
const roundedTime = utilityController.methods.roundToStep(utilTime);
utilityController.selectTime(roundedTime);
console.log('✅ Rounded to 15-min step:', utilityController.methods.getFormattedTime());

// Check if it's current time
const now = new Date();
console.log('✅ Is current time:', utilityController.methods.isCurrentTime(now));

// Generate time view (for UI components)
const timeView = utilityController.methods.generateTimeView();
console.log('✅ Generated time view available for UI rendering');
console.log('');

// ========================================
// 12. Cleanup and Summary
// ========================================
console.log('12. 🧹 Cleanup and Summary');
console.log('--------------------------');

// Unsubscribe from events
timeSelectedUnsubscribe();
formatChangedUnsubscribe();

console.log('✅ Event subscriptions cleaned up');
console.log('');

console.log('🎉 Time Controller Demo Complete!');
console.log('=================================');
console.log('');
console.log('Summary of demonstrated capabilities:');
console.log('• ✅ Basic time selection and manipulation');
console.log('• ✅ 12/24 hour format support');
console.log('• ✅ Time navigation (next/previous)');
console.log('• ✅ Time range selection');
console.log('• ✅ Time constraints and validation');
console.log('• ✅ Internationalization (multiple locales)');
console.log('• ✅ Event-driven architecture');
console.log('• ✅ Focus management for accessibility');
console.log('• ✅ Dynamic configuration changes');
console.log('• ✅ Time utilities and helpers');
console.log('• ✅ Reactive state bindings');
console.log('• ✅ Service-oriented architecture');
console.log('');
console.log('For more advanced usage, check out:');
console.log('• docs/time-controller-guide.md');
console.log('• src/Time/__tests__/time-controller.test.ts');
console.log('• Time Controller API documentation');
