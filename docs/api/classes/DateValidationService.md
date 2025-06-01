[**@uplink-protocol/form-controller v0.1.6**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / DateValidationService

# Class: DateValidationService

Defined in: [services/date-validation.service.ts:8](https://github.com/jmkcoder/uplink-protocol-calendar/blob/f78ad3d76836bc48e6721214f929c06c541c2ab7/src/services/date-validation.service.ts#L8)

Implementation of DateValidationService
Responsible for date validation and constraint checking

## Implements

- [`IDateValidationService`](../interfaces/IDateValidationService.md)

## Constructors

### Constructor

> **new DateValidationService**(): `DateValidationService`

#### Returns

`DateValidationService`

## Methods

### isDateDisabled()

> **isDateDisabled**(`date`, `minDate`, `maxDate`, `disabledDates`): `boolean`

Defined in: [services/date-validation.service.ts:17](https://github.com/jmkcoder/uplink-protocol-calendar/blob/f78ad3d76836bc48e6721214f929c06c541c2ab7/src/services/date-validation.service.ts#L17)

Check if a date is disabled based on constraints

#### Parameters

##### date

`Date`

Date to check

##### minDate

Minimum allowed date

`null` | `Date`

##### maxDate

Maximum allowed date

`null` | `Date`

##### disabledDates

`Date`[]

Array of specifically disabled dates

#### Returns

`boolean`

Boolean indicating if date is disabled

#### Implementation of

[`IDateValidationService`](../interfaces/IDateValidationService.md).[`isDateDisabled`](../interfaces/IDateValidationService.md#isdatedisabled)

***

### isSameDay()

> **isSameDay**(`date1`, `date2`): `boolean`

Defined in: [services/date-validation.service.ts:86](https://github.com/jmkcoder/uplink-protocol-calendar/blob/f78ad3d76836bc48e6721214f929c06c541c2ab7/src/services/date-validation.service.ts#L86)

Check if two dates represent the same day

#### Parameters

##### date1

`Date`

First date

##### date2

`Date`

Second date

#### Returns

`boolean`

Boolean indicating if dates are the same day

#### Implementation of

[`IDateValidationService`](../interfaces/IDateValidationService.md).[`isSameDay`](../interfaces/IDateValidationService.md#issameday)

***

### setDisabledDates()

> **setDisabledDates**(`dates`): `Date`[]

Defined in: [services/date-validation.service.ts:72](https://github.com/jmkcoder/uplink-protocol-calendar/blob/f78ad3d76836bc48e6721214f929c06c541c2ab7/src/services/date-validation.service.ts#L72)

Set disabled dates

#### Parameters

##### dates

`Date`[]

Array of disabled dates

#### Returns

`Date`[]

Normalized array of disabled dates

#### Implementation of

[`IDateValidationService`](../interfaces/IDateValidationService.md).[`setDisabledDates`](../interfaces/IDateValidationService.md#setdisableddates)

***

### setMaxDate()

> **setMaxDate**(`date`): `null` \| `Date`

Defined in: [services/date-validation.service.ts:59](https://github.com/jmkcoder/uplink-protocol-calendar/blob/f78ad3d76836bc48e6721214f929c06c541c2ab7/src/services/date-validation.service.ts#L59)

Set maximum selectable date

#### Parameters

##### date

Maximum date

`null` | `Date`

#### Returns

`null` \| `Date`

Normalized maximum date

#### Implementation of

[`IDateValidationService`](../interfaces/IDateValidationService.md).[`setMaxDate`](../interfaces/IDateValidationService.md#setmaxdate)

***

### setMinDate()

> **setMinDate**(`date`): `null` \| `Date`

Defined in: [services/date-validation.service.ts:46](https://github.com/jmkcoder/uplink-protocol-calendar/blob/f78ad3d76836bc48e6721214f929c06c541c2ab7/src/services/date-validation.service.ts#L46)

Set minimum selectable date

#### Parameters

##### date

Minimum date

`null` | `Date`

#### Returns

`null` \| `Date`

Normalized minimum date

#### Implementation of

[`IDateValidationService`](../interfaces/IDateValidationService.md).[`setMinDate`](../interfaces/IDateValidationService.md#setmindate)
