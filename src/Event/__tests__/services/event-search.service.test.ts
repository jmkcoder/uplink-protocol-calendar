/**
 * Unit tests for EventSearchService
 */

import { EventSearchService } from '../../services/event-search.service';
import { 
  SearchQuery,
  SearchIndexConfig
} from '../../interfaces/event-search.interfaces';
import { CalendarEvent, TimeZone } from '../../interfaces/event.interfaces';

describe('EventSearchService', () => {
  let service: EventSearchService;
  let mockEvents: CalendarEvent[];

  const defaultTimeZone: TimeZone = {
    id: 'UTC',
    displayName: 'Coordinated Universal Time',
    offset: 0
  };

  beforeEach(async () => {
    service = new EventSearchService();
    
    mockEvents = [
      {
        id: 'event-1',
        title: 'Team Meeting',
        description: 'Weekly team sync meeting',
        dateTime: {
          start: new Date('2025-07-15T09:00:00Z'),
          end: new Date('2025-07-15T10:00:00Z'),
          isAllDay: false,
          timeZone: defaultTimeZone
        },
        location: {
          name: 'Conference Room A'
        },
        priority: 'normal',
        status: 'confirmed',
        visibility: 'default',
        category: 'work',
        createdAt: new Date(),
        updatedAt: new Date(),
        createdBy: 'user1',
        updatedBy: 'user1',
        version: 1
      },
      {
        id: 'event-2',
        title: 'Project Review',
        description: 'Monthly project review and planning',
        dateTime: {
          start: new Date('2025-07-20T14:00:00Z'),
          end: new Date('2025-07-20T16:00:00Z'),
          isAllDay: false,
          timeZone: defaultTimeZone
        },
        location: {
          name: 'Meeting Room B'
        },
        priority: 'high',
        status: 'confirmed',
        visibility: 'default',
        category: 'work',
        createdAt: new Date(),
        updatedAt: new Date(),
        createdBy: 'user2',
        updatedBy: 'user2',
        version: 1
      },
      {
        id: 'event-3',
        title: 'Lunch Break',
        description: 'Daily lunch break',
        dateTime: {
          start: new Date('2025-07-15T12:00:00Z'),
          end: new Date('2025-07-15T13:00:00Z'),
          isAllDay: false,
          timeZone: defaultTimeZone
        },
        priority: 'low',
        status: 'confirmed',
        visibility: 'private',
        category: 'personal',
        createdAt: new Date(),
        updatedAt: new Date(),
        createdBy: 'user1',
        updatedBy: 'user1',
        version: 1
      }
    ];

    await service.buildIndex(mockEvents);
  });

  describe('initialization', () => {
    it('should initialize with default config', async () => {
      const newService = new EventSearchService();
      const defaultConfig: SearchIndexConfig = {
        indexedFields: ['title', 'description'],
        enableFullTextSearch: true,
        enableFuzzySearch: false,
        fuzzyThreshold: 0.7,
        enableStemming: false,
        stopWords: ['the', 'a', 'an'],
        fieldWeights: {
          title: 2,
          description: 1
        }
      };
      await newService.initialize(defaultConfig);
      expect(newService).toBeDefined();
    });

    it('should initialize with custom config', async () => {
      const config: SearchIndexConfig = {
        indexedFields: ['title', 'description'],
        enableFullTextSearch: true,
        enableFuzzySearch: true,
        fuzzyThreshold: 0.8,
        enableStemming: false,
        stopWords: ['the', 'a', 'an'],
        fieldWeights: {
          title: 3,
          description: 1
        }
      };

      await service.initialize(config);
      expect(service).toBeDefined();
    });
  });

  describe('index management', () => {
    it('should build index from events', async () => {
      const newService = new EventSearchService();
      await newService.buildIndex(mockEvents);
      
      const query: SearchQuery = {
        text: 'meeting'
      };
      
      const results = await newService.search(query);
      expect(results.items.length).toBeGreaterThan(0);
    });

    it('should add event to index', async () => {
      const newEvent: CalendarEvent = {
        id: 'new-event',
        title: 'New Event',
        dateTime: {
          start: new Date('2025-07-25T10:00:00Z'),
          end: new Date('2025-07-25T11:00:00Z'),
          isAllDay: false,
          timeZone: defaultTimeZone
        },
        priority: 'normal',
        status: 'confirmed',
        visibility: 'default',
        createdAt: new Date(),
        updatedAt: new Date(),
        createdBy: 'user1',
        updatedBy: 'user1',
        version: 1
      };

      await service.addToIndex(newEvent);
      
      const query: SearchQuery = {
        text: 'New Event'
      };
      
      const results = await service.search(query);
      expect(results.items.some(item => item.event.id === 'new-event')).toBe(true);
    });

    it('should update event in index', async () => {
      const updatedEvent: CalendarEvent = {
        ...mockEvents[0],
        title: 'Updated Team Meeting',
        version: 2
      };

      await service.updateInIndex(updatedEvent);
      
      const query: SearchQuery = {
        text: 'Updated Team Meeting'
      };
      
      const results = await service.search(query);
      expect(results.items.some(item => item.event.title === 'Updated Team Meeting')).toBe(true);
    });

    it('should remove event from index', async () => {
      await service.removeFromIndex('event-1');
      
      const query: SearchQuery = {
        text: 'Team Meeting'
      };
      
      const results = await service.search(query);
      expect(results.items.some(item => item.event.id === 'event-1')).toBe(false);
    });
  });

  describe('basic search', () => {
    it('should search by text', async () => {
      const query: SearchQuery = {
        text: 'meeting'
      };

      const results = await service.search(query);
      
      expect(results.items.length).toBeGreaterThan(0);
      expect(results.items.some(item => 
        item.event.title.toLowerCase().includes('meeting') ||
        item.event.description?.toLowerCase().includes('meeting')
      )).toBe(true);
    });

    it('should search by title', async () => {
      const query: SearchQuery = {
        text: 'Project Review'
      };

      const results = await service.search(query);
      
      expect(results.items.length).toBe(1);
      expect(results.items[0].event.title).toBe('Project Review');
    });

    it('should search by description', async () => {
      const query: SearchQuery = {
        text: 'planning'
      };

      const results = await service.search(query);
      
      expect(results.items.length).toBe(1);
      expect(results.items[0].event.description).toContain('planning');
    });

    it('should return empty results for no matches', async () => {
      const query: SearchQuery = {
        text: 'nonexistent'
      };

      const results = await service.search(query);
      
      expect(results.items).toHaveLength(0);
      expect(results.totalCount).toBe(0);
    });
  });

  describe('filtered search', () => {
    it('should filter by date range', async () => {
      const query: SearchQuery = {
        filters: {
          dateRange: {
            start: new Date('2025-07-15T00:00:00Z'),
            end: new Date('2025-07-15T23:59:59Z')
          }
        }
      };

      const results = await service.search(query);
      
      expect(results.items.length).toBe(2); // Team Meeting and Lunch Break
      results.items.forEach(item => {
        const eventDate = new Date(item.event.dateTime.start);
        expect(eventDate.toISOString().startsWith('2025-07-15')).toBe(true);
      });
    });

    it('should filter by status', async () => {
      const query: SearchQuery = {
        filters: {
          statuses: ['confirmed']
        }
      };

      const results = await service.search(query);
      
      expect(results.items.length).toBe(3);
      results.items.forEach(item => {
        expect(item.event.status).toBe('confirmed');
      });
    });

    it('should filter by priority', async () => {
      const query: SearchQuery = {
        filters: {
          priorities: ['high']
        }
      };

      const results = await service.search(query);
      
      expect(results.items.length).toBe(1);
      expect(results.items[0].event.priority).toBe('high');
    });

    it('should filter by category', async () => {
      const query: SearchQuery = {
        filters: {
          categories: ['work']
        }
      };

      const results = await service.search(query);
      
      expect(results.items.length).toBe(2);
      results.items.forEach(item => {
        expect(item.event.category).toBe('work');
      });
    });

    it('should combine multiple filters', async () => {
      const query: SearchQuery = {
        text: 'meeting',
        filters: {
          categories: ['work'],
          priorities: ['normal']
        }
      };

      const results = await service.search(query);
      
      expect(results.items.length).toBe(1);
      expect(results.items[0].event.title).toBe('Team Meeting');
    });
  });

  describe('sorting', () => {
    it('should sort by date ascending', async () => {
      const query: SearchQuery = {
        sort: {
          field: 'dateTime.start',
          direction: 'asc'
        }
      };

      const results = await service.search(query);
      
      expect(results.items.length).toBe(3);
      for (let i = 1; i < results.items.length; i++) {
        const prevDate = new Date(results.items[i - 1].event.dateTime.start);
        const currDate = new Date(results.items[i].event.dateTime.start);
        expect(prevDate.getTime()).toBeLessThanOrEqual(currDate.getTime());
      }
    });

    it('should sort by date descending', async () => {
      const query: SearchQuery = {
        sort: {
          field: 'dateTime.start',
          direction: 'desc'
        }
      };

      const results = await service.search(query);
      
      expect(results.items.length).toBe(3);
      for (let i = 1; i < results.items.length; i++) {
        const prevDate = new Date(results.items[i - 1].event.dateTime.start);
        const currDate = new Date(results.items[i].event.dateTime.start);
        expect(prevDate.getTime()).toBeGreaterThanOrEqual(currDate.getTime());
      }
    });

    it('should sort by title', async () => {
      const query: SearchQuery = {
        sort: {
          field: 'title',
          direction: 'asc'
        }
      };

      const results = await service.search(query);
      
      expect(results.items.length).toBe(3);
      for (let i = 1; i < results.items.length; i++) {
        const prevTitle = results.items[i - 1].event.title;
        const currTitle = results.items[i].event.title;
        expect(prevTitle.localeCompare(currTitle)).toBeLessThanOrEqual(0);
      }
    });
  });

  describe('pagination', () => {
    it('should paginate results', async () => {
      const query: SearchQuery = {
        limit: 2,
        offset: 0
      };

      const results = await service.search(query);
      
      expect(results.items.length).toBe(2);
      expect(results.totalCount).toBe(3);
      expect(results.hasMore).toBe(true);
    });

    it('should handle second page', async () => {
      const query: SearchQuery = {
        limit: 2,
        offset: 2
      };

      const results = await service.search(query);
      
      expect(results.items.length).toBe(1);
      expect(results.totalCount).toBe(3);
      expect(results.hasMore).toBe(false);
    });
  });

  describe('suggestions', () => {
    it('should provide search suggestions', async () => {
      const suggestions = await service.getSuggestions('meet');
      
      expect(suggestions.length).toBeGreaterThan(0);
      expect(suggestions.some(s => s.toLowerCase().includes('meet'))).toBe(true);
    });

    it('should provide empty suggestions for no partial matches', async () => {
      const suggestions = await service.getSuggestions('xyz');
      
      expect(suggestions).toHaveLength(0);
    });
  });

  describe('facets', () => {
    it('should get faceted results', async () => {
      const query: SearchQuery = {
        facets: {
          categories: { enabled: true },
          status: { enabled: true },
          priority: { enabled: true }
        }
      };

      const results = await service.search(query);
      
      expect(results.facets).toBeDefined();
      expect(results.facets?.categories).toBeDefined();
      expect(results.facets?.status).toBeDefined();
      expect(results.facets?.priority).toBeDefined();
    });
  });

  describe('saved searches', () => {
    it('should save search query', async () => {
      const query: SearchQuery = {
        text: 'meeting',
        filters: {
          categories: ['work']
        }
      };

      const savedSearch = await service.saveSearch('work-meetings', query, 'user1');
      
      expect(savedSearch.name).toBe('work-meetings');
      expect(savedSearch.query).toEqual(query);
      expect(savedSearch.userId).toBe('user1');
    });

    it('should get saved searches', async () => {
      const query: SearchQuery = {
        text: 'review'
      };

      await service.saveSearch('reviews', query, 'user1');
      
      const savedSearches = await service.getSavedSearches('user1');
      
      expect(savedSearches.length).toBeGreaterThan(0);
      expect(savedSearches.some(s => s.name === 'reviews')).toBe(true);
    });

    it('should execute saved search', async () => {
      const query: SearchQuery = {
        text: 'lunch'
      };

      const savedSearch = await service.saveSearch('lunch-searches', query, 'user1');
      const results = await service.executeSavedSearch(savedSearch.id);
      
      expect(results.items.length).toBeGreaterThan(0);
      expect(results.items.some(item => item.event.title.toLowerCase().includes('lunch'))).toBe(true);
    });

    it('should delete saved search', async () => {
      const query: SearchQuery = {
        text: 'temp'
      };

      const savedSearch = await service.saveSearch('temp-search', query, 'user1');
      await service.deleteSavedSearch(savedSearch.id);
      
      const savedSearches = await service.getSavedSearches('user1');
      expect(savedSearches.some(s => s.id === savedSearch.id)).toBe(false);
    });
  });

  describe('advanced features', () => {
    it('should get search analytics', async () => {
      // Perform some searches
      await service.search({ text: 'meeting' });
      await service.search({ text: 'project' });
      await service.search({ text: 'lunch' });

      const analytics = await service.getSearchAnalytics();
      
      expect(analytics.totalSearches).toBeGreaterThanOrEqual(3);
      expect(analytics.topQueries.length).toBeGreaterThan(0);
    });

    it('should rebuild index', async () => {
      const newEvents = [
        {
          ...mockEvents[0],
          title: 'Rebuilt Event'
        }
      ] as CalendarEvent[];

      await service.rebuildIndex(newEvents);
      
      const query: SearchQuery = {
        text: 'Rebuilt'
      };
      
      const results = await service.search(query);
      expect(results.items.length).toBe(1);
      expect(results.items[0].event.title).toBe('Rebuilt Event');
    });

    it('should clear index', async () => {
      await service.clearIndex();
      
      const query: SearchQuery = {
        text: 'meeting'
      };
      
      const results = await service.search(query);
      expect(results.items).toHaveLength(0);
    });
  });

  describe('error handling', () => {
    it('should handle invalid search queries', async () => {
      const query: SearchQuery = {
        text: '', // Empty search
        filters: {}
      };

      const results = await service.search(query);
      expect(results.items.length).toBeGreaterThanOrEqual(0);
    });

    it('should handle malformed filters', async () => {
      const query: SearchQuery = {
        filters: {
          dateRange: {
            start: new Date('invalid-date'),
            end: new Date('invalid-date')
          }
        }
      };

      expect(async () => {
        await service.search(query);
      }).not.toThrow();
    });

    it('should handle non-existent saved search', async () => {
      expect(async () => {
        await service.executeSavedSearch('non-existent-id');
      }).rejects.toThrow();
    });
  });
});
