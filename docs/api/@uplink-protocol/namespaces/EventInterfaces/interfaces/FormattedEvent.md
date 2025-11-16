[**@uplink-protocol/form-controller v0.3.1**](../../../../README.md)

***

[@uplink-protocol/form-controller](../../../../globals.md) / [EventInterfaces](../README.md) / FormattedEvent

# Interface: FormattedEvent

Defined in: [Event/interfaces/event-formatting.interfaces.ts:64](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-formatting.interfaces.ts#L64)

Formatted event output

## Properties

### accessibility

> **accessibility**: `object`

Defined in: [Event/interfaces/event-formatting.interfaces.ts:113](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-formatting.interfaces.ts#L113)

Accessibility labels

#### description

> **description**: `string`

#### label

> **label**: `string`

***

### attendees?

> `optional` **attendees**: `string`[]

Defined in: [Event/interfaces/event-formatting.interfaces.ts:91](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-formatting.interfaces.ts#L91)

Formatted attendees

***

### cssClasses

> **cssClasses**: `string`[]

Defined in: [Event/interfaces/event-formatting.interfaces.ts:111](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-formatting.interfaces.ts#L111)

CSS classes for styling

***

### dateTime

> **dateTime**: `object`

Defined in: [Event/interfaces/event-formatting.interfaces.ts:72](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-formatting.interfaces.ts#L72)

Formatted date and time

#### duration

> **duration**: `string`

Formatted duration

#### endDate

> **endDate**: `string`

Formatted end date

#### endTime

> **endTime**: `string`

Formatted end time

#### isMultiDay

> **isMultiDay**: `boolean`

Whether event spans multiple days

#### relative?

> `optional` **relative**: `string`

Relative time description

#### startDate

> **startDate**: `string`

Formatted start date

#### startTime

> **startTime**: `string`

Formatted start time

***

### description?

> `optional` **description**: `string`

Defined in: [Event/interfaces/event-formatting.interfaces.ts:70](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-formatting.interfaces.ts#L70)

Formatted description

***

### id

> **id**: `string`

Defined in: [Event/interfaces/event-formatting.interfaces.ts:66](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-formatting.interfaces.ts#L66)

Event ID

***

### location?

> `optional` **location**: `string`

Defined in: [Event/interfaces/event-formatting.interfaces.ts:89](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-formatting.interfaces.ts#L89)

Formatted location

***

### priority

> **priority**: `object`

Defined in: [Event/interfaces/event-formatting.interfaces.ts:99](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-formatting.interfaces.ts#L99)

Priority display

#### color

> **color**: `string`

#### icon?

> `optional` **icon**: `string`

#### level

> **level**: `number`

#### text

> **text**: `string`

***

### recurrence?

> `optional` **recurrence**: `object`

Defined in: [Event/interfaces/event-formatting.interfaces.ts:106](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-formatting.interfaces.ts#L106)

Recurrence display

#### nextOccurrence?

> `optional` **nextOccurrence**: `string`

#### text

> **text**: `string`

***

### status

> **status**: `object`

Defined in: [Event/interfaces/event-formatting.interfaces.ts:93](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-formatting.interfaces.ts#L93)

Status display

#### color

> **color**: `string`

#### icon?

> `optional` **icon**: `string`

#### text

> **text**: `string`

***

### title

> **title**: `string`

Defined in: [Event/interfaces/event-formatting.interfaces.ts:68](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-formatting.interfaces.ts#L68)

Formatted title
