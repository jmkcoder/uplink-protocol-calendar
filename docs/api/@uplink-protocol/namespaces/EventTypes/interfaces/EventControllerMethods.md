[**@uplink-protocol/form-controller v0.3.1**](../../../../README.md)

***

[@uplink-protocol/form-controller](../../../../globals.md) / [EventTypes](../README.md) / EventControllerMethods

# Interface: EventControllerMethods

Defined in: [Event/types/event-controller.types.ts:96](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L96)

Event Controller Methods - Available operations

## Properties

### addCategory()

> **addCategory**: (`category`) => `Promise`\<`void`\>

Defined in: [Event/types/event-controller.types.ts:147](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L147)

#### Parameters

##### category

`string`

#### Returns

`Promise`\<`void`\>

***

### addTag()

> **addTag**: (`tag`) => `Promise`\<`void`\>

Defined in: [Event/types/event-controller.types.ts:150](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L150)

#### Parameters

##### tag

`string`

#### Returns

`Promise`\<`void`\>

***

### backup()

> **backup**: () => `Promise`\<`string`\>

Defined in: [Event/types/event-controller.types.ts:177](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L177)

#### Returns

`Promise`\<`string`\>

***

### bulkCreateEvents()

> **bulkCreateEvents**: (`inputs`) => `Promise`\<[`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md)[]\>

Defined in: [Event/types/event-controller.types.ts:119](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L119)

#### Parameters

##### inputs

[`CreateEventInput`](../../EventInterfaces/interfaces/CreateEventInput.md)[]

#### Returns

`Promise`\<[`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md)[]\>

***

### bulkDeleteEvents()

> **bulkDeleteEvents**: (`ids`) => `Promise`\<`void`\>

Defined in: [Event/types/event-controller.types.ts:121](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L121)

#### Parameters

##### ids

`string`[]

#### Returns

`Promise`\<`void`\>

***

### bulkUpdateEvents()

> **bulkUpdateEvents**: (`inputs`) => `Promise`\<[`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md)[]\>

Defined in: [Event/types/event-controller.types.ts:120](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L120)

#### Parameters

##### inputs

[`UpdateEventInput`](../../EventInterfaces/interfaces/UpdateEventInput.md)[]

#### Returns

`Promise`\<[`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md)[]\>

***

### cancelEvent()

> **cancelEvent**: (`id`, `reason?`) => `Promise`\<[`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md)\>

Defined in: [Event/types/event-controller.types.ts:131](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L131)

#### Parameters

##### id

`string`

##### reason?

`string`

#### Returns

`Promise`\<[`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md)\>

***

### cancelReminder()

> **cancelReminder**: (`eventId`, `reminderId`) => `Promise`\<`void`\>

Defined in: [Event/types/event-controller.types.ts:168](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L168)

#### Parameters

##### eventId

`string`

##### reminderId

`string`

#### Returns

`Promise`\<`void`\>

***

### checkConflicts()

> **checkConflicts**: (`event`) => `Promise`\<`any`[]\>

Defined in: [Event/types/event-controller.types.ts:141](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L141)

#### Parameters

##### event

[`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md)

#### Returns

`Promise`\<`any`[]\>

***

### clearAllEvents()

> **clearAllEvents**: () => `Promise`\<`void`\>

Defined in: [Event/types/event-controller.types.ts:176](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L176)

#### Returns

`Promise`\<`void`\>

***

### completeEvent()

> **completeEvent**: (`id`) => `Promise`\<[`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md)\>

Defined in: [Event/types/event-controller.types.ts:132](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L132)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md)\>

***

### configureSyncProvider()

> **configureSyncProvider**: (`config`) => `Promise`\<`void`\>

Defined in: [Event/types/event-controller.types.ts:164](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L164)

#### Parameters

##### config

`any`

#### Returns

`Promise`\<`void`\>

***

### createEvent()

> **createEvent**: (`input`) => `Promise`\<[`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md)\>

Defined in: [Event/types/event-controller.types.ts:98](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L98)

#### Parameters

##### input

[`CreateEventInput`](../../EventInterfaces/interfaces/CreateEventInput.md)

#### Returns

`Promise`\<[`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md)\>

***

### createRecurringEvent()

