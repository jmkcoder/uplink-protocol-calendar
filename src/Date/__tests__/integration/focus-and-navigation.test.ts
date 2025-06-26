import { CalendarControllerEvents } from '../../../../dist';
import { CalendarControllerClass } from '../../controller';
import { createDate, mockDate, testDates } from '../test-utils';
import { EventEmitter } from '@uplink-protocol/core';

describe('Focus Changes and Calendar Navigation', () => {
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

  describe('Focus Management', () => {
    describe('Setting and Getting Focus', () => {
      it('should set focused date', () => {
        const focusDate = createDate(2025, 4, 15); // May 15, 2025
        
        controller.setFocusedDate(focusDate);
        
        expect(controller._focusedDate).toEqual(focusDate);
        expect(controller.bindings.focusedDate.current).toEqual(focusDate);
      });

      it('should clear focused date', () => {
        const focusDate = createDate(2025, 4, 15);
        controller.setFocusedDate(focusDate);
        
        controller.clearFocusedDate();
        
        expect(controller._focusedDate).toBeNull();
        expect(controller.bindings.focusedDate.current).toBeNull();
      });

      it('should focus a specific date and update current date', () => {
        const focusDate = createDate(2025, 6, 15); // July 15, 2025 (different month)
        
        controller.focusDate(focusDate);
        
        expect(controller._focusedDate).toEqual(focusDate);
        expect(controller._currentDate.getFullYear()).toBe(2025);
        expect(controller._currentDate.getMonth()).toBe(6); // July
      });
    });

    describe('Focus Movement - Directional', () => {
      beforeEach(() => {
        // Set initial focus to middle of May 2025
        const initialFocus = createDate(2025, 4, 15); // May 15, 2025 (Thursday)
        controller.setFocusedDate(initialFocus);
      });

      it('should move focus right (next day)', () => {
        controller.moveFocusRight();
        
        const expectedDate = createDate(2025, 4, 16); // May 16, 2025
        expect(controller._focusedDate).toEqual(expectedDate);
      });

      it('should move focus left (previous day)', () => {
        controller.moveFocusLeft();
        
        const expectedDate = createDate(2025, 4, 14); // May 14, 2025
        expect(controller._focusedDate).toEqual(expectedDate);
      });

      it('should move focus up (previous week)', () => {
        controller.moveFocusUp();
        
        const expectedDate = createDate(2025, 4, 8); // May 8, 2025
        expect(controller._focusedDate).toEqual(expectedDate);
      });

      it('should move focus down (next week)', () => {
        controller.moveFocusDown();
        
        const expectedDate = createDate(2025, 4, 22); // May 22, 2025
        expect(controller._focusedDate).toEqual(expectedDate);
      });
    });

    describe('Focus Movement - Month Boundaries', () => {
      it('should move focus to start of month', () => {
        const midMonthDate = createDate(2025, 4, 15);
        controller.setFocusedDate(midMonthDate);
        
        controller.moveFocusToStartOfMonth();
        
        const expectedDate = createDate(2025, 4, 1); // May 1, 2025
        expect(controller._focusedDate).toEqual(expectedDate);
      });

      it('should move focus to end of month', () => {
        const midMonthDate = createDate(2025, 4, 15);
        controller.setFocusedDate(midMonthDate);
        
        controller.moveFocusToEndOfMonth();
        
        const expectedDate = createDate(2025, 4, 31); // May 31, 2025
        expect(controller._focusedDate).toEqual(expectedDate);
      });

      it('should move focus to previous month and update calendar', () => {
        const currentMonth = controller._currentDate.getMonth();
        
        controller.moveFocusToPreviousMonth();
        
        // Should navigate to previous month
        expect(controller._currentDate.getMonth()).toBe(currentMonth - 1);
        expect(controller._focusedDate?.getMonth()).toBe(currentMonth - 1);
      });

      it('should move focus to next month and update calendar', () => {
        const currentMonth = controller._currentDate.getMonth();
        
        controller.moveFocusToNextMonth();
        
        // Should navigate to next month
        expect(controller._currentDate.getMonth()).toBe(currentMonth + 1);
        expect(controller._focusedDate?.getMonth()).toBe(currentMonth + 1);
      });
    });

    describe('Focus Movement - Year Boundaries', () => {
      it('should move focus to previous year and update calendar', () => {
        const currentYear = controller._currentDate.getFullYear();
        
        controller.moveFocusToPreviousYear();
        
        // Should navigate to previous year
        expect(controller._currentDate.getFullYear()).toBe(currentYear - 1);
        expect(controller._focusedDate?.getFullYear()).toBe(currentYear - 1);
      });

      it('should move focus to next year and update calendar', () => {
        const currentYear = controller._currentDate.getFullYear();
        
        controller.moveFocusToNextYear();
        
        // Should navigate to next year
        expect(controller._currentDate.getFullYear()).toBe(currentYear + 1);
        expect(controller._focusedDate?.getFullYear()).toBe(currentYear + 1);
      });
    });

    describe('Focus Selection', () => {
      it('should select the currently focused date', () => {
        const focusDate = createDate(2025, 4, 15);
        controller.setFocusedDate(focusDate);
        
        controller.selectFocusedDate();
        
        expect(controller._selectedDate).toEqual(focusDate);
        expect(controller.bindings.selectedDate.current).toEqual(focusDate);
      });

      it('should handle focus selection when no date is focused', () => {
        controller.clearFocusedDate();
        
        // Should not throw error
        expect(() => controller.selectFocusedDate()).not.toThrow();
        expect(controller._selectedDate).toBeNull();
      });
    });
  });

  describe('Calendar Navigation', () => {
    describe('Month Navigation', () => {
      it('should navigate to next month', () => {
        const initialMonth = controller._currentDate.getMonth();
        const initialYear = controller._currentDate.getFullYear();
        
        controller.goToNextMonth();
        
        const expectedMonth = initialMonth === 11 ? 0 : initialMonth + 1;
        const expectedYear = initialMonth === 11 ? initialYear + 1 : initialYear;
        
        expect(controller._currentDate.getMonth()).toBe(expectedMonth);
        expect(controller._currentDate.getFullYear()).toBe(expectedYear);
      });

      it('should navigate to previous month', () => {
        const initialMonth = controller._currentDate.getMonth();
        const initialYear = controller._currentDate.getFullYear();
        
        controller.goToPreviousMonth();
        
        const expectedMonth = initialMonth === 0 ? 11 : initialMonth - 1;
        const expectedYear = initialMonth === 0 ? initialYear - 1 : initialYear;
        
        expect(controller._currentDate.getMonth()).toBe(expectedMonth);
        expect(controller._currentDate.getFullYear()).toBe(expectedYear);
      });

      it('should navigate to specific month', () => {
        controller.goToMonth(8, 2025); // September 2025
        
        expect(controller._currentDate.getMonth()).toBe(8);
        expect(controller._currentDate.getFullYear()).toBe(2025);
      });

      it('should select month and trigger events', () => {
        const mockViewChanged = new EventEmitter<{month: number, year: number}>();
        const viewChangedSpy = jest.spyOn(mockViewChanged, 'emit');
        
        controller.events = { viewChanged: mockViewChanged } as CalendarControllerEvents;
        
        controller.selectMonth(7, 2025); // August 2025
        
        expect(controller._currentDate.getMonth()).toBe(7);
        expect(controller._currentDate.getFullYear()).toBe(2025);
        expect(viewChangedSpy).toHaveBeenCalledWith({ month: 7, year: 2025 });
      });
    });

    describe('Year Navigation', () => {
      it('should navigate to next year', () => {
        const initialYear = controller._currentDate.getFullYear();
        
        controller.goToNextYear();
        
        expect(controller._currentDate.getFullYear()).toBe(initialYear + 1);
      });

      it('should navigate to previous year', () => {
        const initialYear = controller._currentDate.getFullYear();
        
        controller.goToPreviousYear();
        
        expect(controller._currentDate.getFullYear()).toBe(initialYear - 1);
      });

      it('should navigate to specific year', () => {
        controller.goToYear(2030);
        
        expect(controller._currentDate.getFullYear()).toBe(2030);
      });

      it('should select year and trigger events', () => {
        const mockYearChanged = new EventEmitter<number>();
        const yearChangedSpy = jest.spyOn(mockYearChanged, 'emit');
        
        controller.events = { yearChanged: mockYearChanged }  as CalendarControllerEvents;
        
        controller.selectYear(2027);
        
        expect(controller._currentDate.getFullYear()).toBe(2027);
        expect(yearChangedSpy).toHaveBeenCalledWith(2027);
      });
    });

    describe('Date Navigation', () => {
      it('should navigate to specific date', () => {
        const targetDate = createDate(2026, 2, 15); // March 15, 2026
        
        controller.goToDate(targetDate);
        
        expect(controller._currentDate.getFullYear()).toBe(2026);
        expect(controller._currentDate.getMonth()).toBe(2);
        expect(controller._currentDate.getDate()).toBe(15);
      });

      it('should navigate to today', () => {
        // Change to different date first
        controller.goToDate(createDate(2020, 0, 1));
        
        controller.goToToday();
        
        // Should return to mocked "today" (May 21, 2025)
        expect(controller._currentDate.getFullYear()).toBe(2025);
        expect(controller._currentDate.getMonth()).toBe(4);
        expect(controller._currentDate.getDate()).toBe(21);
      });
    });

    describe('Year Range Navigation', () => {
      beforeEach(() => {
        // Set up a specific year for consistent testing
        controller.goToYear(2025);
      });

      it('should navigate to next year range', () => {
        const initialRange = controller.getCurrentYearRange();
        
        controller.goToNextYearRange();
        
        const newRange = controller.getCurrentYearRange();
        expect(newRange.startYear).toBe(initialRange.startYear + controller._yearRangeSize);
        expect(newRange.endYear).toBe(initialRange.endYear + controller._yearRangeSize);
      });

      it('should navigate to previous year range', () => {
        const initialRange = controller.getCurrentYearRange();
        
        controller.goToPreviousYearRange();
        
        const newRange = controller.getCurrentYearRange();
        expect(newRange.startYear).toBe(initialRange.startYear - controller._yearRangeSize);
        expect(newRange.endYear).toBe(initialRange.endYear - controller._yearRangeSize);
      });

      it('should set current year range based on date', () => {
        const targetDate = createDate(2035, 5, 15);
        
        controller.setCurrentYearRange(targetDate);
        
        const range = controller.getCurrentYearRange();
        const expectedBase = 2035 - (2035 % controller._yearRangeSize);
        expect(range.startYear).toBe(expectedBase);
        expect(range.endYear).toBe(expectedBase + controller._yearRangeSize - 1);
      });

      it('should update year range size and recalculate range', () => {
        const newSize = 15;
        controller.setYearRangeSize(newSize);
        
        expect(controller._yearRangeSize).toBe(newSize);
        
        const range = controller.getCurrentYearRange();
        expect(range.endYear - range.startYear + 1).toBe(newSize);
      });

      it('should handle invalid year range size', () => {
        const originalSize = controller._yearRangeSize;
        
        controller.setYearRangeSize(0);
        controller.setYearRangeSize(-5);
        
        // Should not change from original size
        expect(controller._yearRangeSize).toBe(originalSize);
      });
    });
  });

  describe('Calendar Data Updates', () => {
    it('should update calendar days when navigating months', () => {
      const initialDays = controller.bindings.calendarDays.current;
      
      controller.goToNextMonth();
      
      const newDays = controller.bindings.calendarDays.current;
      expect(newDays).not.toEqual(initialDays);
      expect(newDays.length).toBeGreaterThan(0);
    });

    it('should update calendar months when navigating years', () => {
      controller.goToNextYear();
      
      // Calendar months data should be updated
      expect(controller.bindings.calendarMonths.current).toBeDefined();
      expect(controller.bindings.calendarMonths.current.length).toBe(12);
    });

    it('should update calendar years when navigating year ranges', () => {
      const initialYears = controller.bindings.calendarYears.current;
      
      controller.goToNextYearRange();
      
      const newYears = controller.bindings.calendarYears.current;
      expect(newYears).not.toEqual(initialYears);
      expect(newYears.length).toBeGreaterThan(0);
    });

    it('should update current month and year bindings', () => {
      controller.goToMonth(8, 2026); // September 2026
      
      expect(controller.bindings.currentDate.current.getMonth()).toBe(8);
      expect(controller.bindings.currentDate.current.getFullYear()).toBe(2026);
    });
  });

  describe('Combined Focus and Navigation', () => {
    it('should maintain focus when navigating months', () => {
      const focusDate = createDate(2025, 4, 15);
      controller.setFocusedDate(focusDate);
      
      controller.goToNextMonth();
      
      // Focus should move with navigation
      expect(controller._focusedDate?.getMonth()).toBe(5); // June
      expect(controller._focusedDate?.getDate()).toBe(15);
    });

    it('should handle focus across year boundaries', () => {
      const focusDate = createDate(2025, 11, 15); // December 15, 2025
      controller.setFocusedDate(focusDate);
      controller.goToDate(focusDate);
      
      controller.moveFocusToNextMonth();
      
      // Should move to January 2026
      expect(controller._focusedDate?.getFullYear()).toBe(2026);
      expect(controller._focusedDate?.getMonth()).toBe(0); // January
    });

    it('should update all relevant bindings during combined operations', () => {
      const focusDate = createDate(2025, 6, 20);
      controller.setFocusedDate(focusDate);
      
      controller.moveFocusToNextMonth();
      
      // Multiple bindings should be updated
      expect(controller.bindings.focusedDate.current).toBeDefined();
      expect(controller.bindings.calendarDays.current).toBeDefined();
      expect(controller.bindings.currentDate.current.getMonth()).toBe(7); // August
      expect(controller.bindings.currentDate.current.getFullYear()).toBe(2025);
    });
  });

  describe('Edge Cases', () => {
    it('should handle focus movement at month boundaries', () => {
      // Set focus to last day of month
      const lastDayOfApril = createDate(2025, 3, 30); // April 30, 2025
      controller.setFocusedDate(lastDayOfApril);
      controller.goToDate(lastDayOfApril);
      
      controller.moveFocusRight();
      
      // Should move to May 1, 2025
      expect(controller._focusedDate?.getMonth()).toBe(4); // May
      expect(controller._focusedDate?.getDate()).toBe(1);
    });

    it('should handle focus movement at year boundaries', () => {
      // Set focus to last day of year
      const lastDayOfYear = createDate(2025, 11, 31); // December 31, 2025
      controller.setFocusedDate(lastDayOfYear);
      controller.goToDate(lastDayOfYear);
      
      controller.moveFocusRight();
      
      // Should move to January 1, 2026
      expect(controller._focusedDate?.getFullYear()).toBe(2026);
      expect(controller._focusedDate?.getMonth()).toBe(0); // January
      expect(controller._focusedDate?.getDate()).toBe(1);
    });

    it('should handle navigation with constraints', () => {
      const minDate = createDate(2025, 4, 10); // May 10, 2025
      const maxDate = createDate(2025, 4, 20); // May 20, 2025
      
      controller.setMinDate(minDate);
      controller.setMaxDate(maxDate);
      
      // Try to navigate outside constraints
      controller.goToDate(createDate(2025, 3, 15)); // April 15, 2025
      
      // Should be constrained
      expect(controller._currentDate.getMonth()).toBe(4); // Should stay in May
    });
  });

  describe('Event Handling', () => {
    it('should trigger view changed events during navigation', () => {
      const mockViewChanged = new EventEmitter<{month: number, year: number}>();
      const mockMonthChanged = new EventEmitter<number>();
      const mockYearChanged = new EventEmitter<number>();
      
      // Spy on the emit methods
      const viewChangedSpy = jest.spyOn(mockViewChanged, 'emit');
      const monthChangedSpy = jest.spyOn(mockMonthChanged, 'emit');
      
      controller.events = {
        viewChanged: mockViewChanged,
        monthChanged: mockMonthChanged,
        yearChanged: mockYearChanged
      } as CalendarControllerEvents;
      
      controller.goToNextMonth();
      
      expect(monthChangedSpy).toHaveBeenCalled();
    });

    it('should trigger year range changed events', () => {
      const mockYearRangeChanged = new EventEmitter<{startYear: number, endYear: number}>();
      const yearRangeChangedSpy = jest.spyOn(mockYearRangeChanged, 'emit');
      
      controller.events = {
        yearRangeChanged: mockYearRangeChanged
      } as CalendarControllerEvents;
      
      controller.goToNextYearRange();
      
      expect(yearRangeChangedSpy).toHaveBeenCalled();
    });
  });
});
