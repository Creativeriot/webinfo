import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroBackground from './HeroBackground';
import HeroContent from './HeroContent';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80",
    title: "Turning Brands into Bold Stories",
    subtitle: "Where Chaos Meets Strategy"
  },
  {
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80",
    title: "Disrupt. Create. Transform.",
    subtitle: "Strategic Creativity for Modern Brands"
  },
  {
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80",
    title: "Art Meets Analytics",
    subtitle: "Data-Driven Creative Solutions"
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: current === index ? 1 : 0,
            scale: current === index ? 1 : 1.1
          }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <HeroBackground imageUrl={slide.image} />
        </motion.div>
      ))}
      
      <HeroContent 
        title={slides[current].title}
        subtitle={slides[current].subtitle}
      />
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              current === index ? 'bg-[#FF4C4C] w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}