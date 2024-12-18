'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Section } from '@/components/layout/section';
import { SectionHeader } from '@/components/layout/section-header';
import { Button } from '@/components/ui/button';
import { testimonials } from '@/lib/testimonials-data';
import { TestimonialCard } from './testimonial-card';

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + itemsPerPage >= testimonials.length ? 0 : prev + itemsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev - itemsPerPage < 0 ? testimonials.length - itemsPerPage : prev - itemsPerPage
    );
  };

  const currentTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <Section className="py-20 bg-secondary/50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="What People Say"
          description="Testimonials from colleagues and team members I've had the pleasure to work with"
          className="mb-16"
        />

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <AnimatePresence mode="wait">
              {currentTestimonials.map((testimonial, index) => (
                <motion.div
                  key={`${currentIndex}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-full"
                >
                  <TestimonialCard 
                    testimonial={testimonial} 
                    index={currentIndex + index} 
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    Math.floor(currentIndex / itemsPerPage) === i
                      ? 'bg-primary'
                      : 'bg-primary/20'
                  }`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}