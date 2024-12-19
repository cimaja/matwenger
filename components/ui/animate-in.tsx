'use client';

import { useEffect, useRef } from 'react';

interface AnimateInProps {
  children: React.ReactNode;
}

export function AnimateIn({ children }: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.opacity = '1';
      ref.current.style.transform = 'translateY(0)';
    }
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: '0',
        transform: 'translateY(20px)',
        transition: 'all 0.5s ease-out',
      }}
    >
      {children}
    </div>
  );
}
