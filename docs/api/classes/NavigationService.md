[**@uplink-protocol/form-controller v0.3.0**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / NavigationService

# Class: NavigationService

Defined in: [Date/services/navigation.service.ts:7](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/services/navigation.service.ts#L7)

Implementation of NavigationService
Responsible for handling calendar navigation operations

## Implements

- [`INavigationService`](../interfaces/INavigationService.md)

## Constructors

### Constructor

> **new NavigationService**(): `NavigationService`

#### Returns

`NavigationService`

## Methods

### navigateToDate()

> **navigateToDate**(`currentDate`, `targetDate?`): `Date`

Defined in: [Date/services/navigation.service.ts:94](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/services/navigation.service.ts#L94)

Navigate to specific date

#### Parameters

##### currentDate

The current date (optional)

`null` | `Date`

##### targetDate?

`Date`

The target date to navigate to

#### Returns

`Date`

#### Implementation of

[`INavigationService`](../interfaces/INavigationService.md).[`navigateToDate`](../interfaces/INavigationService.md#navigatetodate)

***

### navigateToMonth()

> **navigateToMonth**(`currentDate`, `month`): `Date`

Defined in: [Date/services/navigation.service.ts:47](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/services/navigation.service.ts#L47)

Navigate to specific month

#### Parameters

##### currentDate

`Date`

##### month

`number`

#### Returns

`Date`

#### Implementation of

[`INavigationService`](../interfaces/INavigationService.md).[`navigateToMonth`](../interfaces/INavigationService.md#navigatetomonth)

***

### navigateToNextMonth()

> **navigateToNextMonth**(`currentDate`): `Date`

Defined in: [Date/services/navigation.service.ts:11](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/services/navigation.service.ts#L11)

Navigate to next month

#### Parameters

##### currentDate

`Date`

#### Returns

`Date`

#### Implementation of

[`INavigationService`](../interfaces/INavigationService.md).[`navigateToNextMonth`](../interfaces/INavigationService.md#navigatetonextmonth)

***

### navigateToNextYear()

> **navigateToNextYear**(`currentDate`): `Date`

Defined in: [Date/services/navigation.service.ts:29](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/services/navigation.service.ts#L29)

Navigate to next year

#### Parameters

##### currentDate

`Date`

#### Returns

`Date`

#### Implementation of

[`INavigationService`](../interfaces/INavigationService.md).[`navigateToNextYear`](../interfaces/INavigationService.md#navigatetonextyear)

***

### navigateToPreviousMonth()

> **navigateToPreviousMonth**(`currentDate`): `Date`

Defined in: [Date/services/navigation.service.ts:20](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/services/navigation.service.ts#L20)

Navigate to previous month

#### Parameters

##### currentDate

`Date`

#### Returns

`Date`

#### Implementation of

[`INavigationService`](../interfaces/INavigationService.md).[`navigateToPreviousMonth`](../interfaces/INavigationService.md#navigatetopreviousmonth)

***

### navigateToPreviousYear()

> **navigateToPreviousYear**(`currentDate`): `Date`

Defined in: [Date/services/navigation.service.ts:38](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/services/navigation.service.ts#L38)

Navigate to previous year

#### Parameters

##### currentDate

`Date`

#### Returns

`Date`

#### Implementation of

[`INavigationService`](../interfaces/INavigationService.md).[`navigateToPreviousYear`](../interfaces/INavigationService.md#navigatetopreviousyear)

***

### navigateToToday()

> **navigateToToday**(): `Date`

Defined in: [Date/services/navigation.service.ts:108](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/services/navigation.service.ts#L108)

Navigate to today

#### Returns

`Date`

#### Implementation of

[`INavigationService`](../interfaces/INavigationService.md).[`navigateToToday`](../interfaces/INavigationService.md#navigatetotoday)

***

### navigateToYear()

> **navigateToYear**(`currentDate`, `year`): `Date`

Defined in: [Date/services/navigation.service.ts:55](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/services/navigation.service.ts#L55)

Navigate to specific year

#### Parameters

##### currentDate

`Date`

##### year

`number`

#### Returns

`Date`

#### Implementation of

[`INavigationService`](../interfaces/INavigationService.md).[`navigateToYear`](../interfaces/INavigationService.md#navigatetoyear)

***

### navigateToYearRange()

> **navigateToYearRange**(`currentYear`, `rangeSize`, `direction`): `number`

Defined in: [Date/services/navigation.service.ts:80](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/services/navigation.service.ts#L80)

Navigate to specific year range

#### Parameters

##### currentYear

`number`

The current year

##### rangeSize

`number`

The number of years in the range

##### direction

`number`

Direction to navigate (1 for next range, -1 for previous range)

#### Returns

`number`

The new base year for the range

#### Implementation of

[`INavigationService`](../interfaces/INavigationService.md).[`navigateToYearRange`](../interfaces/INavigationService.md#navigatetoyearrange)
