'use client';

import { useRef, useEffect, useState } from 'react';
import { ImageContainer } from '@/components/ui/image-container';
import { cn } from '@/lib/utils';
import { Pause, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface VideoContainerProps {
  src: string;
  mobileSrc?: string;
  fallbackImage?: string;
  mobileFallbackImage?: string;
  useVideoFallback?: boolean;
  alt?: string;
  className?: string;
  brightness?: number;
  effect?: 'grayscale' | 'none';
  priority?: boolean;
}

export function VideoContainer({
  src,
  mobileSrc,
  fallbackImage,
  mobileFallbackImage,
  useVideoFallback = true,
  alt = "Background",
  className,
  brightness = 100,
  effect = 'none',
  priority = false,
}: VideoContainerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const desktopVideoRef = useRef<HTMLVideoElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
    if (desktopVideoRef.current) {
      desktopVideoRef.current.playbackRate = 0.75;
    }
  }, []);

  const togglePlayPause = () => {
    if (!videoRef.current || (mobileSrc && !desktopVideoRef.current)) return;

    setIsPaused(!isPaused);
    if (isPaused) {
      videoRef.current.play();
      if (desktopVideoRef.current) desktopVideoRef.current.play();
    } else {
      videoRef.current.pause();
      if (desktopVideoRef.current) desktopVideoRef.current.pause();
    }
  };

  if (!useVideoFallback) {
    return (
      <div className={cn('relative w-full h-full overflow-hidden', className)}>
        <div className={cn(
          'relative w-full h-full',
          mobileFallbackImage ? 'sm:hidden' : ''
        )}>
          <ImageContainer
            src={mobileFallbackImage || fallbackImage || src}
            alt={alt}
            priority={priority}
            effect={effect}
            brightness={brightness}
          />
        </div>

        {mobileFallbackImage && (
          <div className="relative w-full h-full hidden sm:block">
            <ImageContainer
              src={fallbackImage || src}
              alt={alt}
              priority={priority}
              effect={effect}
              brightness={brightness}
            />
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={cn('relative w-full h-full overflow-hidden', className)}>
      <video
        ref={videoRef}
        autoPlay={!isPaused}
        loop
        muted
        playsInline
        className={cn(
          'absolute inset-0 w-full h-full object-cover',
          effect === 'grayscale' && 'grayscale',
          brightness !== 100 && `brightness-${brightness}`,
          mobileSrc ? 'sm:hidden' : ''
        )}
      >
        <source src={mobileSrc || src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {mobileSrc && (
        <video
          ref={desktopVideoRef}
          autoPlay={!isPaused}
          loop
          muted
          playsInline
          className={cn(
            'absolute inset-0 w-full h-full object-cover hidden sm:block',
            effect === 'grayscale' && 'grayscale',
            brightness !== 100 && `brightness-${brightness}`
          )}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      <Button
        variant="secondary"
        size="icon"
        className="absolute bottom-4 right-4 z-20 bg-background/80 backdrop-blur-sm hover:bg-background/90"
        onClick={togglePlayPause}
        aria-label={isPaused ? "Play background video" : "Pause background video"}
        title={isPaused ? "Play background video" : "Pause background video"}
      >
        {isPaused ? (
          <Play className="h-4 w-4" />
        ) : (
          <Pause className="h-4 w-4" />
        )}
      </Button>
    </div>
  );
}
