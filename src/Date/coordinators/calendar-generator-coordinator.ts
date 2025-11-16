import { CalendarStateManager } from "./state-manager";
import {
  CalendarDate,
  CalendarMonth,
  CalendarYear,
  CalendarGenerationOptions,
  MonthViewGenerationOptions,
  YearViewGenerationOptions,
  ICalendarGeneratorService,
} from "../interfaces";

/**
 * CalendarGeneratorCoordinator - Handles calendar view generation
 */
export class CalendarGeneratorCoordinator {
  constructor(
    private stateManager: CalendarStateManager,
    private calendarGeneratorService: ICalendarGeneratorService
  ) {}

  /**
   * Generate calendar days for current month view
   */
  generateCalendarDays(isDateDisabledFn: (date: Date) => boolean): CalendarDate[] {
    const year = this.stateManager.currentDate.getFullYear();
    const month = this.stateManager.currentDate.getMonth();

    const options: CalendarGenerationOptions = {
      selectedDate: this.stateManager.selectedDate,
      selectedDateRange: this.stateManager.selectedDateRange,
      focusedDate: this.stateManager.focusedDate,
      firstDayOfWeek: this.stateManager.firstDayOfWeek,
      minDate: this.stateManager.minDate,
      maxDate: this.stateManager.maxDate,
      disabledDates: this.stateManager.disabledDates,
      disabledDaysOfWeek: this.stateManager.disabledDaysOfWeek,
      isRangeSelection: this.stateManager.isRangeSelection,
      isDateDisabledFn,
      hideOtherMonthDays: this.stateManager.hideOtherMonthDays,
    };

    return this.calendarGeneratorService.generateCalendarDays(year, month, options);
  }

  /**
   * Generate calendar months for year view
   */
  generateCalendarMonths(): CalendarMonth[] {
    const year = this.stateManager.currentDate.getFullYear();

    const options: MonthViewGenerationOptions = {
      selectedDate: this.stateManager.selectedDate,
      selectedDateRange: this.stateManager.selectedDateRange,
      isRangeSelection: this.stateManager.isRangeSelection,
      currentDate: this.stateManager.currentDate,
      minDate: this.stateManager.minDate,
      maxDate: this.stateManager.maxDate,
      isMonthDisabledFn: (year, month) => {
        const firstDayOfMonth = new Date(year, month, 1);
        const lastDayOfMonth = new Date(year, month + 1, 0);

        if (this.stateManager.minDate && lastDayOfMonth < this.stateManager.minDate) {
          return true;
        }

        if (this.stateManager.maxDate && firstDayOfMonth > this.stateManager.maxDate) {
          return true;
        }

        return false;
      },
    };

    return this.calendarGeneratorService.generateCalendarMonths(year, options);
  }

  /**
   * Generate calendar years for year range view
   */
  generateCalendarYears(isYearDisabledFn: (year: number) => boolean): CalendarYear[] {
    const baseYear =
      this.stateManager.currentDate.getFullYear() -
      (this.stateManager.currentDate.getFullYear() % this.stateManager.yearRangeSize);

    const options: YearViewGenerationOptions = {
      selectedDate: this.stateManager.selectedDate,
      selectedDateRange: this.stateManager.selectedDateRange,
      isRangeSelection: this.stateManager.isRangeSelection,
      currentDate: this.stateManager.currentDate,
      minDate: this.stateManager.minDate,
      maxDate: this.stateManager.maxDate,
      isYearDisabledFn,
    };

    return this.calendarGeneratorService.generateCalendarYears(
      baseYear,
      this.stateManager.yearRangeSize,
      options
    );
  }

  /**
   * Generate month view (wrapper for backward compatibility)
   */
  generateMonthView(): CalendarDate[] {
    return this.generateCalendarDays((_date: Date) => {
      // This would need the isDateDisabled logic, but it's circular
      // In practice, this should be called with the function passed in
      return false;
    });
  }
}

