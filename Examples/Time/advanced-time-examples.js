/**
 * Advanced Time Controller Examples
 * 
 * This file demonstrates advanced features, edge cases, and complex scenarios
 * Run with: node advanced-time-examples.js
 */

const { TimeController } = require('../../dist/index.js');

console.log('🚀 Advanced Time Controller Examples\n');
console.log('====================================\n');

// ========================================
// 1. Complex Time Constraints
// ========================================
console.log('1. 🔒 Complex Time Constraints');
console.log('------------------------------');

const hospitalController = TimeController({
  use12HourFormat: true,
  showSeconds: false,
  minuteStep: 30
});

// Hospital scheduling: No appointments during shift changes
const shiftChangeHours = [6, 7, 14, 15, 22, 23]; // 6-7 AM, 2-3 PM, 10-11 PM
hospitalController.methods.setDisabledHours(shiftChangeHours);

// Emergency procedures available 24/7, but regular appointments only 8 AM - 8 PM
const regularStart = new Date();
regularStart.setHours(8, 0, 0);
const regularEnd = new Date();
regularEnd.setHours(20, 0, 0);

hospitalController.methods.setMinTime(regularStart);
hospitalController.methods.setMaxTime(regularEnd);

console.log('✅ Hospital Scheduling System:');
console.log('  - Regular hours: 8 AM - 8 PM');
console.log('  - Disabled shift change hours:', shiftChangeHours);

// Test various appointment times
const testTimes = [
  { hour: 6, minute: 30, label: 'Shift change (6:30 AM)' },
  { hour: 9, minute: 0, label: 'Regular appointment (9:00 AM)' },
  { hour: 14, minute: 30, label: 'Shift change (2:30 PM)' },
  { hour: 16, minute: 0, label: 'Regular appointment (4:00 PM)' },
  { hour: 21, minute: 0, label: 'After hours (9:00 PM)' }
];

testTimes.forEach(test => {
  const testTime = new Date();
  testTime.setHours(test.hour, test.minute, 0);
  const isValid = hospitalController.methods.isTimeValid(testTime);
  console.log(`  ${test.label}: ${isValid ? '✅ Valid' : '❌ Invalid'}`);
});
console.log('');

// ========================================
// 2. Multi-timezone Support
// ========================================
console.log('2. 🌐 Multi-timezone Support');
console.log('----------------------------');

const timezones = [
  { name: 'New York', locale: 'en-US', timezone: 'America/New_York' },
  { name: 'London', locale: 'en-GB', timezone: 'Europe/London' },
  { name: 'Tokyo', locale: 'ja-JP', timezone: 'Asia/Tokyo' },
  { name: 'Sydney', locale: 'en-AU', timezone: 'Australia/Sydney' }
];

const baseTime = new Date();
baseTime.setHours(15, 30, 0); // 3:30 PM

console.log('✅ Same moment across timezones:');
timezones.forEach(tz => {
  const controller = TimeController({
    use12HourFormat: true,
    locale: tz.locale
  });
  
  controller.selectTime(baseTime);
  const formatted = controller.methods.formatTime(baseTime, {
    timeZone: tz.timezone,
    hour12: true,
    hour: 'numeric',
    minute: '2-digit'
  });
  
  console.log(`  ${tz.name}: ${formatted}`);
});
console.log('');

// ========================================
// 3. Dynamic Time Step Configuration
// ========================================
console.log('3. ⚡ Dynamic Time Step Configuration');
console.log('------------------------------------');

const dynamicController = TimeController({
  use12HourFormat: true,
  showSeconds: false,
  minuteStep: 5 // Start with 5-minute steps
});

const scenarios = [
  { step: 5, name: 'Quick meetings' },
  { step: 15, name: 'Standard appointments' },
  { step: 30, name: 'Long consultations' },
  { step: 60, name: 'Full hour blocks' }
];

const startTime = new Date();
startTime.setHours(10, 0, 0);
dynamicController.selectTime(startTime);

console.log('✅ Dynamic step configuration:');
scenarios.forEach(scenario => {
  dynamicController.methods.setMinuteStep(scenario.step);
  console.log(`  ${scenario.name} (${scenario.step}-min step):`);
  console.log(`    Current: ${dynamicController.methods.getFormattedTime()}`);
  
  dynamicController.methods.goToNextMinute();
  console.log(`    Next: ${dynamicController.methods.getFormattedTime()}`);
  
  // Reset for next scenario
  dynamicController.selectTime(startTime);
});
console.log('');

