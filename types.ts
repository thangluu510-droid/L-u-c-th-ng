export enum Category {
  ALL = 'ALL',
  BRANDING = 'BRANDING',
  UIUX = 'UIUX',
  ILLUSTRATION = 'ILLUSTRATION'
}

export interface Project {
  id: number;
  title: string;
  category: Category;
  image: string;
  description: string;
}

export interface Service {
  id: number;
  title: string;
  price: string;
  features: string[];
  icon: string;
  popular?: boolean;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}