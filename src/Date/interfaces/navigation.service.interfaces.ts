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
   * Navigate to specific year range
   * @param currentYear The current year
   * @param rangeSize The number of years in the range
   * @param direction Direction to navigate (1 for next range, -1 for previous range)
   * @returns The new base year for the range
   */
  navigateToYearRange(currentYear: number, rangeSize: number, direction: number): number;  /**
   * Navigate to specific date
   * @param currentDate The current date or target date if only one parameter is provided
   * @param targetDate The target date to navigate to (optional)
   */
  navigateToDate(currentDate: Date | null, targetDate?: Date): Date;

  /**
   * Navigate to today
   * @param currentDate The current date (optional)
   */
  navigateToToday(currentDate?: Date): Date;
}
