'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export function ParallaxImage({ src, alt, className = '', priority = false }: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    if (!container || !image) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const scrollPercent = rect.top / window.innerHeight;
      const translateY = scrollPercent * 100;
      
      // Only apply parallax when the container is in view
      if (rect.bottom > 0 && rect.top < window.innerHeight) {
        image.style.transform = `translateY(${translateY}px) scale(1.1)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <div
        ref={imageRef}
        className="absolute inset-0 transition-transform duration-100 ease-out will-change-transform"
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          priority={priority}
        />
      </div>
    </div>
  );
}
