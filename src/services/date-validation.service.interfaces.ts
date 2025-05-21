/**
 * Date validation service interface
 * Responsible for date validation and constraint checking
 */
export interface IDateValidationService {
  /**
   * Check if a date is disabled based on constraints
   */
  isDateDisabled(
    date: Date, 
    minDate: Date | null, 
    maxDate: Date | null, 
    disabledDates: Date[]
  ): boolean;
  
  /**
   * Set minimum selectable date
   */
  setMinDate(date: Date | null): Date | null;
  
  /**
   * Set maximum selectable date
   */
  setMaxDate(date: Date | null): Date | null;
  
  /**
   * Set disabled dates
   */
  setDisabledDates(dates: Date[]): Date[];
  
  /**
   * Check if two dates represent the same day
   */
  isSameDay(date1: Date, date2: Date): boolean;
}
