import { NavigationCoordinator } from '../../coordinators/navigation-coordinator';
import { CalendarStateManager } from '../../coordinators/state-manager';
import { BindingsCoordinator } from '../../coordinators/bindings-coordinator';
import { CalendarControllerBindings, CalendarControllerEvents } from '../../types';
import { CalendarGetters } from '../../types/getters.type';
import { INavigationService, ICalendarService, IEventManagerService } from '../../interfaces';
import type { Binding } from '@uplink-protocol/core';
import { createDate } from '../test-utils';

describe('NavigationCoordinator', () => {
  let coordinator: NavigationCoordinator;
  let stateManager: CalendarStateManager;
  let mockBindingsCoordinator: jest.Mocked<BindingsCoordinator>;
  let mockNavigationService: jest.Mocked<INavigationService>;
  let mockCalendarService: jest.Mocked<ICalendarService>;
  let mockEventManagerService: jest.Mocked<IEventManagerService>;
  let mockBindings: CalendarControllerBindings;
  let mockEvents: CalendarControllerEvents;
  let mockGetters: CalendarGetters;

  beforeEach(() => {
    stateManager = new CalendarStateManager();
    stateManager.currentDate = createDate(2025, 4, 21);
    stateManager.yearRangeSize = 12;

    mockBindingsCoordinator = {
      updateAllBindings: jest.fn(),
      executeBatchedBindingUpdates: jest.fn(),
      updateCalendarViewBindings: jest.fn()
    } as any;

    mockNavigationService = {
      navigateToNextMonth: jest.fn((date) => {
        const newDate = new Date(date);
        newDate.setMonth(newDate.getMonth() + 1);
        return newDate;
      }),
      navigateToPreviousMonth: jest.fn((date) => {
        const newDate = new Date(date);
        newDate.setMonth(newDate.getMonth() - 1);
        return newDate;
      }),
      navigateToNextYear: jest.fn((date) => {
        const newDate = new Date(date);
        newDate.setFullYear(newDate.getFullYear() + 1);
        return newDate;
      }),
      navigateToPreviousYear: jest.fn((date) => {
        const newDate = new Date(date);
        newDate.setFullYear(newDate.getFullYear() - 1);
        return newDate;
      }),
      navigateToYear: jest.fn((date, year) => {
        const newDate = new Date(date);
        newDate.setFullYear(year);
        return newDate;
      }),
      navigateToDate: jest.fn((date) => new Date(date)),
      navigateToToday: jest.fn(() => new Date())
    } as any;

    mockCalendarService = {
      getMonthName: jest.fn((month) => ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][month]),
      getWeekNumber: jest.fn(() => 1)
    } as any;

    mockEventManagerService = {
      emitMonthChanged: jest.fn(),
      emitYearChanged: jest.fn(),
      emitViewChanged: jest.fn(),
      emitYearRangeChanged: jest.fn(),
      emitDateSelected: jest.fn(),
      emitRangeSelected: jest.fn()
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

    mockEvents = {
      monthChanged: jest.fn(),
      yearChanged: jest.fn(),
      viewChanged: jest.fn(),
      yearRangeChanged: jest.fn(),
      dateSelected: jest.fn(),
      rangeSelected: jest.fn()
    } as any;

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
      currentYearRangeBase: jest.fn(() => 2020),
      formattedDate: jest.fn(() => '2025-05-21'),
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

    coordinator = new NavigationCoordinator(
      mockNavigationService,
      stateManager,
      mockBindingsCoordinator
    );
  });

  describe('goToMonth', () => {
    it('should navigate to specified month and year', () => {
      coordinator.goToMonth(6, 2025, mockBindings, mockEvents, mockGetters, mockCalendarService, mockEventManagerService);

      expect(stateManager.currentDate.getMonth()).toBe(6);
      expect(stateManager.currentDate.getFullYear()).toBe(2025);
    });

    it('should update bindings', () => {
      coordinator.goToMonth(6, 2025, mockBindings, mockEvents, mockGetters, mockCalendarService, mockEventManagerService);

      expect(mockBindings.currentMonth.set).toHaveBeenCalledWith(6);
      expect(mockBindings.currentYear.set).toHaveBeenCalledWith(2025);
    });

    it('should emit events', () => {
      coordinator.goToMonth(6, 2025, mockBindings, mockEvents, mockGetters, mockCalendarService, mockEventManagerService);

      expect(mockEventManagerService.emitMonthChanged).toHaveBeenCalledWith(mockEvents.monthChanged, 6);
      expect(mockEventManagerService.emitYearChanged).toHaveBeenCalledWith(mockEvents.yearChanged, 2025);
    });
  });

  describe('goToYear', () => {
    it('should navigate to specified year', () => {
      const originalDate = stateManager.currentDate;
      
      coordinator.goToYear(2026, mockBindings, mockEvents, mockGetters, mockCalendarService, mockEventManagerService);

      expect(mockNavigationService.navigateToYear).toHaveBeenCalledWith(originalDate, 2026);
      expect(stateManager.currentDate.getFullYear()).toBe(2026);
    });

    it('should emit year changed event', () => {
      coordinator.goToYear(2026, mockBindings, mockEvents, mockGetters, mockCalendarService, mockEventManagerService);

      expect(mockEventManagerService.emitYearChanged).toHaveBeenCalledWith(mockEvents.yearChanged, 2026);
    });
  });

  describe('goToDate', () => {
    it('should navigate to specified date', () => {
      const targetDate = createDate(2025, 7, 15);
      
      coordinator.goToDate(targetDate, null, null, mockBindings, mockEvents, mockGetters, mockCalendarService, mockEventManagerService);

      expect(mockNavigationService.navigateToDate).toHaveBeenCalledWith(targetDate);
    });

    it('should not navigate when date is before minDate', () => {
      const targetDate = createDate(2025, 0, 15);
      const minDate = createDate(2025, 3, 1);
      
      coordinator.goToDate(targetDate, minDate, null, mockBindings, mockEvents, mockGetters, mockCalendarService, mockEventManagerService);

      expect(mockNavigationService.navigateToDate).not.toHaveBeenCalled();
    });

    it('should not navigate when date is after maxDate', () => {
      const targetDate = createDate(2025, 11, 15);
      const maxDate = createDate(2025, 9, 31);
      
      coordinator.goToDate(targetDate, null, maxDate, mockBindings, mockEvents, mockGetters, mockCalendarService, mockEventManagerService);

      expect(mockNavigationService.navigateToDate).not.toHaveBeenCalled();
    });

    it('should navigate when date is within minDate and maxDate', () => {
      const targetDate = createDate(2025, 5, 15);
      const minDate = createDate(2025, 0, 1);
      const maxDate = createDate(2025, 11, 31);
      
      coordinator.goToDate(targetDate, minDate, maxDate, mockBindings, mockEvents, mockGetters, mockCalendarService, mockEventManagerService);

      expect(mockNavigationService.navigateToDate).toHaveBeenCalledWith(targetDate);
    });
  });

  describe('goToNextMonth', () => {
    it('should navigate to next month', () => {
      coordinator.goToNextMonth(mockBindings, mockEvents, mockGetters, mockCalendarService, mockEventManagerService);

      expect(mockNavigationService.navigateToNextMonth).toHaveBeenCalled();
      expect(stateManager.currentDate.getMonth()).toBe(5);
    });

    it('should update focused date when set', () => {
      stateManager.focusedDate = createDate(2025, 4, 15);
      
      coordinator.goToNextMonth(mockBindings, mockEvents, mockGetters, mockCalendarService, mockEventManagerService);

      expect(stateManager.focusedDate?.getMonth()).toBe(5);
    });

    it('should not update focused date when not set', () => {
      stateManager.focusedDate = null;
      
      coordinator.goToNextMonth(mockBindings, mockEvents, mockGetters, mockCalendarService, mockEventManagerService);

      expect(stateManager.focusedDate).toBeNull();
    });
  });

  describe('goToPreviousMonth', () => {
    it('should navigate to previous month', () => {
      coordinator.goToPreviousMonth(mockBindings, mockEvents, mockGetters, mockCalendarService, mockEventManagerService);

      expect(mockNavigationService.navigateToPreviousMonth).toHaveBeenCalled();
      expect(stateManager.currentDate.getMonth()).toBe(3);
    });

    it('should update focused date when set', () => {
      stateManager.focusedDate = createDate(2025, 4, 15);
      
      coordinator.goToPreviousMonth(mockBindings, mockEvents, mockGetters, mockCalendarService, mockEventManagerService);

      expect(stateManager.focusedDate?.getMonth()).toBe(3);
    });
  });

  describe('goToNextYear', () => {
    it('should navigate to next year', () => {
      coordinator.goToNextYear(mockBindings, mockEvents, mockGetters, mockCalendarService, mockEventManagerService);

      expect(mockNavigationService.navigateToNextYear).toHaveBeenCalled();
      expect(stateManager.currentDate.getFullYear()).toBe(2026);
    });

    it('should update focused date when set', () => {
      stateManager.focusedDate = createDate(2025, 4, 15);
      
      coordinator.goToNextYear(mockBindings, mockEvents, mockGetters, mockCalendarService, mockEventManagerService);

      expect(stateManager.focusedDate?.getFullYear()).toBe(2026);
    });
  });

  describe('goToPreviousYear', () => {
    it('should navigate to previous year', () => {
      coordinator.goToPreviousYear(mockBindings, mockEvents, mockGetters, mockCalendarService, mockEventManagerService);

      expect(mockNavigationService.navigateToPreviousYear).toHaveBeenCalled();
      expect(stateManager.currentDate.getFullYear()).toBe(2024);
    });

    it('should update focused date when set', () => {
      stateManager.focusedDate = createDate(2025, 4, 15);
      
      coordinator.goToPreviousYear(mockBindings, mockEvents, mockGetters, mockCalendarService, mockEventManagerService);

      expect(stateManager.focusedDate?.getFullYear()).toBe(2024);
    });
  });

  describe('goToToday', () => {
    it('should navigate to today', () => {
      coordinator.goToToday(mockBindings, mockEvents, mockGetters, mockCalendarService, mockEventManagerService);

      expect(mockNavigationService.navigateToToday).toHaveBeenCalled();
    });
  });

  describe('goToNextYearRange', () => {
    it('should navigate to next year range', () => {
      stateManager.currentYearRangeBase = 2020;
      
      coordinator.goToNextYearRange(mockBindings, mockEvents, mockGetters, mockEventManagerService);

      expect(stateManager.currentYearRangeBase).toBe(2032); // 2020 + 12
    });

    it('should update bindings', () => {
      coordinator.goToNextYearRange(mockBindings, mockEvents, mockGetters, mockEventManagerService);

      expect(mockBindingsCoordinator.updateAllBindings).toHaveBeenCalledWith(
        mockBindings,
        mockGetters,
        expect.objectContaining({
          calendarYears: true,
          currentYearRangeBase: true
        })
      );
    });

    it('should emit year range changed event', () => {
      stateManager.currentYearRangeBase = 2020;
      
      coordinator.goToNextYearRange(mockBindings, mockEvents, mockGetters, mockEventManagerService);

      expect(mockEventManagerService.emitYearRangeChanged).toHaveBeenCalledWith(
        mockEvents.yearRangeChanged,
        expect.objectContaining({
          startYear: 2032,
          endYear: 2043
        })
      );
    });
  });

  describe('goToPreviousYearRange', () => {
    it('should navigate to previous year range', () => {
      stateManager.currentYearRangeBase = 2020;
      
      coordinator.goToPreviousYearRange(mockBindings, mockEvents, mockGetters, mockEventManagerService);

      expect(stateManager.currentYearRangeBase).toBe(2008); // 2020 - 12
    });

    it('should not go below zero', () => {
      stateManager.currentYearRangeBase = 5;
      
      coordinator.goToPreviousYearRange(mockBindings, mockEvents, mockGetters, mockEventManagerService);

      expect(stateManager.currentYearRangeBase).toBe(0);
    });
  });

  describe('getCurrentYearRange', () => {
    it('should return current year range', () => {
      stateManager.currentYearRangeBase = 2020;
      stateManager.yearRangeSize = 12;
      
      const result = coordinator.getCurrentYearRange();

      expect(result).toEqual({
        startYear: 2020,
        endYear: 2031
      });
    });

    it('should calculate year range from current date when base is 0', () => {
      stateManager.currentYearRangeBase = 0;
      stateManager.currentDate = createDate(2025, 4, 21);
      stateManager.yearRangeSize = 12;
      
      const result = coordinator.getCurrentYearRange();

      expect(result.startYear).toBe(2016); // 2025 - (2025 % 12) = 2025 - 9 = 2016
    });
  });

  describe('setCurrentYearRange', () => {
    it('should set current year range based on date', () => {
      const date = createDate(2027, 0, 1);
      
      coordinator.setCurrentYearRange(date, mockBindings, mockGetters);

      expect(stateManager.currentYearRangeBase).toBe(2016); // 2027 - (2027 % 12) = 2027 - 11 = 2016
    });

    it('should update bindings', () => {
      const date = createDate(2027, 0, 1);
      
      coordinator.setCurrentYearRange(date, mockBindings, mockGetters);

      expect(mockBindingsCoordinator.updateAllBindings).toHaveBeenCalledWith(
        mockBindings,
        mockGetters,
        expect.objectContaining({
          calendarYears: true,
          currentYearRangeBase: true
        })
      );
    });
  });

  describe('setYearRangeSize', () => {
    it('should set year range size', () => {
      coordinator.setYearRangeSize(15, mockBindings, mockGetters);

      expect(stateManager.yearRangeSize).toBe(15);
    });

    it('should recalculate current year range base', () => {
      stateManager.currentDate = createDate(2025, 4, 21);
      
      coordinator.setYearRangeSize(10, mockBindings, mockGetters);

      expect(stateManager.currentYearRangeBase).toBe(2020); // 2025 - (2025 % 10)
    });

    it('should not set invalid year range size', () => {
      stateManager.yearRangeSize = 12;
      
      coordinator.setYearRangeSize(0, mockBindings, mockGetters);

      expect(stateManager.yearRangeSize).toBe(12);
    });
  });

  describe('updateCurrentDate', () => {
    it('should update current date in state manager', () => {
      const newDate = createDate(2025, 6, 15);
      
      coordinator.updateCurrentDate(newDate, mockBindings, mockEvents, mockGetters, mockCalendarService, mockEventManagerService);

      expect(stateManager.currentDate).toEqual(newDate);
    });

    it('should update year range base', () => {
      const newDate = createDate(2027, 0, 1);
      
      coordinator.updateCurrentDate(newDate, mockBindings, mockEvents, mockGetters, mockCalendarService, mockEventManagerService);

      expect(stateManager.currentYearRangeBase).toBe(2016); // 2027 - (2027 % 12) = 2027 - 11 = 2016
    });

    it('should emit all events', () => {
      const newDate = createDate(2025, 6, 15);
      
      coordinator.updateCurrentDate(newDate, mockBindings, mockEvents, mockGetters, mockCalendarService, mockEventManagerService);

      expect(mockEventManagerService.emitMonthChanged).toHaveBeenCalledWith(mockEvents.monthChanged, 6);
      expect(mockEventManagerService.emitYearChanged).toHaveBeenCalledWith(mockEvents.yearChanged, 2025);
      expect(mockEventManagerService.emitViewChanged).toHaveBeenCalledWith(mockEvents.viewChanged, { month: 6, year: 2025 });
    });
  });
});
