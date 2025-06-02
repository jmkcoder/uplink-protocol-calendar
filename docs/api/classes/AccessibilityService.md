[**@uplink-protocol/form-controller v0.2.1**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / AccessibilityService

# Class: AccessibilityService

Defined in: [services/accessibility.service.ts:9](https://github.com/jmkcoder/uplink-protocol-calendar/blob/311e0b81efba7399cf1c367c0a2007aa66f3b830/src/services/accessibility.service.ts#L9)

Implementation of AccessibilityService
Responsible for accessibility-related functionality such as screen reader support
and keyboard navigation

## Implements

- [`IAccessibilityService`](../interfaces/IAccessibilityService.md)

## Constructors

### Constructor

> **new AccessibilityService**(): `AccessibilityService`

#### Returns

`AccessibilityService`

## Methods

### getAccessibleDateLabel()

> **getAccessibleDateLabel**(`date`, `localeMonthNameFn?`): `string`

Defined in: [services/accessibility.service.ts:16](https://github.com/jmkcoder/uplink-protocol-calendar/blob/311e0b81efba7399cf1c367c0a2007aa66f3b830/src/services/accessibility.service.ts#L16)

Get accessible date label for screen readers

#### Parameters

##### date

`Date`

The date to get a label for

##### localeMonthNameFn?

(`month`) => `string`

Optional function to get localized month name

#### Returns

`string`

Accessible date label string

#### Implementation of

[`IAccessibilityService`](../interfaces/IAccessibilityService.md).[`getAccessibleDateLabel`](../interfaces/IAccessibilityService.md#getaccessibledatelabel)

***

### getDateStateDescription()

> **getDateStateDescription**(`date`, `currentState`): `string`

Defined in: [services/accessibility.service.ts:47](https://github.com/jmkcoder/uplink-protocol-calendar/blob/311e0b81efba7399cf1c367c0a2007aa66f3b830/src/services/accessibility.service.ts#L47)

Get date state description for screen readers (today, selected, disabled, etc.)

#### Parameters

##### date

`Date`

The date to check

##### currentState

Current state data required for determination

###### isDateDisabledFn

(`date`) => `boolean`

###### isRangeSelection

`boolean`

###### isTodayFn

(`date`) => `boolean`

###### selectedDate

`null` \| `Date`

###### selectedDateRange

[`DateRange`](../interfaces/DateRange.md)

#### Returns

`string`

State description string

#### Implementation of

[`IAccessibilityService`](../interfaces/IAccessibilityService.md).[`getDateStateDescription`](../interfaces/IAccessibilityService.md#getdatestatedescription)

***

### moveFocus()

> **moveFocus**(`direction`, `currentFocusedDate`, `selectedDate`): `Date`

Defined in: [services/accessibility.service.ts:125](https://github.com/jmkcoder/uplink-protocol-calendar/blob/311e0b81efba7399cf1c367c0a2007aa66f3b830/src/services/accessibility.service.ts#L125)

Move focus to a new date

#### Parameters

##### direction

Direction to move focus

`"right"` | `"left"` | `"up"` | `"down"` | `"start"` | `"end"` | `"prevMonth"` | `"nextMonth"` | `"prevYear"` | `"nextYear"`

##### currentFocusedDate

Currently focused date

`null` | `Date`

##### selectedDate

Currently selected date (fallback if no focused date)

`null` | `Date`

#### Returns

`Date`

New focused date

#### Implementation of

[`IAccessibilityService`](../interfaces/IAccessibilityService.md).[`moveFocus`](../interfaces/IAccessibilityService.md#movefocus)

***

### selectFocusedDate()

> **selectFocusedDate**(`focusedDate`, `selectDateFn`): `boolean`

Defined in: [services/accessibility.service.ts:225](https://github.com/jmkcoder/uplink-protocol-calendar/blob/311e0b81efba7399cf1c367c0a2007aa66f3b830/src/services/accessibility.service.ts#L225)

Handle selecting the currently focused date

#### Parameters

##### focusedDate

Currently focused date

`null` | `Date`

##### selectDateFn

(`date`) => `void`

Function to call to select the date

#### Returns

`boolean`

Boolean indicating if a selection was made

#### Implementation of

[`IAccessibilityService`](../interfaces/IAccessibilityService.md).[`selectFocusedDate`](../interfaces/IAccessibilityService.md#selectfocuseddate)
