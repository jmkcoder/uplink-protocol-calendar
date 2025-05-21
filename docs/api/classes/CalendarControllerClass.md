[**@uplink-protocol/form-controller v0.1.0**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / CalendarControllerClass

# Class: CalendarControllerClass

Defined in: controller.ts:39

CalendarControllerClass - A full featured date picker controller class.
Provides functionality for date picking and calendar display.

This controller uses a service-oriented architecture where all the core
functionality is delegated to specialized services.

## Implements

- `TypedController`

## Constructors

### Constructor

> **new CalendarControllerClass**(`options?`): `CalendarControllerClass`

Defined in: controller.ts:70

Constructor - initializes the controller with optional configuration

#### Parameters

##### options?

[`CalendarOptions`](../interfaces/CalendarOptions.md)

Calendar configuration options

#### Returns

`CalendarControllerClass`

## Properties

### \_\_adapter?

> `optional` **\_\_adapter**: `ControllerAdapter`

Defined in: controller.ts:44

#### Implementation of

`TypedController.__adapter`

***

### bindings

> **bindings**: `Record`\<`string`, `Binding`\<`any`\>\>

Defined in: controller.ts:40

#### Implementation of

`TypedController.bindings`

***

### events?

> `optional` **events**: `Record`\<`string`, `EventEmitter`\<`any`\>\>

Defined in: controller.ts:42

#### Implementation of

`TypedController.events`

***

### meta?

> `optional` **meta**: `ControllerMetadata`

Defined in: controller.ts:43

#### Implementation of

`TypedController.meta`

***

### methods?

> `optional` **methods**: `Record`\<`string`, (...`args`) => `any`\>

Defined in: controller.ts:41

#### Implementation of

`TypedController.methods`

## Methods

### clearSelection()

> **clearSelection**(): `void`

Defined in: controller.ts:320

Clear the current selection using DateSelectionService

#### Returns

`void`

***

### getFormattedDate()

> **getFormattedDate**(): `null` \| `string`

Defined in: controller.ts:347

Get formatted selected date using DateFormattingService

#### Returns

`null` \| `string`

Formatted date string or null

***

### goToDate()

> **goToDate**(`date`): `void`

Defined in: controller.ts:261

Go to a specific date using NavigationService

#### Parameters

##### date

`Date`

Date to navigate to

#### Returns

`void`

***

### goToMonth()

> **goToMonth**(`month`): `void`

Defined in: controller.ts:243

Go to a specific month using NavigationService

#### Parameters

##### month

`number`

Month (0-11)

#### Returns

`void`

***

### goToToday()

> **goToToday**(): `void`

Defined in: controller.ts:269

Go to today using NavigationService

#### Returns

`void`

***

### goToYear()

> **goToYear**(`year`): `void`

Defined in: controller.ts:252

Go to a specific year using NavigationService

#### Parameters

##### year

`number`

Year

#### Returns

`void`

***

### isDateDisabled()

> **isDateDisabled**(`date`): `boolean`

Defined in: controller.ts:147

Check if a date should be disabled using ConstraintsService

#### Parameters

##### date

`Date`

Date to check

#### Returns

`boolean`

Boolean indicating if the date is disabled

***

### nextMonth()

> **nextMonth**(): `void`

Defined in: controller.ts:211

#### Returns

`void`

***

### nextYear()

> **nextYear**(): `void`

Defined in: controller.ts:227

Navigate to next year using NavigationService

#### Returns

`void`

***

### prevMonth()

> **prevMonth**(): `void`

Defined in: controller.ts:219

Navigate to previous month using NavigationService

#### Returns

`void`

***

### prevYear()

> **prevYear**(): `void`

Defined in: controller.ts:235

Navigate to previous year using NavigationService

#### Returns

`void`

***

### selectDate()

> **selectDate**(`year`, `month`, `day`): `void`

Defined in: controller.ts:161

Select a date

#### Parameters

##### year

`number`

Year

##### month

`number`

Month (0-11)

##### day

`number`

Day of month

#### Returns

`void`

***

### setDisabledDates()

> **setDisabledDates**(`dates`): `void`

Defined in: controller.ts:396

Set disabled dates

#### Parameters

##### dates

`Date`[]

Array of disabled dates

#### Returns

`void`

***

### setMaxDate()

> **setMaxDate**(`date`): `void`

Defined in: controller.ts:375

Set maximum selectable date

#### Parameters

##### date

Maximum date

`null` | `Date`

#### Returns

`void`

***

### setMinDate()

> **setMinDate**(`date`): `void`

Defined in: controller.ts:354

#### Parameters

##### date

`null` | `Date`

#### Returns

`void`

***

### setRangeSelectionMode()

> **setRangeSelectionMode**(`isRange`): `void`

Defined in: controller.ts:303

Set the date selection mode

#### Parameters

##### isRange

`boolean`

Whether to use range selection mode

#### Returns

`void`
