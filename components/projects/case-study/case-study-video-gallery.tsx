'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type { Video } from '@/lib/get-project-content';
import { CaseStudyVideo } from './case-study-video';
import styles from './case-study.module.css';

export function CaseStudyVideoGallery({ videos, fallbackPoster }: { videos: Video[]; fallbackPoster?: string }) {
  if (!videos.length) return null;
  if (videos.length === 1) return <figure className={styles.additionalVideo}><CaseStudyVideo video={videos[0]} poster={videos[0].thumbnail ? undefined : fallbackPoster} /><figcaption className={styles.filmCaption}>{videos[0].description || videos[0].title}</figcaption></figure>;

  return <Tabs defaultValue="0" orientation="vertical" className={styles.videoCollection}>
    <TabsList className={styles.videoList} aria-label="Project films">
      {videos.map((video, index) => <TabsTrigger className={styles.videoTab} key={video.src || video.id} value={String(index)}><span>{String(index + 1).padStart(2, '0')}</span>{video.title || `Film ${index + 1}`}</TabsTrigger>)}
    </TabsList>
    <div>{videos.map((video, index) => <TabsContent className={styles.videoPanel} key={video.src || video.id} value={String(index)}><figure><CaseStudyVideo video={video} poster={video.thumbnail ? undefined : fallbackPoster} /><figcaption className={styles.filmCaption}>{video.description || video.title}</figcaption></figure></TabsContent>)}</div>
  </Tabs>;
}
