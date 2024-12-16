'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ImageContainerProps {
  src: string;
  alt: string;
  priority?: boolean;
  effect?: 'grayscale' | 'blur' | 'none';
  brightness?: number;
  className?: string;
}

export function ImageContainer({
  src,
  alt,
  priority,
  effect = 'none',
  brightness = 100,
  className,
}: ImageContainerProps) {
  const imageClasses = cn(
    'object-cover object-center',
    effect === 'grayscale' && 'grayscale',
    effect === 'blur' && 'blur-sm',
    className
  );

  const containerStyle = {
    filter: `brightness(${brightness}%)`,
  };

  return (
    <div className="absolute inset-0" style={containerStyle}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className={imageClasses}
        sizes="100vw"
      />
    </div>
  );
}