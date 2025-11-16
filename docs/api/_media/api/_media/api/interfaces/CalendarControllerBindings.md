[**@uplink-protocol/form-controller v0.3.1**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / CalendarControllerBindings

# Interface: CalendarControllerBindings

Defined in: [Date/types/calendar-controller-bindings.type.ts:8](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-bindings.type.ts#L8)

Calendar Controller Bindings - Reactive state properties
These bindings automatically update the UI when calendar state changes

## Properties

### calendarDays

> **calendarDays**: `Binding`\<[`CalendarDate`](CalendarDate.md)[]\>

Defined in: [Date/types/calendar-controller-bindings.type.ts:31](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-bindings.type.ts#L31)

Array of calendar days for the current month view

***

### calendarMonths

> **calendarMonths**: `Binding`\<[`CalendarMonth`](CalendarMonth.md)[]\>

Defined in: [Date/types/calendar-controller-bindings.type.ts:34](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-bindings.type.ts#L34)

Array of calendar months for the year view

***

### calendarYears

> **calendarYears**: `Binding`\<[`CalendarYear`](CalendarYear.md)[]\>

Defined in: [Date/types/calendar-controller-bindings.type.ts:37](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-bindings.type.ts#L37)

Array of calendar years for the decade view

***

### currentDate

> **currentDate**: `Binding`\<`Date`\>

Defined in: [Date/types/calendar-controller-bindings.type.ts:19](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-bindings.type.ts#L19)

Current date being displayed (navigation state)

***

### currentMonth

> **currentMonth**: `Binding`\<`number`\>

Defined in: [Date/types/calendar-controller-bindings.type.ts:22](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-bindings.type.ts#L22)

Current month number (0-based)

***

### currentYear

> **currentYear**: `Binding`\<`number`\>

Defined in: [Date/types/calendar-controller-bindings.type.ts:25](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-bindings.type.ts#L25)

Current year number

***

### currentYearRangeBase

> **currentYearRangeBase**: `Binding`\<`number` \| [`YearRange`](YearRange.md)\>

Defined in: [Date/types/calendar-controller-bindings.type.ts:46](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-bindings.type.ts#L46)

Current year range base for decade view

***

### focusedDate

> **focusedDate**: `Binding`\<`Date` \| `null`\>

Defined in: [Date/types/calendar-controller-bindings.type.ts:16](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-bindings.type.ts#L16)

Currently focused date (for accessibility)

***

### isRangeSelection

> **isRangeSelection**: `Binding`\<`boolean`\>

Defined in: [Date/types/calendar-controller-bindings.type.ts:43](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-bindings.type.ts#L43)

Whether range selection mode is enabled

***

### monthName

> **monthName**: `Binding`\<`string`\>

Defined in: [Date/types/calendar-controller-bindings.type.ts:28](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-bindings.type.ts#L28)

Current month name in the selected locale

***

### selectedDate

> **selectedDate**: `Binding`\<`Date` \| `null`\>

Defined in: [Date/types/calendar-controller-bindings.type.ts:10](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-bindings.type.ts#L10)

Currently selected date (null if no date selected)

***

### selectedDateRange

> **selectedDateRange**: `Binding`\<[`DateRange`](DateRange.md)\>

Defined in: [Date/types/calendar-controller-bindings.type.ts:13](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-bindings.type.ts#L13)

Selected date range (for range selection mode)

***

### weekdays

> **weekdays**: `Binding`\<`string`[]\>

Defined in: [Date/types/calendar-controller-bindings.type.ts:40](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-bindings.type.ts#L40)

Array of weekday names in the selected locale
