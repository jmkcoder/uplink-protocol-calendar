[**@uplink-protocol/form-controller v0.2.3**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / IDateFormattingService

# Interface: IDateFormattingService

Defined in: [interfaces/date-formatting.service.interfaces.ts:5](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/interfaces/date-formatting.service.interfaces.ts#L5)

Date formatting service interface
Responsible for formatting dates

## Methods

### formatDate()

> **formatDate**(`date`, `format?`): `string`

Defined in: [interfaces/date-formatting.service.interfaces.ts:9](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/interfaces/date-formatting.service.interfaces.ts#L9)

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

> **getDateFormatOptions**(): `null` \| `DateTimeFormatOptions`

Defined in: [interfaces/date-formatting.service.interfaces.ts:43](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/interfaces/date-formatting.service.interfaces.ts#L43)

Get the date format options

#### Returns

`null` \| `DateTimeFormatOptions`

***

### getDefaultFormat()

> **getDefaultFormat**(): `null` \| `string`

Defined in: [interfaces/date-formatting.service.interfaces.ts:24](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/interfaces/date-formatting.service.interfaces.ts#L24)

Get the default date format

#### Returns

`null` \| `string`

***

### getLocalizationService()

> **getLocalizationService**(): `any`

Defined in: [interfaces/date-formatting.service.interfaces.ts:34](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/interfaces/date-formatting.service.interfaces.ts#L34)

Get the localization service

#### Returns

`any`

***

### parseDate()

> **parseDate**(`dateString`, `format?`): `null` \| `Date`

Defined in: [interfaces/date-formatting.service.interfaces.ts:14](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/interfaces/date-formatting.service.interfaces.ts#L14)

Parse a date string according to the specified format

#### Parameters

##### dateString

`string`

##### format?

`string`

#### Returns

`null` \| `Date`

***

### setDateFormatOptions()

> **setDateFormatOptions**(`options`): `void`

Defined in: [interfaces/date-formatting.service.interfaces.ts:38](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/interfaces/date-formatting.service.interfaces.ts#L38)

Set the date format options

#### Parameters

##### options

`null` | `DateTimeFormatOptions`

#### Returns

`void`

***

### setDefaultFormat()

> **setDefaultFormat**(`format`): `void`

Defined in: [interfaces/date-formatting.service.interfaces.ts:19](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/interfaces/date-formatting.service.interfaces.ts#L19)

Set the default date format

#### Parameters

##### format

`string`

#### Returns

`void`

***

### setLocalizationService()

> **setLocalizationService**(`service`): `void`

Defined in: [interfaces/date-formatting.service.interfaces.ts:29](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/interfaces/date-formatting.service.interfaces.ts#L29)

Set the localization service

#### Parameters

##### service

`any`

#### Returns

`void`
