'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/layout/section';
import { Counter } from './counter';

const statistics = [
  {
    number: '17',
    text: 'years of\nexperience',
  },
  {
    number: '10',
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