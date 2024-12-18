import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { GitHubRepo } from '@/lib/github';
import { CalendarIcon, GitForkIcon, StarIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export function GitHubRepoCard({ repo }: { repo: GitHubRepo }) {
  const updatedAt = new Date(repo.updated_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <Link
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full"
    >
      <Card className="h-full transition-all duration-300 hover:border-pink-500/50 hover:shadow-lg hover:shadow-pink-500/10 flex flex-col">
        <CardHeader className="flex-none">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold group-hover:text-pink-500 transition-colors">{repo.name}</h3>
            <div className="flex items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-1">
                <StarIcon className="w-4 h-4" />
                <span>{repo.stargazers_count}</span>
              </div>
              <div className="flex items-center gap-1">
                <GitForkIcon className="w-4 h-4" />
                <span>{repo.forks_count}</span>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex-1">
          <p className="text-muted-foreground mb-4">{repo.description || 'No description available'}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {repo.language && (
              <Badge variant="secondary">{repo.language}</Badge>
            )}
            {repo.topics?.map((topic) => (
              <Badge key={topic} variant="outline">
                {topic}
              </Badge>
            ))}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <CalendarIcon className="w-4 h-4 mr-1" />
            <span>Updated {updatedAt}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
