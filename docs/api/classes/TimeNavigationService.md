[**@uplink-protocol/form-controller v0.3.0**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / TimeNavigationService

# Class: TimeNavigationService

Defined in: [Time/services/time-navigation.service.ts:7](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-navigation.service.ts#L7)

TimeNavigationService - Implementation of ITimeNavigationService
Handles time navigation and focus management

## Implements

- [`ITimeNavigationService`](../interfaces/ITimeNavigationService.md)

## Constructors

### Constructor

> **new TimeNavigationService**(): `TimeNavigationService`

#### Returns

`TimeNavigationService`

## Methods

### goToNextHour()

> **goToNextHour**(`currentTime`, `use12Hour`): `Date`

Defined in: [Time/services/time-navigation.service.ts:14](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-navigation.service.ts#L14)

Navigate to next hour

#### Parameters

##### currentTime

`Date`

Current time

##### use12Hour

`boolean`

Whether using 12-hour format

#### Returns

`Date`

Next hour time

#### Implementation of

[`ITimeNavigationService`](../interfaces/ITimeNavigationService.md).[`goToNextHour`](../interfaces/ITimeNavigationService.md#gotonexthour)

***

### goToNextMinute()

> **goToNextMinute**(`currentTime`, `step`): `Date`

Defined in: [Time/services/time-navigation.service.ts:73](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-navigation.service.ts#L73)

Navigate to next minute

#### Parameters

##### currentTime

`Date`

Current time

##### step

`number`

Minute step interval

#### Returns

`Date`

Next minute time

#### Implementation of

[`ITimeNavigationService`](../interfaces/ITimeNavigationService.md).[`goToNextMinute`](../interfaces/ITimeNavigationService.md#gotonextminute)

***

### goToNextSecond()

> **goToNextSecond**(`currentTime`, `step`): `Date`

Defined in: [Time/services/time-navigation.service.ts:115](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-navigation.service.ts#L115)

Navigate to next second

#### Parameters

##### currentTime

`Date`

Current time

##### step

`number`

Second step interval

#### Returns

`Date`

Next second time

#### Implementation of

[`ITimeNavigationService`](../interfaces/ITimeNavigationService.md).[`goToNextSecond`](../interfaces/ITimeNavigationService.md#gotonextsecond)

***

### goToPreviousHour()

> **goToPreviousHour**(`currentTime`, `use12Hour`): `Date`

Defined in: [Time/services/time-navigation.service.ts:43](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-navigation.service.ts#L43)

Navigate to previous hour

#### Parameters

##### currentTime

`Date`

Current time

##### use12Hour

`boolean`

Whether using 12-hour format

#### Returns

`Date`

Previous hour time

#### Implementation of

[`ITimeNavigationService`](../interfaces/ITimeNavigationService.md).[`goToPreviousHour`](../interfaces/ITimeNavigationService.md#gotoprevioushour)

***

### goToPreviousMinute()

> **goToPreviousMinute**(`currentTime`, `step`): `Date`

Defined in: [Time/services/time-navigation.service.ts:94](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-navigation.service.ts#L94)

Navigate to previous minute

#### Parameters

##### currentTime

`Date`

Current time

##### step

`number`

Minute step interval

#### Returns

`Date`

Previous minute time

#### Implementation of

[`ITimeNavigationService`](../interfaces/ITimeNavigationService.md).[`goToPreviousMinute`](../interfaces/ITimeNavigationService.md#gotopreviousminute)

***

### goToPreviousSecond()

> **goToPreviousSecond**(`currentTime`, `step`): `Date`

Defined in: [Time/services/time-navigation.service.ts:136](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-navigation.service.ts#L136)

Navigate to previous second

#### Parameters

##### currentTime

`Date`

Current time

##### step

`number`

Second step interval

#### Returns

`Date`

Previous second time

#### Implementation of

[`ITimeNavigationService`](../interfaces/ITimeNavigationService.md).[`goToPreviousSecond`](../interfaces/ITimeNavigationService.md#gotoprevioussecond)

***

### moveFocusToNextSegment()

> **moveFocusToNextSegment**(`currentSegment`, `showSeconds`, `showMilliseconds`, `use12Hour`): `null` \| `"hours"` \| `"minutes"` \| `"seconds"` \| `"milliseconds"` \| `"period"`

Defined in: [Time/services/time-navigation.service.ts:241](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-navigation.service.ts#L241)

Move focus to next segment

#### Parameters

##### currentSegment

Current focused segment

`null` | `"hours"` | `"minutes"` | `"seconds"` | `"milliseconds"` | `"period"`

##### showSeconds

`boolean`

Whether seconds are shown

##### showMilliseconds

`boolean`

Whether milliseconds are shown

##### use12Hour

`boolean`

Whether using 12-hour format

#### Returns

`null` \| `"hours"` \| `"minutes"` \| `"seconds"` \| `"milliseconds"` \| `"period"`

Next segment to focus

#### Implementation of

[`ITimeNavigationService`](../interfaces/ITimeNavigationService.md).[`moveFocusToNextSegment`](../interfaces/ITimeNavigationService.md#movefocustonextsegment)

***

### moveFocusToPreviousSegment()

> **moveFocusToPreviousSegment**(`currentSegment`, `showSeconds`, `showMilliseconds`, `use12Hour`): `null` \| `"hours"` \| `"minutes"` \| `"seconds"` \| `"milliseconds"` \| `"period"`

Defined in: [Time/services/time-navigation.service.ts:269](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-navigation.service.ts#L269)

Move focus to previous segment

#### Parameters

##### currentSegment

Current focused segment

`null` | `"hours"` | `"minutes"` | `"seconds"` | `"milliseconds"` | `"period"`

##### showSeconds

`boolean`

Whether seconds are shown

##### showMilliseconds

`boolean`

Whether milliseconds are shown

##### use12Hour

`boolean`

Whether using 12-hour format

#### Returns

`null` \| `"hours"` \| `"minutes"` \| `"seconds"` \| `"milliseconds"` \| `"period"`

Previous segment to focus

#### Implementation of

[`ITimeNavigationService`](../interfaces/ITimeNavigationService.md).[`moveFocusToPreviousSegment`](../interfaces/ITimeNavigationService.md#movefocustoprevioussegment)

***

### setHour()

> **setHour**(`currentTime`, `hour`, `use12Hour`, `period?`): `Date`

Defined in: [Time/services/time-navigation.service.ts:159](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-navigation.service.ts#L159)

Set specific hour

#### Parameters

##### currentTime

`Date`

Current time

##### hour

`number`

Hour to set (0-23 or 1-12 depending on format)

##### use12Hour

`boolean`

Whether using 12-hour format

##### period?

AM/PM period for 12-hour format

`"AM"` | `"PM"`

#### Returns

`Date`

Time with new hour

#### Implementation of

[`ITimeNavigationService`](../interfaces/ITimeNavigationService.md).[`setHour`](../interfaces/ITimeNavigationService.md#sethour)

***

### setMillisecond()

> **setMillisecond**(`currentTime`, `millisecond`): `Date`

Defined in: [Time/services/time-navigation.service.ts:207](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-navigation.service.ts#L207)

Set specific millisecond

#### Parameters

##### currentTime

`Date`

Current time

##### millisecond

`number`

Millisecond to set (0-999)

#### Returns

`Date`

Time with new millisecond

#### Implementation of

[`ITimeNavigationService`](../interfaces/ITimeNavigationService.md).[`setMillisecond`](../interfaces/ITimeNavigationService.md#setmillisecond)

***

### setMinute()

> **setMinute**(`currentTime`, `minute`): `Date`

Defined in: [Time/services/time-navigation.service.ts:183](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-navigation.service.ts#L183)

Set specific minute

#### Parameters

##### currentTime

`Date`

Current time

##### minute

`number`

Minute to set (0-59)

#### Returns

`Date`

Time with new minute

#### Implementation of

[`ITimeNavigationService`](../interfaces/ITimeNavigationService.md).[`setMinute`](../interfaces/ITimeNavigationService.md#setminute)

***

### setSecond()

> **setSecond**(`currentTime`, `second`): `Date`

Defined in: [Time/services/time-navigation.service.ts:195](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-navigation.service.ts#L195)

Set specific second

#### Parameters

##### currentTime

`Date`

Current time

##### second

`number`

Second to set (0-59)

#### Returns

`Date`

Time with new second

#### Implementation of

[`ITimeNavigationService`](../interfaces/ITimeNavigationService.md).[`setSecond`](../interfaces/ITimeNavigationService.md#setsecond)

***

### togglePeriod()

> **togglePeriod**(`currentTime`): `Date`

Defined in: [Time/services/time-navigation.service.ts:218](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-navigation.service.ts#L218)

Toggle AM/PM period

#### Parameters

##### currentTime

`Date`

Current time

#### Returns

`Date`

Time with toggled period

#### Implementation of

[`ITimeNavigationService`](../interfaces/ITimeNavigationService.md).[`togglePeriod`](../interfaces/ITimeNavigationService.md#toggleperiod)
