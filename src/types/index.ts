export type PageId =
  | 'home'
  | 'quote'
  | 'services'
  | 'service-detail'
  | 'brands'
  | 'finance'
  | 'locations'
  | 'faqs'
  | 'blog'
  | 'blog-detail'
  | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  badge?: string;
  priceFrom?: string;
  features: string[];
  benefits: string[];
  processSteps: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
}

export interface BoilerBrand {
  id: string;
  name: string;
  logo: string;
  tagline: string;
  description: string;
  guaranteeYears: number;
  accreditationLevel: string;
  popularModels: {
    model: string;
    kw: string;
    flowRate: string;
    warranty: string;
    bestFor: string;
    keyFeature: string;
    approxPrice: string;
  }[];
  highlights: string[];
}

export interface QuotePropertyDetails {
  propertyType: 'detached' | 'semi-detached' | 'terraced' | 'flat' | 'bungalow' | '';
  bedrooms: number;
  bathrooms: number;
  showers: number;
  currentBoilerType: 'combi' | 'system' | 'regular' | 'back-boiler' | 'unknown' | '';
  currentFuel: 'mains-gas' | 'lpg' | 'oil' | 'electric' | '';
  boilerLocation: 'same' | 'kitchen' | 'airing-cupboard' | 'utility' | 'garage' | 'loft' | '';
  flueLocation: 'horizontal' | 'vertical' | 'not-sure' | '';
  selectedPackageId: string;
  financeOption: 'cash' | '0-percent-24' | '7.9-percent-60' | '7.9-percent-120';
  depositAmount: number;
  selectedAddons: string[];
  customerDetails: {
    fullName: string;
    email: string;
    phone: string;
    postcode: string;
    addressLine1: string;
    urgency: 'immediate' | 'within-week' | 'within-month' | 'planning';
    notes: string;
  };
}

export interface BoilerPackage {
  id: string;
  tier: 'Standard Value' | 'Most Popular' | 'Premium Performance';
  brand: string;
  model: string;
  outputKw: number;
  flowRateLpm: number;
  warrantyYears: number;
  efficiencyRating: string;
  cashPrice: number;
  idealFor: string;
  dimensions: string;
  features: string[];
  standardInclusions: string[];
  badge?: string;
}

export interface QuoteAddon {
  id: string;
  name: string;
  description: string;
  price: number;
  recommendedFor?: string;
  category: 'controls' | 'protection' | 'efficiency';
  image?: string;
}

export interface LocationArea {
  name: string;
  postcode: string;
  description: string;
  responseTime: string;
  popularServices: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  content: string[];
  keyTakeaways: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  verified: boolean;
  service: string;
  comment: string;
}
