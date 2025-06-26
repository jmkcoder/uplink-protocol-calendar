import { IAccessibilityService } from '../interfaces/accessibility.service.interfaces';
import { DateRange } from '../interfaces/calendar.interfaces';

/**
 * Implementation of AccessibilityService
 * Responsible for accessibility-related functionality such as screen reader support
 * and keyboard navigation
 */
export class AccessibilityService implements IAccessibilityService {
  /**
   * Get accessible date label for screen readers
   * @param date The date to get a label for
   * @param localeMonthNameFn Optional function to get localized month name
   * @returns Accessible date label string
   */
  public getAccessibleDateLabel(date: Date, localeMonthNameFn?: (month: number) => string): string {
    if (!date) {
      return "";
    }
    
    if (localeMonthNameFn) {
      const monthName = localeMonthNameFn(date.getMonth());
      const dayOfMonth = date.getDate();
      const year = date.getFullYear();
      
      return `${monthName} ${dayOfMonth}, ${year}`;
    } else {
      // Fallback to English
      const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ];
      const monthName = months[date.getMonth()];
      const dayOfMonth = date.getDate();
      const year = date.getFullYear();
      
      return `${monthName} ${dayOfMonth}, ${year}`;
    }
  }
  
  /**
   * Get date state description for screen readers (today, selected, disabled, etc.)
   * @param date The date to check
   * @param currentState Current state data required for determination
   * @returns State description string
   */
  public getDateStateDescription(
    date: Date, 
    currentState: {
      selectedDate: Date | null,
      selectedDateRange: DateRange,
      isRangeSelection: boolean,
      isDateDisabledFn: (date: Date) => boolean,
      isTodayFn: (date: Date) => boolean
    }
  ): string {
    if (!date) {
      return "";
    }

    const states: string[] = [];
    
    // Check if date is today
    if (currentState.isTodayFn(date)) {
      states.push("today");
    }
    
    // Check if date is selected
    if (currentState.selectedDate) {
      // Normalize the date values to compare only year, month, and day
      const normalizedDate = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate()
      );
      const normalizedSelectedDate = new Date(
        currentState.selectedDate.getFullYear(),
        currentState.selectedDate.getMonth(),
        currentState.selectedDate.getDate()
      );

      if (normalizedDate.getTime() === normalizedSelectedDate.getTime()) {
        states.push("selected");
      }
    }
    
    // Check if date is in selected range
    if (currentState.isRangeSelection && currentState.selectedDateRange) {
      const { startDate, endDate } = currentState.selectedDateRange;

      if (
        startDate &&
        date.getDate() === startDate.getDate() &&
        date.getMonth() === startDate.getMonth() &&
        date.getFullYear() === startDate.getFullYear()
      ) {
        states.push("range start");
      }

      if (
        endDate &&
        date.getDate() === endDate.getDate() &&
        date.getMonth() === endDate.getMonth() &&
        date.getFullYear() === endDate.getFullYear()
      ) {
        states.push("range end");
      }
    }

    // Check if date is disabled
    if (currentState.isDateDisabledFn(date)) {
      states.push("disabled");
    }

    return states.join(", ");
  }
  
  /**
   * Move focus to a new date
   * @param direction Direction to move focus
   * @param currentFocusedDate Currently focused date
   * @param selectedDate Currently selected date (fallback if no focused date)
   * @returns New focused date
   */
  public moveFocus(
    direction: 'right' | 'left' | 'up' | 'down' | 'start' | 'end' | 'prevMonth' | 'nextMonth' | 'prevYear' | 'nextYear',
    currentFocusedDate: Date | null,
    selectedDate: Date | null
  ): Date {
    // Default to today if no focused or selected date
    let resultDate = currentFocusedDate || selectedDate || new Date();
    
    // Create a new date object to avoid mutating the original
    resultDate = new Date(resultDate);
    
    switch (direction) {
      case 'right':
        resultDate.setDate(resultDate.getDate() + 1);
        break;
        
      case 'left':
        resultDate.setDate(resultDate.getDate() - 1);
        break;
        
      case 'up':
        resultDate.setDate(resultDate.getDate() - 7);
        break;
        
      case 'down':
        resultDate.setDate(resultDate.getDate() + 7);
        break;
        
      case 'start':
        resultDate = new Date(resultDate.getFullYear(), resultDate.getMonth(), 1);
        break;
        
      case 'end':
        resultDate = new Date(resultDate.getFullYear(), resultDate.getMonth() + 1, 0);
        break;
        
      case 'prevMonth':
        // Remember the current day to maintain it if possible
        const currentDay = resultDate.getDate();
        
        // Move to previous month
        resultDate.setMonth(resultDate.getMonth() - 1);
        
        // Check if the day exists in the previous month
        const lastDayOfMonth = new Date(resultDate.getFullYear(), resultDate.getMonth() + 1, 0).getDate();
        if (currentDay > lastDayOfMonth) {
          resultDate.setDate(lastDayOfMonth);
        }
        break;
        
      case 'nextMonth':
        // Remember the current day to maintain it if possible
        const currentNextDay = resultDate.getDate();
        
        // Move to next month
        resultDate.setMonth(resultDate.getMonth() + 1);
        
        // Check if the day exists in the next month
        const lastDayOfNextMonth = new Date(resultDate.getFullYear(), resultDate.getMonth() + 1, 0).getDate();
        if (currentNextDay > lastDayOfNextMonth) {
          resultDate.setDate(lastDayOfNextMonth);
        }
        break;
        
      case 'prevYear':
        // Remember the current day to maintain it if possible
        resultDate.setFullYear(resultDate.getFullYear() - 1);
        
        // Handle Feb 29 on non-leap years
        if (resultDate.getMonth() === 1 && resultDate.getDate() === 29) {
          const isLeapYear = (year: number) => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
          if (!isLeapYear(resultDate.getFullYear())) {
            resultDate.setDate(28);
          }
        }
        break;
        
      case 'nextYear':
        // Remember the current day to maintain it if possible
        resultDate.setFullYear(resultDate.getFullYear() + 1);
        
        // Handle Feb 29 on non-leap years
        if (resultDate.getMonth() === 1 && resultDate.getDate() === 29) {
          const isLeapYear = (year: number) => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
          if (!isLeapYear(resultDate.getFullYear())) {
            resultDate.setDate(28);
          }
        }
        break;
    }
    
    return resultDate;
  }

  /**
   * Handle selecting the currently focused date
   * @param focusedDate Currently focused date
   * @param selectDateFn Function to call to select the date
   * @returns Boolean indicating if a selection was made
   */
  public selectFocusedDate(
    focusedDate: Date | null,
    selectDateFn: (date: Date) => void
  ): boolean {
    if (!focusedDate) {
      return false;
    }
    
    selectDateFn(focusedDate);
    return true;
  }
}
