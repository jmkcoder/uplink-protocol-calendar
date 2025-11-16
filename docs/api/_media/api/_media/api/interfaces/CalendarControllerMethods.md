[**@uplink-protocol/form-controller v0.3.1**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / CalendarControllerMethods

# Interface: CalendarControllerMethods

Defined in: [Date/types/calendar-controller-methods.type.ts:7](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-methods.type.ts#L7)

Calendar Controller Methods - All available public methods
These methods provide the API for interacting with the calendar

## Methods

### addDisabledDate()

> **addDisabledDate**(`date`): `Date`[]

Defined in: [Date/types/calendar-controller-methods.type.ts:145](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-methods.type.ts#L145)

Add a date to the disabled dates

#### Parameters

##### date

`Date`

#### Returns

`Date`[]

***

### addDisabledDayOfWeek()

> **addDisabledDayOfWeek**(`day`): `number`[]

Defined in: [Date/types/calendar-controller-methods.type.ts:156](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-methods.type.ts#L156)

Add a day of the week to the disabled days

#### Parameters

##### day

`number`

#### Returns

`number`[]

***

### clearFocusedDate()

> **clearFocusedDate**(): `void`

Defined in: [Date/types/calendar-controller-methods.type.ts:54](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-methods.type.ts#L54)

Clear the focused date

#### Returns

`void`

***

### clearSelection()

> **clearSelection**(): `void`

Defined in: [Date/types/calendar-controller-methods.type.ts:47](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-methods.type.ts#L47)

Clear the current selection

#### Returns

`void`

***

### focusDate()

> **focusDate**(`date`): `void`

Defined in: [Date/types/calendar-controller-methods.type.ts:57](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-methods.type.ts#L57)

Focus a specific date

#### Parameters

##### date

`Date`

#### Returns

`void`

***

### formatDate()

> **formatDate**(`date`, `options?`): `string`

Defined in: [Date/types/calendar-controller-methods.type.ts:125](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-methods.type.ts#L125)

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

Defined in: [Date/types/calendar-controller-methods.type.ts:209](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-methods.type.ts#L209)

Generate calendar days for current month

#### Returns

[`CalendarDate`](CalendarDate.md)[]

***

### generateCalendarMonths()

> **generateCalendarMonths**(): [`CalendarMonth`](CalendarMonth.md)[]

Defined in: [Date/types/calendar-controller-methods.type.ts:212](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-methods.type.ts#L212)

Generate calendar months for current year

#### Returns

[`CalendarMonth`](CalendarMonth.md)[]

***

### generateCalendarYears()

> **generateCalendarYears**(): [`CalendarYear`](CalendarYear.md)[]

Defined in: [Date/types/calendar-controller-methods.type.ts:215](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-methods.type.ts#L215)

Generate calendar years for current decade

#### Returns

[`CalendarYear`](CalendarYear.md)[]

***

### generateMonthView()

> **generateMonthView**(): `object`

Defined in: [Date/types/calendar-controller-methods.type.ts:198](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-methods.type.ts#L198)

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

Defined in: [Date/types/calendar-controller-methods.type.ts:176](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-methods.type.ts#L176)

Get accessible label for a date

#### Parameters

##### date

`Date`

#### Returns

`string`

***

### getCurrentYearRange()

> **getCurrentYearRange**(): [`YearRange`](YearRange.md)

Defined in: [Date/types/calendar-controller-methods.type.ts:166](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-methods.type.ts#L166)

Get the current year range

#### Returns

[`YearRange`](YearRange.md)

***

### getDateFormatOptions()

> **getDateFormatOptions**(): `DateTimeFormatOptions` \| `null`

Defined in: [Date/types/calendar-controller-methods.type.ts:119](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-methods.type.ts#L119)

Get current date format options

#### Returns

`DateTimeFormatOptions` \| `null`

***

### getDateStateDescription()

> **getDateStateDescription**(`date`): `string`

Defined in: [Date/types/calendar-controller-methods.type.ts:179](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-methods.type.ts#L179)

Get date state description for accessibility

#### Parameters

##### date

`Date`

#### Returns

`string`

***

### getDisabledDates()

> **getDisabledDates**(): `Date`[]

Defined in: [Date/types/calendar-controller-methods.type.ts:150](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-methods.type.ts#L150)

Get the current disabled dates

#### Returns

`Date`[]

***

### getDisabledDaysOfWeek()

> **getDisabledDaysOfWeek**(): `number`[]

Defined in: [Date/types/calendar-controller-methods.type.ts:162](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-methods.type.ts#L162)

Get the current disabled days of the week

#### Returns

`number`[]

***

### getFormattedDate()

> **getFormattedDate**(): `string` \| `null`

Defined in: [Date/types/calendar-controller-methods.type.ts:122](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-methods.type.ts#L122)

Get formatted date string for selected date

#### Returns

`string` \| `null`

***

### getLocale()

> **getLocale**(): `string`

Defined in: [Date/types/calendar-controller-methods.type.ts:98](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-methods.type.ts#L98)

Get the current locale

#### Returns

`string`

***

### getMonthNames()

> **getMonthNames**(): `string`[]

Defined in: [Date/types/calendar-controller-methods.type.ts:107](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-methods.type.ts#L107)

Get month names in the current locale

#### Returns

`string`[]

***

### getWeekdayNames()

> **getWeekdayNames**(`short?`): `string`[]

Defined in: [Date/types/calendar-controller-methods.type.ts:110](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-methods.type.ts#L110)

Get weekday names in the current locale

#### Parameters

##### short?

`boolean`

#### Returns

`string`[]

***

### getWeekNumber()

> **getWeekNumber**(`date`): `number`

Defined in: [Date/types/calendar-controller-methods.type.ts:206](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-methods.type.ts#L206)

Get week number for a date

#### Parameters

##### date

`Date`

#### Returns

`number`

***

### goToDate()

> **goToDate**(`date`): `void`

Defined in: [Date/types/calendar-controller-methods.type.ts:19](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-methods.type.ts#L19)

Navigate to a specific date

#### Parameters

##### date

`Date`

#### Returns

`void`

***

### goToMonth()

> **goToMonth**(`month`, `year`): `void`

Defined in: [Date/types/calendar-controller-methods.type.ts:13](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-methods.type.ts#L13)

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

Defined in: [Date/types/calendar-controller-methods.type.ts:22](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-methods.type.ts#L22)

Navigate to the next month

#### Returns

`void`

***

### goToNextYear()

> **goToNextYear**(): `void`

Defined in: [Date/types/calendar-controller-methods.type.ts:28](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-methods.type.ts#L28)

Navigate to the next year

#### Returns

`void`

***

### goToNextYearRange()

> **goToNextYearRange**(): `void`

Defined in: [Date/types/calendar-controller-methods.type.ts:37](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-methods.type.ts#L37)

Navigate to the next year range (decade)

#### Returns

`void`

***

### goToPreviousMonth()

> **goToPreviousMonth**(): `void`

Defined in: [Date/types/calendar-controller-methods.type.ts:25](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-methods.type.ts#L25)

Navigate to the previous month

#### Returns

`void`

***

### goToPreviousYear()

> **goToPreviousYear**(): `void`

Defined in: [Date/types/calendar-controller-methods.type.ts:31](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-methods.type.ts#L31)

Navigate to the previous year

#### Returns

`void`

***

### goToPreviousYearRange()

> **goToPreviousYearRange**(): `void`

Defined in: [Date/types/calendar-controller-methods.type.ts:40](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-methods.type.ts#L40)

Navigate to the previous year range (decade)

#### Returns

`void`

***

### goToToday()

> **goToToday**(): `void`

Defined in: [Date/types/calendar-controller-methods.type.ts:34](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-methods.type.ts#L34)

Navigate to today's date

#### Returns

`void`

***

### goToYear()

> **goToYear**(`year`): `void`

Defined in: [Date/types/calendar-controller-methods.type.ts:16](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-methods.type.ts#L16)

Navigate to a specific year

#### Parameters

##### year

`number`

#### Returns

`void`

***

### hasEvents()

> **hasEvents**(`date`): `boolean`

Defined in: [Date/types/calendar-controller-methods.type.ts:195](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-methods.type.ts#L195)

Check if a date has events

#### Parameters

##### date

`Date`

#### Returns

`boolean`

***

### isDateDisabled()

> **isDateDisabled**(`date`): `boolean`

Defined in: [Date/types/calendar-controller-methods.type.ts:186](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-methods.type.ts#L186)

Check if a date is disabled

#### Parameters

##### date

`Date`

#### Returns

`boolean`

***

### isDateInRange()

> **isDateInRange**(`date`): `boolean`

Defined in: [Date/types/calendar-controller-methods.type.ts:192](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-methods.type.ts#L192)

Check if a date is in the selected range

#### Parameters

##### date

`Date`

#### Returns

`boolean`

***

### isDateSelected()

> **isDateSelected**(`date`): `boolean`

Defined in: [Date/types/calendar-controller-methods.type.ts:189](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-methods.type.ts#L189)

Check if a date is selected

#### Parameters

##### date

`Date`

#### Returns

`boolean`

***

### isToday()

> **isToday**(`date`): `boolean`

Defined in: [Date/types/calendar-controller-methods.type.ts:183](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-methods.type.ts#L183)

Check if a date is today

#### Parameters

##### date

`Date`

#### Returns

`boolean`

***

### moveFocusDown()

> **moveFocusDown**(): `void`

Defined in: [Date/types/calendar-controller-methods.type.ts:70](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-methods.type.ts#L70)

Move focus down one week

#### Returns

`void`

***

### moveFocusLeft()

> **moveFocusLeft**(): `void`

Defined in: [Date/types/calendar-controller-methods.type.ts:64](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-methods.type.ts#L64)

Move focus to the previous day

#### Returns

`void`

***

### moveFocusRight()

> **moveFocusRight**(): `void`

Defined in: [Date/types/calendar-controller-methods.type.ts:61](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-methods.type.ts#L61)

Move focus to the next day

#### Returns

`void`

***

### moveFocusToEndOfMonth()

> **moveFocusToEndOfMonth**(): `void`

Defined in: [Date/types/calendar-controller-methods.type.ts:76](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-methods.type.ts#L76)

Move focus to the end of the month

#### Returns

`void`

***

### moveFocusToNextMonth()

> **moveFocusToNextMonth**(): `void`

Defined in: [Date/types/calendar-controller-methods.type.ts:82](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-methods.type.ts#L82)

Move focus to the next month

#### Returns

`void`

***

### moveFocusToNextYear()

> **moveFocusToNextYear**(): `void`

Defined in: [Date/types/calendar-controller-methods.type.ts:88](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-methods.type.ts#L88)

Move focus to the next year

#### Returns

`void`

***

### moveFocusToPreviousMonth()

> **moveFocusToPreviousMonth**(): `void`

Defined in: [Date/types/calendar-controller-methods.type.ts:79](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-methods.type.ts#L79)

Move focus to the previous month

#### Returns

`void`

***

### moveFocusToPreviousYear()

> **moveFocusToPreviousYear**(): `void`

Defined in: [Date/types/calendar-controller-methods.type.ts:85](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-methods.type.ts#L85)

Move focus to the previous year

#### Returns

`void`

***

### moveFocusToStartOfMonth()

> **moveFocusToStartOfMonth**(): `void`

Defined in: [Date/types/calendar-controller-methods.type.ts:73](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-methods.type.ts#L73)

Move focus to the start of the month

#### Returns

`void`

***

### moveFocusUp()

> **moveFocusUp**(): `void`

Defined in: [Date/types/calendar-controller-methods.type.ts:67](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-methods.type.ts#L67)

Move focus up one week

#### Returns

`void`

***

### nextMonth()?

> `optional` **nextMonth**(): `void`

Defined in: [Date/types/calendar-controller-methods.type.ts:219](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-methods.type.ts#L219)

Alias for goToNextMonth()

#### Returns

`void`

***

### nextYear()?

> `optional` **nextYear**(): `void`

Defined in: [Date/types/calendar-controller-methods.type.ts:228](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-methods.type.ts#L228)

Alias for goToNextYear()

#### Returns

`void`

***

### previousMonth()?

> `optional` **previousMonth**(): `void`

Defined in: [Date/types/calendar-controller-methods.type.ts:225](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-methods.type.ts#L225)

Alias for goToPreviousMonth()

#### Returns

`void`

***

### prevMonth()?

> `optional` **prevMonth**(): `void`

Defined in: [Date/types/calendar-controller-methods.type.ts:222](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-methods.type.ts#L222)

Alias for goToPreviousMonth()

#### Returns

`void`

***

### prevYear()?

> `optional` **prevYear**(): `void`

Defined in: [Date/types/calendar-controller-methods.type.ts:231](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-methods.type.ts#L231)

Alias for goToPreviousYear()

#### Returns

`void`

***

### removeDisabledDate()

> **removeDisabledDate**(`date`): `Date`[]

Defined in: [Date/types/calendar-controller-methods.type.ts:148](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-methods.type.ts#L148)

Remove a date from the disabled dates

#### Parameters

##### date

`Date`

#### Returns

`Date`[]

***

### removeDisabledDayOfWeek()

> **removeDisabledDayOfWeek**(`day`): `number`[]

Defined in: [Date/types/calendar-controller-methods.type.ts:159](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-methods.type.ts#L159)

Remove a day of the week from the disabled days

#### Parameters

##### day

`number`

#### Returns

`number`[]

***

### selectDate()

> **selectDate**(`yearOrDate`, `month?`, `day?`): `void`

Defined in: [Date/types/calendar-controller-methods.type.ts:10](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-methods.type.ts#L10)

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

Defined in: [Date/types/calendar-controller-methods.type.ts:91](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-methods.type.ts#L91)

Select the currently focused date

#### Returns

`void`

***

### selectMonth()

> **selectMonth**(`month`, `year`): `void`

Defined in: [Date/types/calendar-controller-methods.type.ts:129](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-methods.type.ts#L129)

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

Defined in: [Date/types/calendar-controller-methods.type.ts:132](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-methods.type.ts#L132)

Select a year (navigate to year view)

#### Parameters

##### year

`number`

#### Returns

`void`

***

### setCurrentYearRange()

> **setCurrentYearRange**(`date`): `void`

Defined in: [Date/types/calendar-controller-methods.type.ts:169](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-methods.type.ts#L169)

Set the current year range based on a date

#### Parameters

##### date

`Date`

#### Returns

`void`

***

### setDateFormat()

> **setDateFormat**(`format`): `void`

Defined in: [Date/types/calendar-controller-methods.type.ts:113](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-methods.type.ts#L113)

Set the date format

#### Parameters

##### format

`string` | `null`

#### Returns

`void`

***

### setDateFormatOptions()

> **setDateFormatOptions**(`options`): `void`

Defined in: [Date/types/calendar-controller-methods.type.ts:116](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-methods.type.ts#L116)

Set date format options

#### Parameters

##### options

`DateTimeFormatOptions` | `null`

#### Returns

`void`

***

### setDisabledDates()

> **setDisabledDates**(`dates`): `void`

Defined in: [Date/types/calendar-controller-methods.type.ts:142](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-methods.type.ts#L142)

Set array of disabled dates

#### Parameters

##### dates

`Date`[]

#### Returns

`void`

***

### setDisabledDaysOfWeek()

> **setDisabledDaysOfWeek**(`days`): `number`[]

Defined in: [Date/types/calendar-controller-methods.type.ts:153](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-methods.type.ts#L153)

Set array of disabled days of the week (0 = Sunday, 1 = Monday, etc.)

#### Parameters

##### days

`number`[]

#### Returns

`number`[]

***

### setFirstDayOfWeek()

> **setFirstDayOfWeek**(`day`): `void`

Defined in: [Date/types/calendar-controller-methods.type.ts:101](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-methods.type.ts#L101)

Set the first day of the week (0 = Sunday, 1 = Monday, etc.)

#### Parameters

##### day

`number`

#### Returns

`void`

***

### setFocusedDate()

> **setFocusedDate**(`date`): `void`

Defined in: [Date/types/calendar-controller-methods.type.ts:51](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-methods.type.ts#L51)

Set the focused date

#### Parameters

##### date

`Date` | `null`

#### Returns

`void`

***

### setHideOtherMonthDays()

> **setHideOtherMonthDays**(`hide`): `void`

Defined in: [Date/types/calendar-controller-methods.type.ts:104](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-methods.type.ts#L104)

Set whether to hide days from other months

#### Parameters

##### hide

`boolean`

#### Returns

`void`

***

### setLocale()

> **setLocale**(`locale`): `void`

Defined in: [Date/types/calendar-controller-methods.type.ts:95](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-methods.type.ts#L95)

Set the locale

#### Parameters

##### locale

`string`

#### Returns

`void`

***

### setMaxDate()

> **setMaxDate**(`date`): `void`

Defined in: [Date/types/calendar-controller-methods.type.ts:139](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-methods.type.ts#L139)

Set maximum selectable date

#### Parameters

##### date

`Date` | `null`

#### Returns

`void`

***

### setMinDate()

> **setMinDate**(`date`): `void`

Defined in: [Date/types/calendar-controller-methods.type.ts:136](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-methods.type.ts#L136)

Set minimum selectable date

#### Parameters

##### date

`Date` | `null`

#### Returns

`void`

***

### setRangeSelectionMode()

> **setRangeSelectionMode**(`isRange`): `void`

Defined in: [Date/types/calendar-controller-methods.type.ts:44](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-methods.type.ts#L44)

Enable or disable range selection mode

#### Parameters

##### isRange

`boolean`

#### Returns

`void`

***

### setYearRangeSize()

> **setYearRangeSize**(`size`): `void`

Defined in: [Date/types/calendar-controller-methods.type.ts:172](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/types/calendar-controller-methods.type.ts#L172)

Set the year range size (how many years to display)

#### Parameters

##### size

`number`

#### Returns

`void`
