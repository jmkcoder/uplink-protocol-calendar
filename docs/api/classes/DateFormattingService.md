[**@uplink-protocol/form-controller v0.1.2**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / DateFormattingService

# Class: DateFormattingService

Defined in: [services/date-formatting.service.ts:8](https://github.com/jmkcoder/uplink-protocol-calendar/blob/519c17274ca35a5b4f4dfa9d2f04d55cb230d0b4/src/services/date-formatting.service.ts#L8)

Implementation of DateFormattingService
Responsible for formatting dates

## Implements

- [`IDateFormattingService`](../interfaces/IDateFormattingService.md)

## Constructors

### Constructor

> **new DateFormattingService**(): `DateFormattingService`

#### Returns

`DateFormattingService`

## Methods

### formatDate()

> **formatDate**(`date`, `format?`): `string`

Defined in: [services/date-formatting.service.ts:49](https://github.com/jmkcoder/uplink-protocol-calendar/blob/519c17274ca35a5b4f4dfa9d2f04d55cb230d0b4/src/services/date-formatting.service.ts#L49)

Format a date according to the specified format string

#### Parameters

##### date

`Date`

##### format?

`string` | `DateTimeFormatOptions`

#### Returns

`string`

#### Implementation of

[`IDateFormattingService`](../interfaces/IDateFormattingService.md).[`formatDate`](../interfaces/IDateFormattingService.md#formatdate)

***

### formatMonth()

> **formatMonth**(`year`, `month`, `format?`): `string`

Defined in: [services/date-formatting.service.ts:209](https://github.com/jmkcoder/uplink-protocol-calendar/blob/519c17274ca35a5b4f4dfa9d2f04d55cb230d0b4/src/services/date-formatting.service.ts#L209)

Format a month and year

#### Parameters

##### year

`number`

Year to format

##### month

`number`

Month to format (0-11)

##### format?

`string`

Optional format string

#### Returns

`string`

Formatted month string

***

### formatYear()

> **formatYear**(`year`): `string`

Defined in: [services/date-formatting.service.ts:239](https://github.com/jmkcoder/uplink-protocol-calendar/blob/519c17274ca35a5b4f4dfa9d2f04d55cb230d0b4/src/services/date-formatting.service.ts#L239)

Format a year

#### Parameters

##### year

`number`

Year to format

#### Returns

`string`

Formatted year string

***

### getDateFormatOptions()

> **getDateFormatOptions**(): `null` \| `DateTimeFormatOptions`

Defined in: [services/date-formatting.service.ts:41](https://github.com/jmkcoder/uplink-protocol-calendar/blob/519c17274ca35a5b4f4dfa9d2f04d55cb230d0b4/src/services/date-formatting.service.ts#L41)

Get the date format options

#### Returns

`null` \| `DateTimeFormatOptions`

Current date format options or null

#### Implementation of

[`IDateFormattingService`](../interfaces/IDateFormattingService.md).[`getDateFormatOptions`](../interfaces/IDateFormattingService.md#getdateformatoptions)

***

### getDefaultFormat()

> **getDefaultFormat**(): `null` \| `string`

Defined in: [services/date-formatting.service.ts:199](https://github.com/jmkcoder/uplink-protocol-calendar/blob/519c17274ca35a5b4f4dfa9d2f04d55cb230d0b4/src/services/date-formatting.service.ts#L199)

Get the default date format

#### Returns

`null` \| `string`

Default format or null

#### Implementation of

[`IDateFormattingService`](../interfaces/IDateFormattingService.md).[`getDefaultFormat`](../interfaces/IDateFormattingService.md#getdefaultformat)

***

### getLocalizationService()

> **getLocalizationService**(): `null` \| [`ILocalizationService`](../interfaces/ILocalizationService.md)

Defined in: [services/date-formatting.service.ts:25](https://github.com/jmkcoder/uplink-protocol-calendar/blob/519c17274ca35a5b4f4dfa9d2f04d55cb230d0b4/src/services/date-formatting.service.ts#L25)

Get the localization service

#### Returns

`null` \| [`ILocalizationService`](../interfaces/ILocalizationService.md)

Current localization service or null

#### Implementation of

[`IDateFormattingService`](../interfaces/IDateFormattingService.md).[`getLocalizationService`](../interfaces/IDateFormattingService.md#getlocalizationservice)

***

### parseDate()

> **parseDate**(`dateString`, `format?`): `null` \| `Date`

Defined in: [services/date-formatting.service.ts:104](https://github.com/jmkcoder/uplink-protocol-calendar/blob/519c17274ca35a5b4f4dfa9d2f04d55cb230d0b4/src/services/date-formatting.service.ts#L104)

Parse a date string according to the specified format

#### Parameters

##### dateString

`string`

Date string to parse

##### format?

`string`

Optional format string

#### Returns

`null` \| `Date`

Parsed Date or null if invalid

#### Implementation of

[`IDateFormattingService`](../interfaces/IDateFormattingService.md).[`parseDate`](../interfaces/IDateFormattingService.md#parsedate)

***

### setDateFormatOptions()

> **setDateFormatOptions**(`options`): `void`

Defined in: [services/date-formatting.service.ts:33](https://github.com/jmkcoder/uplink-protocol-calendar/blob/519c17274ca35a5b4f4dfa9d2f04d55cb230d0b4/src/services/date-formatting.service.ts#L33)

Set the date format options for Intl.DateTimeFormat

#### Parameters

##### options

`DateTimeFormatOptions`

Format options

#### Returns

`void`

#### Implementation of

[`IDateFormattingService`](../interfaces/IDateFormattingService.md).[`setDateFormatOptions`](../interfaces/IDateFormattingService.md#setdateformatoptions)

***

### setDefaultFormat()

> **setDefaultFormat**(`format`): `void`

Defined in: [services/date-formatting.service.ts:191](https://github.com/jmkcoder/uplink-protocol-calendar/blob/519c17274ca35a5b4f4dfa9d2f04d55cb230d0b4/src/services/date-formatting.service.ts#L191)

Set the default date format

#### Parameters

##### format

`string`

Format string

#### Returns

`void`

#### Implementation of

[`IDateFormattingService`](../interfaces/IDateFormattingService.md).[`setDefaultFormat`](../interfaces/IDateFormattingService.md#setdefaultformat)

***

### setLocalizationService()

> **setLocalizationService**(`service`): `void`

Defined in: [services/date-formatting.service.ts:17](https://github.com/jmkcoder/uplink-protocol-calendar/blob/519c17274ca35a5b4f4dfa9d2f04d55cb230d0b4/src/services/date-formatting.service.ts#L17)

Set the localization service

#### Parameters

##### service

[`ILocalizationService`](../interfaces/ILocalizationService.md)

Localization service to use

#### Returns

`void`

#### Implementation of

[`IDateFormattingService`](../interfaces/IDateFormattingService.md).[`setLocalizationService`](../interfaces/IDateFormattingService.md#setlocalizationservice)
