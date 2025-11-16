[**@uplink-protocol/form-controller v0.3.1**](../../../../README.md)

***

[@uplink-protocol/form-controller](../../../../globals.md) / [EventInterfaces](../README.md) / IEventSearchService

# Interface: IEventSearchService

Defined in: [Event/interfaces/event-search.interfaces.ts:185](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-search.interfaces.ts#L185)

Event search service interface

## Methods

### addToIndex()

> **addToIndex**(`event`): `Promise`\<`void`\>

Defined in: [Event/interfaces/event-search.interfaces.ts:199](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-search.interfaces.ts#L199)

Add event to index

#### Parameters

##### event

[`CalendarEvent`](CalendarEvent.md)

#### Returns

`Promise`\<`void`\>

***

### buildIndex()

> **buildIndex**(`events`): `Promise`\<`void`\>

Defined in: [Event/interfaces/event-search.interfaces.ts:194](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-search.interfaces.ts#L194)

Build search index

#### Parameters

##### events

[`CalendarEvent`](CalendarEvent.md)[]

#### Returns

`Promise`\<`void`\>

***

### clearIndex()

> **clearIndex**(): `Promise`\<`void`\>

Defined in: [Event/interfaces/event-search.interfaces.ts:273](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-search.interfaces.ts#L273)

Clear search index

#### Returns

`Promise`\<`void`\>

***

### deleteSavedSearch()

> **deleteSavedSearch**(`id`): `Promise`\<`void`\>

Defined in: [Event/interfaces/event-search.interfaces.ts:248](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-search.interfaces.ts#L248)

Delete saved search

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`void`\>

***

### executeSavedSearch()

> **executeSavedSearch**(`id`): `Promise`\<[`SearchResults`](SearchResults.md)\>

Defined in: [Event/interfaces/event-search.interfaces.ts:253](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-search.interfaces.ts#L253)

Execute saved search

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`SearchResults`](SearchResults.md)\>

***

### exportSearchResults()

> **exportSearchResults**(`results`, `format`): `Promise`\<\{ `data`: `string`; `filename`: `string`; \}\>

Defined in: [Event/interfaces/event-search.interfaces.ts:293](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-search.interfaces.ts#L293)

Export search results

#### Parameters

##### results

[`SearchResults`](SearchResults.md)

##### format

`"csv"` | `"json"` | `"xml"`

#### Returns

`Promise`\<\{ `data`: `string`; `filename`: `string`; \}\>

***

### getAnalytics()

> **getAnalytics**(`dateRange?`): `Promise`\<[`SearchAnalytics`](SearchAnalytics.md)\>

Defined in: [Event/interfaces/event-search.interfaces.ts:258](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-search.interfaces.ts#L258)

Get search analytics

#### Parameters

##### dateRange?

###### end

`Date`

###### start

`Date`

#### Returns

`Promise`\<[`SearchAnalytics`](SearchAnalytics.md)\>

***

### getFacets()

> **getFacets**(`query?`): `Promise`\<[`SearchFacets`](SearchFacets.md)\>

Defined in: [Event/interfaces/event-search.interfaces.ts:233](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-search.interfaces.ts#L233)

Get search facets

#### Parameters

##### query?

[`SearchQuery`](SearchQuery.md)

#### Returns

`Promise`\<[`SearchFacets`](SearchFacets.md)\>

***

### getIndexStats()

> **getIndexStats**(): `Promise`\<\{ `health`: `"good"` \| `"degraded"` \| `"poor"`; `indexSize`: `number`; `lastUpdated`: `Date`; `totalEvents`: `number`; \}\>

Defined in: [Event/interfaces/event-search.interfaces.ts:283](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-search.interfaces.ts#L283)

Get index statistics

#### Returns

`Promise`\<\{ `health`: `"good"` \| `"degraded"` \| `"poor"`; `indexSize`: `number`; `lastUpdated`: `Date`; `totalEvents`: `number`; \}\>

***

### getSavedSearches()

> **getSavedSearches**(`userId?`): `Promise`\<[`SavedSearch`](SavedSearch.md)[]\>

Defined in: [Event/interfaces/event-search.interfaces.ts:243](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-search.interfaces.ts#L243)

Get saved searches

#### Parameters

##### userId?

`string`

#### Returns

`Promise`\<[`SavedSearch`](SavedSearch.md)[]\>

***

### getSearchAnalytics()

> **getSearchAnalytics**(): `Promise`\<\{ `avgSearchTime`: `number`; `noResultsRate`: `number`; `topQueries`: `object`[]; `totalSearches`: `number`; \}\>

Defined in: [Event/interfaces/event-search.interfaces.ts:263](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-search.interfaces.ts#L263)

Get search analytics (alternative method name)

#### Returns

`Promise`\<\{ `avgSearchTime`: `number`; `noResultsRate`: `number`; `topQueries`: `object`[]; `totalSearches`: `number`; \}\>

***

### getSuggestions()

> **getSuggestions**(`partialText`, `limit?`): `Promise`\<`string`[]\>

Defined in: [Event/interfaces/event-search.interfaces.ts:228](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-search.interfaces.ts#L228)

Get search suggestions

#### Parameters

##### partialText

`string`

##### limit?

`number`

#### Returns

`Promise`\<`string`[]\>

***

### initialize()

> **initialize**(`config`): `Promise`\<`void`\>

Defined in: [Event/interfaces/event-search.interfaces.ts:189](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-search.interfaces.ts#L189)

Initialize search service

#### Parameters

##### config

[`SearchIndexConfig`](SearchIndexConfig.md)

#### Returns

`Promise`\<`void`\>

***

### quickSearch()

> **quickSearch**(`text`, `limit?`): `Promise`\<[`SearchResultItem`](SearchResultItem.md)[]\>

Defined in: [Event/interfaces/event-search.interfaces.ts:223](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-search.interfaces.ts#L223)

Quick text search

#### Parameters

##### text

`string`

##### limit?

`number`

#### Returns

`Promise`\<[`SearchResultItem`](SearchResultItem.md)[]\>

***

### rebuildIndex()

> **rebuildIndex**(`events?`): `Promise`\<`void`\>

Defined in: [Event/interfaces/event-search.interfaces.ts:278](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-search.interfaces.ts#L278)

Rebuild search index

#### Parameters

##### events?

[`CalendarEvent`](CalendarEvent.md)[]

#### Returns

`Promise`\<`void`\>

***

### removeFromIndex()

> **removeFromIndex**(`eventId`): `Promise`\<`void`\>

Defined in: [Event/interfaces/event-search.interfaces.ts:209](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-search.interfaces.ts#L209)

Remove event from index

#### Parameters

##### eventId

`string`

#### Returns

`Promise`\<`void`\>

***

### saveSearch()

> **saveSearch**(`name`, `query`, `userId`): `Promise`\<[`SavedSearch`](SavedSearch.md)\>

Defined in: [Event/interfaces/event-search.interfaces.ts:238](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-search.interfaces.ts#L238)

Save search query

#### Parameters

##### name

`string`

##### query

[`SearchQuery`](SearchQuery.md)

##### userId

`string`

#### Returns

`Promise`\<[`SavedSearch`](SavedSearch.md)\>

***

### search()

> **search**(`query`, `page?`, `pageSize?`): `Promise`\<[`SearchResults`](SearchResults.md)\>

Defined in: [Event/interfaces/event-search.interfaces.ts:214](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-search.interfaces.ts#L214)

Search events

#### Parameters

##### query

[`SearchQuery`](SearchQuery.md)

##### page?

`number`

##### pageSize?

`number`

#### Returns

`Promise`\<[`SearchResults`](SearchResults.md)\>

***

### updateInIndex()

> **updateInIndex**(`event`): `Promise`\<`void`\>

Defined in: [Event/interfaces/event-search.interfaces.ts:204](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-search.interfaces.ts#L204)

Update event in index

#### Parameters

##### event

[`CalendarEvent`](CalendarEvent.md)

#### Returns

`Promise`\<`void`\>
