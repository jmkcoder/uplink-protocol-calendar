import { CalendarGeneratorCoordinator } from '../../coordinators/calendar-generator-coordinator';
import { CalendarStateManager } from '../../coordinators/state-manager';
import { ICalendarGeneratorService, CalendarDate, CalendarMonth, CalendarYear } from '../../interfaces';
import { createDate } from '../test-utils';

describe('CalendarGeneratorCoordinator', () => {
  let coordinator: CalendarGeneratorCoordinator;
  let stateManager: CalendarStateManager;
  let mockCalendarGeneratorService: jest.Mocked<ICalendarGeneratorService>;

  beforeEach(() => {
    stateManager = new CalendarStateManager();
    stateManager.currentDate = createDate(2025, 4, 21); // May 21, 2025
    stateManager.firstDayOfWeek = 0; // Sunday
    stateManager.isRangeSelection = false;

    mockCalendarGeneratorService = {
      generateCalendarDays: jest.fn(() => []),
      generateCalendarMonths: jest.fn(() => []),
      generateCalendarYears: jest.fn(() => []),
      generateMonthView: jest.fn(() => ({
        month: 4,
        year: 2025,
        weeks: [],
        weekdays: []
      })),
      generateYearView: jest.fn(() => ({
        months: [],
        year: 2025
      })),
      getWeekNumber: jest.fn(() => 21)
    } as jest.Mocked<ICalendarGeneratorService>;

    coordinator = new CalendarGeneratorCoordinator(
      stateManager,
      mockCalendarGeneratorService
    );
  });

  describe('generateCalendarDays', () => {
    it('should generate calendar days with correct state', () => {
      const isDateDisabledFn = jest.fn(() => false);
      
      coordinator.generateCalendarDays(isDateDisabledFn);

      expect(mockCalendarGeneratorService.generateCalendarDays).toHaveBeenCalledWith(
        2025,
        4,
        expect.objectContaining({
          selectedDate: null,
          selectedDateRange: { startDate: null, endDate: null },
          focusedDate: null,
          firstDayOfWeek: 0,
          isRangeSelection: false
        })
      );
    });

    it('should pass isDateDisabledFn to service', () => {
      const isDateDisabledFn = jest.fn(() => true);
      
      coordinator.generateCalendarDays(isDateDisabledFn);

      const callArgs = mockCalendarGeneratorService.generateCalendarDays.mock.calls[0];
      expect(callArgs[2]).toHaveProperty('isDateDisabledFn', isDateDisabledFn);
    });

    it('should include minDate and maxDate in options', () => {
      stateManager.minDate = createDate(2025, 0, 1);
      stateManager.maxDate = createDate(2025, 11, 31);
      
      coordinator.generateCalendarDays(() => false);

      expect(mockCalendarGeneratorService.generateCalendarDays).toHaveBeenCalledWith(
        2025,
        4,
        expect.objectContaining({
          minDate: stateManager.minDate,
          maxDate: stateManager.maxDate
        })
      );
    });

    it('should include disabled dates and days of week', () => {
      stateManager.disabledDates = [createDate(2025, 4, 15)];
      stateManager.disabledDaysOfWeek = [0, 6]; // Sunday and Saturday
      
      coordinator.generateCalendarDays(() => false);

      expect(mockCalendarGeneratorService.generateCalendarDays).toHaveBeenCalledWith(
        2025,
        4,
        expect.objectContaining({
          disabledDates: stateManager.disabledDates,
          disabledDaysOfWeek: stateManager.disabledDaysOfWeek
        })
      );
    });

    it('should include hideOtherMonthDays option', () => {
      stateManager.hideOtherMonthDays = true;
      
      coordinator.generateCalendarDays(() => false);

      expect(mockCalendarGeneratorService.generateCalendarDays).toHaveBeenCalledWith(
        2025,
        4,
        expect.objectContaining({
          hideOtherMonthDays: true
        })
      );
    });

    it('should include selected date when set', () => {
      stateManager.selectedDate = createDate(2025, 4, 15);
      
      coordinator.generateCalendarDays(() => false);

      expect(mockCalendarGeneratorService.generateCalendarDays).toHaveBeenCalledWith(
        2025,
        4,
        expect.objectContaining({
          selectedDate: stateManager.selectedDate
        })
      );
    });

    it('should include selected date range when in range selection mode', () => {
      stateManager.isRangeSelection = true;
      stateManager.selectedDateRange = {
        startDate: createDate(2025, 4, 10),
        endDate: createDate(2025, 4, 20)
      };
      
      coordinator.generateCalendarDays(() => false);

      expect(mockCalendarGeneratorService.generateCalendarDays).toHaveBeenCalledWith(
        2025,
        4,
        expect.objectContaining({
          selectedDateRange: stateManager.selectedDateRange,
          isRangeSelection: true
        })
      );
    });

    it('should include focused date when set', () => {
      stateManager.focusedDate = createDate(2025, 4, 18);
      
      coordinator.generateCalendarDays(() => false);

      expect(mockCalendarGeneratorService.generateCalendarDays).toHaveBeenCalledWith(
        2025,
        4,
        expect.objectContaining({
          focusedDate: stateManager.focusedDate
        })
      );
    });

    it('should return calendar days from service', () => {
      const mockDays: CalendarDate[] = [
        {
          date: createDate(2025, 4, 1),
          day: 1,
          month: 4,
          year: 2025,
          isCurrentMonth: true,
          isToday: false,
          isSelected: false,
          isFocused: false,
          isDisabled: false,
          isInRange: false,
          isRangeStart: false,
          isRangeEnd: false
        }
      ];
      mockCalendarGeneratorService.generateCalendarDays.mockReturnValue(mockDays);
      
      const result = coordinator.generateCalendarDays(() => false);

      expect(result).toEqual(mockDays);
    });
  });

  describe('generateCalendarMonths', () => {
    it('should generate calendar months for current year', () => {
      coordinator.generateCalendarMonths();

      expect(mockCalendarGeneratorService.generateCalendarMonths).toHaveBeenCalledWith(
        2025,
        expect.objectContaining({
          currentDate: stateManager.currentDate,
          isRangeSelection: false
        })
      );
    });

    it('should include selected date and range in options', () => {
      stateManager.selectedDate = createDate(2025, 4, 15);
      stateManager.selectedDateRange = {
        startDate: createDate(2025, 3, 1),
        endDate: createDate(2025, 5, 30)
      };
      
      coordinator.generateCalendarMonths();

      expect(mockCalendarGeneratorService.generateCalendarMonths).toHaveBeenCalledWith(
        2025,
        expect.objectContaining({
          selectedDate: stateManager.selectedDate,
          selectedDateRange: stateManager.selectedDateRange
        })
      );
    });

    it('should include minDate and maxDate in options', () => {
      stateManager.minDate = createDate(2025, 0, 1);
      stateManager.maxDate = createDate(2025, 11, 31);
      
      coordinator.generateCalendarMonths();

      expect(mockCalendarGeneratorService.generateCalendarMonths).toHaveBeenCalledWith(
        2025,
        expect.objectContaining({
          minDate: stateManager.minDate,
          maxDate: stateManager.maxDate
        })
      );
    });

    it('should provide isMonthDisabledFn that checks constraints', () => {
      stateManager.minDate = createDate(2025, 5, 1);
      stateManager.maxDate = createDate(2025, 11, 31);
      
      coordinator.generateCalendarMonths();

      const callArgs = mockCalendarGeneratorService.generateCalendarMonths.mock.calls[0];
      const options = callArgs[1];
      const isMonthDisabledFn = options.isMonthDisabledFn;

      // Month before minDate should be disabled
      expect(isMonthDisabledFn(2025, 3)).toBe(true);
      // Month within range should not be disabled
      expect(isMonthDisabledFn(2025, 6)).toBe(false);
    });

    it('should check maxDate constraint in isMonthDisabledFn', () => {
      stateManager.maxDate = createDate(2025, 5, 15);
      
      coordinator.generateCalendarMonths();

      const callArgs = mockCalendarGeneratorService.generateCalendarMonths.mock.calls[0];
      const options = callArgs[1];
      const isMonthDisabledFn = options.isMonthDisabledFn;

      // Month after maxDate should be disabled
      expect(isMonthDisabledFn(2025, 6)).toBe(true);
      // Month before maxDate should not be disabled
      expect(isMonthDisabledFn(2025, 4)).toBe(false);
    });

    it('should return calendar months from service', () => {
      const mockMonths: CalendarMonth[] = [
        {
          month: 0,
          year: 2025,
          name: 'January',
          isCurrentMonth: false,
          isSelected: false,
          isDisabled: false
        }
      ];
      mockCalendarGeneratorService.generateCalendarMonths.mockReturnValue(mockMonths);
      
      const result = coordinator.generateCalendarMonths();

      expect(result).toEqual(mockMonths);
    });
  });

  describe('generateCalendarYears', () => {
    it('should generate calendar years with correct base year', () => {
      stateManager.yearRangeSize = 12;
      const isYearDisabledFn = jest.fn(() => false);
      
      coordinator.generateCalendarYears(isYearDisabledFn);

      expect(mockCalendarGeneratorService.generateCalendarYears).toHaveBeenCalledWith(
        2016, // 2025 - (2025 % 12) = 2025 - 9 = 2016
        12,
        expect.objectContaining({
          currentDate: stateManager.currentDate,
          isRangeSelection: false
        })
      );
    });

    it('should pass isYearDisabledFn to service', () => {
      const isYearDisabledFn = jest.fn(() => true);
      
      coordinator.generateCalendarYears(isYearDisabledFn);

      const callArgs = mockCalendarGeneratorService.generateCalendarYears.mock.calls[0];
      expect(callArgs[2]).toHaveProperty('isYearDisabledFn', isYearDisabledFn);
    });

    it('should include selected date and range in options', () => {
      stateManager.selectedDate = createDate(2025, 4, 15);
      stateManager.selectedDateRange = {
        startDate: createDate(2024, 0, 1),
        endDate: createDate(2026, 11, 31)
      };
      
      coordinator.generateCalendarYears(() => false);

      expect(mockCalendarGeneratorService.generateCalendarYears).toHaveBeenCalledWith(
        2016, // 2025 - (2025 % 12) = 2016
        12,
        expect.objectContaining({
          selectedDate: stateManager.selectedDate,
          selectedDateRange: stateManager.selectedDateRange
        })
      );
    });

    it('should include minDate and maxDate in options', () => {
      stateManager.minDate = createDate(2020, 0, 1);
      stateManager.maxDate = createDate(2030, 11, 31);
      
      coordinator.generateCalendarYears(() => false);

      expect(mockCalendarGeneratorService.generateCalendarYears).toHaveBeenCalledWith(
        2016, // 2025 - (2025 % 12) = 2016
        12,
        expect.objectContaining({
          minDate: stateManager.minDate,
          maxDate: stateManager.maxDate
        })
      );
    });

    it('should calculate correct base year for different year range sizes', () => {
      stateManager.yearRangeSize = 10;
      stateManager.currentDate = createDate(2025, 4, 21);
      
      coordinator.generateCalendarYears(() => false);

      expect(mockCalendarGeneratorService.generateCalendarYears).toHaveBeenCalledWith(
        2020, // 2025 - (2025 % 10) = 2020
        10,
        expect.any(Object)
      );
    });

    it('should return calendar years from service', () => {
      const mockYears: CalendarYear[] = [
        {
          year: 2020,
          isCurrentYear: false,
          isSelected: false,
          isDisabled: false
        }
      ];
      mockCalendarGeneratorService.generateCalendarYears.mockReturnValue(mockYears);
      
      const result = coordinator.generateCalendarYears(() => false);

      expect(result).toEqual(mockYears);
    });
  });

  describe('generateMonthView', () => {
    it('should call generateCalendarDays with default disabled function', () => {
      coordinator.generateMonthView();

      expect(mockCalendarGeneratorService.generateCalendarDays).toHaveBeenCalled();
    });

    it('should return calendar days', () => {
      const mockDays: CalendarDate[] = [
        {
          date: createDate(2025, 4, 1),
          day: 1,
          month: 4,
          year: 2025,
          isCurrentMonth: true,
          isToday: false,
          isSelected: false,
          isFocused: false,
          isDisabled: false,
          isInRange: false,
          isRangeStart: false,
          isRangeEnd: false
        }
      ];
      mockCalendarGeneratorService.generateCalendarDays.mockReturnValue(mockDays);
      
      const result = coordinator.generateMonthView();

      expect(result).toEqual(mockDays);
    });
  });
});
