import { CalendarGeneratorService } from '../../services/calendar-generator.service';
import { createDate, mockDate, testDates } from '../test-utils';
import { CalendarDate, DateRange } from '../../interfaces/calendar.interfaces';
import { CalendarGenerationOptions, MonthViewGenerationOptions, YearViewGenerationOptions } from '../../interfaces';

describe('CalendarGeneratorService', () => {
  let service: CalendarGeneratorService;
  let originalDate: typeof Date;
  let resetDate: () => void;

  beforeEach(() => {
    service = new CalendarGeneratorService();
    // Mock current date to May 21, 2025
    resetDate = mockDate(testDates.present);
  });

  afterEach(() => {
    resetDate();
  });

  describe('generateCalendarDays', () => {
    it('should generate calendar days for a month', () => {
      const options: CalendarGenerationOptions = {
        firstDayOfWeek: 0,
        hideOtherMonthDays: false,
        selectedDate: null,
        selectedDateRange: { start: null, end: null },
        isRangeSelection: false,
        focusedDate: null,
        minDate: null,
        maxDate: null,
        disabledDates: [],
        isDateDisabledFn: function (date: Date): boolean {
          return false;
        }
      };

      const result = service.generateCalendarDays(2025, 4, options);

      expect(result.length).toBeGreaterThan(28); // Should include at least all days in May
      
      // Check current month days are marked correctly
      const mayDays = result.filter(d => d.month === 4);
      expect(mayDays.length).toBe(31); // May has 31 days
      expect(mayDays.every(d => d.isCurrentMonth)).toBe(true);
      
      // Check today is marked correctly
      const today = result.find(d => d.day === 21 && d.month === 4 && d.year === 2025);
      expect(today).toBeDefined();
      expect(today?.isToday).toBe(true);
    });

    it('should handle first day of week offset', () => {
      const options: CalendarGenerationOptions = {
        firstDayOfWeek: 1, // Monday as first day
        hideOtherMonthDays: false,
        selectedDate: null,
        selectedDateRange: { start: null, end: null },
        isRangeSelection: false,
        focusedDate: null,
        minDate: null,
        maxDate: null,
        disabledDates: [],
        isDateDisabledFn: function (date: Date): boolean {
          return false;
        }
      };

      const result = service.generateCalendarDays(2025, 4, options);
      
      // The first day of the result should be from the previous month
      // May 1, 2025 is a Thursday, so with Monday as first day of week,
      // we should have April 28, 29, 30 at the beginning
      const firstDay = result[0];
      expect(firstDay.month).toBe(3); // April
    });

    it('should hide other month days when specified', () => {
      const options: CalendarGenerationOptions = {
        firstDayOfWeek: 0,
        hideOtherMonthDays: true,
        selectedDate: null,
        selectedDateRange: { start: null, end: null },
        isRangeSelection: false,
        focusedDate: null,
        minDate: null,
        maxDate: null,
        disabledDates: [],
        isDateDisabledFn: function (date: Date): boolean {
          return false;
        }
      };

      const result = service.generateCalendarDays(2025, 4, options);
      
      // All days should be from May
      expect(result.every(d => d.month === 4 && d.year === 2025)).toBe(true);
    });

    it('should mark selected date correctly', () => {
      const selectedDate = createDate(2025, 4, 15);
      const options: CalendarGenerationOptions = {
        firstDayOfWeek: 0,
        hideOtherMonthDays: false,
        selectedDate,
        selectedDateRange: { start: null, end: null },
        isRangeSelection: false,
        focusedDate: null,
        minDate: null,
        maxDate: null,
        disabledDates: [],
        isDateDisabledFn: function (date: Date): boolean {
          return false;
        }
      };

      const result = service.generateCalendarDays(2025, 4, options);
      
      // The selected day should be marked
      const selectedDay = result.find(d => d.day === 15 && d.month === 4);
      expect(selectedDay).toBeDefined();
      expect(selectedDay?.isSelected).toBe(true);
      
      // Other days should not be selected
      const nonSelectedDays = result.filter(d => !(d.day === 15 && d.month === 4));
      expect(nonSelectedDays.every(d => !d.isSelected)).toBe(true);
    });

    it('should mark date range correctly', () => {
      const dateRange: DateRange = {
        startDate: createDate(2025, 4, 10),
        endDate: createDate(2025, 4, 15)
      };

      const options: CalendarGenerationOptions = {
        firstDayOfWeek: 0,
        hideOtherMonthDays: false,
        selectedDate: null,
        selectedDateRange: dateRange,
        isRangeSelection: true,
        focusedDate: null,
        minDate: null,
        maxDate: null,
        disabledDates: [],
        isDateDisabledFn: function (date: Date): boolean {
          return false;
        }
      };

      const result = service.generateCalendarDays(2025, 4, options);
      
      // Days within the range should be marked as inRange
      for (let day = 11; day <= 14; day++) {
        const dayInRange = result.find(d => d.day === day && d.month === 4);
        expect(dayInRange).toBeDefined();
        expect(dayInRange?.isInRange).toBe(true);
      }
      
      // Start and end days should be marked as selected
      const startDay = result.find(d => d.day === 10 && d.month === 4);
      const endDay = result.find(d => d.day === 15 && d.month === 4);
      expect(startDay?.isSelected).toBe(true);
      expect(endDay?.isSelected).toBe(true);
    });
  });

  describe('generateMonthView', () => {
    it('should generate month view with weeks', () => {
      const options: CalendarGenerationOptions = {
        selectedDate: null,
        selectedDateRange: { start: null, end: null },
        isRangeSelection: false,
        minDate: null,
        maxDate: null,
        focusedDate: null,
        firstDayOfWeek: 0,
        disabledDates: [],
        isDateDisabledFn: function (date: Date): boolean {
          return false;
        },
        hideOtherMonthDays: false,
        weekNumbers: true
      };

      const result = service.generateMonthView(2025, 4, options);
      
      expect(result.month).toBe(4);
      expect(result.year).toBe(2025);
      expect(Array.isArray(result.weeks)).toBe(true);
      expect(result.weeks.length).toBeGreaterThanOrEqual(5); // May 2025 spans at least 5 weeks
      
      // Each week should have 7 days
      result.weeks.forEach(week => {
        expect(week.days.length).toBe(7);
      });
    });

    it('should include week numbers when requested', () => {
      const options: CalendarGenerationOptions = {
        firstDayOfWeek: 0,
        hideOtherMonthDays: false,
        selectedDate: null,
        selectedDateRange: { start: null, end: null },
        isRangeSelection: false,
        weekNumbers: true,
        focusedDate: null,
        minDate: null,
        maxDate: null,
        disabledDates: [],
        isDateDisabledFn: function (date: Date): boolean {
          return false;
        }
      };

      const result = service.generateMonthView(2025, 4, options);
      
      // Each week should have a week number
      result.weeks.forEach(week => {
        expect(typeof week.weekNumber).toBe('number');
      });
    });
  });

  describe('generateYearView', () => {
    it('should generate year view with all months', () => {
      const options: YearViewGenerationOptions = {
        selectedDate: null,
        selectedDateRange: { start: null, end: null },
        isRangeSelection: false,
        currentDate: new Date(2025, 4, 21),
        minDate: null,
        maxDate: null
      };

      const result = service.generateYearView(2025, options);
      
      expect(result.year).toBe(2025);
      expect(result.months.length).toBe(12);
      
      // Check all months are included in correct order
      for (let i = 0; i < 12; i++) {
        expect(result.months[i].month).toBe(i);
        expect(result.months[i].year).toBe(2025);
      }
    });

    it('should mark current month', () => {
      const options: YearViewGenerationOptions = {
        selectedDate: null,
        selectedDateRange: { start: null, end: null },
        isRangeSelection: false,
        currentDate: new Date(2025, 4, 21),
        minDate: null,
        maxDate: null
      };

      const result = service.generateYearView(2025, options);
      
      // May should be marked as current month
      const mayMonth = result.months.find(m => m.month === 4);
      expect(mayMonth).toBeDefined();
      expect(mayMonth?.isCurrentMonth).toBe(true);
      
      // Other months should not be marked as current
      const otherMonths = result.months.filter(m => m.month !== 4);
      expect(otherMonths.every(m => !m.isCurrentMonth)).toBe(true);
    });
  });
});
