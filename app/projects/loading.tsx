import { ProjectCardSkeleton } from '@/components/projects/project-card-skeleton';

export default function ProjectsLoading() {
  return (
    <div className="container py-8">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <ProjectCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
