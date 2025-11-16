[**@uplink-protocol/form-controller v0.3.1**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / InitializationService

# Class: InitializationService

Defined in: [Date/services/initialization.service.ts:23](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/services/initialization.service.ts#L23)

Implementation of InitializationService
Responsible for setting up and initializing calendar components

## Implements

- [`IInitializationService`](../interfaces/IInitializationService.md)

## Constructors

### Constructor

> **new InitializationService**(): `InitializationService`

#### Returns

`InitializationService`

## Methods

### applyConfiguration()

> **applyConfiguration**(`options`, `locale`, `calendarService`, `dateFormattingService`, `localizationService`): `object`

Defined in: [Date/services/initialization.service.ts:63](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/services/initialization.service.ts#L63)

Apply calendar configuration options

#### Parameters

##### options

[`CalendarOptions`](../interfaces/CalendarOptions.md) | `undefined`

##### locale

`string`

##### calendarService

[`ICalendarService`](../interfaces/ICalendarService.md)

##### dateFormattingService

[`IDateFormattingService`](../interfaces/IDateFormattingService.md)

##### localizationService

[`ILocalizationService`](../interfaces/ILocalizationService.md)

#### Returns

`object`

##### configurationService

> **configurationService**: [`IConfigurationService`](../interfaces/IConfigurationService.md)

##### dateFormat

> **dateFormat**: `string` \| `null`

##### disabledDates

> **disabledDates**: `Date`[]

##### firstDayOfWeek

> **firstDayOfWeek**: `number`

##### hideOtherMonthDays

> **hideOtherMonthDays**: `boolean`

##### isRangeSelection

> **isRangeSelection**: `boolean`

##### locale

> **locale**: `string`

##### localizationService

> **localizationService**: [`ILocalizationService`](../interfaces/ILocalizationService.md)

##### maxDate

> **maxDate**: `Date` \| `null`

##### minDate

> **minDate**: `Date` \| `null`

##### selectedDate

> **selectedDate**: `Date` \| `null`

#### Implementation of

[`IInitializationService`](../interfaces/IInitializationService.md).[`applyConfiguration`](../interfaces/IInitializationService.md#applyconfiguration)

***

### initializeBindings()

> **initializeBindings**(`currentDate`, `selectedDate`, `selectedDateRange`, `firstDayOfWeek`, `isRangeSelection`, `calendarDaysGenerator`, `getMonthNameFn`, `getWeekdayNamesFn`, `generateCalendarMonthsFn`, `generateCalendarYearsFn`): `Record`\<`string`, `Binding`\<`any`\>\>

Defined in: [Date/services/initialization.service.ts:27](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/services/initialization.service.ts#L27)

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

() => [`CalendarDate`](../interfaces/CalendarDate.md)[]

##### getMonthNameFn

(`month`) => `string`

##### getWeekdayNamesFn

(`firstDayOfWeek`) => `string`[]

##### generateCalendarMonthsFn

() => [`CalendarMonth`](../interfaces/CalendarMonth.md)[]

##### generateCalendarYearsFn

() => [`CalendarYear`](../interfaces/CalendarYear.md)[]

#### Returns

`Record`\<`string`, `Binding`\<`any`\>\>

#### Implementation of

[`IInitializationService`](../interfaces/IInitializationService.md).[`initializeBindings`](../interfaces/IInitializationService.md#initializebindings)
