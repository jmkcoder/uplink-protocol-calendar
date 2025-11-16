import { ConfigurationCoordinator } from '../../coordinators/configuration-coordinator';
import { CalendarStateManager } from '../../coordinators/state-manager';
import { ConstraintsCoordinator } from '../../coordinators/constraints-coordinator';
import { LocalizationCoordinator } from '../../coordinators/localization-coordinator';
import { CalendarControllerBindings } from '../../types';
import { CalendarGetters } from '../../types/getters.type';
import { CalendarOptions, ICalendarService } from '../../interfaces';
import type { Binding } from '@uplink-protocol/core';
import { createDate } from '../test-utils';

describe('ConfigurationCoordinator', () => {
  let coordinator: ConfigurationCoordinator;
  let stateManager: CalendarStateManager;
  let mockConstraintsCoordinator: jest.Mocked<ConstraintsCoordinator>;
  let mockLocalizationCoordinator: jest.Mocked<LocalizationCoordinator>;
  let mockCalendarService: jest.Mocked<ICalendarService>;
  let mockBindings: CalendarControllerBindings;
  let mockGetters: CalendarGetters;

  beforeEach(() => {
    stateManager = new CalendarStateManager();

    mockConstraintsCoordinator = {
      setMinDate: jest.fn(),
      setMaxDate: jest.fn(),
      setDisabledDates: jest.fn(),
      setDisabledDaysOfWeek: jest.fn(),
      addDisabledDate: jest.fn(),
      removeDisabledDate: jest.fn(),
      getDisabledDates: jest.fn(() => []),
      addDisabledDayOfWeek: jest.fn(),
      removeDisabledDayOfWeek: jest.fn(),
      getDisabledDaysOfWeek: jest.fn(() => [])
    } as any;

    mockLocalizationCoordinator = {
      setFirstDayOfWeek: jest.fn(),
      setLocale: jest.fn(),
      setDateFormat: jest.fn(),
      setDateFormatOptions: jest.fn(),
      setHideOtherMonthDays: jest.fn(),
      getLocale: jest.fn(() => 'en-US'),
      getDateFormat: jest.fn(() => null),
      getDateFormatOptions: jest.fn(() => null),
      getFirstDayOfWeek: jest.fn(() => 0),
      getHideOtherMonthDays: jest.fn(() => false)
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

    coordinator = new ConfigurationCoordinator(
      stateManager,
      mockConstraintsCoordinator,
      mockLocalizationCoordinator,
      mockCalendarService
    );
  });

  describe('applyOptions', () => {
    it('should set initial selected date when provided', () => {
      const initialDate = createDate(2025, 5, 15);
      const options: CalendarOptions = {
        initialSelectedDate: initialDate
      };

      coordinator.applyOptions(options, mockBindings, mockGetters);

      expect(stateManager.currentDate.getTime()).toBe(initialDate.getTime());
      expect(stateManager.selectedDate?.getTime()).toBe(initialDate.getTime());
    });

    it('should call setMinDate when minDate is provided', () => {
      const minDate = createDate(2025, 0, 1);
      const options: CalendarOptions = {
        minDate
      };

      coordinator.applyOptions(options, mockBindings, mockGetters);

      expect(mockConstraintsCoordinator.setMinDate).toHaveBeenCalledWith(
        minDate,
        mockBindings,
        mockGetters,
        mockCalendarService
      );
    });

    it('should call setMaxDate when maxDate is provided', () => {
      const maxDate = createDate(2025, 11, 31);
      const options: CalendarOptions = {
        maxDate
      };

      coordinator.applyOptions(options, mockBindings, mockGetters);

      expect(mockConstraintsCoordinator.setMaxDate).toHaveBeenCalledWith(
        maxDate,
        mockBindings,
        mockGetters,
        mockCalendarService
      );
    });

    it('should call setDisabledDates when disabledDates is provided', () => {
      const disabledDates = [createDate(2025, 4, 10), createDate(2025, 4, 20)];
      const options: CalendarOptions = {
        disabledDates
      };

      coordinator.applyOptions(options, mockBindings, mockGetters);

      expect(mockConstraintsCoordinator.setDisabledDates).toHaveBeenCalledWith(
        disabledDates,
        mockBindings,
        mockGetters,
        mockCalendarService
      );
    });

    it('should call setDisabledDaysOfWeek when disabledDaysOfWeek is provided', () => {
      const disabledDaysOfWeek = [0, 6]; // Sunday and Saturday
      const options: CalendarOptions = {
        disabledDaysOfWeek
      };

      coordinator.applyOptions(options, mockBindings, mockGetters);

      expect(mockConstraintsCoordinator.setDisabledDaysOfWeek).toHaveBeenCalledWith(
        disabledDaysOfWeek,
        mockBindings,
        mockGetters
      );
    });

    it('should call setFirstDayOfWeek when firstDayOfWeek is provided', () => {
      const options: CalendarOptions = {
        firstDayOfWeek: 1 // Monday
      };

      coordinator.applyOptions(options, mockBindings, mockGetters);

      expect(mockLocalizationCoordinator.setFirstDayOfWeek).toHaveBeenCalledWith(
        1,
        mockBindings,
        mockGetters
      );
    });

    it('should call setLocale when locale is provided', () => {
      const options: CalendarOptions = {
        locale: 'de-DE'
      };

      coordinator.applyOptions(options, mockBindings, mockGetters);

      expect(mockLocalizationCoordinator.setLocale).toHaveBeenCalledWith(
        'de-DE',
        mockBindings,
        mockGetters,
        false
      );
    });

    it('should call setDateFormat when dateFormat is provided', () => {
      const options: CalendarOptions = {
        dateFormat: 'YYYY-MM-DD'
      };

      coordinator.applyOptions(options, mockBindings, mockGetters);

      expect(mockLocalizationCoordinator.setDateFormat).toHaveBeenCalledWith(
        'YYYY-MM-DD',
        mockBindings,
        mockGetters
      );
    });

    it('should call setDateFormatOptions when dateFormatOptions is provided', () => {
      const dateFormatOptions: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      };
      const options: CalendarOptions = {
        dateFormatOptions
      };

      coordinator.applyOptions(options, mockBindings, mockGetters);

      expect(mockLocalizationCoordinator.setDateFormatOptions).toHaveBeenCalledWith(
        dateFormatOptions,
        mockBindings,
        mockGetters
      );
    });

    it('should set isRangeSelection when provided', () => {
      const options: CalendarOptions = {
        isRangeSelection: true
      };

      coordinator.applyOptions(options, mockBindings, mockGetters);

      expect(stateManager.isRangeSelection).toBe(true);
    });

    it('should call setHideOtherMonthDays when hideOtherMonthDays is provided', () => {
      const options: CalendarOptions = {
        hideOtherMonthDays: true
      };

      coordinator.applyOptions(options, mockBindings, mockGetters);

      expect(mockLocalizationCoordinator.setHideOtherMonthDays).toHaveBeenCalledWith(
        true,
        mockBindings,
        mockGetters
      );
    });

    it('should apply multiple options at once', () => {
      const options: CalendarOptions = {
        initialSelectedDate: createDate(2025, 5, 15),
        minDate: createDate(2025, 0, 1),
        maxDate: createDate(2025, 11, 31),
        locale: 'en-GB',
        firstDayOfWeek: 1,
        isRangeSelection: true
      };

      coordinator.applyOptions(options, mockBindings, mockGetters);

      expect(stateManager.selectedDate).toBeTruthy();
      expect(mockConstraintsCoordinator.setMinDate).toHaveBeenCalled();
      expect(mockConstraintsCoordinator.setMaxDate).toHaveBeenCalled();
      expect(mockLocalizationCoordinator.setLocale).toHaveBeenCalled();
      expect(mockLocalizationCoordinator.setFirstDayOfWeek).toHaveBeenCalled();
      expect(stateManager.isRangeSelection).toBe(true);
    });

    it('should handle empty options without errors', () => {
      const options: CalendarOptions = {};

      expect(() => {
        coordinator.applyOptions(options, mockBindings, mockGetters);
      }).not.toThrow();
    });
  });

  describe('setYearRangeSize', () => {
    it('should set year range size when valid', () => {
      coordinator.setYearRangeSize(15);

      expect(stateManager.yearRangeSize).toBe(15);
    });

    it('should not set year range size when zero', () => {
      stateManager.yearRangeSize = 12;
      coordinator.setYearRangeSize(0);

      expect(stateManager.yearRangeSize).toBe(12);
    });

    it('should not set year range size when negative', () => {
      stateManager.yearRangeSize = 12;
      coordinator.setYearRangeSize(-5);

      expect(stateManager.yearRangeSize).toBe(12);
    });
  });

  describe('getYearRangeSize', () => {
    it('should return current year range size', () => {
      stateManager.yearRangeSize = 15;

      expect(coordinator.getYearRangeSize()).toBe(15);
    });

    it('should return default year range size', () => {
      expect(coordinator.getYearRangeSize()).toBe(12);
    });
  });

  describe('setRangeSelectionMode', () => {
    it('should enable range selection mode', () => {
      coordinator.setRangeSelectionMode(true);

      expect(stateManager.isRangeSelection).toBe(true);
    });

    it('should disable range selection mode', () => {
      stateManager.isRangeSelection = true;
      coordinator.setRangeSelectionMode(false);

      expect(stateManager.isRangeSelection).toBe(false);
    });

    it('should clear selected date range when disabling range selection', () => {
      stateManager.isRangeSelection = true;
      stateManager.selectedDateRange = {
        startDate: createDate(2025, 4, 10),
        endDate: createDate(2025, 4, 20)
      };

      coordinator.setRangeSelectionMode(false);

      expect(stateManager.selectedDateRange.startDate).toBeNull();
      expect(stateManager.selectedDateRange.endDate).toBeNull();
    });

    it('should not clear selected date range when enabling range selection', () => {
      stateManager.isRangeSelection = false;
      stateManager.selectedDateRange = {
        startDate: createDate(2025, 4, 10),
        endDate: createDate(2025, 4, 20)
      };

      coordinator.setRangeSelectionMode(true);

      expect(stateManager.selectedDateRange.startDate).toBeTruthy();
      expect(stateManager.selectedDateRange.endDate).toBeTruthy();
    });
  });

  describe('getRangeSelectionMode', () => {
    it('should return current range selection mode', () => {
      stateManager.isRangeSelection = true;

      expect(coordinator.getRangeSelectionMode()).toBe(true);
    });

    it('should return false by default', () => {
      expect(coordinator.getRangeSelectionMode()).toBe(false);
    });
  });
});
