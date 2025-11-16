import { FormattingCoordinator } from '../../coordinators/formatting-coordinator';
import { CalendarStateManager } from '../../coordinators/state-manager';
import { IDateFormattingService, ILocalizationService } from '../../interfaces';
import { createDate } from '../test-utils';

describe('FormattingCoordinator', () => {
  let coordinator: FormattingCoordinator;
  let stateManager: CalendarStateManager;
  let mockDateFormattingService: jest.Mocked<IDateFormattingService>;
  let mockLocalizationService: jest.Mocked<ILocalizationService>;

  beforeEach(() => {
    stateManager = new CalendarStateManager();
    stateManager.locale = 'en-US';

    mockDateFormattingService = {
      formatDate: jest.fn((date) => date.toLocaleDateString()),
      setDefaultFormat: jest.fn(),
      setDateFormatOptions: jest.fn()
    } as any;

    mockLocalizationService = {
      setLocale: jest.fn(),
      getLocale: jest.fn(() => 'en-US'),
      formatDate: jest.fn((date) => date.toLocaleDateString()),
      getMonthNames: jest.fn(() => ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']),
      getWeekdayNames: jest.fn(() => ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'])
    } as any;

    coordinator = new FormattingCoordinator(
      stateManager,
      mockDateFormattingService,
      mockLocalizationService
    );
  });

  describe('formatDate', () => {
    it('should use dateFormat when set', () => {
      stateManager.dateFormat = 'YYYY-MM-DD';
      const date = createDate(2025, 4, 15);
      
      coordinator.formatDate(date);

      expect(mockDateFormattingService.formatDate).toHaveBeenCalledWith(date, 'YYYY-MM-DD');
    });

    it('should use provided string options', () => {
      const date = createDate(2025, 4, 15);
      
      coordinator.formatDate(date, 'DD/MM/YYYY');

      expect(mockDateFormattingService.formatDate).toHaveBeenCalledWith(date, 'DD/MM/YYYY');
    });

    it('should use provided DateTimeFormatOptions', () => {
      const date = createDate(2025, 4, 15);
      const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
      
      coordinator.formatDate(date, options);

      expect(mockLocalizationService.formatDate).toHaveBeenCalledWith(date, options);
    });

    it('should use stateManager dateFormatOptions when no options provided', () => {
      const date = createDate(2025, 4, 15);
      stateManager.dateFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
      
      coordinator.formatDate(date);

      expect(mockLocalizationService.formatDate).toHaveBeenCalledWith(date, stateManager.dateFormatOptions);
    });

    it('should use locale default format options when nothing else is set', () => {
      const date = createDate(2025, 4, 15);
      
      coordinator.formatDate(date);

      expect(mockLocalizationService.formatDate).toHaveBeenCalled();
    });

    it('should fallback to dateFormattingService when localizationService not available', () => {
      const date = createDate(2025, 4, 15);
      (coordinator as any).localizationService = null;
      
      coordinator.formatDate(date);

      expect(mockDateFormattingService.formatDate).toHaveBeenCalledWith(date);
    });
  });

  describe('getFormattedDate', () => {
    it('should return null when no selected date', () => {
      stateManager.selectedDate = null;
      
      const result = coordinator.getFormattedDate();

      expect(result).toBeNull();
    });

    it('should format selected date with dateFormatOptions', () => {
      stateManager.selectedDate = createDate(2025, 4, 15);
      stateManager.dateFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
      mockLocalizationService.formatDate.mockReturnValue('May 15, 2025');
      
      const result = coordinator.getFormattedDate();

      expect(mockLocalizationService.formatDate).toHaveBeenCalledWith(
        stateManager.selectedDate,
        stateManager.dateFormatOptions
      );
      expect(result).toBe('May 15, 2025');
    });

    it('should format selected date without dateFormatOptions', () => {
      stateManager.selectedDate = createDate(2025, 4, 15);
      mockLocalizationService.formatDate.mockReturnValue('5/15/2025');
      
      const result = coordinator.getFormattedDate();

      expect(mockLocalizationService.formatDate).toHaveBeenCalledWith(stateManager.selectedDate);
      expect(result).toBe('5/15/2025');
    });

    it('should fallback to dateFormattingService when localizationService not available', () => {
      stateManager.selectedDate = createDate(2025, 4, 15);
      (coordinator as any).localizationService = null;
      mockDateFormattingService.formatDate.mockReturnValue('5/15/2025');
      
      const result = coordinator.getFormattedDate();

      expect(mockDateFormattingService.formatDate).toHaveBeenCalledWith(stateManager.selectedDate);
      expect(result).toBe('5/15/2025');
    });
  });

  describe('setLocale', () => {
    it('should set locale in state manager', () => {
      coordinator.setLocale('de-DE', mockLocalizationService);

      expect(stateManager.locale).toBe('de-DE');
    });

    it('should set locale in localization service', () => {
      coordinator.setLocale('de-DE', mockLocalizationService);

      expect(mockLocalizationService.setLocale).toHaveBeenCalledWith('de-DE');
    });
  });

  describe('getLocale', () => {
    it('should return current locale', () => {
      stateManager.locale = 'fr-FR';

      expect(coordinator.getLocale()).toBe('fr-FR');
    });
  });

  describe('setDateFormatOptions', () => {
    it('should set date format options in state manager', () => {
      const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long' };
      
      coordinator.setDateFormatOptions(options);

      expect(stateManager.dateFormatOptions).toEqual(options);
    });

    it('should set date format options in date formatting service', () => {
      const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long' };
      
      coordinator.setDateFormatOptions(options);

      expect(mockDateFormattingService.setDateFormatOptions).toHaveBeenCalledWith(options);
    });

    it('should use locale default when setting null', () => {
      stateManager.locale = 'de-DE';
      
      coordinator.setDateFormatOptions(null);

      expect(mockDateFormattingService.setDateFormatOptions).toHaveBeenCalled();
    });
  });

  describe('getDateFormatOptions', () => {
    it('should return current date format options', () => {
      const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long' };
      stateManager.dateFormatOptions = options;

      expect(coordinator.getDateFormatOptions()).toEqual(options);
    });

    it('should return null when not set', () => {
      expect(coordinator.getDateFormatOptions()).toBeNull();
    });
  });

  describe('formatDateWithOptions', () => {
    it('should format date with provided options', () => {
      const date = createDate(2025, 4, 15);
      const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short' };
      mockLocalizationService.formatDate.mockReturnValue('May 2025');
      
      const result = coordinator.formatDateWithOptions(date, options);

      expect(mockLocalizationService.formatDate).toHaveBeenCalledWith(date, options);
      expect(result).toBe('May 2025');
    });

    it('should fallback to dateFormattingService when no localizationService', () => {
      const date = createDate(2025, 4, 15);
      (coordinator as any).localizationService = null;
      mockDateFormattingService.formatDate.mockReturnValue('5/15/2025');
      
      const result = coordinator.formatDateWithOptions(date);

      expect(mockDateFormattingService.formatDate).toHaveBeenCalledWith(date);
      expect(result).toBe('5/15/2025');
    });
  });

  describe('getMonthName', () => {
    it('should return long month name by default', () => {
      const result = coordinator.getMonthName(4);

      expect(mockLocalizationService.getMonthNames).toHaveBeenCalledWith(false);
      expect(result).toBe('May');
    });

    it('should return short month name when format is short', () => {
      mockLocalizationService.getMonthNames.mockReturnValue(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);
      
      const result = coordinator.getMonthName(4, 'short');

      expect(mockLocalizationService.getMonthNames).toHaveBeenCalledWith(true);
      expect(result).toBe('May');
    });
  });

  describe('getDayName', () => {
    it('should return long day name by default', () => {
      const result = coordinator.getDayName(1);

      expect(mockLocalizationService.getWeekdayNames).toHaveBeenCalledWith(false);
      expect(result).toBe('Monday');
    });

    it('should return short day name when format is short', () => {
      mockLocalizationService.getWeekdayNames.mockReturnValue(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
      
      const result = coordinator.getDayName(1, 'short');

      expect(mockLocalizationService.getWeekdayNames).toHaveBeenCalledWith(true);
      expect(result).toBe('Mon');
    });

    it('should return narrow day name when format is narrow', () => {
      mockLocalizationService.getWeekdayNames.mockReturnValue(['S', 'M', 'T', 'W', 'T', 'F', 'S']);
      
      const result = coordinator.getDayName(1, 'narrow');

      expect(mockLocalizationService.getWeekdayNames).toHaveBeenCalledWith(true);
      expect(result).toBe('M');
    });
  });

  describe('getDayNames', () => {
    it('should return long day names by default', () => {
      const result = coordinator.getDayNames();

      expect(mockLocalizationService.getWeekdayNames).toHaveBeenCalledWith(false, 0);
      expect(result).toEqual(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']);
    });

    it('should return short day names when format is short', () => {
      mockLocalizationService.getWeekdayNames.mockReturnValue(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
      
      const result = coordinator.getDayNames('short');

      expect(mockLocalizationService.getWeekdayNames).toHaveBeenCalledWith(true, 0);
      expect(result).toEqual(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
    });
  });

  describe('getMonthNames', () => {
    it('should return long month names by default', () => {
      const result = coordinator.getMonthNames();

      expect(mockLocalizationService.getMonthNames).toHaveBeenCalledWith(false);
      expect(result).toHaveLength(12);
    });

    it('should return short month names when format is short', () => {
      mockLocalizationService.getMonthNames.mockReturnValue(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);
      
      const result = coordinator.getMonthNames('short');

      expect(mockLocalizationService.getMonthNames).toHaveBeenCalledWith(true);
      expect(result).toHaveLength(12);
    });
  });

  describe('getWeekdayNames', () => {
    it('should return weekday names starting from default first day', () => {
      stateManager.firstDayOfWeek = 0;
      
      const result = coordinator.getWeekdayNames();

      expect(mockLocalizationService.getWeekdayNames).toHaveBeenCalledWith(false, 0);
      expect(result).toEqual(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']);
    });

    it('should return weekday names starting from provided first day', () => {
      const result = coordinator.getWeekdayNames(1);

      expect(mockLocalizationService.getWeekdayNames).toHaveBeenCalledWith(false, 1);
    });

    it('should use state manager first day of week when not provided', () => {
      stateManager.firstDayOfWeek = 6;
      
      coordinator.getWeekdayNames();

      expect(mockLocalizationService.getWeekdayNames).toHaveBeenCalledWith(false, 6);
    });
  });
});
