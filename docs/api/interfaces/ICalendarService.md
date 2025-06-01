[**@uplink-protocol/form-controller v0.2.0**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / ICalendarService

# Interface: ICalendarService

Defined in: [interfaces/calendar.service.interfaces.ts:7](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/interfaces/calendar.service.interfaces.ts#L7)

Calendar service interface
Responsible for calendar generation and navigation functions

## Methods

### generateCalendarDays()

> **generateCalendarDays**(`year`, `month`, `options`): [`CalendarDate`](CalendarDate.md)[]

Defined in: [interfaces/calendar.service.interfaces.ts:11](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/interfaces/calendar.service.interfaces.ts#L11)

Generate calendar data for a specific month/year

#### Parameters

##### year

`number`

##### month

`number`

##### options

[`CalendarGenerationOptions`](CalendarGenerationOptions.md)

#### Returns

[`CalendarDate`](CalendarDate.md)[]

***

### getLocalizationService()

> **getLocalizationService**(): `any`

Defined in: [interfaces/calendar.service.interfaces.ts:55](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/interfaces/calendar.service.interfaces.ts#L55)

Get the localization service

#### Returns

`any`

***

### getMonthName()

> **getMonthName**(`month`): `string`

Defined in: [interfaces/calendar.service.interfaces.ts:20](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/interfaces/calendar.service.interfaces.ts#L20)

Get month name from month index

#### Parameters

##### month

`number`

#### Returns

`string`

***

### getNextMonth()

> **getNextMonth**(`currentDate`): `Date`

Defined in: [interfaces/calendar.service.interfaces.ts:30](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/interfaces/calendar.service.interfaces.ts#L30)

Navigate to next month from current date

#### Parameters

##### currentDate

`Date`

#### Returns

`Date`

***

### getNextYear()

> **getNextYear**(`currentDate`): `Date`

Defined in: [interfaces/calendar.service.interfaces.ts:40](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/interfaces/calendar.service.interfaces.ts#L40)

Navigate to next year from current date

#### Parameters

##### currentDate

`Date`

#### Returns

`Date`

***

### getPreviousMonth()

> **getPreviousMonth**(`currentDate`): `Date`

Defined in: [interfaces/calendar.service.interfaces.ts:35](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/interfaces/calendar.service.interfaces.ts#L35)

Navigate to previous month from current date

#### Parameters

##### currentDate

`Date`

#### Returns

`Date`

***

### getPreviousYear()

> **getPreviousYear**(`currentDate`): `Date`

Defined in: [interfaces/calendar.service.interfaces.ts:45](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/interfaces/calendar.service.interfaces.ts#L45)

Navigate to previous year from current date

#### Parameters

##### currentDate

`Date`

#### Returns

`Date`

***

### getWeekdayNames()

> **getWeekdayNames**(`firstDayOfWeek`, `short?`): `string`[]

Defined in: [interfaces/calendar.service.interfaces.ts:25](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/interfaces/calendar.service.interfaces.ts#L25)

Get weekday names starting from the specified first day

#### Parameters

##### firstDayOfWeek

`number`

##### short?

`boolean`

#### Returns

`string`[]

***

### getWeekNumber()

> **getWeekNumber**(`date`): `number`

Defined in: [interfaces/calendar.service.interfaces.ts:65](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/interfaces/calendar.service.interfaces.ts#L65)

Get the ISO week number for a date

#### Parameters

##### date

`Date`

#### Returns

`number`

***

### isToday()

> **isToday**(`date`): `boolean`

Defined in: [interfaces/calendar.service.interfaces.ts:60](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/interfaces/calendar.service.interfaces.ts#L60)

Check if a date is today

#### Parameters

##### date

`Date`

#### Returns

`boolean`

***

### setLocalizationService()

> **setLocalizationService**(`service`): `void`

Defined in: [interfaces/calendar.service.interfaces.ts:50](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/interfaces/calendar.service.interfaces.ts#L50)

Set the localization service

#### Parameters

##### service

`any`

#### Returns

`void`
