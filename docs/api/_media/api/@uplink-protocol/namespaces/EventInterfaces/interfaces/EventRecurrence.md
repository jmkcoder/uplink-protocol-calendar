[**@uplink-protocol/form-controller v0.3.1**](../../../../README.md)

***

[@uplink-protocol/form-controller](../../../../globals.md) / [EventInterfaces](../README.md) / EventRecurrence

# Interface: EventRecurrence

Defined in: [Event/interfaces/event.interfaces.ts:95](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event.interfaces.ts#L95)

Event recurrence rule

## Properties

### count?

> `optional` **count**: `number`

Defined in: [Event/interfaces/event.interfaces.ts:109](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event.interfaces.ts#L109)

Number of occurrences

***

### customPattern?

> `optional` **customPattern**: `string`

Defined in: [Event/interfaces/event.interfaces.ts:111](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event.interfaces.ts#L111)

Custom recurrence pattern

***

### dayOfMonth?

> `optional` **dayOfMonth**: `number`

Defined in: [Event/interfaces/event.interfaces.ts:103](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event.interfaces.ts#L103)

Day of month for monthly recurrence

***

### daysOfWeek?

> `optional` **daysOfWeek**: `number`[]

Defined in: [Event/interfaces/event.interfaces.ts:101](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event.interfaces.ts#L101)

Days of week for weekly recurrence

***

### endDate?

> `optional` **endDate**: `Date`

Defined in: [Event/interfaces/event.interfaces.ts:107](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event.interfaces.ts#L107)

End date for recurrence

***

### exceptions?

> `optional` **exceptions**: `Date`[]

Defined in: [Event/interfaces/event.interfaces.ts:113](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event.interfaces.ts#L113)

Exceptions (dates to exclude)

***

### frequency

> **frequency**: [`EventFrequency`](../type-aliases/EventFrequency.md)

Defined in: [Event/interfaces/event.interfaces.ts:97](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event.interfaces.ts#L97)

Frequency of recurrence

***

### interval

> **interval**: `number`

Defined in: [Event/interfaces/event.interfaces.ts:99](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event.interfaces.ts#L99)

Interval (e.g., every 2 weeks)

***

### month?

> `optional` **month**: `number`

Defined in: [Event/interfaces/event.interfaces.ts:105](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event.interfaces.ts#L105)

Month for yearly recurrence
