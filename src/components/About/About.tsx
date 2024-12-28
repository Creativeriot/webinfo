import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="About Us"
          subtitle="Creative Studio in Nairobi"
        />
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
              alt="Team working"
              className="rounded-lg shadow-xl"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[#B0B3C1]"
          >
            <p className="mb-4">
              Creative Riot Mob is a dynamic digital creative studio based in Nairobi, Kenya. We specialize in helping businesses and brands establish a strong digital presence through innovative content creation and strategic management.
            </p>
            <p className="mb-4">
              Our team of creative professionals brings together expertise in social media management, content creation, web development, and brand identity design to deliver comprehensive digital solutions.
            </p>
            <p>
              We pride ourselves on understanding the unique needs of the African market while delivering world-class digital services that help our clients stand out in the digital space.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}