// ========================================
// 4. Custom Time Validation Logic
// ========================================
console.log('4. 🧠 Custom Time Validation Logic');
console.log('----------------------------------');

const smartController = TimeController({
  use12HourFormat: true,
  showSeconds: false
});

// Implement business logic: No meetings on Friday afternoons
const isFridayAfternoon = (time) => {
  const friday = 5; // JavaScript day of week for Friday
  const hour = time.getHours();
  return time.getDay() === friday && hour >= 13; // After 1 PM on Friday
};

// Simulate checking different times
const testDays = [
  { day: 'Monday 2 PM', time: new Date(2025, 5, 23, 14, 0) }, // Monday
  { day: 'Friday 11 AM', time: new Date(2025, 5, 27, 11, 0) }, // Friday morning
  { day: 'Friday 3 PM', time: new Date(2025, 5, 27, 15, 0) }   // Friday afternoon
];

console.log('✅ Custom validation (No Friday afternoon meetings):');
testDays.forEach(test => {
  const baseValid = smartController.methods.isTimeValid(test.time);
  const customValid = baseValid && !isFridayAfternoon(test.time);
  console.log(`  ${test.day}: ${customValid ? '✅ Available' : '❌ Blocked'}`);
});
console.log('');

// ========================================
// 5. Time Range Overlap Detection
// ========================================
console.log('5. 📊 Time Range Overlap Detection');
console.log('----------------------------------');

const scheduleController = TimeController({
  isRangeSelection: true,
  use12HourFormat: true,
  showSeconds: false
});

// Existing appointments
const existingAppointments = [
  { start: new Date(2025, 5, 26, 9, 0), end: new Date(2025, 5, 26, 10, 30) },
  { start: new Date(2025, 5, 26, 14, 0), end: new Date(2025, 5, 26, 15, 30) },
  { start: new Date(2025, 5, 26, 16, 0), end: new Date(2025, 5, 26, 17, 0) }
];

const checkOverlap = (newStart, newEnd, existing) => {
  return existing.some(apt => 
    (newStart < apt.end && newEnd > apt.start)
  );
};

// Test new appointment slots
const newAppointments = [
  { start: new Date(2025, 5, 26, 8, 0), end: new Date(2025, 5, 26, 9, 0), label: '8:00-9:00 AM' },
  { start: new Date(2025, 5, 26, 10, 0), end: new Date(2025, 5, 26, 11, 0), label: '10:00-11:00 AM' },
  { start: new Date(2025, 5, 26, 15, 0), end: new Date(2025, 5, 26, 16, 0), label: '3:00-4:00 PM' }
];

console.log('✅ Existing appointments:');
existingAppointments.forEach((apt, i) => {
  console.log(`  ${i + 1}. ${apt.start.toLocaleTimeString()} - ${apt.end.toLocaleTimeString()}`);
});

console.log('\n✅ Testing new appointment slots:');
newAppointments.forEach(apt => {
  const hasOverlap = checkOverlap(apt.start, apt.end, existingAppointments);
  console.log(`  ${apt.label}: ${hasOverlap ? '❌ Conflict' : '✅ Available'}`);
});
console.log('');

// ========================================
// 6. Performance Testing with Large Data Sets
// ========================================
console.log('6. 📈 Performance Testing');
console.log('-------------------------');

const perfController = TimeController({
  use12HourFormat: false,
  showSeconds: true,
  showMilliseconds: true
});

// Generate large number of disabled times
const startPerfTime = performance.now();

const largeDisabledHours = Array.from({ length: 12 }, (_, i) => i); // Disable first 12 hours
perfController.methods.setDisabledHours(largeDisabledHours);

// Test many time validations
const testCount = 1000;
let validCount = 0;

for (let i = 0; i < testCount; i++) {
  const randomTime = new Date();
  randomTime.setHours(Math.floor(Math.random() * 24));
  randomTime.setMinutes(Math.floor(Math.random() * 60));
  
  if (perfController.methods.isTimeValid(randomTime)) {
    validCount++;
  }
}

const endPerfTime = performance.now();
const duration = endPerfTime - startPerfTime;

console.log('✅ Performance test results:');
console.log(`  Validated ${testCount} times in ${duration.toFixed(2)}ms`);
console.log(`  Average: ${(duration / testCount).toFixed(4)}ms per validation`);
console.log(`  Valid times: ${validCount}/${testCount} (${(validCount/testCount*100).toFixed(1)}%)`);
console.log('');

