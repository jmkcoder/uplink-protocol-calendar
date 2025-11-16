import { ViewGenerationCoordinator } from '../../coordinators/view-generation-coordinator';
import { ICalendarGeneratorService, CalendarDate, CalendarMonth, CalendarYear, DateRange } from '../../interfaces';
import { createDate } from '../test-utils';

describe('ViewGenerationCoordinator', () => {
  let coordinator: ViewGenerationCoordinator;
  let mockCalendarGeneratorService: jest.Mocked<ICalendarGeneratorService>;
  let getStateFn: jest.Mock;
  let isDateDisabledFn: jest.Mock;

  const mockState = {
    currentDate: createDate(2025, 4, 21),
    selectedDate: null as Date | null,
    selectedDateRange: { startDate: null, endDate: null } as DateRange,
    focusedDate: null as Date | null,
    firstDayOfWeek: 0,
    minDate: null as Date | null,
    maxDate: null as Date | null,
    disabledDates: [] as Date[],
    disabledDaysOfWeek: [] as number[],
    isRangeSelection: false,
    hideOtherMonthDays: false,
    currentYearRangeBase: 2020,
    yearRangeSize: 12
  };

  beforeEach(() => {
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

    getStateFn = jest.fn(() => ({ ...mockState }));
    isDateDisabledFn = jest.fn(() => false);

    coordinator = new ViewGenerationCoordinator(
      mockCalendarGeneratorService,
      getStateFn,
      isDateDisabledFn
    );
  });

  describe('generateCalendarDays', () => {
    it('should call calendar generator service with correct parameters', () => {
      const currentDate = createDate(2025, 4, 21);
      const selectedDate = createDate(2025, 4, 15);
      const selectedDateRange = { startDate: null, endDate: null };
      const focusedDate = null;
      const firstDayOfWeek = 0;
      const minDate = null;
      const maxDate = null;
      const disabledDates: Date[] = [];
      const disabledDaysOfWeek: number[] = [];
      const isRangeSelection = false;
      const hideOtherMonthDays = false;
      const isDateDisabled = jest.fn(() => false);

      coordinator.generateCalendarDays(
        currentDate,
        selectedDate,
        selectedDateRange,
        focusedDate,
        firstDayOfWeek,
        minDate,
        maxDate,
        disabledDates,
        disabledDaysOfWeek,
        isRangeSelection,
        hideOtherMonthDays,
        isDateDisabled
      );

      expect(mockCalendarGeneratorService.generateCalendarDays).toHaveBeenCalledWith(
        2025,
        4,
        expect.objectContaining({
          selectedDate,
          selectedDateRange,
          focusedDate,
          firstDayOfWeek,
          minDate,
          maxDate,
          disabledDates,
          disabledDaysOfWeek,
          isRangeSelection,
          isDateDisabledFn: isDateDisabled,
          hideOtherMonthDays
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

      const result = coordinator.generateCalendarDays(
        createDate(2025, 4, 21),
        null,
        { startDate: null, endDate: null },
        null,
        0,
        null,
        null,
        [],
        [],
        false,
        false,
        () => false
      );

      expect(result).toEqual(mockDays);
    });

    it('should handle range selection', () => {
      const selectedDateRange = {
        startDate: createDate(2025, 4, 10),
        endDate: createDate(2025, 4, 20)
      };

      coordinator.generateCalendarDays(
        createDate(2025, 4, 21),
        null,
        selectedDateRange,
        null,
        0,
        null,
        null,
        [],
        [],
        true,
        false,
        () => false
      );

      expect(mockCalendarGeneratorService.generateCalendarDays).toHaveBeenCalledWith(
        2025,
        4,
        expect.objectContaining({
          selectedDateRange,
          isRangeSelection: true
        })
      );
    });

    it('should handle hideOtherMonthDays', () => {
      coordinator.generateCalendarDays(
        createDate(2025, 4, 21),
        null,
        { startDate: null, endDate: null },
        null,
        0,
        null,
        null,
        [],
        [],
        false,
        true,
        () => false
      );

      expect(mockCalendarGeneratorService.generateCalendarDays).toHaveBeenCalledWith(
        2025,
        4,
        expect.objectContaining({
          hideOtherMonthDays: true
        })
      );
    });
  });

  describe('generateCalendarMonths', () => {
    it('should call calendar generator service with correct parameters', () => {
      const currentDate = createDate(2025, 4, 21);
      const selectedDate = createDate(2025, 4, 15);
      const selectedDateRange = { startDate: null, endDate: null };
      const isRangeSelection = false;
      const minDate = createDate(2025, 0, 1);
      const maxDate = createDate(2025, 11, 31);

      coordinator.generateCalendarMonths(
        currentDate,
        selectedDate,
        selectedDateRange,
        isRangeSelection,
        minDate,
        maxDate
      );

      expect(mockCalendarGeneratorService.generateCalendarMonths).toHaveBeenCalledWith(
        2025,
        expect.objectContaining({
          selectedDate,
          selectedDateRange,
          isRangeSelection,
          currentDate,
          minDate,
          maxDate
        })
      );
    });

    it('should provide isMonthDisabledFn', () => {
      coordinator.generateCalendarMonths(
        createDate(2025, 4, 21),
        null,
        { startDate: null, endDate: null },
        false,
        createDate(2025, 3, 1),
        createDate(2025, 9, 31)
      );

      const callArgs = mockCalendarGeneratorService.generateCalendarMonths.mock.calls[0];
      const options = callArgs[1];
      expect(options).toHaveProperty('isMonthDisabledFn');
    });

    it('should disable months before minDate', () => {
      const minDate = createDate(2025, 5, 1);
      
      coordinator.generateCalendarMonths(
        createDate(2025, 4, 21),
        null,
        { startDate: null, endDate: null },
        false,
        minDate,
        null
      );

      const callArgs = mockCalendarGeneratorService.generateCalendarMonths.mock.calls[0];
      const options = callArgs[1];
      const isMonthDisabledFn = options.isMonthDisabledFn;

      expect(isMonthDisabledFn(2025, 3)).toBe(true); // April should be disabled
      expect(isMonthDisabledFn(2025, 5)).toBe(false); // June should not be disabled
    });

    it('should disable months after maxDate', () => {
      const maxDate = createDate(2025, 5, 15);
      
      coordinator.generateCalendarMonths(
        createDate(2025, 4, 21),
        null,
        { startDate: null, endDate: null },
        false,
        null,
        maxDate
      );

      const callArgs = mockCalendarGeneratorService.generateCalendarMonths.mock.calls[0];
      const options = callArgs[1];
      const isMonthDisabledFn = options.isMonthDisabledFn;

      expect(isMonthDisabledFn(2025, 6)).toBe(true); // July should be disabled
      expect(isMonthDisabledFn(2025, 4)).toBe(false); // May should not be disabled
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

      const result = coordinator.generateCalendarMonths(
        createDate(2025, 4, 21),
        null,
        { startDate: null, endDate: null },
        false,
        null,
        null
      );

      expect(result).toEqual(mockMonths);
    });
  });

  describe('generateCalendarYears', () => {
    it('should call calendar generator service with correct parameters', () => {
      const currentDate = createDate(2025, 4, 21);
      const currentYearRangeBase = 2020;
      const yearRangeSize = 12;
      const selectedDate = createDate(2025, 4, 15);
      const selectedDateRange = { startDate: null, endDate: null };
      const isRangeSelection = false;
      const minDate = createDate(2020, 0, 1);
      const maxDate = createDate(2030, 11, 31);

      coordinator.generateCalendarYears(
        currentDate,
        currentYearRangeBase,
        yearRangeSize,
        selectedDate,
        selectedDateRange,
        isRangeSelection,
        minDate,
        maxDate
      );

      expect(mockCalendarGeneratorService.generateCalendarYears).toHaveBeenCalledWith(
        2020,
        12,
        expect.objectContaining({
          selectedDate,
          selectedDateRange,
          isRangeSelection,
          currentDate,
          minDate,
          maxDate
        })
      );
    });

    it('should calculate base year when currentYearRangeBase is 0', () => {
      coordinator.generateCalendarYears(
        createDate(2025, 4, 21),
        0,
        12,
        null,
        { startDate: null, endDate: null },
        false,
        null,
        null
      );

      expect(mockCalendarGeneratorService.generateCalendarYears).toHaveBeenCalledWith(
        2016, // 2025 - (2025 % 12) = 2025 - 9 = 2016
        12,
        expect.any(Object)
      );
    });

    it('should provide isYearDisabledFn', () => {
      coordinator.generateCalendarYears(
        createDate(2025, 4, 21),
        2020,
        12,
        null,
        { startDate: null, endDate: null },
        false,
        createDate(2022, 0, 1),
        createDate(2028, 11, 31)
      );

      const callArgs = mockCalendarGeneratorService.generateCalendarYears.mock.calls[0];
      const options = callArgs[2];
      expect(options).toHaveProperty('isYearDisabledFn');
    });

    it('should disable years before minDate', () => {
      const minDate = createDate(2023, 0, 1);
      
      coordinator.generateCalendarYears(
        createDate(2025, 4, 21),
        2020,
        12,
        null,
        { startDate: null, endDate: null },
        false,
        minDate,
        null
      );

      const callArgs = mockCalendarGeneratorService.generateCalendarYears.mock.calls[0];
      const options = callArgs[2];
      const isYearDisabledFn = options.isYearDisabledFn;

      expect(isYearDisabledFn(2022)).toBe(true);
      expect(isYearDisabledFn(2023)).toBe(false);
    });

    it('should disable years after maxDate', () => {
      const maxDate = createDate(2027, 11, 31);
      
      coordinator.generateCalendarYears(
        createDate(2025, 4, 21),
        2020,
        12,
        null,
        { startDate: null, endDate: null },
        false,
        null,
        maxDate
      );

      const callArgs = mockCalendarGeneratorService.generateCalendarYears.mock.calls[0];
      const options = callArgs[2];
      const isYearDisabledFn = options.isYearDisabledFn;

      expect(isYearDisabledFn(2028)).toBe(true);
      expect(isYearDisabledFn(2027)).toBe(false);
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

      const result = coordinator.generateCalendarYears(
        createDate(2025, 4, 21),
        2020,
        12,
        null,
        { startDate: null, endDate: null },
        false,
        null,
        null
      );

      expect(result).toEqual(mockYears);
    });
  });

  describe('generateMonthView', () => {
    it('should call calendar generator service with state from getState', () => {
      coordinator.generateMonthView();

      expect(getStateFn).toHaveBeenCalled();
      expect(mockCalendarGeneratorService.generateMonthView).toHaveBeenCalledWith(
        2025,
        4,
        expect.objectContaining({
          selectedDate: mockState.selectedDate,
          selectedDateRange: mockState.selectedDateRange,
          focusedDate: mockState.focusedDate,
          firstDayOfWeek: mockState.firstDayOfWeek,
          minDate: mockState.minDate,
          maxDate: mockState.maxDate,
          disabledDates: mockState.disabledDates,
          disabledDaysOfWeek: mockState.disabledDaysOfWeek,
          isRangeSelection: mockState.isRangeSelection,
          hideOtherMonthDays: mockState.hideOtherMonthDays
        })
      );
    });

    it('should return month view from service', () => {
      const mockMonthView = {
        month: 4,
        year: 2025,
        weeks: [
          { days: [], weekNumber: 21 }
        ],
        weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      };
      mockCalendarGeneratorService.generateMonthView.mockReturnValue(mockMonthView);

      const result = coordinator.generateMonthView();

      expect(result).toEqual(mockMonthView);
    });
  });

  describe('generateYearView', () => {
    it('should call calendar generator service with state from getState', () => {
      coordinator.generateYearView();

      expect(getStateFn).toHaveBeenCalled();
      expect(mockCalendarGeneratorService.generateYearView).toHaveBeenCalledWith(
        2025,
        expect.objectContaining({
          selectedDate: mockState.selectedDate,
          selectedDateRange: mockState.selectedDateRange,
          isRangeSelection: mockState.isRangeSelection,
          currentDate: mockState.currentDate,
          minDate: mockState.minDate,
          maxDate: mockState.maxDate
        })
      );
    });

    it('should return year view from service', () => {
      const mockYearView = {
        months: [],
        year: 2025
      };
      mockCalendarGeneratorService.generateYearView.mockReturnValue(mockYearView);

      const result = coordinator.generateYearView();

      expect(result).toEqual(mockYearView);
    });
  });

  describe('getWeekNumber', () => {
    it('should delegate to calendar generator service', () => {
      const date = createDate(2025, 4, 15);
      mockCalendarGeneratorService.getWeekNumber.mockReturnValue(20);

      const result = coordinator.getWeekNumber(date);

      expect(mockCalendarGeneratorService.getWeekNumber).toHaveBeenCalledWith(date);
      expect(result).toBe(20);
    });
  });
});
