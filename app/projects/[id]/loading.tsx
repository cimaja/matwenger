import { Skeleton } from '@/components/ui/skeleton';

export default function ProjectLoading() {
  return (
    <article className="container py-8 animate-in">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <Skeleton className="h-12 w-2/3" />
          <Skeleton className="h-6 w-full max-w-2xl" />
        </div>

        {/* Image Gallery */}
        <div className="grid gap-6 md:grid-cols-2">
          <Skeleton className="aspect-video w-full" />
          <div className="grid grid-cols-2 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="aspect-square w-full" />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4 max-w-3xl">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-4/6" />
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
