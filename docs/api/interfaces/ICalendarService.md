[**@uplink-protocol/form-controller v0.1.0**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / ICalendarService

# Interface: ICalendarService

Defined in: interfaces/calendar.service.interfaces.ts:7

Calendar service interface
Responsible for calendar generation and navigation functions

## Methods

### generateCalendarDays()

> **generateCalendarDays**(`year`, `month`, `options`): [`CalendarDate`](CalendarDate.md)[]

Defined in: interfaces/calendar.service.interfaces.ts:11

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

### getMonthName()

> **getMonthName**(`month`): `string`

Defined in: interfaces/calendar.service.interfaces.ts:20

Get month name from month index

#### Parameters

##### month

`number`

#### Returns

`string`

***

### getNextMonth()

> **getNextMonth**(`currentDate`): `Date`

Defined in: interfaces/calendar.service.interfaces.ts:30

Navigate to next month from current date

#### Parameters

##### currentDate

`Date`

#### Returns

`Date`

***

### getNextYear()

> **getNextYear**(`currentDate`): `Date`

Defined in: interfaces/calendar.service.interfaces.ts:40

Navigate to next year from current date

#### Parameters

##### currentDate

`Date`

#### Returns

`Date`

***

### getPreviousMonth()

> **getPreviousMonth**(`currentDate`): `Date`

Defined in: interfaces/calendar.service.interfaces.ts:35

Navigate to previous month from current date

#### Parameters

##### currentDate

`Date`

#### Returns

`Date`

***

### getPreviousYear()

> **getPreviousYear**(`currentDate`): `Date`

Defined in: interfaces/calendar.service.interfaces.ts:45

Navigate to previous year from current date

#### Parameters

##### currentDate

`Date`

#### Returns

`Date`

***

### getWeekdayNames()

> **getWeekdayNames**(`firstDayOfWeek`): `string`[]

Defined in: interfaces/calendar.service.interfaces.ts:25

Get weekday names starting from the specified first day

#### Parameters

##### firstDayOfWeek

`number`

#### Returns

`string`[]
