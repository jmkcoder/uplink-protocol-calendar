[**@uplink-protocol/form-controller v0.1.0**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / IDateSelectionService

# Interface: IDateSelectionService

Defined in: interfaces/date-selection.service.interfaces.ts:5

Date selection service interface
Responsible for handling date selection and ranges

## Methods

### clearSelection()

> **clearSelection**(`isRangeMode`): `object`

Defined in: interfaces/date-selection.service.interfaces.ts:19

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

Defined in: interfaces/date-selection.service.interfaces.ts:32

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

### isDateSelected()

> **isDateSelected**(`date`, `selectedDate`): `boolean`

Defined in: interfaces/date-selection.service.interfaces.ts:27

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

Defined in: interfaces/date-selection.service.interfaces.ts:9

Select a single date

#### Parameters

##### date

`Date`

#### Returns

`Date`

***

### selectDateRange()

> **selectDateRange**(`date`, `currentRange`): `object`

Defined in: interfaces/date-selection.service.interfaces.ts:14

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
