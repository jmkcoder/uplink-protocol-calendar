[**@uplink-protocol/form-controller v0.1.2**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / EventManagerService

# Class: EventManagerService

Defined in: [services/event-manager.service.ts:9](https://github.com/jmkcoder/uplink-protocol-calendar/blob/519c17274ca35a5b4f4dfa9d2f04d55cb230d0b4/src/services/event-manager.service.ts#L9)

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

Defined in: [services/event-manager.service.ts:44](https://github.com/jmkcoder/uplink-protocol-calendar/blob/519c17274ca35a5b4f4dfa9d2f04d55cb230d0b4/src/services/event-manager.service.ts#L44)

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

Defined in: [services/event-manager.service.ts:34](https://github.com/jmkcoder/uplink-protocol-calendar/blob/519c17274ca35a5b4f4dfa9d2f04d55cb230d0b4/src/services/event-manager.service.ts#L34)

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

Defined in: [services/event-manager.service.ts:56](https://github.com/jmkcoder/uplink-protocol-calendar/blob/519c17274ca35a5b4f4dfa9d2f04d55cb230d0b4/src/services/event-manager.service.ts#L56)

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

Defined in: [services/event-manager.service.ts:75](https://github.com/jmkcoder/uplink-protocol-calendar/blob/519c17274ca35a5b4f4dfa9d2f04d55cb230d0b4/src/services/event-manager.service.ts#L75)

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

Defined in: [services/event-manager.service.ts:66](https://github.com/jmkcoder/uplink-protocol-calendar/blob/519c17274ca35a5b4f4dfa9d2f04d55cb230d0b4/src/services/event-manager.service.ts#L66)

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

### emitYearRangeChanged()

> **emitYearRangeChanged**(`emitter`, `range`): `void`

Defined in: [services/event-manager.service.ts:85](https://github.com/jmkcoder/uplink-protocol-calendar/blob/519c17274ca35a5b4f4dfa9d2f04d55cb230d0b4/src/services/event-manager.service.ts#L85)

Emit year range changed event

#### Parameters

##### emitter

`EventEmitter`\<[`YearRange`](../interfaces/YearRange.md)\>

##### range

[`YearRange`](../interfaces/YearRange.md)

#### Returns

`void`

#### Implementation of

[`IEventManagerService`](../interfaces/IEventManagerService.md).[`emitYearRangeChanged`](../interfaces/IEventManagerService.md#emityearrangechanged)

***

### initializeEvents()

> **initializeEvents**(): `object`

Defined in: [services/event-manager.service.ts:13](https://github.com/jmkcoder/uplink-protocol-calendar/blob/519c17274ca35a5b4f4dfa9d2f04d55cb230d0b4/src/services/event-manager.service.ts#L13)

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

##### yearRangeChanged

> **yearRangeChanged**: `EventEmitter`\<[`YearRange`](../interfaces/YearRange.md)\>

#### Implementation of

[`IEventManagerService`](../interfaces/IEventManagerService.md).[`initializeEvents`](../interfaces/IEventManagerService.md#initializeevents)
