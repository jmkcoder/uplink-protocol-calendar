import { ViewStateService } from '../../services/view-state.service';
import { Binding } from '@uplink-protocol/core';
import { createDate } from '../test-utils';
import { CalendarDate, DateRange } from '../../interfaces/calendar.interfaces';

describe('ViewStateService', () => {
  let service: ViewStateService;
  let mockCalendarDaysGenerator: jest.Mock;
  let mockCalendarDays: CalendarDate[];

  beforeEach(() => {
    service = new ViewStateService();
    
    // Create mock calendar days
    mockCalendarDays = [
      {
        date: createDate(2025, 4, 1),
        day: 1,
        month: 4,
        year: 2025,
        isCurrentMonth: true,
        isToday: false,
        isSelected: false,
        isDisabled: false,
        isInRange: false
      },
      {
        date: createDate(2025, 4, 2),
        day: 2,
        month: 4,
        year: 2025,
        isCurrentMonth: true,
        isToday: false,
        isSelected: false,
        isDisabled: false,
        isInRange: false
      }
    ];
    
    mockCalendarDaysGenerator = jest.fn().mockReturnValue(mockCalendarDays);
  });

  describe('initializeBindings', () => {
    it('should create bindings with correct initial values', () => {
      const currentDate = createDate(2025, 4, 15);
      const selectedDate = createDate(2025, 4, 10);
      const selectedDateRange: DateRange = {
        startDate: null,
        endDate: null
      };
      const firstDayOfWeek = 0;
      const isRangeSelection = false;
      
      const bindings = service.initializeBindings(
        currentDate,
        selectedDate,
        selectedDateRange,
        firstDayOfWeek,
        isRangeSelection,
        mockCalendarDaysGenerator
      );
      
      // Check that bindings were created with correct initial values
      expect(bindings.currentMonth.current).toBe(4); // May
      expect(bindings.currentYear.current).toBe(2025);
      expect(bindings.selectedDate.current).toEqual(selectedDate);
      expect(bindings.selectedDateRange.current).toEqual(selectedDateRange);
      expect(bindings.focusedDate.current).toBeNull();
      expect(bindings.isRangeSelection.current).toBe(false);
      expect(bindings.calendarDays.current).toEqual(mockCalendarDays);
      
      // Check that the generator was called
      expect(mockCalendarDaysGenerator).toHaveBeenCalledTimes(1);
    });
  });

  describe('updateCurrentDate', () => {
    it('should update month and year bindings', () => {
      const currentMonth = { value: 4, set: jest.fn() } as unknown as Binding<number>;
      const currentYear = { value: 2025, set: jest.fn() } as unknown as Binding<number>;
      const monthName = { value: 'May', set: jest.fn() } as unknown as Binding<string>;
      
      const newDate = createDate(2026, 2, 15); // March 15, 2026
      
      service.updateCurrentDate(
        newDate,
        currentMonth,
        currentYear,
        monthName,
        jest.fn() // getMonthName mock
      );
      
      expect(currentMonth.set).toHaveBeenCalledWith(2);
      expect(currentYear.set).toHaveBeenCalledWith(2026);
    });

    it('should update month name using provided function', () => {
      const currentMonth = { value: 4, set: jest.fn() } as unknown as Binding<number>;
      const currentYear = { value: 2025, set: jest.fn() } as unknown as Binding<number>;
      const monthName = { value: 'May', set: jest.fn() } as unknown as Binding<string>;
      
      const newDate = createDate(2026, 2, 15); // March 15, 2026
      const getMonthNameMock = jest.fn().mockReturnValue('March');
      
      service.updateCurrentDate(
        newDate,
        currentMonth,
        currentYear,
        monthName,
        getMonthNameMock
      );
      
      expect(getMonthNameMock).toHaveBeenCalledWith(2);
      expect(monthName.set).toHaveBeenCalledWith('March');
    });
  });

  describe('updateSelectedDate', () => {
    it('should update selectedDate binding', () => {
      const selectedDate = { value: null, set: jest.fn() } as unknown as Binding<Date | null>;
      const newDate = createDate(2025, 4, 15);
      
      service.updateSelectedDate(newDate, selectedDate);
      
      expect(selectedDate.set).toHaveBeenCalledWith(newDate);
    });

    it('should set null if provided date is null', () => {
      const selectedDate = { value: createDate(2025, 4, 15), set: jest.fn() } as unknown as Binding<Date | null>;
      
      service.updateSelectedDate(null, selectedDate);
      
      expect(selectedDate.set).toHaveBeenCalledWith(null);
    });
  });

  describe('updateSelectedDateRange', () => {
    it('should update selectedDateRange binding', () => {
      const selectedDateRange = { value: { startDate: null, endDate: null }, set: jest.fn() } as unknown as Binding<DateRange>;
      const newRange = { startDate: createDate(2025, 4, 10), endDate: createDate(2025, 4, 15) };
      
      service.updateSelectedDateRange(newRange, selectedDateRange);
      
      expect(selectedDateRange.set).toHaveBeenCalledWith(newRange);
    });
  });

  describe('updateCalendarDays', () => {
    it('should update calendarDays binding', () => {
      const calendarDays = { value: [], set: jest.fn() } as unknown as Binding<CalendarDate[]>;
      
      service.updateCalendarDays(mockCalendarDays, calendarDays);
      
      expect(calendarDays.set).toHaveBeenCalledWith(mockCalendarDays);
    });
  });

  describe('updateFocusedDate', () => {
    it('should update focusedDate binding', () => {
      const focusedDate = { value: null, set: jest.fn() } as unknown as Binding<Date | null>;
      const newDate = createDate(2025, 4, 15);
      
      service.updateFocusedDate(newDate, focusedDate);
      
      expect(focusedDate.set).toHaveBeenCalledWith(newDate);
    });
  });
});
