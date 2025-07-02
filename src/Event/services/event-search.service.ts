import {
  IEventSearchService,
  SearchQuery,
  SearchResults,
  SearchResultItem,
  SearchFacets,
  SavedSearch,
  SearchIndexConfig
} from '../interfaces/event-search.interfaces';
import { CalendarEvent } from '../interfaces/event.interfaces';

/**
 * Implementation of event search service
 * Provides comprehensive search and filtering capabilities for events
 */
export class EventSearchService implements IEventSearchService {
  private events: CalendarEvent[] = [];
  private savedSearches: SavedSearch[] = [];
  private searchHistory: Array<{ query: SearchQuery; timestamp: Date; resultCount: number }> = [];
  private indexConfig: SearchIndexConfig = {
    indexedFields: ['title', 'description', 'location.name'],
    enableFullTextSearch: true,
    enableFuzzySearch: false,
    fuzzyThreshold: 0.7,
    enableStemming: false,
    stopWords: ['the', 'a', 'an', 'and', 'or', 'but'],
    fieldWeights: {
      title: 2,
      description: 1,
      'location.name': 1.5
    }
  };

  async initialize(config: SearchIndexConfig): Promise<void> {
    this.indexConfig = { ...this.indexConfig, ...config };
  }

  async buildIndex(events: CalendarEvent[]): Promise<void> {
    this.events = [...events];
  }

  async addToIndex(event: CalendarEvent): Promise<void> {
    const existingIndex = this.events.findIndex(e => e.id === event.id);
    if (existingIndex >= 0) {
      this.events[existingIndex] = event;
    } else {
      this.events.push(event);
    }
  }

  async updateInIndex(event: CalendarEvent): Promise<void> {
    await this.addToIndex(event);
  }

  async removeFromIndex(eventId: string): Promise<void> {
    this.events = this.events.filter(e => e.id !== eventId);
  }

  async search(
    query: SearchQuery,
    page = 1,
    pageSize = 20
  ): Promise<SearchResults> {
    const startTime = Date.now();
    let filteredEvents = [...this.events];

    // Apply text search
    if (query.text) {
      filteredEvents = this.applyTextSearch(filteredEvents, query.text);
    }

    // Apply field-specific searches
    if (query.fields) {
      filteredEvents = this.applyFieldSearch(filteredEvents, query.fields);
    }

    // Apply date range filter
    if (query.dateRange) {
      filteredEvents = this.applyDateRangeFilter(filteredEvents, query.dateRange);
    }

    // Apply advanced filters
    if (query.filters) {
      filteredEvents = this.applyAdvancedFilters(filteredEvents, query.filters);
    }

    // Convert to search result items with scoring
    let searchResults: SearchResultItem[] = filteredEvents.map(event => ({
      event,
      score: this.calculateRelevanceScore(event, query),
      matchedFields: this.getMatchedFields(event, query),
      highlights: this.generateProperHighlights(event, query)
    }));

    // Apply sorting
    if (query.sort) {
      searchResults = this.applySorting(searchResults, query.sort);
    } else {
      // Default sort by relevance score
      searchResults.sort((a, b) => b.score - a.score);
    }

    // Calculate pagination
    const totalResults = searchResults.length;
    const limit = query.limit || pageSize;
    const offset = query.offset || (page - 1) * pageSize;
    const paginatedResults = searchResults.slice(offset, offset + limit);
    const hasMore = offset + limit < totalResults;

    const executionTime = Date.now() - startTime;
    
    // Record search history
    this.searchHistory.push({
      query,
      timestamp: new Date(),
      resultCount: totalResults
    });

    return {
      items: paginatedResults,
      total: totalResults,
      totalCount: totalResults,
      hasMore,
      executionTime,
      query,
      facets: query.facets ? await this.getFacets(query) : undefined,
      suggestions: await this.getSuggestions(query.text || '', 5)
    };
  }

  async quickSearch(text: string, limit = 10): Promise<SearchResultItem[]> {
    const results = await this.search({ text }, 1, limit);
    return results.items;
  }

