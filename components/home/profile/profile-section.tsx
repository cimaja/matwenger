'use client';

import { Section } from '@/components/layout/section';
import { Story } from './story';
import { Skills } from './skills';

export function ProfileSection() {
  return (
    <Section className="py-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <Story />
          <Skills />
        </div>
      </div>
    </Section>
  );
}