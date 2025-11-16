[**@uplink-protocol/form-controller v0.3.1**](../../../../README.md)

***

[@uplink-protocol/form-controller](../../../../globals.md) / [EventInterfaces](../README.md) / NotificationTemplate

# Interface: NotificationTemplate

Defined in: [Event/interfaces/event-notification.interfaces.ts:46](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L46)

Notification template

## Properties

### body

> **body**: `string`

Defined in: [Event/interfaces/event-notification.interfaces.ts:58](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L58)

Body template (supports placeholders)

***

### channels

> **channels**: [`NotificationChannel`](../type-aliases/NotificationChannel.md)[]

Defined in: [Event/interfaces/event-notification.interfaces.ts:54](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L54)

Supported channels

***

### defaultPriority

> **defaultPriority**: [`NotificationPriority`](../type-aliases/NotificationPriority.md)

Defined in: [Event/interfaces/event-notification.interfaces.ts:64](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L64)

Default priority

***

### htmlBody?

> `optional` **htmlBody**: `string`

Defined in: [Event/interfaces/event-notification.interfaces.ts:60](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L60)

HTML body template

***

### id

> **id**: `string`

Defined in: [Event/interfaces/event-notification.interfaces.ts:48](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L48)

Template ID

***

### name

> **name**: `string`

Defined in: [Event/interfaces/event-notification.interfaces.ts:50](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L50)

Template name

***

### placeholders

> **placeholders**: `string`[]

Defined in: [Event/interfaces/event-notification.interfaces.ts:62](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L62)

Placeholders available

***

### subject

> **subject**: `string`

Defined in: [Event/interfaces/event-notification.interfaces.ts:56](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L56)

Subject template

***

### type

> **type**: [`NotificationType`](../type-aliases/NotificationType.md)

Defined in: [Event/interfaces/event-notification.interfaces.ts:52](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L52)

Notification type

***

### variables?

> `optional` **variables**: `Record`\<`string`, `any`\>

Defined in: [Event/interfaces/event-notification.interfaces.ts:66](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L66)

Template variables
