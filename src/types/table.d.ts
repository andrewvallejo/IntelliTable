export type TStatus = 'Draft' | 'Published' | 'Archived';
export type TVisibility = 'Public' | 'Private';
export type TCategory =
  | 'Tech'
  | 'Design'
  | 'Business'
  | 'Engineering'
  | 'Infrastructure';
export type TRating = 0 | 1 | 2 | 3 | 4 | 5;

export interface Data {
  id: string;
  title: string;
  url: string;
  author: string;
  status: TStatus;
  createdAt: string;
  updatedAt: string;
  isFeatured: boolean;
  wordCount: number;
  tags: string[];
  visibility: TVisibility;
  reviewedBy: string[];
  notes: string;
  rating: TRating;
  progress: number;
  price: number;
  category: TCategory;
}

type FieldTypeMap = { [K in keyof Data]: CellType };

export const fieldType: FieldTypeMap = {
  id: 'text',
  title: 'text',
  url: 'link',
  author: 'text',
  status: 'select',
  createdAt: 'date',
  updatedAt: 'date',
  isFeatured: 'boolean',
  wordCount: 'number',
  tags: 'tags',
  visibility: 'select',
  reviewedBy: 'tags',
  notes: 'text',
  rating: 'rating',
  progress: 'progress',
  price: 'currency',
  category: 'select',
};
