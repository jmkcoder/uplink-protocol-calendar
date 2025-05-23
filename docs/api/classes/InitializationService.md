[**@uplink-protocol/form-controller v0.1.4**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / InitializationService

# Class: InitializationService

Defined in: [services/initialization.service.ts:23](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/services/initialization.service.ts#L23)

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

Defined in: [services/initialization.service.ts:62](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/services/initialization.service.ts#L62)

Apply calendar configuration options

#### Parameters

##### options

`undefined` | [`CalendarOptions`](../interfaces/CalendarOptions.md)

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

> **dateFormat**: `null` \| `string`

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

> **maxDate**: `null` \| `Date`

##### minDate

> **minDate**: `null` \| `Date`

##### selectedDate

> **selectedDate**: `null` \| `Date`

#### Implementation of

[`IInitializationService`](../interfaces/IInitializationService.md).[`applyConfiguration`](../interfaces/IInitializationService.md#applyconfiguration)

***

### initializeBindings()

> **initializeBindings**(`currentDate`, `selectedDate`, `selectedDateRange`, `firstDayOfWeek`, `isRangeSelection`, `calendarDaysGenerator`, `getMonthNameFn`, `getWeekdayNamesFn`, `generateCalendarMonthsFn`, `generateCalendarYearsFn`): `Record`\<`string`, `Binding`\<`any`\>\>

Defined in: [services/initialization.service.ts:27](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/services/initialization.service.ts#L27)

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
