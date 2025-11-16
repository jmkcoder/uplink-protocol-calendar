[**@uplink-protocol/form-controller v0.3.1**](../../../../README.md)

***

[@uplink-protocol/form-controller](../../../../globals.md) / [EventInterfaces](../README.md) / BulkNotificationRequest

# Interface: BulkNotificationRequest

Defined in: [Event/interfaces/event-notification.interfaces.ts:187](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L187)

Bulk notification request

## Properties

### batchId

> **batchId**: `string`

Defined in: [Event/interfaces/event-notification.interfaces.ts:189](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L189)

Bulk operation ID

***

### notifications

> **notifications**: [`NotificationRequest`](NotificationRequest.md)[]

Defined in: [Event/interfaces/event-notification.interfaces.ts:191](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L191)

Notification requests

***

### options

> **options**: `object`

Defined in: [Event/interfaces/event-notification.interfaces.ts:193](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-notification.interfaces.ts#L193)

Batch options

#### continueOnError?

> `optional` **continueOnError**: `boolean`

Continue on errors

#### onProgress()?

> `optional` **onProgress**: (`completed`, `total`) => `void`

Progress callback

##### Parameters

###### completed

`number`

###### total

`number`

##### Returns

`void`

#### parallelLimit?

> `optional` **parallelLimit**: `number`

Parallel processing limit
