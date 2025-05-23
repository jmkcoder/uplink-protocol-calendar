import {
  getDaysInMonth,
  getFirstDayOfMonth,
  isSameDay,
  formatDate,
  isDateInRange,
  getMonthName,
  getWeekdayNames
} from '../../utils/calendar.utils';
import { createDate, testDates } from '../test-utils';

describe('Calendar Utils', () => {
  describe('getDaysInMonth', () => {
    it('should return correct days for regular months', () => {
      expect(getDaysInMonth(2025, 0)).toBe(31); // January
      expect(getDaysInMonth(2025, 1)).toBe(28); // February (non-leap year)
      expect(getDaysInMonth(2025, 3)).toBe(30); // April
      expect(getDaysInMonth(2025, 4)).toBe(31); // May
    });

    it('should return correct days for February in leap years', () => {
      expect(getDaysInMonth(2024, 1)).toBe(29); // February in leap year
      expect(getDaysInMonth(2028, 1)).toBe(29); // February in leap year
    });
  });

  describe('getFirstDayOfMonth', () => {
    it('should return the correct first day of a month', () => {
      // May 1, 2025 is a Thursday (4 in JS, where Sunday is 0)
      expect(getFirstDayOfMonth(2025, 4)).toBe(4);
      
      // January 1, 2025 is a Wednesday (3 in JS)
      expect(getFirstDayOfMonth(2025, 0)).toBe(3);
    });
  });

  describe('isSameDay', () => {
    it('should return true for same dates regardless of time', () => {
      const date1 = new Date(2025, 4, 21, 10, 30);
      const date2 = new Date(2025, 4, 21, 15, 45);
      expect(isSameDay(date1, date2)).toBe(true);
    });

    it('should return false for different dates', () => {
      const date1 = new Date(2025, 4, 21);
      const date2 = new Date(2025, 4, 22);
      expect(isSameDay(date1, date2)).toBe(false);
    });
  });

  describe('formatDate', () => {
    it('should format date as ISO string by default', () => {
      const date = new Date(2025, 4, 21); // May 21, 2025
      expect(formatDate(date)).toBe('2025-05-21');
    });

    it('should format date according to format string', () => {
      const date = new Date(2025, 4, 21); // May 21, 2025
      expect(formatDate(date, 'MM/DD/YYYY')).toBe('05/21/2025');
      expect(formatDate(date, 'DD-MM-YYYY')).toBe('21-05-2025');
    });
  });

  describe('isDateInRange', () => {
    it('should return true if date is within range', () => {
      const date = testDates.present;
      const minDate = testDates.past;
      const maxDate = testDates.future;
      
      expect(isDateInRange(date, minDate, maxDate)).toBe(true);
    });

    it('should return true if date is equal to min or max date', () => {
      const date = testDates.present;
      
      expect(isDateInRange(date, date, testDates.future)).toBe(true);
      expect(isDateInRange(date, testDates.past, date)).toBe(true);
    });

    it('should return false if date is outside range', () => {
      const date = testDates.future;
      const minDate = testDates.past;
      const maxDate = testDates.present;
      
      expect(isDateInRange(date, minDate, maxDate)).toBe(false);
    });

    it('should handle null min or max date', () => {
      const date = testDates.present;
      
      // Only min date - should be true if date >= minDate
      expect(isDateInRange(date, testDates.past, null)).toBe(true);
      expect(isDateInRange(testDates.past, date, null)).toBe(false);
      
      // Only max date - should be true if date <= maxDate
      expect(isDateInRange(date, null, testDates.future)).toBe(true);
      expect(isDateInRange(testDates.future, null, date)).toBe(false);
      
      // No min or max - should always be true
      expect(isDateInRange(date, null, null)).toBe(true);
    });
  });

  describe('getMonthName', () => {
    it('should return correct month name', () => {
      expect(getMonthName(0)).toBe('January');
      expect(getMonthName(4)).toBe('May');
      expect(getMonthName(11)).toBe('December');
    });

    it('should return short month name when requested', () => {
      expect(getMonthName(0, true)).toBe('Jan');
      expect(getMonthName(4, true)).toBe('May');
      expect(getMonthName(11, true)).toBe('Dec');
    });
  });

  describe('getWeekdayNames', () => {
    it('should return an array of weekday names starting with Sunday by default', () => {
      const weekdays = getWeekdayNames();
      expect(weekdays.length).toBe(7);
      expect(weekdays[0]).toBe('Sunday');
      expect(weekdays[6]).toBe('Saturday');
    });

    it('should return short weekday names when requested', () => {
      const weekdays = getWeekdayNames(true);
      expect(weekdays.length).toBe(7);
      expect(weekdays[0]).toBe('Sun');
      expect(weekdays[6]).toBe('Sat');
    });

    it('should adjust start day based on firstDayOfWeek param', () => {
      const weekdays = getWeekdayNames(false, 1); // start with Monday
      expect(weekdays.length).toBe(7);
      expect(weekdays[0]).toBe('Monday');
      expect(weekdays[6]).toBe('Sunday');
    });
  });
});
