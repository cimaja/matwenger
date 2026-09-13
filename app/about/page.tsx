import type { Metadata } from 'next';
import { PageIntro, PageShell } from '@/components/design-system/studio';
import { MediaFrame } from '@/components/design-system/media-frame';
import styles from '@/components/design-system/studio.module.css';
import { AboutNarrative } from '@/components/about/narrative';
import { AboutJourney } from '@/components/about/journey';
import { PersonalitySliders } from '@/components/about/personality';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Mathias Wendlinger, Principal Design Manager at Microsoft Power Platform, leading design across Power Apps, Power Automate, and Power Pages.',
  openGraph: {
    title: 'About Mathias Wendlinger',
    description: 'Principal Design Manager at Microsoft Power Platform, leading design across Power Apps, Power Automate, and Power Pages.',
    url: 'https://matwenger.design/about',
  },
  alternates: {
    canonical: 'https://matwenger.design/about',
  },
};

export default function AboutPage() {
  return <PageShell reading>
    <div className={styles.aboutHero}>
      <MediaFrame src="/images/about/profile.jpeg" alt="Mathias Wendlinger" ratio="square" tone="portrait" priority sizes="180px" />
      <PageIntro title={<>About <em>me.</em></>} description="Principal Design Manager at Microsoft, leading design across Power Platform for 50 million users" />
    </div>
    <PersonalitySliders />
    <AboutNarrative />
    <AboutJourney />
  </PageShell>;
}
