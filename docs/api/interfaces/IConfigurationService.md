[**@uplink-protocol/form-controller v0.1.0**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / IConfigurationService

# Interface: IConfigurationService

Defined in: interfaces/configuration.service.interfaces.ts:7

Configuration service interface
Responsible for managing calendar configuration

## Methods

### applyConfiguration()

> **applyConfiguration**(`options`): `object`

Defined in: interfaces/configuration.service.interfaces.ts:11

Apply configuration options

#### Parameters

##### options

[`CalendarOptions`](CalendarOptions.md)

#### Returns

`object`

##### dateFormat

> **dateFormat**: `null` \| `string`

##### disabledDates

> **disabledDates**: `Date`[]

##### firstDayOfWeek

> **firstDayOfWeek**: `number`

##### maxDate

> **maxDate**: `null` \| `Date`

##### minDate

> **minDate**: `null` \| `Date`

##### selectedDate

> **selectedDate**: `null` \| `Date`

***

### getDateFormat()

> **getDateFormat**(): `null` \| `string`

Defined in: interfaces/configuration.service.interfaces.ts:33

Get date format

#### Returns

`null` \| `string`

***

### getFirstDayOfWeek()

> **getFirstDayOfWeek**(): `number`

Defined in: interfaces/configuration.service.interfaces.ts:23

Get first day of week

#### Returns

`number`

***

### setDateFormat()

> **setDateFormat**(`format`): `null` \| `string`

Defined in: interfaces/configuration.service.interfaces.ts:38

Set date format

#### Parameters

##### format

`null` | `string`

#### Returns

`null` \| `string`

***

### setFirstDayOfWeek()

> **setFirstDayOfWeek**(`day`): `number`

Defined in: interfaces/configuration.service.interfaces.ts:28

Set first day of week

#### Parameters

##### day

`number`

#### Returns

`number`
