'use client';

import Image from 'next/image';
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import type { GalleryImage } from '@/lib/get-project-content';
import { MediaFrame } from './media-frame';
import styles from './studio.module.css';

/** A complete, uncropped product screen with an accessible full-size view. */
export function MediaFigure({ image, caption, priority = false }: { image: GalleryImage; caption?: string; priority?: boolean }) {
  return <figure className={styles.mediaFigure} data-ratio={image.ratio || 'landscape'}>
    <Dialog>
      <DialogTrigger asChild>
        <button type="button" className={styles.figureButton} aria-label={`Enlarge image: ${image.alt}`}>
          <MediaFrame src={image.src} alt={image.alt} ratio={image.ratio} fit="contain" priority={priority} sizes="(max-width: 1023px) 88vw, 65vw" />
        </button>
      </DialogTrigger>
      <figcaption className={styles.figureCaption}>
        <span>{caption || image.caption || image.alt}</span>
        <span aria-hidden="true">Click to enlarge</span>
      </figcaption>
      <DialogContent className={styles.viewer}>
        <DialogTitle className="sr-only">{image.alt}</DialogTitle>
        <div className={styles.viewerImage}><Image src={image.src} alt={image.alt} fill sizes="90vw" style={{ objectFit: 'contain' }} /></div>
        <DialogDescription className={styles.viewerCaption}>{caption || image.caption || image.alt}</DialogDescription>
      </DialogContent>
    </Dialog>
  </figure>;
}
