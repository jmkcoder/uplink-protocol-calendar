[**@uplink-protocol/form-controller v0.3.1**](../../../../README.md)

***

[@uplink-protocol/form-controller](../../../../globals.md) / [EventTypes](../README.md) / EventControllerEvents

# Interface: EventControllerEvents

Defined in: [Event/types/event-controller.types.ts:185](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L185)

Event Controller Events - Event system for reactivity

## Properties

### bulkOperationCompleted

> **bulkOperationCompleted**: `EventEmitter`\<\{ `count`: `number`; `operation`: `string`; \}\>

Defined in: [Event/types/event-controller.types.ts:232](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L232)

Bulk operation completed

***

### categoryAdded

> **categoryAdded**: `EventEmitter`\<`string`\>

Defined in: [Event/types/event-controller.types.ts:250](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L250)

Category added

***

### conflictDetected

> **conflictDetected**: `EventEmitter`\<`any`\>

Defined in: [Event/types/event-controller.types.ts:217](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L217)

Conflict detected

***

### conflictResolved

> **conflictResolved**: `EventEmitter`\<`any`\>

Defined in: [Event/types/event-controller.types.ts:220](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L220)

Conflict resolved

***

### errorOccurred

> **errorOccurred**: `EventEmitter`\<`Error`\>

Defined in: [Event/types/event-controller.types.ts:238](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L238)

Error occurred

***

### eventCreated

> **eventCreated**: `EventEmitter`\<[`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md)\>

Defined in: [Event/types/event-controller.types.ts:187](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L187)

Event created

***

### eventDeleted

> **eventDeleted**: `EventEmitter`\<\{ `event`: [`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md); `eventId`: `string`; \}\>

Defined in: [Event/types/event-controller.types.ts:193](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L193)

Event deleted

***

### eventDeselected

> **eventDeselected**: `EventEmitter`\<`void`\>

Defined in: [Event/types/event-controller.types.ts:211](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L211)

Event deselected

***

### eventSelected

> **eventSelected**: `EventEmitter`\<[`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md)\>

Defined in: [Event/types/event-controller.types.ts:208](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L208)

Event selected

***

### eventsLoaded

> **eventsLoaded**: `EventEmitter`\<[`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md)[]\>

Defined in: [Event/types/event-controller.types.ts:196](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L196)

Events loaded

***

### eventUpdated

> **eventUpdated**: `EventEmitter`\<\{ `event`: [`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md); `oldEvent`: [`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md); \}\>

Defined in: [Event/types/event-controller.types.ts:190](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L190)

Event updated

***

### filterChanged

> **filterChanged**: `EventEmitter`\<[`EventFilter`](../../EventInterfaces/interfaces/EventFilter.md)\>

Defined in: [Event/types/event-controller.types.ts:199](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L199)

Filter changed

***

### loadingChanged

> **loadingChanged**: `EventEmitter`\<`boolean`\>

Defined in: [Event/types/event-controller.types.ts:235](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L235)

Loading state changed

***

### recurrenceCreated

> **recurrenceCreated**: `EventEmitter`\<[`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md)\>

Defined in: [Event/types/event-controller.types.ts:244](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L244)

Recurrence created

***

### reminderScheduled

> **reminderScheduled**: `EventEmitter`\<\{ `eventId`: `string`; `reminder`: `any`; \}\>

Defined in: [Event/types/event-controller.types.ts:247](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L247)

Reminder scheduled

***

### searchPerformed

> **searchPerformed**: `EventEmitter`\<\{ `query`: `string`; `results`: [`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md)[]; \}\>

Defined in: [Event/types/event-controller.types.ts:205](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L205)

Search performed

***

### sortChanged

> **sortChanged**: `EventEmitter`\<[`EventSort`](../../EventInterfaces/interfaces/EventSort.md)\>

Defined in: [Event/types/event-controller.types.ts:202](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L202)

Sort changed

***

### statisticsUpdated

> **statisticsUpdated**: `EventEmitter`\<`any`\>

Defined in: [Event/types/event-controller.types.ts:241](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L241)

Statistics updated

***

### syncCompleted

> **syncCompleted**: `EventEmitter`\<\{ `providerId`: `string`; `results`: `any`; \}\>

Defined in: [Event/types/event-controller.types.ts:226](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L226)

Sync completed

***

### syncFailed

> **syncFailed**: `EventEmitter`\<\{ `error`: `string`; `providerId`: `string`; \}\>

Defined in: [Event/types/event-controller.types.ts:229](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L229)

Sync failed

***

### syncStarted

> **syncStarted**: `EventEmitter`\<\{ `providerId`: `string`; \}\>

Defined in: [Event/types/event-controller.types.ts:223](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L223)

Sync started

***

### tagAdded

> **tagAdded**: `EventEmitter`\<`string`\>

Defined in: [Event/types/event-controller.types.ts:253](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L253)

Tag added

***

### validationFailed

> **validationFailed**: `EventEmitter`\<[`EventValidationResult`](../../EventInterfaces/interfaces/EventValidationResult.md)\>

Defined in: [Event/types/event-controller.types.ts:214](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L214)

Validation failed
