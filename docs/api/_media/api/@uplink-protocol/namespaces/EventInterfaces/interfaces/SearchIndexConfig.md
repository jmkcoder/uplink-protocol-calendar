[**@uplink-protocol/form-controller v0.3.1**](../../../../README.md)

***

[@uplink-protocol/form-controller](../../../../globals.md) / [EventInterfaces](../README.md) / SearchIndexConfig

# Interface: SearchIndexConfig

Defined in: [Event/interfaces/event-search.interfaces.ts:123](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-search.interfaces.ts#L123)

Search index configuration

## Properties

### enableFullTextSearch

> **enableFullTextSearch**: `boolean`

Defined in: [Event/interfaces/event-search.interfaces.ts:127](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-search.interfaces.ts#L127)

Enable full-text search

***

### enableFuzzySearch

> **enableFuzzySearch**: `boolean`

Defined in: [Event/interfaces/event-search.interfaces.ts:129](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-search.interfaces.ts#L129)

Enable fuzzy matching

***

### enableStemming

> **enableStemming**: `boolean`

Defined in: [Event/interfaces/event-search.interfaces.ts:133](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-search.interfaces.ts#L133)

Enable stemming

***

### fieldWeights

> **fieldWeights**: `Record`\<`string`, `number`\>

Defined in: [Event/interfaces/event-search.interfaces.ts:137](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-search.interfaces.ts#L137)

Custom field weights for scoring

***

### fuzzyThreshold

> **fuzzyThreshold**: `number`

Defined in: [Event/interfaces/event-search.interfaces.ts:131](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-search.interfaces.ts#L131)

Fuzzy search threshold (0-1)

***

### indexedFields

> **indexedFields**: `string`[]

Defined in: [Event/interfaces/event-search.interfaces.ts:125](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-search.interfaces.ts#L125)

Fields to index

***

### stopWords

> **stopWords**: `string`[]

Defined in: [Event/interfaces/event-search.interfaces.ts:135](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-search.interfaces.ts#L135)

Stop words to ignore
