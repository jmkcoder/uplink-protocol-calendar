[**@uplink-protocol/form-controller v0.3.0**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / CalendarOptions

# Interface: CalendarOptions

Defined in: [Date/interfaces/calendar.interfaces.ts:22](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/interfaces/calendar.interfaces.ts#L22)

CalendarOptions - Interface for calendar configuration options

## Properties

### dateFormat?

> `optional` **dateFormat**: `string`

Defined in: [Date/interfaces/calendar.interfaces.ts:36](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/interfaces/calendar.interfaces.ts#L36)

Date format for output (defaults to ISO string)

***

### dateFormatOptions?

> `optional` **dateFormatOptions**: `DateTimeFormatOptions`

Defined in: [Date/interfaces/calendar.interfaces.ts:42](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/interfaces/calendar.interfaces.ts#L42)

Date format options for Intl.DateTimeFormat

***

### disabledDates?

> `optional` **disabledDates**: `Date`[]

Defined in: [Date/interfaces/calendar.interfaces.ts:28](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/interfaces/calendar.interfaces.ts#L28)

List of disabled dates

***

### disabledDaysOfWeek?

> `optional` **disabledDaysOfWeek**: `number`[]

Defined in: [Date/interfaces/calendar.interfaces.ts:30](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/interfaces/calendar.interfaces.ts#L30)

List of disabled days of the week (0 = Sunday, 1 = Monday, etc.)

***

### firstDayOfWeek?

> `optional` **firstDayOfWeek**: `number`

Defined in: [Date/interfaces/calendar.interfaces.ts:34](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/interfaces/calendar.interfaces.ts#L34)

First day of week (0 = Sunday, 1 = Monday, etc.)

***

### hideOtherMonthDays?

> `optional` **hideOtherMonthDays**: `boolean`

Defined in: [Date/interfaces/calendar.interfaces.ts:38](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/interfaces/calendar.interfaces.ts#L38)

Hide days from previous and next months

***

### initialSelectedDate?

> `optional` **initialSelectedDate**: `Date`

Defined in: [Date/interfaces/calendar.interfaces.ts:32](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/interfaces/calendar.interfaces.ts#L32)

Start with a specific date selected

***

### isRangeSelection?

> `optional` **isRangeSelection**: `boolean`

Defined in: [Date/interfaces/calendar.interfaces.ts:44](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/interfaces/calendar.interfaces.ts#L44)

Enable date range selection mode

***

### locale?

> `optional` **locale**: `string`

Defined in: [Date/interfaces/calendar.interfaces.ts:40](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/interfaces/calendar.interfaces.ts#L40)

Locale for internationalization (defaults to 'en-US')

***

### maxDate?

> `optional` **maxDate**: `Date`

Defined in: [Date/interfaces/calendar.interfaces.ts:26](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/interfaces/calendar.interfaces.ts#L26)

Maximum selectable date

***

### minDate?

> `optional` **minDate**: `Date`

Defined in: [Date/interfaces/calendar.interfaces.ts:24](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/interfaces/calendar.interfaces.ts#L24)

Minimum selectable date

***

### showWeekNumbers?

> `optional` **showWeekNumbers**: `boolean`

Defined in: [Date/interfaces/calendar.interfaces.ts:46](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/interfaces/calendar.interfaces.ts#L46)

Show week numbers in calendar