> **createRecurringEvent**: (`input`, `recurrence`) => `Promise`\<[`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md)\>

Defined in: [Event/types/event-controller.types.ts:135](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L135)

#### Parameters

##### input

[`CreateEventInput`](../../EventInterfaces/interfaces/CreateEventInput.md)

##### recurrence

`any`

#### Returns

`Promise`\<[`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md)\>

***

### deleteEvent()

> **deleteEvent**: (`id`) => `Promise`\<`void`\>

Defined in: [Event/types/event-controller.types.ts:100](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L100)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`void`\>

***

### deleteRecurringEvent()

> **deleteRecurringEvent**: (`id`, `scope`) => `Promise`\<`void`\>

Defined in: [Event/types/event-controller.types.ts:137](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L137)

#### Parameters

##### id

`string`

##### scope

`"future"` | `"this"` | `"all"`

#### Returns

`Promise`\<`void`\>

***

### duplicateEvent()

> **duplicateEvent**: (`id`, `newDate?`) => `Promise`\<[`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md)\>

Defined in: [Event/types/event-controller.types.ts:128](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L128)

#### Parameters

##### id

`string`

##### newDate?

`Date`

#### Returns

`Promise`\<[`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md)\>

***

### executeSavedSearch()

> **executeSavedSearch**: (`searchId`) => `Promise`\<[`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md)[]\>

Defined in: [Event/types/event-controller.types.ts:173](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L173)

#### Parameters

##### searchId

`string`

#### Returns

`Promise`\<[`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md)[]\>

***

### exportEvents()

> **exportEvents**: (`filter?`, `format?`) => `Promise`\<\{ `data`: `string`; `filename`: `string`; `mimeType`: `string`; \}\>

Defined in: [Event/types/event-controller.types.ts:155](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L155)

#### Parameters

##### filter?

[`EventFilter`](../../EventInterfaces/interfaces/EventFilter.md)

##### format?

`"ics"` | `"csv"` | `"json"`

#### Returns

`Promise`\<\{ `data`: `string`; `filename`: `string`; `mimeType`: `string`; \}\>

***

### filterEvents()

> **filterEvents**: (`filter`) => `Promise`\<[`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md)[]\>

Defined in: [Event/types/event-controller.types.ts:106](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L106)

#### Parameters

##### filter

[`EventFilter`](../../EventInterfaces/interfaces/EventFilter.md)

#### Returns

`Promise`\<[`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md)[]\>

***

### findAlternativeTimeSlots()

> **findAlternativeTimeSlots**: (`event`, `options`) => `Promise`\<`any`[]\>

Defined in: [Event/types/event-controller.types.ts:143](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L143)

#### Parameters

##### event

[`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md)

##### options

`any`

#### Returns

`Promise`\<`any`[]\>

***

### getAllEvents()

> **getAllEvents**: () => `Promise`\<[`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md)[]\>

Defined in: [Event/types/event-controller.types.ts:102](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L102)

#### Returns

`Promise`\<[`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md)[]\>

***

### getCategories()

> **getCategories**: () => `Promise`\<`string`[]\>

Defined in: [Event/types/event-controller.types.ts:146](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L146)

#### Returns

`Promise`\<`string`[]\>

***

### getEventAnalytics()

> **getEventAnalytics**: (`dateRange`) => `Promise`\<`any`\>

Defined in: [Event/types/event-controller.types.ts:159](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L159)

#### Parameters

##### dateRange

###### end

`Date`

###### start

`Date`

#### Returns

`Promise`\<`any`\>

***

### getEventById()

> **getEventById**: (`id`) => `Promise`\<[`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md) \| `null`\>

Defined in: [Event/types/event-controller.types.ts:101](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L101)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md) \| `null`\>

***

### getEventsForDate()

> **getEventsForDate**: (`date`) => `Promise`\<[`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md)[]\>

Defined in: [Event/types/event-controller.types.ts:111](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L111)

#### Parameters

##### date

`Date`

#### Returns

`Promise`\<[`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md)[]\>

***

### getEventsForDateRange()

> **getEventsForDateRange**: (`start`, `end`) => `Promise`\<[`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md)[]\>

Defined in: [Event/types/event-controller.types.ts:112](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L112)

#### Parameters

##### start

`Date`

##### end

`Date`

#### Returns

`Promise`\<[`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md)[]\>

***

### getEventsForMonth()

> **getEventsForMonth**: (`date`) => `Promise`\<[`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md)[]\>

Defined in: [Event/types/event-controller.types.ts:114](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L114)

#### Parameters

##### date

`Date`

#### Returns

`Promise`\<[`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md)[]\>

