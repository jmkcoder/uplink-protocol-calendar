/**
 * Navigation service interface
 * Responsible for handling calendar navigation operations
 */
export interface INavigationService {
  /**
   * Navigate to next month
   */
  navigateToNextMonth(currentDate: Date): Date;

  /**
   * Navigate to previous month
   */
  navigateToPreviousMonth(currentDate: Date): Date;

  /**
   * Navigate to next year
   */
  navigateToNextYear(currentDate: Date): Date;

  /**
   * Navigate to previous year
   */
  navigateToPreviousYear(currentDate: Date): Date;

  /**
   * Navigate to specific month
   */
  navigateToMonth(currentDate: Date, month: number): Date;

  /**
   * Navigate to specific year
   */
  navigateToYear(currentDate: Date, year: number): Date;

  /**
   * Navigate to specific date
   */
  navigateToDate(date: Date): Date;

  /**
   * Navigate to today
   */
  navigateToToday(): Date;
}
