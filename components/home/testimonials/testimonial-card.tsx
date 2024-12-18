'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Testimonial } from '@/types/testimonial';
import { Card, CardContent } from '@/components/ui/card';
import { QuoteIcon } from './quote-icon';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index?: number;
}

const colors = [
  'rgba(255, 20, 147, 0.8)', // Pink
  'rgba(147, 51, 234, 0.8)', // Purple
  'rgba(34, 211, 238, 0.8)', // Cyan
  'rgba(249, 115, 22, 0.8)', // Orange
  'rgba(16, 185, 129, 0.8)', // Emerald
  'rgba(99, 102, 241, 0.8)', // Indigo
];

export function TestimonialCard({ testimonial, index = 0 }: TestimonialCardProps) {
  const cardContent = (
    <Card className="h-full min-h-[360px] transition-all duration-300 hover:border-pink-500/50 hover:shadow-lg hover:shadow-pink-500/10">
      <CardContent className="flex flex-col h-full pt-6 pb-8">
        <QuoteIcon
          className="w-6 h-6 mb-6 flex-shrink-0"
          color={colors[index % colors.length]}
        />
        <svg width="0" height="0">
          <linearGradient id="quote-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255, 20, 147, 0.6)" />
            <stop offset="100%" stopColor="rgba(75, 0, 130, 0.6)" />
          </linearGradient>
        </svg>
        <div className="flex items-start gap-4 mb-6 flex-shrink-0">
          <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src={testimonial.image}
              alt={testimonial.author}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="font-semibold">{testimonial.author}</div>
            <div className="text-sm text-muted-foreground">{testimonial.role}</div>
          </div>
        </div>
        <p className="text-muted-foreground flex-1">{testimonial.text}</p>
      </CardContent>
    </Card>
  );

  if (testimonial.linkedIn) {
    return (
      <Link
        href={testimonial.linkedIn}
        target="_blank"
        rel="noopener noreferrer"
        className="block transition-transform hover:scale-105"
      >
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}