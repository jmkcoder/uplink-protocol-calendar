[**@uplink-protocol/form-controller v0.3.0**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / TimeEventManagerService

# Class: TimeEventManagerService

Defined in: [Time/services/time-event-manager.service.ts:8](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-event-manager.service.ts#L8)

TimeEventManagerService - Implementation of ITimeEventManagerService
Manages event emission for time picker

## Implements

- [`ITimeEventManagerService`](../interfaces/ITimeEventManagerService.md)

## Constructors

### Constructor

> **new TimeEventManagerService**(): `TimeEventManagerService`

#### Returns

`TimeEventManagerService`

## Methods

### emitFormatChanged()

> **emitFormatChanged**(`formatChangedEmitter`, `use12Hour`, `showSeconds`, `showMilliseconds`): `void`

Defined in: [Time/services/time-event-manager.service.ts:82](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-event-manager.service.ts#L82)

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

#### Implementation of

[`ITimeEventManagerService`](../interfaces/ITimeEventManagerService.md).[`emitFormatChanged`](../interfaces/ITimeEventManagerService.md#emitformatchanged)

***

### emitLocaleChanged()

> **emitLocaleChanged**(`localeChangedEmitter`, `locale`): `void`

Defined in: [Time/services/time-event-manager.service.ts:96](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-event-manager.service.ts#L96)

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

#### Implementation of

[`ITimeEventManagerService`](../interfaces/ITimeEventManagerService.md).[`emitLocaleChanged`](../interfaces/ITimeEventManagerService.md#emitlocalechanged)

***

### emitSegmentFocused()

> **emitSegmentFocused**(`segmentFocusedEmitter`, `segment`): `void`

Defined in: [Time/services/time-event-manager.service.ts:68](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-event-manager.service.ts#L68)

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

#### Implementation of

[`ITimeEventManagerService`](../interfaces/ITimeEventManagerService.md).[`emitSegmentFocused`](../interfaces/ITimeEventManagerService.md#emitsegmentfocused)

***

### emitTimeChanged()

> **emitTimeChanged**(`timeChangedEmitter`, `time`): `void`

Defined in: [Time/services/time-event-manager.service.ts:59](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-event-manager.service.ts#L59)

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

#### Implementation of

[`ITimeEventManagerService`](../interfaces/ITimeEventManagerService.md).[`emitTimeChanged`](../interfaces/ITimeEventManagerService.md#emittimechanged)

***

### emitTimeRangeSelected()

> **emitTimeRangeSelected**(`rangeSelectedEmitter`, `startTime`, `endTime`): `void`

Defined in: [Time/services/time-event-manager.service.ts:46](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-event-manager.service.ts#L46)

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

#### Implementation of

[`ITimeEventManagerService`](../interfaces/ITimeEventManagerService.md).[`emitTimeRangeSelected`](../interfaces/ITimeEventManagerService.md#emittimerangeselected)

***

### emitTimeSelected()

> **emitTimeSelected**(`timeSelectedEmitter`, `time`): `void`

Defined in: [Time/services/time-event-manager.service.ts:36](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-event-manager.service.ts#L36)

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

#### Implementation of

[`ITimeEventManagerService`](../interfaces/ITimeEventManagerService.md).[`emitTimeSelected`](../interfaces/ITimeEventManagerService.md#emittimeselected)

***

### initializeEvents()

> **initializeEvents**(): `object`

Defined in: [Time/services/time-event-manager.service.ts:13](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-event-manager.service.ts#L13)

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

#### Implementation of

[`ITimeEventManagerService`](../interfaces/ITimeEventManagerService.md).[`initializeEvents`](../interfaces/ITimeEventManagerService.md#initializeevents)
