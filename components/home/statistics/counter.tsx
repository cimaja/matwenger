'use client';

import { motion } from 'framer-motion';

interface CounterProps {
  number: string | number;
  text: string;
  delay?: number;
}

export function Counter({ number, text, delay = 0 }: CounterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="text-4xl sm:text-5xl font-bold mb-2 font-serif">
        {number}
      </div>
      <div className="text-muted-foreground whitespace-pre-line text-sm uppercase tracking-wider">
        {text}
      </div>
    </motion.div>
  );
}