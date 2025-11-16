[**@uplink-protocol/form-controller v0.3.1**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / CalendarStateService

# Class: CalendarStateService

Defined in: [Date/services/calendar-state.service.ts:14](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/services/calendar-state.service.ts#L14)

Implementation of CalendarStateService
Responsible for centralizing and managing the state of the calendar

## Implements

- [`ICalendarStateService`](../interfaces/ICalendarStateService.md)

## Constructors

### Constructor

> **new CalendarStateService**(`_viewStateService`, `_dateSelectionService`, `_constraintsService`, `_eventManagerService?`): `CalendarStateService`

Defined in: [Date/services/calendar-state.service.ts:15](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/services/calendar-state.service.ts#L15)

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

Defined in: [Date/services/calendar-state.service.ts:113](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/services/calendar-state.service.ts#L113)

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

Defined in: [Date/services/calendar-state.service.ts:196](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/services/calendar-state.service.ts#L196)

Clear the current selection

#### Parameters

##### isRangeSelection

`boolean`

##### selectedDateBinding

`Binding`\<`Date` \| `null`\>

##### selectedDateRangeBinding

`Binding`\<[`DateRange`](../interfaces/DateRange.md)\>

##### calendarDaysBinding

`Binding`\<[`CalendarDate`](../interfaces/CalendarDate.md)[]\>

##### generateCalendarDaysFn

() => [`CalendarDate`](../interfaces/CalendarDate.md)[]

#### Returns

`object`

##### selectedDate

> **selectedDate**: `Date` \| `null`

##### selectedDateRange

> **selectedDateRange**: [`DateRange`](../interfaces/DateRange.md)

#### Implementation of

[`ICalendarStateService`](../interfaces/ICalendarStateService.md).[`clearSelection`](../interfaces/ICalendarStateService.md#clearselection)

***

### focusDate()

> **focusDate**(`date`, `focusedDateBinding`): `Date` \| `null`

Defined in: [Date/services/calendar-state.service.ts:227](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/services/calendar-state.service.ts#L227)

Focus a specific date for accessibility

#### Parameters

##### date

`Date` | `null`

##### focusedDateBinding

`Binding`\<`Date` \| `null`\>

#### Returns

`Date` \| `null`

#### Implementation of

[`ICalendarStateService`](../interfaces/ICalendarStateService.md).[`focusDate`](../interfaces/ICalendarStateService.md#focusdate)

***

### getCurrentState()

> **getCurrentState**(`currentDate`, `selectedDate`, `selectedDateRange`, `focusedDate`, `isDateDisabledFn`, `isDateSelectedFn`, `isDateInRangeFn`, `isTodayFn`, `hasEventsFn`): `any`

Defined in: [Date/services/calendar-state.service.ts:332](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/services/calendar-state.service.ts#L332)

Get current state for accessibility and other features

#### Parameters

##### currentDate

`Date`

##### selectedDate

`Date` | `null`

##### selectedDateRange

[`DateRange`](../interfaces/DateRange.md)

##### focusedDate

`Date` | `null`

##### isDateDisabledFn

(`date`) => `boolean`

##### isDateSelectedFn

(`date`) => `boolean`

##### isDateInRangeFn

(`date`) => `boolean`

##### isTodayFn

(`date`) => `boolean`

##### hasEventsFn

(`date`) => `boolean`

#### Returns

`any`

***

### removeDisabledDate()

> **removeDisabledDate**(`date`, `disabledDates`, `calendarDaysBinding`, `generateCalendarDaysFn`): `Date`[]

Defined in: [Date/services/calendar-state.service.ts:149](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/services/calendar-state.service.ts#L149)

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

Defined in: [Date/services/calendar-state.service.ts:251](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/services/calendar-state.service.ts#L251)

Select a date based on the current selection mode

#### Parameters

##### date

`Date`

##### isRangeSelection

`boolean`

##### currentSelectedDate

`Date` | `null`

##### currentDateRange

[`DateRange`](../interfaces/DateRange.md)

##### isDateDisabledFn

(`date`) => `boolean`

##### bindings

###### calendarDays

`Binding`\<[`CalendarDate`](../interfaces/CalendarDate.md)[]\>

###### focusedDate

`Binding`\<`Date` \| `null`\>

###### selectedDate

`Binding`\<`Date` \| `null`\>

###### selectedDateRange

`Binding`\<[`DateRange`](../interfaces/DateRange.md)\>

##### events

\{ `dateRangeSelected?`: `EventEmitter`\<[`DateRange`](../interfaces/DateRange.md)\>; `dateSelected?`: `EventEmitter`\<`Date`\>; \} | `undefined`

##### generateCalendarDaysFn

() => [`CalendarDate`](../interfaces/CalendarDate.md)[]

#### Returns

`object`

##### selectedDate

> **selectedDate**: `Date` \| `null`

##### selectedDateRange

> **selectedDateRange**: [`DateRange`](../interfaces/DateRange.md)

#### Implementation of

[`ICalendarStateService`](../interfaces/ICalendarStateService.md).[`selectDate`](../interfaces/ICalendarStateService.md#selectdate)

***

### setDisabledDates()

> **setDisabledDates**(`dates`, `currentDate`, `bindings`, `getMonthNameFn`, `generateCalendarDaysFn`): `Date`[]

Defined in: [Date/services/calendar-state.service.ts:85](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/services/calendar-state.service.ts#L85)

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

> **setMaxDate**(`date`, `_currentMaxDate`, `currentDate`, `bindings`, `getMonthNameFn`, `generateCalendarDaysFn`): `Date` \| `null`

Defined in: [Date/services/calendar-state.service.ts:55](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/services/calendar-state.service.ts#L55)

Set the maximum selectable date

#### Parameters

##### date

`Date` | `null`

##### \_currentMaxDate

`Date` | `null`

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

`Date` \| `null`

#### Implementation of

[`ICalendarStateService`](../interfaces/ICalendarStateService.md).[`setMaxDate`](../interfaces/ICalendarStateService.md#setmaxdate)

***

### setMinDate()

> **setMinDate**(`date`, `_currentMinDate`, `currentDate`, `bindings`, `getMonthNameFn`, `generateCalendarDaysFn`): `Date` \| `null`

Defined in: [Date/services/calendar-state.service.ts:25](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/services/calendar-state.service.ts#L25)

Set the minimum selectable date

#### Parameters

##### date

`Date` | `null`

##### \_currentMinDate

`Date` | `null`

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

`Date` \| `null`

#### Implementation of

[`ICalendarStateService`](../interfaces/ICalendarStateService.md).[`setMinDate`](../interfaces/ICalendarStateService.md#setmindate)

***

### setRangeSelectionMode()

> **setRangeSelectionMode**(`isRange`, `isRangeSelectionBinding`, `calendarDaysBinding`, `generateCalendarDaysFn`): `boolean`

Defined in: [Date/services/calendar-state.service.ts:176](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/services/calendar-state.service.ts#L176)

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
