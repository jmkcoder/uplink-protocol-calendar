[**@uplink-protocol/form-controller v0.1.1**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / LocalizationService

# Class: LocalizationService

Defined in: [services/localization.service.ts:7](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/services/localization.service.ts#L7)

Implementation of LocalizationService
Responsible for providing internationalization and localization functions

## Implements

- [`ILocalizationService`](../interfaces/ILocalizationService.md)

## Constructors

### Constructor

> **new LocalizationService**(`locale?`): `LocalizationService`

Defined in: [services/localization.service.ts:14](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/services/localization.service.ts#L14)

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

Defined in: [services/localization.service.ts:95](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/services/localization.service.ts#L95)

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

Defined in: [services/localization.service.ts:77](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/services/localization.service.ts#L77)

Get current locale

#### Returns

`string`

Current locale string

#### Implementation of

[`ILocalizationService`](../interfaces/ILocalizationService.md).[`getLocale`](../interfaces/ILocalizationService.md#getlocale)

***

### getMonthNames()

> **getMonthNames**(): `string`[]

Defined in: [services/localization.service.ts:24](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/services/localization.service.ts#L24)

Get localized month names

#### Returns

`string`[]

Array of month names

#### Implementation of

[`ILocalizationService`](../interfaces/ILocalizationService.md).[`getMonthNames`](../interfaces/ILocalizationService.md#getmonthnames)

***

### getShortWeekdayNames()

> **getShortWeekdayNames**(): `string`[]

Defined in: [services/localization.service.ts:59](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/services/localization.service.ts#L59)

Get short localized weekday names

#### Returns

`string`[]

Array of short weekday names

#### Implementation of

[`ILocalizationService`](../interfaces/ILocalizationService.md).[`getShortWeekdayNames`](../interfaces/ILocalizationService.md#getshortweekdaynames)

***

### getWeekdayNames()

> **getWeekdayNames**(): `string`[]

Defined in: [services/localization.service.ts:41](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/services/localization.service.ts#L41)

Get localized weekday names

#### Returns

`string`[]

Array of weekday names

#### Implementation of

[`ILocalizationService`](../interfaces/ILocalizationService.md).[`getWeekdayNames`](../interfaces/ILocalizationService.md#getweekdaynames)

***

### setLocale()

> **setLocale**(`locale`): `void`

Defined in: [services/localization.service.ts:85](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/services/localization.service.ts#L85)

Set locale

#### Parameters

##### locale

`string`

Locale string (e.g., 'en-US', 'fr-FR')

#### Returns

`void`

#### Implementation of

[`ILocalizationService`](../interfaces/ILocalizationService.md).[`setLocale`](../interfaces/ILocalizationService.md#setlocale)
