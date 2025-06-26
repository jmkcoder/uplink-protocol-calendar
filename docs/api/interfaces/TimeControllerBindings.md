[**@uplink-protocol/form-controller v0.3.0**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / TimeControllerBindings

# Interface: TimeControllerBindings

Defined in: [Time/types/time-controller.types.ts:19](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L19)

Time Controller Bindings - Reactive state properties
These bindings automatically update the UI when time state changes

## Properties

### currentTime

> **currentTime**: `Binding`\<`Date`\>

Defined in: [Time/types/time-controller.types.ts:30](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L30)

Current time being displayed

***

### focusedSegment

> **focusedSegment**: `Binding`\<`null` \| `"hours"` \| `"minutes"` \| `"seconds"` \| `"milliseconds"` \| `"period"`\>

Defined in: [Time/types/time-controller.types.ts:27](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L27)

Currently focused time segment (for accessibility)

***

### formattedTime

> **formattedTime**: `Binding`\<`string`\>

Defined in: [Time/types/time-controller.types.ts:33](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L33)

Formatted time string for display

***

### isRangeSelection

> **isRangeSelection**: `Binding`\<`boolean`\>

Defined in: [Time/types/time-controller.types.ts:57](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L57)

Whether range selection mode is enabled

***

### locale

> **locale**: `Binding`\<`string`\>

Defined in: [Time/types/time-controller.types.ts:54](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L54)

Current locale for internationalization

***

### minuteStep

> **minuteStep**: `Binding`\<`number`\>

Defined in: [Time/types/time-controller.types.ts:60](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L60)

Minute step interval

***

### secondStep

> **secondStep**: `Binding`\<`number`\>

Defined in: [Time/types/time-controller.types.ts:63](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L63)

Second step interval

***

### selectedTime

> **selectedTime**: `Binding`\<`null` \| `Date`\>

Defined in: [Time/types/time-controller.types.ts:21](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L21)

Currently selected time (null if no time selected)

***

### selectedTimeRange

> **selectedTimeRange**: `Binding`\<[`TimeRange`](TimeRange.md)\>

Defined in: [Time/types/time-controller.types.ts:24](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L24)

Selected time range (for range selection mode)

***

### showMilliseconds

> **showMilliseconds**: `Binding`\<`boolean`\>

Defined in: [Time/types/time-controller.types.ts:51](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L51)

Whether to show milliseconds in time picker

***

### showSeconds

> **showSeconds**: `Binding`\<`boolean`\>

Defined in: [Time/types/time-controller.types.ts:48](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L48)

Whether to show seconds in time picker

***

### timeSegments

> **timeSegments**: `Binding`\<\{ `hours`: [`TimeSegment`](TimeSegment.md)[]; `milliseconds?`: [`TimeSegment`](TimeSegment.md)[]; `minutes`: [`TimeSegment`](TimeSegment.md)[]; `period?`: [`TimePeriod`](TimePeriod.md); `seconds`: [`TimeSegment`](TimeSegment.md)[]; \}\>

Defined in: [Time/types/time-controller.types.ts:36](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L36)

Time segments for UI rendering

***

### use12HourFormat

> **use12HourFormat**: `Binding`\<`boolean`\>

Defined in: [Time/types/time-controller.types.ts:45](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L45)

Whether using 12-hour format
