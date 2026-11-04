'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Code2, RotateCcw } from 'lucide-react';
import { heroData } from '@/lib/data/hero';
import styles from './production-hero.module.css';

function CareerTerminal() {
  const [replay, setReplay] = useState(0);

  return (
    <div className={styles.terminal} role="region" aria-label="Career highlights">
      <div className={styles.terminalBar}>
        <span>mathias / career</span>
        <button
          type="button"
          className={styles.replay}
          onClick={() => setReplay(value => value + 1)}
          aria-label="Replay career animation"
          title="Replay animation"
        >
          <RotateCcw size={15} />
        </button>
      </div>
      <div key={replay} className={styles.terminalBody}>
        {heroData.terminalLines.map((line, index) => (
          <div
              key={index}
              className={`${styles.terminalLine} ${line.type === 'blank' ? styles.blankLine : ''}`}
              style={{ animationDelay: `${0.15 + index * 0.09}s` }}
          >
            {line.type === 'prompt' && (
              <div className={styles.command}><span aria-hidden="true">$</span><span>{line.text}</span></div>
            )}
            {line.type === 'year' && (
              <div className={styles.milestone}><span>{line.year}</span><strong>{line.text}</strong></div>
            )}
            {line.type === 'indent' && <div className={styles.detail}>{line.text}</div>}
            {line.type === 'success' && <div className={`${styles.detail} ${styles.success}`}>{line.text}</div>}
            {line.type === 'final' && <div className={styles.result}>{line.text}<span className={styles.cursor} aria-hidden="true" /></div>}
          </div>
        ))}
      </div>
      <div className={styles.terminalFooter}><Code2 size={15} aria-hidden="true" /><span>Design & engineering</span><span>From idea to impact</span></div>
    </div>
  );
}

export function ProductionHero() {
  const [firstName, lastName] = heroData.name.split('\n');

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.grid}>
        <div className={styles.copy}>
          <h1 id="hero-title" className={styles.name}><span>{firstName}</span><span className={styles.surname}>{lastName}</span></h1>
          <p className={styles.role}>Product builder &amp; design manager</p>
          <p className={styles.intro}>{heroData.subtitle}</p>
          <Link href="#work" className={styles.currentProject}><span>Currently building</span><strong>Tainure</strong><span>Founder &amp; builder</span></Link>
          <div className={styles.actions}>
            <a href="/Mathias-Wendlinger-Resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.resume}>View resume</a>
            <a href="https://www.linkedin.com/in/mathias-wendlinger/" target="_blank" rel="noopener noreferrer" className={styles.linkedin}>Connect on LinkedIn</a>
          </div>
        </div>
        <div className={styles.stage}>
          <CareerTerminal />
        </div>
      </div>
    </section>
  );
}
