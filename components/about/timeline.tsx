'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/layout/section';
import { SectionHeader } from '@/components/layout/section-header';
import { experienceData } from './experience-data';

export function AboutTimeline() {
  return (
    <Section className="py-20 bg-secondary/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Work Experience"
          className="mb-12"
        />
        <div className="relative before:absolute before:inset-0 before:ml-4 sm:before:ml-[2.75rem] before:-z-10">
          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 sm:pl-32 py-6 group"
            >
              {/* Timeline line */}
              <div 
                className="absolute left-0 sm:left-10 top-0 h-full w-px bg-border group-last:h-1/2"
              />
              
              {/* Pink circle */}
              <div className="absolute left-0 sm:left-10 top-1/2 -translate-y-1/2 -translate-x-1/2">
                <div className="w-3 h-3 rounded-full bg-pink-500 ring-4 ring-background relative">
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-full bg-pink-500/20 animate-pulse" />
                </div>
              </div>

              <div className="relative bg-card p-6 rounded-lg shadow-sm border border-border hover:border-pink-500/20 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="font-bold mb-1">{item.title}</div>
                    <div className="text-pink-500 dark:text-pink-400">{item.company}</div>
                  </div>
                  <div className="text-sm font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                    {item.date}
                  </div>
                </div>
                <div className="text-muted-foreground">{item.description}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}