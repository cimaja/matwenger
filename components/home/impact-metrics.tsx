'use client';

import { useEffect, useRef } from 'react';
import { animate, motion, useInView, useMotionValue, useReducedMotion, useTransform } from 'framer-motion';
import styles from './immersive-landing.module.css';

const metrics = [
  { value: 50, prefix: '', suffix: 'M+', label: 'monthly active users', note: 'Across the Power Platform experiences my team supports.' },
  { value: 81, prefix: '+', suffix: '%', label: 'more apps published', note: 'From A/B experiments in the Power Apps maker funnel.' },
  { value: 12, prefix: '', suffix: '', label: 'designers. one team.', note: 'Across India, Greece, and the United States.' },
];

function ImpactMetric({ metric, index }: { metric: typeof metrics[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduceMotion = useReducedMotion();
  const count = useMotionValue(metric.value);
  const display = useTransform(count, value => `${metric.prefix}${Math.round(value)}${metric.suffix}`);
  const finalValue = `${metric.prefix}${metric.value}${metric.suffix}`;

  useEffect(() => {
    if (reduceMotion) {
      count.set(metric.value);
      return;
    }

    count.set(0);
    if (!inView || !ref.current) return;

    const delay = index * 0.16;
    const counter = animate(count, metric.value, { duration: 0.9, delay, ease: [0.2, 0.7, 0.2, 1] });
    const entrance = animate(ref.current, { opacity: [0, 1], x: [-14, 0] }, { duration: 0.5, delay, ease: [0.2, 0.7, 0.2, 1] });

    return () => {
      counter.stop();
      entrance.stop();
      // A preference change during the entrance must not leave a faded or shifted column.
      if (ref.current) {
        ref.current.style.opacity = '1';
        ref.current.style.transform = 'none';
      }
    };
  }, [count, inView, index, metric.value, reduceMotion]);

  return <div ref={ref}>
    <motion.strong aria-hidden="true" className={styles.impactNumber}>{display}</motion.strong>
    <span className="sr-only">{finalValue}</span>
    <span>{metric.label}</span>
    <p>{metric.note}</p>
  </div>;
}

export function ImpactMetrics() {
  return <div className={styles.impactGrid}>{metrics.map((metric, index) => <ImpactMetric key={metric.label} metric={metric} index={index} />)}</div>;
}
