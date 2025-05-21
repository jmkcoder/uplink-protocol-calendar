[**@uplink-protocol/form-controller v0.1.0**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / NavigationService

# Class: NavigationService

Defined in: services/navigation.service.ts:7

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

> **navigateToDate**(`date`): `Date`

Defined in: services/navigation.service.ts:66

Navigate to specific date

#### Parameters

##### date

`Date`

#### Returns

`Date`

#### Implementation of

[`INavigationService`](../interfaces/INavigationService.md).[`navigateToDate`](../interfaces/INavigationService.md#navigatetodate)

***

### navigateToMonth()

> **navigateToMonth**(`currentDate`, `month`): `Date`

Defined in: services/navigation.service.ts:47

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

Defined in: services/navigation.service.ts:11

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

Defined in: services/navigation.service.ts:29

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

Defined in: services/navigation.service.ts:20

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

Defined in: services/navigation.service.ts:38

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

Defined in: services/navigation.service.ts:73

Navigate to today

#### Returns

`Date`

#### Implementation of

[`INavigationService`](../interfaces/INavigationService.md).[`navigateToToday`](../interfaces/INavigationService.md#navigatetotoday)

***

### navigateToYear()

> **navigateToYear**(`currentDate`, `year`): `Date`

Defined in: services/navigation.service.ts:57

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
