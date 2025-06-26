import { ConfigurationService } from '../../services/configuration.service';
import { createDate } from '../test-utils';
import { CalendarOptions } from '../../interfaces/calendar.interfaces';

// Mock dependencies
const mockConstraintsService = {
  setMinDate: jest.fn((date) => date),
  setMaxDate: jest.fn((date) => date),
  setDisabledDates: jest.fn((dates) => dates)
};

const mockDateFormattingService = {
  setDefaultFormat: jest.fn(),
  setDateFormatOptions: jest.fn(),
  setLocalizationService: jest.fn()
};

describe('ConfigurationService', () => {
  let service: ConfigurationService;

  beforeEach(() => {
    jest.clearAllMocks();
    service = new ConfigurationService(
      mockConstraintsService as any,
      mockDateFormattingService as any
    );
  });

  describe('applyConfiguration', () => {
    it('should apply minimum date constraint', () => {
      const minDate = createDate(2025, 1, 1);
      const options: CalendarOptions = {
        minDate
      };
      
      const result = service.applyConfiguration(options);
      
      expect(mockConstraintsService.setMinDate).toHaveBeenCalledWith(minDate);
      expect(result.minDate).toEqual(minDate);
    });

    it('should apply maximum date constraint', () => {
      const maxDate = createDate(2025, 12, 31);
      const options: CalendarOptions = {
        maxDate
      };
      
      const result = service.applyConfiguration(options);
      
      expect(mockConstraintsService.setMaxDate).toHaveBeenCalledWith(maxDate);
      expect(result.maxDate).toEqual(maxDate);
    });

    it('should apply disabled dates', () => {
      const disabledDates = [
        createDate(2025, 4, 1),
        createDate(2025, 4, 15)
      ];
      const options: CalendarOptions = {
        disabledDates
      };
      
      const result = service.applyConfiguration(options);
      
      expect(mockConstraintsService.setDisabledDates).toHaveBeenCalledWith(disabledDates);
      expect(result.disabledDates).toEqual(disabledDates);
    });

    it('should set initial selected date', () => {
      const selectedDate = createDate(2025, 4, 15);
      const options: CalendarOptions = {
        initialSelectedDate: selectedDate
      };
      
      const result = service.applyConfiguration(options);
      
      expect(result.selectedDate).toEqual(selectedDate);
    });

    it('should set first day of week', () => {
      const options: CalendarOptions = {
        firstDayOfWeek: 1 // Monday
      };
      
      const result = service.applyConfiguration(options);
      
      expect(result.firstDayOfWeek).toBe(1);
    });

    it('should set date format', () => {
      const dateFormat = 'YYYY-MM-DD';
      const options: CalendarOptions = {
        dateFormat
      };
      
      const result = service.applyConfiguration(options);
      
      expect(mockDateFormattingService.setDefaultFormat).toHaveBeenCalledWith(dateFormat);
      expect(result.dateFormat).toBe(dateFormat);
    });

    it('should set hideOtherMonthDays option', () => {
      const options: CalendarOptions = {
        hideOtherMonthDays: true
      };
      
      const result = service.applyConfiguration(options);
      
      expect(result.hideOtherMonthDays).toBe(true);
    });

    it('should set locale', () => {
      const options: CalendarOptions = {
        locale: 'fr-FR'
      };
      
      const result = service.applyConfiguration(options);
      
      expect(result.locale).toBe('fr-FR');
    });

    it('should set date format options', () => {
      const dateFormatOptions: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      };
      const options: CalendarOptions = {
        dateFormatOptions
      };
      
      const result = service.applyConfiguration(options);
      
      expect(mockDateFormattingService.setDateFormatOptions).toHaveBeenCalledWith(dateFormatOptions);
      expect(result.dateFormatOptions).toEqual(dateFormatOptions);
    });

    it('should handle undefined options', () => {
      const result = service.applyConfiguration({});
      
      expect(result.minDate).toBeNull();
      expect(result.maxDate).toBeNull();
      expect(result.disabledDates).toEqual([]);
      expect(result.selectedDate).toBeNull();
      expect(result.firstDayOfWeek).toBe(0); // Default is Sunday
      expect(result.hideOtherMonthDays).toBe(false);
    });
  });

  describe('getFirstDayOfWeek', () => {
    it('should get the first day of week setting', () => {
      // Default value is 0 (Sunday)
      expect(service.getFirstDayOfWeek()).toBe(0);
      
      // Apply configuration with different value
      service.applyConfiguration({ firstDayOfWeek: 1 });
      
      expect(service.getFirstDayOfWeek()).toBe(1);
    });
  });

  describe('setFirstDayOfWeek', () => {
    it('should set the first day of week', () => {
      service.setFirstDayOfWeek(1);
      
      expect(service.getFirstDayOfWeek()).toBe(1);
    });

    it('should handle invalid values', () => {
      // Try setting an invalid value
      service.setFirstDayOfWeek(7);
      
      // Should fallback to default (0)
      expect(service.getFirstDayOfWeek()).toBe(0);
    });
  });

  describe('getDateFormat', () => {
    it('should get the date format setting', () => {
      // Default value is null
      expect(service.getDateFormat()).toBeNull();
      
      // Apply configuration with a format
      service.applyConfiguration({ dateFormat: 'YYYY-MM-DD' });
      
      expect(service.getDateFormat()).toBe('YYYY-MM-DD');
    });
  });

  describe('setDateFormat', () => {
    it('should set the date format', () => {
      service.setDateFormat('DD/MM/YYYY');
      
      expect(service.getDateFormat()).toBe('DD/MM/YYYY');
      expect(mockDateFormattingService.setDefaultFormat).toHaveBeenCalledWith('DD/MM/YYYY');
    });
  });

  describe('getHideOtherMonthDays', () => {
    it('should get the hide other month days setting', () => {
      // Default value is false
      expect(service.getHideOtherMonthDays()).toBe(false);
      
      // Apply configuration with true
      service.applyConfiguration({ hideOtherMonthDays: true });
      
      expect(service.getHideOtherMonthDays()).toBe(true);
    });
  });

  describe('setHideOtherMonthDays', () => {
    it('should set the hide other month days setting', () => {
      service.setHideOtherMonthDays(true);
      
      expect(service.getHideOtherMonthDays()).toBe(true);
    });
  });
});
