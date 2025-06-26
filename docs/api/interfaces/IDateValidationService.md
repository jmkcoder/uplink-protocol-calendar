[**@uplink-protocol/form-controller v0.3.0**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / IDateValidationService

# Interface: IDateValidationService

Defined in: [Date/interfaces/date-validation.service.interfaces.ts:5](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/interfaces/date-validation.service.interfaces.ts#L5)

Date validation service interface
Responsible for date validation and constraint checking

## Methods

### isDateDisabled()

> **isDateDisabled**(`date`, `minDate`, `maxDate`, `disabledDates`): `boolean`

Defined in: [Date/interfaces/date-validation.service.interfaces.ts:9](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/interfaces/date-validation.service.interfaces.ts#L9)

Check if a date is disabled based on constraints

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

### isSameDay()

> **isSameDay**(`date1`, `date2`): `boolean`

Defined in: [Date/interfaces/date-validation.service.interfaces.ts:34](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/interfaces/date-validation.service.interfaces.ts#L34)

Check if two dates represent the same day

#### Parameters

##### date1

`Date`

##### date2

`Date`

#### Returns

`boolean`

***

### setDisabledDates()

> **setDisabledDates**(`dates`): `Date`[]

Defined in: [Date/interfaces/date-validation.service.interfaces.ts:29](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/interfaces/date-validation.service.interfaces.ts#L29)

Set disabled dates

#### Parameters

##### dates

`Date`[]

#### Returns

`Date`[]

***

### setMaxDate()

> **setMaxDate**(`date`): `null` \| `Date`

Defined in: [Date/interfaces/date-validation.service.interfaces.ts:24](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/interfaces/date-validation.service.interfaces.ts#L24)

Set maximum selectable date

#### Parameters

##### date

`null` | `Date`

#### Returns

`null` \| `Date`

***

### setMinDate()

> **setMinDate**(`date`): `null` \| `Date`

Defined in: [Date/interfaces/date-validation.service.interfaces.ts:19](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/interfaces/date-validation.service.interfaces.ts#L19)

Set minimum selectable date

#### Parameters

##### date

`null` | `Date`

#### Returns

`null` \| `Date`
