[**@uplink-protocol/form-controller v0.3.1**](../../../../README.md)

***

[@uplink-protocol/form-controller](../../../../globals.md) / [EventInterfaces](../README.md) / EventReminder

# Interface: EventReminder

Defined in: [Event/interfaces/event.interfaces.ts:137](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event.interfaces.ts#L137)

Event reminder/notification

## Properties

### enabled

> **enabled**: `boolean`

Defined in: [Event/interfaces/event.interfaces.ts:145](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event.interfaces.ts#L145)

Whether reminder is enabled

***

### id

> **id**: `string`

Defined in: [Event/interfaces/event.interfaces.ts:139](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event.interfaces.ts#L139)

Unique identifier

***

### message?

> `optional` **message**: `string`

Defined in: [Event/interfaces/event.interfaces.ts:147](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event.interfaces.ts#L147)

Custom message

***

### method

> **method**: `"push"` \| `"popup"` \| `"email"` \| `"sms"`

Defined in: [Event/interfaces/event.interfaces.ts:143](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event.interfaces.ts#L143)

Reminder method

***

### minutesBefore

> **minutesBefore**: `number`

Defined in: [Event/interfaces/event.interfaces.ts:141](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event.interfaces.ts#L141)

Minutes before event to trigger
