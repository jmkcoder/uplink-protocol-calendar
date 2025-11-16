import { DateRange } from '../interfaces/calendar.interfaces';
import { IViewStateService } from '../interfaces/view-state.service.interfaces';
import { IDateSelectionService } from '../interfaces/date-selection.service.interfaces';
import { IConstraintsService } from '../interfaces/constraints.service.interfaces';
import { IEventManagerService } from '../interfaces/event-manager.service.interfaces';
import { Binding, EventEmitter } from '@uplink-protocol/core';
import { CalendarDate } from '../interfaces/calendar.interfaces';
import { ICalendarStateService } from '../interfaces';

/**
 * Implementation of CalendarStateService
 * Responsible for centralizing and managing the state of the calendar
 */
export class CalendarStateService implements ICalendarStateService {
  constructor(
    private _viewStateService: IViewStateService,
    private _dateSelectionService: IDateSelectionService,
    private _constraintsService: IConstraintsService,
    private _eventManagerService?: IEventManagerService
  ) {}
  
  /**
   * Set the minimum selectable date
   */
  public setMinDate(
    date: Date | null,
    _currentMinDate: Date | null,
    currentDate: Date,
    bindings: {
      currentMonth: Binding<number>;
      currentYear: Binding<number>;
      monthName: Binding<string>;
      calendarDays: Binding<CalendarDate[]>;
    },
    getMonthNameFn: (month: number) => string,
    generateCalendarDaysFn: () => CalendarDate[]
  ): Date | null {
    // Use ConstraintsService to set the min date
    const minDate = this._constraintsService.setMinDate(date);
    
    // Update view state
    this._viewStateService.updateCurrentDate(
      currentDate,
      bindings,
      getMonthNameFn,
      generateCalendarDaysFn
    );
    
    return minDate;
  }
  
  /**
   * Set the maximum selectable date
   */
  public setMaxDate(
    date: Date | null,
    _currentMaxDate: Date | null,
    currentDate: Date,
    bindings: {
      currentMonth: Binding<number>;
      currentYear: Binding<number>;
      monthName: Binding<string>;
      calendarDays: Binding<CalendarDate[]>;
    },
    getMonthNameFn: (month: number) => string,
    generateCalendarDaysFn: () => CalendarDate[]
  ): Date | null {
    // Use ConstraintsService to set the max date
    const maxDate = this._constraintsService.setMaxDate(date);
    
    // Update view state
    this._viewStateService.updateCurrentDate(
      currentDate,
      bindings,
      getMonthNameFn,
      generateCalendarDaysFn
    );
    
    return maxDate;
  }
  
  /**
   * Set disabled dates
   */
  public setDisabledDates(
    dates: Date[],
    currentDate: Date,
    bindings: {
      currentMonth: Binding<number>;
      currentYear: Binding<number>;
      monthName: Binding<string>;
      calendarDays: Binding<CalendarDate[]>;
    },
    getMonthNameFn: (month: number) => string,
    generateCalendarDaysFn: () => CalendarDate[]
  ): Date[] {
    // Use ConstraintsService to set disabled dates
    const disabledDates = this._constraintsService.setDisabledDates(dates);
    
    // Update view state
    this._viewStateService.updateCurrentDate(
      currentDate,
      bindings,
      getMonthNameFn,
      generateCalendarDaysFn
    );
    
    return disabledDates;
  }
  /**
   * Add a specific date to the disabled dates list
   */
  public addDisabledDate(
    date: Date,
    disabledDates: Date[],
    calendarDaysBinding: Binding<CalendarDate[]>,
    generateCalendarDaysFn: () => CalendarDate[]
  ): Date[] {
    if (!date) return disabledDates;
    
    // Check if date already exists in disabled dates to prevent duplicates
    const dateExists = disabledDates.some(
      (disabledDate) => 
        date.getFullYear() === disabledDate.getFullYear() &&
        date.getMonth() === disabledDate.getMonth() &&
        date.getDate() === disabledDate.getDate()
    );
    
    // If date already exists, return current array without changes
    if (dateExists) {
      return disabledDates;
    }
    
    // Add date to disabled dates
    const newDate = new Date(date);
    const newDisabledDates = [...disabledDates, newDate];
    
    // Update calendar view
    if (calendarDaysBinding) {
      calendarDaysBinding.set(generateCalendarDaysFn());
    }
    
    return newDisabledDates;
  }

    /**
   * Remove a specific date from the disabled dates list
   */
  public removeDisabledDate(
    date: Date,
    disabledDates: Date[],
    calendarDaysBinding: Binding<CalendarDate[]>,
    generateCalendarDaysFn: () => CalendarDate[]
  ): Date[] {
    if (!date) return disabledDates;
    
    // Filter out the date to be removed
    const newDisabledDates = disabledDates.filter(
      (disabledDate) => 
        !(date.getFullYear() === disabledDate.getFullYear() &&
          date.getMonth() === disabledDate.getMonth() &&
          date.getDate() === disabledDate.getDate())
    );
    
    // Update calendar view
    if (calendarDaysBinding) {
      calendarDaysBinding.set(generateCalendarDaysFn());
    }
    
    return newDisabledDates;
  }
  
