[**@uplink-protocol/form-controller v0.1.0**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / IConfigurationService

# Interface: IConfigurationService

Defined in: [interfaces/configuration.service.interfaces.ts:7](https://github.com/jmkcoder/uplink-protocol-calendar/blob/37dc792b8a1827808b6d945b0ed3805e9835a62c/src/interfaces/configuration.service.interfaces.ts#L7)

Configuration service interface
Responsible for managing calendar configuration

## Methods

### applyConfiguration()

> **applyConfiguration**(`options`): `object`

Defined in: [interfaces/configuration.service.interfaces.ts:9](https://github.com/jmkcoder/uplink-protocol-calendar/blob/37dc792b8a1827808b6d945b0ed3805e9835a62c/src/interfaces/configuration.service.interfaces.ts#L9)

#### Parameters

##### options

[`CalendarOptions`](CalendarOptions.md)

#### Returns

`object`

##### dateFormat

> **dateFormat**: `null` \| `string`

##### dateFormatOptions?

> `optional` **dateFormatOptions**: `DateTimeFormatOptions`

##### disabledDates

> **disabledDates**: `Date`[]

##### firstDayOfWeek

> **firstDayOfWeek**: `number`

##### hideOtherMonthDays

> **hideOtherMonthDays**: `boolean`

##### locale?

> `optional` **locale**: `string`

##### maxDate

> **maxDate**: `null` \| `Date`

##### minDate

> **minDate**: `null` \| `Date`

##### selectedDate

> **selectedDate**: `null` \| `Date`

***

### getDateFormat()

> **getDateFormat**(): `null` \| `string`

Defined in: [interfaces/configuration.service.interfaces.ts:34](https://github.com/jmkcoder/uplink-protocol-calendar/blob/37dc792b8a1827808b6d945b0ed3805e9835a62c/src/interfaces/configuration.service.interfaces.ts#L34)

Get date format

#### Returns

`null` \| `string`

***

### getFirstDayOfWeek()

> **getFirstDayOfWeek**(): `number`

Defined in: [interfaces/configuration.service.interfaces.ts:24](https://github.com/jmkcoder/uplink-protocol-calendar/blob/37dc792b8a1827808b6d945b0ed3805e9835a62c/src/interfaces/configuration.service.interfaces.ts#L24)

Get first day of week

#### Returns

`number`

***

### setDateFormat()

> **setDateFormat**(`format`): `null` \| `string`

Defined in: [interfaces/configuration.service.interfaces.ts:39](https://github.com/jmkcoder/uplink-protocol-calendar/blob/37dc792b8a1827808b6d945b0ed3805e9835a62c/src/interfaces/configuration.service.interfaces.ts#L39)

Set date format

#### Parameters

##### format

`null` | `string`

#### Returns

`null` \| `string`

***

### setFirstDayOfWeek()

> **setFirstDayOfWeek**(`day`): `number`

Defined in: [interfaces/configuration.service.interfaces.ts:29](https://github.com/jmkcoder/uplink-protocol-calendar/blob/37dc792b8a1827808b6d945b0ed3805e9835a62c/src/interfaces/configuration.service.interfaces.ts#L29)

Set first day of week

#### Parameters

##### day

`number`

#### Returns

`number`
