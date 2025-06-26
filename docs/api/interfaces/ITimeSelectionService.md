[**@uplink-protocol/form-controller v0.3.0**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / ITimeSelectionService

# Interface: ITimeSelectionService

Defined in: [Time/interfaces/time-selection.service.interfaces.ts:7](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-selection.service.interfaces.ts#L7)

Time selection service interface
Handles time selection logic including single time and time range selection

## Methods

### clearSelection()

> **clearSelection**(): `object`

Defined in: [Time/interfaces/time-selection.service.interfaces.ts:30](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-selection.service.interfaces.ts#L30)

Clear current time selection

#### Returns

`object`

Cleared selection state

##### selectedTime

> **selectedTime**: `null` \| `Date`

##### selectedTimeRange

> **selectedTimeRange**: [`TimeRange`](TimeRange.md)

***

### isRangeEnd()

> **isRangeEnd**(`time`, `range`): `boolean`

Defined in: [Time/interfaces/time-selection.service.interfaces.ts:70](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-selection.service.interfaces.ts#L70)

Check if a time is the end of a range

#### Parameters

##### time

`Date`

Time to check

##### range

[`TimeRange`](TimeRange.md)

Selected time range

#### Returns

`boolean`

Whether the time is range end

***

### isRangeStart()

> **isRangeStart**(`time`, `range`): `boolean`

Defined in: [Time/interfaces/time-selection.service.interfaces.ts:62](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-selection.service.interfaces.ts#L62)

Check if a time is the start of a range

#### Parameters

##### time

`Date`

Time to check

##### range

[`TimeRange`](TimeRange.md)

Selected time range

#### Returns

`boolean`

Whether the time is range start

***

### isTimeInRange()

> **isTimeInRange**(`time`, `range`): `boolean`

Defined in: [Time/interfaces/time-selection.service.interfaces.ts:54](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-selection.service.interfaces.ts#L54)

Check if a time is in the selected range

#### Parameters

##### time

`Date`

Time to check

##### range

[`TimeRange`](TimeRange.md)

Selected time range

#### Returns

`boolean`

Whether the time is in range

***

### isTimeSelected()

> **isTimeSelected**(`time`, `selectedTime`, `selectedRange`): `boolean`

Defined in: [Time/interfaces/time-selection.service.interfaces.ts:42](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-selection.service.interfaces.ts#L42)

Check if a time is selected

#### Parameters

##### time

`Date`

Time to check

##### selectedTime

Currently selected time

`null` | `Date`

##### selectedRange

[`TimeRange`](TimeRange.md)

Currently selected range

#### Returns

`boolean`

Whether the time is selected

***

### selectTime()

> **selectTime**(`time`, `currentSelectedTime`, `isRangeSelection`, `currentRange`): `object`

Defined in: [Time/interfaces/time-selection.service.interfaces.ts:16](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-selection.service.interfaces.ts#L16)

Select a specific time

#### Parameters

##### time

`Date`

Time to select

##### currentSelectedTime

Currently selected time

`null` | `Date`

##### isRangeSelection

`boolean`

Whether range selection is enabled

##### currentRange

[`TimeRange`](TimeRange.md)

Current time range selection

#### Returns

`object`

New selection state

##### selectedTime

> **selectedTime**: `null` \| `Date`

##### selectedTimeRange

> **selectedTimeRange**: [`TimeRange`](TimeRange.md)
