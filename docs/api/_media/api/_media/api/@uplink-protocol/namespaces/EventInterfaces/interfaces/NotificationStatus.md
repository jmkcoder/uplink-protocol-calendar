[**@uplink-protocol/form-controller v0.3.1**](../../../../README.md)

***

[@uplink-protocol/form-controller](../../../../globals.md) / [EventInterfaces](../README.md) / NotificationStatus

# Interface: NotificationStatus

Defined in: [Event/interfaces/event-notification.interfaces.ts:136](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L136)

Notification status

## Properties

### attempts

> **attempts**: `number`

Defined in: [Event/interfaces/event-notification.interfaces.ts:142](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L142)

Delivery attempts

***

### deliveredAt?

> `optional` **deliveredAt**: `Date`

Defined in: [Event/interfaces/event-notification.interfaces.ts:150](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L150)

Delivery timestamp

***

### error?

> `optional` **error**: `string`

Defined in: [Event/interfaces/event-notification.interfaces.ts:148](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L148)

Error details

***

### id

> **id**: `string`

Defined in: [Event/interfaces/event-notification.interfaces.ts:138](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L138)

Notification ID

***

### interaction?

> `optional` **interaction**: `object`

Defined in: [Event/interfaces/event-notification.interfaces.ts:152](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L152)

User interaction

#### clicked

> **clicked**: `boolean`

#### dismissed

> **dismissed**: `boolean`

#### opened

> **opened**: `boolean`

#### timestamp

> **timestamp**: `Date`

***

### lastAttempt?

> `optional` **lastAttempt**: `Date`

Defined in: [Event/interfaces/event-notification.interfaces.ts:144](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L144)

Last attempt time

***

### nextRetry?

> `optional` **nextRetry**: `Date`

Defined in: [Event/interfaces/event-notification.interfaces.ts:146](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L146)

Next retry time

***

### status

> **status**: `"cancelled"` \| `"pending"` \| `"sent"` \| `"delivered"` \| `"failed"` \| `"expired"`

Defined in: [Event/interfaces/event-notification.interfaces.ts:140](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L140)

Current status
