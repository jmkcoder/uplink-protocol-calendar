import { CalendarService } from '../../services/calendar.service';
import { createDate, testDates, mockDate } from '../test-utils';
import { LocalizationService } from '../../services/localization.service';
import { CalendarGenerationOptions } from '../../interfaces';

describe('CalendarService', () => {
  let service: CalendarService;
  let resetDate: () => void;

  beforeEach(() => {
    service = new CalendarService();
    resetDate = mockDate(testDates.present);
  });

  afterEach(() => {
    resetDate();
  });

  describe('localization', () => {
    it('should get and set localization service', () => {
      expect(service.getLocalizationService()).toBeNull();
      
      const localizationService = new LocalizationService();
      service.setLocalizationService(localizationService);
      
      expect(service.getLocalizationService()).toBe(localizationService);
    });
  });

  describe('generateCalendarDays', () => {
    it('should generate calendar days for a month', () => {
      const options: CalendarGenerationOptions = {
        firstDayOfWeek: 0,
        hideOtherMonthDays: false,
        selectedDate: null,
        selectedDateRange: { startDate: null, endDate: null },
        isRangeSelection: false,
        focusedDate: null,
        minDate: null,
        maxDate: null,
        disabledDates: [],
        isDateDisabledFn: function (date: Date): boolean {
          return false;
        }
      };
      
      const days = service.generateCalendarDays(2025, 4, options);
      
      expect(Array.isArray(days)).toBe(true);
      // May has 31 days
      const mayDays = days.filter(d => d.month === 4 && d.year === 2025);
      expect(mayDays.length).toBe(31);
    });

    it('should mark today correctly', () => {
      const options: CalendarGenerationOptions = {
        firstDayOfWeek: 0,
        hideOtherMonthDays: false,
        selectedDate: null,
        selectedDateRange: { startDate: null, endDate: null },
        isRangeSelection: false,
        focusedDate: null,
        minDate: null,
        maxDate: null,
        disabledDates: [],
        isDateDisabledFn: function (date: Date): boolean {
          return false;
        }
      };
      
      const days = service.generateCalendarDays(2025, 4, options);
      
      // Find May 21, 2025 (our mocked "today")
      const today = days.find(d => d.day === 21 && d.month === 4 && d.year === 2025);
      expect(today).toBeDefined();
      expect(today?.isToday).toBe(true);
      
      // All other days should not be marked as today
      const otherDays = days.filter(d => !(d.day === 21 && d.month === 4 && d.year === 2025));
      expect(otherDays.every(d => !d.isToday)).toBe(true);
    });

    it('should mark selected date', () => {
      const selectedDate = createDate(2025, 4, 15);
      const options: CalendarGenerationOptions = {
        firstDayOfWeek: 0,
        hideOtherMonthDays: false,
        selectedDate,
        selectedDateRange: { startDate: null, endDate: null },
        isRangeSelection: false,
        focusedDate: null,
        minDate: null,
        maxDate: null,
        disabledDates: [],
        isDateDisabledFn: function (date: Date): boolean {
          return false;
        }
      };
      
      const days = service.generateCalendarDays(2025, 4, options);
      
      // Find May 15, 2025 (our selected date)
      const selected = days.find(d => d.day === 15 && d.month === 4 && d.year === 2025);
      expect(selected).toBeDefined();
      expect(selected?.isSelected).toBe(true);
      
      // All other days should not be selected
      const otherDays = days.filter(d => !(d.day === 15 && d.month === 4 && d.year === 2025));
      expect(otherDays.every(d => !d.isSelected)).toBe(true);
    });

    it('should include days from previous and next months when hideOtherMonthDays is false', () => {
      const options: CalendarGenerationOptions = {
        firstDayOfWeek: 0,
        hideOtherMonthDays: false,
        selectedDate: null,
        selectedDateRange: { startDate: null, endDate: null },
        isRangeSelection: false,
        focusedDate: null,
        minDate: null,
        maxDate: null,
        disabledDates: [],
        isDateDisabledFn: function (date: Date): boolean {
          return false;
        }
      };
      
      const days = service.generateCalendarDays(2025, 4, options);
      
      // Should include some days from April (month 3) and June (month 5)
      const prevMonthDays = days.filter(d => d.month === 3);
      const nextMonthDays = days.filter(d => d.month === 5);
      
      expect(prevMonthDays.length).toBeGreaterThan(0);
      expect(nextMonthDays.length).toBeGreaterThan(0);
      
      // These days should be marked as not current month
      expect(prevMonthDays.every(d => !d.isCurrentMonth)).toBe(true);
      expect(nextMonthDays.every(d => !d.isCurrentMonth)).toBe(true);
    });

    it('should not include days from other months when hideOtherMonthDays is true', () => {
      const options: CalendarGenerationOptions = {
        firstDayOfWeek: 0,
        hideOtherMonthDays: true,
        selectedDate: null,
        selectedDateRange: { startDate: null, endDate: null },
        isRangeSelection: false,
        focusedDate: null,
        minDate: null,
        maxDate: null,
        disabledDates: [],
        isDateDisabledFn: function (date: Date): boolean {
          return false;
        }
      };
      
      const days = service.generateCalendarDays(2025, 4, options);
      
      // Should only include days from May (month 4)
      expect(days.every(d => d.month === 4 && d.year === 2025)).toBe(true);
      expect(days.length).toBe(31); // May has 31 days
    });

    it('should apply date disabled function when provided', () => {
      // Mock function that disables odd-numbered days
      const isDateDisabledFn = (date: Date) => date.getDate() % 2 === 1;
      
      const options: CalendarGenerationOptions = {
        firstDayOfWeek: 0,
        hideOtherMonthDays: false,
        selectedDate: null,
        selectedDateRange: { startDate: null, endDate: null },
        isRangeSelection: false,
        isDateDisabledFn,
        focusedDate: null,
        minDate: null,
        maxDate: null,
        disabledDates: []
      };
      
      const days = service.generateCalendarDays(2025, 4, options);
      
      // Odd-numbered May days should be disabled
      const mayDays = days.filter(d => d.month === 4 && d.year === 2025);
      const oddDays = mayDays.filter(d => d.day % 2 === 1);
      const evenDays = mayDays.filter(d => d.day % 2 === 0);
      
      expect(oddDays.every(d => d.isDisabled)).toBe(true);
      expect(evenDays.every(d => !d.isDisabled)).toBe(true);
    });
  });

  describe('isDateInSelectedRange', () => {
    it('should return false if range is incomplete', () => {
      const date = createDate(2025, 4, 15);
      const range = { 
        startDate: createDate(2025, 4, 10),
        endDate: null
      };
      
      const result = service.isDateInSelectedRange(date, range);
      
      expect(result).toBe(false);
    });

    it('should return true if date is within range', () => {
      const date = createDate(2025, 4, 15);
      const range = { 
        startDate: createDate(2025, 4, 10),
        endDate: createDate(2025, 4, 20)
      };
      
      const result = service.isDateInSelectedRange(date, range);
      
      expect(result).toBe(true);
    });

    it('should return true for start and end dates', () => {
      const startDate = createDate(2025, 4, 10);
      const endDate = createDate(2025, 4, 20);
      const range = { startDate, endDate };
      
      expect(service.isDateInSelectedRange(startDate, range)).toBe(true);
      expect(service.isDateInSelectedRange(endDate, range)).toBe(true);
    });

    it('should return false if date is outside range', () => {
      const date = createDate(2025, 4, 25);
      const range = { 
        startDate: createDate(2025, 4, 10),
        endDate: createDate(2025, 4, 20)
      };
      
      const result = service.isDateInSelectedRange(date, range);
      
      expect(result).toBe(false);
    });
  });

  describe('getWeekNumber', () => {
    it('should calculate the correct week number', () => {
      // January 1, 2025 is a Wednesday, first week of the year
      const firstWeek = service.getWeekNumber(new Date(2025, 0, 1));
      expect(firstWeek).toBe(1);
      
      // May 21, 2025 should be around week 21
      const midYear = service.getWeekNumber(new Date(2025, 4, 21));
      expect(midYear).toBeGreaterThan(20);
      expect(midYear).toBeLessThan(22);
      
      // December 31, 2025 should be week 53 or 1 depending on locale
      const lastDay = service.getWeekNumber(new Date(2025, 11, 31));
      expect(lastDay).toBeGreaterThanOrEqual(1);
    });
  });

  describe('isToday', () => {
    it('should correctly identify today', () => {
      // May 21, 2025 is our mocked "today"
      const today = createDate(2025, 4, 21);
      const notToday = createDate(2025, 4, 22);
      
      expect(service.isToday(today)).toBe(true);
      expect(service.isToday(notToday)).toBe(false);
    });
  });
});
