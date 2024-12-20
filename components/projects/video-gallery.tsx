'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Video } from '@/lib/get-project-content';
import { YouTube } from '@/components/ui/youtube';
import { VideoPlayer } from '@/components/ui/video-player';
import { Button } from '@/components/ui/button';

interface VideoGalleryProps {
  videos: Video[];
  className?: string;
}

export function VideoGallery({ videos, className = '' }: VideoGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!videos || videos.length === 0) return null;

  // Filter out invalid videos
  const validVideos = videos.filter(video => 
    (video.type === 'local' && video.src) || 
    (video.type === 'youtube' && video.id)
  );

  if (validVideos.length === 0) return null;

  const currentVideo = validVideos[currentIndex];
  const hasMultipleVideos = validVideos.length > 1;

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % validVideos.length);
  };

  const previous = () => {
    setCurrentIndex((prev) => (prev - 1 + validVideos.length) % validVideos.length);
  };

  const renderVideo = (video: Video) => {
    if (video.type === 'local' && video.src) {
      return <VideoPlayer src={video.src} thumbnail={video.thumbnail || null} />;
    }
    if (video.type === 'youtube' && video.id) {
      return <YouTube videoId={video.id} />;
    }
    return null;
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentVideo.id || currentVideo.src}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {renderVideo(currentVideo)}
            {(currentVideo.title || currentVideo.description) && (
              <div className="mt-4">
                {currentVideo.title && (
                  <h3 className="text-lg font-semibold">{currentVideo.title}</h3>
                )}
                {currentVideo.description && (
                  <p className="mt-1 text-muted-foreground">{currentVideo.description}</p>
                )}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {hasMultipleVideos && (
          <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-4">
            <Button
              variant="outline"
              size="icon"
              className="bg-background/80 backdrop-blur-sm hover:bg-background/90 -translate-x-1/2"
              onClick={previous}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="bg-background/80 backdrop-blur-sm hover:bg-background/90 translate-x-1/2"
              onClick={next}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>

      {hasMultipleVideos && (
        <div className="flex justify-center gap-2">
          {validVideos.map((_, index) => (
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
