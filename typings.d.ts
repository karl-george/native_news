export interface NewsList {
  newsList: News[];
}

export interface News {
  news: NewsArticle[];
}

export interface NewsArticle {
  article_id: string;
  title: string;
  link: string;
  keywords: null;
  creator: string[];
  video_url: null;
  description: string;
  content: string;
  pubDate: string;
  image_url: string;
  source_id: string;
  source_priority: number;
  source_url: string;
  source_icon: string;
  language: string;
  country: string[];
  category: string[];
  ai_tag: string;
  sentiment: string;
  sentiment_stats: string;
  ai_region: string;
}
