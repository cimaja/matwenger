'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { experienceEntries } from '@/lib/data/experience';
import { workflowDescription, workflowSteps } from '@/lib/data/workflow';
import styles from './immersive-landing.module.css';
import { LandingContact, LandingRecommendations } from './landing-story';
import { SiteFooter } from '@/components/design-system/site-footer';
import { ImpactMetrics } from './impact-metrics';

function Approach() {
  return <section className={styles.approach} id="approach">
    <div className={styles.sectionMeta}><span>02 / HOW I WORK</span></div>
    <div className={styles.approachGrid}><div><h2>How<br /><em>I work.</em></h2><p>{workflowDescription}</p><Link href="/lab" className={styles.textLink}>Inside the lab</Link></div>
      <Accordion type="single" collapsible className={styles.methodList}>{workflowSteps.map(s => <AccordionItem value={s.number} key={s.number} className={styles.method}><AccordionTrigger className={styles.methodTrigger}><span>{s.number}</span><strong>{s.title}</strong></AccordionTrigger><AccordionContent className={styles.methodContent}><p>{s.description}.</p><div>{s.tools.slice(0, 3).map(tool => <span key={tool}>{tool}</span>)}</div></AccordionContent></AccordionItem>)}</Accordion>
    </div>
    <ImpactMetrics />
  </section>;
}

function PersonalStory() {
  return <>
    <section className={styles.about} id="about"><div className={styles.sectionMeta}><span>04 / ABOUT ME</span></div><div className={styles.aboutGrid}><div className={styles.portraitWrap}><div className={styles.portraitCrop}><Image src="/images/Applogo/profil.jpeg" alt="Mathias Wendlinger" fill sizes="(max-width: 700px) 88vw, 35vw" className={styles.portrait} /></div><span className={styles.portraitCaption}>Mathias, outside the frame.</span></div><div className={styles.aboutCopy}><span className={styles.aboutEyebrow}>DESIGNER. LEADER. ALWAYS A MAKER.</span><h2>Curious by nature.<br /><em>Human by design.</em></h2><p>Born in the south of France. Raised in Africa and Asia. That mix of places and perspectives still shapes how I build products and bring people together.</p><p>Today, I lead design at Microsoft Power Platform. I care about the details that make technology feel natural — and the teams that make it possible.</p><Link href="/about" className={styles.textLink}>A little more about me</Link></div></div>
      <Accordion type="multiple" className={styles.careerList}>
        {experienceEntries.map(entry => (
          <AccordionItem key={entry.dateRange} value={entry.dateRange} className={styles.careerItem}>
            <AccordionTrigger className={styles.careerTrigger}>
              <span>{entry.dateRange}</span>
              <strong>{entry.role}</strong>
              <span>{entry.company.replace('Microsoft - ', '')}</span>
            </AccordionTrigger>
            <AccordionContent className={styles.careerContent}>
              <ul className={styles.careerResponsibilities}>
                {entry.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}
              </ul>
              {entry.badges.length > 0 && (
                <div>{entry.badges.map(badge => <span key={badge}>{badge}</span>)}</div>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  </>;
}

export function OriginalLandingStory() {
  return <>
    <Approach />
    <LandingRecommendations />
    <PersonalStory />
    <LandingContact />
    <SiteFooter />
  </>;
}
