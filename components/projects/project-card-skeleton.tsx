import { Card, CardContent, CardHeader } from '@/components/ui/card';

export function ProjectCardSkeleton() {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video w-full bg-muted animate-pulse" />
      <CardHeader>
        <div className="space-y-2">
          <div className="h-4 w-1/2 bg-muted rounded animate-pulse" />
          <div className="h-3 w-3/4 bg-muted rounded animate-pulse" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="h-3 w-full bg-muted rounded animate-pulse" />
          <div className="h-3 w-5/6 bg-muted rounded animate-pulse" />
          <div className="h-3 w-4/6 bg-muted rounded animate-pulse" />
        </div>
      </CardContent>
    </Card>
  );
}
