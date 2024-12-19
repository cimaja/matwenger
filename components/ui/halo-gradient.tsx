'use client';

import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface HaloGradientProps {
  opacity?: number;
}

export function HaloGradient({ opacity = 1 }: HaloGradientProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Render a placeholder gradient during SSR and hydration
  if (!mounted) {
    return (
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80" 
          style={{ opacity }} />
      </div>
    );
  }

  const isDark = theme === 'dark';

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 bg-[length:150px_150px] mix-blend-soft-light"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          opacity: opacity * 0.25
        }}
      />

      {/* Primary gradient blob */}
      <div 
        className="absolute inset-0"
        style={{ opacity }}
      >
        <motion.div
          className="absolute inset-0"
          animate={{
            background: isDark
              ? [
                  'radial-gradient(circle at 0% 0%, rgba(236, 72, 153, 0.15) 0%, rgba(67, 56, 202, 0.15) 50%, transparent 70%)',
                  'radial-gradient(circle at 100% 100%, rgba(236, 72, 153, 0.15) 0%, rgba(67, 56, 202, 0.15) 50%, transparent 70%)',
                  'radial-gradient(circle at 0% 100%, rgba(236, 72, 153, 0.15) 0%, rgba(67, 56, 202, 0.15) 50%, transparent 70%)',
                  'radial-gradient(circle at 100% 0%, rgba(236, 72, 153, 0.15) 0%, rgba(67, 56, 202, 0.15) 50%, transparent 70%)',
                  'radial-gradient(circle at 0% 0%, rgba(236, 72, 153, 0.15) 0%, rgba(67, 56, 202, 0.15) 50%, transparent 70%)',
                ]
              : [
                  'radial-gradient(circle at 0% 0%, rgba(236, 72, 153, 0.1) 0%, rgba(67, 56, 202, 0.1) 50%, transparent 70%)',
                  'radial-gradient(circle at 100% 100%, rgba(236, 72, 153, 0.1) 0%, rgba(67, 56, 202, 0.1) 50%, transparent 70%)',
                  'radial-gradient(circle at 0% 100%, rgba(236, 72, 153, 0.1) 0%, rgba(67, 56, 202, 0.1) 50%, transparent 70%)',
                  'radial-gradient(circle at 100% 0%, rgba(236, 72, 153, 0.1) 0%, rgba(67, 56, 202, 0.1) 50%, transparent 70%)',
                  'radial-gradient(circle at 0% 0%, rgba(236, 72, 153, 0.1) 0%, rgba(67, 56, 202, 0.1) 50%, transparent 70%)',
                ],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Secondary gradient blob */}
      <div 
        className="absolute inset-0"
        style={{ opacity }}
      >
        <motion.div
          className="absolute inset-0"
          animate={{
            background: isDark
              ? [
                  'radial-gradient(circle at 100% 100%, rgba(67, 56, 202, 0.15) 0%, rgba(236, 72, 153, 0.15) 50%, transparent 70%)',
                  'radial-gradient(circle at 0% 0%, rgba(67, 56, 202, 0.15) 0%, rgba(236, 72, 153, 0.15) 50%, transparent 70%)',
                  'radial-gradient(circle at 100% 0%, rgba(67, 56, 202, 0.15) 0%, rgba(236, 72, 153, 0.15) 50%, transparent 70%)',
                  'radial-gradient(circle at 0% 100%, rgba(67, 56, 202, 0.15) 0%, rgba(236, 72, 153, 0.15) 50%, transparent 70%)',
                  'radial-gradient(circle at 100% 100%, rgba(67, 56, 202, 0.15) 0%, rgba(236, 72, 153, 0.15) 50%, transparent 70%)',
                ]
              : [
                  'radial-gradient(circle at 100% 100%, rgba(67, 56, 202, 0.1) 0%, rgba(236, 72, 153, 0.1) 50%, transparent 70%)',
                  'radial-gradient(circle at 0% 0%, rgba(67, 56, 202, 0.1) 0%, rgba(236, 72, 153, 0.1) 50%, transparent 70%)',
                  'radial-gradient(circle at 100% 0%, rgba(67, 56, 202, 0.1) 0%, rgba(236, 72, 153, 0.1) 50%, transparent 70%)',
                  'radial-gradient(circle at 0% 100%, rgba(67, 56, 202, 0.1) 0%, rgba(236, 72, 153, 0.1) 50%, transparent 70%)',
                  'radial-gradient(circle at 100% 100%, rgba(67, 56, 202, 0.1) 0%, rgba(236, 72, 153, 0.1) 50%, transparent 70%)',
                ],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            delay: 10
          }}
        />
      </div>

      {/* Vignette effect */}
      <div 
        className="absolute inset-0 backdrop-blur-[100px]"
        style={{
          background: isDark
            ? 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(0, 0, 0, 0.3) 100%)'
            : 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(255, 255, 255, 0.3) 100%)',
          opacity
        }}
      />

      {/* Sparkles */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.5, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
        style={{
          backgroundImage: `radial-gradient(circle at ${Math.random() * 100}% ${Math.random() * 100}%, ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'} 0%, transparent 10%)`,
          opacity: opacity * 0.5
        }}
      />
    </div>
  );
}