'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function LabPage() {
  const experiments = [
    {
      title: 'WebGL Experiments',
      description: 'Creative coding experiments with Three.js and WebGL',
      date: '2024',
    },
    {
      title: 'CSS Art',
      description: 'Pure CSS illustrations and animations',
      date: '2024',
    },
    {
      title: 'Interactive Typography',
      description: 'Exploring dynamic typography with JavaScript',
      date: '2024',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Lab</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A playground for experimental projects, creative coding, and design
            explorations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiments.map((experiment, index) => (
            <motion.div
              key={experiment.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                <CardHeader>
                  <CardTitle>{experiment.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <p className="text-muted-foreground mb-auto">
                    {experiment.description}
                  </p>
                  <p className="text-sm text-muted-foreground mt-4">
                    {experiment.date}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}