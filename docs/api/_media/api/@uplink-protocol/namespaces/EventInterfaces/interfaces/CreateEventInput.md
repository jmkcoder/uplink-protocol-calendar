[**@uplink-protocol/form-controller v0.3.1**](../../../../README.md)

***

[@uplink-protocol/form-controller](../../../../globals.md) / [EventInterfaces](../README.md) / CreateEventInput

# Interface: CreateEventInput

Defined in: [Event/interfaces/event.interfaces.ts:215](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event.interfaces.ts#L215)

Event creation input

## Properties

### attachments?

> `optional` **attachments**: `Omit`\<[`EventAttachment`](EventAttachment.md), `"id"`\>[]

Defined in: [Event/interfaces/event.interfaces.ts:227](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event.interfaces.ts#L227)

***

### attendees?

> `optional` **attendees**: `Omit`\<[`EventAttendee`](EventAttendee.md), `"id"` \| `"status"`\>[]

Defined in: [Event/interfaces/event.interfaces.ts:220](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event.interfaces.ts#L220)

***

### category?

> `optional` **category**: `string`

Defined in: [Event/interfaces/event.interfaces.ts:224](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event.interfaces.ts#L224)

***

### dateTime

> **dateTime**: `Omit`\<[`EventDateTime`](EventDateTime.md), `"timeZone"`\> & `object`

Defined in: [Event/interfaces/event.interfaces.ts:218](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event.interfaces.ts#L218)

#### Type Declaration

##### timeZone?

> `optional` **timeZone**: [`TimeZone`](TimeZone.md)

***

### description?

> `optional` **description**: `string`

Defined in: [Event/interfaces/event.interfaces.ts:217](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event.interfaces.ts#L217)

***

### location?

> `optional` **location**: [`EventLocation`](EventLocation.md)

Defined in: [Event/interfaces/event.interfaces.ts:219](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event.interfaces.ts#L219)

***

### metadata?

> `optional` **metadata**: [`EventMetadata`](EventMetadata.md)

Defined in: [Event/interfaces/event.interfaces.ts:228](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event.interfaces.ts#L228)

***

### priority?

> `optional` **priority**: [`EventPriority`](../type-aliases/EventPriority.md)

Defined in: [Event/interfaces/event.interfaces.ts:221](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event.interfaces.ts#L221)

***

### recurrence?

> `optional` **recurrence**: [`EventRecurrence`](EventRecurrence.md)

Defined in: [Event/interfaces/event.interfaces.ts:225](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event.interfaces.ts#L225)

***

### reminders?

> `optional` **reminders**: `Omit`\<[`EventReminder`](EventReminder.md), `"id"`\>[]

Defined in: [Event/interfaces/event.interfaces.ts:226](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event.interfaces.ts#L226)

***

### status?

> `optional` **status**: [`EventStatus`](../type-aliases/EventStatus.md)

Defined in: [Event/interfaces/event.interfaces.ts:222](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event.interfaces.ts#L222)

***

### title

> **title**: `string`

Defined in: [Event/interfaces/event.interfaces.ts:216](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event.interfaces.ts#L216)

***

### visibility?

> `optional` **visibility**: [`EventVisibility`](../type-aliases/EventVisibility.md)

Defined in: [Event/interfaces/event.interfaces.ts:223](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event.interfaces.ts#L223)
