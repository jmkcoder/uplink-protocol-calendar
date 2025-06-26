[**@uplink-protocol/form-controller v0.2.3**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / CalendarControllerInterface

# Interface: CalendarControllerInterface

Defined in: [controller.ts:59](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b9b5d949a141a189c8cea12210e36bb76f18ad06/src/controller.ts#L59)

CalendarControllerClass - A full featured date picker controller class.
Provides functionality for date picking and calendar display.

This controller uses a service-oriented architecture where all the core
functionality is delegated to specialized services.

## Extends

- [`TypedCalendarController`](TypedCalendarController.md)

## Properties

### \_currentDate

> **\_currentDate**: `Date`

Defined in: [controller.ts:60](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b9b5d949a141a189c8cea12210e36bb76f18ad06/src/controller.ts#L60)

***

### \_currentYearRangeBase

> **\_currentYearRangeBase**: `number`

Defined in: [controller.ts:75](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b9b5d949a141a189c8cea12210e36bb76f18ad06/src/controller.ts#L75)

***

### \_dateFormat

> **\_dateFormat**: `null` \| `string`

Defined in: [controller.ts:69](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b9b5d949a141a189c8cea12210e36bb76f18ad06/src/controller.ts#L69)

***

### \_dateFormatOptions

> **\_dateFormatOptions**: `null` \| `DateTimeFormatOptions`

Defined in: [controller.ts:73](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b9b5d949a141a189c8cea12210e36bb76f18ad06/src/controller.ts#L73)

***

### \_disabledDates

> **\_disabledDates**: `Date`[]

Defined in: [controller.ts:66](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b9b5d949a141a189c8cea12210e36bb76f18ad06/src/controller.ts#L66)

***

### \_disabledDaysOfWeek

> **\_disabledDaysOfWeek**: `number`[]

Defined in: [controller.ts:67](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b9b5d949a141a189c8cea12210e36bb76f18ad06/src/controller.ts#L67)

***

### \_firstDayOfWeek

> **\_firstDayOfWeek**: `number`

Defined in: [controller.ts:68](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b9b5d949a141a189c8cea12210e36bb76f18ad06/src/controller.ts#L68)

***

### \_focusedDate

> **\_focusedDate**: `null` \| `Date`

Defined in: [controller.ts:63](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b9b5d949a141a189c8cea12210e36bb76f18ad06/src/controller.ts#L63)

***

### \_hideOtherMonthDays

> **\_hideOtherMonthDays**: `boolean`

Defined in: [controller.ts:71](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b9b5d949a141a189c8cea12210e36bb76f18ad06/src/controller.ts#L71)

***

### \_isRangeSelection

> **\_isRangeSelection**: `boolean`

Defined in: [controller.ts:70](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b9b5d949a141a189c8cea12210e36bb76f18ad06/src/controller.ts#L70)

***

### \_locale

> **\_locale**: `string`

Defined in: [controller.ts:72](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b9b5d949a141a189c8cea12210e36bb76f18ad06/src/controller.ts#L72)

***

### \_maxDate

> **\_maxDate**: `null` \| `Date`

Defined in: [controller.ts:65](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b9b5d949a141a189c8cea12210e36bb76f18ad06/src/controller.ts#L65)

***

### \_minDate

> **\_minDate**: `null` \| `Date`

Defined in: [controller.ts:64](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b9b5d949a141a189c8cea12210e36bb76f18ad06/src/controller.ts#L64)

***

### \_selectedDate

> **\_selectedDate**: `null` \| `Date`

Defined in: [controller.ts:61](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b9b5d949a141a189c8cea12210e36bb76f18ad06/src/controller.ts#L61)

***

### \_selectedDateRange

> **\_selectedDateRange**: [`DateRange`](DateRange.md)

Defined in: [controller.ts:62](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b9b5d949a141a189c8cea12210e36bb76f18ad06/src/controller.ts#L62)

***

### \_yearRangeSize

> **\_yearRangeSize**: `number`

Defined in: [controller.ts:74](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b9b5d949a141a189c8cea12210e36bb76f18ad06/src/controller.ts#L74)

***

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

### nextMonth()?

> `optional` **nextMonth**: () => `void`

Defined in: [controller.ts:78](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b9b5d949a141a189c8cea12210e36bb76f18ad06/src/controller.ts#L78)

#### Returns

`void`

***

### nextYear()?

> `optional` **nextYear**: () => `void`

Defined in: [controller.ts:81](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b9b5d949a141a189c8cea12210e36bb76f18ad06/src/controller.ts#L81)

#### Returns

`void`

***

### options?

> `optional` **options**: [`CalendarOptions`](CalendarOptions.md)

Defined in: [types/calendar-controller.types.ts:309](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b9b5d949a141a189c8cea12210e36bb76f18ad06/src/types/calendar-controller.types.ts#L309)

Calendar configuration options

#### Inherited from

[`TypedCalendarController`](TypedCalendarController.md).[`options`](TypedCalendarController.md#options)

***

### previousMonth()?

> `optional` **previousMonth**: () => `void`

Defined in: [controller.ts:80](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b9b5d949a141a189c8cea12210e36bb76f18ad06/src/controller.ts#L80)

#### Returns

`void`

***

### prevMonth()?

> `optional` **prevMonth**: () => `void`

Defined in: [controller.ts:79](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b9b5d949a141a189c8cea12210e36bb76f18ad06/src/controller.ts#L79)

#### Returns

`void`

***

### prevYear()?

> `optional` **prevYear**: () => `void`

Defined in: [controller.ts:82](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b9b5d949a141a189c8cea12210e36bb76f18ad06/src/controller.ts#L82)

#### Returns

`void`

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
