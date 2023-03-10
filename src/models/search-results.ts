interface UnpagedSearchResult<T> {
  results: T[];
}

interface PagedSearchResult<T> extends UnpagedSearchResult<T> {
  query: string;
  offset: number;
  limit: number;
  total: number;
}
