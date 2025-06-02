import { CalendarStateService } from '../../services/calendar-state.service';
import { CalendarDate } from '../../interfaces/calendar.interfaces';
import type { Binding } from '@uplink-protocol/core';
import { createDate, testDates } from '../test-utils';
import { IViewStateService } from '../../interfaces/view-state.service.interfaces';
import { IDateSelectionService } from '../../interfaces/date-selection.service.interfaces';
import { IConstraintsService } from '../../interfaces/constraints.service.interfaces';
import { IEventManagerService } from '../../interfaces/event-manager.service.interfaces';

describe('CalendarStateService', () => {
  let service: CalendarStateService;
  let mockCalendarDaysBinding: Binding<CalendarDate[]>;
  let mockGenerateCalendarDaysFn: jest.Mock;
  let mockViewStateService: jest.Mocked<IViewStateService>;
  let mockDateSelectionService: jest.Mocked<IDateSelectionService>;
  let mockConstraintsService: jest.Mocked<IConstraintsService>;
  let mockEventManagerService: jest.Mocked<IEventManagerService>;

  beforeEach(() => {
    // Create mock services
    mockViewStateService = {} as jest.Mocked<IViewStateService>;
    mockDateSelectionService = {} as jest.Mocked<IDateSelectionService>;
    mockConstraintsService = {} as jest.Mocked<IConstraintsService>;
    mockEventManagerService = {} as jest.Mocked<IEventManagerService>;    // Create service with mocked dependencies
    service = new CalendarStateService(
      mockViewStateService,
      mockDateSelectionService,
      mockConstraintsService,
      mockEventManagerService
    );
    
    // Mock the binding with proper jest mock structure
    mockCalendarDaysBinding = { 
      current: [], 
      set: jest.fn(),
      subscribe: jest.fn(),
      unsubscribe: jest.fn()
    } as unknown as Binding<CalendarDate[]>;
    mockGenerateCalendarDaysFn = jest.fn(() => []);
  });

  describe('addDisabledDate', () => {
    it('should add a new disabled date to empty array', () => {
      const date = createDate(2025, 4, 15);
      const disabledDates: Date[] = [];

      const result = service.addDisabledDate(
        date,
        disabledDates,
        mockCalendarDaysBinding,
        mockGenerateCalendarDaysFn
      );

      expect(result).toHaveLength(1);
      expect(result[0]).toEqual(expect.any(Date));
      expect(result[0].getFullYear()).toBe(2025);
      expect(result[0].getMonth()).toBe(4);
      expect(result[0].getDate()).toBe(15);
      expect(mockGenerateCalendarDaysFn).toHaveBeenCalledTimes(1);
    });

    it('should add a new disabled date to existing array', () => {
      const existingDate = createDate(2025, 4, 10);
      const newDate = createDate(2025, 4, 15);
      const disabledDates = [existingDate];

      const result = service.addDisabledDate(
        newDate,
        disabledDates,
        mockCalendarDaysBinding,
        mockGenerateCalendarDaysFn
      );

      expect(result).toHaveLength(2);
      expect(result).toContainEqual(existingDate);
      expect(result[1]).toEqual(expect.any(Date));
      expect(result[1].getFullYear()).toBe(2025);
      expect(result[1].getMonth()).toBe(4);
      expect(result[1].getDate()).toBe(15);
      expect(mockGenerateCalendarDaysFn).toHaveBeenCalledTimes(1);
    });

    it('should prevent duplicate dates from being added - exact same date', () => {
      const date = createDate(2025, 4, 15);
      const disabledDates = [date];

      const result = service.addDisabledDate(
        date,
        disabledDates,
        mockCalendarDaysBinding,
        mockGenerateCalendarDaysFn
      );

      expect(result).toHaveLength(1);
      expect(result).toEqual(disabledDates); // Should return original array
      expect(mockGenerateCalendarDaysFn).not.toHaveBeenCalled(); // Should not trigger calendar update
    });

    it('should prevent duplicate dates from being added - different time same day', () => {
      const originalDate = new Date(2025, 4, 15, 9, 30, 0); // 9:30 AM
      const duplicateDate = new Date(2025, 4, 15, 14, 45, 30); // 2:45 PM same day
      const disabledDates = [originalDate];

      const result = service.addDisabledDate(
        duplicateDate,
        disabledDates,
        mockCalendarDaysBinding,
        mockGenerateCalendarDaysFn
      );

      expect(result).toHaveLength(1);
      expect(result).toEqual(disabledDates); // Should return original array
      expect(mockGenerateCalendarDaysFn).not.toHaveBeenCalled(); // Should not trigger calendar update
    });

    it('should prevent duplicate dates from being added - new Date objects same day', () => {
      const originalDate = createDate(2025, 4, 15);
      const duplicateDate = createDate(2025, 4, 15); // Different object, same date
      const disabledDates = [originalDate];

      const result = service.addDisabledDate(
        duplicateDate,
        disabledDates,
        mockCalendarDaysBinding,
        mockGenerateCalendarDaysFn
      );

      expect(result).toHaveLength(1);
      expect(result).toEqual(disabledDates); // Should return original array
      expect(mockGenerateCalendarDaysFn).not.toHaveBeenCalled(); // Should not trigger calendar update
    });

    it('should handle multiple existing dates and prevent duplicates', () => {
      const date1 = createDate(2025, 4, 10);
      const date2 = createDate(2025, 4, 15);
      const date3 = createDate(2025, 4, 20);
      const duplicateDate2 = createDate(2025, 4, 15); // Duplicate of date2
      const disabledDates = [date1, date2, date3];

      const result = service.addDisabledDate(
        duplicateDate2,
        disabledDates,
        mockCalendarDaysBinding,
        mockGenerateCalendarDaysFn
      );

      expect(result).toHaveLength(3);
      expect(result).toEqual(disabledDates); // Should return original array
      expect(mockGenerateCalendarDaysFn).not.toHaveBeenCalled(); // Should not trigger calendar update
    });

    it('should add dates from different months correctly', () => {
      const mayDate = createDate(2025, 4, 15); // May 15
      const juneDate = createDate(2025, 5, 15); // June 15
      const disabledDates = [mayDate];

      const result = service.addDisabledDate(
        juneDate,
        disabledDates,
        mockCalendarDaysBinding,
        mockGenerateCalendarDaysFn
      );

      expect(result).toHaveLength(2);
      expect(result).toContainEqual(mayDate);
      expect(result[1].getMonth()).toBe(5); // June
      expect(result[1].getDate()).toBe(15);
      expect(mockGenerateCalendarDaysFn).toHaveBeenCalledTimes(1);
    });

    it('should add dates from different years correctly', () => {
      const date2025 = createDate(2025, 4, 15);
      const date2026 = createDate(2026, 4, 15); // Same month/day, different year
      const disabledDates = [date2025];

      const result = service.addDisabledDate(
        date2026,
        disabledDates,
        mockCalendarDaysBinding,
        mockGenerateCalendarDaysFn
      );

      expect(result).toHaveLength(2);
      expect(result).toContainEqual(date2025);
      expect(result[1].getFullYear()).toBe(2026);
      expect(result[1].getMonth()).toBe(4);
      expect(result[1].getDate()).toBe(15);
      expect(mockGenerateCalendarDaysFn).toHaveBeenCalledTimes(1);
    });

    it('should handle null/undefined date input', () => {
      const disabledDates = [createDate(2025, 4, 15)];

      const result = service.addDisabledDate(
        null as any,
        disabledDates,
        mockCalendarDaysBinding,
        mockGenerateCalendarDaysFn
      );

      expect(result).toEqual(disabledDates); // Should return original array unchanged
      expect(mockGenerateCalendarDaysFn).not.toHaveBeenCalled();
    });

    it('should handle empty disabled dates array', () => {
      const date = createDate(2025, 4, 15);
      const disabledDates: Date[] = [];

      const result = service.addDisabledDate(
        date,
        disabledDates,
        mockCalendarDaysBinding,
        mockGenerateCalendarDaysFn
      );

      expect(result).toHaveLength(1);
      expect(result[0]).toEqual(expect.any(Date));
      expect(mockGenerateCalendarDaysFn).toHaveBeenCalledTimes(1);
    });

    it('should create new Date object to avoid reference issues', () => {
      const originalDate = createDate(2025, 4, 15);
      const disabledDates: Date[] = [];

      const result = service.addDisabledDate(
        originalDate,
        disabledDates,
        mockCalendarDaysBinding,
        mockGenerateCalendarDaysFn
      );

      expect(result[0]).not.toBe(originalDate); // Should be different object
      expect(result[0]).toEqual(originalDate); // But same value
    });

    it('should work without calendar binding', () => {
      const date = createDate(2025, 4, 15);
      const disabledDates: Date[] = [];

      const result = service.addDisabledDate(
        date,
        disabledDates,
        null as any, // No binding
        mockGenerateCalendarDaysFn
      );

      expect(result).toHaveLength(1);
      expect(mockGenerateCalendarDaysFn).not.toHaveBeenCalled(); // Should not call without binding
    });
  });

  describe('removeDisabledDate', () => {
    it('should remove an existing disabled date', () => {
      const date1 = createDate(2025, 4, 10);
      const date2 = createDate(2025, 4, 15);
      const date3 = createDate(2025, 4, 20);
      const disabledDates = [date1, date2, date3];

      const result = service.removeDisabledDate(
        date2,
        disabledDates,
        mockCalendarDaysBinding,
        mockGenerateCalendarDaysFn
      );

      expect(result).toHaveLength(2);
      expect(result).toContainEqual(date1);
      expect(result).toContainEqual(date3);
      expect(result).not.toContainEqual(date2);
      expect(mockGenerateCalendarDaysFn).toHaveBeenCalledTimes(1);
    });

    it('should handle removing non-existent date', () => {
      const date1 = createDate(2025, 4, 10);
      const date2 = createDate(2025, 4, 15);
      const nonExistentDate = createDate(2025, 4, 25);
      const disabledDates = [date1, date2];

      const result = service.removeDisabledDate(
        nonExistentDate,
        disabledDates,
        mockCalendarDaysBinding,
        mockGenerateCalendarDaysFn
      );

      expect(result).toHaveLength(2);
      expect(result).toEqual(disabledDates);
      expect(mockGenerateCalendarDaysFn).toHaveBeenCalledTimes(1);
    });
  });

  describe('integration test - addDisabledDate duplicate prevention', () => {
    it('should handle complex scenario with multiple add operations', () => {
      const date1 = createDate(2025, 4, 10);
      const date2 = createDate(2025, 4, 15);
      const date3 = createDate(2025, 4, 20);
      
      let disabledDates: Date[] = [];

      // Add first date
      disabledDates = service.addDisabledDate(
        date1,
        disabledDates,
        mockCalendarDaysBinding,
        mockGenerateCalendarDaysFn
      );
      expect(disabledDates).toHaveLength(1);

      // Add second date
      disabledDates = service.addDisabledDate(
        date2,
        disabledDates,
        mockCalendarDaysBinding,
        mockGenerateCalendarDaysFn
      );
      expect(disabledDates).toHaveLength(2);

      // Try to add duplicate of first date
      const duplicateDate1 = createDate(2025, 4, 10);
      disabledDates = service.addDisabledDate(
        duplicateDate1,
        disabledDates,
        mockCalendarDaysBinding,
        mockGenerateCalendarDaysFn
      );
      expect(disabledDates).toHaveLength(2); // Should remain 2

      // Add third unique date
      disabledDates = service.addDisabledDate(
        date3,
        disabledDates,
        mockCalendarDaysBinding,
        mockGenerateCalendarDaysFn
      );
      expect(disabledDates).toHaveLength(3);

      // Try to add duplicate of second date with different time
      const duplicateDate2WithTime = new Date(2025, 4, 15, 16, 30, 0);
      disabledDates = service.addDisabledDate(
        duplicateDate2WithTime,
        disabledDates,
        mockCalendarDaysBinding,
        mockGenerateCalendarDaysFn
      );
      expect(disabledDates).toHaveLength(3); // Should remain 3

      // Verify all unique dates are present
      expect(disabledDates.some(d => d.getDate() === 10)).toBe(true);
      expect(disabledDates.some(d => d.getDate() === 15)).toBe(true);
      expect(disabledDates.some(d => d.getDate() === 20)).toBe(true);
    });
  });
});
