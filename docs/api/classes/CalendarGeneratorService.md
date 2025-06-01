[**@uplink-protocol/form-controller v0.2.0**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / CalendarGeneratorService

# Class: CalendarGeneratorService

Defined in: [services/calendar-generator.service.ts:24](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/services/calendar-generator.service.ts#L24)

Implementation of CalendarGeneratorService
Responsible for generating calendar data structures

## Implements

- [`ICalendarGeneratorService`](../interfaces/ICalendarGeneratorService.md)

## Constructors

### Constructor

> **new CalendarGeneratorService**(): `CalendarGeneratorService`

#### Returns

`CalendarGeneratorService`

## Methods

### generateCalendarDays()

> **generateCalendarDays**(`year`, `month`, `options`): [`CalendarDate`](../interfaces/CalendarDate.md)[]

Defined in: [services/calendar-generator.service.ts:62](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/services/calendar-generator.service.ts#L62)

Generate calendar days for a specific month/year

#### Parameters

##### year

`number`

Year

##### month

`number`

Month (0-11)

##### options

[`CalendarGenerationOptions`](../interfaces/CalendarGenerationOptions.md)

Calendar generation options

#### Returns

[`CalendarDate`](../interfaces/CalendarDate.md)[]

Array of calendar dates

#### Implementation of

[`ICalendarGeneratorService`](../interfaces/ICalendarGeneratorService.md).[`generateCalendarDays`](../interfaces/ICalendarGeneratorService.md#generatecalendardays)

***

### generateCalendarMonths()

> **generateCalendarMonths**(`year`, `options`): [`CalendarMonth`](../interfaces/CalendarMonth.md)[]

Defined in: [services/calendar-generator.service.ts:132](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/services/calendar-generator.service.ts#L132)

Generate an array of calendar months for a year view

#### Parameters

##### year

`number`

Year to generate months for

##### options

[`MonthViewGenerationOptions`](../interfaces/MonthViewGenerationOptions.md)

Month view generation options

#### Returns

[`CalendarMonth`](../interfaces/CalendarMonth.md)[]

Array of calendar month objects

#### Implementation of

[`ICalendarGeneratorService`](../interfaces/ICalendarGeneratorService.md).[`generateCalendarMonths`](../interfaces/ICalendarGeneratorService.md#generatecalendarmonths)

***

### generateCalendarYears()

> **generateCalendarYears**(`baseYear`, `rangeSize`, `options`): [`CalendarYear`](../interfaces/CalendarYear.md)[]

Defined in: [services/calendar-generator.service.ts:171](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/services/calendar-generator.service.ts#L171)

Generate an array of calendar years for a year range view

#### Parameters

##### baseYear

`number`

Starting year for the range

##### rangeSize

`number`

Number of years to generate

##### options

[`YearViewGenerationOptions`](../interfaces/YearViewGenerationOptions.md)

Year view generation options

#### Returns

[`CalendarYear`](../interfaces/CalendarYear.md)[]

Array of calendar year objects

#### Implementation of

[`ICalendarGeneratorService`](../interfaces/ICalendarGeneratorService.md).[`generateCalendarYears`](../interfaces/ICalendarGeneratorService.md#generatecalendaryears)

***

### generateDecadeView()

> **generateDecadeView**(`baseYear`, `options`): `object`

Defined in: [services/calendar-generator.service.ts:395](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/services/calendar-generator.service.ts#L395)

Generate decade view (10 years)

#### Parameters

##### baseYear

`number`

Base year for the decade view

##### options

[`YearViewGenerationOptions`](../interfaces/YearViewGenerationOptions.md)

Year view generation options

#### Returns

`object`

Object with decade view data

##### endYear

> **endYear**: `number`

##### startYear

> **startYear**: `number`

##### years

> **years**: [`CalendarYear`](../interfaces/CalendarYear.md)[]

***

### generateMonthView()

> **generateMonthView**(`year`, `month`, `options`): `object`

Defined in: [services/calendar-generator.service.ts:303](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/services/calendar-generator.service.ts#L303)

Generate month view for a specific month/year

#### Parameters

##### year

`number`

Year

##### month

`number`

Month (0-11)

##### options

[`CalendarGenerationOptions`](../interfaces/CalendarGenerationOptions.md)

Calendar generation options

#### Returns

`object`

Object with month view data

##### month

> **month**: `number`

##### weekdays

> **weekdays**: `string`[]

##### weeks

> **weeks**: `object`[]

##### year

> **year**: `number`

#### Implementation of

[`ICalendarGeneratorService`](../interfaces/ICalendarGeneratorService.md).[`generateMonthView`](../interfaces/ICalendarGeneratorService.md#generatemonthview)

***

### generateMultiYearView()

> **generateMultiYearView**(`baseYear`, `options`): `object`

Defined in: [services/calendar-generator.service.ts:425](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/services/calendar-generator.service.ts#L425)

Generate multi-year view (typically for selecting a year within a decade or larger range)

#### Parameters

##### baseYear

`number`

Base year for the multi-year view

##### options

[`YearViewGenerationOptions`](../interfaces/YearViewGenerationOptions.md)

Year view generation options

#### Returns

`object`

Object with multi-year view data

##### decades

> **decades**: `object`[]

##### endYear

> **endYear**: `number`

##### startYear

> **startYear**: `number`

##### years

> **years**: [`CalendarYear`](../interfaces/CalendarYear.md)[]

***

### generateYearView()

> **generateYearView**(`year`, `options`): `object`

Defined in: [services/calendar-generator.service.ts:375](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/services/calendar-generator.service.ts#L375)

Generate year view with all months for a specific year

#### Parameters

##### year

`number`

Year to generate view for

##### options

[`YearViewGenerationOptions`](../interfaces/YearViewGenerationOptions.md)

Year view generation options

#### Returns

`object`

Object with year view data

##### months

> **months**: [`CalendarMonth`](../interfaces/CalendarMonth.md)[]

##### year

> **year**: `number`

***

### getCalendarDaysGenerator()

> **getCalendarDaysGenerator**(`getCurrentDate`, `getCalendarOptions`): () => [`CalendarDate`](../interfaces/CalendarDate.md)[]

Defined in: [services/calendar-generator.service.ts:283](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/services/calendar-generator.service.ts#L283)

Get calendar days generation function
Returns a function that can be called to generate calendar days

#### Parameters

##### getCurrentDate

() => `Date`

Function to get current date

##### getCalendarOptions

() => [`CalendarGenerationOptions`](../interfaces/CalendarGenerationOptions.md)

Function to get calendar options

#### Returns

Function that generates calendar days

> (): [`CalendarDate`](../interfaces/CalendarDate.md)[]

##### Returns

[`CalendarDate`](../interfaces/CalendarDate.md)[]

#### Implementation of

[`ICalendarGeneratorService`](../interfaces/ICalendarGeneratorService.md).[`getCalendarDaysGenerator`](../interfaces/ICalendarGeneratorService.md#getcalendardaysgenerator)

***

### getWeekNumber()

> **getWeekNumber**(`date`, `locale?`): `number`

Defined in: [services/calendar-generator.service.ts:30](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/services/calendar-generator.service.ts#L30)

#### Parameters

##### date

`Date`

##### locale?

`string`

#### Returns

`number`
