[**@uplink-protocol/form-controller v0.3.1**](../../../../README.md)

***

[@uplink-protocol/form-controller](../../../../globals.md) / [EventInterfaces](../README.md) / EventManagerConfig

# Interface: EventManagerConfig

Defined in: [Event/interfaces/event-manager.service.interfaces.ts:21](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-manager.service.interfaces.ts#L21)

Event manager configuration

## Properties

### conflicts?

> `optional` **conflicts**: `object`

Defined in: [Event/interfaces/event-manager.service.interfaces.ts:50](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-manager.service.interfaces.ts#L50)

Conflict detection

#### autoResolve?

> `optional` **autoResolve**: `boolean`

#### enableDetection

> **enableDetection**: `boolean`

***

### notifications?

> `optional` **notifications**: `object`

Defined in: [Event/interfaces/event-manager.service.interfaces.ts:40](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-manager.service.interfaces.ts#L40)

Notification settings

#### defaultChannels?

> `optional` **defaultChannels**: `string`[]

#### enableNotifications

> **enableNotifications**: `boolean`

***

### recurrence?

> `optional` **recurrence**: `object`

Defined in: [Event/interfaces/event-manager.service.interfaces.ts:55](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-manager.service.interfaces.ts#L55)

Recurrence settings

#### enableRecurrence

> **enableRecurrence**: `boolean`

#### maxOccurrences?

> `optional` **maxOccurrences**: `number`

***

### search?

> `optional` **search**: `object`

Defined in: [Event/interfaces/event-manager.service.interfaces.ts:34](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-manager.service.interfaces.ts#L34)

Search configuration

#### enableSearch

> **enableSearch**: `boolean`

#### fuzzySearch?

> `optional` **fuzzySearch**: `boolean`

#### indexFields?

> `optional` **indexFields**: `string`[]

***

### storage?

> `optional` **storage**: `object`

Defined in: [Event/interfaces/event-manager.service.interfaces.ts:23](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-manager.service.interfaces.ts#L23)

Storage configuration

#### options?

> `optional` **options**: `Record`\<`string`, `any`\>

#### type

> **type**: `"memory"` \| `"localStorage"` \| `"indexedDB"` \| `"external"`

***

### sync?

> `optional` **sync**: `object`

Defined in: [Event/interfaces/event-manager.service.interfaces.ts:45](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-manager.service.interfaces.ts#L45)

Sync configuration

#### enableSync

> **enableSync**: `boolean`

#### providers?

> `optional` **providers**: `any`[]

***

### validation?

> `optional` **validation**: `object`

Defined in: [Event/interfaces/event-manager.service.interfaces.ts:28](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-manager.service.interfaces.ts#L28)

Validation settings

#### customRules?

> `optional` **customRules**: `any`[]

#### enableValidation

> **enableValidation**: `boolean`

#### strictMode

> **strictMode**: `boolean`
