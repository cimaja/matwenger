import type { ComponentProps, ReactNode } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { MediaFrame, type MediaFrameProps } from './media-frame';
import styles from './studio.module.css';

export { TraitScale } from './trait-scale';

export function PageShell({ children, reading = false }: { children: ReactNode; reading?: boolean }) {
  return <div className={styles.page}><div className={reading ? styles.reading : styles.container}>{children}</div></div>;
}
export function PageIntro({ eyebrow, title, description }: { eyebrow?: string; title: ReactNode; description?: string }) {
  return <div className={styles.intro}>{eyebrow && <SectionLabel>{eyebrow}</SectionLabel>}<h1>{title}</h1>{description && <p>{description}</p>}</div>;
}
export function SectionLabel({ children }: { children: ReactNode }) { return <div className={styles.eyebrow}>{children}</div>; }
export function TextLink({ className, ...props }: ComponentProps<typeof Link>) { return <Link className={cn(styles.textLink, className)} {...props} />; }
export function Tag({ children, tone = 'neutral' }: { children: ReactNode; tone?: 'neutral' | 'accent' | 'success' | 'warning' | 'danger' | 'info' }) {
  return <span className={styles.tag} data-tone={tone}>{children}</span>;
}
export function Tags({ tags }: { tags: string[] }) { return <div className={styles.tags}>{tags.map(tag => <Tag key={tag}>{tag}</Tag>)}</div>; }
export function GalleryGrid({ children, layout = 'projects' }: { children: ReactNode; layout?: 'projects' | 'lab' | 'featured' }) { return <div className={styles.grid} data-layout={layout}>{children}</div>; }
export function GalleryCard({ href, title, description, meta, tags = [], media, external = false, locked = false }: { href: string; title: string; description: string; meta?: string; tags?: string[]; media?: MediaFrameProps; external?: boolean; locked?: boolean }) {
  return <Link href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined} className={cn(styles.galleryCard, !media && styles.labCard)}>
    {media && <MediaFrame {...media} />}
    <div className={styles.cardBody}>
      <h3 className={styles.cardHeading}>{title}</h3>
      {meta && <p className={styles.cardMeta}>{meta}</p>}
      <p className={styles.cardDescription}>{description}</p>
      <div className={styles.tags}>{tags.map(tag => <Tag key={tag}>{tag}</Tag>)}{locked && <Tag tone="warning">Restricted access</Tag>}</div>
      {external && <span className="sr-only">Opens in a new tab</span>}
    </div>
  </Link>;
}
export function GallerySkeleton() { return <div className={styles.skeleton} role="status" aria-label="Loading project"><div className={styles.skeletonMedia} /><div className={styles.skeletonLine} /><div className={styles.skeletonLine} /><span className="sr-only">Loading project</span></div>; }
export function JourneyTimeline({ items }: { items: { year: string; title: string; location: string; description: string; highlight?: string }[] }) {
  return <ol className={styles.timeline}>{items.map(item => <li key={item.year}><span className={styles.timelineYear}>{item.year}</span><div className={styles.timelineBody}><h3>{item.title}</h3><small>{item.location}</small><p>{item.description}</p>{item.highlight && <Tag tone="success">{item.highlight}</Tag>}</div></li>)}</ol>;
}
