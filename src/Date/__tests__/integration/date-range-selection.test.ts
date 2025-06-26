import { CalendarControllerClass } from '../../controller';
import { createDate, mockDate, testDates } from '../test-utils';
import { CalendarOptions, DateRange } from '../..//interfaces';

describe('Date Range Selection Tests', () => {
  let controller: CalendarControllerClass;
  let resetDate: () => void;
  
  beforeEach(() => {
    // Mock current date to May 21, 2025
    resetDate = mockDate(testDates.present);
    
    // Create controller with range selection enabled
    const options: CalendarOptions = {
      isRangeSelection: true
    };
    controller = new CalendarControllerClass(options);
  });
  
  afterEach(() => {
    resetDate();
  });
  
  describe('basic range selection', () => {
    it('should select first date in range', () => {
      const startDate = createDate(2025, 4, 10);
      
      controller.selectDate(startDate);
      
      const range = controller._selectedDateRange;
      expect(range.startDate).toEqual(startDate);
      expect(range.endDate).toBeNull();
    });

    it('should complete range when selecting second date', () => {
      const startDate = createDate(2025, 4, 10);
      const endDate = createDate(2025, 4, 20);
      
      controller.selectDate(startDate);
      controller.selectDate(endDate);
      
      const range = controller._selectedDateRange;
      expect(range.startDate).toEqual(startDate);
      expect(range.endDate).toEqual(endDate);
      
      // No individual date should be selected
      expect(controller._selectedDate).toBeNull();
    });

    it('should start new range after completing a range', () => {
      const startDate = createDate(2025, 4, 10);
      const endDate = createDate(2025, 4, 20);
      const newStart = createDate(2025, 5, 5);
      
      // Complete a range
      controller.selectDate(startDate);
      controller.selectDate(endDate);
      
      // Select a new date to start a new range
      controller.selectDate(newStart);
      
      const range = controller._selectedDateRange;
      expect(range.startDate).toEqual(newStart);
      expect(range.endDate).toBeNull();
    });
  });
  
  describe('range ordering', () => {
    it('should swap dates if end date is before start date', () => {
      const laterDate = createDate(2025, 4, 20);
      const earlierDate = createDate(2025, 4, 10);
      
      // Select dates in reverse order
      controller.selectDate(laterDate);
      controller.selectDate(earlierDate);
      
      const range = controller._selectedDateRange;
      // Should have swapped to ensure start < end
      expect(range.startDate).toEqual(earlierDate);
      expect(range.endDate).toEqual(laterDate);
    });
  });
  
  describe('range visualization', () => {
    it('should mark dates within range in the calendar view', () => {
      const startDate = createDate(2025, 4, 10);
      const endDate = createDate(2025, 4, 20);
      
      controller.selectDate(startDate);
      controller.selectDate(endDate);
        // Navigate to May 2025 to ensure we're viewing the correct month
      controller.goToDate(startDate);
      
      const monthView = controller.generateMonthView();
      
      // Check that dates within range are correctly marked
      monthView.weeks.forEach(week => {
        week.days.forEach(day => {
          if (day.month === 4 && day.year === 2025) {
            if (day.day === 10 || day.day === 20) {
              // Start and end dates should be marked as selected
              expect(day.isSelected).toBe(true);
            }
            else if (day.day > 10 && day.day < 20) {
              // Dates in between should be marked as in range
              expect(day.isInRange).toBe(true);
            }
            else {
              // Dates outside range should be neither selected nor in range
              expect(day.isSelected).toBe(false);
              expect(day.isInRange).toBe(false);
            }
          }
        });
      });
    });
  });
  
  describe('range constraints', () => {
    it('should respect min/max date constraints for ranges', () => {
      // Set up controller with constraints
      const options: CalendarOptions = {
        isRangeSelection: true,
        minDate: createDate(2025, 4, 5),
        maxDate: createDate(2025, 4, 25)
      };
      controller = new CalendarControllerClass(options);
      
      // Try to select a date before min date
      const tooEarly = createDate(2025, 4, 1);
      controller.selectDate(tooEarly);
      
      // Should not be selected
      const range1 = controller._selectedDateRange;
      expect(range1.startDate).toBeNull();
      
      // Select a valid start date
      const startDate = createDate(2025, 4, 10);
      controller.selectDate(startDate);
      
      // Try to select a date after max date
      const tooLate = createDate(2025, 4, 30);
      controller.selectDate(tooLate);
      
      // Should not complete the range
      const range2 = controller._selectedDateRange;
      expect(range2.startDate).toEqual(startDate);
      expect(range2.endDate).toBeNull();
    });
  });
  
  describe('range clearing', () => {
    it('should clear range selection', () => {
      // Set up a range
      const startDate = createDate(2025, 4, 10);
      const endDate = createDate(2025, 4, 20);
      
      controller.selectDate(startDate);
      controller.selectDate(endDate);
      
      // Clear the selection
      controller.clearSelection();
      
      // Range should be cleared
      const range = controller._selectedDateRange;
      expect(range.startDate).toBeNull();
      expect(range.endDate).toBeNull();
    });
  });
});
