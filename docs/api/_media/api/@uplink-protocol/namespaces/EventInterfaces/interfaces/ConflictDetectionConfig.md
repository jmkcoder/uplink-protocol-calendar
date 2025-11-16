[**@uplink-protocol/form-controller v0.3.1**](../../../../README.md)

***

[@uplink-protocol/form-controller](../../../../globals.md) / [EventInterfaces](../README.md) / ConflictDetectionConfig

# Interface: ConflictDetectionConfig

Defined in: [Event/interfaces/event-validation.interfaces.ts:91](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-validation.interfaces.ts#L91)

Conflict detection settings

## Properties

### bufferTimeMinutes

> **bufferTimeMinutes**: `number`

Defined in: [Event/interfaces/event-validation.interfaces.ts:99](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-validation.interfaces.ts#L99)

Buffer time between events in minutes

***

### detectDoubleBooking

> **detectDoubleBooking**: `boolean`

Defined in: [Event/interfaces/event-validation.interfaces.ts:95](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-validation.interfaces.ts#L95)

Enable double booking detection

***

### detectOverlaps

> **detectOverlaps**: `boolean`

Defined in: [Event/interfaces/event-validation.interfaces.ts:93](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-validation.interfaces.ts#L93)

Enable overlap detection

***

### detectResourceConflicts

> **detectResourceConflicts**: `boolean`

Defined in: [Event/interfaces/event-validation.interfaces.ts:97](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-validation.interfaces.ts#L97)

Enable resource conflict detection

***

### resourceTypes?

> `optional` **resourceTypes**: `string`[]

Defined in: [Event/interfaces/event-validation.interfaces.ts:101](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-validation.interfaces.ts#L101)

Resource types to check
