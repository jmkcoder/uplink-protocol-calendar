[**@uplink-protocol/form-controller v0.1.0**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / DateSelectionService

# Class: DateSelectionService

Defined in: services/date-selection.service.ts:8

Implementation of DateSelectionService
Responsible for handling date selection and ranges

## Implements

- [`IDateSelectionService`](../interfaces/IDateSelectionService.md)

## Constructors

### Constructor

> **new DateSelectionService**(): `DateSelectionService`

#### Returns

`DateSelectionService`

## Methods

### clearSelection()

> **clearSelection**(`isRangeMode`): `object`

Defined in: services/date-selection.service.ts:60

Clear the current selection

#### Parameters

##### isRangeMode

`boolean`

Whether in range selection mode

#### Returns

`object`

Updated selection state

##### selectedDate

> **selectedDate**: `null` \| `Date`

##### selectedDateRange

> **selectedDateRange**: `object`

###### selectedDateRange.endDate

> **endDate**: `null` \| `Date`

###### selectedDateRange.startDate

> **startDate**: `null` \| `Date`

#### Implementation of

[`IDateSelectionService`](../interfaces/IDateSelectionService.md).[`clearSelection`](../interfaces/IDateSelectionService.md#clearselection)

***

### isDateInRange()

> **isDateInRange**(`date`, `range`): `object`

Defined in: services/date-selection.service.ts:94

Check if a date is in the selected range

#### Parameters

##### date

`Date`

Date to check

##### range

Currently selected range

###### endDate

`null` \| `Date`

###### startDate

`null` \| `Date`

#### Returns

`object`

Object with range info

##### isInRange

> **isInRange**: `boolean`

##### isRangeEnd

> **isRangeEnd**: `boolean`

##### isRangeStart

> **isRangeStart**: `boolean`

#### Implementation of

[`IDateSelectionService`](../interfaces/IDateSelectionService.md).[`isDateInRange`](../interfaces/IDateSelectionService.md#isdateinrange)

***

### isDateSelected()

> **isDateSelected**(`date`, `selectedDate`): `boolean`

Defined in: services/date-selection.service.ts:83

Check if a date is selected

#### Parameters

##### date

`Date`

Date to check

##### selectedDate

Currently selected date

`null` | `Date`

#### Returns

`boolean`

Boolean indicating if date is selected

#### Implementation of

[`IDateSelectionService`](../interfaces/IDateSelectionService.md).[`isDateSelected`](../interfaces/IDateSelectionService.md#isdateselected)

***

### selectDate()

> **selectDate**(`date`): `Date`

Defined in: services/date-selection.service.ts:14

Select a single date

#### Parameters

##### date

`Date`

Date to select

#### Returns

`Date`

Selected date

#### Implementation of

[`IDateSelectionService`](../interfaces/IDateSelectionService.md).[`selectDate`](../interfaces/IDateSelectionService.md#selectdate)

***

### selectDateRange()

> **selectDateRange**(`date`, `currentRange`): `object`

Defined in: services/date-selection.service.ts:24

Select a date for a range

#### Parameters

##### date

`Date`

Date being selected

##### currentRange

Current date range

###### endDate

`null` \| `Date`

###### startDate

`null` \| `Date`

#### Returns

`object`

Updated date range

##### endDate

> **endDate**: `null` \| `Date`

##### startDate

> **startDate**: `null` \| `Date`

#### Implementation of

[`IDateSelectionService`](../interfaces/IDateSelectionService.md).[`selectDateRange`](../interfaces/IDateSelectionService.md#selectdaterange)
