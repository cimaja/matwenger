'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './studio.module.css';

export interface MediaFrameProps {
  src?: string;
  alt: string;
  ratio?: 'landscape' | 'wide' | 'square' | 'portrait';
  fit?: 'cover' | 'contain';
  tone?: 'color' | 'muted' | 'portrait';
  position?: string;
  crop?: number;
  priority?: boolean;
  sizes?: string;
}

export function MediaFrame({ src, alt, ratio = 'landscape', fit = 'cover', tone = 'color', position = 'center', crop = 0, priority = false, sizes = '(max-width: 760px) 88vw, 45vw' }: MediaFrameProps) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  return (
    <div className={styles.media} data-ratio={ratio} data-fit={fit} data-tone={tone}>
      {src && failedSrc !== src ? (
        <div className={styles.mediaInner} style={{ inset: fit === 'cover' ? -Math.max(0, crop) : 0 }}>
          <Image src={src} alt={alt} fill sizes={sizes} priority={priority} onError={() => setFailedSrc(src)} style={{ objectFit: fit, objectPosition: position }} />
        </div>
      ) : <div className={styles.mediaFallback} role="img" aria-label={alt || 'Image unavailable'}>Preview unavailable</div>}
    </div>
  );
}
