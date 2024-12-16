'use client';

import { Project } from '@/types/project';
import { ProjectGrid } from '@/components/projects/project-grid';
import { Section } from '@/components/layout/section';
import { SectionHeader } from '@/components/layout/section-header';

interface FeaturedProjectsProps {
  projects: Project[];
}

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  return (
    <Section className="py-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Featured Projects"
          description="A selection of my recent work at Microsoft, showcasing expertise in AI,
            design systems, and user experience"
          className="mb-16"
        />
        <ProjectGrid projects={projects} />
      </div>
    </Section>
  );
}