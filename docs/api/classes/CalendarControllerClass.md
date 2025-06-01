[**@uplink-protocol/form-controller v0.2.0**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / CalendarControllerClass

# Class: CalendarControllerClass

Defined in: [controller.ts:80](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L80)

CalendarControllerClass - A full featured date picker controller class.
Provides functionality for date picking and calendar display.

This controller uses a service-oriented architecture where all the core
functionality is delegated to specialized services.

## Implements

- [`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md)

## Constructors

### Constructor

> **new CalendarControllerClass**(`options?`): `CalendarControllerClass`

Defined in: [controller.ts:129](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L129)

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

Defined in: [controller.ts:84](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L84)

#### Implementation of

`CalendarControllerInterface.__adapter`

***

### \_currentDate

> **\_currentDate**: `Date`

Defined in: [controller.ts:94](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L94)

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_currentDate`](../interfaces/CalendarControllerInterface.md#_currentdate)

***

### \_currentYearRangeBase

> **\_currentYearRangeBase**: `number` = `0`

Defined in: [controller.ts:108](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L108)

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_currentYearRangeBase`](../interfaces/CalendarControllerInterface.md#_currentyearrangebase)

***

### \_dateFormat

> **\_dateFormat**: `null` \| `string` = `null`

Defined in: [controller.ts:102](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L102)

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_dateFormat`](../interfaces/CalendarControllerInterface.md#_dateformat)

***

### \_dateFormatOptions

> **\_dateFormatOptions**: `null` \| `DateTimeFormatOptions` = `null`

Defined in: [controller.ts:106](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L106)

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_dateFormatOptions`](../interfaces/CalendarControllerInterface.md#_dateformatoptions)

***

### \_disabledDates

> **\_disabledDates**: `Date`[] = `[]`

Defined in: [controller.ts:100](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L100)

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_disabledDates`](../interfaces/CalendarControllerInterface.md#_disableddates)

***

### \_firstDayOfWeek

> **\_firstDayOfWeek**: `number` = `0`

Defined in: [controller.ts:101](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L101)

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_firstDayOfWeek`](../interfaces/CalendarControllerInterface.md#_firstdayofweek)

***

### \_focusedDate

> **\_focusedDate**: `null` \| `Date` = `null`

Defined in: [controller.ts:97](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L97)

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_focusedDate`](../interfaces/CalendarControllerInterface.md#_focuseddate)

***

### \_hideOtherMonthDays

> **\_hideOtherMonthDays**: `boolean` = `false`

Defined in: [controller.ts:104](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L104)

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_hideOtherMonthDays`](../interfaces/CalendarControllerInterface.md#_hideothermonthdays)

***

### \_isRangeSelection

> **\_isRangeSelection**: `boolean` = `false`

Defined in: [controller.ts:103](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L103)

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_isRangeSelection`](../interfaces/CalendarControllerInterface.md#_israngeselection)

***

### \_locale

> **\_locale**: `string` = `"en-US"`

Defined in: [controller.ts:105](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L105)

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_locale`](../interfaces/CalendarControllerInterface.md#_locale)

***

### \_maxDate

> **\_maxDate**: `null` \| `Date` = `null`

Defined in: [controller.ts:99](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L99)

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_maxDate`](../interfaces/CalendarControllerInterface.md#_maxdate)

***

### \_minDate

> **\_minDate**: `null` \| `Date` = `null`

Defined in: [controller.ts:98](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L98)

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_minDate`](../interfaces/CalendarControllerInterface.md#_mindate)

***

### \_selectedDate

> **\_selectedDate**: `null` \| `Date` = `null`

Defined in: [controller.ts:95](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L95)

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_selectedDate`](../interfaces/CalendarControllerInterface.md#_selecteddate)

***

### \_selectedDateRange

> **\_selectedDateRange**: [`DateRange`](../interfaces/DateRange.md)

Defined in: [controller.ts:96](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L96)

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_selectedDateRange`](../interfaces/CalendarControllerInterface.md#_selecteddaterange)

***

### \_yearRangeSize

> **\_yearRangeSize**: `number` = `12`

Defined in: [controller.ts:107](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L107)

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_yearRangeSize`](../interfaces/CalendarControllerInterface.md#_yearrangesize)

***

### bindings

> **bindings**: `Record`\<`string`, `Binding`\<`any`\>\>

Defined in: [controller.ts:81](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L81)

#### Implementation of

`CalendarControllerInterface.bindings`

***

### events?

> `optional` **events**: `Record`\<`string`, `EventEmitter`\<`any`\>\>

Defined in: [controller.ts:83](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L83)

#### Implementation of

`CalendarControllerInterface.events`

***

### meta?

> `optional` **meta**: `ControllerMetadata`

Defined in: [controller.ts:84](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L84)

#### Implementation of

`CalendarControllerInterface.meta`

***

### methods?

> `optional` **methods**: `Record`\<`string`, (...`args`) => `any`\>

Defined in: [controller.ts:82](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L82)

#### Implementation of

`CalendarControllerInterface.methods`

***

### nextMonth()?

> `optional` **nextMonth**: () => `void`

Defined in: [controller.ts:87](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L87)

#### Returns

`void`

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`nextMonth`](../interfaces/CalendarControllerInterface.md#nextmonth)

***

### nextYear()?

> `optional` **nextYear**: () => `void`

Defined in: [controller.ts:90](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L90)

#### Returns

`void`

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`nextYear`](../interfaces/CalendarControllerInterface.md#nextyear)

***

### previousMonth()?

> `optional` **previousMonth**: () => `void`

Defined in: [controller.ts:89](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L89)

#### Returns

`void`

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`previousMonth`](../interfaces/CalendarControllerInterface.md#previousmonth)

***

### prevMonth()?

> `optional` **prevMonth**: () => `void`

Defined in: [controller.ts:88](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L88)

#### Returns

`void`

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`prevMonth`](../interfaces/CalendarControllerInterface.md#prevmonth)

***

### prevYear()?

> `optional` **prevYear**: () => `void`

Defined in: [controller.ts:91](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L91)

#### Returns

`void`

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`prevYear`](../interfaces/CalendarControllerInterface.md#prevyear)

## Accessors

### selectedDateRange

#### Get Signature

> **get** **selectedDateRange**(): `object`

Defined in: [controller.ts:1408](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L1408)

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

Defined in: [controller.ts:1425](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L1425)

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

## Methods

### addDisabledDate()

> **addDisabledDate**(`date`): `Date`[]

Defined in: [controller.ts:795](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L795)

Add a disabled date

#### Parameters

##### date

`Date`

Date to disable

#### Returns

`Date`[]

Updated disabled dates array

***

### clearFocusedDate()

> **clearFocusedDate**(): `void`

Defined in: [controller.ts:891](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L891)

Clear focused date

#### Returns

`void`

***

### clearSelection()

> **clearSelection**(): `void`

Defined in: [controller.ts:695](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L695)

Clear current selection

#### Returns

`void`

***

### focusDate()

> **focusDate**(`date`): `void`

Defined in: [controller.ts:1057](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L1057)

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

Defined in: [controller.ts:900](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L900)

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

Defined in: [controller.ts:287](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L287)

Generate calendar days for current month view using CalendarGeneratorService

#### Returns

[`CalendarDate`](../interfaces/CalendarDate.md)[]

Array of CalendarDate objects

***

### generateCalendarMonths()

> **generateCalendarMonths**(): [`CalendarMonth`](../interfaces/CalendarMonth.md)[]

Defined in: [controller.ts:314](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L314)

Generate calendar months for year view

#### Returns

[`CalendarMonth`](../interfaces/CalendarMonth.md)[]

Array of CalendarMonth objects

***

### generateCalendarYears()

> **generateCalendarYears**(): [`CalendarYear`](../interfaces/CalendarYear.md)[]

Defined in: [controller.ts:351](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L351)

Generate calendar years for year range view

#### Returns

[`CalendarYear`](../interfaces/CalendarYear.md)[]

Array of CalendarYear objects

***

### generateMonthView()

> **generateMonthView**(): `object`

Defined in: [controller.ts:1359](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L1359)

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

Defined in: [controller.ts:1321](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L1321)

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

Defined in: [controller.ts:963](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L963)

Get current year range

#### Returns

[`YearRange`](../interfaces/YearRange.md)

Year range object

***

### getDateFormatOptions()

> **getDateFormatOptions**(): `null` \| `DateTimeFormatOptions`

Defined in: [controller.ts:872](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L872)

Get date format options

#### Returns

`null` \| `DateTimeFormatOptions`

Current date format options

***

### getDateStateDescription()

> **getDateStateDescription**(`date`): `string`

Defined in: [controller.ts:1342](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L1342)

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

Defined in: [controller.ts:830](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L830)

Get disabled dates

#### Returns

`Date`[]

Array of disabled dates

***

### getFormattedDate()

> **getFormattedDate**(): `null` \| `string`

Defined in: [controller.ts:718](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L718)

Get formatted date string

#### Returns

`null` \| `string`

Formatted date string or null

***

### getLocale()

> **getLocale**(): `string`

Defined in: [controller.ts:855](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L855)

Get current locale

#### Returns

`string`

Current locale string

***

### getMonthNames()

> **getMonthNames**(): `string`[]

Defined in: [controller.ts:946](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L946)

Get month names in current locale

#### Returns

`string`[]

Array of month names

***

### getWeekdayNames()

> **getWeekdayNames**(`short`): `string`[]

Defined in: [controller.ts:955](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L955)

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

Defined in: [controller.ts:1400](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L1400)

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

Defined in: [controller.ts:487](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L487)

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

Defined in: [controller.ts:464](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L464)

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

Defined in: [controller.ts:507](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L507)

Navigate to next month

#### Returns

`void`

***

### goToNextYear()

> **goToNextYear**(): `void`

Defined in: [controller.ts:541](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L541)

Navigate to next year

#### Returns

`void`

***

### goToNextYearRange()

> **goToNextYearRange**(): `void`

Defined in: [controller.ts:584](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L584)

Navigate to next year range

#### Returns

`void`

***

### goToPreviousMonth()

> **goToPreviousMonth**(): `void`

Defined in: [controller.ts:524](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L524)

Navigate to previous month

#### Returns

`void`

***

### goToPreviousYear()

> **goToPreviousYear**(): `void`

Defined in: [controller.ts:558](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L558)

Navigate to previous year

#### Returns

`void`

***

### goToPreviousYearRange()

> **goToPreviousYearRange**(): `void`

Defined in: [controller.ts:602](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L602)

Navigate to previous year range

#### Returns

`void`

***

### goToToday()

> **goToToday**(): `void`

Defined in: [controller.ts:576](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L576)

Navigate to today's date

#### Returns

`void`

***

### goToYear()

> **goToYear**(`year`): `void`

Defined in: [controller.ts:476](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L476)

Navigate to a specific year

#### Parameters

##### year

`number`

Year

#### Returns

`void`

***

### isToday()

> **isToday**(`date`): `boolean`

Defined in: [controller.ts:1333](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L1333)

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

Defined in: [controller.ts:1149](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L1149)

Move focus down (next week)

#### Returns

`void`

***

### moveFocusLeft()

> **moveFocusLeft**(): `void`

Defined in: [controller.ts:1103](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L1103)

Move focus left (previous day)

#### Returns

`void`

***

### moveFocusRight()

> **moveFocusRight**(): `void`

Defined in: [controller.ts:1080](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L1080)

Move focus right (next day)

#### Returns

`void`

***

### moveFocusToEndOfMonth()

> **moveFocusToEndOfMonth**(): `void`

Defined in: [controller.ts:1191](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L1191)

Move focus to end of month

#### Returns

`void`

***

### moveFocusToNextMonth()

> **moveFocusToNextMonth**(): `void`

Defined in: [controller.ts:1233](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L1233)

Move focus to next month

#### Returns

`void`

***

### moveFocusToNextYear()

> **moveFocusToNextYear**(): `void`

Defined in: [controller.ts:1279](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L1279)

Move focus to next year

#### Returns

`void`

***

### moveFocusToPreviousMonth()

> **moveFocusToPreviousMonth**(): `void`

Defined in: [controller.ts:1210](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L1210)

Move focus to previous month

#### Returns

`void`

***

### moveFocusToPreviousYear()

> **moveFocusToPreviousYear**(): `void`

Defined in: [controller.ts:1256](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L1256)

Move focus to previous year

#### Returns

`void`

***

### moveFocusToStartOfMonth()

> **moveFocusToStartOfMonth**(): `void`

Defined in: [controller.ts:1172](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L1172)

Move focus to start of month

#### Returns

`void`

***

### moveFocusUp()

> **moveFocusUp**(): `void`

Defined in: [controller.ts:1126](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L1126)

Move focus up (previous week)

#### Returns

`void`

***

### removeDisabledDate()

> **removeDisabledDate**(`date`): `Date`[]

Defined in: [controller.ts:813](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L813)

Remove a disabled date

#### Parameters

##### date

`Date`

Date to enable

#### Returns

`Date`[]

Updated disabled dates array

***

### selectDate()

> **selectDate**(`yearOrDate`, `month?`, `day?`): `void`

Defined in: [controller.ts:410](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L410)

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

***

### selectFocusedDate()

> **selectFocusedDate**(): `void`

Defined in: [controller.ts:1302](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L1302)

Select the currently focused date

#### Returns

`void`

***

### selectMonth()

> **selectMonth**(`month`, `year`): `void`

Defined in: [controller.ts:1018](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L1018)

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

Defined in: [controller.ts:1037](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L1037)

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

Defined in: [controller.ts:978](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L978)

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

Defined in: [controller.ts:863](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L863)

Set date format options

#### Parameters

##### options

`DateTimeFormatOptions`

Intl.DateTimeFormatOptions

#### Returns

`void`

***

### setDisabledDates()

> **setDisabledDates**(`dates`): `void`

Defined in: [controller.ts:775](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L775)

Set disabled dates

#### Parameters

##### dates

`Date`[]

Array of disabled dates

#### Returns

`void`

***

### setFocusedDate()

> **setFocusedDate**(`date`): `void`

Defined in: [controller.ts:880](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L880)

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

Defined in: [controller.ts:838](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L838)

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

Defined in: [controller.ts:755](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L755)

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

Defined in: [controller.ts:735](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L735)

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

Defined in: [controller.ts:682](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L682)

Set range selection mode

#### Parameters

##### isRange

`boolean`

Whether range selection is enabled

#### Returns

`void`

***

### setYearRangeSize()

> **setYearRangeSize**(`size`): `void`

Defined in: [controller.ts:1000](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/controller.ts#L1000)

Set year range size

#### Parameters

##### size

`number`

Number of years to display

#### Returns

`void`
