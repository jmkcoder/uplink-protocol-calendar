[**@uplink-protocol/form-controller v0.3.1**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / IConfigurationService

# Interface: IConfigurationService

Defined in: [Date/interfaces/configuration.service.interfaces.ts:7](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/interfaces/configuration.service.interfaces.ts#L7)

Configuration service interface
Responsible for managing calendar configuration

## Methods

### applyConfiguration()

> **applyConfiguration**(`options`): `object`

Defined in: [Date/interfaces/configuration.service.interfaces.ts:9](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/interfaces/configuration.service.interfaces.ts#L9)

#### Parameters

##### options

[`CalendarOptions`](CalendarOptions.md)

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

***

### getDateFormat()

> **getDateFormat**(): `string` \| `null`

Defined in: [Date/interfaces/configuration.service.interfaces.ts:36](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/interfaces/configuration.service.interfaces.ts#L36)

Get date format

#### Returns

`string` \| `null`

***

### getFirstDayOfWeek()

> **getFirstDayOfWeek**(): `number`

Defined in: [Date/interfaces/configuration.service.interfaces.ts:26](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/interfaces/configuration.service.interfaces.ts#L26)

Get first day of week

#### Returns

`number`

***

### getHideOtherMonthDays()

> **getHideOtherMonthDays**(): `boolean`

Defined in: [Date/interfaces/configuration.service.interfaces.ts:45](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/interfaces/configuration.service.interfaces.ts#L45)

Get hide other month days setting

#### Returns

`boolean`

***

### getIsRangeSelection()

> **getIsRangeSelection**(): `boolean`

Defined in: [Date/interfaces/configuration.service.interfaces.ts:65](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/interfaces/configuration.service.interfaces.ts#L65)

Get range selection mode setting

#### Returns

`boolean`

***

### getShowWeekNumbers()

> **getShowWeekNumbers**(): `boolean`

Defined in: [Date/interfaces/configuration.service.interfaces.ts:55](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/interfaces/configuration.service.interfaces.ts#L55)

Get show week numbers setting

#### Returns

`boolean`

***

### setDateFormat()

> **setDateFormat**(`format`): `string` \| `null`

Defined in: [Date/interfaces/configuration.service.interfaces.ts:40](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/interfaces/configuration.service.interfaces.ts#L40)

Set date format

#### Parameters

##### format

`string` | `null`

#### Returns

`string` \| `null`

***

### setFirstDayOfWeek()

> **setFirstDayOfWeek**(`day`): `number`

Defined in: [Date/interfaces/configuration.service.interfaces.ts:31](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/interfaces/configuration.service.interfaces.ts#L31)

Set first day of week

#### Parameters

##### day

`number`

#### Returns

`number`

***

### setHideOtherMonthDays()

> **setHideOtherMonthDays**(`hide`): `boolean`

Defined in: [Date/interfaces/configuration.service.interfaces.ts:50](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/interfaces/configuration.service.interfaces.ts#L50)

Set hide other month days setting

#### Parameters

##### hide

`boolean`

#### Returns

`boolean`

***

### setIsRangeSelection()

> **setIsRangeSelection**(`isRange`): `boolean`

Defined in: [Date/interfaces/configuration.service.interfaces.ts:70](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/interfaces/configuration.service.interfaces.ts#L70)

Set range selection mode setting

#### Parameters

##### isRange

`boolean`

#### Returns

`boolean`

***

### setShowWeekNumbers()

> **setShowWeekNumbers**(`show`): `boolean`

Defined in: [Date/interfaces/configuration.service.interfaces.ts:60](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/interfaces/configuration.service.interfaces.ts#L60)

Set show week numbers setting

#### Parameters

##### show

`boolean`

#### Returns

`boolean`
