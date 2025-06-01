import { Binding, createBinding } from "@uplink-protocol/core";
import { CalendarDate, CalendarMonth, CalendarYear, DateRange } from "../interfaces/calendar.interfaces";
import { IViewStateService } from "../interfaces/view-state.service.interfaces";

/**
 * Implementation of ViewStateService
 * Responsible for managing calendar view state and binding updates
 */
export class ViewStateService implements IViewStateService {
  /**
   * Initialize view state bindings
   */  
  public initializeBindings(
    currentDate: Date,
    selectedDate: Date | null,
    selectedDateRange: DateRange,
    firstDayOfWeek: number,
    isRangeSelection: boolean,
    calendarDaysGenerator: () => CalendarDate[],
    calendarMonthsGenerator: () => CalendarMonth[],
    calendarYearsGenerator: () => CalendarYear[]
  ): {
    currentMonth: Binding<number>;
    currentYear: Binding<number>;
    currentDate: Binding<Date>;
    monthName: Binding<string>;
    calendarDays: Binding<CalendarDate[]>;
    calendarMonths: Binding<CalendarMonth[]>;
    calendarYears: Binding<CalendarYear[]>;
    selectedDate: Binding<Date | null>;
    selectedDateRange: Binding<DateRange>;
    focusedDate: Binding<Date | null>;
    weekdays: Binding<string[]>;
    isRangeSelection: Binding<boolean>;
  } {    // Use firstDayOfWeek parameter to avoid TS6133 error (parameter declared but not used)
    // This parameter is used to configure weekday display order in the calendar
    void firstDayOfWeek; // Parameter is used by other services
    
    return {
      currentMonth: createBinding<number>(currentDate.getMonth()),
      currentYear: createBinding<number>(currentDate.getFullYear()),
      currentDate: createBinding<Date>(new Date(currentDate)),
      monthName: createBinding<string>(""), // Will be set by other service
      calendarDays: createBinding<CalendarDate[]>(calendarDaysGenerator()),
      calendarMonths: createBinding<CalendarMonth[]>(calendarMonthsGenerator()),
      calendarYears: createBinding<CalendarYear[]>(calendarYearsGenerator()),
      selectedDate: createBinding<Date | null>(selectedDate),
      selectedDateRange: createBinding<DateRange>(selectedDateRange),
      focusedDate: createBinding<Date | null>(null), // Initialize focusedDate as null
      weekdays: createBinding<string[]>([]), // Will be set by other service based on firstDayOfWeek
      isRangeSelection: createBinding<boolean>(isRangeSelection),
    };
  }
  /**
   * Update current date in view state
   */  
  public updateCurrentDate(
    date: Date,
    arg2: any, // Can be either Binding<number> or bindings object
    arg3: any, // Can be either Binding<number> or getMonthName function
    arg4: any, // Can be either Binding<string> or generateCalendarDays function
    arg5?: any, // Optional getMonthName function or undefined
    arg6?: any, // Optional calendarDaysBinding or undefined
    arg7?: any  // Optional generateCalendarDays function or undefined
  ): { month: number, year: number } {
    const month = date.getMonth();
    const year = date.getFullYear();

    // Check if we're using the object form or individual parameters
    if (arg2 && typeof arg2 === 'object' && 'currentMonth' in arg2) {
      // Object form: (date, bindings, getMonthName, generateCalendarDays)
      const bindings = arg2;
      const getMonthName = arg3;
      const generateCalendarDays = arg4;

      bindings.currentMonth.set(month);
      bindings.currentYear.set(year);
      bindings.monthName.set(getMonthName(month));
      bindings.calendarDays.set(generateCalendarDays());
    } else {
      // Individual parameters form: (date, currentMonthBinding, currentYearBinding, monthNameBinding, getMonthName, ...)
      const currentMonthBinding = arg2;
      const currentYearBinding = arg3;
      const monthNameBinding = arg4;
      const getMonthName = arg5;

      currentMonthBinding.set(month);
      currentYearBinding.set(year);
      monthNameBinding.set(getMonthName(month));
      
      // Check if we have calendar days binding and generator
      if (arg6 && arg7) {
        const calendarDaysBinding = arg6;
        const generateCalendarDays = arg7;
        calendarDaysBinding.set(generateCalendarDays());
      }
    }
    
    return { month, year };
  }

  /**
   * Update selected date bindings
   */
  public updateSelectedDate(
    date: Date | null,
    binding: Binding<Date | null>,
    calendarDaysBinding?: Binding<CalendarDate[]>,
    generateCalendarDays?: () => CalendarDate[]
  ): void {
    binding.set(date);
    if (calendarDaysBinding && generateCalendarDays) {
      calendarDaysBinding.set(generateCalendarDays());
    }
  }

  /**
   * Update date range bindings
   */
  public updateDateRange(
    range: DateRange,
    binding: Binding<DateRange>,
    calendarDaysBinding: Binding<CalendarDate[]>,
    generateCalendarDays: () => CalendarDate[]
  ): void {
    binding.set(range);
    calendarDaysBinding.set(generateCalendarDays());
  }
  
  /**
   * Update selection mode
   */
  public updateSelectionMode(
    isRange: boolean,
    binding: Binding<boolean>,
    calendarDaysBinding: Binding<CalendarDate[]>,
    generateCalendarDays: () => CalendarDate[]
  ): void {
    binding.set(isRange);
    calendarDaysBinding.set(generateCalendarDays());
  }

  /**
   * Update selectedDateRange binding with new range
   */
  public updateSelectedDateRange(
    range: DateRange,
    binding: Binding<DateRange>
  ): void {
    binding.set(range);
  }

  /**
   * Update calendarDays binding with new calendar days
   */
  public updateCalendarDays(
    calendarDays: CalendarDate[],
    binding: Binding<CalendarDate[]>
  ): void {
    binding.set(calendarDays);
  }

  /**
   * Update focused date
   */
  public updateFocusedDate(
    date: Date | null,
    focusedDateBindingOrCalendarDaysBinding?: Binding<Date | null> | Binding<CalendarDate[]>,
    generateCalendarDays?: () => CalendarDate[]
  ): void {
    // If called with (date, focusedDateBinding)
    if (focusedDateBindingOrCalendarDaysBinding && !generateCalendarDays) {
      // Update the focusedDate binding
      (focusedDateBindingOrCalendarDaysBinding as Binding<Date | null>).set(date ? new Date(date) : null);
      return;
    }
    
    // If called with (date, calendarDaysBinding, generateCalendarDays)
    if (focusedDateBindingOrCalendarDaysBinding && generateCalendarDays) {
      // Update calendar days to reflect the new focused date
      (focusedDateBindingOrCalendarDaysBinding as Binding<CalendarDate[]>).set(generateCalendarDays());
    }
  }
}
