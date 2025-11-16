[**@uplink-protocol/form-controller v0.3.1**](../../../../README.md)

***

[@uplink-protocol/form-controller](../../../../globals.md) / [EventInterfaces](../README.md) / SyncStatus

# Interface: SyncStatus

Defined in: [Event/interfaces/event-storage.interfaces.ts:59](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-storage.interfaces.ts#L59)

Storage sync status

## Properties

### errors

> **errors**: `string`[]

Defined in: [Event/interfaces/event-storage.interfaces.ts:67](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-storage.interfaces.ts#L67)

Sync errors

***

### lastSync?

> `optional` **lastSync**: `Date`

Defined in: [Event/interfaces/event-storage.interfaces.ts:63](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-storage.interfaces.ts#L63)

Last sync timestamp

***

### nextSync?

> `optional` **nextSync**: `Date`

Defined in: [Event/interfaces/event-storage.interfaces.ts:65](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-storage.interfaces.ts#L65)

Next scheduled sync

***

### pendingChanges

> **pendingChanges**: `number`

Defined in: [Event/interfaces/event-storage.interfaces.ts:69](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-storage.interfaces.ts#L69)

Pending changes count

***

### syncing

> **syncing**: `boolean`

Defined in: [Event/interfaces/event-storage.interfaces.ts:61](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-storage.interfaces.ts#L61)

Whether sync is in progress
