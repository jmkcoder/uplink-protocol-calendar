[**@uplink-protocol/form-controller v0.3.1**](../../../../README.md)

***

[@uplink-protocol/form-controller](../../../../globals.md) / [EventInterfaces](../README.md) / RecurrenceException

# Interface: RecurrenceException

Defined in: [Event/interfaces/event-recurrence.interfaces.ts:62](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-recurrence.interfaces.ts#L62)

Recurrence exception

## Properties

### action

> **action**: `"delete"` \| `"move"` \| `"modify"`

Defined in: [Event/interfaces/event-recurrence.interfaces.ts:66](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-recurrence.interfaces.ts#L66)

Exception action

***

### modifiedEvent?

> `optional` **modifiedEvent**: `Partial`\<[`CalendarEvent`](CalendarEvent.md)\>

Defined in: [Event/interfaces/event-recurrence.interfaces.ts:70](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-recurrence.interfaces.ts#L70)

Modified event data (if modified)

***

### newDate?

> `optional` **newDate**: `Date`

Defined in: [Event/interfaces/event-recurrence.interfaces.ts:68](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-recurrence.interfaces.ts#L68)

New date (if moved)

***

### originalStart

> **originalStart**: `Date`

Defined in: [Event/interfaces/event-recurrence.interfaces.ts:64](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-recurrence.interfaces.ts#L64)

Original occurrence date

***

### reason?

> `optional` **reason**: `string`

Defined in: [Event/interfaces/event-recurrence.interfaces.ts:72](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-recurrence.interfaces.ts#L72)

Reason for exception
