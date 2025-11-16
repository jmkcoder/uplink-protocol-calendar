[**@uplink-protocol/form-controller v0.3.1**](../../../../README.md)

***

[@uplink-protocol/form-controller](../../../../globals.md) / [EventInterfaces](../README.md) / SearchQuery

# Interface: SearchQuery

Defined in: [Event/interfaces/event-search.interfaces.ts:12](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-search.interfaces.ts#L12)

Search query structure

## Properties

### dateRange?

> `optional` **dateRange**: `object`

Defined in: [Event/interfaces/event-search.interfaces.ts:24](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-search.interfaces.ts#L24)

Date range filters

#### end?

> `optional` **end**: `Date`

#### relative?

> `optional` **relative**: `object`

##### relative.direction

> **direction**: `"past"` \| `"future"`

##### relative.unit

> **unit**: `"days"` \| `"weeks"` \| `"months"` \| `"years"`

##### relative.value

> **value**: `number`

#### start?

> `optional` **start**: `Date`

#### type?

> `optional` **type**: `"exact"` \| `"between"` \| `"before"` \| `"after"` \| `"relative"`

***

### facets?

> `optional` **facets**: `object`

Defined in: [Event/interfaces/event-search.interfaces.ts:51](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-search.interfaces.ts#L51)

Facets configuration

#### attendees?

> `optional` **attendees**: `object`

##### attendees.enabled

> **enabled**: `boolean`

#### categories?

> `optional` **categories**: `object`

##### categories.enabled

> **enabled**: `boolean`

#### priority?

> `optional` **priority**: `object`

##### priority.enabled

> **enabled**: `boolean`

#### status?

> `optional` **status**: `object`

##### status.enabled

> **enabled**: `boolean`

***

### fields?

> `optional` **fields**: `object`

Defined in: [Event/interfaces/event-search.interfaces.ts:16](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-search.interfaces.ts#L16)

Field-specific searches

#### attendees?

> `optional` **attendees**: `string`

#### category?

> `optional` **category**: `string`

#### description?

> `optional` **description**: `string`

#### location?

> `optional` **location**: `string`

#### title?

> `optional` **title**: `string`

***

### filters?

> `optional` **filters**: [`EventFilter`](EventFilter.md)

Defined in: [Event/interfaces/event-search.interfaces.ts:35](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-search.interfaces.ts#L35)

Advanced filters

***

### limit?

> `optional` **limit**: `number`

Defined in: [Event/interfaces/event-search.interfaces.ts:47](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-search.interfaces.ts#L47)

Pagination limit

***

### offset?

> `optional` **offset**: `number`

Defined in: [Event/interfaces/event-search.interfaces.ts:49](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-search.interfaces.ts#L49)

Pagination offset

***

### operators?

> `optional` **operators**: `object`

Defined in: [Event/interfaces/event-search.interfaces.ts:37](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-search.interfaces.ts#L37)

Boolean operators

#### filterOperator?

> `optional` **filterOperator**: `"and"` \| `"or"`

#### textOperator?

> `optional` **textOperator**: `"and"` \| `"or"`

***

### sort?

> `optional` **sort**: `object`

Defined in: [Event/interfaces/event-search.interfaces.ts:42](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-search.interfaces.ts#L42)

Sorting options

#### direction

> **direction**: `"asc"` \| `"desc"`

#### field

> **field**: `"status"` \| `"title"` \| `"priority"` \| `"createdAt"` \| `"updatedAt"` \| `"dateTime.start"` \| `"dateTime.end"`

***

### text?

> `optional` **text**: `string`

Defined in: [Event/interfaces/event-search.interfaces.ts:14](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-search.interfaces.ts#L14)

Text search terms
