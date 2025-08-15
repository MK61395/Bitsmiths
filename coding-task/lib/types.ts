export interface HackerNewsStory {
  id: number;
  title: string;
  url?: string;
  text?: string;
  score: number;
  by: string;
  time: number;
  descendants: number;
  type: 'story';
  kids?: number[];
}

export interface HackerNewsUser {
  id: string;
  created: number;
  karma: number;
  about?: string;
  submitted?: number[];
}

export interface StoryItem {
  id: number;
  title: string;
  url: string;
  points: number;
  author: string;
  timeAgo: string;
  comments: number;
  rank: number;
}

export interface ApiResponse<T> {
  data: T;
  error?: string;
}
