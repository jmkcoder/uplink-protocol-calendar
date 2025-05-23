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
    });

    it('should handle removing non-existent date', () => {
      const date1 = createDate(2025, 4, 15);
      const date2 = createDate(2025, 4, 20);
      
      service.setDisabledDates([date1]);
      const result = service.removeDisabledDate(date2);
      
      expect(result.length).toBe(1);
      expect(result).toContainEqual(date1);
    });
  });
});
