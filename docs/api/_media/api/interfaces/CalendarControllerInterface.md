[**@uplink-protocol/form-controller v0.3.1**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / CalendarControllerInterface

# Interface: CalendarControllerInterface

Defined in: [Date/controller.ts:71](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L71)

CalendarControllerClass - Pure Orchestrator

This controller is a thin orchestration layer that delegates ALL logic
to specialized coordinators. It contains NO business logic itself.

Architecture:
- Services: Low-level operations (date manipulation, formatting, etc.)
- Coordinators: Business logic and state management
- Controller: Public API facade and delegation

## Extends

- [`TypedCalendarController`](TypedCalendarController.md)

## Properties

### \_currentDate

> **\_currentDate**: `Date`

Defined in: [Date/controller.ts:72](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L72)

***

### \_currentYearRangeBase

> **\_currentYearRangeBase**: `number`

Defined in: [Date/controller.ts:87](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L87)

***

### \_dateFormat

> **\_dateFormat**: `string` \| `null`

Defined in: [Date/controller.ts:81](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L81)

***

### \_dateFormatOptions

> **\_dateFormatOptions**: `DateTimeFormatOptions` \| `null`

Defined in: [Date/controller.ts:85](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L85)

***

### \_disabledDates

> **\_disabledDates**: `Date`[]

Defined in: [Date/controller.ts:78](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L78)

***

### \_disabledDaysOfWeek

> **\_disabledDaysOfWeek**: `number`[]

Defined in: [Date/controller.ts:79](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L79)

***

### \_firstDayOfWeek

> **\_firstDayOfWeek**: `number`

Defined in: [Date/controller.ts:80](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L80)

***

### \_focusedDate

> **\_focusedDate**: `Date` \| `null`

Defined in: [Date/controller.ts:75](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L75)

***

### \_hideOtherMonthDays

> **\_hideOtherMonthDays**: `boolean`

Defined in: [Date/controller.ts:83](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L83)

***

### \_isRangeSelection

> **\_isRangeSelection**: `boolean`

Defined in: [Date/controller.ts:82](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L82)

***

### \_locale

> **\_locale**: `string`

Defined in: [Date/controller.ts:84](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L84)

***

### \_maxDate

> **\_maxDate**: `Date` \| `null`

Defined in: [Date/controller.ts:77](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L77)

***

### \_minDate

> **\_minDate**: `Date` \| `null`

Defined in: [Date/controller.ts:76](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L76)

***

### \_selectedDate

> **\_selectedDate**: `Date` \| `null`

Defined in: [Date/controller.ts:73](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L73)

***

### \_selectedDateRange

> **\_selectedDateRange**: [`DateRange`](DateRange.md)

Defined in: [Date/controller.ts:74](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L74)

***

### \_yearRangeSize

> **\_yearRangeSize**: `number`

Defined in: [Date/controller.ts:86](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L86)

***

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
