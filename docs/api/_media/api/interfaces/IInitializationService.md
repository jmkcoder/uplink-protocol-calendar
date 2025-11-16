[**@uplink-protocol/form-controller v0.3.1**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / IInitializationService

# Interface: IInitializationService

Defined in: [Date/interfaces/initialization.service.interfaces.ts:14](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/interfaces/initialization.service.interfaces.ts#L14)

Interface for component initialization service
Responsible for setting up and initializing calendar components

## Methods

### applyConfiguration()

> **applyConfiguration**(`options`, `locale`, `calendarService`, `dateFormattingService`, `localizationService`): `object`

Defined in: [Date/interfaces/initialization.service.interfaces.ts:34](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/interfaces/initialization.service.interfaces.ts#L34)

Apply calendar configuration options

#### Parameters

##### options

[`CalendarOptions`](CalendarOptions.md) | `undefined`

##### locale

`string`

##### calendarService

[`ICalendarService`](ICalendarService.md)

##### dateFormattingService

[`IDateFormattingService`](IDateFormattingService.md)

##### localizationService

[`ILocalizationService`](ILocalizationService.md)

#### Returns

`object`

##### dateFormat

> **dateFormat**: `string` \| `null`

##### disabledDates

> **disabledDates**: `Date`[]

##### firstDayOfWeek

> **firstDayOfWeek**: `number`

##### hideOtherMonthDays

> **hideOtherMonthDays**: `boolean`

##### locale

> **locale**: `string`

##### localizationService

> **localizationService**: [`ILocalizationService`](ILocalizationService.md)

##### maxDate

> **maxDate**: `Date` \| `null`

##### minDate

> **minDate**: `Date` \| `null`

##### selectedDate

> **selectedDate**: `Date` \| `null`

***

### initializeBindings()

> **initializeBindings**(`currentDate`, `selectedDate`, `selectedDateRange`, `firstDayOfWeek`, `isRangeSelection`, `calendarDaysGenerator`, `getMonthNameFn`, `getWeekdayNamesFn`, `generateCalendarMonthsFn`, `generateCalendarYearsFn`): `Record`\<`string`, `Binding`\<`any`\>\>

Defined in: [Date/interfaces/initialization.service.interfaces.ts:18](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/interfaces/initialization.service.interfaces.ts#L18)

Initialize view state bindings and initial values

#### Parameters

##### currentDate

`Date`

##### selectedDate

`Date` | `null`

##### selectedDateRange

###### endDate

`Date` \| `null`

###### startDate

`Date` \| `null`

##### firstDayOfWeek

`number`

##### isRangeSelection

`boolean`

##### calendarDaysGenerator

() => [`CalendarDate`](CalendarDate.md)[]

##### getMonthNameFn

(`month`) => `string`

##### getWeekdayNamesFn

(`firstDayOfWeek`) => `string`[]

##### generateCalendarMonthsFn

() => [`CalendarMonth`](CalendarMonth.md)[]

##### generateCalendarYearsFn

() => [`CalendarYear`](CalendarYear.md)[]

#### Returns

`Record`\<`string`, `Binding`\<`any`\>\>
