# Internationalization Guide

This guide explains how to use the internationalization features of the Calendar Controller.

> **Latest Update (v0.2.2)**: Added intelligent locale-based date formatting with automatic format defaults for 15+ locales and enhanced locale switching capabilities.

## Overview

The Calendar Controller supports comprehensive internationalization through the JavaScript `Intl` API, allowing you to display the calendar in different languages and formats according to regional preferences. As of v0.2.2, the controller automatically applies culturally appropriate date format defaults for different locales, making internationalization even easier.

## Basic Configuration

To initialize a calendar with internationalization support:

```javascript
import { CalendarController } from '@uplink-protocol/calendar-controller';

// Create a calendar with Spanish (Spain) locale
// The controller automatically applies appropriate format defaults
const calendar = CalendarController({
  locale: 'es-ES'
  // dateFormatOptions is now optional - intelligent defaults are applied
});

// Or with custom format options that override the defaults
const customCalendar = CalendarController({
  locale: 'es-ES',
  dateFormatOptions: {
    weekday: 'short',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
});
```

## Locale Options

The `locale` parameter accepts any valid BCP 47 language tag. The controller includes intelligent formatting defaults for the following locales:

### Supported Locales with Smart Defaults

**English Locales** (Numeric formatting):
- `en-US` - English (United States) 
- `en-GB` - English (United Kingdom)
- `en` - Generic English

**European Locales** (Long month formatting):
- `fr-FR` - French (France)
- `de-DE` - German (Germany)
- `es-ES` - Spanish (Spain)
- `it-IT` - Italian (Italy)
- `nl-NL` - Dutch (Netherlands)
- `pt-BR` - Portuguese (Brazil)
- `ru-RU` - Russian (Russia)

**Asian Locales**:
- `ja-JP` - Japanese (Japan) - Numeric formatting
- `ko-KR` - Korean (South Korea) - Numeric formatting
- `zh-CN` - Chinese (Simplified, China) - Long month formatting

**Language Fallbacks**:
The controller supports language-only codes that fall back to the primary region:
- `fr` → `fr-FR`, `de` → `de-DE`, `es` → `es-ES`, etc.

**Unknown Locales**:
Any unsupported locale automatically falls back to `en-US` formatting defaults.

## Automatic Date Format Defaults

**New in v0.2.2**: The controller automatically applies culturally appropriate date format defaults based on the selected locale:

```javascript
// German locale automatically gets long month formatting
calendar.methods.setLocale('de-DE');
// Automatically applies: { year: 'numeric', month: 'long', day: 'numeric' }
// Results in: "15. Januar 2025"

// US English gets numeric formatting  
calendar.methods.setLocale('en-US');
// Automatically applies: { year: 'numeric', month: 'numeric', day: 'numeric' }
// Results in: "1/15/2025"

// Japanese gets numeric formatting
calendar.methods.setLocale('ja-JP'); 
// Automatically applies: { year: 'numeric', month: 'numeric', day: 'numeric' }
// Results in: "2025/1/15"
```

## Date Format Options

You can still customize the date format using the `dateFormatOptions` parameter, which accepts an object conforming to the [Intl.DateTimeFormat options](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat).

### Custom Format Examples

```javascript
// Full date and time
{
  dateStyle: 'full',
  timeStyle: 'long'
}

// Short date only
{
  year: 'numeric',
  month: 'short',
  day: 'numeric'
}

// Include weekday names
{
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
}
```

### Resetting to Locale Defaults

**New in v0.2.2**: You can reset custom format options to use the locale's intelligent defaults:

```javascript
// Set custom formatting
calendar.methods.setDateFormatOptions({
  weekday: 'long',
  year: '2-digit',
  month: 'short',
  day: 'numeric'
});

// Reset to locale-appropriate defaults
calendar.methods.setDateFormatOptions(null);
// Now uses the intelligent defaults for the current locale
```

## Dynamic Locale Switching

You can change the locale at runtime:

```javascript
// Switch to French
calendar.methods.setLocale('fr-FR');

// Switch to Japanese
calendar.methods.setLocale('ja-JP');

// Update date format options
calendar.methods.setDateFormatOptions({
  year: 'numeric',
  month: 'short',
  day: '2-digit'
});
```

## Calendar Components Affected by Internationalization

The following calendar elements are automatically localized:

1. Month names (January, February, etc.)
2. Weekday names (Sunday, Monday, etc.)
3. Date formatting in selected date display
4. Text direction (for RTL languages like Arabic and Hebrew)

## First Day of Week

Different regions start their weeks on different days. While the US typically starts with Sunday (0), many European countries start with Monday (1).

When changing locale, you might want to adjust the first day of week accordingly:

```javascript
// For European locales, often use Monday as first day
const calendar = CalendarController({
  locale: 'fr-FR',
  firstDayOfWeek: 1 // Monday
});
```

## Testing Your Internationalization

To test your internationalization implementation:

1. Try different locales with various date formats
2. Test with languages that have different text directions (LTR and RTL)
3. Verify month names and weekday names display correctly
4. Check that date selection and formatting work as expected

## Fallbacks

If a locale is not supported by the user's browser, the calendar will fall back to:

1. The user's browser default locale
2. English (US) as the ultimate fallback

## Best Practices

- Always test your calendar with the locales you intend to support
- Consider allowing users to choose their preferred locale
- Ensure your UI has enough space for longer text in some languages
- For RTL languages, ensure your layout adapts appropriately
