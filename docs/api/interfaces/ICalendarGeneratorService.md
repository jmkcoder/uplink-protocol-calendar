[**@uplink-protocol/form-controller v0.1.0**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / ICalendarGeneratorService

# Interface: ICalendarGeneratorService

Defined in: [interfaces/calendar-generator.service.interfaces.ts:8](https://github.com/jmkcoder/uplink-protocol-calendar/blob/37dc792b8a1827808b6d945b0ed3805e9835a62c/src/interfaces/calendar-generator.service.interfaces.ts#L8)

Calendar generator service interface
Responsible for generating calendar days based on given options

## Methods

### generateCalendarDays()

> **generateCalendarDays**(`year`, `month`, `options`): [`CalendarDate`](CalendarDate.md)[]

Defined in: [interfaces/calendar-generator.service.interfaces.ts:12](https://github.com/jmkcoder/uplink-protocol-calendar/blob/37dc792b8a1827808b6d945b0ed3805e9835a62c/src/interfaces/calendar-generator.service.interfaces.ts#L12)

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

### generateCalendarMonths()

> **generateCalendarMonths**(`year`, `options`): [`CalendarMonth`](CalendarMonth.md)[]

Defined in: [interfaces/calendar-generator.service.interfaces.ts:21](https://github.com/jmkcoder/uplink-protocol-calendar/blob/37dc792b8a1827808b6d945b0ed3805e9835a62c/src/interfaces/calendar-generator.service.interfaces.ts#L21)

Generate calendar months for a specified year

#### Parameters

##### year

`number`

##### options

[`MonthViewGenerationOptions`](MonthViewGenerationOptions.md)

#### Returns

[`CalendarMonth`](CalendarMonth.md)[]

***

### generateCalendarYears()

> **generateCalendarYears**(`baseYear`, `rangeSize`, `options`): [`CalendarYear`](CalendarYear.md)[]

Defined in: [interfaces/calendar-generator.service.interfaces.ts:29](https://github.com/jmkcoder/uplink-protocol-calendar/blob/37dc792b8a1827808b6d945b0ed3805e9835a62c/src/interfaces/calendar-generator.service.interfaces.ts#L29)

Generate calendar years for a specified year range

#### Parameters

##### baseYear

`number`

##### rangeSize

`number`

##### options

[`YearViewGenerationOptions`](YearViewGenerationOptions.md)

#### Returns

[`CalendarYear`](CalendarYear.md)[]

***

### getCalendarDaysGenerator()

> **getCalendarDaysGenerator**(`getCurrentDate`, `getCalendarOptions`): () => [`CalendarDate`](CalendarDate.md)[]

Defined in: [interfaces/calendar-generator.service.interfaces.ts:39](https://github.com/jmkcoder/uplink-protocol-calendar/blob/37dc792b8a1827808b6d945b0ed3805e9835a62c/src/interfaces/calendar-generator.service.interfaces.ts#L39)

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
