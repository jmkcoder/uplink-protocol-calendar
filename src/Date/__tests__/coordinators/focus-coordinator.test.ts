import { FocusCoordinator } from '../../coordinators/focus-coordinator';
import { CalendarStateManager } from '../../coordinators/state-manager';
import { CalendarControllerBindings } from '../../types';
import { CalendarGetters } from '../../types/getters.type';
import { IAccessibilityManagerService } from '../../interfaces';
import type { Binding } from '@uplink-protocol/core';
import { createDate } from '../test-utils';

describe('FocusCoordinator', () => {
  let coordinator: FocusCoordinator;
  let stateManager: CalendarStateManager;
  let mockAccessibilityService: jest.Mocked<IAccessibilityManagerService>;
  let mockBindings: CalendarControllerBindings;
  let mockGetters: CalendarGetters;
  let updateCurrentDateFn: jest.Mock;

  beforeEach(() => {
    stateManager = new CalendarStateManager();
    stateManager.currentDate = createDate(2025, 4, 21);
    stateManager.firstDayOfWeek = 0; // Sunday

    mockAccessibilityService = {
      getAccessibleDateLabel: jest.fn((date: Date) => date.toDateString()),
      getDateStateDescription: jest.fn(() => 'Selected'),
      getMonthYearLabel: jest.fn(() => 'May 2025'),
      getWeekdayLabel: jest.fn(() => 'Monday')
    } as any;

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
      focusedDate: jest.fn(() => null),
      currentDate: jest.fn(() => testDate),
      currentMonth: jest.fn(() => 4),
      currentYear: jest.fn(() => 2025),
      monthName: jest.fn(() => 'May'),
      calendarDays: jest.fn(() => []),
      calendarMonths: jest.fn(() => []),
      calendarYears: jest.fn(() => []),
      weekdays: jest.fn(() => ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']),
      isRangeSelection: jest.fn(() => false),
      formattedDate: jest.fn(() => null),
      currentYearRangeBase: jest.fn(() => 2020),
      currentYearRange: jest.fn(() => ({ startYear: 2020, endYear: 2031 })),
      minDate: jest.fn(() => null),
      maxDate: jest.fn(() => null),
      disabledDates: jest.fn(() => []),
      disabledDaysOfWeek: jest.fn(() => []),
      firstDayOfWeek: jest.fn(() => 0),
      locale: jest.fn(() => 'en-US'),
      hideOtherMonthDays: jest.fn(() => false),
      yearRangeSize: jest.fn(() => 12)
    };

    updateCurrentDateFn = jest.fn();

    coordinator = new FocusCoordinator(
      stateManager,
      mockAccessibilityService
    );
  });

  describe('focusDate', () => {
    it('should set focused date in state manager', () => {
      const date = createDate(2025, 4, 15);
      
      coordinator.focusDate(date, mockBindings);

      expect(stateManager.focusedDate).toEqual(date);
    });

    it('should update focused date binding', () => {
      const date = createDate(2025, 4, 15);
      
      coordinator.focusDate(date, mockBindings);

      expect(mockBindings.focusedDate.set).toHaveBeenCalledWith(date);
    });

    it('should update current date when different month and callback provided', () => {
      const date = createDate(2025, 5, 15); // Different month
      
      coordinator.focusDate(date, mockBindings, updateCurrentDateFn);

      expect(updateCurrentDateFn).toHaveBeenCalledWith(date);
    });

    it('should not update current date when same month', () => {
      const date = createDate(2025, 4, 15); // Same month
      
      coordinator.focusDate(date, mockBindings, updateCurrentDateFn);

      expect(updateCurrentDateFn).not.toHaveBeenCalled();
    });

    it('should not update current date when callback not provided', () => {
      const date = createDate(2025, 5, 15);
      
      expect(() => {
        coordinator.focusDate(date, mockBindings);
      }).not.toThrow();
    });
  });

  describe('setFocusedDate', () => {
    it('should delegate to focusDate', () => {
      const date = createDate(2025, 4, 15);
      
      coordinator.setFocusedDate(date, mockBindings);

      expect(stateManager.focusedDate).toEqual(date);
      expect(mockBindings.focusedDate.set).toHaveBeenCalledWith(date);
    });
  });

  describe('clearFocusedDate', () => {
    it('should clear focused date in state manager', () => {
      stateManager.focusedDate = createDate(2025, 4, 15);
      
      coordinator.clearFocusedDate(mockBindings);

      expect(stateManager.focusedDate).toBeNull();
    });

    it('should update focused date binding to null', () => {
      coordinator.clearFocusedDate(mockBindings);

      expect(mockBindings.focusedDate.set).toHaveBeenCalledWith(null);
    });
  });

  describe('selectFocusedDate', () => {
    it('should call selectDateFn with focused date when set', () => {
      const focusedDate = createDate(2025, 4, 15);
      stateManager.focusedDate = focusedDate;
      const selectDateFn = jest.fn();
      
      coordinator.selectFocusedDate(mockBindings, selectDateFn);

      expect(selectDateFn).toHaveBeenCalledWith(focusedDate);
    });

    it('should not call selectDateFn when no focused date', () => {
      const selectDateFn = jest.fn();
      
      coordinator.selectFocusedDate(mockBindings, selectDateFn);

      expect(selectDateFn).not.toHaveBeenCalled();
    });
  });

  describe('moveFocusLeft', () => {
    it('should move focus to previous day', () => {
      stateManager.focusedDate = createDate(2025, 4, 15);
      
      coordinator.moveFocusLeft(mockBindings, mockGetters, updateCurrentDateFn);

      expect(stateManager.focusedDate).not.toBeNull();
      expect(stateManager.focusedDate!.getDate()).toBe(14);
    });

    it('should update current date when moving to previous month', () => {
      stateManager.focusedDate = createDate(2025, 4, 1);
      
      coordinator.moveFocusLeft(mockBindings, mockGetters, updateCurrentDateFn);

      expect(updateCurrentDateFn).toHaveBeenCalled();
    });

    it('should use current date as fallback when no focused date', () => {
      stateManager.focusedDate = null;
      mockGetters.focusedDate = jest.fn(() => createDate(2025, 4, 15));
      
      coordinator.moveFocusLeft(mockBindings, mockGetters, updateCurrentDateFn);

      expect(stateManager.focusedDate).not.toBeNull();
      expect(stateManager.focusedDate!.getDate()).toBe(14);
    });
  });

  describe('moveFocusRight', () => {
    it('should move focus to next day', () => {
      stateManager.focusedDate = createDate(2025, 4, 15);
      
      coordinator.moveFocusRight(mockBindings, mockGetters, updateCurrentDateFn);

      expect(stateManager.focusedDate?.getDate()).toBe(16);
    });

    it('should update current date when moving to next month', () => {
      stateManager.focusedDate = createDate(2025, 4, 31);
      
      coordinator.moveFocusRight(mockBindings, mockGetters, updateCurrentDateFn);

      expect(updateCurrentDateFn).toHaveBeenCalled();
    });
  });

  describe('moveFocusUp', () => {
    it('should move focus up one week', () => {
      stateManager.focusedDate = createDate(2025, 4, 15);
      
      coordinator.moveFocusUp(mockBindings, mockGetters, updateCurrentDateFn);

      expect(stateManager.focusedDate?.getDate()).toBe(8);
    });

    it('should update current date when moving to previous month', () => {
      stateManager.focusedDate = createDate(2025, 4, 5);
      
      coordinator.moveFocusUp(mockBindings, mockGetters, updateCurrentDateFn);

      expect(updateCurrentDateFn).toHaveBeenCalled();
    });
  });

  describe('moveFocusDown', () => {
    it('should move focus down one week', () => {
      stateManager.focusedDate = createDate(2025, 4, 15);
      
      coordinator.moveFocusDown(mockBindings, mockGetters, updateCurrentDateFn);

      expect(stateManager.focusedDate?.getDate()).toBe(22);
    });

    it('should update current date when moving to next month', () => {
      stateManager.focusedDate = createDate(2025, 4, 28);
      
      coordinator.moveFocusDown(mockBindings, mockGetters, updateCurrentDateFn);

      expect(updateCurrentDateFn).toHaveBeenCalled();
    });
  });

  describe('moveFocusToStartOfWeek', () => {
    it('should move focus to start of week (Sunday)', () => {
      stateManager.focusedDate = createDate(2025, 4, 15); // Thursday
      stateManager.firstDayOfWeek = 0; // Sunday
      
      coordinator.moveFocusToStartOfWeek(mockBindings, mockGetters);

      expect(stateManager.focusedDate?.getDay()).toBe(0); // Sunday
    });

    it('should handle Monday as first day of week', () => {
      stateManager.focusedDate = createDate(2025, 4, 15); // Thursday
      stateManager.firstDayOfWeek = 1; // Monday
      
      coordinator.moveFocusToStartOfWeek(mockBindings, mockGetters);

      expect(stateManager.focusedDate?.getDay()).toBe(1); // Monday
    });

    it('should stay on same date if already at start of week', () => {
      stateManager.focusedDate = createDate(2025, 4, 11); // Sunday
      stateManager.firstDayOfWeek = 0;
      
      coordinator.moveFocusToStartOfWeek(mockBindings, mockGetters);

      expect(stateManager.focusedDate?.getDate()).toBe(11);
    });
  });

  describe('moveFocusToEndOfWeek', () => {
    it('should move focus to end of week (Saturday)', () => {
      stateManager.focusedDate = createDate(2025, 4, 15); // Thursday
      stateManager.firstDayOfWeek = 0; // Sunday
      
      coordinator.moveFocusToEndOfWeek(mockBindings, mockGetters);

      expect(stateManager.focusedDate?.getDay()).toBe(6); // Saturday
    });

    it('should handle Monday as first day of week', () => {
      stateManager.focusedDate = createDate(2025, 4, 15); // Thursday
      stateManager.firstDayOfWeek = 1; // Monday
      
      coordinator.moveFocusToEndOfWeek(mockBindings, mockGetters);

      expect(stateManager.focusedDate?.getDay()).toBe(0); // Sunday (end of week when week starts Monday)
    });
  });

  describe('moveFocusToStartOfMonth', () => {
    it('should move focus to first day of month', () => {
      stateManager.focusedDate = createDate(2025, 4, 15);
      
      coordinator.moveFocusToStartOfMonth(mockBindings, mockGetters);

      expect(stateManager.focusedDate?.getDate()).toBe(1);
    });
  });

  describe('moveFocusToEndOfMonth', () => {
    it('should move focus to last day of month', () => {
      stateManager.focusedDate = createDate(2025, 4, 15);
      
      coordinator.moveFocusToEndOfMonth(mockBindings, mockGetters);

      expect(stateManager.focusedDate?.getDate()).toBe(31); // May has 31 days
    });

    it('should handle February correctly', () => {
      stateManager.focusedDate = createDate(2025, 1, 15);
      
      coordinator.moveFocusToEndOfMonth(mockBindings, mockGetters);

      expect(stateManager.focusedDate?.getDate()).toBe(28); // 2025 is not a leap year
    });
  });

  describe('moveFocusToNextMonth', () => {
    it('should move focus to same day next month', () => {
      stateManager.focusedDate = createDate(2025, 4, 15);
      
      coordinator.moveFocusToNextMonth(mockBindings, mockGetters, updateCurrentDateFn);

      expect(stateManager.focusedDate?.getMonth()).toBe(5);
      expect(stateManager.focusedDate?.getDate()).toBe(15);
    });

    it('should update current date', () => {
      stateManager.focusedDate = createDate(2025, 4, 15);
      
      coordinator.moveFocusToNextMonth(mockBindings, mockGetters, updateCurrentDateFn);

      expect(updateCurrentDateFn).toHaveBeenCalled();
    });
  });

  describe('moveFocusToPreviousMonth', () => {
    it('should move focus to same day previous month', () => {
      stateManager.focusedDate = createDate(2025, 4, 15);
      
      coordinator.moveFocusToPreviousMonth(mockBindings, mockGetters, updateCurrentDateFn);

      expect(stateManager.focusedDate?.getMonth()).toBe(3);
      expect(stateManager.focusedDate?.getDate()).toBe(15);
    });

    it('should update current date', () => {
      stateManager.focusedDate = createDate(2025, 4, 15);
      
      coordinator.moveFocusToPreviousMonth(mockBindings, mockGetters, updateCurrentDateFn);

      expect(updateCurrentDateFn).toHaveBeenCalled();
    });
  });

  describe('moveFocusToNextYear', () => {
    it('should move focus to same day next year', () => {
      stateManager.focusedDate = createDate(2025, 4, 15);
      
      coordinator.moveFocusToNextYear(mockBindings, mockGetters, updateCurrentDateFn);

      expect(stateManager.focusedDate?.getFullYear()).toBe(2026);
      expect(stateManager.focusedDate?.getMonth()).toBe(4);
      expect(stateManager.focusedDate?.getDate()).toBe(15);
    });

    it('should update current date', () => {
      stateManager.focusedDate = createDate(2025, 4, 15);
      
      coordinator.moveFocusToNextYear(mockBindings, mockGetters, updateCurrentDateFn);

      expect(updateCurrentDateFn).toHaveBeenCalled();
    });
  });

  describe('moveFocusToPreviousYear', () => {
    it('should move focus to same day previous year', () => {
      stateManager.focusedDate = createDate(2025, 4, 15);
      
      coordinator.moveFocusToPreviousYear(mockBindings, mockGetters, updateCurrentDateFn);

      expect(stateManager.focusedDate?.getFullYear()).toBe(2024);
      expect(stateManager.focusedDate?.getMonth()).toBe(4);
      expect(stateManager.focusedDate?.getDate()).toBe(15);
    });

    it('should update current date', () => {
      stateManager.focusedDate = createDate(2025, 4, 15);
      
      coordinator.moveFocusToPreviousYear(mockBindings, mockGetters, updateCurrentDateFn);

      expect(updateCurrentDateFn).toHaveBeenCalled();
    });
  });

  describe('getAccessibleDateLabel', () => {
    it('should delegate to accessibility service', () => {
      const date = createDate(2025, 4, 15);
      
      coordinator.getAccessibleDateLabel(date);

      expect(mockAccessibilityService.getAccessibleDateLabel).toHaveBeenCalledWith(date);
    });

    it('should return label from accessibility service', () => {
      const date = createDate(2025, 4, 15);
      mockAccessibilityService.getAccessibleDateLabel.mockReturnValue('May 15, 2025');
      
      const result = coordinator.getAccessibleDateLabel(date);

      expect(result).toBe('May 15, 2025');
    });
  });

  describe('getDateStateDescription', () => {
    it('should delegate to accessibility service', () => {
      const date = createDate(2025, 4, 15);
      const selectedDate = createDate(2025, 4, 15);
      const selectedDateRange = { startDate: null, endDate: null };
      const isDateDisabledFn = jest.fn(() => false);
      const isTodayFn = jest.fn(() => false);
      
      coordinator.getDateStateDescription(
        date,
        selectedDate,
        selectedDateRange,
        false,
        isDateDisabledFn,
        isTodayFn
      );

      expect(mockAccessibilityService.getDateStateDescription).toHaveBeenCalledWith(
        date,
        selectedDate,
        selectedDateRange,
        false,
        isDateDisabledFn,
        isTodayFn
      );
    });
  });

  describe('getAriaLabel', () => {
    it('should return accessible date label', () => {
      const date = createDate(2025, 4, 15);
      mockAccessibilityService.getAccessibleDateLabel.mockReturnValue('May 15, 2025');
      
      const result = coordinator.getAriaLabel(date);

      expect(result).toBe('May 15, 2025');
    });
  });

  describe('getAriaLabelForMonth', () => {
    it('should return accessible label for month', () => {
      mockAccessibilityService.getAccessibleDateLabel.mockReturnValue('May 2025');
      
      const result = coordinator.getAriaLabelForMonth(4, 2025);

      expect(result).toBe('May 2025');
      expect(mockAccessibilityService.getAccessibleDateLabel).toHaveBeenCalled();
    });
  });

  describe('getAriaLabelForYear', () => {
    it('should return accessible label for year', () => {
      mockAccessibilityService.getAccessibleDateLabel.mockReturnValue('2025');
      
      const result = coordinator.getAriaLabelForYear(2025);

      expect(result).toBe('2025');
      expect(mockAccessibilityService.getAccessibleDateLabel).toHaveBeenCalled();
    });
  });
});
