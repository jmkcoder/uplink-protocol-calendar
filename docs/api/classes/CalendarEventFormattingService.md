[**@uplink-protocol/form-controller v0.3.1**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / CalendarEventFormattingService

# Class: CalendarEventFormattingService

Defined in: [Event/services/event-formatting.service.ts:17](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-formatting.service.ts#L17)

Implementation of event formatting service
Provides formatting capabilities for displaying events in various formats

## Implements

- [`IEventFormattingService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventFormattingService.md)

## Constructors

### Constructor

> **new CalendarEventFormattingService**(): `EventFormattingService`

#### Returns

`EventFormattingService`

## Methods

### exportEvents()

> **exportEvents**(`events`, `options`): `Promise`\<\{ `data`: `string` \| `Blob`; `filename`: `string`; `mimeType`: `string`; \}\>

Defined in: [Event/services/event-formatting.service.ts:246](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-formatting.service.ts#L246)

Export events in specified format

#### Parameters

##### events

[`CalendarEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CalendarEvent.md)[]

##### options

[`ExportFormatOptions`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/ExportFormatOptions.md)

#### Returns

`Promise`\<\{ `data`: `string` \| `Blob`; `filename`: `string`; `mimeType`: `string`; \}\>

#### Implementation of

[`IEventFormattingService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventFormattingService.md).[`exportEvents`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventFormattingService.md#exportevents)

***

### formatDateTime()

> **formatDateTime**(`dateTime`, `options?`): `object`

Defined in: [Event/services/event-formatting.service.ts:121](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-formatting.service.ts#L121)

Format date and time

#### Parameters

##### dateTime

[`EventDateTime`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/EventDateTime.md)

##### options?

[`DateFormatOptions`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/DateFormatOptions.md)

#### Returns

`object`

##### duration

> **duration**: `string`

##### endDate

> **endDate**: `string`

##### endTime

> **endTime**: `string`

##### isMultiDay

> **isMultiDay**: `boolean`

##### relative?

> `optional` **relative**: `string`

##### startDate

> **startDate**: `string`

##### startTime

> **startTime**: `string`

#### Implementation of

[`IEventFormattingService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventFormattingService.md).[`formatDateTime`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventFormattingService.md#formatdatetime)

***

### formatDuration()

> **formatDuration**(`startDate`, `endDate`, `options?`): `string`

Defined in: [Event/services/event-formatting.service.ts:187](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-formatting.service.ts#L187)

Format duration

#### Parameters

##### startDate

`Date`

##### endDate

`Date`

##### options?

[`DurationFormatOptions`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/DurationFormatOptions.md)

#### Returns

`string`

#### Implementation of

[`IEventFormattingService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventFormattingService.md).[`formatDuration`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventFormattingService.md#formatduration)

***

### formatEvent()

> **formatEvent**(`event`, `displayOptions?`, `dateOptions?`): [`FormattedEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/FormattedEvent.md)

Defined in: [Event/services/event-formatting.service.ts:38](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-formatting.service.ts#L38)

Format single event

#### Parameters

##### event

[`CalendarEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CalendarEvent.md) | `null`

##### displayOptions?

[`EventDisplayOptions`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/EventDisplayOptions.md)

##### dateOptions?

[`DateFormatOptions`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/DateFormatOptions.md)

#### Returns

[`FormattedEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/FormattedEvent.md)

#### Implementation of

[`IEventFormattingService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventFormattingService.md).[`formatEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventFormattingService.md#formatevent)

***

### formatEvents()

> **formatEvents**(`events`, `displayOptions?`, `dateOptions?`): [`FormattedEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/FormattedEvent.md)[]

Defined in: [Event/services/event-formatting.service.ts:113](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-formatting.service.ts#L113)

Format multiple events

#### Parameters

##### events

[`CalendarEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CalendarEvent.md)[]

##### displayOptions?

[`EventDisplayOptions`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/EventDisplayOptions.md)

##### dateOptions?

[`DateFormatOptions`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/DateFormatOptions.md)

#### Returns

[`FormattedEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/FormattedEvent.md)[]

#### Implementation of

[`IEventFormattingService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventFormattingService.md).[`formatEvents`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventFormattingService.md#formatevents)

***

### formatForCalendarView()

> **formatForCalendarView**(`events`, `viewOptions`): [`FormattedEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/FormattedEvent.md) & `object`[]

Defined in: [Event/services/event-formatting.service.ts:230](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-formatting.service.ts#L230)

Format for calendar view

#### Parameters

##### events

[`CalendarEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CalendarEvent.md)[]

##### viewOptions

[`CalendarViewFormatOptions`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CalendarViewFormatOptions.md)

#### Returns

[`FormattedEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/FormattedEvent.md) & `object`[]

#### Implementation of

[`IEventFormattingService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventFormattingService.md).[`formatForCalendarView`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventFormattingService.md#formatforcalendarview)

***

### formatRecurrencePattern()

> **formatRecurrencePattern**(`recurrence`): `string`

Defined in: [Event/services/event-formatting.service.ts:326](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-formatting.service.ts#L326)

Format recurring event pattern

#### Parameters

##### recurrence

`any`

#### Returns

`string`

#### Implementation of

[`IEventFormattingService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventFormattingService.md).[`formatRecurrencePattern`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventFormattingService.md#formatrecurrencepattern)

***

### getAccessibilityLabel()

> **getAccessibilityLabel**(`event`): `string`

Defined in: [Event/services/event-formatting.service.ts:281](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-formatting.service.ts#L281)

Get accessibility label for event

#### Parameters

##### event

[`CalendarEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CalendarEvent.md)

#### Returns

`string`

#### Implementation of

[`IEventFormattingService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventFormattingService.md).[`getAccessibilityLabel`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventFormattingService.md#getaccessibilitylabel)

***

### getAvailableLocales()

> **getAvailableLocales**(): `string`[]

Defined in: [Event/services/event-formatting.service.ts:318](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-formatting.service.ts#L318)

Get available locales

#### Returns

`string`[]

#### Implementation of

[`IEventFormattingService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventFormattingService.md).[`getAvailableLocales`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventFormattingService.md#getavailablelocales)

***

### getEventSummary()

> **getEventSummary**(`event`, `maxLength`): `string`

Defined in: [Event/services/event-formatting.service.ts:298](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-formatting.service.ts#L298)

Get event summary for notifications

#### Parameters

##### event

[`CalendarEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CalendarEvent.md)

##### maxLength

`number` = `100`

#### Returns

`string`

#### Implementation of

[`IEventFormattingService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventFormattingService.md).[`getEventSummary`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventFormattingService.md#geteventsummary)

***

### getNextOccurrenceText()

> **getNextOccurrenceText**(`_event`): `string` \| `null`

Defined in: [Event/services/event-formatting.service.ts:345](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-formatting.service.ts#L345)

Get next occurrence text

#### Parameters

##### \_event

[`CalendarEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CalendarEvent.md)

#### Returns

`string` \| `null`

#### Implementation of

[`IEventFormattingService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventFormattingService.md).[`getNextOccurrenceText`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventFormattingService.md#getnextoccurrencetext)

***

### getSupportedExportFormats()

> **getSupportedExportFormats**(): `string`[]

Defined in: [Event/services/event-formatting.service.ts:322](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-formatting.service.ts#L322)

Get supported export formats

#### Returns

`string`[]

#### Implementation of

[`IEventFormattingService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventFormattingService.md).[`getSupportedExportFormats`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventFormattingService.md#getsupportedexportformats)

***

### initialize()

> **initialize**(`localization`): `void`

Defined in: [Event/services/event-formatting.service.ts:34](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-formatting.service.ts#L34)

Initialize formatting service

#### Parameters

##### localization

[`LocalizationSettings`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/LocalizationSettings.md)

#### Returns

`void`

#### Implementation of

[`IEventFormattingService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventFormattingService.md).[`initialize`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventFormattingService.md#initialize)

***

### updateLocalization()

> **updateLocalization**(`settings`): `void`

Defined in: [Event/services/event-formatting.service.ts:314](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-formatting.service.ts#L314)

Update localization settings

#### Parameters

##### settings

`Partial`\<[`LocalizationSettings`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/LocalizationSettings.md)\>

#### Returns

`void`

#### Implementation of

[`IEventFormattingService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventFormattingService.md).[`updateLocalization`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventFormattingService.md#updatelocalization)
