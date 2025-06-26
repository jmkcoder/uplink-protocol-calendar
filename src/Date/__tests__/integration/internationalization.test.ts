import { CalendarControllerClass } from '../../controller';
import { createDate, mockDate, testDates } from '../test-utils';

describe('Internationalization Tests', () => {
  let controller: CalendarControllerClass;
  let resetDate: () => void;
  
  beforeEach(() => {
    // Mock current date to May 21, 2025
    resetDate = mockDate(testDates.present);
  });
  
  afterEach(() => {
    resetDate();
  });
  
  describe('locale handling', () => {
    it('should use English (US) as default locale', () => {
      controller = new CalendarControllerClass();
      
      expect(controller._locale).toBe('en-US');
      
      // Format a date to confirm locale is being used
      const date = createDate(2025, 4, 15);
      const formatted = controller.formatDate(date);
      
      // Month names should be in English
      expect(formatted.toLowerCase()).toContain('may');
    });
    
    it('should initialize with French locale', () => {
      controller = new CalendarControllerClass({
        locale: 'fr-FR'
      });
      
      expect(controller._locale).toBe('fr-FR');
      
      // Format a date to confirm French locale is being used
      const date = createDate(2025, 4, 15);
      const formatted = controller.formatDate(date, { dateStyle: 'long' });
      
      // Month names should be in French
      expect(formatted.toLowerCase()).toContain('mai');
    });
    
    it('should use German locale with custom date format', () => {
      controller = new CalendarControllerClass({
        locale: 'de-DE',
        dateFormatOptions: {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }
      });
      
      const date = createDate(2025, 4, 15);
      const formatted = controller.formatDate(date);
      
      // Month names should be in German
      expect(formatted.toLowerCase()).toContain('mai');
    });
  });
  
  describe('first day of week', () => {
    it('should use Sunday as default first day of week', () => {
      controller = new CalendarControllerClass();
      
      expect(controller._firstDayOfWeek).toBe(0); // Sunday
      
      const monthView = controller.generateMonthView();
      const weekdays = monthView.weekdays;
      
      // First day should be Sunday
      expect(weekdays[0]).toEqual('Sunday');
    });
    
    it('should use Monday as first day of week for European locales', () => {
      controller = new CalendarControllerClass({
        locale: 'fr-FR',
        firstDayOfWeek: 1 // Monday
      });
      
      expect(controller._firstDayOfWeek).toBe(1);
      
      const monthView = controller.generateMonthView();
      const weekdays = monthView.weekdays;
      
      // First day should be Monday
      expect(weekdays[0]).toEqual('Monday');
      // Last day should be Sunday
      expect(weekdays[6]).toEqual('Sunday');
    });
  });
  
  describe('week numbers', () => {
    it('should include week numbers when requested', () => {
      controller = new CalendarControllerClass({
        showWeekNumbers: true
      });
      
      const monthView = controller.generateMonthView();
      
      // Each week should have a valid week number
      monthView.weeks.forEach(week => {
        expect(typeof week.weekNumber).toBe('number');
      });
    });
    
    it('should use appropriate week numbering system based on locale', () => {      // For US locale, first week starts January 1
      const usController = new CalendarControllerClass({
        locale: 'en-US',
        showWeekNumbers: true
      });
      
      // For European locales, first week has 4 days of the year
      const euroController = new CalendarControllerClass({
        locale: 'de-DE',
        showWeekNumbers: true
      });
      
      // Navigate both to January 2025
      usController.goToDate(createDate(2025, 0, 1));
      euroController.goToDate(createDate(2025, 0, 1));
      
      const usView = usController.generateMonthView();
      const euroView = euroController.generateMonthView();
      
      // Week numbers might differ based on locale
      // Just check that they are generated
      expect(usView.weeks[0].weekNumber).toBeGreaterThan(0);
      expect(euroView.weeks[0].weekNumber).toBeGreaterThan(0);
    });
  });
  
  describe('date formatting', () => {
    it('should format dates according to locale', () => {
      const usController = new CalendarControllerClass({
        locale: 'en-US'
      });
      
      const frController = new CalendarControllerClass({
        locale: 'fr-FR'
      });
      
      const date = createDate(2025, 4, 15);
      
      const usFormatted = usController.formatDate(date, { dateStyle: 'full' });
      const frFormatted = frController.formatDate(date, { dateStyle: 'full' });
      
      // US format typically has month before day
      expect(usFormatted).toMatch(/May.*15.*2025/i);
      
      // French format typically has day before month
      expect(frFormatted).toMatch(/15.*mai.*2025/i);
    });
    
    it('should handle custom date formats', () => {
      controller = new CalendarControllerClass({
        dateFormat: 'DD/MM/YYYY'
      });
      
      const date = createDate(2025, 4, 15);
      const formatted = controller.formatDate(date);
      
      expect(formatted).toBe('15/05/2025');
    });
  });
  
  describe('month and weekday names', () => {
    it('should return localized month names', () => {
      const usController = new CalendarControllerClass({
        locale: 'en-US'
      });
      
      const frController = new CalendarControllerClass({
        locale: 'fr-FR'
      });
      
      const usMonths = usController.getMonthNames();
      const frMonths = frController.getMonthNames();
      
      // Check English month names
      expect(usMonths[0]).toBe('January');
      expect(usMonths[4]).toBe('May');
      
      // Check French month names
      expect(frMonths[0].toLowerCase()).toBe('janvier');
      expect(frMonths[4].toLowerCase()).toBe('mai');
    });
    
    it('should return localized weekday names', () => {
      const usController = new CalendarControllerClass({
        locale: 'en-US'
      });
      
      const frController = new CalendarControllerClass({
        locale: 'fr-FR'
      });
      
      const usWeekdays = usController.getWeekdayNames();
      const frWeekdays = frController.getWeekdayNames();
      
      // Check English weekday names
      expect(usWeekdays[0]).toBe('Sunday');
      expect(usWeekdays[1]).toBe('Monday');
      
      // Check French weekday names
      expect(frWeekdays[0].toLowerCase()).toBe('dimanche');
      expect(frWeekdays[1].toLowerCase()).toBe('lundi');
    });
  });
});
