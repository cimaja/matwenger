import { journeyMilestones } from '@/lib/data/about';
import { JourneyTimeline } from '@/components/design-system/studio';
import styles from '@/components/design-system/studio.module.css';

export function AboutJourney() {
  return <section className={styles.aboutBlock} aria-labelledby="journey-title"><h2 id="journey-title" className={styles.sectionHeading}>The journey</h2><JourneyTimeline items={journeyMilestones} /></section>;
}
