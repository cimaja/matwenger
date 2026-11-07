'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BrandMark } from './brand-mark';
import styles from './studio.module.css';

export function SiteHeader() {
  const pathname = usePathname();
  return <header className={styles.header}>
    <Link href="/" className={styles.brand} aria-label="Mathias Wendlinger home"><BrandMark className={styles.brandMark} /></Link>
    <nav className={styles.nav} aria-label="Main navigation">
      <Link href="/projects" aria-current={pathname.startsWith('/projects') ? 'page' : undefined}>Projects</Link>
      <Link href="/about" aria-current={pathname === '/about' ? 'page' : undefined}>About</Link>
      <Link href="/lab" aria-current={pathname === '/lab' ? 'page' : undefined}>Lab</Link>
    </nav>
    <Link href="/#contact" className={`${styles.textLink} ${styles.headerContact}`}>Let’s talk</Link>
  </header>;
}
