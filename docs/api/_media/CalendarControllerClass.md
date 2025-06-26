[**@uplink-protocol/form-controller v0.3.0**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / CalendarControllerClass

# Class: CalendarControllerClass

Defined in: [Date/controller.ts:85](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L85)

CalendarControllerClass - A full featured date picker controller class.
Provides functionality for date picking and calendar display.

This controller uses a service-oriented architecture where all the core
functionality is delegated to specialized services.

## Implements

- [`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md)

## Constructors

### Constructor

> **new CalendarControllerClass**(`options?`): `CalendarControllerClass`

Defined in: [Date/controller.ts:136](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L136)

Constructor - initializes the controller with optional configuration

#### Parameters

##### options?

[`CalendarOptions`](../interfaces/CalendarOptions.md)

Calendar configuration options

#### Returns

`CalendarControllerClass`

## Properties

### \_\_adapter?

> `optional` **\_\_adapter**: `ControllerAdapter`

Defined in: [Date/controller.ts:90](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L90)

***

### \_currentDate

> **\_currentDate**: `Date`

Defined in: [Date/controller.ts:100](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L100)

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_currentDate`](../interfaces/CalendarControllerInterface.md#_currentdate)

***

### \_currentYearRangeBase

> **\_currentYearRangeBase**: `number` = `0`

Defined in: [Date/controller.ts:115](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L115)

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_currentYearRangeBase`](../interfaces/CalendarControllerInterface.md#_currentyearrangebase)

***

### \_dateFormat

> **\_dateFormat**: `null` \| `string` = `null`

Defined in: [Date/controller.ts:109](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L109)

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_dateFormat`](../interfaces/CalendarControllerInterface.md#_dateformat)

***

### \_dateFormatOptions

> **\_dateFormatOptions**: `null` \| `DateTimeFormatOptions` = `null`

Defined in: [Date/controller.ts:113](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L113)

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_dateFormatOptions`](../interfaces/CalendarControllerInterface.md#_dateformatoptions)

***

### \_disabledDates

> **\_disabledDates**: `Date`[] = `[]`

Defined in: [Date/controller.ts:106](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L106)

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_disabledDates`](../interfaces/CalendarControllerInterface.md#_disableddates)

***

### \_disabledDaysOfWeek

> **\_disabledDaysOfWeek**: `number`[] = `[]`

Defined in: [Date/controller.ts:107](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L107)

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_disabledDaysOfWeek`](../interfaces/CalendarControllerInterface.md#_disableddaysofweek)

***

### \_firstDayOfWeek

> **\_firstDayOfWeek**: `number` = `0`

Defined in: [Date/controller.ts:108](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L108)

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_firstDayOfWeek`](../interfaces/CalendarControllerInterface.md#_firstdayofweek)

***

### \_focusedDate

> **\_focusedDate**: `null` \| `Date` = `null`

Defined in: [Date/controller.ts:103](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L103)

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_focusedDate`](../interfaces/CalendarControllerInterface.md#_focuseddate)

***

### \_hideOtherMonthDays

> **\_hideOtherMonthDays**: `boolean` = `false`

Defined in: [Date/controller.ts:111](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L111)

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_hideOtherMonthDays`](../interfaces/CalendarControllerInterface.md#_hideothermonthdays)

***

### \_isRangeSelection

> **\_isRangeSelection**: `boolean` = `false`

Defined in: [Date/controller.ts:110](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L110)

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_isRangeSelection`](../interfaces/CalendarControllerInterface.md#_israngeselection)

***

### \_locale

> **\_locale**: `string` = `"en-US"`

Defined in: [Date/controller.ts:112](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L112)

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_locale`](../interfaces/CalendarControllerInterface.md#_locale)

***

### \_maxDate

> **\_maxDate**: `null` \| `Date` = `null`

Defined in: [Date/controller.ts:105](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L105)

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_maxDate`](../interfaces/CalendarControllerInterface.md#_maxdate)

***

### \_minDate

> **\_minDate**: `null` \| `Date` = `null`

Defined in: [Date/controller.ts:104](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L104)

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_minDate`](../interfaces/CalendarControllerInterface.md#_mindate)

***

### \_selectedDate

> **\_selectedDate**: `null` \| `Date` = `null`

Defined in: [Date/controller.ts:101](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L101)

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_selectedDate`](../interfaces/CalendarControllerInterface.md#_selecteddate)

***

### \_selectedDateRange

> **\_selectedDateRange**: [`DateRange`](../interfaces/DateRange.md)

Defined in: [Date/controller.ts:102](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L102)

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_selectedDateRange`](../interfaces/CalendarControllerInterface.md#_selecteddaterange)

***

### \_yearRangeSize

> **\_yearRangeSize**: `number` = `12`

Defined in: [Date/controller.ts:114](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L114)

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_yearRangeSize`](../interfaces/CalendarControllerInterface.md#_yearrangesize)

***

### bindings

> **bindings**: [`CalendarControllerBindings`](../interfaces/CalendarControllerBindings.md)

Defined in: [Date/controller.ts:86](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L86)

Reactive state bindings

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`bindings`](../interfaces/CalendarControllerInterface.md#bindings)

***

### events

> **events**: [`CalendarControllerEvents`](../interfaces/CalendarControllerEvents.md)

Defined in: [Date/controller.ts:88](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L88)

Event emitters

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`events`](../interfaces/CalendarControllerInterface.md#events)

***

### meta?

> `optional` **meta**: `ControllerMetadata`

Defined in: [Date/controller.ts:89](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L89)

***

### methods

> **methods**: [`CalendarControllerMethods`](../interfaces/CalendarControllerMethods.md)

Defined in: [Date/controller.ts:87](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L87)

Available methods

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`methods`](../interfaces/CalendarControllerInterface.md#methods)

***

### nextMonth()?

> `optional` **nextMonth**: () => `void`

Defined in: [Date/controller.ts:94](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L94)

#### Returns

`void`

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`nextMonth`](../interfaces/CalendarControllerInterface.md#nextmonth)

***

### nextYear()?

> `optional` **nextYear**: () => `void`

Defined in: [Date/controller.ts:97](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L97)

#### Returns

`void`

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`nextYear`](../interfaces/CalendarControllerInterface.md#nextyear)

***

### options?

> `optional` **options**: [`CalendarOptions`](../interfaces/CalendarOptions.md)

Defined in: [Date/controller.ts:91](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L91)

Calendar configuration options

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`options`](../interfaces/CalendarControllerInterface.md#options)

***

### previousMonth()?

> `optional` **previousMonth**: () => `void`

Defined in: [Date/controller.ts:96](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L96)

#### Returns

`void`

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`previousMonth`](../interfaces/CalendarControllerInterface.md#previousmonth)

***

### prevMonth()?

> `optional` **prevMonth**: () => `void`

Defined in: [Date/controller.ts:95](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L95)

#### Returns

`void`

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`prevMonth`](../interfaces/CalendarControllerInterface.md#prevmonth)

***

### prevYear()?

> `optional` **prevYear**: () => `void`

Defined in: [Date/controller.ts:98](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L98)

#### Returns

`void`

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`prevYear`](../interfaces/CalendarControllerInterface.md#prevyear)

## Accessors

### selectedDateRange

#### Get Signature

> **get** **selectedDateRange**(): `object`

Defined in: [Date/controller.ts:2021](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L2021)

Get selected date range with flexible property access

##### Returns

`object`

###### end

> **end**: `null` \| `Date`

###### endDate

> **endDate**: `null` \| `Date`

###### start

> **start**: `null` \| `Date`

###### startDate

> **startDate**: `null` \| `Date`

#### Set Signature

> **set** **selectedDateRange**(`value`): `void`

Defined in: [Date/controller.ts:2038](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L2038)

Set selected date range with flexible property access

##### Parameters

###### value

###### end?

`null` \| `Date`

###### endDate?

`null` \| `Date`

###### start?

`null` \| `Date`

###### startDate?

`null` \| `Date`

##### Returns

`void`

Selected date range with flexible property access

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`selectedDateRange`](../interfaces/CalendarControllerInterface.md#selecteddaterange)

## Methods

### addDisabledDate()

> **addDisabledDate**(`date`): `Date`[]

Defined in: [Date/controller.ts:1288](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L1288)

Add a disabled date

#### Parameters

##### date

`Date`

Date to disable

#### Returns

`Date`[]

Updated disabled dates array

***

### addDisabledDayOfWeek()

> **addDisabledDayOfWeek**(`day`): `number`[]

Defined in: [Date/controller.ts:1347](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L1347)

Add a disabled day of the week

#### Parameters

##### day

`number`

Day of the week to disable (0 = Sunday, 1 = Monday, etc.)

#### Returns

`number`[]

Updated disabled days array

***

### clearFocusedDate()

> **clearFocusedDate**(): `void`

Defined in: [Date/controller.ts:1447](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L1447)

Clear focused date

#### Returns

`void`

***

### clearSelection()

> **clearSelection**(): `void`

Defined in: [Date/controller.ts:1182](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L1182)

Clear current selection

#### Returns

`void`

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`clearSelection`](../interfaces/CalendarControllerInterface.md#clearselection)

***

### focusDate()

> **focusDate**(`date`): `void`

Defined in: [Date/controller.ts:1614](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L1614)

Focus a specific date

#### Parameters

##### date

`Date`

Date to focus

#### Returns

`void`

***

### formatDate()

> **formatDate**(`date`, `options?`): `string`

Defined in: [Date/controller.ts:1457](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L1457)

Format a date with given options

#### Parameters

##### date

`Date`

Date to format

##### options?

Format options or format string

`string` | `DateTimeFormatOptions`

#### Returns

`string`

Formatted date string

***

### generateCalendarDays()

> **generateCalendarDays**(): [`CalendarDate`](../interfaces/CalendarDate.md)[]

Defined in: [Date/controller.ts:774](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L774)

Generate calendar days for current month view using CalendarGeneratorService

#### Returns

[`CalendarDate`](../interfaces/CalendarDate.md)[]

Array of CalendarDate objects

***

### generateCalendarMonths()

> **generateCalendarMonths**(): [`CalendarMonth`](../interfaces/CalendarMonth.md)[]

Defined in: [Date/controller.ts:801](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L801)

Generate calendar months for year view

#### Returns

[`CalendarMonth`](../interfaces/CalendarMonth.md)[]

Array of CalendarMonth objects

***

### generateCalendarYears()

> **generateCalendarYears**(): [`CalendarYear`](../interfaces/CalendarYear.md)[]

Defined in: [Date/controller.ts:838](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L838)

Generate calendar years for year range view

#### Returns

[`CalendarYear`](../interfaces/CalendarYear.md)[]

Array of CalendarYear objects

***

### generateMonthView()

> **generateMonthView**(): `object`

Defined in: [Date/controller.ts:1971](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L1971)

Generate month view data

#### Returns

`object`

Month view object

##### month

> **month**: `number`

##### weekdays

> **weekdays**: `string`[]

##### weeks

> **weeks**: `object`[]

##### year

> **year**: `number`

***

### getAccessibleDateLabel()

> **getAccessibleDateLabel**(`date`): `string`

Defined in: [Date/controller.ts:1933](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L1933)

Get accessible label for a date

#### Parameters

##### date

`Date`

Date to get label for

#### Returns

`string`

Accessible label string

***

### getCurrentYearRange()

> **getCurrentYearRange**(): [`YearRange`](../interfaces/YearRange.md)

Defined in: [Date/controller.ts:1520](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L1520)

Get current year range

#### Returns

[`YearRange`](../interfaces/YearRange.md)

Year range object

***

### getDateFormatOptions()

> **getDateFormatOptions**(): `null` \| `DateTimeFormatOptions`

Defined in: [Date/controller.ts:1428](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L1428)

Get date format options

#### Returns

`null` \| `DateTimeFormatOptions`

Current date format options

***

### getDateStateDescription()

> **getDateStateDescription**(`date`): `string`

Defined in: [Date/controller.ts:1954](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L1954)

Get date state description for accessibility

#### Parameters

##### date

`Date`

Date to describe

#### Returns

`string`

State description string

***

### getDisabledDates()

> **getDisabledDates**(): `Date`[]

Defined in: [Date/controller.ts:1322](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L1322)

Get disabled dates

#### Returns

`Date`[]

Array of disabled dates

***

### getDisabledDaysOfWeek()

> **getDisabledDaysOfWeek**(): `number`[]

Defined in: [Date/controller.ts:1378](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L1378)

Get disabled days of the week

#### Returns

`number`[]

Array of disabled days (0 = Sunday, 1 = Monday, etc.)

***

### getFormattedDate()

> **getFormattedDate**(): `null` \| `string`

Defined in: [Date/controller.ts:1204](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L1204)

Get formatted date string

#### Returns

`null` \| `string`

Formatted date string or null

***

### getLocale()

> **getLocale**(): `string`

Defined in: [Date/controller.ts:1411](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L1411)

Get current locale

#### Returns

`string`

Current locale string

***

### getMonthNames()

> **getMonthNames**(): `string`[]

Defined in: [Date/controller.ts:1503](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L1503)

Get month names in current locale

#### Returns

`string`[]

Array of month names

***

### getWeekdayNames()

> **getWeekdayNames**(`short`): `string`[]

Defined in: [Date/controller.ts:1512](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L1512)

Get weekday names in current locale

#### Parameters

##### short

`boolean` = `false`

Whether to use short names

#### Returns

`string`[]

Array of weekday names

***

### getWeekNumber()

> **getWeekNumber**(`date`): `number`

Defined in: [Date/controller.ts:2013](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L2013)

Get week number for a date

#### Parameters

##### date

`Date`

Date to get week number for

#### Returns

`number`

Week number

***

### goToDate()

> **goToDate**(`date`): `void`

Defined in: [Date/controller.ts:974](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L974)

Navigate to a specific date

#### Parameters

##### date

`Date`

Target date

#### Returns

`void`

***

### goToMonth()

> **goToMonth**(`month`, `year`): `void`

Defined in: [Date/controller.ts:951](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L951)

Navigate to a specific month

#### Parameters

##### month

`number`

Month (0-based)

##### year

`number`

Year

#### Returns

`void`

***

### goToNextMonth()

> **goToNextMonth**(): `void`

Defined in: [Date/controller.ts:994](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L994)

Navigate to next month

#### Returns

`void`

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`goToNextMonth`](../interfaces/CalendarControllerInterface.md#gotonextmonth)

***

### goToNextYear()

> **goToNextYear**(): `void`

Defined in: [Date/controller.ts:1028](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L1028)

Navigate to next year

#### Returns

`void`

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`goToNextYear`](../interfaces/CalendarControllerInterface.md#gotonextyear)

***

### goToNextYearRange()

> **goToNextYearRange**(): `void`

Defined in: [Date/controller.ts:1071](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L1071)

Navigate to next year range

#### Returns

`void`

***

### goToPreviousMonth()

> **goToPreviousMonth**(): `void`

Defined in: [Date/controller.ts:1011](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L1011)

Navigate to previous month

#### Returns

`void`

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`goToPreviousMonth`](../interfaces/CalendarControllerInterface.md#gotopreviousmonth)

***

### goToPreviousYear()

> **goToPreviousYear**(): `void`

Defined in: [Date/controller.ts:1045](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L1045)

Navigate to previous year

#### Returns

`void`

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`goToPreviousYear`](../interfaces/CalendarControllerInterface.md#gotopreviousyear)

***

### goToPreviousYearRange()

> **goToPreviousYearRange**(): `void`

Defined in: [Date/controller.ts:1089](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L1089)

Navigate to previous year range

#### Returns

`void`

***

### goToToday()

> **goToToday**(): `void`

Defined in: [Date/controller.ts:1063](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L1063)

Navigate to today's date

#### Returns

`void`

***

### goToYear()

> **goToYear**(`year`): `void`

Defined in: [Date/controller.ts:963](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L963)

Navigate to a specific year

#### Parameters

##### year

`number`

Year

#### Returns

`void`

***

### isDateDisabled()

> **isDateDisabled**(`date`): `boolean`

Defined in: [Date/controller.ts:882](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L882)

Check if a date is disabled by constraints or disabled dates array

#### Parameters

##### date

`Date`

Date to check

#### Returns

`boolean`

true if date is disabled

***

### isToday()

> **isToday**(`date`): `boolean`

Defined in: [Date/controller.ts:1945](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L1945)

Check if date is today

#### Parameters

##### date

`Date`

Date to check

#### Returns

`boolean`

true if date is today

***

### moveFocusDown()

> **moveFocusDown**(): `void`

Defined in: [Date/controller.ts:1706](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L1706)

Move focus down (next week)

#### Returns

`void`

***

### moveFocusLeft()

> **moveFocusLeft**(): `void`

Defined in: [Date/controller.ts:1660](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L1660)

Move focus left (previous day)

#### Returns

`void`

***

### moveFocusRight()

> **moveFocusRight**(): `void`

Defined in: [Date/controller.ts:1637](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L1637)

Move focus right (next day)

#### Returns

`void`

***

### moveFocusToEndOfMonth()

> **moveFocusToEndOfMonth**(): `void`

Defined in: [Date/controller.ts:1748](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L1748)

Move focus to end of month

#### Returns

`void`

***

### moveFocusToNextMonth()

> **moveFocusToNextMonth**(): `void`

Defined in: [Date/controller.ts:1790](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L1790)

Move focus to next month

#### Returns

`void`

***

### moveFocusToNextYear()

> **moveFocusToNextYear**(): `void`

Defined in: [Date/controller.ts:1836](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L1836)

Move focus to next year

#### Returns

`void`

***

### moveFocusToPreviousMonth()

> **moveFocusToPreviousMonth**(): `void`

Defined in: [Date/controller.ts:1767](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L1767)

Move focus to previous month

#### Returns

`void`

***

### moveFocusToPreviousYear()

> **moveFocusToPreviousYear**(): `void`

Defined in: [Date/controller.ts:1813](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L1813)

Move focus to previous year

#### Returns

`void`

***

### moveFocusToStartOfMonth()

> **moveFocusToStartOfMonth**(): `void`

Defined in: [Date/controller.ts:1729](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L1729)

Move focus to start of month

#### Returns

`void`

***

### moveFocusUp()

> **moveFocusUp**(): `void`

Defined in: [Date/controller.ts:1683](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L1683)

Move focus up (previous week)

#### Returns

`void`

***

### removeDisabledDate()

> **removeDisabledDate**(`date`): `Date`[]

Defined in: [Date/controller.ts:1306](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L1306)

Remove a disabled date

#### Parameters

##### date

`Date`

Date to enable

#### Returns

`Date`[]

Updated disabled dates array

***

### removeDisabledDayOfWeek()

> **removeDisabledDayOfWeek**(`day`): `number`[]

Defined in: [Date/controller.ts:1363](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L1363)

Remove a disabled day of the week

#### Parameters

##### day

`number`

Day of the week to enable (0 = Sunday, 1 = Monday, etc.)

#### Returns

`number`[]

Updated disabled days array

***

### selectDate()

> **selectDate**(`yearOrDate`, `month?`, `day?`): `void`

Defined in: [Date/controller.ts:897](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L897)

Select a date

#### Parameters

##### yearOrDate

Year value or Date object

`number` | `Date`

##### month?

`number`

Month value (0-based) - optional when yearOrDate is a Date

##### day?

`number`

Day value - optional when yearOrDate is a Date

#### Returns

`void`

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`selectDate`](../interfaces/CalendarControllerInterface.md#selectdate)

***

### selectFocusedDate()

> **selectFocusedDate**(): `void`

Defined in: [Date/controller.ts:1859](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L1859)

Select the currently focused date

#### Returns

`void`

***

### selectMonth()

> **selectMonth**(`month`, `year`): `void`

Defined in: [Date/controller.ts:1575](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L1575)

Select month (navigate to month view)

#### Parameters

##### month

`number`

Month number (0-based)

##### year

`number`

Year number

#### Returns

`void`

***

### selectYear()

> **selectYear**(`year`): `void`

Defined in: [Date/controller.ts:1594](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L1594)

Select year (navigate to year view)

#### Parameters

##### year

`number`

Year number

#### Returns

`void`

***

### setCurrentYearRange()

> **setCurrentYearRange**(`date`): `void`

Defined in: [Date/controller.ts:1535](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L1535)

Set current year range based on date

#### Parameters

##### date

`Date`

Date to base range on

#### Returns

`void`

***

### setDateFormatOptions()

> **setDateFormatOptions**(`options`): `void`

Defined in: [Date/controller.ts:1419](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L1419)

Set date format options

#### Parameters

##### options

Intl.DateTimeFormatOptions or null to use locale defaults

`null` | `DateTimeFormatOptions`

#### Returns

`void`

***

### setDisabledDates()

> **setDisabledDates**(`dates`): `void`

Defined in: [Date/controller.ts:1268](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L1268)

Set disabled dates

#### Parameters

##### dates

`Date`[]

Array of disabled dates

#### Returns

`void`

***

### setDisabledDaysOfWeek()

> **setDisabledDaysOfWeek**(`days`): `number`[]

Defined in: [Date/controller.ts:1331](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L1331)

Set disabled days of the week

#### Parameters

##### days

`number`[]

Array of disabled days (0 = Sunday, 1 = Monday, etc.)

#### Returns

`number`[]

Array of disabled days

***

### setFocusedDate()

> **setFocusedDate**(`date`): `void`

Defined in: [Date/controller.ts:1436](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L1436)

Set focused date

#### Parameters

##### date

Date to focus or null

`null` | `Date`

#### Returns

`void`

***

### setLocale()

> **setLocale**(`locale`): `void`

Defined in: [Date/controller.ts:1386](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L1386)

Set locale

#### Parameters

##### locale

`string`

Locale string

#### Returns

`void`

***

### setMaxDate()

> **setMaxDate**(`date`): `void`

Defined in: [Date/controller.ts:1248](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L1248)

Set maximum selectable date

#### Parameters

##### date

Maximum date or null

`null` | `Date`

#### Returns

`void`

***

### setMinDate()

> **setMinDate**(`date`): `void`

Defined in: [Date/controller.ts:1228](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L1228)

Set minimum selectable date

#### Parameters

##### date

Minimum date or null

`null` | `Date`

#### Returns

`void`

***

### setRangeSelectionMode()

> **setRangeSelectionMode**(`isRange`): `void`

Defined in: [Date/controller.ts:1169](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L1169)

Set range selection mode

#### Parameters

##### isRange

`boolean`

Whether range selection is enabled

#### Returns

`void`

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`setRangeSelectionMode`](../interfaces/CalendarControllerInterface.md#setrangeselectionmode)

***

### setYearRangeSize()

> **setYearRangeSize**(`size`): `void`

Defined in: [Date/controller.ts:1557](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/controller.ts#L1557)

Set year range size

#### Parameters

##### size

`number`

Number of years to display

#### Returns

`void`
