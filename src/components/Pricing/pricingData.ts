import { type PricingPlan } from './types';

const createPlan = (
  name: string,
  monthlyPrice: number,
  description: string,
  features: { text: string; included: boolean; }[],
  isPopular?: boolean
): { monthly: PricingPlan; yearly: PricingPlan } => ({
  monthly: {
    name,
    price: monthlyPrice,
    description,
    features,
    isPopular
  },
  yearly: {
    name,
    price: Math.floor(monthlyPrice * 0.9), // 10% discount
    description,
    features,
    isPopular
  }
});

const basicPlan = createPlan(
  "Basic",
  499,
  "Perfect for small businesses starting their digital journey",
  [
    { text: "Social Media Management (2 platforms)", included: true },
    { text: "Monthly Content Calendar", included: true },
    { text: "Basic Analytics Reports", included: true },
    { text: "2 Content Revisions", included: true },
    { text: "Email Support", included: true },
    { text: "Brand Strategy Session", included: false },
    { text: "Website Management", included: false },
    { text: "Priority Support", included: false }
  ]
);

const proPlan = createPlan(
  "Pro",
  999,
  "For growing brands that need comprehensive digital presence",
  [
    { text: "Social Media Management (4 platforms)", included: true },
    { text: "Advanced Content Calendar", included: true },
    { text: "Weekly Analytics Reports", included: true },
    { text: "Unlimited Content Revisions", included: true },
    { text: "24/7 Priority Support", included: true },
    { text: "Quarterly Brand Strategy Session", included: true },
    { text: "Website Management", included: true },
    { text: "Custom Brand Assets", included: true }
  ],
  true
);

export const plans = {
  monthly: [basicPlan.monthly, proPlan.monthly],
  yearly: [basicPlan.yearly, proPlan.yearly]
};