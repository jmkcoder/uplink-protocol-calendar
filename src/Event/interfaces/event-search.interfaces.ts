/**
 * Event Search Interfaces
 * 
 * Defines interfaces for advanced event search and filtering capabilities
 */

import { CalendarEvent, EventFilter } from './event.interfaces';

/**
 * Search query structure
 */
export interface SearchQuery {
  /** Text search terms */
  text?: string;
  /** Field-specific searches */
  fields?: {
    title?: string;
    description?: string;
    location?: string;
    attendees?: string;
    category?: string;
  };
  /** Date range filters */
  dateRange?: {
    start?: Date;
    end?: Date;
    type?: 'exact' | 'between' | 'before' | 'after' | 'relative';
    relative?: {
      value: number;
      unit: 'days' | 'weeks' | 'months' | 'years';
      direction: 'past' | 'future';
    };
  };
  /** Advanced filters */
  filters?: EventFilter;
  /** Boolean operators */
  operators?: {
    textOperator?: 'and' | 'or';
    filterOperator?: 'and' | 'or';
  };
  /** Sorting options */
  sort?: {
    field: 'title' | 'dateTime.start' | 'dateTime.end' | 'priority' | 'status' | 'createdAt' | 'updatedAt';
    direction: 'asc' | 'desc';
  };
  /** Pagination limit */
  limit?: number;
  /** Pagination offset */
  offset?: number;
  /** Facets configuration */
  facets?: {
    categories?: { enabled: boolean };
    status?: { enabled: boolean };
    priority?: { enabled: boolean };
    attendees?: { enabled: boolean };
  };
}

/**
 * Search result item
 */
export interface SearchResultItem {
  /** Event data */
  event: CalendarEvent;
  /** Relevance score (0-1) */
  score: number;
  /** Matched fields */
  matchedFields: string[];
  /** Highlighted text snippets */
  highlights: {
    field: string;
    snippet: string;
    start: number;
    end: number;
  }[];
  /** Search context */
  context?: string;
}

/**
 * Search results
 */
export interface SearchResults {
  /** Search result items */
  items: SearchResultItem[];
  /** Total number of matches */
  total: number;
  /** Total count (alias for total) */
  totalCount: number;
  /** Whether there are more results */
  hasMore: boolean;
  /** Search execution time in milliseconds */
  executionTime: number;
  /** Search query used */
  query: SearchQuery;
  /** Suggestions for refinement */
  suggestions?: string[];
  /** Faceted search results */
  facets?: SearchFacets;
}

/**
 * Search facets for filtering
 */
export interface SearchFacets {
  /** Categories with counts */
  categories: Array<{ name: string; count: number }>;
  /** Statuses with counts */
  status: Array<{ name: string; count: number }>;
  /** Priorities with counts */
  priority: Array<{ name: string; count: number }>;
  /** Attendees with counts */
  attendees: Array<{ name: string; count: number }>;
  /** Tags with counts */
  tags: Array<{ name: string; count: number }>;
  /** Date ranges with counts */
  dateRanges: Array<{ label: string; start: Date; end: Date; count: number }>;
}

/**
 * Search index configuration
 */
export interface SearchIndexConfig {
  /** Fields to index */
  indexedFields: string[];
  /** Enable full-text search */
  enableFullTextSearch: boolean;
  /** Enable fuzzy matching */
  enableFuzzySearch: boolean;
  /** Fuzzy search threshold (0-1) */
  fuzzyThreshold: number;
  /** Enable stemming */
  enableStemming: boolean;
  /** Stop words to ignore */
  stopWords: string[];
  /** Custom field weights for scoring */
  fieldWeights: Record<string, number>;
}

/**
 * Saved search
 */
export interface SavedSearch {
  /** Unique identifier */
  id: string;
  /** Search name */
  name: string;
  /** Search query */
  query: SearchQuery;
  /** Owner */
  owner: string;
  /** User ID (alias for owner) */
  userId: string;
  /** Whether search is shared */
  isShared: boolean;
  /** Creation date */
  createdAt: Date;
  /** Last used date */
  lastUsed?: Date;
  /** Usage count */
  usageCount: number;
  /** Auto-refresh interval */
  autoRefresh?: number;
}

/**
 * Search analytics
 */
export interface SearchAnalytics {
  /** Most searched terms */
  popularTerms: Array<{ term: string; count: number }>;
  /** Search frequency by time */
  searchFrequency: Array<{ date: Date; count: number }>;
  /** No-result searches */
  noResultQueries: Array<{ query: string; count: number }>;
  /** Average search time */
  averageSearchTime: number;
  /** Most used filters */
  popularFilters: Array<{ filter: string; count: number }>;
}

/**
 * Event search service interface
 */
export interface IEventSearchService {
  /**
   * Initialize search service
   */
  initialize(config: SearchIndexConfig): Promise<void>;

  /**
   * Build search index
   */
  buildIndex(events: CalendarEvent[]): Promise<void>;

  /**
   * Add event to index
   */
  addToIndex(event: CalendarEvent): Promise<void>;

  /**
   * Update event in index
   */
  updateInIndex(event: CalendarEvent): Promise<void>;

  /**
   * Remove event from index
   */
  removeFromIndex(eventId: string): Promise<void>;

  /**
   * Search events
   */
  search(
    query: SearchQuery,
    page?: number,
    pageSize?: number
  ): Promise<SearchResults>;

  /**
   * Quick text search
   */
  quickSearch(text: string, limit?: number): Promise<SearchResultItem[]>;

  /**
   * Get search suggestions
   */
  getSuggestions(partialText: string, limit?: number): Promise<string[]>;

  /**
   * Get search facets
   */
  getFacets(query?: SearchQuery): Promise<SearchFacets>;

  /**
   * Save search query
   */
  saveSearch(name: string, query: SearchQuery, userId: string): Promise<SavedSearch>;

  /**
   * Get saved searches
   */
  getSavedSearches(userId?: string): Promise<SavedSearch[]>;

  /**
   * Delete saved search
   */
  deleteSavedSearch(id: string): Promise<void>;

  /**
   * Execute saved search
   */
  executeSavedSearch(id: string): Promise<SearchResults>;

  /**
   * Get search analytics
   */
  getAnalytics(dateRange?: { start: Date; end: Date }): Promise<SearchAnalytics>;

  /**
   * Get search analytics (alternative method name)
   */
  getSearchAnalytics(): Promise<{
    totalSearches: number;
    topQueries: Array<{ query: string; count: number }>;
    avgSearchTime: number;
    noResultsRate: number;
  }>;

  /**
   * Clear search index
   */
  clearIndex(): Promise<void>;

  /**
   * Rebuild search index
   */
  rebuildIndex(events?: CalendarEvent[]): Promise<void>;

  /**
   * Get index statistics
   */
  getIndexStats(): Promise<{
    totalEvents: number;
    indexSize: number;
    lastUpdated: Date;
    health: 'good' | 'degraded' | 'poor';
  }>;

  /**
   * Export search results
   */
  exportSearchResults(
    results: SearchResults,
    format: 'csv' | 'json' | 'xml'
  ): Promise<{ data: string; filename: string }>;
}
