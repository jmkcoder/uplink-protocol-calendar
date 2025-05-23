[**@uplink-protocol/form-controller v0.1.3**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / AccessibilityManagerService

# Class: AccessibilityManagerService

Defined in: [services/accessibility-manager.service.ts:13](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b7ce0ea27c5f5fc885d8d11198b3335a1464aa83/src/services/accessibility-manager.service.ts#L13)

Implementation of AccessibilityManagerService
Handles keyboard navigation, focus management, and accessibility functions
by coordinating between AccessibilityService and other services

## Implements

- [`IAccessibilityManagerService`](../interfaces/IAccessibilityManagerService.md)

## Constructors

### Constructor

> **new AccessibilityManagerService**(`_accessibilityService`, `_viewStateService`): `AccessibilityManagerService`

Defined in: [services/accessibility-manager.service.ts:14](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b7ce0ea27c5f5fc885d8d11198b3335a1464aa83/src/services/accessibility-manager.service.ts#L14)

#### Parameters

##### \_accessibilityService

[`IAccessibilityService`](../interfaces/IAccessibilityService.md)

##### \_viewStateService

[`IViewStateService`](../interfaces/IViewStateService.md)

#### Returns

`AccessibilityManagerService`

## Methods

### getAccessibleDateLabel()

> **getAccessibleDateLabel**(`date`, `localeMonthNameFn?`): `string`

Defined in: [services/accessibility-manager.service.ts:91](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b7ce0ea27c5f5fc885d8d11198b3335a1464aa83/src/services/accessibility-manager.service.ts#L91)

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

[`IAccessibilityManagerService`](../interfaces/IAccessibilityManagerService.md).[`getAccessibleDateLabel`](../interfaces/IAccessibilityManagerService.md#getaccessibledatelabel)

***

### getDateStateDescription()

> **getDateStateDescription**(`date`, `selectedDate`, `selectedDateRange`, `isRangeSelection`, `isDateDisabledFn`, `isTodayFn`): `string`

Defined in: [services/accessibility-manager.service.ts:112](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b7ce0ea27c5f5fc885d8d11198b3335a1464aa83/src/services/accessibility-manager.service.ts#L112)

Get date state description for screen readers

#### Parameters

##### date

`Date`

The date to check

##### selectedDate

Currently selected date

`null` | `Date`

##### selectedDateRange

[`DateRange`](../interfaces/DateRange.md)

Currently selected date range

##### isRangeSelection

`boolean`

Whether range selection mode is active

##### isDateDisabledFn

(`date`) => `boolean`

Function to check if date is disabled

##### isTodayFn

(`date`) => `boolean`

Function to check if date is today

#### Returns

`string`

State description string

#### Implementation of

[`IAccessibilityManagerService`](../interfaces/IAccessibilityManagerService.md).[`getDateStateDescription`](../interfaces/IAccessibilityManagerService.md#getdatestatedescription)

***

### manageFocus()

> **manageFocus**(`direction`, `focusedDate`, `selectedDate`, `currentDate`, `calendarDaysBinding`, `generateCalendarDaysFn`, `updateDateFn?`): `Date`

Defined in: [services/accessibility-manager.service.ts:30](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b7ce0ea27c5f5fc885d8d11198b3335a1464aa83/src/services/accessibility-manager.service.ts#L30)

Handles focus management including view updates and navigation

#### Parameters

##### direction

Direction to move focus

`"right"` | `"left"` | `"up"` | `"down"` | `"start"` | `"end"` | `"prevMonth"` | `"nextMonth"` | `"prevYear"` | `"nextYear"`

##### focusedDate

Currently focused date

`null` | `Date`

##### selectedDate

Selected date as fallback

`null` | `Date`

##### currentDate

`Date`

Current displayed date

##### calendarDaysBinding

`Binding`\<[`CalendarDate`](../interfaces/CalendarDate.md)[]\>

Binding for calendar days

##### generateCalendarDaysFn

() => [`CalendarDate`](../interfaces/CalendarDate.md)[]

Function to generate calendar days

##### updateDateFn?

(`date`) => `void`

Function to handle date updates if navigation is needed

#### Returns

`Date`

The new focused date

#### Implementation of

[`IAccessibilityManagerService`](../interfaces/IAccessibilityManagerService.md).[`manageFocus`](../interfaces/IAccessibilityManagerService.md#managefocus)

***

### selectFocusedDate()

> **selectFocusedDate**(`focusedDate`, `selectDateFn`): `boolean`

Defined in: [services/accessibility-manager.service.ts:74](https://github.com/jmkcoder/uplink-protocol-calendar/blob/b7ce0ea27c5f5fc885d8d11198b3335a1464aa83/src/services/accessibility-manager.service.ts#L74)

Select the currently focused date

#### Parameters

##### focusedDate

Currently focused date

`null` | `Date`

##### selectDateFn

(`date`) => `void`

Function to select the date

#### Returns

`boolean`

Boolean indicating if a selection was made

#### Implementation of

[`IAccessibilityManagerService`](../interfaces/IAccessibilityManagerService.md).[`selectFocusedDate`](../interfaces/IAccessibilityManagerService.md#selectfocuseddate)
