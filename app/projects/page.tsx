import { Suspense } from 'react';
import { getAllProjects } from '@/lib/get-project-content';
import { ProjectCard } from '@/components/projects/project-card';
import { ProjectCardSkeleton } from '@/components/projects/project-card-skeleton';

export const metadata = {
  title: 'Projects',
  description: 'A collection of my design projects and case studies.',
};

async function ProjectsList() {
  const projects = await getAllProjects();

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <main className="container py-24">
      <Suspense fallback={
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <ProjectCardSkeleton key={i} />
          ))}
        </div>
      }>
        <ProjectsList />
      </Suspense>
    </main>
  );
}