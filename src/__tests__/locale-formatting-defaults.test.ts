/**
 * Comprehensive test for locale default formatting
 * Verifies that each locale sets appropriate default format options
 */

import { CalendarControllerClass } from '../controller';

describe('Locale Default Formatting Tests', () => {
  let controller: CalendarControllerClass;
  const testDate = new Date(2025, 0, 15); // January 15, 2025 - A Wednesday
  
  beforeEach(() => {
    controller = new CalendarControllerClass();
    controller.selectDate(testDate);
  });

  describe('English locales', () => {
    it('should use numeric format for en-US (default)', () => {
      controller.setLocale('en-US');
      
      const formatOptions = controller.getDateFormatOptions();
      expect(formatOptions).toEqual({
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      });
      
      // Test actual formatting
      const formatted = controller.getFormattedDate();
      expect(formatted).toBeTruthy();
      expect(typeof formatted).toBe('string');
      
      // US format should be like "1/15/2025" or similar
      const formattedDirect = new Intl.DateTimeFormat('en-US', formatOptions).format(testDate);
      expect(formatted).toBe(formattedDirect);
    });

    it('should use numeric format for en-GB', () => {
      controller.setLocale('en-GB');
      
      const formatOptions = controller.getDateFormatOptions();
      expect(formatOptions).toEqual({
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      });
      
      // Test actual formatting
      const formatted = controller.getFormattedDate();
      const formattedDirect = new Intl.DateTimeFormat('en-GB', formatOptions).format(testDate);
      expect(formatted).toBe(formattedDirect);
    });

    it('should use numeric format for generic "en" locale', () => {
      controller.setLocale('en');
      
      const formatOptions = controller.getDateFormatOptions();
      expect(formatOptions).toEqual({
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      });
    });
  });

  describe('European locales', () => {
    it('should use long month format for German (de-DE)', () => {
      controller.setLocale('de-DE');
      
      const formatOptions = controller.getDateFormatOptions();
      expect(formatOptions).toEqual({
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      
      // Test actual formatting
      const formatted = controller.getFormattedDate();
      const formattedDirect = new Intl.DateTimeFormat('de-DE', formatOptions).format(testDate);
      expect(formatted).toBe(formattedDirect);
      
      // German should include full month name like "15. Januar 2025"
      expect(formatted).toMatch(/Januar/);
    });

    it('should use long month format for French (fr-FR)', () => {
      controller.setLocale('fr-FR');
      
      const formatOptions = controller.getDateFormatOptions();
      expect(formatOptions).toEqual({
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      
      // Test actual formatting
      const formatted = controller.getFormattedDate();
      const formattedDirect = new Intl.DateTimeFormat('fr-FR', formatOptions).format(testDate);
      expect(formatted).toBe(formattedDirect);
      
      // French should include full month name like "15 janvier 2025"
      expect(formatted).toMatch(/janvier/);
    });

    it('should use long month format for Spanish (es-ES)', () => {
      controller.setLocale('es-ES');
      
      const formatOptions = controller.getDateFormatOptions();
      expect(formatOptions).toEqual({
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      
      // Test actual formatting
      const formatted = controller.getFormattedDate();
      const formattedDirect = new Intl.DateTimeFormat('es-ES', formatOptions).format(testDate);
      expect(formatted).toBe(formattedDirect);
      
      // Spanish should include full month name like "15 de enero de 2025"
      expect(formatted).toMatch(/enero/);
    });

    it('should use long month format for Italian (it-IT)', () => {
      controller.setLocale('it-IT');
      
      const formatOptions = controller.getDateFormatOptions();
      expect(formatOptions).toEqual({
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      
      // Test actual formatting
      const formatted = controller.getFormattedDate();
      const formattedDirect = new Intl.DateTimeFormat('it-IT', formatOptions).format(testDate);
      expect(formatted).toBe(formattedDirect);
      
      // Italian should include full month name like "15 gennaio 2025"
      expect(formatted).toMatch(/gennaio/);
    });

    it('should use long month format for Dutch (nl-NL)', () => {
      controller.setLocale('nl-NL');
      
      const formatOptions = controller.getDateFormatOptions();
      expect(formatOptions).toEqual({
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      
      // Test actual formatting
      const formatted = controller.getFormattedDate();
      const formattedDirect = new Intl.DateTimeFormat('nl-NL', formatOptions).format(testDate);
      expect(formatted).toBe(formattedDirect);
      
      // Dutch should include full month name like "15 januari 2025"
      expect(formatted).toMatch(/januari/);
    });

    it('should use long month format for Russian (ru-RU)', () => {
      controller.setLocale('ru-RU');
      
      const formatOptions = controller.getDateFormatOptions();
      expect(formatOptions).toEqual({
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      
      // Test actual formatting
      const formatted = controller.getFormattedDate();
      const formattedDirect = new Intl.DateTimeFormat('ru-RU', formatOptions).format(testDate);
      expect(formatted).toBe(formattedDirect);
    });

    it('should use long month format for Portuguese (pt-BR)', () => {
      controller.setLocale('pt-BR');
      
      const formatOptions = controller.getDateFormatOptions();
      expect(formatOptions).toEqual({
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      
      // Test actual formatting
      const formatted = controller.getFormattedDate();
      const formattedDirect = new Intl.DateTimeFormat('pt-BR', formatOptions).format(testDate);
      expect(formatted).toBe(formattedDirect);
    });
  });

  describe('Asian locales', () => {
    it('should use numeric format for Japanese (ja-JP)', () => {
      controller.setLocale('ja-JP');
      
      const formatOptions = controller.getDateFormatOptions();
      expect(formatOptions).toEqual({
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      });
      
      // Test actual formatting
      const formatted = controller.getFormattedDate();
      const formattedDirect = new Intl.DateTimeFormat('ja-JP', formatOptions).format(testDate);
      expect(formatted).toBe(formattedDirect);
      
      // Japanese format typically includes year, month, day with Japanese characters
      expect(formatted).toMatch(/2025/);
    });

    it('should use long month format for Chinese (zh-CN)', () => {
      controller.setLocale('zh-CN');
      
      const formatOptions = controller.getDateFormatOptions();
      expect(formatOptions).toEqual({
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      
      // Test actual formatting
      const formatted = controller.getFormattedDate();
      const formattedDirect = new Intl.DateTimeFormat('zh-CN', formatOptions).format(testDate);
      expect(formatted).toBe(formattedDirect);
    });

    it('should use numeric format for Korean (ko-KR)', () => {
      controller.setLocale('ko-KR');
      
      const formatOptions = controller.getDateFormatOptions();
      expect(formatOptions).toEqual({
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      });
      
      // Test actual formatting
      const formatted = controller.getFormattedDate();
      const formattedDirect = new Intl.DateTimeFormat('ko-KR', formatOptions).format(testDate);
      expect(formatted).toBe(formattedDirect);
    });
  });

  describe('Language-only locales (fallback to base language)', () => {
    it('should handle "de" locale (fallback to German defaults)', () => {
      controller.setLocale('de');
      
      const formatOptions = controller.getDateFormatOptions();
      expect(formatOptions).toEqual({
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    });

    it('should handle "fr" locale (fallback to French defaults)', () => {
      controller.setLocale('fr');
      
      const formatOptions = controller.getDateFormatOptions();
      expect(formatOptions).toEqual({
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    });

    it('should handle "es" locale (fallback to Spanish defaults)', () => {
      controller.setLocale('es');
      
      const formatOptions = controller.getDateFormatOptions();
      expect(formatOptions).toEqual({
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    });

    it('should handle "ja" locale (fallback to Japanese defaults)', () => {
      controller.setLocale('ja');
      
      const formatOptions = controller.getDateFormatOptions();
      expect(formatOptions).toEqual({
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      });
    });

    it('should handle "zh" locale (fallback to Chinese defaults)', () => {
      controller.setLocale('zh');
      
      const formatOptions = controller.getDateFormatOptions();
      expect(formatOptions).toEqual({
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    });
  });

  describe('Unknown/unsupported locales', () => {
    it('should fallback to en-US defaults for unknown locale', () => {
      controller.setLocale('xx-YY'); // Non-existent locale
      
      const formatOptions = controller.getDateFormatOptions();
      expect(formatOptions).toEqual({
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      });
      
      // Should still format successfully using browser fallback
      const formatted = controller.getFormattedDate();
      expect(formatted).toBeTruthy();
      expect(typeof formatted).toBe('string');
    });

    it('should fallback to en-US defaults for unsupported region', () => {
      controller.setLocale('en-XX'); // Valid language, invalid region
      
      const formatOptions = controller.getDateFormatOptions();
      expect(formatOptions).toEqual({
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      });
    });
  });

  describe('Persistence of custom format options across locale changes', () => {
    it('should maintain custom format options when switching locales', () => {
      // Set custom format options
      const customOptions: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'short',
        day: '2-digit'
      };
      
      controller.setDateFormatOptions(customOptions);
      expect(controller.getDateFormatOptions()).toEqual(customOptions);
      
      // Switch to different locale - custom options should be maintained
      controller.setLocale('de-DE');
      expect(controller.getDateFormatOptions()).toEqual(customOptions);
      
      // Switch to another locale - custom options should still be maintained
      controller.setLocale('ja-JP');
      expect(controller.getDateFormatOptions()).toEqual(customOptions);
      
      // Format should use custom options, not locale defaults
      const formatted = controller.getFormattedDate();
      const expectedFormat = new Intl.DateTimeFormat('ja-JP', customOptions).format(testDate);
      expect(formatted).toBe(expectedFormat);
    });

    it('should reset to locale defaults when format options are set to null', () => {
      // Set custom format options first
      const customOptions: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        year: '2-digit',
        month: 'short',
        day: 'numeric'
      };
      
      controller.setDateFormatOptions(customOptions);
      expect(controller.getDateFormatOptions()).toEqual(customOptions);
      
      // Set to null to reset to locale defaults
      controller.setDateFormatOptions(null);
      expect(controller.getDateFormatOptions()).toBeNull();
      
      // Now changing locale should set locale defaults
      controller.setLocale('fr-FR');
      expect(controller.getDateFormatOptions()).toEqual({
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    });
  });

  describe('Locale case sensitivity', () => {
    it('should handle uppercase locale codes', () => {
      controller.setLocale('DE-DE');
      
      const formatOptions = controller.getDateFormatOptions();
      expect(formatOptions).toEqual({
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    });

    it('should handle mixed case locale codes', () => {
      controller.setLocale('Fr-fr');
      
      const formatOptions = controller.getDateFormatOptions();
      expect(formatOptions).toEqual({
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    });

    it('should handle lowercase locale codes', () => {
      controller.setLocale('es-es');
      
      const formatOptions = controller.getDateFormatOptions();
      expect(formatOptions).toEqual({
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    });
  });

  describe('Real-world formatting validation', () => {
    const testCases = [
      {
        locale: 'en-US',
        expectedOptions: { year: 'numeric', month: 'numeric', day: 'numeric' },
        description: 'US English numeric format'
      },
      {
        locale: 'en-GB',
        expectedOptions: { year: 'numeric', month: 'numeric', day: 'numeric' },
        description: 'UK English numeric format'
      },
      {
        locale: 'de-DE',
        expectedOptions: { year: 'numeric', month: 'long', day: 'numeric' },
        description: 'German long month format'
      },
      {
        locale: 'fr-FR',
        expectedOptions: { year: 'numeric', month: 'long', day: 'numeric' },
        description: 'French long month format'
      },
      {
        locale: 'ja-JP',
        expectedOptions: { year: 'numeric', month: 'numeric', day: 'numeric' },
        description: 'Japanese numeric format'
      },
      {
        locale: 'zh-CN',
        expectedOptions: { year: 'numeric', month: 'long', day: 'numeric' },
        description: 'Chinese long month format'
      }
    ];

    testCases.forEach(({ locale, expectedOptions, description }) => {
      it(`should correctly format date for ${description} (${locale})`, () => {
        controller.setLocale(locale);
        
        // Verify format options are set correctly
        expect(controller.getDateFormatOptions()).toEqual(expectedOptions);
        
        // Verify actual formatting works
        const formatted = controller.getFormattedDate();
        expect(formatted).toBeTruthy();
        expect(typeof formatted).toBe('string');
        
        // Verify it matches native Intl.DateTimeFormat output
        const expectedFormat = new Intl.DateTimeFormat(locale, expectedOptions).format(testDate);
        expect(formatted).toBe(expectedFormat);
      });
    });
  });

  describe('Integration with formatDate method', () => {
    it('should use locale defaults in formatDate when no options provided', () => {
      controller.setLocale('de-DE');
      
      // formatDate without options should use locale defaults
      const formatted = controller.formatDate(testDate);
      const expected = new Intl.DateTimeFormat('de-DE', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }).format(testDate);
      
      expect(formatted).toBe(expected);
    });

    it('should allow formatDate to override locale defaults', () => {
      controller.setLocale('de-DE'); // Sets long month defaults
      
      // Override with custom options
      const customOptions: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
      const formatted = controller.formatDate(testDate, customOptions);
      const expected = new Intl.DateTimeFormat('de-DE', customOptions).format(testDate);
      
      expect(formatted).toBe(expected);
    });
  });
});
