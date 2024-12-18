'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Testimonial } from '@/types/testimonial';
import { Card, CardContent } from '@/components/ui/card';
import { QuoteIcon } from './quote-icon';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const CardWrapper = testimonial.linkedIn ? Link : 'div';
  const wrapperProps = testimonial.linkedIn
    ? {
        href: testimonial.linkedIn,
        target: '_blank',
        rel: 'noopener noreferrer',
        className: 'block transition-transform hover:-translate-y-1',
      }
    : {};

  return (
    <CardWrapper {...wrapperProps}>
      <Card className="h-full transition-all duration-300 hover:border-pink-500/50 hover:shadow-lg hover:shadow-pink-500/10">
        <CardContent className="pt-6">
          <div className="flex flex-col h-full">
            <QuoteIcon className="w-8 h-8 text-primary/20 mb-4" />
            <div className="flex items-center gap-4 mb-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={testimonial.image}
                  alt={testimonial.author}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-medium">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role}
                </div>
              </div>
            </div>
            <p className="text-lg flex-grow text-muted-foreground">{testimonial.text}</p>
          </div>
        </CardContent>
      </Card>
    </CardWrapper>
  );
}