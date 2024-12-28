import { Instagram, Podcast, Video, Globe, Palette, BarChart } from 'lucide-react';
import ServiceCard from './ServiceCard';
import SectionTitle from '../common/SectionTitle';

const services = [
  {
    title: "Instagram Management",
    description: "Strategic content planning and engagement optimization for Instagram growth.",
    icon: Instagram
  },
  {
    title: "Podcast Production",
    description: "End-to-end podcast production, from recording to distribution.",
    icon: Podcast
  },
  {
    title: "TikTok Management",
    description: "Trending content creation and community engagement for TikTok.",
    icon: Video
  },
  {
    title: "Website Creation",
    description: "Custom website development with modern design principles.",
    icon: Globe
  },
  {
    title: "Brand Identity",
    description: "Comprehensive brand development and visual identity design.",
    icon: Palette
  },
  {
    title: "Digital Business Management",
    description: "Full-service digital presence management and strategy.",
    icon: BarChart
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Our Services"
          subtitle="What We Do Best"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}