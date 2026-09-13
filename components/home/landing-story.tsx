'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { testimonials } from '@/lib/testimonials-data';
import styles from './landing-story.module.css';

const linkedIn = 'https://www.linkedin.com/in/mathias-wendlinger/';
const resume = '/Mathias-Wendlinger-Resume.pdf';
const twoDigits = (value: number) => String(value).padStart(2, '0');

const testimonialHighlights: Record<string, string> = {
  'Samantha Neufeld': 'Mathias brings a rare level of patience, clarity, and steadiness to what is likely the most challenging design leadership role on the team.',
  'Shivani Chander': "What stands out about Mathias is how hands-on he is with the product — he doesn't hesitate to roll up his sleeves and check in code himself.",
  'Joe Fernandez': "Mathias has a strong design and product sense, caring deeply about our customers' success and pushing the product team towards redefining RPA in the Age of AI.",
  'Jennifer Bost': 'He creates psychological safety for designers to experiment and push beyond incremental improvements.',
  'John Anastasopoulos': 'His creative ideas and hard work, especially on the AI Copilot features, have significantly shaped the product.',
  'Matt Shelton': 'He has a unique ability to hold people accountable without damaging their self-confidence or desire to improve.',
  'Apostolis Papaioannou': 'Mathias consistently delivers impressive outcomes, even under pressure, and his ability to ask the right questions enhances our product development.',
  'Deb Dulin': 'He proactively positioned the team for AI upskilling, organizing learning sessions so 100% of his direct reports were actively using AI coding tools by mid-February.',
  'Costas Chamosfakides': 'He excels in taking ownership of features, delivering quality work and exceptional UI/UX experiences.',
  'Matthew LeHew': "His design leadership in the features we've developed together has led to tremendous impact and the successful shipping of great products.",
  'Mohit Nair': 'I admire the way he leads the design team and leverages research early in design planning.',
  'Audrey Coudrin': "He is the manager I've been waiting for ages, the perfect combination between talented, fair and supportive.",
  'Melissa Lim': "He listens to everyone's opinions and makes people feel valued for their contributions.",
  'Josh Rennert': "I'm very impressed by how Mathias has managed to build out a very successful, talented, and capable design team in Paris.",
};

export function LandingRecommendations() {
  const [selected, setSelected] = useState(0);
  const reduce = useReducedMotion();
  const person = testimonials[selected];
  const excerpt = testimonialHighlights[person.author] || person.text.split(/(?<=[.!?])\s+/).slice(0, 2).join(' ');

  function selectPerson(index: number) {
    setSelected((index + testimonials.length) % testimonials.length);
  }

  return (
    <div className={styles.story}>
      <section id="testimonials" className={`${styles.recommendations} ${styles.centeredRecommendations}`} aria-labelledby="recommendations-title">
        <div className={styles.sectionMeta}><span>03 / WHAT PEOPLE SAY</span></div>
        <div className={styles.recommendationLayout}>
          <div className={styles.recommendationIntro}>
            <h2 id="recommendations-title">What<br /><em>people say</em></h2>
            <span className={styles.recommendationCount}>{testimonials.length} perspectives.<br />Design, research, and product.</span>
            <div className={styles.quoteNavigation}>
              <button type="button" aria-label="Previous testimonial" onClick={() => selectPerson(selected - 1)}><ArrowLeft size={20} /></button>
              <button type="button" aria-label="Next testimonial" onClick={() => selectPerson(selected + 1)}><ArrowRight size={20} /></button>
              <span>{twoDigits(selected + 1)} <span>/ {twoDigits(testimonials.length)}</span></span>
            </div>
          </div>
          <div className={styles.quotePanel} aria-live="polite" aria-atomic="true">
            <motion.div key={person.author} initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.25 }}>
              <blockquote id="selected-recommendation" className={styles.quote}><p>{excerpt}</p></blockquote>
              <div className={styles.quoteAuthor}>
                {person.image && <Image src={person.image} alt="" width={48} height={48} />}
                <div><strong>{person.author}</strong><span>{person.role}</span></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function LandingContact() {
  return (
    <div className={styles.story}>
      <section id="contact" className={styles.contact} aria-labelledby="contact-title">
        <div className={styles.sectionMeta}><span>05 / LET’S CONNECT</span></div>
        <div className={styles.contactLayout}><h2 id="contact-title">Let’s make<br /><em>what’s next.</em></h2></div>
        <div className={`${styles.contactActions} ${styles.underlinedActions}`}>
          <a href={linkedIn} target="_blank" rel="noopener noreferrer">Connect on LinkedIn</a>
          <a href={resume} target="_blank" rel="noopener noreferrer">View resume</a>
        </div>
      </section>
    </div>
  );
}
