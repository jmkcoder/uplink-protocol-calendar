[**@uplink-protocol/form-controller v0.3.0**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / TypedTimeController

# Interface: TypedTimeController

Defined in: [Time/types/time-controller.types.ts:266](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L266)

Complete Time Controller Interface
Combines all the above interfaces into a single comprehensive type

## Extended by

- [`TimeControllerInterface`](TimeControllerInterface.md)
- [`TimeControllerInstance`](TimeControllerInstance.md)

## Properties

### bindings

> **bindings**: [`TimeControllerBindings`](TimeControllerBindings.md)

Defined in: [Time/types/time-controller.types.ts:268](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L268)

Reactive state bindings

***

### events

> **events**: [`TimeControllerEvents`](TimeControllerEvents.md)

Defined in: [Time/types/time-controller.types.ts:274](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L274)

Event emitters

***

### methods

> **methods**: [`TimeControllerMethods`](TimeControllerMethods.md)

Defined in: [Time/types/time-controller.types.ts:271](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L271)

Available methods

***

### options?

> `optional` **options**: [`TimeOptions`](TimeOptions.md)

Defined in: [Time/types/time-controller.types.ts:277](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L277)

Time configuration options

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

## Methods

### clearSelection()

> **clearSelection**(): `void`

Defined in: [Time/types/time-controller.types.ts:286](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L286)

#### Returns

`void`

***

### goToNextHour()

> **goToNextHour**(): `void`

Defined in: [Time/types/time-controller.types.ts:282](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L282)

#### Returns

`void`

***

### goToNextMinute()

> **goToNextMinute**(): `void`

Defined in: [Time/types/time-controller.types.ts:284](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L284)

#### Returns

`void`

***

### goToPreviousHour()

> **goToPreviousHour**(): `void`

Defined in: [Time/types/time-controller.types.ts:283](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L283)

#### Returns

`void`

***

### goToPreviousMinute()

> **goToPreviousMinute**(): `void`

Defined in: [Time/types/time-controller.types.ts:285](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L285)

#### Returns

`void`

***

### selectTime()

> **selectTime**(`time`): `void`

Defined in: [Time/types/time-controller.types.ts:281](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L281)

#### Parameters

##### time

`Date`

#### Returns

`void`

***

### setRangeSelectionMode()

> **setRangeSelectionMode**(`isRange`): `void`

Defined in: [Time/types/time-controller.types.ts:287](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L287)

#### Parameters

##### isRange

`boolean`

#### Returns

`void`
