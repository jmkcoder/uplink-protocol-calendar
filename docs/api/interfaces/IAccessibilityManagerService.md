[**@uplink-protocol/form-controller v0.3.0**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / IAccessibilityManagerService

# Interface: IAccessibilityManagerService

Defined in: [Date/interfaces/accessibility-manager.service.interfaces.ts:8](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/interfaces/accessibility-manager.service.interfaces.ts#L8)

Interface for the AccessibilityManagerService
Coordinates accessibility features across multiple services

## Methods

### getAccessibleDateLabel()

> **getAccessibleDateLabel**(`date`, `localeMonthNameFn?`): `string`

Defined in: [Date/interfaces/accessibility-manager.service.interfaces.ts:33](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/interfaces/accessibility-manager.service.interfaces.ts#L33)

Get accessible date label for screen readers

#### Parameters

##### date

`Date`

##### localeMonthNameFn?

(`month`) => `string`

#### Returns

`string`

***

### getDateStateDescription()

> **getDateStateDescription**(`date`, `selectedDate`, `selectedDateRange`, `isRangeSelection`, `isDateDisabledFn`, `isTodayFn`): `string`

Defined in: [Date/interfaces/accessibility-manager.service.interfaces.ts:41](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/interfaces/accessibility-manager.service.interfaces.ts#L41)

Get date state description for screen readers

#### Parameters

##### date

`Date`

##### selectedDate

`null` | `Date`

##### selectedDateRange

[`DateRange`](DateRange.md)

##### isRangeSelection

`boolean`

##### isDateDisabledFn

(`date`) => `boolean`

##### isTodayFn

(`date`) => `boolean`

#### Returns

`string`

***

### manageFocus()

> **manageFocus**(`direction`, `focusedDate`, `selectedDate`, `currentDate`, `calendarDaysBinding`, `generateCalendarDaysFn`, `updateDateFn?`): `Date`

Defined in: [Date/interfaces/accessibility-manager.service.interfaces.ts:12](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/interfaces/accessibility-manager.service.interfaces.ts#L12)

Handles focus management including view updates and navigation

#### Parameters

##### direction

`"right"` | `"left"` | `"up"` | `"down"` | `"start"` | `"end"` | `"prevMonth"` | `"nextMonth"` | `"prevYear"` | `"nextYear"`

##### focusedDate

`null` | `Date`

##### selectedDate

`null` | `Date`

##### currentDate

`Date`

##### calendarDaysBinding

`Binding`\<[`CalendarDate`](CalendarDate.md)[]\>

##### generateCalendarDaysFn

() => [`CalendarDate`](CalendarDate.md)[]

##### updateDateFn?

(`date`) => `void`

#### Returns

`Date`

***

### selectFocusedDate()

> **selectFocusedDate**(`focusedDate`, `selectDateFn`): `boolean`

Defined in: [Date/interfaces/accessibility-manager.service.interfaces.ts:25](https://github.com/jmkcoder/uplink-protocol-calendar/blob/c7c94af75a3a7e438811c9ee3008f982792d2fb8/src/Date/interfaces/accessibility-manager.service.interfaces.ts#L25)

Select the currently focused date

#### Parameters

##### focusedDate

`null` | `Date`

##### selectDateFn

(`date`) => `void`

#### Returns

`boolean`
