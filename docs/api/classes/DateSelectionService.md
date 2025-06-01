[**@uplink-protocol/form-controller v0.1.6**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / DateSelectionService

# Class: DateSelectionService

Defined in: [services/date-selection.service.ts:8](https://github.com/jmkcoder/uplink-protocol-calendar/blob/f78ad3d76836bc48e6721214f929c06c541c2ab7/src/services/date-selection.service.ts#L8)

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

### clearDateRange()

> **clearDateRange**(): `object`

Defined in: [services/date-selection.service.ts:84](https://github.com/jmkcoder/uplink-protocol-calendar/blob/f78ad3d76836bc48e6721214f929c06c541c2ab7/src/services/date-selection.service.ts#L84)

Clear the date range selection

#### Returns

`object`

Empty date range

##### endDate

> **endDate**: `null` \| `Date`

##### startDate

> **startDate**: `null` \| `Date`

#### Implementation of

[`IDateSelectionService`](../interfaces/IDateSelectionService.md).[`clearDateRange`](../interfaces/IDateSelectionService.md#cleardaterange)

***

### clearSelection()

> **clearSelection**(): `object`

Defined in: [services/date-selection.service.ts:70](https://github.com/jmkcoder/uplink-protocol-calendar/blob/f78ad3d76836bc48e6721214f929c06c541c2ab7/src/services/date-selection.service.ts#L70)

Clear the current selection

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

Defined in: [services/date-selection.service.ts:104](https://github.com/jmkcoder/uplink-protocol-calendar/blob/f78ad3d76836bc48e6721214f929c06c541c2ab7/src/services/date-selection.service.ts#L104)

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

### isDateInSelectedRange()

> **isDateInSelectedRange**(`date`, `range`): `boolean`

Defined in: [services/date-selection.service.ts:144](https://github.com/jmkcoder/uplink-protocol-calendar/blob/f78ad3d76836bc48e6721214f929c06c541c2ab7/src/services/date-selection.service.ts#L144)

Check if a date is in the selected range (simplified version)

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

`boolean`

Boolean indicating if the date is in range

#### Implementation of

[`IDateSelectionService`](../interfaces/IDateSelectionService.md).[`isDateInSelectedRange`](../interfaces/IDateSelectionService.md#isdateinselectedrange)

***

### isDateSelected()

> **isDateSelected**(`date`, `selectedDate`): `boolean`

Defined in: [services/date-selection.service.ts:94](https://github.com/jmkcoder/uplink-protocol-calendar/blob/f78ad3d76836bc48e6721214f929c06c541c2ab7/src/services/date-selection.service.ts#L94)

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

Defined in: [services/date-selection.service.ts:14](https://github.com/jmkcoder/uplink-protocol-calendar/blob/f78ad3d76836bc48e6721214f929c06c541c2ab7/src/services/date-selection.service.ts#L14)

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

Defined in: [services/date-selection.service.ts:23](https://github.com/jmkcoder/uplink-protocol-calendar/blob/f78ad3d76836bc48e6721214f929c06c541c2ab7/src/services/date-selection.service.ts#L23)

Select a date for a range

#### Parameters

##### date

`Date`

Date being selected

##### currentRange

Current date range

###### end?

`null` \| `Date`

###### endDate?

`null` \| `Date`

###### start?

`null` \| `Date`

###### startDate?

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
