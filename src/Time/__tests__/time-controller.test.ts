/**
 * Basic Time Controller Tests
 * Ensures the Time Controller works correctly
 */

import { TimeController } from '../controller';
import { TimeOptions } from '../interfaces';

describe('TimeController', () => {
  let controller: any;

  beforeEach(() => {
    controller = TimeController();
  });

  afterEach(() => {
    controller = null;
  });

  describe('Basic Functionality', () => {
    test('should create a time controller instance', () => {
      expect(controller).toBeDefined();
      expect(controller.bindings).toBeDefined();
      expect(controller.methods).toBeDefined();
      expect(controller.events).toBeDefined();
    });

    test('should have reactive bindings', () => {
      expect(controller.bindings.selectedTime).toBeDefined();
      expect(controller.bindings.use12HourFormat).toBeDefined();
      expect(controller.bindings.showSeconds).toBeDefined();
      expect(controller.bindings.showMilliseconds).toBeDefined();
      expect(controller.bindings.formattedTime).toBeDefined();
    });

    test('should have all required methods', () => {
      expect(typeof controller.methods.selectTime).toBe('function');
      expect(typeof controller.methods.setHour).toBe('function');
      expect(typeof controller.methods.setMinute).toBe('function');
      expect(typeof controller.methods.setSecond).toBe('function');
      expect(typeof controller.methods.goToNextHour).toBe('function');
      expect(typeof controller.methods.goToPreviousHour).toBe('function');
      expect(typeof controller.methods.clearSelection).toBe('function');
    });

    test('should have event emitters', () => {
      expect(controller.events.timeSelected).toBeDefined();
      expect(controller.events.timeChanged).toBeDefined();
      expect(controller.events.segmentFocused).toBeDefined();
    });
  });

  describe('Time Selection', () => {    test('should select a time', () => {
      const testTime = new Date(2025, 5, 26, 14, 30, 0);
      controller.methods.selectTime(testTime);
      
      expect(controller.bindings.selectedTime.current).toEqual(testTime);
    });

    test('should clear selection', () => {
      const testTime = new Date(2025, 5, 26, 14, 30, 0);
      controller.methods.selectTime(testTime);
      controller.methods.clearSelection();
      
      expect(controller.bindings.selectedTime.current).toBeNull();
    });

    test('should set individual hour', () => {
      controller.methods.setHour(15);
      const selectedTime = controller.bindings.selectedTime.current;
      
      expect(selectedTime).toBeDefined();
      expect(selectedTime.getHours()).toBe(15);
    });

    test('should set individual minute', () => {
      controller.methods.setMinute(45);
      const selectedTime = controller.bindings.selectedTime.current;
      
      expect(selectedTime).toBeDefined();
      expect(selectedTime.getMinutes()).toBe(45);
    });
  });

  describe('Time Navigation', () => {
    test('should navigate to next hour', () => {
      const testTime = new Date(2025, 5, 26, 14, 30, 0);
      controller.methods.selectTime(testTime);      controller.methods.goToNextHour();
      
      const newTime = controller.bindings.selectedTime.current;
      expect(newTime.getHours()).toBe(15);
    });

    test('should navigate to previous hour', () => {
      const testTime = new Date(2025, 5, 26, 14, 30, 0);
      controller.methods.selectTime(testTime);
      controller.methods.goToPreviousHour();
      
      const newTime = controller.bindings.selectedTime.current;
      expect(newTime.getHours()).toBe(13);
    });

    test('should navigate to next minute', () => {
      const testTime = new Date(2025, 5, 26, 14, 30, 0);
      controller.methods.selectTime(testTime);
      controller.methods.goToNextMinute();
      
      const newTime = controller.bindings.selectedTime.current;
      expect(newTime.getMinutes()).toBe(31);
    });
  });

  describe('Time Formatting', () => {    test('should use 12-hour format', () => {
      controller.methods.setUse12HourFormat(true);
      expect(controller.bindings.use12HourFormat.current).toBe(true);
    });

    test('should show seconds', () => {
      controller.methods.setShowSeconds(true);
      expect(controller.bindings.showSeconds.current).toBe(true);
    });

    test('should show milliseconds', () => {
      controller.methods.setShowMilliseconds(true);
      expect(controller.bindings.showMilliseconds.current).toBe(true);
    });    test('should format time correctly', () => {
      const testTime = new Date(2025, 5, 26, 14, 30, 45);
      
      // Use 24-hour format for predictable testing
      controller.methods.setUse12HourFormat(false);
      const formatted = controller.methods.formatTime(testTime, {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      });
      
      expect(typeof formatted).toBe('string');
      expect(formatted).toContain('14');
      expect(formatted).toContain('30');
    });
  });

  describe('Configuration Options', () => {
    test('should accept initial configuration', () => {
      const options: TimeOptions = {
        use12HourFormat: true,
        showSeconds: true,
        showMilliseconds: false,
        minuteStep: 5,
        locale: 'en-US'
      };

      const configuredController = TimeController(options);
        expect(configuredController.bindings.use12HourFormat.current).toBe(true);
      expect(configuredController.bindings.showSeconds.current).toBe(true);
      expect(configuredController.bindings.showMilliseconds.current).toBe(false);
      expect(configuredController.bindings.minuteStep.current).toBe(5);
      expect(configuredController.bindings.locale.current).toBe('en-US');
    });

    test('should handle disabled hours', () => {
      const options: TimeOptions = {
        disabledHours: [0, 1, 2, 22, 23] // Disable night hours
      };

      const configuredController = TimeController(options);
      const disabledHours = configuredController.methods.getDisabledHours();
      
      expect(disabledHours).toContain(0);
      expect(disabledHours).toContain(23);
      expect(disabledHours).not.toContain(12);
    });
  });

  describe('Focus Management', () => {    test('should set focused segment', () => {
      controller.methods.setFocusedSegment('hours');
      expect(controller.bindings.focusedSegment.current).toBe('hours');
    });

    test('should clear focused segment', () => {
      controller.methods.setFocusedSegment('minutes');
      controller.methods.clearFocusedSegment();
      expect(controller.bindings.focusedSegment.current).toBeNull();
    });

    test('should move focus to next segment', () => {
      controller.methods.setFocusedSegment('hours');
      controller.methods.moveFocusToNextSegment();
      expect(controller.bindings.focusedSegment.current).toBe('minutes');
    });
  });

  describe('Time Validation', () => {
    test('should validate time constraints', () => {
      const validTime = new Date(2025, 5, 26, 12, 0, 0);
      const isValid = controller.methods.isTimeValid(validTime);
      expect(isValid).toBe(true);
    });

    test('should handle min/max time constraints', () => {
      const minTime = new Date(2025, 5, 26, 9, 0, 0);
      const maxTime = new Date(2025, 5, 26, 17, 0, 0);
      
      controller.methods.setMinTime(minTime);
      controller.methods.setMaxTime(maxTime);
      
      const earlyTime = new Date(2025, 5, 26, 8, 0, 0);
      const lateTime = new Date(2025, 5, 26, 18, 0, 0);
      const validTime = new Date(2025, 5, 26, 12, 0, 0);
      
      expect(controller.methods.isTimeValid(earlyTime)).toBe(false);
      expect(controller.methods.isTimeValid(lateTime)).toBe(false);
      expect(controller.methods.isTimeValid(validTime)).toBe(true);
    });
  });

  describe('Range Selection', () => {    test('should support range selection mode', () => {
      controller.methods.setRangeSelectionMode(true);
      expect(controller.bindings.isRangeSelection.current).toBe(true);
    });

    test('should handle time range selection', () => {
      controller.methods.setRangeSelectionMode(true);
      
      const startTime = new Date(2025, 5, 26, 9, 0, 0);
      const endTime = new Date(2025, 5, 26, 17, 0, 0);
      
      controller.methods.selectTime(startTime);
      controller.methods.selectTime(endTime);
      
      const range = controller.selectedTimeRange;
      expect(range.startTime).toBeDefined();
      expect(range.endTime).toBeDefined();
    });
  });
});
