[**@uplink-protocol/form-controller v0.2.2**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / TypedCalendarController

# Interface: TypedCalendarController

Defined in: [types/calendar-controller.types.ts:298](https://github.com/jmkcoder/uplink-protocol-calendar/blob/9a15037d7723ff15fbca8c4cbbcd3a222733e98e/src/types/calendar-controller.types.ts#L298)

Complete Calendar Controller Interface
Combines all the above interfaces into a single comprehensive type

## Extended by

- [`CalendarControllerInterface`](CalendarControllerInterface.md)
- [`CalendarControllerInstance`](CalendarControllerInstance.md)

## Properties

### bindings

> **bindings**: [`CalendarControllerBindings`](CalendarControllerBindings.md)

Defined in: [types/calendar-controller.types.ts:300](https://github.com/jmkcoder/uplink-protocol-calendar/blob/9a15037d7723ff15fbca8c4cbbcd3a222733e98e/src/types/calendar-controller.types.ts#L300)

Reactive state bindings

***

### events

> **events**: [`CalendarControllerEvents`](CalendarControllerEvents.md)

Defined in: [types/calendar-controller.types.ts:306](https://github.com/jmkcoder/uplink-protocol-calendar/blob/9a15037d7723ff15fbca8c4cbbcd3a222733e98e/src/types/calendar-controller.types.ts#L306)

Event emitters

***

### methods

> **methods**: [`CalendarControllerMethods`](CalendarControllerMethods.md)

Defined in: [types/calendar-controller.types.ts:303](https://github.com/jmkcoder/uplink-protocol-calendar/blob/9a15037d7723ff15fbca8c4cbbcd3a222733e98e/src/types/calendar-controller.types.ts#L303)

Available methods

***

### options?

> `optional` **options**: [`CalendarOptions`](CalendarOptions.md)

Defined in: [types/calendar-controller.types.ts:309](https://github.com/jmkcoder/uplink-protocol-calendar/blob/9a15037d7723ff15fbca8c4cbbcd3a222733e98e/src/types/calendar-controller.types.ts#L309)

Calendar configuration options

***

### selectedDateRange

> **selectedDateRange**: `object`

Defined in: [types/calendar-controller.types.ts:323](https://github.com/jmkcoder/uplink-protocol-calendar/blob/9a15037d7723ff15fbca8c4cbbcd3a222733e98e/src/types/calendar-controller.types.ts#L323)

Selected date range with flexible property access

#### end

> **end**: `null` \| `Date`

#### endDate

> **endDate**: `null` \| `Date`

#### start

> **start**: `null` \| `Date`

#### startDate

> **startDate**: `null` \| `Date`

## Methods

### clearSelection()

> **clearSelection**(): `void`

Defined in: [types/calendar-controller.types.ts:318](https://github.com/jmkcoder/uplink-protocol-calendar/blob/9a15037d7723ff15fbca8c4cbbcd3a222733e98e/src/types/calendar-controller.types.ts#L318)

#### Returns

`void`

***

### goToNextMonth()

> **goToNextMonth**(): `void`

Defined in: [types/calendar-controller.types.ts:314](https://github.com/jmkcoder/uplink-protocol-calendar/blob/9a15037d7723ff15fbca8c4cbbcd3a222733e98e/src/types/calendar-controller.types.ts#L314)

#### Returns

`void`

***

### goToNextYear()

> **goToNextYear**(): `void`

Defined in: [types/calendar-controller.types.ts:316](https://github.com/jmkcoder/uplink-protocol-calendar/blob/9a15037d7723ff15fbca8c4cbbcd3a222733e98e/src/types/calendar-controller.types.ts#L316)

#### Returns

`void`

***

### goToPreviousMonth()

> **goToPreviousMonth**(): `void`

Defined in: [types/calendar-controller.types.ts:315](https://github.com/jmkcoder/uplink-protocol-calendar/blob/9a15037d7723ff15fbca8c4cbbcd3a222733e98e/src/types/calendar-controller.types.ts#L315)

#### Returns

`void`

***

### goToPreviousYear()

> **goToPreviousYear**(): `void`

Defined in: [types/calendar-controller.types.ts:317](https://github.com/jmkcoder/uplink-protocol-calendar/blob/9a15037d7723ff15fbca8c4cbbcd3a222733e98e/src/types/calendar-controller.types.ts#L317)

#### Returns

`void`

***

### selectDate()

> **selectDate**(`yearOrDate`, `month?`, `day?`): `void`

Defined in: [types/calendar-controller.types.ts:313](https://github.com/jmkcoder/uplink-protocol-calendar/blob/9a15037d7723ff15fbca8c4cbbcd3a222733e98e/src/types/calendar-controller.types.ts#L313)

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

Defined in: [types/calendar-controller.types.ts:319](https://github.com/jmkcoder/uplink-protocol-calendar/blob/9a15037d7723ff15fbca8c4cbbcd3a222733e98e/src/types/calendar-controller.types.ts#L319)

#### Parameters

##### isRange

`boolean`

#### Returns

`void`
