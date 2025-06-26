[**@uplink-protocol/form-controller v0.3.0**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / TimeConstraintsService

# Class: TimeConstraintsService

Defined in: [Time/services/time-constraints.service.ts:7](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-constraints.service.ts#L7)

TimeConstraintsService - Implementation of ITimeConstraintsService
Manages time constraints and validation

## Implements

- [`ITimeConstraintsService`](../interfaces/ITimeConstraintsService.md)

## Constructors

### Constructor

> **new TimeConstraintsService**(): `TimeConstraintsService`

#### Returns

`TimeConstraintsService`

## Methods

### addDisabledHour()

> **addDisabledHour**(`hour`, `currentDisabledHours`): `number`[]

Defined in: [Time/services/time-constraints.service.ts:56](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-constraints.service.ts#L56)

Add a disabled hour

#### Parameters

##### hour

`number`

Hour to disable (0-23)

##### currentDisabledHours

`number`[]

Current array of disabled hours

#### Returns

`number`[]

Updated array of disabled hours

#### Implementation of

[`ITimeConstraintsService`](../interfaces/ITimeConstraintsService.md).[`addDisabledHour`](../interfaces/ITimeConstraintsService.md#adddisabledhour)

***

### addDisabledTime()

> **addDisabledTime**(`time`, `currentDisabledTimes`): `Date`[]

Defined in: [Time/services/time-constraints.service.ts:47](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-constraints.service.ts#L47)

Add a disabled time

#### Parameters

##### time

`Date`

Time to disable

##### currentDisabledTimes

`Date`[]

Current array of disabled times

#### Returns

`Date`[]

Updated array of disabled times

#### Implementation of

[`ITimeConstraintsService`](../interfaces/ITimeConstraintsService.md).[`addDisabledTime`](../interfaces/ITimeConstraintsService.md#adddisabledtime)

***

### isTimeDisabled()

> **isTimeDisabled**(`time`, `minTime`, `maxTime`, `disabledTimes`, `disabledHours`, `disabledMinutes`, `disabledSeconds`): `boolean`

Defined in: [Time/services/time-constraints.service.ts:11](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-constraints.service.ts#L11)

Check if a time is disabled based on all constraints

#### Parameters

##### time

`Date`

##### minTime

`null` | `Date`

##### maxTime

`null` | `Date`

##### disabledTimes

`Date`[]

##### disabledHours

`number`[]

##### disabledMinutes

`number`[]

##### disabledSeconds

`number`[]

#### Returns

`boolean`

#### Implementation of

[`ITimeConstraintsService`](../interfaces/ITimeConstraintsService.md).[`isTimeDisabled`](../interfaces/ITimeConstraintsService.md#istimedisabled)

***

### isValidStep()

> **isValidStep**(`step`, `type`): `boolean`

Defined in: [Time/services/time-constraints.service.ts:79](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-constraints.service.ts#L79)

Check if time step is valid

#### Parameters

##### step

`number`

Step value to validate

##### type

Type of step ('minute' or 'second')

`"minute"` | `"second"`

#### Returns

`boolean`

Whether the step is valid

#### Implementation of

[`ITimeConstraintsService`](../interfaces/ITimeConstraintsService.md).[`isValidStep`](../interfaces/ITimeConstraintsService.md#isvalidstep)

***

### removeDisabledHour()

> **removeDisabledHour**(`hour`, `currentDisabledHours`): `number`[]

Defined in: [Time/services/time-constraints.service.ts:63](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-constraints.service.ts#L63)

Remove a disabled hour

#### Parameters

##### hour

`number`

Hour to enable (0-23)

##### currentDisabledHours

`number`[]

Current array of disabled hours

#### Returns

`number`[]

Updated array of disabled hours

#### Implementation of

[`ITimeConstraintsService`](../interfaces/ITimeConstraintsService.md).[`removeDisabledHour`](../interfaces/ITimeConstraintsService.md#removedisabledhour)

***

### removeDisabledTime()

> **removeDisabledTime**(`time`, `currentDisabledTimes`): `Date`[]

Defined in: [Time/services/time-constraints.service.ts:51](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-constraints.service.ts#L51)

Remove a disabled time

#### Parameters

##### time

`Date`

Time to enable

##### currentDisabledTimes

`Date`[]

Current array of disabled times

#### Returns

`Date`[]

Updated array of disabled times

#### Implementation of

[`ITimeConstraintsService`](../interfaces/ITimeConstraintsService.md).[`removeDisabledTime`](../interfaces/ITimeConstraintsService.md#removedisabledtime)

***

### setDisabledHours()

> **setDisabledHours**(`hours`): `number`[]

Defined in: [Time/services/time-constraints.service.ts:35](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-constraints.service.ts#L35)

Validate and set disabled hours

#### Parameters

##### hours

`number`[]

Array of hours to disable (0-23)

#### Returns

`number`[]

Validated array of disabled hours

#### Implementation of

[`ITimeConstraintsService`](../interfaces/ITimeConstraintsService.md).[`setDisabledHours`](../interfaces/ITimeConstraintsService.md#setdisabledhours)

***

### setDisabledMinutes()

> **setDisabledMinutes**(`minutes`): `number`[]

Defined in: [Time/services/time-constraints.service.ts:39](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-constraints.service.ts#L39)

Validate and set disabled minutes

#### Parameters

##### minutes

`number`[]

Array of minutes to disable (0-59)

#### Returns

`number`[]

Validated array of disabled minutes

#### Implementation of

[`ITimeConstraintsService`](../interfaces/ITimeConstraintsService.md).[`setDisabledMinutes`](../interfaces/ITimeConstraintsService.md#setdisabledminutes)

***

### setDisabledSeconds()

> **setDisabledSeconds**(`seconds`): `number`[]

Defined in: [Time/services/time-constraints.service.ts:43](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-constraints.service.ts#L43)

Validate and set disabled seconds

#### Parameters

##### seconds

`number`[]

Array of seconds to disable (0-59)

#### Returns

`number`[]

Validated array of disabled seconds

#### Implementation of

[`ITimeConstraintsService`](../interfaces/ITimeConstraintsService.md).[`setDisabledSeconds`](../interfaces/ITimeConstraintsService.md#setdisabledseconds)

***

### validateTimeOptions()

> **validateTimeOptions**(`options`): [`TimeOptions`](../interfaces/TimeOptions.md)

Defined in: [Time/services/time-constraints.service.ts:67](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-constraints.service.ts#L67)

Validate time options

#### Parameters

##### options

[`TimeOptions`](../interfaces/TimeOptions.md)

Time options to validate

#### Returns

[`TimeOptions`](../interfaces/TimeOptions.md)

Validated time options

#### Implementation of

[`ITimeConstraintsService`](../interfaces/ITimeConstraintsService.md).[`validateTimeOptions`](../interfaces/ITimeConstraintsService.md#validatetimeoptions)
