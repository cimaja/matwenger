'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { ProjectContent as Project } from '@/lib/get-project-content';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ProjectTags } from './project-tags';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Link href={`/projects/${project.id}`} className="block">
        <Card className="group h-full transition-all duration-300 hover:border-pink-500/50 hover:shadow-lg hover:shadow-pink-500/10">
          <CardHeader className="p-0">
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={index < 3} // Prioritize loading for first 3 images
              />
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-2">
              <div>
                <CardTitle className="text-xl mb-1 group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <div className="text-sm text-muted-foreground">
                  {project.role} • {project.year}
                </div>
              </div>
              <ArrowUpRight className="h-5 w-5 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
            </div>
            <CardDescription className="line-clamp-2">
              {project.description}
            </CardDescription>
            <ProjectTags tags={project.tags} className="mt-4" />
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}