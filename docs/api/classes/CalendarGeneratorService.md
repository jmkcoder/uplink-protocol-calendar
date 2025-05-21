[**@uplink-protocol/form-controller v0.1.0**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / CalendarGeneratorService

# Class: CalendarGeneratorService

Defined in: services/calendar-generator.service.ts:9

Implementation of CalendarGeneratorService
Responsible for generating calendar data for different view modes: days, months, and years

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

Defined in: services/calendar-generator.service.ts:13

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

### getCalendarDaysGenerator()

> **getCalendarDaysGenerator**(`getCurrentDate`, `getCalendarOptions`): () => [`CalendarDate`](../interfaces/CalendarDate.md)[]

Defined in: services/calendar-generator.service.ts:104

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
