import { LocalizationService } from '../../services/localization.service';

describe('LocalizationService', () => {
  let service: LocalizationService;
  
  beforeEach(() => {
    service = new LocalizationService();
  });
  
  describe('initialization', () => {
    it('should initialize with default locale (en-US)', () => {
      expect(service.getLocale()).toBe('en-US');
    });
    
    it('should initialize with provided locale', () => {
      const frService = new LocalizationService('fr-FR');
      expect(frService.getLocale()).toBe('fr-FR');
    });
  });
  
  describe('getMonthNames', () => {
    it('should return 12 months for English locale', () => {
      const months = service.getMonthNames();
      
      expect(months).toHaveLength(12);
      expect(months[0]).toBe('January');
      expect(months[11]).toBe('December');
    });
    
    it('should return localized month names for French locale', () => {
      const frService = new LocalizationService('fr-FR');
      const months = frService.getMonthNames();
      
      expect(months).toHaveLength(12);
      expect(months[0].toLowerCase()).toBe('janvier');
      expect(months[11].toLowerCase()).toBe('décembre');
    });
    
    it('should return short month names when requested', () => {
      const months = service.getMonthNames(true);
      
      expect(months).toHaveLength(12);
      // English short months are usually 3 characters
      expect(months[0].length).toBeLessThanOrEqual(3);
      expect(months[1].length).toBeLessThanOrEqual(3);
    });
  });
  
  describe('getWeekdayNames', () => {
    it('should return 7 weekdays for English locale', () => {
      const weekdays = service.getWeekdayNames();
      
      expect(weekdays).toHaveLength(7);
      expect(weekdays[0]).toBe('Sunday');
      expect(weekdays[6]).toBe('Saturday');
    });
    
    it('should return localized weekday names for French locale', () => {
      const frService = new LocalizationService('fr-FR');
      const weekdays = frService.getWeekdayNames();
      
      expect(weekdays).toHaveLength(7);
      expect(weekdays[0].toLowerCase()).toBe('dimanche');
      expect(weekdays[6].toLowerCase()).toBe('samedi');
    });
    
    it('should return short weekday names when requested', () => {
      const weekdays = service.getWeekdayNames(true);
      
      expect(weekdays).toHaveLength(7);
      // English short days are usually 3 characters
      expect(weekdays[0].length).toBeLessThanOrEqual(3);
      expect(weekdays[1].length).toBeLessThanOrEqual(3);
    });
    
    it('should reorder weekdays according to first day of week', () => {
      // When first day is Monday (1)
      const weekdays = service.getWeekdayNames(false, 1);
      
      expect(weekdays).toHaveLength(7);
      expect(weekdays[0]).toBe('Monday');
      expect(weekdays[6]).toBe('Sunday');
    });
  });
  
  describe('formatDate', () => {
    it('should format dates according to locale', () => {
      const date = new Date(2025, 4, 15); // May 15, 2025
      
      const enResult = service.formatDate(date);
      expect(enResult).toContain('15'); // Day
      expect(enResult).toMatch(/May|5/); // Month name or number
      expect(enResult).toContain('2025'); // Year
      
      const frService = new LocalizationService('fr-FR');
      const frResult = frService.formatDate(date);
      expect(frResult).toContain('15'); // Day
      expect(frResult).toMatch(/mai|5/i); // Month name or number (case insensitive)
      expect(frResult).toContain('2025'); // Year
    });
    
    it('should format with different styles', () => {
      const date = new Date(2025, 4, 15);
      
      // Test short format
      const shortResult = service.formatDate(date, { dateStyle: 'short' });
      expect(shortResult).toBeTruthy();
      
      // Test long format
      const longResult = service.formatDate(date, { dateStyle: 'long' });
      expect(longResult).toBeTruthy();
      expect(longResult.length).toBeGreaterThan(shortResult.length);
    });
  });
  
  describe('setLocale', () => {
    it('should update the locale', () => {
      service.setLocale('de-DE');
      
      expect(service.getLocale()).toBe('de-DE');
      
      // Verify that new locale is used
      const months = service.getMonthNames();
      expect(months[0].toLowerCase()).toBe('januar');
    });
  });
});
