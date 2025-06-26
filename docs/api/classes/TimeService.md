[**@uplink-protocol/form-controller v0.3.0**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / TimeService

# Class: TimeService

Defined in: [Time/services/time.service.ts:7](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time.service.ts#L7)

TimeService - Implementation of ITimeService
Responsible for time generation and navigation functions

## Implements

- [`ITimeService`](../interfaces/ITimeService.md)

## Constructors

### Constructor

> **new TimeService**(): `TimeService`

#### Returns

`TimeService`

## Methods

### convertTo12Hour()

> **convertTo12Hour**(`hour24`): `object`

Defined in: [Time/services/time.service.ts:96](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time.service.ts#L96)

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

#### Implementation of

[`ITimeService`](../interfaces/ITimeService.md).[`convertTo12Hour`](../interfaces/ITimeService.md#convertto12hour)

***

### convertTo24Hour()

> **convertTo24Hour**(`hour12`, `period`): `number`

Defined in: [Time/services/time.service.ts:110](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time.service.ts#L110)

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

#### Implementation of

[`ITimeService`](../interfaces/ITimeService.md).[`convertTo24Hour`](../interfaces/ITimeService.md#convertto24hour)

***

### getCurrentTime()

> **getCurrentTime**(): `Date`

Defined in: [Time/services/time.service.ts:136](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time.service.ts#L136)

Get current time

#### Returns

`Date`

Current time as Date object

#### Implementation of

[`ITimeService`](../interfaces/ITimeService.md).[`getCurrentTime`](../interfaces/ITimeService.md#getcurrenttime)

***

### getHourDisplayValues()

> **getHourDisplayValues**(`use12Hour`): `string`[]

Defined in: [Time/services/time.service.ts:13](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time.service.ts#L13)

Get hour display values (12-hour or 24-hour format)

#### Parameters

##### use12Hour

`boolean`

Whether to use 12-hour format

#### Returns

`string`[]

Array of hour display strings

#### Implementation of

[`ITimeService`](../interfaces/ITimeService.md).[`getHourDisplayValues`](../interfaces/ITimeService.md#gethourdisplayvalues)

***

### getMinuteDisplayValues()

> **getMinuteDisplayValues**(`step`): `string`[]

Defined in: [Time/services/time.service.ts:39](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time.service.ts#L39)

Get minute display values with step interval

#### Parameters

##### step

`number`

Step interval for minutes

#### Returns

`string`[]

Array of minute display strings

#### Implementation of

[`ITimeService`](../interfaces/ITimeService.md).[`getMinuteDisplayValues`](../interfaces/ITimeService.md#getminutedisplayvalues)

***

### getPeriodNames()

> **getPeriodNames**(`locale`): `string`[]

Defined in: [Time/services/time.service.ts:69](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time.service.ts#L69)

Get period names (AM/PM) for 12-hour format

#### Parameters

##### locale

`string`

Current locale

#### Returns

`string`[]

Array of period names

#### Implementation of

[`ITimeService`](../interfaces/ITimeService.md).[`getPeriodNames`](../interfaces/ITimeService.md#getperiodnames)

***

### getSecondDisplayValues()

> **getSecondDisplayValues**(`step`): `string`[]

Defined in: [Time/services/time.service.ts:54](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time.service.ts#L54)

Get second display values with step interval

#### Parameters

##### step

`number`

Step interval for seconds

#### Returns

`string`[]

Array of second display strings

#### Implementation of

[`ITimeService`](../interfaces/ITimeService.md).[`getSecondDisplayValues`](../interfaces/ITimeService.md#getseconddisplayvalues)

***

### isToday()

> **isToday**(`time`): `boolean`

Defined in: [Time/services/time.service.ts:123](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time.service.ts#L123)

Check if a time is today

#### Parameters

##### time

`Date`

Time to check

#### Returns

`boolean`

Whether the time is today

#### Implementation of

[`ITimeService`](../interfaces/ITimeService.md).[`isToday`](../interfaces/ITimeService.md#istoday)

***

### roundToStep()

> **roundToStep**(`time`, `minuteStep`, `secondStep`): `Date`

Defined in: [Time/services/time.service.ts:147](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time.service.ts#L147)

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

#### Implementation of

[`ITimeService`](../interfaces/ITimeService.md).[`roundToStep`](../interfaces/ITimeService.md#roundtostep)
