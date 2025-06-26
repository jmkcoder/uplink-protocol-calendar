[**@uplink-protocol/form-controller v0.3.0**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / TimeControllerInterface

# Interface: TimeControllerInterface

Defined in: [Time/controller.ts:47](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L47)

TimeControllerClass - A full featured time picker controller class.
Provides functionality for time picking and time display.

This controller uses a service-oriented architecture where all the core
functionality is delegated to specialized services.

## Extends

- [`TypedTimeController`](TypedTimeController.md)

## Properties

### \_disabledHours

> **\_disabledHours**: `number`[]

Defined in: [Time/controller.ts:54](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L54)

***

### \_disabledMinutes

> **\_disabledMinutes**: `number`[]

Defined in: [Time/controller.ts:55](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L55)

***

### \_disabledSeconds

> **\_disabledSeconds**: `number`[]

Defined in: [Time/controller.ts:56](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L56)

***

### \_disabledTimes

> **\_disabledTimes**: `Date`[]

Defined in: [Time/controller.ts:53](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L53)

***

### \_focusedSegment

> **\_focusedSegment**: `null` \| `"hours"` \| `"minutes"` \| `"seconds"` \| `"milliseconds"` \| `"period"`

Defined in: [Time/controller.ts:50](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L50)

***

### \_isRangeSelection

> **\_isRangeSelection**: `boolean`

Defined in: [Time/controller.ts:65](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L65)

***

### \_locale

> **\_locale**: `string`

Defined in: [Time/controller.ts:62](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L62)

***

### \_maxTime

> **\_maxTime**: `null` \| `Date`

Defined in: [Time/controller.ts:52](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L52)

***

### \_minTime

> **\_minTime**: `null` \| `Date`

Defined in: [Time/controller.ts:51](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L51)

***

### \_minuteStep

> **\_minuteStep**: `number`

Defined in: [Time/controller.ts:60](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L60)

***

### \_secondStep

> **\_secondStep**: `number`

Defined in: [Time/controller.ts:61](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L61)

***

### \_selectedTime

> **\_selectedTime**: `null` \| `Date`

Defined in: [Time/controller.ts:48](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L48)

***

### \_selectedTimeRange

> **\_selectedTimeRange**: [`TimeRange`](TimeRange.md)

Defined in: [Time/controller.ts:49](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L49)

***

### \_showMilliseconds

> **\_showMilliseconds**: `boolean`

Defined in: [Time/controller.ts:59](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L59)

***

### \_showSeconds

> **\_showSeconds**: `boolean`

Defined in: [Time/controller.ts:58](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L58)

***

### \_timeFormat

> **\_timeFormat**: `null` \| `string`

Defined in: [Time/controller.ts:63](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L63)

***

### \_timeFormatOptions

> **\_timeFormatOptions**: `null` \| `DateTimeFormatOptions`

Defined in: [Time/controller.ts:64](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L64)

***

### \_use12HourFormat

> **\_use12HourFormat**: `boolean`

Defined in: [Time/controller.ts:57](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L57)

***

### bindings

> **bindings**: [`TimeControllerBindings`](TimeControllerBindings.md)

Defined in: [Time/types/time-controller.types.ts:268](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L268)

Reactive state bindings

#### Inherited from

[`TypedTimeController`](TypedTimeController.md).[`bindings`](TypedTimeController.md#bindings)

***

### events

> **events**: [`TimeControllerEvents`](TimeControllerEvents.md)

Defined in: [Time/types/time-controller.types.ts:274](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L274)

Event emitters

#### Inherited from

[`TypedTimeController`](TypedTimeController.md).[`events`](TypedTimeController.md#events)

***

### methods

> **methods**: [`TimeControllerMethods`](TimeControllerMethods.md)

Defined in: [Time/types/time-controller.types.ts:271](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L271)

Available methods

#### Inherited from

[`TypedTimeController`](TypedTimeController.md).[`methods`](TypedTimeController.md#methods)

***

### options?

> `optional` **options**: [`TimeOptions`](TimeOptions.md)

Defined in: [Time/types/time-controller.types.ts:277](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L277)

Time configuration options

#### Inherited from

[`TypedTimeController`](TypedTimeController.md).[`options`](TypedTimeController.md#options)

***

### selectedTimeRange

> **selectedTimeRange**: `object`

Defined in: [Time/types/time-controller.types.ts:291](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L291)

Selected time range with flexible property access

#### end

> **end**: `null` \| `Date`

#### endTime

> **endTime**: `null` \| `Date`

#### start

> **start**: `null` \| `Date`

#### startTime

> **startTime**: `null` \| `Date`

#### Inherited from

[`TypedTimeController`](TypedTimeController.md).[`selectedTimeRange`](TypedTimeController.md#selectedtimerange)

## Methods

### clearSelection()

> **clearSelection**(): `void`

Defined in: [Time/types/time-controller.types.ts:286](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L286)

#### Returns

`void`

#### Inherited from

[`TypedTimeController`](TypedTimeController.md).[`clearSelection`](TypedTimeController.md#clearselection)

***

### goToNextHour()

> **goToNextHour**(): `void`

Defined in: [Time/types/time-controller.types.ts:282](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L282)

#### Returns

`void`

#### Inherited from

[`TypedTimeController`](TypedTimeController.md).[`goToNextHour`](TypedTimeController.md#gotonexthour)

***

### goToNextMinute()

> **goToNextMinute**(): `void`

Defined in: [Time/types/time-controller.types.ts:284](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L284)

#### Returns

`void`

#### Inherited from

[`TypedTimeController`](TypedTimeController.md).[`goToNextMinute`](TypedTimeController.md#gotonextminute)

***

### goToPreviousHour()

> **goToPreviousHour**(): `void`

Defined in: [Time/types/time-controller.types.ts:283](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L283)

#### Returns

`void`

#### Inherited from

[`TypedTimeController`](TypedTimeController.md).[`goToPreviousHour`](TypedTimeController.md#gotoprevioushour)

***

### goToPreviousMinute()

> **goToPreviousMinute**(): `void`

Defined in: [Time/types/time-controller.types.ts:285](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L285)

#### Returns

`void`

#### Inherited from

[`TypedTimeController`](TypedTimeController.md).[`goToPreviousMinute`](TypedTimeController.md#gotopreviousminute)

***

### selectTime()

> **selectTime**(`time`): `void`

Defined in: [Time/types/time-controller.types.ts:281](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L281)

#### Parameters

##### time

`Date`

#### Returns

`void`

#### Inherited from

[`TypedTimeController`](TypedTimeController.md).[`selectTime`](TypedTimeController.md#selecttime)

***

### setRangeSelectionMode()

> **setRangeSelectionMode**(`isRange`): `void`

Defined in: [Time/types/time-controller.types.ts:287](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L287)

#### Parameters

##### isRange

`boolean`

#### Returns

`void`

#### Inherited from

[`TypedTimeController`](TypedTimeController.md).[`setRangeSelectionMode`](TypedTimeController.md#setrangeselectionmode)
