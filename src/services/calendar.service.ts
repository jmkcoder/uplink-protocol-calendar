import { CalendarDate } from '../interfaces/calendar.interfaces';
import { CalendarGenerationOptions } from '../interfaces/calendar.service.interfaces';
import { ICalendarService } from '../interfaces/calendar.service.interfaces';
import { ILocalizationService } from '../interfaces/localization.service.interfaces';
import { 
  getDaysInMonth, 
  getFirstDayOfMonth, 
  isSameDay 
} from '../utils/calendar.utils';

/**
 * Implementation of CalendarService 
 * Responsible for calendar generation and navigation functions
 */
export class CalendarService implements ICalendarService {
  private _localizationService: ILocalizationService | null = null;

  /**
   * Set the localization service
   * @param service The localization service to use
   */
  public setLocalizationService(service: ILocalizationService): void {
    this._localizationService = service;
  }
  
  /**
   * Get the localization service
   * @returns The current localization service or null
   */
  public getLocalizationService(): ILocalizationService | null {
    return this._localizationService;
  }
  /**
   * Generate calendar days for a specific month/year
   * @param year The year
   * @param month The month (0-11)
   * @param options Options for calendar generation
   * @returns Array of CalendarDate objects
   */
  public generateCalendarDays(
    year: number, 
    month: number, 
    options: CalendarGenerationOptions
  ): CalendarDate[] {
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    
    const today = new Date();
    const days: CalendarDate[] = [];
    
    // Calculate days needed from previous month
    let prevMonthDays = (firstDay - options.firstDayOfWeek + 7) % 7;
    
    // Add days from previous month
    if (prevMonthDays > 0) {
      const prevMonth = month === 0 ? 11 : month - 1;
      const prevYear = month === 0 ? year - 1 : year;
      const daysInPrevMonth = getDaysInMonth(prevYear, prevMonth);
      
      for (let i = 0; i < prevMonthDays; i++) {
        const day = daysInPrevMonth - prevMonthDays + i + 1;
        const date = new Date(prevYear, prevMonth, day);
        
        days.push(this.createCalendarDateObject(
          date, 
          false, 
          today, 
          options
        ));
      }
    }
    
    // Add days from current month
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, month, i);
      days.push(this.createCalendarDateObject(
        date, 
        true, 
        today, 
        options
      ));
    }
    
    // Calculate remaining days needed to complete the grid (6 rows x 7 days = 42)
    const remainingDays = 42 - days.length;
    
    // Add days from next month
    if (remainingDays > 0) {
      const nextMonth = month === 11 ? 0 : month + 1;
      const nextYear = month === 11 ? year + 1 : year;
      
      for (let i = 1; i <= remainingDays; i++) {
        const date = new Date(nextYear, nextMonth, i);
        days.push(this.createCalendarDateObject(
          date, 
          false, 
          today, 
          options
        ));
      }
    }
    
    return days;
  }

  /**
   * Create a calendar date object with the correct properties
   * @param date The date
   * @param isCurrentMonth Whether this date is in the current month
   * @param today Today's date
   * @param options Options for calendar generation
   * @returns CalendarDate object
   */
  private createCalendarDateObject(
    date: Date,
    isCurrentMonth: boolean,
    today: Date,
    options: CalendarGenerationOptions
  ): CalendarDate {
    const isSelected = options.selectedDate ? isSameDay(date, options.selectedDate) : false;
    let isInRange = false;
    let isRangeStart = false;
    let isRangeEnd = false;
    
    if (options.isRangeSelection && 
        options.selectedDateRange.startDate && 
        options.selectedDateRange.endDate) {
      // Check if this date is in the selected range
      const start = options.selectedDateRange.startDate;
      const end = options.selectedDateRange.endDate;
      
      if (start && end) {
        isInRange = date >= start && date <= end;
        isRangeStart = isSameDay(date, start);
        isRangeEnd = isSameDay(date, end);
      }
    }
    
    return {
      day: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear(),
      isCurrentMonth,
      isToday: isSameDay(date, today),
      isSelected,
      isInRange,
      isRangeStart,
      isRangeEnd,
      isDisabled: options.isDateDisabledFn(date)
    };
  }
    /**
   * Get month name from month index
   * @param month Month index (0-11)
   * @returns Month name
   */
  public getMonthName(month: number): string {
    // Use localization service if available
    if (this._localizationService) {
      const monthNames = this._localizationService.getMonthNames();
      return monthNames[month];
    }
    
    // Fallback to English
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return months[month];
  }
  
  /**
   * Get weekday names starting from specified first day
   * @param firstDayOfWeek First day of week (0 = Sunday, 1 = Monday, etc.)
   * @returns Array of weekday names
   */
  public getWeekdayNames(firstDayOfWeek: number): string[] {
    let weekdays: string[];
    
    // Use localization service if available
    if (this._localizationService) {
      weekdays = this._localizationService.getShortWeekdayNames();
    } else {
      // Fallback to English
      weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    }
    
    // Reorder weekdays based on firstDayOfWeek
    return [...weekdays.slice(firstDayOfWeek), ...weekdays.slice(0, firstDayOfWeek)];
  }
  
  /**
   * Navigate to next month from current date
   * @param currentDate Current date
   * @returns New date in the next month
   */
  public getNextMonth(currentDate: Date): Date {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + 1);
    return newDate;
  }
  
  /**
   * Navigate to previous month from current date
   * @param currentDate Current date
   * @returns New date in the previous month
   */
  public getPreviousMonth(currentDate: Date): Date {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() - 1);
    return newDate;
  }
  
  /**
   * Navigate to next year from current date
   * @param currentDate Current date
   * @returns New date in the next year
   */
  public getNextYear(currentDate: Date): Date {
    const newDate = new Date(currentDate);
    newDate.setFullYear(newDate.getFullYear() + 1);
    return newDate;
  }
  
  /**
   * Navigate to previous year from current date
   * @param currentDate Current date
   * @returns New date in the previous year
   */
  public getPreviousYear(currentDate: Date): Date {
    const newDate = new Date(currentDate);
    newDate.setFullYear(newDate.getFullYear() - 1);
    return newDate;
  }
}
