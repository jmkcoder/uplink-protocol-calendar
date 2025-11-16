import { LocalizationCoordinator } from '../../coordinators/localization-coordinator';
import { CalendarStateManager } from '../../coordinators/state-manager';
import { BindingsCoordinator } from '../../coordinators/bindings-coordinator';
import { CalendarControllerBindings } from '../../types';
import { CalendarGetters } from '../../types/getters.type';
import { ILocalizationService, IDateFormattingService } from '../../interfaces';
import type { Binding } from '@uplink-protocol/core';
import { createDate } from '../test-utils';

describe('LocalizationCoordinator', () => {
  let coordinator: LocalizationCoordinator;
  let stateManager: CalendarStateManager;
  let mockBindingsCoordinator: jest.Mocked<BindingsCoordinator>;
  let mockLocalizationService: jest.Mocked<ILocalizationService>;
  let mockDateFormattingService: jest.Mocked<IDateFormattingService>;
  let mockBindings: CalendarControllerBindings;
  let mockGetters: CalendarGetters;

  beforeEach(() => {
    stateManager = new CalendarStateManager();

    mockBindingsCoordinator = {
      updateAllBindings: jest.fn(),
      executeBatchedBindingUpdates: jest.fn(),
      updateCalendarViewBindings: jest.fn()
    } as any;

    mockLocalizationService = {
      setLocale: jest.fn(),
      getLocale: jest.fn(() => 'en-US'),
      formatDate: jest.fn((date) => date.toLocaleDateString()),
      getMonthNames: jest.fn(() => ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']),
      getWeekdayNames: jest.fn(() => ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'])
    } as any;

    mockDateFormattingService = {
      formatDate: jest.fn((date) => date.toLocaleDateString()),
      setDefaultFormat: jest.fn(),
      setDateFormatOptions: jest.fn()
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

    coordinator = new LocalizationCoordinator(
      stateManager,
      mockBindingsCoordinator,
      mockLocalizationService,
      mockDateFormattingService
    );
  });

  describe('setLocale', () => {
    it('should set locale in state manager', () => {
      coordinator.setLocale('de-DE', mockBindings, mockGetters);

      expect(stateManager.locale).toBe('de-DE');
    });

    it('should set locale in localization service', () => {
      coordinator.setLocale('de-DE', mockBindings, mockGetters);

      expect(mockLocalizationService.setLocale).toHaveBeenCalledWith('de-DE');
    });

    it('should update bindings', () => {
      coordinator.setLocale('de-DE', mockBindings, mockGetters);

      expect(mockBindingsCoordinator.updateAllBindings).toHaveBeenCalledWith(
        mockBindings,
        mockGetters,
        expect.objectContaining({
          currentDate: true,
          calendarDays: true,
          calendarMonths: true,
          calendarYears: true
        })
      );
    });

    it('should apply default format options when applyDefaults is true', () => {
      coordinator.setLocale('de-DE', mockBindings, mockGetters, true);

      expect(mockDateFormattingService.setDateFormatOptions).toHaveBeenCalled();
    });

    it('should not apply default format options when applyDefaults is false', () => {
      coordinator.setLocale('de-DE', mockBindings, mockGetters, false);

      expect(mockDateFormattingService.setDateFormatOptions).not.toHaveBeenCalled();
    });

    it('should not overwrite custom format options', () => {
      // Simulate user setting custom options
      const customOptions: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short' };
      coordinator.setDateFormatOptions(customOptions, mockBindings, mockGetters);
      mockDateFormattingService.setDateFormatOptions.mockClear();

      coordinator.setLocale('fr-FR', mockBindings, mockGetters, true);

      expect(mockDateFormattingService.setDateFormatOptions).not.toHaveBeenCalled();
    });
  });

  describe('getLocale', () => {
    it('should return current locale', () => {
      stateManager.locale = 'fr-FR';

      expect(coordinator.getLocale()).toBe('fr-FR');
    });

    it('should return default locale', () => {
      expect(coordinator.getLocale()).toBe('en-US');
    });
  });

  describe('setDateFormat', () => {
    it('should set date format in state manager', () => {
      coordinator.setDateFormat('YYYY-MM-DD', mockBindings, mockGetters);

      expect(stateManager.dateFormat).toBe('YYYY-MM-DD');
    });

    it('should set default format in date formatting service', () => {
      coordinator.setDateFormat('YYYY-MM-DD', mockBindings, mockGetters);

      expect(mockDateFormattingService.setDefaultFormat).toHaveBeenCalledWith('YYYY-MM-DD');
    });

    it('should update bindings', () => {
      coordinator.setDateFormat('YYYY-MM-DD', mockBindings, mockGetters);

      expect(mockBindingsCoordinator.updateAllBindings).toHaveBeenCalledWith(
        mockBindings,
        mockGetters,
        { calendarDays: true }
      );
    });

    it('should handle null date format', () => {
      coordinator.setDateFormat(null, mockBindings, mockGetters);

      expect(stateManager.dateFormat).toBeNull();
      expect(mockDateFormattingService.setDefaultFormat).not.toHaveBeenCalled();
    });
  });

  describe('getDateFormat', () => {
    it('should return current date format', () => {
      stateManager.dateFormat = 'DD/MM/YYYY';

      expect(coordinator.getDateFormat()).toBe('DD/MM/YYYY');
    });

    it('should return null when not set', () => {
      expect(coordinator.getDateFormat()).toBeNull();
    });
  });

  describe('setDateFormatOptions', () => {
    it('should set date format options in state manager', () => {
      const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long' };
      
      coordinator.setDateFormatOptions(options, mockBindings, mockGetters);

      expect(stateManager.dateFormatOptions).toEqual(options);
    });

    it('should set date format options in date formatting service', () => {
      const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long' };
      
      coordinator.setDateFormatOptions(options, mockBindings, mockGetters);

      expect(mockDateFormattingService.setDateFormatOptions).toHaveBeenCalledWith(options);
    });

    it('should mark custom format options as set', () => {
      const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long' };
      
      coordinator.setDateFormatOptions(options, mockBindings, mockGetters);
      
      // Setting locale should not override custom options
      mockDateFormattingService.setDateFormatOptions.mockClear();
      coordinator.setLocale('de-DE', mockBindings, mockGetters, true);

      expect(mockDateFormattingService.setDateFormatOptions).not.toHaveBeenCalled();
    });

    it('should update bindings', () => {
      const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long' };
      
      coordinator.setDateFormatOptions(options, mockBindings, mockGetters);

      expect(mockBindingsCoordinator.updateAllBindings).toHaveBeenCalledWith(
        mockBindings,
        mockGetters,
        { calendarDays: true }
      );
    });

    it('should handle null date format options', () => {
      coordinator.setDateFormatOptions(null, mockBindings, mockGetters);

      expect(stateManager.dateFormatOptions).toBeNull();
    });
  });

  describe('getDateFormatOptions', () => {
    it('should return current date format options', () => {
      const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long' };
      stateManager.dateFormatOptions = options;

      expect(coordinator.getDateFormatOptions()).toEqual(options);
    });

    it('should return null when not set', () => {
      expect(coordinator.getDateFormatOptions()).toBeNull();
    });
  });

  describe('setFirstDayOfWeek', () => {
    it('should set first day of week in state manager', () => {
      coordinator.setFirstDayOfWeek(1, mockBindings, mockGetters);

      expect(stateManager.firstDayOfWeek).toBe(1);
    });

    it('should update bindings', () => {
      coordinator.setFirstDayOfWeek(1, mockBindings, mockGetters);

      expect(mockBindingsCoordinator.updateAllBindings).toHaveBeenCalledWith(
        mockBindings,
        mockGetters,
        { calendarDays: true }
      );
    });

    it('should throw error for invalid day (negative)', () => {
      expect(() => {
        coordinator.setFirstDayOfWeek(-1, mockBindings, mockGetters);
      }).toThrow('First day of week must be between 0 (Sunday) and 6 (Saturday)');
    });

    it('should throw error for invalid day (too high)', () => {
      expect(() => {
        coordinator.setFirstDayOfWeek(7, mockBindings, mockGetters);
      }).toThrow('First day of week must be between 0 (Sunday) and 6 (Saturday)');
    });

    it('should accept valid day values (0-6)', () => {
      for (let day = 0; day <= 6; day++) {
        expect(() => {
          coordinator.setFirstDayOfWeek(day, mockBindings, mockGetters);
        }).not.toThrow();
      }
    });
  });

  describe('getFirstDayOfWeek', () => {
    it('should return current first day of week', () => {
      stateManager.firstDayOfWeek = 1;

      expect(coordinator.getFirstDayOfWeek()).toBe(1);
    });

    it('should return default first day of week', () => {
      expect(coordinator.getFirstDayOfWeek()).toBe(0);
    });
  });

  describe('setHideOtherMonthDays', () => {
    it('should set hide other month days in state manager', () => {
      coordinator.setHideOtherMonthDays(true, mockBindings, mockGetters);

      expect(stateManager.hideOtherMonthDays).toBe(true);
    });

    it('should update bindings', () => {
      coordinator.setHideOtherMonthDays(true, mockBindings, mockGetters);

      expect(mockBindingsCoordinator.updateAllBindings).toHaveBeenCalledWith(
        mockBindings,
        mockGetters,
        { calendarDays: true }
      );
    });

    it('should handle false value', () => {
      coordinator.setHideOtherMonthDays(false, mockBindings, mockGetters);

      expect(stateManager.hideOtherMonthDays).toBe(false);
    });
  });

  describe('getHideOtherMonthDays', () => {
    it('should return current hide other month days setting', () => {
      stateManager.hideOtherMonthDays = true;

      expect(coordinator.getHideOtherMonthDays()).toBe(true);
    });

    it('should return default value', () => {
      expect(coordinator.getHideOtherMonthDays()).toBe(false);
    });
  });
});
