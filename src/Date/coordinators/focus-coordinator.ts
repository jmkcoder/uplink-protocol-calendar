import { CalendarStateManager } from "./state-manager";
import { CalendarControllerBindings } from "../types";
import { CalendarGetters } from "../types/getters.type";
import { IAccessibilityManagerService } from "../interfaces";

// Helper to extract getters object
const getGettersObj = (getters: CalendarGetters): CalendarGetters => getters;

/**
 * FocusCoordinator - Handles focus and keyboard navigation
 * Manages focus state and keyboard-based navigation for accessibility
 */
export class FocusCoordinator {
  constructor(
    private stateManager: CalendarStateManager,
    private accessibilityService: IAccessibilityManagerService
  ) {}

  focusDate(
    date: Date,
    bindings: CalendarControllerBindings,
    updateCurrentDateFn?: (date: Date) => void
  ): void {
    // Update state manager
    this.stateManager.focusedDate = date;
    
    // Update current date if different month/year and callback provided
    if (updateCurrentDateFn) {
      const currentDate = this.stateManager.currentDate;
      if (date.getMonth() !== currentDate.getMonth() || date.getFullYear() !== currentDate.getFullYear()) {
        updateCurrentDateFn(date);
      }
    }
    
    // Update bindings
    if (bindings.focusedDate) {
      bindings.focusedDate.set(date);
    }
  }

  setFocusedDate(
    date: Date,
    bindings: CalendarControllerBindings,
    updateCurrentDateFn?: (date: Date) => void
  ): void {
    this.focusDate(date, bindings, updateCurrentDateFn);
  }

  clearFocusedDate(bindings: CalendarControllerBindings): void {
    // Update state manager
    this.stateManager.focusedDate = null;
    
    // Update bindings
    if (bindings.focusedDate) {
      bindings.focusedDate.set(null);
    }
  }

  selectFocusedDate(
    _bindings: CalendarControllerBindings,
    selectDateFn: (date: Date) => void
  ): void {
    const focusedDate = this.stateManager.focusedDate;
    if (focusedDate) {
      selectDateFn(focusedDate);
    }
  }

  getAccessibleDateLabel(date: Date): string {
    return this.accessibilityService.getAccessibleDateLabel(date);
  }

  getDateStateDescription(
    date: Date,
    selectedDate: Date | null,
    selectedDateRange: { startDate: Date | null; endDate: Date | null },
    isRangeSelection: boolean,
    isDateDisabledFn: (date: Date) => boolean,
    isTodayFn: (date: Date) => boolean
  ): string {
    return this.accessibilityService.getDateStateDescription(
      date,
      selectedDate,
      selectedDateRange,
      isRangeSelection,
      isDateDisabledFn,
      isTodayFn
    );
  }

  moveFocusLeft(
    bindings: CalendarControllerBindings,
    getGetters: CalendarGetters,
    updateCurrentDateFn: (date: Date) => void
  ): void {
    const getters = getGettersObj(getGetters);
    const focusedDate = this.stateManager.focusedDate || getters.focusedDate() || new Date();
    const newDate = new Date(focusedDate);
    newDate.setDate(newDate.getDate() - 1);
    
    // Update state manager
    this.stateManager.focusedDate = newDate;
    
    if (bindings.focusedDate) {
      bindings.focusedDate.set(newDate);
    }
    
    if (newDate.getMonth() !== focusedDate.getMonth()) {
      updateCurrentDateFn(newDate);
    }
  }

  moveFocusRight(
    bindings: CalendarControllerBindings,
    getGetters: CalendarGetters,
    updateCurrentDateFn: (date: Date) => void
  ): void {
    const getters = getGettersObj(getGetters);
    const focusedDate = this.stateManager.focusedDate || getters.focusedDate() || new Date();
    const newDate = new Date(focusedDate);
    newDate.setDate(newDate.getDate() + 1);
    
    // Update state manager
    this.stateManager.focusedDate = newDate;
    
    if (bindings.focusedDate) {
      bindings.focusedDate.set(newDate);
    }
    
    if (newDate.getMonth() !== focusedDate.getMonth()) {
      updateCurrentDateFn(newDate);
    }
  }

  moveFocusUp(
    bindings: CalendarControllerBindings,
    getGetters: CalendarGetters,
    updateCurrentDateFn: (date: Date) => void
  ): void {
    const getters = getGettersObj(getGetters);
    const focusedDate = this.stateManager.focusedDate || getters.focusedDate() || new Date();
    const newDate = new Date(focusedDate);
    newDate.setDate(newDate.getDate() - 7);
    
    // Update state manager
    this.stateManager.focusedDate = newDate;
    
    if (bindings.focusedDate) {
      bindings.focusedDate.set(newDate);
    }
    
    if (newDate.getMonth() !== focusedDate.getMonth()) {
      updateCurrentDateFn(newDate);
    }
  }

  moveFocusDown(
    bindings: CalendarControllerBindings,
    getGetters: CalendarGetters,
    updateCurrentDateFn: (date: Date) => void
  ): void {
    const getters = getGettersObj(getGetters);
    const focusedDate = this.stateManager.focusedDate || getters.focusedDate() || new Date();
    const newDate = new Date(focusedDate);
    newDate.setDate(newDate.getDate() + 7);
    
    // Update state manager
    this.stateManager.focusedDate = newDate;
    
    if (bindings.focusedDate) {
      bindings.focusedDate.set(newDate);
    }
    
    if (newDate.getMonth() !== focusedDate.getMonth()) {
      updateCurrentDateFn(newDate);
    }
  }

