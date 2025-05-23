import { INavigationService } from "../interfaces/navigation.service.interfaces";

/**
 * Implementation of NavigationService
 * Responsible for handling calendar navigation operations
 */
export class NavigationService implements INavigationService {
  /**
   * Navigate to next month
   */
  public navigateToNextMonth(currentDate: Date): Date {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + 1);
    return newDate;
  }

  /**
   * Navigate to previous month
   */
  public navigateToPreviousMonth(currentDate: Date): Date {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() - 1);
    return newDate;
  }

  /**
   * Navigate to next year
   */
  public navigateToNextYear(currentDate: Date): Date {
    const newDate = new Date(currentDate);
    newDate.setFullYear(currentDate.getFullYear() + 1);
    return newDate;
  }

  /**
   * Navigate to previous year
   */
  public navigateToPreviousYear(currentDate: Date): Date {
    const newDate = new Date(currentDate);
    newDate.setFullYear(currentDate.getFullYear() - 1);
    return newDate;
  }

  /**
   * Navigate to specific month
   */
  public navigateToMonth(currentDate: Date, month: number): Date {
    if (month < 0 || month > 11) return currentDate; // Invalid month
    const newDate = new Date(currentDate);
    newDate.setMonth(month);
    return newDate;
  }  /**
   * Navigate to specific year
   */
  public navigateToYear(currentDate: Date, year: number): Date {
    const newDate = new Date(currentDate);
    
    // Check if it's February 29 in a leap year
    const isLeapYearDate = currentDate.getMonth() === 1 && currentDate.getDate() === 29;
    
    // Check if the target year is not a leap year
    const isTargetYearLeapYear = ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
    
    // If it's Feb 29 and the target year is not a leap year, adjust to Feb 28
    if (isLeapYearDate && !isTargetYearLeapYear) {
      newDate.setDate(28); // Change to February 28
    }
    
    newDate.setFullYear(year);
    return newDate;
  }

  /**
   * Navigate to specific year range
   * @param currentYear The current year
   * @param rangeSize The number of years in the range
   * @param direction Direction to navigate (1 for next range, -1 for previous range)
   * @returns The new base year for the range
   */
  public navigateToYearRange(currentYear: number, rangeSize: number, direction: number): number {
    // Calculate the current base year (starting year of the current range)
    const currentBaseYear = currentYear - (currentYear % rangeSize);
    
    // Calculate the new base year based on the direction
    const newBaseYear = currentBaseYear + (direction * rangeSize);
    
    return newBaseYear;
  }
    /**
   * Navigate to specific date
   * @param currentDate The current date (optional)
   * @param targetDate The target date to navigate to
   */
  public navigateToDate(currentDate: Date | null, targetDate?: Date): Date {
    // If only one parameter is provided, use it as the target date
    if (targetDate === undefined) {
      targetDate = currentDate as Date;
      return new Date(targetDate);
    }
    
    // If both parameters are provided, use the second one
    return new Date(targetDate);
  }

  /**
   * Navigate to today
   */
  public navigateToToday(): Date {
    return new Date();
  }
}
