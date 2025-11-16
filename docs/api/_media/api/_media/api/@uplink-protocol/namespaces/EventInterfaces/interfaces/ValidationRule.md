[**@uplink-protocol/form-controller v0.3.1**](../../../../README.md)

***

[@uplink-protocol/form-controller](../../../../globals.md) / [EventInterfaces](../README.md) / ValidationRule

# Interface: ValidationRule

Defined in: [Event/interfaces/event-validation.interfaces.ts:12](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-validation.interfaces.ts#L12)

Validation rule definition

## Properties

### description

> **description**: `string`

Defined in: [Event/interfaces/event-validation.interfaces.ts:18](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-validation.interfaces.ts#L18)

Rule description

***

### enabled

> **enabled**: `boolean`

Defined in: [Event/interfaces/event-validation.interfaces.ts:22](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-validation.interfaces.ts#L22)

Whether rule is enabled

***

### id

> **id**: `string`

Defined in: [Event/interfaces/event-validation.interfaces.ts:14](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-validation.interfaces.ts#L14)

Rule identifier

***

### name

> **name**: `string`

Defined in: [Event/interfaces/event-validation.interfaces.ts:16](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-validation.interfaces.ts#L16)

Rule name

***

### priority

> **priority**: `number`

Defined in: [Event/interfaces/event-validation.interfaces.ts:20](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-validation.interfaces.ts#L20)

Rule priority

***

### type

> **type**: `"warning"` \| `"error"` \| `"info"`

Defined in: [Event/interfaces/event-validation.interfaces.ts:24](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-validation.interfaces.ts#L24)

Rule type

***

### validate()

> **validate**: (`event`, `context?`) => [`ValidationRuleResult`](ValidationRuleResult.md)

Defined in: [Event/interfaces/event-validation.interfaces.ts:26](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-validation.interfaces.ts#L26)

Validation function

#### Parameters

##### event

[`CalendarEvent`](CalendarEvent.md) | [`CreateEventInput`](CreateEventInput.md) | [`UpdateEventInput`](UpdateEventInput.md)

##### context?

[`ValidationContext`](ValidationContext.md)

#### Returns

[`ValidationRuleResult`](ValidationRuleResult.md)
