[**@uplink-protocol/form-controller v0.1.0**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / ICalendarGeneratorService

# Interface: ICalendarGeneratorService

Defined in: interfaces/calendar-generator.service.interfaces.ts:8

Calendar generator service interface
Responsible for generating calendar days based on given options

## Methods

### generateCalendarDays()

> **generateCalendarDays**(`year`, `month`, `options`): [`CalendarDate`](CalendarDate.md)[]

Defined in: interfaces/calendar-generator.service.interfaces.ts:12

Generate calendar days for a specified month/year

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

### getCalendarDaysGenerator()

> **getCalendarDaysGenerator**(`getCurrentDate`, `getCalendarOptions`): () => [`CalendarDate`](CalendarDate.md)[]

Defined in: interfaces/calendar-generator.service.interfaces.ts:22

Get calendar days generation function
Returns a function that can be called to generate calendar days

#### Parameters

##### getCurrentDate

() => `Date`

##### getCalendarOptions

() => [`CalendarGenerationOptions`](CalendarGenerationOptions.md)

#### Returns

> (): [`CalendarDate`](CalendarDate.md)[]

##### Returns

[`CalendarDate`](CalendarDate.md)[]
