import { ImmersiveLanding } from '@/components/home/immersive-landing';
import { getAllProjects } from '@/lib/get-project-content';

export default async function HomePage() {
  const allProjects = await getAllProjects();

  return <ImmersiveLanding projects={allProjects.map(({ id, title, cover, year, description, videos }) => ({ id, title, cover: cover || '', year, description, video: id === 'tainure' ? videos?.[0] : undefined }))} />;
}
