[**@uplink-protocol/form-controller v0.3.0**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / TimeConfigurationService

# Class: TimeConfigurationService

Defined in: [Time/services/time-configuration.service.ts:7](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-configuration.service.ts#L7)

TimeConfigurationService - Implementation of ITimeConfigurationService
Manages time picker configuration and validation

## Implements

- [`ITimeConfigurationService`](../interfaces/ITimeConfigurationService.md)

## Constructors

### Constructor

> **new TimeConfigurationService**(): `TimeConfigurationService`

#### Returns

`TimeConfigurationService`

## Methods

### getDefaultTimeOptions()

> **getDefaultTimeOptions**(): [`TimeOptions`](../interfaces/TimeOptions.md)

Defined in: [Time/services/time-configuration.service.ts:19](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-configuration.service.ts#L19)

Get default time options

#### Returns

[`TimeOptions`](../interfaces/TimeOptions.md)

Default time configuration

#### Implementation of

[`ITimeConfigurationService`](../interfaces/ITimeConfigurationService.md).[`getDefaultTimeOptions`](../interfaces/ITimeConfigurationService.md#getdefaulttimeoptions)

***

### getMinuteStep()

> **getMinuteStep**(): `number`

Defined in: [Time/services/time-configuration.service.ts:95](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-configuration.service.ts#L95)

Get minute step setting

#### Returns

`number`

Minute step interval

#### Implementation of

[`ITimeConfigurationService`](../interfaces/ITimeConfigurationService.md).[`getMinuteStep`](../interfaces/ITimeConfigurationService.md#getminutestep)

***

### getSecondStep()

> **getSecondStep**(): `number`

Defined in: [Time/services/time-configuration.service.ts:105](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-configuration.service.ts#L105)

Get second step setting

#### Returns

`number`

Second step interval

#### Implementation of

[`ITimeConfigurationService`](../interfaces/ITimeConfigurationService.md).[`getSecondStep`](../interfaces/ITimeConfigurationService.md#getsecondstep)

***

### getShowMilliseconds()

> **getShowMilliseconds**(): `boolean`

Defined in: [Time/services/time-configuration.service.ts:79](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-configuration.service.ts#L79)

Get show milliseconds setting

#### Returns

`boolean`

Whether to show milliseconds

#### Implementation of

[`ITimeConfigurationService`](../interfaces/ITimeConfigurationService.md).[`getShowMilliseconds`](../interfaces/ITimeConfigurationService.md#getshowmilliseconds)

***

### getShowSeconds()

> **getShowSeconds**(): `boolean`

Defined in: [Time/services/time-configuration.service.ts:71](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-configuration.service.ts#L71)

Get show seconds setting

#### Returns

`boolean`

Whether to show seconds

#### Implementation of

[`ITimeConfigurationService`](../interfaces/ITimeConfigurationService.md).[`getShowSeconds`](../interfaces/ITimeConfigurationService.md#getshowseconds)

***

### getSupportedTimeFormats()

> **getSupportedTimeFormats**(): `string`[]

Defined in: [Time/services/time-configuration.service.ts:40](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-configuration.service.ts#L40)

Get supported time formats

#### Returns

`string`[]

Array of supported format strings

#### Implementation of

[`ITimeConfigurationService`](../interfaces/ITimeConfigurationService.md).[`getSupportedTimeFormats`](../interfaces/ITimeConfigurationService.md#getsupportedtimeformats)

***

### getUse12HourFormat()

> **getUse12HourFormat**(): `boolean`

Defined in: [Time/services/time-configuration.service.ts:87](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-configuration.service.ts#L87)

Get 12-hour format setting

#### Returns

`boolean`

Whether to use 12-hour format

#### Implementation of

[`ITimeConfigurationService`](../interfaces/ITimeConfigurationService.md).[`getUse12HourFormat`](../interfaces/ITimeConfigurationService.md#getuse12hourformat)

***

### normalizeTimeOptions()

> **normalizeTimeOptions**(`options`): [`TimeOptions`](../interfaces/TimeOptions.md)

Defined in: [Time/services/time-configuration.service.ts:51](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-configuration.service.ts#L51)

Normalize time options for consistency

#### Parameters

##### options

[`TimeOptions`](../interfaces/TimeOptions.md)

Time options to normalize

#### Returns

[`TimeOptions`](../interfaces/TimeOptions.md)

Normalized options

#### Implementation of

[`ITimeConfigurationService`](../interfaces/ITimeConfigurationService.md).[`normalizeTimeOptions`](../interfaces/ITimeConfigurationService.md#normalizetimeoptions)

***

### processTimeOptions()

> **processTimeOptions**(`options`): [`TimeOptions`](../interfaces/TimeOptions.md)

Defined in: [Time/services/time-configuration.service.ts:14](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-configuration.service.ts#L14)

Process and validate time configuration options

#### Parameters

##### options

[`TimeOptions`](../interfaces/TimeOptions.md)

Raw time options

#### Returns

[`TimeOptions`](../interfaces/TimeOptions.md)

Processed and validated options

#### Implementation of

[`ITimeConfigurationService`](../interfaces/ITimeConfigurationService.md).[`processTimeOptions`](../interfaces/ITimeConfigurationService.md#processtimeoptions)

***

### setMinuteStep()

> **setMinuteStep**(`step`): `void`

Defined in: [Time/services/time-configuration.service.ts:99](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-configuration.service.ts#L99)

Set minute step setting

#### Parameters

##### step

`number`

Minute step interval

#### Returns

`void`

#### Implementation of

[`ITimeConfigurationService`](../interfaces/ITimeConfigurationService.md).[`setMinuteStep`](../interfaces/ITimeConfigurationService.md#setminutestep)

***

### setSecondStep()

> **setSecondStep**(`step`): `void`

Defined in: [Time/services/time-configuration.service.ts:109](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-configuration.service.ts#L109)

Set second step setting

#### Parameters

##### step

`number`

Second step interval

#### Returns

`void`

#### Implementation of

[`ITimeConfigurationService`](../interfaces/ITimeConfigurationService.md).[`setSecondStep`](../interfaces/ITimeConfigurationService.md#setsecondstep)

***

### setShowMilliseconds()

> **setShowMilliseconds**(`show`): `void`

Defined in: [Time/services/time-configuration.service.ts:83](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-configuration.service.ts#L83)

Set show milliseconds setting

#### Parameters

##### show

`boolean`

Whether to show milliseconds

#### Returns

`void`

#### Implementation of

[`ITimeConfigurationService`](../interfaces/ITimeConfigurationService.md).[`setShowMilliseconds`](../interfaces/ITimeConfigurationService.md#setshowmilliseconds)

***

### setShowSeconds()

> **setShowSeconds**(`show`): `void`

Defined in: [Time/services/time-configuration.service.ts:75](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-configuration.service.ts#L75)

Set show seconds setting

#### Parameters

##### show

`boolean`

Whether to show seconds

#### Returns

`void`

#### Implementation of

[`ITimeConfigurationService`](../interfaces/ITimeConfigurationService.md).[`setShowSeconds`](../interfaces/ITimeConfigurationService.md#setshowseconds)

***

### setUse12HourFormat()

> **setUse12HourFormat**(`use12Hour`): `void`

Defined in: [Time/services/time-configuration.service.ts:91](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-configuration.service.ts#L91)

Set 12-hour format setting

#### Parameters

##### use12Hour

`boolean`

Whether to use 12-hour format

#### Returns

`void`

#### Implementation of

[`ITimeConfigurationService`](../interfaces/ITimeConfigurationService.md).[`setUse12HourFormat`](../interfaces/ITimeConfigurationService.md#setuse12hourformat)

***

### validateTimeFormat()

> **validateTimeFormat**(`format`): `boolean`

Defined in: [Time/services/time-configuration.service.ts:35](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-configuration.service.ts#L35)

Validate time format string

#### Parameters

##### format

`string`

Time format string

#### Returns

`boolean`

Whether the format is valid

#### Implementation of

[`ITimeConfigurationService`](../interfaces/ITimeConfigurationService.md).[`validateTimeFormat`](../interfaces/ITimeConfigurationService.md#validatetimeformat)
