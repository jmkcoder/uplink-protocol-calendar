[**@uplink-protocol/form-controller v0.3.1**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / IDateFormattingService

# Interface: IDateFormattingService

Defined in: [Date/interfaces/date-formatting.service.interfaces.ts:5](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/interfaces/date-formatting.service.interfaces.ts#L5)

Date formatting service interface
Responsible for formatting dates

## Methods

### formatDate()

> **formatDate**(`date`, `format?`): `string`

Defined in: [Date/interfaces/date-formatting.service.interfaces.ts:9](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/interfaces/date-formatting.service.interfaces.ts#L9)

Format a date according to the specified format string

#### Parameters

##### date

`Date`

##### format?

`string`

#### Returns

`string`

***

### getDateFormatOptions()

> **getDateFormatOptions**(): `DateTimeFormatOptions` \| `null`

Defined in: [Date/interfaces/date-formatting.service.interfaces.ts:43](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/interfaces/date-formatting.service.interfaces.ts#L43)

Get the date format options

#### Returns

`DateTimeFormatOptions` \| `null`

***

### getDefaultFormat()

> **getDefaultFormat**(): `string` \| `null`

Defined in: [Date/interfaces/date-formatting.service.interfaces.ts:24](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/interfaces/date-formatting.service.interfaces.ts#L24)

Get the default date format

#### Returns

`string` \| `null`

***

### getLocalizationService()

> **getLocalizationService**(): `any`

Defined in: [Date/interfaces/date-formatting.service.interfaces.ts:34](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/interfaces/date-formatting.service.interfaces.ts#L34)

Get the localization service

#### Returns

`any`

***

### parseDate()

> **parseDate**(`dateString`, `format?`): `Date` \| `null`

Defined in: [Date/interfaces/date-formatting.service.interfaces.ts:14](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/interfaces/date-formatting.service.interfaces.ts#L14)

Parse a date string according to the specified format

#### Parameters

##### dateString

`string`

##### format?

`string`

#### Returns

`Date` \| `null`

***

### setDateFormatOptions()

> **setDateFormatOptions**(`options`): `void`

Defined in: [Date/interfaces/date-formatting.service.interfaces.ts:38](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/interfaces/date-formatting.service.interfaces.ts#L38)

Set the date format options

#### Parameters

##### options

`DateTimeFormatOptions` | `null`

#### Returns

`void`

***

### setDefaultFormat()

> **setDefaultFormat**(`format`): `void`

Defined in: [Date/interfaces/date-formatting.service.interfaces.ts:19](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/interfaces/date-formatting.service.interfaces.ts#L19)

Set the default date format

#### Parameters

##### format

`string`

#### Returns

`void`

***

### setLocalizationService()

> **setLocalizationService**(`service`): `void`

Defined in: [Date/interfaces/date-formatting.service.interfaces.ts:29](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/interfaces/date-formatting.service.interfaces.ts#L29)

Set the localization service

#### Parameters

##### service

`any`

#### Returns

`void`
