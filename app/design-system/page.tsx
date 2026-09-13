import type { Metadata } from 'next';
import { DesignSystemShowcase } from '@/components/design-system/showcase';
import { getAllProjects } from '@/lib/get-project-content';

export const metadata: Metadata = { title: 'Design system', description: 'Charte graphique et composants du portfolio.', robots: { index: false, follow: false }, alternates: { canonical: '/design-system' } };

export default async function DesignSystemPage() {
  const projects = await getAllProjects();
  const project = projects.find(item => item.id === 'power-apps-copilot') || projects[0];
  return <DesignSystemShowcase project={{ id: project.id, title: project.title, description: project.description, cover: project.cover || project.image || '', year: project.year, tags: project.tags, gallery: project.gallery || [] }} />;
}
