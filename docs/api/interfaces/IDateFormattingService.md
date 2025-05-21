[**@uplink-protocol/form-controller v0.1.0**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / IDateFormattingService

# Interface: IDateFormattingService

Defined in: interfaces/date-formatting.service.interfaces.ts:5

Date formatting service interface
Responsible for formatting dates

## Methods

### formatDate()

> **formatDate**(`date`, `format?`): `string`

Defined in: interfaces/date-formatting.service.interfaces.ts:9

Format a date according to the specified format string

#### Parameters

##### date

`Date`

##### format?

`string`

#### Returns

`string`

***

### getDefaultFormat()

> **getDefaultFormat**(): `null` \| `string`

Defined in: interfaces/date-formatting.service.interfaces.ts:24

Get the default date format

#### Returns

`null` \| `string`

***

### parseDate()

> **parseDate**(`dateString`, `format?`): `null` \| `Date`

Defined in: interfaces/date-formatting.service.interfaces.ts:14

Parse a date string according to the specified format

#### Parameters

##### dateString

`string`

##### format?

`string`

#### Returns

`null` \| `Date`

***

### setDefaultFormat()

> **setDefaultFormat**(`format`): `void`

Defined in: interfaces/date-formatting.service.interfaces.ts:19

Set the default date format

#### Parameters

##### format

`string`

#### Returns

`void`
