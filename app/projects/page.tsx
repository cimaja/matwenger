import type { Metadata } from 'next';
import { GalleryGrid, PageIntro, PageShell } from '@/components/design-system/studio';
import { getAllProjects } from '@/lib/get-project-content';
import { ProjectCard } from '@/components/projects/project-card';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore a curated collection of design projects and case studies showcasing AI-driven experiences, enterprise solutions, and innovative digital products by Mathias Wendlinger.',
  openGraph: {
    title: 'Projects - Mathias Wendlinger',
    description: 'Design projects and case studies featuring AI-driven experiences, enterprise solutions, and innovative digital products.',
    url: 'https://matwenger.design/projects',
  },
  alternates: {
    canonical: 'https://matwenger.design/projects',
  },
};

export default async function ProjectsPage() {
  const projects = await getAllProjects();
  return <PageShell>
    <PageIntro eyebrow="PROJECTS" title={<>Ideas, <em>made real</em></>} description="A selection of design projects and case studies from my work at Microsoft" />
    <GalleryGrid>{projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}</GalleryGrid>
  </PageShell>;
}
