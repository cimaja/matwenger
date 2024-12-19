'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/layout/section';
import { VideoContainer } from '@/components/ui/video-container';
import { HaloGradient } from '@/components/ui/halo-gradient';

export function AboutHero() {
  const useVideo = true; // Toggle this to switch between video and image

  return (
    <Section className="relative h-[60vh] mb-16">
      <HaloGradient opacity={0.3} />
      <VideoContainer
        src="/images/about/about-video-cover-large.mp4"
        mobileSrc="/images/about/about-video-cover-small.mp4"
        fallbackImage="/images/about/about-cover.jpg"
        alt="Scenic coastal view"
        priority
        useVideoFallback={useVideo}
        effect={!useVideo ? "grayscale" : "none"}
        brightness={!useVideo ? 90 : 100}
      />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute inset-0 flex items-end justify-start p-8 sm:p-16 z-10"
      >
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Crafting Digital Experiences
          </h1>
          <p className="text-lg md:text-xl text-slate-200">
            Principal Design Manager at Microsoft, focused on creating impactful user experiences
          </p>
        </div>
      </motion.div>
    </Section>
  );
}