[**@uplink-protocol/form-controller v0.3.0**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / ITimeConfigurationService

# Interface: ITimeConfigurationService

Defined in: [Time/interfaces/time-configuration.service.interfaces.ts:7](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-configuration.service.interfaces.ts#L7)

Time configuration service interface
Manages time picker configuration and validation

## Methods

### getDefaultTimeOptions()

> **getDefaultTimeOptions**(): [`TimeOptions`](TimeOptions.md)

Defined in: [Time/interfaces/time-configuration.service.interfaces.ts:19](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-configuration.service.interfaces.ts#L19)

Get default time options

#### Returns

[`TimeOptions`](TimeOptions.md)

Default time configuration

***

### getMinuteStep()

> **getMinuteStep**(): `number`

Defined in: [Time/interfaces/time-configuration.service.interfaces.ts:81](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-configuration.service.interfaces.ts#L81)

Get minute step setting

#### Returns

`number`

Minute step interval

***

### getSecondStep()

> **getSecondStep**(): `number`

Defined in: [Time/interfaces/time-configuration.service.interfaces.ts:93](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-configuration.service.interfaces.ts#L93)

Get second step setting

#### Returns

`number`

Second step interval

***

### getShowMilliseconds()

> **getShowMilliseconds**(): `boolean`

Defined in: [Time/interfaces/time-configuration.service.interfaces.ts:57](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-configuration.service.interfaces.ts#L57)

Get show milliseconds setting

#### Returns

`boolean`

Whether to show milliseconds

***

### getShowSeconds()

> **getShowSeconds**(): `boolean`

Defined in: [Time/interfaces/time-configuration.service.interfaces.ts:45](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-configuration.service.interfaces.ts#L45)

Get show seconds setting

#### Returns

`boolean`

Whether to show seconds

***

### getSupportedTimeFormats()

> **getSupportedTimeFormats**(): `string`[]

Defined in: [Time/interfaces/time-configuration.service.interfaces.ts:32](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-configuration.service.interfaces.ts#L32)

Get supported time formats

#### Returns

`string`[]

Array of supported format strings

***

### getUse12HourFormat()

> **getUse12HourFormat**(): `boolean`

Defined in: [Time/interfaces/time-configuration.service.interfaces.ts:69](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-configuration.service.interfaces.ts#L69)

Get 12-hour format setting

#### Returns

`boolean`

Whether to use 12-hour format

***

### normalizeTimeOptions()

> **normalizeTimeOptions**(`options`): [`TimeOptions`](TimeOptions.md)

Defined in: [Time/interfaces/time-configuration.service.interfaces.ts:39](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-configuration.service.interfaces.ts#L39)

Normalize time options for consistency

#### Parameters

##### options

[`TimeOptions`](TimeOptions.md)

Time options to normalize

#### Returns

[`TimeOptions`](TimeOptions.md)

Normalized options

***

### processTimeOptions()

> **processTimeOptions**(`options`): [`TimeOptions`](TimeOptions.md)

Defined in: [Time/interfaces/time-configuration.service.interfaces.ts:13](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-configuration.service.interfaces.ts#L13)

Process and validate time configuration options

#### Parameters

##### options

[`TimeOptions`](TimeOptions.md)

Raw time options

#### Returns

[`TimeOptions`](TimeOptions.md)

Processed and validated options

***

### setMinuteStep()

> **setMinuteStep**(`step`): `void`

Defined in: [Time/interfaces/time-configuration.service.interfaces.ts:87](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-configuration.service.interfaces.ts#L87)

Set minute step setting

#### Parameters

##### step

`number`

Minute step interval

#### Returns

`void`

***

### setSecondStep()

> **setSecondStep**(`step`): `void`

Defined in: [Time/interfaces/time-configuration.service.interfaces.ts:99](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-configuration.service.interfaces.ts#L99)

Set second step setting

#### Parameters

##### step

`number`

Second step interval

#### Returns

`void`

***

### setShowMilliseconds()

> **setShowMilliseconds**(`show`): `void`

Defined in: [Time/interfaces/time-configuration.service.interfaces.ts:63](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-configuration.service.interfaces.ts#L63)

Set show milliseconds setting

#### Parameters

##### show

`boolean`

Whether to show milliseconds

#### Returns

`void`

***

### setShowSeconds()

> **setShowSeconds**(`show`): `void`

Defined in: [Time/interfaces/time-configuration.service.interfaces.ts:51](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-configuration.service.interfaces.ts#L51)

Set show seconds setting

#### Parameters

##### show

`boolean`

Whether to show seconds

#### Returns

`void`

***

### setUse12HourFormat()

> **setUse12HourFormat**(`use12Hour`): `void`

Defined in: [Time/interfaces/time-configuration.service.interfaces.ts:75](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-configuration.service.interfaces.ts#L75)

Set 12-hour format setting

#### Parameters

##### use12Hour

`boolean`

Whether to use 12-hour format

#### Returns

`void`

***

### validateTimeFormat()

> **validateTimeFormat**(`format`): `boolean`

Defined in: [Time/interfaces/time-configuration.service.interfaces.ts:26](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-configuration.service.interfaces.ts#L26)

Validate time format string

#### Parameters

##### format

`string`

Time format string

#### Returns

`boolean`

Whether the format is valid
