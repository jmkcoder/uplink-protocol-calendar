[**@uplink-protocol/form-controller v0.3.1**](../../../../README.md)

***

[@uplink-protocol/form-controller](../../../../globals.md) / [EventInterfaces](../README.md) / RecurrencePattern

# Interface: RecurrencePattern

Defined in: [Event/interfaces/event-recurrence.interfaces.ts:24](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-recurrence.interfaces.ts#L24)

Advanced recurrence pattern

## Properties

### dayOfMonth?

> `optional` **dayOfMonth**: `number`

Defined in: [Event/interfaces/event-recurrence.interfaces.ts:34](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-recurrence.interfaces.ts#L34)

Day of month (for monthly date patterns)

***

### daysOfWeek?

> `optional` **daysOfWeek**: `number`[]

Defined in: [Event/interfaces/event-recurrence.interfaces.ts:30](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-recurrence.interfaces.ts#L30)

Days of week (for weekly/monthly patterns)

***

### interval

> **interval**: `number`

Defined in: [Event/interfaces/event-recurrence.interfaces.ts:28](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-recurrence.interfaces.ts#L28)

Interval between occurrences

***

### month?

> `optional` **month**: `number`

Defined in: [Event/interfaces/event-recurrence.interfaces.ts:36](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-recurrence.interfaces.ts#L36)

Month (for yearly patterns)

***

### rrule?

> `optional` **rrule**: `string`

Defined in: [Event/interfaces/event-recurrence.interfaces.ts:38](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-recurrence.interfaces.ts#L38)

Custom RRULE string

***

### timeZone?

> `optional` **timeZone**: `string`

Defined in: [Event/interfaces/event-recurrence.interfaces.ts:40](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-recurrence.interfaces.ts#L40)

Time zone for recurrence calculation

***

### type

> **type**: [`RecurrencePatternType`](../type-aliases/RecurrencePatternType.md)

Defined in: [Event/interfaces/event-recurrence.interfaces.ts:26](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-recurrence.interfaces.ts#L26)

Pattern type

***

### weekOfMonth?

> `optional` **weekOfMonth**: `number`

Defined in: [Event/interfaces/event-recurrence.interfaces.ts:32](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-recurrence.interfaces.ts#L32)

Week of month (for monthly weekday patterns)
