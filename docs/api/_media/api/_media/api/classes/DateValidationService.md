[**@uplink-protocol/form-controller v0.3.1**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / DateValidationService

# Class: DateValidationService

Defined in: [Date/services/date-validation.service.ts:8](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/services/date-validation.service.ts#L8)

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

Defined in: [Date/services/date-validation.service.ts:17](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/services/date-validation.service.ts#L17)

Check if a date is disabled based on constraints

#### Parameters

##### date

`Date`

Date to check

##### minDate

Minimum allowed date

`Date` | `null`

##### maxDate

Maximum allowed date

`Date` | `null`

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

Defined in: [Date/services/date-validation.service.ts:86](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/services/date-validation.service.ts#L86)

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

Defined in: [Date/services/date-validation.service.ts:72](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/services/date-validation.service.ts#L72)

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

> **setMaxDate**(`date`): `Date` \| `null`

Defined in: [Date/services/date-validation.service.ts:59](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/services/date-validation.service.ts#L59)

Set maximum selectable date

#### Parameters

##### date

Maximum date

`Date` | `null`

#### Returns

`Date` \| `null`

Normalized maximum date

#### Implementation of

[`IDateValidationService`](../interfaces/IDateValidationService.md).[`setMaxDate`](../interfaces/IDateValidationService.md#setmaxdate)

***

### setMinDate()

> **setMinDate**(`date`): `Date` \| `null`

Defined in: [Date/services/date-validation.service.ts:46](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/services/date-validation.service.ts#L46)

Set minimum selectable date

#### Parameters

##### date

Minimum date

`Date` | `null`

#### Returns

`Date` \| `null`

Normalized minimum date

#### Implementation of

[`IDateValidationService`](../interfaces/IDateValidationService.md).[`setMinDate`](../interfaces/IDateValidationService.md#setmindate)
