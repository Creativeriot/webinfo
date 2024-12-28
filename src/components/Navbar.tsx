import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['Work', 'Impact', 'Playbook', 'Contact'];

  return (
    <nav className="fixed w-full z-50 bg-[#2A2E43]/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-white text-2xl font-bold"
          >
            Creative Riot Mob
          </motion.div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.a
                  key={item}
                  whileHover={{ scale: 1.05 }}
                  className="text-[#B0B3C1] hover:text-white transition-colors"
                  href={`#${item.toLowerCase()}`}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        className="md:hidden overflow-hidden bg-[#2A2E43]"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block px-3 py-2 text-[#B0B3C1] hover:text-white"
            >
              {item}
            </a>
          ))}
        </div>
      </motion.div>
    </nav>
  );
}