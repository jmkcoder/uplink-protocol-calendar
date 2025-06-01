[**@uplink-protocol/form-controller v0.2.0**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / CalendarControllerInterface

# Interface: CalendarControllerInterface

Defined in: [controller.ts:56](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L56)

CalendarControllerClass - A full featured date picker controller class.
Provides functionality for date picking and calendar display.

This controller uses a service-oriented architecture where all the core
functionality is delegated to specialized services.

## Extends

- `TypedController`

## Properties

### \_currentDate

> **\_currentDate**: `Date`

Defined in: [controller.ts:57](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L57)

***

### \_currentYearRangeBase

> **\_currentYearRangeBase**: `number`

Defined in: [controller.ts:71](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L71)

***

### \_dateFormat

> **\_dateFormat**: `null` \| `string`

Defined in: [controller.ts:65](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L65)

***

### \_dateFormatOptions

> **\_dateFormatOptions**: `null` \| `DateTimeFormatOptions`

Defined in: [controller.ts:69](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L69)

***

### \_disabledDates

> **\_disabledDates**: `Date`[]

Defined in: [controller.ts:63](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L63)

***

### \_firstDayOfWeek

> **\_firstDayOfWeek**: `number`

Defined in: [controller.ts:64](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L64)

***

### \_focusedDate

> **\_focusedDate**: `null` \| `Date`

Defined in: [controller.ts:60](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L60)

***

### \_hideOtherMonthDays

> **\_hideOtherMonthDays**: `boolean`

Defined in: [controller.ts:67](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L67)

***

### \_isRangeSelection

> **\_isRangeSelection**: `boolean`

Defined in: [controller.ts:66](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L66)

***

### \_locale

> **\_locale**: `string`

Defined in: [controller.ts:68](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L68)

***

### \_maxDate

> **\_maxDate**: `null` \| `Date`

Defined in: [controller.ts:62](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L62)

***

### \_minDate

> **\_minDate**: `null` \| `Date`

Defined in: [controller.ts:61](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L61)

***

### \_selectedDate

> **\_selectedDate**: `null` \| `Date`

Defined in: [controller.ts:58](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L58)

***

### \_selectedDateRange

> **\_selectedDateRange**: [`DateRange`](DateRange.md)

Defined in: [controller.ts:59](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L59)

***

### \_yearRangeSize

> **\_yearRangeSize**: `number`

Defined in: [controller.ts:70](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L70)

***

### nextMonth()?

> `optional` **nextMonth**: () => `void`

Defined in: [controller.ts:73](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L73)

#### Returns

`void`

***

### nextYear()?

> `optional` **nextYear**: () => `void`

Defined in: [controller.ts:76](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L76)

#### Returns

`void`

***

### previousMonth()?

> `optional` **previousMonth**: () => `void`

Defined in: [controller.ts:75](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L75)

#### Returns

`void`

***

### prevMonth()?

> `optional` **prevMonth**: () => `void`

Defined in: [controller.ts:74](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L74)

#### Returns

`void`

***

### prevYear()?

> `optional` **prevYear**: () => `void`

Defined in: [controller.ts:77](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L77)

#### Returns

`void`
