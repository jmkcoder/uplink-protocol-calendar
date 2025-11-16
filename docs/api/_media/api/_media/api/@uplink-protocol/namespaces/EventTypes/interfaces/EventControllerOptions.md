[**@uplink-protocol/form-controller v0.3.1**](../../../../README.md)

***

[@uplink-protocol/form-controller](../../../../globals.md) / [EventTypes](../README.md) / EventControllerOptions

# Interface: EventControllerOptions

Defined in: [Event/types/event-controller.types.ts:259](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L259)

Event Controller Options - Configuration

## Properties

### autoConflictDetection?

> `optional` **autoConflictDetection**: `boolean`

Defined in: [Event/types/event-controller.types.ts:264](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L264)

Enable automatic conflict detection

***

### autoValidation?

> `optional` **autoValidation**: `boolean`

Defined in: [Event/types/event-controller.types.ts:267](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L267)

Enable automatic validation

***

### customValidationRules?

> `optional` **customValidationRules**: `any`[]

Defined in: [Event/types/event-controller.types.ts:304](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L304)

Custom validation rules

***

### defaultDateRange?

> `optional` **defaultDateRange**: `object`

Defined in: [Event/types/event-controller.types.ts:276](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L276)

Default date range for queries

#### futureDays

> **futureDays**: `number`

#### pastDays

> **pastDays**: `number`

***

### defaultPageSize?

> `optional` **defaultPageSize**: `number`

Defined in: [Event/types/event-controller.types.ts:261](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L261)

Default page size for queries

***

### enableNotifications?

> `optional` **enableNotifications**: `boolean`

Defined in: [Event/types/event-controller.types.ts:285](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L285)

Enable notifications

***

### enableSearch?

> `optional` **enableSearch**: `boolean`

Defined in: [Event/types/event-controller.types.ts:282](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L282)

Enable search indexing

***

### enableSync?

> `optional` **enableSync**: `boolean`

Defined in: [Event/types/event-controller.types.ts:288](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L288)

Enable sync

***

### eventDefaults?

> `optional` **eventDefaults**: `Partial`\<[`CreateEventInput`](../../EventInterfaces/interfaces/CreateEventInput.md)\>

Defined in: [Event/types/event-controller.types.ts:307](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L307)

Event defaults

***

### locale?

> `optional` **locale**: `string`

Defined in: [Event/types/event-controller.types.ts:291](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L291)

Locale for formatting

***

### storage?

> `optional` **storage**: `object`

Defined in: [Event/types/event-controller.types.ts:270](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L270)

Storage configuration

#### options?

> `optional` **options**: `Record`\<`string`, `any`\>

#### type

> **type**: `"memory"` \| `"localStorage"` \| `"indexedDB"` \| `"external"`

***

### timeZone?

> `optional` **timeZone**: `string`

Defined in: [Event/types/event-controller.types.ts:294](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L294)

Time zone

***

### workingHours?

> `optional` **workingHours**: `object`

Defined in: [Event/types/event-controller.types.ts:297](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/types/event-controller.types.ts#L297)

Working hours

#### days

> **days**: `number`[]

#### end

> **end**: `string`

#### start

> **start**: `string`