  moveFocusToStartOfWeek(
    bindings: CalendarControllerBindings,
    getGetters: CalendarGetters
  ): void {
    const getters = getGettersObj(getGetters);
    const focusedDate = this.stateManager.focusedDate || getters.focusedDate() || new Date();
    const firstDayOfWeek = this.stateManager.firstDayOfWeek;
    const currentDay = focusedDate.getDay();
    const daysToSubtract = (currentDay - firstDayOfWeek + 7) % 7;
    
    const newDate = new Date(focusedDate);
    newDate.setDate(newDate.getDate() - daysToSubtract);
    
    // Update state manager
    this.stateManager.focusedDate = newDate;
    
    if (bindings.focusedDate) {
      bindings.focusedDate.set(newDate);
    }
  }

  moveFocusToEndOfWeek(
    bindings: CalendarControllerBindings,
    getGetters: CalendarGetters
  ): void {
    const getters = getGettersObj(getGetters);
    const focusedDate = this.stateManager.focusedDate || getters.focusedDate() || new Date();
    const firstDayOfWeek = this.stateManager.firstDayOfWeek;
    const currentDay = focusedDate.getDay();
    const daysToAdd = (firstDayOfWeek + 6 - currentDay + 7) % 7;
    
    const newDate = new Date(focusedDate);
    newDate.setDate(newDate.getDate() + daysToAdd);
    
    // Update state manager
    this.stateManager.focusedDate = newDate;
    
    if (bindings.focusedDate) {
      bindings.focusedDate.set(newDate);
    }
  }

  moveFocusToStartOfMonth(
    bindings: CalendarControllerBindings,
    getGetters: CalendarGetters
  ): void {
    const getters = getGettersObj(getGetters);
    const focusedDate = this.stateManager.focusedDate || getters.focusedDate() || new Date();
    const newDate = new Date(focusedDate.getFullYear(), focusedDate.getMonth(), 1);
    
    // Update state manager
    this.stateManager.focusedDate = newDate;
    
    if (bindings.focusedDate) {
      bindings.focusedDate.set(newDate);
    }
  }

  moveFocusToEndOfMonth(
    bindings: CalendarControllerBindings,
    getGetters: CalendarGetters
  ): void {
    const getters = getGettersObj(getGetters);
    const focusedDate = this.stateManager.focusedDate || getters.focusedDate() || new Date();
    const newDate = new Date(focusedDate.getFullYear(), focusedDate.getMonth() + 1, 0);
    
    // Update state manager
    this.stateManager.focusedDate = newDate;
    
    if (bindings.focusedDate) {
      bindings.focusedDate.set(newDate);
    }
  }

  moveFocusToNextMonth(
    bindings: CalendarControllerBindings,
    getGetters: CalendarGetters,
    updateCurrentDateFn: (date: Date) => void
  ): void {
    const getters = getGettersObj(getGetters);
    const focusedDate = this.stateManager.focusedDate || getters.focusedDate() || new Date();
    const newDate = new Date(focusedDate);
    newDate.setMonth(newDate.getMonth() + 1);
    
    // Update state manager
    this.stateManager.focusedDate = newDate;
    
    if (bindings.focusedDate) {
      bindings.focusedDate.set(newDate);
    }
    
    updateCurrentDateFn(newDate);
  }

  moveFocusToPreviousMonth(
    bindings: CalendarControllerBindings,
    getGetters: CalendarGetters,
    updateCurrentDateFn: (date: Date) => void
  ): void {
    const getters = getGettersObj(getGetters);
    const focusedDate = this.stateManager.focusedDate || getters.focusedDate() || new Date();
    const newDate = new Date(focusedDate);
    newDate.setMonth(newDate.getMonth() - 1);
    
    // Update state manager
    this.stateManager.focusedDate = newDate;
    
    if (bindings.focusedDate) {
      bindings.focusedDate.set(newDate);
    }
    
    updateCurrentDateFn(newDate);
  }

  moveFocusToNextYear(
    bindings: CalendarControllerBindings,
    getGetters: CalendarGetters,
    updateCurrentDateFn: (date: Date) => void
  ): void {
    const getters = getGettersObj(getGetters);
    const focusedDate = this.stateManager.focusedDate || getters.focusedDate() || new Date();
    const newDate = new Date(focusedDate);
    newDate.setFullYear(newDate.getFullYear() + 1);
    
    // Update state manager
    this.stateManager.focusedDate = newDate;
    
    if (bindings.focusedDate) {
      bindings.focusedDate.set(newDate);
    }
    
    updateCurrentDateFn(newDate);
  }

  moveFocusToPreviousYear(
    bindings: CalendarControllerBindings,
    getGetters: CalendarGetters,
    updateCurrentDateFn: (date: Date) => void
  ): void {
    const getters = getGettersObj(getGetters);
    const focusedDate = this.stateManager.focusedDate || getters.focusedDate() || new Date();
    const newDate = new Date(focusedDate);
    newDate.setFullYear(newDate.getFullYear() - 1);
    
    // Update state manager
    this.stateManager.focusedDate = newDate;
    
    if (bindings.focusedDate) {
      bindings.focusedDate.set(newDate);
    }
    
    updateCurrentDateFn(newDate);
  }
  
  /**
   * Get aria label for a date
   */
  getAriaLabel(date: Date): string {
    return this.accessibilityService.getAccessibleDateLabel(date);
  }
  
  /**
   * Get aria label for a month
   */
  getAriaLabelForMonth(month: number, year: number): string {
    const date = new Date(year, month, 1);
    return this.accessibilityService.getAccessibleDateLabel(date);
  }
  
  /**
   * Get aria label for a year
   */
  getAriaLabelForYear(year: number): string {
    const date = new Date(year, 0, 1);
    return this.accessibilityService.getAccessibleDateLabel(date);
  }
}



