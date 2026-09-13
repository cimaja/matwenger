import type { ProjectContent } from '@/lib/get-project-content';
import { GalleryCard } from '@/components/design-system/studio';

export function ProjectCard({ project, index }: { project: ProjectContent; index: number }) {
  return <GalleryCard href={`/projects/${project.id}`} title={project.title} description={project.description} meta={[project.role, project.year].filter(Boolean).join(' · ')} tags={project.tags} media={{ src: project.cover || project.image, alt: project.title, ratio: 'landscape', fit: 'cover', tone: 'muted', priority: index < 2 }} />;
}
