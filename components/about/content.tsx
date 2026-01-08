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
            <p className="text-muted-foreground mb-6">
              I'm a Principal Design Manager at Microsoft, leading design across the Power Platform Core team. We build the foundational, end-to-end experiences behind Power Apps, Power Pages, and Power Automate, powering Microsoft's low-code and AI-first strategy.
            </p>
            <p className="text-muted-foreground">
              I drive product vision, business growth, and AI adoption through scalable design systems and platform-level thinking. My work spans model-driven and canvas apps, mobile, pages, RPA, and process mining, enabling millions of makers and enterprise users to build, automate, and innovate with confidence. I partner closely with product, engineering, and research to turn complex systems into intuitive, high-impact experiences.
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}