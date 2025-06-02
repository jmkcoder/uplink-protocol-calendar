[**@uplink-protocol/form-controller v0.2.1**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / CalendarControllerEvents

# Interface: CalendarControllerEvents

Defined in: [types/calendar-controller.types.ts:275](https://github.com/jmkcoder/uplink-protocol-calendar/blob/311e0b81efba7399cf1c367c0a2007aa66f3b830/src/types/calendar-controller.types.ts#L275)

Calendar Controller Events - Event system for reacting to calendar changes
Subscribe to these events to respond to user interactions and state changes

## Properties

### dateRangeSelected

> **dateRangeSelected**: `EventEmitter`\<[`DateRange`](DateRange.md)\>

Defined in: [types/calendar-controller.types.ts:280](https://github.com/jmkcoder/uplink-protocol-calendar/blob/311e0b81efba7399cf1c367c0a2007aa66f3b830/src/types/calendar-controller.types.ts#L280)

Fired when a date range is selected (in range mode)

***

### dateSelected

> **dateSelected**: `EventEmitter`\<`Date`\>

Defined in: [types/calendar-controller.types.ts:277](https://github.com/jmkcoder/uplink-protocol-calendar/blob/311e0b81efba7399cf1c367c0a2007aa66f3b830/src/types/calendar-controller.types.ts#L277)

Fired when a date is selected

***

### monthChanged

> **monthChanged**: `EventEmitter`\<`number`\>

Defined in: [types/calendar-controller.types.ts:283](https://github.com/jmkcoder/uplink-protocol-calendar/blob/311e0b81efba7399cf1c367c0a2007aa66f3b830/src/types/calendar-controller.types.ts#L283)

Fired when the month changes

***

### viewChanged

> **viewChanged**: `EventEmitter`\<\{ `month`: `number`; `year`: `number`; \}\>

Defined in: [types/calendar-controller.types.ts:289](https://github.com/jmkcoder/uplink-protocol-calendar/blob/311e0b81efba7399cf1c367c0a2007aa66f3b830/src/types/calendar-controller.types.ts#L289)

Fired when the view changes (month/year navigation)

***

### yearChanged

> **yearChanged**: `EventEmitter`\<`number`\>

Defined in: [types/calendar-controller.types.ts:286](https://github.com/jmkcoder/uplink-protocol-calendar/blob/311e0b81efba7399cf1c367c0a2007aa66f3b830/src/types/calendar-controller.types.ts#L286)

Fired when the year changes

***

### yearRangeChanged

> **yearRangeChanged**: `EventEmitter`\<[`YearRange`](YearRange.md)\>

Defined in: [types/calendar-controller.types.ts:292](https://github.com/jmkcoder/uplink-protocol-calendar/blob/311e0b81efba7399cf1c367c0a2007aa66f3b830/src/types/calendar-controller.types.ts#L292)

Fired when the year range changes (decade navigation)
