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
  }

  /**
   * Navigate to specific year
   */
  public navigateToYear(currentDate: Date, year: number): Date {
    const newDate = new Date(currentDate);
    newDate.setFullYear(year);
    return newDate;
  }

  /**
   * Navigate to specific date
   */
  public navigateToDate(date: Date): Date {
    return new Date(date);
  }

  /**
   * Navigate to today
   */
  public navigateToToday(): Date {
    return new Date();
  }
}
