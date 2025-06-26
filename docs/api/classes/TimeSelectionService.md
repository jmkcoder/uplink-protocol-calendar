[**@uplink-protocol/form-controller v0.3.0**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / TimeSelectionService

# Class: TimeSelectionService

Defined in: [Time/services/time-selection.service.ts:7](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-selection.service.ts#L7)

TimeSelectionService - Implementation of ITimeSelectionService
Handles time selection logic including single time and time range selection

## Implements

- [`ITimeSelectionService`](../interfaces/ITimeSelectionService.md)

## Constructors

### Constructor

> **new TimeSelectionService**(): `TimeSelectionService`

#### Returns

`TimeSelectionService`

## Methods

### clearSelection()

> **clearSelection**(): `object`

Defined in: [Time/services/time-selection.service.ts:69](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-selection.service.ts#L69)

Clear current time selection

#### Returns

`object`

Cleared selection state

##### selectedTime

> **selectedTime**: `null` \| `Date`

##### selectedTimeRange

> **selectedTimeRange**: [`TimeRange`](../interfaces/TimeRange.md)

#### Implementation of

[`ITimeSelectionService`](../interfaces/ITimeSelectionService.md).[`clearSelection`](../interfaces/ITimeSelectionService.md#clearselection)

***

### isRangeEnd()

> **isRangeEnd**(`time`, `range`): `boolean`

Defined in: [Time/services/time-selection.service.ts:141](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-selection.service.ts#L141)

Check if a time is the end of a range

#### Parameters

##### time

`Date`

Time to check

##### range

[`TimeRange`](../interfaces/TimeRange.md)

Selected time range

#### Returns

`boolean`

Whether the time is range end

#### Implementation of

[`ITimeSelectionService`](../interfaces/ITimeSelectionService.md).[`isRangeEnd`](../interfaces/ITimeSelectionService.md#israngeend)

***

### isRangeStart()

> **isRangeStart**(`time`, `range`): `boolean`

Defined in: [Time/services/time-selection.service.ts:131](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-selection.service.ts#L131)

Check if a time is the start of a range

#### Parameters

##### time

`Date`

Time to check

##### range

[`TimeRange`](../interfaces/TimeRange.md)

Selected time range

#### Returns

`boolean`

Whether the time is range start

#### Implementation of

[`ITimeSelectionService`](../interfaces/ITimeSelectionService.md).[`isRangeStart`](../interfaces/ITimeSelectionService.md#israngestart)

***

### isTimeInRange()

> **isTimeInRange**(`time`, `range`): `boolean`

Defined in: [Time/services/time-selection.service.ts:113](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-selection.service.ts#L113)

Check if a time is in the selected range

#### Parameters

##### time

`Date`

Time to check

##### range

[`TimeRange`](../interfaces/TimeRange.md)

Selected time range

#### Returns

`boolean`

Whether the time is in range

#### Implementation of

[`ITimeSelectionService`](../interfaces/ITimeSelectionService.md).[`isTimeInRange`](../interfaces/ITimeSelectionService.md#istimeinrange)

***

### isTimeSelected()

> **isTimeSelected**(`time`, `selectedTime`, `selectedRange`): `boolean`

Defined in: [Time/services/time-selection.service.ts:86](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-selection.service.ts#L86)

Check if a time is selected

#### Parameters

##### time

`Date`

Time to check

##### selectedTime

Currently selected time

`null` | `Date`

##### selectedRange

[`TimeRange`](../interfaces/TimeRange.md)

Currently selected range

#### Returns

`boolean`

Whether the time is selected

#### Implementation of

[`ITimeSelectionService`](../interfaces/ITimeSelectionService.md).[`isTimeSelected`](../interfaces/ITimeSelectionService.md#istimeselected)

***

### selectTime()

> **selectTime**(`time`, `_currentSelectedTime`, `isRangeSelection`, `currentRange`): `object`

Defined in: [Time/services/time-selection.service.ts:15](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-selection.service.ts#L15)

Select a specific time

#### Parameters

##### time

`Date`

Time to select

##### \_currentSelectedTime

`null` | `Date`

##### isRangeSelection

`boolean`

Whether range selection is enabled

##### currentRange

[`TimeRange`](../interfaces/TimeRange.md)

Current time range selection

#### Returns

`object`

New selection state

##### selectedTime

> **selectedTime**: `null` \| `Date`

##### selectedTimeRange

> **selectedTimeRange**: [`TimeRange`](../interfaces/TimeRange.md)

#### Implementation of

[`ITimeSelectionService`](../interfaces/ITimeSelectionService.md).[`selectTime`](../interfaces/ITimeSelectionService.md#selecttime)
