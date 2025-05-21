[**@uplink-protocol/form-controller v0.1.0**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / DateFormattingService

# Class: DateFormattingService

Defined in: services/date-formatting.service.ts:7

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

Defined in: services/date-formatting.service.ts:16

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

### getDefaultFormat()

> **getDefaultFormat**(): `null` \| `string`

Defined in: services/date-formatting.service.ts:135

Get the default date format

#### Returns

`null` \| `string`

Default format or null

#### Implementation of

[`IDateFormattingService`](../interfaces/IDateFormattingService.md).[`getDefaultFormat`](../interfaces/IDateFormattingService.md#getdefaultformat)

***

### parseDate()

> **parseDate**(`dateString`, `format?`): `null` \| `Date`

Defined in: services/date-formatting.service.ts:52

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

### setDefaultFormat()

> **setDefaultFormat**(`format`): `void`

Defined in: services/date-formatting.service.ts:127

Set the default date format

#### Parameters

##### format

`string`

Format string

#### Returns

`void`

#### Implementation of

[`IDateFormattingService`](../interfaces/IDateFormattingService.md).[`setDefaultFormat`](../interfaces/IDateFormattingService.md#setdefaultformat)
