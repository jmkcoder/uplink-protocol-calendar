[**@uplink-protocol/form-controller v0.3.0**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / TimeControllerInstance

# Interface: TimeControllerInstance

Defined in: [Time/types/time-controller.types.ts:308](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L308)

Time Controller Instance - Represents a concrete instance of a time controller
This combines the controller class with its reactive state

## Extends

- [`TypedTimeController`](TypedTimeController.md)

## Properties

### \_\_adapter?

> `readonly` `optional` **\_\_adapter**: `any`

Defined in: [Time/types/time-controller.types.ts:314](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L314)

Internal adapter reference

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

### isInitialized

> `readonly` **isInitialized**: `boolean`

Defined in: [Time/types/time-controller.types.ts:310](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L310)

Whether the controller is initialized

***

### meta?

> `readonly` `optional` **meta**: `any`

Defined in: [Time/types/time-controller.types.ts:312](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L312)

Controller metadata

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
