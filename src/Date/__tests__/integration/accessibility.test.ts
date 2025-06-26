import { CalendarControllerClass } from '../../controller';
import { createDate, mockDate, testDates } from '../test-utils';

describe('Accessibility Features Tests', () => {
  let controller: CalendarControllerClass;
  let resetDate: () => void;
  
  beforeEach(() => {
    // Mock current date to May 21, 2025
    resetDate = mockDate(testDates.present);
    controller = new CalendarControllerClass();
  });
  
  afterEach(() => {
    resetDate();
  });

  describe('keyboard navigation', () => {
    it('should track focused date separate from selected date', () => {
      const focusDate = createDate(2025, 4, 15);
      controller.focusDate(focusDate);
      
      expect(controller._focusedDate).toEqual(focusDate);
      expect(controller._selectedDate).not.toEqual(focusDate);
      
      // Focused date should appear in the calendar view
      const monthView = controller.generateMonthView();
      let focusedDateFound = false;
      
      monthView.weeks.forEach(week => {
        week.days.forEach(day => {
          if (day.date!.getTime() === focusDate.getTime()) {
            expect(day.isFocused).toBe(true);
            focusedDateFound = true;
          } else {
            expect(day.isFocused).toBeFalsy();
          }
        });
      });
      
      expect(focusedDateFound).toBe(true);
    });
    
    it('should move focus with keyboard navigation methods', () => {
      // Start with focus on May 15, 2025
      const initialFocusDate = createDate(2025, 4, 15);
      controller.focusDate(initialFocusDate);
      
      // Move focus right (to next day)
      controller.moveFocusRight();
      expect(controller._focusedDate?.getDate()).toBe(16);
      
      // Move focus left (back to original day)
      controller.moveFocusLeft();
      expect(controller._focusedDate?.getDate()).toBe(15);
      
      // Move focus up (to previous week)
      controller.moveFocusUp();
      expect(controller._focusedDate?.getDate()).toBe(8);
      
      // Move focus down (back to original day)
      controller.moveFocusDown();
      expect(controller._focusedDate?.getDate()).toBe(15);
    });
    
    it('should move focus to next/previous month when reaching edges', () => {
      // Focus on last day of May 2025
      const endOfMonthDate = createDate(2025, 4, 31);
      controller.focusDate(endOfMonthDate);
      
      // Move focus right should go to June 1
      controller.moveFocusRight();
      expect(controller._focusedDate?.getMonth()).toBe(5); // June
      expect(controller._focusedDate?.getDate()).toBe(1);
      
      // Move focus left should go back to May 31
      controller.moveFocusLeft();
      expect(controller._focusedDate?.getMonth()).toBe(4); // May
      expect(controller._focusedDate?.getDate()).toBe(31);
      
      // Focus on first day of May 2025
      const startOfMonthDate = createDate(2025, 4, 1);
      controller.focusDate(startOfMonthDate);
      
      // Move focus left should go to April 30
      controller.moveFocusLeft();
      expect(controller._focusedDate?.getMonth()).toBe(3); // April
      expect(controller._focusedDate?.getDate()).toBe(30);
    });
    
    it('should handle Home and End key functions', () => {
      // Start with focus on May 15, 2025
      const midMonthDate = createDate(2025, 4, 15);
      controller.focusDate(midMonthDate);
      
      // Home key - go to first day of month
      controller.moveFocusToStartOfMonth();
      expect(controller._focusedDate?.getDate()).toBe(1);
      expect(controller._focusedDate?.getMonth()).toBe(4); // Still May
      
      // End key - go to last day of month
      controller.moveFocusToEndOfMonth();
      expect(controller._focusedDate?.getDate()).toBe(31);
      expect(controller._focusedDate?.getMonth()).toBe(4); // Still May
    });
    
    it('should handle Page Up/Page Down key functions', () => {
      // Start with focus on May 15, 2025
      const midMonthDate = createDate(2025, 4, 15);
      controller.focusDate(midMonthDate);
      
      // Page Up - go to previous month, same day
      controller.moveFocusToPreviousMonth();
      expect(controller._focusedDate?.getMonth()).toBe(3); // April
      expect(controller._focusedDate?.getDate()).toBe(15);
      
      // Page Down - go to next month, same day
      controller.moveFocusToNextMonth();
      expect(controller._focusedDate?.getMonth()).toBe(4); // May
      expect(controller._focusedDate?.getDate()).toBe(15);
      
      // Page Up with Ctrl - go to previous year, same day
      controller.moveFocusToPreviousYear();
      expect(controller._focusedDate?.getFullYear()).toBe(2024);
      expect(controller._focusedDate?.getMonth()).toBe(4); // May
      expect(controller._focusedDate?.getDate()).toBe(15);
      
      // Page Down with Ctrl - go to next year, same day
      controller.moveFocusToNextYear();
      expect(controller._focusedDate?.getFullYear()).toBe(2025);
      expect(controller._focusedDate?.getMonth()).toBe(4); // May
      expect(controller._focusedDate?.getDate()).toBe(15);
    });
  });
  
  describe('focus handling with selection', () => {
    it('should update focus when selecting a date', () => {
      const dateToSelect = createDate(2025, 4, 10);
      
      controller.selectDate(dateToSelect);
      
      // Selected date should also be focused
      expect(controller._focusedDate).toEqual(dateToSelect);
    });
    
    it('should select currently focused date with Enter key function', () => {
      const dateToFocus = createDate(2025, 4, 10);
      controller.focusDate(dateToFocus);
      
      // Simulate Enter key by selecting focused date
      controller.selectFocusedDate();
      
      expect(controller._selectedDate).toEqual(dateToFocus);
    });
  });
  
  describe('screen reader and aria support', () => {
    it('should provide accessible date labels', () => {
      const date = createDate(2025, 4, 15);
      
      const accessibleLabel = controller.getAccessibleDateLabel(date);
      
      // Label should include full date information suitable for screen readers
      expect(accessibleLabel).toContain('May');
      expect(accessibleLabel).toContain('15');
      expect(accessibleLabel).toContain('2025');
    });
    
    it('should provide accessible state descriptions', () => {
      // Set up controller with a selected date
      const selectedDate = createDate(2025, 4, 15);
      controller.selectDate(selectedDate);
      
      // Set min/max dates
      controller.setMinDate(createDate(2025, 4, 1));
      controller.setMaxDate(createDate(2025, 4, 30));
      
      // Disable specific date
      controller.addDisabledDate(createDate(2025, 4, 20));
      
      // Today
      expect(controller.getDateStateDescription(testDates.present)).toContain('today');
      
      // Selected date
      expect(controller.getDateStateDescription(selectedDate)).toContain('selected');
      
      // Disabled date
      const disabledDate = createDate(2025, 4, 20);
      expect(controller.getDateStateDescription(disabledDate)).toContain('disabled');
      
      // Date outside range
      const outsideRangeDate = createDate(2025, 5, 1);
      expect(controller.getDateStateDescription(outsideRangeDate)).toContain('disabled');
    });
  });
});
