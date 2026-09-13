'use client';

import { useEffect, useRef, useState } from 'react';
import { MediaFigure } from '@/components/design-system/media-figure';
import type { GalleryImage } from '@/lib/get-project-content';
import type { CaseStudy } from '@/lib/project-case-study';
import styles from './case-study.module.css';

type Step = NonNullable<CaseStudy['experience']>['steps'][number];

export function ExperienceWalkthrough({ steps, images }: { steps: Step[]; images: GalleryImage[] }) {
  const [active, setActive] = useState(0);
  const items = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1024px) and (min-height: 650px) and (prefers-reduced-motion: no-preference)');
    let frame = 0;
    function update() {
      frame = 0;
      if (!media.matches) return;
      const focalPoint = window.innerHeight * .48;
      let nearest = 0;
      let distance = Infinity;
      items.current.forEach((item, index) => {
        if (!item) return;
        const rect = item.getBoundingClientRect();
        const delta = Math.abs(rect.top + rect.height / 2 - focalPoint);
        if (delta < distance) { distance = delta; nearest = index; }
      });
      setActive(nearest);
    }
    function schedule() { if (!frame) frame = window.requestAnimationFrame(update); }
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    media.addEventListener('change', schedule);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      media.removeEventListener('change', schedule);
    };
  }, []);

  function select(index: number) {
    setActive(index);
    items.current[index]?.scrollIntoView({ block: 'center', behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  }

  return <div className={styles.walkthrough}>
    <ol className={styles.steps}>
      {steps.map((step, index) => <li key={step.label} ref={node => { items.current[index] = node; }} className={styles.step} data-active={index === active}>
        <div className={styles.stepCopy}>
          <span className={styles.stepNumber}>{String(index + 1).padStart(2, '0')} / {String(steps.length).padStart(2, '0')} <span>{step.label}</span></span>
          <h3>{step.title}</h3>
          <p>{step.body}</p>
        </div>
        <div className={styles.mobileScreen}><MediaFigure image={images[step.image - 1]} caption={step.caption} /></div>
      </li>)}
    </ol>
    <div className={styles.experienceStage}>
      <div className={styles.stepNavigation} role="group" aria-label="Explore the experience">
        {steps.map((step, index) => <button key={step.label} type="button" aria-pressed={active === index} onClick={() => select(index)}><span>{String(index + 1).padStart(2, '0')}</span>{step.label}</button>)}
      </div>
      <div className={styles.stageImage} key={active}><MediaFigure image={images[steps[active].image - 1]} caption={steps[active].caption} /></div>
    </div>
  </div>;
}
