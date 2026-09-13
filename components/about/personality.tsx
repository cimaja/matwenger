import { personalityTraits } from '@/lib/data/about';
import { TraitScale } from '@/components/design-system/studio';
import styles from '@/components/design-system/studio.module.css';

export function PersonalitySliders() {
  return <section className={styles.aboutBlock} aria-label="Personality"><div className={styles.traits}>{personalityTraits.map(trait => <TraitScale key={trait.left} {...trait} />)}</div></section>;
}
