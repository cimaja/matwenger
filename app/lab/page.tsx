'use client';

import { motion } from 'framer-motion';
import { LabProjectCard } from '@/components/lab/lab-project-card';
import { labProjects } from '@/components/lab/lab-projects-data';

export default function LabPage() {

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Lab</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interactive prototypes and experiments showcasing design explorations and innovative concepts
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 [&>*]:h-full">
          {labProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="h-full"
            >
              <LabProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}