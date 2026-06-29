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
              I'm a Principal Design Manager at Microsoft with 18 years of experience, leading a globally distributed team of 12 product designers, content designers, and UX researchers across India, Greece, and the US. We own the end-to-end design for Power Apps, Power Automate, and Power Pages, serving more than 50 million monthly active users and powering Microsoft's low-code and AI-first strategy.
            </p>
            <p className="text-muted-foreground mb-6">
              I build teams and grow people. Over the past eight years as a manager, I've hired and developed designers across three continents, coached ICs into leadership roles, and recommended multiple promotions. I invest heavily in team culture, running dedicated learning sprints, knowledge sharing sessions, and structured career conversations. When our team health scores dropped, I built and executed a systematic action plan that raised Thriving by 7 points and Inclusive Team by 18 points within six months.
            </p>
            <p className="text-muted-foreground mb-6">
              I drive measurable business outcomes. I led A/B experimentation on the Power Apps maker funnel that delivered an 81% increase in users successfully publishing apps. I designed NL2FLOW, the first Copilot initiative in Power Platform, showcased to Satya Nadella at Ignite 2022. I grew AI Builder to +42 NPS (highest in the product family) and +179% billed revenue. I partner closely with enterprise customers like John Deere, Chevron, and Blackrock, turning their feedback into validated prototypes before engineering begins.
            </p>
            <p className="text-muted-foreground">
              I also bridge design and engineering in ways that change how teams deliver. I prototype with AI tools, merge pull requests directly into production repos, and built an AI upskilling program that moved my entire team from AI awareness to daily production use. We operate with an efficiency-first mindset, a lean team moving fast through AI-powered workflows, disciplined prioritization, and a culture of daily improvement.
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}