// ========================================
// 7. Event-Driven Reactive UI Simulation
// ========================================
console.log('7. 🎭 Event-Driven Reactive UI Simulation');
console.log('-----------------------------------------');

const uiController = TimeController({
  use12HourFormat: true,
  showSeconds: true
});

let uiState = {
  displayTime: 'No time selected',
  isAM: true,
  focusedField: null,
  validationMessage: ''
};

// Simulate UI update functions
const updateUI = () => {
  console.log('  📱 UI Updated:');
  console.log(`    Display: ${uiState.displayTime}`);
  console.log(`    Period: ${uiState.isAM ? 'AM' : 'PM'}`);
  console.log(`    Focus: ${uiState.focusedField || 'None'}`);
  if (uiState.validationMessage) {
    console.log(`    Validation: ${uiState.validationMessage}`);
  }
};

// Subscribe to all events
const subscriptions = [];

subscriptions.push(uiController.events.timeSelected.subscribe((time) => {
  uiState.displayTime = time.toLocaleTimeString();
  uiState.isAM = time.getHours() < 12;
  uiState.validationMessage = '';
  updateUI();
}));

subscriptions.push(uiController.events.segmentFocused.subscribe((segment) => {
  uiState.focusedField = segment;
  updateUI();
}));

subscriptions.push(uiController.events.formatChanged.subscribe((format) => {
  console.log('  🔄 Format changed:', format);
}));

console.log('✅ Simulating reactive UI:');

// Simulate user interactions
uiController.methods.setFocusedSegment('hours');
uiController.selectTime(new Date(2025, 5, 26, 14, 30, 0));
uiController.methods.setFocusedSegment('minutes');
uiController.methods.togglePeriod();

// Cleanup subscriptions
subscriptions.forEach(unsub => unsub());
console.log('  🧹 Event subscriptions cleaned up');
console.log('');

// ========================================
// 8. Integration with External Calendar Systems
// ========================================
console.log('8. 🗓️ Integration with External Calendar Systems');
console.log('------------------------------------------------');

const calendarIntegration = TimeController({
  use12HourFormat: true,
  isRangeSelection: true,
  minuteStep: 15
});

// Simulate external calendar events
const externalEvents = [
  {
    title: 'Team Standup',
    start: new Date(2025, 5, 26, 9, 0),
    end: new Date(2025, 5, 26, 9, 30),
    type: 'recurring'
  },
  {
    title: 'Client Meeting',
    start: new Date(2025, 5, 26, 14, 0),
    end: new Date(2025, 5, 26, 15, 30),
    type: 'important'
  },
  {
    title: 'Project Review',
    start: new Date(2025, 5, 26, 16, 0),
    end: new Date(2025, 5, 26, 17, 0),
    type: 'regular'
  }
];

// Find available time slots
const findAvailableSlots = (date, duration) => {
  const slots = [];
  const workStart = 8; // 8 AM
  const workEnd = 18; // 6 PM
  
  for (let hour = workStart; hour < workEnd; hour++) {
    for (let minute = 0; minute < 60; minute += 15) {
      const slotStart = new Date(date);
      slotStart.setHours(hour, minute, 0);
      
      const slotEnd = new Date(slotStart);
      slotEnd.setMinutes(slotEnd.getMinutes() + duration);
      
      // Check if slot conflicts with existing events
      const hasConflict = externalEvents.some(event => 
        slotStart < event.end && slotEnd > event.start
      );
      
      if (!hasConflict && slotEnd.getHours() < workEnd) {
        slots.push({
          start: slotStart,
          end: slotEnd
        });
      }
    }
  }
  
  return slots.slice(0, 5); // Return first 5 available slots
};

console.log('✅ External calendar integration:');
console.log('  Existing events:');
externalEvents.forEach((event, i) => {
  console.log(`    ${i + 1}. ${event.title}: ${event.start.toLocaleTimeString()} - ${event.end.toLocaleTimeString()}`);
});

const availableSlots = findAvailableSlots(new Date(2025, 5, 26), 60); // 60-minute meetings
console.log('\n  Available 1-hour slots:');
availableSlots.forEach((slot, i) => {
  console.log(`    ${i + 1}. ${slot.start.toLocaleTimeString()} - ${slot.end.toLocaleTimeString()}`);
});
console.log('');

