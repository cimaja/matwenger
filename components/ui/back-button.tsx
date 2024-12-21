'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from './button';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import React from 'react';

interface BackButtonProps {
  href: string;
  label?: string;
}

export function BackButton({ href, label = 'Back' }: BackButtonProps) {
  const { scrollY } = useScroll();
  const [isHovered, setIsHovered] = React.useState(false);
  
  // Start animations after scrolling 200px
  const scrollProgress = useTransform(scrollY, [200, 300], [0, 1]);
  const width = useTransform(
    scrollProgress, 
    [0, 1], 
    ['140px', isHovered ? '140px' : '32px']
  );
  const textOpacity = useTransform(
    scrollProgress,
    [0, 1],
    [1, isHovered ? 1 : 0]
  );
  const scale = useTransform(
    scrollProgress,
    [0, 1],
    [1, isHovered ? 1 : 0.9]
  );
  const shadow = useTransform(
    scrollY,
    [200, 300],
    ['0 2px 4px rgba(0,0,0,0.1)', '0 4px 8px rgba(0,0,0,0.2)']
  );
  const arrowLeft = useTransform(
    scrollProgress,
    [0, 1],
    ['16px', isHovered ? '16px' : '8px']
  );

  // Spring animations for smooth transitions
  const springWidth = useSpring(width, { stiffness: 500, damping: 30 });
  const springTextOpacity = useSpring(textOpacity, { stiffness: 500, damping: 30 });
  const springArrowLeft = useSpring(arrowLeft, { stiffness: 500, damping: 30 });

  return (
    <motion.div
      style={{
        width: springWidth,
        boxShadow: shadow,
      }}
      initial={{ width: '140px' }}
      className="fixed top-24 left-4 z-50 overflow-hidden rounded-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Button
        variant="outline"
        size="icon"
        className="w-full h-8 bg-background/80 backdrop-blur-sm hover:bg-background/90 transition-colors rounded-full border-muted-foreground/20 dark:border-white/20 hover:border-muted-foreground/30 dark:hover:border-white/30"
        asChild
      >
        <Link href={href} className="grid grid-cols-[1fr] items-center relative">
          <motion.div 
            className="absolute flex items-center"
            style={{
              left: springArrowLeft
            }}
          >
            <ArrowLeft className="h-4 w-4" />
          </motion.div>
          <motion.span
            style={{ 
              opacity: springTextOpacity,
              scale
            }}
            className="pl-10"
          >
            {label}
          </motion.span>
        </Link>
      </Button>
    </motion.div>
  );
}
