[**@uplink-protocol/form-controller v0.2.1**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / TypedCalendarController

# Interface: TypedCalendarController

Defined in: [types/calendar-controller.types.ts:299](https://github.com/jmkcoder/uplink-protocol-calendar/blob/311e0b81efba7399cf1c367c0a2007aa66f3b830/src/types/calendar-controller.types.ts#L299)

Complete Calendar Controller Interface
Combines all the above interfaces into a single comprehensive type

## Extended by

- [`CalendarControllerInterface`](CalendarControllerInterface.md)
- [`CalendarControllerInstance`](CalendarControllerInstance.md)

## Properties

### bindings

> **bindings**: [`CalendarControllerBindings`](CalendarControllerBindings.md)

Defined in: [types/calendar-controller.types.ts:301](https://github.com/jmkcoder/uplink-protocol-calendar/blob/311e0b81efba7399cf1c367c0a2007aa66f3b830/src/types/calendar-controller.types.ts#L301)

Reactive state bindings

***

### events

> **events**: [`CalendarControllerEvents`](CalendarControllerEvents.md)

Defined in: [types/calendar-controller.types.ts:307](https://github.com/jmkcoder/uplink-protocol-calendar/blob/311e0b81efba7399cf1c367c0a2007aa66f3b830/src/types/calendar-controller.types.ts#L307)

Event emitters

***

### methods

> **methods**: [`CalendarControllerMethods`](CalendarControllerMethods.md)

Defined in: [types/calendar-controller.types.ts:304](https://github.com/jmkcoder/uplink-protocol-calendar/blob/311e0b81efba7399cf1c367c0a2007aa66f3b830/src/types/calendar-controller.types.ts#L304)

Available methods

***

### options?

> `optional` **options**: [`CalendarOptions`](CalendarOptions.md)

Defined in: [types/calendar-controller.types.ts:310](https://github.com/jmkcoder/uplink-protocol-calendar/blob/311e0b81efba7399cf1c367c0a2007aa66f3b830/src/types/calendar-controller.types.ts#L310)

Calendar configuration options

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

## Methods

### clearSelection()

> **clearSelection**(): `void`

Defined in: [types/calendar-controller.types.ts:319](https://github.com/jmkcoder/uplink-protocol-calendar/blob/311e0b81efba7399cf1c367c0a2007aa66f3b830/src/types/calendar-controller.types.ts#L319)

#### Returns

`void`

***

### goToNextMonth()

> **goToNextMonth**(): `void`

Defined in: [types/calendar-controller.types.ts:315](https://github.com/jmkcoder/uplink-protocol-calendar/blob/311e0b81efba7399cf1c367c0a2007aa66f3b830/src/types/calendar-controller.types.ts#L315)

#### Returns

`void`

***

### goToNextYear()

> **goToNextYear**(): `void`

Defined in: [types/calendar-controller.types.ts:317](https://github.com/jmkcoder/uplink-protocol-calendar/blob/311e0b81efba7399cf1c367c0a2007aa66f3b830/src/types/calendar-controller.types.ts#L317)

#### Returns

`void`

***

### goToPreviousMonth()

> **goToPreviousMonth**(): `void`

Defined in: [types/calendar-controller.types.ts:316](https://github.com/jmkcoder/uplink-protocol-calendar/blob/311e0b81efba7399cf1c367c0a2007aa66f3b830/src/types/calendar-controller.types.ts#L316)

#### Returns

`void`

***

### goToPreviousYear()

> **goToPreviousYear**(): `void`

Defined in: [types/calendar-controller.types.ts:318](https://github.com/jmkcoder/uplink-protocol-calendar/blob/311e0b81efba7399cf1c367c0a2007aa66f3b830/src/types/calendar-controller.types.ts#L318)

#### Returns

`void`

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

***

### setRangeSelectionMode()

> **setRangeSelectionMode**(`isRange`): `void`

Defined in: [types/calendar-controller.types.ts:320](https://github.com/jmkcoder/uplink-protocol-calendar/blob/311e0b81efba7399cf1c367c0a2007aa66f3b830/src/types/calendar-controller.types.ts#L320)

#### Parameters

##### isRange

`boolean`

#### Returns

`void`
