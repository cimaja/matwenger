import { GalleryCard } from '@/components/design-system/studio';
import type { LabProject } from './lab-projects-data';

export function LabProjectCard({ project }: { project: LabProject }) {
  return <GalleryCard href={project.url} title={project.title} description={project.description} meta={project.date} tags={project.tags} locked={project.locked} external />;
}
