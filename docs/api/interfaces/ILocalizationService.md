[**@uplink-protocol/form-controller v0.1.1**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / ILocalizationService

# Interface: ILocalizationService

Defined in: [interfaces/localization.service.interfaces.ts:5](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/interfaces/localization.service.interfaces.ts#L5)

Localization service interface
Responsible for providing internationalization and localization functions

## Methods

### formatDate()

> **formatDate**(`date`, `options?`): `string`

Defined in: [interfaces/localization.service.interfaces.ts:34](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/interfaces/localization.service.interfaces.ts#L34)

Format a date according to the locale

#### Parameters

##### date

`Date`

##### options?

`DateTimeFormatOptions`

#### Returns

`string`

***

### getLocale()

> **getLocale**(): `string`

Defined in: [interfaces/localization.service.interfaces.ts:24](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/interfaces/localization.service.interfaces.ts#L24)

Get current locale

#### Returns

`string`

***

### getMonthNames()

> **getMonthNames**(): `string`[]

Defined in: [interfaces/localization.service.interfaces.ts:9](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/interfaces/localization.service.interfaces.ts#L9)

Get localized month names

#### Returns

`string`[]

***

### getShortWeekdayNames()

> **getShortWeekdayNames**(): `string`[]

Defined in: [interfaces/localization.service.interfaces.ts:19](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/interfaces/localization.service.interfaces.ts#L19)

Get short localized weekday names

#### Returns

`string`[]

***

### getWeekdayNames()

> **getWeekdayNames**(): `string`[]

Defined in: [interfaces/localization.service.interfaces.ts:14](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/interfaces/localization.service.interfaces.ts#L14)

Get localized weekday names

#### Returns

`string`[]

***

### setLocale()

> **setLocale**(`locale`): `void`

Defined in: [interfaces/localization.service.interfaces.ts:29](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/interfaces/localization.service.interfaces.ts#L29)

Set locale

#### Parameters

##### locale

`string`

#### Returns

`void`
