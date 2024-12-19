import type { Metadata } from 'next';
import type { ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import { ProjectContent } from '@/components/projects/project-content';
import { getProjectContent, getAllProjects } from '@/lib/get-project-content';

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const project = await getProjectContent(params.id);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
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

export default async function ProjectPage({ params }: Props) {
  const project = await getProjectContent(params.id);

  if (!project) {
    notFound();
  }

  return <ProjectContent project={project} />;
}