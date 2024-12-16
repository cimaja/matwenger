'use client';

import { motion } from 'framer-motion';
import { Experience } from './experience';

const experiences = [
  {
    date: 'September 2022 - Now',
    company: 'Microsoft',
    role: 'Principal Design Manager',
  },
  {
    date: 'February 2008 - September 2022',
    company: 'Microsoft',
    role: 'Senior Design Manager',
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
          Born in south of France, I've grown up in Africa and Asia. This multi-cultural 
          environment has filled my creativity and passion for simple and intuitive designs. 
          With more than a decade of experience, I'm an expert at crafting beautiful 
          experiences that delight users. My strengths encompass defining product vision, 
          understanding the business goals and building design teams that thrive.
        </p>
      </div>

      <Experience experiences={experiences} />
    </motion.div>
  );
}