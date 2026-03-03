export interface ICHItem {
  id: string;
  title: string;
  category: string;
  type: 'artwork' | 'news' | 'technique' | 'story' | 'festival';
  content: string;
  image: string;
  date?: string;
  author?: string;
  source?: string;
}

export interface Category {
  id: string;
  name: string;
  level: string;
  description: string;
  icon: string;
  color: string;
  coverImage: string;
}

export interface User {
  id: string;
  username: string;
  name: string;
  role: 'admin' | 'editor';
  avatar?: string;
}

export interface Stats {
  totalContent: number;
  totalCategories: number;
  totalImages: number;
  contentByType: Record<string, number>;
  contentByCategory: Record<string, number>;
}
