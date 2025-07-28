export type PostStatus = 'Draft' | 'Published' | 'Archived';
export type PostVisibility = 'Public' | 'Private';

export interface Data {
  id: string;
  title: string;
  url: string;
  author: string;
  status: PostStatus;
  createdAt: string;
  updatedAt: string;
  isFeatured: boolean;
  wordCount: number;
  tags: string[];
  visibility: PostVisibility;
  reviewedBy: string[];
  notes: string;
}

export type TableCell =
  | string
  | number
  | boolean
  | Date
  | Array<string | number | boolean>;
