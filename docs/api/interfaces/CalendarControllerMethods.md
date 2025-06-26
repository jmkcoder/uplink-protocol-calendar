[**@uplink-protocol/form-controller v0.2.3**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / CalendarControllerMethods

# Interface: CalendarControllerMethods

Defined in: [types/calendar-controller.types.ts:65](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/types/calendar-controller.types.ts#L65)

Calendar Controller Methods - All available public methods
These methods provide the API for interacting with the calendar

## Methods

### addDisabledDate()

> **addDisabledDate**(`date`): `Date`[]

Defined in: [types/calendar-controller.types.ts:193](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/types/calendar-controller.types.ts#L193)

Add a date to the disabled dates

#### Parameters

##### date

`Date`

#### Returns

`Date`[]

***

### addDisabledDayOfWeek()

> **addDisabledDayOfWeek**(`day`): `number`[]

Defined in: [types/calendar-controller.types.ts:204](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/types/calendar-controller.types.ts#L204)

Add a day of the week to the disabled days

#### Parameters

##### day

`number`

#### Returns

`number`[]

***

### clearFocusedDate()

> **clearFocusedDate**(): `void`

Defined in: [types/calendar-controller.types.ts:112](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/types/calendar-controller.types.ts#L112)

Clear the focused date

#### Returns

`void`

***

### clearSelection()

> **clearSelection**(): `void`

Defined in: [types/calendar-controller.types.ts:105](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/types/calendar-controller.types.ts#L105)

Clear the current selection

#### Returns

`void`

***

### focusDate()

> **focusDate**(`date`): `void`

Defined in: [types/calendar-controller.types.ts:115](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/types/calendar-controller.types.ts#L115)

Focus a specific date

#### Parameters

##### date

`Date`

#### Returns

`void`

***

### formatDate()

> **formatDate**(`date`, `options?`): `string`

Defined in: [types/calendar-controller.types.ts:173](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/types/calendar-controller.types.ts#L173)

Format a specific date with given options

#### Parameters

##### date

`Date`

##### options?

`string` | `DateTimeFormatOptions`

#### Returns

`string`

***

### generateCalendarDays()

> **generateCalendarDays**(): [`CalendarDate`](CalendarDate.md)[]

Defined in: [types/calendar-controller.types.ts:245](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/types/calendar-controller.types.ts#L245)

Generate calendar days for current month

#### Returns

[`CalendarDate`](CalendarDate.md)[]

***

### generateCalendarMonths()

> **generateCalendarMonths**(): [`CalendarMonth`](CalendarMonth.md)[]

Defined in: [types/calendar-controller.types.ts:248](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/types/calendar-controller.types.ts#L248)

Generate calendar months for current year

#### Returns

[`CalendarMonth`](CalendarMonth.md)[]

***

### generateCalendarYears()

> **generateCalendarYears**(): [`CalendarYear`](CalendarYear.md)[]

Defined in: [types/calendar-controller.types.ts:251](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/types/calendar-controller.types.ts#L251)

Generate calendar years for current decade

#### Returns

[`CalendarYear`](CalendarYear.md)[]

***

### generateMonthView()

> **generateMonthView**(): `object`

Defined in: [types/calendar-controller.types.ts:234](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/types/calendar-controller.types.ts#L234)

Generate month view data

#### Returns

`object`

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

Defined in: [types/calendar-controller.types.ts:224](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/types/calendar-controller.types.ts#L224)

Get accessible label for a date

#### Parameters

##### date

`Date`

#### Returns

`string`

***

### getCurrentYearRange()

> **getCurrentYearRange**(): [`YearRange`](YearRange.md)

Defined in: [types/calendar-controller.types.ts:214](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/types/calendar-controller.types.ts#L214)

Get the current year range

#### Returns

[`YearRange`](YearRange.md)

***

### getDateFormatOptions()

> **getDateFormatOptions**(): `null` \| `DateTimeFormatOptions`

Defined in: [types/calendar-controller.types.ts:167](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/types/calendar-controller.types.ts#L167)

Get current date format options

#### Returns

`null` \| `DateTimeFormatOptions`

***

### getDateStateDescription()

> **getDateStateDescription**(`date`): `string`

Defined in: [types/calendar-controller.types.ts:227](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/types/calendar-controller.types.ts#L227)

Get date state description for accessibility

#### Parameters

##### date

`Date`

#### Returns

`string`

***

### getDisabledDates()

> **getDisabledDates**(): `Date`[]

Defined in: [types/calendar-controller.types.ts:198](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/types/calendar-controller.types.ts#L198)

Get the current disabled dates

#### Returns

`Date`[]

***

### getDisabledDaysOfWeek()

> **getDisabledDaysOfWeek**(): `number`[]

Defined in: [types/calendar-controller.types.ts:210](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/types/calendar-controller.types.ts#L210)

Get the current disabled days of the week

#### Returns

`number`[]

***

### getFormattedDate()

> **getFormattedDate**(): `null` \| `string`

Defined in: [types/calendar-controller.types.ts:170](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/types/calendar-controller.types.ts#L170)

Get formatted date string for selected date

#### Returns

`null` \| `string`

***

### getLocale()

> **getLocale**(): `string`

Defined in: [types/calendar-controller.types.ts:156](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/types/calendar-controller.types.ts#L156)

Get the current locale

#### Returns

`string`

***

### getMonthNames()

> **getMonthNames**(): `string`[]

Defined in: [types/calendar-controller.types.ts:159](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/types/calendar-controller.types.ts#L159)

Get month names in the current locale

#### Returns

`string`[]

***

### getWeekdayNames()

> **getWeekdayNames**(`short?`): `string`[]

Defined in: [types/calendar-controller.types.ts:162](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/types/calendar-controller.types.ts#L162)

Get weekday names in the current locale

#### Parameters

##### short?

`boolean`

#### Returns

`string`[]

***

### getWeekNumber()

> **getWeekNumber**(`date`): `number`

Defined in: [types/calendar-controller.types.ts:242](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/types/calendar-controller.types.ts#L242)

Get week number for a date

#### Parameters

##### date

`Date`

#### Returns

`number`

***

### goToDate()

> **goToDate**(`date`): `void`

Defined in: [types/calendar-controller.types.ts:77](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/types/calendar-controller.types.ts#L77)

Navigate to a specific date

#### Parameters

##### date

`Date`

#### Returns

`void`

***

### goToMonth()

> **goToMonth**(`month`, `year`): `void`

Defined in: [types/calendar-controller.types.ts:71](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/types/calendar-controller.types.ts#L71)

Navigate to a specific month

#### Parameters

##### month

`number`

##### year

`number`

#### Returns

`void`

***

### goToNextMonth()

> **goToNextMonth**(): `void`

Defined in: [types/calendar-controller.types.ts:80](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/types/calendar-controller.types.ts#L80)

Navigate to the next month

#### Returns

`void`

***

### goToNextYear()

> **goToNextYear**(): `void`

Defined in: [types/calendar-controller.types.ts:86](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/types/calendar-controller.types.ts#L86)

Navigate to the next year

#### Returns

`void`

***

### goToNextYearRange()

> **goToNextYearRange**(): `void`

Defined in: [types/calendar-controller.types.ts:95](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/types/calendar-controller.types.ts#L95)

Navigate to the next year range (decade)

#### Returns

`void`

***

### goToPreviousMonth()

> **goToPreviousMonth**(): `void`

Defined in: [types/calendar-controller.types.ts:83](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/types/calendar-controller.types.ts#L83)

Navigate to the previous month

#### Returns

`void`

***

### goToPreviousYear()

> **goToPreviousYear**(): `void`

Defined in: [types/calendar-controller.types.ts:89](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/types/calendar-controller.types.ts#L89)

Navigate to the previous year

#### Returns

`void`

***

### goToPreviousYearRange()

> **goToPreviousYearRange**(): `void`

Defined in: [types/calendar-controller.types.ts:98](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/types/calendar-controller.types.ts#L98)

Navigate to the previous year range (decade)

#### Returns

`void`

***

### goToToday()

> **goToToday**(): `void`

Defined in: [types/calendar-controller.types.ts:92](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/types/calendar-controller.types.ts#L92)

Navigate to today's date

#### Returns

`void`

***

### goToYear()

> **goToYear**(`year`): `void`

Defined in: [types/calendar-controller.types.ts:74](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/types/calendar-controller.types.ts#L74)

Navigate to a specific year

#### Parameters

##### year

`number`

#### Returns

`void`

***

### isToday()

> **isToday**(`date`): `boolean`

Defined in: [types/calendar-controller.types.ts:231](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/types/calendar-controller.types.ts#L231)

Check if a date is today

#### Parameters

##### date

`Date`

#### Returns

`boolean`

***

### moveFocusDown()

> **moveFocusDown**(): `void`

Defined in: [types/calendar-controller.types.ts:128](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/types/calendar-controller.types.ts#L128)

Move focus down one week

#### Returns

`void`

***

### moveFocusLeft()

> **moveFocusLeft**(): `void`

Defined in: [types/calendar-controller.types.ts:122](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/types/calendar-controller.types.ts#L122)

Move focus to the previous day

#### Returns

`void`

***

### moveFocusRight()

> **moveFocusRight**(): `void`

Defined in: [types/calendar-controller.types.ts:119](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/types/calendar-controller.types.ts#L119)

Move focus to the next day

#### Returns

`void`

***

### moveFocusToEndOfMonth()

> **moveFocusToEndOfMonth**(): `void`

Defined in: [types/calendar-controller.types.ts:134](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/types/calendar-controller.types.ts#L134)

Move focus to the end of the month

#### Returns

`void`

***

### moveFocusToNextMonth()

> **moveFocusToNextMonth**(): `void`

Defined in: [types/calendar-controller.types.ts:140](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/types/calendar-controller.types.ts#L140)

Move focus to the next month

#### Returns

`void`

***

### moveFocusToNextYear()

> **moveFocusToNextYear**(): `void`

Defined in: [types/calendar-controller.types.ts:146](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/types/calendar-controller.types.ts#L146)

Move focus to the next year

#### Returns

`void`

***

### moveFocusToPreviousMonth()

> **moveFocusToPreviousMonth**(): `void`

Defined in: [types/calendar-controller.types.ts:137](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/types/calendar-controller.types.ts#L137)

Move focus to the previous month

#### Returns

`void`

***

### moveFocusToPreviousYear()

> **moveFocusToPreviousYear**(): `void`

Defined in: [types/calendar-controller.types.ts:143](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/types/calendar-controller.types.ts#L143)

Move focus to the previous year

#### Returns

`void`

***

### moveFocusToStartOfMonth()

> **moveFocusToStartOfMonth**(): `void`

Defined in: [types/calendar-controller.types.ts:131](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/types/calendar-controller.types.ts#L131)

Move focus to the start of the month

#### Returns

`void`

***

### moveFocusUp()

> **moveFocusUp**(): `void`

Defined in: [types/calendar-controller.types.ts:125](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/types/calendar-controller.types.ts#L125)

Move focus up one week

#### Returns

`void`

***

### nextMonth()?

> `optional` **nextMonth**(): `void`

Defined in: [types/calendar-controller.types.ts:255](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/types/calendar-controller.types.ts#L255)

Alias for goToNextMonth()

#### Returns

`void`

***

### nextYear()?

> `optional` **nextYear**(): `void`

Defined in: [types/calendar-controller.types.ts:264](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/types/calendar-controller.types.ts#L264)

Alias for goToNextYear()

#### Returns

`void`

***

### previousMonth()?

> `optional` **previousMonth**(): `void`

Defined in: [types/calendar-controller.types.ts:261](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/types/calendar-controller.types.ts#L261)

Alias for goToPreviousMonth()

#### Returns

`void`

***

### prevMonth()?

> `optional` **prevMonth**(): `void`

Defined in: [types/calendar-controller.types.ts:258](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/types/calendar-controller.types.ts#L258)

Alias for goToPreviousMonth()

#### Returns

`void`

***

### prevYear()?

> `optional` **prevYear**(): `void`

Defined in: [types/calendar-controller.types.ts:267](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/types/calendar-controller.types.ts#L267)

Alias for goToPreviousYear()

#### Returns

`void`

***

### removeDisabledDate()

> **removeDisabledDate**(`date`): `Date`[]

Defined in: [types/calendar-controller.types.ts:196](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/types/calendar-controller.types.ts#L196)

Remove a date from the disabled dates

#### Parameters

##### date

`Date`

#### Returns

`Date`[]

***

### removeDisabledDayOfWeek()

> **removeDisabledDayOfWeek**(`day`): `number`[]

Defined in: [types/calendar-controller.types.ts:207](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/types/calendar-controller.types.ts#L207)

Remove a day of the week from the disabled days

#### Parameters

##### day

`number`

#### Returns

`number`[]

***

### selectDate()

> **selectDate**(`yearOrDate`, `month?`, `day?`): `void`

Defined in: [types/calendar-controller.types.ts:68](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/types/calendar-controller.types.ts#L68)

Select a specific date

#### Parameters

##### yearOrDate

`number` | `Date`

##### month?

`number`

##### day?

`number`

#### Returns

`void`

***

### selectFocusedDate()

> **selectFocusedDate**(): `void`

Defined in: [types/calendar-controller.types.ts:149](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/types/calendar-controller.types.ts#L149)

Select the currently focused date

#### Returns

`void`

***

### selectMonth()

> **selectMonth**(`month`, `year`): `void`

Defined in: [types/calendar-controller.types.ts:177](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/types/calendar-controller.types.ts#L177)

Select a month (navigate to month view)

#### Parameters

##### month

`number`

##### year

`number`

#### Returns

`void`

***

### selectYear()

> **selectYear**(`year`): `void`

Defined in: [types/calendar-controller.types.ts:180](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/types/calendar-controller.types.ts#L180)

Select a year (navigate to year view)

#### Parameters

##### year

`number`

#### Returns

`void`

***

### setCurrentYearRange()

> **setCurrentYearRange**(`date`): `void`

Defined in: [types/calendar-controller.types.ts:217](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/types/calendar-controller.types.ts#L217)

Set the current year range based on a date

#### Parameters

##### date

`Date`

#### Returns

`void`

***

### setDateFormatOptions()

> **setDateFormatOptions**(`options`): `void`

Defined in: [types/calendar-controller.types.ts:164](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/types/calendar-controller.types.ts#L164)

Set date format options

#### Parameters

##### options

`null` | `DateTimeFormatOptions`

#### Returns

`void`

***

### setDisabledDates()

> **setDisabledDates**(`dates`): `void`

Defined in: [types/calendar-controller.types.ts:190](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/types/calendar-controller.types.ts#L190)

Set array of disabled dates

#### Parameters

##### dates

`Date`[]

#### Returns

`void`

***

### setDisabledDaysOfWeek()

> **setDisabledDaysOfWeek**(`days`): `number`[]

Defined in: [types/calendar-controller.types.ts:201](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/types/calendar-controller.types.ts#L201)

Set array of disabled days of the week (0 = Sunday, 1 = Monday, etc.)

#### Parameters

##### days

`number`[]

#### Returns

`number`[]

***

### setFocusedDate()

> **setFocusedDate**(`date`): `void`

Defined in: [types/calendar-controller.types.ts:109](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/types/calendar-controller.types.ts#L109)

Set the focused date

#### Parameters

##### date

`null` | `Date`

#### Returns

`void`

***

### setLocale()

> **setLocale**(`locale`): `void`

Defined in: [types/calendar-controller.types.ts:153](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/types/calendar-controller.types.ts#L153)

Set the locale

#### Parameters

##### locale

`string`

#### Returns

`void`

***

### setMaxDate()

> **setMaxDate**(`date`): `void`

Defined in: [types/calendar-controller.types.ts:187](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/types/calendar-controller.types.ts#L187)

Set maximum selectable date

#### Parameters

##### date

`null` | `Date`

#### Returns

`void`

***

### setMinDate()

> **setMinDate**(`date`): `void`

Defined in: [types/calendar-controller.types.ts:184](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/types/calendar-controller.types.ts#L184)

Set minimum selectable date

#### Parameters

##### date

`null` | `Date`

#### Returns

`void`

***

### setRangeSelectionMode()

> **setRangeSelectionMode**(`isRange`): `void`

Defined in: [types/calendar-controller.types.ts:102](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/types/calendar-controller.types.ts#L102)

Enable or disable range selection mode

#### Parameters

##### isRange

`boolean`

#### Returns

`void`

***

### setYearRangeSize()

> **setYearRangeSize**(`size`): `void`

Defined in: [types/calendar-controller.types.ts:220](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/types/calendar-controller.types.ts#L220)

Set the year range size (how many years to display)

#### Parameters

##### size

`number`

#### Returns

`void`
