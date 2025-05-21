[**@uplink-protocol/form-controller v0.1.1**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / CalendarGeneratorService

# Class: CalendarGeneratorService

Defined in: [services/calendar-generator.service.ts:9](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/services/calendar-generator.service.ts#L9)

Implementation of CalendarGeneratorService
Responsible for generating calendar days based on given options

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

Defined in: [services/calendar-generator.service.ts:13](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/services/calendar-generator.service.ts#L13)

Generate calendar days for a specified month/year

#### Parameters

##### year

`number`

##### month

`number`

##### options

[`CalendarGenerationOptions`](../interfaces/CalendarGenerationOptions.md)

#### Returns

[`CalendarDate`](../interfaces/CalendarDate.md)[]

#### Implementation of

[`ICalendarGeneratorService`](../interfaces/ICalendarGeneratorService.md).[`generateCalendarDays`](../interfaces/ICalendarGeneratorService.md#generatecalendardays)

***

### generateCalendarMonths()

> **generateCalendarMonths**(`year`, `options`): [`CalendarMonth`](../interfaces/CalendarMonth.md)[]

Defined in: [services/calendar-generator.service.ts:238](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/services/calendar-generator.service.ts#L238)

Generate calendar months for a specified year

#### Parameters

##### year

`number`

##### options

[`MonthViewGenerationOptions`](../interfaces/MonthViewGenerationOptions.md)

#### Returns

[`CalendarMonth`](../interfaces/CalendarMonth.md)[]

#### Implementation of

[`ICalendarGeneratorService`](../interfaces/ICalendarGeneratorService.md).[`generateCalendarMonths`](../interfaces/ICalendarGeneratorService.md#generatecalendarmonths)

***

### generateCalendarYears()

> **generateCalendarYears**(`baseYear`, `rangeSize`, `options`): [`CalendarYear`](../interfaces/CalendarYear.md)[]

Defined in: [services/calendar-generator.service.ts:295](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/services/calendar-generator.service.ts#L295)

Generate calendar years for a specified year range

#### Parameters

##### baseYear

`number`

##### rangeSize

`number`

##### options

[`YearViewGenerationOptions`](../interfaces/YearViewGenerationOptions.md)

#### Returns

[`CalendarYear`](../interfaces/CalendarYear.md)[]

#### Implementation of

[`ICalendarGeneratorService`](../interfaces/ICalendarGeneratorService.md).[`generateCalendarYears`](../interfaces/ICalendarGeneratorService.md#generatecalendaryears)

***

### getCalendarDaysGenerator()

> **getCalendarDaysGenerator**(`getCurrentDate`, `getCalendarOptions`): () => [`CalendarDate`](../interfaces/CalendarDate.md)[]

Defined in: [services/calendar-generator.service.ts:128](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/services/calendar-generator.service.ts#L128)

Get calendar days generation function
Returns a function that can be called to generate calendar days

#### Parameters

##### getCurrentDate

() => `Date`

##### getCalendarOptions

() => [`CalendarGenerationOptions`](../interfaces/CalendarGenerationOptions.md)

#### Returns

> (): [`CalendarDate`](../interfaces/CalendarDate.md)[]

##### Returns

[`CalendarDate`](../interfaces/CalendarDate.md)[]

#### Implementation of

[`ICalendarGeneratorService`](../interfaces/ICalendarGeneratorService.md).[`getCalendarDaysGenerator`](../interfaces/ICalendarGeneratorService.md#getcalendardaysgenerator)
