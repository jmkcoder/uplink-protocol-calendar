[**@uplink-protocol/form-controller v0.1.0**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / IViewStateService

# Interface: IViewStateService

Defined in: [interfaces/view-state.service.interfaces.ts:8](https://github.com/jmkcoder/uplink-protocol-calendar/blob/37dc792b8a1827808b6d945b0ed3805e9835a62c/src/interfaces/view-state.service.interfaces.ts#L8)

View state service interface
Responsible for managing calendar view state and binding updates

## Methods

### initializeBindings()

> **initializeBindings**(`currentDate`, `selectedDate`, `selectedDateRange`, `firstDayOfWeek`, `isRangeSelection`, `calendarDaysGenerator`): `object`

Defined in: [interfaces/view-state.service.interfaces.ts:12](https://github.com/jmkcoder/uplink-protocol-calendar/blob/37dc792b8a1827808b6d945b0ed3805e9835a62c/src/interfaces/view-state.service.interfaces.ts#L12)

Initialize view state bindings

#### Parameters

##### currentDate

`Date`

##### selectedDate

`null` | `Date`

##### selectedDateRange

[`DateRange`](DateRange.md)

##### firstDayOfWeek

`number`

##### isRangeSelection

`boolean`

##### calendarDaysGenerator

() => [`CalendarDate`](CalendarDate.md)[]

#### Returns

`object`

##### calendarDays

> **calendarDays**: `Binding`\<[`CalendarDate`](CalendarDate.md)[]\>

##### calendarMonths

> **calendarMonths**: `Binding`\<[`CalendarMonth`](CalendarMonth.md)[]\>

##### calendarYears

> **calendarYears**: `Binding`\<[`CalendarYear`](CalendarYear.md)[]\>

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

> **selectedDateRange**: `Binding`\<[`DateRange`](DateRange.md)\>

##### weekdays

> **weekdays**: `Binding`\<`string`[]\>

***

### updateCurrentDate()

> **updateCurrentDate**(`date`, `bindings`, `getMonthName`, `generateCalendarDays`): `object`

Defined in: [interfaces/view-state.service.interfaces.ts:36](https://github.com/jmkcoder/uplink-protocol-calendar/blob/37dc792b8a1827808b6d945b0ed3805e9835a62c/src/interfaces/view-state.service.interfaces.ts#L36)

Update current date in view state

#### Parameters

##### date

`Date`

##### bindings

###### calendarDays

`Binding`\<[`CalendarDate`](CalendarDate.md)[]\>

###### currentMonth

`Binding`\<`number`\>

###### currentYear

`Binding`\<`number`\>

###### monthName

`Binding`\<`string`\>

##### getMonthName

(`month`) => `string`

##### generateCalendarDays

() => [`CalendarDate`](CalendarDate.md)[]

#### Returns

`object`

##### month

> **month**: `number`

##### year

> **year**: `number`

***

### updateDateRange()

> **updateDateRange**(`range`, `binding`, `calendarDaysBinding`, `generateCalendarDays`): `void`

Defined in: [interfaces/view-state.service.interfaces.ts:61](https://github.com/jmkcoder/uplink-protocol-calendar/blob/37dc792b8a1827808b6d945b0ed3805e9835a62c/src/interfaces/view-state.service.interfaces.ts#L61)

Update date range bindings

#### Parameters

##### range

[`DateRange`](DateRange.md)

##### binding

`Binding`\<[`DateRange`](DateRange.md)\>

##### calendarDaysBinding

`Binding`\<[`CalendarDate`](CalendarDate.md)[]\>

##### generateCalendarDays

() => [`CalendarDate`](CalendarDate.md)[]

#### Returns

`void`

***

### updateFocusedDate()

> **updateFocusedDate**(`date`, `calendarDaysBinding`, `generateCalendarDays`): `void`

Defined in: [interfaces/view-state.service.interfaces.ts:81](https://github.com/jmkcoder/uplink-protocol-calendar/blob/37dc792b8a1827808b6d945b0ed3805e9835a62c/src/interfaces/view-state.service.interfaces.ts#L81)

Update focused date

#### Parameters

##### date

`null` | `Date`

##### calendarDaysBinding

`Binding`\<[`CalendarDate`](CalendarDate.md)[]\>

##### generateCalendarDays

() => [`CalendarDate`](CalendarDate.md)[]

#### Returns

`void`

***

### updateSelectedDate()

> **updateSelectedDate**(`date`, `binding`, `calendarDaysBinding`, `generateCalendarDays`): `void`

Defined in: [interfaces/view-state.service.interfaces.ts:51](https://github.com/jmkcoder/uplink-protocol-calendar/blob/37dc792b8a1827808b6d945b0ed3805e9835a62c/src/interfaces/view-state.service.interfaces.ts#L51)

Update selected date bindings

#### Parameters

##### date

`null` | `Date`

##### binding

`Binding`\<`null` \| `Date`\>

##### calendarDaysBinding

`Binding`\<[`CalendarDate`](CalendarDate.md)[]\>

##### generateCalendarDays

() => [`CalendarDate`](CalendarDate.md)[]

#### Returns

`void`

***

### updateSelectionMode()

> **updateSelectionMode**(`isRange`, `binding`, `calendarDaysBinding`, `generateCalendarDays`): `void`

Defined in: [interfaces/view-state.service.interfaces.ts:71](https://github.com/jmkcoder/uplink-protocol-calendar/blob/37dc792b8a1827808b6d945b0ed3805e9835a62c/src/interfaces/view-state.service.interfaces.ts#L71)

Update selection mode

#### Parameters

##### isRange

`boolean`

##### binding

`Binding`\<`boolean`\>

##### calendarDaysBinding

`Binding`\<[`CalendarDate`](CalendarDate.md)[]\>

##### generateCalendarDays

() => [`CalendarDate`](CalendarDate.md)[]

#### Returns

`void`
