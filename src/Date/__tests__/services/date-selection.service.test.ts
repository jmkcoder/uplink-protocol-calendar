import { DateSelectionService } from '../../services/date-selection.service';
import { createDate } from '../test-utils';

describe('DateSelectionService', () => {
  let service: DateSelectionService;

  beforeEach(() => {
    service = new DateSelectionService();
  });

  describe('selectDate', () => {
    it('should return a copy of the date', () => {
      const originalDate = new Date(2025, 4, 21);
      const result = service.selectDate(originalDate);
      
      // Should be a different instance
      expect(result).not.toBe(originalDate);
      
      // But should represent the same date
      expect(result.getTime()).toBe(originalDate.getTime());
    });
  });

  describe('selectDateRange', () => {
    it('should set startDate if no dates are selected', () => {
      const date = createDate(2025, 4, 21);
      const currentRange = { startDate: null, endDate: null };
      
      const result = service.selectDateRange(date, currentRange);
      
      expect(result.startDate).toEqual(date);
      expect(result.endDate).toBeNull();
    });

    it('should set endDate if startDate is already set', () => {
      const startDate = createDate(2025, 4, 21);
      const endDate = createDate(2025, 4, 25);
      const currentRange = { startDate, endDate: null };
      
      const result = service.selectDateRange(endDate, currentRange);
      
      expect(result.startDate).toEqual(startDate);
      expect(result.endDate).toEqual(endDate);
    });

    it('should swap dates if endDate is before startDate', () => {
      const startDate = createDate(2025, 4, 21);
      const earlierDate = createDate(2025, 4, 15);
      const currentRange = { startDate, endDate: null };
      
      const result = service.selectDateRange(earlierDate, currentRange);
      
      expect(result.startDate).toEqual(earlierDate);
      expect(result.endDate).toEqual(startDate);
    });

    it('should start a new range if both dates are already set', () => {
      const startDate = createDate(2025, 4, 15);
      const endDate = createDate(2025, 4, 20);
      const newDate = createDate(2025, 4, 25);
      const currentRange = { startDate, endDate };
      
      const result = service.selectDateRange(newDate, currentRange);
      
      expect(result.startDate).toEqual(newDate);
      expect(result.endDate).toBeNull();
    });
  });

  describe('clearSelection', () => {    it('should clear selected date', () => {
      const result = service.clearSelection();
      expect(result.selectedDate).toBeNull();
      expect(result.selectedDateRange.startDate).toBeNull();
      expect(result.selectedDateRange.endDate).toBeNull();
    });
  });

  describe('clearDateRange', () => {
    it('should clear date range', () => {
      const result = service.clearDateRange();
      expect(result.startDate).toBeNull();
      expect(result.endDate).toBeNull();
    });
  });

  describe('isDateInSelectedRange', () => {
    it('should return false if range is incomplete', () => {
      const date = createDate(2025, 4, 21);
      const range = { startDate: createDate(2025, 4, 15), endDate: null };
      
      const result = service.isDateInSelectedRange(date, range);
      
      expect(result).toBe(false);
    });

    it('should return true if date is between start and end dates', () => {
      const date = createDate(2025, 4, 21);
      const range = { 
        startDate: createDate(2025, 4, 15), 
        endDate: createDate(2025, 4, 25)
      };
      
      const result = service.isDateInSelectedRange(date, range);
      
      expect(result).toBe(true);
    });

    it('should return false if date is outside range', () => {
      const date = createDate(2025, 4, 30);
      const range = { 
        startDate: createDate(2025, 4, 15), 
        endDate: createDate(2025, 4, 25)
      };
      
      const result = service.isDateInSelectedRange(date, range);
      
      expect(result).toBe(false);
    });

    it('should handle edge cases - date equal to start or end', () => {
      const startDate = createDate(2025, 4, 15);
      const endDate = createDate(2025, 4, 25);
      const range = { startDate, endDate };
      
      expect(service.isDateInSelectedRange(startDate, range)).toBe(true);
      expect(service.isDateInSelectedRange(endDate, range)).toBe(true);
    });
  });
});
