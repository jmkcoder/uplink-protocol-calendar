[**@uplink-protocol/form-controller v0.1.1**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / CalendarControllerInterface

# Interface: CalendarControllerInterface

Defined in: [controller.ts:45](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/controller.ts#L45)

CalendarControllerClass - A full featured date picker controller class.
Provides functionality for date picking and calendar display.

This controller uses a service-oriented architecture where all the core
functionality is delegated to specialized services.

## Extends

- `TypedController`

## Properties

### \_currentDate

> **\_currentDate**: `Date`

Defined in: [controller.ts:46](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/controller.ts#L46)

***

### \_currentYearRangeBase

> **\_currentYearRangeBase**: `number`

Defined in: [controller.ts:60](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/controller.ts#L60)

***

### \_dateFormat

> **\_dateFormat**: `null` \| `string`

Defined in: [controller.ts:54](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/controller.ts#L54)

***

### \_dateFormatOptions

> **\_dateFormatOptions**: `null` \| `DateTimeFormatOptions`

Defined in: [controller.ts:58](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/controller.ts#L58)

***

### \_disabledDates

> **\_disabledDates**: `Date`[]

Defined in: [controller.ts:52](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/controller.ts#L52)

***

### \_firstDayOfWeek

> **\_firstDayOfWeek**: `number`

Defined in: [controller.ts:53](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/controller.ts#L53)

***

### \_focusedDate

> **\_focusedDate**: `null` \| `Date`

Defined in: [controller.ts:49](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/controller.ts#L49)

***

### \_hideOtherMonthDays

> **\_hideOtherMonthDays**: `boolean`

Defined in: [controller.ts:56](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/controller.ts#L56)

***

### \_isRangeSelection

> **\_isRangeSelection**: `boolean`

Defined in: [controller.ts:55](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/controller.ts#L55)

***

### \_locale

> **\_locale**: `string`

Defined in: [controller.ts:57](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/controller.ts#L57)

***

### \_maxDate

> **\_maxDate**: `null` \| `Date`

Defined in: [controller.ts:51](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/controller.ts#L51)

***

### \_minDate

> **\_minDate**: `null` \| `Date`

Defined in: [controller.ts:50](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/controller.ts#L50)

***

### \_selectedDate

> **\_selectedDate**: `null` \| `Date`

Defined in: [controller.ts:47](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/controller.ts#L47)

***

### \_selectedDateRange

> **\_selectedDateRange**: [`DateRange`](DateRange.md)

Defined in: [controller.ts:48](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/controller.ts#L48)

***

### \_yearRangeSize

> **\_yearRangeSize**: `number`

Defined in: [controller.ts:59](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/controller.ts#L59)
