[**@uplink-protocol/form-controller v0.2.3**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / IEventManagerService

# Interface: IEventManagerService

Defined in: [interfaces/event-manager.service.interfaces.ts:8](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/interfaces/event-manager.service.interfaces.ts#L8)

Event manager service interface
Responsible for managing and emitting calendar events

## Methods

### emitDateRangeSelected()

> **emitDateRangeSelected**(`emitter`, `range`): `void`

Defined in: [interfaces/event-manager.service.interfaces.ts:32](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/interfaces/event-manager.service.interfaces.ts#L32)

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

Defined in: [interfaces/event-manager.service.interfaces.ts:24](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/interfaces/event-manager.service.interfaces.ts#L24)

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

Defined in: [interfaces/event-manager.service.interfaces.ts:40](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/interfaces/event-manager.service.interfaces.ts#L40)

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

Defined in: [interfaces/event-manager.service.interfaces.ts:55](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/interfaces/event-manager.service.interfaces.ts#L55)

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

Defined in: [interfaces/event-manager.service.interfaces.ts:47](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/interfaces/event-manager.service.interfaces.ts#L47)

Emit year changed event

#### Parameters

##### emitter

`EventEmitter`\<`number`\>

##### year

`number`

#### Returns

`void`

***

### emitYearRangeChanged()

> **emitYearRangeChanged**(`emitter`, `range`): `void`

Defined in: [interfaces/event-manager.service.interfaces.ts:63](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/interfaces/event-manager.service.interfaces.ts#L63)

Emit year range changed event

#### Parameters

##### emitter

`EventEmitter`\<[`YearRange`](YearRange.md)\>

##### range

[`YearRange`](YearRange.md)

#### Returns

`void`

***

### initializeEvents()

> **initializeEvents**(): `object`

Defined in: [interfaces/event-manager.service.interfaces.ts:12](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/interfaces/event-manager.service.interfaces.ts#L12)

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

##### yearRangeChanged

> **yearRangeChanged**: `EventEmitter`\<[`YearRange`](YearRange.md)\>
