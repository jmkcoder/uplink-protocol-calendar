[**@uplink-protocol/form-controller v0.3.1**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / IAccessibilityManagerService

# Interface: IAccessibilityManagerService

Defined in: [Date/interfaces/accessibility-manager.service.interfaces.ts:8](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/interfaces/accessibility-manager.service.interfaces.ts#L8)

Interface for the AccessibilityManagerService
Coordinates accessibility features across multiple services

## Methods

### getAccessibleDateLabel()

> **getAccessibleDateLabel**(`date`, `localeMonthNameFn?`): `string`

Defined in: [Date/interfaces/accessibility-manager.service.interfaces.ts:33](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/interfaces/accessibility-manager.service.interfaces.ts#L33)

Get accessible date label for screen readers

#### Parameters

##### date

`Date`

##### localeMonthNameFn?

(`month`) => `string`

#### Returns

`string`

***

### getAriaLabel()

> **getAriaLabel**(`date`): `string`

Defined in: [Date/interfaces/accessibility-manager.service.interfaces.ts:53](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/interfaces/accessibility-manager.service.interfaces.ts#L53)

Get ARIA label for a date

#### Parameters

##### date

`Date`

#### Returns

`string`

***

### getAriaLabelForMonth()

> **getAriaLabelForMonth**(`month`, `year`): `string`

Defined in: [Date/interfaces/accessibility-manager.service.interfaces.ts:58](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/interfaces/accessibility-manager.service.interfaces.ts#L58)

Get ARIA label for month

#### Parameters

##### month

`number`

##### year

`number`

#### Returns

`string`

***

### getAriaLabelForYear()

> **getAriaLabelForYear**(`year`): `string`

Defined in: [Date/interfaces/accessibility-manager.service.interfaces.ts:63](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/interfaces/accessibility-manager.service.interfaces.ts#L63)

Get ARIA label for year

#### Parameters

##### year

`number`

#### Returns

`string`

***

### getDateStateDescription()

> **getDateStateDescription**(`date`, `selectedDate`, `selectedDateRange`, `isRangeSelection`, `isDateDisabledFn`, `isTodayFn`): `string`

Defined in: [Date/interfaces/accessibility-manager.service.interfaces.ts:41](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/interfaces/accessibility-manager.service.interfaces.ts#L41)

Get date state description for screen readers

#### Parameters

##### date

`Date`

##### selectedDate

`Date` | `null`

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

Defined in: [Date/interfaces/accessibility-manager.service.interfaces.ts:12](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/interfaces/accessibility-manager.service.interfaces.ts#L12)

Handles focus management including view updates and navigation

#### Parameters

##### direction

`"right"` | `"left"` | `"up"` | `"down"` | `"start"` | `"end"` | `"prevMonth"` | `"nextMonth"` | `"prevYear"` | `"nextYear"`

##### focusedDate

`Date` | `null`

##### selectedDate

`Date` | `null`

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

Defined in: [Date/interfaces/accessibility-manager.service.interfaces.ts:25](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Date/interfaces/accessibility-manager.service.interfaces.ts#L25)

Select the currently focused date

#### Parameters

##### focusedDate

`Date` | `null`

##### selectDateFn

(`date`) => `void`

#### Returns

`boolean`
