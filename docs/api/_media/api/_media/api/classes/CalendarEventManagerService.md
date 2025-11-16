[**@uplink-protocol/form-controller v0.3.1**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / CalendarEventManagerService

# Class: CalendarEventManagerService

Defined in: [Event/services/event-manager.service.ts:30](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-manager.service.ts#L30)

Event Manager Service Implementation

## Implements

- [`IEventManagerService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventManagerService.md)

## Constructors

### Constructor

> **new CalendarEventManagerService**(): `EventManagerService`

Defined in: [Event/services/event-manager.service.ts:68](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-manager.service.ts#L68)

#### Returns

`EventManagerService`

## Methods

### backup()

> **backup**(): `Promise`\<`string`\>

Defined in: [Event/services/event-manager.service.ts:646](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-manager.service.ts#L646)

Backup all data

#### Returns

`Promise`\<`string`\>

#### Implementation of

[`IEventManagerService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventManagerService.md).[`backup`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventManagerService.md#backup)

***

### bulkCreateEvents()

> **bulkCreateEvents**(`inputs`): `Promise`\<[`CalendarEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CalendarEvent.md)[]\>

Defined in: [Event/services/event-manager.service.ts:384](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-manager.service.ts#L384)

Bulk operations

#### Parameters

##### inputs

[`CreateEventInput`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CreateEventInput.md)[]

#### Returns

`Promise`\<[`CalendarEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CalendarEvent.md)[]\>

#### Implementation of

[`IEventManagerService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventManagerService.md).[`bulkCreateEvents`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventManagerService.md#bulkcreateevents)

***

### bulkDeleteEvents()

> **bulkDeleteEvents**(`ids`): `Promise`\<`void`\>

Defined in: [Event/services/event-manager.service.ts:412](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-manager.service.ts#L412)

#### Parameters

##### ids

`string`[]

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IEventManagerService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventManagerService.md).[`bulkDeleteEvents`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventManagerService.md#bulkdeleteevents)

***

### bulkUpdateEvents()

> **bulkUpdateEvents**(`inputs`): `Promise`\<[`CalendarEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CalendarEvent.md)[]\>

Defined in: [Event/services/event-manager.service.ts:398](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-manager.service.ts#L398)

#### Parameters

##### inputs

[`UpdateEventInput`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/UpdateEventInput.md)[]

#### Returns

`Promise`\<[`CalendarEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CalendarEvent.md)[]\>

#### Implementation of

[`IEventManagerService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventManagerService.md).[`bulkUpdateEvents`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventManagerService.md#bulkupdateevents)

***

### clearAllEvents()

> **clearAllEvents**(): `Promise`\<`void`\>

Defined in: [Event/services/event-manager.service.ts:374](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-manager.service.ts#L374)

Clear all events

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IEventManagerService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventManagerService.md).[`clearAllEvents`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventManagerService.md#clearallevents)

***

### createEvent()

> **createEvent**(`input`): `Promise`\<[`CalendarEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CalendarEvent.md)\>

Defined in: [Event/services/event-manager.service.ts:182](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-manager.service.ts#L182)

Create a new event

#### Parameters

##### input

[`CreateEventInput`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CreateEventInput.md)

#### Returns

`Promise`\<[`CalendarEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CalendarEvent.md)\>

#### Implementation of

[`IEventManagerService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventManagerService.md).[`createEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventManagerService.md#createevent)

***

### deleteEvent()

> **deleteEvent**(`id`): `Promise`\<`void`\>

Defined in: [Event/services/event-manager.service.ts:220](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-manager.service.ts#L220)

Delete an event

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IEventManagerService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventManagerService.md).[`deleteEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventManagerService.md#deleteevent)

***

### exportEvents()

> **exportEvents**(`filter?`, `format?`): `Promise`\<\{ `data`: `string`; `filename`: `string`; `mimeType`: `string`; \}\>

Defined in: [Event/services/event-manager.service.ts:557](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-manager.service.ts#L557)

Export events

#### Parameters

##### filter?

[`EventFilter`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/EventFilter.md)

##### format?

`"ics"` | `"csv"` | `"json"`

#### Returns

`Promise`\<\{ `data`: `string`; `filename`: `string`; `mimeType`: `string`; \}\>

#### Implementation of

[`IEventManagerService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventManagerService.md).[`exportEvents`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventManagerService.md#exportevents)

***

### filterEvents()

> **filterEvents**(`filter`): `Promise`\<[`CalendarEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CalendarEvent.md)[]\>

Defined in: [Event/services/event-manager.service.ts:269](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-manager.service.ts#L269)

Filter events

#### Parameters

##### filter

[`EventFilter`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/EventFilter.md)

#### Returns

`Promise`\<[`CalendarEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CalendarEvent.md)[]\>

***

### getAllEvents()

> **getAllEvents**(): `Promise`\<[`CalendarEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CalendarEvent.md)[]\>

Defined in: [Event/services/event-manager.service.ts:139](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-manager.service.ts#L139)

Get all events

#### Returns

`Promise`\<[`CalendarEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CalendarEvent.md)[]\>

#### Implementation of

[`IEventManagerService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventManagerService.md).[`getAllEvents`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventManagerService.md#getallevents)

***

### getConfig()

> **getConfig**(): [`EventManagerConfig`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/EventManagerConfig.md)

Defined in: [Event/services/event-manager.service.ts:367](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-manager.service.ts#L367)

Get current configuration

#### Returns

[`EventManagerConfig`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/EventManagerConfig.md)

***

### getEventById()

> **getEventById**(`id`): `Promise`\<[`CalendarEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CalendarEvent.md) \| `null`\>

Defined in: [Event/services/event-manager.service.ts:150](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-manager.service.ts#L150)

Get event by ID

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`CalendarEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CalendarEvent.md) \| `null`\>

#### Implementation of

[`IEventManagerService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventManagerService.md).[`getEventById`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventManagerService.md#geteventbyid)

***

### getEventConflicts()

> **getEventConflicts**(`_eventId`): `Promise`\<`any`[]\>

Defined in: [Event/services/event-manager.service.ts:593](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-manager.service.ts#L593)

Get event conflicts

#### Parameters

##### \_eventId

`string`

#### Returns

`Promise`\<`any`[]\>

#### Implementation of

[`IEventManagerService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventManagerService.md).[`getEventConflicts`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventManagerService.md#geteventconflicts)

***

### getEvents()

> **getEvents**(): `object`

Defined in: [Event/services/event-manager.service.ts:353](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-manager.service.ts#L353)

Get the events object for external access

#### Returns

`object`

##### bulkOperationCompleted

> **bulkOperationCompleted**: `EventEmitter`\<\{ `count`: `number`; `operation`: `string`; \}\>

##### categoryAdded

> **categoryAdded**: `EventEmitter`\<`string`\>

##### conflictDetected

> **conflictDetected**: `EventEmitter`\<`any`\>

##### conflictResolved

> **conflictResolved**: `EventEmitter`\<`any`\>

##### errorOccurred

> **errorOccurred**: `EventEmitter`\<`Error`\>

##### eventCreated

> **eventCreated**: `EventEmitter`\<[`CalendarEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CalendarEvent.md)\>

##### eventDeleted

> **eventDeleted**: `EventEmitter`\<\{ `event`: [`CalendarEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CalendarEvent.md); `eventId`: `string`; \}\>

##### eventDeselected

> **eventDeselected**: `EventEmitter`\<`void`\>

##### eventSelected

> **eventSelected**: `EventEmitter`\<[`CalendarEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CalendarEvent.md)\>

##### eventsLoaded

> **eventsLoaded**: `EventEmitter`\<[`CalendarEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CalendarEvent.md)[]\>

##### eventUpdated

> **eventUpdated**: `EventEmitter`\<\{ `event`: [`CalendarEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CalendarEvent.md); `oldEvent`: [`CalendarEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CalendarEvent.md); \}\>

##### filterChanged

> **filterChanged**: `EventEmitter`\<[`EventFilter`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/EventFilter.md)\>

##### loadingChanged

> **loadingChanged**: `EventEmitter`\<`boolean`\>

##### recurrenceCreated

> **recurrenceCreated**: `EventEmitter`\<[`CalendarEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CalendarEvent.md)\>

##### reminderScheduled

> **reminderScheduled**: `EventEmitter`\<\{ `eventId`: `string`; `reminder`: `any`; \}\>

##### searchPerformed

> **searchPerformed**: `EventEmitter`\<\{ `query`: `string`; `results`: [`CalendarEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CalendarEvent.md)[]; \}\>

##### sortChanged

> **sortChanged**: `EventEmitter`\<[`EventSort`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/EventSort.md)\>

##### statisticsUpdated

> **statisticsUpdated**: `EventEmitter`\<`any`\>

##### syncCompleted

> **syncCompleted**: `EventEmitter`\<\{ `providerId`: `string`; `results`: `any`; \}\>

##### syncFailed

> **syncFailed**: `EventEmitter`\<\{ `error`: `string`; `providerId`: `string`; \}\>

##### syncStarted

> **syncStarted**: `EventEmitter`\<\{ `providerId`: `string`; \}\>

##### tagAdded

> **tagAdded**: `EventEmitter`\<`string`\>

##### validationFailed

> **validationFailed**: `EventEmitter`\<[`EventValidationResult`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/EventValidationResult.md)\>

***

### getEventsForDate()

> **getEventsForDate**(`date`): `Promise`\<[`CalendarEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CalendarEvent.md)[]\>

Defined in: [Event/services/event-manager.service.ts:433](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-manager.service.ts#L433)

Get events for specific date

#### Parameters

##### date

`Date`

#### Returns

`Promise`\<[`CalendarEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CalendarEvent.md)[]\>

#### Implementation of

[`IEventManagerService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventManagerService.md).[`getEventsForDate`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventManagerService.md#geteventsfordate)

***

### getEventsForDateRange()

> **getEventsForDateRange**(`start`, `end`): `Promise`\<[`CalendarEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CalendarEvent.md)[]\>

Defined in: [Event/services/event-manager.service.ts:426](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-manager.service.ts#L426)

Get events for date range

#### Parameters

##### start

`Date`

##### end

`Date`

#### Returns

`Promise`\<[`CalendarEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CalendarEvent.md)[]\>

#### Implementation of

[`IEventManagerService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventManagerService.md).[`getEventsForDateRange`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventManagerService.md#geteventsfordaterange)

***

### getOverdueEvents()

> **getOverdueEvents**(): `Promise`\<[`CalendarEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CalendarEvent.md)[]\>

Defined in: [Event/services/event-manager.service.ts:442](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-manager.service.ts#L442)

Get overdue events

#### Returns

`Promise`\<[`CalendarEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CalendarEvent.md)[]\>

#### Implementation of

[`IEventManagerService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventManagerService.md).[`getOverdueEvents`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventManagerService.md#getoverdueevents)

***

### getStatistics()

> **getStatistics**(`dateRange?`): `Promise`\<`any`\>

Defined in: [Event/services/event-manager.service.ts:452](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-manager.service.ts#L452)

Get event statistics

#### Parameters

##### dateRange?

###### end

`Date`

###### start

`Date`

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`IEventManagerService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventManagerService.md).[`getStatistics`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventManagerService.md#getstatistics)

***

### getStatus()

> **getStatus**(): `object`

Defined in: [Event/services/event-manager.service.ts:631](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-manager.service.ts#L631)

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

#### Implementation of

[`IEventManagerService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventManagerService.md).[`getStatus`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventManagerService.md#getstatus)

***

### getUpcomingEvents()

> **getUpcomingEvents**(`limit`): `Promise`\<[`CalendarEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CalendarEvent.md)[]\>

Defined in: [Event/services/event-manager.service.ts:295](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-manager.service.ts#L295)

Get upcoming events

#### Parameters

##### limit

`number` = `10`

#### Returns

`Promise`\<[`CalendarEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CalendarEvent.md)[]\>

#### Implementation of

[`IEventManagerService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventManagerService.md).[`getUpcomingEvents`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventManagerService.md#getupcomingevents)

***

### importEvents()

> **importEvents**(`events`, `options?`): `Promise`\<\{ `errors`: `string`[]; `imported`: `number`; `skipped`: `number`; \}\>

Defined in: [Event/services/event-manager.service.ts:479](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-manager.service.ts#L479)

Import events

#### Parameters

##### events

[`CalendarEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CalendarEvent.md)[]

##### options?

###### merge?

`boolean`

###### skipDuplicates?

`boolean`

#### Returns

`Promise`\<\{ `errors`: `string`[]; `imported`: `number`; `skipped`: `number`; \}\>

#### Implementation of

[`IEventManagerService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventManagerService.md).[`importEvents`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventManagerService.md#importevents)

***

### initialize()

> **initialize**(`config`): `Promise`\<`void`\>

Defined in: [Event/services/event-manager.service.ts:80](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-manager.service.ts#L80)

Initialize the event manager

#### Parameters

##### config

[`EventManagerConfig`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/EventManagerConfig.md) = `{}`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IEventManagerService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventManagerService.md).[`initialize`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventManagerService.md#initialize)

***

### initializeEvents()

> **initializeEvents**(): `object`

Defined in: [Event/services/event-manager.service.ts:672](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-manager.service.ts#L672)

Initialize event emitters

#### Returns

`object`

##### bulkOperationCompleted

> **bulkOperationCompleted**: `EventEmitter`\<\{ `count`: `number`; `operation`: `string`; \}\>

##### errorOccurred

> **errorOccurred**: `EventEmitter`\<`Error`\>

##### eventCreated

> **eventCreated**: `EventEmitter`\<[`CalendarEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CalendarEvent.md)\>

##### eventDeleted

> **eventDeleted**: `EventEmitter`\<\{ `event`: [`CalendarEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CalendarEvent.md); `eventId`: `string`; \}\>

##### eventUpdated

> **eventUpdated**: `EventEmitter`\<\{ `event`: [`CalendarEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CalendarEvent.md); `oldEvent`: [`CalendarEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CalendarEvent.md); \}\>

##### validationFailed

> **validationFailed**: `EventEmitter`\<[`EventValidationResult`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/EventValidationResult.md)\>

#### Implementation of

[`IEventManagerService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventManagerService.md).[`initializeEvents`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventManagerService.md#initializeevents)

***

### isInitialized()

> **isInitialized**(): `boolean`

Defined in: [Event/services/event-manager.service.ts:360](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-manager.service.ts#L360)

Check if the service is initialized

#### Returns

`boolean`

***

### onError()

> **onError**(`callback`): () => `void`

Defined in: [Event/services/event-manager.service.ts:626](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-manager.service.ts#L626)

Subscribe to error events

#### Parameters

##### callback

(`error`) => `void`

#### Returns

> (): `void`

##### Returns

`void`

#### Implementation of

[`IEventManagerService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventManagerService.md).[`onError`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventManagerService.md#onerror)

***

### onEventCreated()

> **onEventCreated**(`callback`): () => `void`

Defined in: [Event/services/event-manager.service.ts:604](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-manager.service.ts#L604)

Subscribe to event changes

#### Parameters

##### callback

(`event`) => `void`

#### Returns

> (): `void`

##### Returns

`void`

#### Implementation of

[`IEventManagerService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventManagerService.md).[`onEventCreated`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventManagerService.md#oneventcreated)

***

### onEventDeleted()

> **onEventDeleted**(`callback`): () => `void`

Defined in: [Event/services/event-manager.service.ts:615](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-manager.service.ts#L615)

#### Parameters

##### callback

(`eventId`) => `void`

#### Returns

> (): `void`

##### Returns

`void`

#### Implementation of

[`IEventManagerService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventManagerService.md).[`onEventDeleted`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventManagerService.md#oneventdeleted)

***

### onEventUpdated()

> **onEventUpdated**(`callback`): () => `void`

Defined in: [Event/services/event-manager.service.ts:608](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-manager.service.ts#L608)

#### Parameters

##### callback

(`event`, `oldEvent`) => `void`

#### Returns

> (): `void`

##### Returns

`void`

#### Implementation of

[`IEventManagerService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventManagerService.md).[`onEventUpdated`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventManagerService.md#oneventupdated)

***

### onValidationFailed()

> **onValidationFailed**(`callback`): () => `void`

Defined in: [Event/services/event-manager.service.ts:622](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-manager.service.ts#L622)

Subscribe to validation events

#### Parameters

##### callback

(`result`) => `void`

#### Returns

> (): `void`

##### Returns

`void`

#### Implementation of

[`IEventManagerService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventManagerService.md).[`onValidationFailed`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventManagerService.md#onvalidationfailed)

***

### queryEvents()

> **queryEvents**(`filter?`, `sort?`, `page?`, `pageSize?`): `Promise`\<[`EventResults`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/EventResults.md)\>

Defined in: [Event/services/event-manager.service.ts:161](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-manager.service.ts#L161)

Query events with filters and pagination

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

`Promise`\<[`EventResults`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/EventResults.md)\>

#### Implementation of

[`IEventManagerService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventManagerService.md).[`queryEvents`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventManagerService.md#queryevents)

***

### resolveEventConflict()

> **resolveEventConflict**(`_conflictId`, `resolution`): `Promise`\<`void`\>

Defined in: [Event/services/event-manager.service.ts:598](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-manager.service.ts#L598)

Resolve event conflict

#### Parameters

##### \_conflictId

`string`

##### resolution

`any`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IEventManagerService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventManagerService.md).[`resolveEventConflict`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventManagerService.md#resolveeventconflict)

***

### restore()

> **restore**(`backupData`): `Promise`\<`void`\>

Defined in: [Event/services/event-manager.service.ts:657](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-manager.service.ts#L657)

Restore from backup

#### Parameters

##### backupData

`string`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IEventManagerService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventManagerService.md).[`restore`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventManagerService.md#restore)

***

### searchEvents()

> **searchEvents**(`query`, `filters?`): `Promise`\<[`CalendarEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CalendarEvent.md)[]\>

Defined in: [Event/services/event-manager.service.ts:237](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-manager.service.ts#L237)

Search events

#### Parameters

##### query

`string`

##### filters?

[`EventFilter`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/EventFilter.md)

#### Returns

`Promise`\<[`CalendarEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CalendarEvent.md)[]\>

#### Implementation of

[`IEventManagerService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventManagerService.md).[`searchEvents`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventManagerService.md#searchevents)

***

### sortEvents()

> **sortEvents**(`sort`): `Promise`\<[`CalendarEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CalendarEvent.md)[]\>

Defined in: [Event/services/event-manager.service.ts:282](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-manager.service.ts#L282)

Sort events

#### Parameters

##### sort

[`EventSort`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/EventSort.md)

#### Returns

`Promise`\<[`CalendarEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CalendarEvent.md)[]\>

***

### updateEvent()

> **updateEvent**(`input`): `Promise`\<[`CalendarEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CalendarEvent.md)\>

Defined in: [Event/services/event-manager.service.ts:198](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-manager.service.ts#L198)

Update an event

#### Parameters

##### input

[`UpdateEventInput`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/UpdateEventInput.md)

#### Returns

`Promise`\<[`CalendarEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CalendarEvent.md)\>

#### Implementation of

[`IEventManagerService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventManagerService.md).[`updateEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventManagerService.md#updateevent)

***

### validateEvent()

> **validateEvent**(`input`): `Promise`\<[`EventValidationResult`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/EventValidationResult.md)\>

Defined in: [Event/services/event-manager.service.ts:320](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-manager.service.ts#L320)

Validate event

#### Parameters

##### input

[`CreateEventInput`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CreateEventInput.md) | [`UpdateEventInput`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/UpdateEventInput.md)

#### Returns

`Promise`\<[`EventValidationResult`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/EventValidationResult.md)\>

#### Implementation of

[`IEventManagerService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventManagerService.md).[`validateEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventManagerService.md#validateevent)
