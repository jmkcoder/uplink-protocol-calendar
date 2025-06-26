[**@uplink-protocol/form-controller v0.3.0**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / ITimeService

# Interface: ITimeService

Defined in: [Time/interfaces/time.service.interfaces.ts:5](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time.service.interfaces.ts#L5)

Time service interface
Responsible for time generation and navigation functions

## Methods

### convertTo12Hour()

> **convertTo12Hour**(`hour24`): `object`

Defined in: [Time/interfaces/time.service.interfaces.ts:39](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time.service.interfaces.ts#L39)

Convert 24-hour to 12-hour format

#### Parameters

##### hour24

`number`

Hour in 24-hour format (0-23)

#### Returns

`object`

Object with hour12 (1-12) and period ('AM'|'PM')

##### hour12

> **hour12**: `number`

##### period

> **period**: `"AM"` \| `"PM"`

***

### convertTo24Hour()

> **convertTo24Hour**(`hour12`, `period`): `number`

Defined in: [Time/interfaces/time.service.interfaces.ts:47](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time.service.interfaces.ts#L47)

Convert 12-hour to 24-hour format

#### Parameters

##### hour12

`number`

Hour in 12-hour format (1-12)

##### period

AM or PM

`"AM"` | `"PM"`

#### Returns

`number`

Hour in 24-hour format (0-23)

***

### getCurrentTime()

> **getCurrentTime**(): `Date`

Defined in: [Time/interfaces/time.service.interfaces.ts:60](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time.service.interfaces.ts#L60)

Get current time

#### Returns

`Date`

Current time as Date object

***

### getHourDisplayValues()

> **getHourDisplayValues**(`use12Hour`): `string`[]

Defined in: [Time/interfaces/time.service.interfaces.ts:11](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time.service.interfaces.ts#L11)

Get hour display values (12-hour or 24-hour format)

#### Parameters

##### use12Hour

`boolean`

Whether to use 12-hour format

#### Returns

`string`[]

Array of hour display strings

***

### getMinuteDisplayValues()

> **getMinuteDisplayValues**(`step`): `string`[]

Defined in: [Time/interfaces/time.service.interfaces.ts:18](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time.service.interfaces.ts#L18)

Get minute display values with step interval

#### Parameters

##### step

`number`

Step interval for minutes

#### Returns

`string`[]

Array of minute display strings

***

### getPeriodNames()

> **getPeriodNames**(`locale`): `string`[]

Defined in: [Time/interfaces/time.service.interfaces.ts:32](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time.service.interfaces.ts#L32)

Get period names (AM/PM) for 12-hour format

#### Parameters

##### locale

`string`

Current locale

#### Returns

`string`[]

Array of period names

***

### getSecondDisplayValues()

> **getSecondDisplayValues**(`step`): `string`[]

Defined in: [Time/interfaces/time.service.interfaces.ts:25](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time.service.interfaces.ts#L25)

Get second display values with step interval

#### Parameters

##### step

`number`

Step interval for seconds

#### Returns

`string`[]

Array of second display strings

***

### isToday()

> **isToday**(`time`): `boolean`

Defined in: [Time/interfaces/time.service.interfaces.ts:54](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time.service.interfaces.ts#L54)

Check if a time is today

#### Parameters

##### time

`Date`

Time to check

#### Returns

`boolean`

Whether the time is today

***

### roundToStep()

> **roundToStep**(`time`, `minuteStep`, `secondStep`): `Date`

Defined in: [Time/interfaces/time.service.interfaces.ts:69](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time.service.interfaces.ts#L69)

Round time to nearest step interval

#### Parameters

##### time

`Date`

Input time

##### minuteStep

`number`

Step interval for minutes

##### secondStep

`number`

Step interval for seconds

#### Returns

`Date`

Rounded time
