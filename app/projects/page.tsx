import type { Metadata } from 'next';
import { Suspense } from 'react';
import { getAllProjects } from '@/lib/get-project-content';
import { ProjectCard } from '@/components/projects/project-card';
import { ProjectCardSkeleton } from '@/components/projects/project-card-skeleton';
import styles from './projects.module.css';

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
        <div
          key={project.id}
          className={styles.projectCard}
          data-loaded="true"
          style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
        >
          <ProjectCard project={project} index={index} />
        </div>
      ))}
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <div className="container py-8">
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