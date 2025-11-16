[**@uplink-protocol/form-controller v0.3.1**](../../../../README.md)

***

[@uplink-protocol/form-controller](../../../../globals.md) / [EventInterfaces](../README.md) / IEventSyncService

# Interface: IEventSyncService

Defined in: [Event/interfaces/event-sync.interfaces.ts:235](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-sync.interfaces.ts#L235)

Event sync service interface

## Methods

### addProvider()

> **addProvider**(`config`): `Promise`\<`void`\>

Defined in: [Event/interfaces/event-sync.interfaces.ts:244](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-sync.interfaces.ts#L244)

Add sync provider

#### Parameters

##### config

`SyncProviderConfig`

#### Returns

`Promise`\<`void`\>

***

### configureWebhook()

> **configureWebhook**(`config`): `Promise`\<`void`\>

Defined in: [Event/interfaces/event-sync.interfaces.ts:372](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-sync.interfaces.ts#L372)

Configure webhook

#### Parameters

##### config

`WebhookConfig`

#### Returns

`Promise`\<`void`\>

***

### createSyncMapping()

> **createSyncMapping**(`mapping`): `Promise`\<`void`\>

Defined in: [Event/interfaces/event-sync.interfaces.ts:353](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-sync.interfaces.ts#L353)

Create sync mapping

#### Parameters

##### mapping

`Omit`\<`SyncMapping`, `"lastSynced"`\>

#### Returns

`Promise`\<`void`\>

***

### deleteSyncMapping()

> **deleteSyncMapping**(`localId`, `providerId`): `Promise`\<`void`\>

Defined in: [Event/interfaces/event-sync.interfaces.ts:367](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-sync.interfaces.ts#L367)

Delete sync mapping

#### Parameters

##### localId

`string`

##### providerId

`string`

#### Returns

`Promise`\<`void`\>

***

### exportSyncConfig()

> **exportSyncConfig**(): `Promise`\<\{ `mappings`: `SyncMapping`[]; `providers`: `SyncProviderConfig`[]; `webhooks`: `WebhookConfig`[]; \}\>

Defined in: [Event/interfaces/event-sync.interfaces.ts:416](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-sync.interfaces.ts#L416)

Export sync configuration

#### Returns

`Promise`\<\{ `mappings`: `SyncMapping`[]; `providers`: `SyncProviderConfig`[]; `webhooks`: `WebhookConfig`[]; \}\>

***

### getProvider()

> **getProvider**(`providerId`): `Promise`\<`SyncProviderConfig` \| `null`\>

Defined in: [Event/interfaces/event-sync.interfaces.ts:264](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-sync.interfaces.ts#L264)

Get sync provider by ID

#### Parameters

##### providerId

`string`

#### Returns

`Promise`\<`SyncProviderConfig` \| `null`\>

***

### getProviders()

> **getProviders**(): `Promise`\<`SyncProviderConfig`[]\>

Defined in: [Event/interfaces/event-sync.interfaces.ts:259](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-sync.interfaces.ts#L259)

Get all sync providers

#### Returns

`Promise`\<`SyncProviderConfig`[]\>

***

### getSyncConflicts()

> **getSyncConflicts**(`providerId?`, `resolved?`): `Promise`\<`SyncConflict`[]\>

Defined in: [Event/interfaces/event-sync.interfaces.ts:306](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-sync.interfaces.ts#L306)

Get sync conflicts

#### Parameters

##### providerId?

`string`

##### resolved?

`boolean`

#### Returns

`Promise`\<`SyncConflict`[]\>

***

### getSyncHistory()

> **getSyncHistory**(`providerId?`, `limit?`, `offset?`): `Promise`\<`SyncOperation`[]\>

Defined in: [Event/interfaces/event-sync.interfaces.ts:297](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-sync.interfaces.ts#L297)

Get sync history

#### Parameters

##### providerId?

`string`

##### limit?

`number`

##### offset?

`number`

#### Returns

`Promise`\<`SyncOperation`[]\>

***

### getSyncMapping()

> **getSyncMapping**(`localId`, `providerId`): `Promise`\<`SyncMapping` \| `null`\>

Defined in: [Event/interfaces/event-sync.interfaces.ts:348](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-sync.interfaces.ts#L348)

Get sync mapping

#### Parameters

##### localId

`string`

##### providerId

`string`

#### Returns

`Promise`\<`SyncMapping` \| `null`\>

***

### getSyncStatistics()

> **getSyncStatistics**(`providerId?`, `dateRange?`): `Promise`\<\{ `averageSyncTime`: `number`; `conflictsGenerated`: `number`; `eventsCreated`: `number`; `eventsDeleted`: `number`; `eventsUpdated`: `number`; `failedOperations`: `number`; `lastSyncTime?`: `Date`; `successfulOperations`: `number`; `totalOperations`: `number`; \}\>

Defined in: [Event/interfaces/event-sync.interfaces.ts:398](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-sync.interfaces.ts#L398)

Get sync statistics

#### Parameters

##### providerId?

`string`

##### dateRange?

###### end

`Date`

###### start

`Date`

#### Returns

`Promise`\<\{ `averageSyncTime`: `number`; `conflictsGenerated`: `number`; `eventsCreated`: `number`; `eventsDeleted`: `number`; `eventsUpdated`: `number`; `failedOperations`: `number`; `lastSyncTime?`: `Date`; `successfulOperations`: `number`; `totalOperations`: `number`; \}\>

***

### getSyncStatus()

> **getSyncStatus**(`providerId?`): `Promise`\<`SyncOperation`[]\>

Defined in: [Event/interfaces/event-sync.interfaces.ts:292](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-sync.interfaces.ts#L292)

Get sync status

#### Parameters

##### providerId?

`string`

#### Returns

`Promise`\<`SyncOperation`[]\>

***

### getWebhooks()

> **getWebhooks**(): `Promise`\<`WebhookConfig`[]\>

Defined in: [Event/interfaces/event-sync.interfaces.ts:382](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-sync.interfaces.ts#L382)

Get webhook configurations

#### Returns

`Promise`\<`WebhookConfig`[]\>

***

### importSyncConfig()

> **importSyncConfig**(`config`): `Promise`\<`void`\>

Defined in: [Event/interfaces/event-sync.interfaces.ts:425](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-sync.interfaces.ts#L425)

Import sync configuration

#### Parameters

##### config

###### mappings?

`SyncMapping`[]

###### providers?

`SyncProviderConfig`[]

###### webhooks?

`WebhookConfig`[]

#### Returns

`Promise`\<`void`\>

***

### initialize()

> **initialize**(): `Promise`\<`void`\>

Defined in: [Event/interfaces/event-sync.interfaces.ts:239](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-sync.interfaces.ts#L239)

Initialize sync service

#### Returns

`Promise`\<`void`\>

***

### onConflictDetected()

> **onConflictDetected**(`callback`): () => `void`

Defined in: [Event/interfaces/event-sync.interfaces.ts:437](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-sync.interfaces.ts#L437)

#### Parameters

##### callback

(`conflict`) => `void`

#### Returns

> (): `void`

##### Returns

`void`

***

### onSyncCompleted()

> **onSyncCompleted**(`callback`): () => `void`

Defined in: [Event/interfaces/event-sync.interfaces.ts:435](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-sync.interfaces.ts#L435)

#### Parameters

##### callback

(`operation`) => `void`

#### Returns

> (): `void`

##### Returns

`void`

***

### onSyncError()

> **onSyncError**(`callback`): () => `void`

Defined in: [Event/interfaces/event-sync.interfaces.ts:436](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-sync.interfaces.ts#L436)

#### Parameters

##### callback

(`operation`, `error`) => `void`

#### Returns

> (): `void`

##### Returns

`void`

***

### onSyncStarted()

> **onSyncStarted**(`callback`): () => `void`

Defined in: [Event/interfaces/event-sync.interfaces.ts:434](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-sync.interfaces.ts#L434)

Subscribe to sync events

#### Parameters

##### callback

(`operation`) => `void`

#### Returns

> (): `void`

##### Returns

`void`

***

### pauseSync()

> **pauseSync**(`providerId`): `Promise`\<`void`\>

Defined in: [Event/interfaces/event-sync.interfaces.ts:392](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-sync.interfaces.ts#L392)

Pause/resume sync

#### Parameters

##### providerId

`string`

#### Returns

`Promise`\<`void`\>

***

### pullEvents()

> **pullEvents**(`providerId`, `dateRange?`): `Promise`\<\{ `error?`: `string`; `events`: `any`[]; \}\>

Defined in: [Event/interfaces/event-sync.interfaces.ts:331](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-sync.interfaces.ts#L331)

Pull events from external system

#### Parameters

##### providerId

`string`

##### dateRange?

###### end

`Date`

###### start

`Date`

#### Returns

`Promise`\<\{ `error?`: `string`; `events`: `any`[]; \}\>

***

### pushEvent()

> **pushEvent**(`providerId`, `event`): `Promise`\<\{ `error?`: `string`; `remoteId?`: `string`; `success`: `boolean`; \}\>

Defined in: [Event/interfaces/event-sync.interfaces.ts:323](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-sync.interfaces.ts#L323)

Push event to external system

#### Parameters

##### providerId

`string`

##### event

[`CalendarEvent`](CalendarEvent.md)

#### Returns

`Promise`\<\{ `error?`: `string`; `remoteId?`: `string`; `success`: `boolean`; \}\>

***

### removeProvider()

> **removeProvider**(`providerId`): `Promise`\<`void`\>

Defined in: [Event/interfaces/event-sync.interfaces.ts:254](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-sync.interfaces.ts#L254)

Remove sync provider

#### Parameters

##### providerId

`string`

#### Returns

`Promise`\<`void`\>

***

### removeWebhook()

> **removeWebhook**(`webhookId`): `Promise`\<`void`\>

Defined in: [Event/interfaces/event-sync.interfaces.ts:377](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-sync.interfaces.ts#L377)

Remove webhook

#### Parameters

##### webhookId

`string`

#### Returns

`Promise`\<`void`\>

***

### resolveSyncConflict()

> **resolveSyncConflict**(`conflictId`, `strategy`, `resolvedBy`): `Promise`\<`void`\>

Defined in: [Event/interfaces/event-sync.interfaces.ts:314](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-sync.interfaces.ts#L314)

Resolve sync conflict

#### Parameters

##### conflictId

`string`

##### strategy

`"local_wins"` | `"remote_wins"` | `"manual"` | `"merge"` | `undefined`

##### resolvedBy

`string`

#### Returns

`Promise`\<`void`\>

***

### resumeSync()

> **resumeSync**(`providerId`): `Promise`\<`void`\>

Defined in: [Event/interfaces/event-sync.interfaces.ts:393](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-sync.interfaces.ts#L393)

#### Parameters

##### providerId

`string`

#### Returns

`Promise`\<`void`\>

***

### setProviderEnabled()

> **setProviderEnabled**(`providerId`, `enabled`): `Promise`\<`void`\>

Defined in: [Event/interfaces/event-sync.interfaces.ts:387](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-sync.interfaces.ts#L387)

Enable/disable provider

#### Parameters

##### providerId

`string`

##### enabled

`boolean`

#### Returns

`Promise`\<`void`\>

***

### startSync()

> **startSync**(`providerId`, `type?`, `direction?`): `Promise`\<`SyncOperation`\>

Defined in: [Event/interfaces/event-sync.interfaces.ts:278](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-sync.interfaces.ts#L278)

Start manual sync

#### Parameters

##### providerId

`string`

##### type?

`"full_sync"` | `"incremental_sync"`

##### direction?

`SyncDirection`

#### Returns

`Promise`\<`SyncOperation`\>

***

### stopSync()

> **stopSync**(`operationId`): `Promise`\<`void`\>

Defined in: [Event/interfaces/event-sync.interfaces.ts:287](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-sync.interfaces.ts#L287)

Stop active sync

#### Parameters

##### operationId

`string`

#### Returns

`Promise`\<`void`\>

***

### syncEvent()

> **syncEvent**(`providerId`, `eventId`, `direction`): `Promise`\<\{ `error?`: `string`; `success`: `boolean`; \}\>

Defined in: [Event/interfaces/event-sync.interfaces.ts:339](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-sync.interfaces.ts#L339)

Sync single event

#### Parameters

##### providerId

`string`

##### eventId

`string`

##### direction

`SyncDirection`

#### Returns

`Promise`\<\{ `error?`: `string`; `success`: `boolean`; \}\>

***

### testProvider()

> **testProvider**(`providerId`): `Promise`\<\{ `error?`: `string`; `metadata?`: `Record`\<`string`, `any`\>; `success`: `boolean`; \}\>

Defined in: [Event/interfaces/event-sync.interfaces.ts:269](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-sync.interfaces.ts#L269)

Test provider connection

#### Parameters

##### providerId

`string`

#### Returns

`Promise`\<\{ `error?`: `string`; `metadata?`: `Record`\<`string`, `any`\>; `success`: `boolean`; \}\>

***

### updateProvider()

> **updateProvider**(`providerId`, `config`): `Promise`\<`void`\>

Defined in: [Event/interfaces/event-sync.interfaces.ts:249](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-sync.interfaces.ts#L249)

Update sync provider

#### Parameters

##### providerId

`string`

##### config

`Partial`\<`SyncProviderConfig`\>

#### Returns

`Promise`\<`void`\>

***

### updateSyncMapping()

> **updateSyncMapping**(`localId`, `providerId`, `updates`): `Promise`\<`void`\>

Defined in: [Event/interfaces/event-sync.interfaces.ts:358](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-sync.interfaces.ts#L358)

Update sync mapping

#### Parameters

##### localId

`string`

##### providerId

`string`

##### updates

`Partial`\<`SyncMapping`\>

#### Returns

`Promise`\<`void`\>
