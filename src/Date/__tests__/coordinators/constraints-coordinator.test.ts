import { ConstraintsCoordinator } from '../../coordinators/constraints-coordinator';
import { CalendarStateManager } from '../../coordinators/state-manager';
import { BindingsCoordinator } from '../../coordinators/bindings-coordinator';
import { CalendarControllerBindings } from '../../types';
import { CalendarGetters } from '../../types/getters.type';
import { IConstraintsService, ICalendarStateService, ICalendarService } from '../../interfaces';
import type { Binding } from '@uplink-protocol/core';
import { createDate } from '../test-utils';

describe('ConstraintsCoordinator', () => {
  let coordinator: ConstraintsCoordinator;
  let stateManager: CalendarStateManager;
  let mockBindingsCoordinator: jest.Mocked<BindingsCoordinator>;
  let mockConstraintsService: jest.Mocked<IConstraintsService>;
  let mockCalendarStateService: jest.Mocked<ICalendarStateService>;
  let mockCalendarService: jest.Mocked<ICalendarService>;
  let mockBindings: CalendarControllerBindings;
  let mockGetters: CalendarGetters;

  beforeEach(() => {
    stateManager = new CalendarStateManager();

    mockBindingsCoordinator = {
      updateAllBindings: jest.fn(),
      executeBatchedBindingUpdates: jest.fn(),
      updateCalendarViewBindings: jest.fn()
    } as any;

    mockConstraintsService = {
      isDateDisabled: jest.fn(() => false),
      setDisabledDaysOfWeek: jest.fn((days) => days),
      addDisabledDayOfWeek: jest.fn((day) => [day]),
      removeDisabledDayOfWeek: jest.fn(() => []),
      getDisabledDaysOfWeek: jest.fn(() => [])
    } as any;

    mockCalendarStateService = {
      setMinDate: jest.fn((date) => date),
      setMaxDate: jest.fn((date) => date),
      setDisabledDates: jest.fn((dates) => dates),
      addDisabledDate: jest.fn((date, existing) => [...existing, date]),
      removeDisabledDate: jest.fn((date, existing) => existing.filter(d => d !== date))
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

    coordinator = new ConstraintsCoordinator(
      stateManager,
      mockBindingsCoordinator,
      mockConstraintsService,
      mockCalendarStateService
    );
  });

  describe('setMinDate', () => {
    it('should set min date in state manager', () => {
      const minDate = createDate(2025, 0, 1);
      
      coordinator.setMinDate(minDate, mockBindings, mockGetters, mockCalendarService);

      expect(mockCalendarStateService.setMinDate).toHaveBeenCalled();
      expect(stateManager.minDate).toEqual(minDate);
    });

    it('should update calendar days bindings', () => {
      const minDate = createDate(2025, 0, 1);
      
      coordinator.setMinDate(minDate, mockBindings, mockGetters, mockCalendarService);

      expect(mockBindingsCoordinator.updateAllBindings).toHaveBeenCalledWith(
        mockBindings,
        expect.any(Object),
        { calendarDays: true }
      );
    });

    it('should handle null min date', () => {
      coordinator.setMinDate(null, mockBindings, mockGetters, mockCalendarService);

      expect(mockCalendarStateService.setMinDate).toHaveBeenCalled();
      expect(stateManager.minDate).toBeNull();
    });

    it('should pass getters object correctly', () => {
      const minDate = createDate(2025, 0, 1);
      
      coordinator.setMinDate(minDate, mockBindings, mockGetters, mockCalendarService);

      expect(mockCalendarStateService.setMinDate).toHaveBeenCalledWith(
        minDate,
        null, // stateManager.minDate is initially null
        stateManager.currentDate,
        expect.any(Object),
        expect.any(Function),
        mockGetters.calendarDays
      );
    });
  });

  describe('setMaxDate', () => {
    it('should set max date in state manager', () => {
      const maxDate = createDate(2025, 11, 31);
      
      coordinator.setMaxDate(maxDate, mockBindings, mockGetters, mockCalendarService);

      expect(mockCalendarStateService.setMaxDate).toHaveBeenCalled();
      expect(stateManager.maxDate).toEqual(maxDate);
    });

    it('should update calendar days bindings', () => {
      const maxDate = createDate(2025, 11, 31);
      
      coordinator.setMaxDate(maxDate, mockBindings, mockGetters, mockCalendarService);

      expect(mockBindingsCoordinator.updateAllBindings).toHaveBeenCalledWith(
        mockBindings,
        expect.any(Object),
        { calendarDays: true }
      );
    });

    it('should handle null max date', () => {
      coordinator.setMaxDate(null, mockBindings, mockGetters, mockCalendarService);

      expect(mockCalendarStateService.setMaxDate).toHaveBeenCalled();
      expect(stateManager.maxDate).toBeNull();
    });
  });

  describe('setDisabledDates', () => {
    it('should set disabled dates in state manager', () => {
      const disabledDates = [createDate(2025, 4, 10), createDate(2025, 4, 20)];
      
      coordinator.setDisabledDates(disabledDates, mockBindings, mockGetters, mockCalendarService);

      expect(mockCalendarStateService.setDisabledDates).toHaveBeenCalled();
      expect(stateManager.disabledDates).toEqual(disabledDates);
    });

    it('should update calendar days bindings', () => {
      const disabledDates = [createDate(2025, 4, 10)];
      
      coordinator.setDisabledDates(disabledDates, mockBindings, mockGetters, mockCalendarService);

      expect(mockBindingsCoordinator.updateAllBindings).toHaveBeenCalledWith(
        mockBindings,
        expect.any(Object),
        { calendarDays: true }
      );
    });

    it('should handle empty disabled dates array', () => {
      coordinator.setDisabledDates([], mockBindings, mockGetters, mockCalendarService);

      expect(mockCalendarStateService.setDisabledDates).toHaveBeenCalled();
      expect(stateManager.disabledDates).toEqual([]);
    });
  });

  describe('addDisabledDate', () => {
    it('should add a disabled date', () => {
      const date = createDate(2025, 4, 15);
      
      coordinator.addDisabledDate(date, mockBindings, mockGetters);

      expect(mockCalendarStateService.addDisabledDate).toHaveBeenCalledWith(
        date,
        [],
        mockBindings.calendarDays,
        expect.any(Function)
      );
    });

    it('should update calendar days bindings', () => {
      const date = createDate(2025, 4, 15);
      
      coordinator.addDisabledDate(date, mockBindings, mockGetters);

      expect(mockBindingsCoordinator.updateAllBindings).toHaveBeenCalledWith(
        mockBindings,
        expect.any(Object),
        { calendarDays: true }
      );
    });

    it('should return existing disabled dates when date is null', () => {
      stateManager.disabledDates = [createDate(2025, 4, 10)];
      
      const result = coordinator.addDisabledDate(null as any, mockBindings, mockGetters);

      expect(result).toEqual(stateManager.disabledDates);
      expect(mockCalendarStateService.addDisabledDate).not.toHaveBeenCalled();
    });

    it('should add date to existing disabled dates', () => {
      stateManager.disabledDates = [createDate(2025, 4, 10)];
      const newDate = createDate(2025, 4, 20);
      mockCalendarStateService.addDisabledDate.mockReturnValue([...stateManager.disabledDates, newDate]);
      
      const result = coordinator.addDisabledDate(newDate, mockBindings, mockGetters);

      expect(result).toHaveLength(2);
    });
  });

  describe('removeDisabledDate', () => {
    it('should remove a disabled date', () => {
      const date = createDate(2025, 4, 15);
      stateManager.disabledDates = [date];
      
      coordinator.removeDisabledDate(date, mockBindings, mockGetters);

      expect(mockCalendarStateService.removeDisabledDate).toHaveBeenCalledWith(
        date,
        [date],
        mockBindings.calendarDays,
        expect.any(Function)
      );
    });

    it('should update calendar days bindings', () => {
      const date = createDate(2025, 4, 15);
      stateManager.disabledDates = [date];
      
      coordinator.removeDisabledDate(date, mockBindings, mockGetters);

      expect(mockBindingsCoordinator.updateAllBindings).toHaveBeenCalledWith(
        mockBindings,
        expect.any(Object),
        { calendarDays: true }
      );
    });

    it('should return existing disabled dates when date is null', () => {
      stateManager.disabledDates = [createDate(2025, 4, 10)];
      
      const result = coordinator.removeDisabledDate(null as any, mockBindings, mockGetters);

      expect(result).toEqual(stateManager.disabledDates);
      expect(mockCalendarStateService.removeDisabledDate).not.toHaveBeenCalled();
    });
  });

  describe('getDisabledDates', () => {
    it('should return copy of disabled dates', () => {
      const disabledDates = [createDate(2025, 4, 10), createDate(2025, 4, 20)];
      stateManager.disabledDates = disabledDates;
      
      const result = coordinator.getDisabledDates();

      expect(result).toEqual(disabledDates);
      expect(result).not.toBe(disabledDates); // Should be a copy
    });

    it('should return empty array when no disabled dates', () => {
      const result = coordinator.getDisabledDates();

      expect(result).toEqual([]);
    });
  });

  describe('setDisabledDaysOfWeek', () => {
    it('should set disabled days of week', () => {
      const days = [0, 6]; // Sunday and Saturday
      
      const result = coordinator.setDisabledDaysOfWeek(days, mockBindings, mockGetters);

      expect(mockConstraintsService.setDisabledDaysOfWeek).toHaveBeenCalledWith(days);
      expect(result).toEqual(days);
    });

    it('should update calendar days bindings', () => {
      const days = [0, 6];
      
      coordinator.setDisabledDaysOfWeek(days, mockBindings, mockGetters);

      expect(mockBindingsCoordinator.updateAllBindings).toHaveBeenCalledWith(
        mockBindings,
        expect.any(Object),
        { calendarDays: true }
      );
    });

    it('should handle empty array', () => {
      const result = coordinator.setDisabledDaysOfWeek([], mockBindings, mockGetters);

      expect(mockConstraintsService.setDisabledDaysOfWeek).toHaveBeenCalledWith([]);
      expect(result).toEqual([]);
    });
  });

  describe('addDisabledDayOfWeek', () => {
    it('should add a disabled day of week', () => {
      mockConstraintsService.addDisabledDayOfWeek.mockReturnValue([0]);
      
      const result = coordinator.addDisabledDayOfWeek(0, mockBindings, mockGetters);

      expect(mockConstraintsService.addDisabledDayOfWeek).toHaveBeenCalledWith(0);
      expect(result).toEqual([0]);
    });

    it('should update calendar days bindings', () => {
      coordinator.addDisabledDayOfWeek(0, mockBindings, mockGetters);

      expect(mockBindingsCoordinator.updateAllBindings).toHaveBeenCalledWith(
        mockBindings,
        expect.any(Object),
        { calendarDays: true }
      );
    });

    it('should add multiple days sequentially', () => {
      mockConstraintsService.addDisabledDayOfWeek
        .mockReturnValueOnce([0])
        .mockReturnValueOnce([0, 6]);
      
      coordinator.addDisabledDayOfWeek(0, mockBindings, mockGetters);
      const result = coordinator.addDisabledDayOfWeek(6, mockBindings, mockGetters);

      expect(result).toHaveLength(2);
    });
  });

  describe('removeDisabledDayOfWeek', () => {
    it('should remove a disabled day of week', () => {
      mockConstraintsService.removeDisabledDayOfWeek.mockReturnValue([]);
      
      const result = coordinator.removeDisabledDayOfWeek(0, mockBindings, mockGetters);

      expect(mockConstraintsService.removeDisabledDayOfWeek).toHaveBeenCalledWith(0);
      expect(result).toEqual([]);
    });

    it('should update calendar days bindings', () => {
      coordinator.removeDisabledDayOfWeek(0, mockBindings, mockGetters);

      expect(mockBindingsCoordinator.updateAllBindings).toHaveBeenCalledWith(
        mockBindings,
        expect.any(Object),
        { calendarDays: true }
      );
    });
  });

  describe('getDisabledDaysOfWeek', () => {
    it('should return disabled days of week', () => {
      mockConstraintsService.getDisabledDaysOfWeek.mockReturnValue([0, 6]);
      
      const result = coordinator.getDisabledDaysOfWeek();

      expect(mockConstraintsService.getDisabledDaysOfWeek).toHaveBeenCalled();
      expect(result).toEqual([0, 6]);
    });

    it('should return empty array when no disabled days', () => {
      mockConstraintsService.getDisabledDaysOfWeek.mockReturnValue([]);
      
      const result = coordinator.getDisabledDaysOfWeek();

      expect(result).toEqual([]);
    });
  });
});
