import { ConstraintsService } from '../../services/constraints.service';
import { createDate } from '../test-utils';

describe('ConstraintsService', () => {
  let service: ConstraintsService;

  beforeEach(() => {
    service = new ConstraintsService();
  });

  describe('setMinDate', () => {
    it('should set the minimum date', () => {
      const minDate = createDate(2025, 1, 1);
      
      const result = service.setMinDate(minDate);
      
      expect(result).toEqual(minDate);
    });

    it('should allow setting null as minimum date', () => {
      const result = service.setMinDate(null);
      
      expect(result).toBeNull();
    });
  });

  describe('setMaxDate', () => {
    it('should set the maximum date', () => {
      const maxDate = createDate(2025, 12, 31);
      
      const result = service.setMaxDate(maxDate);
      
      expect(result).toEqual(maxDate);
    });

    it('should allow setting null as maximum date', () => {
      const result = service.setMaxDate(null);
      
      expect(result).toBeNull();
    });
  });

  describe('setDisabledDates', () => {
    it('should set the disabled dates', () => {
      const disabledDates = [
        createDate(2025, 4, 1),
        createDate(2025, 4, 15),
        createDate(2025, 4, 30)
      ];
      
      const result = service.setDisabledDates(disabledDates);
      
      expect(result).toEqual(disabledDates);
      expect(result.length).toBe(3);
    });

    it('should handle empty array', () => {
      const result = service.setDisabledDates([]);
      
      expect(result).toEqual([]);
      expect(result.length).toBe(0);
    });
  });

  describe('isDateDisabled', () => {
    it('should return true if date is before min date', () => {
      const date = createDate(2025, 3, 15);
      const minDate = createDate(2025, 4, 1);
      
      const result = service.isDateDisabled(date, minDate, null, []);
      
      expect(result).toBe(true);
    });

    it('should return true if date is after max date', () => {
      const date = createDate(2025, 5, 15);
      const maxDate = createDate(2025, 4, 30);
      
      const result = service.isDateDisabled(date, null, maxDate, []);
      
      expect(result).toBe(true);
    });

    it('should return true if date is in disabled dates array', () => {
      const date = createDate(2025, 4, 15);
      const disabledDates = [
        createDate(2025, 4, 10),
        createDate(2025, 4, 15), // Same as our test date
        createDate(2025, 4, 20)
      ];
      
      const result = service.isDateDisabled(date, null, null, disabledDates);
      
      expect(result).toBe(true);
    });

    it('should return false if date is valid', () => {
      const date = createDate(2025, 4, 15);
      const minDate = createDate(2025, 4, 1);
      const maxDate = createDate(2025, 4, 30);
      const disabledDates = [
        createDate(2025, 4, 10),
        createDate(2025, 4, 20)
      ];
      
      const result = service.isDateDisabled(date, minDate, maxDate, disabledDates);
      
      expect(result).toBe(false);
    });

    it('should handle null date', () => {
      const result = service.isDateDisabled(null as any, null, null, []);
      
      expect(result).toBe(false);
    });
  });

  describe('addDisabledDate', () => {
    it('should add a disabled date', () => {
      const date1 = createDate(2025, 4, 15);
      const date2 = createDate(2025, 4, 20);
      
      service.addDisabledDate(date1);
      const result = service.addDisabledDate(date2);
      
      expect(result.length).toBe(2);
      expect(result).toContainEqual(date1);
      expect(result).toContainEqual(date2);
    });

    it('should not add duplicate disabled date', () => {
      const date = createDate(2025, 4, 15);
      
      service.addDisabledDate(date);
      const result = service.addDisabledDate(date);
      
      expect(result.length).toBe(1);
    });
  });

  describe('removeDisabledDate', () => {
    it('should remove a disabled date', () => {
      const date1 = createDate(2025, 4, 15);
      const date2 = createDate(2025, 4, 20);
      
      service.setDisabledDates([date1, date2]);
      const result = service.removeDisabledDate(date1);
      
      expect(result.length).toBe(1);
      expect(result).not.toContainEqual(date1);
      expect(result).toContainEqual(date2);
    });    it('should handle removing non-existent date', () => {
      const date1 = createDate(2025, 4, 15);
      const date2 = createDate(2025, 4, 20);
      
      service.setDisabledDates([date1]);
      const result = service.removeDisabledDate(date2);
      
      expect(result.length).toBe(1);
      expect(result).toContainEqual(date1);
    });
  });

  describe('setDisabledDaysOfWeek', () => {
    it('should set disabled days of the week', () => {
      const disabledDays = [0, 6]; // Sunday and Saturday
      
      const result = service.setDisabledDaysOfWeek(disabledDays);
      
      expect(result).toEqual([0, 6]);
    });

    it('should filter out invalid day numbers', () => {
      const disabledDays = [-1, 0, 1, 7, 8]; // Only 0 and 1 are valid
      
      const result = service.setDisabledDaysOfWeek(disabledDays);
      
      expect(result).toEqual([0, 1]);
    });

    it('should handle empty array', () => {
      const result = service.setDisabledDaysOfWeek([]);
      
      expect(result).toEqual([]);
    });

    it('should handle null/undefined', () => {
      const result = service.setDisabledDaysOfWeek(null as any);
      
      expect(result).toEqual([]);
    });

    it('should filter out non-number values', () => {
      const disabledDays = [0, 'invalid', 1, true, 2] as any[];
      
      const result = service.setDisabledDaysOfWeek(disabledDays);
      
      expect(result).toEqual([0, 1, 2]);
    });
  });

  describe('addDisabledDayOfWeek', () => {
    it('should add a disabled day of the week', () => {
      const result = service.addDisabledDayOfWeek(0); // Sunday
      
      expect(result).toEqual([0]);
    });

    it('should not add duplicate days', () => {
      service.addDisabledDayOfWeek(0);
      const result = service.addDisabledDayOfWeek(0);
      
      expect(result).toEqual([0]);
    });

    it('should reject invalid day numbers', () => {
      const result1 = service.addDisabledDayOfWeek(-1);
      const result2 = service.addDisabledDayOfWeek(7);
      const result3 = service.addDisabledDayOfWeek(10);
      
      expect(result1).toEqual([]);
      expect(result2).toEqual([]);
      expect(result3).toEqual([]);
    });

    it('should reject non-number values', () => {
      const result = service.addDisabledDayOfWeek('invalid' as any);
      
      expect(result).toEqual([]);
    });

    it('should add multiple different days', () => {
      service.addDisabledDayOfWeek(0); // Sunday
      service.addDisabledDayOfWeek(6); // Saturday
      const result = service.addDisabledDayOfWeek(1); // Monday
      
      expect(result).toEqual([0, 6, 1]);
    });
  });

  describe('removeDisabledDayOfWeek', () => {
    it('should remove a disabled day of the week', () => {
      service.setDisabledDaysOfWeek([0, 1, 6]);
      const result = service.removeDisabledDayOfWeek(1);
      
      expect(result).toEqual([0, 6]);
    });

    it('should handle removing non-existent day', () => {
      service.setDisabledDaysOfWeek([0, 6]);
      const result = service.removeDisabledDayOfWeek(3);
      
      expect(result).toEqual([0, 6]);
    });

    it('should handle empty array', () => {
      const result = service.removeDisabledDayOfWeek(0);
      
      expect(result).toEqual([]);
    });
  });

  describe('getDisabledDaysOfWeek', () => {
    it('should return disabled days of the week', () => {
      service.setDisabledDaysOfWeek([0, 6]);
      const result = service.getDisabledDaysOfWeek();
      
      expect(result).toEqual([0, 6]);
    });

    it('should return a copy of the array', () => {
      service.setDisabledDaysOfWeek([0, 6]);
      const result = service.getDisabledDaysOfWeek();
      
      result.push(1);
      const result2 = service.getDisabledDaysOfWeek();
      
      expect(result2).toEqual([0, 6]);
    });
  });

  describe('isDateDisabled with disabled days of week', () => {
    it('should return true for disabled day of week', () => {
      // May 4, 2025 is a Sunday (day 0)
      const sunday = createDate(2025, 4, 4);
      
      const result = service.isDateDisabled(
        sunday,
        null,
        null,
        [],
        [0] // Sunday disabled
      );
      
      expect(result).toBe(true);
    });

    it('should return false for enabled day of week', () => {
      // May 5, 2025 is a Monday (day 1)
      const monday = createDate(2025, 4, 5);
      
      const result = service.isDateDisabled(
        monday,
        null,
        null,
        [],
        [0, 6] // Only Sunday and Saturday disabled
      );
      
      expect(result).toBe(false);
    });

    it('should handle multiple disabled days of week', () => {
      // Test weekend days
      const sunday = createDate(2025, 4, 4); // Sunday (day 0)
      const saturday = createDate(2025, 4, 10); // Saturday (day 6)
      const monday = createDate(2025, 4, 5); // Monday (day 1)
      
      const disabledDaysOfWeek = [0, 6]; // Weekend
      
      expect(service.isDateDisabled(sunday, null, null, [], disabledDaysOfWeek)).toBe(true);
      expect(service.isDateDisabled(saturday, null, null, [], disabledDaysOfWeek)).toBe(true);
      expect(service.isDateDisabled(monday, null, null, [], disabledDaysOfWeek)).toBe(false);
    });

    it('should combine disabled dates and disabled days of week', () => {
      // May 5, 2025 is a Monday (day 1)
      const monday = createDate(2025, 4, 5);
      
      const result = service.isDateDisabled(
        monday,
        null,
        null,
        [monday], // Also disabled as specific date
        [0, 6] // Weekend disabled
      );
      
      expect(result).toBe(true);
    });

    it('should work with min/max date constraints and disabled days', () => {
      const minDate = createDate(2025, 4, 1);
      const maxDate = createDate(2025, 4, 31);
      
      // May 4, 2025 is a Sunday (within range but disabled day)
      const sunday = createDate(2025, 4, 4);
      // April 30, 2025 (before min date)
      const beforeMin = createDate(2025, 3, 30);
      
      const disabledDaysOfWeek = [0]; // Sunday disabled
      
      expect(service.isDateDisabled(sunday, minDate, maxDate, [], disabledDaysOfWeek)).toBe(true);
      expect(service.isDateDisabled(beforeMin, minDate, maxDate, [], disabledDaysOfWeek)).toBe(true);
    });
  });

  describe('getConstraints with disabled days of week', () => {
    it('should include disabled days of week in constraints', () => {
      service.setDisabledDaysOfWeek([0, 6]);
      const constraints = service.getConstraints();
      
      expect(constraints.disabledDaysOfWeek).toEqual([0, 6]);
    });

    it('should return a copy of disabled days of week', () => {
      service.setDisabledDaysOfWeek([0, 6]);
      const constraints = service.getConstraints();
      
      constraints.disabledDaysOfWeek.push(1);
      const constraints2 = service.getConstraints();
      
      expect(constraints2.disabledDaysOfWeek).toEqual([0, 6]);
    });
  });
});
