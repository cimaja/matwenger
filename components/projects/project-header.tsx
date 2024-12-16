'use client';

import { motion } from 'framer-motion';
import { ProjectContent as Project } from '@/lib/get-project-content';
import { ImageContainer } from '@/components/ui/image-container';
import { ProjectTags } from './project-tags';

interface ProjectHeaderProps {
  project: Project;
}

export function ProjectHeader({ project }: ProjectHeaderProps) {
  return (
    <div className="relative">
      <div className="h-[40vh] relative overflow-hidden">
        <ImageContainer
          src={project.image}
          alt={project.title}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10"
      >
        <div className="bg-card p-8 rounded-lg shadow-lg border">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
              <p className="text-lg text-muted-foreground">
                {project.role} at {project.company} • {project.year}
              </p>
            </div>
            <ProjectTags tags={project.tags} />
          </div>
          <p className="text-lg leading-relaxed">{project.description}</p>
        </div>
      </motion.div>
    </div>
  );
}