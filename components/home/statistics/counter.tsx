'use client';

import { useEffect, useState } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface CounterProps {
  number: string | number;
  text: string;
  delay?: number;
}

export function Counter({ number, text, delay = 0 }: CounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [hasPlus, setHasPlus] = useState(false);
  const [targetNumber, setTargetNumber] = useState(0);
  
  useEffect(() => {
    // Parse the number, handling strings with '+'
    const numStr = number.toString();
    setHasPlus(numStr.includes('+'));
    setTargetNumber(parseInt(numStr.replace('+', '')));
  }, [number]);

  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 20,
    duration: 2
  });

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        springValue.set(targetNumber);
      }, delay * 1000);
    }
  }, [isInView, targetNumber, delay, springValue]);

  const displayNumber = useTransform(springValue, (latest) => 
    Math.floor(latest) + (hasPlus ? '+' : '')
  );

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="text-center"
    >
      <motion.div className="text-4xl sm:text-5xl font-bold mb-2 font-serif">
        {displayNumber}
      </motion.div>
      <div className="text-muted-foreground whitespace-pre-line text-sm uppercase tracking-wider">
        {text}
      </div>
    </motion.div>
  );
}