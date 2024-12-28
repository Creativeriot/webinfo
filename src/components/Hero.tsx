import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80",
    title: "Creative Content That Drives Results",
    subtitle: "Social Media Management & Content Creation"
  },
  {
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80",
    title: "Building Digital Brands",
    subtitle: "Brand Identity & Website Development"
  },
  {
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80",
    title: "Engaging Digital Experiences",
    subtitle: "TikTok & Instagram Management"
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
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${slide.image})`,
              filter: 'brightness(0.6)'
            }}
          />
        </motion.div>
      ))}
      
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-4">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            {slides[current].title}
          </motion.h1>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 mb-8"
          >
            {slides[current].subtitle}
          </motion.p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#FF4C4C] text-white px-8 py-3 rounded-full flex items-center gap-2 mx-auto"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
      
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