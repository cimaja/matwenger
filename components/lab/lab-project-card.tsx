import { ProjectTags } from '@/components/projects/project-tags';
import { CalendarIcon, ExternalLink, Lock } from 'lucide-react';
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
      <div className="h-full rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[#111116] transition-all duration-300 hover:border-[rgba(147,51,234,0.3)] hover:-translate-y-1 flex flex-col">
        <div className="p-6 flex-none">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold text-white group-hover:text-accent-purple transition-colors font-sans flex items-center gap-2">
              {project.title}
              {project.locked && <Lock className="w-3.5 h-3.5 text-[#555]" />}
            </h3>
            <ExternalLink className="w-4 h-4 text-[#555] group-hover:text-accent-purple transition-colors" />
          </div>
          {project.tags && project.tags.length > 0 && (
            <ProjectTags tags={project.tags} />
          )}
        </div>
        <div className="px-6 pb-6 flex-1 flex flex-col justify-between">
          <p className="text-[13px] text-[#777] mb-4 leading-[1.6]">{project.description}</p>
          <div className="flex items-center text-sm text-[#555] font-mono text-[12px]">
            <CalendarIcon className="w-3.5 h-3.5 mr-1.5" />
            <span>{project.date}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
