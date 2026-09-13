import { personalityTraits } from '@/lib/data/about';
import { TraitScale } from '@/components/design-system/studio';
import styles from '@/components/design-system/studio.module.css';

export function PersonalitySliders() {
  return <section className={styles.aboutBlock} aria-label="Personality"><div className={styles.traits}>{personalityTraits.map((trait, index) => <TraitScale key={trait.left} {...trait} delay={index * 0.09} />)}</div></section>;
}
