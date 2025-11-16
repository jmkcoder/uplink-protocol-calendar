[**@uplink-protocol/form-controller v0.3.1**](../../../../README.md)

***

[@uplink-protocol/form-controller](../../../../globals.md) / [EventInterfaces](../README.md) / StorageConfig

# Interface: StorageConfig

Defined in: [Event/interfaces/event-storage.interfaces.ts:26](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-storage.interfaces.ts#L26)

Storage configuration

## Properties

### autoSaveInterval?

> `optional` **autoSaveInterval**: `number`

Defined in: [Event/interfaces/event-storage.interfaces.ts:34](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-storage.interfaces.ts#L34)

Auto-save interval in milliseconds

***

### encryption?

> `optional` **encryption**: `object`

Defined in: [Event/interfaces/event-storage.interfaces.ts:36](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-storage.interfaces.ts#L36)

Encryption settings

#### enabled

> **enabled**: `boolean`

#### key?

> `optional` **key**: `string`

***

### keyPrefix?

> `optional` **keyPrefix**: `string`

Defined in: [Event/interfaces/event-storage.interfaces.ts:30](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-storage.interfaces.ts#L30)

Storage key prefix

***

### maxSize?

> `optional` **maxSize**: `number`

Defined in: [Event/interfaces/event-storage.interfaces.ts:32](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-storage.interfaces.ts#L32)

Maximum storage size

***

### type

> **type**: `"memory"` \| `"localStorage"` \| `"indexedDB"` \| `"external"`

Defined in: [Event/interfaces/event-storage.interfaces.ts:28](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-storage.interfaces.ts#L28)

Storage type
