[**@uplink-protocol/form-controller v0.3.1**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / ITimeViewStateService

# Interface: ITimeViewStateService

Defined in: [Time/interfaces/time-view-state.service.interfaces.ts:8](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Time/interfaces/time-view-state.service.interfaces.ts#L8)

Time view state service interface
Manages UI state and bindings for time picker

## Methods

### initializeBindings()

> **initializeBindings**(`selectedTime`, `selectedTimeRange`, `use12HourFormat`, `showSeconds`, `showMilliseconds`, `generateTimeSegments`, `locale?`, `isRangeSelection?`, `minuteStep?`, `secondStep?`): `object`

Defined in: [Time/interfaces/time-view-state.service.interfaces.ts:18](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Time/interfaces/time-view-state.service.interfaces.ts#L18)

Initialize reactive bindings for time picker

#### Parameters

##### selectedTime

Currently selected time

`Date` | `null`

##### selectedTimeRange

[`TimeRange`](TimeRange.md)

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

##### locale?

`string`

##### isRangeSelection?

`boolean`

##### minuteStep?

`number`

##### secondStep?

`number`

#### Returns

`object`

Initialized bindings

##### currentTime

> **currentTime**: `Binding`\<`Date`\>

##### focusedSegment

> **focusedSegment**: `Binding`\<`"hours"` \| `"minutes"` \| `"seconds"` \| `"milliseconds"` \| `"period"` \| `null`\>

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

> **selectedTime**: `Binding`\<`Date` \| `null`\>

##### selectedTimeRange

> **selectedTimeRange**: `Binding`\<[`TimeRange`](TimeRange.md)\>

##### showMilliseconds

> **showMilliseconds**: `Binding`\<`boolean`\>

##### showSeconds

> **showSeconds**: `Binding`\<`boolean`\>

##### timeSegments

> **timeSegments**: `Binding`\<\{ `hours`: [`TimeSegment`](TimeSegment.md)[]; `milliseconds?`: [`TimeSegment`](TimeSegment.md)[]; `minutes`: [`TimeSegment`](TimeSegment.md)[]; `period?`: [`TimePeriod`](TimePeriod.md); `seconds`: [`TimeSegment`](TimeSegment.md)[]; \}\>

##### use12HourFormat

> **use12HourFormat**: `Binding`\<`boolean`\>

***

### updateBindings()

> **updateBindings**(`bindings`, `newValues`): `void`

Defined in: [Time/interfaces/time-view-state.service.interfaces.ts:56](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Time/interfaces/time-view-state.service.interfaces.ts#L56)

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

***

### updateFocusedSegment()

> **updateFocusedSegment**(`binding`, `segment`): `void`

Defined in: [Time/interfaces/time-view-state.service.interfaces.ts:70](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Time/interfaces/time-view-state.service.interfaces.ts#L70)

Update focused segment binding

#### Parameters

##### binding

`Binding`\<`"hours"` \| `"minutes"` \| `"seconds"` \| `"milliseconds"` \| `"period"` \| `null`\>

Focused segment binding

##### segment

New focused segment

`"hours"` | `"minutes"` | `"seconds"` | `"milliseconds"` | `"period"` | `null`

#### Returns

`void`

***

### updateSelectedTime()

> **updateSelectedTime**(`binding`, `time`): `void`

Defined in: [Time/interfaces/time-view-state.service.interfaces.ts:63](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Time/interfaces/time-view-state.service.interfaces.ts#L63)

Update selected time binding

#### Parameters

##### binding

`Binding`\<`Date` \| `null`\>

Selected time binding

##### time

New time value

`Date` | `null`

#### Returns

`void`
