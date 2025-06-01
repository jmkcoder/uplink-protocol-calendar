[**@uplink-protocol/form-controller v0.2.0**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / IConfigurationService

# Interface: IConfigurationService

Defined in: [interfaces/configuration.service.interfaces.ts:7](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/interfaces/configuration.service.interfaces.ts#L7)

Configuration service interface
Responsible for managing calendar configuration

## Methods

### applyConfiguration()

> **applyConfiguration**(`options`): `object`

Defined in: [interfaces/configuration.service.interfaces.ts:9](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/interfaces/configuration.service.interfaces.ts#L9)

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

***

### getDateFormat()

> **getDateFormat**(): `null` \| `string`

Defined in: [interfaces/configuration.service.interfaces.ts:36](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/interfaces/configuration.service.interfaces.ts#L36)

Get date format

#### Returns

`null` \| `string`

***

### getFirstDayOfWeek()

> **getFirstDayOfWeek**(): `number`

Defined in: [interfaces/configuration.service.interfaces.ts:26](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/interfaces/configuration.service.interfaces.ts#L26)

Get first day of week

#### Returns

`number`

***

### getHideOtherMonthDays()

> **getHideOtherMonthDays**(): `boolean`

Defined in: [interfaces/configuration.service.interfaces.ts:45](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/interfaces/configuration.service.interfaces.ts#L45)

Get hide other month days setting

#### Returns

`boolean`

***

### getIsRangeSelection()

> **getIsRangeSelection**(): `boolean`

Defined in: [interfaces/configuration.service.interfaces.ts:65](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/interfaces/configuration.service.interfaces.ts#L65)

Get range selection mode setting

#### Returns

`boolean`

***

### getShowWeekNumbers()

> **getShowWeekNumbers**(): `boolean`

Defined in: [interfaces/configuration.service.interfaces.ts:55](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/interfaces/configuration.service.interfaces.ts#L55)

Get show week numbers setting

#### Returns

`boolean`

***

### setDateFormat()

> **setDateFormat**(`format`): `null` \| `string`

Defined in: [interfaces/configuration.service.interfaces.ts:40](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/interfaces/configuration.service.interfaces.ts#L40)

Set date format

#### Parameters

##### format

`null` | `string`

#### Returns

`null` \| `string`

***

### setFirstDayOfWeek()

> **setFirstDayOfWeek**(`day`): `number`

Defined in: [interfaces/configuration.service.interfaces.ts:31](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/interfaces/configuration.service.interfaces.ts#L31)

Set first day of week

#### Parameters

##### day

`number`

#### Returns

`number`

***

### setHideOtherMonthDays()

> **setHideOtherMonthDays**(`hide`): `boolean`

Defined in: [interfaces/configuration.service.interfaces.ts:50](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/interfaces/configuration.service.interfaces.ts#L50)

Set hide other month days setting

#### Parameters

##### hide

`boolean`

#### Returns

`boolean`

***

### setIsRangeSelection()

> **setIsRangeSelection**(`isRange`): `boolean`

Defined in: [interfaces/configuration.service.interfaces.ts:70](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/interfaces/configuration.service.interfaces.ts#L70)

Set range selection mode setting

#### Parameters

##### isRange

`boolean`

#### Returns

`boolean`

***

### setShowWeekNumbers()

> **setShowWeekNumbers**(`show`): `boolean`

Defined in: [interfaces/configuration.service.interfaces.ts:60](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/interfaces/configuration.service.interfaces.ts#L60)

Set show week numbers setting

#### Parameters

##### show

`boolean`

#### Returns

`boolean`
