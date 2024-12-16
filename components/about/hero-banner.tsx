'use client';

import { Section } from '@/components/layout/section';
import { ImageContainer } from '@/components/ui/image-container';

export function HeroBanner() {
  return (
    <Section className="h-[60vh] mb-16">
      <ImageContainer
        src="/hero-image.jpg"
        alt="Scenic coastal view"
        priority
        effect="grayscale"
        brightness={90}
      />
    </Section>
  );
}