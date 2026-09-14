'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import type { Video } from '@/lib/get-project-content';
import { CaseStudyVideo } from '@/components/projects/case-study/case-study-video';
import styles from './current-project.module.css';

export function CurrentProject({ project }: { project: { id: string; title: string; cover: string; video?: Video } }) {
  const reducedMotion = useReducedMotion();

  return (
    <section id="currently-building" className={styles.section} data-studio-theme="paper" aria-labelledby="current-project-title">
      <div className={styles.eyebrow}><span aria-hidden="true" />Currently building</div>
      <div className={styles.grid}>
        <div className={styles.copy}>
          <div className={styles.identity}>
            <Image src="/images/projects/tainure/main/mark.svg" width={36} height={37} alt="" />
            <h2 id="current-project-title">{project.title}</h2>
          </div>
          <p className={styles.promise}>A second brain for<br /><em>the people you work with</em></p>
          <p className={styles.description}>My independent product, turning everyday notes into context for better conversations. I founded it and I’m building every layer, from the experience to the code.</p>
          <p className={styles.role}>Founder, Designer &amp; Developer</p>
          <div className={styles.links}>
            <Link href={`/projects/${project.id}`}>Explore the project</Link>
            <a href="https://tainure.com" target="_blank" rel="noopener noreferrer">Visit Tainure<span className="sr-only"> (opens in a new tab)</span></a>
          </div>
        </div>
        <motion.figure
          className={styles.film}
          initial={false}
          whileInView={reducedMotion ? undefined : { y: [20, 0] }}
          viewport={{ once: true, amount: .25 }}
          transition={{ duration: .7, ease: [.22, 1, .36, 1] }}
        >
          {project.video ? <CaseStudyVideo video={project.video} poster={project.cover} /> : <Image src={project.cover} alt="Tainure meeting preparation preview" width={1920} height={1080} sizes="(max-width: 1000px) 88vw, 55vw" />}
          <figcaption><span>Inside Tainure · 89 seconds</span><span className={styles.status}>Private beta</span></figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
