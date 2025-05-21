/**
 * Date selection service interface
 * Responsible for handling date selection and ranges
 */
export interface IDateSelectionService {
  /**
   * Select a single date
   */
  selectDate(date: Date): Date;
  
  /**
   * Select a date for a range
   */
  selectDateRange(date: Date, currentRange: {startDate: Date | null, endDate: Date | null}): {startDate: Date | null, endDate: Date | null};
  
  /**
   * Clear the current selection
   */
  clearSelection(isRangeMode: boolean): {
    selectedDate: Date | null, 
    selectedDateRange: {startDate: Date | null, endDate: Date | null}
  };
  
  /**
   * Check if a given date is selected
   */
  isDateSelected(date: Date, selectedDate: Date | null): boolean;
  
  /**
   * Check if a given date is in the selected range
   */
  isDateInRange(
    date: Date, 
    range: {startDate: Date | null, endDate: Date | null}
  ): {isInRange: boolean, isRangeStart: boolean, isRangeEnd: boolean};
}
