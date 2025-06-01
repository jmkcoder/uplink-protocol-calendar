[**@uplink-protocol/form-controller v0.2.0**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / LocalizationService

# Class: LocalizationService

Defined in: [services/localization.service.ts:7](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/services/localization.service.ts#L7)

Implementation of LocalizationService
Responsible for providing internationalization and localization functions

## Implements

- [`ILocalizationService`](../interfaces/ILocalizationService.md)

## Constructors

### Constructor

> **new LocalizationService**(`locale?`): `LocalizationService`

Defined in: [services/localization.service.ts:14](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/services/localization.service.ts#L14)

Constructor with optional locale

#### Parameters

##### locale?

`string`

Initial locale

#### Returns

`LocalizationService`

## Methods

### formatDate()

> **formatDate**(`date`, `options?`): `string`

Defined in: [services/localization.service.ts:95](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/services/localization.service.ts#L95)

Format a date according to the locale

#### Parameters

##### date

`Date`

Date to format

##### options?

`DateTimeFormatOptions`

Intl.DateTimeFormatOptions

#### Returns

`string`

Formatted date string

#### Implementation of

[`ILocalizationService`](../interfaces/ILocalizationService.md).[`formatDate`](../interfaces/ILocalizationService.md#formatdate)

***

### getLocale()

> **getLocale**(): `string`

Defined in: [services/localization.service.ts:77](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/services/localization.service.ts#L77)

Get current locale

#### Returns

`string`

Current locale string

#### Implementation of

[`ILocalizationService`](../interfaces/ILocalizationService.md).[`getLocale`](../interfaces/ILocalizationService.md#getlocale)

***

### getMonthNames()

> **getMonthNames**(`short`): `string`[]

Defined in: [services/localization.service.ts:24](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/services/localization.service.ts#L24)

Get localized month names

#### Parameters

##### short

`boolean` = `false`

Whether to get short month names

#### Returns

`string`[]

Array of month names

#### Implementation of

[`ILocalizationService`](../interfaces/ILocalizationService.md).[`getMonthNames`](../interfaces/ILocalizationService.md#getmonthnames)

***

### getShortWeekdayNames()

> **getShortWeekdayNames**(`firstDayOfWeek`): `string`[]

Defined in: [services/localization.service.ts:68](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/services/localization.service.ts#L68)

Get short localized weekday names

#### Parameters

##### firstDayOfWeek

`number` = `0`

First day of week (0 = Sunday, 1 = Monday, etc.)

#### Returns

`string`[]

Array of short weekday names

#### Implementation of

[`ILocalizationService`](../interfaces/ILocalizationService.md).[`getShortWeekdayNames`](../interfaces/ILocalizationService.md#getshortweekdaynames)

***

### getWeekdayNames()

> **getWeekdayNames**(`short`, `firstDayOfWeek`): `string`[]

Defined in: [services/localization.service.ts:43](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/services/localization.service.ts#L43)

Get localized weekday names

#### Parameters

##### short

`boolean` = `false`

Whether to use short day names

##### firstDayOfWeek

`number` = `0`

Optional first day of week (0=Sunday, 1=Monday, etc.)

#### Returns

`string`[]

#### Implementation of

[`ILocalizationService`](../interfaces/ILocalizationService.md).[`getWeekdayNames`](../interfaces/ILocalizationService.md#getweekdaynames)

***

### getWeekNumber()

> **getWeekNumber**(`date`): `number`

Defined in: [services/localization.service.ts:106](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/services/localization.service.ts#L106)

Get the week number of the given date according to the locale.

#### Parameters

##### date

`Date`

Date to get the week number for

#### Returns

`number`

Week number (1-based)

#### Implementation of

[`ILocalizationService`](../interfaces/ILocalizationService.md).[`getWeekNumber`](../interfaces/ILocalizationService.md#getweeknumber)

***

### setLocale()

> **setLocale**(`locale`): `void`

Defined in: [services/localization.service.ts:85](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/services/localization.service.ts#L85)

Set locale

#### Parameters

##### locale

`string`

Locale string (e.g., 'en-US', 'fr-FR')

#### Returns

`void`

#### Implementation of

[`ILocalizationService`](../interfaces/ILocalizationService.md).[`setLocale`](../interfaces/ILocalizationService.md#setlocale)
