'use client';

import { ProjectContent } from '@/lib/get-project-content';
import { ParallaxImage } from '../ui/parallax-image';

interface ProjectHeroProps {
  project: ProjectContent;
}

export function ProjectHero({ project }: ProjectHeroProps) {
  const imageUrl = project.cover || project.image;
  if (!imageUrl) return null;

  return (
    <div className="relative w-full h-[60vh] min-h-[400px] bg-background">
      <ParallaxImage
        src={imageUrl}
        alt={project.title}
        priority
        className="h-full"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
    </div>
  );
}
