[**@uplink-protocol/form-controller v0.3.1**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / CalendarControllerEvents

# Interface: CalendarControllerEvents

Defined in: [Date/types/calendar-controller-events.type.ts:8](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-events.type.ts#L8)

Calendar Controller Events - Event system for reacting to calendar changes
Subscribe to these events to respond to user interactions and state changes

## Properties

### dateRangeSelected

> **dateRangeSelected**: `EventEmitter`\<[`DateRange`](DateRange.md)\>

Defined in: [Date/types/calendar-controller-events.type.ts:13](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-events.type.ts#L13)

Fired when a date range is selected (in range mode)

***

### dateSelected

> **dateSelected**: `EventEmitter`\<`Date`\>

Defined in: [Date/types/calendar-controller-events.type.ts:10](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-events.type.ts#L10)

Fired when a date is selected

***

### monthChanged

> **monthChanged**: `EventEmitter`\<`number`\>

Defined in: [Date/types/calendar-controller-events.type.ts:16](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-events.type.ts#L16)

Fired when the month changes

***

### viewChanged

> **viewChanged**: `EventEmitter`\<\{ `month`: `number`; `year`: `number`; \}\>

Defined in: [Date/types/calendar-controller-events.type.ts:22](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-events.type.ts#L22)

Fired when the view changes (month/year navigation)

***

### yearChanged

> **yearChanged**: `EventEmitter`\<`number`\>

Defined in: [Date/types/calendar-controller-events.type.ts:19](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-events.type.ts#L19)

Fired when the year changes

***

### yearRangeChanged

> **yearRangeChanged**: `EventEmitter`\<[`YearRange`](YearRange.md)\>

Defined in: [Date/types/calendar-controller-events.type.ts:25](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-events.type.ts#L25)

Fired when the year range changes (decade navigation)
