[**@uplink-protocol/form-controller v0.3.1**](../../../../README.md)

***

[@uplink-protocol/form-controller](../../../../globals.md) / [EventTypes](../README.md) / EventControllerBindings

# Interface: EventControllerBindings

Defined in: [Event/types/event-controller.types.ts:22](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L22)

Event Controller Bindings - Reactive state management

## Properties

### allEvents

> **allEvents**: `object`

Defined in: [Event/types/event-controller.types.ts:27](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L27)

All events list

#### get()

> **get**: () => [`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md)[]

##### Returns

[`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md)[]

#### set()

> **set**: (`events`) => `void`

##### Parameters

###### events

[`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md)[]

##### Returns

`void`

***

### categories

> **categories**: `object`

Defined in: [Event/types/event-controller.types.ts:84](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L84)

Available categories

#### get()

> **get**: () => `string`[]

##### Returns

`string`[]

#### set()

> **set**: (`categories`) => `void`

##### Parameters

###### categories

`string`[]

##### Returns

`void`

***

### conflicts

> **conflicts**: `object`

Defined in: [Event/types/event-controller.types.ts:72](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L72)

Event conflicts

#### get()

> **get**: () => `any`[]

##### Returns

`any`[]

#### set()

> **set**: (`conflicts`) => `void`

##### Parameters

###### conflicts

`any`[]

##### Returns

`void`

***

### currentDateRange

> **currentDateRange**: `object`

Defined in: [Event/types/event-controller.types.ts:63](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L63)

Current date range

#### get()

> **get**: () => \{ `end`: `Date`; `start`: `Date`; \} \| `null`

##### Returns

\{ `end`: `Date`; `start`: `Date`; \} \| `null`

#### set()

> **set**: (`range`) => `void`

##### Parameters

###### range

\{ `end`: `Date`; `start`: `Date`; \} | `null`

##### Returns

`void`

***

### currentFilter

> **currentFilter**: `object`

Defined in: [Event/types/event-controller.types.ts:33](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L33)

Current filter

#### get()

> **get**: () => [`EventFilter`](../../EventInterfaces/interfaces/EventFilter.md) \| `null`

##### Returns

[`EventFilter`](../../EventInterfaces/interfaces/EventFilter.md) \| `null`

#### set()

> **set**: (`filter`) => `void`

##### Parameters

###### filter

[`EventFilter`](../../EventInterfaces/interfaces/EventFilter.md) | `null`

##### Returns

`void`

***

### currentPage

> **currentPage**: `object`

Defined in: [Event/types/event-controller.types.ts:54](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L54)

Current page

#### get()

> **get**: () => `number`

##### Returns

`number`

#### set()

> **set**: (`page`) => `void`

##### Parameters

###### page

`number`

##### Returns

`void`

***

### currentSort

> **currentSort**: `object`

Defined in: [Event/types/event-controller.types.ts:36](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L36)

Current sort

#### get()

> **get**: () => [`EventSort`](../../EventInterfaces/interfaces/EventSort.md) \| `null`

##### Returns

[`EventSort`](../../EventInterfaces/interfaces/EventSort.md) \| `null`

#### set()

> **set**: (`sort`) => `void`

##### Parameters

###### sort

[`EventSort`](../../EventInterfaces/interfaces/EventSort.md) | `null`

##### Returns

`void`

***

### dateRangeEvents

> **dateRangeEvents**: `object`

Defined in: [Event/types/event-controller.types.ts:60](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L60)

Events for current date range

#### get()

> **get**: () => [`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md)[]

##### Returns

[`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md)[]

#### set()

> **set**: (`events`) => `void`

##### Parameters

###### events

[`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md)[]

##### Returns

`void`

***

### error

> **error**: `object`

Defined in: [Event/types/event-controller.types.ts:48](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L48)

Error state

#### get()

> **get**: () => `string` \| `null`

##### Returns

`string` \| `null`

#### set()

> **set**: (`error`) => `void`

##### Parameters

###### error

`string` | `null`

##### Returns

`void`

***

### filteredEvents

> **filteredEvents**: `object`

Defined in: [Event/types/event-controller.types.ts:30](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L30)

Filtered events

#### get()

> **get**: () => [`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md)[]

##### Returns

[`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md)[]

#### set()

> **set**: (`events`) => `void`

##### Parameters

###### events

