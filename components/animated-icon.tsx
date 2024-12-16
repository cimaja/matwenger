'use client';

import { useRef } from 'react';
import { useLordicon } from '@/hooks/use-lordicon';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lord-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        src: string;
        trigger?: string;
        colors?: string;
        delay?: number;
      }, HTMLElement>;
    }
  }
}

interface AnimatedIconProps {
  src: string;
  trigger?: 'hover' | 'click' | 'loop' | 'loop-on-hover' | 'morph' | 'boomerang';
  colors?: {
    primary?: string;
    secondary?: string;
  };
  delay?: number;
  size?: number;
}

export function AnimatedIcon({
  src,
  trigger = 'hover',
  colors = {
    primary: 'currentColor',
    secondary: 'currentColor',
  },
  delay = 0,
  size = 24,
}: AnimatedIconProps) {
  const iconRef = useRef<HTMLElement>(null);
  useLordicon(iconRef);

  return (
    <lord-icon
      ref={iconRef}
      src={src}
      trigger={trigger}
      colors={`primary:${colors.primary},secondary:${colors.secondary}`}
      delay={delay}
      style={{
        width: size,
        height: size,
      }}
    />
  );
}