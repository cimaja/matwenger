import type { Metadata } from 'next';
import { AboutHero } from '@/components/about/hero';
import { AboutContent } from '@/components/about/content';
import { AboutTimeline } from '@/components/about/timeline';
import { AboutSocial } from '@/components/about/social';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Mathias Wendlinger, Principal Design Manager at Microsoft with 18+ years of experience in AI-driven design, enterprise solutions, and product innovation.',
  openGraph: {
    title: 'About Mathias Wendlinger',
    description: 'Principal Design Manager at Microsoft specializing in AI experiences, enterprise solutions, and innovative digital products.',
    url: 'https://matwenger.at/about',
  },
  alternates: {
    canonical: 'https://matwenger.at/about',
  },
};

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