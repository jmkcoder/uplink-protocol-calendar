/**
 * Event Management Interfaces
 * 
 * Comprehensive interfaces for event management system that can work independently
 * or integrate with DateController and TimeController
 */

// Core event interfaces
export * from './event.interfaces';
export * from './event-storage.interfaces';
export * from './event-validation.interfaces';
export * from './event-formatting.interfaces';
export * from './event-search.interfaces';
export * from './event-recurrence.interfaces';
export * from './event-notification.interfaces';

// Note: event-conflict.interfaces and event-sync.interfaces are excluded 
// to avoid naming conflicts with EventConflict and SyncStatus from event.interfaces and event-storage.interfaces
// Import them directly if needed: import { ... } from './event-conflict.interfaces';

// Service interfaces
export * from './event-manager.service.interfaces';
export * from './event-storage.service.interfaces';
export * from './event-validation.service.interfaces';
export * from './event-formatting.service.interfaces';
export * from './event-search.service.interfaces';
export * from './event-recurrence.service.interfaces';
export * from './event-notification.service.interfaces';
export * from './event-conflict.service.interfaces';
export * from './event-sync.service.interfaces';
