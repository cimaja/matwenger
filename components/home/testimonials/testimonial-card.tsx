'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Testimonial } from '@/types/testimonial';
import { Card, CardContent } from '@/components/ui/card';
import { QuoteIcon } from './quote-icon';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="flex flex-col h-full">
          <QuoteIcon className="w-8 h-8 text-primary/20 mb-4" />
          <p className="text-lg mb-6 flex-grow">{testimonial.text}</p>
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <Image
                src={testimonial.image}
                alt={testimonial.author}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="font-semibold">{testimonial.author}</div>
              <div className="text-sm text-muted-foreground">
                {testimonial.role}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}