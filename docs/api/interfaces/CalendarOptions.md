[**@uplink-protocol/form-controller v0.2.0**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / CalendarOptions

# Interface: CalendarOptions

Defined in: [interfaces/calendar.interfaces.ts:22](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/interfaces/calendar.interfaces.ts#L22)

CalendarOptions - Interface for calendar configuration options

## Properties

### dateFormat?

> `optional` **dateFormat**: `string`

Defined in: [interfaces/calendar.interfaces.ts:34](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/interfaces/calendar.interfaces.ts#L34)

Date format for output (defaults to ISO string)

***

### dateFormatOptions?

> `optional` **dateFormatOptions**: `DateTimeFormatOptions`

Defined in: [interfaces/calendar.interfaces.ts:40](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/interfaces/calendar.interfaces.ts#L40)

Date format options for Intl.DateTimeFormat

***

### disabledDates?

> `optional` **disabledDates**: `Date`[]

Defined in: [interfaces/calendar.interfaces.ts:28](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/interfaces/calendar.interfaces.ts#L28)

List of disabled dates

***

### firstDayOfWeek?

> `optional` **firstDayOfWeek**: `number`

Defined in: [interfaces/calendar.interfaces.ts:32](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/interfaces/calendar.interfaces.ts#L32)

First day of week (0 = Sunday, 1 = Monday, etc.)

***

### hideOtherMonthDays?

> `optional` **hideOtherMonthDays**: `boolean`

Defined in: [interfaces/calendar.interfaces.ts:36](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/interfaces/calendar.interfaces.ts#L36)

Hide days from previous and next months

***

### initialSelectedDate?

> `optional` **initialSelectedDate**: `Date`

Defined in: [interfaces/calendar.interfaces.ts:30](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/interfaces/calendar.interfaces.ts#L30)

Start with a specific date selected

***

### isRangeSelection?

> `optional` **isRangeSelection**: `boolean`

Defined in: [interfaces/calendar.interfaces.ts:42](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/interfaces/calendar.interfaces.ts#L42)

Enable date range selection mode

***

### locale?

> `optional` **locale**: `string`

Defined in: [interfaces/calendar.interfaces.ts:38](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/interfaces/calendar.interfaces.ts#L38)

Locale for internationalization (defaults to 'en-US')

***

### maxDate?

> `optional` **maxDate**: `Date`

Defined in: [interfaces/calendar.interfaces.ts:26](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/interfaces/calendar.interfaces.ts#L26)

Maximum selectable date

***

### minDate?

> `optional` **minDate**: `Date`

Defined in: [interfaces/calendar.interfaces.ts:24](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/interfaces/calendar.interfaces.ts#L24)

Minimum selectable date

***

### showWeekNumbers?

> `optional` **showWeekNumbers**: `boolean`

Defined in: [interfaces/calendar.interfaces.ts:44](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/interfaces/calendar.interfaces.ts#L44)

Show week numbers in calendar
