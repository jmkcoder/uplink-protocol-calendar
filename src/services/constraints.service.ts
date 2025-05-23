import { IConstraintsService } from "../interfaces/constraints.service.interfaces";

/**
 * Implementation of ConstraintsService
 * Responsible for managing date constraints like min/max dates and disabled dates
 */
export class ConstraintsService implements IConstraintsService {
  private _minDate: Date | null = null;
  private _maxDate: Date | null = null;
  private _disabledDates: Date[] = [];
  
  /**
   * Set minimum date
   */
  public setMinDate(date: Date | null): Date | null {
    this._minDate = date;
    return this._minDate;
  }
  
  /**
   * Set maximum date
   */
  public setMaxDate(date: Date | null): Date | null {
    this._maxDate = date;
    return this._maxDate;
  }
  
  /**
   * Set disabled dates
   */
  public setDisabledDates(dates: Date[]): Date[] {
    this._disabledDates = dates || [];
    return this._disabledDates;
  }
  
  /**
   * Check if a date is disabled
   */
  public isDateDisabled(date: Date, minDate: Date | null, maxDate: Date | null, disabledDates: Date[]): boolean {
    if (!date) return false;
    
    // Check min date
    if (minDate && date < minDate) return true;
    
    // Check max date
    if (maxDate && date > maxDate) return true;
    
    // Check disabled dates
    return disabledDates.some(disabledDate => 
      disabledDate.getFullYear() === date.getFullYear() &&
      disabledDate.getMonth() === date.getMonth() &&
      disabledDate.getDate() === date.getDate()
    );
  }
    /**
   * Get current constraints
   */
  public getConstraints(): {
    minDate: Date | null;
    maxDate: Date | null;
    disabledDates: Date[];
  } {
    return {
      minDate: this._minDate,
      maxDate: this._maxDate,
      disabledDates: [...this._disabledDates],
    };
  }
  
  /**
   * Add a date to the disabled dates list
   */
  public addDisabledDate(date: Date): Date[] {
    // Check if date already exists
    const exists = this._disabledDates.some(disabledDate =>
      disabledDate.getFullYear() === date.getFullYear() &&
      disabledDate.getMonth() === date.getMonth() &&
      disabledDate.getDate() === date.getDate()
    );
    
    if (!exists) {
      this._disabledDates.push(new Date(date));
    }
    
    return [...this._disabledDates];
  }
  
  /**
   * Remove a date from the disabled dates list
   */
  public removeDisabledDate(date: Date): Date[] {
    this._disabledDates = this._disabledDates.filter(disabledDate =>
      !(disabledDate.getFullYear() === date.getFullYear() &&
        disabledDate.getMonth() === date.getMonth() &&
        disabledDate.getDate() === date.getDate())
    );
    
    return [...this._disabledDates];
  }
}
