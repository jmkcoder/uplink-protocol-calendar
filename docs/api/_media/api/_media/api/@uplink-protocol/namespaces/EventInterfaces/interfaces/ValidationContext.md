[**@uplink-protocol/form-controller v0.3.1**](../../../../README.md)

***

[@uplink-protocol/form-controller](../../../../globals.md) / [EventInterfaces](../README.md) / ValidationContext

# Interface: ValidationContext

Defined in: [Event/interfaces/event-validation.interfaces.ts:46](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-validation.interfaces.ts#L46)

Validation context

## Properties

### currentUser?

> `optional` **currentUser**: `string`

Defined in: [Event/interfaces/event-validation.interfaces.ts:50](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-validation.interfaces.ts#L50)

User performing the action

***

### existingEvents?

> `optional` **existingEvents**: [`CalendarEvent`](CalendarEvent.md)[]

Defined in: [Event/interfaces/event-validation.interfaces.ts:48](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-validation.interfaces.ts#L48)

Existing events for conflict checking

***

### metadata?

> `optional` **metadata**: `Record`\<`string`, `any`\>

Defined in: [Event/interfaces/event-validation.interfaces.ts:54](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-validation.interfaces.ts#L54)

Additional context data

***

### mode

> **mode**: `"create"` \| `"update"` \| `"delete"`

Defined in: [Event/interfaces/event-validation.interfaces.ts:52](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-validation.interfaces.ts#L52)

Validation mode
