[**@uplink-protocol/form-controller v0.3.1**](../../../../README.md)

***

[@uplink-protocol/form-controller](../../../../globals.md) / [EventInterfaces](../README.md) / RecurrenceOccurrence

# Interface: RecurrenceOccurrence

Defined in: [Event/interfaces/event-recurrence.interfaces.ts:78](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-recurrence.interfaces.ts#L78)

Generated occurrence

## Properties

### actualStart?

> `optional` **actualStart**: `Date`

Defined in: [Event/interfaces/event-recurrence.interfaces.ts:84](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-recurrence.interfaces.ts#L84)

Actual start date (if modified by exception)

***

### date

> **date**: `Date`

Defined in: [Event/interfaces/event-recurrence.interfaces.ts:80](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-recurrence.interfaces.ts#L80)

Occurrence date

***

### event

> **event**: [`CalendarEvent`](CalendarEvent.md)

Defined in: [Event/interfaces/event-recurrence.interfaces.ts:90](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-recurrence.interfaces.ts#L90)

Generated event data

***

### exception?

> `optional` **exception**: [`RecurrenceException`](RecurrenceException.md)

Defined in: [Event/interfaces/event-recurrence.interfaces.ts:88](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-recurrence.interfaces.ts#L88)

Exception details

***

### isException

> **isException**: `boolean`

Defined in: [Event/interfaces/event-recurrence.interfaces.ts:86](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-recurrence.interfaces.ts#L86)

Whether this is an exception

***

### isMaster

> **isMaster**: `boolean`

Defined in: [Event/interfaces/event-recurrence.interfaces.ts:94](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-recurrence.interfaces.ts#L94)

Whether this is the master event

***

### originalStart

> **originalStart**: `Date`

Defined in: [Event/interfaces/event-recurrence.interfaces.ts:82](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-recurrence.interfaces.ts#L82)

Original start date of this occurrence

***

### sequence

> **sequence**: `number`

Defined in: [Event/interfaces/event-recurrence.interfaces.ts:92](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-recurrence.interfaces.ts#L92)

Occurrence sequence number
