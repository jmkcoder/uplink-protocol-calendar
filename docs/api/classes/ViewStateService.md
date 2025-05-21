[**@uplink-protocol/form-controller v0.1.0**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / ViewStateService

# Class: ViewStateService

Defined in: services/view-state.service.ts:9

Implementation of ViewStateService
Responsible for managing calendar view state and binding updates

## Implements

- [`IViewStateService`](../interfaces/IViewStateService.md)

## Constructors

### Constructor

> **new ViewStateService**(): `ViewStateService`

#### Returns

`ViewStateService`

## Methods

### initializeBindings()

> **initializeBindings**(`currentDate`, `selectedDate`, `selectedDateRange`, `firstDayOfWeek`, `isRangeSelection`, `calendarDaysGenerator`): `object`

Defined in: services/view-state.service.ts:13

Initialize view state bindings

#### Parameters

##### currentDate

`Date`

##### selectedDate

`null` | `Date`

##### selectedDateRange

[`DateRange`](../interfaces/DateRange.md)

##### firstDayOfWeek

`number`

##### isRangeSelection

`boolean`

##### calendarDaysGenerator

() => [`CalendarDate`](../interfaces/CalendarDate.md)[]

#### Returns

`object`

##### calendarDays

> **calendarDays**: `Binding`\<[`CalendarDate`](../interfaces/CalendarDate.md)[]\>

##### currentMonth

> **currentMonth**: `Binding`\<`number`\>

##### currentYear

> **currentYear**: `Binding`\<`number`\>

##### isRangeSelection

> **isRangeSelection**: `Binding`\<`boolean`\>

##### monthName

> **monthName**: `Binding`\<`string`\>

##### selectedDate

> **selectedDate**: `Binding`\<`null` \| `Date`\>

##### selectedDateRange

> **selectedDateRange**: `Binding`\<[`DateRange`](../interfaces/DateRange.md)\>

##### weekdays

> **weekdays**: `Binding`\<`string`[]\>

#### Implementation of

[`IViewStateService`](../interfaces/IViewStateService.md).[`initializeBindings`](../interfaces/IViewStateService.md#initializebindings)

***

### updateCurrentDate()

> **updateCurrentDate**(`date`, `bindings`, `getMonthName`, `generateCalendarDays`): `object`

Defined in: services/view-state.service.ts:48

Update current date in view state

#### Parameters

##### date

`Date`

##### bindings

###### calendarDays

`Binding`\<[`CalendarDate`](../interfaces/CalendarDate.md)[]\>

###### currentMonth

`Binding`\<`number`\>

###### currentYear

`Binding`\<`number`\>

###### monthName

`Binding`\<`string`\>

##### getMonthName

(`month`) => `string`

##### generateCalendarDays

() => [`CalendarDate`](../interfaces/CalendarDate.md)[]

#### Returns

`object`

##### month

> **month**: `number`

##### year

> **year**: `number`

#### Implementation of

[`IViewStateService`](../interfaces/IViewStateService.md).[`updateCurrentDate`](../interfaces/IViewStateService.md#updatecurrentdate)

***

### updateDateRange()

> **updateDateRange**(`range`, `binding`, `calendarDaysBinding`, `generateCalendarDays`): `void`

Defined in: services/view-state.service.ts:86

Update date range bindings

#### Parameters

##### range

[`DateRange`](../interfaces/DateRange.md)

##### binding

`Binding`\<[`DateRange`](../interfaces/DateRange.md)\>

##### calendarDaysBinding

`Binding`\<[`CalendarDate`](../interfaces/CalendarDate.md)[]\>

##### generateCalendarDays

() => [`CalendarDate`](../interfaces/CalendarDate.md)[]

#### Returns

`void`

#### Implementation of

[`IViewStateService`](../interfaces/IViewStateService.md).[`updateDateRange`](../interfaces/IViewStateService.md#updatedaterange)

***

### updateSelectedDate()

> **updateSelectedDate**(`date`, `binding`, `calendarDaysBinding`, `generateCalendarDays`): `void`

Defined in: services/view-state.service.ts:73

Update selected date bindings

#### Parameters

##### date

`null` | `Date`

##### binding

`Binding`\<`null` \| `Date`\>

##### calendarDaysBinding

`Binding`\<[`CalendarDate`](../interfaces/CalendarDate.md)[]\>

##### generateCalendarDays

() => [`CalendarDate`](../interfaces/CalendarDate.md)[]

#### Returns

`void`

#### Implementation of

[`IViewStateService`](../interfaces/IViewStateService.md).[`updateSelectedDate`](../interfaces/IViewStateService.md#updateselecteddate)

***

### updateSelectionMode()

> **updateSelectionMode**(`isRange`, `binding`, `calendarDaysBinding`, `generateCalendarDays`): `void`

Defined in: services/view-state.service.ts:99

Update selection mode

#### Parameters

##### isRange

`boolean`

##### binding

`Binding`\<`boolean`\>

##### calendarDaysBinding

`Binding`\<[`CalendarDate`](../interfaces/CalendarDate.md)[]\>

##### generateCalendarDays

() => [`CalendarDate`](../interfaces/CalendarDate.md)[]

#### Returns

`void`

#### Implementation of

[`IViewStateService`](../interfaces/IViewStateService.md).[`updateSelectionMode`](../interfaces/IViewStateService.md#updateselectionmode)
