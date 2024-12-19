'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring, useAnimationFrame } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { GalleryImage } from '@/lib/get-project-content';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ImageGalleryProps {
  images: GalleryImage[];
  className?: string;
}

export function ImageGallery({ images, className }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const baseVelocity = -0.02;

  useAnimationFrame((t, delta) => {
    if (!isPaused && carouselRef.current) {
      const xPos = x.get();
      let newX = xPos + baseVelocity * delta;

      // Reset position when we've scrolled the width of the carousel
      const carouselWidth = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
      if (-newX >= carouselWidth) {
        newX = 0;
      }

      x.set(newX);
      carouselRef.current.scrollLeft = -newX;
    }
  });

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => new Set(prev).add(index));
  };

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  
  const next = () => {
    if (selectedIndex !== null) {
      setDirection(1);
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  const previous = () => {
    if (selectedIndex !== null) {
      setDirection(-1);
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <div 
      className={cn("relative w-screen -ml-[50vw] left-1/2 right-1/2", className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative overflow-hidden py-8">
        <div className="absolute left-4 sm:left-8 lg:left-12 top-1/2 -translate-y-1/2 z-10">
          <Button
            variant="outline"
            size="icon"
            className="bg-background/80 backdrop-blur-sm hover:bg-background/90"
            onClick={() => {
              if (carouselRef.current) {
                carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
              }
            }}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="absolute right-4 sm:right-8 lg:right-12 top-1/2 -translate-y-1/2 z-10">
          <Button
            variant="outline"
            size="icon"
            className="bg-background/80 backdrop-blur-sm hover:bg-background/90"
            onClick={() => {
              if (carouselRef.current) {
                carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
              }
            }}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div 
          ref={carouselRef}
          className="flex space-x-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {[...images, ...images].map((image, index) => (
            <motion.div
              key={`${image.src}-${index}`}
              className="relative flex-none w-[85vw] sm:w-[45vw] lg:w-[35vw] aspect-[16/9] group cursor-pointer first:ml-[2.5vw] last:mr-[2.5vw]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ 
                opacity: loadedImages.has(index % images.length) ? 1 : 0,
                scale: loadedImages.has(index % images.length) ? 1 : 0.9
              }}
              transition={{ duration: 0.3 }}
              onClick={() => openLightbox(index % images.length)}
            >
              <div className="relative w-full h-full transition-transform duration-300 group-hover:scale-[1.02]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover rounded-xl"
                  onLoad={() => handleImageLoad(index % images.length)}
                  sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 35vw"
                  priority={index === 0}
                />
                <motion.div 
                  className="absolute inset-0 rounded-xl overflow-hidden"
                  initial={false}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-medium px-4 py-2 bg-black/40 rounded-full backdrop-blur-sm">
                      View Image
                    </span>
                    {image.caption && (
                      <div className="absolute bottom-0 inset-x-0 p-4">
                        <p className="text-white text-sm text-center">
                          {image.caption}
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence initial={false} custom={direction}>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div className="absolute top-4 right-4 z-10">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20"
                onClick={closeLightbox}
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            <div className="absolute left-4 z-10">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20"
                onClick={(e) => {
                  e.stopPropagation();
                  previous();
                }}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
            </div>

            <div className="absolute right-4 z-10">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>

            <div 
              className="relative w-full max-w-7xl mx-auto overflow-hidden h-[90vh] flex items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence custom={direction} initial={false}>
                <motion.div
                  key={selectedIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);
                    if (swipe < -swipeConfidenceThreshold) {
                      next();
                    } else if (swipe > swipeConfidenceThreshold) {
                      previous();
                    }
                  }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="relative max-w-[95%] max-h-[90vh]">
                      <Image
                        src={images[selectedIndex].src}
                        alt={images[selectedIndex].alt}
                        width={2400}
                        height={1600}
                        className="rounded-lg object-contain w-auto h-auto max-h-[90vh]"
                        priority
                      />
                      {images[selectedIndex].caption && (
                        <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                          <p className="text-white text-center text-sm sm:text-base">
                            {images[selectedIndex].caption}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
