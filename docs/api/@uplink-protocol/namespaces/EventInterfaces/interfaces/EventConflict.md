[**@uplink-protocol/form-controller v0.3.1**](../../../../README.md)

***

[@uplink-protocol/form-controller](../../../../globals.md) / [EventInterfaces](../README.md) / EventConflict

# Interface: EventConflict

Defined in: [Event/interfaces/event.interfaces.ts:306](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event.interfaces.ts#L306)

Event conflict information

## Properties

### details

> **details**: `string`

Defined in: [Event/interfaces/event.interfaces.ts:312](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event.interfaces.ts#L312)

Conflict details

***

### event

> **event**: [`CalendarEvent`](CalendarEvent.md)

Defined in: [Event/interfaces/event.interfaces.ts:308](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event.interfaces.ts#L308)

Conflicting event

***

### suggestion?

> `optional` **suggestion**: `string`

Defined in: [Event/interfaces/event.interfaces.ts:314](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event.interfaces.ts#L314)

Suggested resolution

***

### type

> **type**: `"overlap"` \| `"double_booking"` \| `"resource_conflict"`

Defined in: [Event/interfaces/event.interfaces.ts:310](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event.interfaces.ts#L310)

Type of conflict
