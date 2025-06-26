[**@uplink-protocol/form-controller v0.3.0**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / TimeOptions

# Interface: TimeOptions

Defined in: [Time/interfaces/time.interfaces.ts:15](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time.interfaces.ts#L15)

TimeOptions - Interface for time picker configuration options

## Properties

### disabledHours?

> `optional` **disabledHours**: `number`[]

Defined in: [Time/interfaces/time.interfaces.ts:23](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time.interfaces.ts#L23)

List of disabled hours (0-23)

***

### disabledMinutes?

> `optional` **disabledMinutes**: `number`[]

Defined in: [Time/interfaces/time.interfaces.ts:25](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time.interfaces.ts#L25)

List of disabled minutes (0-59)

***

### disabledSeconds?

> `optional` **disabledSeconds**: `number`[]

Defined in: [Time/interfaces/time.interfaces.ts:27](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time.interfaces.ts#L27)

List of disabled seconds (0-59)

***

### disabledTimes?

> `optional` **disabledTimes**: `Date`[]

Defined in: [Time/interfaces/time.interfaces.ts:21](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time.interfaces.ts#L21)

List of disabled times

***

### initialSelectedTime?

> `optional` **initialSelectedTime**: `Date`

Defined in: [Time/interfaces/time.interfaces.ts:29](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time.interfaces.ts#L29)

Start with a specific time selected

***

### isRangeSelection?

> `optional` **isRangeSelection**: `boolean`

Defined in: [Time/interfaces/time.interfaces.ts:47](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time.interfaces.ts#L47)

Enable time range selection mode

***

### locale?

> `optional` **locale**: `string`

Defined in: [Time/interfaces/time.interfaces.ts:33](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time.interfaces.ts#L33)

Locale for internationalization (defaults to 'en-US')

***

### maxTime?

> `optional` **maxTime**: `Date`

Defined in: [Time/interfaces/time.interfaces.ts:19](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time.interfaces.ts#L19)

Maximum selectable time

***

### minTime?

> `optional` **minTime**: `Date`

Defined in: [Time/interfaces/time.interfaces.ts:17](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time.interfaces.ts#L17)

Minimum selectable time

***

### minuteStep?

> `optional` **minuteStep**: `number`

Defined in: [Time/interfaces/time.interfaces.ts:43](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time.interfaces.ts#L43)

Step interval for minutes (1, 5, 10, 15, 30)

***

### secondStep?

> `optional` **secondStep**: `number`

Defined in: [Time/interfaces/time.interfaces.ts:45](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time.interfaces.ts#L45)

Step interval for seconds (1, 5, 10, 15, 30)

***

### showMilliseconds?

> `optional` **showMilliseconds**: `boolean`

Defined in: [Time/interfaces/time.interfaces.ts:41](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time.interfaces.ts#L41)

Show milliseconds in time picker

***

### showSeconds?

> `optional` **showSeconds**: `boolean`

Defined in: [Time/interfaces/time.interfaces.ts:39](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time.interfaces.ts#L39)

Show seconds in time picker

***

### timeFormat?

> `optional` **timeFormat**: `string`

Defined in: [Time/interfaces/time.interfaces.ts:31](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time.interfaces.ts#L31)

Time format for output (defaults to HH:mm:ss)

***

### timeFormatOptions?

> `optional` **timeFormatOptions**: `DateTimeFormatOptions`

Defined in: [Time/interfaces/time.interfaces.ts:35](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time.interfaces.ts#L35)

Time format options for Intl.DateTimeFormat

***

### use12HourFormat?

> `optional` **use12HourFormat**: `boolean`

Defined in: [Time/interfaces/time.interfaces.ts:37](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time.interfaces.ts#L37)

Use 12-hour format instead of 24-hour
