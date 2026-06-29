'use client';

import { motion } from 'framer-motion';
import { journeyMilestones } from '@/lib/data/about';

export function AboutJourney() {
  return (
    <div className="max-w-[900px] mx-auto px-6 sm:px-10 py-20">
      <h2 className="text-[44px] text-white mb-16">The Journey</h2>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[60px] sm:left-[80px] top-0 bottom-0 w-px bg-[rgba(255,255,255,0.06)]" />

        {journeyMilestones.map((milestone, i) => (
          <motion.div
            key={milestone.year}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            viewport={{ once: true }}
            className="relative grid grid-cols-[60px_1fr] sm:grid-cols-[80px_1fr] gap-8 sm:gap-12 pb-14 last:pb-0"
          >
            {/* Year + dot */}
            <div className="relative">
              <span className="font-mono text-[14px] text-accent-purple font-medium">
                {milestone.year}
              </span>
              {/* Dot on the line */}
              <div className="absolute right-[-20px] sm:right-[-28px] top-[8px] w-2.5 h-2.5 rounded-full bg-accent-purple z-10">
                <div className="absolute inset-[-3px] rounded-full bg-accent-purple/20" />
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="text-[17px] font-semibold text-white mb-1 font-sans">
                {milestone.title}
              </div>
              <div className="font-mono text-[11px] text-[#555] uppercase tracking-[0.1em] mb-3">
                {milestone.location}
              </div>
              <p className="text-[14px] text-[#888] leading-[1.7]">
                {milestone.description}
              </p>
              {milestone.highlight && (
                <span className="inline-block mt-3 px-3 py-1 bg-[rgba(16,185,129,0.08)] border border-[rgba(16,185,129,0.15)] rounded-full font-mono text-[11px] text-accent-green">
                  {milestone.highlight}
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
