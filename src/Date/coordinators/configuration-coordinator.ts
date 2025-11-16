import { CalendarOptions } from "../interfaces";
import { CalendarStateManager } from "./state-manager";
import { ConstraintsCoordinator } from "./constraints-coordinator";
import { LocalizationCoordinator } from "./localization-coordinator";
import { CalendarControllerBindings } from "../types";
import { CalendarGetters } from "../types/getters.type";
import { ICalendarService } from "../interfaces";

/**
 * ConfigurationCoordinator
 * Handles all configuration-related operations
 */
export class ConfigurationCoordinator {
  constructor(
    private stateManager: CalendarStateManager,
    private constraintsCoordinator: ConstraintsCoordinator,
    private localizationCoordinator: LocalizationCoordinator,
    private calendarService: ICalendarService
  ) {}

  /**
   * Apply configuration options
   */
  public applyOptions(
    options: CalendarOptions,
    bindings: CalendarControllerBindings,
    getters: CalendarGetters
  ): void {
    if (options.initialSelectedDate) {
      this.stateManager.currentDate = new Date(options.initialSelectedDate);
      this.stateManager.selectedDate = new Date(options.initialSelectedDate);
    }

    if (options.minDate) {
      this.constraintsCoordinator.setMinDate(options.minDate, bindings, getters, this.calendarService);
    }

    if (options.maxDate) {
      this.constraintsCoordinator.setMaxDate(options.maxDate, bindings, getters, this.calendarService);
    }

    if (options.disabledDates) {
      this.constraintsCoordinator.setDisabledDates(options.disabledDates, bindings, getters, this.calendarService);
    }

    if (options.disabledDaysOfWeek) {
      this.constraintsCoordinator.setDisabledDaysOfWeek(options.disabledDaysOfWeek, bindings, getters);
    }

    if (options.firstDayOfWeek !== undefined) {
      this.localizationCoordinator.setFirstDayOfWeek(options.firstDayOfWeek, bindings, getters);
    }

    if (options.locale) {
      this.localizationCoordinator.setLocale(options.locale, bindings, getters, false); // Don't apply defaults during init
    }

    if (options.dateFormat !== undefined) {
      this.localizationCoordinator.setDateFormat(options.dateFormat, bindings, getters);
    }

    if (options.dateFormatOptions !== undefined) {
      this.localizationCoordinator.setDateFormatOptions(options.dateFormatOptions, bindings, getters);
    }

    if (options.isRangeSelection !== undefined) {
      this.stateManager.isRangeSelection = options.isRangeSelection;
    }

    if (options.hideOtherMonthDays !== undefined) {
      this.localizationCoordinator.setHideOtherMonthDays(options.hideOtherMonthDays, bindings, getters);
    }
  }

  /**
   * Set year range size
   */
  public setYearRangeSize(
    size: number
  ): void {
    // Validate size (must be positive)
    if (size > 0) {
      this.stateManager.yearRangeSize = size;
    }
  }

  /**
   * Get year range size
   */
  public getYearRangeSize(): number {
    return this.stateManager.yearRangeSize;
  }

  /**
   * Set range selection mode
   */
  public setRangeSelectionMode(isRange: boolean): void {
    this.stateManager.isRangeSelection = isRange;

    if (!isRange) {
      this.stateManager.selectedDateRange = { startDate: null, endDate: null };
    }
  }

  /**
   * Get range selection mode
   */
  public getRangeSelectionMode(): boolean {
    return this.stateManager.isRangeSelection;
  }
}


