'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/layout/section';
import { SectionHeader } from '@/components/layout/section-header';

export function AboutContent() {
  return (
    <Section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="About Me"
          className="mb-12"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <p className="text-muted-foreground">
              Today I serve as a Product Design Lead for Power Automate at Microsoft. In this role, 
              I have the privilege to hire, lead, and mentor a multidisciplinary team that design, 
              build, and launch inclusive products across the globe. With more than a decade of 
              experience, I'm an expert at solving complex problems. My strengths encompass 
              defining product vision, understanding the business goals and crafting beautiful 
              experiences that delight users.
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}