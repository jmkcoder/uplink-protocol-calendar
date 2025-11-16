[**@uplink-protocol/form-controller v0.3.1**](../../../../README.md)

***

[@uplink-protocol/form-controller](../../../../globals.md) / [EventInterfaces](../README.md) / IEventStorageService

# Interface: IEventStorageService

Defined in: [Event/interfaces/event-storage.interfaces.ts:75](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-storage.interfaces.ts#L75)

Event storage service interface

## Methods

### backup()

> **backup**(): `Promise`\<[`StorageResult`](StorageResult.md)\<`string`\>\>

Defined in: [Event/interfaces/event-storage.interfaces.ts:156](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-storage.interfaces.ts#L156)

Backup events

#### Returns

`Promise`\<[`StorageResult`](StorageResult.md)\<`string`\>\>

***

### bulkCreate()

> **bulkCreate**(`inputs`): `Promise`\<[`StorageResult`](StorageResult.md)\<[`CalendarEvent`](CalendarEvent.md)[]\>\>

Defined in: [Event/interfaces/event-storage.interfaces.ts:119](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-storage.interfaces.ts#L119)

Bulk operations

#### Parameters

##### inputs

[`CreateEventInput`](CreateEventInput.md)[]

#### Returns

`Promise`\<[`StorageResult`](StorageResult.md)\<[`CalendarEvent`](CalendarEvent.md)[]\>\>

***

### bulkDelete()

> **bulkDelete**(`ids`): `Promise`\<[`StorageResult`](StorageResult.md)\<`void`\>\>

Defined in: [Event/interfaces/event-storage.interfaces.ts:121](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-storage.interfaces.ts#L121)

#### Parameters

##### ids

`string`[]

#### Returns

`Promise`\<[`StorageResult`](StorageResult.md)\<`void`\>\>

***

### bulkUpdate()

> **bulkUpdate**(`inputs`): `Promise`\<[`StorageResult`](StorageResult.md)\<[`CalendarEvent`](CalendarEvent.md)[]\>\>

Defined in: [Event/interfaces/event-storage.interfaces.ts:120](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-storage.interfaces.ts#L120)

#### Parameters

##### inputs

[`UpdateEventInput`](UpdateEventInput.md)[]

#### Returns

`Promise`\<[`StorageResult`](StorageResult.md)\<[`CalendarEvent`](CalendarEvent.md)[]\>\>

***

### clearAll()

> **clearAll**(): `Promise`\<[`StorageResult`](StorageResult.md)\<`void`\>\>

Defined in: [Event/interfaces/event-storage.interfaces.ts:136](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-storage.interfaces.ts#L136)

Clear all events

#### Returns

`Promise`\<[`StorageResult`](StorageResult.md)\<`void`\>\>

***

### createEvent()

> **createEvent**(`input`): `Promise`\<[`StorageResult`](StorageResult.md)\<[`CalendarEvent`](CalendarEvent.md)\>\>

Defined in: [Event/interfaces/event-storage.interfaces.ts:104](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-storage.interfaces.ts#L104)

Create new event

#### Parameters

##### input

[`CreateEventInput`](CreateEventInput.md)

#### Returns

`Promise`\<[`StorageResult`](StorageResult.md)\<[`CalendarEvent`](CalendarEvent.md)\>\>

***

### deleteEvent()

> **deleteEvent**(`id`): `Promise`\<[`StorageResult`](StorageResult.md)\<`void`\>\>

Defined in: [Event/interfaces/event-storage.interfaces.ts:114](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-storage.interfaces.ts#L114)

Delete event

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`StorageResult`](StorageResult.md)\<`void`\>\>

***

### exportEvents()

> **exportEvents**(`filter?`): `Promise`\<[`StorageResult`](StorageResult.md)\<[`CalendarEvent`](CalendarEvent.md)[]\>\>

Defined in: [Event/interfaces/event-storage.interfaces.ts:131](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-storage.interfaces.ts#L131)

Export events

#### Parameters

##### filter?

[`EventFilter`](EventFilter.md)

#### Returns

`Promise`\<[`StorageResult`](StorageResult.md)\<[`CalendarEvent`](CalendarEvent.md)[]\>\>

***

### getAllEvents()

> **getAllEvents**(): `Promise`\<[`StorageResult`](StorageResult.md)\<[`CalendarEvent`](CalendarEvent.md)[]\>\>

Defined in: [Event/interfaces/event-storage.interfaces.ts:84](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-storage.interfaces.ts#L84)

Get all events

#### Returns

`Promise`\<[`StorageResult`](StorageResult.md)\<[`CalendarEvent`](CalendarEvent.md)[]\>\>

***

### getEventById()

> **getEventById**(`id`): `Promise`\<[`StorageResult`](StorageResult.md)\<[`CalendarEvent`](CalendarEvent.md) \| `null`\>\>

Defined in: [Event/interfaces/event-storage.interfaces.ts:89](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-storage.interfaces.ts#L89)

Get event by ID

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`StorageResult`](StorageResult.md)\<[`CalendarEvent`](CalendarEvent.md) \| `null`\>\>

***

### getStats()

> **getStats**(): `Promise`\<[`StorageResult`](StorageResult.md)\<[`StorageStats`](StorageStats.md)\>\>

Defined in: [Event/interfaces/event-storage.interfaces.ts:141](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-storage.interfaces.ts#L141)

Get storage statistics

#### Returns

`Promise`\<[`StorageResult`](StorageResult.md)\<[`StorageStats`](StorageStats.md)\>\>

***

### getSyncStatus()

> **getSyncStatus**(): `Promise`\<[`StorageResult`](StorageResult.md)\<[`SyncStatus`](SyncStatus.md)\>\>

Defined in: [Event/interfaces/event-storage.interfaces.ts:146](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-storage.interfaces.ts#L146)

Get sync status

#### Returns

`Promise`\<[`StorageResult`](StorageResult.md)\<[`SyncStatus`](SyncStatus.md)\>\>

***

### importEvents()

> **importEvents**(`events`): `Promise`\<[`StorageResult`](StorageResult.md)\<[`CalendarEvent`](CalendarEvent.md)[]\>\>

Defined in: [Event/interfaces/event-storage.interfaces.ts:126](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-storage.interfaces.ts#L126)

Import events

#### Parameters

##### events

[`CalendarEvent`](CalendarEvent.md)[]

#### Returns

`Promise`\<[`StorageResult`](StorageResult.md)\<[`CalendarEvent`](CalendarEvent.md)[]\>\>

***

### initialize()

> **initialize**(`config`): `Promise`\<[`StorageResult`](StorageResult.md)\<`void`\>\>

Defined in: [Event/interfaces/event-storage.interfaces.ts:79](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-storage.interfaces.ts#L79)

Initialize storage

#### Parameters

##### config

[`StorageConfig`](StorageConfig.md)

#### Returns

`Promise`\<[`StorageResult`](StorageResult.md)\<`void`\>\>

***

### onError()

> **onError**(`callback`): () => `void`

Defined in: [Event/interfaces/event-storage.interfaces.ts:171](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-storage.interfaces.ts#L171)

Storage error subscription

#### Parameters

##### callback

(`error`) => `void`

#### Returns

> (): `void`

##### Returns

`void`

***

### onEventChanged()

> **onEventChanged**(`callback`): () => `void`

Defined in: [Event/interfaces/event-storage.interfaces.ts:166](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-storage.interfaces.ts#L166)

Event change subscription

#### Parameters

##### callback

(`event`, `action`) => `void`

#### Returns

> (): `void`

##### Returns

`void`

***

### queryEvents()

> **queryEvents**(`filter?`, `sort?`, `page?`, `pageSize?`): `Promise`\<[`StorageResult`](StorageResult.md)\<[`EventResults`](EventResults.md)\>\>

Defined in: [Event/interfaces/event-storage.interfaces.ts:94](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-storage.interfaces.ts#L94)

Query events with filters

#### Parameters

##### filter?

[`EventFilter`](EventFilter.md)

##### sort?

[`EventSort`](EventSort.md)

##### page?

`number`

##### pageSize?

`number`

#### Returns

`Promise`\<[`StorageResult`](StorageResult.md)\<[`EventResults`](EventResults.md)\>\>

***

### restore()

> **restore**(`backupData`): `Promise`\<[`StorageResult`](StorageResult.md)\<`void`\>\>

Defined in: [Event/interfaces/event-storage.interfaces.ts:161](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-storage.interfaces.ts#L161)

Restore from backup

#### Parameters

##### backupData

`string`

#### Returns

`Promise`\<[`StorageResult`](StorageResult.md)\<`void`\>\>

***

### sync()

> **sync**(): `Promise`\<[`StorageResult`](StorageResult.md)\<`void`\>\>

Defined in: [Event/interfaces/event-storage.interfaces.ts:151](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-storage.interfaces.ts#L151)

Trigger manual sync

#### Returns

`Promise`\<[`StorageResult`](StorageResult.md)\<`void`\>\>

***

### updateEvent()

> **updateEvent**(`input`): `Promise`\<[`StorageResult`](StorageResult.md)\<[`CalendarEvent`](CalendarEvent.md)\>\>

Defined in: [Event/interfaces/event-storage.interfaces.ts:109](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-storage.interfaces.ts#L109)

Update existing event

#### Parameters

##### input

[`UpdateEventInput`](UpdateEventInput.md)

#### Returns

`Promise`\<[`StorageResult`](StorageResult.md)\<[`CalendarEvent`](CalendarEvent.md)\>\>
