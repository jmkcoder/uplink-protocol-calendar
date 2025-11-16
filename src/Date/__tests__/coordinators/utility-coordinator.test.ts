import { UtilityCoordinator } from '../../coordinators/utility-coordinator';
import { CalendarStateManager } from '../../coordinators/state-manager';
import { IConstraintsService, IAccessibilityService, ICalendarService } from '../../interfaces';
import { createDate } from '../test-utils';

describe('UtilityCoordinator', () => {
  let coordinator: UtilityCoordinator;
  let stateManager: CalendarStateManager;
  let mockConstraintsService: jest.Mocked<IConstraintsService>;
  let mockAccessibilityService: jest.Mocked<IAccessibilityService>;
  let mockCalendarService: jest.Mocked<ICalendarService>;

  beforeEach(() => {
    stateManager = new CalendarStateManager();
    stateManager.minDate = createDate(2025, 0, 1);
    stateManager.maxDate = createDate(2025, 11, 31);
    stateManager.disabledDates = [createDate(2025, 4, 10)];
    stateManager.disabledDaysOfWeek = [0, 6]; // Sunday and Saturday

    mockConstraintsService = {
      isDateDisabled: jest.fn(() => false),
      setDisabledDaysOfWeek: jest.fn((days) => days),
      addDisabledDayOfWeek: jest.fn((day) => [day]),
      removeDisabledDayOfWeek: jest.fn(() => []),
      getDisabledDaysOfWeek: jest.fn(() => [0, 6])
    } as any;

    mockAccessibilityService = {
      getAccessibleDateLabel: jest.fn((date, getMonthName) => {
        const month = getMonthName(date.getMonth());
        return `${month} ${date.getDate()}, ${date.getFullYear()}`;
      }),
      getDateStateDescription: jest.fn(() => 'Available')
    } as any;

    mockCalendarService = {
      getMonthName: jest.fn((month) => ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][month]),
      getWeekNumber: jest.fn((date) => {
        const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
        const pastDaysOfYear = (date.getTime() - firstDayOfYear.getTime()) / 86400000;
        return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
      })
    } as any;

    coordinator = new UtilityCoordinator(
      stateManager,
      mockConstraintsService,
      mockAccessibilityService,
      mockCalendarService
    );
  });

  describe('isDateDisabled', () => {
    it('should delegate to constraints service', () => {
      const date = createDate(2025, 4, 15);
      
      coordinator.isDateDisabled(date);

      expect(mockConstraintsService.isDateDisabled).toHaveBeenCalledWith(
        date,
        stateManager.minDate,
        stateManager.maxDate,
        stateManager.disabledDates,
        stateManager.disabledDaysOfWeek
      );
    });

    it('should return disabled state', () => {
      const date = createDate(2025, 4, 15);
      mockConstraintsService.isDateDisabled.mockReturnValue(true);
      
      const result = coordinator.isDateDisabled(date);

      expect(result).toBe(true);
    });

    it('should return enabled state', () => {
      const date = createDate(2025, 4, 15);
      mockConstraintsService.isDateDisabled.mockReturnValue(false);
      
      const result = coordinator.isDateDisabled(date);

      expect(result).toBe(false);
    });
  });

  describe('isToday', () => {
    it('should return true for today', () => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      const result = coordinator.isToday(today);

      expect(result).toBe(true);
    });

    it('should return false for past date', () => {
      const pastDate = createDate(2020, 0, 1);
      
      const result = coordinator.isToday(pastDate);

      expect(result).toBe(false);
    });

    it('should return false for future date', () => {
      const futureDate = createDate(2030, 11, 31);
      
      const result = coordinator.isToday(futureDate);

      expect(result).toBe(false);
    });
  });

  describe('getWeekNumber', () => {
    it('should delegate to calendar service', () => {
      const date = createDate(2025, 4, 15);
      
      coordinator.getWeekNumber(date);

      expect(mockCalendarService.getWeekNumber).toHaveBeenCalledWith(date);
    });

    it('should return week number', () => {
      const date = createDate(2025, 0, 15);
      mockCalendarService.getWeekNumber.mockReturnValue(3);
      
      const result = coordinator.getWeekNumber(date);

      expect(result).toBe(3);
    });
  });

  describe('getDisabledDates', () => {
    it('should return copy of disabled dates', () => {
      const result = coordinator.getDisabledDates();

      expect(result).toEqual(stateManager.disabledDates);
      expect(result).not.toBe(stateManager.disabledDates); // Should be a copy
    });

    it('should return empty array when no disabled dates', () => {
      stateManager.disabledDates = [];
      
      const result = coordinator.getDisabledDates();

      expect(result).toEqual([]);
    });
  });

  describe('getDisabledDaysOfWeek', () => {
    it('should return copy of disabled days of week', () => {
      const result = coordinator.getDisabledDaysOfWeek();

      expect(result).toEqual([0, 6]);
      expect(result).not.toBe(stateManager.disabledDaysOfWeek); // Should be a copy
    });

    it('should return empty array when no disabled days', () => {
      stateManager.disabledDaysOfWeek = [];
      
      const result = coordinator.getDisabledDaysOfWeek();

      expect(result).toEqual([]);
    });
  });

  describe('getAccessibleDateLabel', () => {
    it('should delegate to accessibility service', () => {
      const date = createDate(2025, 4, 15);
      const getMonthName = jest.fn((month) => 'May');
      
      coordinator.getAccessibleDateLabel(date, getMonthName);

      expect(mockAccessibilityService.getAccessibleDateLabel).toHaveBeenCalledWith(date, getMonthName);
    });

    it('should return accessible label', () => {
      const date = createDate(2025, 4, 15);
      const getMonthName = (month: number) => mockCalendarService.getMonthName(month);
      
      const result = coordinator.getAccessibleDateLabel(date, getMonthName);

      expect(result).toBe('May 15, 2025');
    });
  });

  describe('getDateStateDescription', () => {
    it('should delegate to accessibility service', () => {
      const date = createDate(2025, 4, 15);
      const isDateDisabledFn = jest.fn(() => false);
      const isTodayFn = jest.fn(() => false);
      
      coordinator.getDateStateDescription(date, isDateDisabledFn, isTodayFn);

      expect(mockAccessibilityService.getDateStateDescription).toHaveBeenCalledWith(
        date,
        expect.objectContaining({
          selectedDate: stateManager.selectedDate,
          selectedDateRange: stateManager.selectedDateRange,
          isRangeSelection: stateManager.isRangeSelection,
          isDateDisabledFn,
          isTodayFn
        })
      );
    });

    it('should return state description', () => {
      const date = createDate(2025, 4, 15);
      mockAccessibilityService.getDateStateDescription.mockReturnValue('Selected, Available');
      
      const result = coordinator.getDateStateDescription(date, () => false, () => false);

      expect(result).toBe('Selected, Available');
    });
  });

  describe('isDateInRange', () => {
    it('should return true for date within range', () => {
      const date = createDate(2025, 4, 15);
      const startDate = createDate(2025, 4, 10);
      const endDate = createDate(2025, 4, 20);
      
      const result = coordinator.isDateInRange(date, startDate, endDate);

      expect(result).toBe(true);
    });

    it('should return false for date before range', () => {
      const date = createDate(2025, 4, 5);
      const startDate = createDate(2025, 4, 10);
      const endDate = createDate(2025, 4, 20);
      
      const result = coordinator.isDateInRange(date, startDate, endDate);

      expect(result).toBe(false);
    });

    it('should return false for date after range', () => {
      const date = createDate(2025, 4, 25);
      const startDate = createDate(2025, 4, 10);
      const endDate = createDate(2025, 4, 20);
      
      const result = coordinator.isDateInRange(date, startDate, endDate);

      expect(result).toBe(false);
    });

    it('should return false when startDate is null', () => {
      const date = createDate(2025, 4, 15);
      
      const result = coordinator.isDateInRange(date, null, createDate(2025, 4, 20));

      expect(result).toBe(false);
    });

    it('should return false when endDate is null', () => {
      const date = createDate(2025, 4, 15);
      
      const result = coordinator.isDateInRange(date, createDate(2025, 4, 10), null);

      expect(result).toBe(false);
    });

    it('should return true for date at range start', () => {
      const date = createDate(2025, 4, 10);
      const startDate = createDate(2025, 4, 10);
      const endDate = createDate(2025, 4, 20);
      
      const result = coordinator.isDateInRange(date, startDate, endDate);

      expect(result).toBe(true);
    });

    it('should return true for date at range end', () => {
      const date = createDate(2025, 4, 20);
      const startDate = createDate(2025, 4, 10);
      const endDate = createDate(2025, 4, 20);
      
      const result = coordinator.isDateInRange(date, startDate, endDate);

      expect(result).toBe(true);
    });
  });

  describe('isSameDay', () => {
    it('should return true for same day', () => {
      const date1 = createDate(2025, 4, 15);
      const date2 = createDate(2025, 4, 15);
      
      const result = coordinator.isSameDay(date1, date2);

      expect(result).toBe(true);
    });

    it('should return false for different days', () => {
      const date1 = createDate(2025, 4, 15);
      const date2 = createDate(2025, 4, 16);
      
      const result = coordinator.isSameDay(date1, date2);

      expect(result).toBe(false);
    });

    it('should return false for same day different month', () => {
      const date1 = createDate(2025, 4, 15);
      const date2 = createDate(2025, 5, 15);
      
      const result = coordinator.isSameDay(date1, date2);

      expect(result).toBe(false);
    });

    it('should return false for same day different year', () => {
      const date1 = createDate(2025, 4, 15);
      const date2 = createDate(2026, 4, 15);
      
      const result = coordinator.isSameDay(date1, date2);

      expect(result).toBe(false);
    });
  });

  describe('isSameMonth', () => {
    it('should return true for same month and year', () => {
      const date1 = createDate(2025, 4, 15);
      const date2 = createDate(2025, 4, 20);
      
      const result = coordinator.isSameMonth(date1, date2);

      expect(result).toBe(true);
    });

    it('should return false for different months', () => {
      const date1 = createDate(2025, 4, 15);
      const date2 = createDate(2025, 5, 15);
      
      const result = coordinator.isSameMonth(date1, date2);

      expect(result).toBe(false);
    });

    it('should return false for same month different year', () => {
      const date1 = createDate(2025, 4, 15);
      const date2 = createDate(2026, 4, 15);
      
      const result = coordinator.isSameMonth(date1, date2);

      expect(result).toBe(false);
    });
  });

  describe('isSameYear', () => {
    it('should return true for same year', () => {
      const date1 = createDate(2025, 4, 15);
      const date2 = createDate(2025, 6, 20);
      
      const result = coordinator.isSameYear(date1, date2);

      expect(result).toBe(true);
    });

    it('should return false for different years', () => {
      const date1 = createDate(2025, 4, 15);
      const date2 = createDate(2026, 4, 15);
      
      const result = coordinator.isSameYear(date1, date2);

      expect(result).toBe(false);
    });
  });

  describe('getDayOfWeek', () => {
    it('should return day of week (0-6)', () => {
      const date = createDate(2025, 4, 11); // Sunday
      
      const result = coordinator.getDayOfWeek(date);

      expect(result).toBe(0);
    });

    it('should return correct day for Monday', () => {
      const date = createDate(2025, 4, 12); // Monday
      
      const result = coordinator.getDayOfWeek(date);

      expect(result).toBe(1);
    });

    it('should return correct day for Saturday', () => {
      const date = createDate(2025, 4, 17); // Saturday
      
      const result = coordinator.getDayOfWeek(date);

      expect(result).toBe(6);
    });
  });

  describe('getDaysInMonth', () => {
    it('should return 31 for January', () => {
      const result = coordinator.getDaysInMonth(2025, 0);

      expect(result).toBe(31);
    });

    it('should return 28 for February in non-leap year', () => {
      const result = coordinator.getDaysInMonth(2025, 1);

      expect(result).toBe(28);
    });

    it('should return 29 for February in leap year', () => {
      const result = coordinator.getDaysInMonth(2024, 1);

      expect(result).toBe(29);
    });

    it('should return 30 for April', () => {
      const result = coordinator.getDaysInMonth(2025, 3);

      expect(result).toBe(30);
    });

    it('should return 31 for December', () => {
      const result = coordinator.getDaysInMonth(2025, 11);

      expect(result).toBe(31);
    });
  });
});
