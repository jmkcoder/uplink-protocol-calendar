[**@uplink-protocol/form-controller v0.2.3**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / IAccessibilityService

# Interface: IAccessibilityService

Defined in: [interfaces/accessibility.service.interfaces.ts:8](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/interfaces/accessibility.service.interfaces.ts#L8)

Interface for the AccessibilityService
Responsible for accessibility-related functionality such as screen reader support
and keyboard navigation

## Methods

### getAccessibleDateLabel()

> **getAccessibleDateLabel**(`date`, `localeMonthNameFn?`): `string`

Defined in: [interfaces/accessibility.service.interfaces.ts:14](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/interfaces/accessibility.service.interfaces.ts#L14)

Get accessible date label for screen readers

#### Parameters

##### date

`Date`

The date to get a label for

##### localeMonthNameFn?

(`month`) => `string`

#### Returns

`string`

Accessible date label string

***

### getDateStateDescription()

> **getDateStateDescription**(`date`, `currentState`): `string`

Defined in: [interfaces/accessibility.service.interfaces.ts:22](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/interfaces/accessibility.service.interfaces.ts#L22)

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

[`DateRange`](DateRange.md)

#### Returns

`string`

State description string

***

### moveFocus()

> **moveFocus**(`direction`, `currentFocusedDate`, `selectedDate`): `Date`

Defined in: [interfaces/accessibility.service.interfaces.ts:40](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/interfaces/accessibility.service.interfaces.ts#L40)

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

***

### selectFocusedDate()

> **selectFocusedDate**(`focusedDate`, `selectDateFn`): `boolean`

Defined in: [interfaces/accessibility.service.interfaces.ts:52](https://github.com/jmkcoder/uplink-protocol-calendar/blob/dfbd1d9163b3335ef17060f21cb7756b2a9c621d/src/interfaces/accessibility.service.interfaces.ts#L52)

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
