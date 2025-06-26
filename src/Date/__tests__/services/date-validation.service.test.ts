import { DateValidationService } from '../../services/date-validation.service';
import { createDate, testDates } from '../test-utils';

describe('DateValidationService', () => {
  let service: DateValidationService;

  beforeEach(() => {
    service = new DateValidationService();
  });

  describe('isDateDisabled', () => {
    it('should return true if date is before minDate', () => {
      const result = service.isDateDisabled(
        testDates.past,
        testDates.present,
        null,
        []
      );
      expect(result).toBe(true);
    });

    it('should return true if date is after maxDate', () => {
      const result = service.isDateDisabled(
        testDates.future,
        null,
        testDates.present,
        []
      );
      expect(result).toBe(true);
    });

    it('should return true if date is in disabledDates', () => {
      const result = service.isDateDisabled(
        testDates.present,
        null,
        null,
        [testDates.present]
      );
      expect(result).toBe(true);
    });

    it('should return false if date is valid', () => {
      const result = service.isDateDisabled(
        testDates.present,
        testDates.past,
        testDates.future,
        [createDate(2025, 4, 22)]
      );
      expect(result).toBe(false);
    });
  });

  describe('setMinDate', () => {
    it('should return null if input is null', () => {
      expect(service.setMinDate(null)).toBeNull();
    });

    it('should normalize time to midnight', () => {
      const date = new Date(2025, 4, 21, 14, 30);
      const result = service.setMinDate(date);
      
      expect(result).not.toBeNull();
      expect(result!.getHours()).toBe(0);
      expect(result!.getMinutes()).toBe(0);
      expect(result!.getSeconds()).toBe(0);
      expect(result!.getMilliseconds()).toBe(0);
    });
  });

  describe('setMaxDate', () => {
    it('should return null if input is null', () => {
      expect(service.setMaxDate(null)).toBeNull();
    });

    it('should set time to end of day', () => {
      const date = new Date(2025, 4, 21, 10, 20);
      const result = service.setMaxDate(date);
      
      expect(result).not.toBeNull();
      expect(result!.getHours()).toBe(23);
      expect(result!.getMinutes()).toBe(59);
      expect(result!.getSeconds()).toBe(59);
      expect(result!.getMilliseconds()).toBe(999);
    });
  });

  describe('isSameDay', () => {
    it('should return true for same dates regardless of time', () => {
      const date1 = new Date(2025, 4, 21, 10, 30);
      const date2 = new Date(2025, 4, 21, 15, 45);
      expect(service.isSameDay(date1, date2)).toBe(true);
    });

    it('should return false for different dates', () => {
      const date1 = new Date(2025, 4, 21);
      const date2 = new Date(2025, 4, 22);
      expect(service.isSameDay(date1, date2)).toBe(false);
    });
  });
});
