[**@uplink-protocol/form-controller v0.1.0**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / CalendarService

# Class: CalendarService

Defined in: services/calendar.service.ts:14

Implementation of CalendarService 
Responsible for calendar generation and navigation functions

## Implements

- [`ICalendarService`](../interfaces/ICalendarService.md)

## Constructors

### Constructor

> **new CalendarService**(): `CalendarService`

#### Returns

`CalendarService`

## Methods

### generateCalendarDays()

> **generateCalendarDays**(`year`, `month`, `options`): [`CalendarDate`](../interfaces/CalendarDate.md)[]

Defined in: services/calendar.service.ts:22

Generate calendar days for a specific month/year

#### Parameters

##### year

`number`

The year

##### month

`number`

The month (0-11)

##### options

[`CalendarGenerationOptions`](../interfaces/CalendarGenerationOptions.md)

Options for calendar generation

#### Returns

[`CalendarDate`](../interfaces/CalendarDate.md)[]

Array of CalendarDate objects

#### Implementation of

[`ICalendarService`](../interfaces/ICalendarService.md).[`generateCalendarDays`](../interfaces/ICalendarService.md#generatecalendardays)

***

### getMonthName()

> **getMonthName**(`month`): `string`

Defined in: services/calendar.service.ts:140

Get month name from month index

#### Parameters

##### month

`number`

Month index (0-11)

#### Returns

`string`

Month name

#### Implementation of

[`ICalendarService`](../interfaces/ICalendarService.md).[`getMonthName`](../interfaces/ICalendarService.md#getmonthname)

***

### getNextMonth()

> **getNextMonth**(`currentDate`): `Date`

Defined in: services/calendar.service.ts:163

Navigate to next month from current date

#### Parameters

##### currentDate

`Date`

Current date

#### Returns

`Date`

New date in the next month

#### Implementation of

[`ICalendarService`](../interfaces/ICalendarService.md).[`getNextMonth`](../interfaces/ICalendarService.md#getnextmonth)

***

### getNextYear()

> **getNextYear**(`currentDate`): `Date`

Defined in: services/calendar.service.ts:185

Navigate to next year from current date

#### Parameters

##### currentDate

`Date`

Current date

#### Returns

`Date`

New date in the next year

#### Implementation of

[`ICalendarService`](../interfaces/ICalendarService.md).[`getNextYear`](../interfaces/ICalendarService.md#getnextyear)

***

### getPreviousMonth()

> **getPreviousMonth**(`currentDate`): `Date`

Defined in: services/calendar.service.ts:174

Navigate to previous month from current date

#### Parameters

##### currentDate

`Date`

Current date

#### Returns

`Date`

New date in the previous month

#### Implementation of

[`ICalendarService`](../interfaces/ICalendarService.md).[`getPreviousMonth`](../interfaces/ICalendarService.md#getpreviousmonth)

***

### getPreviousYear()

> **getPreviousYear**(`currentDate`): `Date`

Defined in: services/calendar.service.ts:196

Navigate to previous year from current date

#### Parameters

##### currentDate

`Date`

Current date

#### Returns

`Date`

New date in the previous year

#### Implementation of

[`ICalendarService`](../interfaces/ICalendarService.md).[`getPreviousYear`](../interfaces/ICalendarService.md#getpreviousyear)

***

### getWeekdayNames()

> **getWeekdayNames**(`firstDayOfWeek`): `string`[]

Defined in: services/calendar.service.ts:153

Get weekday names starting from specified first day

#### Parameters

##### firstDayOfWeek

`number`

First day of week (0 = Sunday, 1 = Monday, etc.)

#### Returns

`string`[]

Array of weekday names

#### Implementation of

[`ICalendarService`](../interfaces/ICalendarService.md).[`getWeekdayNames`](../interfaces/ICalendarService.md#getweekdaynames)
