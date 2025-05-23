[**@uplink-protocol/form-controller v0.1.4**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / CalendarControllerClass

# Class: CalendarControllerClass

Defined in: [controller.ts:74](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L74)

CalendarControllerClass - A full featured date picker controller class.
Provides functionality for date picking and calendar display.

This controller uses a service-oriented architecture where all the core
functionality is delegated to specialized services.

## Implements

- [`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md)

## Constructors

### Constructor

> **new CalendarControllerClass**(`options?`): `CalendarControllerClass`

Defined in: [controller.ts:117](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L117)

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

Defined in: [controller.ts:79](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L79)

#### Implementation of

`CalendarControllerInterface.__adapter`

***

### \_currentDate

> **\_currentDate**: `Date`

Defined in: [controller.ts:82](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L82)

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_currentDate`](../interfaces/CalendarControllerInterface.md#_currentdate)

***

### \_currentYearRangeBase

> **\_currentYearRangeBase**: `number` = `0`

Defined in: [controller.ts:95](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L95)

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_currentYearRangeBase`](../interfaces/CalendarControllerInterface.md#_currentyearrangebase)

***

### \_dateFormat

> **\_dateFormat**: `null` \| `string` = `null`

Defined in: [controller.ts:90](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L90)

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_dateFormat`](../interfaces/CalendarControllerInterface.md#_dateformat)

***

### \_dateFormatOptions

> **\_dateFormatOptions**: `null` \| `DateTimeFormatOptions` = `null`

Defined in: [controller.ts:93](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L93)

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_dateFormatOptions`](../interfaces/CalendarControllerInterface.md#_dateformatoptions)

***

### \_disabledDates

> **\_disabledDates**: `Date`[] = `[]`

Defined in: [controller.ts:88](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L88)

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_disabledDates`](../interfaces/CalendarControllerInterface.md#_disableddates)

***

### \_firstDayOfWeek

> **\_firstDayOfWeek**: `number` = `0`

Defined in: [controller.ts:89](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L89)

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_firstDayOfWeek`](../interfaces/CalendarControllerInterface.md#_firstdayofweek)

***

### \_focusedDate

> **\_focusedDate**: `null` \| `Date` = `null`

Defined in: [controller.ts:85](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L85)

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_focusedDate`](../interfaces/CalendarControllerInterface.md#_focuseddate)

***

### \_hideOtherMonthDays

> **\_hideOtherMonthDays**: `boolean` = `false`

Defined in: [controller.ts:92](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L92)

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_hideOtherMonthDays`](../interfaces/CalendarControllerInterface.md#_hideothermonthdays)

***

### \_isRangeSelection

> **\_isRangeSelection**: `boolean` = `false`

Defined in: [controller.ts:91](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L91)

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_isRangeSelection`](../interfaces/CalendarControllerInterface.md#_israngeselection)

***

### \_locale

> **\_locale**: `string` = `"en-US"`

Defined in: [controller.ts:96](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L96)

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_locale`](../interfaces/CalendarControllerInterface.md#_locale)

***

### \_maxDate

> **\_maxDate**: `null` \| `Date` = `null`

Defined in: [controller.ts:87](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L87)

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_maxDate`](../interfaces/CalendarControllerInterface.md#_maxdate)

***

### \_minDate

> **\_minDate**: `null` \| `Date` = `null`

Defined in: [controller.ts:86](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L86)

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_minDate`](../interfaces/CalendarControllerInterface.md#_mindate)

***

### \_selectedDate

> **\_selectedDate**: `null` \| `Date` = `null`

Defined in: [controller.ts:83](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L83)

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_selectedDate`](../interfaces/CalendarControllerInterface.md#_selecteddate)

***

### \_selectedDateRange

> **\_selectedDateRange**: [`DateRange`](../interfaces/DateRange.md)

Defined in: [controller.ts:84](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L84)

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_selectedDateRange`](../interfaces/CalendarControllerInterface.md#_selecteddaterange)

***

### \_yearRangeSize

> **\_yearRangeSize**: `number` = `12`

Defined in: [controller.ts:94](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L94)

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_yearRangeSize`](../interfaces/CalendarControllerInterface.md#_yearrangesize)

***

### bindings

> **bindings**: `Record`\<`string`, `Binding`\<`any`\>\>

Defined in: [controller.ts:75](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L75)

#### Implementation of

`CalendarControllerInterface.bindings`

***

### events?

> `optional` **events**: `Record`\<`string`, `EventEmitter`\<`any`\>\>

Defined in: [controller.ts:77](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L77)

#### Implementation of

`CalendarControllerInterface.events`

***

### meta?

> `optional` **meta**: `ControllerMetadata`

Defined in: [controller.ts:78](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L78)

#### Implementation of

`CalendarControllerInterface.meta`

***

### methods?

> `optional` **methods**: `Record`\<`string`, (...`args`) => `any`\>

Defined in: [controller.ts:76](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L76)

#### Implementation of

`CalendarControllerInterface.methods`

## Accessors

### selectedDateRange

#### Get Signature

> **get** **selectedDateRange**(): `object`

Defined in: [controller.ts:1377](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L1377)

Gets the selected date range - provides compatibility with both naming conventions (start/end and startDate/endDate)

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

Defined in: [controller.ts:1394](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L1394)

Sets the selected date range - provides compatibility with both naming conventions

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

Defined in: [controller.ts:785](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L785)

Add a specific date to the disabled dates list

#### Parameters

##### date

`Date`

Date to disable

#### Returns

`Date`[]

Updated list of disabled dates

***

### clearFocusedDate()

> **clearFocusedDate**(): `void`

Defined in: [controller.ts:890](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L890)

Clear the focused date

#### Returns

`void`

***

### clearSelection()

> **clearSelection**(): `void`

Defined in: [controller.ts:684](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L684)

Clear the current selection using CalendarStateService

#### Returns

`void`

***

### focusDate()

> **focusDate**(`date`): `void`

Defined in: [controller.ts:1070](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L1070)

Focus on a specific date

#### Parameters

##### date

`Date`

Date to focus on

#### Returns

`void`

***

### formatDate()

> **formatDate**(`date`, `options?`): `string`

Defined in: [controller.ts:900](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L900)

Format a date according to the specified format

#### Parameters

##### date

`Date`

Date to format

##### options?

Optional format options that override the default options

`string` | `DateTimeFormatOptions`

#### Returns

`string`

Formatted date string

***

### generateMonthView()

> **generateMonthView**(): `object`

Defined in: [controller.ts:1322](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L1322)

Generate a complete month view with proper structure for rendering

#### Returns

`object`

Full month view structure

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

Defined in: [controller.ts:1275](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L1275)

Get accessible date label for screen readers

#### Parameters

##### date

`Date`

The date to get a label for

#### Returns

`string`

Accessible date label string

***

### getCurrentYearRange()

> **getCurrentYearRange**(): [`YearRange`](../interfaces/YearRange.md)

Defined in: [controller.ts:972](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L972)

Get information about the current year range

#### Returns

[`YearRange`](../interfaces/YearRange.md)

Year range object with start and end years

***

### getDateFormatOptions()

> **getDateFormatOptions**(): `null` \| `DateTimeFormatOptions`

Defined in: [controller.ts:866](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L866)

Get the current date format options

#### Returns

`null` \| `DateTimeFormatOptions`

Current date format options or null

***

### getDateStateDescription()

> **getDateStateDescription**(`date`): `string`

Defined in: [controller.ts:1301](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L1301)

Get date state description for screen readers

#### Parameters

##### date

`Date`

Date to get state for

#### Returns

`string`

State description string

***

### getDisabledDates()

> **getDisabledDates**(): `Date`[]

Defined in: [controller.ts:821](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L821)

Get the current list of disabled dates

#### Returns

`Date`[]

Array of disabled dates

***

### getFormattedDate()

> **getFormattedDate**(): `null` \| `string`

Defined in: [controller.ts:704](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L704)

Get formatted selected date using DateFormattingService

#### Returns

`null` \| `string`

Formatted date string or null

***

### getLocale()

> **getLocale**(): `string`

Defined in: [controller.ts:849](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L849)

Get the current locale

#### Returns

`string`

Current locale string

***

### getMonthNames()

> **getMonthNames**(): `string`[]

Defined in: [controller.ts:953](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L953)

Get localized month names

#### Returns

`string`[]

Array of month names

***

### getWeekdayNames()

> **getWeekdayNames**(`short`): `string`[]

Defined in: [controller.ts:963](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L963)

Get localized weekday names

#### Parameters

##### short

`boolean` = `false`

#### Returns

`string`[]

Array of weekday names

***

### getWeekNumber()

> **getWeekNumber**(`date`): `number`

Defined in: [controller.ts:1367](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L1367)

Get the ISO week number for a given date

#### Parameters

##### date

`Date`

The date to get week number for

#### Returns

`number`

Week number (1-53)

***

### goToDate()

> **goToDate**(`date`): `void`

Defined in: [controller.ts:516](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L516)

Go to a specific date using NavigationService

#### Parameters

##### date

`Date`

Date to navigate to

#### Returns

`void`

***

### goToMonth()

> **goToMonth**(`month`): `void`

Defined in: [controller.ts:487](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L487)

Go to a specific month using NavigationService

#### Parameters

##### month

`number`

Month (0-11)

#### Returns

`void`

***

### goToToday()

> **goToToday**(): `void`

Defined in: [controller.ts:524](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L524)

Go to today using NavigationService

#### Returns

`void`

***

### goToYear()

> **goToYear**(`year`): `void`

Defined in: [controller.ts:499](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L499)

Go to a specific year using NavigationService

#### Parameters

##### year

`number`

Year

#### Returns

`void`

***

### goToYearRange()

> **goToYearRange**(`baseYear`): `void`

Defined in: [controller.ts:586](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L586)

Go to specific year range

#### Parameters

##### baseYear

`number`

The base year for the range

#### Returns

`void`

***

### isDateDisabled()

> **isDateDisabled**(`date`): `boolean`

Defined in: [controller.ts:343](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L343)

Check if a date should be disabled using ConstraintsService

#### Parameters

##### date

`Date`

Date to check

#### Returns

`boolean`

Boolean indicating if the date is disabled

***

### isToday()

> **isToday**(`date`): `boolean`

Defined in: [controller.ts:1292](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L1292)

Check if a date is today

#### Parameters

##### date

`Date`

Date to check

#### Returns

`boolean`

Boolean indicating if date is today

***

### moveFocusDown()

> **moveFocusDown**(): `void`

Defined in: [controller.ts:1143](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L1143)

Move focus to the date below (next week)

#### Returns

`void`

***

### moveFocusLeft()

> **moveFocusLeft**(): `void`

Defined in: [controller.ts:1107](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L1107)

Move focus to the date on the left (previous day)

#### Returns

`void`

***

### moveFocusRight()

> **moveFocusRight**(): `void`

Defined in: [controller.ts:1089](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L1089)

Move focus to the date on the right (next day)

#### Returns

`void`

***

### moveFocusToEndOfMonth()

> **moveFocusToEndOfMonth**(): `void`

Defined in: [controller.ts:1175](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L1175)

Move focus to the last day of the month (End key)

#### Returns

`void`

***

### moveFocusToNextMonth()

> **moveFocusToNextMonth**(): `void`

Defined in: [controller.ts:1207](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L1207)

Move focus to the same day in the next month (Page Down key)

#### Returns

`void`

***

### moveFocusToNextYear()

> **moveFocusToNextYear**(): `void`

Defined in: [controller.ts:1243](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L1243)

Move focus to the same day in the next year (Ctrl + Page Down)

#### Returns

`void`

***

### moveFocusToPreviousMonth()

> **moveFocusToPreviousMonth**(): `void`

Defined in: [controller.ts:1189](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L1189)

Move focus to the same day in the previous month (Page Up key)

#### Returns

`void`

***

### moveFocusToPreviousYear()

> **moveFocusToPreviousYear**(): `void`

Defined in: [controller.ts:1225](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L1225)

Move focus to the same day in the previous year (Ctrl + Page Up)

#### Returns

`void`

***

### moveFocusToStartOfMonth()

> **moveFocusToStartOfMonth**(): `void`

Defined in: [controller.ts:1161](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L1161)

Move focus to the first day of the month (Home key)

#### Returns

`void`

***

### moveFocusUp()

> **moveFocusUp**(): `void`

Defined in: [controller.ts:1125](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L1125)

Move focus to the date above (previous week)

#### Returns

`void`

***

### nextMonth()

> **nextMonth**(): `void`

Defined in: [controller.ts:439](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L439)

Navigate to next month using NavigationService

#### Returns

`void`

***

### nextYear()

> **nextYear**(): `void`

Defined in: [controller.ts:467](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L467)

Navigate to next year using NavigationService

#### Returns

`void`

***

### nextYearRange()

> **nextYearRange**(): `void`

Defined in: [controller.ts:531](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L531)

Navigate to next year range

#### Returns

`void`

***

### previousMonth()

> **previousMonth**(): `void`

Defined in: [controller.ts:460](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L460)

Navigate to previous month - alias for prevMonth()
Added to maintain backward compatibility with tests

#### Returns

`void`

***

### prevMonth()

> **prevMonth**(): `void`

Defined in: [controller.ts:449](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L449)

Navigate to previous month using NavigationService

#### Returns

`void`

***

### prevYear()

> **prevYear**(): `void`

Defined in: [controller.ts:477](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L477)

Navigate to previous year using NavigationService

#### Returns

`void`

***

### prevYearRange()

> **prevYearRange**(): `void`

Defined in: [controller.ts:558](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L558)

Navigate to previous year range

#### Returns

`void`

***

### removeDisabledDate()

> **removeDisabledDate**(`date`): `Date`[]

Defined in: [controller.ts:803](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L803)

Remove a specific date from the disabled dates list

#### Parameters

##### date

`Date`

Date to enable

#### Returns

`Date`[]

Updated list of disabled dates

***

### selectDate()

> **selectDate**(`yearOrDate`, `month?`, `day?`): `void`

Defined in: [controller.ts:374](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L374)

Select a date

#### Parameters

##### yearOrDate

`number` | `Date`

##### month?

`number`

Month (0-11)

##### day?

`number`

Day of month

#### Returns

`void`

***

### selectFocusedDate()

> **selectFocusedDate**(): `void`

Defined in: [controller.ts:1261](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L1261)

Select the currently focused date (Enter key)

#### Returns

`void`

***

### selectMonth()

> **selectMonth**(`month`, `year`): `void`

Defined in: [controller.ts:1025](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L1025)

Select a specific month from the month view

#### Parameters

##### month

`number`

Month to select (0-11)

##### year

`number`

Year of the month

#### Returns

`void`

***

### selectYear()

> **selectYear**(`year`): `void`

Defined in: [controller.ts:1047](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L1047)

Select a specific year from the year view

#### Parameters

##### year

`number`

Year to select

#### Returns

`void`

***

### setDateFormatOptions()

> **setDateFormatOptions**(`options`): `void`

Defined in: [controller.ts:857](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L857)

Set date format options for internationalized formatting

#### Parameters

##### options

`DateTimeFormatOptions`

Intl.DateTimeFormatOptions

#### Returns

`void`

***

### setDisabledDates()

> **setDisabledDates**(`dates`): `void`

Defined in: [controller.ts:765](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L765)

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

Defined in: [controller.ts:873](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L873)

Set the focused date

#### Parameters

##### date

Focused date or null to clear focus

`null` | `Date`

#### Returns

`void`

***

### setLocale()

> **setLocale**(`locale`): `void`

Defined in: [controller.ts:829](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L829)

Set the locale for the calendar

#### Parameters

##### locale

`string`

Locale string (e.g., 'en-US', 'fr-FR', 'ja-JP')

#### Returns

`void`

***

### setMaxDate()

> **setMaxDate**(`date`): `void`

Defined in: [controller.ts:745](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L745)

Set maximum selectable date

#### Parameters

##### date

Maximum date

`null` | `Date`

#### Returns

`void`

***

### setMinDate()

> **setMinDate**(`date`): `void`

Defined in: [controller.ts:725](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L725)

Set minimum selectable date

#### Parameters

##### date

Minimum date

`null` | `Date`

#### Returns

`void`

***

### setRangeSelectionMode()

> **setRangeSelectionMode**(`isRange`): `void`

Defined in: [controller.ts:669](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L669)

Set the date selection mode

#### Parameters

##### isRange

`boolean`

Whether to use range selection mode

#### Returns

`void`

***

### setYearRangeSize()

> **setYearRangeSize**(`size`): `void`

Defined in: [controller.ts:1004](https://github.com/jmkcoder/uplink-protocol-calendar/blob/90165c1152662e28e3c591acea1b996d16646319/src/controller.ts#L1004)

Set the size of the year range (number of years to display in year view)

#### Parameters

##### size

`number`

Number of years to display

#### Returns

`void`
