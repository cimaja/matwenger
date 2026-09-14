'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MotionConfig, motion, useScroll, useSpring } from 'framer-motion';
import { OriginalLandingStory } from './original-landing-story';
import { ProductionHero } from './production-hero';
import styles from './immersive-landing.module.css';

type LandingProject = { id: string; title: string; cover: string; year: string; description: string };

function SelectedWork({ projects }: { projects: LandingProject[] }) {
  const ids = ['power-apps-copilot', 'rpa-ai-recorder', 'rpa-self-healing'];
  const selection = ids.map(id => projects.find(project => project.id === id)).filter((project): project is LandingProject => Boolean(project));

  return (
    <section id="work" className={styles.work}>
      <div className={styles.sectionMeta}><span>01 / SELECTED WORK</span></div>
      <div className={styles.sectionTitle}><h2>Less friction<br /><em>More possibility</em></h2></div>
      <div className={styles.projectGrid}>
        {selection.map((project, index) => (
          <Link href={`/projects/${project.id}`} key={project.id} className={`${styles.projectCard} ${index === 0 ? styles.projectLead : ''}`}>
            <div className={styles.projectImage}>
              <Image src={project.cover} alt={project.title} fill sizes={index === 0 ? '(max-width: 700px) 100vw, 90vw' : '(max-width: 700px) 100vw, 45vw'} className={styles.coverImage} />
              <span className={styles.projectNumber}>0{index + 1}</span>
              <span className={styles.projectCategory}>{index === 0 ? 'AI IN THE FLOW OF WORK' : index === 1 ? 'SHOW. TELL. AUTOMATE.' : 'AUTOMATION THAT ADAPTS'}</span>
            </div>
            <div className={styles.projectCaption}>
              <div>
                <h3>{project.title}</h3>
                <p>{index === 0 ? 'Your business apps. A conversation away.' : index === 1 ? 'From everyday actions to intelligent workflows.' : 'When interfaces change, your work keeps moving.'}</p>
              </div>
              <span>{project.year}</span>
            </div>
          </Link>
        ))}
      </div>
      <div className={styles.projectsCta}><Link href="/projects" className={styles.allProjectsLink}>View all {projects.length} projects</Link></div>
    </section>
  );
}

export function ImmersiveLanding({ projects }: { projects: LandingProject[] }) {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <MotionConfig reducedMotion="user">
      <div className={`${styles.landing} ${styles.minimalLinks}`}>
        <a className={styles.skipLink} href="#work">Skip to selected work</a>
        <motion.div className={styles.readingProgress} style={{ scaleX: progress }} />
        <ProductionHero />
        <SelectedWork projects={projects} />
        <OriginalLandingStory />
      </div>
    </MotionConfig>
  );
}
