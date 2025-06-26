[**@uplink-protocol/form-controller v0.3.0**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / ITimeEventManagerService

# Interface: ITimeEventManagerService

Defined in: [Time/interfaces/time-event-manager.service.interfaces.ts:7](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-event-manager.service.interfaces.ts#L7)

Time event manager service interface
Manages event emission for time picker

## Methods

### emitFormatChanged()

> **emitFormatChanged**(`formatChangedEmitter`, `use12Hour`, `showSeconds`, `showMilliseconds`): `void`

Defined in: [Time/interfaces/time-event-manager.service.interfaces.ts:64](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-event-manager.service.interfaces.ts#L64)

Emit format changed event

#### Parameters

##### formatChangedEmitter

`EventEmitter`\<\{ `showMilliseconds`: `boolean`; `showSeconds`: `boolean`; `use12Hour`: `boolean`; \}\>

Format changed event emitter

##### use12Hour

`boolean`

Whether using 12-hour format

##### showSeconds

`boolean`

Whether showing seconds

##### showMilliseconds

`boolean`

Whether showing milliseconds

#### Returns

`void`

***

### emitLocaleChanged()

> **emitLocaleChanged**(`localeChangedEmitter`, `locale`): `void`

Defined in: [Time/interfaces/time-event-manager.service.interfaces.ts:76](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-event-manager.service.interfaces.ts#L76)

Emit locale changed event

#### Parameters

##### localeChangedEmitter

`EventEmitter`\<`string`\>

Locale changed event emitter

##### locale

`string`

New locale

#### Returns

`void`

***

### emitSegmentFocused()

> **emitSegmentFocused**(`segmentFocusedEmitter`, `segment`): `void`

Defined in: [Time/interfaces/time-event-manager.service.interfaces.ts:52](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-event-manager.service.interfaces.ts#L52)

Emit segment focused event

#### Parameters

##### segmentFocusedEmitter

`EventEmitter`\<`"hours"` \| `"minutes"` \| `"seconds"` \| `"milliseconds"` \| `"period"`\>

Segment focused event emitter

##### segment

Focused segment

`"hours"` | `"minutes"` | `"seconds"` | `"milliseconds"` | `"period"`

#### Returns

`void`

***

### emitTimeChanged()

> **emitTimeChanged**(`timeChangedEmitter`, `time`): `void`

Defined in: [Time/interfaces/time-event-manager.service.interfaces.ts:45](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-event-manager.service.interfaces.ts#L45)

Emit time changed event

#### Parameters

##### timeChangedEmitter

`EventEmitter`\<`Date`\>

Time changed event emitter

##### time

`Date`

New time

#### Returns

`void`

***

### emitTimeRangeSelected()

> **emitTimeRangeSelected**(`rangeSelectedEmitter`, `startTime`, `endTime`): `void`

Defined in: [Time/interfaces/time-event-manager.service.interfaces.ts:34](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-event-manager.service.interfaces.ts#L34)

Emit time range selected event

#### Parameters

##### rangeSelectedEmitter

`EventEmitter`\<\{ `endTime`: `null` \| `Date`; `startTime`: `null` \| `Date`; \}\>

Range selected event emitter

##### startTime

Range start time

`null` | `Date`

##### endTime

Range end time

`null` | `Date`

#### Returns

`void`

***

### emitTimeSelected()

> **emitTimeSelected**(`timeSelectedEmitter`, `time`): `void`

Defined in: [Time/interfaces/time-event-manager.service.interfaces.ts:26](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-event-manager.service.interfaces.ts#L26)

Emit time selected event

#### Parameters

##### timeSelectedEmitter

`EventEmitter`\<`Date`\>

Time selected event emitter

##### time

`Date`

Selected time

#### Returns

`void`

***

### initializeEvents()

> **initializeEvents**(): `object`

Defined in: [Time/interfaces/time-event-manager.service.interfaces.ts:12](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-event-manager.service.interfaces.ts#L12)

Initialize event emitters for time picker

#### Returns

`object`

Initialized event emitters

##### formatChanged

> **formatChanged**: `EventEmitter`\<\{ `showMilliseconds`: `boolean`; `showSeconds`: `boolean`; `use12Hour`: `boolean`; \}\>

##### localeChanged

> **localeChanged**: `EventEmitter`\<`string`\>

##### segmentFocused

> **segmentFocused**: `EventEmitter`\<`"hours"` \| `"minutes"` \| `"seconds"` \| `"milliseconds"` \| `"period"`\>

##### timeChanged

> **timeChanged**: `EventEmitter`\<`Date`\>

##### timeRangeSelected

> **timeRangeSelected**: `EventEmitter`\<\{ `endTime`: `null` \| `Date`; `startTime`: `null` \| `Date`; \}\>

##### timeSelected

> **timeSelected**: `EventEmitter`\<`Date`\>
