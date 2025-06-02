[**@uplink-protocol/form-controller v0.2.1**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / CalendarControllerInstance

# Interface: CalendarControllerInstance

Defined in: [types/calendar-controller.types.ts:342](https://github.com/jmkcoder/uplink-protocol-calendar/blob/311e0b81efba7399cf1c367c0a2007aa66f3b830/src/types/calendar-controller.types.ts#L342)

Calendar Controller Instance Type
Type for the CalendarControllerClass instance

## Extends

- [`TypedCalendarController`](TypedCalendarController.md)

## Properties

### bindings

> **bindings**: [`CalendarControllerBindings`](CalendarControllerBindings.md)

Defined in: [types/calendar-controller.types.ts:301](https://github.com/jmkcoder/uplink-protocol-calendar/blob/311e0b81efba7399cf1c367c0a2007aa66f3b830/src/types/calendar-controller.types.ts#L301)

Reactive state bindings

#### Inherited from

[`TypedCalendarController`](TypedCalendarController.md).[`bindings`](TypedCalendarController.md#bindings)

***

### events

> **events**: [`CalendarControllerEvents`](CalendarControllerEvents.md)

Defined in: [types/calendar-controller.types.ts:307](https://github.com/jmkcoder/uplink-protocol-calendar/blob/311e0b81efba7399cf1c367c0a2007aa66f3b830/src/types/calendar-controller.types.ts#L307)

Event emitters

#### Inherited from

[`TypedCalendarController`](TypedCalendarController.md).[`events`](TypedCalendarController.md#events)

***

### methods

> **methods**: [`CalendarControllerMethods`](CalendarControllerMethods.md)

Defined in: [types/calendar-controller.types.ts:304](https://github.com/jmkcoder/uplink-protocol-calendar/blob/311e0b81efba7399cf1c367c0a2007aa66f3b830/src/types/calendar-controller.types.ts#L304)

Available methods

#### Inherited from

[`TypedCalendarController`](TypedCalendarController.md).[`methods`](TypedCalendarController.md#methods)

***

### options?

> `optional` **options**: [`CalendarOptions`](CalendarOptions.md)

Defined in: [types/calendar-controller.types.ts:310](https://github.com/jmkcoder/uplink-protocol-calendar/blob/311e0b81efba7399cf1c367c0a2007aa66f3b830/src/types/calendar-controller.types.ts#L310)

Calendar configuration options

#### Inherited from

[`TypedCalendarController`](TypedCalendarController.md).[`options`](TypedCalendarController.md#options)

***

### selectedDateRange

> **selectedDateRange**: `object`

Defined in: [types/calendar-controller.types.ts:324](https://github.com/jmkcoder/uplink-protocol-calendar/blob/311e0b81efba7399cf1c367c0a2007aa66f3b830/src/types/calendar-controller.types.ts#L324)

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

Defined in: [types/calendar-controller.types.ts:319](https://github.com/jmkcoder/uplink-protocol-calendar/blob/311e0b81efba7399cf1c367c0a2007aa66f3b830/src/types/calendar-controller.types.ts#L319)

#### Returns

`void`

#### Inherited from

[`TypedCalendarController`](TypedCalendarController.md).[`clearSelection`](TypedCalendarController.md#clearselection)

***

### goToNextMonth()

> **goToNextMonth**(): `void`

Defined in: [types/calendar-controller.types.ts:315](https://github.com/jmkcoder/uplink-protocol-calendar/blob/311e0b81efba7399cf1c367c0a2007aa66f3b830/src/types/calendar-controller.types.ts#L315)

#### Returns

`void`

#### Inherited from

[`TypedCalendarController`](TypedCalendarController.md).[`goToNextMonth`](TypedCalendarController.md#gotonextmonth)

***

### goToNextYear()

> **goToNextYear**(): `void`

Defined in: [types/calendar-controller.types.ts:317](https://github.com/jmkcoder/uplink-protocol-calendar/blob/311e0b81efba7399cf1c367c0a2007aa66f3b830/src/types/calendar-controller.types.ts#L317)

#### Returns

`void`

#### Inherited from

[`TypedCalendarController`](TypedCalendarController.md).[`goToNextYear`](TypedCalendarController.md#gotonextyear)

***

### goToPreviousMonth()

> **goToPreviousMonth**(): `void`

Defined in: [types/calendar-controller.types.ts:316](https://github.com/jmkcoder/uplink-protocol-calendar/blob/311e0b81efba7399cf1c367c0a2007aa66f3b830/src/types/calendar-controller.types.ts#L316)

#### Returns

`void`

#### Inherited from

[`TypedCalendarController`](TypedCalendarController.md).[`goToPreviousMonth`](TypedCalendarController.md#gotopreviousmonth)

***

### goToPreviousYear()

> **goToPreviousYear**(): `void`

Defined in: [types/calendar-controller.types.ts:318](https://github.com/jmkcoder/uplink-protocol-calendar/blob/311e0b81efba7399cf1c367c0a2007aa66f3b830/src/types/calendar-controller.types.ts#L318)

#### Returns

`void`

#### Inherited from

[`TypedCalendarController`](TypedCalendarController.md).[`goToPreviousYear`](TypedCalendarController.md#gotopreviousyear)

***

### selectDate()

> **selectDate**(`yearOrDate`, `month?`, `day?`): `void`

Defined in: [types/calendar-controller.types.ts:314](https://github.com/jmkcoder/uplink-protocol-calendar/blob/311e0b81efba7399cf1c367c0a2007aa66f3b830/src/types/calendar-controller.types.ts#L314)

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

Defined in: [types/calendar-controller.types.ts:320](https://github.com/jmkcoder/uplink-protocol-calendar/blob/311e0b81efba7399cf1c367c0a2007aa66f3b830/src/types/calendar-controller.types.ts#L320)

#### Parameters

##### isRange

`boolean`

#### Returns

`void`

#### Inherited from

[`TypedCalendarController`](TypedCalendarController.md).[`setRangeSelectionMode`](TypedCalendarController.md#setrangeselectionmode)
