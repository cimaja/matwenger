'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/layout/section';
import { Counter } from './counter';

// Start dates for experience calculation
const EXPERIENCE_START_YEAR = 2007; // Started working in 2007
const MANAGEMENT_START_YEAR = 2014; // Started managing in 2014

function calculateYears(startYear: number): string {
  const currentYear = new Date().getFullYear();
  return (currentYear - startYear).toString();
}

const statistics = [
  {
    number: calculateYears(EXPERIENCE_START_YEAR),
    text: 'years of\nexperience',
  },
  {
    number: calculateYears(MANAGEMENT_START_YEAR),
    text: 'years managing\ndesign teams',
  },
  {
    number: '25+',
    text: 'projects successfully\nshipped',
  },
];

export function StatisticsSection() {
  return (
    <Section className="py-20 bg-secondary/50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {statistics.map((stat, index) => (
            <Counter
              key={stat.text}
              number={stat.number}
              text={stat.text}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}