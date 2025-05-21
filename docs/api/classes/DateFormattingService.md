[**@uplink-protocol/form-controller v0.1.1**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / DateFormattingService

# Class: DateFormattingService

Defined in: [services/date-formatting.service.ts:8](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/services/date-formatting.service.ts#L8)

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

Defined in: [services/date-formatting.service.ts:50](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/services/date-formatting.service.ts#L50)

Format a date according to the specified format string

#### Parameters

##### date

`Date`

Date to format

##### format?

`string`

Optional format string

#### Returns

`string`

Formatted date string

#### Implementation of

[`IDateFormattingService`](../interfaces/IDateFormattingService.md).[`formatDate`](../interfaces/IDateFormattingService.md#formatdate)

***

### getDateFormatOptions()

> **getDateFormatOptions**(): `null` \| `DateTimeFormatOptions`

Defined in: [services/date-formatting.service.ts:41](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/services/date-formatting.service.ts#L41)

Get the date format options

#### Returns

`null` \| `DateTimeFormatOptions`

Current date format options or null

#### Implementation of

[`IDateFormattingService`](../interfaces/IDateFormattingService.md).[`getDateFormatOptions`](../interfaces/IDateFormattingService.md#getdateformatoptions)

***

### getDefaultFormat()

> **getDefaultFormat**(): `null` \| `string`

Defined in: [services/date-formatting.service.ts:191](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/services/date-formatting.service.ts#L191)

Get the default date format

#### Returns

`null` \| `string`

Default format or null

#### Implementation of

[`IDateFormattingService`](../interfaces/IDateFormattingService.md).[`getDefaultFormat`](../interfaces/IDateFormattingService.md#getdefaultformat)

***

### getLocalizationService()

> **getLocalizationService**(): `null` \| [`ILocalizationService`](../interfaces/ILocalizationService.md)

Defined in: [services/date-formatting.service.ts:25](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/services/date-formatting.service.ts#L25)

Get the localization service

#### Returns

`null` \| [`ILocalizationService`](../interfaces/ILocalizationService.md)

Current localization service or null

#### Implementation of

[`IDateFormattingService`](../interfaces/IDateFormattingService.md).[`getLocalizationService`](../interfaces/IDateFormattingService.md#getlocalizationservice)

***

### parseDate()

> **parseDate**(`dateString`, `format?`): `null` \| `Date`

Defined in: [services/date-formatting.service.ts:96](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/services/date-formatting.service.ts#L96)

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

Defined in: [services/date-formatting.service.ts:33](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/services/date-formatting.service.ts#L33)

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

Defined in: [services/date-formatting.service.ts:183](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/services/date-formatting.service.ts#L183)

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

Defined in: [services/date-formatting.service.ts:17](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/services/date-formatting.service.ts#L17)

Set the localization service

#### Parameters

##### service

[`ILocalizationService`](../interfaces/ILocalizationService.md)

Localization service to use

#### Returns

`void`

#### Implementation of

[`IDateFormattingService`](../interfaces/IDateFormattingService.md).[`setLocalizationService`](../interfaces/IDateFormattingService.md#setlocalizationservice)
