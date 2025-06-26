[**@uplink-protocol/form-controller v0.3.0**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / TimeGenerationOptions

# Interface: TimeGenerationOptions

Defined in: [Time/interfaces/time.interfaces.ts:98](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time.interfaces.ts#L98)

TimeGenerationOptions - Options for generating time segments

## Properties

### disabledHours

> **disabledHours**: `number`[]

Defined in: [Time/interfaces/time.interfaces.ts:105](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time.interfaces.ts#L105)

***

### disabledMinutes

> **disabledMinutes**: `number`[]

Defined in: [Time/interfaces/time.interfaces.ts:106](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time.interfaces.ts#L106)

***

### disabledSeconds

> **disabledSeconds**: `number`[]

Defined in: [Time/interfaces/time.interfaces.ts:107](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time.interfaces.ts#L107)

***

### disabledTimes

> **disabledTimes**: `Date`[]

Defined in: [Time/interfaces/time.interfaces.ts:104](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time.interfaces.ts#L104)

***

### focusedSegment

> **focusedSegment**: `null` \| `"hours"` \| `"minutes"` \| `"seconds"` \| `"milliseconds"` \| `"period"`

Defined in: [Time/interfaces/time.interfaces.ts:101](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time.interfaces.ts#L101)

***

### isTimeDisabledFn()?

> `optional` **isTimeDisabledFn**: (`time`) => `boolean`

Defined in: [Time/interfaces/time.interfaces.ts:114](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time.interfaces.ts#L114)

#### Parameters

##### time

`Date`

#### Returns

`boolean`

***

### locale

> **locale**: `string`

Defined in: [Time/interfaces/time.interfaces.ts:113](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time.interfaces.ts#L113)

***

### maxTime

> **maxTime**: `null` \| `Date`

Defined in: [Time/interfaces/time.interfaces.ts:103](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time.interfaces.ts#L103)

***

### minTime

> **minTime**: `null` \| `Date`

Defined in: [Time/interfaces/time.interfaces.ts:102](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time.interfaces.ts#L102)

***

### minuteStep

> **minuteStep**: `number`

Defined in: [Time/interfaces/time.interfaces.ts:111](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time.interfaces.ts#L111)

***

### secondStep

> **secondStep**: `number`

Defined in: [Time/interfaces/time.interfaces.ts:112](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time.interfaces.ts#L112)

***

### selectedTime

> **selectedTime**: `null` \| `Date`

Defined in: [Time/interfaces/time.interfaces.ts:99](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time.interfaces.ts#L99)

***

### selectedTimeRange

> **selectedTimeRange**: [`TimeRange`](TimeRange.md)

Defined in: [Time/interfaces/time.interfaces.ts:100](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time.interfaces.ts#L100)

***

### showMilliseconds

> **showMilliseconds**: `boolean`

Defined in: [Time/interfaces/time.interfaces.ts:110](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time.interfaces.ts#L110)

***

### showSeconds

> **showSeconds**: `boolean`

Defined in: [Time/interfaces/time.interfaces.ts:109](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time.interfaces.ts#L109)

***

### use12HourFormat

> **use12HourFormat**: `boolean`

Defined in: [Time/interfaces/time.interfaces.ts:108](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time.interfaces.ts#L108)
