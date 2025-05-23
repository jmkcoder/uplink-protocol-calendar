/**
 * Integration tests for CalendarController
 * These tests focus on user-facing functionality and interactions
 */

import { CalendarController } from '../../index';
import { createDate, mockDate, testDates } from '../test-utils';
import { CalendarOptions } from '../../interfaces';

describe('CalendarController Integration Tests', () => {
  let resetDate: () => void;
  
  beforeEach(() => {
    // Mock current date to May 21, 2025
    resetDate = mockDate(testDates.present);
  });
  
  afterEach(() => {
    resetDate();
  });

  describe('Basic calendar functionality', () => {
    it('should initialize a calendar with default options', () => {
      const calendar = CalendarController();
      
      // Get calendar data for rendering
      const monthView = calendar.generateMonthView();
      
      // Verify basic structure
      expect(monthView.month).toBe(4); // May
      expect(monthView.year).toBe(2025);
      expect(Array.isArray(monthView.weeks)).toBe(true);
      expect(monthView.weeks.length).toBeGreaterThanOrEqual(1);
    });

    it('should navigate through months', () => {
      const calendar = CalendarController();
      
      // Initial month - May 2025
      let monthView = calendar.generateMonthView();
      expect(monthView.month).toBe(4);
      expect(monthView.year).toBe(2025);
      
      // Navigate to next month - June 2025
      calendar.nextMonth();
      monthView = calendar.generateMonthView();
      expect(monthView.month).toBe(5);
      expect(monthView.year).toBe(2025);
      
      // Navigate to previous month - May 2025
      calendar.previousMonth();
      monthView = calendar.generateMonthView();
      expect(monthView.month).toBe(4);
      expect(monthView.year).toBe(2025);
    });
  });

  describe('Date selection', () => {
    it('should select a single date', () => {
      const calendar = CalendarController();
      const dateToSelect = createDate(2025, 4, 15);
      
      // Select a date
      calendar.selectDate(dateToSelect);
      
      // Verify selected date
      expect(calendar.bindings.selectedDate.current).toEqual(dateToSelect);
      
      // Check if the date is marked as selected in the month view
      const monthView = calendar.generateMonthView();
      let found = false;
      
      monthView.weeks.forEach(week => {
        week.days.forEach(day => {
          if (day.day === 15 && day.month === 4 && day.year === 2025) {
            expect(day.isSelected).toBe(true);
            found = true;
          }
        });
      });
      
      expect(found).toBe(true);
    });

    it('should handle date range selection', () => {
      const options: CalendarOptions = {
        isRangeSelection: true
      };
      
      const calendar = CalendarController(options);
      const startDate = createDate(2025, 4, 15);
      const endDate = createDate(2025, 4, 20);
      
      // Select start date
      calendar.selectDate(startDate);
      
      // Select end date
      calendar.selectDate(endDate);
      
      // Verify selected range
      const range = calendar.bindings.selectedDateRange.current;
      expect(range.startDate).toEqual(startDate);
      expect(range.endDate).toEqual(endDate);
      
      // Check if dates are marked correctly in the month view
      const monthView = calendar.generateMonthView();
      
      monthView.weeks.forEach(week => {
        week.days.forEach(day => {
          if (day.month === 4 && day.year === 2025) {
            // Start and end dates should be selected
            if (day.day === 15 || day.day === 20) {
              expect(day.isSelected).toBe(true);
            }
            // Dates in between should be marked as in range
            else if (day.day > 15 && day.day < 20) {
              expect(day.isInRange).toBe(true);
            }
          }
        });
      });
    });
  });

  describe('Constraints', () => {
    it('should respect min and max date constraints', () => {
      const options: CalendarOptions = {
        minDate: createDate(2025, 4, 10),
        maxDate: createDate(2025, 4, 20)
      };
      
      const calendar = CalendarController(options);
      
      // Try to select a date before min date
      const tooEarlyDate = createDate(2025, 4, 5);
      calendar.selectDate(tooEarlyDate);
      expect(calendar.bindings.selectedDate.current).not.toEqual(tooEarlyDate);
      
      // Try to select a date after max date
      const tooLateDate = createDate(2025, 4, 25);
      calendar.selectDate(tooLateDate);
      expect(calendar.bindings.selectedDate.current).not.toEqual(tooLateDate);
      
      // Select a date within range
      const validDate = createDate(2025, 4, 15);
      calendar.selectDate(validDate);
      expect(calendar.bindings.selectedDate.current).toEqual(validDate);
    });

    it('should respect disabled dates', () => {
      const calendar = CalendarController();
      const disabledDate = createDate(2025, 4, 15);
      
      // Add a specific disabled date
      calendar.addDisabledDate(disabledDate);
      
      // Try to select the disabled date
      calendar.selectDate(disabledDate);
      expect(calendar.bindings.selectedDate.current).not.toEqual(disabledDate);
      
      // Verify it's marked as disabled in the month view
      const monthView = calendar.generateMonthView();
      
      monthView.weeks.forEach(week => {
        week.days.forEach(day => {
          if (day.day === 15 && day.month === 4 && day.year === 2025) {
            expect(day.isDisabled).toBe(true);
          }
        });
      });
    });
  });

  describe('Internationalization', () => {
    it('should respect locale and first day of week settings', () => {
      const options: CalendarOptions = {
        firstDayOfWeek: 1, // Monday
        locale: 'fr-FR'
      };
      
      const calendar = CalendarController(options);
      
      // Verify month view first day of week
      const monthView = calendar.generateMonthView();
      const firstWeek = monthView.weeks[0];
      
      // The first day of the first week should be Monday (or an earlier day from previous month)
      // Let's check that Sunday is not the first day
      expect(firstWeek.days[0]?.date && firstWeek.days[0].date.getDay()).not.toBe(0); // Not Sunday  
    });

    it('should format dates according to locale', () => {
      const options: CalendarOptions = {
        locale: 'fr-FR'
      };
      
      const calendar = CalendarController(options);
      const date = createDate(2025, 4, 15);
      
      const formatted = calendar.formatDate(date, 'long');
      
      // French date format should include something like "mai" for May
      expect(formatted.toLowerCase()).toContain('mai');
    });
  });
});
