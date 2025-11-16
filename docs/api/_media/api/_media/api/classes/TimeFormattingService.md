[**@uplink-protocol/form-controller v0.3.1**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / TimeFormattingService

# Class: TimeFormattingService

Defined in: [Time/services/time-formatting.service.ts:7](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Time/services/time-formatting.service.ts#L7)

TimeFormattingService - Implementation of ITimeFormattingService
Handles formatting of times for display

## Implements

- [`ITimeFormattingService`](../interfaces/ITimeFormattingService.md)

## Constructors

### Constructor

> **new TimeFormattingService**(): `TimeFormattingService`

#### Returns

`TimeFormattingService`

## Methods

### formatTime()

> **formatTime**(`time`, `format?`, `locale?`): `string`

Defined in: [Time/services/time-formatting.service.ts:18](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Time/services/time-formatting.service.ts#L18)

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

#### Implementation of

[`ITimeFormattingService`](../interfaces/ITimeFormattingService.md).[`formatTime`](../interfaces/ITimeFormattingService.md#formattime)

***

### formatTimeForDisplay()

> **formatTimeForDisplay**(`time`, `use12Hour`, `showSeconds`, `showMilliseconds`): `string`

Defined in: [Time/services/time-formatting.service.ts:66](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Time/services/time-formatting.service.ts#L66)

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

#### Implementation of

[`ITimeFormattingService`](../interfaces/ITimeFormattingService.md).[`formatTimeForDisplay`](../interfaces/ITimeFormattingService.md#formattimefordisplay)

***

### getLocaleDefaultFormatOptions()

> **getLocaleDefaultFormatOptions**(`locale`): `DateTimeFormatOptions`

Defined in: [Time/services/time-formatting.service.ts:143](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Time/services/time-formatting.service.ts#L143)

Get default format options for locale

#### Parameters

##### locale

`string`

Locale string

#### Returns

`DateTimeFormatOptions`

Default format options

#### Implementation of

[`ITimeFormattingService`](../interfaces/ITimeFormattingService.md).[`getLocaleDefaultFormatOptions`](../interfaces/ITimeFormattingService.md#getlocaledefaultformatoptions)

***

### getTimeFormatOptions()

> **getTimeFormatOptions**(): `DateTimeFormatOptions` \| `null`

Defined in: [Time/services/time-formatting.service.ts:54](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Time/services/time-formatting.service.ts#L54)

Get current time format options

#### Returns

`DateTimeFormatOptions` \| `null`

Current time format options

#### Implementation of

[`ITimeFormattingService`](../interfaces/ITimeFormattingService.md).[`getTimeFormatOptions`](../interfaces/ITimeFormattingService.md#gettimeformatoptions)

***

### parseTimeString()

> **parseTimeString**(`timeString`, `_format?`): `Date` \| `null`

Defined in: [Time/services/time-formatting.service.ts:99](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Time/services/time-formatting.service.ts#L99)

Parse time string to Date object

#### Parameters

##### timeString

`string`

Time string to parse

##### \_format?

`string`

#### Returns

`Date` \| `null`

Parsed Date object or null if invalid

#### Implementation of

[`ITimeFormattingService`](../interfaces/ITimeFormattingService.md).[`parseTimeString`](../interfaces/ITimeFormattingService.md#parsetimestring)

***

### setLocalizationService()

> **setLocalizationService**(`localizationService`): `void`

Defined in: [Time/services/time-formatting.service.ts:164](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Time/services/time-formatting.service.ts#L164)

Set localization service

#### Parameters

##### localizationService

`any`

Localization service instance

#### Returns

`void`

#### Implementation of

[`ITimeFormattingService`](../interfaces/ITimeFormattingService.md).[`setLocalizationService`](../interfaces/ITimeFormattingService.md#setlocalizationservice)

***

### setTimeFormatOptions()

> **setTimeFormatOptions**(`options`): `void`

Defined in: [Time/services/time-formatting.service.ts:46](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Time/services/time-formatting.service.ts#L46)

Set default time format options

#### Parameters

##### options

Time format options

`DateTimeFormatOptions` | `null`

#### Returns

`void`

#### Implementation of

[`ITimeFormattingService`](../interfaces/ITimeFormattingService.md).[`setTimeFormatOptions`](../interfaces/ITimeFormattingService.md#settimeformatoptions)
