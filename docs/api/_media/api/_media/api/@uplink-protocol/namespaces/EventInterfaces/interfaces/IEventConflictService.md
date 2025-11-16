[**@uplink-protocol/form-controller v0.3.1**](../../../../README.md)

***

[@uplink-protocol/form-controller](../../../../globals.md) / [EventInterfaces](../README.md) / IEventConflictService

# Interface: IEventConflictService

Defined in: [Event/interfaces/event-conflict.interfaces.ts:235](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-conflict.interfaces.ts#L235)

Event conflict service interface

## Methods

### analyzeConflictImpact()

> **analyzeConflictImpact**(`conflict`): `Promise`\<`ConflictImpact`\>

Defined in: [Event/interfaces/event-conflict.interfaces.ts:329](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-conflict.interfaces.ts#L329)

Get conflict impact analysis

#### Parameters

##### conflict

`EventConflict`

#### Returns

`Promise`\<`ConflictImpact`\>

***

### autoResolveConflicts()

> **autoResolveConflicts**(`conflicts`, `strategy`): `Promise`\<`ConflictResolutionRequest`[]\>

Defined in: [Event/interfaces/event-conflict.interfaces.ts:289](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-conflict.interfaces.ts#L289)

Auto-resolve conflicts

#### Parameters

##### conflicts

`EventConflict`[]

##### strategy

`ConflictResolutionStrategy`

#### Returns

`Promise`\<`ConflictResolutionRequest`[]\>

***

### detectConflicts()

> **detectConflicts**(`event`, `existingEvents`): `Promise`\<`EventConflict`[]\>

Defined in: [Event/interfaces/event-conflict.interfaces.ts:244](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-conflict.interfaces.ts#L244)

Detect conflicts for a new event

#### Parameters

##### event

[`CalendarEvent`](CalendarEvent.md)

##### existingEvents

[`CalendarEvent`](CalendarEvent.md)[]

#### Returns

`Promise`\<`EventConflict`[]\>

***

### detectModificationConflicts()

> **detectModificationConflicts**(`originalEvent`, `modifiedEvent`, `existingEvents`): `Promise`\<`EventConflict`[]\>

Defined in: [Event/interfaces/event-conflict.interfaces.ts:252](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-conflict.interfaces.ts#L252)

Detect conflicts for event modification

#### Parameters

##### originalEvent

[`CalendarEvent`](CalendarEvent.md)

##### modifiedEvent

[`CalendarEvent`](CalendarEvent.md)

##### existingEvents

[`CalendarEvent`](CalendarEvent.md)[]

#### Returns

`Promise`\<`EventConflict`[]\>

***

### findAlternativeTimeSlots()

> **findAlternativeTimeSlots**(`event`, `existingEvents`, `options`): `Promise`\<`object`[]\>

Defined in: [Event/interfaces/event-conflict.interfaces.ts:309](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-conflict.interfaces.ts#L309)

Find alternative time slots

#### Parameters

##### event

[`CalendarEvent`](CalendarEvent.md)

##### existingEvents

[`CalendarEvent`](CalendarEvent.md)[]

##### options

###### duration

`number`

###### maxSuggestions?

`number`

###### preferredTimeRanges?

`object`[]

###### requiredAttendees?

`string`[]

###### searchDays?

`number`

#### Returns

`Promise`\<`object`[]\>

***

### getActiveConflicts()

> **getActiveConflicts**(`dateRange?`): `Promise`\<`EventConflict`[]\>

Defined in: [Event/interfaces/event-conflict.interfaces.ts:261](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-conflict.interfaces.ts#L261)

Get all active conflicts

#### Parameters

##### dateRange?

###### end

`Date`

###### start

`Date`

#### Returns

`Promise`\<`EventConflict`[]\>

***

### getConflictStatistics()

> **getConflictStatistics**(`dateRange`): `Promise`\<`ConflictStatistics`\>

Defined in: [Event/interfaces/event-conflict.interfaces.ts:334](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-conflict.interfaces.ts#L334)

Get conflict statistics

#### Parameters

##### dateRange

###### end

`Date`

###### start

`Date`

#### Returns

`Promise`\<`ConflictStatistics`\>

***

### getResolutionHistory()

> **getResolutionHistory**(`conflictId?`, `dateRange?`): `Promise`\<`ConflictResolutionRequest`[]\>

Defined in: [Event/interfaces/event-conflict.interfaces.ts:346](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-conflict.interfaces.ts#L346)

Get resolution history

#### Parameters

##### conflictId?

`string`

##### dateRange?

###### end

`Date`

###### start

`Date`

#### Returns

`Promise`\<`ConflictResolutionRequest`[]\>

***

### getResolutionSuggestions()

> **getResolutionSuggestions**(`conflict`, `preferences?`): `Promise`\<`ConflictResolution`[]\>

Defined in: [Event/interfaces/event-conflict.interfaces.ts:277](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-conflict.interfaces.ts#L277)

Get conflict resolution suggestions

#### Parameters

##### conflict

`EventConflict`

##### preferences?

###### maxImpact?

`"medium"` \| `"low"` \| `"high"`

###### preferredStrategies?

`ConflictResolutionStrategy`[]

###### requireAutoApply?

`boolean`

#### Returns

`Promise`\<`ConflictResolution`[]\>

***

### initialize()

> **initialize**(`settings`): `void`

Defined in: [Event/interfaces/event-conflict.interfaces.ts:239](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-conflict.interfaces.ts#L239)

Initialize conflict detection service

#### Parameters

##### settings

`ConflictDetectionSettings`

#### Returns

`void`

***

### onConflictDetected()

> **onConflictDetected**(`callback`): () => `void`

Defined in: [Event/interfaces/event-conflict.interfaces.ts:354](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-conflict.interfaces.ts#L354)

Subscribe to conflict detection events

#### Parameters

##### callback

(`conflict`) => `void`

#### Returns

> (): `void`

##### Returns

`void`

***

### onConflictResolved()

> **onConflictResolved**(`callback`): () => `void`

Defined in: [Event/interfaces/event-conflict.interfaces.ts:359](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-conflict.interfaces.ts#L359)

Subscribe to conflict resolution events

#### Parameters

##### callback

(`resolution`) => `void`

#### Returns

> (): `void`

##### Returns

`void`

***

### preCheckConflicts()

> **preCheckConflicts**(`proposedEvent`, `existingEvents`): `Promise`\<\{ `conflicts`: `EventConflict`[]; `hasConflicts`: `boolean`; `suggestions`: `string`[]; \}\>

Defined in: [Event/interfaces/event-conflict.interfaces.ts:297](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-conflict.interfaces.ts#L297)

Check for potential conflicts before creation

#### Parameters

##### proposedEvent

`Partial`\<[`CalendarEvent`](CalendarEvent.md)\>

##### existingEvents

[`CalendarEvent`](CalendarEvent.md)[]

#### Returns

`Promise`\<\{ `conflicts`: `EventConflict`[]; `hasConflicts`: `boolean`; `suggestions`: `string`[]; \}\>

***

### resolveConflict()

> **resolveConflict**(`conflictId`, `resolution`, `requestedBy`): `Promise`\<`ConflictResolutionRequest`\>

Defined in: [Event/interfaces/event-conflict.interfaces.ts:268](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-conflict.interfaces.ts#L268)

Resolve conflict

#### Parameters

##### conflictId

`string`

##### resolution

`ConflictResolution`

##### requestedBy

`string`

#### Returns

`Promise`\<`ConflictResolutionRequest`\>

***

### simulateResolution()

> **simulateResolution**(`conflict`, `resolution`): `Promise`\<\{ `affectedEvents`: [`CalendarEvent`](CalendarEvent.md)[]; `newConflicts`: `EventConflict`[]; `success`: `boolean`; \}\>

Defined in: [Event/interfaces/event-conflict.interfaces.ts:373](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-conflict.interfaces.ts#L373)

Simulate conflict resolution

#### Parameters

##### conflict

`EventConflict`

##### resolution

`ConflictResolution`

#### Returns

`Promise`\<\{ `affectedEvents`: [`CalendarEvent`](CalendarEvent.md)[]; `newConflicts`: `EventConflict`[]; `success`: `boolean`; \}\>

***

### updateDetectionSettings()

> **updateDetectionSettings**(`settings`): `void`

Defined in: [Event/interfaces/event-conflict.interfaces.ts:341](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-conflict.interfaces.ts#L341)

Update conflict detection settings

#### Parameters

##### settings

`Partial`\<`ConflictDetectionSettings`\>

#### Returns

`void`

***

### validateResolution()

> **validateResolution**(`resolution`): `Promise`\<\{ `errors`: `string`[]; `isValid`: `boolean`; `warnings`: `string`[]; \}\>

Defined in: [Event/interfaces/event-conflict.interfaces.ts:364](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-conflict.interfaces.ts#L364)

Validate resolution before applying

#### Parameters

##### resolution

`ConflictResolution`

#### Returns

`Promise`\<\{ `errors`: `string`[]; `isValid`: `boolean`; `warnings`: `string`[]; \}\>
