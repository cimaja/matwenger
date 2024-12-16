'use client';

import { motion } from 'framer-motion';

interface Experience {
  date: string;
  company: string;
  role: string;
}

interface ExperienceProps {
  experiences: Experience[];
}

export function Experience({ experiences }: ExperienceProps) {
  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold mb-6">Experience</h3>
      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.date}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="text-sm text-muted-foreground uppercase mb-1">
              {experience.date}
            </div>
            <h5 className="font-semibold group-hover:text-primary transition-colors">
              {experience.company} - {experience.role}
            </h5>
          </motion.div>
        ))}
      </div>
    </div>
  );
}