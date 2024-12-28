import { Lightbulb, Rocket, Target } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import PlaybookStep from './PlaybookStep';

const steps = [
  {
    title: "Strategy",
    description: "We dive deep into your brand's DNA, market position, and audience to craft a unique creative strategy that sets you apart.",
    icon: Lightbulb
  },
  {
    title: "Execution",
    description: "Our team brings your vision to life through compelling content, engaging designs, and strategic implementation across all platforms.",
    icon: Rocket
  },
  {
    title: "Results",
    description: "We measure success through data-driven insights, ensuring your brand achieves maximum impact and reaches its target audience effectively.",
    icon: Target
  }
];

export default function Playbook() {
  return (
    <section id="playbook" className="py-20 px-4 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Our Playbook"
          subtitle="How We Turn Chaos into Strategy"
        />
        
        <div className="mt-16 max-w-2xl mx-auto space-y-12">
          {steps.map((step, index) => (
            <PlaybookStep
              key={step.title}
              {...step}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}