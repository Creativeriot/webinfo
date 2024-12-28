import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface HeroContentProps {
  title: string;
  subtitle: string;
}

export default function HeroContent({ title, subtitle }: HeroContentProps) {
  return (
    <div className="relative z-10 h-full flex items-center justify-center">
      <div className="text-center px-4">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6"
        >
          {title}
        </motion.h1>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-200 mb-8"
        >
          {subtitle}
        </motion.p>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#FF4C4C] text-white px-8 py-3 rounded-full flex items-center gap-2 mx-auto"
        >
          Get Started
          <ArrowRight className="w-5 h-5" />
        </motion.button>
      </div>
    </div>
  );
}