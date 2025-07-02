import { 
  IEventNotificationService,
  NotificationRequest,
  NotificationStatus,
  NotificationConfig,
  NotificationTemplate,
  NotificationHistory,
  BulkNotificationRequest,
  NotificationAnalytics,
  NotificationType,
  NotificationChannel
} from '../interfaces/event-notification.interfaces';
import { CalendarEvent } from '../interfaces/event.interfaces';

/**
 * Event Notification Service Implementation
 * Provides comprehensive notification capabilities for events
 */
export class EventNotificationService implements IEventNotificationService {
  private defaultConfig: Partial<NotificationConfig> = {};
  private templates: Map<string, NotificationTemplate> = new Map();
  private userConfigs: Map<string, NotificationConfig> = new Map();
  private notifications: Map<string, NotificationRequest> = new Map();
  private notificationStatus: Map<string, NotificationStatus> = new Map();
  private history: NotificationHistory[] = [];
  private notificationCounter = 0;

  // Event emitters for callbacks
  private notificationSentCallbacks: Array<(notification: NotificationRequest, status: NotificationStatus) => void> = [];
  private notificationFailedCallbacks: Array<(notification: NotificationRequest, error: string) => void> = [];

  /**
   * Reset all internal state - used for test isolation
   */
  reset(): void {
    this.notifications.clear();
    this.notificationStatus.clear();
    this.templates.clear();
    this.userConfigs.clear();
    this.history = [];
    this.notificationCounter = 0;
    this.notificationSentCallbacks = [];
    this.notificationFailedCallbacks = [];
  }

  async initialize(config?: Partial<NotificationConfig>): Promise<void> {
    if (config) {
      this.defaultConfig = config;
    }
    
    // Initialize default templates
    await this.initializeDefaultTemplates();
    
    console.log('EventNotificationService initialized');
  }

  async sendNotification(request: NotificationRequest): Promise<NotificationStatus> {
    const status: NotificationStatus = {
      id: request.id,
      status: 'pending',
      attempts: 0
    };

    try {
      // Simulate notification sending
      await this.simulateNotificationDelivery(request);
      
      status.status = 'sent';
      status.attempts = 1;
      status.deliveredAt = new Date();
      
      // Store status
      this.notificationStatus.set(request.id, status);
      
      // Add to history
      this.addToHistory(request, status);
      
      // Trigger callback
      this.notificationSentCallbacks.forEach(callback => callback(request, status));
      
      console.log(`Notification sent: ${request.type} to ${request.userId}`);
      
    } catch (error) {
      status.status = 'failed';
      status.error = error instanceof Error ? error.message : 'Unknown error';
      status.attempts = 1;
      
      // Store status even for failed notifications
      this.notificationStatus.set(request.id, status);
      
      // Add failed notifications to history as well
      this.addToHistory(request, status);
      
      // Trigger failure callback
      this.notificationFailedCallbacks.forEach(callback => callback(request, status.error!));
    }

    return status;
  }

  async scheduleNotification(request: NotificationRequest): Promise<string> {
    // Store the scheduled notification
    this.notifications.set(request.id, request);
    
    // Initialize status as pending
    const status: NotificationStatus = {
      id: request.id,
      status: 'pending',
      attempts: 0
    };
    this.notificationStatus.set(request.id, status);
    
    console.log(`Notification scheduled: ${request.id} for ${request.scheduledAt}`);
    return request.id;
  }

  async sendBulkNotifications(request: BulkNotificationRequest): Promise<NotificationStatus[]> {
    const results: NotificationStatus[] = [];
    
    for (const notification of request.notifications) {
      try {
        const status = await this.sendNotification(notification);
        results.push(status);
        
        // Call progress callback if provided
        if (request.options.onProgress) {
          request.options.onProgress(results.length, request.notifications.length);
        }
      } catch (error) {
        if (!request.options.continueOnError) {
          throw error;
        }
        // Add failed status
        results.push({
          id: notification.id,
          status: 'failed',
          attempts: 1,
          error: error instanceof Error ? error.message : 'Unknown error'
        });
      }
    }
    
    return results;
  }

  async cancelNotification(notificationId: string): Promise<void> {
    const notification = this.notifications.get(notificationId);
    if (notification) {
      this.notifications.delete(notificationId);
      
      // Update status
      const status = this.notificationStatus.get(notificationId);
      if (status) {
        status.status = 'cancelled';
        this.notificationStatus.set(notificationId, status);
      }
    }
    
    console.log(`Notification cancelled: ${notificationId}`);
  }

  async getNotificationStatus(notificationId: string): Promise<NotificationStatus | null> {
    return this.notificationStatus.get(notificationId) || null;
  }

