[**@uplink-protocol/form-controller v0.3.0**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / TimeControllerEvents

# Interface: TimeControllerEvents

Defined in: [Time/types/time-controller.types.ts:242](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L242)

Time Controller Events - Event system for reacting to time changes
Subscribe to these events to respond to user interactions and state changes

## Properties

### formatChanged

> **formatChanged**: `EventEmitter`\<\{ `showMilliseconds`: `boolean`; `showSeconds`: `boolean`; `use12Hour`: `boolean`; \}\>

Defined in: [Time/types/time-controller.types.ts:256](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L256)

Fired when the time format changes

***

### localeChanged

> **localeChanged**: `EventEmitter`\<`string`\>

Defined in: [Time/types/time-controller.types.ts:259](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L259)

Fired when the locale changes

***

### segmentFocused

> **segmentFocused**: `EventEmitter`\<`"hours"` \| `"minutes"` \| `"seconds"` \| `"milliseconds"` \| `"period"`\>

Defined in: [Time/types/time-controller.types.ts:253](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L253)

Fired when a time segment receives focus

***

### timeChanged

> **timeChanged**: `EventEmitter`\<`Date`\>

Defined in: [Time/types/time-controller.types.ts:250](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L250)

Fired when the time changes

***

### timeRangeSelected

> **timeRangeSelected**: `EventEmitter`\<\{ `endTime`: `null` \| `Date`; `startTime`: `null` \| `Date`; \}\>

Defined in: [Time/types/time-controller.types.ts:247](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L247)

Fired when a time range is selected

***

### timeSelected

> **timeSelected**: `EventEmitter`\<`Date`\>

Defined in: [Time/types/time-controller.types.ts:244](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L244)

Fired when a time is selected
