[**@uplink-protocol/form-controller v0.3.0**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / IDateSelectionService

# Interface: IDateSelectionService

Defined in: [Date/interfaces/date-selection.service.interfaces.ts:5](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/interfaces/date-selection.service.interfaces.ts#L5)

Date selection service interface
Responsible for handling date selection and ranges

## Methods

### clearDateRange()

> **clearDateRange**(): `object`

Defined in: [Date/interfaces/date-selection.service.interfaces.ts:39](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/interfaces/date-selection.service.interfaces.ts#L39)

Clear the date range selection

#### Returns

`object`

##### endDate

> **endDate**: `null` \| `Date`

##### startDate

> **startDate**: `null` \| `Date`

***

### clearSelection()

> **clearSelection**(`isRangeMode`): `object`

Defined in: [Date/interfaces/date-selection.service.interfaces.ts:19](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/interfaces/date-selection.service.interfaces.ts#L19)

Clear the current selection

#### Parameters

##### isRangeMode

`boolean`

#### Returns

`object`

##### selectedDate

> **selectedDate**: `null` \| `Date`

##### selectedDateRange

> **selectedDateRange**: `object`

###### selectedDateRange.endDate

> **endDate**: `null` \| `Date`

###### selectedDateRange.startDate

> **startDate**: `null` \| `Date`

***

### isDateInRange()

> **isDateInRange**(`date`, `range`): `object`

Defined in: [Date/interfaces/date-selection.service.interfaces.ts:31](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/interfaces/date-selection.service.interfaces.ts#L31)

Check if a given date is in the selected range

#### Parameters

##### date

`Date`

##### range

###### endDate

`null` \| `Date`

###### startDate

`null` \| `Date`

#### Returns

`object`

##### isInRange

> **isInRange**: `boolean`

##### isRangeEnd

> **isRangeEnd**: `boolean`

##### isRangeStart

> **isRangeStart**: `boolean`

***

### isDateInSelectedRange()

> **isDateInSelectedRange**(`date`, `range`): `boolean`

Defined in: [Date/interfaces/date-selection.service.interfaces.ts:44](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/interfaces/date-selection.service.interfaces.ts#L44)

Check if a date is in the selected range (simplified version)

#### Parameters

##### date

`Date`

##### range

###### endDate

`null` \| `Date`

###### startDate

`null` \| `Date`

#### Returns

`boolean`

***

### isDateSelected()

> **isDateSelected**(`date`, `selectedDate`): `boolean`

Defined in: [Date/interfaces/date-selection.service.interfaces.ts:27](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/interfaces/date-selection.service.interfaces.ts#L27)

Check if a given date is selected

#### Parameters

##### date

`Date`

##### selectedDate

`null` | `Date`

#### Returns

`boolean`

***

### selectDate()

> **selectDate**(`date`): `Date`

Defined in: [Date/interfaces/date-selection.service.interfaces.ts:9](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/interfaces/date-selection.service.interfaces.ts#L9)

Select a single date

#### Parameters

##### date

`Date`

#### Returns

`Date`

***

### selectDateRange()

> **selectDateRange**(`date`, `currentRange`): `object`

Defined in: [Date/interfaces/date-selection.service.interfaces.ts:14](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/interfaces/date-selection.service.interfaces.ts#L14)

Select a date for a range

#### Parameters

##### date

`Date`

##### currentRange

###### endDate

`null` \| `Date`

###### startDate

`null` \| `Date`

#### Returns

`object`

##### endDate

> **endDate**: `null` \| `Date`

##### startDate

> **startDate**: `null` \| `Date`
