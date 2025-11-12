// Enums matching backend
export enum CareerDepartment {
  ALL = 'All',
  SALES = 'Sales',
  MAINTENANCE = 'Maintenance',
  LOGISTICS = 'Logistics',
  QUALITY = 'Quality',
  ENGINEERING = 'Engineering',
  OPERATIONS = 'Operations',
  HUMAN_RESOURCES = 'Human Resources',
  FINANCE = 'Finance',
  LEGAL = 'Legal',
  IT = 'IT',
  CUSTOMER_SUPPORT = 'Customer Support',
  STRATEGY = 'Strategy',
  SAFETY = 'Safety',
  TRAINING = 'Training',
  PROCUREMENT = 'Procurement',
  MARKETING = 'Marketing',
  DATA = 'Data',
}

export enum EmploymentType {
  FULL_TIME = 'Full-time',
  PART_TIME = 'Part-time',
  CONTRACT = 'Contract',
  INTERNSHIP = 'Internship',
  TEMPORARY = 'Temporary',
}

export enum CareerStatus {
  DRAFT = 'draft',
  PUBLISHED = 'published',
  CLOSED = 'closed',
}

export enum SalaryPeriod {
  ANNUAL = 'annual',
  MONTHLY = 'monthly',
  HOURLY = 'hourly',
}

export interface ContentSection {
  title: string;
  content?: string;
  items?: string[];
}

export interface SalaryRange {
  min: number;
  max: number;
  currency: string;
  period: SalaryPeriod;
}

export interface Career {
  id: string;
  title: string;
  slug: string;
  department: CareerDepartment;
  location: string;
  type: EmploymentType;
  intro: string;
  description: ContentSection;
  responsibilities: ContentSection;
  requirements: ContentSection;
  benefits?: ContentSection;
  qualifications?: ContentSection;
  salaryRange?: SalaryRange;
  status: CareerStatus;
  postedDate: string;
  expiryDate?: string;
  closedDate?: string;
  closedReason?: string;
  applicationsCount: number;
  newApplicationsCount: number;
  metaTitle?: string;
  metaDescription?: string;
  createdBy: string;
  updatedBy: string;
  createdAt: string;
  updatedAt: string;
}

export interface PaginatedCareers {
  data: Career[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

export interface GetCareersQuery {
  search?: string;
  department?: CareerDepartment;
  location?: string;
  type?: EmploymentType;
  page?: number;
  limit?: number;
  sortBy?: 'postedDate' | 'title' | 'createdAt';
  sortOrder?: 'asc' | 'desc';
}

// Application types
export enum ApplicationSource {
  LINKEDIN = 'LinkedIn',
  WEBSITE = 'Our Website',
  REFERRAL = 'Employee Referral',
  JOB_BOARD = 'Job Board',
  SOCIAL_MEDIA = 'Social Media',
  OTHER = 'Other',
}

export interface SubmitApplicationData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  resumeUrl: string;
  resumeFileName: string;
  resumeFileSize: number;
  coverLetter?: string;
  howDidYouHear: ApplicationSource;
  agreedToTerms: boolean;
}
