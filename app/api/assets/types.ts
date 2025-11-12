export enum AssetContext {
  PRODUCTS = 'products',
  CATEGORIES = 'categories',
  BLOGS = 'blogs',
  CAREERS = 'careers',
  RESUMES = 'resumes',
  GENERAL = 'general',
}

export enum AssetType {
  IMAGE = 'image',
  DOCUMENT = 'document',
  VIDEO = 'video',
}

export interface UploadResponse {
  data: {
    url?: string;
    urls?: string[];
  };
  message: string;
}

export interface DeleteResponse {
  message: string;
}
