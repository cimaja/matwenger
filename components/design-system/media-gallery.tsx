'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import type { GalleryImage } from '@/lib/get-project-content';
import { MediaFrame } from './media-frame';
import styles from './studio.module.css';

export function MediaGallery({ images, className }: { images: GalleryImage[]; className?: string }) {
  const validImages = images.filter(image => image.src?.trim());
  const [selected, setSelected] = useState<number | null>(null);
  const track = useRef<HTMLDivElement>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  const active = selected === null ? null : validImages[selected] ?? null;
  if (!validImages.length) return null;

  function step(direction: number) { setSelected(index => index === null ? null : (index + direction + validImages.length) % validImages.length); }
  function scroll(direction: number) {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    track.current?.scrollBy({ left: direction * track.current.clientWidth * .8, behavior: reduce ? 'instant' : 'smooth' });
  }

  return <div className={`${styles.mediaGallery} ${className || ''}`}>
    <div className={styles.mediaTrack} ref={track} aria-label="Project images">
      {validImages.map((image, index) => <button key={`${image.src}-${index}`} className={styles.mediaButton} data-ratio={image.ratio || 'landscape'} type="button" aria-label={`Open image ${index + 1}: ${image.alt || image.caption || 'Project image'}`} onClick={event => { opener.current = event.currentTarget; setSelected(index); }}>
        <MediaFrame src={image.src} alt={image.alt} ratio={image.ratio} fit="contain" sizes="(max-width: 760px) 85vw, 60vw" />
        {image.caption && <p className={styles.caption}>{image.caption}</p>}
      </button>)}
    </div>
    <div className={styles.mediaToolbar}><span>{validImages.length} images · Select to enlarge</span>{validImages.length > 1 && <div><Button variant="outline" size="icon" aria-label="Scroll gallery left" onClick={() => scroll(-1)}><ChevronLeft size={18} /></Button><Button variant="outline" size="icon" aria-label="Scroll gallery right" onClick={() => scroll(1)}><ChevronRight size={18} /></Button></div>}</div>
    <Dialog open={active !== null} onOpenChange={open => { if (!open) setSelected(null); }}>
      <DialogContent className={styles.viewer} onCloseAutoFocus={event => { event.preventDefault(); opener.current?.focus(); }} onKeyDown={event => { if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') { event.preventDefault(); step(event.key === 'ArrowRight' ? 1 : -1); } }}>
        <DialogTitle className="sr-only">Project image viewer</DialogTitle>
        <DialogDescription className="sr-only">Use the arrow keys to navigate. Press Escape to close.</DialogDescription>
        {active && <><div className={styles.viewerImage}><Image src={active.src} alt={active.alt || 'Project image'} fill sizes="90vw" style={{ objectFit: 'contain' }} /></div><p className={styles.viewerCaption} aria-live="polite">{active.caption || active.alt}</p><div className={styles.viewerControls}>{validImages.length > 1 && <Button variant="outline" size="icon" aria-label="Previous image" onClick={() => step(-1)}><ChevronLeft size={18} /></Button>}<span aria-live="polite">{(selected ?? 0) + 1} / {validImages.length}</span>{validImages.length > 1 && <Button variant="outline" size="icon" aria-label="Next image" onClick={() => step(1)}><ChevronRight size={18} /></Button>}</div></>}
      </DialogContent>
    </Dialog>
  </div>;
}
