import type { Metadata } from 'next';
import type { ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import { ProjectContent } from '@/components/projects/project-content';
import { getProjectContent, getAllProjects } from '@/lib/get-project-content';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { id } = await params;
  const project = await getProjectContent(id);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  const projectUrl = `https://matwenger.design/projects/${id}`;

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      url: projectUrl,
      type: 'article',
      images: project.image ? [
        {
          url: `https://matwenger.design${project.image}`,
          alt: project.title,
        },
      ] : undefined,
    },
    alternates: {
      canonical: projectUrl,
    },
  };
}

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  const project = await getProjectContent(id);

  if (!project) {
    notFound();
  }

  return <ProjectContent project={project} />;
}