[**@uplink-protocol/form-controller v0.3.0**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / TimeGeneratorService

# Class: TimeGeneratorService

Defined in: [Time/services/time-generator.service.ts:7](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-generator.service.ts#L7)

TimeGeneratorService - Implementation of ITimeGeneratorService
Generates time segments and views

## Implements

- [`ITimeGeneratorService`](../interfaces/ITimeGeneratorService.md)

## Constructors

### Constructor

> **new TimeGeneratorService**(): `TimeGeneratorService`

#### Returns

`TimeGeneratorService`

## Methods

### applyStep()

> **applyStep**(`segments`, `step`): [`TimeSegment`](../interfaces/TimeSegment.md)[]

Defined in: [Time/services/time-generator.service.ts:112](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-generator.service.ts#L112)

Apply time step intervals

#### Parameters

##### segments

[`TimeSegment`](../interfaces/TimeSegment.md)[]

Input segments

##### step

`number`

Step interval

#### Returns

[`TimeSegment`](../interfaces/TimeSegment.md)[]

Filtered segments based on step

#### Implementation of

[`ITimeGeneratorService`](../interfaces/ITimeGeneratorService.md).[`applyStep`](../interfaces/ITimeGeneratorService.md#applystep)

***

### generateHourSegments()

> **generateHourSegments**(`options`): [`TimeSegment`](../interfaces/TimeSegment.md)[]

Defined in: [Time/services/time-generator.service.ts:19](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-generator.service.ts#L19)

Generate hour segments

#### Parameters

##### options

[`TimeGenerationOptions`](../interfaces/TimeGenerationOptions.md)

Generation options

#### Returns

[`TimeSegment`](../interfaces/TimeSegment.md)[]

Array of hour segments

#### Implementation of

[`ITimeGeneratorService`](../interfaces/ITimeGeneratorService.md).[`generateHourSegments`](../interfaces/ITimeGeneratorService.md#generatehoursegments)

***

### generateMillisecondSegments()

> **generateMillisecondSegments**(`options`): [`TimeSegment`](../interfaces/TimeSegment.md)[]

Defined in: [Time/services/time-generator.service.ts:83](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-generator.service.ts#L83)

Generate millisecond segments

#### Parameters

##### options

[`TimeGenerationOptions`](../interfaces/TimeGenerationOptions.md)

Generation options

#### Returns

[`TimeSegment`](../interfaces/TimeSegment.md)[]

Array of millisecond segments

#### Implementation of

[`ITimeGeneratorService`](../interfaces/ITimeGeneratorService.md).[`generateMillisecondSegments`](../interfaces/ITimeGeneratorService.md#generatemillisecondsegments)

***

### generateMinuteSegments()

> **generateMinuteSegments**(`options`): [`TimeSegment`](../interfaces/TimeSegment.md)[]

Defined in: [Time/services/time-generator.service.ts:49](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-generator.service.ts#L49)

Generate minute segments

#### Parameters

##### options

[`TimeGenerationOptions`](../interfaces/TimeGenerationOptions.md)

Generation options

#### Returns

[`TimeSegment`](../interfaces/TimeSegment.md)[]

Array of minute segments

#### Implementation of

[`ITimeGeneratorService`](../interfaces/ITimeGeneratorService.md).[`generateMinuteSegments`](../interfaces/ITimeGeneratorService.md#generateminutesegments)

***

### generatePeriod()

> **generatePeriod**(`options`): `null` \| [`TimePeriod`](../interfaces/TimePeriod.md)

Defined in: [Time/services/time-generator.service.ts:98](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-generator.service.ts#L98)

Generate period (AM/PM) for 12-hour format

#### Parameters

##### options

[`TimeGenerationOptions`](../interfaces/TimeGenerationOptions.md)

Generation options

#### Returns

`null` \| [`TimePeriod`](../interfaces/TimePeriod.md)

Period segment

#### Implementation of

[`ITimeGeneratorService`](../interfaces/ITimeGeneratorService.md).[`generatePeriod`](../interfaces/ITimeGeneratorService.md#generateperiod)

***

### generateSecondSegments()

> **generateSecondSegments**(`options`): [`TimeSegment`](../interfaces/TimeSegment.md)[]

Defined in: [Time/services/time-generator.service.ts:66](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-generator.service.ts#L66)

Generate second segments

#### Parameters

##### options

[`TimeGenerationOptions`](../interfaces/TimeGenerationOptions.md)

Generation options

#### Returns

[`TimeSegment`](../interfaces/TimeSegment.md)[]

Array of second segments

#### Implementation of

[`ITimeGeneratorService`](../interfaces/ITimeGeneratorService.md).[`generateSecondSegments`](../interfaces/ITimeGeneratorService.md#generatesecondsegments)

***

### generateTimeView()

> **generateTimeView**(`options`): [`TimeView`](../interfaces/TimeView.md)

Defined in: [Time/services/time-generator.service.ts:8](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/services/time-generator.service.ts#L8)

Generate time view with all segments

#### Parameters

##### options

[`TimeGenerationOptions`](../interfaces/TimeGenerationOptions.md)

Generation options

#### Returns

[`TimeView`](../interfaces/TimeView.md)

Complete time view

#### Implementation of

[`ITimeGeneratorService`](../interfaces/ITimeGeneratorService.md).[`generateTimeView`](../interfaces/ITimeGeneratorService.md#generatetimeview)
