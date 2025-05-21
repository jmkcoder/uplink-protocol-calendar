[**@uplink-protocol/form-controller v0.1.0**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / IConstraintsService

# Interface: IConstraintsService

Defined in: interfaces/constraints.service.interfaces.ts:5

Constraints service interface
Responsible for managing date constraints like min/max dates and disabled dates

## Methods

### getConstraints()

> **getConstraints**(): `object`

Defined in: interfaces/constraints.service.interfaces.ts:29

Get current constraints

#### Returns

`object`

##### disabledDates

> **disabledDates**: `Date`[]

##### maxDate

> **maxDate**: `null` \| `Date`

##### minDate

> **minDate**: `null` \| `Date`

***

### isDateDisabled()

> **isDateDisabled**(`date`, `minDate`, `maxDate`, `disabledDates`): `boolean`

Defined in: interfaces/constraints.service.interfaces.ts:24

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

***

### setDisabledDates()

> **setDisabledDates**(`dates`): `Date`[]

Defined in: interfaces/constraints.service.interfaces.ts:19

Set disabled dates

#### Parameters

##### dates

`Date`[]

#### Returns

`Date`[]

***

### setMaxDate()

> **setMaxDate**(`date`): `null` \| `Date`

Defined in: interfaces/constraints.service.interfaces.ts:14

Set maximum date

#### Parameters

##### date

`null` | `Date`

#### Returns

`null` \| `Date`

***

### setMinDate()

> **setMinDate**(`date`): `null` \| `Date`

Defined in: interfaces/constraints.service.interfaces.ts:9

Set minimum date

#### Parameters

##### date

`null` | `Date`

#### Returns

`null` \| `Date`
