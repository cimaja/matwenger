import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ProjectTags } from '@/components/projects/project-tags';
import { CalendarIcon, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import type { LabProject } from './lab-projects-data';

export function LabProjectCard({ project }: { project: LabProject }) {
  return (
    <Link
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full group"
    >
      <Card className="h-full transition-all duration-300 hover:border-pink-500/50 hover:shadow-lg hover:shadow-pink-500/10 flex flex-col">
        <CardHeader className="flex-none">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold group-hover:text-pink-500 transition-colors">
              {project.title}
            </h3>
            <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-pink-500 transition-colors" />
          </div>
          {project.tags && project.tags.length > 0 && (
            <ProjectTags tags={project.tags} />
          )}
        </CardHeader>
        <CardContent className="flex-1 flex flex-col justify-between">
          <p className="text-muted-foreground mb-4">{project.description}</p>
          <div className="flex items-center text-sm text-muted-foreground">
            <CalendarIcon className="w-4 h-4 mr-1" />
            <span>{project.date}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
