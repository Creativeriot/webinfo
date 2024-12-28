import { Zap, Palette, BarChart3, Users } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import USPCard from './USPCard';

const features = [
  {
    title: "Strategic Disruption",
    description: "We turn conventional marketing on its head, creating campaigns that demand attention and drive engagement.",
    icon: Zap
  },
  {
    title: "Creative Excellence",
    description: "Our designs blend artistic innovation with strategic thinking to create memorable brand experiences.",
    icon: Palette
  },
  {
    title: "Data-Driven Decisions",
    description: "Every creative choice is backed by analytics, ensuring maximum impact for your brand.",
    icon: BarChart3
  },
  {
    title: "Cultural Connection",
    description: "We understand the pulse of Nairobi's dynamic market and create content that resonates locally and globally.",
    icon: Users
  }
];

export default function USP() {
  return (
    <section id="usp" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Why Choose Us"
          subtitle="Where Creativity Meets Strategy"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {features.map((feature, index) => (
            <USPCard
              key={feature.title}
              {...feature}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}