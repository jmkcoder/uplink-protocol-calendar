import { INavigationService, YearRange } from "../interfaces";
import { CalendarStateManager } from "./state-manager";
import { BindingsCoordinator } from "./bindings-coordinator";
import { CalendarControllerBindings, CalendarControllerEvents } from "../types";
import { ICalendarService } from "../interfaces";
import { IEventManagerService } from "../interfaces";

/**
 * NavigationCoordinator - Handles all navigation-related operations
 * Manages navigation between months, years, and dates
 */
export class NavigationCoordinator {
  constructor(
    private navigationService: INavigationService,
    private stateManager: CalendarStateManager,
    private bindingsCoordinator: BindingsCoordinator
  ) {}

  /**
   * Navigate to a specific month
   */
  goToMonth(
    month: number,
    year: number,
    bindings: CalendarControllerBindings,
    events: CalendarControllerEvents,
    getters: any,
    calendarService: ICalendarService,
    eventManagerService: IEventManagerService
  ): void {
    // Simply set the current date to the first day of the specified month/year
    this.stateManager.currentDate = new Date(year, month, 1);
    this.updateCurrentDate(this.stateManager.currentDate, bindings, events, getters, calendarService, eventManagerService);
  }

  /**
   * Navigate to a specific year
   */
  goToYear(
    year: number,
    bindings: CalendarControllerBindings,
    events: CalendarControllerEvents,
    getters: any,
    calendarService: ICalendarService,
    eventManagerService: IEventManagerService
  ): void {
    this.stateManager.currentDate = this.navigationService.navigateToYear(
      this.stateManager.currentDate,
      year
    );
    this.updateCurrentDate(this.stateManager.currentDate, bindings, events, getters, calendarService, eventManagerService);
  }

  /**
   * Navigate to a specific date
   */
  goToDate(
    date: Date,
    minDate: Date | null,
    maxDate: Date | null,
    bindings: CalendarControllerBindings,
    events: CalendarControllerEvents,
    getters: any,
    calendarService: ICalendarService,
    eventManagerService: IEventManagerService
  ): void {
    // Check if the target date violates constraints
    if (minDate && date < minDate) {
      return;
    }
    
    if (maxDate && date > maxDate) {
      return;
    }
    
    this.stateManager.currentDate = this.navigationService.navigateToDate(date);
    this.updateCurrentDate(this.stateManager.currentDate, bindings, events, getters, calendarService, eventManagerService);
  }

  /**
   * Navigate to next month
   */
  goToNextMonth(
    bindings: CalendarControllerBindings,
    events: CalendarControllerEvents,
    getters: any,
    calendarService: ICalendarService,
    eventManagerService: IEventManagerService
  ): void {
    this.stateManager.currentDate = this.navigationService.navigateToNextMonth(
      this.stateManager.currentDate
    );
    
    // Update focused date to maintain focus during navigation
    if (this.stateManager.focusedDate) {
      this.stateManager.focusedDate = this.navigationService.navigateToNextMonth(
        this.stateManager.focusedDate
      );
    }
    
    this.updateCurrentDate(this.stateManager.currentDate, bindings, events, getters, calendarService, eventManagerService);
  }

  /**
   * Navigate to previous month
   */
  goToPreviousMonth(
    bindings: CalendarControllerBindings,
    events: CalendarControllerEvents,
    getters: any,
    calendarService: ICalendarService,
    eventManagerService: IEventManagerService
  ): void {
    this.stateManager.currentDate = this.navigationService.navigateToPreviousMonth(
      this.stateManager.currentDate
    );
    
    // Update focused date to maintain focus during navigation
    if (this.stateManager.focusedDate) {
      this.stateManager.focusedDate = this.navigationService.navigateToPreviousMonth(
        this.stateManager.focusedDate
      );
    }
    
    this.updateCurrentDate(this.stateManager.currentDate, bindings, events, getters, calendarService, eventManagerService);
  }

  /**
   * Navigate to next year
   */
  goToNextYear(
    bindings: CalendarControllerBindings,
    events: CalendarControllerEvents,
    getters: any,
    calendarService: ICalendarService,
    eventManagerService: IEventManagerService
  ): void {
    this.stateManager.currentDate = this.navigationService.navigateToNextYear(
      this.stateManager.currentDate
    );
    
    // Update focused date to maintain focus during navigation
    if (this.stateManager.focusedDate) {
      this.stateManager.focusedDate = this.navigationService.navigateToNextYear(
        this.stateManager.focusedDate
      );
    }
    
    this.updateCurrentDate(this.stateManager.currentDate, bindings, events, getters, calendarService, eventManagerService);
  }

  /**
   * Navigate to previous year
   */
  goToPreviousYear(
    bindings: CalendarControllerBindings,
    events: CalendarControllerEvents,
    getters: any,
    calendarService: ICalendarService,
    eventManagerService: IEventManagerService
  ): void {
    this.stateManager.currentDate = this.navigationService.navigateToPreviousYear(
      this.stateManager.currentDate
    );
    
    // Update focused date to maintain focus during navigation
    if (this.stateManager.focusedDate) {
      this.stateManager.focusedDate = this.navigationService.navigateToPreviousYear(
        this.stateManager.focusedDate
      );
    }
    
    this.updateCurrentDate(this.stateManager.currentDate, bindings, events, getters, calendarService, eventManagerService);
  }