  /**
   * Set the date selection mode
   */
  public setRangeSelectionMode(
    isRange: boolean,
    isRangeSelectionBinding: Binding<boolean>,
    calendarDaysBinding: Binding<CalendarDate[]>,
    generateCalendarDaysFn: () => CalendarDate[]
  ): boolean {
    // Update view state
    this._viewStateService.updateSelectionMode(
      isRange,
      isRangeSelectionBinding,
      calendarDaysBinding,
      generateCalendarDaysFn
    );
    
    return isRange;
  }
  
  /**
   * Clear the current selection
   */
  public clearSelection(
    isRangeSelection: boolean,
    selectedDateBinding: Binding<Date | null>,
    selectedDateRangeBinding: Binding<DateRange>,
    calendarDaysBinding: Binding<CalendarDate[]>,
    generateCalendarDaysFn: () => CalendarDate[]
  ): { selectedDate: Date | null; selectedDateRange: DateRange } {
    // Use DateSelectionService to handle clearing selection
    const result = this._dateSelectionService.clearSelection(isRangeSelection);
    
    // Update view state for single date selection
    this._viewStateService.updateSelectedDate(
      result.selectedDate,
      selectedDateBinding,
      calendarDaysBinding,
      generateCalendarDaysFn
    );
    
    // Update view state for range selection
    this._viewStateService.updateDateRange(
      result.selectedDateRange,
      selectedDateRangeBinding,
      calendarDaysBinding,
      generateCalendarDaysFn
    );
    
    return result;
  }
    /**
   * Focus a specific date for accessibility
   */
  public focusDate(
    date: Date | null,
    focusedDateBinding: Binding<Date | null>
  ): Date | null {
    if (date) {
      const focusedDate = new Date(date);
      
      // Update binding
      if (focusedDateBinding) {
        focusedDateBinding.set(focusedDate);
      }
      
      return focusedDate;
    } else if (focusedDateBinding) {
      // If date is null, clear the focus
      focusedDateBinding.set(null);
    }
    
    return null;
  }
  
  /**
   * Select a date based on the current selection mode
   */
  public selectDate(
    date: Date,
    isRangeSelection: boolean,
    currentSelectedDate: Date | null,
    currentDateRange: DateRange,
    isDateDisabledFn: (date: Date) => boolean,
    bindings: {
      selectedDate: Binding<Date | null>;
      selectedDateRange: Binding<DateRange>;
      focusedDate: Binding<Date | null>;
      calendarDays: Binding<CalendarDate[]>;
    },
    events: {
      dateSelected?: EventEmitter<Date>;
      dateRangeSelected?: EventEmitter<DateRange>;
    } | undefined,
    generateCalendarDaysFn: () => CalendarDate[]
  ): { selectedDate: Date | null; selectedDateRange: DateRange } {
    // Check if date is disabled
    if (isDateDisabledFn(date)) {
      return { 
        selectedDate: currentSelectedDate, 
        selectedDateRange: currentDateRange 
      };
    }
    
    let selectedDate = currentSelectedDate;
    let selectedDateRange = { ...currentDateRange };
    
    if (isRangeSelection) {
      // Handle range selection using DateSelectionService
      selectedDateRange = this._dateSelectionService.selectDateRange(
        date,
        currentDateRange
      );
      
      // Update view state
      this._viewStateService.updateDateRange(
        selectedDateRange,
        bindings.selectedDateRange,
        bindings.calendarDays,
        generateCalendarDaysFn
      );
      
      // Emit events if applicable
      if (selectedDateRange.endDate && events?.dateRangeSelected && this._eventManagerService) {
        this._eventManagerService.emitDateRangeSelected(
          events.dateRangeSelected,
          selectedDateRange
        );
      }
    } else {
      // Handle single date selection
      selectedDate = this._dateSelectionService.selectDate(date);
      
      // Also update focus to match selection for accessibility
      this.focusDate(selectedDate, bindings.focusedDate);
      
      // Update view state
      this._viewStateService.updateSelectedDate(
        selectedDate,
        bindings.selectedDate,
        bindings.calendarDays,
        generateCalendarDaysFn
      );
      
      // Emit events if applicable
      if (selectedDate && events?.dateSelected && this._eventManagerService) {
        this._eventManagerService.emitDateSelected(
          events.dateSelected,
          selectedDate
        );
      }
    }
    
    return { selectedDate, selectedDateRange };
  }
  
  /**
   * Get current state for accessibility and other features
   */
  public getCurrentState(
    currentDate: Date,
    selectedDate: Date | null,
    selectedDateRange: DateRange,
    focusedDate: Date | null,
    isDateDisabledFn: (date: Date) => boolean,
    isDateSelectedFn: (date: Date) => boolean,
    isDateInRangeFn: (date: Date) => boolean,
    isTodayFn: (date: Date) => boolean,
    hasEventsFn: (date: Date) => boolean
  ): any {
    return {
      currentDate,
      selectedDate,
      selectedDateRange,
      focusedDate,
      isDateDisabledFn,
      isDateSelectedFn,
      isDateInRangeFn,
      isTodayFn,
      hasEventsFn
    };
  }
}
