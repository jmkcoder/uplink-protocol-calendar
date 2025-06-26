import { CalendarGeneratorService } from '../../services/calendar-generator.service';
import { createDate, mockDate, testDates } from '../test-utils';
import { DateRange } from '../../interfaces/calendar.interfaces';
import { CalendarGenerationOptions, YearViewGenerationOptions } from '../../interfaces';

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
    it('should generate calendar days for a month', () => {      const options: CalendarGenerationOptions = {
        firstDayOfWeek: 0,
        hideOtherMonthDays: false,
        selectedDate: null,
        selectedDateRange: { start: null, end: null },
        isRangeSelection: false,
        focusedDate: null,
        minDate: null,
        maxDate: null,
        disabledDates: [],
        disabledDaysOfWeek: [],
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

    it('should handle first day of week offset', () => {      const options: CalendarGenerationOptions = {
        firstDayOfWeek: 1, // Monday as first day
        hideOtherMonthDays: false,
        selectedDate: null,
        selectedDateRange: { start: null, end: null },
        isRangeSelection: false,
        focusedDate: null,
        minDate: null,
        maxDate: null,
        disabledDates: [],
        disabledDaysOfWeek: [],
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

    it('should hide other month days when specified', () => {      const options: CalendarGenerationOptions = {
        firstDayOfWeek: 0,
        hideOtherMonthDays: true,
        selectedDate: null,
        selectedDateRange: { start: null, end: null },
        isRangeSelection: false,
        focusedDate: null,
        minDate: null,
        maxDate: null,
        disabledDates: [],
        disabledDaysOfWeek: [],
        isDateDisabledFn: function (date: Date): boolean {
          return false;
        }
      };

      const result = service.generateCalendarDays(2025, 4, options);
      
      // All days should be from May
      expect(result.every(d => d.month === 4 && d.year === 2025)).toBe(true);
    });

    it('should mark selected date correctly', () => {
      const selectedDate = createDate(2025, 4, 15);      const options: CalendarGenerationOptions = {
        firstDayOfWeek: 0,
        hideOtherMonthDays: false,
        selectedDate,
        selectedDateRange: { start: null, end: null },
        isRangeSelection: false,
        focusedDate: null,
        minDate: null,
        maxDate: null,
        disabledDates: [],
        disabledDaysOfWeek: [],
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
      };      const options: CalendarGenerationOptions = {
        firstDayOfWeek: 0,
        hideOtherMonthDays: false,
        selectedDate: null,
        selectedDateRange: dateRange,
        isRangeSelection: true,
        focusedDate: null,
        minDate: null,
        maxDate: null,
        disabledDates: [],
        disabledDaysOfWeek: [],
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
    it('should generate month view with weeks', () => {      const options: CalendarGenerationOptions = {
        selectedDate: null,
        selectedDateRange: { start: null, end: null },
        isRangeSelection: false,
        minDate: null,
        maxDate: null,
        focusedDate: null,
        firstDayOfWeek: 0,
        disabledDates: [],
        disabledDaysOfWeek: [],
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

    it('should include week numbers when requested', () => {      const options: CalendarGenerationOptions = {
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
        disabledDaysOfWeek: [],
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

  describe('generateCalendarDays with disabled days of week', () => {
    it('should mark disabled days of week correctly', () => {
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
        disabledDaysOfWeek: [0, 6], // Disable weekends (Sunday and Saturday)
        isDateDisabledFn: function (date: Date): boolean {
          // Check disabled days of week
          const dayOfWeek = date.getDay();
          return [0, 6].includes(dayOfWeek);
        }
      };

      const result = service.generateCalendarDays(2025, 4, options); // May 2025      // Find weekends in May 2025
      const weekendDays = result.filter(d => 
        d.month === 4 && d.year === 2025 && d.date && [0, 6].includes(d.date.getDay())
      );

      // All weekend days should be disabled
      expect(weekendDays.length).toBeGreaterThan(0);
      expect(weekendDays.every(d => d.isDisabled)).toBe(true);

      // Weekdays should not be disabled
      const weekdayDays = result.filter(d => 
        d.month === 4 && d.year === 2025 && d.date && ![0, 6].includes(d.date.getDay())
      );
      expect(weekdayDays.every(d => !d.isDisabled)).toBe(true);
    });

    it('should disable specific weekdays', () => {
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
        disabledDaysOfWeek: [1, 3, 5], // Disable Monday, Wednesday, Friday
        isDateDisabledFn: function (date: Date): boolean {
          const dayOfWeek = date.getDay();
          return [1, 3, 5].includes(dayOfWeek);
        }
      };

      const result = service.generateCalendarDays(2025, 4, options); // May 2025

      // Check specific dates that should be disabled
      // May 5, 2025 is a Monday (day 1)
      const monday = result.find(d => d.day === 5 && d.month === 4 && d.year === 2025);
      expect(monday?.isDisabled).toBe(true);

      // May 7, 2025 is a Wednesday (day 3) 
      const wednesday = result.find(d => d.day === 7 && d.month === 4 && d.year === 2025);
      expect(wednesday?.isDisabled).toBe(true);

      // May 9, 2025 is a Friday (day 5)
      const friday = result.find(d => d.day === 9 && d.month === 4 && d.year === 2025);
      expect(friday?.isDisabled).toBe(true);

      // May 6, 2025 is a Tuesday (day 2) - should NOT be disabled
      const tuesday = result.find(d => d.day === 6 && d.month === 4 && d.year === 2025);
      expect(tuesday?.isDisabled).toBe(false);

      // May 8, 2025 is a Thursday (day 4) - should NOT be disabled
      const thursday = result.find(d => d.day === 8 && d.month === 4 && d.year === 2025);
      expect(thursday?.isDisabled).toBe(false);
    });

    it('should combine disabled dates and disabled days of week', () => {
      const specificDisabledDate = createDate(2025, 4, 6); // May 6, 2025 - Tuesday

      const options: CalendarGenerationOptions = {
        firstDayOfWeek: 0,
        hideOtherMonthDays: false,
        selectedDate: null,
        selectedDateRange: { start: null, end: null },
        isRangeSelection: false,
        focusedDate: null,
        minDate: null,
        maxDate: null,
        disabledDates: [specificDisabledDate],
        disabledDaysOfWeek: [0, 6], // Disable weekends
        isDateDisabledFn: function (date: Date): boolean {
          // Check disabled specific dates
          const isSpecificDisabled = [specificDisabledDate].some(disabled =>
            disabled.getFullYear() === date.getFullYear() &&
            disabled.getMonth() === date.getMonth() &&
            disabled.getDate() === date.getDate()
          );

          // Check disabled days of week
          const dayOfWeek = date.getDay();
          const isDayOfWeekDisabled = [0, 6].includes(dayOfWeek);

          return isSpecificDisabled || isDayOfWeekDisabled;
        }
      };

      const result = service.generateCalendarDays(2025, 4, options); // May 2025

      // May 6, 2025 (Tuesday) should be disabled due to specific date
      const tuesday = result.find(d => d.day === 6 && d.month === 4 && d.year === 2025);
      expect(tuesday?.isDisabled).toBe(true);

      // May 4, 2025 (Sunday) should be disabled due to day of week
      const sunday = result.find(d => d.day === 4 && d.month === 4 && d.year === 2025);
      expect(sunday?.isDisabled).toBe(true);

      // May 10, 2025 (Saturday) should be disabled due to day of week
      const saturday = result.find(d => d.day === 10 && d.month === 4 && d.year === 2025);
      expect(saturday?.isDisabled).toBe(true);

      // May 7, 2025 (Wednesday) should NOT be disabled
      const wednesday = result.find(d => d.day === 7 && d.month === 4 && d.year === 2025);
      expect(wednesday?.isDisabled).toBe(false);
    });

    it('should work with disabled days of week across different months', () => {
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
        disabledDaysOfWeek: [0], // Only disable Sundays
        isDateDisabledFn: function (date: Date): boolean {
          return date.getDay() === 0; // Sunday
        }
      };

      const result = service.generateCalendarDays(2025, 4, options); // May 2025      // Find all Sundays in the calendar view (including from previous/next months)
      const sundays = result.filter(d => d.date && d.date.getDay() === 0);

      // All Sundays should be disabled, regardless of which month they belong to
      expect(sundays.length).toBeGreaterThan(0);
      expect(sundays.every(d => d.isDisabled)).toBe(true);

      // Non-Sundays should not be disabled
      const nonSundays = result.filter(d => d.date && d.date.getDay() !== 0);
      expect(nonSundays.every(d => !d.isDisabled)).toBe(true);
    });

    it('should handle empty disabled days of week array', () => {
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
        disabledDaysOfWeek: [], // No disabled days of week
        isDateDisabledFn: function (date: Date): boolean {
          return false; // No dates disabled
        }
      };

      const result = service.generateCalendarDays(2025, 4, options); // May 2025

      // No days should be disabled
      expect(result.every(d => !d.isDisabled)).toBe(true);
    });

    it('should disable all days when all weekdays are disabled', () => {
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
        disabledDaysOfWeek: [0, 1, 2, 3, 4, 5, 6], // All days disabled
        isDateDisabledFn: function (date: Date): boolean {
          return true; // All dates disabled
        }
      };

      const result = service.generateCalendarDays(2025, 4, options); // May 2025

      // All days should be disabled
      expect(result.every(d => d.isDisabled)).toBe(true);
    });
  });
});
