[**@uplink-protocol/form-controller v0.1.0**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / EventManagerService

# Class: EventManagerService

Defined in: services/event-manager.service.ts:9

Implementation of EventManagerService
Responsible for managing and emitting calendar events

## Implements

- [`IEventManagerService`](../interfaces/IEventManagerService.md)

## Constructors

### Constructor

> **new EventManagerService**(): `EventManagerService`

#### Returns

`EventManagerService`

## Methods

### emitDateRangeSelected()

> **emitDateRangeSelected**(`emitter`, `range`): `void`

Defined in: services/event-manager.service.ts:42

Emit date range selected event

#### Parameters

##### emitter

`EventEmitter`\<[`DateRange`](../interfaces/DateRange.md)\>

##### range

[`DateRange`](../interfaces/DateRange.md)

#### Returns

`void`

#### Implementation of

[`IEventManagerService`](../interfaces/IEventManagerService.md).[`emitDateRangeSelected`](../interfaces/IEventManagerService.md#emitdaterangeselected)

***

### emitDateSelected()

> **emitDateSelected**(`emitter`, `date`): `void`

Defined in: services/event-manager.service.ts:32

Emit date selected event

#### Parameters

##### emitter

`EventEmitter`\<`Date`\>

##### date

`Date`

#### Returns

`void`

#### Implementation of

[`IEventManagerService`](../interfaces/IEventManagerService.md).[`emitDateSelected`](../interfaces/IEventManagerService.md#emitdateselected)

***

### emitMonthChanged()

> **emitMonthChanged**(`emitter`, `month`): `void`

Defined in: services/event-manager.service.ts:54

Emit month changed event

#### Parameters

##### emitter

`EventEmitter`\<`number`\>

##### month

`number`

#### Returns

`void`

#### Implementation of

[`IEventManagerService`](../interfaces/IEventManagerService.md).[`emitMonthChanged`](../interfaces/IEventManagerService.md#emitmonthchanged)

***

### emitViewChanged()

> **emitViewChanged**(`emitter`, `view`): `void`

Defined in: services/event-manager.service.ts:74

Emit view changed event

#### Parameters

##### emitter

`EventEmitter`\<\{ `month`: `number`; `year`: `number`; \}\>

##### view

###### month

`number`

###### year

`number`

#### Returns

`void`

#### Implementation of

[`IEventManagerService`](../interfaces/IEventManagerService.md).[`emitViewChanged`](../interfaces/IEventManagerService.md#emitviewchanged)

***

### emitYearChanged()

> **emitYearChanged**(`emitter`, `year`): `void`

Defined in: services/event-manager.service.ts:64

Emit year changed event

#### Parameters

##### emitter

`EventEmitter`\<`number`\>

##### year

`number`

#### Returns

`void`

#### Implementation of

[`IEventManagerService`](../interfaces/IEventManagerService.md).[`emitYearChanged`](../interfaces/IEventManagerService.md#emityearchanged)

***

### initializeEvents()

> **initializeEvents**(): `object`

Defined in: services/event-manager.service.ts:13

Initialize event emitters

#### Returns

`object`

##### dateRangeSelected

> **dateRangeSelected**: `EventEmitter`\<[`DateRange`](../interfaces/DateRange.md)\>

##### dateSelected

> **dateSelected**: `EventEmitter`\<`Date`\>

##### monthChanged

> **monthChanged**: `EventEmitter`\<`number`\>

##### viewChanged

> **viewChanged**: `EventEmitter`\<\{ `month`: `number`; `year`: `number`; \}\>

##### yearChanged

> **yearChanged**: `EventEmitter`\<`number`\>

#### Implementation of

[`IEventManagerService`](../interfaces/IEventManagerService.md).[`initializeEvents`](../interfaces/IEventManagerService.md#initializeevents)
