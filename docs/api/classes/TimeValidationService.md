[**@uplink-protocol/form-controller v0.3.0**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / TimeValidationService

# Class: TimeValidationService

Defined in: [Time/services/time-validation.service.ts:7](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-validation.service.ts#L7)

TimeValidationService - Implementation of ITimeValidationService
Validates times against constraints

## Implements

- [`ITimeValidationService`](../interfaces/ITimeValidationService.md)

## Constructors

### Constructor

> **new TimeValidationService**(): `TimeValidationService`

#### Returns

`TimeValidationService`

## Methods

### isHourDisabled()

> **isHourDisabled**(`hour`, `disabledHours`): `boolean`

Defined in: [Time/services/time-validation.service.ts:104](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-validation.service.ts#L104)

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

#### Implementation of

[`ITimeValidationService`](../interfaces/ITimeValidationService.md).[`isHourDisabled`](../interfaces/ITimeValidationService.md#ishourdisabled)

***

### isMinuteDisabled()

> **isMinuteDisabled**(`minute`, `disabledMinutes`): `boolean`

Defined in: [Time/services/time-validation.service.ts:114](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-validation.service.ts#L114)

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

#### Implementation of

[`ITimeValidationService`](../interfaces/ITimeValidationService.md).[`isMinuteDisabled`](../interfaces/ITimeValidationService.md#isminutedisabled)

***

### isSecondDisabled()

> **isSecondDisabled**(`second`, `disabledSeconds`): `boolean`

Defined in: [Time/services/time-validation.service.ts:124](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-validation.service.ts#L124)

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

#### Implementation of

[`ITimeValidationService`](../interfaces/ITimeValidationService.md).[`isSecondDisabled`](../interfaces/ITimeValidationService.md#isseconddisabled)

***

### isTimeDisabled()

> **isTimeDisabled**(`time`, `disabledTimes`): `boolean`

Defined in: [Time/services/time-validation.service.ts:89](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-validation.service.ts#L89)

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

#### Implementation of

[`ITimeValidationService`](../interfaces/ITimeValidationService.md).[`isTimeDisabled`](../interfaces/ITimeValidationService.md#istimedisabled)

***

### isTimeInRange()

> **isTimeInRange**(`time`, `minTime`, `maxTime`): `boolean`

Defined in: [Time/services/time-validation.service.ts:63](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-validation.service.ts#L63)

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

#### Implementation of

[`ITimeValidationService`](../interfaces/ITimeValidationService.md).[`isTimeInRange`](../interfaces/ITimeValidationService.md#istimeinrange)

***

### isTimeValid()

> **isTimeValid**(`time`, `minTime`, `maxTime`, `disabledTimes`, `disabledHours`, `disabledMinutes`, `disabledSeconds`): `boolean`

Defined in: [Time/services/time-validation.service.ts:19](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-validation.service.ts#L19)

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

#### Implementation of

[`ITimeValidationService`](../interfaces/ITimeValidationService.md).[`isTimeValid`](../interfaces/ITimeValidationService.md#istimevalid)

***

### validateTimeFormat()

> **validateTimeFormat**(`timeString`, `format`): `boolean`

Defined in: [Time/services/time-validation.service.ts:134](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-validation.service.ts#L134)

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

#### Implementation of

[`ITimeValidationService`](../interfaces/ITimeValidationService.md).[`validateTimeFormat`](../interfaces/ITimeValidationService.md#validatetimeformat)
