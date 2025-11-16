[**@uplink-protocol/form-controller v0.3.1**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / CalendarEventValidationService

# Class: CalendarEventValidationService

Defined in: [Event/services/event-validation.service.ts:15](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-validation.service.ts#L15)

Implementation of event validation service
Provides comprehensive validation for events including business rules

## Implements

- [`IEventValidationService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventValidationService.md)

## Constructors

### Constructor

> **new CalendarEventValidationService**(): `EventValidationService`

#### Returns

`EventValidationService`

## Methods

### addValidationRule()

> **addValidationRule**(`rule`): `void`

Defined in: [Event/services/event-validation.service.ts:344](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-validation.service.ts#L344)

Add custom validation rule

#### Parameters

##### rule

[`ValidationRule`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/ValidationRule.md)

#### Returns

`void`

#### Implementation of

[`IEventValidationService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventValidationService.md).[`addValidationRule`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventValidationService.md#addvalidationrule)

***

### checkConflicts()

> **checkConflicts**(`event`, `existingEvents`): [`EventConflict`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/EventConflict.md)[]

Defined in: [Event/services/event-validation.service.ts:195](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-validation.service.ts#L195)

Check for conflicts

#### Parameters

##### event

[`CalendarEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CalendarEvent.md) | [`CreateEventInput`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CreateEventInput.md)

##### existingEvents

[`CalendarEvent`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CalendarEvent.md)[]

#### Returns

[`EventConflict`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/EventConflict.md)[]

#### Implementation of

[`IEventValidationService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventValidationService.md).[`checkConflicts`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventValidationService.md#checkconflicts)

***

### getValidationRules()

> **getValidationRules**(): [`ValidationRule`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/ValidationRule.md)[]

Defined in: [Event/services/event-validation.service.ts:352](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-validation.service.ts#L352)

Get all validation rules

#### Returns

[`ValidationRule`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/ValidationRule.md)[]

#### Implementation of

[`IEventValidationService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventValidationService.md).[`getValidationRules`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventValidationService.md#getvalidationrules)

***

### getValidationStatistics()

> **getValidationStatistics**(): `object`

Defined in: [Event/services/event-validation.service.ts:368](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-validation.service.ts#L368)

#### Returns

`object`

##### conflictsDetected

> **conflictsDetected**: `number`

##### failedValidations

> **failedValidations**: `number`

##### passedValidations

> **passedValidations**: `number`

##### totalValidations

> **totalValidations**: `number`

***

### getValidationStats()

> **getValidationStats**(): `object`

Defined in: [Event/services/event-validation.service.ts:364](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-validation.service.ts#L364)

Get validation statistics

#### Returns

`object`

##### conflictsDetected

> **conflictsDetected**: `number` = `0`

##### failedValidations

> **failedValidations**: `number` = `0`

##### passedValidations

> **passedValidations**: `number` = `0`

##### totalValidations

> **totalValidations**: `number` = `0`

#### Implementation of

[`IEventValidationService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventValidationService.md).[`getValidationStats`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventValidationService.md#getvalidationstats)

***

### initialize()

> **initialize**(`businessRules?`, `conflictConfig?`): `void`

Defined in: [Event/services/event-validation.service.ts:31](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-validation.service.ts#L31)

Initialize validation service

#### Parameters

##### businessRules?

[`BusinessRuleConfig`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/BusinessRuleConfig.md)

##### conflictConfig?

[`ConflictDetectionConfig`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/ConflictDetectionConfig.md)

#### Returns

`void`

#### Implementation of

[`IEventValidationService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventValidationService.md).[`initialize`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventValidationService.md#initialize)

***

### removeValidationRule()

> **removeValidationRule**(`ruleId`): `void`

Defined in: [Event/services/event-validation.service.ts:348](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-validation.service.ts#L348)

Remove validation rule

#### Parameters

##### ruleId

`string`

#### Returns

`void`

#### Implementation of

[`IEventValidationService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventValidationService.md).[`removeValidationRule`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventValidationService.md#removevalidationrule)

***

### updateBusinessRules()

> **updateBusinessRules**(`rules`): `void`

Defined in: [Event/services/event-validation.service.ts:356](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-validation.service.ts#L356)

Update business rules

#### Parameters

##### rules

[`BusinessRuleConfig`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/BusinessRuleConfig.md)

#### Returns

`void`

#### Implementation of

[`IEventValidationService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventValidationService.md).[`updateBusinessRules`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventValidationService.md#updatebusinessrules)

***

### updateConflictDetection()

> **updateConflictDetection**(`config`): `void`

Defined in: [Event/services/event-validation.service.ts:360](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-validation.service.ts#L360)

Update conflict detection settings

#### Parameters

##### config

[`ConflictDetectionConfig`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/ConflictDetectionConfig.md)

#### Returns

`void`

#### Implementation of

[`IEventValidationService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventValidationService.md).[`updateConflictDetection`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventValidationService.md#updateconflictdetection)

***

### validateAttendees()

> **validateAttendees**(`attendees`): [`ValidationRuleResult`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/ValidationRuleResult.md)

Defined in: [Event/services/event-validation.service.ts:309](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-validation.service.ts#L309)

Validate attendees

#### Parameters

##### attendees

`any`[]

#### Returns

[`ValidationRuleResult`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/ValidationRuleResult.md)

#### Implementation of

[`IEventValidationService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventValidationService.md).[`validateAttendees`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventValidationService.md#validateattendees)

***

### validateDateTime()

> **validateDateTime**(`dateTime`): [`ValidationRuleResult`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/ValidationRuleResult.md)

Defined in: [Event/services/event-validation.service.ts:255](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-validation.service.ts#L255)

Validate date and time

#### Parameters

##### dateTime

`any`

#### Returns

[`ValidationRuleResult`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/ValidationRuleResult.md)

#### Implementation of

[`IEventValidationService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventValidationService.md).[`validateDateTime`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventValidationService.md#validatedatetime)

***

### validateForCreate()

> **validateForCreate**(`input`, `context?`): `Promise`\<[`EventValidationResult`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/EventValidationResult.md)\>

Defined in: [Event/services/event-validation.service.ts:41](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-validation.service.ts#L41)

Validate event for creation

#### Parameters

##### input

[`CreateEventInput`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/CreateEventInput.md)

##### context?

[`ValidationContext`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/ValidationContext.md)

#### Returns

`Promise`\<[`EventValidationResult`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/EventValidationResult.md)\>

#### Implementation of

[`IEventValidationService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventValidationService.md).[`validateForCreate`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventValidationService.md#validateforcreate)

***

### validateForDelete()

> **validateForDelete**(`eventId`, `_context?`): `Promise`\<[`EventValidationResult`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/EventValidationResult.md)\>

Defined in: [Event/services/event-validation.service.ts:167](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-validation.service.ts#L167)

Validate event for deletion

#### Parameters

##### eventId

`string`

##### \_context?

[`ValidationContext`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/ValidationContext.md)

#### Returns

`Promise`\<[`EventValidationResult`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/EventValidationResult.md)\>

#### Implementation of

[`IEventValidationService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventValidationService.md).[`validateForDelete`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventValidationService.md#validatefordelete)

***

### validateForUpdate()

> **validateForUpdate**(`input`, `context?`): `Promise`\<[`EventValidationResult`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/EventValidationResult.md)\>

Defined in: [Event/services/event-validation.service.ts:101](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-validation.service.ts#L101)

Validate event for update

#### Parameters

##### input

[`UpdateEventInput`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/UpdateEventInput.md)

##### context?

[`ValidationContext`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/ValidationContext.md)

#### Returns

`Promise`\<[`EventValidationResult`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/EventValidationResult.md)\>

#### Implementation of

[`IEventValidationService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventValidationService.md).[`validateForUpdate`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventValidationService.md#validateforupdate)

***

### validateRecurrence()

> **validateRecurrence**(`recurrence`): [`ValidationRuleResult`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/ValidationRuleResult.md)

Defined in: [Event/services/event-validation.service.ts:328](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/services/event-validation.service.ts#L328)

Validate recurrence

#### Parameters

##### recurrence

`any`

#### Returns

[`ValidationRuleResult`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/ValidationRuleResult.md)

#### Implementation of

[`IEventValidationService`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventValidationService.md).[`validateRecurrence`](../@uplink-protocol/namespaces/EventInterfaces/interfaces/IEventValidationService.md#validaterecurrence)
