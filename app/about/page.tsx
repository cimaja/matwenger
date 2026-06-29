import type { Metadata } from 'next';
import Image from 'next/image';
import { AboutNarrative } from '@/components/about/narrative';
import { AboutJourney } from '@/components/about/journey';
import { PersonalitySliders } from '@/components/about/personality';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Mathias Wendlinger, Principal Design Manager at Microsoft Power Platform, leading design across Power Apps, Power Automate, and Power Pages.',
  openGraph: {
    title: 'About Mathias Wendlinger',
    description: 'Principal Design Manager at Microsoft Power Platform, leading design across Power Apps, Power Automate, and Power Pages.',
    url: 'https://matwenger.at/about',
  },
  alternates: {
    canonical: 'https://matwenger.at/about',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header with photo */}
      <div className="max-w-[720px] mx-auto px-6 sm:px-10 mb-12">
        <div className="flex flex-col sm:flex-row items-start gap-8 sm:gap-12">
          <div className="relative w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] rounded-2xl overflow-hidden flex-shrink-0 border border-[rgba(255,255,255,0.06)]">
            <Image
              src="/images/about/profile.jpeg"
              alt="Mathias Wendlinger"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="pt-2">
            <h1 className="text-[44px] text-white mb-3">About</h1>
            <p className="text-[17px] text-[#777] leading-[1.7]">
              Principal Design Manager at Microsoft, leading design across Power Platform for 50 million users
            </p>
          </div>
        </div>
      </div>

      <PersonalitySliders />
      <AboutNarrative />

      <div className="border-t border-[rgba(255,255,255,0.04)]">
        <AboutJourney />
      </div>
    </div>
  );
}
