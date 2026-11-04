import { GalleryGrid, GallerySkeleton, PageIntro, PageShell } from '@/components/design-system/studio';
export default function ProjectsLoading() { return <PageShell><PageIntro title="Projects" description="A selection of design projects and case studies from my work at Microsoft" /><GalleryGrid>{Array.from({ length: 6 }, (_, i) => <GallerySkeleton key={i} />)}</GalleryGrid></PageShell>; }
