[**@uplink-protocol/form-controller v0.3.1**](../../../../README.md)

***

[@uplink-protocol/form-controller](../../../../globals.md) / [EventTypes](../README.md) / EventControllerInstance

# Interface: EventControllerInstance

Defined in: [Event/types/event-controller.types.ts:333](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L333)

Event Controller Instance - Runtime interface

## Extends

- [`TypedEventController`](TypedEventController.md)

## Properties

### bindings

> **bindings**: [`EventControllerBindings`](EventControllerBindings.md)

Defined in: [Event/types/event-controller.types.ts:315](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L315)

Reactive bindings

#### Inherited from

[`TypedEventController`](TypedEventController.md).[`bindings`](TypedEventController.md#bindings)

***

### events

> **events**: [`EventControllerEvents`](EventControllerEvents.md)

Defined in: [Event/types/event-controller.types.ts:321](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L321)

Event emitters

#### Inherited from

[`TypedEventController`](TypedEventController.md).[`events`](TypedEventController.md#events)

***

### meta?

> `optional` **meta**: `ControllerMetadata`

Defined in: [Event/types/event-controller.types.ts:324](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L324)

Controller metadata

#### Inherited from

[`TypedEventController`](TypedEventController.md).[`meta`](TypedEventController.md#meta)

***

### methods

> **methods**: [`EventControllerMethods`](EventControllerMethods.md)

Defined in: [Event/types/event-controller.types.ts:318](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L318)

Available methods

#### Inherited from

[`TypedEventController`](TypedEventController.md).[`methods`](TypedEventController.md#methods)

***

### options?

> `optional` **options**: [`EventControllerOptions`](EventControllerOptions.md)

Defined in: [Event/types/event-controller.types.ts:327](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L327)

Controller options

#### Inherited from

[`TypedEventController`](TypedEventController.md).[`options`](TypedEventController.md#options)

## Methods

### destroy()

> **destroy**(): `Promise`\<`void`\>

Defined in: [Event/types/event-controller.types.ts:346](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L346)

Destroy the controller

#### Returns

`Promise`\<`void`\>

***

### getStatus()

> **getStatus**(): `object`

Defined in: [Event/types/event-controller.types.ts:338](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L338)

Get controller status

#### Returns

`object`

##### health

> **health**: `"good"` \| `"warning"` \| `"error"`

##### initialized

> **initialized**: `boolean`

##### lastError?

> `optional` **lastError**: `string`

##### totalEvents

> **totalEvents**: `number`

***

### initialize()

> **initialize**(`options?`): `Promise`\<`void`\>

Defined in: [Event/types/event-controller.types.ts:335](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L335)

Initialize the controller

#### Parameters

##### options?

[`EventControllerOptions`](EventControllerOptions.md)

#### Returns

`Promise`\<`void`\>
