'use client';

import { useState } from 'react';
import { Play } from 'lucide-react';
import Image from 'next/image';

interface VideoPlayerProps {
  src: string;
  thumbnail?: string | null;
  className?: string;
}

export function VideoPlayer({ src, thumbnail = null, className = '' }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (!src) return null;

  return (
    <div className="relative group">
      <video
        className={`w-full aspect-video bg-black rounded-lg ${className}`}
        src={src}
        controls={isPlaying}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        poster={thumbnail || undefined}
      >
        Your browser does not support the video tag.
      </video>
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors rounded-lg cursor-pointer"
          onClick={() => {
            const video = document.querySelector(`video[src="${src}"]`) as HTMLVideoElement;
            if (video) {
              video.play();
            }
          }}
        >
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/90 group-hover:bg-white transition-colors">
            <Play className="w-8 h-8 text-black ml-1" />
          </div>
        </div>
      )}
    </div>
  );
}
