import { TimeOptions } from "./time.interfaces";

/**
 * Time configuration service interface
 * Manages time picker configuration and validation
 */
export interface ITimeConfigurationService {
  /**
   * Process and validate time configuration options
   * @param options Raw time options
   * @returns Processed and validated options
   */
  processTimeOptions(options: TimeOptions): TimeOptions;

  /**
   * Get default time options
   * @returns Default time configuration
   */
  getDefaultTimeOptions(): TimeOptions;

  /**
   * Validate time format string
   * @param format Time format string
   * @returns Whether the format is valid
   */
  validateTimeFormat(format: string): boolean;

  /**
   * Get supported time formats
   * @returns Array of supported format strings
   */
  getSupportedTimeFormats(): string[];

  /**
   * Normalize time options for consistency
   * @param options Time options to normalize
   * @returns Normalized options
   */
  normalizeTimeOptions(options: TimeOptions): TimeOptions;

  /**
   * Get show seconds setting
   * @returns Whether to show seconds
   */
  getShowSeconds(): boolean;

  /**
   * Set show seconds setting
   * @param show Whether to show seconds
   */
  setShowSeconds(show: boolean): void;

  /**
   * Get show milliseconds setting
   * @returns Whether to show milliseconds
   */
  getShowMilliseconds(): boolean;

  /**
   * Set show milliseconds setting
   * @param show Whether to show milliseconds
   */
  setShowMilliseconds(show: boolean): void;

  /**
   * Get 12-hour format setting
   * @returns Whether to use 12-hour format
   */
  getUse12HourFormat(): boolean;

  /**
   * Set 12-hour format setting
   * @param use12Hour Whether to use 12-hour format
   */
  setUse12HourFormat(use12Hour: boolean): void;

  /**
   * Get minute step setting
   * @returns Minute step interval
   */
  getMinuteStep(): number;

  /**
   * Set minute step setting
   * @param step Minute step interval
   */
  setMinuteStep(step: number): void;

  /**
   * Get second step setting
   * @returns Second step interval
   */
  getSecondStep(): number;

  /**
   * Set second step setting
   * @param step Second step interval
   */
  setSecondStep(step: number): void;
}
