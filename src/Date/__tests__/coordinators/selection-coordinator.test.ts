import { SelectionCoordinator } from '../../coordinators/selection-coordinator';
import { CalendarStateManager } from '../../coordinators/state-manager';
import { BindingsCoordinator } from '../../coordinators/bindings-coordinator';
import { NavigationCoordinator } from '../../coordinators/navigation-coordinator';
import { CalendarControllerBindings, CalendarControllerEvents } from '../../types';
import { CalendarGetters } from '../../types/getters.type';
import { ICalendarStateService, IEventManagerService, ICalendarService } from '../../interfaces';
import type { Binding } from '@uplink-protocol/core';
import { createDate } from '../test-utils';

describe('SelectionCoordinator', () => {
  let coordinator: SelectionCoordinator;
  let stateManager: CalendarStateManager;
  let mockBindingsCoordinator: jest.Mocked<BindingsCoordinator>;
  let mockNavigationCoordinator: jest.Mocked<NavigationCoordinator>;
  let mockCalendarStateService: jest.Mocked<ICalendarStateService>;
  let mockEventManagerService: jest.Mocked<IEventManagerService>;
  let mockCalendarService: jest.Mocked<ICalendarService>;
  let mockBindings: CalendarControllerBindings;
  let mockEvents: CalendarControllerEvents;
  let mockGetters: CalendarGetters;

  beforeEach(() => {
    stateManager = new CalendarStateManager();

    mockBindingsCoordinator = {
      updateAllBindings: jest.fn(),
      executeBatchedBindingUpdates: jest.fn(),
      updateCalendarViewBindings: jest.fn()
    } as any;

    mockNavigationCoordinator = {
      goToMonth: jest.fn(),
      goToYear: jest.fn(),
      goToDate: jest.fn(),
      goToNextMonth: jest.fn(),
      goToPreviousMonth: jest.fn(),
      goToNextYear: jest.fn(),
      goToPreviousYear: jest.fn(),
      goToToday: jest.fn(),
      goToNextYearRange: jest.fn(),
      goToPreviousYearRange: jest.fn(),
      getCurrentYearRange: jest.fn(),
      setCurrentYearRange: jest.fn(),
      setYearRangeSize: jest.fn(),
      updateCurrentDate: jest.fn()
    } as any;

    mockCalendarStateService = {
      selectDate: jest.fn((date, isRange, selectedDate, selectedDateRange) => ({
        selectedDate: isRange ? selectedDate : date,
        selectedDateRange: isRange ? { startDate: date, endDate: null } : selectedDateRange
      })),
      setRangeSelectionMode: jest.fn((isRange) => isRange),
      clearSelection: jest.fn(() => ({
        selectedDate: null,
        selectedDateRange: { startDate: null, endDate: null }
      }))
    } as any;

    mockEventManagerService = {
      emitDateSelected: jest.fn(),
      emitRangeSelected: jest.fn(),
      emitMonthChanged: jest.fn(),
      emitYearChanged: jest.fn(),
      emitViewChanged: jest.fn(),
      emitYearRangeChanged: jest.fn()
    } as any;

    mockCalendarService = {
      getMonthName: jest.fn((month) => ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][month]),
      getWeekNumber: jest.fn(() => 1)
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
      dateSelected: jest.fn(),
      rangeSelected: jest.fn(),
      monthChanged: jest.fn(),
      yearChanged: jest.fn(),
      viewChanged: jest.fn(),
      yearRangeChanged: jest.fn()
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
      currentYearRangeBase: jest.fn(() => 2020)
    };

    coordinator = new SelectionCoordinator(
      stateManager,
      mockBindingsCoordinator,
      mockCalendarStateService
    );

    coordinator.setNavigationCoordinator(mockNavigationCoordinator);
  });

  describe('selectDate', () => {
    it('should select date using Date parameter', () => {
      const date = createDate(2025, 4, 15);
      const isDateDisabledFn = jest.fn(() => false);
      
      coordinator.selectDate(date, undefined, undefined, mockBindings, mockEvents, mockGetters, isDateDisabledFn, mockEventManagerService);

      expect(mockCalendarStateService.selectDate).toHaveBeenCalledWith(
        date,
        false,
        null,
        expect.any(Object),
        isDateDisabledFn,
        expect.any(Object),
        mockEvents,
        expect.any(Function)
      );
    });

    it('should select date using year, month, day parameters', () => {
      const isDateDisabledFn = jest.fn(() => false);
      
      coordinator.selectDate(2025, 4, 15, mockBindings, mockEvents, mockGetters, isDateDisabledFn, mockEventManagerService);

      expect(mockCalendarStateService.selectDate).toHaveBeenCalled();
    });

    it('should update state manager with selected date', () => {
      const date = createDate(2025, 4, 15);
      mockCalendarStateService.selectDate.mockReturnValue({
        selectedDate: date,
        selectedDateRange: { startDate: null, endDate: null }
      });
      
      coordinator.selectDate(date, undefined, undefined, mockBindings, mockEvents, mockGetters, () => false, mockEventManagerService);

      expect(stateManager.selectedDate).toEqual(date);
    });

    it('should set focused date to selected date', () => {
      const date = createDate(2025, 4, 15);
      mockCalendarStateService.selectDate.mockReturnValue({
        selectedDate: date,
        selectedDateRange: { startDate: null, endDate: null }
      });
      
      coordinator.selectDate(date, undefined, undefined, mockBindings, mockEvents, mockGetters, () => false, mockEventManagerService);

      expect(stateManager.focusedDate).toEqual(date);
    });

    it('should update bindings', () => {
      const date = createDate(2025, 4, 15);
      
      coordinator.selectDate(date, undefined, undefined, mockBindings, mockEvents, mockGetters, () => false, mockEventManagerService);

      expect(mockBindingsCoordinator.updateAllBindings).toHaveBeenCalledWith(
        mockBindings,
        expect.any(Object),
        expect.objectContaining({
          selectedDate: true,
          selectedDateRange: true,
          focusedDate: true,
          calendarDays: true
        })
      );
    });

    it('should emit date selected event', () => {
      const date = createDate(2025, 4, 15);
      
      coordinator.selectDate(date, undefined, undefined, mockBindings, mockEvents, mockGetters, () => false, mockEventManagerService);

      expect(mockEventManagerService.emitDateSelected).toHaveBeenCalledWith(mockEvents.dateSelected, date);
    });

    it('should handle range selection', () => {
      stateManager.isRangeSelection = true;
      const date = createDate(2025, 4, 15);
      mockCalendarStateService.selectDate.mockReturnValue({
        selectedDate: null,
        selectedDateRange: { startDate: date, endDate: null }
      });
      
      coordinator.selectDate(date, undefined, undefined, mockBindings, mockEvents, mockGetters, () => false, mockEventManagerService);

      expect(stateManager.selectedDateRange.startDate).toEqual(date);
    });

    it('should throw error for invalid parameters', () => {
      expect(() => {
        coordinator.selectDate(2025, undefined, undefined, mockBindings, mockEvents, mockGetters, () => false, mockEventManagerService);
      }).toThrow('Invalid selectDate parameters');
    });
  });

  describe('setRangeSelectionMode', () => {
    it('should enable range selection mode', () => {
      mockCalendarStateService.setRangeSelectionMode.mockReturnValue(true);
      
      coordinator.setRangeSelectionMode(true, mockBindings, mockGetters);

      expect(mockCalendarStateService.setRangeSelectionMode).toHaveBeenCalledWith(
        true,
        mockBindings.isRangeSelection,
        mockBindings.calendarDays,
        expect.any(Function)
      );
      expect(stateManager.isRangeSelection).toBe(true);
    });

    it('should disable range selection mode', () => {
      mockCalendarStateService.setRangeSelectionMode.mockReturnValue(false);
      
      coordinator.setRangeSelectionMode(false, mockBindings, mockGetters);

      expect(stateManager.isRangeSelection).toBe(false);
    });

    it('should clear selection when changing mode', () => {
      coordinator.setRangeSelectionMode(true, mockBindings, mockGetters);

      expect(mockCalendarStateService.clearSelection).toHaveBeenCalled();
    });
  });

  describe('clearSelection', () => {
    it('should clear selected date', () => {
      stateManager.selectedDate = createDate(2025, 4, 15);
      
      coordinator.clearSelection(mockBindings, mockGetters);

      expect(mockCalendarStateService.clearSelection).toHaveBeenCalled();
      expect(stateManager.selectedDate).toBeNull();
    });

    it('should clear selected date range', () => {
      stateManager.selectedDateRange = {
        startDate: createDate(2025, 4, 10),
        endDate: createDate(2025, 4, 20)
      };
      
      coordinator.clearSelection(mockBindings, mockGetters);

      expect(stateManager.selectedDateRange.startDate).toBeNull();
      expect(stateManager.selectedDateRange.endDate).toBeNull();
    });

    it('should update bindings', () => {
      coordinator.clearSelection(mockBindings, mockGetters);

      expect(mockBindingsCoordinator.updateAllBindings).toHaveBeenCalledWith(
        mockBindings,
        mockGetters,
        expect.objectContaining({
          selectedDate: true,
          selectedDateRange: true,
          calendarDays: true
        })
      );
    });
  });

  describe('selectMonth', () => {
    it('should delegate to navigation coordinator', () => {
      coordinator.selectMonth(6, 2025, mockBindings, mockEvents, mockGetters, mockCalendarService, mockEventManagerService);

      expect(mockNavigationCoordinator.goToMonth).toHaveBeenCalledWith(
        6,
        2025,
        mockBindings,
        mockEvents,
        mockGetters,
        mockCalendarService,
        mockEventManagerService
      );
    });

    it('should throw error when navigation coordinator not set', () => {
      const newCoordinator = new SelectionCoordinator(
        stateManager,
        mockBindingsCoordinator,
        mockCalendarStateService
      );

      expect(() => {
        newCoordinator.selectMonth(6, 2025, mockBindings, mockEvents, mockGetters, mockCalendarService, mockEventManagerService);
      }).toThrow('NavigationCoordinator not set');
    });
  });

  describe('selectYear', () => {
    it('should navigate to year', () => {
      const mockNavigationService = {
        navigateToYear: jest.fn((date, year) => {
          const newDate = new Date(date);
          newDate.setFullYear(year);
          return newDate;
        })
      };
      
      const originalDate = stateManager.currentDate;
      
      coordinator.selectYear(2026, mockBindings, mockEvents, mockGetters, mockNavigationService, mockEventManagerService);

      expect(mockNavigationService.navigateToYear).toHaveBeenCalledWith(originalDate, 2026);
      expect(stateManager.currentDate.getFullYear()).toBe(2026);
    });

    it('should update year binding', () => {
      const mockNavigationService = {
        navigateToYear: jest.fn((date) => new Date(date))
      };
      
      coordinator.selectYear(2026, mockBindings, mockEvents, mockGetters, mockNavigationService, mockEventManagerService);

      expect(mockBindings.currentYear.set).toHaveBeenCalledWith(2026);
    });

    it('should emit year changed event', () => {
      const mockNavigationService = {
        navigateToYear: jest.fn((date) => new Date(date))
      };
      
      coordinator.selectYear(2026, mockBindings, mockEvents, mockGetters, mockNavigationService, mockEventManagerService);

      expect(mockEventManagerService.emitYearChanged).toHaveBeenCalledWith(mockEvents.yearChanged, 2026);
    });

    it('should update calendar months binding', () => {
      const mockNavigationService = {
        navigateToYear: jest.fn((date) => new Date(date))
      };
      mockGetters.calendarMonths = jest.fn(() => []);
      
      coordinator.selectYear(2026, mockBindings, mockEvents, mockGetters, mockNavigationService, mockEventManagerService);

      expect(mockBindings.calendarMonths.set).toHaveBeenCalled();
    });
  });
});
