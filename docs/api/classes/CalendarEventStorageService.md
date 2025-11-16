[**@uplink-protocol/form-controller v0.3.1**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / CalendarEventStorageService

# Class: CalendarEventStorageService

Defined in: [Event/services/event-storage.service.ts:26](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-storage.service.ts#L26)

In-memory storage implementation

## Implements

- [`IEventStorageService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventStorageService.md)

## Constructors

### Constructor

> **new CalendarEventStorageService**(): `EventStorageService`

#### Returns

`EventStorageService`

## Methods

### backup()

> **backup**(): `Promise`\<[`StorageResult`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/StorageResult.md)\<`string`\>\>

Defined in: [Event/services/event-storage.service.ts:427](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-storage.service.ts#L427)

Backup events

#### Returns

`Promise`\<[`StorageResult`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/StorageResult.md)\<`string`\>\>

#### Implementation of

[`IEventStorageService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventStorageService.md).[`backup`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventStorageService.md#backup)

***

### bulkCreate()

> **bulkCreate**(`inputs`): `Promise`\<[`StorageResult`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/StorageResult.md)\<[`CalendarEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CalendarEvent.md)[]\>\>

Defined in: [Event/services/event-storage.service.ts:276](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-storage.service.ts#L276)

Bulk operations

#### Parameters

##### inputs

[`CreateEventInput`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CreateEventInput.md)[]

#### Returns

`Promise`\<[`StorageResult`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/StorageResult.md)\<[`CalendarEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CalendarEvent.md)[]\>\>

#### Implementation of

[`IEventStorageService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventStorageService.md).[`bulkCreate`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventStorageService.md#bulkcreate)

***

### bulkDelete()

> **bulkDelete**(`ids`): `Promise`\<[`StorageResult`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/StorageResult.md)\<`void`\>\>

Defined in: [Event/services/event-storage.service.ts:312](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-storage.service.ts#L312)

#### Parameters

##### ids

`string`[]

#### Returns

`Promise`\<[`StorageResult`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/StorageResult.md)\<`void`\>\>

#### Implementation of

[`IEventStorageService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventStorageService.md).[`bulkDelete`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventStorageService.md#bulkdelete)

***

### bulkUpdate()

> **bulkUpdate**(`inputs`): `Promise`\<[`StorageResult`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/StorageResult.md)\<[`CalendarEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CalendarEvent.md)[]\>\>

Defined in: [Event/services/event-storage.service.ts:294](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-storage.service.ts#L294)

#### Parameters

##### inputs

[`UpdateEventInput`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/UpdateEventInput.md)[]

#### Returns

`Promise`\<[`StorageResult`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/StorageResult.md)\<[`CalendarEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CalendarEvent.md)[]\>\>

#### Implementation of

[`IEventStorageService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventStorageService.md).[`bulkUpdate`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventStorageService.md#bulkupdate)

***

### clearAll()

> **clearAll**(): `Promise`\<[`StorageResult`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/StorageResult.md)\<`void`\>\>

Defined in: [Event/services/event-storage.service.ts:365](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-storage.service.ts#L365)

Clear all events

#### Returns

`Promise`\<[`StorageResult`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/StorageResult.md)\<`void`\>\>

#### Implementation of

[`IEventStorageService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventStorageService.md).[`clearAll`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventStorageService.md#clearall)

***

### createEvent()

> **createEvent**(`input`): `Promise`\<[`StorageResult`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/StorageResult.md)\<[`CalendarEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CalendarEvent.md)\>\>

Defined in: [Event/services/event-storage.service.ts:130](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-storage.service.ts#L130)

Create new event

#### Parameters

##### input

[`CreateEventInput`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CreateEventInput.md)

#### Returns

`Promise`\<[`StorageResult`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/StorageResult.md)\<[`CalendarEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CalendarEvent.md)\>\>

#### Implementation of

[`IEventStorageService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventStorageService.md).[`createEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventStorageService.md#createevent)

***

### deleteEvent()

> **deleteEvent**(`id`): `Promise`\<[`StorageResult`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/StorageResult.md)\<`void`\>\>

Defined in: [Event/services/event-storage.service.ts:248](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-storage.service.ts#L248)

Delete event

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`StorageResult`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/StorageResult.md)\<`void`\>\>

#### Implementation of

[`IEventStorageService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventStorageService.md).[`deleteEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventStorageService.md#deleteevent)

***

### exportEvents()

> **exportEvents**(`filter?`): `Promise`\<[`StorageResult`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/StorageResult.md)\<[`CalendarEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CalendarEvent.md)[]\>\>

Defined in: [Event/services/event-storage.service.ts:347](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-storage.service.ts#L347)

Export events

#### Parameters

##### filter?

[`EventFilter`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/EventFilter.md)

#### Returns

`Promise`\<[`StorageResult`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/StorageResult.md)\<[`CalendarEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CalendarEvent.md)[]\>\>

#### Implementation of

[`IEventStorageService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventStorageService.md).[`exportEvents`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventStorageService.md#exportevents)

***

### getAllEvents()

> **getAllEvents**(): `Promise`\<[`StorageResult`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/StorageResult.md)\<[`CalendarEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CalendarEvent.md)[]\>\>

Defined in: [Event/services/event-storage.service.ts:56](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-storage.service.ts#L56)

Get all events

#### Returns

`Promise`\<[`StorageResult`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/StorageResult.md)\<[`CalendarEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CalendarEvent.md)[]\>\>

#### Implementation of

[`IEventStorageService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventStorageService.md).[`getAllEvents`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventStorageService.md#getallevents)

***

### getEventById()

> **getEventById**(`id`): `Promise`\<[`StorageResult`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/StorageResult.md)\<[`CalendarEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CalendarEvent.md) \| `null`\>\>

Defined in: [Event/services/event-storage.service.ts:71](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-storage.service.ts#L71)

Get event by ID

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`StorageResult`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/StorageResult.md)\<[`CalendarEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CalendarEvent.md) \| `null`\>\>

#### Implementation of

[`IEventStorageService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventStorageService.md).[`getEventById`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventStorageService.md#geteventbyid)

***

### getStats()

> **getStats**(): `Promise`\<[`StorageResult`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/StorageResult.md)\<[`StorageStats`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/StorageStats.md)\>\>

Defined in: [Event/services/event-storage.service.ts:381](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-storage.service.ts#L381)

Get storage statistics

#### Returns

`Promise`\<[`StorageResult`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/StorageResult.md)\<[`StorageStats`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/StorageStats.md)\>\>

#### Implementation of

[`IEventStorageService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventStorageService.md).[`getStats`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventStorageService.md#getstats)

***

### getSyncStatus()

> **getSyncStatus**(): `Promise`\<[`StorageResult`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/StorageResult.md)\<[`SyncStatus`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/SyncStatus.md)\>\>

Defined in: [Event/services/event-storage.service.ts:400](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-storage.service.ts#L400)

Get sync status

#### Returns

`Promise`\<[`StorageResult`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/StorageResult.md)\<[`SyncStatus`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/SyncStatus.md)\>\>

#### Implementation of

[`IEventStorageService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventStorageService.md).[`getSyncStatus`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventStorageService.md#getsyncstatus)

***

### importEvents()

> **importEvents**(`events`): `Promise`\<[`StorageResult`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/StorageResult.md)\<[`CalendarEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CalendarEvent.md)[]\>\>

Defined in: [Event/services/event-storage.service.ts:329](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-storage.service.ts#L329)

Import events

#### Parameters

##### events

[`CalendarEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CalendarEvent.md)[]

#### Returns

`Promise`\<[`StorageResult`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/StorageResult.md)\<[`CalendarEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CalendarEvent.md)[]\>\>

#### Implementation of

[`IEventStorageService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventStorageService.md).[`importEvents`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventStorageService.md#importevents)

***

### initialize()

> **initialize**(`config`): `Promise`\<[`StorageResult`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/StorageResult.md)\<`void`\>\>

Defined in: [Event/services/event-storage.service.ts:35](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-storage.service.ts#L35)

Initialize storage

#### Parameters

##### config

[`StorageConfig`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/StorageConfig.md)

#### Returns

`Promise`\<[`StorageResult`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/StorageResult.md)\<`void`\>\>

#### Implementation of

[`IEventStorageService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventStorageService.md).[`initialize`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventStorageService.md#initialize)

***

### onError()

> **onError**(`callback`): () => `void`

Defined in: [Event/services/event-storage.service.ts:475](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-storage.service.ts#L475)

Storage error subscription

#### Parameters

##### callback

(`error`) => `void`

#### Returns

> (): `void`

##### Returns

`void`

#### Implementation of

[`IEventStorageService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventStorageService.md).[`onError`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventStorageService.md#onerror)

***

### onEventChanged()

> **onEventChanged**(`callback`): () => `void`

Defined in: [Event/services/event-storage.service.ts:462](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-storage.service.ts#L462)

Event change subscription

#### Parameters

##### callback

(`event`, `action`) => `void`

#### Returns

> (): `void`

##### Returns

`void`

#### Implementation of

[`IEventStorageService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventStorageService.md).[`onEventChanged`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventStorageService.md#oneventchanged)

***

### queryEvents()

> **queryEvents**(`filter?`, `sort?`, `page?`, `pageSize?`): `Promise`\<[`StorageResult`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/StorageResult.md)\<[`EventResults`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/EventResults.md)\>\>

Defined in: [Event/services/event-storage.service.ts:86](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-storage.service.ts#L86)

Query events with filters

#### Parameters

##### filter?

[`EventFilter`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/EventFilter.md)

##### sort?

[`EventSort`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/EventSort.md)

##### page?

`number` = `1`

##### pageSize?

`number` = `50`

#### Returns

`Promise`\<[`StorageResult`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/StorageResult.md)\<[`EventResults`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/EventResults.md)\>\>

#### Implementation of

[`IEventStorageService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventStorageService.md).[`queryEvents`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventStorageService.md#queryevents)

***

### restore()

> **restore**(`backupData`): `Promise`\<[`StorageResult`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/StorageResult.md)\<`void`\>\>

Defined in: [Event/services/event-storage.service.ts:442](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-storage.service.ts#L442)

Restore from backup

#### Parameters

##### backupData

`string`

#### Returns

`Promise`\<[`StorageResult`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/StorageResult.md)\<`void`\>\>

#### Implementation of

[`IEventStorageService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventStorageService.md).[`restore`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventStorageService.md#restore)

***

### sync()

> **sync**(): `Promise`\<[`StorageResult`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/StorageResult.md)\<`void`\>\>

Defined in: [Event/services/event-storage.service.ts:419](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-storage.service.ts#L419)

Trigger manual sync

#### Returns

`Promise`\<[`StorageResult`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/StorageResult.md)\<`void`\>\>

#### Implementation of

[`IEventStorageService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventStorageService.md).[`sync`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventStorageService.md#sync)

***

### updateEvent()

> **updateEvent**(`input`): `Promise`\<[`StorageResult`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/StorageResult.md)\<[`CalendarEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CalendarEvent.md)\>\>

Defined in: [Event/services/event-storage.service.ts:191](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-storage.service.ts#L191)

Update existing event

#### Parameters

##### input

[`UpdateEventInput`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/UpdateEventInput.md)

#### Returns

`Promise`\<[`StorageResult`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/StorageResult.md)\<[`CalendarEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CalendarEvent.md)\>\>

#### Implementation of

[`IEventStorageService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventStorageService.md).[`updateEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventStorageService.md#updateevent)
