import { IConstraintsService } from "../interfaces/constraints.service.interfaces";

/**
 * Implementation of ConstraintsService
 * Responsible for managing date constraints like min/max dates and disabled dates
 */
export class ConstraintsService implements IConstraintsService {
  private _minDate: Date | null = null;
  private _maxDate: Date | null = null;
  private _disabledDates: Date[] = [];
  private _disabledDaysOfWeek: number[] = [];
  
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
   * Set disabled days of the week
   */
  public setDisabledDaysOfWeek(days: number[]): number[] {
    // Validate days (0-6, Sunday to Saturday) and remove duplicates
    const validDays = (days || []).filter(day => 
      typeof day === 'number' && day >= 0 && day <= 6
    );
    this._disabledDaysOfWeek = [...new Set(validDays)]; // Remove duplicates
    return this._disabledDaysOfWeek;
  }
  
  /**
   * Check if a date is disabled
   */
  public isDateDisabled(date: Date, minDate: Date | null, maxDate: Date | null, disabledDates: Date[], disabledDaysOfWeek: number[] = []): boolean {
    if (!date) return false;
    
    // Check min date
    if (minDate && date < minDate) return true;
    
    // Check max date
    if (maxDate && date > maxDate) return true;
    
    // Check disabled dates
    const isDisabledDate = disabledDates.some(disabledDate => 
      disabledDate.getFullYear() === date.getFullYear() &&
      disabledDate.getMonth() === date.getMonth() &&
      disabledDate.getDate() === date.getDate()
    );
    
    if (isDisabledDate) return true;
    
    // Check disabled days of the week
    const dayOfWeek = date.getDay();
    return disabledDaysOfWeek.includes(dayOfWeek);
  }  /**
   * Get current constraints
   */
  public getConstraints(): {
    minDate: Date | null;
    maxDate: Date | null;
    disabledDates: Date[];
    disabledDaysOfWeek: number[];
  } {
    return {
      minDate: this._minDate,
      maxDate: this._maxDate,
      disabledDates: [...this._disabledDates],
      disabledDaysOfWeek: [...this._disabledDaysOfWeek],
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
  
  /**
   * Add a day of the week to the disabled days list
   */
  public addDisabledDayOfWeek(day: number): number[] {
    // Validate day (0-6, Sunday to Saturday)
    if (typeof day !== 'number' || day < 0 || day > 6) {
      return [...this._disabledDaysOfWeek];
    }
    
    // Check if day already exists
    if (!this._disabledDaysOfWeek.includes(day)) {
      this._disabledDaysOfWeek.push(day);
    }
    
    return [...this._disabledDaysOfWeek];
  }
  
  /**
   * Remove a day of the week from the disabled days list
   */
  public removeDisabledDayOfWeek(day: number): number[] {
    this._disabledDaysOfWeek = this._disabledDaysOfWeek.filter(d => d !== day);
    return [...this._disabledDaysOfWeek];
  }
  
  /**
   * Get disabled days of the week
   */
  public getDisabledDaysOfWeek(): number[] {
    return [...this._disabledDaysOfWeek];
  }
}
