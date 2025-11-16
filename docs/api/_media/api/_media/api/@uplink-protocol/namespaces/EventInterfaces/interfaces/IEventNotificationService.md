[**@uplink-protocol/form-controller v0.3.1**](../../../../README.md)

***

[@uplink-protocol/form-controller](../../../../globals.md) / [EventInterfaces](../README.md) / IEventNotificationService

# Interface: IEventNotificationService

Defined in: [Event/interfaces/event-notification.interfaces.ts:228](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L228)

Event notification service interface

## Methods

### cancelNotification()

> **cancelNotification**(`notificationId`): `Promise`\<`void`\>

Defined in: [Event/interfaces/event-notification.interfaces.ts:252](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L252)

Cancel scheduled notification

#### Parameters

##### notificationId

`string`

#### Returns

`Promise`\<`void`\>

***

### cleanupExpiredNotifications()

> **cleanupExpiredNotifications**(): `Promise`\<`number`\>

Defined in: [Event/interfaces/event-notification.interfaces.ts:339](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L339)

Cleanup expired notifications

#### Returns

`Promise`\<`number`\>

***

### configureUserNotifications()

> **configureUserNotifications**(`userId`, `config`): `Promise`\<`void`\>

Defined in: [Event/interfaces/event-notification.interfaces.ts:262](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L262)

Configure user notification preferences

#### Parameters

##### userId

`string`

##### config

[`NotificationConfig`](NotificationConfig.md)

#### Returns

`Promise`\<`void`\>

***

### createTemplate()

> **createTemplate**(`template`): `Promise`\<`void`\>

Defined in: [Event/interfaces/event-notification.interfaces.ts:272](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L272)

Create notification template

#### Parameters

##### template

[`NotificationTemplate`](NotificationTemplate.md)

#### Returns

`Promise`\<`void`\>

***

### deleteTemplate()

> **deleteTemplate**(`templateId`): `Promise`\<`void`\>

Defined in: [Event/interfaces/event-notification.interfaces.ts:287](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L287)

Delete notification template

#### Parameters

##### templateId

`string`

#### Returns

`Promise`\<`void`\>

***

### getAnalytics()

> **getAnalytics**(`dateRange`, `userId?`): `Promise`\<[`NotificationAnalytics`](NotificationAnalytics.md)\>

Defined in: [Event/interfaces/event-notification.interfaces.ts:322](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L322)

Get notification analytics

#### Parameters

##### dateRange

###### end

`Date`

###### start

`Date`

##### userId?

`string`

#### Returns

`Promise`\<[`NotificationAnalytics`](NotificationAnalytics.md)\>

***

### getNotificationHistory()

> **getNotificationHistory**(`userId?`, `dateRange?`, `type?`): `Promise`\<[`NotificationHistory`](NotificationHistory.md)[]\>

Defined in: [Event/interfaces/event-notification.interfaces.ts:300](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L300)

Get notification history

#### Parameters

##### userId?

`string`

##### dateRange?

###### end

`Date`

###### start

`Date`

##### type?

[`NotificationType`](../type-aliases/NotificationType.md)

#### Returns

`Promise`\<[`NotificationHistory`](NotificationHistory.md)[]\>

***

### getNotificationStatus()

> **getNotificationStatus**(`notificationId`): `Promise`\<[`NotificationStatus`](NotificationStatus.md) \| `null`\>

Defined in: [Event/interfaces/event-notification.interfaces.ts:257](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L257)

Get notification status

#### Parameters

##### notificationId

`string`

#### Returns

`Promise`\<[`NotificationStatus`](NotificationStatus.md) \| `null`\>

***

### getPendingNotifications()

> **getPendingNotifications**(`userId?`): `Promise`\<[`NotificationRequest`](NotificationRequest.md)[]\>

Defined in: [Event/interfaces/event-notification.interfaces.ts:317](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L317)

Get pending notifications

#### Parameters

##### userId?

`string`

#### Returns

`Promise`\<[`NotificationRequest`](NotificationRequest.md)[]\>

***

### getTemplates()

> **getTemplates**(`type?`): `Promise`\<[`NotificationTemplate`](NotificationTemplate.md)[]\>

Defined in: [Event/interfaces/event-notification.interfaces.ts:282](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L282)

Get notification templates

#### Parameters

##### type?

[`NotificationType`](../type-aliases/NotificationType.md)

#### Returns

`Promise`\<[`NotificationTemplate`](NotificationTemplate.md)[]\>

