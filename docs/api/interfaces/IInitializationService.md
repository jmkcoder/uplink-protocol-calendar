[**@uplink-protocol/form-controller v0.2.0**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / IInitializationService

# Interface: IInitializationService

Defined in: [interfaces/initialization.service.interfaces.ts:14](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/interfaces/initialization.service.interfaces.ts#L14)

Interface for component initialization service
Responsible for setting up and initializing calendar components

## Methods

### applyConfiguration()

> **applyConfiguration**(`options`, `locale`, `calendarService`, `dateFormattingService`, `localizationService`): `object`

Defined in: [interfaces/initialization.service.interfaces.ts:34](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/interfaces/initialization.service.interfaces.ts#L34)

Apply calendar configuration options

#### Parameters

##### options

`undefined` | [`CalendarOptions`](CalendarOptions.md)

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

> **dateFormat**: `null` \| `string`

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

> **maxDate**: `null` \| `Date`

##### minDate

> **minDate**: `null` \| `Date`

##### selectedDate

> **selectedDate**: `null` \| `Date`

***

### initializeBindings()

> **initializeBindings**(`currentDate`, `selectedDate`, `selectedDateRange`, `firstDayOfWeek`, `isRangeSelection`, `calendarDaysGenerator`, `getMonthNameFn`, `getWeekdayNamesFn`, `generateCalendarMonthsFn`, `generateCalendarYearsFn`): `Record`\<`string`, `Binding`\<`any`\>\>

Defined in: [interfaces/initialization.service.interfaces.ts:18](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/interfaces/initialization.service.interfaces.ts#L18)

Initialize view state bindings and initial values

#### Parameters

##### currentDate

`Date`

##### selectedDate

`null` | `Date`

##### selectedDateRange

###### endDate

`null` \| `Date`

###### startDate

`null` \| `Date`

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
