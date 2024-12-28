import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { type PricingFeature } from './types';

interface PricingCardProps {
  name: string;
  price: number;
  description: string;
  features: PricingFeature[];
  isPopular?: boolean;
  delay: number;
}

export default function PricingCard({ 
  name, 
  price, 
  description, 
  features,
  isPopular,
  delay 
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={`relative p-6 rounded-xl ${
        isPopular ? 'bg-[#FF4C4C]' : 'bg-white/5'
      }`}
    >
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-white text-[#FF4C4C] px-3 py-1 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white">{name}</h3>
        <div className="mt-4 flex items-baseline justify-center gap-1">
          <span className="text-4xl font-bold text-white">
            ${price}
          </span>
          <span className={
            isPopular ? 'text-white/80' : 'text-[#B0B3C1]'
          }>/month</span>
        </div>
        <p className={`mt-2 ${
          isPopular ? 'text-white/90' : 'text-[#B0B3C1]'
        }`}>{description}</p>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: delay + (index * 0.1) }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <Check className={`w-5 h-5 ${
              feature.included 
                ? (isPopular ? 'text-white' : 'text-[#FF4C4C]')
                : 'text-gray-400'
            }`} />
            <span className={`${
              feature.included
                ? (isPopular ? 'text-white' : 'text-white')
                : 'text-gray-400'
            }`}>{feature.text}</span>
          </motion.li>
        ))}
      </ul>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`w-full py-3 rounded-lg font-medium ${
          isPopular
            ? 'bg-white text-[#FF4C4C]'
            : 'bg-[#FF4C4C] text-white'
        }`}
      >
        Get Started
      </motion.button>
    </motion.div>
  );
}