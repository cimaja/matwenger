'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/layout/section';
import { ImageContainer } from '@/components/ui/image-container';
import { HaloGradient } from '@/components/ui/halo-gradient';

export function AboutHero() {
  return (
    <Section className="relative h-[60vh] mb-16">
      <HaloGradient />
      <ImageContainer
        src="/hero-image.jpg"
        alt="Scenic coastal view"
        priority
        effect="grayscale"
        brightness={90}
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
            Senior Design Manager at Microsoft, focused on creating impactful user experiences
          </p>
        </div>
      </motion.div>
    </Section>
  );
}