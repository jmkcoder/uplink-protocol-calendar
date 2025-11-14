import { CalendarStateManager } from "./state-manager";
import { BindingsCoordinator } from "./bindings-coordinator";
import { CalendarControllerBindings } from "../types";
import { IConstraintsService, ICalendarStateService } from "../interfaces";
import { ICalendarService } from "../interfaces";

/**
 * ConstraintsCoordinator - Handles date constraint operations
 * Manages min/max dates, disabled dates, and disabled days of week
 */
export class ConstraintsCoordinator {
  constructor(
    private stateManager: CalendarStateManager,
    private bindingsCoordinator: BindingsCoordinator,
    private constraintsService: IConstraintsService,
    private calendarStateService: ICalendarStateService
  ) {}

  /**
   * Set minimum selectable date
   */
  setMinDate(
    date: Date | null,
    bindings: CalendarControllerBindings,
    getters: any,
    calendarService: ICalendarService
  ): void {
    const gettersObj = typeof getters === 'function' ? getters() : getters;
    this.stateManager.minDate = this.calendarStateService.setMinDate(
      date,
      this.stateManager.minDate,
      this.stateManager.currentDate,
      {
        currentMonth: bindings.currentMonth,
        currentYear: bindings.currentYear,
        monthName: bindings.monthName,
        calendarDays: bindings.calendarDays,
      },
      (month: number) => calendarService.getMonthName(month),
      gettersObj.calendarDays
    );

    this.bindingsCoordinator.updateAllBindings(bindings, gettersObj, {
      calendarDays: true,
    });
  }

  /**
   * Set maximum selectable date
   */
  setMaxDate(
    date: Date | null,
    bindings: CalendarControllerBindings,
    getters: any,
    calendarService: ICalendarService
  ): void {
    const gettersObj = typeof getters === 'function' ? getters() : getters;
    this.stateManager.maxDate = this.calendarStateService.setMaxDate(
      date,
      this.stateManager.maxDate,
      this.stateManager.currentDate,
      {
        currentMonth: bindings.currentMonth,
        currentYear: bindings.currentYear,
        monthName: bindings.monthName,
        calendarDays: bindings.calendarDays,
      },
      (month: number) => calendarService.getMonthName(month),
      gettersObj.calendarDays
    );

    this.bindingsCoordinator.updateAllBindings(bindings, gettersObj, {
      calendarDays: true,
    });
  }

  /**
   * Set disabled dates
   */
  setDisabledDates(
    dates: Date[],
    bindings: CalendarControllerBindings,
    getters: any,
    calendarService: ICalendarService
  ): void {
    const gettersObj = typeof getters === 'function' ? getters() : getters;
    this.stateManager.disabledDates = this.calendarStateService.setDisabledDates(
      dates,
      this.stateManager.currentDate,
      {
        currentMonth: bindings.currentMonth,
        currentYear: bindings.currentYear,
        monthName: bindings.monthName,
        calendarDays: bindings.calendarDays,
      },
      (month: number) => calendarService.getMonthName(month),
      gettersObj.calendarDays
    );

    this.bindingsCoordinator.updateAllBindings(bindings, gettersObj, {
      calendarDays: true,
    });
  }

  /**
   * Add a disabled date
   */
  addDisabledDate(
    date: Date,
    bindings: CalendarControllerBindings,
    getters: any
  ): Date[] {
    if (!date) return this.stateManager.disabledDates;

    const gettersObj = typeof getters === 'function' ? getters() : getters;
    this.stateManager.disabledDates = this.calendarStateService.addDisabledDate(
      date,
      this.stateManager.disabledDates,
      bindings.calendarDays,
      gettersObj.calendarDays
    );

    this.bindingsCoordinator.updateAllBindings(bindings, gettersObj, {
      calendarDays: true,
    });

    return this.stateManager.disabledDates;
  }

  /**
   * Remove a disabled date
   */
  removeDisabledDate(
    date: Date,
    bindings: CalendarControllerBindings,
    getters: any
  ): Date[] {
    if (!date) return this.stateManager.disabledDates;

    const gettersObj = typeof getters === 'function' ? getters() : getters;
    this.stateManager.disabledDates = this.calendarStateService.removeDisabledDate(
      date,
      this.stateManager.disabledDates,
      bindings.calendarDays,
      gettersObj.calendarDays
    );

    this.bindingsCoordinator.updateAllBindings(bindings, gettersObj, {
      calendarDays: true,
    });

    return this.stateManager.disabledDates;
  }

  /**
   * Get disabled dates
   */
  getDisabledDates(): Date[] {
    return [...this.stateManager.disabledDates];
  }

  /**
   * Set disabled days of the week
   */
  setDisabledDaysOfWeek(
    days: number[],
    bindings: CalendarControllerBindings,
    getters: any
  ): number[] {
    this.stateManager.disabledDaysOfWeek = this.constraintsService.setDisabledDaysOfWeek(days);

    // Update the calendar view using bindingsCoordinator
    const gettersObj = typeof getters === 'function' ? getters() : getters;
    this.bindingsCoordinator.updateAllBindings(bindings, gettersObj, {
      calendarDays: true,
    });

    return [...this.stateManager.disabledDaysOfWeek];
  }

  /**
   * Add a disabled day of the week
   */
  addDisabledDayOfWeek(
    day: number,
    bindings: CalendarControllerBindings,
    getters: any
  ): number[] {
    this.stateManager.disabledDaysOfWeek = this.constraintsService.addDisabledDayOfWeek(day);

    // Update the calendar view using bindingsCoordinator
    const gettersObj = typeof getters === 'function' ? getters() : getters;
    this.bindingsCoordinator.updateAllBindings(bindings, gettersObj, {
      calendarDays: true,
    });

    return [...this.stateManager.disabledDaysOfWeek];
  }

  /**
   * Remove a disabled day of the week
   */
  removeDisabledDayOfWeek(
    day: number,
    bindings: CalendarControllerBindings,
    getters: any
  ): number[] {
    this.stateManager.disabledDaysOfWeek = this.constraintsService.removeDisabledDayOfWeek(day);

    // Update the calendar view using bindingsCoordinator
    const gettersObj = typeof getters === 'function' ? getters() : getters;
    this.bindingsCoordinator.updateAllBindings(bindings, gettersObj, {
      calendarDays: true,
    });

    return [...this.stateManager.disabledDaysOfWeek];
  }

  /**
   * Get disabled days of the week
   */
  getDisabledDaysOfWeek(): number[] {
    return this.constraintsService.getDisabledDaysOfWeek();
  }
}

