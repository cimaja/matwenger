'use client';

import { motion } from 'framer-motion';
import { Experience } from './experience';

const experiences = [
  {
    date: 'September 2025 - Now',
    company: 'Microsoft',
    role: 'Principal Design Manager',
  },
  {
    date: 'February 2018 - September 2025',
    company: 'Microsoft',
    role: 'Senior Design Manager',
  },
  {
    date: 'February 2008 - February 2018',
    company: 'Microsoft',
    role: 'User Experience Designer',
  },
  {
    date: 'March 2007 - February 2008',
    company: 'Musiwave',
    role: 'User Experience Designer',
  },
  {
    date: 'June 2006 - March 2007',
    company: 'TF1',
    role: '3D Motion Designer',
  },
];

export function Story() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h3 className="text-2xl font-bold mb-6">My Story</h3>
      <div className="prose prose-lg dark:prose-invert">
        <p className="text-muted-foreground">
          Born in the south of France, I grew up in Africa and Asia. This multicultural
          background shaped my perspective on building inclusive and impactful digital experiences.
          With 18 years at Microsoft, I lead a globally distributed team of 12 designers
          building AI-powered experiences across Power Apps, Power Automate, and Power Pages
          for over 50 million users. I build teams, grow people, and drive measurable business
          outcomes, from A/B experiments that increased app publishing by 81% to designing the
          first Copilot initiative in Power Platform showcased to Satya Nadella at Ignite.
        </p>
      </div>

      <Experience experiences={experiences} />
    </motion.div>
  );
}