[**@uplink-protocol/form-controller v0.3.1**](../../../../README.md)

***

[@uplink-protocol/form-controller](../../../../globals.md) / [EventInterfaces](../README.md) / BusinessRuleConfig

# Interface: BusinessRuleConfig

Defined in: [Event/interfaces/event-validation.interfaces.ts:60](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-validation.interfaces.ts#L60)

Business rule configuration

## Properties

### forbiddenTimeRanges?

> `optional` **forbiddenTimeRanges**: `object`[]

Defined in: [Event/interfaces/event-validation.interfaces.ts:80](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-validation.interfaces.ts#L80)

Forbidden time ranges

#### days?

> `optional` **days**: `number`[]

#### end

> **end**: `string`

#### reason?

> `optional` **reason**: `string`

#### start

> **start**: `string`

***

### maxAdvanceBookingDays?

> `optional` **maxAdvanceBookingDays**: `number`

Defined in: [Event/interfaces/event-validation.interfaces.ts:66](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-validation.interfaces.ts#L66)

Maximum advance booking days

***

### maxConcurrentEvents?

> `optional` **maxConcurrentEvents**: `number`

Defined in: [Event/interfaces/event-validation.interfaces.ts:76](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-validation.interfaces.ts#L76)

Maximum concurrent events

***

### maxDurationMinutes?

> `optional` **maxDurationMinutes**: `number`

Defined in: [Event/interfaces/event-validation.interfaces.ts:62](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-validation.interfaces.ts#L62)

Maximum event duration in minutes

***

### minAdvanceBookingMinutes?

> `optional` **minAdvanceBookingMinutes**: `number`

Defined in: [Event/interfaces/event-validation.interfaces.ts:68](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-validation.interfaces.ts#L68)

Minimum advance booking minutes

***

### minDurationMinutes?

> `optional` **minDurationMinutes**: `number`

Defined in: [Event/interfaces/event-validation.interfaces.ts:64](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-validation.interfaces.ts#L64)

Minimum event duration in minutes

***

### requiredFields?

> `optional` **requiredFields**: `string`[]

Defined in: [Event/interfaces/event-validation.interfaces.ts:78](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-validation.interfaces.ts#L78)

Required fields

***

### workingHours?

> `optional` **workingHours**: `object`

Defined in: [Event/interfaces/event-validation.interfaces.ts:70](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-validation.interfaces.ts#L70)

Working hours

#### days

> **days**: `number`[]

#### end

> **end**: `string`

#### start

> **start**: `string`