  async getSuggestions(partialText: string, limit = 5): Promise<string[]> {
    if (!partialText || partialText.length < 2) return [];
    
    const suggestions = new Set<string>();
    const textLower = partialText.toLowerCase();
    
    this.events.forEach(event => {
      if (event.title.toLowerCase().includes(textLower)) {
        suggestions.add(event.title);
      }
      if (event.category && event.category.toLowerCase().includes(textLower)) {
        suggestions.add(event.category);
      }
      if (event.location?.name && event.location.name.toLowerCase().includes(textLower)) {
        suggestions.add(event.location.name);
      }
    });
    
    return Array.from(suggestions).slice(0, limit);
  }

  async getFacets(_query?: SearchQuery): Promise<SearchFacets> {
    // Use all events for facets to avoid circular dependency with search()
    const relevantEvents = this.events;
    
    const categories = new Map<string, number>();
    const statuses = new Map<string, number>();
    const priorities = new Map<string, number>();
    const locations = new Map<string, number>();
    
    relevantEvents.forEach(event => {
      if (event.category) {
        categories.set(event.category, (categories.get(event.category) || 0) + 1);
      }
      if (event.status) {
        statuses.set(event.status, (statuses.get(event.status) || 0) + 1);
      }
      if (event.priority) {
        priorities.set(event.priority, (priorities.get(event.priority) || 0) + 1);
      }
      if (event.location?.name) {
        locations.set(event.location.name, (locations.get(event.location.name) || 0) + 1);
      }
    });
    
    return {
      categories: Array.from(categories.entries()).map(([name, count]) => ({ name, count })),
      status: Array.from(statuses.entries()).map(([name, count]) => ({ name, count })),
      priority: Array.from(priorities.entries()).map(([name, count]) => ({ name, count })),
      attendees: Array.from(locations.entries()).map(([name, count]) => ({ name, count })),
      tags: [],
      dateRanges: []
    };
  }

  async saveSearch(name: string, query: SearchQuery, userId: string): Promise<SavedSearch> {
    const savedSearch: SavedSearch = {
      id: `search-${Date.now()}`,
      name,
      query,
      owner: userId,
      userId,
      isShared: false,
      createdAt: new Date(),
      usageCount: 0
    };
    
    this.savedSearches.push(savedSearch);
    return savedSearch;
  }

  async getSavedSearches(userId?: string): Promise<SavedSearch[]> {
    if (userId) {
      return this.savedSearches.filter(search => search.owner === userId);
    }
    return [...this.savedSearches];
  }

  async deleteSavedSearch(searchId: string): Promise<void> {
    console.log(`Deleting saved search: ${searchId}`);
    this.savedSearches = this.savedSearches.filter(search => search.id !== searchId);
  }

  async executeSavedSearch(searchId: string): Promise<SearchResults> {
    const savedSearch = this.savedSearches.find(search => search.id === searchId);
    if (!savedSearch) {
      throw new Error(`Saved search ${searchId} not found`);
    }
    
    // Update usage count
    savedSearch.usageCount++;
    savedSearch.lastUsed = new Date();
    
    return this.search(savedSearch.query);
  }

  async getAnalytics(): Promise<any> {
    return {
      totalSearches: this.searchHistory.length,
      popularQueries: [],
      avgSearchTime: 0,
      searchVolume: {}
    };
  }

