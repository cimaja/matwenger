import type { Metadata } from 'next';
import type { ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import { ProjectContent } from '@/components/projects/project-content';
import { getProjectContent, getAllProjects } from '@/lib/get-project-content';
import { CaseStudyTemplate } from '@/components/projects/case-study/case-study-template';

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

  if (project.caseStudy) {
    const projects = await getAllProjects();
    const index = projects.findIndex(item => item.id === project.id);
    const nextProject = projects.length > 1 ? projects[(index + 1) % projects.length] : undefined;
    return <CaseStudyTemplate key={project.id} project={project} study={project.caseStudy} nextProject={nextProject} />;
  }

  return <ProjectContent project={project} />;
}
