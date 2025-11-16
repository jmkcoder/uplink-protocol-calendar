[**@uplink-protocol/form-controller v0.3.1**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / CalendarEventSearchService

# Class: CalendarEventSearchService

Defined in: [Event/services/event-search.service.ts:16](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-search.service.ts#L16)

Implementation of event search service
Provides comprehensive search and filtering capabilities for events

## Implements

- [`IEventSearchService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventSearchService.md)

## Constructors

### Constructor

> **new CalendarEventSearchService**(): `EventSearchService`

#### Returns

`EventSearchService`

## Methods

### addToIndex()

> **addToIndex**(`event`): `Promise`\<`void`\>

Defined in: [Event/services/event-search.service.ts:42](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-search.service.ts#L42)

Add event to index

#### Parameters

##### event

[`CalendarEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CalendarEvent.md)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IEventSearchService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventSearchService.md).[`addToIndex`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventSearchService.md#addtoindex)

***

### buildIndex()

> **buildIndex**(`events`): `Promise`\<`void`\>

Defined in: [Event/services/event-search.service.ts:38](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-search.service.ts#L38)

Build search index

#### Parameters

##### events

[`CalendarEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CalendarEvent.md)[]

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IEventSearchService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventSearchService.md).[`buildIndex`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventSearchService.md#buildindex)

***

### clearIndex()

> **clearIndex**(): `Promise`\<`void`\>

Defined in: [Event/services/event-search.service.ts:293](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-search.service.ts#L293)

Clear search index

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IEventSearchService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventSearchService.md).[`clearIndex`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventSearchService.md#clearindex)

***

### deleteSavedSearch()

> **deleteSavedSearch**(`searchId`): `Promise`\<`void`\>

Defined in: [Event/services/event-search.service.ts:214](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-search.service.ts#L214)

Delete saved search

#### Parameters

##### searchId

`string`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IEventSearchService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventSearchService.md).[`deleteSavedSearch`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventSearchService.md#deletesavedsearch)

***

### executeSavedSearch()

> **executeSavedSearch**(`searchId`): `Promise`\<[`SearchResults`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/SearchResults.md)\>

Defined in: [Event/services/event-search.service.ts:219](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-search.service.ts#L219)

Execute saved search

#### Parameters

##### searchId

`string`

#### Returns

`Promise`\<[`SearchResults`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/SearchResults.md)\>

#### Implementation of

[`IEventSearchService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventSearchService.md).[`executeSavedSearch`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventSearchService.md#executesavedsearch)

***

### exportSearchResults()

> **exportSearchResults**(`results`, `format`): `Promise`\<\{ `data`: `string`; `filename`: `string`; `mimeType`: `string`; \}\>

Defined in: [Event/services/event-search.service.ts:282](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-search.service.ts#L282)

Export search results

#### Parameters

##### results

[`SearchResults`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/SearchResults.md)

##### format

`string`

#### Returns

`Promise`\<\{ `data`: `string`; `filename`: `string`; `mimeType`: `string`; \}\>

#### Implementation of

[`IEventSearchService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventSearchService.md).[`exportSearchResults`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventSearchService.md#exportsearchresults)

***

### getAnalytics()

> **getAnalytics**(): `Promise`\<`any`\>

Defined in: [Event/services/event-search.service.ts:232](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-search.service.ts#L232)

Get search analytics

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`IEventSearchService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventSearchService.md).[`getAnalytics`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventSearchService.md#getanalytics)

***

### getFacets()

> **getFacets**(`_query?`): `Promise`\<[`SearchFacets`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/SearchFacets.md)\>

Defined in: [Event/services/event-search.service.ts:157](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-search.service.ts#L157)

Get search facets

#### Parameters

##### \_query?

[`SearchQuery`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/SearchQuery.md)

#### Returns

`Promise`\<[`SearchFacets`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/SearchFacets.md)\>

#### Implementation of

[`IEventSearchService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventSearchService.md).[`getFacets`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventSearchService.md#getfacets)

***

### getIndexStats()

> **getIndexStats**(): `Promise`\<\{ `health`: `"good"` \| `"degraded"` \| `"poor"`; `indexSize`: `number`; `lastUpdated`: `Date`; `totalEvents`: `number`; \}\>

Defined in: [Event/services/event-search.service.ts:297](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-search.service.ts#L297)

Get index statistics

#### Returns

`Promise`\<\{ `health`: `"good"` \| `"degraded"` \| `"poor"`; `indexSize`: `number`; `lastUpdated`: `Date`; `totalEvents`: `number`; \}\>

#### Implementation of

[`IEventSearchService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventSearchService.md).[`getIndexStats`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventSearchService.md#getindexstats)

***

### getSavedSearches()

> **getSavedSearches**(`userId?`): `Promise`\<[`SavedSearch`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/SavedSearch.md)[]\>

Defined in: [Event/services/event-search.service.ts:207](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-search.service.ts#L207)

Get saved searches

#### Parameters

##### userId?

`string`

#### Returns

`Promise`\<[`SavedSearch`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/SavedSearch.md)[]\>

#### Implementation of

[`IEventSearchService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventSearchService.md).[`getSavedSearches`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventSearchService.md#getsavedsearches)

***

### getSearchAnalytics()

> **getSearchAnalytics**(): `Promise`\<\{ `avgSearchTime`: `number`; `noResultsRate`: `number`; `topQueries`: `object`[]; `totalSearches`: `number`; \}\>

Defined in: [Event/services/event-search.service.ts:241](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-search.service.ts#L241)

Get search analytics (alternative method name)

#### Returns

`Promise`\<\{ `avgSearchTime`: `number`; `noResultsRate`: `number`; `topQueries`: `object`[]; `totalSearches`: `number`; \}\>

#### Implementation of

[`IEventSearchService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventSearchService.md).[`getSearchAnalytics`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventSearchService.md#getsearchanalytics)

***

### getSuggestions()

> **getSuggestions**(`partialText`, `limit`): `Promise`\<`string`[]\>

Defined in: [Event/services/event-search.service.ts:136](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-search.service.ts#L136)

Get search suggestions

#### Parameters

##### partialText

`string`

##### limit

`number` = `5`

#### Returns

`Promise`\<`string`[]\>

#### Implementation of

[`IEventSearchService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventSearchService.md).[`getSuggestions`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventSearchService.md#getsuggestions)

***

### initialize()

> **initialize**(`config`): `Promise`\<`void`\>

Defined in: [Event/services/event-search.service.ts:34](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-search.service.ts#L34)

Initialize search service

#### Parameters

##### config

[`SearchIndexConfig`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/SearchIndexConfig.md)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IEventSearchService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventSearchService.md).[`initialize`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventSearchService.md#initialize)

***

### quickSearch()

> **quickSearch**(`text`, `limit`): `Promise`\<[`SearchResultItem`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/SearchResultItem.md)[]\>

Defined in: [Event/services/event-search.service.ts:131](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-search.service.ts#L131)

Quick text search

#### Parameters

##### text

`string`

##### limit

`number` = `10`

#### Returns

`Promise`\<[`SearchResultItem`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/SearchResultItem.md)[]\>

#### Implementation of

[`IEventSearchService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventSearchService.md).[`quickSearch`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventSearchService.md#quicksearch)

***

### rebuildIndex()

> **rebuildIndex**(`events?`): `Promise`\<`void`\>

Defined in: [Event/services/event-search.service.ts:275](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-search.service.ts#L275)

Rebuild search index

#### Parameters

##### events?

[`CalendarEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CalendarEvent.md)[]

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IEventSearchService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventSearchService.md).[`rebuildIndex`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventSearchService.md#rebuildindex)

***

### removeFromIndex()

> **removeFromIndex**(`eventId`): `Promise`\<`void`\>

Defined in: [Event/services/event-search.service.ts:55](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-search.service.ts#L55)

Remove event from index

#### Parameters

##### eventId

`string`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IEventSearchService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventSearchService.md).[`removeFromIndex`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventSearchService.md#removefromindex)

***

### saveSearch()

> **saveSearch**(`name`, `query`, `userId`): `Promise`\<[`SavedSearch`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/SavedSearch.md)\>

Defined in: [Event/services/event-search.service.ts:191](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-search.service.ts#L191)

Save search query

#### Parameters

##### name

`string`

##### query

[`SearchQuery`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/SearchQuery.md)

##### userId

`string`

#### Returns

`Promise`\<[`SavedSearch`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/SavedSearch.md)\>

#### Implementation of

[`IEventSearchService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventSearchService.md).[`saveSearch`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventSearchService.md#savesearch)

***

### search()

> **search**(`query`, `page`, `pageSize`): `Promise`\<[`SearchResults`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/SearchResults.md)\>

Defined in: [Event/services/event-search.service.ts:59](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-search.service.ts#L59)

Search events

#### Parameters

##### query

[`SearchQuery`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/SearchQuery.md)

##### page

`number` = `1`

##### pageSize

`number` = `20`

#### Returns

`Promise`\<[`SearchResults`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/SearchResults.md)\>

#### Implementation of

[`IEventSearchService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventSearchService.md).[`search`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventSearchService.md#search)

***

### updateInIndex()

> **updateInIndex**(`event`): `Promise`\<`void`\>

Defined in: [Event/services/event-search.service.ts:51](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-search.service.ts#L51)

Update event in index

#### Parameters

##### event

[`CalendarEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CalendarEvent.md)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IEventSearchService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventSearchService.md).[`updateInIndex`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventSearchService.md#updateinindex)
