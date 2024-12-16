'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Video } from '@/lib/get-project-content';
import { YouTube } from '@/components/ui/youtube';
import { Button } from '@/components/ui/button';

interface VideoGalleryProps {
  videos: Video[];
  className?: string;
}

export function VideoGallery({ videos, className }: VideoGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!videos || videos.length === 0) return null;

  const currentVideo = videos[currentIndex];
  const hasMultipleVideos = videos.length > 1;

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const previous = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentVideo.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <YouTube videoId={currentVideo.id} />
            {(currentVideo.title || currentVideo.description) && (
              <div className="mt-4 space-y-1">
                {currentVideo.title && (
                  <h3 className="text-lg font-semibold">{currentVideo.title}</h3>
                )}
                {currentVideo.description && (
                  <p className="text-muted-foreground">{currentVideo.description}</p>
                )}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {hasMultipleVideos && (
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4 pointer-events-none">
            <Button
              variant="ghost"
              size="icon"
              className="pointer-events-auto bg-background/80 hover:bg-background/90 backdrop-blur-sm"
              onClick={previous}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="pointer-events-auto bg-background/80 hover:bg-background/90 backdrop-blur-sm"
              onClick={next}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>

      {hasMultipleVideos && (
        <div className="flex justify-center gap-2">
          {videos.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex
                  ? 'bg-primary'
                  : 'bg-muted hover:bg-muted-foreground/50'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
