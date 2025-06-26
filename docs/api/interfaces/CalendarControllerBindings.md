[**@uplink-protocol/form-controller v0.2.3**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / CalendarControllerBindings

# Interface: CalendarControllerBindings

Defined in: [types/calendar-controller.types.ts:20](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b9b5d949a141a189c8cea12210e36bb76f18ad06/src/types/calendar-controller.types.ts#L20)

Calendar Controller Bindings - Reactive state properties
These bindings automatically update the UI when calendar state changes

## Properties

### calendarDays

> **calendarDays**: `Binding`\<[`CalendarDate`](CalendarDate.md)[]\>

Defined in: [types/calendar-controller.types.ts:43](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b9b5d949a141a189c8cea12210e36bb76f18ad06/src/types/calendar-controller.types.ts#L43)

Array of calendar days for the current month view

***

### calendarMonths

> **calendarMonths**: `Binding`\<[`CalendarMonth`](CalendarMonth.md)[]\>

Defined in: [types/calendar-controller.types.ts:46](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b9b5d949a141a189c8cea12210e36bb76f18ad06/src/types/calendar-controller.types.ts#L46)

Array of calendar months for the year view

***

### calendarYears

> **calendarYears**: `Binding`\<[`CalendarYear`](CalendarYear.md)[]\>

Defined in: [types/calendar-controller.types.ts:49](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b9b5d949a141a189c8cea12210e36bb76f18ad06/src/types/calendar-controller.types.ts#L49)

Array of calendar years for the decade view

***

### currentDate

> **currentDate**: `Binding`\<`Date`\>

Defined in: [types/calendar-controller.types.ts:31](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b9b5d949a141a189c8cea12210e36bb76f18ad06/src/types/calendar-controller.types.ts#L31)

Current date being displayed (navigation state)

***

### currentMonth

> **currentMonth**: `Binding`\<`number`\>

Defined in: [types/calendar-controller.types.ts:34](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b9b5d949a141a189c8cea12210e36bb76f18ad06/src/types/calendar-controller.types.ts#L34)

Current month number (0-based)

***

### currentYear

> **currentYear**: `Binding`\<`number`\>

Defined in: [types/calendar-controller.types.ts:37](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b9b5d949a141a189c8cea12210e36bb76f18ad06/src/types/calendar-controller.types.ts#L37)

Current year number

***

### currentYearRangeBase

> **currentYearRangeBase**: `Binding`\<`number` \| [`YearRange`](YearRange.md)\>

Defined in: [types/calendar-controller.types.ts:58](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b9b5d949a141a189c8cea12210e36bb76f18ad06/src/types/calendar-controller.types.ts#L58)

Current year range base for decade view

***

### focusedDate

> **focusedDate**: `Binding`\<`null` \| `Date`\>

Defined in: [types/calendar-controller.types.ts:28](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b9b5d949a141a189c8cea12210e36bb76f18ad06/src/types/calendar-controller.types.ts#L28)

Currently focused date (for accessibility)

***

### isRangeSelection

> **isRangeSelection**: `Binding`\<`boolean`\>

Defined in: [types/calendar-controller.types.ts:55](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b9b5d949a141a189c8cea12210e36bb76f18ad06/src/types/calendar-controller.types.ts#L55)

Whether range selection mode is enabled

***

### monthName

> **monthName**: `Binding`\<`string`\>

Defined in: [types/calendar-controller.types.ts:40](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b9b5d949a141a189c8cea12210e36bb76f18ad06/src/types/calendar-controller.types.ts#L40)

Current month name in the selected locale

***

### selectedDate

> **selectedDate**: `Binding`\<`null` \| `Date`\>

Defined in: [types/calendar-controller.types.ts:22](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b9b5d949a141a189c8cea12210e36bb76f18ad06/src/types/calendar-controller.types.ts#L22)

Currently selected date (null if no date selected)

***

### selectedDateRange

> **selectedDateRange**: `Binding`\<[`DateRange`](DateRange.md)\>

Defined in: [types/calendar-controller.types.ts:25](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b9b5d949a141a189c8cea12210e36bb76f18ad06/src/types/calendar-controller.types.ts#L25)

Selected date range (for range selection mode)

***

### weekdays

> **weekdays**: `Binding`\<`string`[]\>

Defined in: [types/calendar-controller.types.ts:52](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b9b5d949a141a189c8cea12210e36bb76f18ad06/src/types/calendar-controller.types.ts#L52)

Array of weekday names in the selected locale
