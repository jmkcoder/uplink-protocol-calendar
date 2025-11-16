[**@uplink-protocol/form-controller v0.3.1**](../../../../README.md)

***

[@uplink-protocol/form-controller](../../../../globals.md) / [EventInterfaces](../README.md) / NotificationHistory

# Interface: NotificationHistory

Defined in: [Event/interfaces/event-notification.interfaces.ts:163](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L163)

Notification history

## Properties

### channel

> **channel**: [`NotificationChannel`](../type-aliases/NotificationChannel.md)

Defined in: [Event/interfaces/event-notification.interfaces.ts:173](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L173)

Channel used

***

### eventId

> **eventId**: `string`

Defined in: [Event/interfaces/event-notification.interfaces.ts:171](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L171)

Related event ID

***

### id

> **id**: `string`

Defined in: [Event/interfaces/event-notification.interfaces.ts:165](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L165)

History ID

***

### interaction?

> `optional` **interaction**: `object`

Defined in: [Event/interfaces/event-notification.interfaces.ts:181](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L181)

Interaction data

#### clicked

> **clicked**: `boolean`

#### dismissed

> **dismissed**: `boolean`

#### opened

> **opened**: `boolean`

#### timestamp

> **timestamp**: `Date`

***

### sentAt

> **sentAt**: `Date`

Defined in: [Event/interfaces/event-notification.interfaces.ts:175](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L175)

Sent timestamp

***

### status

> **status**: `"cancelled"` \| `"pending"` \| `"sent"` \| `"delivered"` \| `"failed"` \| `"expired"`

Defined in: [Event/interfaces/event-notification.interfaces.ts:177](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L177)

Status

***

### subject

> **subject**: `string`

Defined in: [Event/interfaces/event-notification.interfaces.ts:179](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L179)

Subject

***

### type

> **type**: [`NotificationType`](../type-aliases/NotificationType.md)

Defined in: [Event/interfaces/event-notification.interfaces.ts:169](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L169)

Notification type

***

### userId

> **userId**: `string`

Defined in: [Event/interfaces/event-notification.interfaces.ts:167](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L167)

User ID
