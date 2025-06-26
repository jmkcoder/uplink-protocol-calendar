[**@uplink-protocol/form-controller v0.3.0**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / ITimeGeneratorService

# Interface: ITimeGeneratorService

Defined in: [Time/interfaces/time-generator.service.interfaces.ts:7](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-generator.service.interfaces.ts#L7)

Time generator service interface
Generates time segments and views

## Methods

### applyStep()

> **applyStep**(`segments`, `step`): [`TimeSegment`](TimeSegment.md)[]

Defined in: [Time/interfaces/time-generator.service.interfaces.ts:56](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-generator.service.interfaces.ts#L56)

Apply time step intervals

#### Parameters

##### segments

[`TimeSegment`](TimeSegment.md)[]

Input segments

##### step

`number`

Step interval

#### Returns

[`TimeSegment`](TimeSegment.md)[]

Filtered segments based on step

***

### generateHourSegments()

> **generateHourSegments**(`options`): [`TimeSegment`](TimeSegment.md)[]

Defined in: [Time/interfaces/time-generator.service.interfaces.ts:20](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-generator.service.interfaces.ts#L20)

Generate hour segments

#### Parameters

##### options

[`TimeGenerationOptions`](TimeGenerationOptions.md)

Generation options

#### Returns

[`TimeSegment`](TimeSegment.md)[]

Array of hour segments

***

### generateMillisecondSegments()

> **generateMillisecondSegments**(`options`): [`TimeSegment`](TimeSegment.md)[]

Defined in: [Time/interfaces/time-generator.service.interfaces.ts:41](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-generator.service.interfaces.ts#L41)

Generate millisecond segments

#### Parameters

##### options

[`TimeGenerationOptions`](TimeGenerationOptions.md)

Generation options

#### Returns

[`TimeSegment`](TimeSegment.md)[]

Array of millisecond segments

***

### generateMinuteSegments()

> **generateMinuteSegments**(`options`): [`TimeSegment`](TimeSegment.md)[]

Defined in: [Time/interfaces/time-generator.service.interfaces.ts:27](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-generator.service.interfaces.ts#L27)

Generate minute segments

#### Parameters

##### options

[`TimeGenerationOptions`](TimeGenerationOptions.md)

Generation options

#### Returns

[`TimeSegment`](TimeSegment.md)[]

Array of minute segments

***

### generatePeriod()

> **generatePeriod**(`options`): `null` \| [`TimePeriod`](TimePeriod.md)

Defined in: [Time/interfaces/time-generator.service.interfaces.ts:48](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-generator.service.interfaces.ts#L48)

Generate period (AM/PM) for 12-hour format

#### Parameters

##### options

[`TimeGenerationOptions`](TimeGenerationOptions.md)

Generation options

#### Returns

`null` \| [`TimePeriod`](TimePeriod.md)

Period segment

***

### generateSecondSegments()

> **generateSecondSegments**(`options`): [`TimeSegment`](TimeSegment.md)[]

Defined in: [Time/interfaces/time-generator.service.interfaces.ts:34](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-generator.service.interfaces.ts#L34)

Generate second segments

#### Parameters

##### options

[`TimeGenerationOptions`](TimeGenerationOptions.md)

Generation options

#### Returns

[`TimeSegment`](TimeSegment.md)[]

Array of second segments

***

### generateTimeView()

> **generateTimeView**(`options`): [`TimeView`](TimeView.md)

Defined in: [Time/interfaces/time-generator.service.interfaces.ts:13](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Time/interfaces/time-generator.service.interfaces.ts#L13)

Generate time view with all segments

#### Parameters

##### options

[`TimeGenerationOptions`](TimeGenerationOptions.md)

Generation options

#### Returns

[`TimeView`](TimeView.md)

Complete time view
