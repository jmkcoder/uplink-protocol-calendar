/**
 * Helper functions for calendar operations
 */

/**
 * Get the number of days in a month
 * @param year The year
 * @param month The month (0-11)
 * @returns Number of days in the month
 */
export function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

/**
 * Get the first day of the month (0 = Sunday, 1 = Monday, etc.)
 * @param year The year
 * @param month The month (0-11)
 * @returns The day of the week (0-6)
 */
export function getFirstDayOfMonth(year: number, month: number): number {
  return new Date(year, month, 1).getDay();
}

/**
 * Check if two dates represent the same day
 * @param date1 First date
 * @param date2 Second date
 * @returns Boolean indicating if dates are the same day
 */
export function isSameDay(date1: Date, date2: Date): boolean {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}

/**
 * Format a date as a string
 * @param date The date to format
 * @param format Optional format string (defaults to ISO date)
 * @returns Formatted date string
 */
export function formatDate(date: Date, format?: string): string {
  if (!format) {
    return date.toISOString().split('T')[0];
  }

  // Basic formatting support - can be expanded as needed
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();

  return format
    .replace('DD', day)
    .replace('MM', month)
    .replace('YYYY', year.toString())
    .replace('YY', year.toString().slice(-2));
}

/**
 * Get month name from month index
 * @param monthIndex Month index (0-11)
 * @returns Month name
 */
export function getMonthName(monthIndex: number): string {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  return months[monthIndex];
}

/**
 * Get localized weekday names (short format)
 * @param firstDayOfWeek The first day of the week (0 = Sunday, 1 = Monday, etc.)
 * @returns Array of weekday names, starting with the specified first day
 */
export function getWeekdayNames(firstDayOfWeek: number = 0): string[] {
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const rotatedWeekdays = [...weekdays.slice(firstDayOfWeek), ...weekdays.slice(0, firstDayOfWeek)];
  return rotatedWeekdays;
}

/**
 * Check if a date is within a range (inclusive)
 * @param date The date to check
 * @param minDate The minimum date
 * @param maxDate The maximum date
 * @returns Boolean indicating if date is within range
 */
export function isDateInRange(date: Date, minDate: Date | null, maxDate: Date | null): boolean {
  if (minDate && date < minDate) {
    return false;
  }
  if (maxDate && date > maxDate) {
    return false;
  }
  return true;
}
