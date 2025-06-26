[**@uplink-protocol/form-controller v0.3.0**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / ConstraintsService

# Class: ConstraintsService

Defined in: [Date/services/constraints.service.ts:7](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/services/constraints.service.ts#L7)

Implementation of ConstraintsService
Responsible for managing date constraints like min/max dates and disabled dates

## Implements

- [`IConstraintsService`](../interfaces/IConstraintsService.md)

## Constructors

### Constructor

> **new ConstraintsService**(): `ConstraintsService`

#### Returns

`ConstraintsService`

## Methods

### addDisabledDate()

> **addDisabledDate**(`date`): `Date`[]

Defined in: [Date/services/constraints.service.ts:92](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/services/constraints.service.ts#L92)

Add a date to the disabled dates list

#### Parameters

##### date

`Date`

#### Returns

`Date`[]

#### Implementation of

[`IConstraintsService`](../interfaces/IConstraintsService.md).[`addDisabledDate`](../interfaces/IConstraintsService.md#adddisableddate)

***

### addDisabledDayOfWeek()

> **addDisabledDayOfWeek**(`day`): `number`[]

Defined in: [Date/services/constraints.service.ts:123](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/services/constraints.service.ts#L123)

Add a day of the week to the disabled days list

#### Parameters

##### day

`number`

#### Returns

`number`[]

#### Implementation of

[`IConstraintsService`](../interfaces/IConstraintsService.md).[`addDisabledDayOfWeek`](../interfaces/IConstraintsService.md#adddisableddayofweek)

***

### getConstraints()

> **getConstraints**(): `object`

Defined in: [Date/services/constraints.service.ts:75](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/services/constraints.service.ts#L75)

Get current constraints

#### Returns

`object`

##### disabledDates

> **disabledDates**: `Date`[]

##### disabledDaysOfWeek

> **disabledDaysOfWeek**: `number`[]

##### maxDate

> **maxDate**: `null` \| `Date`

##### minDate

> **minDate**: `null` \| `Date`

#### Implementation of

[`IConstraintsService`](../interfaces/IConstraintsService.md).[`getConstraints`](../interfaces/IConstraintsService.md#getconstraints)

***

### getDisabledDaysOfWeek()

> **getDisabledDaysOfWeek**(): `number`[]

Defined in: [Date/services/constraints.service.ts:148](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/services/constraints.service.ts#L148)

Get disabled days of the week

#### Returns

`number`[]

#### Implementation of

[`IConstraintsService`](../interfaces/IConstraintsService.md).[`getDisabledDaysOfWeek`](../interfaces/IConstraintsService.md#getdisableddaysofweek)

***

### isDateDisabled()

> **isDateDisabled**(`date`, `minDate`, `maxDate`, `disabledDates`, `disabledDaysOfWeek`): `boolean`

Defined in: [Date/services/constraints.service.ts:51](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/services/constraints.service.ts#L51)

Check if a date is disabled

#### Parameters

##### date

`Date`

##### minDate

`null` | `Date`

##### maxDate

`null` | `Date`

##### disabledDates

`Date`[]

##### disabledDaysOfWeek

`number`[] = `[]`

#### Returns

`boolean`

#### Implementation of

[`IConstraintsService`](../interfaces/IConstraintsService.md).[`isDateDisabled`](../interfaces/IConstraintsService.md#isdatedisabled)

***

### removeDisabledDate()

> **removeDisabledDate**(`date`): `Date`[]

Defined in: [Date/services/constraints.service.ts:110](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/services/constraints.service.ts#L110)

Remove a date from the disabled dates list

#### Parameters

##### date

`Date`

#### Returns

`Date`[]

#### Implementation of

[`IConstraintsService`](../interfaces/IConstraintsService.md).[`removeDisabledDate`](../interfaces/IConstraintsService.md#removedisableddate)

***

### removeDisabledDayOfWeek()

> **removeDisabledDayOfWeek**(`day`): `number`[]

Defined in: [Date/services/constraints.service.ts:140](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/services/constraints.service.ts#L140)

Remove a day of the week from the disabled days list

#### Parameters

##### day

`number`

#### Returns

`number`[]

#### Implementation of

[`IConstraintsService`](../interfaces/IConstraintsService.md).[`removeDisabledDayOfWeek`](../interfaces/IConstraintsService.md#removedisableddayofweek)

***

### setDisabledDates()

> **setDisabledDates**(`dates`): `Date`[]

Defined in: [Date/services/constraints.service.ts:32](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/services/constraints.service.ts#L32)

Set disabled dates

#### Parameters

##### dates

`Date`[]

#### Returns

`Date`[]

#### Implementation of

[`IConstraintsService`](../interfaces/IConstraintsService.md).[`setDisabledDates`](../interfaces/IConstraintsService.md#setdisableddates)

***

### setDisabledDaysOfWeek()

> **setDisabledDaysOfWeek**(`days`): `number`[]

Defined in: [Date/services/constraints.service.ts:39](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/services/constraints.service.ts#L39)

Set disabled days of the week

#### Parameters

##### days

`number`[]

#### Returns

`number`[]

#### Implementation of

[`IConstraintsService`](../interfaces/IConstraintsService.md).[`setDisabledDaysOfWeek`](../interfaces/IConstraintsService.md#setdisableddaysofweek)

***

### setMaxDate()

> **setMaxDate**(`date`): `null` \| `Date`

Defined in: [Date/services/constraints.service.ts:24](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/services/constraints.service.ts#L24)

Set maximum date

#### Parameters

##### date

`null` | `Date`

#### Returns

`null` \| `Date`

#### Implementation of

[`IConstraintsService`](../interfaces/IConstraintsService.md).[`setMaxDate`](../interfaces/IConstraintsService.md#setmaxdate)

***

### setMinDate()

> **setMinDate**(`date`): `null` \| `Date`

Defined in: [Date/services/constraints.service.ts:16](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/services/constraints.service.ts#L16)

Set minimum date

#### Parameters

##### date

`null` | `Date`

#### Returns

`null` \| `Date`

#### Implementation of

[`IConstraintsService`](../interfaces/IConstraintsService.md).[`setMinDate`](../interfaces/IConstraintsService.md#setmindate)
