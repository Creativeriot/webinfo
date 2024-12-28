export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingPlan {
  name: string;
  price: number;
  description: string;
  features: PricingFeature[];
  isPopular?: boolean;
}

export type BillingCycle = 'monthly' | 'yearly';