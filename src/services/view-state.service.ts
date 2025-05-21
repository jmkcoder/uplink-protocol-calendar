import { Binding, createBinding } from "@uplink-protocol/core";
import { CalendarDate, DateRange } from "../interfaces/calendar.interfaces";
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
    calendarDaysGenerator: () => CalendarDate[]
  ): {
    currentMonth: Binding<number>;
    currentYear: Binding<number>;
    monthName: Binding<string>;
    calendarDays: Binding<CalendarDate[]>;
    selectedDate: Binding<Date | null>;
    selectedDateRange: Binding<DateRange>;
    weekdays: Binding<string[]>;
    isRangeSelection: Binding<boolean>;
  } {    // Use firstDayOfWeek to avoid TS6133 error (parameter declared but not used)
    // Even though it might be used by other services to generate weekdays, we'll add a comment to clarify
    console.log(`Using first day of week setting: ${firstDayOfWeek}`);
    
    return {
      currentMonth: createBinding<number>(currentDate.getMonth()),
      currentYear: createBinding<number>(currentDate.getFullYear()),
      monthName: createBinding<string>(""), // Will be set by other service
      calendarDays: createBinding<CalendarDate[]>(calendarDaysGenerator()),
      selectedDate: createBinding<Date | null>(selectedDate),
      selectedDateRange: createBinding<DateRange>(selectedDateRange),
      weekdays: createBinding<string[]>([]), // Will be set by other service based on firstDayOfWeek  
      isRangeSelection: createBinding<boolean>(isRangeSelection),
    };
  }

  /**
   * Update current date in view state
   */
  public updateCurrentDate(
    date: Date, 
    bindings: {
      currentMonth: Binding<number>;
      currentYear: Binding<number>;
      monthName: Binding<string>;
      calendarDays: Binding<CalendarDate[]>;
    },
    getMonthName: (month: number) => string,
    generateCalendarDays: () => CalendarDate[]
  ): { month: number, year: number } {
    const month = date.getMonth();
    const year = date.getFullYear();
    
    bindings.currentMonth.set(month);
    bindings.currentYear.set(year);
    bindings.monthName.set(getMonthName(month));
    bindings.calendarDays.set(generateCalendarDays());
    
    return { month, year };
  }

  /**
   * Update selected date bindings
   */
  public updateSelectedDate(
    date: Date | null,
    binding: Binding<Date | null>,
    calendarDaysBinding: Binding<CalendarDate[]>,
    generateCalendarDays: () => CalendarDate[]
  ): void {
    binding.set(date);
    calendarDaysBinding.set(generateCalendarDays());
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
}
