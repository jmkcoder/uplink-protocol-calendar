[**@uplink-protocol/form-controller v0.3.1**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / CalendarControllerInstance

# Interface: CalendarControllerInstance

Defined in: [Date/types/typed-calendar-controller.type.ts:53](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/typed-calendar-controller.type.ts#L53)

Calendar Controller Instance Type
Type for the CalendarControllerClass instance

## Extends

- [`TypedCalendarController`](TypedCalendarController.md)

## Properties

### bindings

> **bindings**: [`CalendarControllerBindings`](CalendarControllerBindings.md)

Defined in: [Date/types/typed-calendar-controller.type.ts:12](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/typed-calendar-controller.type.ts#L12)

Reactive state bindings

#### Inherited from

[`TypedCalendarController`](TypedCalendarController.md).[`bindings`](TypedCalendarController.md#bindings)

***

### events

> **events**: [`CalendarControllerEvents`](CalendarControllerEvents.md)

Defined in: [Date/types/typed-calendar-controller.type.ts:18](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/typed-calendar-controller.type.ts#L18)

Event emitters

#### Inherited from

[`TypedCalendarController`](TypedCalendarController.md).[`events`](TypedCalendarController.md#events)

***

### methods

> **methods**: [`CalendarControllerMethods`](CalendarControllerMethods.md)

Defined in: [Date/types/typed-calendar-controller.type.ts:15](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/typed-calendar-controller.type.ts#L15)

Available methods

#### Inherited from

[`TypedCalendarController`](TypedCalendarController.md).[`methods`](TypedCalendarController.md#methods)

***

### options?

> `optional` **options**: [`CalendarOptions`](CalendarOptions.md)

Defined in: [Date/types/typed-calendar-controller.type.ts:21](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/typed-calendar-controller.type.ts#L21)

Calendar configuration options

#### Inherited from

[`TypedCalendarController`](TypedCalendarController.md).[`options`](TypedCalendarController.md#options)

***

### selectedDateRange

> **selectedDateRange**: `object`

Defined in: [Date/types/typed-calendar-controller.type.ts:35](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/typed-calendar-controller.type.ts#L35)

Selected date range with flexible property access

#### end

> **end**: `Date` \| `null`

#### endDate

> **endDate**: `Date` \| `null`

#### start

> **start**: `Date` \| `null`

#### startDate

> **startDate**: `Date` \| `null`

#### Inherited from

[`TypedCalendarController`](TypedCalendarController.md).[`selectedDateRange`](TypedCalendarController.md#selecteddaterange)

## Methods

### clearSelection()

> **clearSelection**(): `void`

Defined in: [Date/types/typed-calendar-controller.type.ts:30](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/typed-calendar-controller.type.ts#L30)

#### Returns

`void`

#### Inherited from

[`TypedCalendarController`](TypedCalendarController.md).[`clearSelection`](TypedCalendarController.md#clearselection)

***

### goToNextMonth()

> **goToNextMonth**(): `void`

Defined in: [Date/types/typed-calendar-controller.type.ts:26](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/typed-calendar-controller.type.ts#L26)

#### Returns

`void`

#### Inherited from

[`TypedCalendarController`](TypedCalendarController.md).[`goToNextMonth`](TypedCalendarController.md#gotonextmonth)

***

### goToNextYear()

> **goToNextYear**(): `void`

Defined in: [Date/types/typed-calendar-controller.type.ts:28](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/typed-calendar-controller.type.ts#L28)

#### Returns

`void`

#### Inherited from

[`TypedCalendarController`](TypedCalendarController.md).[`goToNextYear`](TypedCalendarController.md#gotonextyear)

***

### goToPreviousMonth()

> **goToPreviousMonth**(): `void`

Defined in: [Date/types/typed-calendar-controller.type.ts:27](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/typed-calendar-controller.type.ts#L27)

#### Returns

`void`

#### Inherited from

[`TypedCalendarController`](TypedCalendarController.md).[`goToPreviousMonth`](TypedCalendarController.md#gotopreviousmonth)

***

### goToPreviousYear()

> **goToPreviousYear**(): `void`

Defined in: [Date/types/typed-calendar-controller.type.ts:29](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/typed-calendar-controller.type.ts#L29)

#### Returns

`void`

#### Inherited from

[`TypedCalendarController`](TypedCalendarController.md).[`goToPreviousYear`](TypedCalendarController.md#gotopreviousyear)

***

### selectDate()

> **selectDate**(`yearOrDate`, `month?`, `day?`): `void`

Defined in: [Date/types/typed-calendar-controller.type.ts:25](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/typed-calendar-controller.type.ts#L25)

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

Defined in: [Date/types/typed-calendar-controller.type.ts:31](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/typed-calendar-controller.type.ts#L31)

#### Parameters

##### isRange

`boolean`

#### Returns

`void`

#### Inherited from

[`TypedCalendarController`](TypedCalendarController.md).[`setRangeSelectionMode`](TypedCalendarController.md#setrangeselectionmode)
