import type { Metadata } from 'next';
import { Suspense } from 'react';
import { getAllProjects } from '@/lib/get-project-content';
import { ProjectCard } from '@/components/projects/project-card';
import { ProjectCardSkeleton } from '@/components/projects/project-card-skeleton';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore a curated collection of design projects and case studies showcasing AI-driven experiences, enterprise solutions, and innovative digital products by Mathias Wendlinger.',
  openGraph: {
    title: 'Projects - Mathias Wendlinger',
    description: 'Design projects and case studies featuring AI-driven experiences, enterprise solutions, and innovative digital products.',
    url: 'https://matwenger.at/projects',
  },
  alternates: {
    canonical: 'https://matwenger.at/projects',
  },
};

async function ProjectsList() {
  const projects = await getAllProjects();

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <div className="max-w-screen-xl mx-auto px-6 sm:px-12 lg:px-[60px] pt-24 pb-16">
      <div className="text-center mb-16">
        <h1 className="text-[44px] text-white mb-5">Projects</h1>
        <p className="text-center text-[17px] text-[#A3A3A3] max-w-[700px] mx-auto leading-[1.7]">
          A selection of design projects and case studies from my work at Microsoft
        </p>
      </div>
      <Suspense
        fallback={
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <ProjectCardSkeleton key={i} />
            ))}
          </div>
        }
      >
        <ProjectsList />
      </Suspense>
    </div>
  );
}
