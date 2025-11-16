[**@uplink-protocol/form-controller v0.3.1**](../../../../README.md)

***

[@uplink-protocol/form-controller](../../../../globals.md) / [EventInterfaces](../README.md) / IEventValidationService

# Interface: IEventValidationService

Defined in: [Event/interfaces/event-validation.interfaces.ts:121](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-validation.interfaces.ts#L121)

Event validation service interface

## Methods

### addValidationRule()

> **addValidationRule**(`rule`): `void`

Defined in: [Event/interfaces/event-validation.interfaces.ts:180](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-validation.interfaces.ts#L180)

Add custom validation rule

#### Parameters

##### rule

[`ValidationRule`](ValidationRule.md)

#### Returns

`void`

***

### checkConflicts()

> **checkConflicts**(`event`, `existingEvents`): [`EventConflict`](EventConflict.md)[]

Defined in: [Event/interfaces/event-validation.interfaces.ts:157](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-validation.interfaces.ts#L157)

Check for conflicts

#### Parameters

##### event

[`CalendarEvent`](CalendarEvent.md) | [`CreateEventInput`](CreateEventInput.md)

##### existingEvents

[`CalendarEvent`](CalendarEvent.md)[]

#### Returns

[`EventConflict`](EventConflict.md)[]

***

### getValidationRules()

> **getValidationRules**(): [`ValidationRule`](ValidationRule.md)[]

Defined in: [Event/interfaces/event-validation.interfaces.ts:190](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-validation.interfaces.ts#L190)

Get all validation rules

#### Returns

[`ValidationRule`](ValidationRule.md)[]

***

### getValidationStats()

> **getValidationStats**(): `object`

Defined in: [Event/interfaces/event-validation.interfaces.ts:205](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-validation.interfaces.ts#L205)

Get validation statistics

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

### initialize()

> **initialize**(`businessRules?`, `conflictConfig?`): `void`

Defined in: [Event/interfaces/event-validation.interfaces.ts:125](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-validation.interfaces.ts#L125)

Initialize validation service

#### Parameters

##### businessRules?

[`BusinessRuleConfig`](BusinessRuleConfig.md)

##### conflictConfig?

[`ConflictDetectionConfig`](ConflictDetectionConfig.md)

#### Returns

`void`

***

### removeValidationRule()

> **removeValidationRule**(`ruleId`): `void`

Defined in: [Event/interfaces/event-validation.interfaces.ts:185](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-validation.interfaces.ts#L185)

Remove validation rule

#### Parameters

##### ruleId

`string`

#### Returns

`void`

***

### updateBusinessRules()

> **updateBusinessRules**(`rules`): `void`

Defined in: [Event/interfaces/event-validation.interfaces.ts:195](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-validation.interfaces.ts#L195)

Update business rules

#### Parameters

##### rules

[`BusinessRuleConfig`](BusinessRuleConfig.md)

#### Returns

`void`

***

### updateConflictDetection()

> **updateConflictDetection**(`config`): `void`

Defined in: [Event/interfaces/event-validation.interfaces.ts:200](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-validation.interfaces.ts#L200)

Update conflict detection settings

#### Parameters

##### config

[`ConflictDetectionConfig`](ConflictDetectionConfig.md)

#### Returns

`void`

***

### validateAttendees()

> **validateAttendees**(`attendees`): [`ValidationRuleResult`](ValidationRuleResult.md)

Defined in: [Event/interfaces/event-validation.interfaces.ts:170](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-validation.interfaces.ts#L170)

Validate attendees

#### Parameters

##### attendees

`any`[]

#### Returns

[`ValidationRuleResult`](ValidationRuleResult.md)

***

### validateDateTime()

> **validateDateTime**(`dateTime`): [`ValidationRuleResult`](ValidationRuleResult.md)

Defined in: [Event/interfaces/event-validation.interfaces.ts:165](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-validation.interfaces.ts#L165)

Validate date and time

#### Parameters

##### dateTime

`any`

#### Returns

[`ValidationRuleResult`](ValidationRuleResult.md)

***

### validateForCreate()

> **validateForCreate**(`input`, `context?`): `Promise`\<[`EventValidationResult`](EventValidationResult.md)\>

Defined in: [Event/interfaces/event-validation.interfaces.ts:133](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-validation.interfaces.ts#L133)

Validate event for creation

#### Parameters

##### input

[`CreateEventInput`](CreateEventInput.md)

##### context?

[`ValidationContext`](ValidationContext.md)

#### Returns

`Promise`\<[`EventValidationResult`](EventValidationResult.md)\>

***

### validateForDelete()

> **validateForDelete**(`eventId`, `context?`): `Promise`\<[`EventValidationResult`](EventValidationResult.md)\>

Defined in: [Event/interfaces/event-validation.interfaces.ts:149](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-validation.interfaces.ts#L149)

Validate event for deletion

#### Parameters

##### eventId

`string`

##### context?

[`ValidationContext`](ValidationContext.md)

#### Returns

`Promise`\<[`EventValidationResult`](EventValidationResult.md)\>

***

### validateForUpdate()

> **validateForUpdate**(`input`, `context?`): `Promise`\<[`EventValidationResult`](EventValidationResult.md)\>

Defined in: [Event/interfaces/event-validation.interfaces.ts:141](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-validation.interfaces.ts#L141)

Validate event for update

#### Parameters

##### input

[`UpdateEventInput`](UpdateEventInput.md)

##### context?

[`ValidationContext`](ValidationContext.md)

#### Returns

`Promise`\<[`EventValidationResult`](EventValidationResult.md)\>

***

### validateRecurrence()

> **validateRecurrence**(`recurrence`): [`ValidationRuleResult`](ValidationRuleResult.md)

Defined in: [Event/interfaces/event-validation.interfaces.ts:175](https://github.com/jmkcoder/uplink-protocol-calendar/blob/4cde26f472352440ee258db7670fce2e95651862/src/Event/interfaces/event-validation.interfaces.ts#L175)

Validate recurrence

#### Parameters

##### recurrence

`any`

#### Returns

[`ValidationRuleResult`](ValidationRuleResult.md)
