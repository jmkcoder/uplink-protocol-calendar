[**@uplink-protocol/form-controller v0.2.3**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / DateFormattingService

# Class: DateFormattingService

Defined in: [services/date-formatting.service.ts:8](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/services/date-formatting.service.ts#L8)

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

Defined in: [services/date-formatting.service.ts:48](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/services/date-formatting.service.ts#L48)

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

Defined in: [services/date-formatting.service.ts:211](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/services/date-formatting.service.ts#L211)

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

Defined in: [services/date-formatting.service.ts:241](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/services/date-formatting.service.ts#L241)

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

Defined in: [services/date-formatting.service.ts:40](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/services/date-formatting.service.ts#L40)

Get the date format options

#### Returns

`null` \| `DateTimeFormatOptions`

Current date format options or null

#### Implementation of

[`IDateFormattingService`](../interfaces/IDateFormattingService.md).[`getDateFormatOptions`](../interfaces/IDateFormattingService.md#getdateformatoptions)

***

### getDefaultFormat()

> **getDefaultFormat**(): `null` \| `string`

Defined in: [services/date-formatting.service.ts:201](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/services/date-formatting.service.ts#L201)

Get the default date format

#### Returns

`null` \| `string`

Default format or null

#### Implementation of

[`IDateFormattingService`](../interfaces/IDateFormattingService.md).[`getDefaultFormat`](../interfaces/IDateFormattingService.md#getdefaultformat)

***

### getLocalizationService()

> **getLocalizationService**(): `null` \| [`ILocalizationService`](../interfaces/ILocalizationService.md)

Defined in: [services/date-formatting.service.ts:25](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/services/date-formatting.service.ts#L25)

Get the localization service

#### Returns

`null` \| [`ILocalizationService`](../interfaces/ILocalizationService.md)

Current localization service or null

#### Implementation of

[`IDateFormattingService`](../interfaces/IDateFormattingService.md).[`getLocalizationService`](../interfaces/IDateFormattingService.md#getlocalizationservice)

***

### parseDate()

> **parseDate**(`dateString`, `format?`): `null` \| `Date`

Defined in: [services/date-formatting.service.ts:106](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/services/date-formatting.service.ts#L106)

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

Defined in: [services/date-formatting.service.ts:32](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/services/date-formatting.service.ts#L32)

Set the date format options for Intl.DateTimeFormat

#### Parameters

##### options

Format options

`null` | `DateTimeFormatOptions`

#### Returns

`void`

#### Implementation of

[`IDateFormattingService`](../interfaces/IDateFormattingService.md).[`setDateFormatOptions`](../interfaces/IDateFormattingService.md#setdateformatoptions)

***

### setDefaultFormat()

> **setDefaultFormat**(`format`): `void`

Defined in: [services/date-formatting.service.ts:193](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/services/date-formatting.service.ts#L193)

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

Defined in: [services/date-formatting.service.ts:17](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/services/date-formatting.service.ts#L17)

Set the localization service

#### Parameters

##### service

[`ILocalizationService`](../interfaces/ILocalizationService.md)

Localization service to use

#### Returns

`void`

#### Implementation of

[`IDateFormattingService`](../interfaces/IDateFormattingService.md).[`setLocalizationService`](../interfaces/IDateFormattingService.md#setlocalizationservice)
