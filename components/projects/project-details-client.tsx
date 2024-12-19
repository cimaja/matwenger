'use client';

import { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { CircleUserRound, Building2, CalendarDays } from 'lucide-react';
import { ProjectContent } from '@/lib/get-project-content';
import { ProjectTags } from './project-tags';

interface ProjectDetailsClientProps {
  project: ProjectContent;
}

export function ProjectDetailsClient({ project }: ProjectDetailsClientProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      requestAnimationFrame(() => {
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
      });
    }
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        opacity: '0',
        transform: 'translateY(1rem)',
        transition: 'all 0.5s ease-out',
      }}
    >
      <Card className="p-8 backdrop-blur-sm bg-card/95 shadow-lg">
        <div className="space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">{project.title}</h1>
            <p className="text-xl text-muted-foreground">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CircleUserRound className="h-4 w-4" />
              <span>{project.role}</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="h-4 w-4" />
              <span>{project.company}</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4" />
              <span>{project.year}</span>
            </div>
          </div>

          <ProjectTags tags={project.tags} className="justify-center" />
        </div>
      </Card>
    </div>
  );
}
