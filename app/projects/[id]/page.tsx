import { Suspense } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProjectContent, getAllProjects } from '@/lib/get-project-content';
import { ProjectContent } from '@/components/projects/project-content';
import { ProjectHeader } from '@/components/projects/project-header';

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = await getProjectContent(params.id);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((project) => ({
    id: project.id,
  }));
}

async function ProjectDetails({ id }: { id: string }) {
  const project = await getProjectContent(id);

  if (!project) {
    notFound();
  }

  return (
    <>
      <ProjectHeader project={project} />
      <ProjectContent project={project} />
    </>
  );
}

export default function ProjectPage({ params }: Props) {
  return (
    <article className="container py-8">
      <Suspense fallback={
        <div className="space-y-8 animate-pulse">
          <div className="space-y-4">
            <div className="h-12 w-2/3 bg-muted rounded" />
            <div className="h-6 w-full max-w-2xl bg-muted rounded" />
          </div>
          <div className="aspect-video w-full bg-muted rounded" />
        </div>
      }>
        <ProjectDetails id={params.id} />
      </Suspense>
    </article>
  );
}