'use client';

import { motion } from 'framer-motion';

const skillGroups = [
  {
    label: 'Leadership',
    skills: ['Design leadership', 'People management', 'Team building', 'Career coaching', 'Design operations'],
  },
  {
    label: 'Design',
    skills: ['AI experience design', 'Design systems', 'UX research', 'Prototyping', 'Cross-platform design'],
  },
  {
    label: 'Growth & Strategy',
    skills: ['A/B experimentation', 'Data-driven design', 'Product strategy', 'Enterprise partnerships'],
  },
  {
    label: 'Craft & Tools',
    skills: ['Figma', 'Lovable', 'Claude Code', 'GitHub Copilot', 'Cline', 'VSCode', 'Windsurf', 'Cursor'],
  },
];

export function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h3 className="text-2xl font-bold mb-6">Skills</h3>
      <div className="space-y-5">
        {skillGroups.map((group, groupIndex) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: groupIndex * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
              {group.label}
            </div>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
