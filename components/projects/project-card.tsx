'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { ProjectContent as Project } from '@/lib/get-project-content';
import { ProjectTags } from './project-tags';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const imageUrl = project.cover || project.image;
  if (!imageUrl) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Link href={`/projects/${project.id}`} className="block">
        <div className="group h-full rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.06)] bg-[#111116] transition-all duration-300 hover:border-[rgba(147,51,234,0.3)] hover:-translate-y-1">
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src={imageUrl}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={index < 3}
            />
          </div>
          <div className="p-6">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="text-lg font-semibold text-white mb-1 font-sans group-hover:text-accent-purple transition-colors">
                  {project.title}
                </h3>
                <div className="text-sm text-[#888]">
                  {project.role} · {project.year}
                </div>
              </div>
              <ArrowUpRight className="h-5 w-5 text-[#555] opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
            </div>
            <p className="text-[13px] text-[#777] line-clamp-2 mb-4">
              {project.description}
            </p>
            <ProjectTags tags={project.tags} />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
