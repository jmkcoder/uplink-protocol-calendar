[**@uplink-protocol/form-controller v0.3.1**](../../../../README.md)

***

[@uplink-protocol/form-controller](../../../../globals.md) / [EventInterfaces](../README.md) / NotificationRequest

# Interface: NotificationRequest

Defined in: [Event/interfaces/event-notification.interfaces.ts:100](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L100)

Notification request

## Properties

### body

> **body**: `string`

Defined in: [Event/interfaces/event-notification.interfaces.ts:116](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L116)

Message body

***

### channel

> **channel**: [`NotificationChannel`](../type-aliases/NotificationChannel.md)

Defined in: [Event/interfaces/event-notification.interfaces.ts:110](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L110)

Delivery channel

***

### customData?

> `optional` **customData**: `Record`\<`string`, `any`\>

Defined in: [Event/interfaces/event-notification.interfaces.ts:130](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L130)

Custom data

***

### event

> **event**: [`CalendarEvent`](CalendarEvent.md)

Defined in: [Event/interfaces/event-notification.interfaces.ts:108](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L108)

Related event

***

### expiresAt?

> `optional` **expiresAt**: `Date`

Defined in: [Event/interfaces/event-notification.interfaces.ts:122](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L122)

Expiration time

***

### htmlBody?

> `optional` **htmlBody**: `string`

Defined in: [Event/interfaces/event-notification.interfaces.ts:118](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L118)

HTML body

***

### id

> **id**: `string`

Defined in: [Event/interfaces/event-notification.interfaces.ts:102](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L102)

Unique ID

***

### priority

> **priority**: [`NotificationPriority`](../type-aliases/NotificationPriority.md)

Defined in: [Event/interfaces/event-notification.interfaces.ts:112](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L112)

Priority

***

### retryConfig?

> `optional` **retryConfig**: `object`

Defined in: [Event/interfaces/event-notification.interfaces.ts:124](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L124)

Retry configuration

#### backoffMultiplier

> **backoffMultiplier**: `number`

#### maxAttempts

> **maxAttempts**: `number`

#### retryDelay

> **retryDelay**: `number`

***

### scheduledAt

> **scheduledAt**: `Date`

Defined in: [Event/interfaces/event-notification.interfaces.ts:120](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L120)

Scheduled delivery time

***

### subject

> **subject**: `string`

Defined in: [Event/interfaces/event-notification.interfaces.ts:114](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L114)

Subject

***

### type

> **type**: [`NotificationType`](../type-aliases/NotificationType.md)

Defined in: [Event/interfaces/event-notification.interfaces.ts:104](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L104)

Notification type

***

### userId

> **userId**: `string`

Defined in: [Event/interfaces/event-notification.interfaces.ts:106](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L106)

Target user
