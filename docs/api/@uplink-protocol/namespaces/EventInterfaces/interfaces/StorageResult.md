[**@uplink-protocol/form-controller v0.3.1**](../../../../README.md)

***

[@uplink-protocol/form-controller](../../../../globals.md) / [EventInterfaces](../README.md) / StorageResult

# Interface: StorageResult\<T\>

Defined in: [Event/interfaces/event-storage.interfaces.ts:12](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-storage.interfaces.ts#L12)

Storage operation result

## Type Parameters

### T

`T` = `any`

## Properties

### data?

> `optional` **data**: `T`

Defined in: [Event/interfaces/event-storage.interfaces.ts:16](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-storage.interfaces.ts#L16)

Result data

***

### error?

> `optional` **error**: `string`

Defined in: [Event/interfaces/event-storage.interfaces.ts:18](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-storage.interfaces.ts#L18)

Error message if failed

***

### metadata?

> `optional` **metadata**: `Record`\<`string`, `any`\>

Defined in: [Event/interfaces/event-storage.interfaces.ts:20](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-storage.interfaces.ts#L20)

Additional metadata

***

### success

> **success**: `boolean`

Defined in: [Event/interfaces/event-storage.interfaces.ts:14](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-storage.interfaces.ts#L14)

Whether operation succeeded
