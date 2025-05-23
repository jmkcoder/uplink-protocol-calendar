[**@uplink-protocol/form-controller v0.1.3**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / ConfigurationService

# Class: ConfigurationService

Defined in: [services/configuration.service.ts:10](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b7ce0ea27c5f5fc885d8d11198b3335a1464aa83/src/services/configuration.service.ts#L10)

Implementation of ConfigurationService
Responsible for managing calendar configuration

## Implements

- [`IConfigurationService`](../interfaces/IConfigurationService.md)

## Constructors

### Constructor

> **new ConfigurationService**(`_constraintsService`, `_dateFormattingService`): `ConfigurationService`

Defined in: [services/configuration.service.ts:16](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b7ce0ea27c5f5fc885d8d11198b3335a1464aa83/src/services/configuration.service.ts#L16)

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

Defined in: [services/configuration.service.ts:24](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b7ce0ea27c5f5fc885d8d11198b3335a1464aa83/src/services/configuration.service.ts#L24)

Apply configuration options

#### Parameters

##### options

[`CalendarOptions`](../interfaces/CalendarOptions.md)

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

##### isRangeSelection

> **isRangeSelection**: `boolean`

##### locale?

> `optional` **locale**: `string`

##### maxDate

> **maxDate**: `null` \| `Date`

##### minDate

> **minDate**: `null` \| `Date`

##### selectedDate

> **selectedDate**: `null` \| `Date`

##### showWeekNumbers

> **showWeekNumbers**: `boolean`

#### Implementation of

[`IConfigurationService`](../interfaces/IConfigurationService.md).[`applyConfiguration`](../interfaces/IConfigurationService.md#applyconfiguration)

***

### getDateFormat()

> **getDateFormat**(): `null` \| `string`

Defined in: [services/configuration.service.ts:124](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b7ce0ea27c5f5fc885d8d11198b3335a1464aa83/src/services/configuration.service.ts#L124)

Get date format

#### Returns

`null` \| `string`

#### Implementation of

[`IConfigurationService`](../interfaces/IConfigurationService.md).[`getDateFormat`](../interfaces/IConfigurationService.md#getdateformat)

***

### getFirstDayOfWeek()

> **getFirstDayOfWeek**(): `number`

Defined in: [services/configuration.service.ts:107](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b7ce0ea27c5f5fc885d8d11198b3335a1464aa83/src/services/configuration.service.ts#L107)

Get first day of week

#### Returns

`number`

#### Implementation of

[`IConfigurationService`](../interfaces/IConfigurationService.md).[`getFirstDayOfWeek`](../interfaces/IConfigurationService.md#getfirstdayofweek)

***

### getHideOtherMonthDays()

> **getHideOtherMonthDays**(): `boolean`

Defined in: [services/configuration.service.ts:142](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b7ce0ea27c5f5fc885d8d11198b3335a1464aa83/src/services/configuration.service.ts#L142)

Get hide other month days setting

#### Returns

`boolean`

#### Implementation of

[`IConfigurationService`](../interfaces/IConfigurationService.md).[`getHideOtherMonthDays`](../interfaces/IConfigurationService.md#gethideothermonthdays)

***

### getIsRangeSelection()

> **getIsRangeSelection**(): `boolean`

Defined in: [services/configuration.service.ts:172](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b7ce0ea27c5f5fc885d8d11198b3335a1464aa83/src/services/configuration.service.ts#L172)

Get range selection mode setting

#### Returns

`boolean`

#### Implementation of

[`IConfigurationService`](../interfaces/IConfigurationService.md).[`getIsRangeSelection`](../interfaces/IConfigurationService.md#getisrangeselection)

***

### getShowWeekNumbers()

> **getShowWeekNumbers**(): `boolean`

Defined in: [services/configuration.service.ts:157](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b7ce0ea27c5f5fc885d8d11198b3335a1464aa83/src/services/configuration.service.ts#L157)

Get show week numbers setting

#### Returns

`boolean`

#### Implementation of

[`IConfigurationService`](../interfaces/IConfigurationService.md).[`getShowWeekNumbers`](../interfaces/IConfigurationService.md#getshowweeknumbers)

***

### setDateFormat()

> **setDateFormat**(`format`): `null` \| `string`

Defined in: [services/configuration.service.ts:131](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b7ce0ea27c5f5fc885d8d11198b3335a1464aa83/src/services/configuration.service.ts#L131)

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

Defined in: [services/configuration.service.ts:114](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b7ce0ea27c5f5fc885d8d11198b3335a1464aa83/src/services/configuration.service.ts#L114)

Set first day of week

#### Parameters

##### day

`number`

#### Returns

`number`

#### Implementation of

[`IConfigurationService`](../interfaces/IConfigurationService.md).[`setFirstDayOfWeek`](../interfaces/IConfigurationService.md#setfirstdayofweek)

***

### setHideOtherMonthDays()

> **setHideOtherMonthDays**(`hide`): `boolean`

Defined in: [services/configuration.service.ts:149](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b7ce0ea27c5f5fc885d8d11198b3335a1464aa83/src/services/configuration.service.ts#L149)

Set hide other month days setting

#### Parameters

##### hide

`boolean`

#### Returns

`boolean`

#### Implementation of

[`IConfigurationService`](../interfaces/IConfigurationService.md).[`setHideOtherMonthDays`](../interfaces/IConfigurationService.md#sethideothermonthdays)

***

### setIsRangeSelection()

> **setIsRangeSelection**(`isRange`): `boolean`

Defined in: [services/configuration.service.ts:179](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b7ce0ea27c5f5fc885d8d11198b3335a1464aa83/src/services/configuration.service.ts#L179)

Set range selection mode setting

#### Parameters

##### isRange

`boolean`

#### Returns

`boolean`

#### Implementation of

[`IConfigurationService`](../interfaces/IConfigurationService.md).[`setIsRangeSelection`](../interfaces/IConfigurationService.md#setisrangeselection)

***

### setShowWeekNumbers()

> **setShowWeekNumbers**(`show`): `boolean`

Defined in: [services/configuration.service.ts:164](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b7ce0ea27c5f5fc885d8d11198b3335a1464aa83/src/services/configuration.service.ts#L164)

Set show week numbers setting

#### Parameters

##### show

`boolean`

#### Returns

`boolean`

#### Implementation of

[`IConfigurationService`](../interfaces/IConfigurationService.md).[`setShowWeekNumbers`](../interfaces/IConfigurationService.md#setshowweeknumbers)
