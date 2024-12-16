import { HeroSection } from '@/components/home/hero-section';
import { StatisticsSection } from '@/components/home/statistics/statistics-section';
import { ProfileSection } from '@/components/home/profile/profile-section';
import { FeaturedProjects } from '@/components/home/featured-projects';
import { TestimonialsSection } from '@/components/home/testimonials/testimonials-section';
import { getAllProjects } from '@/lib/get-project-content';

export default async function HomePage() {
  // Get all projects and randomly select 3
  const allProjects = await getAllProjects();
  const featuredProjects = [...allProjects]
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);
  
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StatisticsSection />
      <ProfileSection />
      <FeaturedProjects projects={featuredProjects} />
      <TestimonialsSection />
    </div>
  );
}