  async configureUserNotifications(userId: string, config: NotificationConfig): Promise<void> {
    this.userConfigs.set(userId, config);
    console.log(`User notification config updated for ${userId}`);
  }

  async getUserNotificationConfig(userId: string): Promise<NotificationConfig | null> {
    const userConfig = this.userConfigs.get(userId);
    if (userConfig) {
      return userConfig;
    }
    
    // Return default config if no user-specific config exists
    if (Object.keys(this.defaultConfig).length > 0) {
      return this.defaultConfig as NotificationConfig;
    }
    
    return null;
  }

  async createTemplate(template: NotificationTemplate): Promise<void> {
    this.templates.set(template.id, template);
    console.log(`Template created: ${template.id}`);
  }

  async updateTemplate(templateId: string, updates: Partial<NotificationTemplate>): Promise<void> {
    const existing = this.templates.get(templateId);
    if (existing) {
      const updated = { ...existing, ...updates };
      this.templates.set(templateId, updated);
      console.log(`Template updated: ${templateId}`);
    }
  }

  async getTemplates(type?: NotificationType): Promise<NotificationTemplate[]> {
    const allTemplates = Array.from(this.templates.values());
    if (type) {
      return allTemplates.filter(template => template.type === type);
    }
    return allTemplates;
  }

  async deleteTemplate(templateId: string): Promise<void> {
    this.templates.delete(templateId);
    console.log(`Template deleted: ${templateId}`);
  }

  async processEventNotifications(
    event: CalendarEvent,
    action: 'created' | 'updated' | 'deleted' | 'reminder'
  ): Promise<void> {
    // Get attendees who should receive notifications
    const recipients = event.attendees?.map(a => a.id) || [];
    
    // Process notifications based on action
    switch (action) {
      case 'created':
        await this.sendEventCreatedNotifications(event, recipients);
        break;
      case 'updated':
        await this.sendEventUpdatedNotifications(event, recipients);
        break;
      case 'deleted':
        await this.sendEventDeletedNotifications(event, recipients);
        break;
      case 'reminder':
        await this.sendEventReminderNotifications(event, recipients);
        break;
    }
  }

  async getNotificationHistory(
    userId?: string,
    dateRange?: { start: Date; end: Date },
    type?: NotificationType
  ): Promise<NotificationHistory[]> {
    let filtered = this.history;
    
    if (userId) {
      filtered = filtered.filter(h => h.userId === userId);
    }
    
    if (dateRange) {
      filtered = filtered.filter(h => 
        h.sentAt >= dateRange.start && h.sentAt <= dateRange.end
      );
    }
    
    if (type) {
      filtered = filtered.filter(h => h.type === type);
    }
    
    return filtered;
  }

  async markNotificationInteraction(
    notificationId: string,
    interaction: 'opened' | 'clicked' | 'dismissed'
  ): Promise<void> {
    const status = this.notificationStatus.get(notificationId);
    if (status) {
      if (!status.interaction) {
        status.interaction = {
          opened: false,
          clicked: false,
          dismissed: false,
          timestamp: new Date()
        };
      }
      
      status.interaction[interaction] = true;
      status.interaction.timestamp = new Date();
      
      this.notificationStatus.set(notificationId, status);
    }
  }

  async getPendingNotifications(userId?: string): Promise<NotificationRequest[]> {
    const pending = Array.from(this.notifications.values());
    if (userId) {
      return pending.filter(n => n.userId === userId);
    }
    return pending;
  }

  async getAnalytics(
    dateRange: { start: Date; end: Date },
    userId?: string
  ): Promise<NotificationAnalytics> {
    const filteredHistory = await this.getNotificationHistory(userId, dateRange);
    
    // Calculate analytics
    const analytics: NotificationAnalytics = {
      dateRange,
      totalSent: filteredHistory.length,
      deliveryRates: this.calculateDeliveryRates(filteredHistory),
      openRates: this.calculateOpenRates(filteredHistory),
      clickRates: this.calculateClickRates(filteredHistory),
      topChannels: this.calculateTopChannels(filteredHistory),
      engagementScores: this.calculateEngagementScores(filteredHistory),
      errorStats: this.calculateErrorStats()
    };
    
    return analytics;
  }

  async testNotification(
    userId: string,
    channel: NotificationChannel,
    message: string
  ): Promise<NotificationStatus> {
    const testRequest: NotificationRequest = {
      id: `test_${++this.notificationCounter}`,
      type: 'reminder',
      userId,
      event: {} as CalendarEvent, // Mock event for test
      channel,
      priority: 'normal',
      subject: 'Test Notification',
      body: message,
      scheduledAt: new Date()
    };
    
    return this.sendNotification(testRequest);
  }

