'use client';

import { AboutHero } from '@/components/about/hero';
import { AboutContent } from '@/components/about/content';
import { AboutTimeline } from '@/components/about/timeline';
import { AboutSocial } from '@/components/about/social';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <AboutContent />
      <AboutTimeline />
      <AboutSocial />
    </div>
  );
}