// ========================================
// 9. Accessibility Testing
// ========================================
console.log('9. ♿ Accessibility Testing');
console.log('--------------------------');

const a11yController = TimeController({
  use12HourFormat: true,
  showSeconds: true,
  showMilliseconds: false
});

// Simulate keyboard navigation
const keyboardNavigation = [
  'Tab to hours',
  'Arrow up (increase hour)',
  'Tab to minutes', 
  'Arrow down (decrease minute)',
  'Tab to seconds',
  'Tab to period',
  'Space (toggle AM/PM)'
];

console.log('✅ Keyboard navigation simulation:');
keyboardNavigation.forEach((action, i) => {
  switch (i) {
    case 0: // Tab to hours
      a11yController.methods.setFocusedSegment('hours');
      break;
    case 1: // Arrow up
      a11yController.methods.goToNextHour();
      break;
    case 2: // Tab to minutes
      a11yController.methods.setFocusedSegment('minutes');
      break;
    case 3: // Arrow down
      a11yController.methods.goToPreviousMinute();
      break;
    case 4: // Tab to seconds
      a11yController.methods.setFocusedSegment('seconds');
      break;
    case 5: // Tab to period
      a11yController.methods.setFocusedSegment('period');
      break;
    case 6: // Space
      a11yController.methods.togglePeriod();
      break;
  }
  
  console.log(`  ${i + 1}. ${action}`);
  console.log(`     Focus: ${a11yController.bindings.focusedSegment.current}`);
  if (a11yController.bindings.selectedTime.current) {
    console.log(`     Time: ${a11yController.methods.getFormattedTime()}`);
  }
});
console.log('');

// ========================================
// 10. Error Handling and Edge Cases
// ========================================
console.log('10. 🚨 Error Handling and Edge Cases');
console.log('------------------------------------');

const robustController = TimeController({
  use12HourFormat: true,
  showSeconds: false
});

const edgeCases = [
  {
    name: 'Midnight transition',
    test: () => {
      const midnight = new Date();
      midnight.setHours(23, 59, 0);
      robustController.selectTime(midnight);
      robustController.methods.goToNextMinute();
      return robustController.methods.getFormattedTime();
    }
  },
  {
    name: 'Noon transition',
    test: () => {
      const almostNoon = new Date();
      almostNoon.setHours(11, 59, 0);
      robustController.selectTime(almostNoon);
      robustController.methods.goToNextMinute();
      return robustController.methods.getFormattedTime();
    }
  },
  {
    name: 'Invalid hour handling',
    test: () => {
      try {
        robustController.methods.setHour(25); // Invalid hour
        return 'Should not reach here';
      } catch (error) {
        return 'Gracefully handled invalid input';
      }
    }
  },
  {
    name: 'Extreme time rounding',
    test: () => {
      robustController.methods.setMinuteStep(15);
      const extremeTime = new Date();
      extremeTime.setHours(14, 7, 33, 999); // 2:07:33.999 PM
      const rounded = robustController.methods.roundToStep(extremeTime);
      robustController.selectTime(rounded);
      return robustController.methods.getFormattedTime();
    }
  }
];

console.log('✅ Edge case testing:');
edgeCases.forEach(testCase => {
  try {
    const result = testCase.test();
    console.log(`  ${testCase.name}: ✅ ${result}`);
  } catch (error) {
    console.log(`  ${testCase.name}: ❌ ${error.message}`);
  }
});
console.log('');

console.log('🎯 Advanced Examples Complete!');
console.log('===============================');
console.log('');
console.log('Advanced capabilities demonstrated:');
console.log('• 🔒 Complex constraint systems');
console.log('• 🌐 Multi-timezone support');
console.log('• ⚡ Dynamic configuration');
console.log('• 🧠 Custom validation logic');
console.log('• 📊 Overlap detection algorithms');
console.log('• 📈 Performance optimization');
console.log('• 🎭 Reactive UI patterns');
console.log('• 🗓️ External system integration');
console.log('• ♿ Accessibility compliance');
console.log('• 🚨 Robust error handling');
console.log('');
console.log('These examples show how the Time Controller can handle:');
console.log('• Enterprise scheduling systems');
console.log('• Healthcare appointment booking');
console.log('• Multi-user calendar applications');
console.log('• Accessibility-first time pickers');
console.log('• High-performance time validation');
console.log('• Complex business rule enforcement');
