[**@uplink-protocol/form-controller v0.3.1**](../../../../README.md)

***

[@uplink-protocol/form-controller](../../../../globals.md) / [EventInterfaces](../README.md) / NotificationAnalytics

# Interface: NotificationAnalytics

Defined in: [Event/interfaces/event-notification.interfaces.ts:206](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L206)

Notification analytics

## Properties

### clickRates

> **clickRates**: `Record`\<[`NotificationType`](../type-aliases/NotificationType.md), `number`\>

Defined in: [Event/interfaces/event-notification.interfaces.ts:216](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L216)

Click-through rates

***

### dateRange

> **dateRange**: `object`

Defined in: [Event/interfaces/event-notification.interfaces.ts:208](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L208)

Date range

#### end

> **end**: `Date`

#### start

> **start**: `Date`

***

### deliveryRates

> **deliveryRates**: `Record`\<[`NotificationChannel`](../type-aliases/NotificationChannel.md), `number`\>

Defined in: [Event/interfaces/event-notification.interfaces.ts:212](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L212)

Delivery rate by channel

***

### engagementScores

> **engagementScores**: `Record`\<`string`, `number`\>

Defined in: [Event/interfaces/event-notification.interfaces.ts:220](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L220)

User engagement scores

***

### errorStats

> **errorStats**: `Record`\<`string`, `number`\>

Defined in: [Event/interfaces/event-notification.interfaces.ts:222](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L222)

Error statistics

***

### openRates

> **openRates**: `Record`\<[`NotificationType`](../type-aliases/NotificationType.md), `number`\>

Defined in: [Event/interfaces/event-notification.interfaces.ts:214](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L214)

Open rates by type

***

### topChannels

> **topChannels**: `object`[]

Defined in: [Event/interfaces/event-notification.interfaces.ts:218](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L218)

Most effective channels

#### channel

> **channel**: [`NotificationChannel`](../type-aliases/NotificationChannel.md)

#### effectiveness

> **effectiveness**: `number`

***

### totalSent

> **totalSent**: `number`

Defined in: [Event/interfaces/event-notification.interfaces.ts:210](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L210)

Total notifications sent
