import type { Metadata } from 'next';
import { LabProjectCard } from '@/components/lab/lab-project-card';
import { labProjects } from '@/components/lab/lab-projects-data';
import { GalleryGrid, PageIntro, PageShell } from '@/components/design-system/studio';

export const metadata: Metadata = { title: 'Lab', description: 'Interactive prototypes and experiments showcasing design explorations and innovative concepts', alternates: { canonical: '/lab' } };

export default function LabPage() {
  return <PageShell>
    <PageIntro eyebrow="LAB" title={<>Always <em>exploring.</em></>} description="Interactive prototypes and experiments showcasing design explorations and innovative concepts" />
    <GalleryGrid layout="lab">{labProjects.map(project => <LabProjectCard key={project.title} project={project} />)}</GalleryGrid>
  </PageShell>;
}
