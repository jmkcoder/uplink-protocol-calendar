[**@uplink-protocol/form-controller v0.3.1**](../../../../README.md)

***

[@uplink-protocol/form-controller](../../../../globals.md) / [EventInterfaces](../README.md) / NotificationConfig

# Interface: NotificationConfig

Defined in: [Event/interfaces/event-notification.interfaces.ts:72](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L72)

Notification configuration

## Properties

### channelPreferences

> **channelPreferences**: `Record`\<[`NotificationType`](../type-aliases/NotificationType.md), [`NotificationChannel`](../type-aliases/NotificationChannel.md)[]\>

Defined in: [Event/interfaces/event-notification.interfaces.ts:78](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L78)

Channel preferences per type

***

### customThresholds?

> `optional` **customThresholds**: `Record`\<`string`, `number`\>

Defined in: [Event/interfaces/event-notification.interfaces.ts:94](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L94)

Custom thresholds

***

### digestSettings?

> `optional` **digestSettings**: `object`

Defined in: [Event/interfaces/event-notification.interfaces.ts:87](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L87)

Digest settings

#### channel

> **channel**: [`NotificationChannel`](../type-aliases/NotificationChannel.md)

#### enabled

> **enabled**: `boolean`

#### frequency

> **frequency**: `"daily"` \| `"weekly"`

#### time

> **time**: `string`

***

### enabledTypes

> **enabledTypes**: [`NotificationType`](../type-aliases/NotificationType.md)[]

Defined in: [Event/interfaces/event-notification.interfaces.ts:76](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L76)

Enabled notification types

***

### quietHours?

> `optional` **quietHours**: `object`

Defined in: [Event/interfaces/event-notification.interfaces.ts:80](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L80)

Quiet hours

#### days?

> `optional` **days**: `number`[]

#### end

> **end**: `string`

#### start

> **start**: `string`

#### timeZone

> **timeZone**: `string`

***

### userId

> **userId**: `string`

Defined in: [Event/interfaces/event-notification.interfaces.ts:74](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L74)

User ID
