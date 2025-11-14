import { CalendarStateManager } from "./state-manager";
import { BindingsCoordinator } from "./bindings-coordinator";
import { NavigationCoordinator } from "./navigation-coordinator";
import { CalendarControllerBindings, CalendarControllerEvents } from "../types";
import { ICalendarStateService, IEventManagerService, ICalendarService } from "../interfaces";

/**
 * SelectionCoordinator - Handles date selection operations
 * Manages single date and range selection logic
 */
export class SelectionCoordinator {
  private navigationCoordinator?: NavigationCoordinator;

  constructor(
    private stateManager: CalendarStateManager,
    private bindingsCoordinator: BindingsCoordinator,
    private calendarStateService: ICalendarStateService
  ) {}

  /**
   * Set navigation coordinator (to avoid circular dependency)
   */
  setNavigationCoordinator(navigationCoordinator: NavigationCoordinator): void {
    this.navigationCoordinator = navigationCoordinator;
  }

  /**
   * Select a date
   */
  selectDate(
    yearOrDate: number | Date,
    month: number | undefined,
    day: number | undefined,
    bindings: CalendarControllerBindings,
    events: CalendarControllerEvents,
    getters: any,
    isDateDisabledFn: (date: Date) => boolean,
    eventManagerService: IEventManagerService
  ): void {
    let date: Date;
    
    // Handle both overloads: (Date) or (year, month, day)
    if (yearOrDate instanceof Date) {
      date = new Date(yearOrDate);
    } else if (typeof yearOrDate === 'number' && month !== undefined && day !== undefined) {
      date = new Date(yearOrDate, month, day);
    } else {
      throw new Error('Invalid selectDate parameters. Use either selectDate(date) or selectDate(year, month, day)');
    }

    const gettersObj = typeof getters === 'function' ? getters() : getters;
    const result = this.calendarStateService.selectDate(
      date,
      this.stateManager.isRangeSelection,
      this.stateManager.selectedDate,
      this.stateManager.selectedDateRange,
      isDateDisabledFn,
      {
        selectedDate: bindings.selectedDate,
        selectedDateRange: bindings.selectedDateRange,
        focusedDate: bindings.focusedDate,
        calendarDays: bindings.calendarDays,
      },
      events,
      gettersObj.calendarDays
    );

    this.stateManager.selectedDate = result.selectedDate;
    this.stateManager.selectedDateRange = result.selectedDateRange;

    // Set focus to the selected date
    if (this.stateManager.selectedDate) {
      this.stateManager.focusedDate = new Date(this.stateManager.selectedDate);
    }

    this.bindingsCoordinator.updateAllBindings(bindings, gettersObj, {
      selectedDate: true,
      selectedDateRange: true,
      focusedDate: true,
      calendarDays: true,
    });

    if (events?.dateSelected) {
      eventManagerService.emitDateSelected(events.dateSelected, date);
    }
  }

  /**
   * Set range selection mode
   */
  setRangeSelectionMode(
    isRange: boolean,
    bindings: CalendarControllerBindings,
    getters: any
  ): void {
    this.stateManager.isRangeSelection = this.calendarStateService.setRangeSelectionMode(
      isRange,
      bindings.isRangeSelection,
      bindings.calendarDays,
      getters.calendarDays
    );
    this.clearSelection(bindings, getters);
  }

  /**
   * Clear current selection
   */
  clearSelection(
    bindings: CalendarControllerBindings,
    getters: any
  ): void {
    const result = this.calendarStateService.clearSelection(
      this.stateManager.isRangeSelection,
      bindings.selectedDate,
      bindings.selectedDateRange,
      bindings.calendarDays,
      getters.calendarDays
    );

    this.stateManager.selectedDate = result.selectedDate;
    this.stateManager.selectedDateRange = result.selectedDateRange;

    this.bindingsCoordinator.updateAllBindings(bindings, getters, {
      selectedDate: true,
      selectedDateRange: true,
      calendarDays: true,
    });
  }

  /**
   * Select month (navigate to month view)
   * Delegates to NavigationCoordinator to avoid duplication
   */
  selectMonth(
    month: number,
    year: number,
    bindings: CalendarControllerBindings,
    events: CalendarControllerEvents,
    getters: any,
    calendarService: ICalendarService,
    eventManagerService: IEventManagerService
  ): void {
    if (!this.navigationCoordinator) {
      throw new Error('NavigationCoordinator not set. Call setNavigationCoordinator first.');
    }
    
    // Delegate to NavigationCoordinator.goToMonth to avoid duplication
    this.navigationCoordinator.goToMonth(
      month,
      year,
      bindings,
      events,
      getters,
      calendarService,
      eventManagerService
    );
  }

  /**
   * Select year (navigate to year view)
   */
  selectYear(
    year: number,
    bindings: CalendarControllerBindings,
    events: CalendarControllerEvents,
    getters: any,
    navigationService: any,
    eventManagerService: IEventManagerService
  ): void {
    this.stateManager.currentDate = navigationService.navigateToYear(
      this.stateManager.currentDate,
      year
    );

    if (bindings.currentYear) {
      bindings.currentYear.set(year);
    }

    this.bindingsCoordinator.updateAllBindings(bindings, getters, {
      currentDate: true,
      calendarDays: true,
    });

    if (events?.yearChanged) {
      eventManagerService.emitYearChanged(events.yearChanged, year);
    }

    if (bindings.calendarMonths && typeof getters.calendarMonths === 'function') {
      bindings.calendarMonths.set(getters.calendarMonths());
    }
  }
}

