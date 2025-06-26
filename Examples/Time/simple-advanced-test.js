// Simple test of advanced features
const { TimeController } = require('../../dist/index.js');

console.log('Testing advanced Time Controller features...\n');

// Test 1: Complex constraints
console.log('1. Testing complex constraints:');
const controller = TimeController({
  use12HourFormat: true,
  minuteStep: 15
});

// Set business hours
const start = new Date();
start.setHours(9, 0, 0);
const end = new Date();
end.setHours(17, 0, 0);

controller.methods.setMinTime(start);
controller.methods.setMaxTime(end);
controller.methods.setDisabledHours([12, 13]); // Lunch break

console.log('✅ Business hours set: 9 AM - 5 PM');
console.log('✅ Lunch break disabled: 12 PM - 1 PM');

// Test validation
const testTime = new Date();
testTime.setHours(14, 30, 0);
console.log('Is 2:30 PM valid?', controller.methods.isTimeValid(testTime));

const lunchTime = new Date();
lunchTime.setHours(12, 30, 0);
console.log('Is 12:30 PM valid?', controller.methods.isTimeValid(lunchTime));

console.log('\n2. Testing time navigation:');
controller.selectTime(testTime);
console.log('Initial time:', controller.methods.getFormattedTime());

controller.methods.goToNextMinute(); // Should go to 2:45 due to 15-min step
console.log('After next minute (15-min step):', controller.methods.getFormattedTime());

console.log('\n3. Testing range selection:');
const rangeController = TimeController({
  isRangeSelection: true,
  use12HourFormat: true
});

const start1 = new Date();
start1.setHours(9, 0, 0);
rangeController.selectTime(start1);

const end1 = new Date();
end1.setHours(17, 0, 0);
rangeController.selectTime(end1);

const range = rangeController.selectedTimeRange;
console.log('Time range selected:');
console.log('  Start:', range.startTime?.toLocaleTimeString());
console.log('  End:', range.endTime?.toLocaleTimeString());

console.log('\n✅ Advanced features test complete!');
