[**@uplink-protocol/form-controller v0.3.1**](../../../../README.md)

***

[@uplink-protocol/form-controller](../../../../globals.md) / [EventInterfaces](../README.md) / CalendarEvent

# Interface: CalendarEvent

Defined in: [Event/interfaces/event.interfaces.ts:169](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event.interfaces.ts#L169)

Core Event interface

## Properties

### attachments?

> `optional` **attachments**: [`EventAttachment`](EventAttachment.md)[]

Defined in: [Event/interfaces/event.interfaces.ts:197](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event.interfaces.ts#L197)

Event attachments

***

### attendees?

> `optional` **attendees**: [`EventAttendee`](EventAttendee.md)[]

Defined in: [Event/interfaces/event.interfaces.ts:183](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event.interfaces.ts#L183)

Event attendees

***

### category?

> `optional` **category**: `string`

Defined in: [Event/interfaces/event.interfaces.ts:191](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event.interfaces.ts#L191)

Event category

***

### createdAt

> **createdAt**: `Date`

Defined in: [Event/interfaces/event.interfaces.ts:201](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event.interfaces.ts#L201)

Creation timestamp

***

### createdBy

> **createdBy**: `string`

Defined in: [Event/interfaces/event.interfaces.ts:205](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event.interfaces.ts#L205)

Creator information

***

### dateTime

> **dateTime**: [`EventDateTime`](EventDateTime.md)

Defined in: [Event/interfaces/event.interfaces.ts:177](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event.interfaces.ts#L177)

Date and time information

***

### description?

> `optional` **description**: `string`

Defined in: [Event/interfaces/event.interfaces.ts:175](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event.interfaces.ts#L175)

Event description

***

### id

> **id**: `string`

Defined in: [Event/interfaces/event.interfaces.ts:171](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event.interfaces.ts#L171)

Unique identifier

***

### location?

> `optional` **location**: [`EventLocation`](EventLocation.md)

Defined in: [Event/interfaces/event.interfaces.ts:179](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event.interfaces.ts#L179)

Event location

***

### metadata?

> `optional` **metadata**: [`EventMetadata`](EventMetadata.md)

Defined in: [Event/interfaces/event.interfaces.ts:199](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event.interfaces.ts#L199)

Event metadata

***

### organizer?

> `optional` **organizer**: [`EventAttendee`](EventAttendee.md)

Defined in: [Event/interfaces/event.interfaces.ts:181](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event.interfaces.ts#L181)

Event organizer

***

### priority

> **priority**: [`EventPriority`](../type-aliases/EventPriority.md)

Defined in: [Event/interfaces/event.interfaces.ts:185](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event.interfaces.ts#L185)

Event priority

***

### recurrence?

> `optional` **recurrence**: [`EventRecurrence`](EventRecurrence.md)

Defined in: [Event/interfaces/event.interfaces.ts:193](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event.interfaces.ts#L193)

Recurrence rule

***

### reminders?

> `optional` **reminders**: [`EventReminder`](EventReminder.md)[]

Defined in: [Event/interfaces/event.interfaces.ts:195](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event.interfaces.ts#L195)

Event reminders

***

### status

> **status**: [`EventStatus`](../type-aliases/EventStatus.md)

Defined in: [Event/interfaces/event.interfaces.ts:187](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event.interfaces.ts#L187)

Event status

***

### title

> **title**: `string`

Defined in: [Event/interfaces/event.interfaces.ts:173](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event.interfaces.ts#L173)

Event title

***

### updatedAt

> **updatedAt**: `Date`

Defined in: [Event/interfaces/event.interfaces.ts:203](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event.interfaces.ts#L203)

Last modified timestamp

***

### updatedBy

> **updatedBy**: `string`

Defined in: [Event/interfaces/event.interfaces.ts:207](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event.interfaces.ts#L207)

Last modifier information

***

### version

> **version**: `number`

Defined in: [Event/interfaces/event.interfaces.ts:209](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event.interfaces.ts#L209)

Version for conflict resolution

***

### visibility

> **visibility**: [`EventVisibility`](../type-aliases/EventVisibility.md)

Defined in: [Event/interfaces/event.interfaces.ts:189](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event.interfaces.ts#L189)

Event visibility
