[**@uplink-protocol/form-controller v0.1.3**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / IViewStateService

# Interface: IViewStateService

Defined in: [interfaces/view-state.service.interfaces.ts:8](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b7ce0ea27c5f5fc885d8d11198b3335a1464aa83/src/interfaces/view-state.service.interfaces.ts#L8)

View state service interface
Responsible for managing calendar view state and binding updates

## Methods

### initializeBindings()

> **initializeBindings**(`currentDate`, `selectedDate`, `selectedDateRange`, `firstDayOfWeek`, `isRangeSelection`, `calendarDaysGenerator`): `object`

Defined in: [interfaces/view-state.service.interfaces.ts:12](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b7ce0ea27c5f5fc885d8d11198b3335a1464aa83/src/interfaces/view-state.service.interfaces.ts#L12)

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

### updateCalendarDays()

> **updateCalendarDays**(`calendarDays`, `binding`): `void`

Defined in: [interfaces/view-state.service.interfaces.ts:94](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b7ce0ea27c5f5fc885d8d11198b3335a1464aa83/src/interfaces/view-state.service.interfaces.ts#L94)

Update calendarDays binding with new calendar days

#### Parameters

##### calendarDays

[`CalendarDate`](CalendarDate.md)[]

##### binding

`Binding`\<[`CalendarDate`](CalendarDate.md)[]\>

#### Returns

`void`

***

### updateCurrentDate()

> **updateCurrentDate**(`date`, `currentMonthBinding`, `currentYearOrGetMonthName`, `monthNameBindingOrGenerateCalendarDays`, `getMonthNameFn?`, `calendarDaysBinding?`, `generateCalendarDaysFn?`): `object`

Defined in: [interfaces/view-state.service.interfaces.ts:39](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b7ce0ea27c5f5fc885d8d11198b3335a1464aa83/src/interfaces/view-state.service.interfaces.ts#L39)

Update current date in view state

#### Parameters

##### date

`Date`

The date to update to

##### currentMonthBinding

`Binding`\<`number`\> | \{ `calendarDays`: `Binding`\<[`CalendarDate`](CalendarDate.md)[]\>; `currentMonth`: `Binding`\<`number`\>; `currentYear`: `Binding`\<`number`\>; `monthName`: `Binding`\<`string`\>; \}

##### currentYearOrGetMonthName

`Binding`\<`number`\> | (`month`) => `string`

##### monthNameBindingOrGenerateCalendarDays

`Binding`\<`string`\> | () => [`CalendarDate`](CalendarDate.md)[]

##### getMonthNameFn?

(`month`) => `string`

##### calendarDaysBinding?

`Binding`\<[`CalendarDate`](CalendarDate.md)[]\>

##### generateCalendarDaysFn?

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

Defined in: [interfaces/view-state.service.interfaces.ts:66](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b7ce0ea27c5f5fc885d8d11198b3335a1464aa83/src/interfaces/view-state.service.interfaces.ts#L66)

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

> **updateFocusedDate**(`date`, `bindingArg?`, `generateCalendarDays?`): `void`

Defined in: [interfaces/view-state.service.interfaces.ts:104](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b7ce0ea27c5f5fc885d8d11198b3335a1464aa83/src/interfaces/view-state.service.interfaces.ts#L104)

Update focused date

#### Parameters

##### date

The date to focus

`null` | `Date`

##### bindingArg?

Either the focusedDate binding or the calendarDays binding

`Binding`\<[`CalendarDate`](CalendarDate.md)[]\> | `Binding`\<`null` \| `Date`\>

##### generateCalendarDays?

() => [`CalendarDate`](CalendarDate.md)[]

Optional function to generate calendar days

#### Returns

`void`

***

### updateSelectedDate()

> **updateSelectedDate**(`date`, `binding`, `calendarDaysBinding?`, `generateCalendarDays?`): `void`

Defined in: [interfaces/view-state.service.interfaces.ts:56](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b7ce0ea27c5f5fc885d8d11198b3335a1464aa83/src/interfaces/view-state.service.interfaces.ts#L56)

Update selected date bindings

#### Parameters

##### date

`null` | `Date`

##### binding

`Binding`\<`null` \| `Date`\>

##### calendarDaysBinding?

`Binding`\<[`CalendarDate`](CalendarDate.md)[]\>

##### generateCalendarDays?

() => [`CalendarDate`](CalendarDate.md)[]

#### Returns

`void`

***

### updateSelectedDateRange()

> **updateSelectedDateRange**(`range`, `binding`): `void`

Defined in: [interfaces/view-state.service.interfaces.ts:86](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b7ce0ea27c5f5fc885d8d11198b3335a1464aa83/src/interfaces/view-state.service.interfaces.ts#L86)

Update selectedDateRange binding with new range

#### Parameters

##### range

[`DateRange`](DateRange.md)

##### binding

`Binding`\<[`DateRange`](DateRange.md)\>

#### Returns

`void`

***

### updateSelectionMode()

> **updateSelectionMode**(`isRange`, `binding`, `calendarDaysBinding`, `generateCalendarDays`): `void`

Defined in: [interfaces/view-state.service.interfaces.ts:76](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b7ce0ea27c5f5fc885d8d11198b3335a1464aa83/src/interfaces/view-state.service.interfaces.ts#L76)

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