  async cleanupExpiredNotifications(): Promise<number> {
    const now = new Date();
    let cleanedCount = 0;
    
    for (const [id, notification] of this.notifications.entries()) {
      if (notification.expiresAt && notification.expiresAt < now) {
        this.notifications.delete(id);
        
        // Update status
        const status = this.notificationStatus.get(id);
        if (status) {
          status.status = 'expired';
          this.notificationStatus.set(id, status);
        }
        
        cleanedCount++;
      }
    }
    
    console.log(`Cleaned up ${cleanedCount} expired notifications`);
    return cleanedCount;
  }

  onNotificationSent(callback: (notification: NotificationRequest, status: NotificationStatus) => void): () => void {
    this.notificationSentCallbacks.push(callback);
    return () => {
      const index = this.notificationSentCallbacks.indexOf(callback);
      if (index > -1) {
        this.notificationSentCallbacks.splice(index, 1);
      }
    };
  }

  onNotificationFailed(callback: (notification: NotificationRequest, error: string) => void): () => void {
    this.notificationFailedCallbacks.push(callback);
    return () => {
      const index = this.notificationFailedCallbacks.indexOf(callback);
      if (index > -1) {
        this.notificationFailedCallbacks.splice(index, 1);
      }
    };
  }

  // Private helper methods
  private async initializeDefaultTemplates(): Promise<void> {
    const defaultTemplates: NotificationTemplate[] = [
      {
        id: 'event_reminder',
        name: 'Event Reminder',
        type: 'reminder',
        channels: ['popup', 'email'],
        subject: 'Reminder: {{event.title}}',
        body: 'Your event "{{event.title}}" is starting in {{minutes}} minutes.',
        placeholders: ['event.title', 'event.description', 'minutes'],
        defaultPriority: 'normal'
      },
      {
        id: 'event_invitation',
        name: 'Event Invitation',
        type: 'invitation',
        channels: ['email'],
        subject: 'Invitation: {{event.title}}',
        body: 'You have been invited to "{{event.title}}" on {{event.date}}.',
        placeholders: ['event.title', 'event.description', 'event.date', 'organizer.name'],
        defaultPriority: 'normal'
      }
    ];

    for (const template of defaultTemplates) {
      await this.createTemplate(template);
    }
  }

  private async simulateNotificationDelivery(_request: NotificationRequest): Promise<void> {
    // Simulate async delivery with random delay
    await new Promise(resolve => setTimeout(resolve, Math.random() * 100));
    
    // Simulate potential failures (5% failure rate)
    if (Math.random() < 0.05) {
      throw new Error('Simulated delivery failure');
    }
  }

  private addToHistory(request: NotificationRequest, status: NotificationStatus): void {
    const historyEntry: NotificationHistory = {
      id: `hist_${++this.notificationCounter}`,
      userId: request.userId,
      type: request.type,
      eventId: request.event.id,
      channel: request.channel,
      sentAt: new Date(),
      status: status.status,
      subject: request.subject,
      interaction: status.interaction
    };
    
    this.history.push(historyEntry);
  }

  private async sendEventCreatedNotifications(event: CalendarEvent, recipients: string[]): Promise<void> {
    for (const userId of recipients) {
      const request: NotificationRequest = {
        id: `created_${event.id}_${userId}`,
        type: 'invitation',
        userId,
        event,
        channel: 'email',
        priority: 'normal',
        subject: `New Event: ${event.title}`,
        body: `You have been invited to "${event.title}" on ${event.dateTime.start.toLocaleDateString()}.`,
        scheduledAt: new Date()
      };
      
      await this.sendNotification(request);
    }
  }

  private async sendEventUpdatedNotifications(event: CalendarEvent, recipients: string[]): Promise<void> {
    for (const userId of recipients) {
      const request: NotificationRequest = {
        id: `updated_${event.id}_${userId}`,
        type: 'rescheduled',
        userId,
        event,
        channel: 'email',
        priority: 'normal',
        subject: `Event Updated: ${event.title}`,
        body: `The event "${event.title}" has been updated.`,
        scheduledAt: new Date()
      };
      
      await this.sendNotification(request);
    }
  }

  private async sendEventDeletedNotifications(event: CalendarEvent, recipients: string[]): Promise<void> {
    for (const userId of recipients) {
      const request: NotificationRequest = {
        id: `deleted_${event.id}_${userId}`,
        type: 'cancelled',
        userId,
        event,
        channel: 'email',
        priority: 'high',
        subject: `Event Cancelled: ${event.title}`,
        body: `The event "${event.title}" has been cancelled.`,
        scheduledAt: new Date()
      };
      
      await this.sendNotification(request);
    }
  }

