'use client';

import { motion } from 'framer-motion';
import { personalityTraits } from '@/lib/data/about';

export function PersonalitySliders() {
  return (
    <div className="max-w-[720px] mx-auto px-6 sm:px-10 py-20">
      <div className="space-y-8">
        {personalityTraits.map((trait, i) => (
          <motion.div
            key={trait.left}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-between text-[13px] mb-2">
              <span className="text-[#888]">{trait.left}</span>
              <span className="text-[#888]">{trait.right}</span>
            </div>
            <div className="relative h-1.5 bg-[rgba(255,255,255,0.06)] rounded-full">
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-accent-purple shadow-[0_0_12px_rgba(192,132,252,0.3)]"
                initial={{ left: '50%' }}
                whileInView={{ left: `${trait.value}%` }}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.08, ease: 'easeOut' }}
                viewport={{ once: true }}
                style={{ marginLeft: '-8px' }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
