[**@uplink-protocol/form-controller v0.3.0**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / TimeControllerClass

# Class: TimeControllerClass

Defined in: [Time/controller.ts:68](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L68)

TimeControllerClass - A full featured time picker controller class.
Provides functionality for time picking and time display.

This controller uses a service-oriented architecture where all the core
functionality is delegated to specialized services.

## Implements

- [`TimeControllerInterface`](../interfaces/TimeControllerInterface.md)

## Constructors

### Constructor

> **new TimeControllerClass**(`options?`): `TimeControllerClass`

Defined in: [Time/controller.ts:112](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L112)

Constructor - initializes the controller with optional configuration

#### Parameters

##### options?

[`TimeOptions`](../interfaces/TimeOptions.md)

Time configuration options

#### Returns

`TimeControllerClass`

## Properties

### \_\_adapter?

> `optional` **\_\_adapter**: `ControllerAdapter`

Defined in: [Time/controller.ts:73](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L73)

***

### \_disabledHours

> **\_disabledHours**: `number`[] = `[]`

Defined in: [Time/controller.ts:83](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L83)

#### Implementation of

[`TimeControllerInterface`](../interfaces/TimeControllerInterface.md).[`_disabledHours`](../interfaces/TimeControllerInterface.md#_disabledhours)

***

### \_disabledMinutes

> **\_disabledMinutes**: `number`[] = `[]`

Defined in: [Time/controller.ts:84](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L84)

#### Implementation of

[`TimeControllerInterface`](../interfaces/TimeControllerInterface.md).[`_disabledMinutes`](../interfaces/TimeControllerInterface.md#_disabledminutes)

***

### \_disabledSeconds

> **\_disabledSeconds**: `number`[] = `[]`

Defined in: [Time/controller.ts:85](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L85)

#### Implementation of

[`TimeControllerInterface`](../interfaces/TimeControllerInterface.md).[`_disabledSeconds`](../interfaces/TimeControllerInterface.md#_disabledseconds)

***

### \_disabledTimes

> **\_disabledTimes**: `Date`[] = `[]`

Defined in: [Time/controller.ts:82](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L82)

#### Implementation of

[`TimeControllerInterface`](../interfaces/TimeControllerInterface.md).[`_disabledTimes`](../interfaces/TimeControllerInterface.md#_disabledtimes)

***

### \_focusedSegment

> **\_focusedSegment**: `null` \| `"hours"` \| `"minutes"` \| `"seconds"` \| `"milliseconds"` \| `"period"` = `null`

Defined in: [Time/controller.ts:79](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L79)

#### Implementation of

[`TimeControllerInterface`](../interfaces/TimeControllerInterface.md).[`_focusedSegment`](../interfaces/TimeControllerInterface.md#_focusedsegment)

***

### \_isRangeSelection

> **\_isRangeSelection**: `boolean` = `false`

Defined in: [Time/controller.ts:94](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L94)

#### Implementation of

[`TimeControllerInterface`](../interfaces/TimeControllerInterface.md).[`_isRangeSelection`](../interfaces/TimeControllerInterface.md#_israngeselection)

***

### \_locale

> **\_locale**: `string` = `"en-US"`

Defined in: [Time/controller.ts:91](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L91)

#### Implementation of

[`TimeControllerInterface`](../interfaces/TimeControllerInterface.md).[`_locale`](../interfaces/TimeControllerInterface.md#_locale)

***

### \_maxTime

> **\_maxTime**: `null` \| `Date` = `null`

Defined in: [Time/controller.ts:81](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L81)

#### Implementation of

[`TimeControllerInterface`](../interfaces/TimeControllerInterface.md).[`_maxTime`](../interfaces/TimeControllerInterface.md#_maxtime)

***

### \_minTime

> **\_minTime**: `null` \| `Date` = `null`

Defined in: [Time/controller.ts:80](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L80)

#### Implementation of

[`TimeControllerInterface`](../interfaces/TimeControllerInterface.md).[`_minTime`](../interfaces/TimeControllerInterface.md#_mintime)

***

### \_minuteStep

> **\_minuteStep**: `number` = `1`

Defined in: [Time/controller.ts:89](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L89)

#### Implementation of

[`TimeControllerInterface`](../interfaces/TimeControllerInterface.md).[`_minuteStep`](../interfaces/TimeControllerInterface.md#_minutestep)

***

### \_secondStep

> **\_secondStep**: `number` = `1`

Defined in: [Time/controller.ts:90](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L90)

#### Implementation of

[`TimeControllerInterface`](../interfaces/TimeControllerInterface.md).[`_secondStep`](../interfaces/TimeControllerInterface.md#_secondstep)

***

### \_selectedTime

> **\_selectedTime**: `null` \| `Date` = `null`

Defined in: [Time/controller.ts:77](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L77)

#### Implementation of

[`TimeControllerInterface`](../interfaces/TimeControllerInterface.md).[`_selectedTime`](../interfaces/TimeControllerInterface.md#_selectedtime)

***

### \_selectedTimeRange

> **\_selectedTimeRange**: [`TimeRange`](../interfaces/TimeRange.md)

Defined in: [Time/controller.ts:78](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L78)

#### Implementation of

[`TimeControllerInterface`](../interfaces/TimeControllerInterface.md).[`_selectedTimeRange`](../interfaces/TimeControllerInterface.md#_selectedtimerange)

***

### \_showMilliseconds

> **\_showMilliseconds**: `boolean` = `false`

Defined in: [Time/controller.ts:88](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L88)

#### Implementation of

[`TimeControllerInterface`](../interfaces/TimeControllerInterface.md).[`_showMilliseconds`](../interfaces/TimeControllerInterface.md#_showmilliseconds)

***

### \_showSeconds

> **\_showSeconds**: `boolean` = `false`

Defined in: [Time/controller.ts:87](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L87)

#### Implementation of

[`TimeControllerInterface`](../interfaces/TimeControllerInterface.md).[`_showSeconds`](../interfaces/TimeControllerInterface.md#_showseconds)

***

### \_timeFormat

> **\_timeFormat**: `null` \| `string` = `null`

Defined in: [Time/controller.ts:92](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L92)

#### Implementation of

[`TimeControllerInterface`](../interfaces/TimeControllerInterface.md).[`_timeFormat`](../interfaces/TimeControllerInterface.md#_timeformat)

***

### \_timeFormatOptions

> **\_timeFormatOptions**: `null` \| `DateTimeFormatOptions` = `null`

Defined in: [Time/controller.ts:93](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L93)

#### Implementation of

[`TimeControllerInterface`](../interfaces/TimeControllerInterface.md).[`_timeFormatOptions`](../interfaces/TimeControllerInterface.md#_timeformatoptions)

***

### \_use12HourFormat

> **\_use12HourFormat**: `boolean` = `false`

Defined in: [Time/controller.ts:86](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L86)

#### Implementation of

[`TimeControllerInterface`](../interfaces/TimeControllerInterface.md).[`_use12HourFormat`](../interfaces/TimeControllerInterface.md#_use12hourformat)

***

### bindings

> **bindings**: [`TimeControllerBindings`](../interfaces/TimeControllerBindings.md)

Defined in: [Time/controller.ts:69](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L69)

Reactive state bindings

#### Implementation of

[`TimeControllerInterface`](../interfaces/TimeControllerInterface.md).[`bindings`](../interfaces/TimeControllerInterface.md#bindings)

***

### events

> **events**: [`TimeControllerEvents`](../interfaces/TimeControllerEvents.md)

Defined in: [Time/controller.ts:71](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L71)

Event emitters

#### Implementation of

[`TimeControllerInterface`](../interfaces/TimeControllerInterface.md).[`events`](../interfaces/TimeControllerInterface.md#events)

***

### meta?

> `optional` **meta**: `ControllerMetadata`

Defined in: [Time/controller.ts:72](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L72)

***

### methods

> **methods**: [`TimeControllerMethods`](../interfaces/TimeControllerMethods.md)

Defined in: [Time/controller.ts:70](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L70)

Available methods

#### Implementation of

[`TimeControllerInterface`](../interfaces/TimeControllerInterface.md).[`methods`](../interfaces/TimeControllerInterface.md#methods)

***

### options?

> `optional` **options**: [`TimeOptions`](../interfaces/TimeOptions.md)

Defined in: [Time/controller.ts:74](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L74)

Time configuration options

#### Implementation of

[`TimeControllerInterface`](../interfaces/TimeControllerInterface.md).[`options`](../interfaces/TimeControllerInterface.md#options)

## Accessors

### selectedTimeRange

#### Get Signature

> **get** **selectedTimeRange**(): `object`

Defined in: [Time/controller.ts:421](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L421)

Selected time range with flexible property access

##### Returns

`object`

###### end

> **end**: `null` \| `Date`

###### endTime

> **endTime**: `null` \| `Date`

###### start

> **start**: `null` \| `Date`

###### startTime

> **startTime**: `null` \| `Date`

Selected time range with flexible property access

#### Implementation of

[`TimeControllerInterface`](../interfaces/TimeControllerInterface.md).[`selectedTimeRange`](../interfaces/TimeControllerInterface.md#selectedtimerange)

## Methods

### addDisabledHour()

> **addDisabledHour**(`hour`): `number`[]

Defined in: [Time/controller.ts:524](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L524)

#### Parameters

##### hour

`number`

#### Returns

`number`[]

***

### addDisabledTime()

> **addDisabledTime**(`time`): `Date`[]

Defined in: [Time/controller.ts:502](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L502)

#### Parameters

##### time

`Date`

#### Returns

`Date`[]

***

### clearFocusedSegment()

> **clearFocusedSegment**(): `void`

Defined in: [Time/controller.ts:479](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L479)

#### Returns

`void`

***

### clearSelection()

> **clearSelection**(): `void`

Defined in: [Time/controller.ts:408](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L408)

#### Returns

`void`

#### Implementation of

[`TimeControllerInterface`](../interfaces/TimeControllerInterface.md).[`clearSelection`](../interfaces/TimeControllerInterface.md#clearselection)

***

### focusSegment()

> **focusSegment**(`segment`): `void`

Defined in: [Time/controller.ts:483](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L483)

#### Parameters

##### segment

`"hours"` | `"minutes"` | `"seconds"` | `"milliseconds"` | `"period"`

#### Returns

`void`

***

### formatTime()

> **formatTime**(`time`, `options?`): `string`

Defined in: [Time/controller.ts:582](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L582)

#### Parameters

##### time

`Date`

##### options?

`string` | `DateTimeFormatOptions`

#### Returns

`string`

***

### generateTimeView()

> **generateTimeView**(): [`TimeView`](../interfaces/TimeView.md)

Defined in: [Time/controller.ts:642](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L642)

#### Returns

[`TimeView`](../interfaces/TimeView.md)

***

### getDisabledHours()

> **getDisabledHours**(): `number`[]

Defined in: [Time/controller.ts:536](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L536)

#### Returns

`number`[]

***

### getDisabledTimes()

> **getDisabledTimes**(): `Date`[]

Defined in: [Time/controller.ts:514](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L514)

#### Returns

`Date`[]

***

### getFormattedTime()

> **getFormattedTime**(): `null` \| `string`

Defined in: [Time/controller.ts:572](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L572)

#### Returns

`null` \| `string`

***

### getLocale()

> **getLocale**(): `string`

Defined in: [Time/controller.ts:558](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L558)

#### Returns

`string`

***

### getTimeFormatOptions()

> **getTimeFormatOptions**(): `null` \| `DateTimeFormatOptions`

Defined in: [Time/controller.ts:568](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L568)

#### Returns

`null` \| `DateTimeFormatOptions`

***

### goToCurrentTime()

> **goToCurrentTime**(): `void`

Defined in: [Time/controller.ts:460](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L460)

#### Returns

`void`

***

### goToNextHour()

> **goToNextHour**(): `void`

Defined in: [Time/controller.ts:372](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L372)

#### Returns

`void`

#### Implementation of

[`TimeControllerInterface`](../interfaces/TimeControllerInterface.md).[`goToNextHour`](../interfaces/TimeControllerInterface.md#gotonexthour)

***

### goToNextMinute()

> **goToNextMinute**(): `void`

Defined in: [Time/controller.ts:384](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L384)

#### Returns

`void`

#### Implementation of

[`TimeControllerInterface`](../interfaces/TimeControllerInterface.md).[`goToNextMinute`](../interfaces/TimeControllerInterface.md#gotonextminute)

***

### goToNextSecond()

> **goToNextSecond**(): `void`

Defined in: [Time/controller.ts:396](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L396)

#### Returns

`void`

***

### goToPreviousHour()

> **goToPreviousHour**(): `void`

Defined in: [Time/controller.ts:378](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L378)

#### Returns

`void`

#### Implementation of

[`TimeControllerInterface`](../interfaces/TimeControllerInterface.md).[`goToPreviousHour`](../interfaces/TimeControllerInterface.md#gotoprevioushour)

***

### goToPreviousMinute()

> **goToPreviousMinute**(): `void`

Defined in: [Time/controller.ts:390](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L390)

#### Returns

`void`

#### Implementation of

[`TimeControllerInterface`](../interfaces/TimeControllerInterface.md).[`goToPreviousMinute`](../interfaces/TimeControllerInterface.md#gotopreviousminute)

***

### goToPreviousSecond()

> **goToPreviousSecond**(): `void`

Defined in: [Time/controller.ts:402](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L402)

#### Returns

`void`

***

### isCurrentTime()

> **isCurrentTime**(`time`): `boolean`

Defined in: [Time/controller.ts:638](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L638)

#### Parameters

##### time

`Date`

#### Returns

`boolean`

***

### isTimeValid()

> **isTimeValid**(`time`): `boolean`

Defined in: [Time/controller.ts:647](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L647)

#### Parameters

##### time

`Date`

#### Returns

`boolean`

***

### moveFocusToHours()

> **moveFocusToHours**(): `void`

Defined in: [Time/controller.ts:683](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L683)

#### Returns

`void`

***

### moveFocusToMilliseconds()

> **moveFocusToMilliseconds**(): `void`

Defined in: [Time/controller.ts:697](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L697)

#### Returns

`void`

***

### moveFocusToMinutes()

> **moveFocusToMinutes**(): `void`

Defined in: [Time/controller.ts:687](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L687)

#### Returns

`void`

***

### moveFocusToNextSegment()

> **moveFocusToNextSegment**(): `void`

Defined in: [Time/controller.ts:663](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L663)

#### Returns

`void`

***

### moveFocusToPeriod()

> **moveFocusToPeriod**(): `void`

Defined in: [Time/controller.ts:703](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L703)

#### Returns

`void`

***

### moveFocusToPreviousSegment()

> **moveFocusToPreviousSegment**(): `void`

Defined in: [Time/controller.ts:673](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L673)

#### Returns

`void`

***

### moveFocusToSeconds()

> **moveFocusToSeconds**(): `void`

Defined in: [Time/controller.ts:691](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L691)

#### Returns

`void`

***

### removeDisabledHour()

> **removeDisabledHour**(`hour`): `number`[]

Defined in: [Time/controller.ts:530](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L530)

#### Parameters

##### hour

`number`

#### Returns

`number`[]

***

### removeDisabledTime()

> **removeDisabledTime**(`time`): `Date`[]

Defined in: [Time/controller.ts:508](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L508)

#### Parameters

##### time

`Date`

#### Returns

`Date`[]

***

### roundToStep()

> **roundToStep**(`time`): `Date`

Defined in: [Time/controller.ts:659](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L659)

#### Parameters

##### time

`Date`

#### Returns

`Date`

***

### selectFocusedSegment()

> **selectFocusedSegment**(): `void`

Defined in: [Time/controller.ts:709](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L709)

#### Returns

`void`

***

### selectTime()

> **selectTime**(`time`): `void`

Defined in: [Time/controller.ts:346](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L346)

#### Parameters

##### time

`Date`

#### Returns

`void`

#### Implementation of

[`TimeControllerInterface`](../interfaces/TimeControllerInterface.md).[`selectTime`](../interfaces/TimeControllerInterface.md#selecttime)

***

### setDisabledHours()

> **setDisabledHours**(`hours`): `number`[]

Defined in: [Time/controller.ts:518](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L518)

#### Parameters

##### hours

`number`[]

#### Returns

`number`[]

***

### setDisabledMinutes()

> **setDisabledMinutes**(`minutes`): `number`[]

Defined in: [Time/controller.ts:540](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L540)

#### Parameters

##### minutes

`number`[]

#### Returns

`number`[]

***

### setDisabledSeconds()

> **setDisabledSeconds**(`seconds`): `number`[]

Defined in: [Time/controller.ts:546](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L546)

#### Parameters

##### seconds

`number`[]

#### Returns

`number`[]

***

### setDisabledTimes()

> **setDisabledTimes**(`times`): `void`

Defined in: [Time/controller.ts:497](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L497)

#### Parameters

##### times

`Date`[]

#### Returns

`void`

***

### setFocusedSegment()

> **setFocusedSegment**(`segment`): `void`

Defined in: [Time/controller.ts:471](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L471)

#### Parameters

##### segment

`null` | `"hours"` | `"minutes"` | `"seconds"` | `"milliseconds"` | `"period"`

#### Returns

`void`

***

### setHour()

> **setHour**(`hour`, `period?`): `void`

Defined in: [Time/controller.ts:436](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L436)

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

Defined in: [Time/controller.ts:552](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L552)

#### Parameters

##### locale

`string`

#### Returns

`void`

***

### setMaxTime()

> **setMaxTime**(`time`): `void`

Defined in: [Time/controller.ts:492](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L492)

#### Parameters

##### time

`null` | `Date`

#### Returns

`void`

***

### setMillisecond()

> **setMillisecond**(`millisecond`): `void`

Defined in: [Time/controller.ts:454](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L454)

#### Parameters

##### millisecond

`number`

#### Returns

`void`

***

### setMinTime()

> **setMinTime**(`time`): `void`

Defined in: [Time/controller.ts:487](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L487)

#### Parameters

##### time

`null` | `Date`

#### Returns

`void`

***

### setMinute()

> **setMinute**(`minute`): `void`

Defined in: [Time/controller.ts:442](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L442)

#### Parameters

##### minute

`number`

#### Returns

`void`

***

### setMinuteStep()

> **setMinuteStep**(`step`): `void`

Defined in: [Time/controller.ts:622](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L622)

#### Parameters

##### step

`number`

#### Returns

`void`

***

### setRangeSelectionMode()

> **setRangeSelectionMode**(`isRange`): `void`

Defined in: [Time/controller.ts:415](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L415)

#### Parameters

##### isRange

`boolean`

#### Returns

`void`

#### Implementation of

[`TimeControllerInterface`](../interfaces/TimeControllerInterface.md).[`setRangeSelectionMode`](../interfaces/TimeControllerInterface.md#setrangeselectionmode)

***

### setSecond()

> **setSecond**(`second`): `void`

Defined in: [Time/controller.ts:448](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L448)

#### Parameters

##### second

`number`

#### Returns

`void`

***

### setSecondStep()

> **setSecondStep**(`step`): `void`

Defined in: [Time/controller.ts:630](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L630)

#### Parameters

##### step

`number`

#### Returns

`void`

***

### setShowMilliseconds()

> **setShowMilliseconds**(`show`): `void`

Defined in: [Time/controller.ts:610](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L610)

#### Parameters

##### show

`boolean`

#### Returns

`void`

***

### setShowSeconds()

> **setShowSeconds**(`show`): `void`

Defined in: [Time/controller.ts:598](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L598)

#### Parameters

##### show

`boolean`

#### Returns

`void`

***

### setTimeFormatOptions()

> **setTimeFormatOptions**(`options`): `void`

Defined in: [Time/controller.ts:562](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L562)

#### Parameters

##### options

`null` | `DateTimeFormatOptions`

#### Returns

`void`

***

### setUse12HourFormat()

> **setUse12HourFormat**(`use12Hour`): `void`

Defined in: [Time/controller.ts:586](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L586)

#### Parameters

##### use12Hour

`boolean`

#### Returns

`void`

***

### togglePeriod()

> **togglePeriod**(): `void`

Defined in: [Time/controller.ts:464](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/controller.ts#L464)

#### Returns

`void`
