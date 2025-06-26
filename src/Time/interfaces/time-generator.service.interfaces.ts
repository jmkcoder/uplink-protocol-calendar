import { TimeGenerationOptions, TimeSegment, TimePeriod, TimeView } from "./time.interfaces";

/**
 * Time generator service interface
 * Generates time segments and views
 */
export interface ITimeGeneratorService {
  /**
   * Generate time view with all segments
   * @param options Generation options
   * @returns Complete time view
   */
  generateTimeView(options: TimeGenerationOptions): TimeView;

  /**
   * Generate hour segments
   * @param options Generation options
   * @returns Array of hour segments
   */
  generateHourSegments(options: TimeGenerationOptions): TimeSegment[];

  /**
   * Generate minute segments
   * @param options Generation options
   * @returns Array of minute segments
   */
  generateMinuteSegments(options: TimeGenerationOptions): TimeSegment[];

  /**
   * Generate second segments
   * @param options Generation options
   * @returns Array of second segments
   */
  generateSecondSegments(options: TimeGenerationOptions): TimeSegment[];

  /**
   * Generate millisecond segments
   * @param options Generation options
   * @returns Array of millisecond segments
   */
  generateMillisecondSegments(options: TimeGenerationOptions): TimeSegment[];

  /**
   * Generate period (AM/PM) for 12-hour format
   * @param options Generation options
   * @returns Period segment
   */
  generatePeriod(options: TimeGenerationOptions): TimePeriod | null;

  /**
   * Apply time step intervals
   * @param segments Input segments
   * @param step Step interval
   * @returns Filtered segments based on step
   */
  applyStep(segments: TimeSegment[], step: number): TimeSegment[];
}
