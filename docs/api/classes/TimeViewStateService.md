[**@uplink-protocol/form-controller v0.3.0**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / TimeViewStateService

# Class: TimeViewStateService

Defined in: [Time/services/time-view-state.service.ts:8](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-view-state.service.ts#L8)

TimeViewStateService - Implementation of ITimeViewStateService
Manages UI state and bindings for time picker

## Implements

- [`ITimeViewStateService`](../interfaces/ITimeViewStateService.md)

## Constructors

### Constructor

> **new TimeViewStateService**(): `TimeViewStateService`

#### Returns

`TimeViewStateService`

## Methods

### initializeBindings()

> **initializeBindings**(`selectedTime`, `selectedTimeRange`, `use12HourFormat`, `showSeconds`, `showMilliseconds`, `generateTimeSegments`, `locale`, `isRangeSelection`, `minuteStep`, `secondStep`): `object`

Defined in: [Time/services/time-view-state.service.ts:18](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-view-state.service.ts#L18)

Initialize reactive bindings for time picker

#### Parameters

##### selectedTime

Currently selected time

`null` | `Date`

##### selectedTimeRange

[`TimeRange`](../interfaces/TimeRange.md)

Currently selected time range

##### use12HourFormat

`boolean`

Whether to use 12-hour format

##### showSeconds

`boolean`

Whether to show seconds

##### showMilliseconds

`boolean`

Whether to show milliseconds

##### generateTimeSegments

() => `any`

Function to generate time segments

##### locale

`string` = `'en-US'`

##### isRangeSelection

`boolean` = `false`

##### minuteStep

`number` = `1`

##### secondStep

`number` = `1`

#### Returns

`object`

Initialized bindings

##### currentTime

> **currentTime**: `Binding`\<`Date`\>

##### focusedSegment

> **focusedSegment**: `Binding`\<`null` \| `"hours"` \| `"minutes"` \| `"seconds"` \| `"milliseconds"` \| `"period"`\>

##### formattedTime

> **formattedTime**: `Binding`\<`string`\>

##### isRangeSelection

> **isRangeSelection**: `Binding`\<`boolean`\>

##### locale

> **locale**: `Binding`\<`string`\>

##### minuteStep

> **minuteStep**: `Binding`\<`number`\>

##### secondStep

> **secondStep**: `Binding`\<`number`\>

##### selectedTime

> **selectedTime**: `Binding`\<`null` \| `Date`\>

##### selectedTimeRange

> **selectedTimeRange**: `Binding`\<[`TimeRange`](../interfaces/TimeRange.md)\>

##### showMilliseconds

> **showMilliseconds**: `Binding`\<`boolean`\>

##### showSeconds

> **showSeconds**: `Binding`\<`boolean`\>

##### timeSegments

> **timeSegments**: `Binding`\<\{ `hours`: [`TimeSegment`](../interfaces/TimeSegment.md)[]; `milliseconds?`: [`TimeSegment`](../interfaces/TimeSegment.md)[]; `minutes`: [`TimeSegment`](../interfaces/TimeSegment.md)[]; `period?`: [`TimePeriod`](../interfaces/TimePeriod.md); `seconds`: [`TimeSegment`](../interfaces/TimeSegment.md)[]; \}\>

##### use12HourFormat

> **use12HourFormat**: `Binding`\<`boolean`\>

#### Implementation of

[`ITimeViewStateService`](../interfaces/ITimeViewStateService.md).[`initializeBindings`](../interfaces/ITimeViewStateService.md#initializebindings)

***

### updateBindings()

> **updateBindings**(`bindings`, `newValues`): `void`

Defined in: [Time/services/time-view-state.service.ts:78](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-view-state.service.ts#L78)

Update all bindings with new values

#### Parameters

##### bindings

`any`

Current bindings

##### newValues

`any`

New values to set

#### Returns

`void`

#### Implementation of

[`ITimeViewStateService`](../interfaces/ITimeViewStateService.md).[`updateBindings`](../interfaces/ITimeViewStateService.md#updatebindings)

***

### updateFocusedSegment()

> **updateFocusedSegment**(`binding`, `segment`): `void`

Defined in: [Time/services/time-view-state.service.ts:133](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-view-state.service.ts#L133)

Update focused segment binding

#### Parameters

##### binding

`Binding`\<`null` \| `"hours"` \| `"minutes"` \| `"seconds"` \| `"milliseconds"` \| `"period"`\>

Focused segment binding

##### segment

New focused segment

`null` | `"hours"` | `"minutes"` | `"seconds"` | `"milliseconds"` | `"period"`

#### Returns

`void`

#### Implementation of

[`ITimeViewStateService`](../interfaces/ITimeViewStateService.md).[`updateFocusedSegment`](../interfaces/ITimeViewStateService.md#updatefocusedsegment)

***

### updateSelectedTime()

> **updateSelectedTime**(`binding`, `time`): `void`

Defined in: [Time/services/time-view-state.service.ts:124](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-view-state.service.ts#L124)

Update selected time binding

#### Parameters

##### binding

`Binding`\<`null` \| `Date`\>

Selected time binding

##### time

New time value

`null` | `Date`

#### Returns

`void`

#### Implementation of

[`ITimeViewStateService`](../interfaces/ITimeViewStateService.md).[`updateSelectedTime`](../interfaces/ITimeViewStateService.md#updateselectedtime)
