[**@uplink-protocol/form-controller v0.3.0**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / CalendarControllerEvents

# Interface: CalendarControllerEvents

Defined in: [Date/types/calendar-controller.types.ts:274](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/types/calendar-controller.types.ts#L274)

Calendar Controller Events - Event system for reacting to calendar changes
Subscribe to these events to respond to user interactions and state changes

## Properties

### dateRangeSelected

> **dateRangeSelected**: `EventEmitter`\<[`DateRange`](DateRange.md)\>

Defined in: [Date/types/calendar-controller.types.ts:279](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/types/calendar-controller.types.ts#L279)

Fired when a date range is selected (in range mode)

***

### dateSelected

> **dateSelected**: `EventEmitter`\<`Date`\>

Defined in: [Date/types/calendar-controller.types.ts:276](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/types/calendar-controller.types.ts#L276)

Fired when a date is selected

***

### monthChanged

> **monthChanged**: `EventEmitter`\<`number`\>

Defined in: [Date/types/calendar-controller.types.ts:282](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/types/calendar-controller.types.ts#L282)

Fired when the month changes

***

### viewChanged

> **viewChanged**: `EventEmitter`\<\{ `month`: `number`; `year`: `number`; \}\>

Defined in: [Date/types/calendar-controller.types.ts:288](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/types/calendar-controller.types.ts#L288)

Fired when the view changes (month/year navigation)

***

### yearChanged

> **yearChanged**: `EventEmitter`\<`number`\>

Defined in: [Date/types/calendar-controller.types.ts:285](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/types/calendar-controller.types.ts#L285)

Fired when the year changes

***

### yearRangeChanged

> **yearRangeChanged**: `EventEmitter`\<[`YearRange`](YearRange.md)\>

Defined in: [Date/types/calendar-controller.types.ts:291](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/types/calendar-controller.types.ts#L291)

Fired when the year range changes (decade navigation)
