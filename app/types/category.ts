export interface Category {
  id: string;                
  slug: string;              
  name: string;              
  description: string;      
  image: string | null;   
  subcategorySlugs: string[];
  productCount: number;
  seoTitle?: string;
  seoDescription?: string;
}
export interface Product {
  id: string;         
  slug: string;       
  name: string;             
  partNumber: string;     
  categorySlug: string;     
  subcategorySlug: string; 
  brand: string;       
  description: string;   
  images: string[] | [];   
  specifications: Record<string, string>; 
  compliance: ComplianceInfo;
  storage: StorageInfo;
  availability: AvailabilityInfo;
  documents: DocumentInfo[];
  applications: string[];
  tags: string[]; 
  seoTitle?: string;
  seoDescription?: string;
}

export interface ComplianceInfo {
  certifications: string[]; 
  hasCoC: boolean;
  hasSDS: boolean;
  hasTDS: boolean;
  militarySpec?: string;
}

export interface StorageInfo {
  temperatureControlled: boolean;
  hazmat: boolean;
  shelfLife?: string;
  storageInstructions?: string;
}

export interface AvailabilityInfo {
  status: 'in-stock' | 'limited' | 'lead-time' | 'quote-only';
  leadTime?: string;
  minimumQuantity?: number;
  allowAlternatives: boolean;
}

export interface DocumentInfo {
  type: 'CoC' | 'SDS' | 'TDS' | 'Manual' | 'Spec Sheet';
  name: string;
  url?: string; 
  description?: string;
}