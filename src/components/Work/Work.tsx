import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import ProjectCard from './ProjectCard';

const categories = ['All', 'Social Media', 'Brand Identity', 'Web Design', 'Content Creation'];

const projects = [
  {
    title: "Artisanal Coffee Brand Transformation",
    client: "Bean & Brew Co.",
    description: "Complete brand refresh and social media strategy that increased engagement by 300%",
    category: "Brand Identity",
    beforeImage: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
    afterImage: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb"
  },
  {
    title: "Fashion E-commerce Revolution",
    client: "Style Sphere",
    description: "Website redesign and content strategy that boosted conversion rates by 150%",
    category: "Web Design",
    beforeImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
    afterImage: "https://images.unsplash.com/photo-1600096194534-95cf5ece04cf"
  },
  {
    title: "Lifestyle Brand Social Growth",
    client: "Urban Oasis",
    description: "TikTok and Instagram strategy that grew following from 10K to 100K in 3 months",
    category: "Social Media",
    beforeImage: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a",
    afterImage: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac"
  }
];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = projects.filter(project => 
    activeCategory === 'All' || project.category === activeCategory
  );

  return (
    <section id="work" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Our Work"
          subtitle="Before & After Transformations"
        />
        
        <div className="flex gap-4 overflow-x-auto pb-4 mt-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                activeCategory === category
                  ? 'bg-[#FF4C4C] text-white'
                  : 'bg-white/5 text-[#B0B3C1] hover:bg-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                {...project}
                delay={index * 0.1}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}