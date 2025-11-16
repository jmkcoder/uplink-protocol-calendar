import { IAccessibilityService } from '../interfaces/accessibility.service.interfaces';
import { IAccessibilityManagerService } from '../interfaces/accessibility-manager.service.interfaces';
import { DateRange } from '../interfaces/calendar.interfaces';
import { Binding } from '@uplink-protocol/core';
import { CalendarDate } from '../interfaces/calendar.interfaces';
import { IViewStateService } from '../interfaces/view-state.service.interfaces';

/**
 * Implementation of AccessibilityManagerService
 * Handles keyboard navigation, focus management, and accessibility functions
 * by coordinating between AccessibilityService and other services
 */
export class AccessibilityManagerService implements IAccessibilityManagerService {
  constructor(
    private _accessibilityService: IAccessibilityService,
    private _viewStateService: IViewStateService
  ) {}

  /**
   * Handles focus management including view updates and navigation
   * @param direction Direction to move focus
   * @param focusedDate Currently focused date
   * @param selectedDate Selected date as fallback
   * @param currentDate Current displayed date
   * @param calendarDaysBinding Binding for calendar days
   * @param generateCalendarDaysFn Function to generate calendar days
   * @param updateDateFn Function to handle date updates if navigation is needed
   * @returns The new focused date
   */
  public manageFocus(
    direction: 'right' | 'left' | 'up' | 'down' | 'start' | 'end' | 'prevMonth' | 'nextMonth' | 'prevYear' | 'nextYear',
    focusedDate: Date | null,
    selectedDate: Date | null,
    currentDate: Date,
    calendarDaysBinding: Binding<CalendarDate[]>,
    generateCalendarDaysFn: () => CalendarDate[],
    updateDateFn?: (date: Date) => void
  ): Date {
    // Delegate focus movement to AccessibilityService
    const newFocusedDate = this._accessibilityService.moveFocus(
      direction,
      focusedDate,
      selectedDate
    );
    
    // Delegate view updates to ViewStateService
    this._viewStateService.updateFocusedDate(
      newFocusedDate,
      calendarDaysBinding,
      generateCalendarDaysFn
    );
    
    // Check if navigation is needed
    if (
      ['prevMonth', 'nextMonth', 'prevYear', 'nextYear'].includes(direction) ||
      (newFocusedDate.getMonth() !== currentDate.getMonth() || 
       newFocusedDate.getFullYear() !== currentDate.getFullYear())
    ) {
      if (updateDateFn) {
        // Navigate to the new date
        updateDateFn(newFocusedDate);
      }
    }
    
    return newFocusedDate;
  }
  
  /**
   * Select the currently focused date
   * @param focusedDate Currently focused date
   * @param selectDateFn Function to select the date
   * @returns Boolean indicating if a selection was made
   */
  public selectFocusedDate(
    focusedDate: Date | null,
    selectDateFn: (date: Date) => void
  ): boolean {
    // Delegate to AccessibilityService
    return this._accessibilityService.selectFocusedDate(
      focusedDate,
      selectDateFn
    );
  }
  
  /**
   * Get accessible date label for screen readers
   * @param date The date to get a label for
   * @param localeMonthNameFn Optional function to get localized month name
   * @returns Accessible date label string
   */
  public getAccessibleDateLabel(
    date: Date, 
    localeMonthNameFn?: (month: number) => string
  ): string {
    // Delegate to AccessibilityService
    return this._accessibilityService.getAccessibleDateLabel(
      date, 
      localeMonthNameFn
    );
  }
  
  /**
   * Get date state description for screen readers
   * @param date The date to check
   * @param selectedDate Currently selected date
   * @param selectedDateRange Currently selected date range
   * @param isRangeSelection Whether range selection mode is active
   * @param isDateDisabledFn Function to check if date is disabled
   * @param isTodayFn Function to check if date is today
   * @returns State description string
   */
  public getDateStateDescription(
    date: Date,
    selectedDate: Date | null,
    selectedDateRange: DateRange,
    isRangeSelection: boolean,
    isDateDisabledFn: (date: Date) => boolean,
    isTodayFn: (date: Date) => boolean
  ): string {
    // Delegate to AccessibilityService
    return this._accessibilityService.getDateStateDescription(
      date,
      {
        selectedDate,
        selectedDateRange,
        isRangeSelection,
        isDateDisabledFn,
        isTodayFn
      }
    );
  }

  /**
   * Get ARIA label for a date
   */
  public getAriaLabel(date: Date): string {
    return this._accessibilityService.getAccessibleDateLabel(date);
  }

  /**
   * Get ARIA label for month
   */
  public getAriaLabelForMonth(month: number, year: number): string {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return `${monthNames[month]} ${year}`;
  }

  /**
   * Get ARIA label for year
   */
  public getAriaLabelForYear(year: number): string {
    return `Year ${year}`;
  }
}
