[**@uplink-protocol/form-controller v0.1.0**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / INavigationService

# Interface: INavigationService

Defined in: interfaces/navigation.service.interfaces.ts:5

Navigation service interface
Responsible for handling calendar navigation operations

## Methods

### navigateToDate()

> **navigateToDate**(`date`): `Date`

Defined in: interfaces/navigation.service.interfaces.ts:39

Navigate to specific date

#### Parameters

##### date

`Date`

#### Returns

`Date`

***

### navigateToMonth()

> **navigateToMonth**(`currentDate`, `month`): `Date`

Defined in: interfaces/navigation.service.interfaces.ts:29

Navigate to specific month

#### Parameters

##### currentDate

`Date`

##### month

`number`

#### Returns

`Date`

***

### navigateToNextMonth()

> **navigateToNextMonth**(`currentDate`): `Date`

Defined in: interfaces/navigation.service.interfaces.ts:9

Navigate to next month

#### Parameters

##### currentDate

`Date`

#### Returns

`Date`

***

### navigateToNextYear()

> **navigateToNextYear**(`currentDate`): `Date`

Defined in: interfaces/navigation.service.interfaces.ts:19

Navigate to next year

#### Parameters

##### currentDate

`Date`

#### Returns

`Date`

***

### navigateToPreviousMonth()

> **navigateToPreviousMonth**(`currentDate`): `Date`

Defined in: interfaces/navigation.service.interfaces.ts:14

Navigate to previous month

#### Parameters

##### currentDate

`Date`

#### Returns

`Date`

***

### navigateToPreviousYear()

> **navigateToPreviousYear**(`currentDate`): `Date`

Defined in: interfaces/navigation.service.interfaces.ts:24

Navigate to previous year

#### Parameters

##### currentDate

`Date`

#### Returns

`Date`

***

### navigateToToday()

> **navigateToToday**(): `Date`

Defined in: interfaces/navigation.service.interfaces.ts:44

Navigate to today

#### Returns

`Date`

***

### navigateToYear()

> **navigateToYear**(`currentDate`, `year`): `Date`

Defined in: interfaces/navigation.service.interfaces.ts:34

Navigate to specific year

#### Parameters

##### currentDate

`Date`

##### year

`number`

#### Returns

`Date`
