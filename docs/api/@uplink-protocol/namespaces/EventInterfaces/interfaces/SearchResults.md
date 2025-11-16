[**@uplink-protocol/form-controller v0.3.1**](../../../../README.md)

***

[@uplink-protocol/form-controller](../../../../globals.md) / [EventInterfaces](../README.md) / SearchResults

# Interface: SearchResults

Defined in: [Event/interfaces/event-search.interfaces.ts:83](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-search.interfaces.ts#L83)

Search results

## Properties

### executionTime

> **executionTime**: `number`

Defined in: [Event/interfaces/event-search.interfaces.ts:93](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-search.interfaces.ts#L93)

Search execution time in milliseconds

***

### facets?

> `optional` **facets**: [`SearchFacets`](SearchFacets.md)

Defined in: [Event/interfaces/event-search.interfaces.ts:99](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-search.interfaces.ts#L99)

Faceted search results

***

### hasMore

> **hasMore**: `boolean`

Defined in: [Event/interfaces/event-search.interfaces.ts:91](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-search.interfaces.ts#L91)

Whether there are more results

***

### items

> **items**: [`SearchResultItem`](SearchResultItem.md)[]

Defined in: [Event/interfaces/event-search.interfaces.ts:85](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-search.interfaces.ts#L85)

Search result items

***

### query

> **query**: [`SearchQuery`](SearchQuery.md)

Defined in: [Event/interfaces/event-search.interfaces.ts:95](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-search.interfaces.ts#L95)

Search query used

***

### suggestions?

> `optional` **suggestions**: `string`[]

Defined in: [Event/interfaces/event-search.interfaces.ts:97](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-search.interfaces.ts#L97)

Suggestions for refinement

***

### total

> **total**: `number`

Defined in: [Event/interfaces/event-search.interfaces.ts:87](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-search.interfaces.ts#L87)

Total number of matches

***

### totalCount

> **totalCount**: `number`

Defined in: [Event/interfaces/event-search.interfaces.ts:89](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-search.interfaces.ts#L89)

Total count (alias for total)
