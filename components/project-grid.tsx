'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform built with Next.js and Stripe',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc',
    tags: ['Next.js', 'Stripe', 'Tailwind CSS'],
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Design System',
    description: 'A comprehensive design system for web applications',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8',
    tags: ['React', 'Storybook', 'TypeScript'],
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Analytics Dashboard',
    description: 'Real-time analytics dashboard with data visualization',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    tags: ['React', 'D3.js', 'WebSocket'],
    demoUrl: '#',
    githubUrl: '#',
  },
];

export function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Card className="group overflow-hidden">
            <CardHeader className="p-0">
              <AspectRatio ratio={16 / 9}>
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                />
              </AspectRatio>
            </CardHeader>
            <CardContent className="p-6">
              <CardTitle className="mb-2">{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter className="p-6 pt-0 flex justify-between">
              <Button variant="outline" size="sm" asChild>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  Demo
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="h-4 w-4" />
                  Code
                </a>
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}