'use client';

import { motion } from 'framer-motion';
import { aboutNarrative } from '@/lib/data/about';

export function AboutNarrative() {
  return (
    <div className="max-w-[720px] mx-auto px-6 sm:px-10 py-8">
      {aboutNarrative.map((paragraph, i) => (
        <motion.p
          key={i}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
          viewport={{ once: true }}
          className={`text-[19px] leading-[1.85] text-[#999] mb-7 ${
            i === 0 ? 'drop-cap' : ''
          }`}
        >
          {paragraph.text}
        </motion.p>
      ))}
    </div>
  );
}
