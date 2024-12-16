'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useCallback } from 'react';
import { cn } from '@/lib/utils';

interface RippleProps {
  color?: string;
  duration?: number;
  className?: string;
}

interface Ripple {
  x: number;
  y: number;
  size: number;
  id: number;
}

export function Ripple({ 
  color = 'rgba(255, 255, 255, 0.1)',
  duration = 0.7,
  className 
}: RippleProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const createRipple = useCallback((e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate the required size to reach the farthest corner
    const size = Math.max(
      Math.max(
        Math.abs(y),
        Math.abs(rect.height - y)
      ),
      Math.max(
        Math.abs(x),
        Math.abs(rect.width - x)
      )
    ) * 2.5;

    const newRipple = {
      x,
      y,
      size,
      id: Date.now()
    };

    setRipples(prev => [...prev, newRipple]);

    // Clean up ripple after animation
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, duration * 1000);
  }, [duration]);

  return (
    <div 
      onClick={createRipple}
      className={cn(
        "absolute inset-0 overflow-hidden cursor-pointer",
        className
      )}
    >
      <AnimatePresence>
        {ripples.map(ripple => (
          <motion.div
            key={ripple.id}
            initial={{
              width: 0,
              height: 0,
              x: ripple.x,
              y: ripple.y,
              opacity: 0.5,
            }}
            animate={{
              width: ripple.size,
              height: ripple.size,
              x: ripple.x - ripple.size / 2,
              y: ripple.y - ripple.size / 2,
              opacity: 0,
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration,
              ease: 'easeOut',
            }}
            style={{
              position: 'absolute',
              backgroundColor: color,
              borderRadius: '50%',
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}