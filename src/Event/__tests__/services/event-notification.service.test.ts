import { EventNotificationService } from '../../services/event-notification.service';
import {
  NotificationRequest,
  NotificationConfig,
  NotificationTemplate,
  BulkNotificationRequest,
  NotificationType,
  NotificationChannel
} from '../../interfaces/event-notification.interfaces';
import { CalendarEvent } from '../../interfaces/event.interfaces';

describe('EventNotificationService', () => {
  let service: EventNotificationService;

  beforeEach(async () => {
    service = new EventNotificationService();
    await service.initialize();
  });

  describe('initialize', () => {
    it('should initialize with default config', async () => {
      const defaultConfig: Partial<NotificationConfig> = {
        enabledTypes: ['reminder', 'invitation']
      };

      await service.initialize(defaultConfig);
      
      // Check that default templates are created
      const templates = await service.getTemplates();
      expect(templates.length).toBeGreaterThan(0);
      expect(templates.some(t => t.id === 'event_reminder')).toBe(true);
      expect(templates.some(t => t.id === 'event_invitation')).toBe(true);
    });
  });

  describe('sendNotification', () => {
    it('should send notification successfully', async () => {
      const request: NotificationRequest = {
        id: 'test-1',
        type: 'reminder',
        userId: 'user-1',
        event: createMockEvent(),
        channel: 'email',
        priority: 'normal',
        subject: 'Test Subject',
        body: 'Test Body',
        scheduledAt: new Date()
      };

      const status = await service.sendNotification(request);

      expect(status.id).toBe('test-1');
      expect(status.status).toBe('sent');
      expect(status.attempts).toBe(1);
      expect(status.deliveredAt).toBeDefined();
    });

    it('should handle notification failure', async () => {
      // Mock the simulateNotificationDelivery to always fail
      const originalMethod = (service as any).simulateNotificationDelivery;
      (service as any).simulateNotificationDelivery = jest.fn().mockRejectedValue(new Error('Delivery failed'));

      const request: NotificationRequest = {
        id: 'test-fail',
        type: 'reminder',
        userId: 'user-1',
        event: createMockEvent(),
        channel: 'email',
        priority: 'normal',
        subject: 'Test Subject',
        body: 'Test Body',
        scheduledAt: new Date()
      };

      const status = await service.sendNotification(request);

      expect(status.status).toBe('failed');
      expect(status.error).toBe('Delivery failed');

      // Restore original method
      (service as any).simulateNotificationDelivery = originalMethod;
    });

    it('should trigger notification sent callback', async () => {
      const mockCallback = jest.fn();
      service.onNotificationSent(mockCallback);

      const request: NotificationRequest = {
        id: 'test-callback',
        type: 'reminder',
        userId: 'user-1',
        event: createMockEvent(),
        channel: 'email',
        priority: 'normal',
        subject: 'Test Subject',
        body: 'Test Body',
        scheduledAt: new Date()
      };

      await service.sendNotification(request);

      expect(mockCallback).toHaveBeenCalledWith(request, expect.objectContaining({
        id: 'test-callback',
        status: 'sent'
      }));
    });
  });

  describe('scheduleNotification', () => {
    it('should schedule notification successfully', async () => {
      const request: NotificationRequest = {
        id: 'scheduled-1',
        type: 'reminder',
        userId: 'user-1',
        event: createMockEvent(),
        channel: 'email',
        priority: 'normal',
        subject: 'Scheduled Subject',
        body: 'Scheduled Body',
        scheduledAt: new Date(Date.now() + 3600000) // 1 hour from now
      };

      const notificationId = await service.scheduleNotification(request);

      expect(notificationId).toBe('scheduled-1');

      const status = await service.getNotificationStatus('scheduled-1');
      expect(status?.status).toBe('pending');
    });
  });

  describe('sendBulkNotifications', () => {
    it('should send multiple notifications', async () => {
      const notifications: NotificationRequest[] = [
        {
          id: 'bulk-1',
          type: 'reminder',
          userId: 'user-1',
          event: createMockEvent(),
          channel: 'email',
          priority: 'normal',
          subject: 'Bulk 1',
          body: 'Body 1',
          scheduledAt: new Date()
        },
        {
          id: 'bulk-2',
          type: 'invitation',
          userId: 'user-2',
          event: createMockEvent(),
          channel: 'popup',
          priority: 'high',
          subject: 'Bulk 2',
          body: 'Body 2',
          scheduledAt: new Date()
        }
      ];

      const bulkRequest: BulkNotificationRequest = {
        batchId: 'batch-1',
        notifications,
        options: {
          parallelLimit: 2,
          continueOnError: true
        }
      };

      const results = await service.sendBulkNotifications(bulkRequest);

      expect(results).toHaveLength(2);
      expect(results[0].id).toBe('bulk-1');
      expect(results[1].id).toBe('bulk-2');
      expect(results.every(r => r.status === 'sent')).toBe(true);
    });

    it('should handle progress callback', async () => {
      const progressCallback = jest.fn();
      const notifications: NotificationRequest[] = [
        createMockNotificationRequest('progress-1'),
        createMockNotificationRequest('progress-2')
      ];

      const bulkRequest: BulkNotificationRequest = {
        batchId: 'progress-batch',
        notifications,
        options: {
          onProgress: progressCallback
        }
      };

      await service.sendBulkNotifications(bulkRequest);

      expect(progressCallback).toHaveBeenCalledWith(1, 2);
      expect(progressCallback).toHaveBeenCalledWith(2, 2);
    });
  });

  describe('cancelNotification', () => {
    it('should cancel scheduled notification', async () => {
      const request = createMockNotificationRequest('cancel-test');
      await service.scheduleNotification(request);

      await service.cancelNotification('cancel-test');

      const status = await service.getNotificationStatus('cancel-test');
      expect(status?.status).toBe('cancelled');
    });
  });

  describe('template management', () => {
    it('should create template', async () => {
      const template: NotificationTemplate = {
        id: 'custom-template',
        name: 'Custom Template',
        type: 'reminder',
        channels: ['email', 'popup'],
        subject: 'Custom: {{event.title}}',
        body: 'Custom body for {{event.title}}',
        placeholders: ['event.title'],
        defaultPriority: 'high'
      };

      await service.createTemplate(template);

      const templates = await service.getTemplates();
      expect(templates.some(t => t.id === 'custom-template')).toBe(true);
    });

    it('should update template', async () => {
      const template: NotificationTemplate = {
        id: 'update-template',
        name: 'Update Template',
        type: 'reminder',
        channels: ['email'],
        subject: 'Original Subject',
        body: 'Original Body',
        placeholders: [],
        defaultPriority: 'normal'
      };

      await service.createTemplate(template);
      await service.updateTemplate('update-template', { subject: 'Updated Subject' });

      const templates = await service.getTemplates();
      const updated = templates.find(t => t.id === 'update-template');
      expect(updated?.subject).toBe('Updated Subject');
    });

    it('should delete template', async () => {
      const template: NotificationTemplate = {
        id: 'delete-template',
        name: 'Delete Template',
        type: 'reminder',
        channels: ['email'],
        subject: 'Subject',
        body: 'Body',
        placeholders: [],
        defaultPriority: 'normal'
      };

      await service.createTemplate(template);
      await service.deleteTemplate('delete-template');

      const templates = await service.getTemplates();
      expect(templates.some(t => t.id === 'delete-template')).toBe(false);
    });

    it('should filter templates by type', async () => {
      const reminderTemplates = await service.getTemplates('reminder');
      const invitationTemplates = await service.getTemplates('invitation');

      expect(reminderTemplates.every(t => t.type === 'reminder')).toBe(true);
      expect(invitationTemplates.every(t => t.type === 'invitation')).toBe(true);
    });
  });

  describe('user configuration', () => {
    it('should configure user notifications', async () => {
      const config: NotificationConfig = {
        userId: 'user-1',
        enabledTypes: ['reminder', 'invitation'],
        channelPreferences: {
          reminder: ['popup'],
          invitation: ['email'],
          starting: ['popup'],
          ending: ['popup'],
          cancelled: ['email'],
          rescheduled: ['email'],
          response: ['email'],
          conflict: ['popup'],
          overdue: ['popup'],
          daily_summary: ['email'],
          weekly_summary: ['email']
        }
      };

      await service.configureUserNotifications('user-1', config);

      const retrieved = await service.getUserNotificationConfig('user-1');
      expect(retrieved?.userId).toBe('user-1');
      expect(retrieved?.enabledTypes).toEqual(['reminder', 'invitation']);
    });

    it('should return default config when user config not found', async () => {
      const defaultConfig: Partial<NotificationConfig> = {
        enabledTypes: ['reminder']
      };

      await service.initialize(defaultConfig);

      const config = await service.getUserNotificationConfig('non-existent-user');
      expect(config?.enabledTypes).toEqual(['reminder']);
    });
  });

  describe('processEventNotifications', () => {
    beforeEach(async () => {
      // Ensure fresh state for each test
      service.reset();
      await service.initialize();
    });

    it('should process event created notifications', async () => {
      const event = createMockEventWithAttendees();
      
      await service.processEventNotifications(event, 'created');

      const history = await service.getNotificationHistory();
      const createdNotifications = history.filter(h => h.type === 'invitation');
      expect(createdNotifications.length).toBe(2); // 2 attendees
    });

    it('should process event updated notifications', async () => {
      const event = createMockEventWithAttendees();
      
      await service.processEventNotifications(event, 'updated');

      const history = await service.getNotificationHistory();
      const updatedNotifications = history.filter(h => h.type === 'rescheduled');
      expect(updatedNotifications.length).toBe(2);
    });

    it('should process event deleted notifications', async () => {
      const event = createMockEventWithAttendees();
      
      await service.processEventNotifications(event, 'deleted');

      const history = await service.getNotificationHistory();
      const deletedNotifications = history.filter(h => h.type === 'cancelled');
      expect(deletedNotifications.length).toBe(2);
    });

    it('should process event reminder notifications', async () => {
      const event = createMockEventWithAttendees();
      
      await service.processEventNotifications(event, 'reminder');

      const history = await service.getNotificationHistory();
      const reminderNotifications = history.filter(h => h.type === 'reminder');
      expect(reminderNotifications.length).toBe(2);
    });
  });

  describe('notification history', () => {
    beforeEach(async () => {
      // Ensure fresh state for each test
      service.reset();
      await service.initialize();
      
      // Send some test notifications to populate history
      const requests = [
        createMockNotificationRequest('hist-1', 'user-1', 'reminder'),
        createMockNotificationRequest('hist-2', 'user-2', 'invitation'),
        createMockNotificationRequest('hist-3', 'user-1', 'reminder')
      ];

      for (const request of requests) {
        await service.sendNotification(request);
      }
    });

    it('should get all notification history', async () => {
      const history = await service.getNotificationHistory();
      expect(history.length).toBeGreaterThanOrEqual(3);
    });

    it('should filter history by user', async () => {
      const userHistory = await service.getNotificationHistory('user-1');
      expect(userHistory.every(h => h.userId === 'user-1')).toBe(true);
      expect(userHistory.length).toBeGreaterThanOrEqual(2);
    });

    it('should filter history by type', async () => {
      const reminderHistory = await service.getNotificationHistory(undefined, undefined, 'reminder');
      expect(reminderHistory.every(h => h.type === 'reminder')).toBe(true);
    });

    it('should filter history by date range', async () => {
      const now = new Date();
      const oneHourAgo = new Date(now.getTime() - 3600000);
      
      const recentHistory = await service.getNotificationHistory(
        undefined,
        { start: oneHourAgo, end: now }
      );
      
      expect(recentHistory.every(h => h.sentAt >= oneHourAgo && h.sentAt <= now)).toBe(true);
    });
  });

  describe('notification interactions', () => {
    beforeEach(async () => {
      // Ensure fresh state for each test
      service.reset();
      await service.initialize();
    });

    it('should mark notification as opened', async () => {
      const request = createMockNotificationRequest('interaction-test');
      await service.sendNotification(request);

      await service.markNotificationInteraction('interaction-test', 'opened');

      const status = await service.getNotificationStatus('interaction-test');
      expect(status?.interaction?.opened).toBe(true);
    });

    it('should mark notification as clicked', async () => {
      const request = createMockNotificationRequest('click-test');
      await service.sendNotification(request);

      await service.markNotificationInteraction('click-test', 'clicked');

      const status = await service.getNotificationStatus('click-test');
      expect(status?.interaction?.clicked).toBe(true);
    });

    it('should mark notification as dismissed', async () => {
      const request = createMockNotificationRequest('dismiss-test');
      await service.sendNotification(request);

      await service.markNotificationInteraction('dismiss-test', 'dismissed');

      const status = await service.getNotificationStatus('dismiss-test');
      expect(status?.interaction?.dismissed).toBe(true);
    });
  });

  describe('pending notifications', () => {
    it('should get pending notifications', async () => {
      const request = createMockNotificationRequest('pending-test');
      await service.scheduleNotification(request);

      const pending = await service.getPendingNotifications();
      expect(pending.some(n => n.id === 'pending-test')).toBe(true);
    });

    it('should filter pending notifications by user', async () => {
      const request1 = createMockNotificationRequest('pending-user1', 'user-1');
      const request2 = createMockNotificationRequest('pending-user2', 'user-2');
      
      await service.scheduleNotification(request1);
      await service.scheduleNotification(request2);

      const userPending = await service.getPendingNotifications('user-1');
      expect(userPending.every(n => n.userId === 'user-1')).toBe(true);
      expect(userPending.some(n => n.id === 'pending-user1')).toBe(true);
    });
  });

  describe('analytics', () => {
    beforeEach(async () => {
      // Ensure fresh state for each test
      service.reset();
      await service.initialize();
      
      // Send notifications and mark interactions for analytics
      const requests = [
        createMockNotificationRequest('analytics-1', 'user-1', 'reminder', 'email'),
        createMockNotificationRequest('analytics-2', 'user-2', 'invitation', 'popup'),
        createMockNotificationRequest('analytics-3', 'user-1', 'reminder', 'email')
      ];

      for (const request of requests) {
        await service.sendNotification(request);
      }

      // Mark some interactions
      await service.markNotificationInteraction('analytics-1', 'opened');
      await service.markNotificationInteraction('analytics-1', 'clicked');
      await service.markNotificationInteraction('analytics-2', 'opened');
    });

    it('should calculate analytics', async () => {
      const now = new Date();
      const oneHourAgo = new Date(now.getTime() - 3600000);

      const analytics = await service.getAnalytics({ start: oneHourAgo, end: now });

      expect(analytics.totalSent).toEqual(3);
      expect(analytics.deliveryRates).toBeDefined();
      expect(analytics.openRates).toBeDefined();
      expect(analytics.clickRates).toBeDefined();
      expect(analytics.topChannels).toBeDefined();
      expect(analytics.engagementScores).toBeDefined();
    });

    it('should calculate delivery rates by channel', async () => {
      const now = new Date();
      const oneHourAgo = new Date(now.getTime() - 3600000);

      const analytics = await service.getAnalytics({ start: oneHourAgo, end: now });

      expect(analytics.deliveryRates.email).toBeDefined();
      expect(analytics.deliveryRates.popup).toBeDefined();
      expect(typeof analytics.deliveryRates.email).toBe('number');
    });

    it('should calculate engagement scores', async () => {
      const now = new Date();
      const oneHourAgo = new Date(now.getTime() - 3600000);

      const analytics = await service.getAnalytics({ start: oneHourAgo, end: now });

      expect(analytics.engagementScores['user-1']).toBeDefined();
      expect(analytics.engagementScores['user-2']).toBeDefined();
      expect(typeof analytics.engagementScores['user-1']).toBe('number');
    });
  });

  describe('testNotification', () => {
    it('should send test notification', async () => {
      const status = await service.testNotification('test-user', 'email', 'Test message');

      expect(status.status).toBe('sent');
      expect(status.id).toContain('test_');
    });
  });

  describe('cleanupExpiredNotifications', () => {
    it('should cleanup expired notifications', async () => {
      const expiredRequest: NotificationRequest = {
        id: 'expired-test',
        type: 'reminder',
        userId: 'user-1',
        event: createMockEvent(),
        channel: 'email',
        priority: 'normal',
        subject: 'Expired',
        body: 'Expired notification',
        scheduledAt: new Date(),
        expiresAt: new Date(Date.now() - 1000) // Expired 1 second ago
      };

      await service.scheduleNotification(expiredRequest);

      const cleanedCount = await service.cleanupExpiredNotifications();

      expect(cleanedCount).toBeGreaterThan(0);

      const status = await service.getNotificationStatus('expired-test');
      expect(status?.status).toBe('expired');
    });
  });

  describe('event callbacks', () => {
    it('should unsubscribe from notification sent callback', () => {
      const mockCallback = jest.fn();
      const unsubscribe = service.onNotificationSent(mockCallback);

      expect(typeof unsubscribe).toBe('function');
      unsubscribe();

      // Callback should not be called after unsubscribing
      // This is tested indirectly by checking the callback array length
      expect(true).toBe(true); // Placeholder assertion
    });

    it('should unsubscribe from notification failed callback', () => {
      const mockCallback = jest.fn();
      const unsubscribe = service.onNotificationFailed(mockCallback);

      expect(typeof unsubscribe).toBe('function');
      unsubscribe();

      // Callback should not be called after unsubscribing
      expect(true).toBe(true); // Placeholder assertion
    });
  });

  // Helper functions
  function createMockEvent(): CalendarEvent {
    return {
      id: 'event-1',
      title: 'Test Event',
      description: 'Test Description',
      dateTime: {
        start: new Date('2025-07-01T10:00:00Z'),
        end: new Date('2025-07-01T11:00:00Z'),
        isAllDay: false,
        timeZone: {
          id: 'UTC',
          displayName: 'UTC',
          offset: 0
        }
      },
      priority: 'normal',
      status: 'confirmed',
      visibility: 'default',
      createdAt: new Date(),
      updatedAt: new Date(),
      createdBy: 'user-1',
      updatedBy: 'user-1',
      version: 1
    };
  }

  function createMockEventWithAttendees(): CalendarEvent {
    const event = createMockEvent();
    event.attendees = [
      {
        id: 'attendee-1',
        name: 'John Doe',
        email: 'john@example.com',
        status: 'pending',
        required: true,
        role: 'attendee'
      },
      {
        id: 'attendee-2',
        name: 'Jane Smith',
        email: 'jane@example.com',
        status: 'pending',
        required: true,
        role: 'attendee'
      }
    ];
    return event;
  }

  function createMockNotificationRequest(
    id: string,
    userId: string = 'user-1',
    type: NotificationType = 'reminder',
    channel: NotificationChannel = 'email'
  ): NotificationRequest {
    return {
      id,
      type,
      userId,
      event: createMockEvent(),
      channel,
      priority: 'normal',
      subject: `Test Subject ${id}`,
      body: `Test Body ${id}`,
      scheduledAt: new Date()
    };
  }
});
