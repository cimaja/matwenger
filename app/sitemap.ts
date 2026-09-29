import { MetadataRoute } from 'next';
import { getAllProjects } from '@/lib/get-project-content';

export const dynamic = 'force-static';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://matwenger.design';
  
  // Get all projects
  const projects = await getAllProjects();
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/lab`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ];
  
  // Dynamic project pages
  const projectPages = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.id}`,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));
  
  return [...staticPages, ...projectPages];
}
