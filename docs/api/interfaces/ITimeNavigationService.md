[**@uplink-protocol/form-controller v0.3.0**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / ITimeNavigationService

# Interface: ITimeNavigationService

Defined in: [Time/interfaces/time-navigation.service.interfaces.ts:5](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-navigation.service.interfaces.ts#L5)

Time navigation service interface
Handles time navigation and focus management

## Methods

### goToNextHour()

> **goToNextHour**(`currentTime`, `use12Hour`): `Date`

Defined in: [Time/interfaces/time-navigation.service.interfaces.ts:12](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-navigation.service.interfaces.ts#L12)

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

***

### goToNextMinute()

> **goToNextMinute**(`currentTime`, `step`): `Date`

Defined in: [Time/interfaces/time-navigation.service.interfaces.ts:28](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-navigation.service.interfaces.ts#L28)

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

***

### goToNextSecond()

> **goToNextSecond**(`currentTime`, `step`): `Date`

Defined in: [Time/interfaces/time-navigation.service.interfaces.ts:44](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-navigation.service.interfaces.ts#L44)

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

***

### goToPreviousHour()

> **goToPreviousHour**(`currentTime`, `use12Hour`): `Date`

Defined in: [Time/interfaces/time-navigation.service.interfaces.ts:20](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-navigation.service.interfaces.ts#L20)

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

***

### goToPreviousMinute()

> **goToPreviousMinute**(`currentTime`, `step`): `Date`

Defined in: [Time/interfaces/time-navigation.service.interfaces.ts:36](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-navigation.service.interfaces.ts#L36)

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

***

### goToPreviousSecond()

> **goToPreviousSecond**(`currentTime`, `step`): `Date`

Defined in: [Time/interfaces/time-navigation.service.interfaces.ts:52](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-navigation.service.interfaces.ts#L52)

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

***

### moveFocusToNextSegment()

> **moveFocusToNextSegment**(`currentSegment`, `showSeconds`, `showMilliseconds`, `use12Hour`): `null` \| `"hours"` \| `"minutes"` \| `"seconds"` \| `"milliseconds"` \| `"period"`

Defined in: [Time/interfaces/time-navigation.service.interfaces.ts:103](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-navigation.service.interfaces.ts#L103)

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

***

### moveFocusToPreviousSegment()

> **moveFocusToPreviousSegment**(`currentSegment`, `showSeconds`, `showMilliseconds`, `use12Hour`): `null` \| `"hours"` \| `"minutes"` \| `"seconds"` \| `"milliseconds"` \| `"period"`

Defined in: [Time/interfaces/time-navigation.service.interfaces.ts:118](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-navigation.service.interfaces.ts#L118)

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

***

### setHour()

> **setHour**(`currentTime`, `hour`, `use12Hour`, `period?`): `Date`

Defined in: [Time/interfaces/time-navigation.service.interfaces.ts:62](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-navigation.service.interfaces.ts#L62)

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

***

### setMillisecond()

> **setMillisecond**(`currentTime`, `millisecond`): `Date`

Defined in: [Time/interfaces/time-navigation.service.interfaces.ts:86](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-navigation.service.interfaces.ts#L86)

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

***

### setMinute()

> **setMinute**(`currentTime`, `minute`): `Date`

Defined in: [Time/interfaces/time-navigation.service.interfaces.ts:70](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-navigation.service.interfaces.ts#L70)

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

***

### setSecond()

> **setSecond**(`currentTime`, `second`): `Date`

Defined in: [Time/interfaces/time-navigation.service.interfaces.ts:78](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-navigation.service.interfaces.ts#L78)

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

***

### togglePeriod()

> **togglePeriod**(`currentTime`): `Date`

Defined in: [Time/interfaces/time-navigation.service.interfaces.ts:93](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-navigation.service.interfaces.ts#L93)

Toggle AM/PM period

#### Parameters

##### currentTime

`Date`

Current time

#### Returns

`Date`

Time with toggled period
