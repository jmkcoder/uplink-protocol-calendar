[**@uplink-protocol/form-controller v0.3.0**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / ITimeValidationService

# Interface: ITimeValidationService

Defined in: [Time/interfaces/time-validation.service.interfaces.ts:5](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-validation.service.interfaces.ts#L5)

Time validation service interface
Validates times against constraints

## Methods

### isHourDisabled()

> **isHourDisabled**(`hour`, `disabledHours`): `boolean`

Defined in: [Time/interfaces/time-validation.service.interfaces.ts:50](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-validation.service.interfaces.ts#L50)

Check if an hour is disabled

#### Parameters

##### hour

`number`

Hour to check (0-23)

##### disabledHours

`number`[]

Array of disabled hours

#### Returns

`boolean`

Whether hour is disabled

***

### isMinuteDisabled()

> **isMinuteDisabled**(`minute`, `disabledMinutes`): `boolean`

Defined in: [Time/interfaces/time-validation.service.interfaces.ts:58](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-validation.service.interfaces.ts#L58)

Check if a minute is disabled

#### Parameters

##### minute

`number`

Minute to check (0-59)

##### disabledMinutes

`number`[]

Array of disabled minutes

#### Returns

`boolean`

Whether minute is disabled

***

### isSecondDisabled()

> **isSecondDisabled**(`second`, `disabledSeconds`): `boolean`

Defined in: [Time/interfaces/time-validation.service.interfaces.ts:66](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-validation.service.interfaces.ts#L66)

Check if a second is disabled

#### Parameters

##### second

`number`

Second to check (0-59)

##### disabledSeconds

`number`[]

Array of disabled seconds

#### Returns

`boolean`

Whether second is disabled

***

### isTimeDisabled()

> **isTimeDisabled**(`time`, `disabledTimes`): `boolean`

Defined in: [Time/interfaces/time-validation.service.interfaces.ts:42](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-validation.service.interfaces.ts#L42)

Check if a time is specifically disabled

#### Parameters

##### time

`Date`

Time to check

##### disabledTimes

`Date`[]

Array of disabled times

#### Returns

`boolean`

Whether time is disabled

***

### isTimeInRange()

> **isTimeInRange**(`time`, `minTime`, `maxTime`): `boolean`

Defined in: [Time/interfaces/time-validation.service.interfaces.ts:34](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-validation.service.interfaces.ts#L34)

Check if a time is within allowed range

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

#### Returns

`boolean`

Whether time is in range

***

### isTimeValid()

> **isTimeValid**(`time`, `minTime`, `maxTime`, `disabledTimes`, `disabledHours`, `disabledMinutes`, `disabledSeconds`): `boolean`

Defined in: [Time/interfaces/time-validation.service.interfaces.ts:17](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-validation.service.interfaces.ts#L17)

Check if a time is valid according to constraints

#### Parameters

##### time

`Date`

Time to validate

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

Whether the time is valid

***

### validateTimeFormat()

> **validateTimeFormat**(`timeString`, `format`): `boolean`

Defined in: [Time/interfaces/time-validation.service.interfaces.ts:74](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-validation.service.interfaces.ts#L74)

Validate time format string

#### Parameters

##### timeString

`string`

Time string to validate

##### format

`string`

Expected format

#### Returns

`boolean`

Whether format is valid
