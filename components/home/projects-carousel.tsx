'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ProjectTags } from '@/components/projects/project-tags';
import type { ProjectContent } from '@/lib/get-project-content';

interface ProjectsCarouselProps {
  projects: ProjectContent[];
}

export function ProjectsCarousel({ projects }: ProjectsCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const cardWidth = 300;
  const gap = 24;
  const totalCards = projects.length + 1;
  const [activeDot, setActiveDot] = useState(0);
  const [totalDots, setTotalDots] = useState(1);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateDots = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const visible = Math.floor(el.clientWidth / (cardWidth + gap)) || 1;
    const dots = Math.ceil(totalCards / visible);
    setTotalDots(dots);
    const index = Math.round(el.scrollLeft / (cardWidth + gap));
    setActiveDot(Math.min(Math.floor(index / visible), dots - 1));
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, [totalCards]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateDots();
    el.addEventListener('scroll', updateDots, { passive: true });
    window.addEventListener('resize', updateDots);
    return () => {
      el.removeEventListener('scroll', updateDots);
      window.removeEventListener('resize', updateDots);
    };
  }, [updateDots]);

  const scrollToDot = (dotIndex: number) => {
    const el = trackRef.current;
    if (!el) return;
    const visible = Math.floor(el.clientWidth / (cardWidth + gap)) || 1;
    el.scrollTo({
      left: dotIndex * visible * (cardWidth + gap),
      behavior: 'smooth',
    });
  };

  return (
    <section className="border-t border-[rgba(255,255,255,0.04)] px-6 sm:px-12 lg:px-[60px] py-[120px]">
      <h2 className="text-[44px] text-center text-white mb-[60px]">
        Featured Projects
      </h2>

      <div className="relative max-w-[1200px] mx-auto">
        {/* Left arrow */}
        <button
          onClick={() => {
            const el = trackRef.current;
            if (!el) return;
            el.scrollBy({ left: -(cardWidth + gap) * 2, behavior: 'smooth' });
          }}
          className={`absolute -left-14 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-[rgba(255,255,255,0.1)] bg-[#0c0c0f] hidden lg:flex items-center justify-center transition-all duration-300 ${
            canScrollLeft ? 'opacity-100 hover:border-accent-purple cursor-pointer' : 'opacity-0 pointer-events-none'
          }`}
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-4 h-4 text-[#888]" />
        </button>

        {/* Right arrow */}
        <button
          onClick={() => {
            const el = trackRef.current;
            if (!el) return;
            el.scrollBy({ left: (cardWidth + gap) * 2, behavior: 'smooth' });
          }}
          className={`absolute -right-14 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-[rgba(255,255,255,0.1)] bg-[#0c0c0f] hidden lg:flex items-center justify-center transition-all duration-300 ${
            canScrollRight ? 'opacity-100 hover:border-accent-purple cursor-pointer' : 'opacity-0 pointer-events-none'
          }`}
          aria-label="Scroll right"
        >
          <ChevronRight className="w-4 h-4 text-[#888]" />
        </button>

        {/* Carousel track */}
        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto pb-5 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none' }}
        >
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="w-[300px] min-w-[300px] flex-shrink-0 snap-start rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.06)] bg-[#111116] transition-all duration-300 hover:border-[rgba(147,51,234,0.3)] hover:-translate-y-1 group"
            >
              <div className="h-[180px] relative bg-gradient-to-br from-[rgba(147,51,234,0.15)] to-[rgba(16,185,129,0.1)] overflow-hidden">
                {(project.cover || project.image) && (
                  <Image
                    src={project.cover || project.image || ''}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                )}
              </div>
              <div className="p-6">
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

          {/* View all card */}
          <Link
            href="/projects"
            className="w-[200px] min-w-[200px] flex-shrink-0 rounded-2xl border border-dashed border-[rgba(255,255,255,0.1)] flex flex-col items-center justify-center p-10 text-center transition-all duration-300 hover:border-[rgba(147,51,234,0.3)]"
          >
            <div className="w-12 h-12 rounded-full border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-xl text-[#888] mb-4">
              &rarr;
            </div>
            <span className="text-[13px] text-[#888]">View all projects</span>
          </Link>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: totalDots }).map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToDot(i)}
              className={`w-2 h-2 rounded-full transition-colors duration-300 cursor-pointer ${
                i === activeDot
                  ? 'bg-accent-purple'
                  : 'bg-[rgba(255,255,255,0.15)] hover:bg-[rgba(255,255,255,0.3)]'
              }`}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
