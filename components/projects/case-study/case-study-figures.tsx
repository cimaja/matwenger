'use client';

import { useEffect, useRef } from 'react';
import { animate, motion, useInView, useMotionValue, useReducedMotion, useTransform } from 'framer-motion';
import type { CaseStudy } from '@/lib/project-case-study';
import styles from './case-study.module.css';

type Figure = NonNullable<CaseStudy['figures']>['items'][number];

const format = (figure: Figure, value: number) =>
  `${figure.prefix ?? ''}${value.toFixed(figure.decimals ?? 0)}${figure.suffix ?? ''}`;

// Counts up like the home page's impact band. The server renders the final value,
// so the figure reads correctly before hydration and without scripts.
function CaseStudyFigure({ figure, index }: { figure: Figure; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduceMotion = useReducedMotion();
  const count = useMotionValue(figure.value);
  const display = useTransform(count, value => format(figure, value));

  useEffect(() => {
    if (reduceMotion) {
      count.set(figure.value);
      return;
    }

    count.set(0);
    const node = ref.current;
    if (!inView || !node) return;

    const delay = index * 0.16;
    const counter = animate(count, figure.value, { duration: 0.9, delay, ease: [0.2, 0.7, 0.2, 1] });
    const entrance = animate(node, { opacity: [0, 1], x: [-14, 0] }, { duration: 0.5, delay, ease: [0.2, 0.7, 0.2, 1] });

    return () => {
      counter.stop();
      entrance.stop();
      node.style.opacity = '1';
      node.style.transform = 'none';
    };
  }, [count, figure.value, inView, index, reduceMotion]);

  return <div ref={ref} className={styles.figure}>
    <motion.strong aria-hidden="true" className={styles.figureNumber}>{display}</motion.strong>
    <span className="sr-only">{format(figure, figure.value)}</span>
    <span className={styles.figureLabel}>{figure.label}</span>
    {figure.note && <p>{figure.note}</p>}
    <a href={figure.source.href} target="_blank" rel="noopener noreferrer" className={styles.figureSource}>{figure.source.label}<span className="sr-only"> (opens in a new tab)</span></a>
  </div>;
}

export function CaseStudyFigures({ items }: { items: Figure[] }) {
  return <div className={styles.figureGrid}>{items.map((figure, index) => <CaseStudyFigure key={figure.label} figure={figure} index={index} />)}</div>;
}
