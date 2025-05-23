import { IConfigurationService } from "../interfaces/configuration.service.interfaces";
import { CalendarOptions } from "../interfaces/calendar.interfaces";
import { IConstraintsService } from "../interfaces/constraints.service.interfaces";
import { IDateFormattingService } from "../interfaces/date-formatting.service.interfaces";

/**
 * Implementation of ConfigurationService
 * Responsible for managing calendar configuration
 */
export class ConfigurationService implements IConfigurationService {
  private _firstDayOfWeek: number = 0; // Sunday by default
  private _dateFormat: string | null = null;
  private _hideOtherMonthDays: boolean = false; // Show other month days by default
  private _showWeekNumbers: boolean = false; // Hide week numbers by default
  private _isRangeSelection: boolean = false; // Single date selection by default
  constructor(
    private _constraintsService: IConstraintsService,
    private _dateFormattingService: IDateFormattingService
  ) {}
  
  /**
   * Apply configuration options
   */
  public applyConfiguration(options: CalendarOptions): {
    minDate: Date | null;
    maxDate: Date | null;
    disabledDates: Date[];
    selectedDate: Date | null;
    firstDayOfWeek: number;
    dateFormat: string | null;
    hideOtherMonthDays: boolean;
    showWeekNumbers: boolean;
    isRangeSelection: boolean;
    locale?: string;
    dateFormatOptions?: Intl.DateTimeFormatOptions;
  } {
    let minDate = null;
    let maxDate = null;
    let disabledDates: Date[] = [];
    let selectedDate = null;
    
    // Apply options
    if (options) {
      if (options.minDate) {
        minDate = this._constraintsService.setMinDate(options.minDate);
      }
      
      if (options.maxDate) {
        maxDate = this._constraintsService.setMaxDate(options.maxDate);
      }
      
      if (options.disabledDates) {
        disabledDates = this._constraintsService.setDisabledDates(options.disabledDates);
      }
      
      if (options.initialSelectedDate) {
        selectedDate = options.initialSelectedDate;
      }
      
      if (options.firstDayOfWeek !== undefined) {
        this._firstDayOfWeek = options.firstDayOfWeek;
      }
      
      if (options.dateFormat) {
        this._dateFormat = options.dateFormat;
        this._dateFormattingService.setDefaultFormat(options.dateFormat);
      }
      
      if (options.hideOtherMonthDays !== undefined) {
        this._hideOtherMonthDays = options.hideOtherMonthDays;
      }

      if (options.isRangeSelection !== undefined) {
        this._isRangeSelection = options.isRangeSelection;
      }
      
      if (options.showWeekNumbers !== undefined) {
        this._showWeekNumbers = options.showWeekNumbers;
      }
      
      if (options.isRangeSelection !== undefined) {
        this._isRangeSelection = options.isRangeSelection;
      }
      
      if (options.dateFormatOptions) {
        this._dateFormattingService.setDateFormatOptions(options.dateFormatOptions);
      }
    }
      return {
      minDate,
      maxDate,
      disabledDates,
      selectedDate,
      firstDayOfWeek: this._firstDayOfWeek,
      dateFormat: this._dateFormat,
      hideOtherMonthDays: this._hideOtherMonthDays,
      showWeekNumbers: this._showWeekNumbers,
      isRangeSelection: this._isRangeSelection,
      locale: options?.locale,
      dateFormatOptions: options?.dateFormatOptions
    };
  }

  /**
   * Get first day of week
   */
  public getFirstDayOfWeek(): number {
    return this._firstDayOfWeek;
  }

  /**
   * Set first day of week
   */
  public setFirstDayOfWeek(day: number): number {
    if (day >= 0 && day <= 6) {
      this._firstDayOfWeek = day;
    }
    return this._firstDayOfWeek;
  }

  /**
   * Get date format
   */
  public getDateFormat(): string | null {
    return this._dateFormat;
  }

  /**
   * Set date format
   */
  public setDateFormat(format: string | null): string | null {
    this._dateFormat = format;
    if (format) {
      this._dateFormattingService.setDefaultFormat(format);
    }
    return this._dateFormat;
  }

  /**
   * Get hide other month days setting
   */
  public getHideOtherMonthDays(): boolean {
    return this._hideOtherMonthDays;
  }

  /**
   * Set hide other month days setting
   */
  public setHideOtherMonthDays(hide: boolean): boolean {
    this._hideOtherMonthDays = hide;
    return this._hideOtherMonthDays;
  }

  /**
   * Get show week numbers setting
   */
  public getShowWeekNumbers(): boolean {
    return this._showWeekNumbers;
  }

  /**
   * Set show week numbers setting
   */
  public setShowWeekNumbers(show: boolean): boolean {
    this._showWeekNumbers = show;
    return this._showWeekNumbers;
  }

  /**
   * Get range selection mode setting
   */
  public getIsRangeSelection(): boolean {
    return this._isRangeSelection;
  }

  /**
   * Set range selection mode setting
   */
  public setIsRangeSelection(isRange: boolean): boolean {
    this._isRangeSelection = isRange;
    return this._isRangeSelection;
  }
}
