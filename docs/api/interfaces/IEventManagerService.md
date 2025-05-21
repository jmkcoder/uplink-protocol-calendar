[**@uplink-protocol/form-controller v0.1.0**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / IEventManagerService

# Interface: IEventManagerService

Defined in: interfaces/event-manager.service.interfaces.ts:8

Event manager service interface
Responsible for managing and emitting calendar events

## Methods

### emitDateRangeSelected()

> **emitDateRangeSelected**(`emitter`, `range`): `void`

Defined in: interfaces/event-manager.service.interfaces.ts:31

Emit date range selected event

#### Parameters

##### emitter

`EventEmitter`\<[`DateRange`](DateRange.md)\>

##### range

[`DateRange`](DateRange.md)

#### Returns

`void`

***

### emitDateSelected()

> **emitDateSelected**(`emitter`, `date`): `void`

Defined in: interfaces/event-manager.service.interfaces.ts:23

Emit date selected event

#### Parameters

##### emitter

`EventEmitter`\<`Date`\>

##### date

`Date`

#### Returns

`void`

***

### emitMonthChanged()

> **emitMonthChanged**(`emitter`, `month`): `void`

Defined in: interfaces/event-manager.service.interfaces.ts:39

Emit month changed event

#### Parameters

##### emitter

`EventEmitter`\<`number`\>

##### month

`number`

#### Returns

`void`

***

### emitViewChanged()

> **emitViewChanged**(`emitter`, `view`): `void`

Defined in: interfaces/event-manager.service.interfaces.ts:55

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

***

### emitYearChanged()

> **emitYearChanged**(`emitter`, `year`): `void`

Defined in: interfaces/event-manager.service.interfaces.ts:47

Emit year changed event

#### Parameters

##### emitter

`EventEmitter`\<`number`\>

##### year

`number`

#### Returns

`void`

***

### initializeEvents()

> **initializeEvents**(): `object`

Defined in: interfaces/event-manager.service.interfaces.ts:12

Initialize event emitters

#### Returns

`object`

##### dateRangeSelected

> **dateRangeSelected**: `EventEmitter`\<[`DateRange`](DateRange.md)\>

##### dateSelected

> **dateSelected**: `EventEmitter`\<`Date`\>

##### monthChanged

> **monthChanged**: `EventEmitter`\<`number`\>

##### viewChanged

> **viewChanged**: `EventEmitter`\<\{ `month`: `number`; `year`: `number`; \}\>

##### yearChanged

> **yearChanged**: `EventEmitter`\<`number`\>
