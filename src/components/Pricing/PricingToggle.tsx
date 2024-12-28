import { motion } from 'framer-motion';
import { type BillingCycle } from './types';

interface PricingToggleProps {
  billingCycle: BillingCycle;
  onChange: (cycle: BillingCycle) => void;
}

export default function PricingToggle({ billingCycle, onChange }: PricingToggleProps) {
  return (
    <div className="flex items-center gap-4 bg-white/5 p-1 rounded-full">
      <button
        onClick={() => onChange('monthly')}
        className="relative px-6 py-2"
      >
        {billingCycle === 'monthly' && (
          <motion.div
            layoutId="billing-toggle"
            className="absolute inset-0 bg-[#FF4C4C] rounded-full"
          />
        )}
        <span className={`relative z-10 ${
          billingCycle === 'monthly' ? 'text-white' : 'text-[#B0B3C1]'
        }`}>
          Monthly
        </span>
      </button>

      <button
        onClick={() => onChange('yearly')}
        className="relative px-6 py-2"
      >
        {billingCycle === 'yearly' && (
          <motion.div
            layoutId="billing-toggle"
            className="absolute inset-0 bg-[#FF4C4C] rounded-full"
          />
        )}
        <span className={`relative z-10 ${
          billingCycle === 'yearly' ? 'text-white' : 'text-[#B0B3C1]'
        }`}>
          Yearly
          <span className="ml-1 text-xs text-[#FF4C4C]">Save 10%</span>
        </span>
      </button>
    </div>
  );
}