[**@uplink-protocol/form-controller v0.2.3**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / CalendarStateService

# Class: CalendarStateService

Defined in: [services/calendar-state.service.ts:14](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/services/calendar-state.service.ts#L14)

Implementation of CalendarStateService
Responsible for centralizing and managing the state of the calendar

## Implements

- [`ICalendarStateService`](../interfaces/ICalendarStateService.md)

## Constructors

### Constructor

> **new CalendarStateService**(`_viewStateService`, `_dateSelectionService`, `_constraintsService`, `_eventManagerService?`): `CalendarStateService`

Defined in: [services/calendar-state.service.ts:15](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/services/calendar-state.service.ts#L15)

#### Parameters

##### \_viewStateService

[`IViewStateService`](../interfaces/IViewStateService.md)

##### \_dateSelectionService

[`IDateSelectionService`](../interfaces/IDateSelectionService.md)

##### \_constraintsService

[`IConstraintsService`](../interfaces/IConstraintsService.md)

##### \_eventManagerService?

[`IEventManagerService`](../interfaces/IEventManagerService.md)

#### Returns

`CalendarStateService`

## Methods

### addDisabledDate()

> **addDisabledDate**(`date`, `disabledDates`, `calendarDaysBinding`, `generateCalendarDaysFn`): `Date`[]

Defined in: [services/calendar-state.service.ts:113](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/services/calendar-state.service.ts#L113)

Add a specific date to the disabled dates list

#### Parameters

##### date

`Date`

##### disabledDates

`Date`[]

##### calendarDaysBinding

`Binding`\<[`CalendarDate`](../interfaces/CalendarDate.md)[]\>

##### generateCalendarDaysFn

() => [`CalendarDate`](../interfaces/CalendarDate.md)[]

#### Returns

`Date`[]

#### Implementation of

[`ICalendarStateService`](../interfaces/ICalendarStateService.md).[`addDisabledDate`](../interfaces/ICalendarStateService.md#adddisableddate)

***

### clearSelection()

> **clearSelection**(`isRangeSelection`, `selectedDateBinding`, `selectedDateRangeBinding`, `calendarDaysBinding`, `generateCalendarDaysFn`): `object`

Defined in: [services/calendar-state.service.ts:196](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/services/calendar-state.service.ts#L196)

Clear the current selection

#### Parameters

##### isRangeSelection

`boolean`

##### selectedDateBinding

`Binding`\<`null` \| `Date`\>

##### selectedDateRangeBinding

`Binding`\<[`DateRange`](../interfaces/DateRange.md)\>

##### calendarDaysBinding

`Binding`\<[`CalendarDate`](../interfaces/CalendarDate.md)[]\>

##### generateCalendarDaysFn

() => [`CalendarDate`](../interfaces/CalendarDate.md)[]

#### Returns

`object`

##### selectedDate

> **selectedDate**: `null` \| `Date`

##### selectedDateRange

> **selectedDateRange**: [`DateRange`](../interfaces/DateRange.md)

#### Implementation of

[`ICalendarStateService`](../interfaces/ICalendarStateService.md).[`clearSelection`](../interfaces/ICalendarStateService.md#clearselection)

***

### focusDate()

> **focusDate**(`date`, `focusedDateBinding`): `null` \| `Date`

Defined in: [services/calendar-state.service.ts:227](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/services/calendar-state.service.ts#L227)

Focus a specific date for accessibility

#### Parameters

##### date

`null` | `Date`

##### focusedDateBinding

`Binding`\<`null` \| `Date`\>

#### Returns

`null` \| `Date`

#### Implementation of

[`ICalendarStateService`](../interfaces/ICalendarStateService.md).[`focusDate`](../interfaces/ICalendarStateService.md#focusdate)

***

### removeDisabledDate()

> **removeDisabledDate**(`date`, `disabledDates`, `calendarDaysBinding`, `generateCalendarDaysFn`): `Date`[]

Defined in: [services/calendar-state.service.ts:149](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/services/calendar-state.service.ts#L149)

Remove a specific date from the disabled dates list

#### Parameters

##### date

`Date`

##### disabledDates

`Date`[]

##### calendarDaysBinding

`Binding`\<[`CalendarDate`](../interfaces/CalendarDate.md)[]\>

##### generateCalendarDaysFn

() => [`CalendarDate`](../interfaces/CalendarDate.md)[]

#### Returns

`Date`[]

#### Implementation of

[`ICalendarStateService`](../interfaces/ICalendarStateService.md).[`removeDisabledDate`](../interfaces/ICalendarStateService.md#removedisableddate)

***

### selectDate()

> **selectDate**(`date`, `isRangeSelection`, `currentSelectedDate`, `currentDateRange`, `isDateDisabledFn`, `bindings`, `events`, `generateCalendarDaysFn`): `object`

Defined in: [services/calendar-state.service.ts:251](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/services/calendar-state.service.ts#L251)

Select a date based on the current selection mode

#### Parameters

##### date

`Date`

##### isRangeSelection

`boolean`

##### currentSelectedDate

`null` | `Date`

##### currentDateRange

[`DateRange`](../interfaces/DateRange.md)

##### isDateDisabledFn

(`date`) => `boolean`

##### bindings

###### calendarDays

`Binding`\<[`CalendarDate`](../interfaces/CalendarDate.md)[]\>

###### focusedDate

`Binding`\<`null` \| `Date`\>

###### selectedDate

`Binding`\<`null` \| `Date`\>

###### selectedDateRange

`Binding`\<[`DateRange`](../interfaces/DateRange.md)\>

##### events

`undefined` | \{ `dateRangeSelected?`: `EventEmitter`\<[`DateRange`](../interfaces/DateRange.md)\>; `dateSelected?`: `EventEmitter`\<`Date`\>; \}

##### generateCalendarDaysFn

() => [`CalendarDate`](../interfaces/CalendarDate.md)[]

#### Returns

`object`

##### selectedDate

> **selectedDate**: `null` \| `Date`

##### selectedDateRange

> **selectedDateRange**: [`DateRange`](../interfaces/DateRange.md)

#### Implementation of

[`ICalendarStateService`](../interfaces/ICalendarStateService.md).[`selectDate`](../interfaces/ICalendarStateService.md#selectdate)

***

### setDisabledDates()

> **setDisabledDates**(`dates`, `currentDate`, `bindings`, `getMonthNameFn`, `generateCalendarDaysFn`): `Date`[]

Defined in: [services/calendar-state.service.ts:85](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/services/calendar-state.service.ts#L85)

Set disabled dates

#### Parameters

##### dates

`Date`[]

##### currentDate

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

##### getMonthNameFn

(`month`) => `string`

##### generateCalendarDaysFn

() => [`CalendarDate`](../interfaces/CalendarDate.md)[]

#### Returns

`Date`[]

#### Implementation of

[`ICalendarStateService`](../interfaces/ICalendarStateService.md).[`setDisabledDates`](../interfaces/ICalendarStateService.md#setdisableddates)

***

### setMaxDate()

> **setMaxDate**(`date`, `_currentMaxDate`, `currentDate`, `bindings`, `getMonthNameFn`, `generateCalendarDaysFn`): `null` \| `Date`

Defined in: [services/calendar-state.service.ts:55](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/services/calendar-state.service.ts#L55)

Set the maximum selectable date

#### Parameters

##### date

`null` | `Date`

##### \_currentMaxDate

`null` | `Date`

##### currentDate

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

##### getMonthNameFn

(`month`) => `string`

##### generateCalendarDaysFn

() => [`CalendarDate`](../interfaces/CalendarDate.md)[]

#### Returns

`null` \| `Date`

#### Implementation of

[`ICalendarStateService`](../interfaces/ICalendarStateService.md).[`setMaxDate`](../interfaces/ICalendarStateService.md#setmaxdate)

***

### setMinDate()

> **setMinDate**(`date`, `_currentMinDate`, `currentDate`, `bindings`, `getMonthNameFn`, `generateCalendarDaysFn`): `null` \| `Date`

Defined in: [services/calendar-state.service.ts:25](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/services/calendar-state.service.ts#L25)

Set the minimum selectable date

#### Parameters

##### date

`null` | `Date`

##### \_currentMinDate

`null` | `Date`

##### currentDate

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

##### getMonthNameFn

(`month`) => `string`

##### generateCalendarDaysFn

() => [`CalendarDate`](../interfaces/CalendarDate.md)[]

#### Returns

`null` \| `Date`

#### Implementation of

[`ICalendarStateService`](../interfaces/ICalendarStateService.md).[`setMinDate`](../interfaces/ICalendarStateService.md#setmindate)

***

### setRangeSelectionMode()

> **setRangeSelectionMode**(`isRange`, `isRangeSelectionBinding`, `calendarDaysBinding`, `generateCalendarDaysFn`): `boolean`

Defined in: [services/calendar-state.service.ts:176](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/services/calendar-state.service.ts#L176)

Set the date selection mode

#### Parameters

##### isRange

`boolean`

##### isRangeSelectionBinding

`Binding`\<`boolean`\>

##### calendarDaysBinding

`Binding`\<[`CalendarDate`](../interfaces/CalendarDate.md)[]\>

##### generateCalendarDaysFn

() => [`CalendarDate`](../interfaces/CalendarDate.md)[]

#### Returns

`boolean`

#### Implementation of

[`ICalendarStateService`](../interfaces/ICalendarStateService.md).[`setRangeSelectionMode`](../interfaces/ICalendarStateService.md#setrangeselectionmode)
