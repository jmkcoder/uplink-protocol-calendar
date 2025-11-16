[**@uplink-protocol/form-controller v0.3.1**](../../../../README.md)

***

[@uplink-protocol/form-controller](../../../../globals.md) / [EventInterfaces](../README.md) / EventFilter

# Interface: EventFilter

Defined in: [Event/interfaces/event.interfaces.ts:255](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event.interfaces.ts#L255)

Event query filters

## Properties

### attendeeId?

> `optional` **attendeeId**: `string`

Defined in: [Event/interfaces/event.interfaces.ts:268](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event.interfaces.ts#L268)

Attendee filter

***

### categories?

> `optional` **categories**: `string`[]

Defined in: [Event/interfaces/event.interfaces.ts:262](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event.interfaces.ts#L262)

Category filter

***

### dateRange?

> `optional` **dateRange**: `object`

Defined in: [Event/interfaces/event.interfaces.ts:257](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event.interfaces.ts#L257)

Date range filter

#### end

> **end**: `Date`

#### start

> **start**: `Date`

***

### metadata?

> `optional` **metadata**: `Record`\<`string`, `any`\>

Defined in: [Event/interfaces/event.interfaces.ts:274](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event.interfaces.ts#L274)

Custom metadata filters

***

### priorities?

> `optional` **priorities**: [`EventPriority`](../type-aliases/EventPriority.md)[]

Defined in: [Event/interfaces/event.interfaces.ts:266](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event.interfaces.ts#L266)

Priority filter

***

### searchText?

> `optional` **searchText**: `string`

Defined in: [Event/interfaces/event.interfaces.ts:270](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event.interfaces.ts#L270)

Search text

***

### statuses?

> `optional` **statuses**: [`EventStatus`](../type-aliases/EventStatus.md)[]

Defined in: [Event/interfaces/event.interfaces.ts:264](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event.interfaces.ts#L264)

Status filter

***

### tags?

> `optional` **tags**: `string`[]

Defined in: [Event/interfaces/event.interfaces.ts:272](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event.interfaces.ts#L272)

Tags filter
