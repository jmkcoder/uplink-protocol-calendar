[**@uplink-protocol/form-controller v0.1.1**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / ViewStateService

# Class: ViewStateService

Defined in: [services/view-state.service.ts:9](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/services/view-state.service.ts#L9)

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

Defined in: [services/view-state.service.ts:12](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/services/view-state.service.ts#L12)

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

##### calendarMonths

> **calendarMonths**: `Binding`\<[`CalendarMonth`](../interfaces/CalendarMonth.md)[]\>

##### calendarYears

> **calendarYears**: `Binding`\<[`CalendarYear`](../interfaces/CalendarYear.md)[]\>

##### currentMonth

> **currentMonth**: `Binding`\<`number`\>

##### currentYear

> **currentYear**: `Binding`\<`number`\>

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

### updateCurrentDate()

> **updateCurrentDate**(`date`, `bindings`, `getMonthName`, `generateCalendarDays`): `object`

Defined in: [services/view-state.service.ts:53](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/services/view-state.service.ts#L53)

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

Defined in: [services/view-state.service.ts:91](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/services/view-state.service.ts#L91)

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

> **updateFocusedDate**(`date`, `calendarDaysBinding`, `generateCalendarDays`): `void`

Defined in: [services/view-state.service.ts:116](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/services/view-state.service.ts#L116)

Update focused date

#### Parameters

##### date

`null` | `Date`

##### calendarDaysBinding

`Binding`\<[`CalendarDate`](../interfaces/CalendarDate.md)[]\>

##### generateCalendarDays

() => [`CalendarDate`](../interfaces/CalendarDate.md)[]

#### Returns

`void`

#### Implementation of

[`IViewStateService`](../interfaces/IViewStateService.md).[`updateFocusedDate`](../interfaces/IViewStateService.md#updatefocuseddate)

***

### updateSelectedDate()

> **updateSelectedDate**(`date`, `binding`, `calendarDaysBinding`, `generateCalendarDays`): `void`

Defined in: [services/view-state.service.ts:78](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/services/view-state.service.ts#L78)

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

Defined in: [services/view-state.service.ts:104](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/services/view-state.service.ts#L104)

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
