/**
 * Event Notification Interfaces
 * 
 * Defines interfaces for event notifications, reminders, and alerts
 */

import { CalendarEvent } from './event.interfaces';

/**
 * Notification types
 */
export type NotificationType = 
  | 'reminder'          // Pre-event reminder
  | 'starting'          // Event is starting
  | 'ending'            // Event is ending
  | 'cancelled'         // Event was cancelled
  | 'rescheduled'       // Event was rescheduled
  | 'invitation'        // New event invitation
  | 'response'          // Attendee response
  | 'conflict'          // Schedule conflict
  | 'overdue'           // Overdue task/event
  | 'daily_summary'     // Daily agenda
  | 'weekly_summary';   // Weekly agenda

/**
 * Notification channels
 */
export type NotificationChannel = 
  | 'popup'             // Browser/app popup
  | 'email'             // Email notification
  | 'sms'               // SMS/text message
  | 'push'              // Push notification
  | 'webhook'           // HTTP webhook
  | 'slack'             // Slack message
  | 'teams'             // Microsoft Teams
  | 'custom';           // Custom implementation

/**
 * Notification priority
 */
export type NotificationPriority = 'low' | 'normal' | 'high' | 'urgent';

/**
 * Notification template
 */
export interface NotificationTemplate {
  /** Template ID */
  id: string;
  /** Template name */
  name: string;
  /** Notification type */
  type: NotificationType;
  /** Supported channels */
  channels: NotificationChannel[];
  /** Subject template */
  subject: string;
  /** Body template (supports placeholders) */
  body: string;
  /** HTML body template */
  htmlBody?: string;
  /** Placeholders available */
  placeholders: string[];
  /** Default priority */
  defaultPriority: NotificationPriority;
  /** Template variables */
  variables?: Record<string, any>;
}

/**
 * Notification configuration
 */
export interface NotificationConfig {
  /** User ID */
  userId: string;
  /** Enabled notification types */
  enabledTypes: NotificationType[];
  /** Channel preferences per type */
  channelPreferences: Record<NotificationType, NotificationChannel[]>;
  /** Quiet hours */
  quietHours?: {
    start: string; // HH:mm format
    end: string;   // HH:mm format
    timeZone: string;
    days?: number[]; // 0-6, Sunday-Saturday
  };
  /** Digest settings */
  digestSettings?: {
    enabled: boolean;
    frequency: 'daily' | 'weekly';
    time: string; // HH:mm format
    channel: NotificationChannel;
  };
  /** Custom thresholds */
  customThresholds?: Record<string, number>;
}

/**
 * Notification request
 */
export interface NotificationRequest {
  /** Unique ID */
  id: string;
  /** Notification type */
  type: NotificationType;
  /** Target user */
  userId: string;
  /** Related event */
  event: CalendarEvent;
  /** Delivery channel */
  channel: NotificationChannel;
  /** Priority */
  priority: NotificationPriority;
  /** Subject */
  subject: string;
  /** Message body */
  body: string;
  /** HTML body */
  htmlBody?: string;
  /** Scheduled delivery time */
  scheduledAt: Date;
  /** Expiration time */
  expiresAt?: Date;
  /** Retry configuration */
  retryConfig?: {
    maxAttempts: number;
    retryDelay: number;
    backoffMultiplier: number;
  };
  /** Custom data */
  customData?: Record<string, any>;
}

/**
 * Notification status
 */
export interface NotificationStatus {
  /** Notification ID */
  id: string;
  /** Current status */
  status: 'pending' | 'sent' | 'delivered' | 'failed' | 'cancelled' | 'expired';
  /** Delivery attempts */
  attempts: number;
  /** Last attempt time */
  lastAttempt?: Date;
  /** Next retry time */
  nextRetry?: Date;
  /** Error details */
  error?: string;
  /** Delivery timestamp */
  deliveredAt?: Date;
  /** User interaction */
  interaction?: {
    opened: boolean;
    clicked: boolean;
    dismissed: boolean;
    timestamp: Date;
  };
}

/**
 * Notification history
 */
export interface NotificationHistory {
  /** History ID */
  id: string;
  /** User ID */
  userId: string;
  /** Notification type */
  type: NotificationType;
  /** Related event ID */
  eventId: string;
  /** Channel used */
  channel: NotificationChannel;
  /** Sent timestamp */
  sentAt: Date;
  /** Status */
  status: NotificationStatus['status'];
  /** Subject */
  subject: string;
  /** Interaction data */
  interaction?: NotificationStatus['interaction'];
}

