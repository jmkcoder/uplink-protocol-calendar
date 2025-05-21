import { IDateSelectionService } from '../interfaces/date-selection.service.interfaces';
import { isSameDay } from '../utils/calendar.utils';

/**
 * Implementation of DateSelectionService
 * Responsible for handling date selection and ranges
 */
export class DateSelectionService implements IDateSelectionService {
  /**
   * Select a single date
   * @param date Date to select
   * @returns Selected date
   */
  public selectDate(date: Date): Date {
    return new Date(date);
  }
  
  /**
   * Select a date for a range
   * @param date Date being selected
   * @param currentRange Current date range
   * @returns Updated date range
   */
  public selectDateRange(
    date: Date, 
    currentRange: {startDate: Date | null, endDate: Date | null}
  ): {startDate: Date | null, endDate: Date | null} {
    // Deep copy the current range to avoid mutation
    const result = { 
      startDate: currentRange.startDate ? new Date(currentRange.startDate) : null, 
      endDate: currentRange.endDate ? new Date(currentRange.endDate) : null 
    };
    
    if (!result.startDate) {
      // First date in range
      result.startDate = new Date(date);
      result.endDate = null;
    } else if (!result.endDate) {
      // Second date in range - ensure proper order
      if (date < result.startDate) {
        result.endDate = new Date(result.startDate);
        result.startDate = new Date(date);
      } else {
        result.endDate = new Date(date);
      }
    } else {
      // Start a new range
      result.startDate = new Date(date);
      result.endDate = null;
    }
    
    return result;
  }
  
  /**
   * Clear the current selection
   * @param isRangeMode Whether in range selection mode
   * @returns Updated selection state
   */
  public clearSelection(isRangeMode: boolean): {
    selectedDate: Date | null, 
    selectedDateRange: {startDate: Date | null, endDate: Date | null}
  } {
    if (isRangeMode) {
      return {
        selectedDate: null,
        selectedDateRange: { startDate: null, endDate: null }
      };
    } else {
      return {
        selectedDate: null,
        selectedDateRange: { startDate: null, endDate: null }
      };
    }
  }
  
  /**
   * Check if a date is selected
   * @param date Date to check
   * @param selectedDate Currently selected date
   * @returns Boolean indicating if date is selected
   */
  public isDateSelected(date: Date, selectedDate: Date | null): boolean {
    if (!selectedDate) return false;
    return isSameDay(date, selectedDate);
  }
  
  /**
   * Check if a date is in the selected range
   * @param date Date to check
   * @param range Currently selected range
   * @returns Object with range info
   */
  public isDateInRange(
    date: Date, 
    range: {startDate: Date | null, endDate: Date | null}
  ): {isInRange: boolean, isRangeStart: boolean, isRangeEnd: boolean} {
    const result = {
      isInRange: false,
      isRangeStart: false,
      isRangeEnd: false
    };
    
    if (!range.startDate || !range.endDate) {
      if (range.startDate && isSameDay(date, range.startDate)) {
        result.isRangeStart = true;
        result.isInRange = true;
      }
      return result;
    }
    
    // Normalize dates to midnight for comparison
    const normalizedDate = new Date(date);
    normalizedDate.setHours(0, 0, 0, 0);
    
    const start = new Date(range.startDate);
    start.setHours(0, 0, 0, 0);
    
    const end = new Date(range.endDate);
    end.setHours(0, 0, 0, 0);
    
    result.isInRange = normalizedDate >= start && normalizedDate <= end;
    result.isRangeStart = isSameDay(normalizedDate, start);
    result.isRangeEnd = isSameDay(normalizedDate, end);
    
    return result;
  }
}
