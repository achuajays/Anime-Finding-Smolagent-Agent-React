
export interface Anime {
  id: number;
  title: string;
  title_english?: string;
  title_japanese?: string;
  image_url: string;
  synopsis: string;
  score?: number;
  episodes?: number;
  status?: string;
  aired?: string;
  genres: string[];
  rating?: string;
  duration?: string;
  studios?: string[];
}

export interface SearchResponse {
  results: Anime[];
  message?: string;
}

export interface SearchRequest {
  query: string;
}
