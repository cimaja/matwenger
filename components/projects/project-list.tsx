'use client';

import { ProjectContent as Project } from '@/lib/get-project-content';
import { ProjectCard } from './project-card';

interface ProjectListProps {
  projects: Project[];
  className?: string;
}

export function ProjectList({ projects, className }: ProjectListProps) {
  return (
    <div className={className}>
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
  );
}