[**@uplink-protocol/form-controller v0.3.0**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / TimeControllerMethods

# Interface: TimeControllerMethods

Defined in: [Time/types/time-controller.types.ts:70](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L70)

Time Controller Methods - All available public methods
These methods provide the API for interacting with the time picker

## Methods

### addDisabledHour()

> **addDisabledHour**(`hour`): `number`[]

Defined in: [Time/types/time-controller.types.ts:151](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L151)

Add an hour to the disabled hours

#### Parameters

##### hour

`number`

#### Returns

`number`[]

***

### addDisabledTime()

> **addDisabledTime**(`time`): `Date`[]

Defined in: [Time/types/time-controller.types.ts:139](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L139)

Add a time to the disabled times

#### Parameters

##### time

`Date`

#### Returns

`Date`[]

***

### clearFocusedSegment()

> **clearFocusedSegment**(): `void`

Defined in: [Time/types/time-controller.types.ts:123](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L123)

Clear focused segment

#### Returns

`void`

***

### clearSelection()

> **clearSelection**(): `void`

Defined in: [Time/types/time-controller.types.ts:116](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L116)

Clear current time selection

#### Returns

`void`

***

### focusSegment()

> **focusSegment**(`segment`): `void`

Defined in: [Time/types/time-controller.types.ts:126](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L126)

Focus a specific time segment

#### Parameters

##### segment

`"hours"` | `"minutes"` | `"seconds"` | `"milliseconds"` | `"period"`

#### Returns

`void`

***

### formatTime()

> **formatTime**(`time`, `options?`): `string`

Defined in: [Time/types/time-controller.types.ts:182](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L182)

Format a specific time with given options

#### Parameters

##### time

`Date`

##### options?

`string` | `DateTimeFormatOptions`

#### Returns

`string`

***

### generateTimeView()

> **generateTimeView**(): [`TimeView`](TimeView.md)

Defined in: [Time/types/time-controller.types.ts:204](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L204)

Generate time view data

#### Returns

[`TimeView`](TimeView.md)

***

### getDisabledHours()

> **getDisabledHours**(): `number`[]

Defined in: [Time/types/time-controller.types.ts:157](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L157)

Get the current disabled hours

#### Returns

`number`[]

***

### getDisabledTimes()

> **getDisabledTimes**(): `Date`[]

Defined in: [Time/types/time-controller.types.ts:145](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L145)

Get the current disabled times

#### Returns

`Date`[]

***

### getFormattedTime()

> **getFormattedTime**(): `null` \| `string`

Defined in: [Time/types/time-controller.types.ts:179](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L179)

Get formatted time string for selected time

#### Returns

`null` \| `string`

***

### getLocale()

> **getLocale**(): `string`

Defined in: [Time/types/time-controller.types.ts:170](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L170)

Get the current locale

#### Returns

`string`

***

### getTimeFormatOptions()

> **getTimeFormatOptions**(): `null` \| `DateTimeFormatOptions`

Defined in: [Time/types/time-controller.types.ts:176](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L176)

Get current time format options

#### Returns

`null` \| `DateTimeFormatOptions`

***

### goToCurrentTime()

> **goToCurrentTime**(): `void`

Defined in: [Time/types/time-controller.types.ts:106](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L106)

Navigate to current time

#### Returns

`void`

***

### goToNextHour()

> **goToNextHour**(): `void`

Defined in: [Time/types/time-controller.types.ts:88](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L88)

Navigate to next hour

#### Returns

`void`

***

### goToNextMinute()

> **goToNextMinute**(): `void`

Defined in: [Time/types/time-controller.types.ts:94](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L94)

Navigate to next minute

#### Returns

`void`

***

### goToNextSecond()

> **goToNextSecond**(): `void`

Defined in: [Time/types/time-controller.types.ts:100](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L100)

Navigate to next second

#### Returns

`void`

***

### goToPreviousHour()

> **goToPreviousHour**(): `void`

Defined in: [Time/types/time-controller.types.ts:91](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L91)

Navigate to previous hour

#### Returns

`void`

***

### goToPreviousMinute()

> **goToPreviousMinute**(): `void`

Defined in: [Time/types/time-controller.types.ts:97](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L97)

Navigate to previous minute

#### Returns

`void`

***

### goToPreviousSecond()

> **goToPreviousSecond**(): `void`

Defined in: [Time/types/time-controller.types.ts:103](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L103)

Navigate to previous second

#### Returns

`void`

***

### isCurrentTime()

> **isCurrentTime**(`time`): `boolean`

Defined in: [Time/types/time-controller.types.ts:201](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L201)

Check if a time is the current time

#### Parameters

##### time

`Date`

#### Returns

`boolean`

***

### isTimeValid()

> **isTimeValid**(`time`): `boolean`

Defined in: [Time/types/time-controller.types.ts:207](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L207)

Check if a time is valid according to constraints

#### Parameters

##### time

`Date`

#### Returns

`boolean`

***

### moveFocusToHours()

> **moveFocusToHours**(): `void`

Defined in: [Time/types/time-controller.types.ts:220](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L220)

Move focus to hours segment

#### Returns

`void`

***

### moveFocusToMilliseconds()

> **moveFocusToMilliseconds**(): `void`

Defined in: [Time/types/time-controller.types.ts:229](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L229)

Move focus to milliseconds segment

#### Returns

`void`

***

### moveFocusToMinutes()

> **moveFocusToMinutes**(): `void`

Defined in: [Time/types/time-controller.types.ts:223](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L223)

Move focus to minutes segment

#### Returns

`void`

***

### moveFocusToNextSegment()

> **moveFocusToNextSegment**(): `void`

Defined in: [Time/types/time-controller.types.ts:214](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L214)

Move focus to next segment (keyboard navigation)

#### Returns

`void`

***

### moveFocusToPeriod()

> **moveFocusToPeriod**(): `void`

Defined in: [Time/types/time-controller.types.ts:232](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L232)

Move focus to period (AM/PM) segment

#### Returns

`void`

***

### moveFocusToPreviousSegment()

> **moveFocusToPreviousSegment**(): `void`

Defined in: [Time/types/time-controller.types.ts:217](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L217)

Move focus to previous segment (keyboard navigation)

#### Returns

`void`

***

### moveFocusToSeconds()

> **moveFocusToSeconds**(): `void`

Defined in: [Time/types/time-controller.types.ts:226](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L226)

Move focus to seconds segment

#### Returns

`void`

***

### removeDisabledHour()

> **removeDisabledHour**(`hour`): `number`[]

Defined in: [Time/types/time-controller.types.ts:154](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L154)

Remove an hour from the disabled hours

#### Parameters

##### hour

`number`

#### Returns

`number`[]

***

### removeDisabledTime()

> **removeDisabledTime**(`time`): `Date`[]

Defined in: [Time/types/time-controller.types.ts:142](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L142)

Remove a time from the disabled times

#### Parameters

##### time

`Date`

#### Returns

`Date`[]

***

### roundToStep()

> **roundToStep**(`time`): `Date`

Defined in: [Time/types/time-controller.types.ts:210](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L210)

Round time to nearest step interval

#### Parameters

##### time

`Date`

#### Returns

`Date`

***

### selectFocusedSegment()

> **selectFocusedSegment**(): `void`

Defined in: [Time/types/time-controller.types.ts:235](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L235)

Select focused segment time

#### Returns

`void`

***

### selectTime()

> **selectTime**(`time`): `void`

Defined in: [Time/types/time-controller.types.ts:73](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L73)

Select a specific time

#### Parameters

##### time

`Date`

#### Returns

`void`

***

### setDisabledHours()

> **setDisabledHours**(`hours`): `number`[]

Defined in: [Time/types/time-controller.types.ts:148](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L148)

Set array of disabled hours (0-23)

#### Parameters

##### hours

`number`[]

#### Returns

`number`[]

***

### setDisabledMinutes()

> **setDisabledMinutes**(`minutes`): `number`[]

Defined in: [Time/types/time-controller.types.ts:160](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L160)

Set array of disabled minutes (0-59)

#### Parameters

##### minutes

`number`[]

#### Returns

`number`[]

***

### setDisabledSeconds()

> **setDisabledSeconds**(`seconds`): `number`[]

Defined in: [Time/types/time-controller.types.ts:163](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L163)

Set array of disabled seconds (0-59)

#### Parameters

##### seconds

`number`[]

#### Returns

`number`[]

***

### setDisabledTimes()

> **setDisabledTimes**(`times`): `void`

Defined in: [Time/types/time-controller.types.ts:136](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L136)

Set array of disabled times

#### Parameters

##### times

`Date`[]

#### Returns

`void`

***

### setFocusedSegment()

> **setFocusedSegment**(`segment`): `void`

Defined in: [Time/types/time-controller.types.ts:120](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L120)

Set focused time segment

#### Parameters

##### segment

`null` | `"hours"` | `"minutes"` | `"seconds"` | `"milliseconds"` | `"period"`

#### Returns

`void`

***

### setHour()

> **setHour**(`hour`, `period?`): `void`

Defined in: [Time/types/time-controller.types.ts:76](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L76)

Set specific hour

#### Parameters

##### hour

`number`

##### period?

`"AM"` | `"PM"`

#### Returns

`void`

***

### setLocale()

> **setLocale**(`locale`): `void`

Defined in: [Time/types/time-controller.types.ts:167](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L167)

Set the locale for internationalization

#### Parameters

##### locale

`string`

#### Returns

`void`

***

### setMaxTime()

> **setMaxTime**(`time`): `void`

Defined in: [Time/types/time-controller.types.ts:133](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L133)

Set maximum selectable time

#### Parameters

##### time

`null` | `Date`

#### Returns

`void`

***

### setMillisecond()

> **setMillisecond**(`millisecond`): `void`

Defined in: [Time/types/time-controller.types.ts:85](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L85)

Set specific millisecond

#### Parameters

##### millisecond

`number`

#### Returns

`void`

***

### setMinTime()

> **setMinTime**(`time`): `void`

Defined in: [Time/types/time-controller.types.ts:130](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L130)

Set minimum selectable time

#### Parameters

##### time

`null` | `Date`

#### Returns

`void`

***

### setMinute()

> **setMinute**(`minute`): `void`

Defined in: [Time/types/time-controller.types.ts:79](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L79)

Set specific minute

#### Parameters

##### minute

`number`

#### Returns

`void`

***

### setMinuteStep()

> **setMinuteStep**(`step`): `void`

Defined in: [Time/types/time-controller.types.ts:194](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L194)

Set minute step interval

#### Parameters

##### step

`number`

#### Returns

`void`

***

### setRangeSelectionMode()

> **setRangeSelectionMode**(`isRange`): `void`

Defined in: [Time/types/time-controller.types.ts:113](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L113)

Enable or disable range selection mode

#### Parameters

##### isRange

`boolean`

#### Returns

`void`

***

### setSecond()

> **setSecond**(`second`): `void`

Defined in: [Time/types/time-controller.types.ts:82](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L82)

Set specific second

#### Parameters

##### second

`number`

#### Returns

`void`

***

### setSecondStep()

> **setSecondStep**(`step`): `void`

Defined in: [Time/types/time-controller.types.ts:197](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L197)

Set second step interval

#### Parameters

##### step

`number`

#### Returns

`void`

***

### setShowMilliseconds()

> **setShowMilliseconds**(`show`): `void`

Defined in: [Time/types/time-controller.types.ts:191](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L191)

Set whether to show milliseconds

#### Parameters

##### show

`boolean`

#### Returns

`void`

***

### setShowSeconds()

> **setShowSeconds**(`show`): `void`

Defined in: [Time/types/time-controller.types.ts:188](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L188)

Set whether to show seconds

#### Parameters

##### show

`boolean`

#### Returns

`void`

***

### setTimeFormatOptions()

> **setTimeFormatOptions**(`options`): `void`

Defined in: [Time/types/time-controller.types.ts:173](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L173)

Set time format options

#### Parameters

##### options

`null` | `DateTimeFormatOptions`

#### Returns

`void`

***

### setUse12HourFormat()

> **setUse12HourFormat**(`use12Hour`): `void`

Defined in: [Time/types/time-controller.types.ts:185](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L185)

Set 12-hour format mode

#### Parameters

##### use12Hour

`boolean`

#### Returns

`void`

***

### togglePeriod()

> **togglePeriod**(): `void`

Defined in: [Time/types/time-controller.types.ts:109](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/types/time-controller.types.ts#L109)

Toggle AM/PM period

#### Returns

`void`