***

### getEventsForWeek()

> **getEventsForWeek**: (`date`) => `Promise`\<[`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md)[]\>

Defined in: [Event/types/event-controller.types.ts:113](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L113)

#### Parameters

##### date

`Date`

#### Returns

`Promise`\<[`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md)[]\>

***

### getHealth()

> **getHealth**: () => `Promise`\<\{ `details`: `any`; `status`: `string`; \}\>

Defined in: [Event/types/event-controller.types.ts:179](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L179)

#### Returns

`Promise`\<\{ `details`: `any`; `status`: `string`; \}\>

***

### getOverdueEvents()

> **getOverdueEvents**: () => `Promise`\<[`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md)[]\>

Defined in: [Event/types/event-controller.types.ts:116](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L116)

#### Returns

`Promise`\<[`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md)[]\>

***

### getRecurrenceOccurrences()

> **getRecurrenceOccurrences**: (`id`, `dateRange`) => `Promise`\<[`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md)[]\>

Defined in: [Event/types/event-controller.types.ts:138](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L138)

#### Parameters

##### id

`string`

##### dateRange

###### end

`Date`

###### start

`Date`

#### Returns

`Promise`\<[`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md)[]\>

***

### getSavedSearches()

> **getSavedSearches**: () => `Promise`\<`any`[]\>

Defined in: [Event/types/event-controller.types.ts:172](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L172)

#### Returns

`Promise`\<`any`[]\>

***

### getStatistics()

> **getStatistics**: (`dateRange?`) => `Promise`\<`any`\>

Defined in: [Event/types/event-controller.types.ts:158](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L158)

#### Parameters

##### dateRange?

###### end

`Date`

###### start

`Date`

#### Returns

`Promise`\<`any`\>

***

### getSyncStatus()

> **getSyncStatus**: () => `Promise`\<`any`\>

Defined in: [Event/types/event-controller.types.ts:163](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L163)

#### Returns

`Promise`\<`any`\>

***

### getTags()

> **getTags**: () => `Promise`\<`string`[]\>

Defined in: [Event/types/event-controller.types.ts:149](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L149)

#### Returns

`Promise`\<`string`[]\>

***

### getUpcomingEvents()

> **getUpcomingEvents**: (`limit?`) => `Promise`\<[`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md)[]\>

Defined in: [Event/types/event-controller.types.ts:115](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L115)

#### Parameters

##### limit?

`number`

#### Returns

`Promise`\<[`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md)[]\>

***

### importEvents()

> **importEvents**: (`events`, `options?`) => `Promise`\<\{ `errors`: `string`[]; `imported`: `number`; `skipped`: `number`; \}\>

Defined in: [Event/types/event-controller.types.ts:154](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L154)

#### Parameters

##### events

[`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md)[]

##### options?

`any`

#### Returns

`Promise`\<\{ `errors`: `string`[]; `imported`: `number`; `skipped`: `number`; \}\>

***

### moveEvent()

> **moveEvent**: (`id`, `newStart`, `newEnd?`) => `Promise`\<[`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md)\>

Defined in: [Event/types/event-controller.types.ts:129](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L129)

#### Parameters

##### id

`string`

##### newStart

`Date`

##### newEnd?

`Date`

#### Returns

`Promise`\<[`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md)\>

***

### queryEvents()

> **queryEvents**: (`filter?`, `sort?`, `page?`, `pageSize?`) => `Promise`\<[`EventResults`](../../EventInterfaces/interfaces/EventResults.md)\>

Defined in: [Event/types/event-controller.types.ts:105](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L105)

#### Parameters

##### filter?

[`EventFilter`](../../EventInterfaces/interfaces/EventFilter.md)

##### sort?

[`EventSort`](../../EventInterfaces/interfaces/EventSort.md)

##### page?

`number`

##### pageSize?

`number`

#### Returns

`Promise`\<[`EventResults`](../../EventInterfaces/interfaces/EventResults.md)\>

***

### removeCategory()

> **removeCategory**: (`category`) => `Promise`\<`void`\>

Defined in: [Event/types/event-controller.types.ts:148](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L148)

#### Parameters

##### category

`string`

#### Returns

`Promise`\<`void`\>

***

### removeTag()

> **removeTag**: (`tag`) => `Promise`\<`void`\>

Defined in: [Event/types/event-controller.types.ts:151](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L151)

#### Parameters

##### tag

`string`

#### Returns

`Promise`\<`void`\>

***

### rescheduleEvent()

> **rescheduleEvent**: (`id`, `newDateTime`) => `Promise`\<[`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md)\>

