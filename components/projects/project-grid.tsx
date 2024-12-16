'use client';

import { ProjectContent as Project } from '@/lib/get-project-content';
import { ProjectList } from './project-list';

interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <ProjectList
      projects={projects}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    />
  );
}