***

### getUserNotificationConfig()

> **getUserNotificationConfig**(`userId`): `Promise`\<[`NotificationConfig`](NotificationConfig.md) \| `null`\>

Defined in: [Event/interfaces/event-notification.interfaces.ts:267](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L267)

Get user notification configuration

#### Parameters

##### userId

`string`

#### Returns

`Promise`\<[`NotificationConfig`](NotificationConfig.md) \| `null`\>

***

### initialize()

> **initialize**(`defaultConfig?`): `Promise`\<`void`\>

Defined in: [Event/interfaces/event-notification.interfaces.ts:232](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L232)

Initialize notification service

#### Parameters

##### defaultConfig?

`Partial`\<[`NotificationConfig`](NotificationConfig.md)\>

#### Returns

`Promise`\<`void`\>

***

### markNotificationInteraction()

> **markNotificationInteraction**(`notificationId`, `interaction`): `Promise`\<`void`\>

Defined in: [Event/interfaces/event-notification.interfaces.ts:309](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L309)

Mark notification as read/interacted

#### Parameters

##### notificationId

`string`

##### interaction

`"opened"` | `"clicked"` | `"dismissed"`

#### Returns

`Promise`\<`void`\>

***

### onNotificationFailed()

> **onNotificationFailed**(`callback`): () => `void`

Defined in: [Event/interfaces/event-notification.interfaces.ts:349](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L349)

Subscribe to notification failures

#### Parameters

##### callback

(`notification`, `error`) => `void`

#### Returns

> (): `void`

##### Returns

`void`

***

### onNotificationSent()

> **onNotificationSent**(`callback`): () => `void`

Defined in: [Event/interfaces/event-notification.interfaces.ts:344](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L344)

Subscribe to notification events

#### Parameters

##### callback

(`notification`, `status`) => `void`

#### Returns

> (): `void`

##### Returns

`void`

***

### processEventNotifications()

> **processEventNotifications**(`event`, `action`): `Promise`\<`void`\>

Defined in: [Event/interfaces/event-notification.interfaces.ts:292](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L292)

Process event for automatic notifications

#### Parameters

##### event

[`CalendarEvent`](CalendarEvent.md)

##### action

`"created"` | `"updated"` | `"deleted"` | `"reminder"`

#### Returns

`Promise`\<`void`\>

***

### scheduleNotification()

> **scheduleNotification**(`request`): `Promise`\<`string`\>

Defined in: [Event/interfaces/event-notification.interfaces.ts:242](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L242)

Schedule notification

#### Parameters

##### request

[`NotificationRequest`](NotificationRequest.md)

#### Returns

`Promise`\<`string`\>

***

### sendBulkNotifications()

> **sendBulkNotifications**(`request`): `Promise`\<[`NotificationStatus`](NotificationStatus.md)[]\>

Defined in: [Event/interfaces/event-notification.interfaces.ts:247](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L247)

Send bulk notifications

#### Parameters

##### request

[`BulkNotificationRequest`](BulkNotificationRequest.md)

#### Returns

`Promise`\<[`NotificationStatus`](NotificationStatus.md)[]\>

***

### sendNotification()

> **sendNotification**(`request`): `Promise`\<[`NotificationStatus`](NotificationStatus.md)\>

Defined in: [Event/interfaces/event-notification.interfaces.ts:237](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L237)

Send immediate notification

#### Parameters

##### request

[`NotificationRequest`](NotificationRequest.md)

#### Returns

`Promise`\<[`NotificationStatus`](NotificationStatus.md)\>

***

### testNotification()

> **testNotification**(`userId`, `channel`, `message`): `Promise`\<[`NotificationStatus`](NotificationStatus.md)\>

Defined in: [Event/interfaces/event-notification.interfaces.ts:330](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L330)

Test notification delivery

#### Parameters

##### userId

`string`

##### channel

[`NotificationChannel`](../type-aliases/NotificationChannel.md)

##### message

`string`

#### Returns

`Promise`\<[`NotificationStatus`](NotificationStatus.md)\>

***

### updateTemplate()

> **updateTemplate**(`templateId`, `updates`): `Promise`\<`void`\>

Defined in: [Event/interfaces/event-notification.interfaces.ts:277](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L277)

Update notification template

#### Parameters

##### templateId

`string`

##### updates

`Partial`\<[`NotificationTemplate`](NotificationTemplate.md)\>

#### Returns

`Promise`\<`void`\>