  private async sendEventReminderNotifications(event: CalendarEvent, recipients: string[]): Promise<void> {
    for (const userId of recipients) {
      const request: NotificationRequest = {
        id: `reminder_${event.id}_${userId}`,
        type: 'reminder',
        userId,
        event,
        channel: 'popup',
        priority: 'normal',
        subject: `Reminder: ${event.title}`,
        body: `Your event "${event.title}" is starting soon.`,
        scheduledAt: new Date()
      };
      
      await this.sendNotification(request);
    }
  }

  private calculateDeliveryRates(history: NotificationHistory[]): Record<NotificationChannel, number> {
    const rates: Record<NotificationChannel, number> = {} as any;
    const channelCounts: Record<NotificationChannel, { sent: number; delivered: number }> = {} as any;
    
    for (const entry of history) {
      if (!channelCounts[entry.channel]) {
        channelCounts[entry.channel] = { sent: 0, delivered: 0 };
      }
      
      channelCounts[entry.channel].sent++;
      if (entry.status === 'sent' || entry.status === 'delivered') {
        channelCounts[entry.channel].delivered++;
      }
    }
    
    for (const [channel, counts] of Object.entries(channelCounts)) {
      rates[channel as NotificationChannel] = counts.sent > 0 ? counts.delivered / counts.sent : 0;
    }
    
    return rates;
  }

  private calculateOpenRates(history: NotificationHistory[]): Record<NotificationType, number> {
    const rates: Record<NotificationType, number> = {} as any;
    const typeCounts: Record<NotificationType, { sent: number; opened: number }> = {} as any;
    
    for (const entry of history) {
      if (!typeCounts[entry.type]) {
        typeCounts[entry.type] = { sent: 0, opened: 0 };
      }
      
      typeCounts[entry.type].sent++;
      if (entry.interaction?.opened) {
        typeCounts[entry.type].opened++;
      }
    }
    
    for (const [type, counts] of Object.entries(typeCounts)) {
      rates[type as NotificationType] = counts.sent > 0 ? counts.opened / counts.sent : 0;
    }
    
    return rates;
  }

  private calculateClickRates(history: NotificationHistory[]): Record<NotificationType, number> {
    const rates: Record<NotificationType, number> = {} as any;
    const typeCounts: Record<NotificationType, { sent: number; clicked: number }> = {} as any;
    
    for (const entry of history) {
      if (!typeCounts[entry.type]) {
        typeCounts[entry.type] = { sent: 0, clicked: 0 };
      }
      
      typeCounts[entry.type].sent++;
      if (entry.interaction?.clicked) {
        typeCounts[entry.type].clicked++;
      }
    }
    
    for (const [type, counts] of Object.entries(typeCounts)) {
      rates[type as NotificationType] = counts.sent > 0 ? counts.clicked / counts.sent : 0;
    }
    
    return rates;
  }

  private calculateTopChannels(history: NotificationHistory[]): Array<{ channel: NotificationChannel; effectiveness: number }> {
    const channelStats: Record<NotificationChannel, { sent: number; interactions: number }> = {} as any;
    
    for (const entry of history) {
      if (!channelStats[entry.channel]) {
        channelStats[entry.channel] = { sent: 0, interactions: 0 };
      }
      
      channelStats[entry.channel].sent++;
      if (entry.interaction?.opened || entry.interaction?.clicked) {
        channelStats[entry.channel].interactions++;
      }
    }
    
    return Object.entries(channelStats)
      .map(([channel, stats]) => ({
        channel: channel as NotificationChannel,
        effectiveness: stats.sent > 0 ? stats.interactions / stats.sent : 0
      }))
      .sort((a, b) => b.effectiveness - a.effectiveness);
  }

  private calculateEngagementScores(history: NotificationHistory[]): Record<string, number> {
    const userStats: Record<string, { sent: number; interactions: number }> = {};
    
    for (const entry of history) {
      if (!userStats[entry.userId]) {
        userStats[entry.userId] = { sent: 0, interactions: 0 };
      }
      
      userStats[entry.userId].sent++;
      if (entry.interaction?.opened || entry.interaction?.clicked) {
        userStats[entry.userId].interactions++;
      }
    }
    
    const scores: Record<string, number> = {};
    for (const [userId, stats] of Object.entries(userStats)) {
      scores[userId] = stats.sent > 0 ? stats.interactions / stats.sent : 0;
    }
    
    return scores;
  }

  private calculateErrorStats(): Record<string, number> {
    const errorStats: Record<string, number> = {};
    
    for (const status of this.notificationStatus.values()) {
      if (status.status === 'failed' && status.error) {
        errorStats[status.error] = (errorStats[status.error] || 0) + 1;
      }
    }
    
    return errorStats;
  }
}
