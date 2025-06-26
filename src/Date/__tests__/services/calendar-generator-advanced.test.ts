import { CalendarGeneratorService } from '../../services/calendar-generator.service';
import { createDate, mockDate, testDates } from '../test-utils';
import { YearViewGenerationOptions } from '../../interfaces/calendar.service.interfaces';

describe('CalendarGeneratorService - Advanced Views', () => {
  let service: CalendarGeneratorService;
  let resetDate: () => void;

  beforeEach(() => {
    service = new CalendarGeneratorService();
    // Mock current date to May 21, 2025
    resetDate = mockDate(testDates.present);
  });

  afterEach(() => {
    resetDate();
  });

  describe('generateDecadeView', () => {
    it('should generate a decade view with correct years', () => {
      // Test with decade containing 2025 (e.g. 2020-2029)
      const baseYear = 2020;
      const options: YearViewGenerationOptions = {
        selectedDate: null,
        selectedDateRange: null,
        yearRangeSize: 10,
        isRangeSelection: false,
        currentDate: new Date(2025, 5, 15),
        minDate: null,
        maxDate: null,
      };

      const result = service.generateDecadeView(baseYear, options);

      // Should include 10 years starting from baseYear
      expect(result.years.length).toBe(10);
      expect(result.years[0].year).toBe(baseYear);
      expect(result.years[9].year).toBe(baseYear + 9);
      expect(result.startYear).toBe(baseYear);
      expect(result.endYear).toBe(baseYear + 9);

      // 2025 should be marked as current year
      const currentYear = result.years.find(y => y.year === 2025);
      expect(currentYear).toBeDefined();
      expect(currentYear?.isCurrentYear).toBe(true);
    });

    it('should mark selected year when provided', () => {
      const baseYear = 2020;
      const selectedDate = createDate(2023, 1, 15);
      const options = {
        selectedDate,
        selectedYearRange: null,
        yearRangeSize: 10
      } as unknown as YearViewGenerationOptions;

      const result = service.generateDecadeView(baseYear, options);

      // 2023 should be marked as selected
      const selectedYear = result.years.find(y => y.year === 2023);
      expect(selectedYear).toBeDefined();
      expect(selectedYear?.isSelected).toBe(true);

      // Other years should not be selected
      const otherYears = result.years.filter(y => y.year !== 2023);
      otherYears.forEach(year => {
        expect(year.isSelected).toBe(false);
      });
    });

    it('should adjust yearRangeSize to ensure even distribution', () => {
      // Test with non-standard range size
      const baseYear = 2020;
      const options = {
        selectedDate: null,
        selectedYearRange: null,
        yearRangeSize: 12 // Non-standard decade size
      } as unknown as YearViewGenerationOptions;

      const result = service.generateDecadeView(baseYear, options);

      // Should include 12 years
      expect(result.years.length).toBe(12);
      expect(result.startYear).toBe(baseYear);
      expect(result.endYear).toBe(baseYear + 11);
    });
  });

  describe('generateMultiYearView', () => {
    it('should generate a custom multi-year view', () => {
      const baseYear = 2020;
      const rangeSize = 5; // 5-year range
      const options = {
        selectedDate: null,
        selectedYearRange: null,
        yearRangeSize: rangeSize
      } as unknown as YearViewGenerationOptions;

      const result = service.generateMultiYearView(baseYear, options);

      expect(result.years.length).toBe(rangeSize);
      expect(result.startYear).toBe(baseYear);
      expect(result.endYear).toBe(baseYear + rangeSize - 1);
    });

    it('should mark years in a selected range', () => {
      const baseYear = 2020;
      const options = {
        selectedDate: null,
        selectedYearRange: {
          startYear: 2022,
          endYear: 2024
        },
        yearRangeSize: 10
      } as unknown as YearViewGenerationOptions;

      const result = service.generateMultiYearView(baseYear, options);

      // Years in range should be marked as selected
      for (let year = 2022; year <= 2024; year++) {
        const yearObj = result.years.find(y => y.year === year);
        expect(yearObj?.isInRange).toBe(true);
      }

      // Years outside range should not be marked
      const outsideYears = result.years.filter(y => y.year < 2022 || y.year > 2024);
      outsideYears.forEach(year => {
        expect(year.isInRange).toBe(false);
      });
    });
  });
});
