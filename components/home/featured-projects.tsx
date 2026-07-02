import Image from 'next/image';
import Link from 'next/link';
import { ProjectTags } from '@/components/projects/project-tags';
import type { ProjectContent } from '@/lib/get-project-content';

const featuredIds = [
  'rpa-ai-recorder',
  'rpa-self-healing',
  'rpa-nl2flow',
  'ai-builder',
];

interface FeaturedProjectsProps {
  projects: ProjectContent[];
}

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  const featured = featuredIds
    .map((id) => projects.find((p) => p.id === id))
    .filter((p): p is ProjectContent => Boolean(p));

  if (featured.length === 0) return null;
  const [lead, ...rest] = featured;

  return (
    <section className="border-t border-[rgba(255,255,255,0.04)] px-6 sm:px-12 lg:px-[60px] py-[120px]">
      <h2 className="text-[44px] text-center text-white mb-[60px]">
        Featured Projects
      </h2>

      <div className="max-w-[1200px] mx-auto grid gap-6 lg:grid-cols-[1.15fr_1fr]">
        {/* Lead card */}
        <Link
          href={`/projects/${lead.id}`}
          className="group flex flex-col rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.06)] bg-[#111116] transition-all duration-300 hover:border-[rgba(147,51,234,0.3)] hover:-translate-y-1"
        >
          <div className="relative flex-1 min-h-[280px] bg-gradient-to-br from-[rgba(147,51,234,0.15)] to-[rgba(16,185,129,0.1)] overflow-hidden">
            {(lead.cover || lead.image) && (
              <Image
                src={lead.cover || lead.image || ''}
                alt={lead.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
            )}
          </div>
          <div className="p-8">
            <ProjectTags tags={lead.tags.slice(0, 3)} className="mb-4" />
            <h3 className="text-[24px] font-semibold text-white mb-2 font-sans">
              {lead.title}
            </h3>
            <p className="text-[15px] text-[#A3A3A3] leading-[1.6] line-clamp-3">
              {lead.description}
            </p>
          </div>
        </Link>

        {/* Secondary cards */}
        <div className="flex flex-col gap-6">
          {rest.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group flex flex-1 rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.06)] bg-[#111116] transition-all duration-300 hover:border-[rgba(147,51,234,0.3)] hover:-translate-y-1"
            >
              <div className="relative w-[150px] sm:w-[200px] flex-shrink-0 bg-gradient-to-br from-[rgba(147,51,234,0.15)] to-[rgba(16,185,129,0.1)] overflow-hidden">
                {(project.cover || project.image) && (
                  <Image
                    src={project.cover || project.image || ''}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                )}
              </div>
              <div className="p-6 flex flex-col justify-center">
                <ProjectTags tags={project.tags.slice(0, 2)} className="mb-3" />
                <h3 className="text-[17px] font-semibold text-white mb-1.5 font-sans">
                  {project.title}
                </h3>
                <p className="text-[13px] text-[#A3A3A3] leading-[1.5] line-clamp-2">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-12">
        <Link
          href="/projects"
          className="inline-flex items-center h-11 px-6 rounded-full border border-[rgba(255,255,255,0.1)] text-sm text-[#A3A3A3] transition-colors duration-300 hover:border-accent-purple hover:text-white"
        >
          View all {projects.length} projects &rarr;
        </Link>
      </div>
    </section>
  );
}
