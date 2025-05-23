import { DateFormattingService } from '../../services/date-formatting.service';
import { LocalizationService } from '../../services/localization.service';
import { createDate } from '../test-utils';

// Mock localization service
class MockLocalizationService extends LocalizationService {
  formatDate = jest.fn().mockReturnValue('localized date');
}

describe('DateFormattingService', () => {
  let service: DateFormattingService;
  let mockLocalizationService: MockLocalizationService;

  beforeEach(() => {
    service = new DateFormattingService();
    mockLocalizationService = new MockLocalizationService();
  });

  describe('localization service integration', () => {
    it('should get and set localization service', () => {
      // Initially null
      expect(service.getLocalizationService()).toBeNull();
      
      // Set service
      service.setLocalizationService(mockLocalizationService);
      
      // Should be set
      expect(service.getLocalizationService()).toBe(mockLocalizationService);
    });
  });

  describe('date format options', () => {
    it('should get and set date format options', () => {
      // Initially null
      expect(service.getDateFormatOptions()).toBeNull();
      
      const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      };
      
      // Set options
      service.setDateFormatOptions(options);
      
      // Should be set
      expect(service.getDateFormatOptions()).toEqual(options);
    });
  });

  describe('formatDate', () => {
    it('should use localization service when available and no format specified', () => {
      const date = createDate(2025, 4, 15);

      // Set localization service
      service.setLocalizationService(mockLocalizationService);

      // Format date with default options
      service.setDateFormatOptions({ year: 'numeric', month: 'long', day: 'numeric' });
      const result = service.formatDate(date);

      // Should have delegated to localization service
      expect(mockLocalizationService.formatDate).toHaveBeenCalledWith(date, { year: 'numeric', month: 'long', day: 'numeric' });
      expect(result).toBe('localized date');
    });

    it('should use custom format string when provided', () => {
      const date = createDate(2025, 4, 15); // May 15, 2025
      
      // Test with custom format
      const result = service.formatDate(date, 'YYYY-MM-DD');
      
      expect(result).toBe('2025-05-15');
    });

    it('should use default ISO format when no format is provided and no localization service', () => {
      const date = createDate(2025, 4, 15); // May 15, 2025
      
      const result = service.formatDate(date);
      
      // Should be in ISO format YYYY-MM-DD
      expect(result).toBe('2025-05-15');
    });

    it('should use date format options when available', () => {
      const date = createDate(2025, 4, 15);
      
      // Set date format options
      const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      };
      service.setDateFormatOptions(options);
      
      // Set a real localization service to test with actual formatting
      service.setLocalizationService(new LocalizationService('en-US'));
      
      const result = service.formatDate(date);
      
      // Should include the month name
      expect(result).toContain('May');
      expect(result).toContain('15');
      expect(result).toContain('2025');
    });
  });

  describe('setDefaultFormat', () => {
    it('should set and use default format', () => {
      const date = createDate(2025, 4, 15);
      
      // Set default format
      service.setDefaultFormat('DD/MM/YYYY');
      
      // Format without explicit format
      const result = service.formatDate(date);
      
      expect(result).toBe('15/05/2025');
    });
  });

  describe('getDefaultFormat', () => {
    it('should get default format', () => {
      expect(service.getDefaultFormat()).toBeNull();
      
      service.setDefaultFormat('YYYY-MM-DD');
      
      expect(service.getDefaultFormat()).toBe('YYYY-MM-DD');
    });
  });

  describe('formatMonth', () => {
    it('should format month', () => {
      // Need real localization service for this test
      service.setLocalizationService(new LocalizationService('en-US'));
      
      const result = service.formatMonth(2025, 4);
      
      expect(result).toContain('May');
      expect(result).toContain('2025');
    });

    it('should respect custom format', () => {
      const result = service.formatMonth(2025, 4, 'MM/YYYY');
      
      expect(result).toBe('05/2025');
    });
  });

  describe('formatYear', () => {
    it('should format year', () => {
      const result = service.formatYear(2025);
      
      expect(result).toBe('2025');
    });
  });
});
