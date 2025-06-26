[**@uplink-protocol/form-controller v0.3.0**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / ITimeConstraintsService

# Interface: ITimeConstraintsService

Defined in: [Time/interfaces/time-constraints.service.interfaces.ts:7](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-constraints.service.interfaces.ts#L7)

Time constraints service interface
Manages time constraints and validation

## Methods

### addDisabledHour()

> **addDisabledHour**(`hour`, `currentDisabledHours`): `number`[]

Defined in: [Time/interfaces/time-constraints.service.interfaces.ts:72](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-constraints.service.interfaces.ts#L72)

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

***

### addDisabledTime()

> **addDisabledTime**(`time`, `currentDisabledTimes`): `Date`[]

Defined in: [Time/interfaces/time-constraints.service.interfaces.ts:56](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-constraints.service.interfaces.ts#L56)

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

***

### isTimeDisabled()

> **isTimeDisabled**(`time`, `minTime`, `maxTime`, `disabledTimes`, `disabledHours`, `disabledMinutes`, `disabledSeconds`): `boolean`

Defined in: [Time/interfaces/time-constraints.service.interfaces.ts:19](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-constraints.service.interfaces.ts#L19)

Check if a time is disabled based on all constraints

#### Parameters

##### time

`Date`

Time to check

##### minTime

Minimum allowed time

`null` | `Date`

##### maxTime

Maximum allowed time

`null` | `Date`

##### disabledTimes

`Date`[]

Array of disabled times

##### disabledHours

`number`[]

Array of disabled hours

##### disabledMinutes

`number`[]

Array of disabled minutes

##### disabledSeconds

`number`[]

Array of disabled seconds

#### Returns

`boolean`

Whether the time is disabled

***

### isValidStep()

> **isValidStep**(`step`, `type`): `boolean`

Defined in: [Time/interfaces/time-constraints.service.interfaces.ts:95](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-constraints.service.interfaces.ts#L95)

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

***

### removeDisabledHour()

> **removeDisabledHour**(`hour`, `currentDisabledHours`): `number`[]

Defined in: [Time/interfaces/time-constraints.service.interfaces.ts:80](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-constraints.service.interfaces.ts#L80)

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

***

### removeDisabledTime()

> **removeDisabledTime**(`time`, `currentDisabledTimes`): `Date`[]

Defined in: [Time/interfaces/time-constraints.service.interfaces.ts:64](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-constraints.service.interfaces.ts#L64)

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

***

### setDisabledHours()

> **setDisabledHours**(`hours`): `number`[]

Defined in: [Time/interfaces/time-constraints.service.interfaces.ts:34](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-constraints.service.interfaces.ts#L34)

Validate and set disabled hours

#### Parameters

##### hours

`number`[]

Array of hours to disable (0-23)

#### Returns

`number`[]

Validated array of disabled hours

***

### setDisabledMinutes()

> **setDisabledMinutes**(`minutes`): `number`[]

Defined in: [Time/interfaces/time-constraints.service.interfaces.ts:41](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-constraints.service.interfaces.ts#L41)

Validate and set disabled minutes

#### Parameters

##### minutes

`number`[]

Array of minutes to disable (0-59)

#### Returns

`number`[]

Validated array of disabled minutes

***

### setDisabledSeconds()

> **setDisabledSeconds**(`seconds`): `number`[]

Defined in: [Time/interfaces/time-constraints.service.interfaces.ts:48](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-constraints.service.interfaces.ts#L48)

Validate and set disabled seconds

#### Parameters

##### seconds

`number`[]

Array of seconds to disable (0-59)

#### Returns

`number`[]

Validated array of disabled seconds

***

### validateTimeOptions()

> **validateTimeOptions**(`options`): [`TimeOptions`](TimeOptions.md)

Defined in: [Time/interfaces/time-constraints.service.interfaces.ts:87](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-constraints.service.interfaces.ts#L87)

Validate time options

#### Parameters

##### options

[`TimeOptions`](TimeOptions.md)

Time options to validate

#### Returns

[`TimeOptions`](TimeOptions.md)

Validated time options
