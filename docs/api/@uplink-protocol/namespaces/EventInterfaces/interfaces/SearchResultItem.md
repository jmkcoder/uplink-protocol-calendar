[**@uplink-protocol/form-controller v0.3.1**](../../../../README.md)

***

[@uplink-protocol/form-controller](../../../../globals.md) / [EventInterfaces](../README.md) / SearchResultItem

# Interface: SearchResultItem

Defined in: [Event/interfaces/event-search.interfaces.ts:62](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-search.interfaces.ts#L62)

Search result item

## Properties

### context?

> `optional` **context**: `string`

Defined in: [Event/interfaces/event-search.interfaces.ts:77](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-search.interfaces.ts#L77)

Search context

***

### event

> **event**: [`CalendarEvent`](CalendarEvent.md)

Defined in: [Event/interfaces/event-search.interfaces.ts:64](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-search.interfaces.ts#L64)

Event data

***

### highlights

> **highlights**: `object`[]

Defined in: [Event/interfaces/event-search.interfaces.ts:70](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-search.interfaces.ts#L70)

Highlighted text snippets

#### end

> **end**: `number`

#### field

> **field**: `string`

#### snippet

> **snippet**: `string`

#### start

> **start**: `number`

***

### matchedFields

> **matchedFields**: `string`[]

Defined in: [Event/interfaces/event-search.interfaces.ts:68](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-search.interfaces.ts#L68)

Matched fields

***

### score

> **score**: `number`

Defined in: [Event/interfaces/event-search.interfaces.ts:66](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-search.interfaces.ts#L66)

Relevance score (0-1)
