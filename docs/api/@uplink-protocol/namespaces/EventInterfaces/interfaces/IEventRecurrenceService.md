[**@uplink-protocol/form-controller v0.3.1**](../../../../README.md)

***

[@uplink-protocol/form-controller](../../../../globals.md) / [EventInterfaces](../README.md) / IEventRecurrenceService

# Interface: IEventRecurrenceService

Defined in: [Event/interfaces/event-recurrence.interfaces.ts:172](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-recurrence.interfaces.ts#L172)

Event recurrence service interface

## Methods

### addException()

> **addException**(`masterEventId`, `exception`): `Promise`\<`void`\>

Defined in: [Event/interfaces/event-recurrence.interfaces.ts:214](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-recurrence.interfaces.ts#L214)

Add exception to recurring event

#### Parameters

##### masterEventId

`string`

##### exception

[`RecurrenceException`](RecurrenceException.md)

#### Returns

`Promise`\<`void`\>

***

### analyzeRecurrence()

> **analyzeRecurrence**(`event`): [`RecurrenceAnalysis`](RecurrenceAnalysis.md)

Defined in: [Event/interfaces/event-recurrence.interfaces.ts:247](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-recurrence.interfaces.ts#L247)

Analyze recurrence pattern

#### Parameters

##### event

[`CalendarEvent`](CalendarEvent.md)

#### Returns

[`RecurrenceAnalysis`](RecurrenceAnalysis.md)

***

### createPattern()

> **createPattern**(`baseEvent`, `pattern`, `bounds`): [`EventRecurrence`](EventRecurrence.md)

Defined in: [Event/interfaces/event-recurrence.interfaces.ts:181](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-recurrence.interfaces.ts#L181)

Create recurrence pattern

#### Parameters

##### baseEvent

[`CalendarEvent`](CalendarEvent.md)

##### pattern

[`RecurrencePattern`](RecurrencePattern.md)

##### bounds

[`RecurrenceBounds`](RecurrenceBounds.md)

#### Returns

[`EventRecurrence`](EventRecurrence.md)

***

### deleteRecurringEvent()

> **deleteRecurringEvent**(`eventId`, `options`): `Promise`\<`void`\>

Defined in: [Event/interfaces/event-recurrence.interfaces.ts:239](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-recurrence.interfaces.ts#L239)

Delete recurring event

#### Parameters

##### eventId

`string`

##### options

[`RecurrenceModificationOptions`](RecurrenceModificationOptions.md)

#### Returns

`Promise`\<`void`\>

***

### expandRecurrence()

> **expandRecurrence**(`event`, `options`): [`RecurrenceOccurrence`](RecurrenceOccurrence.md)[]

Defined in: [Event/interfaces/event-recurrence.interfaces.ts:190](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-recurrence.interfaces.ts#L190)

Expand recurrence into occurrences

#### Parameters

##### event

[`CalendarEvent`](CalendarEvent.md)

##### options

[`RecurrenceExpansionOptions`](RecurrenceExpansionOptions.md)

#### Returns

[`RecurrenceOccurrence`](RecurrenceOccurrence.md)[]

***

### findConflictingOccurrences()

> **findConflictingOccurrences**(`event`, `existingEvents`, `startDate`, `endDate`): `object`[]

Defined in: [Event/interfaces/event-recurrence.interfaces.ts:280](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-recurrence.interfaces.ts#L280)

Find conflicting occurrences

#### Parameters

##### event

[`CalendarEvent`](CalendarEvent.md)

##### existingEvents

[`CalendarEvent`](CalendarEvent.md)[]

##### startDate

`Date`

##### endDate

`Date`

#### Returns

`object`[]

***

### generateRRule()

> **generateRRule**(`pattern`, `bounds`): `string`

Defined in: [Event/interfaces/event-recurrence.interfaces.ts:266](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-recurrence.interfaces.ts#L266)

Generate RRULE string

#### Parameters

##### pattern

[`RecurrencePattern`](RecurrencePattern.md)

##### bounds

[`RecurrenceBounds`](RecurrenceBounds.md)

#### Returns

`string`

***

### getNextOccurrence()

> **getNextOccurrence**(`event`, `fromDate?`): [`RecurrenceOccurrence`](RecurrenceOccurrence.md) \| `null`

Defined in: [Event/interfaces/event-recurrence.interfaces.ts:198](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-recurrence.interfaces.ts#L198)

Get next occurrence

#### Parameters

##### event

[`CalendarEvent`](CalendarEvent.md)

##### fromDate?

`Date`

#### Returns

[`RecurrenceOccurrence`](RecurrenceOccurrence.md) \| `null`

***

### getPreviousOccurrence()

> **getPreviousOccurrence**(`event`, `fromDate?`): [`RecurrenceOccurrence`](RecurrenceOccurrence.md) \| `null`

Defined in: [Event/interfaces/event-recurrence.interfaces.ts:206](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-recurrence.interfaces.ts#L206)

Get previous occurrence

#### Parameters

##### event

[`CalendarEvent`](CalendarEvent.md)

##### fromDate?

`Date`

#### Returns

[`RecurrenceOccurrence`](RecurrenceOccurrence.md) \| `null`

***

### getRecurrenceDescription()

> **getRecurrenceDescription**(`pattern`, `bounds`, `locale?`): `string`

Defined in: [Event/interfaces/event-recurrence.interfaces.ts:271](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-recurrence.interfaces.ts#L271)

Get human-readable description

#### Parameters

##### pattern

[`RecurrencePattern`](RecurrencePattern.md)

##### bounds

[`RecurrenceBounds`](RecurrenceBounds.md)

##### locale?

`string`

#### Returns

`string`

***

### getRecurrenceStats()

> **getRecurrenceStats**(`events`): `object`

Defined in: [Event/interfaces/event-recurrence.interfaces.ts:298](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-recurrence.interfaces.ts#L298)

Get recurrence statistics

#### Parameters

##### events

[`CalendarEvent`](CalendarEvent.md)[]

#### Returns

`object`

##### averageOccurrences

> **averageOccurrences**: `number`

##### complexityDistribution

> **complexityDistribution**: `Record`\<`string`, `number`\>

##### mostCommonPattern

> **mostCommonPattern**: `string`

##### totalRecurring

> **totalRecurring**: `number`

***

### initialize()

> **initialize**(`calendarSettings?`): `void`

Defined in: [Event/interfaces/event-recurrence.interfaces.ts:176](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-recurrence.interfaces.ts#L176)

Initialize recurrence service

#### Parameters

##### calendarSettings?

[`CalendarSystemSettings`](CalendarSystemSettings.md)

#### Returns

`void`

***

### modifyRecurringEvent()

> **modifyRecurringEvent**(`eventId`, `changes`, `options`): `Promise`\<[`CalendarEvent`](CalendarEvent.md)[]\>

Defined in: [Event/interfaces/event-recurrence.interfaces.ts:230](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-recurrence.interfaces.ts#L230)

Modify recurring event

#### Parameters

##### eventId

`string`

##### changes

`Partial`\<[`CalendarEvent`](CalendarEvent.md)\>

##### options

[`RecurrenceModificationOptions`](RecurrenceModificationOptions.md)

#### Returns

`Promise`\<[`CalendarEvent`](CalendarEvent.md)[]\>

***

### optimizePattern()

> **optimizePattern**(`pattern`): [`RecurrencePattern`](RecurrencePattern.md)

Defined in: [Event/interfaces/event-recurrence.interfaces.ts:293](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-recurrence.interfaces.ts#L293)

Optimize recurrence pattern

#### Parameters

##### pattern

[`RecurrencePattern`](RecurrencePattern.md)

#### Returns

[`RecurrencePattern`](RecurrencePattern.md)

***

### parseRRule()

> **parseRRule**(`rrule`): [`RecurrencePattern`](RecurrencePattern.md)

Defined in: [Event/interfaces/event-recurrence.interfaces.ts:261](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-recurrence.interfaces.ts#L261)

Parse RRULE string

#### Parameters

##### rrule

`string`

#### Returns

[`RecurrencePattern`](RecurrencePattern.md)

***

### removeException()

> **removeException**(`masterEventId`, `exceptionDate`): `Promise`\<`void`\>

Defined in: [Event/interfaces/event-recurrence.interfaces.ts:222](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-recurrence.interfaces.ts#L222)

Remove exception

#### Parameters

##### masterEventId

`string`

##### exceptionDate

`Date`

#### Returns

`Promise`\<`void`\>

***

### validatePattern()

> **validatePattern**(`pattern`, `bounds`): `object`

Defined in: [Event/interfaces/event-recurrence.interfaces.ts:252](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-recurrence.interfaces.ts#L252)

Validate recurrence pattern

#### Parameters

##### pattern

[`RecurrencePattern`](RecurrencePattern.md)

##### bounds

[`RecurrenceBounds`](RecurrenceBounds.md)

#### Returns

`object`

##### errors

> **errors**: `string`[]

##### isValid

> **isValid**: `boolean`

##### warnings

> **warnings**: `string`[]
