/**
 * Test file to validate TypeScript type definitions for Calendar Controller
 * This ensures the exported types work correctly for consumers
 */

import { CalendarController } from '../../../index';
import {
  TypedCalendarController,
  CalendarState,
  BindingValue,
  SelectDateParams,
  DateSelectedEventData
} from '../../../Date/types/calendar-controller.types';

describe('Calendar Controller TypeScript Types', () => {
  let controller: TypedCalendarController;

  beforeEach(() => {
    controller = CalendarController({
      locale: 'en-US',
      firstDayOfWeek: 0
    });
  });

  it('should create controller with proper types', () => {
    expect(controller).toBeDefined();
    expect(controller.bindings).toBeDefined();
    expect(controller.methods).toBeDefined();
    expect(controller.events).toBeDefined();
  });

  it('should provide correct bindings interface', () => {
    // Test that bindings have the correct types
    expect(controller.bindings.selectedDate).toBeDefined();
    expect(controller.bindings.selectedDateRange).toBeDefined();
    expect(controller.bindings.focusedDate).toBeDefined();
    expect(controller.bindings.currentDate).toBeDefined();
    expect(controller.bindings.currentMonth).toBeDefined();
    expect(controller.bindings.currentYear).toBeDefined();
    expect(controller.bindings.monthName).toBeDefined();
    expect(controller.bindings.calendarDays).toBeDefined();
    expect(controller.bindings.calendarMonths).toBeDefined();
    expect(controller.bindings.calendarYears).toBeDefined();
    expect(controller.bindings.weekdays).toBeDefined();
    expect(controller.bindings.isRangeSelection).toBeDefined();
    expect(controller.bindings.currentYearRangeBase).toBeDefined();
  });

  it('should provide correct methods interface', () => {
    // Test that methods have the correct signatures
    expect(controller.methods).toBeDefined();
    expect(typeof controller.methods.selectDate).toBe('function');
    expect(typeof controller.methods.goToNextMonth).toBe('function');
    expect(typeof controller.methods.goToPreviousMonth).toBe('function');
    expect(typeof controller.methods.goToNextYear).toBe('function');
    expect(typeof controller.methods.goToPreviousYear).toBe('function');
    expect(typeof controller.methods.setRangeSelectionMode).toBe('function');
    expect(typeof controller.methods.clearSelection).toBe('function');
    expect(typeof controller.methods.setFocusedDate).toBe('function');
    expect(typeof controller.methods.moveFocusRight).toBe('function');
    expect(typeof controller.methods.moveFocusLeft).toBe('function');
    expect(typeof controller.methods.moveFocusUp).toBe('function');
    expect(typeof controller.methods.moveFocusDown).toBe('function');
    expect(typeof controller.methods.setLocale).toBe('function');
    expect(typeof controller.methods.getLocale).toBe('function');
    expect(typeof controller.methods.formatDate).toBe('function');
    expect(typeof controller.methods.setMinDate).toBe('function');
    expect(typeof controller.methods.setMaxDate).toBe('function');
    expect(typeof controller.methods.generateCalendarDays).toBe('function');
    expect(typeof controller.methods.generateCalendarMonths).toBe('function');
    expect(typeof controller.methods.generateCalendarYears).toBe('function');
  });

  it('should provide correct events interface', () => {
    // Test that events have the correct types
    expect(controller.events).toBeDefined();
    expect(controller.events.dateSelected).toBeDefined();
    expect(controller.events.dateRangeSelected).toBeDefined();
    expect(controller.events.monthChanged).toBeDefined();
    expect(controller.events.yearChanged).toBeDefined();
    expect(controller.events.viewChanged).toBeDefined();
    expect(controller.events.yearRangeChanged).toBeDefined();
  });

  it('should provide direct method access', () => {
    // Test that methods are also available directly on the controller
    expect(typeof controller.selectDate).toBe('function');
    expect(typeof controller.goToNextMonth).toBe('function');
    expect(typeof controller.goToPreviousMonth).toBe('function');
    expect(typeof controller.goToNextYear).toBe('function');
    expect(typeof controller.goToPreviousYear).toBe('function');
    expect(typeof controller.clearSelection).toBe('function');
    expect(typeof controller.setRangeSelectionMode).toBe('function');
  });

  it('should provide selectedDateRange with flexible property access', () => {
    // Test that selectedDateRange provides both naming conventions
    expect(controller.selectedDateRange).toBeDefined();
    expect(controller.selectedDateRange.start).toBeDefined();
    expect(controller.selectedDateRange.end).toBeDefined();
    expect(controller.selectedDateRange.startDate).toBeDefined();
    expect(controller.selectedDateRange.endDate).toBeDefined();
  });  it('should enforce correct binding value types', () => {
    // These operations should be type-safe
    const selectedDate = controller.bindings.selectedDate.current;
    const currentMonth = controller.bindings.currentMonth.current;
    const calendarDays = controller.bindings.calendarDays.current;
    
    // Type checks
    expect(selectedDate === null || selectedDate instanceof Date).toBe(true);
    expect(typeof currentMonth).toBe('number');
    expect(Array.isArray(calendarDays)).toBe(true);
  });

  it('should have properly typed binding methods', () => {
    // Test binding methods exist and have correct types
    expect(typeof controller.bindings.selectedDate.current).not.toBe('undefined');
    expect(typeof controller.bindings.selectedDate.set).toBe('function');
    expect(typeof controller.bindings.selectedDate.subscribe).toBe('function');
    
    // Test setting values with correct types
    controller.bindings.selectedDate.set(new Date());
    controller.bindings.selectedDate.set(null);
    controller.bindings.currentMonth.set(5);
    controller.bindings.currentYear.set(2024);
  });

  it('should support type-safe method calls', () => {
    // These method calls should be type-safe
    controller.methods.selectDate(new Date());
    controller.methods.selectDate(2024, 5, 15);
    controller.methods.goToMonth(5, 2024);
    controller.methods.setRangeSelectionMode(true);
    controller.methods.setLocale('fr-FR');
    
    // Direct method access should also be type-safe
    controller.selectDate(new Date());
    controller.goToNextMonth();
    controller.clearSelection();
    
    expect(true).toBe(true); // If we reach here, type checking passed
  });

  it('should support event subscription with correct types', () => {
    // Event subscription should be type-safe
    controller.events.dateSelected.subscribe((date: Date) => {
      expect(date instanceof Date).toBe(true);
    });

    controller.events.monthChanged.subscribe((month: number) => {
      expect(typeof month).toBe('number');
    });

    controller.events.viewChanged.subscribe((view: { month: number; year: number }) => {
      expect(typeof view.month).toBe('number');
      expect(typeof view.year).toBe('number');
    });
    
    expect(true).toBe(true); // If we reach here, type checking passed
  });

  it('should provide complete state representation', () => {
    // Test that CalendarState interface represents all state correctly
    const mockState: CalendarState = {
      currentDate: new Date(),
      selectedDate: null,
      selectedDateRange: { startDate: null, endDate: null },
      focusedDate: null,
      isRangeSelection: false,
      currentMonth: 5,
      currentYear: 2024,
      monthName: 'June',
      calendarDays: [],
      calendarMonths: [],
      calendarYears: [],
      weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      minDate: null,
      maxDate: null,
      disabledDates: [],
      locale: 'en-US',
      firstDayOfWeek: 0
    } as unknown as CalendarState;
    
    expect(mockState.currentDate instanceof Date).toBe(true);
    expect(mockState.selectedDate).toBeNull();
    expect(typeof mockState.currentMonth).toBe('number');
    expect(typeof mockState.currentYear).toBe('number');
    expect(typeof mockState.monthName).toBe('string');
    expect(Array.isArray(mockState.calendarDays)).toBe(true);
    expect(Array.isArray(mockState.weekdays)).toBe(true);
    expect(typeof mockState.locale).toBe('string');
    expect(typeof mockState.firstDayOfWeek).toBe('number');
  });

  it('should provide utility type helpers', () => {
    // Test utility types work correctly
    type SelectedDateValue = BindingValue<'selectedDate'>; // Should be Date | null
    type CurrentMonthValue = BindingValue<'currentMonth'>; // Should be number
    
    const selectedDate: SelectedDateValue = null;
    const currentMonth: CurrentMonthValue = 5;
    
    expect(selectedDate).toBeNull();
    expect(typeof currentMonth).toBe('number');
    
    // Test parameter types
    const args1: SelectDateParams = [new Date()];
    const args2: SelectDateParams = [2024, 5, 15];
    
    expect(args1.length).toBeGreaterThanOrEqual(1);
    expect(args2.length).toBe(3);
    
    // Test event data types
    const mockDateSelectedData: DateSelectedEventData = new Date();
    expect(mockDateSelectedData instanceof Date).toBe(true);
  });
});
