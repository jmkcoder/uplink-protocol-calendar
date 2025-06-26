import { DateRange } from './calendar.interfaces';

/**
 * Interface for the AccessibilityService
 * Responsible for accessibility-related functionality such as screen reader support
 * and keyboard navigation
 */
export interface IAccessibilityService {
  /**
   * Get accessible date label for screen readers
   * @param date The date to get a label for
   * @returns Accessible date label string
   */
  getAccessibleDateLabel(date: Date, localeMonthNameFn?: (month: number) => string): string;
  
  /**
   * Get date state description for screen readers (today, selected, disabled, etc.)
   * @param date The date to check
   * @param currentState Current state data required for determination
   * @returns State description string
   */
  getDateStateDescription(
    date: Date, 
    currentState: {
      selectedDate: Date | null,
      selectedDateRange: DateRange,
      isRangeSelection: boolean,
      isDateDisabledFn: (date: Date) => boolean,
      isTodayFn: (date: Date) => boolean
    }
  ): string;
  
  /**
   * Move focus to a new date
   * @param direction Direction to move focus
   * @param currentFocusedDate Currently focused date
   * @param selectedDate Currently selected date (fallback if no focused date)
   * @returns New focused date
   */
  moveFocus(
    direction: 'right' | 'left' | 'up' | 'down' | 'start' | 'end' | 'prevMonth' | 'nextMonth' | 'prevYear' | 'nextYear',
    currentFocusedDate: Date | null,
    selectedDate: Date | null
  ): Date;
  
  /**
   * Handle selecting the currently focused date
   * @param focusedDate Currently focused date
   * @param selectDateFn Function to call to select the date
   * @returns Boolean indicating if a selection was made
   */
  selectFocusedDate(
    focusedDate: Date | null,
    selectDateFn: (date: Date) => void
  ): boolean;
}
