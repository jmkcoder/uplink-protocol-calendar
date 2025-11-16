[**@uplink-protocol/form-controller v0.3.1**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / TypedCalendarController

# Interface: TypedCalendarController

Defined in: [Date/types/typed-calendar-controller.type.ts:10](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/typed-calendar-controller.type.ts#L10)

Complete Calendar Controller Interface
Combines all the above interfaces into a single comprehensive type

## Extended by

- [`CalendarControllerInterface`](CalendarControllerInterface.md)
- [`CalendarControllerInstance`](CalendarControllerInstance.md)

## Properties

### bindings

> **bindings**: [`CalendarControllerBindings`](CalendarControllerBindings.md)

Defined in: [Date/types/typed-calendar-controller.type.ts:12](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/typed-calendar-controller.type.ts#L12)

Reactive state bindings

***

### events

> **events**: [`CalendarControllerEvents`](CalendarControllerEvents.md)

Defined in: [Date/types/typed-calendar-controller.type.ts:18](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/typed-calendar-controller.type.ts#L18)

Event emitters

***

### methods

> **methods**: [`CalendarControllerMethods`](CalendarControllerMethods.md)

Defined in: [Date/types/typed-calendar-controller.type.ts:15](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/typed-calendar-controller.type.ts#L15)

Available methods

***

### options?

> `optional` **options**: [`CalendarOptions`](CalendarOptions.md)

Defined in: [Date/types/typed-calendar-controller.type.ts:21](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/typed-calendar-controller.type.ts#L21)

Calendar configuration options

***

### selectedDateRange

> **selectedDateRange**: `object`

Defined in: [Date/types/typed-calendar-controller.type.ts:35](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/typed-calendar-controller.type.ts#L35)

Selected date range with flexible property access

#### end

> **end**: `Date` \| `null`

#### endDate

> **endDate**: `Date` \| `null`

#### start

> **start**: `Date` \| `null`

#### startDate

> **startDate**: `Date` \| `null`

## Methods

### clearSelection()

> **clearSelection**(): `void`

Defined in: [Date/types/typed-calendar-controller.type.ts:30](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/typed-calendar-controller.type.ts#L30)

#### Returns

`void`

***

### goToNextMonth()

> **goToNextMonth**(): `void`

Defined in: [Date/types/typed-calendar-controller.type.ts:26](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/typed-calendar-controller.type.ts#L26)

#### Returns

`void`

***

### goToNextYear()

> **goToNextYear**(): `void`

Defined in: [Date/types/typed-calendar-controller.type.ts:28](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/typed-calendar-controller.type.ts#L28)

#### Returns

`void`

***

### goToPreviousMonth()

> **goToPreviousMonth**(): `void`

Defined in: [Date/types/typed-calendar-controller.type.ts:27](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/typed-calendar-controller.type.ts#L27)

#### Returns

`void`

***

### goToPreviousYear()

> **goToPreviousYear**(): `void`

Defined in: [Date/types/typed-calendar-controller.type.ts:29](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/typed-calendar-controller.type.ts#L29)

#### Returns

`void`

***

### selectDate()

> **selectDate**(`yearOrDate`, `month?`, `day?`): `void`

Defined in: [Date/types/typed-calendar-controller.type.ts:25](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/typed-calendar-controller.type.ts#L25)

#### Parameters

##### yearOrDate

`number` | `Date`

##### month?

`number`

##### day?

`number`

#### Returns

`void`

***

### setRangeSelectionMode()

> **setRangeSelectionMode**(`isRange`): `void`

Defined in: [Date/types/typed-calendar-controller.type.ts:31](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/typed-calendar-controller.type.ts#L31)

#### Parameters

##### isRange

`boolean`

#### Returns

`void`
