[**@uplink-protocol/form-controller v0.3.1**](../../../../README.md)

***

[@uplink-protocol/form-controller](../../../../globals.md) / [EventInterfaces](../README.md) / SearchAnalytics

# Interface: SearchAnalytics

Defined in: [Event/interfaces/event-search.interfaces.ts:169](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-search.interfaces.ts#L169)

Search analytics

## Properties

### averageSearchTime

> **averageSearchTime**: `number`

Defined in: [Event/interfaces/event-search.interfaces.ts:177](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-search.interfaces.ts#L177)

Average search time

***

### noResultQueries

> **noResultQueries**: `object`[]

Defined in: [Event/interfaces/event-search.interfaces.ts:175](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-search.interfaces.ts#L175)

No-result searches

#### count

> **count**: `number`

#### query

> **query**: `string`

***

### popularFilters

> **popularFilters**: `object`[]

Defined in: [Event/interfaces/event-search.interfaces.ts:179](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-search.interfaces.ts#L179)

Most used filters

#### count

> **count**: `number`

#### filter

> **filter**: `string`

***

### popularTerms

> **popularTerms**: `object`[]

Defined in: [Event/interfaces/event-search.interfaces.ts:171](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-search.interfaces.ts#L171)

Most searched terms

#### count

> **count**: `number`

#### term

> **term**: `string`

***

### searchFrequency

> **searchFrequency**: `object`[]

Defined in: [Event/interfaces/event-search.interfaces.ts:173](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-search.interfaces.ts#L173)

Search frequency by time

#### count

> **count**: `number`

#### date

> **date**: `Date`
