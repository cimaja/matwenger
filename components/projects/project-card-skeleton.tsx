import { Card, CardContent, CardHeader } from '@/components/ui/card';

export function ProjectCardSkeleton() {
  return (
    <Card className="overflow-hidden group relative hover:shadow-lg transition-shadow">
      <div className="aspect-video w-full bg-muted animate-pulse relative">
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
      </div>
      <CardHeader className="relative z-10">
        <div className="space-y-2">
          <div className="h-5 w-3/4 bg-muted rounded animate-pulse" />
          <div className="h-4 w-1/2 bg-muted rounded animate-pulse opacity-70" />
        </div>
      </CardHeader>
      <CardContent className="relative z-10">
        <div className="space-y-3">
          <div className="h-4 w-full bg-muted rounded animate-pulse opacity-70" />
          <div className="h-4 w-5/6 bg-muted rounded animate-pulse opacity-70" />
          <div className="flex gap-2 mt-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-6 w-16 bg-muted rounded-full animate-pulse opacity-70" />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
