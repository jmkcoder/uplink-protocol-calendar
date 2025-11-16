[**@uplink-protocol/form-controller v0.3.1**](../../../../README.md)

***

[@uplink-protocol/form-controller](../../../../globals.md) / [EventInterfaces](../README.md) / RecurrenceBounds

# Interface: RecurrenceBounds

Defined in: [Event/interfaces/event-recurrence.interfaces.ts:46](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-recurrence.interfaces.ts#L46)

Recurrence bounds

## Properties

### count?

> `optional` **count**: `number`

Defined in: [Event/interfaces/event-recurrence.interfaces.ts:54](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-recurrence.interfaces.ts#L54)

Number of occurrences (if endType is 'count')

***

### endDate?

> `optional` **endDate**: `Date`

Defined in: [Event/interfaces/event-recurrence.interfaces.ts:52](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-recurrence.interfaces.ts#L52)

End date (if endType is 'date')

***

### endType

> **endType**: `"date"` \| `"never"` \| `"count"`

Defined in: [Event/interfaces/event-recurrence.interfaces.ts:50](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-recurrence.interfaces.ts#L50)

End type

***

### maxDate?

> `optional` **maxDate**: `Date`

Defined in: [Event/interfaces/event-recurrence.interfaces.ts:56](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-recurrence.interfaces.ts#L56)

Maximum date to generate (safety limit)

***

### startDate

> **startDate**: `Date`

Defined in: [Event/interfaces/event-recurrence.interfaces.ts:48](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-recurrence.interfaces.ts#L48)

Start date for recurrence
