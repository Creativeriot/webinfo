import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay: number;
}

export default function ServiceCard({ title, description, icon: Icon, delay }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-white/5 backdrop-blur-sm p-6 rounded-xl"
    >
      <div className="mb-4">
        <Icon className="w-10 h-10 text-[#FF4C4C]" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-[#B0B3C1]">{description}</p>
    </motion.div>
  );
}