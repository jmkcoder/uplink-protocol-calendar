[**@uplink-protocol/form-controller v0.3.1**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / CalendarControllerClass

# Class: CalendarControllerClass

Defined in: [Date/controller.ts:90](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L90)

CalendarControllerClass - Pure Orchestrator

This controller is a thin orchestration layer that delegates ALL logic
to specialized coordinators. It contains NO business logic itself.

Architecture:
- Services: Low-level operations (date manipulation, formatting, etc.)
- Coordinators: Business logic and state management
- Controller: Public API facade and delegation

## Implements

- [`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md)

## Constructors

### Constructor

> **new CalendarControllerClass**(`options?`): `CalendarControllerClass`

Defined in: [Date/controller.ts:192](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L192)

#### Parameters

##### options?

[`CalendarOptions`](../interfaces/CalendarOptions.md)

#### Returns

`CalendarControllerClass`

## Properties

### \_\_adapter?

> `optional` **\_\_adapter**: `ControllerAdapter`

Defined in: [Date/controller.ts:95](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L95)

***

### bindings

> **bindings**: [`CalendarControllerBindings`](../interfaces/CalendarControllerBindings.md)

Defined in: [Date/controller.ts:91](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L91)

Reactive state bindings

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`bindings`](../interfaces/CalendarControllerInterface.md#bindings)

***

### events

> **events**: [`CalendarControllerEvents`](../interfaces/CalendarControllerEvents.md)

Defined in: [Date/controller.ts:93](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L93)

Event emitters

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`events`](../interfaces/CalendarControllerInterface.md#events)

***

### meta?

> `optional` **meta**: `ControllerMetadata`

Defined in: [Date/controller.ts:94](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L94)

***

### methods

> **methods**: [`CalendarControllerMethods`](../interfaces/CalendarControllerMethods.md)

Defined in: [Date/controller.ts:92](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L92)

Available methods

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`methods`](../interfaces/CalendarControllerInterface.md#methods)

***

### options?

> `optional` **options**: [`CalendarOptions`](../interfaces/CalendarOptions.md)

Defined in: [Date/controller.ts:96](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L96)

Calendar configuration options

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`options`](../interfaces/CalendarControllerInterface.md#options)

## Accessors

### \_currentDate

#### Get Signature

> **get** **\_currentDate**(): `Date`

Defined in: [Date/controller.ts:99](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L99)

##### Returns

`Date`

#### Set Signature

> **set** **\_currentDate**(`value`): `void`

Defined in: [Date/controller.ts:100](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L100)

##### Parameters

###### value

`Date`

##### Returns

`void`

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_currentDate`](../interfaces/CalendarControllerInterface.md#_currentdate)

***

### \_currentYearRangeBase

#### Get Signature

> **get** **\_currentYearRangeBase**(): `number`

Defined in: [Date/controller.ts:144](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L144)

##### Returns

`number`

#### Set Signature

> **set** **\_currentYearRangeBase**(`value`): `void`

Defined in: [Date/controller.ts:145](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L145)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_currentYearRangeBase`](../interfaces/CalendarControllerInterface.md#_currentyearrangebase)

***

### \_dateFormat

#### Get Signature

> **get** **\_dateFormat**(): `string` \| `null`

Defined in: [Date/controller.ts:126](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L126)

##### Returns

`string` \| `null`

#### Set Signature

> **set** **\_dateFormat**(`value`): `void`

Defined in: [Date/controller.ts:127](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L127)

##### Parameters

###### value

`string` | `null`

##### Returns

`void`

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_dateFormat`](../interfaces/CalendarControllerInterface.md#_dateformat)

***

### \_dateFormatOptions

#### Get Signature

> **get** **\_dateFormatOptions**(): `DateTimeFormatOptions` \| `null`

Defined in: [Date/controller.ts:138](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L138)

##### Returns

`DateTimeFormatOptions` \| `null`

#### Set Signature

> **set** **\_dateFormatOptions**(`value`): `void`

Defined in: [Date/controller.ts:139](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L139)

##### Parameters

###### value

`DateTimeFormatOptions` | `null`

##### Returns

`void`

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_dateFormatOptions`](../interfaces/CalendarControllerInterface.md#_dateformatoptions)

***

### \_disabledDates

#### Get Signature

> **get** **\_disabledDates**(): `Date`[]

Defined in: [Date/controller.ts:117](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L117)

##### Returns

`Date`[]

#### Set Signature

> **set** **\_disabledDates**(`value`): `void`

Defined in: [Date/controller.ts:118](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L118)

##### Parameters

###### value

`Date`[]

##### Returns

`void`

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_disabledDates`](../interfaces/CalendarControllerInterface.md#_disableddates)

***

### \_disabledDaysOfWeek

#### Get Signature

> **get** **\_disabledDaysOfWeek**(): `number`[]

Defined in: [Date/controller.ts:120](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L120)

##### Returns

`number`[]

#### Set Signature

> **set** **\_disabledDaysOfWeek**(`value`): `void`

Defined in: [Date/controller.ts:121](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L121)

##### Parameters

###### value

`number`[]

##### Returns

`void`

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_disabledDaysOfWeek`](../interfaces/CalendarControllerInterface.md#_disableddaysofweek)

***

### \_firstDayOfWeek

#### Get Signature

> **get** **\_firstDayOfWeek**(): `number`

Defined in: [Date/controller.ts:123](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L123)

##### Returns

`number`

#### Set Signature

> **set** **\_firstDayOfWeek**(`value`): `void`

Defined in: [Date/controller.ts:124](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L124)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_firstDayOfWeek`](../interfaces/CalendarControllerInterface.md#_firstdayofweek)

***

### \_focusedDate

#### Get Signature

> **get** **\_focusedDate**(): `Date` \| `null`

Defined in: [Date/controller.ts:108](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L108)

##### Returns

`Date` \| `null`

#### Set Signature

> **set** **\_focusedDate**(`value`): `void`

Defined in: [Date/controller.ts:109](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L109)

##### Parameters

###### value

`Date` | `null`

##### Returns

`void`

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_focusedDate`](../interfaces/CalendarControllerInterface.md#_focuseddate)

***

### \_hideOtherMonthDays

#### Get Signature

> **get** **\_hideOtherMonthDays**(): `boolean`

Defined in: [Date/controller.ts:132](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L132)

##### Returns

`boolean`

#### Set Signature

> **set** **\_hideOtherMonthDays**(`value`): `void`

Defined in: [Date/controller.ts:133](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L133)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_hideOtherMonthDays`](../interfaces/CalendarControllerInterface.md#_hideothermonthdays)

***

### \_isRangeSelection

#### Get Signature

> **get** **\_isRangeSelection**(): `boolean`

Defined in: [Date/controller.ts:129](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L129)

##### Returns

`boolean`

#### Set Signature

> **set** **\_isRangeSelection**(`value`): `void`

Defined in: [Date/controller.ts:130](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L130)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_isRangeSelection`](../interfaces/CalendarControllerInterface.md#_israngeselection)

***

### \_locale

#### Get Signature

> **get** **\_locale**(): `string`

Defined in: [Date/controller.ts:135](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L135)

##### Returns

`string`

#### Set Signature

> **set** **\_locale**(`value`): `void`

Defined in: [Date/controller.ts:136](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L136)

##### Parameters

###### value

`string`

##### Returns

`void`

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_locale`](../interfaces/CalendarControllerInterface.md#_locale)

***

### \_maxDate

#### Get Signature

> **get** **\_maxDate**(): `Date` \| `null`

Defined in: [Date/controller.ts:114](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L114)

##### Returns

`Date` \| `null`

#### Set Signature

> **set** **\_maxDate**(`value`): `void`

Defined in: [Date/controller.ts:115](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L115)

##### Parameters

###### value

`Date` | `null`

##### Returns

`void`

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_maxDate`](../interfaces/CalendarControllerInterface.md#_maxdate)

***

### \_minDate

#### Get Signature

> **get** **\_minDate**(): `Date` \| `null`

Defined in: [Date/controller.ts:111](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L111)

##### Returns

`Date` \| `null`

#### Set Signature

> **set** **\_minDate**(`value`): `void`

Defined in: [Date/controller.ts:112](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L112)

##### Parameters

###### value

`Date` | `null`

##### Returns

`void`

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_minDate`](../interfaces/CalendarControllerInterface.md#_mindate)

***

### \_selectedDate

#### Get Signature

> **get** **\_selectedDate**(): `Date` \| `null`

Defined in: [Date/controller.ts:102](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L102)

##### Returns

`Date` \| `null`

#### Set Signature

> **set** **\_selectedDate**(`value`): `void`

Defined in: [Date/controller.ts:103](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L103)

##### Parameters

###### value

`Date` | `null`

##### Returns

`void`

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_selectedDate`](../interfaces/CalendarControllerInterface.md#_selecteddate)

***

### \_selectedDateRange

#### Get Signature

> **get** **\_selectedDateRange**(): [`DateRange`](../interfaces/DateRange.md)

Defined in: [Date/controller.ts:105](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L105)

##### Returns

[`DateRange`](../interfaces/DateRange.md)

#### Set Signature

> **set** **\_selectedDateRange**(`value`): `void`

Defined in: [Date/controller.ts:106](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L106)

##### Parameters

###### value

[`DateRange`](../interfaces/DateRange.md)

##### Returns

`void`

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_selectedDateRange`](../interfaces/CalendarControllerInterface.md#_selecteddaterange)

***

### \_yearRangeSize

#### Get Signature

> **get** **\_yearRangeSize**(): `number`

Defined in: [Date/controller.ts:141](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L141)

##### Returns

`number`

#### Set Signature

> **set** **\_yearRangeSize**(`value`): `void`

Defined in: [Date/controller.ts:142](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L142)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_yearRangeSize`](../interfaces/CalendarControllerInterface.md#_yearrangesize)

***

### selectedDateRange

#### Get Signature

> **get** **selectedDateRange**(): `object`

Defined in: [Date/controller.ts:148](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L148)

Selected date range with flexible property access

##### Returns

`object`

###### end

> **end**: `Date` \| `null`

###### endDate

> **endDate**: `Date` \| `null`

###### start

> **start**: `Date` \| `null`

###### startDate

> **startDate**: `Date` \| `null`

#### Set Signature

> **set** **selectedDateRange**(`value`): `void`

Defined in: [Date/controller.ts:157](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L157)

Selected date range with flexible property access

##### Parameters

###### value

###### end?

`Date` \| `null`

###### endDate?

`Date` \| `null`

###### start?

`Date` \| `null`

###### startDate?

`Date` \| `null`

##### Returns

`void`

Selected date range with flexible property access

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`selectedDateRange`](../interfaces/CalendarControllerInterface.md#selecteddaterange)

## Methods

### addDisabledDate()

> **addDisabledDate**(`date`): `Date`[]

Defined in: [Date/controller.ts:716](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L716)

#### Parameters

##### date

`Date`

#### Returns

`Date`[]

***

### addDisabledDayOfWeek()

> **addDisabledDayOfWeek**(`day`): `number`[]

Defined in: [Date/controller.ts:732](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L732)

#### Parameters

##### day

`number`

#### Returns

`number`[]

***

### clearFocusedDate()

> **clearFocusedDate**(): `void`

Defined in: [Date/controller.ts:836](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L836)

#### Returns

`void`

***

### clearSelection()

> **clearSelection**(): `void`

Defined in: [Date/controller.ts:546](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L546)

#### Returns

`void`

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`clearSelection`](../interfaces/CalendarControllerInterface.md#clearselection)

***

### focusDate()

> **focusDate**(`date`): `void`

Defined in: [Date/controller.ts:828](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L828)

#### Parameters

##### date

`Date`

#### Returns

`void`

***

### formatDate()

> **formatDate**(`date`, `format?`, `locale?`): `string`

Defined in: [Date/controller.ts:796](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L796)

#### Parameters

##### date

`Date`

##### format?

`string` | `object`

##### locale?

`string`

#### Returns

`string`

***

### formatDateWithOptions()

> **formatDateWithOptions**(`date`, `options?`, `locale?`): `string`

Defined in: [Date/controller.ts:800](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L800)

#### Parameters

##### date

`Date`

##### options?

`DateTimeFormatOptions`

##### locale?

`string`

#### Returns

`string`

***

### generateCalendarDays()

> **generateCalendarDays**(): [`CalendarDate`](../interfaces/CalendarDate.md)[]

Defined in: [Date/controller.ts:401](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L401)

#### Returns

[`CalendarDate`](../interfaces/CalendarDate.md)[]

***

### generateCalendarMonths()

> **generateCalendarMonths**(): [`CalendarMonth`](../interfaces/CalendarMonth.md)[]

Defined in: [Date/controller.ts:418](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L418)

#### Returns

[`CalendarMonth`](../interfaces/CalendarMonth.md)[]

***

### generateCalendarYears()

> **generateCalendarYears**(): [`CalendarYear`](../interfaces/CalendarYear.md)[]

Defined in: [Date/controller.ts:429](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L429)

#### Returns

[`CalendarYear`](../interfaces/CalendarYear.md)[]

***

### generateMonthView()

> **generateMonthView**(): `object`

Defined in: [Date/controller.ts:1019](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L1019)

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

### generateYearView()

> **generateYearView**(): `object`

Defined in: [Date/controller.ts:1028](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L1028)

#### Returns

`object`

##### months

> **months**: [`CalendarMonth`](../interfaces/CalendarMonth.md)[]

##### year

> **year**: `number`

***

### getAccessibleDateLabel()

> **getAccessibleDateLabel**(`date`): `string`

Defined in: [Date/controller.ts:844](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L844)

#### Parameters

##### date

`Date`

#### Returns

`string`

***

### getAriaLabel()

> **getAriaLabel**(`date`): `string`

Defined in: [Date/controller.ts:951](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L951)

#### Parameters

##### date

`Date`

#### Returns

`string`

***

### getAriaLabelForMonth()

> **getAriaLabelForMonth**(`month`, `year`): `string`

Defined in: [Date/controller.ts:955](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L955)

#### Parameters

##### month

`number`

##### year

`number`

#### Returns

`string`

***

### getAriaLabelForYear()

> **getAriaLabelForYear**(`year`): `string`

Defined in: [Date/controller.ts:959](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L959)

#### Parameters

##### year

`number`

#### Returns

`string`

***

### getCurrentDate()

> **getCurrentDate**(): `Date`

Defined in: [Date/controller.ts:987](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L987)

#### Returns

`Date`

***

### getCurrentYearRange()

> **getCurrentYearRange**(): [`YearRange`](../interfaces/YearRange.md)

Defined in: [Date/controller.ts:967](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L967)

#### Returns

[`YearRange`](../interfaces/YearRange.md)

***

### getDateFormat()

> **getDateFormat**(): `string` \| `null`

Defined in: [Date/controller.ts:760](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L760)

#### Returns

`string` \| `null`

***

### getDateFormatOptions()

> **getDateFormatOptions**(): `DateTimeFormatOptions` \| `null`

Defined in: [Date/controller.ts:768](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L768)

#### Returns

`DateTimeFormatOptions` \| `null`

***

### getDateStateDescription()

> **getDateStateDescription**(`date`): `string`

Defined in: [Date/controller.ts:848](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L848)

#### Parameters

##### date

`Date`

#### Returns

`string`

***

### getDayName()

> **getDayName**(`dayOfWeek`, `format?`, `locale?`): `string`

Defined in: [Date/controller.ts:808](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L808)

#### Parameters

##### dayOfWeek

`number`

##### format?

`"short"` | `"long"` | `"narrow"`

##### locale?

`string`

#### Returns

`string`

***

### getDayNames()

> **getDayNames**(`format?`, `locale?`): `string`[]

Defined in: [Date/controller.ts:812](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L812)

#### Parameters

##### format?

`"short"` | `"long"` | `"narrow"`

##### locale?

`string`

#### Returns

`string`[]

***

### getDayOfWeek()

> **getDayOfWeek**(`date`): `number`

Defined in: [Date/controller.ts:498](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L498)

#### Parameters

##### date

`Date`

#### Returns

`number`

***

### getDaysInMonth()

> **getDaysInMonth**(`year`, `month`): `number`

Defined in: [Date/controller.ts:502](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L502)

#### Parameters

##### year

`number`

##### month

`number`

#### Returns

`number`

***

### getDisabledDates()

> **getDisabledDates**(): `Date`[]

Defined in: [Date/controller.ts:724](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L724)

#### Returns

`Date`[]

***

### getDisabledDaysOfWeek()

> **getDisabledDaysOfWeek**(): `number`[]

Defined in: [Date/controller.ts:740](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L740)

#### Returns

`number`[]

***

### getFirstDayOfWeek()

> **getFirstDayOfWeek**(): `number`

Defined in: [Date/controller.ts:776](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L776)

#### Returns

`number`

***

### getFocusedDate()

> **getFocusedDate**(): `Date` \| `null`

Defined in: [Date/controller.ts:999](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L999)

#### Returns

`Date` \| `null`

***

### getFormattedDate()

> **getFormattedDate**(): `string` \| `null`

Defined in: [Date/controller.ts:792](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L792)

#### Returns

`string` \| `null`

***

### getHideOtherMonthDays()

> **getHideOtherMonthDays**(): `boolean`

Defined in: [Date/controller.ts:784](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L784)

#### Returns

`boolean`

***

### getLocale()

> **getLocale**(): `string`

Defined in: [Date/controller.ts:752](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L752)

#### Returns

`string`

***

### getMaxDate()

> **getMaxDate**(): `Date` \| `null`

Defined in: [Date/controller.ts:1007](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L1007)

#### Returns

`Date` \| `null`

***

### getMinDate()

> **getMinDate**(): `Date` \| `null`

Defined in: [Date/controller.ts:1003](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L1003)

#### Returns

`Date` \| `null`

***

### getMonthName()

> **getMonthName**(`month`, `format?`, `locale?`): `string`

Defined in: [Date/controller.ts:804](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L804)

#### Parameters

##### month

`number`

##### format?

`"short"` | `"long"`

##### locale?

`string`

#### Returns

`string`

***

### getMonthNames()

> **getMonthNames**(`format?`, `locale?`): `string`[]

Defined in: [Date/controller.ts:820](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L820)

#### Parameters

##### format?

`"short"` | `"long"`

##### locale?

`string`

#### Returns

`string`[]

***

### getRangeSelectionMode()

> **getRangeSelectionMode**(): `boolean`

Defined in: [Date/controller.ts:1011](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L1011)

#### Returns

`boolean`

***

### getSelectedDate()

> **getSelectedDate**(): `Date` \| `null`

Defined in: [Date/controller.ts:991](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L991)

#### Returns

`Date` \| `null`

***

### getSelectedDateRange()

> **getSelectedDateRange**(): [`DateRange`](../interfaces/DateRange.md)

Defined in: [Date/controller.ts:995](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L995)

#### Returns

[`DateRange`](../interfaces/DateRange.md)

***

### getWeekdayNames()

> **getWeekdayNames**(`format?`, `locale?`): `string`[]

Defined in: [Date/controller.ts:816](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L816)

#### Parameters

##### format?

`"short"` | `"long"` | `"narrow"`

##### locale?

`string`

#### Returns

`string`[]

***

### getWeekNumber()

> **getWeekNumber**(`date`): `number`

Defined in: [Date/controller.ts:442](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L442)

#### Parameters

##### date

`Date`

#### Returns

`number`

***

### getYearRangeSize()

> **getYearRangeSize**(): `number`

Defined in: [Date/controller.ts:979](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L979)

#### Returns

`number`

***

### goToDate()

> **goToDate**(`date`): `void`

Defined in: [Date/controller.ts:584](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L584)

#### Parameters

##### date

`Date`

#### Returns

`void`

***

### goToMonth()

> **goToMonth**(`month`, `year`): `void`

Defined in: [Date/controller.ts:561](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L561)

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

Defined in: [Date/controller.ts:611](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L611)

#### Returns

`void`

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`goToNextMonth`](../interfaces/CalendarControllerInterface.md#gotonextmonth)

***

### goToNextYear()

> **goToNextYear**(): `void`

Defined in: [Date/controller.ts:645](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L645)

#### Returns

`void`

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`goToNextYear`](../interfaces/CalendarControllerInterface.md#gotonextyear)

***

### goToNextYearRange()

> **goToNextYearRange**(): `void`

Defined in: [Date/controller.ts:683](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L683)

#### Returns

`void`

***

### goToPreviousMonth()

> **goToPreviousMonth**(): `void`

Defined in: [Date/controller.ts:626](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L626)

#### Returns

`void`

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`goToPreviousMonth`](../interfaces/CalendarControllerInterface.md#gotopreviousmonth)

***

### goToPreviousYear()

> **goToPreviousYear**(): `void`

Defined in: [Date/controller.ts:659](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L659)

#### Returns

`void`

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`goToPreviousYear`](../interfaces/CalendarControllerInterface.md#gotopreviousyear)

***

### goToPreviousYearRange()

> **goToPreviousYearRange**(): `void`

Defined in: [Date/controller.ts:691](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L691)

#### Returns

`void`

***

### goToToday()

> **goToToday**(): `void`

Defined in: [Date/controller.ts:673](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L673)

#### Returns

`void`

***

### goToYear()

> **goToYear**(`year`): `void`

Defined in: [Date/controller.ts:573](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L573)

#### Parameters

##### year

`number`

#### Returns

`void`

***

### hasEvents()

> **hasEvents**(`_date`): `boolean`

Defined in: [Date/controller.ts:480](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L480)

#### Parameters

##### \_date

`Date`

#### Returns

`boolean`

***

### isDateDisabled()

> **isDateDisabled**(`date`): `boolean`

Defined in: [Date/controller.ts:450](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L450)

#### Parameters

##### date

`Date`

#### Returns

`boolean`

***

### isDateInRange()

> **isDateInRange**(`date`): `boolean`

Defined in: [Date/controller.ts:465](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L465)

#### Parameters

##### date

`Date`

#### Returns

`boolean`

***

### isDateSelected()

> **isDateSelected**(`date`): `boolean`

Defined in: [Date/controller.ts:454](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L454)

#### Parameters

##### date

`Date`

#### Returns

`boolean`

***

### isSameDay()

> **isSameDay**(`date1`, `date2`): `boolean`

Defined in: [Date/controller.ts:486](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L486)

#### Parameters

##### date1

`Date`

##### date2

`Date`

#### Returns

`boolean`

***

### isSameMonth()

> **isSameMonth**(`date1`, `date2`): `boolean`

Defined in: [Date/controller.ts:490](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L490)

#### Parameters

##### date1

`Date`

##### date2

`Date`

#### Returns

`boolean`

***

### isSameYear()

> **isSameYear**(`date1`, `date2`): `boolean`

Defined in: [Date/controller.ts:494](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L494)

#### Parameters

##### date1

`Date`

##### date2

`Date`

#### Returns

`boolean`

***

### isToday()

> **isToday**(`date`): `boolean`

Defined in: [Date/controller.ts:476](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L476)

#### Parameters

##### date

`Date`

#### Returns

`boolean`

***

### moveFocusDown()

> **moveFocusDown**(): `void`

Defined in: [Date/controller.ts:883](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L883)

#### Returns

`void`

***

### moveFocusLeft()

> **moveFocusLeft**(): `void`

Defined in: [Date/controller.ts:859](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L859)

#### Returns

`void`

***

### moveFocusRight()

> **moveFocusRight**(): `void`

Defined in: [Date/controller.ts:867](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L867)

#### Returns

`void`

***

### moveFocusToEndOfMonth()

> **moveFocusToEndOfMonth**(): `void`

Defined in: [Date/controller.ts:912](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L912)

#### Returns

`void`

***

### moveFocusToEndOfWeek()

> **moveFocusToEndOfWeek**(): `void`

Defined in: [Date/controller.ts:898](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L898)

#### Returns

`void`

***

### moveFocusToNextMonth()

> **moveFocusToNextMonth**(): `void`

Defined in: [Date/controller.ts:919](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L919)

#### Returns

`void`

***

### moveFocusToNextYear()

> **moveFocusToNextYear**(): `void`

Defined in: [Date/controller.ts:935](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L935)

#### Returns

`void`

***

### moveFocusToPreviousMonth()

> **moveFocusToPreviousMonth**(): `void`

Defined in: [Date/controller.ts:927](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L927)

#### Returns

`void`

***

### moveFocusToPreviousYear()

> **moveFocusToPreviousYear**(): `void`

Defined in: [Date/controller.ts:943](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L943)

#### Returns

`void`

***

### moveFocusToStartOfMonth()

> **moveFocusToStartOfMonth**(): `void`

Defined in: [Date/controller.ts:905](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L905)

#### Returns

`void`

***

### moveFocusToStartOfWeek()

> **moveFocusToStartOfWeek**(): `void`

Defined in: [Date/controller.ts:891](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L891)

#### Returns

`void`

***

### moveFocusUp()

> **moveFocusUp**(): `void`

Defined in: [Date/controller.ts:875](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L875)

#### Returns

`void`

***

### nextMonth()

> **nextMonth**(): `void`

Defined in: [Date/controller.ts:622](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L622)

#### Returns

`void`

***

### nextYear()

> **nextYear**(): `void`

Defined in: [Date/controller.ts:655](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L655)

#### Returns

`void`

***

### previousMonth()

> **previousMonth**(): `void`

Defined in: [Date/controller.ts:637](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L637)

#### Returns

`void`

***

### prevMonth()

> **prevMonth**(): `void`

Defined in: [Date/controller.ts:641](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L641)

#### Returns

`void`

***

### prevYear()

> **prevYear**(): `void`

Defined in: [Date/controller.ts:669](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L669)

#### Returns

`void`

***

### removeDisabledDate()

> **removeDisabledDate**(`date`): `Date`[]

Defined in: [Date/controller.ts:720](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L720)

#### Parameters

##### date

`Date`

#### Returns

`Date`[]

***

### removeDisabledDayOfWeek()

> **removeDisabledDayOfWeek**(`day`): `number`[]

Defined in: [Date/controller.ts:736](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L736)

#### Parameters

##### day

`number`

#### Returns

`number`[]

***

### selectDate()

> **selectDate**(`yearOrDate`, `month?`, `day?`): `void`

Defined in: [Date/controller.ts:510](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L510)

#### Parameters

##### yearOrDate

`number` | `Date`

##### month?

`number`

##### day?

`number`

#### Returns

`void`

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`selectDate`](../interfaces/CalendarControllerInterface.md#selectdate)

***

### selectFocusedDate()

> **selectFocusedDate**(): `void`

Defined in: [Date/controller.ts:840](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L840)

#### Returns

`void`

***

### selectMonth()

> **selectMonth**(`month`, `year`): `void`

Defined in: [Date/controller.ts:523](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L523)

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

Defined in: [Date/controller.ts:535](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L535)

#### Parameters

##### year

`number`

#### Returns

`void`

***

### setCurrentYearRange()

> **setCurrentYearRange**(`date`): `void`

Defined in: [Date/controller.ts:971](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L971)

#### Parameters

##### date

`Date`

#### Returns

`void`

***

### setDateFormat()

> **setDateFormat**(`format`): `void`

Defined in: [Date/controller.ts:756](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L756)

#### Parameters

##### format

`string` | `null`

#### Returns

`void`

***

### setDateFormatOptions()

> **setDateFormatOptions**(`options`): `void`

Defined in: [Date/controller.ts:764](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L764)

#### Parameters

##### options

`DateTimeFormatOptions` | `null`

#### Returns

`void`

***

### setDisabledDates()

> **setDisabledDates**(`dates`): `void`

Defined in: [Date/controller.ts:712](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L712)

#### Parameters

##### dates

`Date`[]

#### Returns

`void`

***

### setDisabledDaysOfWeek()

> **setDisabledDaysOfWeek**(`days`): `number`[]

Defined in: [Date/controller.ts:728](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L728)

#### Parameters

##### days

`number`[]

#### Returns

`number`[]

***

### setFirstDayOfWeek()

> **setFirstDayOfWeek**(`day`): `void`

Defined in: [Date/controller.ts:772](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L772)

#### Parameters

##### day

`number`

#### Returns

`void`

***

### setFocusedDate()

> **setFocusedDate**(`date`): `void`

Defined in: [Date/controller.ts:832](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L832)

#### Parameters

##### date

`Date`

#### Returns

`void`

***

### setHideOtherMonthDays()

> **setHideOtherMonthDays**(`hide`): `void`

Defined in: [Date/controller.ts:780](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L780)

#### Parameters

##### hide

`boolean`

#### Returns

`void`

***

### setLocale()

> **setLocale**(`locale`): `void`

Defined in: [Date/controller.ts:748](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L748)

#### Parameters

##### locale

`string`

#### Returns

`void`

***

### setMaxDate()

> **setMaxDate**(`date`): `void`

Defined in: [Date/controller.ts:708](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L708)

#### Parameters

##### date

`Date` | `null`

#### Returns

`void`

***

### setMinDate()

> **setMinDate**(`date`): `void`

Defined in: [Date/controller.ts:704](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L704)

#### Parameters

##### date

`Date` | `null`

#### Returns

`void`

***

### setRangeSelectionMode()

> **setRangeSelectionMode**(`isRange`): `void`

Defined in: [Date/controller.ts:553](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L553)

#### Parameters

##### isRange

`boolean`

#### Returns

`void`

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`setRangeSelectionMode`](../interfaces/CalendarControllerInterface.md#setrangeselectionmode)

***

### setYearRangeSize()

> **setYearRangeSize**(`size`): `void`

Defined in: [Date/controller.ts:975](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/controller.ts#L975)

#### Parameters

##### size

`number`

#### Returns

`void`
