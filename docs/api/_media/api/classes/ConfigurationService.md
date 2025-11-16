[**@uplink-protocol/form-controller v0.3.1**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / ConfigurationService

# Class: ConfigurationService

Defined in: [Date/services/configuration.service.ts:10](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/services/configuration.service.ts#L10)

Implementation of ConfigurationService
Responsible for managing calendar configuration

## Implements

- [`IConfigurationService`](../interfaces/IConfigurationService.md)

## Constructors

### Constructor

> **new ConfigurationService**(`_constraintsService`, `_dateFormattingService`): `ConfigurationService`

Defined in: [Date/services/configuration.service.ts:16](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/services/configuration.service.ts#L16)

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

Defined in: [Date/services/configuration.service.ts:22](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/services/configuration.service.ts#L22)

Apply configuration options

#### Parameters

##### options

[`CalendarOptions`](../interfaces/CalendarOptions.md)

#### Returns

`object`

##### dateFormat

> **dateFormat**: `string` \| `null`

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

> **maxDate**: `Date` \| `null`

##### minDate

> **minDate**: `Date` \| `null`

##### selectedDate

> **selectedDate**: `Date` \| `null`

##### showWeekNumbers

> **showWeekNumbers**: `boolean`

#### Implementation of

[`IConfigurationService`](../interfaces/IConfigurationService.md).[`applyConfiguration`](../interfaces/IConfigurationService.md#applyconfiguration)

***

### getDateFormat()

> **getDateFormat**(): `string` \| `null`

Defined in: [Date/services/configuration.service.ts:118](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/services/configuration.service.ts#L118)

Get date format

#### Returns

`string` \| `null`

#### Implementation of

[`IConfigurationService`](../interfaces/IConfigurationService.md).[`getDateFormat`](../interfaces/IConfigurationService.md#getdateformat)

***

### getFirstDayOfWeek()

> **getFirstDayOfWeek**(): `number`

Defined in: [Date/services/configuration.service.ts:101](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/services/configuration.service.ts#L101)

Get first day of week

#### Returns

`number`

#### Implementation of

[`IConfigurationService`](../interfaces/IConfigurationService.md).[`getFirstDayOfWeek`](../interfaces/IConfigurationService.md#getfirstdayofweek)

***

### getHideOtherMonthDays()

> **getHideOtherMonthDays**(): `boolean`

Defined in: [Date/services/configuration.service.ts:136](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/services/configuration.service.ts#L136)

Get hide other month days setting

#### Returns

`boolean`

#### Implementation of

[`IConfigurationService`](../interfaces/IConfigurationService.md).[`getHideOtherMonthDays`](../interfaces/IConfigurationService.md#gethideothermonthdays)

***

### getIsRangeSelection()

> **getIsRangeSelection**(): `boolean`

Defined in: [Date/services/configuration.service.ts:164](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/services/configuration.service.ts#L164)

Get range selection mode setting

#### Returns

`boolean`

#### Implementation of

[`IConfigurationService`](../interfaces/IConfigurationService.md).[`getIsRangeSelection`](../interfaces/IConfigurationService.md#getisrangeselection)

***

### getShowWeekNumbers()

> **getShowWeekNumbers**(): `boolean`

Defined in: [Date/services/configuration.service.ts:149](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/services/configuration.service.ts#L149)

Get show week numbers setting

#### Returns

`boolean`

#### Implementation of

[`IConfigurationService`](../interfaces/IConfigurationService.md).[`getShowWeekNumbers`](../interfaces/IConfigurationService.md#getshowweeknumbers)

***

### setDateFormat()

> **setDateFormat**(`format`): `string` \| `null`

Defined in: [Date/services/configuration.service.ts:125](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/services/configuration.service.ts#L125)

Set date format

#### Parameters

##### format

`string` | `null`

#### Returns

`string` \| `null`

#### Implementation of

[`IConfigurationService`](../interfaces/IConfigurationService.md).[`setDateFormat`](../interfaces/IConfigurationService.md#setdateformat)

***

### setFirstDayOfWeek()

> **setFirstDayOfWeek**(`day`): `number`

Defined in: [Date/services/configuration.service.ts:108](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/services/configuration.service.ts#L108)

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

Defined in: [Date/services/configuration.service.ts:143](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/services/configuration.service.ts#L143)

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

Defined in: [Date/services/configuration.service.ts:171](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/services/configuration.service.ts#L171)

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

Defined in: [Date/services/configuration.service.ts:156](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/services/configuration.service.ts#L156)

Set show week numbers setting

#### Parameters

##### show

`boolean`

#### Returns

`boolean`

#### Implementation of

[`IConfigurationService`](../interfaces/IConfigurationService.md).[`setShowWeekNumbers`](../interfaces/IConfigurationService.md#setshowweeknumbers)
