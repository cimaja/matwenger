'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ShaderAnimation } from '@/components/ui/shader-animation';
import { useTheme } from 'next-themes';

export function HeroSection() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = theme === 'dark';

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-screen" style={{ background: "#000", overflow: "hidden" }} />
        </div>
        <div className="text-center max-w-3xl mx-auto space-y-6 z-10 relative opacity-0" />
      </section>
    );
  }

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ShaderAnimation theme={theme} />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto space-y-6 z-10 relative"
      >
        <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          Where Design Meets Intelligence
        </h1>
        <p className={`text-lg sm:text-xl ${
          isDark ? 'text-white/80' : 'text-gray-700'
        }`}>
          I lead design teams building AI-powered, enterprise-grade experiences for millions of makers on Microsoft Power Platform.
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