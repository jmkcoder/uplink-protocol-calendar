import { IDateValidationService } from '../interfaces/date-validation.service.interfaces';
import { isSameDay } from '../utils/calendar.utils';

/**
 * Implementation of DateValidationService
 * Responsible for date validation and constraint checking
 */
export class DateValidationService implements IDateValidationService {
  /**
   * Check if a date is disabled based on constraints
   * @param date Date to check
   * @param minDate Minimum allowed date
   * @param maxDate Maximum allowed date
   * @param disabledDates Array of specifically disabled dates
   * @returns Boolean indicating if date is disabled
   */
  public isDateDisabled(
    date: Date, 
    minDate: Date | null, 
    maxDate: Date | null, 
    disabledDates: Date[]
  ): boolean {
    // Check min date
    if (minDate) {
      const min = new Date(minDate);
      min.setHours(0, 0, 0, 0);
      if (date < min) return true;
    }
    
    // Check max date
    if (maxDate) {
      const max = new Date(maxDate);
      max.setHours(23, 59, 59, 999);
      if (date > max) return true;
    }
    
    // Check disabled dates array
    return disabledDates.some(disabledDate => this.isSameDay(date, disabledDate));
  }
  
  /**
   * Set minimum selectable date
   * @param date Minimum date
   * @returns Normalized minimum date
   */
  public setMinDate(date: Date | null): Date | null {
    if (!date) return null;
    
    const normalizedDate = new Date(date);
    normalizedDate.setHours(0, 0, 0, 0);
    return normalizedDate;
  }
  
  /**
   * Set maximum selectable date
   * @param date Maximum date
   * @returns Normalized maximum date
   */
  public setMaxDate(date: Date | null): Date | null {
    if (!date) return null;
    
    const normalizedDate = new Date(date);
    normalizedDate.setHours(23, 59, 59, 999);
    return normalizedDate;
  }
  
  /**
   * Set disabled dates
   * @param dates Array of disabled dates
   * @returns Normalized array of disabled dates
   */
  public setDisabledDates(dates: Date[]): Date[] {
    return dates.map(date => {
      const newDate = new Date(date);
      newDate.setHours(0, 0, 0, 0);
      return newDate;
    });
  }
  
  /**
   * Check if two dates represent the same day
   * @param date1 First date
   * @param date2 Second date
   * @returns Boolean indicating if dates are the same day
   */
  public isSameDay(date1: Date, date2: Date): boolean {
    return isSameDay(date1, date2);
  }
}
