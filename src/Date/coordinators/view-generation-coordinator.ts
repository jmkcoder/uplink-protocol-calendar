import {
  CalendarDate,
  CalendarMonth,
  CalendarYear,
  CalendarGenerationOptions,
  MonthViewGenerationOptions,
  YearViewGenerationOptions,
  ICalendarGeneratorService,
  DateRange,
} from "../interfaces";

/**
 * ViewGenerationCoordinator
 * Handles all calendar view generation logic (days, months, years)
 */
export class ViewGenerationCoordinator {
  constructor(
    private calendarGeneratorService: ICalendarGeneratorService,
    private getState: () => {
      currentDate: Date;
      selectedDate: Date | null;
      selectedDateRange: DateRange;
      focusedDate: Date | null;
      firstDayOfWeek: number;
      minDate: Date | null;
      maxDate: Date | null;
      disabledDates: Date[];
      disabledDaysOfWeek: number[];
      isRangeSelection: boolean;
      hideOtherMonthDays: boolean;
      currentYearRangeBase: number;
      yearRangeSize: number;
    },
    private isDateDisabledFn: (date: Date) => boolean
  ) {}

  /**
   * Generate calendar days for current month view
   */
  public generateCalendarDays(
    currentDate: Date,
    selectedDate: Date | null,
    selectedDateRange: DateRange,
    focusedDate: Date | null,
    firstDayOfWeek: number,
    minDate: Date | null,
    maxDate: Date | null,
    disabledDates: Date[],
    disabledDaysOfWeek: number[],
    isRangeSelection: boolean,
    hideOtherMonthDays: boolean,
    isDateDisabledFn: (date: Date) => boolean
  ): CalendarDate[] {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const options: CalendarGenerationOptions = {
      selectedDate,
      selectedDateRange,
      focusedDate,
      firstDayOfWeek,
      minDate,
      maxDate,
      disabledDates,
      disabledDaysOfWeek,
      isRangeSelection,
      isDateDisabledFn,
      hideOtherMonthDays,
    };

    return this.calendarGeneratorService.generateCalendarDays(
      year,
      month,
      options
    );
  }

  /**
   * Generate calendar months for year view
   */
  public generateCalendarMonths(
    currentDate: Date,
    selectedDate: Date | null,
    selectedDateRange: DateRange,
    isRangeSelection: boolean,
    minDate: Date | null,
    maxDate: Date | null
  ): CalendarMonth[] {
    const year = currentDate.getFullYear();

    const options: MonthViewGenerationOptions = {
      selectedDate,
      selectedDateRange,
      isRangeSelection,
      currentDate,
      minDate,
      maxDate,
      isMonthDisabledFn: (year, month) => {
        const firstDayOfMonth = new Date(year, month, 1);
        const lastDayOfMonth = new Date(year, month + 1, 0);

        if (minDate && lastDayOfMonth < minDate) {
          return true;
        }

        if (maxDate && firstDayOfMonth > maxDate) {
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
  public generateCalendarYears(
    currentDate: Date,
    currentYearRangeBase: number,
    yearRangeSize: number,
    selectedDate: Date | null,
    selectedDateRange: DateRange,
    isRangeSelection: boolean,
    minDate: Date | null,
    maxDate: Date | null
  ): CalendarYear[] {
    const baseYear =
      currentYearRangeBase ||
      currentDate.getFullYear() -
        (currentDate.getFullYear() % yearRangeSize);

    const options: YearViewGenerationOptions = {
      selectedDate,
      selectedDateRange,
      isRangeSelection,
      currentDate,
      minDate,
      maxDate,
      isYearDisabledFn: (year) => {
        const firstDayOfYear = new Date(year, 0, 1);
        const lastDayOfYear = new Date(year, 11, 31);

        if (minDate && lastDayOfYear < minDate) {
          return true;
        }

        if (maxDate && firstDayOfYear > maxDate) {
          return true;
        }

        return false;
      },
    };

    return this.calendarGeneratorService.generateCalendarYears(
      baseYear,
      yearRangeSize,
      options
    );
  }

  /**
   * Generate complete month view (structured with weeks)
   */
  public generateMonthView(): {
    month: number;
    year: number;
    weeks: { days: CalendarDate[]; weekNumber?: number }[];
    weekdays: string[];
  } {
    const state = this.getState();
    const year = state.currentDate.getFullYear();
    const month = state.currentDate.getMonth();

    const options: CalendarGenerationOptions = {
      selectedDate: state.selectedDate,
      selectedDateRange: state.selectedDateRange,
      focusedDate: state.focusedDate,
      firstDayOfWeek: state.firstDayOfWeek,
      minDate: state.minDate,
      maxDate: state.maxDate,
      disabledDates: state.disabledDates,
      disabledDaysOfWeek: state.disabledDaysOfWeek,
      isRangeSelection: state.isRangeSelection,
      isDateDisabledFn: this.isDateDisabledFn,
      hideOtherMonthDays: state.hideOtherMonthDays,
    };

    return this.calendarGeneratorService.generateMonthView(year, month, options);
  }

  /**
   * Generate complete year view (all months)
   */
  public generateYearView(): {
    months: CalendarMonth[];
    year: number;
  } {
    const state = this.getState();
    const year = state.currentDate.getFullYear();

    const options: YearViewGenerationOptions = {
      selectedDate: state.selectedDate,
      selectedDateRange: state.selectedDateRange,
      isRangeSelection: state.isRangeSelection,
      currentDate: state.currentDate,
      minDate: state.minDate,
      maxDate: state.maxDate,
    };

    return this.calendarGeneratorService.generateYearView(year, options);
  }

  /**
   * Get week number for a date
   */
  public getWeekNumber(date: Date): number {
    return this.calendarGeneratorService.getWeekNumber(date);
  }
}

