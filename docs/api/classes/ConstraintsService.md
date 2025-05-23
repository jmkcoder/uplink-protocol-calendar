[**@uplink-protocol/form-controller v0.1.2**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / ConstraintsService

# Class: ConstraintsService

Defined in: [services/constraints.service.ts:7](https://github.com/jmkcoder/uplink-protocol-calendar/blob/519c17274ca35a5b4f4dfa9d2f04d55cb230d0b4/src/services/constraints.service.ts#L7)

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

Defined in: [services/constraints.service.ts:73](https://github.com/jmkcoder/uplink-protocol-calendar/blob/519c17274ca35a5b4f4dfa9d2f04d55cb230d0b4/src/services/constraints.service.ts#L73)

Add a date to the disabled dates list

#### Parameters

##### date

`Date`

#### Returns

`Date`[]

#### Implementation of

[`IConstraintsService`](../interfaces/IConstraintsService.md).[`addDisabledDate`](../interfaces/IConstraintsService.md#adddisableddate)

***

### getConstraints()

> **getConstraints**(): `object`

Defined in: [services/constraints.service.ts:58](https://github.com/jmkcoder/uplink-protocol-calendar/blob/519c17274ca35a5b4f4dfa9d2f04d55cb230d0b4/src/services/constraints.service.ts#L58)

Get current constraints

#### Returns

`object`

##### disabledDates

> **disabledDates**: `Date`[]

##### maxDate

> **maxDate**: `null` \| `Date`

##### minDate

> **minDate**: `null` \| `Date`

#### Implementation of

[`IConstraintsService`](../interfaces/IConstraintsService.md).[`getConstraints`](../interfaces/IConstraintsService.md#getconstraints)

***

### isDateDisabled()

> **isDateDisabled**(`date`, `minDate`, `maxDate`, `disabledDates`): `boolean`

Defined in: [services/constraints.service.ts:39](https://github.com/jmkcoder/uplink-protocol-calendar/blob/519c17274ca35a5b4f4dfa9d2f04d55cb230d0b4/src/services/constraints.service.ts#L39)

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

#### Returns

`boolean`

#### Implementation of

[`IConstraintsService`](../interfaces/IConstraintsService.md).[`isDateDisabled`](../interfaces/IConstraintsService.md#isdatedisabled)

***

### removeDisabledDate()

> **removeDisabledDate**(`date`): `Date`[]

Defined in: [services/constraints.service.ts:91](https://github.com/jmkcoder/uplink-protocol-calendar/blob/519c17274ca35a5b4f4dfa9d2f04d55cb230d0b4/src/services/constraints.service.ts#L91)

Remove a date from the disabled dates list

#### Parameters

##### date

`Date`

#### Returns

`Date`[]

#### Implementation of

[`IConstraintsService`](../interfaces/IConstraintsService.md).[`removeDisabledDate`](../interfaces/IConstraintsService.md#removedisableddate)

***

### setDisabledDates()

> **setDisabledDates**(`dates`): `Date`[]

Defined in: [services/constraints.service.ts:31](https://github.com/jmkcoder/uplink-protocol-calendar/blob/519c17274ca35a5b4f4dfa9d2f04d55cb230d0b4/src/services/constraints.service.ts#L31)

Set disabled dates

#### Parameters

##### dates

`Date`[]

#### Returns

`Date`[]

#### Implementation of

[`IConstraintsService`](../interfaces/IConstraintsService.md).[`setDisabledDates`](../interfaces/IConstraintsService.md#setdisableddates)

***

### setMaxDate()

> **setMaxDate**(`date`): `null` \| `Date`

Defined in: [services/constraints.service.ts:23](https://github.com/jmkcoder/uplink-protocol-calendar/blob/519c17274ca35a5b4f4dfa9d2f04d55cb230d0b4/src/services/constraints.service.ts#L23)

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

Defined in: [services/constraints.service.ts:15](https://github.com/jmkcoder/uplink-protocol-calendar/blob/519c17274ca35a5b4f4dfa9d2f04d55cb230d0b4/src/services/constraints.service.ts#L15)

Set minimum date

#### Parameters

##### date

`null` | `Date`

#### Returns

`null` \| `Date`

#### Implementation of

[`IConstraintsService`](../interfaces/IConstraintsService.md).[`setMinDate`](../interfaces/IConstraintsService.md#setmindate)
