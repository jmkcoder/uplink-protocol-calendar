[**@uplink-protocol/form-controller v0.3.1**](../../../../README.md)

***

[@uplink-protocol/form-controller](../../../../globals.md) / [EventInterfaces](../README.md) / IEventFormattingService

# Interface: IEventFormattingService

Defined in: [Event/interfaces/event-formatting.interfaces.ts:184](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-formatting.interfaces.ts#L184)

Event formatting service interface

## Methods

### exportEvents()

> **exportEvents**(`events`, `options`): `Promise`\<\{ `data`: `string` \| `Blob`; `filename`: `string`; `mimeType`: `string`; \}\>

Defined in: [Event/interfaces/event-formatting.interfaces.ts:243](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-formatting.interfaces.ts#L243)

Export events in specified format

#### Parameters

##### events

[`CalendarEvent`](CalendarEvent.md)[]

##### options

[`ExportFormatOptions`](ExportFormatOptions.md)

#### Returns

`Promise`\<\{ `data`: `string` \| `Blob`; `filename`: `string`; `mimeType`: `string`; \}\>

***

### formatDateTime()

> **formatDateTime**(`dateTime`, `options?`): `object`

Defined in: [Event/interfaces/event-formatting.interfaces.ts:211](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-formatting.interfaces.ts#L211)

Format date and time

#### Parameters

##### dateTime

[`EventDateTime`](EventDateTime.md)

##### options?

[`DateFormatOptions`](DateFormatOptions.md)

#### Returns

`object`

##### duration

> **duration**: `string`

##### endDate

> **endDate**: `string`

##### endTime

> **endTime**: `string`

##### relative?

> `optional` **relative**: `string`

##### startDate

> **startDate**: `string`

##### startTime

> **startTime**: `string`

***

### formatDuration()

> **formatDuration**(`startDate`, `endDate`, `options?`): `string`

Defined in: [Event/interfaces/event-formatting.interfaces.ts:226](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-formatting.interfaces.ts#L226)

Format duration

#### Parameters

##### startDate

`Date`

##### endDate

`Date`

##### options?

[`DurationFormatOptions`](DurationFormatOptions.md)

#### Returns

`string`

***

### formatEvent()

> **formatEvent**(`event`, `displayOptions?`, `dateOptions?`): [`FormattedEvent`](FormattedEvent.md)

Defined in: [Event/interfaces/event-formatting.interfaces.ts:193](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-formatting.interfaces.ts#L193)

Format single event

#### Parameters

##### event

[`CalendarEvent`](CalendarEvent.md)

##### displayOptions?

[`EventDisplayOptions`](EventDisplayOptions.md)

##### dateOptions?

[`DateFormatOptions`](DateFormatOptions.md)

#### Returns

[`FormattedEvent`](FormattedEvent.md)

***

### formatEvents()

> **formatEvents**(`events`, `displayOptions?`, `dateOptions?`): [`FormattedEvent`](FormattedEvent.md)[]

Defined in: [Event/interfaces/event-formatting.interfaces.ts:202](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-formatting.interfaces.ts#L202)

Format multiple events

#### Parameters

##### events

[`CalendarEvent`](CalendarEvent.md)[]

##### displayOptions?

[`EventDisplayOptions`](EventDisplayOptions.md)

##### dateOptions?

[`DateFormatOptions`](DateFormatOptions.md)

#### Returns

[`FormattedEvent`](FormattedEvent.md)[]

***

### formatForCalendarView()

> **formatForCalendarView**(`events`, `viewOptions`): [`FormattedEvent`](FormattedEvent.md) & `object`[]

Defined in: [Event/interfaces/event-formatting.interfaces.ts:235](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-formatting.interfaces.ts#L235)

Format for calendar view

#### Parameters

##### events

[`CalendarEvent`](CalendarEvent.md)[]

##### viewOptions

[`CalendarViewFormatOptions`](CalendarViewFormatOptions.md)

#### Returns

[`FormattedEvent`](FormattedEvent.md) & `object`[]

***

### formatRecurrencePattern()

> **formatRecurrencePattern**(`recurrence`): `string`

Defined in: [Event/interfaces/event-formatting.interfaces.ts:276](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-formatting.interfaces.ts#L276)

Format recurring event pattern

#### Parameters

##### recurrence

`any`

#### Returns

`string`

***

### getAccessibilityLabel()

> **getAccessibilityLabel**(`event`): `string`

Defined in: [Event/interfaces/event-formatting.interfaces.ts:251](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-formatting.interfaces.ts#L251)

Get accessibility label for event

#### Parameters

##### event

[`CalendarEvent`](CalendarEvent.md)

#### Returns

`string`

***

### getAvailableLocales()

> **getAvailableLocales**(): `string`[]

Defined in: [Event/interfaces/event-formatting.interfaces.ts:266](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-formatting.interfaces.ts#L266)

Get available locales

#### Returns

`string`[]

***

### getEventSummary()

> **getEventSummary**(`event`, `maxLength?`): `string`

Defined in: [Event/interfaces/event-formatting.interfaces.ts:256](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-formatting.interfaces.ts#L256)

Get event summary for notifications

#### Parameters

##### event

[`CalendarEvent`](CalendarEvent.md)

##### maxLength?

`number`

#### Returns

`string`

***

### getNextOccurrenceText()

> **getNextOccurrenceText**(`event`): `string` \| `null`

Defined in: [Event/interfaces/event-formatting.interfaces.ts:281](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-formatting.interfaces.ts#L281)

Get next occurrence text

#### Parameters

##### event

[`CalendarEvent`](CalendarEvent.md)

#### Returns

`string` \| `null`

***

### getSupportedExportFormats()

> **getSupportedExportFormats**(): `string`[]

Defined in: [Event/interfaces/event-formatting.interfaces.ts:271](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-formatting.interfaces.ts#L271)

Get supported export formats

#### Returns

`string`[]

***

### initialize()

> **initialize**(`localization`): `void`

Defined in: [Event/interfaces/event-formatting.interfaces.ts:188](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-formatting.interfaces.ts#L188)

Initialize formatting service

#### Parameters

##### localization

[`LocalizationSettings`](LocalizationSettings.md)

#### Returns

`void`

***

### updateLocalization()

> **updateLocalization**(`settings`): `void`

Defined in: [Event/interfaces/event-formatting.interfaces.ts:261](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-formatting.interfaces.ts#L261)

Update localization settings

#### Parameters

##### settings

`Partial`\<[`LocalizationSettings`](LocalizationSettings.md)\>

#### Returns

`void`