Defined in: [Event/types/event-controller.types.ts:130](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L130)

#### Parameters

##### id

`string`

##### newDateTime

###### end

`Date`

###### start

`Date`

#### Returns

`Promise`\<[`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md)\>

***

### resolveConflict()

> **resolveConflict**: (`conflictId`, `resolution`) => `Promise`\<`void`\>

Defined in: [Event/types/event-controller.types.ts:142](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L142)

#### Parameters

##### conflictId

`string`

##### resolution

`any`

#### Returns

`Promise`\<`void`\>

***

### restore()

> **restore**: (`backupData`) => `Promise`\<`void`\>

Defined in: [Event/types/event-controller.types.ts:178](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L178)

#### Parameters

##### backupData

`string`

#### Returns

`Promise`\<`void`\>

***

### saveSearch()

> **saveSearch**: (`name`, `query`) => `Promise`\<`void`\>

Defined in: [Event/types/event-controller.types.ts:171](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L171)

#### Parameters

##### name

`string`

##### query

`any`

#### Returns

`Promise`\<`void`\>

***

### scheduleReminder()

> **scheduleReminder**: (`eventId`, `reminder`) => `Promise`\<`void`\>

Defined in: [Event/types/event-controller.types.ts:167](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L167)

#### Parameters

##### eventId

`string`

##### reminder

`any`

#### Returns

`Promise`\<`void`\>

***

### searchEvents()

> **searchEvents**: (`query`, `filters?`) => `Promise`\<[`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md)[]\>

Defined in: [Event/types/event-controller.types.ts:108](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L108)

#### Parameters

##### query

`string`

##### filters?

[`EventFilter`](../../EventInterfaces/interfaces/EventFilter.md)

#### Returns

`Promise`\<[`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md)[]\>

***

### sortEvents()

> **sortEvents**: (`sort`) => `Promise`\<[`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md)[]\>

Defined in: [Event/types/event-controller.types.ts:107](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L107)

#### Parameters

##### sort

[`EventSort`](../../EventInterfaces/interfaces/EventSort.md)

#### Returns

`Promise`\<[`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md)[]\>

***

### syncWithProvider()

> **syncWithProvider**: (`providerId`) => `Promise`\<`void`\>

Defined in: [Event/types/event-controller.types.ts:162](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L162)

#### Parameters

##### providerId

`string`

#### Returns

`Promise`\<`void`\>

***

### updateEvent()

> **updateEvent**: (`input`) => `Promise`\<[`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md)\>

Defined in: [Event/types/event-controller.types.ts:99](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L99)

#### Parameters

##### input

[`UpdateEventInput`](../../EventInterfaces/interfaces/UpdateEventInput.md)

#### Returns

`Promise`\<[`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md)\>

***

### updateRecurringEvent()

> **updateRecurringEvent**: (`id`, `updates`, `scope`) => `Promise`\<[`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md)[]\>

Defined in: [Event/types/event-controller.types.ts:136](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L136)

#### Parameters

##### id

`string`

##### updates

`Partial`\<[`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md)\>

##### scope

`"future"` | `"this"` | `"all"`

#### Returns

`Promise`\<[`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md)[]\>

***

### validateEvent()

> **validateEvent**: (`input`) => `Promise`\<[`EventValidationResult`](../../EventInterfaces/interfaces/EventValidationResult.md)\>

Defined in: [Event/types/event-controller.types.ts:124](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L124)

#### Parameters

##### input

[`CreateEventInput`](../../EventInterfaces/interfaces/CreateEventInput.md) | [`UpdateEventInput`](../../EventInterfaces/interfaces/UpdateEventInput.md)

#### Returns

`Promise`\<[`EventValidationResult`](../../EventInterfaces/interfaces/EventValidationResult.md)\>

***

### validateEventConstraints()

> **validateEventConstraints**: (`event`) => `Promise`\<`boolean`\>

Defined in: [Event/types/event-controller.types.ts:125](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L125)

#### Parameters

##### event

[`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md)

#### Returns

`Promise`\<`boolean`\>
