import { NavigationService } from '../../services/navigation.service';
import { createDate } from '../test-utils';

describe('NavigationService', () => {
  let service: NavigationService;

  beforeEach(() => {
    service = new NavigationService();
  });

  describe('navigateToNextMonth', () => {
    it('should navigate to the next month', () => {
      const currentDate = createDate(2025, 4, 15); // May 15, 2025
      const result = service.navigateToNextMonth(currentDate);
      
      expect(result.getFullYear()).toBe(2025);
      expect(result.getMonth()).toBe(5); // June
      expect(result.getDate()).toBe(15);
    });

    it('should navigate to the next year when current month is December', () => {
      const currentDate = createDate(2025, 11, 15); // December 15, 2025
      const result = service.navigateToNextMonth(currentDate);
      
      expect(result.getFullYear()).toBe(2026);
      expect(result.getMonth()).toBe(0); // January
      expect(result.getDate()).toBe(15);
    });
  });

  describe('navigateToPreviousMonth', () => {
    it('should navigate to the previous month', () => {
      const currentDate = createDate(2025, 4, 15); // May 15, 2025
      const result = service.navigateToPreviousMonth(currentDate);
      
      expect(result.getFullYear()).toBe(2025);
      expect(result.getMonth()).toBe(3); // April
      expect(result.getDate()).toBe(15);
    });

    it('should navigate to the previous year when current month is January', () => {
      const currentDate = createDate(2025, 0, 15); // January 15, 2025
      const result = service.navigateToPreviousMonth(currentDate);
      
      expect(result.getFullYear()).toBe(2024);
      expect(result.getMonth()).toBe(11); // December
      expect(result.getDate()).toBe(15);
    });
  });

  describe('navigateToNextYear', () => {
    it('should navigate to the next year', () => {
      const currentDate = createDate(2025, 4, 15); // May 15, 2025
      const result = service.navigateToNextYear(currentDate);
      
      expect(result.getFullYear()).toBe(2026);
      expect(result.getMonth()).toBe(4); // May
      expect(result.getDate()).toBe(15);
    });
  });

  describe('navigateToPreviousYear', () => {
    it('should navigate to the previous year', () => {
      const currentDate = createDate(2025, 4, 15); // May 15, 2025
      const result = service.navigateToPreviousYear(currentDate);
      
      expect(result.getFullYear()).toBe(2024);
      expect(result.getMonth()).toBe(4); // May
      expect(result.getDate()).toBe(15);
    });
  });

  describe('navigateToMonth', () => {
    it('should navigate to the specified month', () => {
      const currentDate = createDate(2025, 4, 15); // May 15, 2025
      const result = service.navigateToMonth(currentDate, 9); // October
      
      expect(result.getFullYear()).toBe(2025);
      expect(result.getMonth()).toBe(9); // October
      expect(result.getDate()).toBe(15);
    });

    it('should not change date if month is invalid', () => {
      const currentDate = createDate(2025, 4, 15); // May 15, 2025
      
      // Test with invalid month (-1)
      let result = service.navigateToMonth(currentDate, -1);
      expect(result).toEqual(currentDate);
      
      // Test with invalid month (12)
      result = service.navigateToMonth(currentDate, 12);
      expect(result).toEqual(currentDate);
    });
  });

  describe('navigateToYear', () => {
    it('should navigate to the specified year', () => {
      const currentDate = createDate(2025, 4, 15); // May 15, 2025
      const result = service.navigateToYear(currentDate, 2030);
      
      expect(result.getFullYear()).toBe(2030);
      expect(result.getMonth()).toBe(4); // May
      expect(result.getDate()).toBe(15);
    });

    it('should handle leap year day adjustments', () => {
      // February 29 in a leap year
      const leapYearDate = createDate(2024, 1, 29);
      
      // Navigate to a non-leap year
      const result = service.navigateToYear(leapYearDate, 2025);
      
      // Should adjust to February 28 in non-leap year
      expect(result.getFullYear()).toBe(2025);
      expect(result.getMonth()).toBe(1); // February
      expect(result.getDate()).toBe(28); // Adjusted from 29 to 28
    });
  });

  describe('navigateToDate', () => {
    it('should navigate to the specified date', () => {
      const currentDate = createDate(2025, 4, 15); // May 15, 2025
      const targetDate = createDate(2026, 7, 20); // August 20, 2026
      
      const result = service.navigateToDate(currentDate, targetDate);
      
      expect(result).toEqual(targetDate);
    });

    it('should return a new date instance', () => {
      const currentDate = createDate(2025, 4, 15);
      const targetDate = createDate(2025, 4, 15); // Same date values
      
      const result = service.navigateToDate(currentDate, targetDate);
      
      expect(result).toEqual(currentDate);
      expect(result).not.toBe(currentDate); // Different instance
    });
  });

  describe('navigateToToday', () => {
    it('should navigate to today', () => {
      const currentDate = createDate(2020, 1, 15); // Old date
      const today = new Date(); // Current date
      today.setHours(0, 0, 0, 0); // Normalize time
      
      const result = service.navigateToToday();
      
      expect(result.getFullYear()).toBe(today.getFullYear());
      expect(result.getMonth()).toBe(today.getMonth());
      expect(result.getDate()).toBe(today.getDate());
    });
  });
});
