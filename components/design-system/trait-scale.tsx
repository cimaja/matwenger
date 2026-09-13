'use client';

import { useRef, type CSSProperties } from 'react';
import { useInView } from 'framer-motion';
import styles from './studio.module.css';

export function TraitScale({ left, right, value, delay = 0 }: { left: string; right: string; value: number; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.8 });
  const position = Math.max(0, Math.min(100, value));

  return <div
    ref={ref}
    role="img"
    aria-label={`${left} to ${right}: ${position} out of 100`}
    className={styles.traitScale}
    data-entered={inView}
    style={{ '--trait-position': `${position}%`, '--trait-delay': `${delay}s` } as CSSProperties}
  >
    <div className={styles.traitLabels}><span>{left}</span><span>{right}</span></div>
    <div className={styles.traitTrack}><span className={styles.traitPoint} /></div>
  </div>;
}
