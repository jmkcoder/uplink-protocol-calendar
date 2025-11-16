[**@uplink-protocol/form-controller v0.3.1**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / IDateValidationService

# Interface: IDateValidationService

Defined in: [Date/interfaces/date-validation.service.interfaces.ts:5](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/interfaces/date-validation.service.interfaces.ts#L5)

Date validation service interface
Responsible for date validation and constraint checking

## Methods

### isDateDisabled()

> **isDateDisabled**(`date`, `minDate`, `maxDate`, `disabledDates`): `boolean`

Defined in: [Date/interfaces/date-validation.service.interfaces.ts:9](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/interfaces/date-validation.service.interfaces.ts#L9)

Check if a date is disabled based on constraints

#### Parameters

##### date

`Date`

##### minDate

`Date` | `null`

##### maxDate

`Date` | `null`

##### disabledDates

`Date`[]

#### Returns

`boolean`

***

### isSameDay()

> **isSameDay**(`date1`, `date2`): `boolean`

Defined in: [Date/interfaces/date-validation.service.interfaces.ts:34](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/interfaces/date-validation.service.interfaces.ts#L34)

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

Defined in: [Date/interfaces/date-validation.service.interfaces.ts:29](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/interfaces/date-validation.service.interfaces.ts#L29)

Set disabled dates

#### Parameters

##### dates

`Date`[]

#### Returns

`Date`[]

***

### setMaxDate()

> **setMaxDate**(`date`): `Date` \| `null`

Defined in: [Date/interfaces/date-validation.service.interfaces.ts:24](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/interfaces/date-validation.service.interfaces.ts#L24)

Set maximum selectable date

#### Parameters

##### date

`Date` | `null`

#### Returns

`Date` \| `null`

***

### setMinDate()

> **setMinDate**(`date`): `Date` \| `null`

Defined in: [Date/interfaces/date-validation.service.interfaces.ts:19](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/interfaces/date-validation.service.interfaces.ts#L19)

Set minimum selectable date

#### Parameters

##### date

`Date` | `null`

#### Returns

`Date` \| `null`
