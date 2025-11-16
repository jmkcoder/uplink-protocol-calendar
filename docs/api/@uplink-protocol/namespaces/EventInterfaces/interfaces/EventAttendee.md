[**@uplink-protocol/form-controller v0.3.1**](../../../../README.md)

***

[@uplink-protocol/form-controller](../../../../globals.md) / [EventInterfaces](../README.md) / EventAttendee

# Interface: EventAttendee

Defined in: [Event/interfaces/event.interfaces.ts:77](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event.interfaces.ts#L77)

Event attendee information

## Properties

### email

> **email**: `string`

Defined in: [Event/interfaces/event.interfaces.ts:83](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event.interfaces.ts#L83)

Email address

***

### id

> **id**: `string`

Defined in: [Event/interfaces/event.interfaces.ts:79](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event.interfaces.ts#L79)

Unique identifier

***

### name

> **name**: `string`

Defined in: [Event/interfaces/event.interfaces.ts:81](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event.interfaces.ts#L81)

Display name

***

### required

> **required**: `boolean`

Defined in: [Event/interfaces/event.interfaces.ts:87](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event.interfaces.ts#L87)

Whether attendance is required

***

### role?

> `optional` **role**: `"organizer"` \| `"attendee"` \| `"optional"` \| `"resource"`

Defined in: [Event/interfaces/event.interfaces.ts:89](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event.interfaces.ts#L89)

Role in the event

***

### status

> **status**: `"tentative"` \| `"pending"` \| `"accepted"` \| `"declined"`

Defined in: [Event/interfaces/event.interfaces.ts:85](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event.interfaces.ts#L85)

Response status
