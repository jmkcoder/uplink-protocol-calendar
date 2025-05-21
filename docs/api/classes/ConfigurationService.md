[**@uplink-protocol/form-controller v0.1.0**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / ConfigurationService

# Class: ConfigurationService

Defined in: services/configuration.service.ts:10

Implementation of ConfigurationService
Responsible for managing calendar configuration

## Implements

- [`IConfigurationService`](../interfaces/IConfigurationService.md)

## Constructors

### Constructor

> **new ConfigurationService**(`_constraintsService`, `_dateFormattingService`): `ConfigurationService`

Defined in: services/configuration.service.ts:14

#### Parameters

##### \_constraintsService

[`IConstraintsService`](../interfaces/IConstraintsService.md)

##### \_dateFormattingService

[`IDateFormattingService`](../interfaces/IDateFormattingService.md)

#### Returns

`ConfigurationService`

## Methods

### applyConfiguration()

> **applyConfiguration**(`options`): `object`

Defined in: services/configuration.service.ts:22

Apply configuration options

#### Parameters

##### options

[`CalendarOptions`](../interfaces/CalendarOptions.md)

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

#### Implementation of

[`IConfigurationService`](../interfaces/IConfigurationService.md).[`applyConfiguration`](../interfaces/IConfigurationService.md#applyconfiguration)

***

### getDateFormat()

> **getDateFormat**(): `null` \| `string`

Defined in: services/configuration.service.ts:93

Get date format

#### Returns

`null` \| `string`

#### Implementation of

[`IConfigurationService`](../interfaces/IConfigurationService.md).[`getDateFormat`](../interfaces/IConfigurationService.md#getdateformat)

***

### getFirstDayOfWeek()

> **getFirstDayOfWeek**(): `number`

Defined in: services/configuration.service.ts:76

Get first day of week

#### Returns

`number`

#### Implementation of

[`IConfigurationService`](../interfaces/IConfigurationService.md).[`getFirstDayOfWeek`](../interfaces/IConfigurationService.md#getfirstdayofweek)

***

### setDateFormat()

> **setDateFormat**(`format`): `null` \| `string`

Defined in: services/configuration.service.ts:100

Set date format

#### Parameters

##### format

`null` | `string`

#### Returns

`null` \| `string`

#### Implementation of

[`IConfigurationService`](../interfaces/IConfigurationService.md).[`setDateFormat`](../interfaces/IConfigurationService.md#setdateformat)

***

### setFirstDayOfWeek()

> **setFirstDayOfWeek**(`day`): `number`

Defined in: services/configuration.service.ts:83

Set first day of week

#### Parameters

##### day

`number`

#### Returns

`number`

#### Implementation of

[`IConfigurationService`](../interfaces/IConfigurationService.md).[`setFirstDayOfWeek`](../interfaces/IConfigurationService.md#setfirstdayofweek)