/**
 * Bulk notification request
 */
export interface BulkNotificationRequest {
  /** Bulk operation ID */
  batchId: string;
  /** Notification requests */
  notifications: NotificationRequest[];
  /** Batch options */
  options: {
    /** Parallel processing limit */
    parallelLimit?: number;
    /** Continue on errors */
    continueOnError?: boolean;
    /** Progress callback */
    onProgress?: (completed: number, total: number) => void;
  };
}

/**
 * Notification analytics
 */
export interface NotificationAnalytics {
  /** Date range */
  dateRange: { start: Date; end: Date };
  /** Total notifications sent */
  totalSent: number;
  /** Delivery rate by channel */
  deliveryRates: Record<NotificationChannel, number>;
  /** Open rates by type */
  openRates: Record<NotificationType, number>;
  /** Click-through rates */
  clickRates: Record<NotificationType, number>;
  /** Most effective channels */
  topChannels: Array<{ channel: NotificationChannel; effectiveness: number }>;
  /** User engagement scores */
  engagementScores: Record<string, number>;
  /** Error statistics */
  errorStats: Record<string, number>;
}

/**
 * Event notification service interface
 */
export interface IEventNotificationService {
  /**
   * Initialize notification service
   */
  initialize(defaultConfig?: Partial<NotificationConfig>): Promise<void>;

  /**
   * Send immediate notification
   */
  sendNotification(request: NotificationRequest): Promise<NotificationStatus>;

  /**
   * Schedule notification
   */
  scheduleNotification(request: NotificationRequest): Promise<string>;

  /**
   * Send bulk notifications
   */
  sendBulkNotifications(request: BulkNotificationRequest): Promise<NotificationStatus[]>;

  /**
   * Cancel scheduled notification
   */
  cancelNotification(notificationId: string): Promise<void>;

  /**
   * Get notification status
   */
  getNotificationStatus(notificationId: string): Promise<NotificationStatus | null>;

  /**
   * Configure user notification preferences
   */
  configureUserNotifications(userId: string, config: NotificationConfig): Promise<void>;

  /**
   * Get user notification configuration
   */
  getUserNotificationConfig(userId: string): Promise<NotificationConfig | null>;

  /**
   * Create notification template
   */
  createTemplate(template: NotificationTemplate): Promise<void>;

  /**
   * Update notification template
   */
  updateTemplate(templateId: string, updates: Partial<NotificationTemplate>): Promise<void>;

  /**
   * Get notification templates
   */
  getTemplates(type?: NotificationType): Promise<NotificationTemplate[]>;

  /**
   * Delete notification template
   */
  deleteTemplate(templateId: string): Promise<void>;

  /**
   * Process event for automatic notifications
   */
  processEventNotifications(
    event: CalendarEvent,
    action: 'created' | 'updated' | 'deleted' | 'reminder'
  ): Promise<void>;

  /**
   * Get notification history
   */
  getNotificationHistory(
    userId?: string,
    dateRange?: { start: Date; end: Date },
    type?: NotificationType
  ): Promise<NotificationHistory[]>;

  /**
   * Mark notification as read/interacted
   */
  markNotificationInteraction(
    notificationId: string,
    interaction: 'opened' | 'clicked' | 'dismissed'
  ): Promise<void>;

  /**
   * Get pending notifications
   */
  getPendingNotifications(userId?: string): Promise<NotificationRequest[]>;

  /**
   * Get notification analytics
   */
  getAnalytics(
    dateRange: { start: Date; end: Date },
    userId?: string
  ): Promise<NotificationAnalytics>;

  /**
   * Test notification delivery
   */
  testNotification(
    userId: string,
    channel: NotificationChannel,
    message: string
  ): Promise<NotificationStatus>;

  /**
   * Cleanup expired notifications
   */
  cleanupExpiredNotifications(): Promise<number>;

  /**
   * Subscribe to notification events
   */
  onNotificationSent(callback: (notification: NotificationRequest, status: NotificationStatus) => void): () => void;

  /**
   * Subscribe to notification failures
   */
  onNotificationFailed(callback: (notification: NotificationRequest, error: string) => void): () => void;
}
