'use client';

import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export function Section({ children, className }: SectionProps) {
  return (
    <section className={cn('relative w-full overflow-hidden', className)}>
      {children}
    </section>
  );
}