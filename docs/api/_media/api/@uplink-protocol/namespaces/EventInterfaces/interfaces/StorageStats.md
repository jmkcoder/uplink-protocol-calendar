[**@uplink-protocol/form-controller v0.3.1**](../../../../README.md)

***

[@uplink-protocol/form-controller](../../../../globals.md) / [EventInterfaces](../README.md) / StorageStats

# Interface: StorageStats

Defined in: [Event/interfaces/event-storage.interfaces.ts:45](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-storage.interfaces.ts#L45)

Storage statistics

## Properties

### health

> **health**: `"good"` \| `"warning"` \| `"error"`

Defined in: [Event/interfaces/event-storage.interfaces.ts:53](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-storage.interfaces.ts#L53)

Storage health status

***

### lastSync?

> `optional` **lastSync**: `Date`

Defined in: [Event/interfaces/event-storage.interfaces.ts:51](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-storage.interfaces.ts#L51)

Last sync timestamp

***

### sizeUsed

> **sizeUsed**: `number`

Defined in: [Event/interfaces/event-storage.interfaces.ts:49](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-storage.interfaces.ts#L49)

Storage size used

***

### totalEvents

> **totalEvents**: `number`

Defined in: [Event/interfaces/event-storage.interfaces.ts:47](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-storage.interfaces.ts#L47)

Total number of events
