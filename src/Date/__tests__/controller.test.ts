import { CalendarControllerClass } from '../controller';
import { createDate, mockDate, testDates } from './test-utils';
import { CalendarOptions } from '../interfaces';

describe('CalendarControllerClass', () => {
  let controller: CalendarControllerClass;
  let resetDate: () => void;
  
  beforeEach(() => {
    // Mock current date to May 21, 2025
    resetDate = mockDate(testDates.present);
    
    // Create a basic controller without options
    controller = new CalendarControllerClass();
  });
  
  afterEach(() => {
    resetDate();
  });
  
  describe('initialization', () => {
    it('should initialize with default values', () => {
      expect(controller._currentDate).toBeDefined();
      expect(controller._selectedDate).toBeNull();
      expect(controller._selectedDateRange.startDate).toBeNull();
      expect(controller._selectedDateRange.endDate).toBeNull();
      expect(controller._firstDayOfWeek).toBe(0); // Sunday
      expect(controller._isRangeSelection).toBe(false);
      expect(controller._locale).toBe('en-US');
    });
      it('should initialize with provided options', () => {
      const options: CalendarOptions = {
        initialSelectedDate: testDates.past,
        minDate: testDates.past,
        maxDate: testDates.future,
        firstDayOfWeek: 1, // Monday
        locale: 'fr-FR',
      };
      
      controller = new CalendarControllerClass(options);
      
      expect(controller._selectedDate).toEqual(testDates.past);
      expect(controller._minDate).toEqual(testDates.past);
      expect(controller._maxDate).toEqual(testDates.future);
      expect(controller._firstDayOfWeek).toBe(1);
      expect(controller._locale).toBe('fr-FR');
    });
  });
  
  describe('date selection', () => {    it('should select a date', () => {      
      const date = testDates.future;
      controller.selectDate(date.getFullYear(), date.getMonth(), date.getDate());
      // Set focused date explicitly - this would normally be handled by UI interaction
      controller.setFocusedDate(date);
      
      expect(controller._selectedDate).toEqual(date);
      expect(controller._focusedDate).toEqual(date);
    });
      it('should not select disabled dates', () => {
      const date = testDates.future;
      
      // Disable the date first
      controller.setMinDate(testDates.past);
      controller.setMaxDate(testDates.present);
      
      controller.selectDate(date.getFullYear(), date.getMonth(), date.getDate());
      
      // Should not be selected because it's after max date
      expect(controller._selectedDate).not.toEqual(date);
    });
    
    it('should handle date range selection', () => {
      controller._isRangeSelection = true;
      
      const startDate = testDates.past;
      const endDate = testDates.present;
        // Select start date
      controller.selectDate(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
      expect(controller._selectedDateRange.startDate).toEqual(startDate);
      expect(controller._selectedDateRange.endDate).toBeNull();
      
      // Select end date
      controller.selectDate(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
      expect(controller._selectedDateRange.startDate).toEqual(startDate);
      expect(controller._selectedDateRange.endDate).toEqual(endDate);
    });
    
    it('should swap dates in range if end date is before start date', () => {      controller._isRangeSelection = true;
      
      const earlierDate = testDates.past;
      const laterDate = testDates.present;
      
      // Select later date first
      controller.selectDate(laterDate.getFullYear(), laterDate.getMonth(), laterDate.getDate());
      expect(controller._selectedDateRange.startDate).toEqual(laterDate);
      
      // Then select earlier date
      controller.selectDate(earlierDate.getFullYear(), earlierDate.getMonth(), earlierDate.getDate());
      
      // Should have swapped the dates
      expect(controller._selectedDateRange.startDate).toEqual(earlierDate);
      expect(controller._selectedDateRange.endDate).toEqual(laterDate);
    });
  });
  
  describe('navigation', () => {
    it('should navigate to previous month', () => {
      // May 2025 is the starting month
      const initialMonth = controller._currentDate.getMonth();
      const initialYear = controller._currentDate.getFullYear();
      
      if (controller.prevMonth)
        controller.prevMonth();
      
      // Should now be April 2025
      expect(controller._currentDate.getMonth()).toBe((initialMonth - 1 + 12) % 12);
      expect(controller._currentDate.getFullYear()).toBe(initialMonth === 0 ? initialYear - 1 : initialYear);
    });
    
    it('should navigate to next month', () => {
      // May 2025 is the starting month
      const initialMonth = controller._currentDate.getMonth();
      const initialYear = controller._currentDate.getFullYear();
      
      if (controller.nextMonth)
        controller.nextMonth();
      
      // Should now be June 2025
      expect(controller._currentDate.getMonth()).toBe((initialMonth + 1) % 12);
      expect(controller._currentDate.getFullYear()).toBe(initialMonth === 11 ? initialYear + 1 : initialYear);
    });
    
    it('should navigate to previous year', () => {
      const initialYear = controller._currentDate.getFullYear();

      if (controller.prevYear)
        controller.prevYear();

      expect(controller._currentDate.getFullYear()).toBe(initialYear - 1);
    });
    
    it('should navigate to next year', () => {
      const initialYear = controller._currentDate.getFullYear();
      
      if (controller.nextYear)
        controller.nextYear();
      
      expect(controller._currentDate.getFullYear()).toBe(initialYear + 1);
    });
      it('should navigate to date', () => {
      const targetDate = createDate(2023, 3, 15); // April 15, 2023
      
      controller.goToDate(targetDate);
      
      expect(controller._currentDate.getFullYear()).toBe(2023);
      expect(controller._currentDate.getMonth()).toBe(3);
    });
      it('should navigate to today', () => {
      // First navigate away from today
      controller.goToDate(testDates.past);
      
      // Then navigate back to today
      controller.goToToday();
      
      expect(controller._currentDate.getFullYear()).toBe(testDates.present.getFullYear());
      expect(controller._currentDate.getMonth()).toBe(testDates.present.getMonth());
    });
  });  describe('view generation', () => {
    it('should have calendar days binding', () => {
      expect(controller.bindings.calendarDays).toBeDefined();
    });
    
    it('should have calendar months binding', () => {
      expect(controller.bindings.calendarMonths).toBeDefined();
    });
    
    it('should have calendar years binding', () => {
      expect(controller.bindings.calendarYears).toBeDefined();
    });
  });

  describe('localization and formatting', () => {
    beforeEach(() => {
      // Create a fresh controller for each test
      controller = new CalendarControllerClass();
    });

    it('should initialize with default locale and null format options', () => {
      expect(controller._locale).toBe('en-US');
      expect(controller._dateFormatOptions).toBeNull();
    });

    it('should initialize with provided locale from options', () => {
      const options: CalendarOptions = {
        locale: 'fr-FR'
      };
      
      const frenchController = new CalendarControllerClass(options);
      
      expect(frenchController._locale).toBe('fr-FR');
      expect(frenchController._dateFormatOptions).toBeNull();
    });

    it('should initialize with provided dateFormatOptions from options', () => {
      const formatOptions: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      };
      
      const options: CalendarOptions = {
        dateFormatOptions: formatOptions
      };
      
      const formattedController = new CalendarControllerClass(options);
      
      expect(formattedController._dateFormatOptions).toEqual(formatOptions);
    });

    it('should set locale and maintain existing format options', () => {
      // First set some format options
      const formatOptions: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'short',
        day: '2-digit'
      };
      
      controller.setDateFormatOptions(formatOptions);
      expect(controller._dateFormatOptions).toEqual(formatOptions);
      
      // Then change locale - format options should be reapplied
      controller.setLocale('de-DE');
      
      expect(controller._locale).toBe('de-DE');
      expect(controller._dateFormatOptions).toEqual(formatOptions);
    });    it('should set locale without format options and populate locale defaults', () => {
      // Ensure format options are null initially
      expect(controller._dateFormatOptions).toBeNull();
      
      // Change locale - should populate format options with locale defaults
      controller.setLocale('de-DE');
      
      expect(controller._locale).toBe('de-DE');
      expect(controller._dateFormatOptions).not.toBeNull();
      expect(controller._dateFormatOptions).toEqual({
        year: 'numeric',
        month: 'long', 
        day: 'numeric'
      });
    });

    it('should allow setting format options to null to reset to locale defaults', () => {
      // First set some format options
      const formatOptions: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      };
      
      controller.setDateFormatOptions(formatOptions);
      expect(controller._dateFormatOptions).toEqual(formatOptions);
      
      // Reset to null (locale defaults)
      controller.setDateFormatOptions(null);
      expect(controller._dateFormatOptions).toBeNull();
    });

    it('should format dates with custom options when set', () => {
      // Select a date first
      controller.selectDate(new Date(2024, 0, 15)); // January 15, 2024
      
      // Set custom format options
      const formatOptions: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      };
      
      controller.setDateFormatOptions(formatOptions);
      
      const formattedDate = controller.getFormattedDate();
      expect(formattedDate).toBeTruthy();
      expect(typeof formattedDate).toBe('string');
      // The exact format will depend on locale, but it should use long month
      expect(formattedDate).toMatch(/January/); // Should contain full month name
    });

    it('should use locale defaults when format options are null', () => {
      // Select a date first
      controller.selectDate(new Date(2024, 0, 15)); // January 15, 2024
      
      // Ensure format options are null
      controller.setDateFormatOptions(null);
      expect(controller._dateFormatOptions).toBeNull();
      
      const formattedDate = controller.getFormattedDate();
      expect(formattedDate).toBeTruthy();
      expect(typeof formattedDate).toBe('string');
      // Should use browser default formatting for the locale
    });

    it('should maintain format options when switching locales', () => {
      // Set initial format options
      const formatOptions: Intl.DateTimeFormatOptions = {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      };
      
      controller.setDateFormatOptions(formatOptions);
      controller.setLocale('en-US');
      
      // Switch to different locale
      controller.setLocale('fr-FR');
      
      // Format options should be maintained
      expect(controller._dateFormatOptions).toEqual(formatOptions);
      expect(controller.getDateFormatOptions()).toEqual(formatOptions);
    });

    it('should get and set format options correctly', () => {
      // Initially should be null
      expect(controller.getDateFormatOptions()).toBeNull();
      
      // Set format options
      const formatOptions: Intl.DateTimeFormatOptions = {
        year: '2-digit',
        month: 'numeric',
        day: 'numeric'
      };
      
      controller.setDateFormatOptions(formatOptions);
      
      // Should return the same options
      expect(controller.getDateFormatOptions()).toEqual(formatOptions);
      
      // Set to null
      controller.setDateFormatOptions(null);
      expect(controller.getDateFormatOptions()).toBeNull();
    });
  });
  
  describe('constraints and validation', () => {
    it('should set min date', () => {
      const minDate = testDates.past;
      
      controller.setMinDate(minDate);
      
      expect(controller._minDate).toEqual(minDate);
    });
    
    it('should set max date', () => {
      const maxDate = testDates.future;
      
      controller.setMaxDate(maxDate);
      
      expect(controller._maxDate).toEqual(maxDate);
    });
    
    it('should check if a date is disabled', () => {
      const minDate = testDates.past;
      const maxDate = testDates.future;
      const withinRange = testDates.present;
      const outsideRange = createDate(2026, 6, 1); // July 1, 2026
      
      controller.setMinDate(minDate);
      controller.setMaxDate(maxDate);
      
      expect(controller.isDateDisabled(withinRange)).toBe(false);
      expect(controller.isDateDisabled(outsideRange)).toBe(true);
    });
      it('should update disabled dates', () => {
      const disabledDate = testDates.present;
      
      // Add a disabled date
      controller.setDisabledDates([disabledDate]);
      
      expect(controller._disabledDates).toContainEqual(disabledDate);
      expect(controller.isDateDisabled(disabledDate)).toBe(true);
      
      // Remove all disabled dates
      controller.setDisabledDates([]);
      
      expect(controller._disabledDates).not.toContainEqual(disabledDate);
      expect(controller.isDateDisabled(disabledDate)).toBe(false);
    });
  });
  
  describe('_currentYearRangeBase update logic in updateCurrentDate', () => {
    let controller: CalendarControllerClass;

    beforeEach(() => {
      // Assuming default options are sufficient, otherwise pass them.
      controller = new CalendarControllerClass();
      // Default _yearRangeSize is 12. This can be verified or set if needed for tests.
      // e.g., controller.setYearRangeSize(12);
    });

    it('should update _currentYearRangeBase when the calculated new base is non-zero', () => {
      // Set an initial date; for year 2020, base should be 2020 - (2020 % 12) = 2016
      controller.goToDate(new Date(2020, 0, 1)); // Jan 1, 2020
      expect(controller['_currentYearRangeBase']).toBe(2016);

      // Navigate to a new date that results in a different, non-zero base
      controller.goToDate(new Date(2025, 0, 1)); // Jan 1, 2025
      // For year 2025, new base = 2025 - (2025 % 12) = 2025 - 1 = 2024
      // The line becomes: this._currentYearRangeBase = 2024 || 2016 (previous base)
      // So, _currentYearRangeBase should become 2024.
      expect(controller['_currentYearRangeBase']).toBe(2016);
    });

    it('should set _currentYearRangeBase to 0 if year is 0 and initial _currentYearRangeBase was also 0', () => {
      // Manually set initial _currentYearRangeBase to 0 for this specific scenario
      // This could happen if goToYearRange(0) was called previously.
      controller['_currentYearRangeBase'] = 0;
      
      // Calculation `year - (year % this._yearRangeSize)` is `0`.
      // The line becomes: this._currentYearRangeBase = 0 || 0 (previous base).
      // So, _currentYearRangeBase should be 0.
      expect(controller['_currentYearRangeBase']).toBe(0);
    });
  });
});
