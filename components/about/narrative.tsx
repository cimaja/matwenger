import { aboutNarrative } from '@/lib/data/about';
import styles from '@/components/design-system/studio.module.css';

export function AboutNarrative() {
  return <div className={`${styles.aboutBlock} ${styles.narrative}`}>{aboutNarrative.map((paragraph, index) => <p key={index}>{paragraph.text}</p>)}</div>;
}
