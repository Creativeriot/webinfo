import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface PlaybookStepProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

export default function PlaybookStep({ title, description, icon: Icon, index }: PlaybookStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 bg-[#FF4C4C] rounded-full flex items-center justify-center">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-[#B0B3C1]">{description}</p>
        </div>
      </div>
      {index < 2 && (
        <div className="absolute left-6 top-12 w-px h-16 bg-gradient-to-b from-[#FF4C4C] to-transparent" />
      )}
    </motion.div>
  );
}