'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeader({ title, description, className }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={cn('text-center', className)}
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 font-serif tracking-tight">{title}</h2>
      {description && (
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}