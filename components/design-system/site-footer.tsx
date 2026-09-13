import { TextLink } from './studio';
import styles from './studio.module.css';

export function SiteFooter() {
  return <footer className={styles.footer}>
    <span>© {new Date().getFullYear()} Mathias Wendlinger</span>
    <TextLink href="https://www.linkedin.com/in/mathias-wendlinger/" target="_blank" rel="noopener noreferrer">LinkedIn</TextLink>
    <TextLink href="/Mathias-Wendlinger-Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</TextLink>
    <TextLink href="#">Back to top</TextLink>
  </footer>;
}
