import type { Metadata } from 'next';
import { GalleryGrid, PageIntro, PageShell } from '@/components/design-system/studio';
import { getAllProjects } from '@/lib/get-project-content';
import { ProjectCard } from '@/components/projects/project-card';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Independent products and design case studies by Mathias Wendlinger, from founding Tainure to building AI experiences at Microsoft.',
  openGraph: {
    title: 'Projects - Mathias Wendlinger',
    description: 'Independent products and design case studies, from founding Tainure to building AI experiences at Microsoft.',
    url: 'https://matwenger.design/projects',
  },
  alternates: {
    canonical: 'https://matwenger.design/projects',
  },
};

export default async function ProjectsPage() {
  const projects = await getAllProjects();
  return <PageShell>
    <PageIntro eyebrow="PROJECTS" title={<>Ideas, <em>made real</em></>} description="Independent products and work at Microsoft, from founding Tainure to designing experiences used by millions" />
    <GalleryGrid>{projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}</GalleryGrid>
  </PageShell>;
}
