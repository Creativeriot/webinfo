import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero/Hero';
import USP from './components/USP/USP';
import Playbook from './components/Playbook/Playbook';
import Services from './components/Services/Services';
import Work from './components/Work/Work';
import Pricing from './components/Pricing/Pricing';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-[#2A2E43]"
    >
      <Navbar />
      <Hero />
      <USP />
      <Playbook />
      <Services />
      <Work />
      <Pricing />
      <About />
      <Contact />
    </motion.div>
  );
}

export default App;