[`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md)[]

##### Returns

`void`

***

### isLoading

> **isLoading**: `object`

Defined in: [Event/types/event-controller.types.ts:45](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L45)

Loading state

#### get()

> **get**: () => `boolean`

##### Returns

`boolean`

#### set()

> **set**: (`loading`) => `void`

##### Parameters

###### loading

`boolean`

##### Returns

`void`

***

### lastSyncTime

> **lastSyncTime**: `object`

Defined in: [Event/types/event-controller.types.ts:81](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L81)

Last sync time

#### get()

> **get**: () => `Date` \| `null`

##### Returns

`Date` \| `null`

#### set()

> **set**: (`time`) => `void`

##### Parameters

###### time

`Date` | `null`

##### Returns

`void`

***

### overdueEvents

> **overdueEvents**: `object`

Defined in: [Event/types/event-controller.types.ts:69](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L69)

Overdue events

#### get()

> **get**: () => [`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md)[]

##### Returns

[`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md)[]

#### set()

> **set**: (`events`) => `void`

##### Parameters

###### events

[`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md)[]

##### Returns

`void`

***

### pageSize

> **pageSize**: `object`

Defined in: [Event/types/event-controller.types.ts:57](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L57)

Page size

#### get()

> **get**: () => `number`

##### Returns

`number`

#### set()

> **set**: (`size`) => `void`

##### Parameters

###### size

`number`

##### Returns

`void`

***

### searchQuery

> **searchQuery**: `object`

Defined in: [Event/types/event-controller.types.ts:39](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L39)

Search query

#### get()

> **get**: () => `string`

##### Returns

`string`

#### set()

> **set**: (`query`) => `void`

##### Parameters

###### query

`string`

##### Returns

`void`

***

### searchResults

> **searchResults**: `object`

Defined in: [Event/types/event-controller.types.ts:42](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L42)

Search results

#### get()

> **get**: () => [`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md)[]

##### Returns

[`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md)[]

#### set()

> **set**: (`results`) => `void`

##### Parameters

###### results

[`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md)[]

##### Returns

`void`

***

### selectedEvent

> **selectedEvent**: `object`

Defined in: [Event/types/event-controller.types.ts:24](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L24)

Currently selected event

#### get()

> **get**: () => [`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md) \| `null`

##### Returns

[`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md) \| `null`

#### set()

> **set**: (`event`) => `void`

##### Parameters

###### event

[`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md) | `null`

##### Returns

`void`

***

### statistics

> **statistics**: `object`

Defined in: [Event/types/event-controller.types.ts:90](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L90)

Statistics

#### get()

> **get**: () => `any`

##### Returns

`any`

#### set()

> **set**: (`stats`) => `void`

##### Parameters

###### stats

`any`

##### Returns

`void`

***

### syncStatus

> **syncStatus**: `object`

Defined in: [Event/types/event-controller.types.ts:78](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L78)

Sync status

#### get()

> **get**: () => `"error"` \| `"idle"` \| `"syncing"` \| `"success"`

##### Returns

`"error"` \| `"idle"` \| `"syncing"` \| `"success"`

#### set()

> **set**: (`status`) => `void`

##### Parameters

###### status

`"error"` | `"idle"` | `"syncing"` | `"success"`

##### Returns

`void`

***

### tags

> **tags**: `object`

Defined in: [Event/types/event-controller.types.ts:87](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L87)

Available tags

#### get()

> **get**: () => `string`[]

##### Returns

`string`[]

#### set()

> **set**: (`tags`) => `void`

##### Parameters

###### tags

`string`[]

##### Returns

`void`

***

### totalCount

> **totalCount**: `object`

Defined in: [Event/types/event-controller.types.ts:51](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L51)

Total event count

#### get()

> **get**: () => `number`

##### Returns

`number`

#### set()

> **set**: (`count`) => `void`

##### Parameters

###### count

`number`

##### Returns

`void`

***

### upcomingEvents

> **upcomingEvents**: `object`

Defined in: [Event/types/event-controller.types.ts:66](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L66)

Upcoming events

#### get()

> **get**: () => [`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md)[]

##### Returns

[`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md)[]

#### set()

> **set**: (`events`) => `void`

##### Parameters

###### events

[`CalendarEvent`](../../EventInterfaces/interfaces/CalendarEvent.md)[]

##### Returns

`void`

***

### validationErrors

> **validationErrors**: `object`

Defined in: [Event/types/event-controller.types.ts:75](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L75)

Validation errors

#### get()

> **get**: () => `string`[]

##### Returns

`string`[]

#### set()

> **set**: (`errors`) => `void`

##### Parameters

###### errors

`string`[]

##### Returns

`void`
