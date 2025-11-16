import { BindingsCoordinator } from '../../coordinators/bindings-coordinator';
import { CalendarControllerBindings } from '../../types';
import { CalendarGetters } from '../../types/getters.type';
import type { Binding } from '@uplink-protocol/core';
import { createDate } from '../test-utils';

describe('BindingsCoordinator', () => {
  let coordinator: BindingsCoordinator;
  let mockBindings: CalendarControllerBindings;
  let mockGetters: CalendarGetters;

  beforeEach(() => {
    coordinator = new BindingsCoordinator();

    // Create mock bindings with proper jest mock structure
    const createMockBinding = <T>(initialValue: T): Binding<T> => ({
      current: initialValue,
      set: jest.fn(),
      subscribe: jest.fn(),
      unsubscribe: jest.fn()
    } as unknown as Binding<T>);

    mockBindings = {
      selectedDate: createMockBinding<Date | null>(null),
      selectedDateRange: createMockBinding({ startDate: null, endDate: null }),
      focusedDate: createMockBinding<Date | null>(null),
      currentDate: createMockBinding(new Date(2025, 4, 21)),
      currentMonth: createMockBinding(4),
      currentYear: createMockBinding(2025),
      monthName: createMockBinding('May'),
      calendarDays: createMockBinding([]),
      calendarMonths: createMockBinding([]),
      calendarYears: createMockBinding([]),
      weekdays: createMockBinding([]),
      isRangeSelection: createMockBinding(false),
      currentYearRangeBase: createMockBinding(2020)
    };

    const testDate = createDate(2025, 4, 21);
    mockGetters = {
      selectedDate: jest.fn(() => testDate),
      selectedDateRange: jest.fn(() => ({ startDate: testDate, endDate: null })),
      focusedDate: jest.fn(() => testDate),
      currentDate: jest.fn(() => testDate),
      currentMonth: jest.fn(() => 4),
      currentYear: jest.fn(() => 2025),
      monthName: jest.fn(() => 'May'),
      calendarDays: jest.fn(() => []),
      calendarMonths: jest.fn(() => []),
      calendarYears: jest.fn(() => []),
      weekdays: jest.fn(() => ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']),
      isRangeSelection: jest.fn(() => false),
      currentYearRangeBase: jest.fn(() => 2020)
    };
  });

  describe('updateAllBindings', () => {
    it('should update all bindings when no selective updates specified', () => {
      coordinator.updateAllBindings(mockBindings, mockGetters);

      expect(mockBindings.selectedDate.set).toHaveBeenCalled();
      expect(mockBindings.selectedDateRange.set).toHaveBeenCalled();
      expect(mockBindings.focusedDate.set).toHaveBeenCalled();
      expect(mockBindings.currentDate.set).toHaveBeenCalled();
      expect(mockBindings.currentMonth.set).toHaveBeenCalled();
      expect(mockBindings.currentYear.set).toHaveBeenCalled();
      expect(mockBindings.monthName.set).toHaveBeenCalled();
      expect(mockBindings.calendarDays.set).toHaveBeenCalled();
      expect(mockBindings.calendarMonths.set).toHaveBeenCalled();
      expect(mockBindings.calendarYears.set).toHaveBeenCalled();
      expect(mockBindings.weekdays.set).toHaveBeenCalled();
      expect(mockBindings.isRangeSelection.set).toHaveBeenCalled();
      expect(mockBindings.currentYearRangeBase.set).toHaveBeenCalled();
    });

    it('should only update selected bindings when selective updates specified', () => {
      coordinator.updateAllBindings(mockBindings, mockGetters, {
        selectedDate: true,
        calendarDays: true
      });

      expect(mockBindings.selectedDate.set).toHaveBeenCalled();
      expect(mockBindings.calendarDays.set).toHaveBeenCalled();
      expect(mockBindings.selectedDateRange.set).not.toHaveBeenCalled();
      expect(mockBindings.focusedDate.set).not.toHaveBeenCalled();
    });

    it('should update currentDate and related bindings when currentDate update is true', () => {
      coordinator.updateAllBindings(mockBindings, mockGetters, {
        currentDate: true
      });

      expect(mockBindings.currentDate.set).toHaveBeenCalled();
      expect(mockBindings.currentMonth.set).toHaveBeenCalled();
      expect(mockBindings.currentYear.set).toHaveBeenCalled();
      expect(mockBindings.monthName.set).toHaveBeenCalled();
    });

    it('should handle missing optional bindings gracefully', () => {
      const partialBindings = {
        selectedDate: mockBindings.selectedDate
      } as CalendarControllerBindings;

      expect(() => {
        coordinator.updateAllBindings(partialBindings, mockGetters);
      }).not.toThrow();

      expect(partialBindings.selectedDate.set).toHaveBeenCalled();
    });

    it('should call getters with correct values', () => {
      coordinator.updateAllBindings(mockBindings, mockGetters);

      expect(mockGetters.selectedDate).toHaveBeenCalled();
      expect(mockGetters.currentDate).toHaveBeenCalled();
      expect(mockGetters.calendarDays).toHaveBeenCalled();
    });

    it('should update only calendarMonths when specified', () => {
      coordinator.updateAllBindings(mockBindings, mockGetters, {
        calendarMonths: true
      });

      expect(mockBindings.calendarMonths.set).toHaveBeenCalled();
      expect(mockBindings.calendarDays.set).not.toHaveBeenCalled();
      expect(mockBindings.calendarYears.set).not.toHaveBeenCalled();
    });

    it('should update only calendarYears when specified', () => {
      coordinator.updateAllBindings(mockBindings, mockGetters, {
        calendarYears: true
      });

      expect(mockBindings.calendarYears.set).toHaveBeenCalled();
      expect(mockBindings.calendarDays.set).not.toHaveBeenCalled();
      expect(mockBindings.calendarMonths.set).not.toHaveBeenCalled();
    });

    it('should update weekdays binding when specified', () => {
      coordinator.updateAllBindings(mockBindings, mockGetters, {
        weekdays: true
      });

      expect(mockBindings.weekdays.set).toHaveBeenCalled();
      expect(mockGetters.weekdays).toHaveBeenCalled();
    });

    it('should update isRangeSelection binding when specified', () => {
      coordinator.updateAllBindings(mockBindings, mockGetters, {
        isRangeSelection: true
      });

      expect(mockBindings.isRangeSelection.set).toHaveBeenCalled();
      expect(mockGetters.isRangeSelection).toHaveBeenCalled();
    });

    it('should update currentYearRangeBase binding when specified', () => {
      coordinator.updateAllBindings(mockBindings, mockGetters, {
        currentYearRangeBase: true
      });

      expect(mockBindings.currentYearRangeBase.set).toHaveBeenCalled();
      expect(mockGetters.currentYearRangeBase).toHaveBeenCalled();
    });
  });

  describe('executeBatchedBindingUpdates', () => {
    it('should execute all update functions synchronously in test environment', () => {
      const updates: Array<() => void> = [
        jest.fn(),
        jest.fn(),
        jest.fn()
      ];

      coordinator.executeBatchedBindingUpdates(updates);

      updates.forEach(update => {
        expect(update).toHaveBeenCalled();
      });
    });

    it('should handle empty updates array', () => {
      expect(() => {
        coordinator.executeBatchedBindingUpdates([]);
      }).not.toThrow();
    });

    it('should execute updates in order', () => {
      const executionOrder: number[] = [];
      const updates = [
        () => executionOrder.push(1),
        () => executionOrder.push(2),
        () => executionOrder.push(3)
      ];

      coordinator.executeBatchedBindingUpdates(updates);

      expect(executionOrder).toEqual([1, 2, 3]);
    });
  });

  describe('updateCalendarViewBindings', () => {
    it('should update all calendar view bindings', () => {
      coordinator.updateCalendarViewBindings(mockBindings, mockGetters);

      expect(mockBindings.calendarDays.set).toHaveBeenCalled();
      expect(mockBindings.calendarMonths.set).toHaveBeenCalled();
      expect(mockBindings.calendarYears.set).toHaveBeenCalled();
    });

    it('should handle missing view bindings gracefully', () => {
      const partialBindings = {
        calendarDays: mockBindings.calendarDays
      } as CalendarControllerBindings;

      expect(() => {
        coordinator.updateCalendarViewBindings(partialBindings, mockGetters);
      }).not.toThrow();

      expect(partialBindings.calendarDays.set).toHaveBeenCalled();
    });

    it('should call correct getter functions', () => {
      coordinator.updateCalendarViewBindings(mockBindings, mockGetters);

      expect(mockGetters.calendarDays).toHaveBeenCalled();
      expect(mockGetters.calendarMonths).toHaveBeenCalled();
      expect(mockGetters.calendarYears).toHaveBeenCalled();
    });
  });
});
