/**
 * Test utility functions and common test data
 */

/**
 * Create a date without time components for consistent testing
 * @param year The year
 * @param month The month (0-11)
 * @param day The day
 * @returns Date object with time set to midnight
 */
export function createDate(year: number, month: number, day: number): Date {
  const date = new Date(year, month, day);
  date.setHours(0, 0, 0, 0);
  return date;
}

/**
 * Mock date implementation for consistent date testing
 */
export function mockDate(mockDate: Date) {
  const originalDate = global.Date;
  
  class MockDate extends Date {
    constructor(...args: any[]) {
      if (args.length === 0) {
        super(mockDate);
      } else {
        super(...args);
      }
    }
    
    static now() {
      return mockDate.getTime();
    }
  }
  
  global.Date = MockDate as DateConstructor;
  
  return () => {
    global.Date = originalDate;
  };
}

/**
 * Sample test dates for reuse across tests
 */
export const testDates = {
  present: createDate(2025, 4, 21),  // May 21, 2025
  past: createDate(2024, 2, 15),     // March 15, 2024
  future: createDate(2026, 0, 10),   // January 10, 2026
  leapDay: createDate(2024, 1, 29),  // February 29, 2024
  monthEnd: createDate(2025, 3, 30), // April 30, 2025
  yearEnd: createDate(2025, 11, 31)  // December 31, 2025
};
