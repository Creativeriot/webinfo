import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import PricingCard from './PricingCard';
import PricingToggle from './PricingToggle';
import { plans } from './pricingData';
import { type BillingCycle } from './types';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly');

  return (
    <section id="pricing" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Simple Pricing"
          subtitle="Choose the Perfect Plan for Your Brand"
        />

        <div className="mt-12 flex justify-center">
          <PricingToggle
            billingCycle={billingCycle}
            onChange={setBillingCycle}
          />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={billingCycle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto"
          >
            {plans[billingCycle].map((plan, index) => (
              <PricingCard
                key={plan.name}
                {...plan}
                delay={index * 0.1}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}