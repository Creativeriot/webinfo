import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  client: string;
  description: string;
  category: string;
  beforeImage: string;
  afterImage: string;
  delay: number;
}

export default function ProjectCard({ 
  title, 
  client, 
  description, 
  category,
  beforeImage,
  afterImage,
  delay 
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
        <div className="absolute inset-0 flex">
          <div className="w-1/2 overflow-hidden">
            <img 
              src={beforeImage} 
              alt={`${title} before`}
              className="object-cover w-full h-full"
            />
            <div className="absolute top-4 left-4 bg-black/50 px-3 py-1 rounded-full">
              <span className="text-sm text-white">Before</span>
            </div>
          </div>
          <div className="w-1/2 overflow-hidden">
            <img 
              src={afterImage} 
              alt={`${title} after`}
              className="object-cover w-full h-full"
            />
            <div className="absolute top-4 right-4 bg-[#FF4C4C] px-3 py-1 rounded-full">
              <span className="text-sm text-white">After</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-4">
        <span className="text-[#FF4C4C] text-sm font-medium">{category}</span>
        <h3 className="text-xl font-semibold text-white mt-1">{title}</h3>
        <p className="text-[#B0B3C1] mt-2">{description}</p>
        
        <motion.button
          whileHover={{ x: 5 }}
          className="flex items-center gap-2 text-white mt-4 group"
        >
          View Case Study
          <ArrowRight className="w-4 h-4 group-hover:text-[#FF4C4C]" />
        </motion.button>
      </div>
    </motion.div>
  );
}