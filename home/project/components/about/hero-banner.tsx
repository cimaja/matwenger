'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function HeroBanner() {
  return (
    <div className="relative w-full h-[60vh] mb-16 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/hero-image.jpg"
          alt="Scenic coastal view"
          fill
          priority
          className="object-cover object-center brightness-90 grayscale"
          sizes="100vw"
        />
      </div>
    </div>
  );
}