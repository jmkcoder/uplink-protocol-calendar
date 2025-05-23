[**@uplink-protocol/form-controller v0.1.2**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / ICalendarStateService

# Interface: ICalendarStateService

Defined in: [interfaces/calendar-state.service.interfaces.ts:9](https://github.com/jmkcoder/uplink-protocol-calendar/blob/519c17274ca35a5b4f4dfa9d2f04d55cb230d0b4/src/interfaces/calendar-state.service.interfaces.ts#L9)

Interface for the CalendarStateService
Responsible for managing calendar state and coordinating with other services

## Methods

### addDisabledDate()

> **addDisabledDate**(`date`, `disabledDates`, `calendarDaysBinding`, `generateCalendarDaysFn`): `Date`[]

Defined in: [interfaces/calendar-state.service.interfaces.ts:63](https://github.com/jmkcoder/uplink-protocol-calendar/blob/519c17274ca35a5b4f4dfa9d2f04d55cb230d0b4/src/interfaces/calendar-state.service.interfaces.ts#L63)

Add a specific date to the disabled dates list

#### Parameters

##### date

`Date`

##### disabledDates

`Date`[]

##### calendarDaysBinding

`Binding`\<[`CalendarDate`](CalendarDate.md)[]\>

##### generateCalendarDaysFn

() => [`CalendarDate`](CalendarDate.md)[]

#### Returns

`Date`[]

***

### clearSelection()

> **clearSelection**(`isRangeSelection`, `selectedDateBinding`, `selectedDateRangeBinding`, `calendarDaysBinding`, `generateCalendarDaysFn`): `object`

Defined in: [interfaces/calendar-state.service.interfaces.ts:93](https://github.com/jmkcoder/uplink-protocol-calendar/blob/519c17274ca35a5b4f4dfa9d2f04d55cb230d0b4/src/interfaces/calendar-state.service.interfaces.ts#L93)

Clear the current selection

#### Parameters

##### isRangeSelection

`boolean`

##### selectedDateBinding

`Binding`\<`null` \| `Date`\>

##### selectedDateRangeBinding

`Binding`\<[`DateRange`](DateRange.md)\>

##### calendarDaysBinding

`Binding`\<[`CalendarDate`](CalendarDate.md)[]\>

##### generateCalendarDaysFn

() => [`CalendarDate`](CalendarDate.md)[]

#### Returns

`object`

##### selectedDate

> **selectedDate**: `null` \| `Date`

##### selectedDateRange

> **selectedDateRange**: [`DateRange`](DateRange.md)

***

### focusDate()

> **focusDate**(`date`, `focusedDateBinding`): `null` \| `Date`

Defined in: [interfaces/calendar-state.service.interfaces.ts:126](https://github.com/jmkcoder/uplink-protocol-calendar/blob/519c17274ca35a5b4f4dfa9d2f04d55cb230d0b4/src/interfaces/calendar-state.service.interfaces.ts#L126)

Focus a specific date for accessibility

#### Parameters

##### date

`null` | `Date`

##### focusedDateBinding

`Binding`\<`null` \| `Date`\>

#### Returns

`null` \| `Date`

***

### removeDisabledDate()

> **removeDisabledDate**(`date`, `disabledDates`, `calendarDaysBinding`, `generateCalendarDaysFn`): `Date`[]

Defined in: [interfaces/calendar-state.service.interfaces.ts:73](https://github.com/jmkcoder/uplink-protocol-calendar/blob/519c17274ca35a5b4f4dfa9d2f04d55cb230d0b4/src/interfaces/calendar-state.service.interfaces.ts#L73)

Remove a specific date from the disabled dates list

#### Parameters

##### date

`Date`

##### disabledDates

`Date`[]

##### calendarDaysBinding

`Binding`\<[`CalendarDate`](CalendarDate.md)[]\>

##### generateCalendarDaysFn

() => [`CalendarDate`](CalendarDate.md)[]

#### Returns

`Date`[]

***

### selectDate()

> **selectDate**(`date`, `isRangeSelection`, `currentSelectedDate`, `currentDateRange`, `isDateDisabledFn`, `bindings`, `events`, `generateCalendarDaysFn`): `object`

Defined in: [interfaces/calendar-state.service.interfaces.ts:104](https://github.com/jmkcoder/uplink-protocol-calendar/blob/519c17274ca35a5b4f4dfa9d2f04d55cb230d0b4/src/interfaces/calendar-state.service.interfaces.ts#L104)

Select a date based on the current selection mode

#### Parameters

##### date

`Date`

##### isRangeSelection

`boolean`

##### currentSelectedDate

`null` | `Date`

##### currentDateRange

[`DateRange`](DateRange.md)

##### isDateDisabledFn

(`date`) => `boolean`

##### bindings

###### calendarDays

`Binding`\<[`CalendarDate`](CalendarDate.md)[]\>

###### focusedDate

`Binding`\<`null` \| `Date`\>

###### selectedDate

`Binding`\<`null` \| `Date`\>

###### selectedDateRange

`Binding`\<[`DateRange`](DateRange.md)\>

##### events

`undefined` | \{ `dateRangeSelected?`: `EventEmitter`\<[`DateRange`](DateRange.md)\>; `dateSelected?`: `EventEmitter`\<`Date`\>; \}

##### generateCalendarDaysFn

() => [`CalendarDate`](CalendarDate.md)[]

#### Returns

`object`

##### selectedDate

> **selectedDate**: `null` \| `Date`

##### selectedDateRange

> **selectedDateRange**: [`DateRange`](DateRange.md)

***

### setDisabledDates()

> **setDisabledDates**(`dates`, `currentDate`, `bindings`, `getMonthNameFn`, `generateCalendarDaysFn`): `Date`[]

Defined in: [interfaces/calendar-state.service.interfaces.ts:47](https://github.com/jmkcoder/uplink-protocol-calendar/blob/519c17274ca35a5b4f4dfa9d2f04d55cb230d0b4/src/interfaces/calendar-state.service.interfaces.ts#L47)

Set disabled dates

#### Parameters

##### dates

`Date`[]

##### currentDate

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

##### getMonthNameFn

(`month`) => `string`

##### generateCalendarDaysFn

() => [`CalendarDate`](CalendarDate.md)[]

#### Returns

`Date`[]

***

### setMaxDate()

> **setMaxDate**(`date`, `currentMaxDate`, `currentDate`, `bindings`, `getMonthNameFn`, `generateCalendarDaysFn`): `null` \| `Date`

Defined in: [interfaces/calendar-state.service.interfaces.ts:30](https://github.com/jmkcoder/uplink-protocol-calendar/blob/519c17274ca35a5b4f4dfa9d2f04d55cb230d0b4/src/interfaces/calendar-state.service.interfaces.ts#L30)

Set the maximum selectable date

#### Parameters

##### date

`null` | `Date`

##### currentMaxDate

`null` | `Date`

##### currentDate

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

##### getMonthNameFn

(`month`) => `string`

##### generateCalendarDaysFn

() => [`CalendarDate`](CalendarDate.md)[]

#### Returns

`null` \| `Date`

***

### setMinDate()

> **setMinDate**(`date`, `currentMinDate`, `currentDate`, `bindings`, `getMonthNameFn`, `generateCalendarDaysFn`): `null` \| `Date`

Defined in: [interfaces/calendar-state.service.interfaces.ts:13](https://github.com/jmkcoder/uplink-protocol-calendar/blob/519c17274ca35a5b4f4dfa9d2f04d55cb230d0b4/src/interfaces/calendar-state.service.interfaces.ts#L13)

Set the minimum selectable date

#### Parameters

##### date

`null` | `Date`

##### currentMinDate

`null` | `Date`

##### currentDate

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

##### getMonthNameFn

(`month`) => `string`

##### generateCalendarDaysFn

() => [`CalendarDate`](CalendarDate.md)[]

#### Returns

`null` \| `Date`

***

### setRangeSelectionMode()

> **setRangeSelectionMode**(`isRange`, `isRangeSelectionBinding`, `calendarDaysBinding`, `generateCalendarDaysFn`): `boolean`

Defined in: [interfaces/calendar-state.service.interfaces.ts:83](https://github.com/jmkcoder/uplink-protocol-calendar/blob/519c17274ca35a5b4f4dfa9d2f04d55cb230d0b4/src/interfaces/calendar-state.service.interfaces.ts#L83)

Set the date selection mode

#### Parameters

##### isRange

`boolean`

##### isRangeSelectionBinding

`Binding`\<`boolean`\>

##### calendarDaysBinding

`Binding`\<[`CalendarDate`](CalendarDate.md)[]\>

##### generateCalendarDaysFn

() => [`CalendarDate`](CalendarDate.md)[]

#### Returns

`boolean`
