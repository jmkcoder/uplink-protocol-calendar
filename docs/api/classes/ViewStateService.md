[**@uplink-protocol/form-controller v0.2.3**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / ViewStateService

# Class: ViewStateService

Defined in: [services/view-state.service.ts:9](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/services/view-state.service.ts#L9)

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

> **initializeBindings**(`currentDate`, `selectedDate`, `selectedDateRange`, `firstDayOfWeek`, `isRangeSelection`, `calendarDaysGenerator`, `calendarMonthsGenerator`, `calendarYearsGenerator`): `object`

Defined in: [services/view-state.service.ts:13](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/services/view-state.service.ts#L13)

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

##### calendarMonthsGenerator

() => [`CalendarMonth`](../interfaces/CalendarMonth.md)[]

##### calendarYearsGenerator

() => [`CalendarYear`](../interfaces/CalendarYear.md)[]

#### Returns

`object`

##### calendarDays

> **calendarDays**: `Binding`\<[`CalendarDate`](../interfaces/CalendarDate.md)[]\>

##### calendarMonths

> **calendarMonths**: `Binding`\<[`CalendarMonth`](../interfaces/CalendarMonth.md)[]\>

##### calendarYears

> **calendarYears**: `Binding`\<[`CalendarYear`](../interfaces/CalendarYear.md)[]\>

##### currentDate

> **currentDate**: `Binding`\<`Date`\>

##### currentMonth

> **currentMonth**: `Binding`\<`number`\>

##### currentYear

> **currentYear**: `Binding`\<`number`\>

##### currentYearRangeBase

> **currentYearRangeBase**: `Binding`\<`number` \| [`YearRange`](../interfaces/YearRange.md)\>

##### focusedDate

> **focusedDate**: `Binding`\<`null` \| `Date`\>

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

### updateCalendarDays()

> **updateCalendarDays**(`calendarDays`, `binding`): `void`

Defined in: [services/view-state.service.ts:157](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/services/view-state.service.ts#L157)

Update calendarDays binding with new calendar days

#### Parameters

##### calendarDays

[`CalendarDate`](../interfaces/CalendarDate.md)[]

##### binding

`Binding`\<[`CalendarDate`](../interfaces/CalendarDate.md)[]\>

#### Returns

`void`

#### Implementation of

[`IViewStateService`](../interfaces/IViewStateService.md).[`updateCalendarDays`](../interfaces/IViewStateService.md#updatecalendardays)

***

### updateCurrentDate()

> **updateCurrentDate**(`date`, `arg2`, `arg3`, `arg4`, `arg5?`, `arg6?`, `arg7?`): `object`

Defined in: [services/view-state.service.ts:58](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/services/view-state.service.ts#L58)

Update current date in view state

#### Parameters

##### date

`Date`

##### arg2

`any`

##### arg3

`any`

##### arg4

`any`

##### arg5?

`any`

##### arg6?

`any`

##### arg7?

`any`

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

Defined in: [services/view-state.service.ts:121](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/services/view-state.service.ts#L121)

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

### updateFocusedDate()

> **updateFocusedDate**(`date`, `focusedDateBindingOrCalendarDaysBinding?`, `generateCalendarDays?`): `void`

Defined in: [services/view-state.service.ts:167](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/services/view-state.service.ts#L167)

Update focused date

#### Parameters

##### date

`null` | `Date`

##### focusedDateBindingOrCalendarDaysBinding?

`Binding`\<[`CalendarDate`](../interfaces/CalendarDate.md)[]\> | `Binding`\<`null` \| `Date`\>

##### generateCalendarDays?

() => [`CalendarDate`](../interfaces/CalendarDate.md)[]

#### Returns

`void`

#### Implementation of

[`IViewStateService`](../interfaces/IViewStateService.md).[`updateFocusedDate`](../interfaces/IViewStateService.md#updatefocuseddate)

***

### updateSelectedDate()

> **updateSelectedDate**(`date`, `binding`, `calendarDaysBinding?`, `generateCalendarDays?`): `void`

Defined in: [services/view-state.service.ts:106](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/services/view-state.service.ts#L106)

Update selected date bindings

#### Parameters

##### date

`null` | `Date`

##### binding

`Binding`\<`null` \| `Date`\>

##### calendarDaysBinding?

`Binding`\<[`CalendarDate`](../interfaces/CalendarDate.md)[]\>

##### generateCalendarDays?

() => [`CalendarDate`](../interfaces/CalendarDate.md)[]

#### Returns

`void`

#### Implementation of

[`IViewStateService`](../interfaces/IViewStateService.md).[`updateSelectedDate`](../interfaces/IViewStateService.md#updateselecteddate)

***

### updateSelectedDateRange()

> **updateSelectedDateRange**(`range`, `binding`): `void`

Defined in: [services/view-state.service.ts:147](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/services/view-state.service.ts#L147)

Update selectedDateRange binding with new range

#### Parameters

##### range

[`DateRange`](../interfaces/DateRange.md)

##### binding

`Binding`\<[`DateRange`](../interfaces/DateRange.md)\>

#### Returns

`void`

#### Implementation of

[`IViewStateService`](../interfaces/IViewStateService.md).[`updateSelectedDateRange`](../interfaces/IViewStateService.md#updateselecteddaterange)

***

### updateSelectionMode()

> **updateSelectionMode**(`isRange`, `binding`, `calendarDaysBinding`, `generateCalendarDays`): `void`

Defined in: [services/view-state.service.ts:134](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/services/view-state.service.ts#L134)

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