  /**
   * Navigate to today's date
   */
  goToToday(
    bindings: CalendarControllerBindings,
    events: CalendarControllerEvents,
    getters: any,
    calendarService: ICalendarService,
    eventManagerService: IEventManagerService
  ): void {
    this.stateManager.currentDate = this.navigationService.navigateToToday();
    this.updateCurrentDate(this.stateManager.currentDate, bindings, events, getters, calendarService, eventManagerService);
  }

  /**
   * Navigate to next year range
   */
  goToNextYearRange(
    bindings: CalendarControllerBindings,
    events: CalendarControllerEvents,
    getters: any,
    eventManagerService: IEventManagerService
  ): void {
    this.stateManager.currentYearRangeBase += this.stateManager.yearRangeSize;
    
    this.bindingsCoordinator.updateAllBindings(bindings, getters, {
      calendarYears: true,
      currentYearRangeBase: true,
    });

    if (events?.yearRangeChanged) {
      eventManagerService.emitYearRangeChanged(
        events.yearRangeChanged,
        {
          startYear: this.stateManager.currentYearRangeBase,
          endYear: this.stateManager.currentYearRangeBase + this.stateManager.yearRangeSize - 1,
        }
      );
    }
  }

  /**
   * Navigate to previous year range
   */
  goToPreviousYearRange(
    bindings: CalendarControllerBindings,
    events: CalendarControllerEvents,
    getters: any,
    eventManagerService: IEventManagerService
  ): void {
    this.stateManager.currentYearRangeBase = Math.max(
      0,
      this.stateManager.currentYearRangeBase - this.stateManager.yearRangeSize
    );
    
    this.bindingsCoordinator.updateAllBindings(bindings, getters, {
      calendarYears: true,
      currentYearRangeBase: true,
    });

    if (events?.yearRangeChanged) {
      eventManagerService.emitYearRangeChanged(
        events.yearRangeChanged,
        {
          startYear: this.stateManager.currentYearRangeBase,
          endYear: this.stateManager.currentYearRangeBase + this.stateManager.yearRangeSize - 1,
        }
      );
    }
  }

  /**
   * Get current year range
   */
  getCurrentYearRange(): YearRange {
    if (this.stateManager.currentYearRangeBase) {
      return {
        startYear: this.stateManager.currentYearRangeBase,
        endYear: this.stateManager.currentYearRangeBase + this.stateManager.yearRangeSize - 1,
      };
    }

    const yearRange = this.getYearRangeBase(this.stateManager.currentDate);
    return yearRange;
  }

  /**
   * Set current year range based on date
   */
  setCurrentYearRange(
    date: Date,
    bindings: CalendarControllerBindings,
    getters: any
  ): void {
    this.stateManager.currentYearRangeBase = this.getYearRangeBase(date).startYear;
    
    this.bindingsCoordinator.updateAllBindings(bindings, getters, {
      calendarYears: true,
      currentYearRangeBase: true,
    });
  }

  /**
   * Set year range size
   */
  setYearRangeSize(
    size: number,
    bindings: CalendarControllerBindings,
    getters: any
  ): void {
    if (size < 1) return; // Invalid size

    this.stateManager.yearRangeSize = size;
    this.stateManager.currentYearRangeBase =
      this.stateManager.currentDate.getFullYear() -
      (this.stateManager.currentDate.getFullYear() % this.stateManager.yearRangeSize);

    if (bindings.calendarYears) {
      bindings.calendarYears.set(getters.calendarYears());
    }
  }

  /**
   * Get year range base for a given date
   */
  private getYearRangeBase(date: Date): YearRange {
    const baseYear = date.getFullYear() - (date.getFullYear() % this.stateManager.yearRangeSize);
    return {
      startYear: baseYear,
      endYear: baseYear + this.stateManager.yearRangeSize - 1,
    };
  }

  /**
   * Update current date and related bindings
   */
  updateCurrentDate(
    date: Date,
    bindings: CalendarControllerBindings,
    events: CalendarControllerEvents,
    getters: any,
    calendarService: ICalendarService,
    eventManagerService: IEventManagerService
  ): void {
    this.stateManager.currentDate = date;

    // Update year range base when year changes
    const newBase = date.getFullYear() - (date.getFullYear() % this.stateManager.yearRangeSize);
    if (newBase !== 0) {
      this.stateManager.currentYearRangeBase = newBase;
    }

    const month = date.getMonth();
    const year = date.getFullYear();

    const gettersObj = typeof getters === 'function' ? getters() : getters;

    // Update month name binding
    if (bindings.monthName) {
      bindings.monthName.set(calendarService.getMonthName(month));
    }

    // Update current date bindings
    if (bindings.currentDate) {
      bindings.currentDate.set(date);
    }
    
    if (bindings.currentMonth) {
      bindings.currentMonth.set(month);
    }

    if (bindings.currentYear) {
      bindings.currentYear.set(year);
    }

    // Update calendar days
    if (bindings.calendarDays) {
      bindings.calendarDays.set(gettersObj.calendarDays());
    }

    // Emit events
    if (events) {
      if (events.monthChanged) {
        eventManagerService.emitMonthChanged(events.monthChanged, month);
      }
      if (events.yearChanged) {
        eventManagerService.emitYearChanged(events.yearChanged, year);
      }
      if (events.viewChanged) {
        eventManagerService.emitViewChanged(events.viewChanged, { month, year });
      }
    }
  }
}



