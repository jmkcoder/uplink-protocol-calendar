[**@uplink-protocol/form-controller v0.2.3**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / CalendarControllerInstance

# Interface: CalendarControllerInstance

Defined in: [types/calendar-controller.types.ts:341](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b9b5d949a141a189c8cea12210e36bb76f18ad06/src/types/calendar-controller.types.ts#L341)

Calendar Controller Instance Type
Type for the CalendarControllerClass instance

## Extends

- [`TypedCalendarController`](TypedCalendarController.md)

## Properties

### bindings

> **bindings**: [`CalendarControllerBindings`](CalendarControllerBindings.md)

Defined in: [types/calendar-controller.types.ts:300](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b9b5d949a141a189c8cea12210e36bb76f18ad06/src/types/calendar-controller.types.ts#L300)

Reactive state bindings

#### Inherited from

[`TypedCalendarController`](TypedCalendarController.md).[`bindings`](TypedCalendarController.md#bindings)

***

### events

> **events**: [`CalendarControllerEvents`](CalendarControllerEvents.md)

Defined in: [types/calendar-controller.types.ts:306](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b9b5d949a141a189c8cea12210e36bb76f18ad06/src/types/calendar-controller.types.ts#L306)

Event emitters

#### Inherited from

[`TypedCalendarController`](TypedCalendarController.md).[`events`](TypedCalendarController.md#events)

***

### methods

> **methods**: [`CalendarControllerMethods`](CalendarControllerMethods.md)

Defined in: [types/calendar-controller.types.ts:303](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b9b5d949a141a189c8cea12210e36bb76f18ad06/src/types/calendar-controller.types.ts#L303)

Available methods

#### Inherited from

[`TypedCalendarController`](TypedCalendarController.md).[`methods`](TypedCalendarController.md#methods)

***

### options?

> `optional` **options**: [`CalendarOptions`](CalendarOptions.md)

Defined in: [types/calendar-controller.types.ts:309](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b9b5d949a141a189c8cea12210e36bb76f18ad06/src/types/calendar-controller.types.ts#L309)

Calendar configuration options

#### Inherited from

[`TypedCalendarController`](TypedCalendarController.md).[`options`](TypedCalendarController.md#options)

***

### selectedDateRange

> **selectedDateRange**: `object`

Defined in: [types/calendar-controller.types.ts:323](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b9b5d949a141a189c8cea12210e36bb76f18ad06/src/types/calendar-controller.types.ts#L323)

Selected date range with flexible property access

#### end

> **end**: `null` \| `Date`

#### endDate

> **endDate**: `null` \| `Date`

#### start

> **start**: `null` \| `Date`

#### startDate

> **startDate**: `null` \| `Date`

#### Inherited from

[`TypedCalendarController`](TypedCalendarController.md).[`selectedDateRange`](TypedCalendarController.md#selecteddaterange)

## Methods

### clearSelection()

> **clearSelection**(): `void`

Defined in: [types/calendar-controller.types.ts:318](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b9b5d949a141a189c8cea12210e36bb76f18ad06/src/types/calendar-controller.types.ts#L318)

#### Returns

`void`

#### Inherited from

[`TypedCalendarController`](TypedCalendarController.md).[`clearSelection`](TypedCalendarController.md#clearselection)

***

### goToNextMonth()

> **goToNextMonth**(): `void`

Defined in: [types/calendar-controller.types.ts:314](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b9b5d949a141a189c8cea12210e36bb76f18ad06/src/types/calendar-controller.types.ts#L314)

#### Returns

`void`

#### Inherited from

[`TypedCalendarController`](TypedCalendarController.md).[`goToNextMonth`](TypedCalendarController.md#gotonextmonth)

***

### goToNextYear()

> **goToNextYear**(): `void`

Defined in: [types/calendar-controller.types.ts:316](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b9b5d949a141a189c8cea12210e36bb76f18ad06/src/types/calendar-controller.types.ts#L316)

#### Returns

`void`

#### Inherited from

[`TypedCalendarController`](TypedCalendarController.md).[`goToNextYear`](TypedCalendarController.md#gotonextyear)

***

### goToPreviousMonth()

> **goToPreviousMonth**(): `void`

Defined in: [types/calendar-controller.types.ts:315](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b9b5d949a141a189c8cea12210e36bb76f18ad06/src/types/calendar-controller.types.ts#L315)

#### Returns

`void`

#### Inherited from

[`TypedCalendarController`](TypedCalendarController.md).[`goToPreviousMonth`](TypedCalendarController.md#gotopreviousmonth)

***

### goToPreviousYear()

> **goToPreviousYear**(): `void`

Defined in: [types/calendar-controller.types.ts:317](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b9b5d949a141a189c8cea12210e36bb76f18ad06/src/types/calendar-controller.types.ts#L317)

#### Returns

`void`

#### Inherited from

[`TypedCalendarController`](TypedCalendarController.md).[`goToPreviousYear`](TypedCalendarController.md#gotopreviousyear)

***

### selectDate()

> **selectDate**(`yearOrDate`, `month?`, `day?`): `void`

Defined in: [types/calendar-controller.types.ts:313](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b9b5d949a141a189c8cea12210e36bb76f18ad06/src/types/calendar-controller.types.ts#L313)

#### Parameters

##### yearOrDate

`number` | `Date`

##### month?

`number`

##### day?

`number`

#### Returns

`void`

#### Inherited from

[`TypedCalendarController`](TypedCalendarController.md).[`selectDate`](TypedCalendarController.md#selectdate)

***

### setRangeSelectionMode()

> **setRangeSelectionMode**(`isRange`): `void`

Defined in: [types/calendar-controller.types.ts:319](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b9b5d949a141a189c8cea12210e36bb76f18ad06/src/types/calendar-controller.types.ts#L319)

#### Parameters

##### isRange

`boolean`

#### Returns

`void`

#### Inherited from

[`TypedCalendarController`](TypedCalendarController.md).[`setRangeSelectionMode`](TypedCalendarController.md#setrangeselectionmode)
