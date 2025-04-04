'use client';

import { motion } from 'framer-motion';
import { ProjectContent as Project } from '@/lib/get-project-content';
import { VideoGallery } from './video-gallery';
import { ImageGallery } from './image-gallery';
import { ProjectHero } from './project-hero';
import { ProjectDetails } from './project-details';
import { AnimateIn } from '../ui/animate-in';
import { BackButton } from '../ui/back-button';
import { ScrollToTop } from '../ui/scroll-to-top';

interface ProjectContentProps {
  project: Project;
}

export function ProjectContent({ project }: ProjectContentProps) {
  return (
    <div className="relative">
      <ScrollToTop />
      <BackButton href="/projects" label="All Projects" />
      <ProjectHero project={project} />
      <AnimateIn>
        <ProjectDetails project={project} />
      </AnimateIn>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div 
          className="prose prose-lg dark:prose-invert max-w-none [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mt-12 [&>h2]:mb-6 [&>p]:leading-relaxed [&>ul]:space-y-2 [&>ul]:my-6 [&>ul>li]:text-muted-foreground [&>p]:text-muted-foreground [&>ul]:list-disc [&>ul]:pl-6 [&>p>a]:text-purple-500 [&>p>a]:underline hover:[&>p>a]:text-purple-600 [&>ul>li>a]:text-purple-500 [&>ul>li>a]:underline hover:[&>ul>li>a]:text-purple-600 [&_a]:target-[_blank]"
          dangerouslySetInnerHTML={{ __html: project.content }}
        />
        
        {project.videos && project.videos.length > 0 && (
          <div className="mt-16 pt-16 border-t">
            <h2 className="text-2xl font-bold mb-8">Project Videos ({project.videos.length})</h2>
            <VideoGallery videos={project.videos} />
          </div>
        )}

        {project.gallery && project.gallery.length > 0 && (
          <div className="mt-16 pt-16 border-t">
            <h2 className="text-2xl font-bold mb-8">Project Gallery ({project.gallery.length})</h2>
            <ImageGallery images={project.gallery} />
          </div>
        )}
      </motion.div>
    </div>
  );
}