  async getSearchAnalytics(): Promise<{
    totalSearches: number;
    topQueries: Array<{ query: string; count: number }>;
    avgSearchTime: number;
    noResultsRate: number;
  }> {
    const totalSearches = this.searchHistory.length;
    const topQueries: Array<{ query: string; count: number }> = [];
    
    if (totalSearches > 0) {
      const queryMap = new Map<string, number>();
      
      this.searchHistory.forEach(entry => {
        const queryText = entry.query.text || 'empty-query';
        queryMap.set(queryText, (queryMap.get(queryText) || 0) + 1);
      });
      
      topQueries.push(...Array.from(queryMap.entries())
        .map(([query, count]) => ({ query, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 10));
    }
    
    const noResultsCount = this.searchHistory.filter(entry => entry.resultCount === 0).length;
    const noResultsRate = totalSearches > 0 ? noResultsCount / totalSearches : 0;
    
    return {
      totalSearches,
      topQueries,
      avgSearchTime: 50, // Mock average
      noResultsRate
    };
  }

  async rebuildIndex(events?: CalendarEvent[]): Promise<void> {
    console.log('Rebuilding search index...');
    if (events) {
      this.events = [...events];
    }
  }

  async exportSearchResults(results: SearchResults, format: string): Promise<{ data: string; filename: string; mimeType: string }> {
    if (format === 'json') {
      return {
        data: JSON.stringify(results, null, 2),
        filename: `search-results-${Date.now()}.json`,
        mimeType: 'application/json'
      };
    }
    throw new Error(`Unsupported export format: ${format}`);
  }

  async clearIndex(): Promise<void> {
    this.events = [];
  }

  async getIndexStats(): Promise<{ totalEvents: number; indexSize: number; lastUpdated: Date; health: 'good' | 'degraded' | 'poor' }> {
    return {
      totalEvents: this.events.length,
      indexSize: this.events.length * 1024, // Rough estimate
      lastUpdated: new Date(),
      health: 'good'
    };
  }

  private applyTextSearch(events: CalendarEvent[], text: string): CalendarEvent[] {
    const searchTerms = text.toLowerCase().split(/\s+/).filter(term => term.length > 0);
    
    return events.filter(event => {
      const searchableText = [
        event.title,
        event.description || '',
        event.location?.name || '',
        event.location?.address || '',
        event.category || ''
      ].join(' ').toLowerCase();

      return searchTerms.every(term => searchableText.includes(term));
    });
  }

  private applyFieldSearch(events: CalendarEvent[], fields: NonNullable<SearchQuery['fields']>): CalendarEvent[] {
    return events.filter(event => {
      return Object.entries(fields).every(([field, value]) => {
        if (!value) return true;
        
        const valueLower = value.toLowerCase();
        switch (field) {
          case 'title':
            return event.title.toLowerCase().includes(valueLower);
          case 'description':
            return (event.description || '').toLowerCase().includes(valueLower);
          case 'location':
            return (event.location?.name || '').toLowerCase().includes(valueLower);
          case 'category':
            return (event.category || '').toLowerCase().includes(valueLower);
          case 'attendees':
            return event.attendees?.some(a => 
              (a.name || '').toLowerCase().includes(valueLower) || 
              (a.email || '').toLowerCase().includes(valueLower)
            ) || false;
          default:
            return true;
        }
      });
    });
  }

  private applyDateRangeFilter(events: CalendarEvent[], dateRange: NonNullable<SearchQuery['dateRange']>): CalendarEvent[] {
    let startDate: Date | undefined;
    let endDate: Date | undefined;

    if (dateRange.type === 'relative' && dateRange.relative) {
      const now = new Date();
      const { value, unit, direction } = dateRange.relative;
      const milliseconds = this.getMilliseconds(value, unit);
      
      if (direction === 'past') {
        startDate = new Date(now.getTime() - milliseconds);
        endDate = now;
      } else {
        startDate = now;
        endDate = new Date(now.getTime() + milliseconds);
      }
    } else {
      startDate = dateRange.start;
      endDate = dateRange.end;
    }

    if (!startDate && !endDate) return events;

    return events.filter(event => {
      const eventStart = new Date(event.dateTime.start);
      const eventEnd = new Date(event.dateTime.end);
      
      if (startDate && eventEnd < startDate) return false;
      if (endDate && eventStart > endDate) return false;
      
      return true;
    });
  }

  private applyAdvancedFilters(events: CalendarEvent[], filters: NonNullable<SearchQuery['filters']>): CalendarEvent[] {
    return events.filter(event => {
      // Filter by categories
      if (filters.categories && filters.categories.length > 0) {
        if (!event.category || !filters.categories.includes(event.category)) {
          return false;
        }
      }

      // Filter by status
      if (filters.statuses && filters.statuses.length > 0) {
        if (!event.status || !filters.statuses.includes(event.status)) {
          return false;
        }
      }

      // Filter by priority (handle both priorities and priority)
      const priorities = (filters as any).priority || filters.priorities;
      if (priorities && priorities.length > 0) {
        if (!event.priority || !priorities.includes(event.priority)) {
          return false;
        }
      }

      // Filter by date range
      if (filters.dateRange) {
        const eventStart = new Date(event.dateTime.start);
        const eventEnd = new Date(event.dateTime.end);
        
        if (filters.dateRange.start && eventEnd < filters.dateRange.start) {
          return false;
        }
        
        if (filters.dateRange.end && eventStart > filters.dateRange.end) {
          return false;
        }
      }

      return true;
    });
  }

  private calculateRelevanceScore(event: CalendarEvent, query: SearchQuery): number {
    let score = 0;
    
    if (query.text) {
      const textLower = query.text.toLowerCase();
      
      // Title match gets highest score
      if (event.title.toLowerCase().includes(textLower)) {
        score += 10;
      }
      
      // Description match gets medium score
      if (event.description?.toLowerCase().includes(textLower)) {
        score += 5;
      }
      
      // Location match gets lower score
      if (event.location?.name?.toLowerCase().includes(textLower)) {
        score += 3;
      }
    }
    
    // Boost recent events slightly
    const eventDate = new Date(event.dateTime.start);
    const daysSinceEvent = (Date.now() - eventDate.getTime()) / (1000 * 60 * 60 * 24);
    if (daysSinceEvent < 7) {
      score += 1;
    }
    
    return Math.max(score, 0.1); // Minimum score
  }

  private getMatchedFields(event: CalendarEvent, query: SearchQuery): string[] {
    const matchedFields: string[] = [];
    
    if (query.text) {
      const textLower = query.text.toLowerCase();
      
      if (event.title.toLowerCase().includes(textLower)) {
        matchedFields.push('title');
      }
      
      if (event.description?.toLowerCase().includes(textLower)) {
        matchedFields.push('description');
      }
      
      if (event.location?.name?.toLowerCase().includes(textLower)) {
        matchedFields.push('location');
      }
    }
    
    return matchedFields;
  }

  private generateProperHighlights(event: CalendarEvent, query: SearchQuery): Array<{ field: string; snippet: string; start: number; end: number }> {
    const highlights: Array<{ field: string; snippet: string; start: number; end: number }> = [];
    
    if (query.text) {
      const textLower = query.text.toLowerCase();
      
      if (event.title.toLowerCase().includes(textLower)) {
        const start = event.title.toLowerCase().indexOf(textLower);
        highlights.push({
          field: 'title',
          snippet: event.title,
          start,
          end: start + query.text.length
        });
      }
      
      if (event.description?.toLowerCase().includes(textLower)) {
        const start = event.description.toLowerCase().indexOf(textLower);
        highlights.push({
          field: 'description',
          snippet: event.description,
          start,
          end: start + query.text.length
        });
      }
    }
    
    return highlights;
  }

  private getMilliseconds(value: number, unit: string): number {
    switch (unit) {
      case 'days':
        return value * 24 * 60 * 60 * 1000;
      case 'weeks':
        return value * 7 * 24 * 60 * 60 * 1000;
      case 'months':
        return value * 30 * 24 * 60 * 60 * 1000; // Approximate
      case 'years':
        return value * 365 * 24 * 60 * 60 * 1000; // Approximate
      default:
        return 0;
    }
  }

  private applySorting(results: SearchResultItem[], sort: NonNullable<SearchQuery['sort']>): SearchResultItem[] {
    return results.sort((a, b) => {
      let compareValue = 0;
      
      switch (sort.field) {
        case 'title':
          compareValue = a.event.title.localeCompare(b.event.title);
          break;
        case 'dateTime.start':
          compareValue = new Date(a.event.dateTime.start).getTime() - new Date(b.event.dateTime.start).getTime();
          break;
        case 'dateTime.end':
          compareValue = new Date(a.event.dateTime.end).getTime() - new Date(b.event.dateTime.end).getTime();
          break;
        case 'priority':
          const priorityOrder = { low: 1, normal: 2, high: 3 };
          const aPriority = priorityOrder[a.event.priority as keyof typeof priorityOrder] || 0;
          const bPriority = priorityOrder[b.event.priority as keyof typeof priorityOrder] || 0;
          compareValue = aPriority - bPriority;
          break;
        case 'status':
          compareValue = (a.event.status || '').localeCompare(b.event.status || '');
          break;
        case 'createdAt':
          compareValue = new Date(a.event.createdAt).getTime() - new Date(b.event.createdAt).getTime();
          break;
        case 'updatedAt':
          compareValue = new Date(a.event.updatedAt).getTime() - new Date(b.event.updatedAt).getTime();
          break;
        default:
          compareValue = 0;
      }
      
      return sort.direction === 'desc' ? -compareValue : compareValue;
    });
  }
}
