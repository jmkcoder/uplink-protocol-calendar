[**@uplink-protocol/form-controller v0.3.0**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / ITimeFormattingService

# Interface: ITimeFormattingService

Defined in: [Time/interfaces/time-formatting.service.interfaces.ts:5](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-formatting.service.interfaces.ts#L5)

Time formatting service interface
Handles formatting of times for display

## Methods

### formatTime()

> **formatTime**(`time`, `format?`, `locale?`): `string`

Defined in: [Time/interfaces/time-formatting.service.interfaces.ts:13](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-formatting.service.interfaces.ts#L13)

Format time according to specified format and locale

#### Parameters

##### time

`Date`

Time to format

##### format?

Format string or options

`string` | `DateTimeFormatOptions`

##### locale?

`string`

Locale for formatting

#### Returns

`string`

Formatted time string

***

### formatTimeForDisplay()

> **formatTimeForDisplay**(`time`, `use12Hour`, `showSeconds`, `showMilliseconds`): `string`

Defined in: [Time/interfaces/time-formatting.service.interfaces.ts:39](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-formatting.service.interfaces.ts#L39)

Format time for display in time picker

#### Parameters

##### time

`Date`

Time to format

##### use12Hour

`boolean`

Whether to use 12-hour format

##### showSeconds

`boolean`

Whether to show seconds

##### showMilliseconds

`boolean`

Whether to show milliseconds

#### Returns

`string`

Formatted time string

***

### getLocaleDefaultFormatOptions()

> **getLocaleDefaultFormatOptions**(`locale`): `DateTimeFormatOptions`

Defined in: [Time/interfaces/time-formatting.service.interfaces.ts:59](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-formatting.service.interfaces.ts#L59)

Get default format options for locale

#### Parameters

##### locale

`string`

Locale string

#### Returns

`DateTimeFormatOptions`

Default format options

***

### getTimeFormatOptions()

> **getTimeFormatOptions**(): `null` \| `DateTimeFormatOptions`

Defined in: [Time/interfaces/time-formatting.service.interfaces.ts:29](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-formatting.service.interfaces.ts#L29)

Get current time format options

#### Returns

`null` \| `DateTimeFormatOptions`

Current time format options

***

### parseTimeString()

> **parseTimeString**(`timeString`, `format?`): `null` \| `Date`

Defined in: [Time/interfaces/time-formatting.service.interfaces.ts:52](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-formatting.service.interfaces.ts#L52)

Parse time string to Date object

#### Parameters

##### timeString

`string`

Time string to parse

##### format?

`string`

Expected format

#### Returns

`null` \| `Date`

Parsed Date object or null if invalid

***

### setLocalizationService()

> **setLocalizationService**(`localizationService`): `void`

Defined in: [Time/interfaces/time-formatting.service.interfaces.ts:65](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-formatting.service.interfaces.ts#L65)

Set localization service

#### Parameters

##### localizationService

`any`

Localization service instance

#### Returns

`void`

***

### setTimeFormatOptions()

> **setTimeFormatOptions**(`options`): `void`

Defined in: [Time/interfaces/time-formatting.service.interfaces.ts:23](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-formatting.service.interfaces.ts#L23)

Set default time format options

#### Parameters

##### options

Time format options

`null` | `DateTimeFormatOptions`

#### Returns

`void`
