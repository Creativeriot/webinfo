import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface USPCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay: number;
}

export default function USPCard({ title, description, icon: Icon, delay }: USPCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#FF4C4C] to-[#FF4C4C]/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
      <div className="relative bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 group-hover:border-transparent transition-colors">
        <div className="mb-4">
          <Icon className="w-10 h-10 text-[#FF4C4C] group-hover:text-white transition-colors" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-[#B0B3C1] group-hover:text-white/90 transition-colors">{description}</p>
      </div>
    </motion.div>
  );
}