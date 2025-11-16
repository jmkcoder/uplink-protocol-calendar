[**@uplink-protocol/form-controller v0.3.1**](../../../../README.md)

***

[@uplink-protocol/form-controller](../../../../globals.md) / [EventInterfaces](../README.md) / RecurrenceAnalysis

# Interface: RecurrenceAnalysis

Defined in: [Event/interfaces/event-recurrence.interfaces.ts:128](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-recurrence.interfaces.ts#L128)

Recurrence analysis result

## Properties

### complexityScore

> **complexityScore**: `number`

Defined in: [Event/interfaces/event-recurrence.interfaces.ts:144](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-recurrence.interfaces.ts#L144)

Pattern complexity score

***

### description

> **description**: `string`

Defined in: [Event/interfaces/event-recurrence.interfaces.ts:130](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-recurrence.interfaces.ts#L130)

Pattern description

***

### frequencyPerYear

> **frequencyPerYear**: `number`

Defined in: [Event/interfaces/event-recurrence.interfaces.ts:142](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-recurrence.interfaces.ts#L142)

Frequency per year

***

### isValid?

> `optional` **isValid**: `boolean`

Defined in: [Event/interfaces/event-recurrence.interfaces.ts:148](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-recurrence.interfaces.ts#L148)

Whether the pattern is valid

***

### nextOccurrence?

> `optional` **nextOccurrence**: `Date`

Defined in: [Event/interfaces/event-recurrence.interfaces.ts:134](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-recurrence.interfaces.ts#L134)

Next occurrence

***

### patternDescription?

> `optional` **patternDescription**: `string`

Defined in: [Event/interfaces/event-recurrence.interfaces.ts:132](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-recurrence.interfaces.ts#L132)

Pattern description (alternative name for compatibility)

***

### potentialConflicts

> **potentialConflicts**: `string`[]

Defined in: [Event/interfaces/event-recurrence.interfaces.ts:146](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-recurrence.interfaces.ts#L146)

Potential conflicts

***

### previousOccurrence?

> `optional` **previousOccurrence**: `Date`

Defined in: [Event/interfaces/event-recurrence.interfaces.ts:136](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-recurrence.interfaces.ts#L136)

Previous occurrence

***

### remainingOccurrences?

> `optional` **remainingOccurrences**: `number`

Defined in: [Event/interfaces/event-recurrence.interfaces.ts:140](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-recurrence.interfaces.ts#L140)

Remaining occurrences

***

### totalOccurrences?

> `optional` **totalOccurrences**: `number`

Defined in: [Event/interfaces/event-recurrence.interfaces.ts:138](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-recurrence.interfaces.ts#L138)

Total occurrences (if bounded)
