import { 
  ICalendarService, 
  IDateFormattingService,
  ILocalizationService,
  CalendarOptions
} from '../interfaces';
import { Binding } from '@uplink-protocol/core';
import { CalendarMonth, CalendarYear, CalendarDate } from '../interfaces';

/**
 * Interface for component initialization service
 * Responsible for setting up and initializing calendar components
 */
export interface IInitializationService {
  /**
   * Initialize view state bindings and initial values
   */
  initializeBindings(
    currentDate: Date,
    selectedDate: Date | null,
    selectedDateRange: { startDate: Date | null; endDate: Date | null },
    firstDayOfWeek: number,
    isRangeSelection: boolean,
    calendarDaysGenerator: () => CalendarDate[],
    getMonthNameFn: (month: number) => string,
    getWeekdayNamesFn: (firstDayOfWeek: number) => string[],
    generateCalendarMonthsFn: () => CalendarMonth[],
    generateCalendarYearsFn: () => CalendarYear[]
  ): Record<string, Binding<any>>;
  
  /**
   * Apply calendar configuration options
   */
  applyConfiguration(
    options: CalendarOptions | undefined, 
    locale: string,
    calendarService: ICalendarService,
    dateFormattingService: IDateFormattingService,
    localizationService: ILocalizationService
  ): {
    locale: string;
    minDate: Date | null;
    maxDate: Date | null;
    disabledDates: Date[];
    selectedDate: Date | null;
    firstDayOfWeek: number;
    dateFormat: string | null;
    hideOtherMonthDays: boolean;
    localizationService: ILocalizationService;
  };
}
