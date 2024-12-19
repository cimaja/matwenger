import { Card } from '@/components/ui/card';
import { CircleUserRound, Building2, CalendarDays } from 'lucide-react';
import { ProjectContent } from '@/lib/get-project-content';
import { ProjectTags } from './project-tags';

interface ProjectDetailsProps {
  project: ProjectContent;
}

export const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  return (
    <div className="relative -mt-20 z-10 container max-w-4xl">
      <Card className="p-8 backdrop-blur-sm bg-card/95 shadow-lg">
        <div className="space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">{project.title}</h1>
            <p className="text-xl text-muted-foreground">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CircleUserRound className="h-4 w-4" />
              <span>{project.role}</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="h-4 w-4" />
              <span>{project.company}</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4" />
              <span>{project.year}</span>
            </div>
          </div>

          <ProjectTags tags={project.tags} className="justify-center" />
        </div>
      </Card>
    </div>
  );
};
