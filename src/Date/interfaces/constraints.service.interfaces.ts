/**
 * Constraints service interface
 * Responsible for managing date constraints like min/max dates and disabled dates
 */
export interface IConstraintsService {
  /**
   * Set minimum date
   */
  setMinDate(date: Date | null): Date | null;
  
  /**
   * Set maximum date
   */
  setMaxDate(date: Date | null): Date | null;
  
  /**
   * Set disabled dates
   */
  setDisabledDates(dates: Date[]): Date[];
  
  /**
   * Set disabled days of the week
   */
  setDisabledDaysOfWeek(days: number[]): number[];
  
  /**
   * Check if a date is disabled
   */
  isDateDisabled(date: Date, minDate: Date | null, maxDate: Date | null, disabledDates: Date[], disabledDaysOfWeek?: number[]): boolean;
  
  /**
   * Get current constraints
   */
  getConstraints(): {
    minDate: Date | null;
    maxDate: Date | null;
    disabledDates: Date[];
    disabledDaysOfWeek: number[];
  };
  
  /**
   * Add a date to the disabled dates list
   */
  addDisabledDate(date: Date): Date[];
  
  /**
   * Remove a date from the disabled dates list
   */
  removeDisabledDate(date: Date): Date[];
  
  /**
   * Add a day of the week to the disabled days list
   */
  addDisabledDayOfWeek(day: number): number[];
  
  /**
   * Remove a day of the week from the disabled days list
   */
  removeDisabledDayOfWeek(day: number): number[];
  
  /**
   * Get disabled days of the week
   */
  getDisabledDaysOfWeek(): number[];
}
