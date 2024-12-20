'use client';

import Image from 'next/image';
import { ProjectContent } from '@/lib/get-project-content';

interface ProjectHeroProps {
  project: ProjectContent;
}

export function ProjectHero({ project }: ProjectHeroProps) {
  const imageUrl = project.cover || project.image;
  if (!imageUrl) return null;

  return (
    <div className="relative w-full h-[60vh] min-h-[400px] bg-background">
      <Image
        src={imageUrl}
        alt={project.title}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
    </div>
  );
}
