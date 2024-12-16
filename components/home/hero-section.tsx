'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HaloGradient } from '@/components/ui/halo-gradient';
import { Ripple } from '@/components/ui/ripple';
import { useTheme } from 'next-themes';

export function HeroSection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <HaloGradient />
      <Ripple 
        color={isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'} 
        className="z-0"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto space-y-6 z-10"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
          Crafting Digital Experiences with Purpose
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground">
          Creative developer focused on building beautiful, performant, and
          accessible web applications
        </p>
        <div className="flex items-center justify-center gap-4">
          <Button
            asChild
            className="group relative overflow-hidden bg-primary hover:bg-primary/90 transition-colors"
          >
            <Link href="/projects" className="flex items-center gap-2">
              <span>View Projects</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              <motion.div
                className="absolute inset-0 bg-primary/10"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </Button>
          <Button
            variant="outline"
            asChild
            className="group relative overflow-hidden border-primary/20 hover:border-primary/30 transition-colors"
          >
            <Link href="/about">
              <span>About Me</span>
              <motion.div
                className="absolute inset-0 bg-primary/5"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}