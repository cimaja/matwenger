'use client';

import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
}

const skills: Skill[] = [
  { name: 'Enterprise UX Design', level: 98 },
  { name: 'AI Experience Design', level: 95 },
  { name: 'Design Leadership', level: 95 },
  { name: 'Product Strategy', level: 92 },
  { name: 'Security & Privacy Design', level: 90 },
  { name: 'Design Systems', level: 88 },
  { name: 'Cross-Platform Design', level: 85 },
].sort((a, b) => b.level - a.level);

export function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h3 className="text-2xl font-bold mb-6">Skills</h3>
      <div className="space-y-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-between items-center mb-2">
              <div className="font-medium">{skill.name}</div>
              <div className="text-sm text-muted-foreground">{skill.level}%</div>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full relative overflow-hidden"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: skill.level / 100 }}
                transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                style={{
                  background: 'linear-gradient(90deg, rgba(255, 20, 147, 0.4), rgba(75, 0, 130, 0.4))',
                  transformOrigin: 'left',
                }}
              >
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    background: [
                      'linear-gradient(90deg, rgba(255, 20, 147, 0.4), rgba(75, 0, 130, 0.4))',
                      'linear-gradient(90deg, rgba(75, 0, 130, 0.4), rgba(255, 20, 147, 0.4))',
                      'linear-gradient(90deg, rgba(255, 20, 147, 0.4), rgba(75, 0, 130, 0.4))',
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}