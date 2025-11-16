[**@uplink-protocol/form-controller v0.3.1**](../../../../README.md)

***

[@uplink-protocol/form-controller](../../../../globals.md) / [EventInterfaces](../README.md) / IEventManagerService

# Interface: IEventManagerService

Defined in: [Event/interfaces/event-manager.service.interfaces.ts:92](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-manager.service.interfaces.ts#L92)

Event manager service interface

## Methods

### backup()

> **backup**(): `Promise`\<`string`\>

Defined in: [Event/interfaces/event-manager.service.interfaces.ts:241](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-manager.service.interfaces.ts#L241)

Backup all data

#### Returns

`Promise`\<`string`\>

***

### bulkCreateEvents()

> **bulkCreateEvents**(`inputs`): `Promise`\<[`CalendarEvent`](CalendarEvent.md)[]\>

Defined in: [Event/interfaces/event-manager.service.interfaces.ts:136](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-manager.service.interfaces.ts#L136)

Bulk operations

#### Parameters

##### inputs

[`CreateEventInput`](CreateEventInput.md)[]

#### Returns

`Promise`\<[`CalendarEvent`](CalendarEvent.md)[]\>

***

### bulkDeleteEvents()

> **bulkDeleteEvents**(`ids`): `Promise`\<`void`\>

Defined in: [Event/interfaces/event-manager.service.interfaces.ts:138](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-manager.service.interfaces.ts#L138)

#### Parameters

##### ids

`string`[]

#### Returns

`Promise`\<`void`\>

***

### bulkUpdateEvents()

> **bulkUpdateEvents**(`inputs`): `Promise`\<[`CalendarEvent`](CalendarEvent.md)[]\>

Defined in: [Event/interfaces/event-manager.service.interfaces.ts:137](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-manager.service.interfaces.ts#L137)

#### Parameters

##### inputs

[`UpdateEventInput`](UpdateEventInput.md)[]

#### Returns

`Promise`\<[`CalendarEvent`](CalendarEvent.md)[]\>

***

### clearAllEvents()

> **clearAllEvents**(): `Promise`\<`void`\>

Defined in: [Event/interfaces/event-manager.service.interfaces.ts:198](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-manager.service.interfaces.ts#L198)

Clear all events

#### Returns

`Promise`\<`void`\>

***

### createEvent()

> **createEvent**(`input`): `Promise`\<[`CalendarEvent`](CalendarEvent.md)\>

Defined in: [Event/interfaces/event-manager.service.interfaces.ts:121](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-manager.service.interfaces.ts#L121)

Create new event

#### Parameters

##### input

[`CreateEventInput`](CreateEventInput.md)

#### Returns

`Promise`\<[`CalendarEvent`](CalendarEvent.md)\>

***

### deleteEvent()

> **deleteEvent**(`id`): `Promise`\<`void`\>

Defined in: [Event/interfaces/event-manager.service.interfaces.ts:131](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-manager.service.interfaces.ts#L131)

Delete event

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`void`\>

***

### exportEvents()

> **exportEvents**(`filter?`, `format?`): `Promise`\<\{ `data`: `string`; `filename`: `string`; `mimeType`: `string`; \}\>

Defined in: [Event/interfaces/event-manager.service.interfaces.ts:190](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-manager.service.interfaces.ts#L190)

Export events

#### Parameters

##### filter?

[`EventFilter`](EventFilter.md)

##### format?

`"ics"` | `"csv"` | `"json"`

#### Returns

`Promise`\<\{ `data`: `string`; `filename`: `string`; `mimeType`: `string`; \}\>

***

### getAllEvents()

> **getAllEvents**(): `Promise`\<[`CalendarEvent`](CalendarEvent.md)[]\>

Defined in: [Event/interfaces/event-manager.service.interfaces.ts:101](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-manager.service.interfaces.ts#L101)

Get all events

#### Returns

`Promise`\<[`CalendarEvent`](CalendarEvent.md)[]\>

***

### getEventById()

> **getEventById**(`id`): `Promise`\<[`CalendarEvent`](CalendarEvent.md) \| `null`\>

Defined in: [Event/interfaces/event-manager.service.interfaces.ts:106](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-manager.service.interfaces.ts#L106)

Get event by ID

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`CalendarEvent`](CalendarEvent.md) \| `null`\>

***

### getEventConflicts()

> **getEventConflicts**(`eventId`): `Promise`\<`any`[]\>

Defined in: [Event/interfaces/event-manager.service.interfaces.ts:203](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-manager.service.interfaces.ts#L203)

Get event conflicts

#### Parameters

##### eventId

`string`

#### Returns

`Promise`\<`any`[]\>

***

### getEventsForDate()

> **getEventsForDate**(`date`): `Promise`\<[`CalendarEvent`](CalendarEvent.md)[]\>

Defined in: [Event/interfaces/event-manager.service.interfaces.ts:158](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-manager.service.interfaces.ts#L158)

Get events for specific date

#### Parameters

##### date

`Date`

#### Returns

`Promise`\<[`CalendarEvent`](CalendarEvent.md)[]\>

***

### getEventsForDateRange()

> **getEventsForDateRange**(`start`, `end`): `Promise`\<[`CalendarEvent`](CalendarEvent.md)[]\>

Defined in: [Event/interfaces/event-manager.service.interfaces.ts:153](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-manager.service.interfaces.ts#L153)

Get events for date range

#### Parameters

##### start

`Date`

##### end

`Date`

#### Returns

`Promise`\<[`CalendarEvent`](CalendarEvent.md)[]\>

***

### getOverdueEvents()

> **getOverdueEvents**(): `Promise`\<[`CalendarEvent`](CalendarEvent.md)[]\>

Defined in: [Event/interfaces/event-manager.service.interfaces.ts:168](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-manager.service.interfaces.ts#L168)

Get overdue events

#### Returns

`Promise`\<[`CalendarEvent`](CalendarEvent.md)[]\>

***

### getStatistics()

> **getStatistics**(`dateRange?`): `Promise`\<[`EventStatistics`](EventStatistics.md)\>

Defined in: [Event/interfaces/event-manager.service.interfaces.ts:173](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-manager.service.interfaces.ts#L173)

Get event statistics

#### Parameters

##### dateRange?

###### end

`Date`

###### start

`Date`

#### Returns

`Promise`\<[`EventStatistics`](EventStatistics.md)\>

***

### getStatus()

> **getStatus**(): `object`

Defined in: [Event/interfaces/event-manager.service.interfaces.ts:230](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-manager.service.interfaces.ts#L230)

Get manager status

#### Returns

`object`

##### errors

> **errors**: `string`[]

##### health

> **health**: `"good"` \| `"warning"` \| `"error"`

##### initialized

> **initialized**: `boolean`

##### lastSyncTime?

> `optional` **lastSyncTime**: `Date`

##### totalEvents

> **totalEvents**: `number`

***

### getUpcomingEvents()

> **getUpcomingEvents**(`limit?`): `Promise`\<[`CalendarEvent`](CalendarEvent.md)[]\>

Defined in: [Event/interfaces/event-manager.service.interfaces.ts:163](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-manager.service.interfaces.ts#L163)

Get upcoming events

#### Parameters

##### limit?

`number`

#### Returns

`Promise`\<[`CalendarEvent`](CalendarEvent.md)[]\>

***

### importEvents()

> **importEvents**(`events`, `options?`): `Promise`\<\{ `errors`: `string`[]; `imported`: `number`; `skipped`: `number`; \}\>

Defined in: [Event/interfaces/event-manager.service.interfaces.ts:178](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-manager.service.interfaces.ts#L178)

Import events

#### Parameters

##### events

[`CalendarEvent`](CalendarEvent.md)[]

##### options?

###### merge?

`boolean`

###### skipDuplicates?

`boolean`

#### Returns

`Promise`\<\{ `errors`: `string`[]; `imported`: `number`; `skipped`: `number`; \}\>

***

### initialize()

> **initialize**(`config?`): `Promise`\<`void`\>

Defined in: [Event/interfaces/event-manager.service.interfaces.ts:96](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-manager.service.interfaces.ts#L96)

Initialize the event manager

#### Parameters

##### config?

[`EventManagerConfig`](EventManagerConfig.md)

#### Returns

`Promise`\<`void`\>

***

### initializeEvents()

> **initializeEvents**(): `object`

Defined in: [Event/interfaces/event-manager.service.interfaces.ts:251](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-manager.service.interfaces.ts#L251)

Initialize event emitters

#### Returns

`object`

##### bulkOperationCompleted

> **bulkOperationCompleted**: `EventEmitter`\<\{ `count`: `number`; `operation`: `string`; \}\>

##### errorOccurred

> **errorOccurred**: `EventEmitter`\<`Error`\>

##### eventCreated

> **eventCreated**: `EventEmitter`\<[`CalendarEvent`](CalendarEvent.md)\>

##### eventDeleted

> **eventDeleted**: `EventEmitter`\<\{ `event`: [`CalendarEvent`](CalendarEvent.md); `eventId`: `string`; \}\>

##### eventUpdated

> **eventUpdated**: `EventEmitter`\<\{ `event`: [`CalendarEvent`](CalendarEvent.md); `oldEvent`: [`CalendarEvent`](CalendarEvent.md); \}\>

##### validationFailed

> **validationFailed**: `EventEmitter`\<[`EventValidationResult`](EventValidationResult.md)\>

***

### onError()

> **onError**(`callback`): () => `void`

Defined in: [Event/interfaces/event-manager.service.interfaces.ts:225](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-manager.service.interfaces.ts#L225)

Subscribe to error events

#### Parameters

##### callback

(`error`) => `void`

#### Returns

> (): `void`

##### Returns

`void`

***

### onEventCreated()

> **onEventCreated**(`callback`): () => `void`

Defined in: [Event/interfaces/event-manager.service.interfaces.ts:213](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-manager.service.interfaces.ts#L213)

Subscribe to event changes

#### Parameters

##### callback

(`event`) => `void`

#### Returns

> (): `void`

##### Returns

`void`

***

### onEventDeleted()

> **onEventDeleted**(`callback`): () => `void`

Defined in: [Event/interfaces/event-manager.service.interfaces.ts:215](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-manager.service.interfaces.ts#L215)

#### Parameters

##### callback

(`eventId`) => `void`

#### Returns

> (): `void`

##### Returns

`void`

***

### onEventUpdated()

> **onEventUpdated**(`callback`): () => `void`

Defined in: [Event/interfaces/event-manager.service.interfaces.ts:214](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-manager.service.interfaces.ts#L214)

#### Parameters

##### callback

(`event`, `oldEvent`) => `void`

#### Returns

> (): `void`

##### Returns

`void`

***

### onValidationFailed()

> **onValidationFailed**(`callback`): () => `void`

Defined in: [Event/interfaces/event-manager.service.interfaces.ts:220](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-manager.service.interfaces.ts#L220)

Subscribe to validation events

#### Parameters

##### callback

(`result`) => `void`

#### Returns

> (): `void`

##### Returns

`void`

***

### queryEvents()

> **queryEvents**(`filter?`, `sort?`, `page?`, `pageSize?`): `Promise`\<[`EventResults`](EventResults.md)\>

Defined in: [Event/interfaces/event-manager.service.interfaces.ts:111](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-manager.service.interfaces.ts#L111)

Query events with filters and pagination

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

`Promise`\<[`EventResults`](EventResults.md)\>

***

### resolveEventConflict()

> **resolveEventConflict**(`conflictId`, `resolution`): `Promise`\<`void`\>

Defined in: [Event/interfaces/event-manager.service.interfaces.ts:208](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-manager.service.interfaces.ts#L208)

Resolve event conflict

#### Parameters

##### conflictId

`string`

##### resolution

`any`

#### Returns

`Promise`\<`void`\>

***

### restore()

> **restore**(`backupData`): `Promise`\<`void`\>

Defined in: [Event/interfaces/event-manager.service.interfaces.ts:246](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-manager.service.interfaces.ts#L246)

Restore from backup

#### Parameters

##### backupData

`string`

#### Returns

`Promise`\<`void`\>

***

### searchEvents()

> **searchEvents**(`query`, `filters?`): `Promise`\<[`CalendarEvent`](CalendarEvent.md)[]\>

Defined in: [Event/interfaces/event-manager.service.interfaces.ts:148](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-manager.service.interfaces.ts#L148)

Search events

#### Parameters

##### query

`string`

##### filters?

[`EventFilter`](EventFilter.md)

#### Returns

`Promise`\<[`CalendarEvent`](CalendarEvent.md)[]\>

***

### updateEvent()

> **updateEvent**(`input`): `Promise`\<[`CalendarEvent`](CalendarEvent.md)\>

Defined in: [Event/interfaces/event-manager.service.interfaces.ts:126](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-manager.service.interfaces.ts#L126)

Update existing event

#### Parameters

##### input

[`UpdateEventInput`](UpdateEventInput.md)

#### Returns

`Promise`\<[`CalendarEvent`](CalendarEvent.md)\>

***

### validateEvent()

> **validateEvent**(`input`): `Promise`\<[`EventValidationResult`](EventValidationResult.md)\>

Defined in: [Event/interfaces/event-manager.service.interfaces.ts:143](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-manager.service.interfaces.ts#L143)

Validate event

#### Parameters

##### input

[`CreateEventInput`](CreateEventInput.md) | [`UpdateEventInput`](UpdateEventInput.md)

#### Returns

`Promise`\<[`EventValidationResult`](EventValidationResult.md)\>
