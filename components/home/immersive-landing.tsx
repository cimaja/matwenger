'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MotionConfig, motion, useScroll, useSpring } from 'framer-motion';
import { OriginalLandingStory } from './original-landing-story';
import { ProductionHero } from './production-hero';
import styles from './immersive-landing.module.css';

type LandingProject = { id: string; title: string; cover: string; year: string; description: string; role: string };

const selectedProjects = [
  { id: 'tainure', category: 'A second brain for better working relationships', description: 'A second brain that turns everyday notes into context, preparation and coaching for better working relationships.' },
  { id: 'power-apps-copilot', category: 'AI IN THE FLOW OF WORK', description: 'Your business apps. A conversation away.' },
  { id: 'rpa-ai-recorder', category: 'SHOW. TELL. AUTOMATE.', description: 'From everyday actions to intelligent workflows.' },
  { id: 'rpa-self-healing', category: 'AUTOMATION THAT ADAPTS', description: 'When interfaces change, your work keeps moving.' },
];

function SelectedWork({ projects }: { projects: LandingProject[] }) {
  const selection = selectedProjects.flatMap(feature => {
    const project = projects.find(project => project.id === feature.id);
    return project ? [{ project, feature }] : [];
  });

  return (
    <section id="work" className={styles.work}>
      <div className={styles.sectionMeta}><span>01 / SELECTED WORK</span></div>
      <div className={styles.sectionTitle}><h2>Less friction<br /><em>More possibility</em></h2></div>
      <div className={styles.projectGrid}>
        {selection.map(({ project, feature }, index) => (
          <Link href={`/projects/${project.id}`} key={project.id} className={styles.projectCard}>
            <div className={styles.projectImage}>
              <Image src={project.cover} alt={project.title} fill sizes="(max-width: 760px) 100vw, 45vw" className={styles.coverImage} />
              <span className={styles.projectNumber}>0{index + 1}</span>
              <span className={styles.projectCategory}>
                <span className={styles.projectValue}>{feature.category}</span>
              </span>
            </div>
            <div className={styles.projectCaption}>
              <div>
                <div className={styles.projectTitleRow}>
                  <h3>{project.title}</h3>
                  {project.id === 'tainure' && <span className={styles.projectRole}><span aria-hidden="true">·</span><span>In progress · {project.role}</span></span>}
                </div>
                <p>{feature.description}</p>
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
