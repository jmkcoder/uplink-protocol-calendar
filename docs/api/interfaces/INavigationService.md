[**@uplink-protocol/form-controller v0.2.0**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / INavigationService

# Interface: INavigationService

Defined in: [interfaces/navigation.service.interfaces.ts:5](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/interfaces/navigation.service.interfaces.ts#L5)

Navigation service interface
Responsible for handling calendar navigation operations

## Methods

### navigateToDate()

> **navigateToDate**(`currentDate`, `targetDate?`): `Date`

Defined in: [interfaces/navigation.service.interfaces.ts:48](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/interfaces/navigation.service.interfaces.ts#L48)

#### Parameters

##### currentDate

`null` | `Date`

##### targetDate?

`Date`

#### Returns

`Date`

***

### navigateToMonth()

> **navigateToMonth**(`currentDate`, `month`): `Date`

Defined in: [interfaces/navigation.service.interfaces.ts:29](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/interfaces/navigation.service.interfaces.ts#L29)

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

Defined in: [interfaces/navigation.service.interfaces.ts:9](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/interfaces/navigation.service.interfaces.ts#L9)

Navigate to next month

#### Parameters

##### currentDate

`Date`

#### Returns

`Date`

***

### navigateToNextYear()

> **navigateToNextYear**(`currentDate`): `Date`

Defined in: [interfaces/navigation.service.interfaces.ts:19](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/interfaces/navigation.service.interfaces.ts#L19)

Navigate to next year

#### Parameters

##### currentDate

`Date`

#### Returns

`Date`

***

### navigateToPreviousMonth()

> **navigateToPreviousMonth**(`currentDate`): `Date`

Defined in: [interfaces/navigation.service.interfaces.ts:14](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/interfaces/navigation.service.interfaces.ts#L14)

Navigate to previous month

#### Parameters

##### currentDate

`Date`

#### Returns

`Date`

***

### navigateToPreviousYear()

> **navigateToPreviousYear**(`currentDate`): `Date`

Defined in: [interfaces/navigation.service.interfaces.ts:24](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/interfaces/navigation.service.interfaces.ts#L24)

Navigate to previous year

#### Parameters

##### currentDate

`Date`

#### Returns

`Date`

***

### navigateToToday()

> **navigateToToday**(`currentDate?`): `Date`

Defined in: [interfaces/navigation.service.interfaces.ts:54](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/interfaces/navigation.service.interfaces.ts#L54)

Navigate to today

#### Parameters

##### currentDate?

`Date`

The current date (optional)

#### Returns

`Date`

***

### navigateToYear()

> **navigateToYear**(`currentDate`, `year`): `Date`

Defined in: [interfaces/navigation.service.interfaces.ts:34](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/interfaces/navigation.service.interfaces.ts#L34)

Navigate to specific year

#### Parameters

##### currentDate

`Date`

##### year

`number`

#### Returns

`Date`

***

### navigateToYearRange()

> **navigateToYearRange**(`currentYear`, `rangeSize`, `direction`): `number`

Defined in: [interfaces/navigation.service.interfaces.ts:43](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4b7d7626907cceb44afccd43a3ead251daf6f222/src/interfaces/navigation.service.interfaces.ts#L43)

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
