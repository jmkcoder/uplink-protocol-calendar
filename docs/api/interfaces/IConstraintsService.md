[**@uplink-protocol/form-controller v0.2.3**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / IConstraintsService

# Interface: IConstraintsService

Defined in: [interfaces/constraints.service.interfaces.ts:5](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b9b5d949a141a189c8cea12210e36bb76f18ad06/src/interfaces/constraints.service.interfaces.ts#L5)

Constraints service interface
Responsible for managing date constraints like min/max dates and disabled dates

## Methods

### addDisabledDate()

> **addDisabledDate**(`date`): `Date`[]

Defined in: [interfaces/constraints.service.interfaces.ts:44](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b9b5d949a141a189c8cea12210e36bb76f18ad06/src/interfaces/constraints.service.interfaces.ts#L44)

Add a date to the disabled dates list

#### Parameters

##### date

`Date`

#### Returns

`Date`[]

***

### addDisabledDayOfWeek()

> **addDisabledDayOfWeek**(`day`): `number`[]

Defined in: [interfaces/constraints.service.interfaces.ts:54](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b9b5d949a141a189c8cea12210e36bb76f18ad06/src/interfaces/constraints.service.interfaces.ts#L54)

Add a day of the week to the disabled days list

#### Parameters

##### day

`number`

#### Returns

`number`[]

***

### getConstraints()

> **getConstraints**(): `object`

Defined in: [interfaces/constraints.service.interfaces.ts:34](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b9b5d949a141a189c8cea12210e36bb76f18ad06/src/interfaces/constraints.service.interfaces.ts#L34)

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

***

### getDisabledDaysOfWeek()

> **getDisabledDaysOfWeek**(): `number`[]

Defined in: [interfaces/constraints.service.interfaces.ts:64](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b9b5d949a141a189c8cea12210e36bb76f18ad06/src/interfaces/constraints.service.interfaces.ts#L64)

Get disabled days of the week

#### Returns

`number`[]

***

### isDateDisabled()

> **isDateDisabled**(`date`, `minDate`, `maxDate`, `disabledDates`, `disabledDaysOfWeek?`): `boolean`

Defined in: [interfaces/constraints.service.interfaces.ts:29](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b9b5d949a141a189c8cea12210e36bb76f18ad06/src/interfaces/constraints.service.interfaces.ts#L29)

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

##### disabledDaysOfWeek?

`number`[]

#### Returns

`boolean`

***

### removeDisabledDate()

> **removeDisabledDate**(`date`): `Date`[]

Defined in: [interfaces/constraints.service.interfaces.ts:49](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b9b5d949a141a189c8cea12210e36bb76f18ad06/src/interfaces/constraints.service.interfaces.ts#L49)

Remove a date from the disabled dates list

#### Parameters

##### date

`Date`

#### Returns

`Date`[]

***

### removeDisabledDayOfWeek()

> **removeDisabledDayOfWeek**(`day`): `number`[]

Defined in: [interfaces/constraints.service.interfaces.ts:59](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b9b5d949a141a189c8cea12210e36bb76f18ad06/src/interfaces/constraints.service.interfaces.ts#L59)

Remove a day of the week from the disabled days list

#### Parameters

##### day

`number`

#### Returns

`number`[]

***

### setDisabledDates()

> **setDisabledDates**(`dates`): `Date`[]

Defined in: [interfaces/constraints.service.interfaces.ts:19](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b9b5d949a141a189c8cea12210e36bb76f18ad06/src/interfaces/constraints.service.interfaces.ts#L19)

Set disabled dates

#### Parameters

##### dates

`Date`[]

#### Returns

`Date`[]

***

### setDisabledDaysOfWeek()

> **setDisabledDaysOfWeek**(`days`): `number`[]

Defined in: [interfaces/constraints.service.interfaces.ts:24](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b9b5d949a141a189c8cea12210e36bb76f18ad06/src/interfaces/constraints.service.interfaces.ts#L24)

Set disabled days of the week

#### Parameters

##### days

`number`[]

#### Returns

`number`[]

***

### setMaxDate()

> **setMaxDate**(`date`): `null` \| `Date`

Defined in: [interfaces/constraints.service.interfaces.ts:14](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b9b5d949a141a189c8cea12210e36bb76f18ad06/src/interfaces/constraints.service.interfaces.ts#L14)

Set maximum date

#### Parameters

##### date

`null` | `Date`

#### Returns

`null` \| `Date`

***

### setMinDate()

> **setMinDate**(`date`): `null` \| `Date`

Defined in: [interfaces/constraints.service.interfaces.ts:9](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b9b5d949a141a189c8cea12210e36bb76f18ad06/src/interfaces/constraints.service.interfaces.ts#L9)

Set minimum date

#### Parameters

##### date

`null` | `Date`

#### Returns

`null` \| `Date`
