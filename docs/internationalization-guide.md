# Internationalization Guide

This guide explains how to use the internationalization features of the Calendar Controller.

> **Latest Update (v0.2.1)**: Enhanced example compatibility ensures internationalization examples work reliably across all browsers.

## Overview

The Calendar Controller supports internationalization through the JavaScript `Intl` API, allowing you to display the calendar in different languages and formats according to regional preferences.

## Basic Configuration

To initialize a calendar with internationalization support:

```javascript
import { CalendarController } from '@uplink-protocol/calendar-controller';

// Create a calendar with Spanish (Spain) locale
const calendar = CalendarController({
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

The `locale` parameter accepts any valid BCP 47 language tag. Some common examples:

- `en-US` - English (United States)
- `en-GB` - English (United Kingdom)
- `fr-FR` - French (France)
- `de-DE` - German (Germany)
- `ja-JP` - Japanese (Japan)
- `zh-CN` - Chinese (Simplified, China)
- `ar-EG` - Arabic (Egypt)
- `ru-RU` - Russian (Russia)

## Date Format Options

You can customize the date format using the `dateFormatOptions` parameter, which accepts an object conforming to the [Intl.DateTimeFormat options](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat).

Common options include:

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
