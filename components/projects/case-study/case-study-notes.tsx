'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import styles from './case-study.module.css';

export function CaseStudyNotes({ html }: { html: string }) {
  return <Accordion type="single" collapsible className={styles.notes}>
    <AccordionItem value="notes">
      <AccordionTrigger className={styles.notesTrigger}>Full project notes & responsibilities</AccordionTrigger>
      <AccordionContent><div className={styles.prose} dangerouslySetInnerHTML={{ __html: html }} /></AccordionContent>
    </AccordionItem>
  </Accordion>;
}
