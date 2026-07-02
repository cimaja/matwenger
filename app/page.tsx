import { HeroSection } from '@/components/home/hero/hero-section';
import { StorySection } from '@/components/home/story-section';
import { PullQuote } from '@/components/home/pull-quote';
import { WorkflowSection } from '@/components/home/workflow-section';
import { FeaturedProjects } from '@/components/home/featured-projects';
import { TestimonialsScroll } from '@/components/home/testimonials/testimonials-scroll';
import { ExperienceSection } from '@/components/home/experience-section';
import { getAllProjects } from '@/lib/get-project-content';

export default async function HomePage() {
  const allProjects = await getAllProjects();

  return (
    <div className="min-h-screen">
      <HeroSection />
      <StorySection />
      <PullQuote />
      <WorkflowSection />
      <FeaturedProjects projects={allProjects} />
      <TestimonialsScroll />
      <ExperienceSection />
    </div>
  );
}
