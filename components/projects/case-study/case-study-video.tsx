'use client';

import { useRef, useState } from 'react';
import { Play } from 'lucide-react';
import Image from 'next/image';
import type { Video } from '@/lib/get-project-content';
import { YouTube } from '@/components/ui/youtube';
import styles from './case-study.module.css';

export function CaseStudyVideo({ video, poster, priority = false }: { video: Video; poster?: string; priority?: boolean }) {
  const player = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const [error, setError] = useState(false);

  if (video.type === 'youtube' && video.id) return <YouTube videoId={video.id} />;
  if (!video.src) return null;

  async function play() {
    setStarted(true);
    try { await player.current?.play(); }
    catch { setStarted(false); }
  }

  return <div className={styles.video}>
    <video ref={player} src={video.src} poster={video.thumbnail || poster} preload="none" controls playsInline onPlay={() => setStarted(true)} onError={() => setError(true)} aria-label={video.title || 'Project demonstration'}>
      {video.captions && <track kind="captions" src={video.captions} srcLang="en" label="English" />}
    </video>
    {!started && !error && poster && <Image src={poster} alt="" fill priority={priority} sizes="91vw" className={styles.videoPoster} />}
    {!started && !error && <button type="button" className={styles.videoPlay} onClick={play}><span><Play size={18} fill="currentColor" aria-hidden="true" />Watch the film</span></button>}
    {error && <p className={styles.videoError}>This video could not be loaded. <a href={video.src}>Open the video file</a></p>}
  </div>;
}
