import { Tags } from '@/components/design-system/studio';

export function ProjectTags({ tags, className }: { tags: string[]; className?: string }) { return <div className={className}><Tags tags={tags} /></div>; }
