import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Add form submission logic here
    setTimeout(() => setIsSubmitting(false), 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-white mb-2">Name</label>
        <input
          type="text"
          id="name"
          required
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#FF4C4C] text-white"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-white mb-2">Email</label>
        <input
          type="email"
          id="email"
          required
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#FF4C4C] text-white"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-white mb-2">Message</label>
        <textarea
          id="message"
          required
          rows={4}
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#FF4C4C] text-white resize-none"
        />
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={isSubmitting}
        className="w-full bg-[#FF4C4C] text-white py-3 rounded-lg flex items-center justify-center gap-2 disabled:opacity-50"
      >
        {isSubmitting ? (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          >
            <Send className="w-5 h-5" />
          </motion.div>
        ) : (
          <>
            Send Message
            <Send className="w-5 h-5" />
          </>
        )}
      </motion.button>
    </form>
  );
}