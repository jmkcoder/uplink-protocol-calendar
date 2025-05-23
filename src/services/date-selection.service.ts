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
    currentRange: {startDate?: Date | null, endDate?: Date | null, start?: Date | null, end?: Date | null}
  ): {startDate: Date | null, endDate: Date | null} {
    // Create a consistent object structure for the result
    let startDate: Date | null = null;
    let endDate: Date | null = null;
    
    // Get existing values from the current range, handling both naming conventions
    if (currentRange.startDate || currentRange.start) {
      startDate = new Date(currentRange.startDate || currentRange.start as Date);
    }
    
    if (currentRange.endDate || currentRange.end) {
      endDate = new Date(currentRange.endDate || currentRange.end as Date);
    }
    
    // Create a new date object to avoid mutation
    const newDate = new Date(date);
    
    if (!startDate) {
      // First date in range
      startDate = newDate;
      endDate = null;
    } else if (!endDate) {
      // Second date in range - ensure proper order
      if (newDate < startDate) {
        endDate = new Date(startDate);
        startDate = newDate;
      } else {
        endDate = newDate;
      }
    } else {
      // Start a new range
      startDate = newDate;
      endDate = null;
    }
    
    // Always return an object with both startDate and endDate
    return { startDate: startDate ?? null, endDate: endDate ?? null };
  }
  
  /**
   * Clear the current selection
   * @param isRangeMode Whether in range selection mode
   * @returns Updated selection state
   */
  public clearSelection(): {
    selectedDate: Date | null, 
    selectedDateRange: {startDate: Date | null, endDate: Date | null}
  } {
    return {
      selectedDate: null,
      selectedDateRange: { startDate: null, endDate: null }
    };
  }
  
  /**
   * Clear the date range selection
   * @returns Empty date range
   */
  public clearDateRange(): {startDate: Date | null, endDate: Date | null} {
    return { startDate: null, endDate: null };
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
  
  /**
   * Check if a date is in the selected range (simplified version)
   * @param date Date to check
   * @param range Currently selected range
   * @returns Boolean indicating if the date is in range
   */
  public isDateInSelectedRange(
    date: Date, 
    range: {startDate: Date | null, endDate: Date | null}
  ): boolean {
    if (!range.startDate || !range.endDate) {
      return false;
    }
    
    // Normalize dates to midnight for comparison
    const normalizedDate = new Date(date);
    normalizedDate.setHours(0, 0, 0, 0);
    
    const start = new Date(range.startDate);
    start.setHours(0, 0, 0, 0);
    
    const end = new Date(range.endDate);
    end.setHours(0, 0, 0, 0);
    
    return normalizedDate >= start && normalizedDate <= end;
  }
}
